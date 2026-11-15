# Alt Text and Image SEO Report (Images team, part 2 of 2)

**Owner:** Alt text and image SEO specialist · **Crawl date:** 2026-11-15 · **Scope:** alt text, filenames, captions, image structured data, og/twitter images, image sitemap. Compression, format and delivery belong to the sibling report in this folder.

**Files**
- `07-images/alt-text.csv`: 860 rows, one per image URL. It includes all 808 unique images that render an empty alt anywhere, plus 52 improvement rows (30 learn hero alts to rewrite, 4 people photos, 2 logos, 15 research charts, and the home hero, which is a CSS background today). The first 9 columns follow the brief. The helper columns after them are `alt_change_location`, `media_library_alt_current`, `attachment_id`, `missing_alt_occurrences` and `priority`.
- This report covers the summary, scorecard, findings ranked by impact, patterns and the bulk-update method.

Nothing here has been changed on the live site. Every recommendation is a change for Align to make.

---

## 1. Summary

1. **3,849 missing-alt occurrences, and 89% of them are correct as they are.** The crawl covered 931 records: the 835 canonical pages plus 96 legacy URLs that 301 to `/learn/`. **3,433 occurrences (428 unique images) are decorative**, and `alt=""` is right for them:
   - Learn cards (2,452). Each image sits inside a link marked `aria-hidden="true" tabindex="-1"`, and the H3 title link follows it.
   - The second Samantha avatar in the floating "Samantha bar" (920). The first avatar already says "Samantha Shelton".
   - Guide covers (57). The link is aria-hidden and the guide title follows.
   - The home-page photo collage (4).

   Do not install an "auto-fill empty alt" plugin. It would make screen readers announce about 3,400 redundant images.
2. **416 occurrences (380 unique images) are meaningful and need alt.** These are 276 city heroes, 64 product, purchase, refinance, calculator, hub and about heroes, the `/learn/` hub hero, and 39 learn "featured story" images on 48 learn hub pages.
3. **Root cause: the hero template, not the Media Library.** All 340 hero attachments already have alt text in the Media Library. Rank Math reads it for `og:image:alt` and for the ImageObject `caption`. On the page, though, the hero is hard-coded in an Elementor **HTML widget** (`data-widget_type="html.default"` → `<section class="adp adp-hero"><img class="adp-hero__img" … alt="">`), so 359 pages render `alt=""`. **One mu-plugin (section 6.1) fixes all 359 pages at once.** The CSV then improves the text itself.
4. **Every alt Claude wrote is based on viewing the image.** 432 meaningful rows, 0 templated:
   - All 276 city heroes (every city page in every county), viewed in 31 labelled contact sheets of 9.
   - All 65 product, purchase, refinance, calculator, hub and about heroes.
   - All 69 learn heroes that needed new alt.
   - The Samantha photos, logos, the home CSS hero and all 15 research charts (PNG exports).

   The 421 learn cards were not viewed one by one, because the markup makes them decorative.
5. **The city and product heroes are generated illustrations, not location photos.** Example: Grosse Pointe Farms shows a generic snowy brick Georgian with a dark text-safe left third. No landmark appears in any city hero, so no alt names a landmark. City alts follow the pattern *"[what is visible], illustrating homes in [City], Michigan"*. The place name is there for local relevance, but the alt does not claim the scene was photographed there (section 7.2).
6. **Compliance:**
   - One learn hero alt contains a Reg Z triggering term: "…Conventional 97 loan and **3% down**". That is a P0 to remove.
   - 40 learn hero alts state loan outcomes for illustrated people, such as "purchased with a VA loan", "financed with an FHA 203(k) loan" or "bought with a low down payment". These read as invented client stories, which the brief forbids. All 69 learn alts in the CSV describe only what is visible.

**Headline scores** (Media rubric, alt and image-semantics part):

| Scope | Now | After fixes |
|---|---|---|
| Sitewide, weighted by page count | **70 (C)** | ~92 (A) |
| Commercial and local pages (city, product, purchase, refi, calculators, hubs, about) | **56 (F)** | ~89 (B) |
| Learn articles | **82 (B)** | ~94 (A) |

---

## 2. Method and evidence

- `DATA/pages.jsonl` holds every `<img>` per page: src, alt, region, loading, fetchpriority. `DATA/images.json` holds unique images and the local files in `img_raw/`.
- **Media Library alt was read live** from the public, read-only REST endpoint `/wp-json/wp/v2/media`: 7 requests, 645 attachments. It shows the stored `_wp_attachment_image_alt`, which differs from what renders.
- Raw HTML for 7 sample pages plus 4 fetched live (`/learn/fixed-vs-arm/`, `/learn/15-first-time-home-buyer-tips/`, both research reports) was used to identify widget types, aria patterns, JSON-LD and og tags. The 15 chart PNGs were downloaded and viewed.
- Viewing: images were combined into labelled contact sheets of 9 at 520 px wide and opened with the Read tool. Grosse Pointe Farms was also viewed at full size. Each recommended alt was written from the sheet, and the Media Library alt was used only as a cross-check.
- The live-page counts used below exclude the 96 legacy redirect records. The raw crawl count, which includes them, matches the brief's 3,849.

---

## 3. Missing-alt inventory: decorative vs meaningful

