#!/usr/bin/env python3
"""
Align Lending image optimizer (07-images, part 1 of 2: performance, format, sizing).

Reads the crawl inventory (DATA/images.json + DATA/img_raw/) and writes optimized
replacement files plus a manifest. Nothing here touches the live site.

Rules (from the project brief):
  * Heroes (city, product/core page, home, learn article heroes):
      WebP 1600 px wide (never upscaled), metadata stripped, quality searched
      78 -> 76 -> 74 -> 72 until the file is <= 120 KB (the lowest q is kept if
      the target cannot be met). Responsive variants at 1200 and 768 px go in
      optimized/responsive/. If the whole output exceeds BUDGET_MB, the 1200 px
      variants are pruned (keep 1600 + 768), as the brief requires.
  * Content images: WebP at min(source, max(display x2, ...)) per a display map,
      q 75-80, <= 100 KB target. Headshots at 2x their CSS display size.
  * JPG/PNG photos -> WebP. PNG kept only for transparent graphics when smaller.
  * A primary replacement is written only when it saves >= 20 % or the current
      file has the wrong format or the wrong pixel size.
  * og:image share cards: 1200x630 progressive JPG cropped from the page hero.

Usage (run from any directory that is NOT img_raw; -I keeps cwd off sys.path):
  python3 -I optimize_images.py --data "$DATA" --extra "$EXTRA" --out ../ [--workers 4]
     --data   folder holding images.json and img_raw/
     --extra  folder holding fetched extras: bg/align-lending-michigan-home-hero.webp,
              favicon/site-icon-512.jpg (both downloaded once from the live site)
     --out    the 07-images folder (optimized/ and optimized-manifest.csv go here)
     --variants 1200,768   responsive widths for city/page/home heroes (default 1200,768)
     --learn-variants 1200 responsive widths for learn heroes (default 1200: the live learn
                           template already serves learn-card/ 640w and learn-960/ 960w files,
                           so the missing step is 1200w; pass 1200,768 to also build 768w)
     --og pages|all|none   og cards for non-city heroes plus city heroes reused on county hubs
                           (default), all heroes, or none
     --budget-mb 150       prune 1200 px city/page variants (then learn 1200) if the output
                           is larger than this, per the brief (keep 1600w + 768w)
     --denoise-heavy       optional 3x3 median for heroes still >150 KB at q72 (off by default;
                           ~25 % smaller, slight softening at 100 % zoom)
"""
import argparse, csv, io, json, os, re, sys, shutil
from concurrent.futures import ProcessPoolExecutor
from PIL import Image, ImageCms, ImageFilter, ImageOps

HERO_W = 1600
HERO_TARGET = 120_000
CONTENT_TARGET = 100_000
HERO_QS = (78, 76, 74, 72)
MIN_SAVING = 0.20
OG_W, OG_H = 1200, 630
SITE = "https://alignlending.com"

