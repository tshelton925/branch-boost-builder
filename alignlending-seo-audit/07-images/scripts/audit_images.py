#!/usr/bin/env python3
"""
Align Lending image audit + Media scorecard (07-images).

Reads the crawl (DATA/images.json, DATA/pages.jsonl, DATA/page_summary.csv) and, when
present, scripts/optimize_decisions.json written by optimize_images.py. Writes:
  image-inventory.csv        one row per unique image with issue codes and the planned action
  media-scores-by-page.csv   one row per live page: LCP element, checks, Media score now / after fixes
  scripts/audit_stats.json   aggregates used by image-optimization-report.md

Usage: python3 -I audit_images.py --data "$DATA" --out ../   (run after optimize_images.py)
"""
import argparse, csv, collections, json, os, re, statistics

SITE = "https://alignlending.com"
HOME_HERO = f"{SITE}/wp-content/uploads/2026/08/align-lending-michigan-home-hero.webp"
HOME_HERO_BYTES = 218244  # content-length of the live file, fetched 2026-11-15

# CSS display widths (desktop max, CSS px) taken from the templates' inline CSS.
DISPLAY = {
    "hero": 1380,         # .adp-hero: <=1240 px container, min-height 620-780, object-fit:cover -> ~1380 px rendered
    "hero-learn": 1160,   # sizes="(max-width: 1240px) 94vw, 1160px"
    "learn-card": 330,    # sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 330px"
    "Samantha-202x300.jpg": 52,
    "align-plan-porch.webp": 132, "align-plan-colonial.webp": 116, "align-plan-ranch.webp": 116, "align-plan-movein.webp": 132,
    "Samantha4-683x1024.jpg": 400, "Samantha-768x1139.jpg": 530, "Samantha-691x1024.jpg": 530,
    "rsw_600h_600cg_true.webp": 600, "avatar.webp": 96, "align-lending-logo-400.webp": 300,
    "equal-housing-opportunity-logo-100-w.png": 100,
    "your-michigan-homebuyer-guide-cover-160.webp": 104, "refinancing-and-home-equity-in-michigan-cover-160.webp": 104,
}
NON_DESCRIPTIVE = {
    "rsw_600h_600cg_true.webp": "samantha-shelton-broker-owner-portrait.webp",
    "Samantha-202x300.jpg": "samantha-shelton-headshot-104.webp",
    "Samantha4-683x1024.jpg": "samantha-shelton-align-lending-office.webp",
    "Samantha-768x1139.jpg": "samantha-shelton-portrait.webp",
    "Samantha-691x1024.jpg": "samantha-shelton-portrait.webp",
    "equal-housing-opportunity-logo-100-w.png": "equal-housing-opportunity-logo.png",
    "align-plan-porch.webp": "homebuyer-plan-family-front-porch.webp",
    "align-plan-colonial.webp": "homebuyer-plan-white-colonial-house.webp",
    "align-plan-ranch.webp": "homebuyer-plan-brick-ranch-house.webp",
    "align-plan-movein.webp": "homebuyer-plan-moving-day.webp",
}
NEAR_DUPES = [("align-hero-borrowsmart-access.webp", "align-hero-research-mortgage-market.webp"),
              ("Samantha-202x300.jpg", "Samantha-691x1024.jpg"), ("Samantha-202x300.jpg", "Samantha-768x1139.jpg")]


def category(src):
    n = src.rsplit("/", 1)[-1]
    if "/align-hero-city-" in src: return "hero-city"
    if "/align-hero-" in src: return "hero-page"
    if "/uploads/learn/" in src: return "hero-learn"
    if "/uploads/learn-card/" in src: return "learn-card"
    if n.lower().startswith("samantha") or n.startswith("rsw_") or n == "avatar.webp": return "headshot"
    if "logo" in n: return "logo"
    return "content"