| Group | Unique images | Missing occurrences, raw crawl | Missing occurrences, 835 live pages | `alt=""` correct? | Viewed |
|---|---|---|---|---|---|
| Learn cards (`/uploads/learn-card/*`, aria-hidden image link) | 421 | 2,452 | 2,048 | **Yes**, decorative | No (decorative by markup) |
| Chrome avatar duplicate (`align-samantha-bar/avatar.webp`, 2nd copy) | 1 | 920 | 824 | **Yes**, decorative | Yes |
| Guide covers (`/uploads/guides/*-cover-160.webp`, aria-hidden link) | 2 | 57 | 43 | **Yes**, decorative | Yes |
| Home collage behind the "Build your plan" widget (`align-plan-*.webp`) | 4 | 4 | 4 | **Yes**, decorative | Yes |
| **Decorative subtotal** | **428** | **3,433** | **2,919** | | |
| City heroes (`align-hero-city-*.webp`, 12 also used on county hubs) | 276 | 288 | 288 | No, needs alt | 276/276 |
| Product heroes, including `/product-loans/` hub | 22 | 23 | 23 | No | 22/22 |
| Purchase heroes, including `/purchase/` | 10 | 11 | 11 | No | 10/10 |
| Refinance heroes, including `/refinance/` | 4 | 6 | 6 | No | 4/4 |
| Calculator heroes | 13 | 14 | 14 | No | 13/13 |
| Research heroes | 3 | 3 | 3 | No | 3/3 |
| Hub, about, legal and state heroes | 12 | 14 | 13 | No | 12/12 |
| Learn hub hero (`/learn/learn-center.webp`) | 1 | 1 | 1 | No | 1/1 |
| Learn "featured story" images on hub pages (`al-hero-feature`) | 39 | 56 | 47 | No | 39/39 |
| **Meaningful subtotal** | **380** | **416** | **406** | | **380/380** |
| **Total** | **808** | **3,849** | **3,325** | | |

Other groups that need no new alt:
- **Logos and badges:** none are missing. "Align Lending logo" appears 2,793 times and "Equal Housing Opportunity logo" 931 times.
- **People photos:** none are missing apart from the decorative avatar copy.
- **Charts and infographics:** none are missing. The research charts are inline `<svg role="img" aria-label>`, and their labels are improved in the CSV.

---

## 4. Scorecard (Media rubric: alt and image semantics)

Points per component:
- **Hero** (25): the page's primary image renders a descriptive alt.
- **Other** (10): other meaningful images carry alt.
- **Accuracy** (20): alt is accurate, 125 characters or fewer, and makes no claims.
- **Decor** (10): decorative images are handled correctly.
- **Social/schema** (20): og/twitter image is the page's own landscape image, og:image:alt is descriptive, and ImageObject is present.
- **Files** (15): filenames, captions and image sitemap.

| Page type (pages) | Hero | Other | Accuracy | Decor | Social/schema | Files | **Score** | Rationale (evidence) | After fixes |
|---|---|---|---|---|---|---|---|---|---|
| City pages (276) | 0 | 8 | 12 | 10 | 18 | 9 | **57 F** | Hero renders `alt=""` on 276/276 even though library alt exists. `og:image` is the hero on 276/276, with library alt as og:image:alt and ImageObject caption. Library alts carry unverifiable decades ("late-1980s") and no place name. 0 sitemap images. | 92 A |
| Product pages + hub (22) | 0 | 10 | 12 | 10 | 13 | 9 | **54 F** | Hero `alt=""` on 22/22. 6 pages (`/heloc/`, `/physician-loans/`, `/1099-income-loans/`, `/asset-based-income-loans/`, `/manufactured-home-loans/`, `/non-warrantable-condo-loans/`) share the 683×1024 Samantha portrait as og:image instead of their hero. | 90 A |
| Purchase hub + sub-pages (11) | 0 | 10 | 12 | 10 | 15 | 9 | **56 F** | Hero `alt=""` on 11/11. `/purchase/down-payment-assistance/` reuses the first-time-homebuyer hero and uses the portrait as og. | 90 A |
| Refinance hub + sub-pages (4) | 0 | 10 | 12 | 10 | 17 | 9 | **58 F** | Hero `alt=""` on 4/4. Two refinance heroes are reused on unrelated calculators (`/michigan-property-tax-calculator/`, `/points-vs-lender-credit-calculator/`). | 91 A |
| Calculators and tools (18) | 3 | 10 | 12 | 10 | 12 | 9 | **56 F** | 15 of 17 heroes render `alt=""`. 4 use the portrait as og (`/loan-limits/`, `/michigan-transfer-tax-calculator/`, `/usda-eligibility-check/`, `/compare-loan-estimates/`). | 88 B |
| County hubs (13) | 0 | 8 | 10 | 10 | 5 | 8 | **41 F** | Hero is one city's image (e.g. Oakland uses Birmingham), and its alt is empty. og:image and primaryImageOfPage are the Samantha portrait on 13/13. That attachment has no library alt, so og:image:alt falls back to the page title. | 84 B |
| State hubs, MI/FL/NC (3) | 0 | 10 | 12 | 10 | 18 | 9 | **59 F** | Hero `alt=""` on 3/3. og is the hero. | 92 A |
| Learn articles (423) | 25 | 10 | 13 | 10 | 13 | 11 | **82 B** | 467/468 heroes have alt (average 102 characters). 40 alts state loan outcomes, 1 has "3% down", 5 run over 125 characters and 1 is cut off mid-word ("…design id"). Cards and guide covers are correctly hidden. Article ImageObject has only `url` (no caption, width or height), and og:image:alt is the title. Filenames match the slugs. 0 sitemap images. | 95 A |
| Learn hubs and `/learn/` (48) | 25 | 0 | 13 | 10 | 13 | 11 | **72 C** | The "Featured story" image (`.al-hero-feature`, 1600 px, fetchpriority high) renders `alt=""` on 48 hub pages. | 94 A |
| Research (4) | 0 | 9 | 16 | 10 | 17 | 14 | **66 D** | Heroes `alt=""`. Charts are strong: `<figure>`, a takeaway H3, a source figcaption, PNG/SVG/Embed and CC BY 4.0. Report JSON-LD lists each chart as an ImageObject with `license`, `acquireLicensePage`, `creditText` and `creator`. However, the aria-labels name the chart type rather than the finding, the ImageObjects lack width and height, and primaryImageOfPage is the portrait. | 95 A |
| Home (1) | 15 | 8 | 16 | 10 | 20 | 10 | **79 C** | The hero photo (`align-lending-michigan-home-hero.webp`, ID 6870) is a CSS background, so it has no alt and Google Images cannot index it. The sibling's delivery-fix-list D01 converts it to an `<img>`. The plan collage is correctly decorative. The Samantha photo is "Samantha Shelton" under a "Meet Samantha Shelton" heading. og is the 1200×630 share image with alt and ImageObject caption. | 93 A |
| About, contact, legal, agents, reviews, press (12) | 0 | 9 | 12 | 10 | 9 | 8 | **48 F** | Hero `alt=""` on 11/11. 4 heroes are borrowed from unrelated pages: `/samantha-shelton/` shows a budget notebook, and privacy and terms use the BorrowSmart and cash-out images. 7/12 use the portrait as og. Weak filename `rsw_600h_600cg_true.webp`. | 87 B |
| **Sitewide (835, weighted)** | | | | | | | **70 C** | | ~92 A |