# Known CSS display sizes (desktop max, CSS px) measured from the live templates'
# inline CSS (see image-optimization-report.md, section "How display sizes were measured").
MISC = {
    # filename: dict(kind, out_name, op, ...)
    "Samantha-202x300.jpg": dict(kind="headshot", op="square_from", src_hint="Samantha-768x1139.jpg",
        sizes=(104, 168), out="samantha-shelton-headshot-{s}.webp", display="52x52 circle (.adp-person img); 84x84 on research pages",
        attrs='width="52" height="52" (hero card) / width="84" height="84" (research byline)'),
    "Samantha-768x1139.jpg": dict(kind="headshot", op="webp_same", q=78, out="samantha-shelton-portrait.webp",
        display="~530x680 (.adp-feature__media img, home)", attrs='width="768" height="1139"'),
    "Samantha-691x1024.jpg": dict(kind="headshot", op="alias", alias_of="Samantha-768x1139.jpg",
        out="samantha-shelton-portrait.webp", display="feature media (/reviews/)", attrs='width="768" height="1139"'),
    "Samantha4-683x1024.jpg": dict(kind="headshot", op="webp_same", q=78, out="samantha-shelton-align-lending-office.webp",
        display="400x500 (.adp-hero__portrait img, aspect 4/5) and feature media", attrs='width="683" height="1024"'),
    "rsw_600h_600cg_true.webp": dict(kind="headshot", op="webp_same", q=78, out="samantha-shelton-broker-owner-portrait.webp",
        display="600x600 (/samantha-shelton/)", attrs='width="600" height="600"'),
    "avatar.webp": dict(kind="avatar", op="webp_same", q=78, out="avatar.webp",
        display="96x96 floating bar; 28-44 px in content", attrs='width="96" height="96"'),
    "align-lending-logo-400.webp": dict(kind="logo", op="logo", out="align-lending-logo-400.webp",
        display="300x139 header; popup declares 734x340 (upscaled)", attrs='width="300" height="139"'),
    "equal-housing-opportunity-logo-100-w.png": dict(kind="logo", op="graphic", out="equal-housing-opportunity-logo.{ext}",
        display="100x96 footer", attrs='width="100" height="96"'),
    "align-plan-porch.webp": dict(kind="content", op="resize_w", w=264, q=75, out="homebuyer-plan-family-front-porch.webp",
        display="max 132 px wide (.ahb-ph)", attrs='width="264" height="393"'),
    "align-plan-colonial.webp": dict(kind="content", op="resize_w", w=264, q=75, out="homebuyer-plan-white-colonial-house.webp",
        display="max 116 px wide (.ahb-ph--2)", attrs='width="264" height="393"'),
    "align-plan-ranch.webp": dict(kind="content", op="resize_w", w=264, q=75, out="homebuyer-plan-brick-ranch-house.webp",
        display="max 116 px wide (.ahb-ph--3)", attrs='width="264" height="393"'),
    "align-plan-movein.webp": dict(kind="content", op="resize_w", w=264, q=75, out="homebuyer-plan-moving-day.webp",
        display="max 132 px wide (.ahb-ph--4)", attrs='width="264" height="393"'),
    "your-michigan-homebuyer-guide-cover-160.webp": dict(kind="content", op="webp_same", q=78, out="your-michigan-homebuyer-guide-cover-160.webp",
        display="104x135", attrs='width="104" height="135"'),
    "refinancing-and-home-equity-in-michigan-cover-160.webp": dict(kind="content", op="webp_same", q=78, out="refinancing-and-home-equity-in-michigan-cover-160.webp",
        display="104x135", attrs='width="104" height="135"'),
}


def to_srgb(im):
    """Convert embedded non-sRGB ICC profiles to sRGB, then drop the profile."""
    icc = im.info.get("icc_profile")
    if icc:
        try:
            src = ImageCms.ImageCmsProfile(io.BytesIO(icc))
            dst = ImageCms.createProfile("sRGB")
            im = ImageCms.profileToProfile(im, src, dst, outputMode=im.mode if im.mode in ("RGB", "RGBA") else "RGB")
        except Exception:
            pass
    im.info.pop("icc_profile", None)
    return im


def load(path):
    im = Image.open(path)
    im = ImageOps.exif_transpose(im)
    im = to_srgb(im)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.getbands() or im.mode == "P" else "RGB")
    return im


def webp_bytes(im, q, lossless=False):
    b = io.BytesIO()
    if lossless:
        im.save(b, "WEBP", lossless=True, quality=100, method=6)
    else:
        im.save(b, "WEBP", quality=q, method=6)  # no exif/icc/xmp passed -> metadata stripped
    return b.getvalue()


def jpeg_bytes(im, q):
    b = io.BytesIO()
    im.convert("RGB").save(b, "JPEG", quality=q, optimize=True, progressive=True, subsampling=2)
    return b.getvalue()


def resize_w(im, w):
    if im.width <= w:
        return im
    h = round(im.height * w / im.width)
    return im.resize((w, h), Image.LANCZOS, reducing_gap=3.0)


def overlay_soften(im, stop=0.50, feather=0.12, radius=2.0):
    """Home hero only: the template paints rgba(6,15,26,.80-.84) over the top 52-64 % of this
    background, so detail there is invisible. Blur that band (feathered) so the encoder spends
    its bits on the visible lower part of the photo."""
    W, H = im.size
    col = Image.new("L", (1, H))
    for y in range(H):
        t = y / H
        a = 255 if t < stop else (0 if t > stop + feather else int(255 * (1 - (t - stop) / feather)))
        col.putpixel((0, y), a)
    return Image.composite(im.filter(ImageFilter.GaussianBlur(radius)), im, col.resize((W, H)))