def grade(s):
    return "A" if s >= 90 else "B" if s >= 80 else "C" if s >= 70 else "D" if s >= 60 else "F"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--out", required=True)
    a = ap.parse_args()
    D, OUT = os.path.abspath(a.data), os.path.abspath(a.out)
    imgs = json.load(open(os.path.join(D, "images.json")))
    by_src = {i["src"]: i for i in imgs}
    types = {r["url"]: r["type"] for r in csv.DictReader(open(os.path.join(D, "page_summary.csv")))}

    dec_path = os.path.join(OUT, "scripts", "optimize_decisions.json")
    dec = json.load(open(dec_path)) if os.path.exists(dec_path) else {"rows": []}
    primary = {}   # src -> (old, new, action, optimized_file)
    variants = collections.defaultdict(dict)
    og_files = {}
    for r in dec["rows"]:
        if r["role"] in ("primary", "kept", "consolidate") and isinstance(r["old_bytes"], int):
            primary[r["original_url"]] = (r["old_bytes"], r["new_bytes"] if isinstance(r["new_bytes"], int) else r["old_bytes"],
                                          r["role"], r["optimized_file"], r["new_px"])
        elif r["role"].startswith("variant-") and r["role"] != "variant-2x":
            variants[r["original_url"]][int(r["role"].split("-")[1])] = r["new_bytes"]
        elif r["role"] == "og":
            og_files[r["original_url"]] = r["optimized_file"]

    # ---------------------------------------------------------------- per-page pass
    occ = collections.defaultdict(lambda: collections.Counter())
    page_rows = []
    lazy_atf_by = collections.Counter()
    fp_misuse = []
    with open(os.path.join(D, "pages.jsonl")) as f:
        for line in f:
            p = json.loads(line)
            if p["status"] != 200 or p["url"] != p["final_url"]:
                continue  # 96 legacy root posts 301 to /learn/
            url = p["url"]
            t = types.get(url, "other")
            ims = p["images"]
            for im in ims:
                c = occ[im["src"]]
                c["n"] += 1
                c["srcset_" + str(bool(im["srcset"]))] += 1
                c["loading_" + str(im["loading"])] += 1
                if im.get("fetchpriority") == "high": c["fp_high"] += 1
                if im["w"] and im["h"]: c[f"decl_{im['w']}x{im['h']}"] += 1
            content = [im for im in ims if im["region"] == "content"]
            atf = [im for im in content if im["atf"]]
            lcp = None
            for im in atf:
                if im.get("fetchpriority") == "high" or (im["w"] and int(im["w"]) >= 600):
                    lcp = im; break
            kind = "img" if lcp else "text"
            if url == SITE + "/":
                kind = "css-bg"
            lcp_src = HOME_HERO if kind == "css-bg" else (lcp["src"] if lcp else "")
            lcp_bytes = HOME_HERO_BYTES if kind == "css-bg" else (by_src[lcp_src]["bytes"] if lcp else 0)
            lcp_px = "1536x1024" if kind == "css-bg" else (f"{by_src[lcp_src]['px_w']}x{by_src[lcp_src]['px_h']}" if lcp else "")
            lazy_atf = [im for im in atf if im["loading"] == "lazy" and im is not lcp]
            for im in lazy_atf:
                lazy_atf_by[(t, im["src"].rsplit("/", 1)[-1])] += 1
            fp_other = [im for im in content if im.get("fetchpriority") == "high" and im is not lcp]
            if kind == "css-bg":
                fp_other = [im for im in content if im.get("fetchpriority") == "high"]
            if fp_other:
                fp_misuse.append((url, [im["src"].rsplit("/", 1)[-1] for im in fp_other]))
            jpeg = [im for im in content if im["src"].lower().endswith((".jpg", ".jpeg", ".png"))]
            small_over = [im for im in content if im["src"].rsplit("/", 1)[-1] in ("Samantha-202x300.jpg", "align-plan-porch.webp",
                          "align-plan-colonial.webp", "align-plan-ranch.webp", "align-plan-movein.webp")]
            cards = [im for im in content if "/learn-card/" in im["src"] and im["srcset"]]
            nodims = [im for im in ims if not (im["w"] and im["h"])]
            og = p.get("og_image") or ""
            ogi = by_src.get(og)
            if not og: og_kind = "missing"
            elif "1200x630" in og: og_kind = "1200x630-jpg"
            elif ogi and ogi["px_h"] > ogi["px_w"]: og_kind = "portrait"
            elif og.endswith(".png"): og_kind = "png-chart"
            elif ogi and ogi["format"] == "WEBP": og_kind = "landscape-webp"
            else: og_kind = "other"
            # unique bytes on page and saveable bytes
            uniq = {im["src"] for im in ims}
            if kind == "css-bg": uniq.add(HOME_HERO)
            pb = sum((by_src[s]["bytes"] if s in by_src else HOME_HERO_BYTES) for s in uniq)
            pa = sum(primary.get(s, (0, by_src[s]["bytes"] if s in by_src else HOME_HERO_BYTES))[1] for s in uniq)
            lcp_after = primary.get(lcp_src, (lcp_bytes, lcp_bytes))[1] if lcp_src else 0
            lcp_768 = variants.get(lcp_src, {}).get(768, "")

            def score(after=False):
                """Deductions calibrated to scoring-rubric.md 3.10 anchors (hero <= 150 KB, inline <= 80 KB,
                LCP not lazy and preloaded/high priority, served near display size, width/height, alt).
                og:image is reported separately and is not part of the Media score."""
                d = []
                if kind != "text":
                    if not after:
                        if kind == "img" and lcp["loading"] == "lazy": d.append(("LCP image lazy-loaded", 25))
                        if kind == "css-bg": d.append(("LCP is an Elementor CSS background: not preloaded, no fetchpriority, discovered after CSS, Motion Effects layer", 15))
                        if kind == "img" and lcp.get("fetchpriority") != "high": d.append(("LCP lacks fetchpriority=high and no preload", 8))
                        if (kind == "img" and not lcp["srcset"]) or kind == "css-bg": d.append(("LCP has no srcset/sizes: phones download the desktop file", 6))
                        if kind == "img" and lcp["srcset"] and "align-hero" in lcp_src: d.append(("hero sizes=100vw on a <=1240px container", 1))
                        if kind == "img" and "/uploads/learn/" in lcp_src and by_src[lcp_src]["px_w"] != 1600: d.append(("srcset says 1600w but file is %dpx" % by_src[lcp_src]["px_w"], 2))
                        w = by_src[lcp_src]["px_w"] if lcp_src in by_src else 1536
                        if w > 1600: d.append(("LCP file %dpx wide for a <=1380px slot" % w, 3))
                        if lcp is not None and lcp["alt"] == "" and "align-hero" in lcp_src: d.append(("hero photo has empty alt (alt text owned by the alt-text agent)", 3))
                    b = lcp_after if after else lcp_bytes
                    if b > 500_000: d.append(("LCP %d KB (>500 KB)" % (b // 1000), 25))
                    elif b > 200_000: d.append(("LCP %d KB (>200 KB; target <=150 KB)" % (b // 1000), 10))
                    elif b > 150_000: d.append(("LCP %d KB (150-200 KB; target <=150 KB)" % (b // 1000), 6))
                if not after:
                    if fp_other: d.append(("fetchpriority=high on a non-LCP image", 3))
                    if lazy_atf: d.append(("%d above-the-fold image(s) lazy-loaded" % len(lazy_atf), 5))
                    if cards: d.append(("related-card srcset offers the 1600w hero to phones", 3))
                    if small_over: d.append(("small images >=2.4x their display size", 2))
                    if jpeg: d.append(("JPEG/PNG photo on page", 3))
                    if nodims: d.append(("image(s) without width/height", 10))
                    sv = 1 - pa / pb if pb else 0
                    if sv >= 0.5: d.append(("%.0f%% of page image bytes saveable" % (sv * 100), 6))
                    elif sv >= 0.3: d.append(("%.0f%% of page image bytes saveable" % (sv * 100), 4))
                return max(0, 100 - sum(x for _, x in d)), d

            s_now, d_now = score()
            s_after, d_after = score(True)
            page_rows.append(dict(url=url, type=t, lcp_kind=kind, lcp_src=lcp_src.replace(SITE, ""), lcp_px=lcp_px, lcp_bytes=lcp_bytes,
                                  lcp_bytes_after_1600=lcp_after, lcp_bytes_after_768=lcp_768,
                                  lcp_fetchpriority=(lcp.get("fetchpriority") if lcp else ("n/a" if kind == "text" else "none (CSS bg)")),
                                  lcp_loading=(lcp["loading"] if lcp else ""), lcp_srcset=(lcp["srcset"] if lcp else ""),
                                  atf_lazy=";".join(im["src"].rsplit("/", 1)[-1] for im in lazy_atf), related_cards=len(cards),
                                  og_image=og.replace(SITE, ""), og_kind=og_kind,
                                  page_img_bytes=pb, page_img_bytes_after=pa, media_score=s_now, media_grade=grade(s_now),
                                  media_score_after=s_after, media_grade_after=grade(s_after),
                                  deductions="; ".join(f"-{x} {m}" for m, x in d_now)))

    # ---------------------------------------------------------------- per-image inventory
    inv = []
    for i in imgs:
        src, n = i["src"], i["src"].rsplit("/", 1)[-1]
        cat = category(src)
        c = occ.get(src, collections.Counter())
        issues = []
        disp = DISPLAY.get(n) or (DISPLAY["hero"] if cat in ("hero-city", "hero-page") else DISPLAY.get(cat))
        if cat.startswith("hero"):
            if i["px_w"] > 1600: issues.append(f"oversized-px:{i['px_w']}w>1600w-needed")
            if i["bytes"] > 120_000: issues.append(f"heavy:{i['bytes']//1000}KB>120KB-hero-target")
            if cat == "hero-learn":
                if i["px_w"] != 1600: issues.append(f"srcset-descriptor-mismatch:declared-1600w-actual-{i['px_w']}w")
                issues.append("offered-to-related-cards-as-1600w")
            if cat == "hero-page" and c["srcset_False"]: issues.append(f"no-srcset:{c['srcset_False']}-of-{c['n']}-uses")
            if cat == "hero-city": issues.append("sizes-100vw-on-1240px-container")
            decl = [k for k in c if k.startswith("decl_")]
            if decl:
                dw, dh = map(int, decl[0][5:].split("x"))
                if abs(dw / dh - i["px_w"] / i["px_h"]) > 0.01: issues.append(f"wh-attrs-{dw}x{dh}-vs-file-{i['px_w']}x{i['px_h']}(harmless:object-fit)")
            if re.search(r"-v\d+\.", n): issues.append("version-suffix-in-filename")
        else:
            if disp and i["px_w"] > 2.4 * disp: issues.append(f"oversized-px:{i['px_w']}w-for-{disp}px-display")
            lim = 30_000 if cat in ("learn-card",) else 10_000 if cat == "logo" else 100_000
            if i["bytes"] > lim: issues.append(f"heavy:{i['bytes']//1000}KB>{lim//1000}KB")
        if i["format"] in ("JPEG",): issues.append("legacy-format:jpeg-photo")
        if i["format"] == "PNG": issues.append("png-graphic(palette-or-svg)")
        if i["lazy_atf"]: issues.append(f"lazy-above-fold:{i['lazy_atf']}")
        if n in NON_DESCRIPTIVE: issues.append("non-descriptive-filename")
        if n == "align-lending-logo-400.webp": issues += ["raster-logo(no-svg)", "upscaled-in-popup:734px-declared-from-400px-file"]
        if n == "align-plan-porch.webp": issues.append("fetchpriority-high-on-non-lcp-image(home)")
        for x, y in NEAR_DUPES:
            if n in (x, y): issues.append("near-duplicate-of:" + (y if n == x else x))
        if i["missing_alt_occurrences"] and cat not in ("learn-card",):
            issues.append(f"empty-alt:{i['missing_alt_occurrences']}(alt-text-agent)")
        pr = primary.get(src)
        action = {"primary": "replace", "kept": "keep", "consolidate": "consolidate"}.get(pr[2], "keep") if pr else "keep"
        inv.append(dict(src=src, bytes=i["bytes"], px=f"{i['px_w']}x{i['px_h']}", format=i["format"], occurrences=i["occurrences"],
                        pages=i["pages"], atf=i["atf_occurrences"], lazy_atf=i["lazy_atf"], issues=";".join(issues), category=cat,
                        declared_sizes=";".join(f"{a}({b})" for a, b in i["declared_sizes"][:3]), display_css_px=disp or "",
                        regions=";".join(f"{k}:{v}" for k, v in i["regions"].items()),
                        srcset_uses=f"{c['srcset_True']}/{c['n']}" if c else "", action=action,
                        optimized_bytes=pr[1] if pr else "", savings_pct=(f"{(1 - pr[1] / pr[0]) * 100:.1f}" if pr and pr[0] else ""),
                        optimized_file=pr[3] if pr else "", suggested_filename=NON_DESCRIPTIVE.get(n, "")))
    # extras not in images.json
    pr = primary.get(HOME_HERO)
    inv.append(dict(src=HOME_HERO, bytes=HOME_HERO_BYTES, px="1536x1024", format="WEBP", occurrences=1, pages=1, atf=1, lazy_atf=0,
                    issues="css-background-lcp(Elementor container b2395be + Motion Effects scrolling);no-srcset;background-attachment-fixed;not-in-crawl-image-list;heavy:218KB>120KB-hero-target",
                    category="hero-home", declared_sizes="css background-size:cover", display_css_px="full-bleed", regions="content:1",
                    srcset_uses="0/1", action="replace" if pr and pr[2] == "primary" else "keep", optimized_bytes=pr[1] if pr else "",
                    savings_pct=(f"{(1 - pr[1] / pr[0]) * 100:.1f}" if pr else ""), optimized_file=pr[3] if pr else "", suggested_filename=""))
    inv.append(dict(src=f"{SITE}/wp-content/uploads/2024/10/cropped-Align-Lending-FF-01-2-32x32.jpg", bytes="", px="32/180/192/512", format="JPEG",
                    occurrences=835, pages=835, atf=0, lazy_atf=0,
                    issues="favicon-is-jpeg;mark-touches-canvas-edge;stray-wordmark-fragment-at-right-edge;/favicon.ico-404;non-descriptive-filename",
                    category="favicon", declared_sizes="32x32;192x192;180x180", display_css_px="16-48", regions="head", srcset_uses="",
                    action="replace", optimized_bytes="", savings_pct="", optimized_file="optimized/brand/align-lending-site-icon-512.png",
                    suggested_filename="align-lending-site-icon-512.png"))
    cols = ["src", "bytes", "px", "format", "occurrences", "pages", "atf", "lazy_atf", "issues", "category", "declared_sizes", "display_css_px",
            "regions", "srcset_uses", "action", "optimized_bytes", "savings_pct", "optimized_file", "suggested_filename"]
    with open(os.path.join(OUT, "image-inventory.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols); w.writeheader()
        for r in sorted(inv, key=lambda r: (-(r["bytes"] or 0) * (r["occurrences"] or 1))):
            w.writerow(r)
    pcols = list(page_rows[0].keys())
    with open(os.path.join(OUT, "media-scores-by-page.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=pcols); w.writeheader()
        for r in sorted(page_rows, key=lambda r: (r["type"], r["url"])):
            w.writerow(r)

    # ---------------------------------------------------------------- og:image map (implementation table)
    trust = ("/about-us/", "/samantha-shelton/", "/reviews/", "/press/", "/contact-us/", "/licensing/", "/editorial-policy/")
    with open(os.path.join(OUT, "og-image-map.csv"), "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["url", "type", "current_og_image", "current_kind", "recommended_og_file", "recommended_og_url_after_upload", "priority", "reason"])
        for r in sorted(page_rows, key=lambda r: (r["type"], r["url"])):
            k, lcp_full = r["og_kind"], (SITE + r["lcp_src"]) if r["lcp_src"].startswith("/") else r["lcp_src"]
            if k == "1200x630-jpg":
                rec, url2, pr, why = "keep", r["og_image"], "-", "Already a 1200x630 JPG share card."
            elif lcp_full in og_files:
                fn = og_files[lcp_full]
                rec, url2 = fn, "/wp-content/uploads/2026/11/" + os.path.basename(fn)
                pr = "P1" if r["type"] not in ("city",) else "P2"
                why = ("Current og is a portrait headshot that crops to her torso at 1.91:1; use the page's own hero cropped to 1200x630." if k == "portrait"
                       else "Current og is the %s hero WebP (%s); a 1200x630 JPG renders on every share target and matches og:image:width/height." % (r["lcp_px"], k))
            elif k == "portrait":
                share = "align-share-samantha-shelton-1200x630-1.jpg" if any(r["url"].endswith(t) for t in trust) else "align-share-home-1200x630-1.jpg"
                rec, url2, pr = "existing:" + share, "/wp-content/uploads/2026/10/" + share, "P1"
                why = "Page has no hero photo and uses the 683x1024 portrait; reuse the existing 1200x630 share card."
            elif r["type"] == "learn":
                rec, url2, pr = "keep (P2)", r["og_image"], "P2"
                why = "16:9 WebP hero works on Google/Facebook/X; build JPG cards later with optimize_images.py --og all if LinkedIn shares matter."
            elif k == "png-chart":
                rec, url2, pr, why = "keep", r["og_image"], "P2", "Research chart PNG: confirm it is 1200x630 or larger; charts are good share images."
            else:
                rec, url2, pr = "keep (P2)", r["og_image"], "P2"
                why = "City hero WebP; generate city cards with optimize_images.py --og all when convenient."
            w.writerow([r["url"], r["type"], r["og_image"], k, rec, url2, pr, why])

    # ---------------------------------------------------------------- aggregates
    st = {}
    bt = collections.defaultdict(list)
    for r in page_rows: bt[r["type"]].append(r)
    st["by_type"] = {}
    for t, rs in sorted(bt.items(), key=lambda kv: -len(kv[1])):
        lb = [r["lcp_bytes"] for r in rs if r["lcp_bytes"]]
        la = [r["lcp_bytes_after_1600"] for r in rs if r["lcp_bytes_after_1600"]]
        l7 = [r["lcp_bytes_after_768"] for r in rs if isinstance(r["lcp_bytes_after_768"], int)]
        top = collections.Counter()
        for r in rs:
            for part in r["deductions"].split("; "):
                if part: top[re.sub(r"\d+ KB|\d+%|\d+px|\d+ above", "#", part)] += 1
        st["by_type"][t] = dict(pages=len(rs), score=round(statistics.mean(r["media_score"] for r in rs), 1),
                                score_after=round(statistics.mean(r["media_score_after"] for r in rs), 1),
                                lcp_kinds=dict(collections.Counter(r["lcp_kind"] for r in rs)),
                                lcp_avg_kb=round(statistics.mean(lb) / 1000, 1) if lb else None,
                                lcp_max_kb=round(max(lb) / 1000, 1) if lb else None,
                                lcp_after_avg_kb=round(statistics.mean(la) / 1000, 1) if la else None,
                                lcp_768_avg_kb=round(statistics.mean(l7) / 1000, 1) if l7 else None,
                                atf_lazy_pages=sum(1 for r in rs if r["atf_lazy"]),
                                og=dict(collections.Counter(r["og_kind"] for r in rs)),
                                page_img_kb=round(statistics.mean(r["page_img_bytes"] for r in rs) / 1000, 1),
                                page_img_after_kb=round(statistics.mean(r["page_img_bytes_after"] for r in rs) / 1000, 1),
                                top_deductions=top.most_common(6))
    st["sitewide_score"] = round(statistics.mean(r["media_score"] for r in page_rows), 1)
    st["sitewide_score_after"] = round(statistics.mean(r["media_score_after"] for r in page_rows), 1)
    st["template_mean_score"] = round(statistics.mean(v["score"] for v in st["by_type"].values()), 1)
    st["template_mean_score_after"] = round(statistics.mean(v["score_after"] for v in st["by_type"].values()), 1)
    money = ["home", "purchase", "purchase_sub", "refinance", "refinance_sub", "product_hub", "product"]
    st["money_page_score"] = round(statistics.mean(v["score"] for k, v in st["by_type"].items() if k in money), 1)
    st["money_page_score_after"] = round(statistics.mean(v["score_after"] for k, v in st["by_type"].items() if k in money), 1)
    st["pages"] = len(page_rows)
    st["lazy_atf_by_type_image"] = {f"{k[0]}|{k[1]}": v for k, v in lazy_atf_by.most_common()}
    st["fetchpriority_misuse"] = fp_misuse[:20]
    fmt = collections.Counter(i["format"] for i in imgs)
    st["format_mix"] = dict(fmt)
    st["bytes_total_mb"] = round(sum(i["bytes"] for i in imgs) / 1e6, 2)
    cats = collections.defaultdict(list)
    for r in inv:
        if isinstance(r["bytes"], int): cats[r["category"]].append(r)
    st["by_category"] = {}
    for k, rs in cats.items():
        b = [r["bytes"] for r in rs]
        ob = [r["optimized_bytes"] if isinstance(r["optimized_bytes"], int) else r["bytes"] for r in rs]
        st["by_category"][k] = dict(n=len(rs), mb=round(sum(b) / 1e6, 2), avg_kb=round(statistics.mean(b) / 1000, 1),
                                    median_kb=round(statistics.median(b) / 1000, 1), max_kb=round(max(b) / 1000, 1),
                                    after_mb=round(sum(ob) / 1e6, 2), replaced=sum(1 for r in rs if r["action"] == "replace"),
                                    over_120kb=sum(1 for x in b if x > 120_000), over_200kb=sum(1 for x in b if x > 200_000),
                                    px=dict(collections.Counter(r["px"] for r in rs).most_common(4)))
    allb = sorted(i["bytes"] for i in imgs)
    q = lambda p: allb[int(p * (len(allb) - 1))]
    st["bytes_quantiles_kb"] = {k: round(q(v) / 1000, 1) for k, v in dict(p10=.1, p25=.25, p50=.5, p75=.75, p90=.9, p99=.99).items()}
    st["bytes_buckets"] = dict(collections.Counter(("<25KB" if b < 25e3 else "25-50KB" if b < 50e3 else "50-100KB" if b < 1e5 else
                                                    "100-150KB" if b < 1.5e5 else "150-200KB" if b < 2e5 else ">=200KB") for b in allb))
    st["lazy_atf_total"] = sum(i["lazy_atf"] for i in imgs)
    st["no_dims_total"] = sum(i["no_dims"] for i in imgs)
    st["empty_alt_occurrences"] = sum(i["missing_alt_occurrences"] for i in imgs)
    st["card_pages_by_type"] = dict(collections.Counter(r["type"] for r in page_rows if r["related_cards"]))
    with open(os.path.join(OUT, "scripts", "audit_stats.json"), "w") as f:
        json.dump(st, f, indent=1, default=str)
    print(json.dumps({k: v for k, v in st.items() if k in ("sitewide_score", "sitewide_score_after", "template_mean_score", "template_mean_score_after", "money_page_score", "money_page_score_after", "pages")}, indent=1))
    for t, v in st["by_type"].items():
        print(f"{t:14s} n={v['pages']:3d} now={v['score']:5.1f} after={v['score_after']:5.1f} lcp={v['lcp_avg_kb']} -> {v['lcp_after_avg_kb']} / 768: {v['lcp_768_avg_kb']}  lazyATF={v['atf_lazy_pages']} og={v['og']}")


if __name__ == "__main__":
    main()