---

## 5. Findings ranked by impact

### F1. The hero template discards the Media Library alt on 359 pages (P0 · critical · effort low)

- **Evidence:** on `/mortgage-lender-flint-mi/` the hero is `<div … data-widget_type="html.default"><section class="adp adp-hero adp-hero--open"><img fetchpriority="high" class="adp-hero__img" src="…/align-hero-city-flint.webp" … alt="">`. The same page's `og:image:alt` reads "A restored early 1900s two-story wood-frame house…". That text comes from the attachment, so the description exists but the HTML widget never prints it. The same holds on all 359 pages that use `adp-hero` (276 city, 22 product, 11 purchase, 4 refinance, 15 calculators, 12 county hubs, 3 state hubs, 4 research, 11 about/legal, plus `/learn/`).
- **Fix:** install the mu-plugin in section 6.1. It fills `alt` on `img.adp-hero__img` from the Media Library at render time, and from a small override map for the non-attachment `/learn/` hero. It also covers the 2 hard-coded Samantha images. Then load the CSV alts (section 6.2), purge LiteSpeed and clear Elementor's cache.
- **Why P0:** one file corrects the primary, LCP image on 43% of the site, with no page edits.

### F2. Learn hero alts invent loan outcomes, and one uses a trigger term (P0 for one row, P1 for the rest · high · effort low)

- **Evidence:** the alt on `/learn/what-is-conventional-97-loan/` is "First-time buyers on the steps of a starter home purchased with a Conventional 97 loan and 3% down". A down-payment percentage is a triggering term in mortgage advertising (Reg Z, 12 CFR 1026.24(d)). 40 of 468 learn hero alts follow the same pattern:
  - "Veteran couple moving into a brick ranch home purchased with a VA loan"
  - "…financed with a piggyback mortgage to avoid PMI"
  - "…with the payment stability a fixed-rate mortgage provides"
- **Why it matters:** the people are illustrations, so these alts describe client stories that never happened. The brand rules forbid invented client stories, and the phrasing also reads as keyword stuffing.
- **Fix:** the CSV gives a replacement for all 69 learn images that needed alt (39 featured, 30 rewrites). Each one describes only what is visible, for example "Young couple sitting on the front steps of their new home beside boxes labeled kitchen, books and living room". The topic keyword belongs in the H1 and body.
- **Cross-team note:** that article's title also says "The 3% Down Conventional Option". Flag it to the content and compliance owners.

### F3. 35 pages share a portrait og image that has no alt, and some point schema at it (P1 · high · effort low)

- **Evidence:** `og:image` is `Samantha4-683x1024.jpg`, a 2:3 portrait, on 35 pages: 13 county hubs, 7 about/legal/agents/reviews/press, 6 products, 4 calculators, 4 learn pages and the DPA page. `twitter:card` is `summary_large_image`, so a 1.91:1 crop cuts the portrait.
- The attachment `Samantha4-scaled.jpg` (ID 5714) has an empty library alt, so `og:image:alt` falls back to the page title ("Mortgage Broker in Oakland County, Michigan"). `primaryImageOfPage` on the county hubs and research reports also points to it, while the visible hero is something else.
- **Fix:**
  1. Rank Math → Titles & Meta → Global Meta → OpenGraph Thumbnail: change it from `Samantha4` to `align-share-home-1200x630-1.jpg` (ID 10425).
  2. Set a featured image on the 35 pages (table in section 6.4).
  3. Set the `Samantha4-scaled.jpg` alt to "Samantha Shelton in the Align Lending office". The office sign is visible in the photo.

### F4. Rank Math's image sitemap is empty (P1 · medium · effort low)

- **Evidence:** `page-sitemap.xml` (363 URLs) and `learn-sitemap.xml` (472 URLs) declare `xmlns:image` but contain **0** `<image:image>` entries.
- **Fix:**
  1. Rank Math → Sitemap Settings → General → turn on **Images in Sitemaps** and **Include Featured Images**.
  2. Add the filter in section 6.3, which adds each page's hero, each learn article's own hero and the 15 research chart PNGs.
  3. Resubmit `sitemap_index.xml` in Google Search Console, and in Bing once the Bing Webmaster connection exists. Bing data is not connected, so no Bing numbers are claimed here.

### F5. The 89% decorative majority is built correctly, so keep it (no change · protects accessibility)

- **Evidence:** the learn card markup is `<a class="al-card-img" … tabindex="-1" aria-hidden="true"><img … alt=""></a>` followed by `<h3 class="al-card-title"><a …>Title</a></h3>`. Guide covers use the same pattern (`.alg-cover` aria-hidden, then "Your Michigan Homebuyer Guide"). The chrome bar prints the avatar twice, once with "Samantha Shelton" and once with `alt=""`.
- **Do not fill these.** Optional polish: add `aria-hidden="true"` to the `.ahb-plan__art` wrapper on the home page so the 4 collage photos are hidden explicitly.

### F6. Heroes are reused on unrelated pages, and one image misrepresents who you work with (P1 · medium · effort medium)

Alt is stored once per image, so a reused image cannot describe two pages well.

