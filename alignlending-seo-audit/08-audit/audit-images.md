# Independent Audit: Images team (07-images)

**Auditor:** independent QA, WS7 Media · **Date:** 2026-11-15 · **Scope:** `07-images/` (optimization engineer and alt text specialist) · **Corrections file:** `08-audit/corrections-images.csv` (138 rows)

Nothing in this audit was changed on the live site. Live checks were read-only: 13 polite GET requests (home, one city page, the home Elementor stylesheet, the home hero headers, `/favicon.ico`, `sitemap_index.xml`, `page-sitemap.xml`, `learn-sitemap.xml`, 2 Media REST lookups, 2 learn hero URLs, 1 press photo), 2-3 seconds apart.

---

## 1. Verdicts

| Agent | Verdict | One-line reason |
|---|---|---|
| **Optimization engineer** | **PASS WITH CORRECTIONS** | Every headline number reproduces from the data, and all 1,977 files exist at the stated bytes and pixel sizes with no visible artifacts, crops or colour shifts. Corrections: 3 snippet scope bugs (snippet 3 hub images, snippet 4 conflict, snippet 5 threshold), one duplicate upload of an existing Samantha photo, the srcset count (83, not 82), two P0s that are really P1s, and the learn Media score, which is too harsh. |
| **Alt text specialist** | **PASS WITH CORRECTIONS** | The root-cause finding (the Elementor HTML widget discards Media Library alt) and the decorative/meaningful split are exact, and 40/40 sampled alts match their images. Corrections before loading the CSV: 30 alts use "quiet" (on the guide's fair-housing banned list), 7 use "modest"/"tidy", 58 describe people's age, sex, family or marital status, and 13 live learn alts with outcome or payment claims were never put in the CSV. There are also 2 bugs in the sitemap filter, and the scorecard is not anchored to the rubric. |

**Counts.** 16 headline claims checked: **13 confirmed, 3 corrected, 0 refuted.** Two scoring calibrations were refuted: the learn Media grade (B should be A) and the alt-team F grades. 40 alt rows were sampled. 40/40 are accurate to the image. 30/40 are compliant as written, and 40/40 after the corrections.

---

## 2. Checked findings

Evidence paths: `DATA` = the scratchpad `data/` folder given in the brief. "Live" = fetched 2026-11-15.

| # | Team claim | Auditor re-derivation | Status | Evidence |
|---|---|---|---|---|
| O1 | Sitewide Media 82.1 → 99.2 projected; type mean 76.1; money 74.2 | 832 scored rows. Mean 82.07 now, 99.18 after. All 832 per-page scores reproduce exactly from their own deduction strings. The score is too harsh on learn (see §7). | **Confirmed (arithmetic); recalibrated** | `media-scores-by-page.csv` |
| O2 | 1:1 replacements 141.19 → 104.28 MB (−26.1%) | 141,191,306 → 104,276,768 bytes (−26.15%) over **1,246** inventory rows. Only **746** rows are replaced (499 kept as is). The replaced set alone goes 101.07 → 64.19 MB (−36.5%). | **Corrected (wording)** | `image-inventory.csv`, `optimized-manifest.csv` |
| O3 | City heroes 172 → 96 KB (−44%) | 276 files, 47.52 → 26.59 MB. Average 172.2 → 96.3 KB. 20 files are over 120 KB and the largest is 151,448 B. Quality q78 on 210 files. | **Confirmed** | manifest `role=primary` |
| O4 | Home hero is a 218 KB Elementor CSS background with Motion Effects and no preload; `fetchpriority=high` sits on a 132-px thumbnail | Live: `background-image:url(…align-lending-michigan-home-hero.webp)` on `.elementor-element-b2395be` in `litespeed/css/843096ef….css`. `background_motion_fx_motion_fx_scrolling:"yes"` on desktop, tablet and mobile. `background-attachment:fixed` is present. 0 `<link rel=preload>`. The only `fetchpriority` is on `align-plan-porch.webp` (320×476 file, `.ahb-ph{width:132px}` desktop, 92 px default). The hero is `content-length: 218244`. | **Confirmed** | live `/`, live CSS |
| O5 | 82 hero pages have no srcset | **83**: 82 `.adp-hero` pages plus the `/learn/` hub (`learn-center.webp`). The team's own CSV has `lcp_srcset=False` on 83 rows. Every product, purchase and refinance page is included. | **Corrected** | `pages.jsonl` |
| O6 | 314 pages lazy-load an above-the-fold 202×300 headshot in a 52-px circle | 314 live pages (315 records including 1 redirect). Plus `/about-us/` lazy-loads `Samantha4-683x1024.jpg`, for 315 occurrences. CSS: `.adp-person img{width:52px;height:52px;…object-position:50% 12%}`. Live Grosse Pointe Farms shows the LiteSpeed GIF placeholder plus `loading="lazy"` written twice. | **Confirmed** (priority P0 → P1) | `pages.jsonl`, live city page |
| O7 | 306 learn heroes are 1920 px but labelled 1600w | 306 of 469 learn hero files are 1920×1080. The template hard-codes `…/learn/{slug}.webp 1600w`. | **Confirmed** | `image-inventory.csv`, `site/learn_usda-loan-basics.html` |
| O8 | Only 3 pages have a 1200×630 og:image; 35 use a portrait | 3 (`/`, `/contact-us/`, `/samantha-shelton/`). 35 use `Samantha4-683x1024.jpg`. 795 use a WebP hero. 2 use a chart PNG. | **Confirmed** | `pages.jsonl og_image` |
| O9 | `/favicon.ico` returns 404 | Live: 404, `text/html`, 4,511 B. The `<link rel=icon>` tags point to the JPEG site-icon crops. | **Confirmed** | live |
| O10 | 1,239/1,244 already WebP; none lacks width/height | WEBP 1,239, JPEG 4, PNG 1. `no_dims` = 0. | **Confirmed** | `images.json` |
| O11 | Five WPCode snippets pass `php -l` | All 6 PHP blocks (5 snippets plus Option A) and the 3 alt-team blocks pass `php -l` on PHP 8.3.6. A WordPress-stub functional test also passed: snippet 1 plus the alt mu-plugin compose correctly. Scope bugs are listed in §6. | **Confirmed** | `php -l`; harness |
| A1 | 89% of 3,849 empty alts are decorative (3,433 occ / 428 images); 416 occ / 380 images meaningful | Exactly 3,433/428 and 416/380 (89.2%). On the 835 live pages only: 2,919 of 3,325 (87.8%). | **Confirmed** | `pages.jsonl` |
| A2 | Elementor HTML widget hard-codes `alt=""` though all 340 hero attachments have library alt (359 pages) | Live Grosse Pointe Farms and the sample Flint page show `data-widget_type="html.default"…<img … class="adp-hero__img" … alt="">`, with `og:image:alt` filled from the library. Live REST confirms library alt on IDs 9563 (Flint) and 9352 (FHA). 340/340 hero sources have `alt_text` in the team's REST pull. 358 `.adp-hero` pages + `/learn/` = 359. | **Confirmed** | live, REST |
| A3 | 40 learn alts imply invented client stories; one says "3% down" | "3% down" is confirmed on `/learn/what-is-conventional-97-loan/`. The auditor's pattern finds **46** live learn alts that state an outcome or a rate/payment implication. **34 are in the CSV and 12 are not** (plus 1 "stable mortgage funding" claim). Two of the missing ones say "lower the monthly payment" and "falling rates". | **Corrected** (13 rows added) | `pages.jsonl` vs `alt-text.csv` by `image_url` |
| A4 | Rank Math image sitemap has 0 image entries | Live: `page-sitemap.xml` has 363 URLs and 0 `image:loc`. `learn-sitemap.xml` has 482 URLs (up from 472 at crawl) and 0. The namespace is declared. | **Confirmed** (priority P1 → P2) | live |
| A5 | All 432 written alts were viewed, none templated | 432 meaningful rows run 13–125 characters. 274/276 city descriptions are unique. The 40-row sample is 40/40 accurate to the image (§5). | **Confirmed**, but content corrections needed (§5) | `alt-text.csv`, sample |

---

## 3. Manifest and file integrity

| Check | Result |
|---|---|
| Files on disk vs manifest | 1,977 unique files on disk = 1,977 unique `optimized_file` values (1,978 rows; `samantha-shelton-portrait.webp` is listed twice by design). 0 missing, 0 extra. |
| Bytes | `new_bytes` = on-disk size for **all 1,978 rows** (not just a sample). 140.54 MB in total. |
| Pixel size | `new_px` = actual pixel size for every non-`.ico` file. 0 mismatches. |
| `old_bytes` | Matches `images.json` bytes for every primary/consolidate row. |
| 40-file random sample (seed 7) | 40/40: file exists, bytes match, pixel size matches, original in `img_raw/` with matching bytes. |
| Objective quality (1,893 comparisons: optimized file vs a Lanczos resize of the original) | PSNR minimum 32.2 dB on photographs (30.9 on the 264-px collage thumbnails). Median 37.8 dB. Largest mean channel shift 0.33/255, so no colour shift. Aspect ratio is kept on every file except the two intended square headshot crops. The EHO PNG reads 6.7 dB only because RGB conversion of its transparent pixels is meaningless. Composited on white it is 36.7 dB, and the alpha coverage is unchanged (4,683 opaque pixels in both). |
| Metadata | No original carries IPTC `DigitalSourceType` or C2PA, so stripping loses nothing. No output embeds IPTC either (alt report F7.2 is not done). |

---

## 4. File QA (viewed side by side with the Read tool)

Each composite shows the original and the optimized file at the same width, plus a 2× nearest-neighbour crop at the optimized resolution.

| # | File | Before → after | q | PSNR | Visual verdict |
|---|---|---|---|---|---|
| 1 | city `align-hero-city-grosse-pointe-farms.webp` | 1920×1085, 292 KB → 1600×904, 151 KB | 72 | 35.6 | Slate shingles, dormer mullions, snow and the sky gradient hold. No banding. The heaviest city file, and still 1 KB over target. **Pass** |
| 2 | city `align-hero-city-east-bay-township.webp` | 283 → 138 KB | 72 | 35.3 (lowest city) | Slight softening in dark siding at 2×, invisible at 1×. Lake reflections intact. **Pass** |
| 3 | city `align-hero-city-rochester-hills.webp` | 290 → 144 KB | 72 | 35.4 | Brick and window detail intact, and the dark left third shows no blocking. **Pass** |
| 4 | city `align-hero-city-algoma-township.webp` | 279 → 138 KB | 72 | 35.9 | Bare-branch detail, snow texture and the warm windows are unchanged. **Pass** |
| 5 | learn `trends-in-multi-generational-housing.webp` | 1920×1080, 150 KB → 1600×900, 124 KB | 72 | 35.8 (lowest learn) | Faces, hair and the window highlight are clean. **Pass** |
| 6 | learn `real-estate-investment-trusts-reits.webp` | 143 → 69 KB | 78 | 39.6 | Townhouse facades and haze are unchanged. **Pass** |
| 7 | learn `navigating-hoa-regulations.webp` | 152 → 130 KB | 72 | 35.9 | Foliage bokeh and mailbox edges are clean. **Pass** |
| 8 | headshot `samantha-shelton-headshot-104.webp` (+ `-168`) | 202×300 JPEG, 12.4 KB → 104×104 WebP, 2.1 KB | 80 | n/a (crop) | Matches the live CSS crop (`object-position:50% 12%`) in the 52-px circle. Sharper, because it comes from the 768 source. **Pass** |
| 9 | og `align-og-usda-eligibility-check`, `-purchase`, `-city-grosse-pointe`, `-why-we-dont-publish-rates` (1200×630 JPG) | 65–121 KB | 80 | n/a | Pure crops of the hero. **No text, rate, payment or claim** in any card, and no people. On-brand. P2 note: every card keeps the hero's near-black text-safe left third, so share previews look dark and carry no brand mark. |
| 10 | brand `align-lending-site-icon-512.png` | JPEG crop → padded PNG | — | — | The stray red "A" wordmark fragment at the right edge of the live icon is gone, and the mark is padded. Brand approval still needed. **Pass** |
| 11 | page `align-hero-usda-eligibility-check.webp` | 210 → 129 KB | 72 | 35.3 | **Pass** |
| 12 | mobile simulation: Grosse Pointe Farms 768w / 1200w / 1600w at 390×900, DPR 3, under the template's 0.9 → 0.7 overlay | 39 / 61 / 151 KB | — | — | 768w is visibly softer at 1:1 device pixels (about 4.6× upscale), but under a 70–90% dark overlay it is hard to see. The `sizes="(max-width:767px) 60vw"` trade-off is acceptable. Align should check it on a real phone. If the softness shows, use `100vw` (DPR-3 phones then take the 1200w file, +22 KB). |

**Filename mapping:** heroes and learn files keep their original basenames (in-place replacement). Variants follow `<name>-{768,1200}w.webp` and `learn-1200/<slug>.webp`. Every manifest `original_url` maps to the crawled original.

**Duplicate found:** `optimized/headshots/samantha-shelton-align-lending-office.webp` (683×1024, 31,064 B) is the same photo as the existing Media Library attachment **10423 `samantha-shelton-press-683.webp`** (28,242 B, alt already set). The dHash distance is 4/256, fetched live and confirmed by eye. Reuse 10423 and do not upload the new file. This affects D11, D12 and step 5.

---

## 5. Alt-text sample (40 rows; images opened)

Stratified random sample (seed 11): 15 city heroes, 10 learn heroes, 5 people, 5 charts, 5 decorative. The people stratum contained the decorative avatar duplicate, so the home collage `align-plan-porch.webp` was added in its place on the decorative side.

| ID | Image | Recommended alt (team) | Accurate to image | ≤125 | No invented claim/place | Compliant | Auditor action |
|---|---|---|---|---|---|---|---|
| C1 | city springfield-township | Two-story colonial on a large wooded lot with a long curving drive… | Yes | 120 | Yes | Yes | — |
| C2 | city sumpter-township | Ranch home on a wide rural lot with a long gravel drive at sunset… | Yes | 115 | Yes | Yes | — |
| C3 | city waterford | Ranch-style lake house with a pontoon boat at its dock at dusk… | Yes | 105 | Yes | Yes | — |
| C4 | city goodrich | Two-story home with stone accents on a wooded lot with a gravel drive… | Yes | 111 | Yes | Yes | — |
| C5 | city genoa-township | Two-story home with a walkout lower level and deck above a lake… | Yes | 111 | Yes | Yes | — |
| C6 | city webster-township | Large two-story home on wooded acreage with a curving drive in winter… | Yes | 119 | Yes | Yes | — |
| C7 | city taylor | Ranch home with a picture window on a **quiet** street at dusk… | Yes | 98 | Yes | **No** ("quiet" is banned, guide §6) | Corrected |
| C8 | city georgetown-township | Two-story colonial with a front porch on a curving subdivision street… | Yes | 122 | Yes | Yes | — |
| C9 | city clinton-township | Brick ranch with a picture window and attached garage at dusk… | Yes | 111 | Yes | Yes | — |
| C10 | city southfield | Mid-century ranch with a low roof and wide windows at dusk… | Yes | 102 | Yes | Yes | — |
| C11 | city marine-city | Two-story house with a screened porch facing a wide river at sunset… | Yes | 112 | Yes | Yes | — |
| C12 | city ecorse | **Modest** brick bungalow with a front porch on a compact city lot… | Yes | 102 | Yes | **No** (a subjective quality word tied to a city) | Corrected |
| C13 | city clay-township | Ranch home on a canal with a covered boat hoist at blue hour… | Yes | 107 | Yes | Yes | — |
| C14 | city zeeland-township | Two-story home with a front porch and two-car garage by fields in winter… | Yes | 122 | Yes | Yes | — |
| C15 | city blair-township | Ranch home on a rural wooded lot with a long gravel drive and meadow… | Yes | 116 | Yes | Yes | — |
| L1 | homeready-mortgages | **Grandmother, mother and young son** outside a **modest** bungalow… | Yes | 89 | Yes | **No** (age, sex and family status) | Corrected |
| L2 | mortgage-insurance | **Woman** carrying a moving box up the steps… sold sign | Yes | 85 | Yes | **No** (sex) | Corrected |
| L3 | how-to-create-competitive-offer | **Couple** shaking hands with their agent… sold sign | Yes | 92 | Yes | **No** (marital status) | Corrected |
| L4 | annual-percentage-rate-apr | **Older man** at a farmhouse kitchen table… | Yes | 106 | Yes | **No** (age, sex) | Corrected |
| L5 | debt-to-income-ratio-dti | **Woman** sitting on her living room rug… | Yes | 103 | Yes | **No** | Corrected |
| L6 | condo-vs-co-op | **Couple** on a sidewalk looking up at a brick apartment building… | Yes | 99 | Yes | **No** | Corrected |
| L7 | becoming-landlord | Landlord handing keys to a **young couple**… | Yes | 92 | Yes | **No** | Corrected |
| L8 | financing-home-renovations | **Couple** in work overalls reviewing plans… | Yes | 75 | Yes | **No** | Corrected |
| L9 | jumbo-loan-tips | **Couple** walking a dog up a stone path… | Yes ("up" vs toward camera is minor) | 77 | Yes | **No** | Corrected |
| L10 | home-appraisal-process | Appraiser with a tablet… as the homeowner stands by the door | Yes | 95 | Yes | Yes | — |
| P1 | Samantha-202x300.jpg | Samantha Shelton of Align Lending | Yes | 33 | Yes | Yes | — |
| P2 | Samantha-768x1139.jpg | Samantha Shelton of Align Lending | Yes | 33 | Yes | Yes | — |
| P3 | Samantha4-scaled.jpg | Samantha Shelton in the Align Lending office | Yes (the "ALIGN LENDING" sign is visible) | 44 | Yes | Yes | — |
| P4 | rsw_600h_600cg_true.webp | Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, seated on a green sofa | Yes | 98 | Yes | Yes | — |
| P5 | avatar.webp (2nd copy) | `alt=""` | Correct: it sits inside `<button aria-label="Talk with Samantha">` | — | — | Yes | — |
| H1 | hmda-2025-reasons-purchase | …credit history and debt-to-income were each cited in 42%… | Yes (42% / 42%) | 114 | Yes | Yes | — |
| H2 | hmda-2025-channel | 25.1% of Michigan refinance and 19.2% of purchase applications… | Yes | 118 | Yes | Yes | — |
| H3 | uncapping-2026-southeast | Wayne (+57.0%) is the only Southeast Michigan county above +50.5%… | Yes (the label shows +57%; the alt uses the data value) | 120 | Yes | Yes | — |
| H4 | hmda-2025-mix | …held near 101,000… refinances rose 66%, from 13,824 to 22,909 | Yes | 114 | Yes | Yes | See the data flag below |
| H5 | hmda-2025-manufactured | …denied 56.8%… versus 7.8% for site-built | Yes | 119 | Yes | Yes | — |
| D1 | learn-card impact-of-interest-rates… | `alt=""` | Correct: `<a class="al-card-img" tabindex="-1" aria-hidden="true">`, then the H3 title link | — | — | Yes | — |
| D2 | learn-card pros-and-cons-of-selling-to-cash-buyer | `alt=""` | Correct (same markup) | — | — | Yes | — |
| D3 | home collage `align-plan-porch.webp` | `alt=""` | Correct: a rotated thumbnail behind the phone mock-up in `.ahb-plan__art` | — | — | Yes | — |
| D4 | guide cover refinancing-and-home-equity | `alt=""` | Correct: aria-hidden link, and the title follows | — | — | Yes | — |
| D5 | guide cover your-michigan-homebuyer-guide | `alt=""` | Correct | — | — | Yes | — |

**Result:** 40/40 are accurate to the image, 40/40 are 125 characters or fewer, 0 invent a landmark or loan outcome, and 30/40 are compliant as written. The 10 failures are the 2 place adjectives and 8 learn alts that describe people. The pattern holds across the full CSV, so the corrections file covers **every** affected row, not just the sample: 30 "quiet" rows, 5 more rows for "modest"/"tidy" (7 rows carry those words in total), 3 "family" object rows and 58 people-descriptor rows, for 96 rows.

**Why the people rule applies.** Rubric §3.10 (the 100 anchor) says alt "does not describe people's characteristics". Guide §7.4 says alt "describes the house, not the people". Michigan's Elliott-Larsen Civil Rights Act protects age, sex, marital status and familial status in real-estate transactions, so "young family", "older couple", "mother and daughter" and "woman" all name protected characteristics. The corrections keep the visible content and use the number of people and their visible action ("Two people holding up keys…").

**Coverage gap, not corrected row by row.** 399 learn hero alts sit outside the CSV and were never checked against the team's own rules. 199 describe people's characteristics. 97 add "Michigan" or "Midwestern" to generic scenes, which the alt report's own F11 calls an unsupported place claim. 109 use topic-keyword framing ("…weighing the pros and cons of an adjustable-rate mortgage"). The 13 that state outcomes or rate/payment implications are fixed in the corrections file, and the auditor viewed each of those images. The rest are a P2 batch for the alt team (rule set in corrections row "§7.1 writing rules").

**Data flag for the research team:** `hmda-2025-counties.png` shows Oakland County at **13,824** purchase loans, and `hmda-2025-mix.png` shows Michigan at **13,824** refinances in 2024. Identical 5-digit values in unrelated series may be a copy error. `[VERIFY: against the FFIEC HMDA 2025/2024 Michigan extract]`. The chart alts copy the charts correctly.

### 5.1 The "illustrating homes in [City], Michigan" convention

- **Honest:** yes. "Illustrating" does not say the scene was photographed in the city, and no city alt names a landmark. The images are AI-generated, though, and nothing on the site says so. The convention is honest only once the Editorial Policy line in alt report F7 ships. The auditor raises F7 from P2 to P1, because the rubric's 0–39 Media anchor penalizes AI people presented as real.
- **SEO:** small but positive. Alt text is a weak web-ranking signal and a stronger Google Images signal. One place name per alt, on a page whose H1 and title already name the city, is relevance, not stuffing. 274/276 descriptions are unique, so the suffix is not a template problem.
- **Condition:** the place name must never sit next to a judgment word. "Modest bungalow… illustrating homes in Ecorse" or "quiet street… homes in Inkster" assigns a quality to a community, which is the fair-housing risk the guide's §6 list exists to prevent. With the place-word corrections applied (30 "quiet" rows plus the 7 "modest"/"tidy" rows), the convention is **approved**.
- **Live exposure today:** 40 Media Library alts already contain "quiet" (plus "stately", "walkable", "tidy"). Rank Math prints them as `og:image:alt` and as the ImageObject `caption` on those city pages now. Loading the corrected CSV fixes them.

---

## 6. Snippet review

All blocks pass `php -l` (PHP 8.3.6). A stub harness ran the real widget HTML from the Flint page, the home plan collage and a learn post's hero and card tags through both teams' filters.

| Snippet | Correct? | Safe for other images and decorative alt? | Scope | Finding / fix |
|---|---|---|---|---|
| Opt 1: hero srcset + headshot (`elementor/widget/render_content`, priority 20) | **Yes.** Output on Flint: `srcset` 768w/1200w/1600w, true 1600×904, `fetchpriority="high" loading="eager"`, alt carried over. Headshot becomes a 104 px WebP at 52×52, eager, `data-no-lazy` | Yes: only `class="adp-hero__img"` and `Samantha-202x300.jpg` tags change, the collage is untouched, and non-HTML widgets are untouched | `.adp-hero` pages | (a) Its transients cache "no variants" and the 1920 dimensions for 12 h if it is activated before the uploads. Flush transients after uploading. (b) Elementor element cache must also be cleared. (c) It rebuilds the tag from scratch, so any future extra class or attribute on the hero is dropped. Document this for the web lead. |
| Opt 2: hero preload | Yes. It uses the same helper, so `imagesrcset`/`imagesizes` match the `<img>` exactly | Yes | singular pages whose `_elementor_data` contains `adp-hero__img` | None. It fails safe (no preload) when the hero comes from a template. |
| Opt 3: learn 1200w, dimensions, card srcset, preload | Article hero and cards: **yes** (the card's 1600w candidate is removed in the test) | Yes | `wp_content_img_tag` | **Bug:** the 47 hub "featured story" images also match `/uploads/learn/` + `fetchpriority="high"`. They are treated as heroes, keep eager/high priority and get the 1600w srcset, so D09 is never achieved. **Fix** (tested): when the file slug differs from the page's `post_name`, strip `fetchpriority`, set `loading="lazy"` and drop the 1600w candidate. The corrections file has the exact code. |
| Opt 4: core lazy-loading guards | Syntactically yes | **Conflicts with D09.** The `/uploads/learn/` src test forces `fetchpriority=high` and removes lazy on hub featured images. The class test is dead code (HTML widgets bypass core, and content-image attributes carry no class) | — | **Do not install**, or limit the match to `/uploads/learn/{post_name}.webp`. Learn heroes already ship `loading="eager" fetchpriority="high"`, which core never overrides. |
| Opt 5: upload guardrails | Yes | Yes | future uploads | `big_image_size_threshold` 1600 applies to width **or** height, so it would shrink re-uploads of the research maps (1600×2165, 1600×2127) and tall portraits. Use 2200. |
| Opt Option A (home preloads) | Yes; media queries match Elementor's default breakpoints | Yes | front page | Option B is still preferred. |
| Alt 6.1 mu-plugin (`render_content`, priority 10) | **Yes.** Flint hero gets the library alt; headshot gets "Samantha Shelton of Align Lending" | **Yes:** it leaves `ahb-ph` collage images at `alt=""` and returns early unless the image is a hero or in the override list | HTML widgets only | Composes with Opt 1 (10 → 20). `esc_attr` does not double-encode. One `attachment_url_to_postid` query per uncached render, which the LiteSpeed page cache absorbs. |
| Alt 6.2 WP-CLI bulk script | Yes | Skips decorative, chart and hard-coded rows; logs old values | Media Library + learn `post_content` | Learn singles render from Astra `post_content`, not Elementor (body class `elementor-default`; only header, footer, template 178 and popups are Elementor), so the `post_content` approach is valid. Load the **corrected** CSV. |
| Alt 6.3 Rank Math sitemap filter | Logic is fine, with **2 bugs** | — | page + learn sitemaps | (1) It adds `/uploads/learn/{slug}.webp` for learn posts that have no hero: 4 today, and 2 checked live return 404. (2) Tested on the Flint widget HTML, the regex returns **7 URLs**: the hero, 4 WordPress sub-sizes, the -1200w variant and a chart. The fixed version returns 2. Fix: a `file_exists` guard plus `preg_grep('#-\d+(?:x\d+|w)\.webp$#', …, PREG_GREP_INVERT)`. |

**Do the two teams' filters conflict?** On the hero and headshot, no: they share one hook at priorities 10 and 20, and the test output is correct. The only real conflict is opt snippet 4 against D09, which the opt team planned itself.

---

## 7. Score calibration (rubric §7: blind re-score of ≥10%)

**Method.** The auditor scored 114 pages (a stratified 10%, minimum 5 per type; 113 scorable) directly from the rubric §3.10 anchors before comparing with the team. The deductions used were: LCP CSS background −12; hero 150–200 KB −6, 200–500 KB −10; empty alt on the meaningful hero −8; invented-outcome alt −4; trigger term in alt −8; no srcset −4; learn srcset hygiene −2; second high-priority image −3; lazy ATF image −4; JPEG photo −3.

| Page type | n | Auditor | Team | Diff | >5 pts | Grade crossings |
|---|---|---|---|---|---|---|
| Home | 1 | 61 | 63 | −2 | 0 | 0 |
| Purchase hub | 1 | 71 | 67 | +4 | 0 | 1 |
| Purchase sub-pages | 5 | 83.2 | 79.4 | +3.8 | 0 | 3 |
| Refinance hub / subs | 1 / 3 | 81 / 79.0 | 77 / 74.3 | +4 / +4.7 | 0 / 1 | 1 / 2 |
| Product hub / products | 1 / 5 | 82 / 83.6 | 78 / 79.6 | +4 / +4.0 | 0 / 0 | 1 / 2 |
| Calculators | 5 | 86.0 | 81.8 | +4.2 | 0 | 0 |
| City | 28 | 79.6 | 74.5 | +5.1 | 1 | 1 |
| County / state hubs | 4 / 3 | 75.5 / 77.7 | 71.0 / 73.7 | +4.5 / +4.0 | 1 / 0 | 2 / 3 |
| Research / trust | 4 / 5 | 78.5 / 85.2 | 74.5 / 80.8 | +4.0 / +4.4 | 0 / 1 | 4 / 2 |
| **Learn** | **47** | **94.2** | **86.5** | **+7.7** | **30** | **34** |

**Reconciliation, in writing per rubric §7.3:**

1. **Learn: team 87 (B) → 92 (A). Corrected.** A typical learn article has a WebP hero around 140 KB, loaded eager and high priority, with srcset, dimensions and a descriptive alt. That meets every element of the 100 anchor except srcset polish. The team deducts one srcset-configuration problem four times (−4 no 1200w step, −2 descriptor, −3 file over 1600 px, −3 card srcset, for −12). The rubric lists "served at or near display size" as one element, and a 1920 file in a 1160 CSS px slot (2,320 device px at DPR 2) is near display size. With the team's own table and responsive deductions capped at −6, learn scores 91.3. The blind re-score gives 94.2. **Use 92 (A).**
2. **Alt weight.** The team deducts only −3 for an empty alt on the page's primary image. The rubric names missing or generic alt on a meaningful image as a whole-grade issue (the 80 and 60 anchors). Raise it to −8 for the single published score.
3. **City 75 (C) stands.** It sits between the auditor's two re-scores: 69.8 with the team table recalibrated, 79.6 blind. All three are grade C.
4. **Other types stand:** they are within 5 points on average, and the team is the stricter scorer.
5. **System scores after reconciliation:** sitewide page-weighted **84.9 (B)** (team 82.1); type mean **76.5 (C)** (team 76.1); money pages **74.2 (C)**, unchanged. **Projected** about 99. It reproduces arithmetically, but the team's scorer never reads alt content, so it holds only if the auditor alt corrections and snippet fixes ship. Without the 199-alt learn clean-up it is about 98.5.
6. **Alt-team scorecard: refuted as a rubric score.** 35 of its 100 points (social/schema 20, files/sitemap 15) lie outside rubric §3.10, and its F grades (city 57, product 54, county 41, about/legal 48) contradict the anchors: F means broken, non-compliant or missing. Relabel it as a diagnostic. The consistency team should publish one Media score per page: the reconciled opt-team score.

**Priority calibration:** opt F2/D05 (srcset) P0 → **P1**; opt F3/D03 (lazy headshot) P0 → **P1**, impact medium; alt F4 (image sitemap) P1 → **P2**; alt F7 (AI-imagery disclosure) P2 → **P1**. The home LCP (D01) stays **P0**. It is the most-visited page, its LCP waits on the Motion Effects JavaScript, and the fix is cheap. Confirm it with PageSpeed Insights, which the team could not run (HTTP 429).

---

## 8. Coverage gaps

| Gap | Evidence | Priority | Owner |
|---|---|---|---|
| No LCP baseline (charter M6) | PSI returned 429 for the team, so the projections are not validated | P1 | Align web lead: run the 5 URLs in opt §3.15 before shipping |
| 399 learn alts outside the CSV were not reviewed against the team's rules | 199 people descriptors, 97 generic "Michigan"/"Midwestern", 109 topic-keyword framings (§5) | P2 (13 outcome/claim rows fixed now, P1) | Alt team |
| 15 research chart PNGs (2.95 MB; 2 are og:images) were not optimized | A 64-colour palette test gives 0.85 MB (−71%) at 44–48 dB PSNR | P2 | Opt team |
| IPTC `DigitalSourceType = trainedAlgorithmicMedia` not embedded | 0 of 1,977 outputs carry it, and the pipeline strips metadata | P2 (pairs with F7, P1) | Opt team |
| og cards keep the dark text-safe third and have no brand mark | Composite #9 | P2 | Opt/brand |
| Duplicate Samantha upload | §4 | P1 | Opt team |
| Elementor element cache and transient flush missing from the opt steps | §6 | P1 | Opt team |
| Units are mixed (KB for file sizes, KiB for HTML offsets, e.g. "191 KB" = 195.6 KB) | `site/mortgage-lender-flint-mi.html` | P2 | Opt team (label units) |

---

## 9. Recommendation fixes (ranked)

| # | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| 1 | Before loading `alt-text.csv`, apply the 96 corrected alts and add the 13 new learn rows from `corrections-images.csv`. Do not load the CSV as delivered: 30 rows carry a fair-housing banned word | **P0** | critical | low |
| 2 | Keep the alt team's P0: remove "3% down" from the Conventional 97 hero alt. It is fixed in the CSV, and the auditor's neutral version also drops "young couple" | **P0** | high | low |
| 3 | Ship the home hero fix (D01, Option B) and run PSI before and after | P0 | high | medium |
| 4 | Install opt snippets 1 and 2 plus the alt mu-plugin after the uploads, then flush transients, Elementor element cache, LiteSpeed and the CDN | P1 | high | low |
| 5 | Install snippet 3 **with the slug guard**. Do **not** install snippet 4 | P1 | medium | low |
| 6 | Reuse attachment 10423 for the `/about-us/` and `/press/` portraits instead of uploading a duplicate | P1 | low | low |
| 7 | Publish the Editorial Policy imagery line (alt F7.1). It is subject to Align approval | P1 | medium | low |
| 8 | Fix the sitemap filter (2 bugs) before enabling it | P2 | low | low |
| 9 | Set snippet 5's threshold to 2200 | P2 | low | low |
| 10 | Run the learn-alt clean-up batch (199 / 97 / 109) and the chart PNG palette pass | P2 | medium | medium |
| 11 | Check the 60vw mobile hero on a real phone; if it looks soft, use `100vw` | P2 | low | low |
| 12 | Send the Oakland/refinance 13,824 coincidence to the research team as `[VERIFY]` | P1 | medium (data accuracy) | low |