def q_search(im, target, qs=HERO_QS):
    data = None
    for q in qs:
        data = webp_bytes(im, q)
        if len(data) <= target:
            return q, data, True
    return qs[-1], data, False


def classify(src):
    name = src.rsplit("/", 1)[-1]
    if "/align-hero-city-" in src:
        return "hero-city"
    if "/align-hero-" in src:
        return "hero-page"
    if "/uploads/learn/" in src:
        return "hero-learn"
    if "/uploads/learn-card/" in src:
        return "learn-card"
    if name in MISC:
        return MISC[name]["kind"]
    return "other"


def rel(path, out):
    return os.path.relpath(path, out)


def write(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "wb") as f:
        f.write(data)


def wp_dir(src):
    """/wp-content/uploads/2026/10/x.webp -> /wp-content/uploads/2026/10/"""
    p = src.replace(SITE, "")
    return p.rsplit("/", 1)[0] + "/"


def og_crop(im, anchor_y=0.6):
    """Crop to 1200:630 (1.905) keeping the hero's lower-centre focus, then resize."""
    target = OG_W / OG_H
    w, h = im.size
    if w / h > target:  # too wide -> crop width (centre)
        nw = round(h * target)
        x0 = (w - nw) // 2
        box = (x0, 0, x0 + nw, h)
    else:  # too tall -> crop height around anchor
        nh = round(w / target)
        y0 = round((h - nh) * anchor_y)
        box = (0, y0, w, y0 + nh)
    return im.crop(box).resize((OG_W, OG_H), Image.LANCZOS, reducing_gap=3.0)


def og_name(base):
    stem = base.rsplit(".", 1)[0]
    stem = stem.replace("align-hero-", "")
    stem = re.sub(r"-v\d+$", "", stem)
    return f"align-og-{stem}-1200x630.jpg"


def suggest_hero_name(name):
    """Keep the align-hero-* scheme; only drop meaningless -vN suffixes."""
    stem, ext = name.rsplit(".", 1)
    clean = re.sub(r"-v\d+$", "", stem)
    return f"{clean}.{ext}"