| Page | Hero it uses | Problem | Recommendation |
|---|---|---|---|
| `/samantha-shelton/` (her bio) | `align-hero-homebuying-budget-review.webp` (a budget notebook) | Shows no photo of her (weak E-E-A-T) | Use `samantha-shelton-press-1024.webp` (ID 10424, already uploaded and alt-tagged) as the hero |
| `/privacy-policy/` | BorrowSmart hero | Unrelated to the page | Pick one neutral legal hero, or none |
| `/terms-and-conditions/` | cash-out vs home equity hero | Unrelated to the page | Same as above |
| `/research/michigan-property-tax-uncapping-study/` | 30-year fixed hero | Unrelated to the study | Use its trend chart as the hero |
| `/michigan-property-tax-calculator/` | break-even review hero | Belongs to a refinance page | Give the calculator its own hero |
| `/points-vs-lender-credit-calculator/` | cash-out vs home equity v2 hero | Belongs to a refinance page | Give the calculator its own hero |
| `/contact-us/`, `/licensing/` | about-us-v2 | Shared image | Acceptable |
| 12 county hubs | One city hero each | Names a city on a county page | Acceptable for now; the alt is still accurate because the city is in that county |

Two more image problems:
- `align-hero-research-mortgage-market.webp` and `align-hero-borrowsmart-access.webp` show the same concept, a key in a door lock.
- **Brand:** the hero on `/learn/why-work-with-align-lending/` shows a generated **male** advisor across the table from a couple, and its current alt calls him "a mortgage broker". Align's clients work with Samantha. Replace the image with a real photo of Samantha or a scene without an advisor. The interim alt in the CSV calls him "an advisor". `benefits-of-working-with-mortgage-broker.webp` shows a generated female advisor; review it for the same reason.

### F7. The home and people imagery is AI-generated and nothing says so (P2 · medium · effort low)

**Evidence:** city, product and learn images share one generated style, and the Media Library alts read like generation prompts ("A late-1980s two-story…"; 138 of 357 hero alts name a decade). The Editorial Policy page says nothing about imagery.

**Recommendations (subject to Align approval):**
1. Add one line to the Editorial Policy: "Photos of homes and people on this site are illustrations unless a caption says otherwise. Photos of Samantha Shelton are real."
2. Ask the compression agent to embed IPTC `DigitalSourceType = trainedAlgorithmicMedia` in generated files, or at least not strip it. Google Images reads this field. Add IPTC Creator and Copyright to the real Samantha photos.
3. Regenerate or crop the images that show third-party marks: a U-Haul truck (`adjustable-rate-mortgages-pros-and-cons.webp`) and a FedEx truck (`benefits-of-mortgage-rate-locks.webp`).

### F8. Research charts: good structure, but the labels miss the finding (P1 · medium · effort low)

**Evidence:**
- All 15 charts are `<figure class="ar-fig">` with an H3, a subtitle, a source `<figcaption>`, PNG/SVG/Embed links and CC BY 4.0.
- The Report JSON-LD already lists each PNG as an ImageObject with `license`, `acquireLicensePage: /research/methodology/#license`, `creditText` and `creator`. That makes the charts eligible for the Google Images "Licensable" badge.
- Gaps:
  - Each `aria-label` names the chart type only, e.g. "Bar chart: share of decided Michigan mortgage applications denied, by purpose, 2025".
  - The ImageObject `caption` is the H3 ("What Michigan homeowners borrowed for"), and `width`/`height` are missing.
  - `primaryImageOfPage` is the portrait while `og:image` is the lead chart.
  - The chart PNGs are not in the sitemap.

**Fix:**
1. Replace each aria-label and ImageObject caption with the takeaway sentence in the CSV (`group = chart_infographic`), e.g. "Bar chart: Michigan lenders denied 15.5% of purchase applications in 2025, the lowest of any purpose; 22.6% overall". Every number was checked against the chart's own `<title>` data.
2. Add `"width":1600,"height":<px>` to each ImageObject.
3. Point `primaryImageOfPage` at the lead chart.

Sentences like these are quotable, and AI answers cite them.

### F9. The learn article image schema and social tags are thin (P2 · medium · effort low)

**Evidence:**
- `/learn/usda-loan-basics/` outputs `"image":{"@type":"ImageObject","url":"…/learn/usda-loan-basics.webp"}` with no width, height or caption.
- Because learn images are not attachments, `og:image:alt` is the article title and `og:image:width`/`og:image:height` are absent.

**Fix, in the learn template:**
1. Output `{"@type":"ImageObject","url":…,"contentUrl":…,"width":1600,"height":900,"caption":"<hero alt>"}`.
2. Print `og:image:width` 1600, `og:image:height` 900 and `og:image:alt` set to the hero alt.
3. Optional: add 1:1 and 4:3 crops to the `image` array for Discover and Top Stories eligibility. The 1600 px width and `max-image-preview:large` already qualify.

### F10. Filenames are good for heroes and weak for people, the logo and Media Library leftovers (P2 · low · effort low)

| Pattern | Examples | Verdict |
|---|---|---|
| Strong | `align-hero-city-<city>.webp`, `align-hero-<topic>.webp`, `/uploads/learn/<article-slug>.webp` | Keep. Do not rename live URLs. |
| Weak, in use | `Samantha-202x300.jpg`, `Samantha4-683x1024.jpg`, `rsw_600h_600cg_true.webp`, and the schema logo `Align_Lending_FF-01__2_-removebg-preview.png` | Better-named uploads already exist: `samantha-shelton-press-683.webp` / `-1024.webp` (IDs 10423/10424, with good alts). Swap to these, coordinating with the compression agent, and upload the schema logo as `align-lending-logo.png`. |
| Weak, unused | 237 attachments with no alt and no use on the crawled pages: `mortgage-22-1.webp`, `ai-1787745771.jpg`, `albg-1774257967.jpg`, `D-Stock-RateDropHero-AdobeStock_532247830-09162024.webp`, 16 `align-hero-*-phone.webp` | Archive these, or tag them before any reuse. |

The library alt for `rsw_600cg_true.webp` (ID 1004) is a 230-character sentence: "…symbolizing the dream of home ownership and the possibilities of financing".

### F11. Library alts are long, speculative and inconsistent (folded into the CSV · low)

- 33 of 357 hero library alts run over 125 characters.
- 29 add "Michigan" to generic scenes, and `align-hero-about-us-v2.webp` says "near Waterford, Michigan", which the image cannot show.
- The Samantha attachments use three different role descriptions: "founder and broker-owner", "Broker Owner and Senior Loan Originator", and none.

