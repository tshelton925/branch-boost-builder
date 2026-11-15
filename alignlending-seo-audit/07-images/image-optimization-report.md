# Image Optimization Report: alignlending.com

**Team:** Image optimization (WS7 Media, part 1 of 2) · **Scope:** performance, format, sizing and delivery of every image. Alt text is delivered separately by the alt-text team (IMG-03). · **Crawl:** 2026-11-15 (835 live pages, 1,244 unique images) · **Live checks:** response headers on 4 image URLs, 4 Elementor/LiteSpeed CSS files, the home hero and the site icon, fetched 2026-11-15.

Nothing in this report has been changed on the live site. Every fix is a file to upload, a setting, or a snippet for Align's web lead.

---

## 1. Summary

The site already serves WebP (1,239 of 1,244 images), sets width and height on every image (0 missing), and never lazy-loads a hero `<img>`. The format work is done. The problems are **size and delivery**:

1. **The homepage LCP image is an Elementor CSS background** (`align-lending-michigan-home-hero.webp`, 1536×1024, 218 KB). It sits in an external stylesheet, is moved into a JavaScript layer by Motion Effects, has no preload or srcset, and the only `fetchpriority="high"` on the page is on a 132-px thumbnail. Home Media score: **63 (D)**.
2. **314 pages lazy-load an above-the-fold headshot** (`Samantha-202x300.jpg` in the hero card). LiteSpeed replaces it with a GIF placeholder until its lazy-load script runs. It is a 202×300 JPEG shown in a 52×52 circle.
3. **82 hero pages have no srcset**, including every money page (purchase, refinance, all 22 product pages) plus calculators and county and state hubs. Phones download the full 1920-px desktop hero: 128 KB on average across those 82 pages, 228 KB on `/purchase/`.
4. **Hero files are larger than any slot needs.** City heroes are 1920 px and 172 KB on average (max 292 KB). On learn articles, 306 of 469 heroes are 1920 px files that the srcset labels "1600w". Their srcset also jumps from 960w to 1600w, so most phones download the biggest file.
5. **Share images are inconsistent.** Only 3 pages have a 1200×630 JPG `og:image`. 35 pages share a portrait headshot, and the rest use 16:9 WebP heroes. The favicon is a JPEG crop that includes a sliver of the wordmark, and `/favicon.ico` returns 404.

**What we built:** 1,977 optimized files (140.5 MB, under the 150 MB budget, so no variants were pruned), a reproducible pipeline (`scripts/optimize_images.py`, `scripts/audit_images.py`, `scripts/visual_check.py`), and five WPCode snippets (plus an optional home stopgap) that fix delivery across all templates at once.

**Savings.** Across the 1,245 files that have a 1:1 replacement, total size falls from **141.2 MB to 104.28 MB (−26.1 %)**. What visitors download per page view falls further:

| LCP image per view | Before | After (desktop, 1600w) | After (phone, 768w) |
|---|---|---|---|
| City page (avg of 276) | 172 KB on DPR2 laptops (1920 file) · ~124 KB on DPR1 desktops and DPR-3 phones (1536 sub-size, Flint sample) | **96 KB** | **28 KB** |
| `/purchase/` | 228 KB, all devices | **119 KB** | **36 KB** |
| Product pages (avg of 21) | 130 KB, all devices | **76 KB** | **24 KB** |
| Learn article (avg of 469) | 149 KB desktop and DPR-3 phones | 123 KB (DPR2) · **87 KB** (1200w, DPR1 and phones) | 87 KB (1200w) |
| Home | 218 KB, all devices | 218 KB (file kept, see §5.4) | **54 KB** (768w, DPR ≤ 2) · 116 KB (1200w, DPR-3) |

**Media scores:** sitewide (page-weighted, 832 scored pages) **82.1 → 99.2 projected**. Mean across page types **76.1 → 99.1**. **Money pages (home, purchase, refinance and products) 74.2 (C) → 98.6**. Projected scores assume every change in §6 ships and the alt-text CSV fills the empty hero alts.

---

## 2. Scorecard: Media by page type

The method follows `00-project/scoring-rubric.md` §3.10: hero ≤ 150 KB, served near display size, width/height set, LCP not lazy and preloaded or high priority, alt where meaningful. Deductions are listed in §8.2, and per-page scores with their deductions are in `media-scores-by-page.csv`. Three pages with no content images are scored N/A.

| Page type | Pages | Media now | Grade | Projected | LCP element | LCP KB now → 1600w / 768w | ATF lazy | Rationale (evidence) |
|---|---|---|---|---|---|---|---|---|
| Home | 1 | 63 | D | 90 | CSS background | 218 → 218 / 54 | 0 | LCP is `background-image` on container `b2395be` with Motion Effects, no preload or srcset, and `fetchpriority="high"` sits on `align-plan-porch.webp` (132 px thumbnail). |
| Purchase hub | 1 | 67 | D | 100 | `img.adp-hero__img` | 228 → 119 / 36 | 1 | `align-hero-purchase.webp` is 1920 px, 228 KB, has no srcset, and the hero-card headshot is lazy-loaded. |
| Purchase sub-pages | 10 | 78 | C | 100 | hero img | 100 → 65 / 24 | 8 | No srcset on any of the 10 heroes. The headshot is lazy-loaded above the fold on 8. |
| Refinance hub | 1 | 77 | C | 100 | hero img | 73 → 43 / 17 | 1 | Hero is light (73 KB) but has no srcset. The headshot is lazy-loaded. |
| Refinance sub-pages | 3 | 74 | C | 100 | hero img | 99 → 64 / 22 | 3 | No srcset. The headshot is lazy-loaded on all 3. `/refinance/cash-out-vs-home-equity/` hero is 176 KB. |
| Product hub | 1 | 78 | C | 100 | hero img | 151 → 78 / 24 | 0 | 151 KB hero, 1920 px, no srcset. |
| Product pages | 21 | 82 | B | 100 | hero img | 130 → 76 / 24 | 0 | None of the 21 heroes has a srcset. `align-hero-home-equity-loan.webp` is 233 KB and `align-hero-30-year-fixed.webp` is 212 KB. |
| Calculators & tools | 18 | 83 | B | 99 | hero img (17), text (1) | 123 → 80 / 23 | 0 | 15 of 17 heroes have no srcset. `align-hero-usda-eligibility-check.webp` is 210 KB. |
| City pages | 276 | 75 | C | 100 | hero img (srcset) | 172 → 96 / 28 | 276 | 1920-px heroes (238 of 276 are over 120 KB, 71 over 200 KB), `sizes="100vw"`, a lazy JPEG headshot above the fold, and an empty hero alt. |
| County hubs | 13 | 71 | C | 100 | hero img (12), text (1) | 184 → 100 / 29 | 12 | City heroes reused without srcset (184 KB average), plus the lazy headshot. |
| State hubs | 3 | 74 | C | 100 | hero img | 180 → 101 / 30 | 3 | `align-hero-mortgage-north-carolina.webp` is 259 KB. No srcset. Lazy headshot. |
| Learn (articles + hubs) | 469 scored | 87 | B | 99 | `figure.al-article-hero img` | 149 → 123 / 87 (1200w) | 1 | Eager, `fetchpriority="high"` and srcset present, but 306 files are 1920 px labelled 1600w, there is no 1200w step, the card srcset offers the hero to phones, and 47 hubs mark a second image high priority. |
| Research | 4 | 75 | C | 100 | hero img | 122 → 68 / 20 | 4 | No srcset (212 KB on the uncapping study). Lazy headshot. |
| Trust pages | 12 | 82 | B | 100 | hero img | 95 → 57 / 20 | 5 | No srcset on 11 heroes. On `/about-us/` the 73 KB JPEG portrait is lazy-loaded above the fold. |