# --------------------------------------------------------------------------- workers
def job_hero(args):
    rec, path, out, variants, og = args
    if rec["kind"] == "hero-learn":
        variants = rec["learn_variants"]
    src = rec["src"]
    name = src.rsplit("/", 1)[-1]
    kind = rec["kind"]
    rows = []
    im = load(path).convert("RGB")
    old = rec["bytes"]
    extra_note = ""
    src_im = im  # unsoftened copy for the og card (shared images have no overlay)
    if kind == "hero-home":
        im = overlay_soften(im)
        extra_note = " Top half pre-softened (it sits under the template's 80-84% dark overlay); visible lower half untouched."
    big = resize_w(im, HERO_W)
    q, data, met = q_search(big, HERO_TARGET)
    if rec.get("denoise_heavy") and len(data) > 150_000:
        # optional (--denoise-heavy): grain-heavy AI images cannot reach 150 KB at q>=72; a 3x3 median
        # removes the grain (~25 % smaller) with slight softening at 100 % zoom. Off by default.
        med = big.filter(ImageFilter.MedianFilter(3))
        q2, d2, met2 = q_search(med, HERO_TARGET)
        if len(d2) < len(data):
            big, q, data, met = med, q2, d2, met2
            extra_note += " Denoised (3x3 median) because q72 alone stayed above 150 KB."
    wrong_size = im.width > HERO_W
    saving = 1 - len(data) / old
    folder = "learn" if kind == "hero-learn" else "heroes"
    new_name = name if kind in ("hero-city", "hero-learn") else suggest_hero_name(name)
    if kind == "hero-learn":
        note_primary = f"Overwrite /wp-content/uploads/learn/{name} via SFTP/hPanel File Manager (same URL; srcset 1600w descriptor becomes truthful). Purge LiteSpeed + Hostinger CDN."
    else:
        note_primary = (f"Replace in place: Media Library > Enable Media Replace > 'Just replace the file' (keeps {wp_dir(src)}{name}), "
                        f"or overwrite via SFTP. Purge LiteSpeed + Hostinger CDN.")
        if new_name != name:
            note_primary += f" Optional rename on next re-upload: {new_name} (drop meaningless version suffix)."
    if wrong_size or saving >= MIN_SAVING:
        p = os.path.join(out, "optimized", folder, name)
        write(p, data)
        rows.append(dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=new_name,
                         old_bytes=old, new_bytes=len(data), new_px=f"{big.width}x{big.height}",
                         recommended_width_height_attrs=f'width="{big.width}" height="{big.height}"',
                         upload_note=note_primary + extra_note + ("" if met else f" Note: {len(data)//1000} KB at q{q}; 120 KB target not reachable at q>=72 for this detailed image."),
                         role="primary", quality=q, target_met=met))
    else:
        rows.append(dict(original_url=src, optimized_file="", new_suggested_filename=new_name, old_bytes=old,
                         new_bytes=old, new_px=f"{im.width}x{im.height}", recommended_width_height_attrs=f'width="{im.width}" height="{im.height}"',
                         upload_note=(f"Keep current file: re-encode saved only {saving:.0%} (<20%)." + (" Grain-heavy image: WebP q72 cannot reach 150 KB without visible softening; re-export from the master file, or run with --denoise-heavy." if len(data) > 150_000 else "")),
                         role="kept", quality=q, target_met=len(data) <= HERO_TARGET))
    # responsive variants (always built: they are new srcset candidates)
    for w in variants:
        if w >= big.width:
            continue
        v = resize_w(big, w)
        vd = webp_bytes(v, q)
        stem, ext = name.rsplit(".", 1)
        if kind == "hero-learn":
            p = os.path.join(out, "optimized", "responsive", f"learn-{w}", name)
            note = f"New srcset candidate: upload to /wp-content/uploads/learn-{w}/{name} via SFTP; add '{SITE}/wp-content/uploads/learn-{w}/{name} {w}w' to the hero srcset."
        else:
            p = os.path.join(out, "optimized", "responsive", f"{stem}-{w}w.{ext}")
            note = f"New srcset candidate: upload via SFTP next to the original ({wp_dir(src)}{stem}-{w}w.{ext}); reference as '{w}w' in the hero srcset (see snippet 1)."
        write(p, vd)
        rows.append(dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=os.path.basename(p),
                         old_bytes=old, new_bytes=len(vd), new_px=f"{v.width}x{v.height}",
                         recommended_width_height_attrs=f"srcset descriptor {w}w", upload_note=note, role=f"variant-{w}", quality=q, target_met=True))
    # og card
    if og and kind in ("hero-page", "hero-city", "hero-home"):
        if kind != "hero-city" or og == "all" or rec.get("used_off_city"):
            c = og_crop(src_im)
            cd = jpeg_bytes(c, 80)
            on = og_name(name)
            p = os.path.join(out, "optimized", "og", on)
            write(p, cd)
            rows.append(dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=on, old_bytes="",
                             new_bytes=len(cd), new_px=f"{OG_W}x{OG_H}", recommended_width_height_attrs='og:image:width="1200" og:image:height="630"',
                             upload_note="Upload to Media Library (JPG keeps every share target happy), then set as the page's Rank Math > Social > Facebook image (or via the WP-CLI loop in the report).",
                             role="og", quality=80, target_met=True))
    return rows


def job_card(args):
    rec, path, out = args
    src = rec["src"]
    name = src.rsplit("/", 1)[-1]
    im = load(path).convert("RGB")
    old = rec["bytes"]
    best = None
    for q in (78, 76):
        d = webp_bytes(im, q)
        if best is None or len(d) < len(best[1]):
            best = (q, d)
        if 1 - len(d) / old >= MIN_SAVING:
            best = (q, d)
            break
    q, d = best
    saving = 1 - len(d) / old
    if saving >= MIN_SAVING:
        p = os.path.join(out, "optimized", "learn-card", name)
        write(p, d)
        return [dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=name, old_bytes=old, new_bytes=len(d),
                     new_px=f"{im.width}x{im.height}", recommended_width_height_attrs='width="640" height="360"',
                     upload_note=f"Overwrite /wp-content/uploads/learn-card/{name} via SFTP.", role="primary", quality=q, target_met=True)]
    return [dict(original_url=src, optimized_file="", new_suggested_filename=name, old_bytes=old, new_bytes=old,
                 new_px=f"{im.width}x{im.height}", recommended_width_height_attrs='width="640" height="360"',
                 upload_note=f"Keep: re-encode saved only {saving:.0%}. The real fix for cards is the srcset (drop the 1600w candidate).", role="kept", quality=q, target_met=True)]