The CSV standardizes all of these.

---

## 6. Implementation

Order: 6.1, then 6.2 (dry run, then apply), then 6.3 and 6.4. Then purge caches, then QA (6.6). Take a database backup first (`wp db export`).

### 6.1 mu-plugin: render the Media Library alt in Elementor HTML-widget heroes

Save as `wp-content/mu-plugins/align-image-alt.php`.

```php
<?php
/**
 * Plugin Name: Align – image alt from Media Library
 * Description: Elementor HTML widgets hard-code <img class="adp-hero__img" alt="">. This fills alt from the
 *              attachment's Media Library alt (single source of truth) and applies a few fixed overrides
 *              for images that are not attachments or have hard-coded alt.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

function align_alt_overrides() {
	return array(
		// Not attachments, or hard-coded in widget HTML. Keys are path suffixes after /wp-content/uploads/.
		'learn/learn-center.webp'      => 'Reading chair with a blanket by a window at dusk, a desk lamp, a stack of books and a mug on the side table',
		'2024/10/Samantha-202x300.jpg'  => 'Samantha Shelton of Align Lending',
		'2024/10/Samantha-768x1139.jpg' => 'Samantha Shelton of Align Lending',
	);
}

function align_alt_for_src( $src ) {
	$src = strtok( $src, '?' );
	foreach ( align_alt_overrides() as $suffix => $alt ) {
		if ( substr( $src, -strlen( $suffix ) ) === $suffix ) { return $alt; }
	}
	$key = 'align_alt_' . md5( $src );
	$alt = wp_cache_get( $key, 'align' );
	if ( false === $alt ) {
		$id  = attachment_url_to_postid( $src );
		$alt = $id ? trim( (string) get_post_meta( $id, '_wp_attachment_image_alt', true ) ) : '';
		wp_cache_set( $key, $alt, 'align', HOUR_IN_SECONDS );
	}
	return $alt;
}

add_filter( 'elementor/widget/render_content', function ( $content, $widget ) {
	if ( 'html' !== $widget->get_name() || false === stripos( $content, '<img' ) ) {
		return $content;
	}
	return preg_replace_callback( '/<img\b[^>]*>/i', function ( $m ) {
		$tag     = $m[0];
		$is_hero = (bool) preg_match( '/\bclass="[^"]*\badp-hero__img\b/i', $tag );
		if ( ! preg_match( '/(?<![-\w])src="([^"]+)"/i', $tag, $s ) ) { return $tag; }
		$is_override = false;
		foreach ( array_keys( align_alt_overrides() ) as $suffix ) {
			if ( false !== strpos( $s[1], $suffix ) ) { $is_override = true; break; }
		}
		if ( ! $is_hero && ! $is_override ) { return $tag; }   // leave decorative images (e.g. .ahb-ph) alone
		$alt = align_alt_for_src( $s[1] );
		if ( '' === $alt ) { return $tag; }
		$alt = esc_attr( $alt );
		return preg_match( '/\balt="[^"]*"/i', $tag )
			? preg_replace( '/\balt="[^"]*"/i', 'alt="' . $alt . '"', $tag, 1 )
			: preg_replace( '/^<img\b/i', '<img alt="' . $alt . '"', $tag );
	}, $content );
}, 10, 2 );
```

Notes:
- LiteSpeed's lazy-load and `<noscript>` copies are generated after this filter, so they inherit the new alt.
- After installing, run `wp litespeed-purge all` and `wp elementor flush-css`, and clear Elementor's element cache under Elementor → Tools.
- The **Elementor Image widget** (`image.default`, e.g. the logo `wp-image-221` and the EHO badge `wp-image-181`) already reads the Media Library alt, so the CSV rows for those just update the library.
- The **Elementor HTML widget** (`html.default`) is the only widget overriding library alt. It covers `adp-hero`, the `adp-person` Samantha card, the `adp-feature` Samantha photo on the home page, and the `ahb-plan__art` collage, which the filter deliberately leaves `alt=""`.

### 6.2 WP-CLI bulk update from `alt-text.csv` (Media Library plus learn post_content)

Learn images (`/uploads/learn/*`) are not attachments. Their alt is inline HTML in each `learn` post's `post_content` (verified via `/wp-json/wp/v2/learn?slug=what-is-conventional-97-loan`: `featured_media: 0`, and the hero `<img>` is in the content). The script updates both stores. It skips decorative rows, chart rows (inline SVG, set by hand from the CSV) and rows marked "hard-coded" (the mu-plugin handles those). It writes a log of old values for rollback.