**System scores** (rubric §6): page-weighted **82.1 (B) → 99.2**; simple mean across 14 page types **76.1 (C) → 99.1**; money pages **74.2 (C) → 98.6**.

Separate check, not part of the Media score (rubric §3.10 does not cover social images):

| og:image | Pages |
|---|---|
| 1200×630 JPG share card (correct) | 3: `/`, `/contact-us/`, `/samantha-shelton/` |
| Portrait `Samantha4-683x1024.jpg` (crops to the torso at 1.91:1) | 35: 13 county hubs, 7 trust, 6 product, 4 calculators, 4 learn, 1 purchase sub-page |
| Hero WebP, 1920×1085 or similar (16:9) | 795 |
| Research chart PNG | 2 |

---

## 3. Audit detail

### 3.1 Format mix
| Format | Files | MB |
|---|---|---|
| WebP | 1,239 | 140.72 |
| JPEG | 4 (`Samantha-202x300.jpg`, `Samantha4-683x1024.jpg`, `Samantha-768x1139.jpg`, `Samantha-691x1024.jpg`) | 0.24 |
| PNG | 1 (`equal-housing-opportunity-logo-100-w.png`) | 0.01 |
| Not in the crawl's image list | home hero (CSS background, WebP 218 KB), site icon (JPEG), 2 share cards (JPEG), 2 research chart PNGs | — |

Every JPEG is a photo of Samantha. All four are served from WordPress sub-sizes of two originals.

### 3.2 Bytes distribution (1,244 files, 140.97 MB)
| Bucket | Files |
|---|---|
| < 25 KB | 34 |
| 25–50 KB | 389 (almost all 640×360 learn cards) |
| 50–100 KB | 45 |
| 100–150 KB | 409 |
| 150–200 KB | 267 |
| ≥ 200 KB | 100 |

Quantiles: p50 134 KB, p75 152 KB, p90 189 KB, p99 257 KB. The weight sits in the heroes:

| Category | Files | MB | Avg KB | Max KB | Over 120 KB | Over 200 KB |
|---|---|---|---|---|---|---|
| City heroes (`align-hero-city-*`) | 276 | 47.52 | 172 | 292 | 238 | 71 |
| Learn article heroes (`/uploads/learn/`) | 469 | 69.80 | 149 | 284 | 456 | 24 |
| Page heroes (`align-hero-*`) | 64 | 7.58 | 119 | 259 | 30 | 5 |
| Learn cards (`/uploads/learn-card/`, 640×360) | 421 | 15.58 | 37 | 60 | 0 | 0 |
| Headshots, logos, misc | 14 | 0.49 | — | 82 | 0 | 0 |

### 3.3 Intrinsic size vs display size
Display sizes come from the templates' inline CSS and `sizes` attributes:
- `.adp-hero` sits inside a container of 1,240 px or less, with min-height 620–780 px and `object-fit: cover`. The rendered width is about 1,240–1,380 CSS px, so 1600 px covers DPR1 with headroom. On phones the photo sits under a 70–90 % dark overlay (`linear-gradient(180deg, rgb(13 14 18/.9), .82, .7)`).
- Learn hero: `sizes="(max-width: 1240px) 94vw, 1160px"`. Learn card: `(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 330px`.

| Image | File | Shown at | Ratio | Finding |
|---|---|---|---|---|
| City/page heroes | 1920 px | ≤ 1,380 CSS px | 1.4× at DPR1 | 1600 px is enough. 1920 adds about 45 % bytes for pixels nobody sees. |
| Learn heroes (306) | 1920 px | 1,160 CSS px; srcset says 1600w | — | The descriptor is wrong and the file is 44 % larger than its label. |
| `Samantha-202x300.jpg` | 202×300 | 52×52 circle (`.adp-person img`) | 3.9× wide, wrong aspect | A 104×104 WebP at 2× is about 3 KB. |
| `align-plan-*.webp` (home) | 320×476 | 116–132 px (`.ahb-ph`) | 2.4× | 264×393 is 2× of the largest. |
| Logo in the popup | 400×185 file | declared 734×340 (`size-full`) | 0.54×, **upscaled** | WordPress metadata says the original is 734 px; the file is 400 px. |
| Guide covers | 160×207 | 104×135 | 1.5× | Fine. |
| Floating-bar avatar | 192×192 | 96×96 | 2× | Fine. |

### 3.4 Width/height (CLS)
0 of 1,244 images and 0 occurrences lack width and height. Hero tags declare 1920×1074 while the files are 1920×1085/1086. That is harmless here because the image is absolutely positioned with `object-fit: cover`. Snippet 1 writes the true dimensions after replacement.

### 3.5 srcset and sizes
| Template | srcset today | Problem |
|---|---|---|
| City (276) | WP sub-sizes 300/768/1024/1536/1920, `sizes="100vw"` | DPR-3 phones (390 px × 3 = 1,170) take the 1536 sub-size (Flint: 124 KB) for a photo under a 70–90 % overlay. DPR2 laptops take the 1920 original. |
| Purchase, refinance, products, calculators, county, state, research, trust (82 pages) | **none** | Every device downloads the 1920 file. |
| Learn hero (469) | 640w (card file) / 960w / "1600w" | No step between 960 and 1600. Phones at DPR 2.6–3 need 1,000–1,100 px and take the 1600w file. 306 of the "1600w" files are actually 1920 px. |
| Learn cards (465 learn pages + 2 calculators) | 640w / 960w / **1600w hero** | At 92vw on a DPR-3 phone, each card fetches the full article hero (up to 284 KB). |

### 3.6 Above-the-fold images with `loading=lazy` (315 occurrences on 314 pages)
| Template | Pages | Element | Mechanism |
|---|---|---|---|
| City | 276 | `.adp-hero__card .adp-person img` → `Samantha-202x300.jpg` | `loading="lazy"` written twice in the widget, plus LiteSpeed's `data-lazyloaded` GIF placeholder with `data-src` |
| County hubs | 12 | same | same |
| Purchase sub-pages | 8 | same | same |
| Trust pages | 5 | same (and `/about-us/` hero portrait `Samantha4-683x1024.jpg`) | same |
| Research | 4 | same | same |
| State hubs | 3 | same | same |
| Refinance sub-pages | 3 | same | same |
| Purchase, refinance, `/learn/` | 1 each | same | same |

No LCP `<img>` is lazy-loaded. Every `adp-hero__img` carries `data-no-lazy="1"` and `fetchpriority="high"`, and learn heroes are `loading="eager" fetchpriority="high"`.