def job_misc(args):
    rec, path, out, raw_dir = args
    src = rec["src"]
    name = src.rsplit("/", 1)[-1]
    spec = MISC[name]
    old = rec["bytes"]
    rows = []
    op = spec["op"]
    hd = os.path.join(out, "optimized", "headshots" if spec["kind"] in ("headshot", "avatar") else ("brand" if spec["kind"] == "logo" else "misc"))
    if op == "square_from":
        hint = [f for f in os.listdir(raw_dir) if f.endswith(spec["src_hint"])][0]
        im = load(os.path.join(raw_dir, hint)).convert("RGB")
        side = im.width
        y0 = round((im.height - side) * 0.12)  # matches CSS object-position: 50% 12%
        sq = im.crop((0, y0, side, y0 + side))
        for s in spec["sizes"]:
            v = sq.resize((s, s), Image.LANCZOS)
            d = webp_bytes(v, 80)
            on = spec["out"].format(s=s)
            p = os.path.join(hd, on)
            write(p, d)
            rows.append(dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=on, old_bytes=old if s == spec["sizes"][0] else "",
                             new_bytes=len(d), new_px=f"{s}x{s}", recommended_width_height_attrs=spec["attrs"].split(" / ")[0 if s == spec["sizes"][0] else -1],
                             upload_note=("Upload to Media Library; swap into the hero card (.adp-person img) on all 314 pages via snippet 1 "
                                          "(or reuse /wp-content/mu-plugins/align-samantha-bar/avatar.webp, already loaded site-wide). Remove loading=lazy."
                                          if s == spec["sizes"][0] else "Use for the 84x84 research byline."),
                             role="primary" if s == spec["sizes"][0] else "variant-2x", quality=80, target_met=True))
        return rows
    if op == "alias":
        return [dict(original_url=src, optimized_file=rel(os.path.join(hd, spec["out"]), out), new_suggested_filename=spec["out"], old_bytes=old,
                     new_bytes=None, new_px="", recommended_width_height_attrs=spec["attrs"],
                     upload_note=f"Same photo as {spec['alias_of']} (WordPress sub-size). Point /reviews/ at the single WebP instead of a separate JPG.",
                     role="consolidate", quality=78, target_met=True)]
    im = load(path)
    if op == "webp_same":
        im2 = im.convert("RGB") if im.mode == "RGBA" and im.getextrema()[3][0] == 255 else im
        d = webp_bytes(im2, spec["q"])
        w, h = im.size
    elif op == "resize_w":
        im2 = resize_w(im.convert("RGB"), spec["w"])
        d = webp_bytes(im2, spec["q"])
        w, h = im2.size
    elif op == "logo":
        cands = [("lossless", webp_bytes(im, 100, lossless=True)), ("q90", webp_bytes(im, 90))]
        tag, d = min(cands, key=lambda c: len(c[1]))
        w, h = im.size
    elif op == "graphic":
        # transparent flat graphic: palette PNG vs lossless WebP, keep the smaller
        pal = im.convert("RGBA").quantize(colors=16, method=Image.Quantize.FASTOCTREE)
        b = io.BytesIO(); pal.save(b, "PNG", optimize=True); png = b.getvalue()
        wl = webp_bytes(im.convert("RGBA"), 100, lossless=True)
        ext, d = ("png", png) if len(png) <= len(wl) else ("webp", wl)
        spec = dict(spec); spec["out"] = spec["out"].format(ext=ext)
        w, h = im.size
    saving = 1 - len(d) / old
    wrong_format = name.lower().endswith((".jpg", ".jpeg"))
    wrong_size = op == "resize_w"
    if saving >= MIN_SAVING or wrong_format or wrong_size:
        p = os.path.join(hd, spec["out"])
        write(p, d)
        rows.append(dict(original_url=src, optimized_file=rel(p, out), new_suggested_filename=spec["out"], old_bytes=old, new_bytes=len(d),
                         new_px=f"{w}x{h}", recommended_width_height_attrs=spec["attrs"],
                         upload_note=("Upload as a new Media Library file with the suggested name, swap the URL in the widget/template, keep the old file until pages are updated. "
                                      f"Display: {spec['display']}."), role="primary", quality=spec.get("q", 100), target_met=len(d) <= CONTENT_TARGET))
    else:
        rows.append(dict(original_url=src, optimized_file="", new_suggested_filename=spec["out"].format(ext="png") if "{ext}" in spec["out"] else spec["out"],
                         old_bytes=old, new_bytes=old, new_px=f"{im.width}x{im.height}", recommended_width_height_attrs=spec["attrs"],
                         upload_note=f"Keep: re-encode saved only {saving:.0%}." + (" Replace with an SVG from the brand source files." if spec["kind"] == "logo" else ""),
                         role="kept", quality=spec.get("q", 100), target_met=True))
    return rows