```php
<?php
/**
 * Dry run: wp eval-file align-alt-bulk.php /path/alt-text.csv --user=<admin>
 * Apply:   wp eval-file align-alt-bulk.php /path/alt-text.csv apply --user=<admin>
 */
if ( ! defined( 'WP_CLI' ) || ! WP_CLI ) { return; }
$file  = isset( $args[0] ) ? $args[0] : '';
$apply = in_array( 'apply', $args, true );
if ( ! $file || ! is_readable( $file ) ) { WP_CLI::error( 'Pass the path to alt-text.csv' ); }

$find_attachment = function ( $url, $hint_id ) {
	if ( $hint_id && 'attachment' === get_post_type( (int) $hint_id ) ) { return (int) $hint_id; }
	$try = array( $url );
	$base = preg_replace( '/-\d+x\d+(?=\.[a-z0-9]+$)/i', '', $url );          // strip -683x1024
	$try[] = $base;
	$try[] = preg_replace( '/(\.[a-z0-9]+)$/i', '-scaled$1', $base );          // big-image originals
	foreach ( $try as $u ) { if ( $id = attachment_url_to_postid( $u ) ) { return $id; } }
	return 0;
};

$fh  = fopen( $file, 'r' );
$col = array_flip( fgetcsv( $fh ) );
$learn = array(); $log = array( array( 'image_url', 'target', 'id', 'old_alt', 'new_alt' ) );
$n = array( 'library' => 0, 'learn' => 0, 'skipped' => 0, 'not_found' => 0 );

while ( false !== ( $r = fgetcsv( $fh ) ) ) {
	$url = $r[ $col['image_url'] ];
	$alt = trim( $r[ $col['recommended_alt_exact'] ] );
	$loc = $r[ $col['alt_change_location'] ];
	if ( 'Y' === $r[ $col['decorative_y_n'] ] || '' === $alt ) { $n['skipped']++; continue; }
	if ( false !== strpos( $loc, 'learn post_content' ) && preg_match( '#/uploads/learn/([a-z0-9-]+)\.webp$#', $url, $m ) ) {
		$learn[ $m[1] ] = $alt; continue;
	}
	if ( false === stripos( $loc, 'media library' ) ) { $n['skipped']++; continue; }   // charts, hard-coded widget images
	$id = $find_attachment( $url, $r[ $col['attachment_id'] ] );
	if ( ! $id ) { $n['not_found']++; WP_CLI::warning( "No attachment for $url" ); continue; }
	$old   = (string) get_post_meta( $id, '_wp_attachment_image_alt', true );
	$log[] = array( $url, 'media_library', $id, $old, $alt );
	if ( $apply && $old !== $alt ) { update_post_meta( $id, '_wp_attachment_image_alt', sanitize_text_field( $alt ) ); }
	$n['library']++;
}
fclose( $fh );

global $wpdb;   // learn heroes: article hero + "Featured story" on hub pages (cards use /learn-card/ and are not touched)
foreach ( $learn as $slug => $alt ) {
	$src   = content_url( "uploads/learn/$slug.webp" );
	$posts = $wpdb->get_results( $wpdb->prepare(
		"SELECT ID, post_content FROM {$wpdb->posts} WHERE post_status = 'publish' AND post_content LIKE %s",
		'%' . $wpdb->esc_like( 'src="' . $src . '"' ) . '%'
	) );
	foreach ( $posts as $p ) {
		$new = preg_replace_callback( '#<img\b[^>]*(?<![-\w])src="' . preg_quote( $src, '#' ) . '"[^>]*>#i', function ( $m ) use ( $alt ) {
			$a = 'alt="' . esc_attr( $alt ) . '"';
			return preg_match( '/\balt="[^"]*"/i', $m[0] ) ? preg_replace( '/\balt="[^"]*"/i', $a, $m[0], 1 ) : preg_replace( '/^<img\b/i', '<img ' . $a, $m[0] );
		}, $p->post_content );
		if ( $new === $p->post_content ) { continue; }
		$log[] = array( $src, 'learn_post_content', $p->ID, '(inline, see revision)', $alt );
		if ( $apply ) {
			wp_save_post_revision( $p->ID );
			$wpdb->update( $wpdb->posts, array( 'post_content' => $new ), array( 'ID' => $p->ID ) );   // bypasses kses so fetchpriority/srcset survive
			clean_post_cache( $p->ID );
		}
		$n['learn']++;
	}
}
$out = dirname( $file ) . '/alt-update-log-' . gmdate( 'Ymd-His' ) . '.csv';
$fo  = fopen( $out, 'w' ); foreach ( $log as $l ) { fputcsv( $fo, $l ); } fclose( $fo );
WP_CLI::success( sprintf( '%s. Library: %d, learn posts: %d, skipped: %d, not found: %d. Log: %s',
	$apply ? 'Applied' : 'Dry run', $n['library'], $n['learn'], $n['skipped'], $n['not_found'], $out ) );
```

Expected dry-run result:
- **Library: 345.** That is 276 city heroes, 64 page heroes, the home hero (ID 6870), `Samantha4-scaled.jpg`, `rsw_600h_600cg_true.webp` and the 2 logos.
- **Learn posts: at least 69** article heroes, plus hub pages if their "featured story" markup lives in post_content.
- **Not found: 0.**

If hub pages show no matches, the featured story is printed by the learn hub template. In that case, have that template output the same alt the article hero uses.

### 6.3 Rank Math image sitemap

First turn on Rank Math → Sitemap Settings → General → **Images in Sitemaps** and **Include Featured Images**. Then add this to the same mu-plugin:

```php
add_filter( 'rank_math/sitemap/urlimages', function ( $images, $post_id ) {
	$post = get_post( $post_id );
	if ( ! $post ) { return $images; }
	$have = wp_list_pluck( (array) $images, 'src' );
	$add  = array();
	if ( 'learn' === $post->post_type ) {
		$add[] = content_url( 'uploads/learn/' . $post->post_name . '.webp' );                 // the article's own hero only
	} else {
		$hay = $post->post_content . ' ' . str_replace( '\/', '/', (string) get_post_meta( $post_id, '_elementor_data', true ) );
		if ( preg_match_all( '#https://alignlending\.com/wp-content/uploads/(?:\d{4}/\d{2}/align-hero-[a-z0-9-]+\.webp|research/[a-z0-9-]+/charts/[a-z0-9-]+\.png)#i', $hay, $m ) ) {
			$add = array_merge( $add, array_unique( $m[0] ) );
		}
	}
	foreach ( $add as $src ) {
		if ( ! in_array( $src, $have, true ) && false === strpos( $src, '-phone.' ) ) { $images[] = array( 'src' => $src ); }
	}
	return $images;
}, 10, 2 );
```

Verify: `/page-sitemap.xml` should list `<image:loc>` under city and product URLs, and `/learn-sitemap.xml` one per article. Google ignores `image:caption` and `image:title`, so `image:loc` is enough.

### 6.4 og:image and featured images for the 35 portrait pages

1. Set Rank Math → Titles & Meta → Global Meta → OpenGraph Thumbnail to `align-share-home-1200x630-1.jpg` (ID 10425).
2. Set each page's featured image to the attachment below with `wp post meta update <page_id> _thumbnail_id <attachment_id>`. Rank Math then uses it for og, twitter and primaryImageOfPage.