### 3.7 LCP priority and preload
- Hero `<img>`: `fetchpriority="high"` on all 358 `.adp-hero` pages and all 469 learn heroes. **No page has a `<link rel="preload">`.**
- The hero tag starts 157–218 KB into the HTML: `/mortgage-lender-flint-mi/` 191 KB, `/product-loans/fha-loans/` 218 KB, `/learn/usda-loan-basics/` 157 KB. It comes after 100–168 KB of inline `<head>` CSS and JS, so a preload in `<head>` starts the fetch much earlier.
- Misapplied priority: on the home page, `fetchpriority="high"` is on `align-plan-porch.webp` (not the LCP). On 47 Learn hub and category pages, a second image (the featured article's full 1600w hero) is `loading="eager" fetchpriority="high"` below the first H2.

### 3.8 Decorative images: `<img>` vs CSS
- Hero photos are `<img>` with `alt=""` under a gradient overlay. Keep them as `<img>`. It is the right pattern for LCP because the preload scanner can discover it and it supports `srcset` and `fetchpriority`. The alt-text team decides between descriptive and empty alt. Each city page's `og:image:alt` already describes the photo.
- Learn cards (`alt=""` inside an `aria-hidden` link that repeats the title), the home plan collage and the second floating-bar avatar copy are correctly decorative. There are no decorative images that should move to CSS.
- The one CSS image that should become an `<img>` is the home hero (§3.9).

### 3.9 Background images (Elementor)
The crawl's image list contains no CSS backgrounds, so we checked the Elementor stylesheets directly. The header (post 7), footer (post 20), template 178 and popup 822 use colour backgrounds only. The **home hero is the only background image**: `.elementor-10 .elementor-element-b2395be { background-image: url(…/2026/08/align-lending-michigan-home-hero.webp) }`. Motion Effects scrolling is on, and one breakpoint adds `background-attachment: fixed`. Elementor's "lazy load background images" is on, but its rule only targets the 4th and later parent containers, so the hero is not deferred. It is still discovered late, it cannot take `fetchpriority` or `srcset`, and Motion Effects moves it into a JavaScript-created layer.

### 3.10 og:image by page type
| Type | Current og:image | Action |
|---|---|---|
| Home | `align-share-home-1200x630-1.jpg` | Keep |
| `/contact-us/`, `/samantha-shelton/` | `align-share-samantha-shelton-1200x630-1.jpg` | Keep |
| County hubs (13), 6 products, 4 calculators, 7 trust, 4 learn, 1 purchase sub-page | `Samantha4-683x1024.jpg` (portrait) | P1: page's hero as a 1200×630 JPG (`optimized/og/`) or an existing share card |
| Purchase, refinance, other products and calculators, state hubs, research | hero WebP 1920×1086 | P1: `optimized/og/align-og-*-1200x630.jpg` (77 cards built) |
| City (276), learn (465) | hero WebP | P2: keep. Build with `--og all` later if LinkedIn sharing matters. |

The full page-by-page list is in `og-image-map.csv`.

### 3.11 Logo
`align-lending-logo-400.webp` (400×185, 14 KB, RGBA) appears 3 times per page. Two header copies use `size-medium`, declared 300×139, with a srcset that holds only the 400w file. That is 1.33× on DPR1, so the logo is soft on DPR 2–3 screens. The popup copy uses `size-full`, declared **734×340**, so the 400-px file is stretched 1.84×. It loads eagerly, but it is the same URL as the header, so it costs no extra bytes. There is no SVG. Lossless re-encoding saved only 7 %, so the file is kept as is. **Fix:** an SVG from the brand master, or until then a 600-px export, plus the popup set to Medium.

### 3.12 Favicon
WordPress Site Icon crops of `cropped-Align-Lending-FF-01-2.jpg` (JPEG, 32/180/192/512). The house mark touches the canvas edges, and a fragment of the wordmark's "A" is visible at the right edge (pixel columns 500–511, rows 347–377 of the 512 file). `/favicon.ico` returns **404**, which Bing and some browsers request. We built a cleaned and padded set in `optimized/brand/`: `align-lending-site-icon-512.png`, `apple-touch-icon.png` and a 16/32/48 `favicon.ico`. The brand team must approve it.

### 3.13 Duplicate and unused variants
- **Same photo, 3 JPEG sizes:** `Samantha-202x300.jpg`, `-691x1024.jpg` and `-768x1139.jpg` are WordPress sub-sizes of one upload (dHash distance 0–2 of 256), each served on different pages. We consolidated them into `samantha-shelton-portrait.webp` plus 104 px and 168 px headshots.
- **Same photo, 2 hero files:** `align-hero-borrowsmart-access.webp` (privacy policy) and `align-hero-research-mortgage-market.webp` (market report), dHash distance 1/256.
- **Versioned heroes:** `about-us-v2` (contact, licensing) and `-v3` (about). `cash-out-vs-home-equity` v1 (calculators hub, terms) and `-v2` (points calculator, refi page). `homebuying-budget-review` v1 (`/samantha-shelton/`) and `-v2` (budget review). Some heroes are reused on unrelated pages (for example the 30-year-fixed hero on the property-tax uncapping study). That is harmless for speed, but the filename describes a different topic.
- **City heroes are unique:** no two of the 276 are near-duplicates (closest pair at dHash distance 36/256). Two break the naming scheme with a WordPress duplicate-upload counter: `align-hero-city-vienna-township-1.webp` and `align-hero-city-jamestown-township-1.webp`. That usually means an orphaned file with the clean name exists in `/2026/11/`.
- **WordPress sub-sizes nobody requests:** the 63 hand-coded non-city heroes never reference their -300/-768/-1024/-1536 sub-sizes, so about 250 files sit unused. Once snippet 1 ships, the 276 city heroes' WordPress sub-sizes (about 1,100 files) become unused too. They are not served, so they have no speed cost. Delete them 30 days after the change, once cached HTML has expired.

### 3.14 CDN and caching headers (checked 2026-11-15)
| URL | cache-control | Other |
|---|---|---|
| `/2026/10/align-hero-city-flint.webp` | `public, max-age=31557600` | `server: hcdn` (Hostinger CDN), `expires` +1 year, `content-length 207938` |
| `/2026/10/align-hero-city-flint-768x434.webp` | `public, max-age=31557600` | `x-hcdn-cache-status: MISS` (edge cold), 39,938 bytes |
| `/uploads/learn/usda-loan-basics.webp` | `public, max-age=31557600` | MISS, 150,660 bytes |
| `/2024/10/Samantha-202x300.jpg` | `public, max-age=31557600,public` | `public` appears twice (two layers both add it). Harmless. |

The one-year cache is right. Because we replace files **in place**, purge the Hostinger CDN (hPanel → Performance → CDN → Flush cache) and LiteSpeed after each upload batch. Returning visitors keep their cached copy of the same picture, which is harmless. No `Vary: Accept` is needed because nothing is negotiated by format. **No extra optimizer plugin is needed.** LiteSpeed Cache 7.9.2 already handles lazy-loading and page cache, every image is already WebP, and a second optimizer (Smush, EWWW, ShortPixel) would double-process files and add a second lazy-loader. One optional helper: Enable Media Replace, to swap files in the Media Library without SFTP.

### 3.15 LCP baseline (charter metric M6)
The PageSpeed Insights API returned **HTTP 429 (daily quota exhausted for the shared key)**, so we have no field or lab LCP numbers yet. Before the files ship, Align's web lead should run PSI (mobile) on these 5 URLs and record p75 LCP (field) and lab LCP plus the LCP element in `tracker.csv`: `/`, `/purchase/`, `/product-loans/fha-loans/`, `/mortgage-lender-flint-mi/`, `/learn/usda-loan-basics/`. For reference, here is the modeled transfer time of the LCP image alone at Lighthouse's slow-4G profile (1.6 Mbps) and Moto G viewport (412 px, DPR 1.75):

| Template | LCP image Lighthouse downloads today | After | Modeled transfer |
|---|---|---|---|
| Home | 1536 px background, 218 KB | 768w, 54 KB | 1.1 s → 0.27 s |
| `/purchase/` | 1920 px, 228 KB | 768w, 36 KB | 1.1 s → 0.2 s |
| Product (avg) | 1920 px, 130 KB | 768w, 24 KB | 0.65 s → 0.12 s |
| City | `-768x434` sub-size, ~40 KB | 768w, 28 KB | 0.20 s → 0.14 s |
| Learn | `learn-960`, ~68 KB | unchanged (960w) | 0.34 s |

---

## 4. Findings ranked by impact

| # | Finding | Evidence | Priority | Impact | Effort |
|---|---|---|---|---|---|
| 1 | The home LCP is a late-discovered CSS background (218 KB) with Motion Effects and no preload or srcset. Priority goes to a thumbnail instead. | §3.9; `fetchpriority` on `align-plan-porch.webp` | **P0** | critical | medium |
| 2 | 82 hero pages, including every money page, have no srcset, so phones download 1920-px heroes (avg 128 KB, max 259 KB, `/purchase/` 228 KB). | `media-scores-by-page.csv` `lcp_srcset=False` | **P0** | high | low (snippet 1 + uploads) |
| 3 | An above-the-fold headshot is lazy-loaded through LiteSpeed's JS placeholder on 314 pages. It is a JPEG at 3.9× its display size. | `images.json` `lazy_atf=314`; §3.6 | **P0** | high | low (snippet 1) |
| 4 | City heroes are 1920 px and 172 KB on average (71 over 200 KB). `sizes="100vw"` sends the 1536 sub-size to DPR-3 phones. | §3.2, §3.5 | P1 | high | low |
| 5 | No LCP preload anywhere, and the hero `<img>` sits 157–218 KB into the HTML. | §3.7 | P1 | medium | low (snippets 2–3) |
| 6 | Learn: 306 heroes are 1920 px labelled 1600w, there is no 1200w step, cards offer the 1600w hero to phones, and 47 hubs mark a second image high priority. | §3.5, §3.7 | P1 | high (469 pages) | low |
| 7 | og:image: 35 pages share a portrait headshot, and only 3 pages have a 1200×630 JPG. | §3.10, `og-image-map.csv` | P1 | medium | low |
| 8 | 95 learn heroes (already 1600 px) stay above 150 KB. Most are grain-heavy AI images that WebP at q≥72 cannot shrink without visible softening (for example `how-to-qualify-for-jumbo-loan.webp`: 284 KB, 305 KB at q72). | §5.3 | P2 | medium | medium (re-export) |
| 9 | The logo is a 400-px raster stretched to 734 px in the popup, and there is no SVG. | §3.11 | P2 | low | low |
| 10 | The favicon is a JPEG crop with a stray wordmark fragment, and `/favicon.ico` returns 404. | §3.12 | P2 | low | low |
| 11 | Duplicate and versioned files and unused WordPress sub-sizes; meaningless filenames (`rsw_600h_600cg_true.webp`, `Samantha4-683x1024.jpg`). | §3.13 | P2 | low | low |

---

## 5. What was optimized

### 5.1 Rules applied (`scripts/optimize_images.py`)
- **Heroes** (city, page, home, learn): WebP at 1600 px (never upscaled), metadata stripped, ICC converted to sRGB. Quality is searched 78 → 76 → 74 → 72 until the file is ≤ 120 KB, and the lowest quality is kept when the target cannot be met. Responsive variants use the same quality: city, page and home get **1200w and 768w** in `optimized/responsive/<name>-{1200,768}w.webp`. Learn gets **1200w** in `optimized/responsive/learn-1200/<slug>.webp`, because the live template already has 640w (`learn-card/`) and 960w (`learn-960/`) files, so 1200w is the missing step.
- **Content and headshots:** WebP at 2× the CSS display size, q 75–80. The 52-px avatar becomes 104×104 (cropped like the CSS `object-position: 50% 12%`, from the higher-resolution 768 px original). The 84-px research byline becomes 168×168.
- **Graphics:** the PNG logo is kept as PNG because it has transparency and a 16-colour palette makes it smaller than WebP.
- A primary file is written only if it saves ≥ 20 % or the current file has the wrong format or pixel size. Everything else is listed as "keep" in `image-inventory.csv` (`action` column).
- The **150 MB budget** guard prunes the 1200w variants first. The output came to 140.5 MB, so every variant is included.

### 5.2 Results
| Category | Files | Before | After | Saved | Notes |
|---|---|---|---|---|---|
| City heroes (1600w, same filenames) | 276 | 47.52 MB | 26.59 MB | **44 %** | avg 172 → 96 KB. 256 at ≤ 120 KB, 20 at 121–151 KB (q72). q78 used on 210. |
| Page heroes (1600w) | 63 of 64 | 7.58 MB | 4.49 MB | **41 %** | avg 119 → 70 KB. 4 at 121–135 KB. `align-hero-editorial-policy.webp` kept (already 1600 px, 67 KB). |
| Learn heroes (1600×900) | 307 of 469 | 69.80 MB | 57.69 MB | 17 % | The 306 files at 1920 px were all replaced (avg 140 → 101 KB). 162 sources already at 1600 px or smaller were kept because re-encoding saved < 20 %. |
| Learn cards (640×360) | 89 of 421 | 15.58 MB | 15.04 MB | 3 % | 332 kept. The fix for cards is the srcset (§6, step 4). |
| Headshots (6 → 4 WebP + 2 headshot sizes) | 6 | 300 KB | 130 KB | 57 % | `Samantha-202x300.jpg` 12.4 KB → `samantha-shelton-headshot-104.webp` 2.1 KB |
| Home plan collage (264×393) | 4 | 151 KB | 92 KB | 39 % | |
| Logo, EHO logo, guide covers, floating avatar | 5 | 40 KB | 30 KB | — | EHO PNG 10.4 → 1.4 KB (−87 %, 16-colour palette). Floating-bar `avatar.webp` 5.0 → 3.9 KB (−23 %). Logo (−7 %) and guide covers (−13 to −15 %) kept. |
| Home hero (1536 px) | 1 | 218 KB | 218 KB | 0 % | Kept. See §5.4. Variants: 1200w 116 KB, 768w 54 KB. |
| **All 1:1 replacements** | **1,245** | **141.19 MB** | **104.28 MB** | **−26.1 %** | |

New files (not 1:1, so not counted above): 341 city/page/home 1200w (19.8 MB, avg 58 KB), 341 × 768w (9.2 MB, avg 27 KB), 469 learn-1200 (40.9 MB, avg 87 KB), 77 og cards 1200×630 JPG (6.4 MB), plus the favicon set.

### 5.3 Visual QA
`scripts/visual_check.py` renders 100 % crops of the optimized file next to a lossless resize of the original. We opened and checked 3 heroes:
1. `align-hero-city-grosse-pointe-farms.webp` (the heaviest city hero): 292 KB → 151 KB at q72. Brick, bare branches, snow on shrubs and the sky gradient are unchanged, with no banding or blocking.
2. `learn/how-to-handle-multiple-offers.webp` (1920 → 1600): 153 KB → 118 KB at q74. Faces, hair, knit texture and window light are unchanged.
3. `align-hero-30-year-fixed.webp`: 212 KB → 121 KB at q72. Night scene with porch lights. Shadow detail holds and there is no posterization in the dark grass.

We also simulated the mobile hero: a 390×1000 box at DPR2 with `object-fit: cover` and the template's 0.9 → 0.7 overlay, comparing the 768w and 1600w sources. The 768w is slightly softer, and under the overlay the difference is hard to see. That is why snippet 1 sets `sizes` to `60vw` below 768 px.

**Heavy learn heroes.** 95 learn heroes are already 1600 px or smaller and stay above 150 KB because re-encoding saves less than 20 %. Most are grain-heavy AI images, for example `how-to-qualify-for-jumbo-loan.webp` (1600×900, 284 KB). Re-encoding makes them bigger (305 KB at q72, 274 KB even at q55). A 3×3 median filter cuts about 27 % (to 207 KB at q74) but softens brick texture at 100 % zoom. That fails "no visible quality loss", so it is **off by default** (`--denoise-heavy`). The 1200w variants of these images (up to 206 KB) still go to most visitors. The real fix is to re-export these 95 images from their master files (listed in `image-inventory.csv`, `heavy:` issue, action `keep`).

### 5.4 Home hero
The 1536×1024 file only saves 16 % at q72 (183 KB). We tried softening the area under the dark overlay. It saved 41 %, but the band reaches the roofline and the softening showed at 100 % zoom, so we dropped it. The original file stays for desktop. The large home wins come from delivery: 768w (54 KB) for phones, 1200w (116 KB) for tablets, preload and priority, and no Motion Effects. Re-exporting from the master at 1600 px, q75, is a P2.

### 5.5 Filenames
City and learn names stay as they are: the `align-hero-city-<city>.webp` scheme and the learn slug names. New descriptive names where the current one is meaningless:

| Current | Suggested |
|---|---|
| `rsw_600h_600cg_true.webp` | `samantha-shelton-broker-owner-portrait.webp` |
| `Samantha-202x300.jpg` | `samantha-shelton-headshot-104.webp` (+ `-168`) |
| `Samantha4-683x1024.jpg` | `samantha-shelton-align-lending-office.webp` |
| `Samantha-768x1139.jpg`, `Samantha-691x1024.jpg` | `samantha-shelton-portrait.webp` (one file) |
| `align-plan-porch / colonial / ranch / movein.webp` | `homebuyer-plan-family-front-porch / white-colonial-house / brick-ranch-house / moving-day.webp` |
| `equal-housing-opportunity-logo-100-w.png` | `equal-housing-opportunity-logo.png` |
| `cropped-Align-Lending-FF-01-2*.jpg` | `align-lending-site-icon-512.png` |
| `align-hero-*-v2/-v3.webp` | drop the version suffix on the next re-upload where the clean name is free (`new_suggested_filename` in the manifest). `about-us-v2/-v3`, `cash-out-vs-home-equity-v2` and `homebuying-budget-review-v2` keep their names because the clean name is taken. |
| `align-hero-city-vienna-township-1.webp`, `align-hero-city-jamestown-township-1.webp` | `align-hero-city-vienna-township.webp`, `align-hero-city-jamestown-township.webp` |

Renaming means a new upload plus a URL swap in the widget. In-place replacement keeps the old name and needs no markup change, which is why heroes keep their names.

---

## 6. Implementation steps (in order)

**Step 0: Baseline (before anything changes).** Run PSI mobile on the 5 URLs in §3.15 and log LCP in `tracker.csv` (M6).

**Step 1: Upload the files (SFTP or hPanel File Manager; paths per row in `optimized-manifest.csv`).**
1. `optimized/heroes/*.webp` → overwrite the same filename in the same `/wp-content/uploads/YYYY/MM/` folder (339 files: 276 city and 63 page heroes). Or use Media → Enable Media Replace → "Just replace the file".
2. `optimized/responsive/align-hero-*-{1200,768}w.webp` and `align-lending-michigan-home-hero-{1200,768}w.webp` → upload next to each original in the same folder (682 files). Use SFTP, not the Media Library, so WordPress does not generate more sub-sizes.
3. `optimized/learn/*.webp` → overwrite `/wp-content/uploads/learn/` (307 files).
4. `optimized/responsive/learn-1200/` → create `/wp-content/uploads/learn-1200/` and upload 469 files.
5. `optimized/learn-card/*.webp` → overwrite `/wp-content/uploads/learn-card/` (89 files).
6. Media Library uploads (new names): `optimized/headshots/*`, `optimized/misc/homebuyer-plan-*`, `optimized/brand/equal-housing-opportunity-logo.png`, `optimized/og/*.jpg`.
7. Flush the Hostinger CDN and purge LiteSpeed (all).

**Step 2: WPCode snippets 1, 2 and 4** (§7). They take effect immediately for 358 `.adp-hero` pages and 314 headshots. Set `ALIGN_HEADSHOT_52/84` to the URLs WordPress assigned in step 1.6.

**Step 3: Home** (`delivery-fix-list.csv` D01–D02). Use Option B (§7.6) or the Option A stopgap. Remove `fetchpriority` from `.ahb-ph--1` and swap the four plan images.

**Step 4: Learn template** (D07–D09). Snippet 3 handles the hero 1200w, the true width/height, the preload, and drops the 1600w candidate from card srcsets, provided the markup is in post content. If the cards or hero come from a template function instead, make the same changes there:
- Hero `srcset`: `…/learn-card/{slug}.webp 640w, …/learn-960/{slug}.webp 960w, …/learn-1200/{slug}.webp 1200w, …/learn/{slug}.webp 1600w`, with `sizes="(max-width: 1240px) 94vw, 1160px"` unchanged.
- Card `srcset`: `…/learn-card/{slug}.webp 640w, …/learn-960/{slug}.webp 960w`, sizes unchanged.
- Hub featured card: remove `loading="eager"` and `fetchpriority="high"` and use the card srcset.

**Step 5: Portraits and trust pages** (D11–D14). Swap the URLs in the HTML widgets on `/about-us/` (eager), `/press/` (eager plus `fetchpriority="high"`), `/`, `/reviews/` and `/samantha-shelton/`.

**Step 6: og:image** (D17–D18) per `og-image-map.csv`. Use Rank Math → Social → Facebook image per page, or with SSH:
```bash
# For each row of og-image-map.csv with a file in recommended_og_file (P1 rows first)
ID=$(wp eval 'echo url_to_postid("https://alignlending.com/purchase/");')
ATT=$(wp media import optimized/og/align-og-purchase-1200x630.jpg --porcelain)
URL=$(wp eval "echo wp_get_attachment_url($ATT);")
wp post meta update "$ID" rank_math_facebook_image "$URL"
wp post meta update "$ID" rank_math_facebook_image_id "$ATT"
wp post meta update "$ID" rank_math_twitter_use_facebook on
```

**Step 7: Brand assets** (D15, D16, D19). SVG logo (Safe SVG plugin, or Elementor → Settings → Advanced → enable unfiltered/SVG uploads); popup image size set to Medium. Upload `align-lending-site-icon-512.png` under Appearance → Customize → Site Identity → Site Icon, and `favicon.ico` to `public_html/`. The brand team approves the icon first.

**Step 8: Settings** (D21–D22). LiteSpeed → Page Optimization → Media Settings: keep Lazy Load Images on and turn **Viewport Images (VPI)** on. It appears to be off today, since an above-the-fold headshot is still lazy-loaded. Add `samantha-shelton-headshot` and `adp-hero__img` to the Lazy Load Image Excludes. Keep Elementor → Performance → lazy-load background images on. Add snippet 5 (upload guardrails).

**Step 9: Verify.**
```bash
# hero has srcset, sizes, true width/height, high priority and no lazy
curl -s https://alignlending.com/mortgage-lender-flint-mi/ | grep -o '<img[^>]*adp-hero__img[^>]*>'
# preload is in <head> and matches the img srcset exactly
curl -s https://alignlending.com/purchase/ | grep -o '<link rel="preload" as="image"[^>]*>'
# headshot is eager WebP with no LiteSpeed placeholder
curl -s https://alignlending.com/purchase/ | grep -o '<img[^>]*samantha-shelton-headshot[^>]*>'
# new file is live at the CDN
curl -sI https://alignlending.com/wp-content/uploads/2026/10/align-hero-city-flint.webp | grep -i content-length   # expect ~116 KB, was 207,938
```
Then rerun PSI on the 5 URLs. Targets (M6): mobile LCP ≤ 2.5 s at p75, zero lazy-loaded LCP or above-the-fold images, 100 % width/height.

**Rollback.** Deactivate the WPCode snippets (markup returns to today's), and restore the original files from the Hostinger daily backup or from the crawl copies.

---

## 7. Snippets (WPCode → Add Snippet → PHP Snippet → Run on front end)
All snippets pass `php -l` (PHP 8.3). Each is self-contained: functions are guarded, and the snippets only rewrite markup that already exists.

### 7.1 Snippet 1: hero `<img>` and hero-card headshot (all `.adp-hero` templates)
```php
<?php
// Align: hero srcset/sizes/dimensions + priority, and the hero-card headshot. Front end only.
if ( ! defined( 'ALIGN_HERO_SIZES' ) ) {
	define( 'ALIGN_HERO_SIZES', '(max-width: 767px) 60vw, (max-width: 1240px) 100vw, 1240px' );
}
if ( ! defined( 'ALIGN_HEADSHOT_52' ) ) {
	// Paste the URLs WordPress gives the two uploaded files (step 1.6).
	define( 'ALIGN_HEADSHOT_52', '/wp-content/uploads/2026/11/samantha-shelton-headshot-104.webp' );
	define( 'ALIGN_HEADSHOT_84', '/wp-content/uploads/2026/11/samantha-shelton-headshot-168.webp' );
}

if ( ! function_exists( 'align_upload_path' ) ) {
	function align_upload_path( $url ) {
		$up   = wp_get_upload_dir();
		$base = wp_parse_url( $up['baseurl'], PHP_URL_PATH );
		$path = wp_parse_url( $url, PHP_URL_PATH );
		if ( ! $path || 0 !== strpos( $path, $base . '/' ) ) {
			return '';
		}
		$file = $up['basedir'] . substr( $path, strlen( $base ) );
		return file_exists( $file ) ? $file : '';
	}
}

if ( ! function_exists( 'align_hero_sources' ) ) {
	// srcset built from the -768w / -1200w files that exist next to the hero, plus the hero itself.
	function align_hero_sources( $src ) {
		$key = 'align_hero_' . md5( $src );
		$hit = get_transient( $key );
		if ( is_array( $hit ) ) {
			return $hit;
		}
		$file = align_upload_path( $src );
		$size = $file ? wp_getimagesize( $file ) : false;
		if ( ! $size ) {
			return null;
		}
		$set = array();
		foreach ( array( 768, 1200 ) as $w ) {
			if ( $w < $size[0] && file_exists( preg_replace( '/\.webp$/', "-{$w}w.webp", $file ) ) ) {
				$set[] = preg_replace( '/\.webp$/', "-{$w}w.webp", $src ) . " {$w}w";
			}
		}
		$set[] = $src . ' ' . (int) $size[0] . 'w';
		$out   = array( 'src' => $src, 'srcset' => implode( ', ', $set ), 'w' => (int) $size[0], 'h' => (int) $size[1] );
		set_transient( $key, $out, 12 * HOUR_IN_SECONDS );
		return $out;
	}
}

if ( ! function_exists( 'align_hero_sizes' ) ) {
	function align_hero_sizes() {
		// Home photo is visible below its overlay, so phones get full-width candidates there.
		return is_front_page() ? '100vw' : ALIGN_HERO_SIZES;
	}
}

if ( ! function_exists( 'align_rewrite_hero_tag' ) ) {
	function align_rewrite_hero_tag( $m ) {
		$tag = $m[0];
		if ( ! preg_match( '/\ssrc="([^"]+)"/', $tag, $s ) ) {
			return $tag;
		}
		$h = align_hero_sources( $s[1] );
		if ( ! $h ) {
			return $tag;
		}
		$alt = preg_match( '/\salt="([^"]*)"/', $tag, $a ) ? $a[1] : '';
		return sprintf(
			'<img class="adp-hero__img" src="%1$s" srcset="%2$s" sizes="%3$s" width="%4$d" height="%5$d" alt="%6$s" fetchpriority="high" loading="eager" decoding="async" data-no-lazy="1">',
			esc_url( $h['src'] ),
			esc_attr( $h['srcset'] ),
			esc_attr( align_hero_sizes() ),
			$h['w'],
			$h['h'],
			esc_attr( $alt )
		);
	}
}

if ( ! function_exists( 'align_rewrite_headshot_tag' ) ) {
	function align_rewrite_headshot_tag( $m ) {
		$tag  = $m[0];
		$is84 = false !== strpos( $tag, 'width="84"' );
		$alt  = preg_match( '/\salt="([^"]*)"/', $tag, $a ) ? $a[1] : 'Samantha Shelton';
		return sprintf(
			'<img src="%1$s" alt="%2$s" width="%3$d" height="%3$d" decoding="async" loading="%4$s" data-no-lazy="1">',
			esc_url( home_url( $is84 ? ALIGN_HEADSHOT_84 : ALIGN_HEADSHOT_52 ) ),
			esc_attr( $alt ),
			$is84 ? 84 : 52,
			$is84 ? 'lazy' : 'eager'
		);
	}
}

add_filter(
	'elementor/widget/render_content',
	function ( $content, $widget ) {
		if ( is_admin() || 'html' !== $widget->get_name() ) {
			return $content;
		}
		if ( false !== strpos( $content, 'adp-hero__img' ) ) {
			$content = preg_replace_callback( '/<img\b[^>]*\bclass="adp-hero__img"[^>]*>/i', 'align_rewrite_hero_tag', $content, 1 );
		}
		if ( false !== strpos( $content, 'Samantha-202x300.jpg' ) ) {
			$content = preg_replace_callback( '/<img\b[^>]*Samantha-202x300\.jpg[^>]*>/i', 'align_rewrite_headshot_tag', $content );
		}
		return $content;
	},
	20,
	2
);
```
Result on `/mortgage-lender-flint-mi/` after the step 1 uploads:
```html
<img class="adp-hero__img" src="https://alignlending.com/wp-content/uploads/2026/10/align-hero-city-flint.webp" srcset="https://alignlending.com/wp-content/uploads/2026/10/align-hero-city-flint-768w.webp 768w, https://alignlending.com/wp-content/uploads/2026/10/align-hero-city-flint-1200w.webp 1200w, https://alignlending.com/wp-content/uploads/2026/10/align-hero-city-flint.webp 1600w" sizes="(max-width: 767px) 60vw, (max-width: 1240px) 100vw, 1240px" width="1600" height="905" alt="" fetchpriority="high" loading="eager" decoding="async" data-no-lazy="1">
```
Why `60vw` on phones: the mobile hero sits under a 70–90 % dark overlay (§5.3), so the 768w file (28 KB) is enough and saves about 70–100 KB per phone view. If the hero files are not uploaded yet, `align_hero_sources()` finds no variants and outputs `src` plus its true width only, so the snippet is safe to activate first.

### 7.2 Snippet 2: preload the hero in `<head>` (needs snippet 1)
```php
<?php
add_action(
	'wp_head',
	function () {
		if ( ! is_singular() || ! function_exists( 'align_hero_sources' ) ) {
			return;
		}
		$id  = get_queried_object_id();
		$key = 'align_lcp_src_' . $id;
		$src = get_transient( $key );
		if ( false === $src ) {
			$src = '';
			$raw = str_replace( array( '\\/', '\\"' ), array( '/', '"' ), (string) get_post_meta( $id, '_elementor_data', true ) );
			if ( preg_match( '/<img[^>]*class="adp-hero__img"[^>]*>/', $raw, $m ) && preg_match( '/\ssrc="([^"]+)"/', $m[0], $s ) ) {
				$src = $s[1];
			}
			set_transient( $key, $src, 12 * HOUR_IN_SECONDS );
		}
		$h = $src ? align_hero_sources( $src ) : null;
		if ( $h ) {
			printf(
				'<link rel="preload" as="image" href="%1$s" imagesrcset="%2$s" imagesizes="%3$s" fetchpriority="high">' . "\n",
				esc_url( $h['src'] ),
				esc_attr( $h['srcset'] ),
				esc_attr( align_hero_sizes() )
			);
		}
	},
	1
);
add_action(
	'save_post',
	function ( $post_id ) {
		delete_transient( 'align_lcp_src_' . $post_id );
	}
);
```
The preload uses the same helper as the `<img>`, so `imagesrcset` and `imagesizes` match exactly. A mismatch would make the browser download two files.

### 7.3 Snippet 3: Learn hero 1200w, true dimensions, card srcset and preload
```php
<?php
if ( ! defined( 'ALIGN_LEARN_SIZES' ) ) {
	define( 'ALIGN_LEARN_SIZES', '(max-width: 1240px) 94vw, 1160px' );
}
if ( ! function_exists( 'align_learn_sources' ) ) {
	function align_learn_sources( $slug ) {
		$key = 'align_learn_' . md5( $slug );
		$hit = get_transient( $key );
		if ( is_array( $hit ) ) {
			return $hit;
		}
		$up   = wp_get_upload_dir();
		$file = $up['basedir'] . '/learn/' . $slug . '.webp';
		$size = file_exists( $file ) ? wp_getimagesize( $file ) : false;
		if ( ! $size ) {
			return null;
		}
		$set = array();
		foreach ( array( 'learn-card' => 640, 'learn-960' => 960, 'learn-1200' => 1200 ) as $dir => $w ) {
			if ( $w < $size[0] && file_exists( $up['basedir'] . "/{$dir}/{$slug}.webp" ) ) {
				$set[] = $up['baseurl'] . "/{$dir}/{$slug}.webp {$w}w";
			}
		}
		$url   = $up['baseurl'] . '/learn/' . $slug . '.webp';
		$set[] = $url . ' ' . (int) $size[0] . 'w';
		$out   = array( 'src' => $url, 'srcset' => implode( ', ', $set ), 'w' => (int) $size[0], 'h' => (int) $size[1] );
		set_transient( $key, $out, 12 * HOUR_IN_SECONDS );
		return $out;
	}
}
add_filter(
	'wp_content_img_tag',
	function ( $img ) {
		// Article hero: add the 1200w step and the file's true width/height.
		if ( preg_match( '#/uploads/learn/([a-z0-9-]+)\.webp"#', $img, $m ) && false !== strpos( $img, 'fetchpriority="high"' ) ) {
			$l = align_learn_sources( $m[1] );
			if ( $l ) {
				$img = preg_replace( '/\ssrcset="[^"]*"/', ' srcset="' . esc_attr( $l['srcset'] ) . '"', $img );
				$img = preg_replace( '/\swidth="\d+"/', ' width="' . $l['w'] . '"', $img );
				$img = preg_replace( '/\sheight="\d+"/', ' height="' . $l['h'] . '"', $img );
			}
			return $img;
		}
		// Related-article cards: never offer the full article hero.
		if ( false !== strpos( $img, '/uploads/learn-card/' ) ) {
			$img = preg_replace( '#,\s*[^,"\s]+/uploads/learn/[a-z0-9-]+\.webp\s+\d+w#', '', $img );
		}
		return $img;
	}
);
add_action(
	'wp_head',
	function () {
		if ( ! is_singular( 'learn' ) || ! function_exists( 'align_learn_sources' ) ) {
			return;
		}
		$l = align_learn_sources( get_post_field( 'post_name', get_queried_object_id() ) );
		if ( $l ) {
			printf(
				'<link rel="preload" as="image" href="%1$s" imagesrcset="%2$s" imagesizes="%3$s" fetchpriority="high">' . "\n",
				esc_url( $l['src'] ),
				esc_attr( $l['srcset'] ),
				esc_attr( ALIGN_LEARN_SIZES )
			);
		}
	},
	1
);
```
`wp_content_img_tag` (WordPress 6.0+) only sees images in post content. Check one learn page after activation. If the hero srcset has not changed, the markup comes from a template function, so apply the step 4 strings there and keep only the `wp_head` part of this snippet. The hero filename equals the post slug on all learn articles. The one exception is the `/learn/` hub, whose hero is `learn-center.webp`.

### 7.4 Snippet 4: core lazy-loading guards (WordPress-generated `<img>`)
```php
<?php
// WP 6.4+: never add loading=lazy to the hero/LCP; mark it high priority.
add_filter(
	'wp_get_loading_optimization_attributes',
	function ( $attrs, $tag_name, $attr, $context ) {
		$class = isset( $attr['class'] ) ? (string) $attr['class'] : '';
		$src   = isset( $attr['src'] ) ? (string) $attr['src'] : '';
		if ( 'img' === $tag_name && ( false !== strpos( $class, 'adp-hero__img' ) || false !== strpos( $src, '/uploads/learn/' ) ) ) {
			unset( $attrs['loading'] );
			$attrs['fetchpriority'] = 'high';
		}
		return $attrs;
	},
	10,
	4
);
// Older path, still honoured by core and some plugins.
add_filter(
	'wp_img_tag_add_loading_attr',
	function ( $value, $image, $context ) {
		if ( false !== strpos( $image, 'adp-hero__img' ) || false !== strpos( $image, 'samantha-shelton-headshot' ) || false !== strpos( $image, '/uploads/learn/' ) ) {
			return false;
		}
		return $value;
	},
	10,
	3
);
```
The `/uploads/learn/` match only hits article heroes. Cards live in `/uploads/learn-card/` and do not match. Elementor HTML widgets bypass these core filters, which is why snippet 1 exists.

### 7.5 Snippet 5: upload guardrails (future uploads)
```php
<?php
// WebP sub-sizes at q76 (WordPress default for WebP is 86).
add_filter( 'wp_editor_set_quality', function ( $quality, $mime_type ) {
	return ( 'image/webp' === $mime_type ) ? 76 : $quality;
}, 10, 2 );
// Cap originals at 1600 px (WordPress default 2560); nothing on the site needs more.
add_filter( 'big_image_size_threshold', function () {
	return 1600;
} );
// Do not build 2048 px sub-sizes.
add_filter( 'intermediate_image_sizes_advanced', function ( $sizes ) {
	unset( $sizes['2048x2048'] );
	return $sizes;
} );
// JPEG uploads get WebP sub-sizes (WordPress 5.8+).
add_filter( 'image_editor_output_format', function ( $formats ) {
	$formats['image/jpeg'] = 'image/webp';
	return $formats;
} );
```

### 7.6 Home hero: Option B (recommended) and Option A (stopgap)
**Option B.** Convert the background to `<img>`. Snippets 1 and 2 then handle srcset, priority and preload automatically.
1. Elementor → Home → container `b2395be` → Style → Background: remove the image and keep colour `#0D2138`. Advanced → Motion Effects → Scrolling Effects: **Off**.
2. Add an **HTML** widget as the container's first child, with Advanced → CSS Classes `al-hero-media`:
```html
<img class="adp-hero__img" src="https://alignlending.com/wp-content/uploads/2026/08/align-lending-michigan-home-hero.webp" alt="" width="1536" height="1024">
```
3. Site Settings → Custom CSS (or the theme's additional CSS):
```css
.home .elementor-element-b2395be{isolation:isolate}
.home .elementor-element-b2395be>.al-hero-media{position:absolute!important;inset:0;z-index:-1!important;margin:0;width:100%;max-width:none}
.home .elementor-element-b2395be>.al-hero-media .elementor-widget-container,
.home .elementor-element-b2395be>.al-hero-media img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;object-position:50% 60%;border-radius:0}
```
The existing `::before` gradient (z-index 0) and the content (`>*` z-index 1) stay on top of the photo. Rendered result: `srcset` 768w/1200w/1536w, `sizes="100vw"`, `fetchpriority="high"`, eager, and a matching preload.

**Option A.** Keep the background and add per-device files plus preloads.
1. Container → Style → Background: Tablet image `…/align-lending-michigan-home-hero-1200w.webp`, Mobile image `…-768w.webp`. Motion Effects off. Remove `background-attachment: fixed`.
2. WPCode snippet:
```php
<?php
add_action( 'wp_head', function () {
	if ( ! is_front_page() ) {
		return;
	}
	$b = content_url( '/uploads/2026/08/align-lending-michigan-home-hero' );
	printf( '<link rel="preload" as="image" href="%s" media="(max-width: 767px)" fetchpriority="high">' . "\n", esc_url( $b . '-768w.webp' ) );
	printf( '<link rel="preload" as="image" href="%s" media="(min-width: 768px) and (max-width: 1024px)" fetchpriority="high">' . "\n", esc_url( $b . '-1200w.webp' ) );
	printf( '<link rel="preload" as="image" href="%s" media="(min-width: 1025px)" fetchpriority="high">' . "\n", esc_url( $b . '.webp' ) );
}, 1 );
```
The media queries match Elementor's default breakpoints (mobile ≤ 767, tablet ≤ 1024).

On both options, remove `fetchpriority="high"` from `<img class="ahb-ph ahb-ph--1">` and swap the four plan photos for `homebuyer-plan-*.webp` (264×393).

---

## 8. Method notes

### 8.1 Files
| File | What it is |
|---|---|
| `image-inventory.csv` | 1,246 rows (1,244 crawled, plus the home hero and the site icon): src, bytes, px, format, occurrences, pages, atf, lazy_atf, issues, plus category, declared sizes, CSS display px, srcset use, action, optimized bytes, savings, suggested filename |
| `optimized-manifest.csv` | Every generated file: original_url, optimized_file, new_suggested_filename, old_bytes, new_bytes, savings_pct, new_px, recommended_width_height_attrs, upload_note, plus role (primary / variant-1200 / variant-768 / og / favicon / consolidate), quality and target_met |
| `media-scores-by-page.csv` | 835 pages: LCP element, bytes now and after, priority, lazy, srcset, ATF lazy images, og kind, page image bytes now and after, Media score now and projected, deductions |
| `delivery-fix-list.csv` | 22 template-level delivery fixes (D01–D22) with current, recommended, priority, impact, effort |
| `og-image-map.csv` | Page → recommended share image |
| `optimized/` | heroes/, learn/, learn-card/, responsive/, headshots/, misc/, brand/, og/ |
| `scripts/` | `optimize_images.py`, `audit_images.py`, `visual_check.py`, plus `optimize_decisions.json` and `audit_stats.json` (machine-readable results) |

Reproduce (from any folder other than `img_raw`):
```bash
cd alignlending-seo-audit/07-images/scripts
python3 -I optimize_images.py --data "$DATA" --extra "$EXTRA" --out ..   # ~4 min on 4 cores
python3 -I audit_images.py   --data "$DATA" --out ..
python3 -I visual_check.py   --data "$DATA" --out .. --preview /tmp/qa
```
`$EXTRA` holds `bg/align-lending-michigan-home-hero.webp` and `favicon/site-icon-512.jpg`, each downloaded once from the live site. Options: `--variants 1200,768`, `--learn-variants 1200`, `--og pages|all|none`, `--budget-mb 150`, `--denoise-heavy`.

### 8.2 Media score deductions (per page, from 100)
| Check | Points |
|---|---|
| LCP `<img>` lazy-loaded | −25 |
| LCP is a CSS background (not preloaded, no priority, late discovery) | −15 |
| LCP lacks `fetchpriority="high"` and has no preload | −8 |
| LCP has no srcset/sizes (or is a background) | −6 |
| Learn hero srcset has no step between 960w and 1600w | −4 |
| City hero `sizes="100vw"` sends the 1536 file to DPR-3 phones | −3 |
| LCP file wider than 1600 px | −3 |
| Hero photo with empty alt (text supplied by the alt-text team) | −3 |
| srcset descriptor ≠ file width | −2 |
| LCP bytes: 150–200 KB −6 · 200–500 KB −10 · > 500 KB −25 | |
| `fetchpriority="high"` on a non-LCP image | −3 |
| Above-the-fold image lazy-loaded | −4 |
| Card srcset offers the 1600w hero | −3 |
| Small images ≥ 2.4× display width | −1 |
| JPEG/PNG photo on the page | −2 |
| Any image without width/height | −10 |
| Page image bytes saveable ≥ 30 % −4 · ≥ 50 % −6 | |

"Projected" re-scores each page with the optimized bytes, the snippets' srcset, priority and preload, and filled alt text. It is labelled `projected` per rubric §7.5.

### 8.3 Limits
- Bytes are measured on the crawl's copies (`img_raw/`). Two live spot checks match: Flint hero 207,938 bytes, learn USDA hero 150,660 bytes.
- The `learn-960/` files were not crawled. One live check (`usda-loan-basics`, 67,804 bytes) suggests they are reasonable, so they are not regenerated.
- Bing Webmaster data is not connected. Bing requests `/favicon.ico` and uses `og:image` for some previews, so D16 and D17 also serve Bing.