def favicon_set(extra, out):
    """Clean the WordPress site icon (it carries a sliver of the wordmark 'A' at the right edge
    and the mark touches the canvas edges), pad it, and emit favicon.ico + PNG site icon."""
    src = os.path.join(extra, "favicon", "site-icon-512.jpg")
    if not os.path.exists(src):
        return []
    im = Image.open(src).convert("RGB")
    px = im.load()
    W, H = im.size
    # whiten the stray wordmark fragment (columns right of the house mark)
    for x in range(488, W):
        for y in range(H):
            px[x, y] = (255, 255, 255)
    # bounding box of non-white pixels
    g = im.convert("L").point(lambda v: 255 if v < 240 else 0)
    bbox = g.getbbox()
    mark = im.crop(bbox)
    canvas = 512
    pad = round(canvas * 0.10)
    mark.thumbnail((canvas - 2 * pad, canvas - 2 * pad), Image.LANCZOS)
    c = Image.new("RGB", (canvas, canvas), (255, 255, 255))
    c.paste(mark, ((canvas - mark.width) // 2, (canvas - mark.height) // 2))
    d = os.path.join(out, "optimized", "brand")
    os.makedirs(d, exist_ok=True)
    rows = []
    q = c.quantize(colors=32, method=Image.Quantize.MEDIANCUT)
    p512 = os.path.join(d, "align-lending-site-icon-512.png"); q.save(p512, "PNG", optimize=True)
    p180 = os.path.join(d, "apple-touch-icon.png"); c.resize((180, 180), Image.LANCZOS).quantize(colors=64).save(p180, "PNG", optimize=True)
    pico = os.path.join(d, "favicon.ico"); c.save(pico, "ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    old_url = f"{SITE}/wp-content/uploads/2024/10/cropped-Align-Lending-FF-01-2.jpg"
    for p, note, px_ in [
        (p512, "Appearance > Customize > Site Identity > Site Icon: upload this PNG (WordPress builds the 32/180/192/270 crops). Brand team to approve the padding.", "512x512"),
        (p180, "Optional: WordPress generates its own 180 crop from the site icon; use this only for a manual apple-touch-icon.", "180x180"),
        (pico, "Upload to the web root (public_html/favicon.ico) in hPanel File Manager: /favicon.ico currently returns 404.", "16/32/48"),
    ]:
        rows.append(dict(original_url=old_url, optimized_file=rel(p, out), new_suggested_filename=os.path.basename(p), old_bytes=15930 if p == p512 else "",
                         new_bytes=os.path.getsize(p), new_px=px_, recommended_width_height_attrs="n/a (icon)", upload_note=note, role="favicon", quality=100, target_met=True))
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--data", required=True)
    ap.add_argument("--extra", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--variants", default="1200,768")
    ap.add_argument("--learn-variants", default="1200")
    ap.add_argument("--og", default="pages", choices=["none", "pages", "all"])
    ap.add_argument("--budget-mb", type=float, default=150.0)
    ap.add_argument("--denoise-heavy", action="store_true", help="3x3 median on heroes still >150 KB at q72 (off by default)")
    a = ap.parse_args()
    out = os.path.abspath(a.out)
    data = os.path.abspath(a.data)
    raw_dir = os.path.join(data, "img_raw")
    variants = [int(v) for v in a.variants.split(",") if v]
    learn_variants = [int(v) for v in a.learn_variants.split(",") if v]
    optdir = os.path.join(out, "optimized")
    if os.path.isdir(optdir):
        shutil.rmtree(optdir)
    os.makedirs(optdir)

    imgs = json.load(open(os.path.join(data, "images.json")))
    hero_jobs, card_jobs, misc_jobs = [], [], []
    for r in imgs:
        rec = dict(src=r["src"], bytes=r["bytes"], kind=classify(r["src"]), learn_variants=learn_variants, denoise_heavy=a.denoise_heavy,
                   used_off_city=any("/mortgage-lender-" not in u for u in r.get("sample_pages", [])))
        path = os.path.join(raw_dir, os.path.basename(r["file"]))
        if rec["kind"].startswith("hero-"):
            hero_jobs.append((rec, path, out, variants, a.og))
        elif rec["kind"] == "learn-card":
            card_jobs.append((rec, path, out))
        elif r["src"].rsplit("/", 1)[-1] in MISC:
            misc_jobs.append((rec, path, out, raw_dir))
        else:
            print("unclassified", r["src"], file=sys.stderr)
    # home hero is an Elementor CSS background (not in images.json); fetched separately
    home = os.path.join(a.extra, "bg", "align-lending-michigan-home-hero.webp")
    if os.path.exists(home):
        rec = dict(src=f"{SITE}/wp-content/uploads/2026/08/align-lending-michigan-home-hero.webp", bytes=os.path.getsize(home), kind="hero-home")
        hero_jobs.append((rec, home, out, variants, a.og))

    rows = []
    with ProcessPoolExecutor(max_workers=a.workers) as ex:
        for res in ex.map(job_hero, hero_jobs, chunksize=4):
            rows.extend(res)
        for res in ex.map(job_card, card_jobs, chunksize=8):
            rows.extend(res)
    for j in misc_jobs:
        rows.extend(job_misc(j))
    rows.extend(favicon_set(a.extra, out))
    # resolve aliases' new_bytes
    by_file = {r["optimized_file"]: r["new_bytes"] for r in rows if r["optimized_file"] and r["role"] != "consolidate"}
    for r in rows:
        if r["role"] == "consolidate":
            r["new_bytes"] = by_file.get(r["optimized_file"], "")

    def total_mb():
        t = 0
        for root, _, files in os.walk(optdir):
            for f in files:
                t += os.path.getsize(os.path.join(root, f))
        return t / 1e6

    tot = total_mb()
    pruned = False
    # budget guard from the brief: drop city/page 1200 px variants first, then learn 1200 px
    for scope in ("pages", "learn"):
        if tot <= a.budget_mb:
            break
        keep = []
        for r in rows:
            is_learn = "/uploads/learn/" in r["original_url"]
            if r["role"] == "variant-1200" and (is_learn == (scope == "learn")):
                if r["optimized_file"]:
                    os.remove(os.path.join(out, r["optimized_file"]))
                continue
            keep.append(r)
        rows = keep
        pruned = scope if not pruned else pruned + "+" + scope
        print(f"output {tot:.1f} MB > {a.budget_mb} MB budget: pruned {scope} 1200 px variants")
        tot = total_mb()

    for r in rows:
        ob, nb = r["old_bytes"], r["new_bytes"]
        r["savings_pct"] = (f"{(1 - nb / ob) * 100:.1f}" if isinstance(ob, int) and isinstance(nb, int) and ob else "")
    cols = ["original_url", "optimized_file", "new_suggested_filename", "old_bytes", "new_bytes", "savings_pct", "new_px",
            "recommended_width_height_attrs", "upload_note", "role", "quality", "target_met"]
    gen = [r for r in rows if r["role"] != "kept"]
    with open(os.path.join(out, "optimized-manifest.csv"), "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        for r in sorted(gen, key=lambda r: (r["role"], r["original_url"])):
            w.writerow(r)
    # full decisions (incl. kept) for the audit script
    with open(os.path.join(out, "scripts", "optimize_decisions.json"), "w") as f:
        json.dump(dict(rows=rows, pruned_1200=pruned, output_mb=round(tot, 2), variants=variants, og=a.og), f)
    prim = [r for r in rows if r["role"] in ("primary", "kept", "consolidate") and isinstance(r["old_bytes"], int)]
    before = sum(r["old_bytes"] for r in prim)
    after = sum((r["new_bytes"] if isinstance(r["new_bytes"], int) else r["old_bytes"]) for r in prim)
    print(f"primary files: {len(prim)}  before {before/1e6:.2f} MB  after {after/1e6:.2f} MB  saved {(1-after/before)*100:.1f}%")
    print(f"generated files: {len(gen)}  output folder {tot:.1f} MB  pruned_1200={pruned}")


if __name__ == "__main__":
    main()