| Pages | Attachment (ID) |
|---|---|
| `/editorial-policy/` | align-hero-editorial-policy.webp (10862) |
| `/licensing/` | align-hero-about-us-v2.webp (9348) |
| `/loan-limits/` | align-hero-loan-limits.webp (10966) |
| `/michigan-transfer-tax-calculator/` | align-hero-michigan-transfer-tax-calculator.webp (10963) |
| `/usda-eligibility-check/` | align-hero-usda-eligibility-check.webp (10969) |
| `/privacy-policy/` | align-hero-borrowsmart-access.webp (9364), or a new legal hero per F6 |
| `/terms-and-conditions/` | align-hero-cash-out-vs-home-equity.webp (8583), or a new legal hero per F6 |
| `/real-estate-agents/` | align-hero-real-estate-agents.webp (10147) |
| `/reviews/` | align-hero-reviews.webp (10151) |
| `/purchase/down-payment-assistance/` | align-hero-first-time-homebuyer-v2.webp (9314) |
| `/product-loans/1099-income-loans/` | 10460 |
| `/product-loans/asset-based-income-loans/` | 10462 |
| `/product-loans/heloc/` | 10456 |
| `/product-loans/manufactured-home-loans/` | 10464 |
| `/product-loans/non-warrantable-condo-loans/` | 10458 |
| `/product-loans/physician-loans/` | 10466 |
| County hubs: Genesee, Kent, Lapeer, Lenawee, Livingston, Macomb, Monroe, Oakland, Ottawa, St. Clair, Washtenaw, Wayne | Their current hero: 9465, 10636, 9756, 9891, 9464, 9614, 9592, 9462, 10126, 9805, 9538, 9570 |
| `/compare-loan-estimates/`, `/mortgage-michigan/additional-cities/`, `/press/`, `/learn/michigan-land-contract/`, `/learn/michigan-taxable-value/`, `/learn/michigan-transfer-tax/`, `/learn/mortgage-glossary/` (no hero) | align-share-home-1200x630-1.jpg (10425). The 4 learn pages also have no hero image at all; give them one. |

The city and product og images are WebP at 1920×1085. Check a sample in the LinkedIn Post Inspector and the Facebook Sharing Debugger. If either rejects WebP, ask the compression agent for 1200×630 JPG share versions.

### 6.5 Research charts and learn schema

- **Charts:** for each `figure.ar-fig`, set the `<svg aria-label>` and the Report JSON-LD ImageObject `caption` to the CSV `recommended_alt_exact`, and add `width`/`height` from the PNG: mix 1600×1000, denials/channel/reasons 1600×787, dti 1600×961, loan-types 1600×555, manufactured 1600×593, map 1600×2165, counties 1600×1309, trend 1600×961, uncapping map 1600×2127, southeast 1600×1019, top-counties 1600×1309, how-it-works 1600×956. Point `WebPage.primaryImageOfPage` at the lead chart (the og image). Keep the H3 takeaways and source figcaptions as they are; these are the captions the brief asked for.
- **Learn Article:** apply the template changes in F9.

### 6.6 QA checklist and rollback

1. View source on `/mortgage-lender-flint-mi/`. `img.adp-hero__img` should carry the CSV alt, and `og:image:alt` and the ImageObject `caption` should match it.
2. Spot-check 10 cities across counties: Grosse Pointe Farms, Traverse City, Marquette, Holland, Ann Arbor, Detroit, Waterford, Lapeer, Monroe and Brighton.
3. `/learn/what-is-conventional-97-loan/`: the hero alt no longer contains "3% down".
4. `/learn/fixed-vs-arm/`: the "Featured story" image has alt, and the learn cards still have `alt=""` inside the `aria-hidden` link.
5. Home: the collage images are still `alt=""`.
6. Run axe or WAVE on one page per template. Expect no "image missing alt" errors and no "redundant alt" warnings on the cards.
7. Sitemaps show `<image:loc>`. Share previews for 1 county hub and 1 product page show a landscape image.
8. **Rollback:**
   - Library: restore `old_alt` from `alt-update-log-*.csv`.
   - Learn: restore the revision saved by the script.
   - mu-plugin: delete the file.

---

## 7. Patterns and rules the alt text follows

### 7.1 Writing rules

- Each alt is 125 characters or fewer: the 432 meaningful rows run 13–125, averaging 105.
- No "image of" or "photo of", no exclamation points, no rates, APR, payments or "low" claims, and no stated financing outcome for illustrated people.
- Every alt describes what is visible: house style, setting, season and light. The topic appears only when it is visible, for example a renovation, moving boxes, a lockbox, dog tags or a survey stake.
- People photos use the name. Where the role is printed beside the photo (the city hero card shows "Broker Owner and Senior Loan Originator, NMLS 1647301"), the alt is "Samantha Shelton of Align Lending", which adds the entity without repeating the role. A setting is named only when it is visible: "in the Align Lending office" for `Samantha4`, where the sign shows.
- Charts state the finding with the exact figures from the chart's own data labels.

### 7.2 Why city alts say "illustrating homes in [City], Michigan"

The brief asks for the place "when the image actually shows it". These heroes are generated scenes chosen to represent each city's typical housing: Grosse Pointe brick colonials, Traverse-area bay views, Lapeer farmhouses, Macomb canal homes. They are not photographs of the city.

The pattern puts the city in the alt for local relevance, and it tells a screen-reader user what the picture is for, without claiming that a lake, house or street exists in that city.

**Two alternatives, one regex each, if Align prefers:**
- **(a) Assertive:** replace `, illustrating homes in ` with ` in `. Use this only if real local photos replace the illustrations.
- **(b) Strict:** delete everything from `, illustrating homes in` to the end.

### 7.3 Decorative rules

`alt=""` stays when:
- the image sits inside an `aria-hidden` link that a text link duplicates (cards, guide covers), or
- it repeats an image already announced (the avatar), or
- it is a collage behind a form.

Never add alt to those, and never mark a page's primary image decorative.

### 7.4 One image, one alt

The Media Library stores one alt per image, which renders on every page that uses it. That is why every hero alt is written to stay true on all of its pages, for example county hubs that borrow a city hero. It is also why reused heroes (F6) should be replaced rather than re-described.

---

## 8. Coordination and open items

- **Compression agent (part 1), whose files are in this folder:**
  - **Replacements** (`optimized-manifest.csv`): where possible, replace each file in place so attachment IDs and alts survive, for example with Enable Media Replace. If a file is uploaded as a new attachment under its `new_suggested_filename`, join `alt-text.csv.image_url` to `optimized-manifest.csv.original_url` and copy `recommended_alt_exact` onto the new attachment.
  - **New og cards** (`og-image-map.csv`, `align-og-*-1200x630.jpg`): Rank Math prints each og card's library alt as `og:image:alt`. Give each new card the alt of the hero it was cropped from. Where `og-image-map.csv` supplies a card, it replaces the hero in the section 6.4 table; the Rank Math default-image change still applies.
  - **Home hero** (`delivery-fix-list.csv` D01): the planned `<img class="adp-hero__img" … alt="">` gets its alt from the mu-plugin. The CSV row for `align-lending-michigan-home-hero.webp` sets the library alt.
  - **IPTC:** keep or add IPTC metadata (F7).
- **Content and compliance:** the "3% down" wording in the Conventional 97 title and H1 (F2), the `/learn/why-work-with-align-lending/` image (F6), and the Editorial Policy imagery line (F7) need Align approval.
- **Bing:** Bing Webmaster is not connected. Bing Image Search also weighs alt and surrounding text. After launch, export Bing's Search Performance with the Images filter to measure image clicks; no Bing figures are claimed here.
- **CSV legend:**
  - `current_alt` is what renders today. Where an image renders more than one alt, the variants are listed with their counts.
  - `media_library_alt_current` is the stored `_wp_attachment_image_alt`. Learn images are not attachments.
  - `viewed_y_n = N` appears only on the 421 decorative learn cards.

---

## Auditor corrections

*Added by the independent auditor on 2026-11-15. Full detail in `08-audit/audit-images.md`; row-level changes in `08-audit/corrections-images.csv`. Verdict: **PASS WITH CORRECTIONS**. **Do not load `alt-text.csv` until the corrections file is applied.***

**Confirmed:** 3,433 of the 3,849 empty-alt occurrences (428 images, 89.2%) are correctly decorative, and 416 occurrences (380 images) are meaningful. The markup was verified: learn cards and guide covers sit in `aria-hidden` links, and the avatar copy sits inside a labelled button. The HTML widget renders `alt=""` while the Media Library alt exists; this was checked live on Grosse Pointe Farms and through REST IDs 9563 and 9352. "3% down" appears on the Conventional 97 hero. Rank Math's sitemaps have 0 `image:loc` entries (live: page-sitemap 363 URLs, learn-sitemap 482). A 40-row sample (15 city, 10 learn, 5 people, 5 charts, 5 decorative) is 40/40 accurate to the image and 40/40 at 125 characters or fewer. The alt mu-plugin composes correctly with the optimizer's snippet 1 and leaves decorative images alone (tested in a WordPress-stub harness).

**Corrections**
1. **"quiet" is a banned fair-housing word** (guide §6). It appears in 30 recommended alts (27 city heroes, the VA plan hero, about-us-v2 and how-to-budget-for-home-maintenance), so it is **P0 before load**. "modest" and "tidy" in 7 rows put a subjective quality next to a place name. All of these are replaced with physical descriptions ("residential street", "calm lake").
2. **People's characteristics:** 58 learn and page alts describe age, sex, family or marital status ("young family with a toddler", "older couple", "mother and daughter", "woman"). Rubric §3.10 (100 anchor) and guide §7.4 bar this, and Michigan's Elliott-Larsen Act protects age, sex, marital status and familial status. Neutral rewrites keep the visible content ("Two people holding up keys…"). 3 more rows drop "family" used for a room or house.
3. **Coverage:** 46 live learn hero alts state an outcome or a rate/payment implication, and only 34 are in the CSV. **13 rows were added** after the auditor viewed each image. They include "…lower the monthly payment" (refinancing-to-remove-mortgage-insurance), "…mortgage news about falling rates" (mortgage-news) and "…financed through a USDA loan program". The earlier coverage check matched on filename, which collides with the learn-card rows that share basenames. Match on `image_url`.
4. **Remaining learn batch (P2):** 399 learn alts outside the CSV were never checked against these rules. 199 describe people's characteristics, 97 add "Michigan"/"Midwestern" to generic scenes (your own F11 rule) and 109 use topic-keyword framing ("…weighing the pros and cons of…"). Add a §7.1 rule: no subjective place adjectives, and describe people only by number and visible action.
5. **Scorecard (§4):** relabel it "Alt and image-semantics diagnostic", not the rubric Media score. 35 of its 100 points (social/schema, files/sitemap) are outside rubric §3.10, and its F grades contradict the anchors. The single published Media score is the reconciled one in the optimization report: sitewide 84.9 (B), city 75 (C), money pages 74 (C).
6. **§6.3 sitemap filter, 2 bugs:** (a) it adds `/uploads/learn/{slug}.webp` for 4 learn posts that have no hero; 2 were checked live and return 404. Add a `file_exists` guard. (b) Its regex picks up the 4 WordPress sub-sizes from the hero srcset stored in `_elementor_data`: tested on the Flint widget, it returns 7 URLs instead of 2. Filter with `preg_grep('#-\d+(?:x\d+|w)\.webp$#', …, PREG_GREP_INVERT)`.
7. **Priorities:** F4 (image sitemap) P1 → **P2**, because the heroes are plain `<img>` elements that Google already discovers. F7 (AI-imagery disclosure) P2 → **P1**, because rubric §3.10's 0–39 anchor covers AI people presented as real and the optimizer strips metadata without embedding IPTC. The "illustrating homes in [City], Michigan" convention is **approved** once F7.1 ships and corrections 1–2 are applied.
8. **Cross-team data flag:** `hmda-2025-counties.png` shows Oakland at 13,824 purchase loans, the same figure `hmda-2025-mix.png` gives for 2024 Michigan refinances. `[VERIFY: against the FFIEC HMDA extract before the chart alts ship]`.
