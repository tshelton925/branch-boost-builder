# Link Health & Architecture Report: alignlending.com

**Team:** Links, part 1 of 2 (link health, architecture, external-link quality). Article-to-article linking strategy is covered by the companion agent in this folder.
**Data:** crawl of 2026-11-15 (835 live HTML pages + 96 legacy redirects), `link_graph.json`, `inlinks.json`, `pages.jsonl`, `page_summary.csv`, `external_links.json`, `external_status.jsonl`, the live REST API and redirect spot-checks (fetched politely, 2–3 at a time), GSC through DataWise (90 days to 2026-11-10).
**Files in this folder:** `broken-links.csv` (242 rows), `external-link-policy.csv` (1,849 domains), `internal-link-fixes.csv` (56 rows), this report.

> **Data limitation, stated up front.** The background checker (`external_status.jsonl`, 11,643 URLs, finished 04:05 UTC) ran from this sandbox, and the sandbox's egress proxy refused nearly every outside host: 10,557 `ProxyError`, 78 `ConnectionError` (all `http://`) and 811 `InvalidSchema` (the `sms:` text button, which is not broken). Only **197** URLs returned a real status: michigan.gov became reachable late in the run, plus storage.googleapis.com and mirealtors.com. I re-checked the other **159 michigan.gov URLs** myself once that host opened. **Verified so far: 353 URLs, of which 2 are confirmed 404s and 21 redirect to a new address.** The remaining **~11,290 external URLs are unverified.** I did not mark any of them broken without evidence. Instead I give (a) every defect I could prove from the HTML (wrong targets, insecure `http://`, archived mirrors, policy violations), and (b) a re-run command for a machine with open internet (section 7). Internal links, internal PDFs and the legacy redirects *were* all checked live.

---

## 1. Summary

The internal link graph is technically clean. There are no orphans, no broken internal links, every page sits within 2 clicks of the homepage through navigation, all 835 sitemap URLs return 200 with a self-referencing canonical, the 96 legacy posts each 301 to a live page in one hop, and a 10-URL spot-check of the 293 legacy location URLs found the same. The problems are about where the links point and how much noise surrounds them:

1. **The two main money hubs get almost no editorial links.** `/refinance/` has **5** contextual inlinks and `/purchase/` has **16**, while their own sub-pages get 25–492 each. City pages, learn articles, product pages and even the homepage link past the hubs to sub-pages (`/refinance/break-even-review/`, `/purchase/homebuyer-game-plan/`).
2. **Link volume per page is very high and mostly boilerplate.** A city page averages **318 links**: 182 navigation links (the 43-item menu printed **three times** in the HTML, plus a 48-link footer), 69 external links and only 42 internal body links. A learn article averages 327 links.
3. **External citations are mostly good sources, but there are too many of them and they repeat.** 92% of the 49,219 body external links go to government or primary sources. But city pages average 65 external links (40 unique) and learn articles average 61 (27 unique), because each source is linked inline and then again in Sources. **69 links on 60 pages break the brand link policy** (ad-supported data aggregators, an affiliate review site, a lead-gen tax-appeal service, a course seller, a home-services marketplace). Another **171 Wikipedia links** sit on city pages, and 58 of those use an entity anchor ("Ford Motor Company", "Kettering University") that actually opens the city's general Wikipedia article. Of the 353 external URLs that could be checked live, 2 are 404s and 21 redirect; the other ~11,290 could not be checked from this sandbox (§7).
4. **The 293 `/mortgage-location/` URLs and 96 root-slug posts are still `publish` in WordPress.** The REST API returns `X-WP-Total: 293` and `96`. Their redirects work, sitemaps exclude them (404) and the feed is 410. GSC still credits queries to some legacy URLs (for example "flint mortgage" → `/mortgage-location/flint-mi-48552/`, 126 impressions). This is consistent with consolidation lag, since the new city pages were published 2026-09-09, but it needs a URL Inspection check.

**Headline scores:** Internal linking **71 (C)** · External linking **70 (C)**.

---

## 2. Scorecard

Scores use the BRIEF §4 rubric. Metrics: contextual inlinks = unique pages linking from body copy; "generic/empty" = empty-alt image links plus "Read more"; ext = body external links excluding the Calendly button.

| Page group (n) | Median contextual inlinks (min) | Internal linking | Rationale | External linking | Rationale |
|---|---|---|---|---|---|
| Home (1) | 473 | **80 B** | 121 body links including 52 city pages and every key tool, but no body link to `/purchase/` or `/refinance/`. The "Refinance" card goes to `/refinance/break-even-review/`. | **82 B** | 7 external links, all owned profiles (GBP, social) plus NMLS. Nothing off-policy. |
| Purchase hub + 10 subs (11) | 63 (16) | **72 C** | Subs are well linked (Game Plan 492, Budget Review 145), but `/purchase/` itself has 16 inlinks, 12 of them from its own subs. No visible breadcrumb. | **74 C** | Only 3.2 external links per page and 71% gov/primary. Purchase pages cite almost no primary sources (MSHDA, CFPB, HUD) that would support their claims. |
| Refinance hub + 3 subs (4) | 90 (5) | **60 D** | `/refinance/` has **5** contextual inlinks: 3 from its own subs and 2 from city pages. 97 refinance articles link to the break-even sub-page instead. | **74 C** | 3.2 external links per page and 77% gov/primary. Thin sourcing for refinance rules (Fannie/Freddie seasoning, CFPB). |
| Products: hub + 21 (22) | 40 (2) | **73 C** | Core products are strong (Conventional 417, FHA 361, VA 329). Physician (2), 1099 income (4) and asset-based (5) are stranded: the Non-QM page does not list them. No visible breadcrumb. | **84 B** | 4.8 external links per page, 80% gov/primary, correct `rel="noopener"`, no violations. |
| Calculators/tools (18) | 50 (8) | **76 C** | Property-tax calculator 541 and loan limits 351, but refinance calculator 8 and VA calculator 9. `/refinance/` and `/product-loans/va-loans/` do not link them. | **82 B** | 95% gov/primary. Two tools carry 84 external links each (heavy, but they are data citations). |
| City pages (276) | 9 (2) | **68 D** | Every city links up to its county hub and to a median of 6 siblings, but 13.8 of its ~30 body targets are an identical template block. Only 3 link `/purchase/` and 2 link `/refinance/`. No visible breadcrumb. 2 links pass through a 301. | **60 D** | 65 external links per page (max 122), 40 unique. 57 policy-violation links, 123 insecure `http://` links, 171 Wikipedia links (58 wrong-target). Nofollow is applied inconsistently (6%). |
| County + state hubs (16) | 21 (2) | **76 C** | County hubs link every city (276/276 covered) and have visible breadcrumbs. Florida and North Carolina hubs have 2 contextual inlinks each. 39 cities sit in a catch-all "additional cities" hub. | **76 C** | 99% gov/primary, but **96% of those citations are `nofollow`**, which is the wrong convention for authoritative sources. |
| Learn (471) | 19 (3) | **73 C** | Visible breadcrumbs on all 471. 27% of articles have fewer than 10 contextual inlinks. 16% of body links are anchorless card images or "Read more". The buyer and refinance CTA blocks skip the hubs. 4 self-links. | **78 C** | 98% gov/primary with correct `rel="noopener"`, but 61 links per page, of which 55% repeat an earlier link. 12 violation links (security.org, FortuneBuilders, Houzz, Trading Economics). eCFR links point at whole Parts, not sections. |
| Research (4) | 4 (1) | **55 F** | The Uncapping Study is a hit (344 inlinks), but the Michigan Mortgage Market Report has 2 contextual inlinks (both from `/research/` pages) and `/research/` has 1. | **86 B** | 100% gov/primary (HMDA, Census, Treasury). |
| About/trust/legal (12) | 10 (3) | **62 D** | `/about-us/` has 3 inlinks and `/reviews/` has 7. The "5.0 on Google, 123 reviews" claim appears on 353 pages but is linked only on the homepage. | **80 B** | The press page links third-party features (MPA, AIME podcasts, CanvasRebel). That is acceptable for press, but use `nofollow` on the pay-to-feature interview sites. |
| **Sitewide** | **(835)** | **71 C** | No orphans, no broken internal links, click depth ≤2 via navigation and ≤4 via body links. Held back by starved hubs, a menu printed 3 times, 4,245 redundant card links and missing visible breadcrumbs on 349 pages. | **70 C** | 92% gov/primary is strong. Held back by 69 policy violations, 171 Wikipedia links, 136 `http://` links, 15 rel-less sitewide links to alignwithalign.com and citation duplication. Of the 353 URLs that could be checked, 2 are 404s and 21 redirect; live status is **unverified** for the other ~11,290. |

---

## 3. Findings ranked by impact

### F1 (critical): `/refinance/` and `/purchase/` hubs are bypassed by every template
- **Evidence:** `inlinks.json` gives `/refinance/` 5 contextual inlinks (`/refinance/break-even-review/`, `/refinance/cash-out-vs-home-equity/`, `/refinance/home-equity-review/`, plus 2 city pages). `/purchase/` has 16: 8 from its own sub-pages, 3 from city pages, and `/mortgage-michigan/`, `/mortgage-process/`, `/product-loans/`, `/real-estate-agents/` and `/refinance/`. For comparison, `/purchase/homebuyer-game-plan/` has 492 and `/refinance/break-even-review/` has 115.
- **Why:** the city template's "Loan options" list links `/product-loans/` twice and never the hubs (3/276 city pages link `/purchase/`, 2/276 link `/refinance/`). 175 learn articles carry a "Build/Get my homebuyer game plan" block and 97 carry "Run a refinance break-even review" or "Review my break-even". The homepage cards point to sub-pages.
- **Fix:** template edits in `internal-link-fixes.csv` (P0/P1): city list items "Buying a home in {City}: how we plan it" → `/purchase/` and "Refinancing a {City} home" → `/refinance/`; one hub link appended to each learn CTA block; text links under the homepage Buy and Refinance cards; refinance links from 6 refinance-relevant product pages. Expected result: `/refinance/` rises from 5 to roughly 380 contextual inlinks and `/purchase/` from 16 to roughly 460, without adding any new sitewide navigation.

### F2 (high): city pages carry 65 external links each; learn articles carry 61, about half of them repeats
- **Evidence:** body external links per page are 69.1 on city pages (40.2 unique, 256 of 276 pages ≥50, max 122) and 61.7 on learn articles (28 unique, 406 of 471 pages ≥50). Flint has 52 body external links to 34 unique URLs. `/learn/usda-loan-basics/` has 60 links to 24 unique URLs; `ecfr.gov/.../part-3555` alone is linked 9 times with different section anchors but the same URL.
- **Effect:** outbound links to authoritative sources do not hurt rankings by themselves, and the 92% gov/primary mix is a trust asset. The real costs are three:
  1. **UX:** dozens of new-tab links, many repeated, and on city pages a mix of data sources, festivals, schools and employers.
  2. **Internal link share:** on a city page only 13% of links are internal body links, so the link signals that matter (to `/purchase/`, the county hub, siblings) are a small share of the page.
  3. **Maintenance:** 11,643 unique external URLs is a large link-rot surface to monitor.
- **Fix:** adopt the citation pattern in §5 (cite at the claim once, list once in Sources, separate "Local resources" on city pages, cap at about 35 unique external URLs on city pages and about 25 on articles). This removes roughly 25 repeated links per city page and 30 per article without dropping any source.

### F3 (high): 69 body links break the brand link policy, plus 171 Wikipedia links
- **Evidence (`broken-links.csv`, status "policy violation"; `external-link-policy.csv`, classification VIOLATION):**
  - **Ad-supported or lead-gen data aggregators cited as the source of population and income figures on city pages:** worldpopulationreview.com (39 links), city-data.com, incomebyzipcode.com, michigan-demographics.com, neilsberg.com, zipdatamaps.com, unitedstateszipcodes.org, prop-metrics.com, zippia.com.
  - **Commercial lead-gen:** ownwell.com, a property-tax appeal service, on Emmett and St. Clair.
  - **On learn articles:** security.org, an affiliate review site, on `/learn/diy-home-security-upgrades/`; fortunebuilders.com, a course funnel, on `/learn/how-to-purchase-home-at-auction/`; houzz.com, a home-services marketplace, on 3 articles; tradingeconomics.com on `/learn/what-to-do-if-your-home-doesnt-sell/`.
- **No lender, rate site or Zillow/Realtor.com/Redfin-type portal links were found.** I searched all 1,849 domains for lender, bank, rate, realty, portal and affiliate patterns.
- **Wikipedia:** 171 links on 132 city pages. In 58 of them the anchor names an entity (for example `/mortgage-lender-allen-park-mi/` "Ford Motor Company", `/mortgage-lender-flint-mi/` "Kettering University" and "Flint Cultural Center") but the URL is the city's Wikipedia article. That is a wrong-target error as well as a non-primary source.
- **Fix:** replace each with a Census ACS table (data.census.gov or Census Reporter, already used on most city pages), the employer's own site, or the municipal assessor or equalization page. P0 for violations, P1 for Wikipedia.

### F4 (high): legacy URLs are still published; GSC still credits some of them
- **Live checks (2026-11-15):**
  - REST `/wp-json/wp/v2/mortgage-location` returns `X-WP-Total: 293` and `/wp-json/wp/v2/posts` returns `96`, all `"status":"publish"`.
  - `/post-sitemap.xml` and `/mortgage-location-sitemap.xml` return 404, `/feed/` returns 410 and the `/mortgage-location/` archive returns 404.
  - Spot-check of 10 URLs (6 mortgage-location, 4 posts): **all single-hop 301 → 200** (for example `/mortgage-location/saint-clair-mi-48079/` → `/mortgage-lender-st-clair-mi/`, `/buy-home-auction/` → `/learn/how-to-purchase-home-at-auction/`).
  - The **http://www.** variant chains 3 hops: `http://www.alignlending.com/mortgage-location/flint-mi-48506/` → `https://www.…/flint-mi-48506/` → `https://www.…/mortgage-lender-flint-mi/` → `https://alignlending.com/mortgage-lender-flint-mi/`.
  - The 293 legacy URLs collapse onto 138 city pages (53 Detroit ZIP URLs → `/mortgage-lender-detroit-mi/`).
  - The 96 legacy posts all 301 in one hop to live `/learn/` pages. Four targets receive 2–3 legacy posts each (`/learn/first-time-home-buyers/` ×3, `/learn/home-buying-process/` ×3).
- **GSC (90 days):** "flint mortgage" → `/mortgage-location/flint-mi-48552/` (126 impressions, position 18.5), "mortgage broker wixom mi" → `/mortgage-location/wixom-mi-48393/` (105), "fixed rate mortgage farmington mi" → `/mortgage-location/farmington-hills-mi-48331/` (57). `/mortgage-location/pontiac-mi-48341/` drew 2 clicks and `/well-water-home-value/` 176 impressions.
- **Recommendation:** see §6.

### F5 (medium-high): the 43-item menu is in the HTML three times, and 15 sitewide links leave the domain with no `rel`
- **Evidence:** `home.html` contains `nav.elementor-nav-menu--main`, `nav.elementor-nav-menu--dropdown` and an `elementor-location-popup` menu. That is 91 header link elements plus 43 popup link elements, all from the same 43 targets, on every page (popup link sets are identical on 835 of 835 pages).
- **Off-domain links:** 5 menu items point to `www.alignwithalign.com` (`/buy`, `/payment-lab`, `/own`, `/plan`, `/ask`) with `target="_blank"` and **no rel**. Repeated in 3 menu copies, that is 12,525 links. These are the only `target="_blank"` links on the site without `noopener`.
- **Mobile toggle:** the hamburger is an `<a>` with no text and no `aria-label`.
- **Fix:** keep one copy of the menu, and either point the 5 tool links to on-site landing pages or add `rel="noopener"` (plus `nofollow` if the tool domain is not meant to rank). **[VERIFY: alignwithalign.com ownership.** The site is outside this session's network allowlist and the Align connector had no record of it.]

### F6 (medium): every learn article's related-card grid adds 9 redundant links
- **Evidence:** `section.al-related > article.al-card` contains `a.al-card-img` (image link, `alt=""`, `aria-hidden`), then the `h3` title link, then a "Read more" link, all to the same URL. Sitewide that is **2,086 anchorless image links and 2,159 "Read more" anchors** on 471 articles.
- **Fix:** keep only the title link and use a CSS stretched link so the whole card stays clickable (`internal-link-fixes.csv`).

### F7 (medium): visible breadcrumbs are missing on 349 pages that already have BreadcrumbList schema
- **Evidence:** visible trails exist on 470/471 learn pages (`nav.al-crumbs`), 13/13 county hubs (`nav.align-county-crumbs`) and 2 calculators.
- **Missing on:** 276 city pages, 22 product pages, 15 purchase/refinance pages, 16 calculators, 12 trust/legal pages, 4 research pages, 3 state hubs and 1 learn page. On all of these, schema exists without a visible trail. Flint's schema, for example, is `Home › Service Areas › Genesee County › Flint`.
- **Fix:** render the same trail visibly. This adds an in-body upward link (city → county hub → Service Areas) and matches Google's guidance that markup reflect visible content.

### F8 (medium): stranded money pages and assets
- **Stranded pages:** `/product-loans/physician-loans/` (2 contextual inlinks), `/product-loans/1099-income-loans/` (4), `/product-loans/asset-based-income-loans/` (5), `/mortgage-refinance-calculator/` (8), `/va-loan-calculator/` (9), `/research/michigan-mortgage-market-report/` (2), `/research/` (1), `/about-us/` (3), `/reviews/` (7), `/mortgage-florida/` and `/mortgage-north-carolina/` (2 each), `/mortgage-lender-marquette-mi/` (2).
- **Clear gaps:**
  - `/learn/physician-mortgage-loans/` never links its product page.
  - `/product-loans/non-qm-loans/` lists Bank Statement, DSCR and Jumbo but not 1099, asset-based or physician loans.
  - `/product-loans/va-loans/` links the funding-fee calculator but not the VA loan calculator.
  - `/refinance/` links no calculator.
  - The trust claim "5.0 on Google, 123 reviews" appears on 353 pages but is linked only on the homepage.
- **Fix:** each has an exact row in `internal-link-fixes.csv`.

### F9a (medium): confirmed dead and moved external links (from the 353 URLs that could be checked)
- **404:** `/michigan-property-tax-calculator/` links "Treasury lists this year's limits" to `https://www.michigan.gov/taxes/questions/iit/accordion/homestead/who-qualifies-for-a-homestead-property-tax-credit-1`, which lands on `/taxes/404`. Replace it with `https://www.michigan.gov/taxes/iit/tax-guidance/credits-exemptions/homestead-property-tax-credit` (verified 200).
- **404:** `/learn/how-well-water-impacts-homes-value/` links "EGLE's fee update notice" to an EGLE PDF (`…/RRD/Lab/FAQ-Drinking-Water-Lab-Fee-Updates-2026.pdf`) that lands on `/egle/404`.
- **21 michigan.gov URLs redirect (34 source/URL pairs):** these are old `/documents/…_7.pdf` paths and vanity URLs that now resolve to new `/-/media/…` or section URLs. Examples: `/documents/cis_ofis_03homegd_74854_7.pdf` on 5 pages, `/documents/treasury/TransferOwnershipGuidelines_423898_7.pdf` on 4. They still work, but update them to the final URLs (all rows are in `broken-links.csv`, P2) so they survive the next state site migration.
- **Extrapolation:** only about 3% of external URLs could be checked, and the checked set is almost all michigan.gov, which is well maintained. Expect a higher dead-link rate among the small municipal and school sites that make up most of the remaining 1,849 domains.

### F9 (medium): 136 insecure `http://` external links (81 unique source/URL pairs on 44 pages)
- **Evidence:** for example `http://www.sca.isr.umich.edu/` on 3 learn articles, `http://www.leg.state.fl.us/statutes/…193.155…` on the homestead guide, `http://www.villageofdryden.com/…` (8 links on `/mortgage-lender-dryden-mi/`), and `http://censusreporter.org/…` on Bloomfield Hills and Dryden.
- **Fix:** switch each to `https://` after confirming it loads. Rows are in `broken-links.csv`.

### F10 (low-medium): rel conventions are inconsistent
- County hubs put `nofollow` on 96% of government citations. City pages mark the first-section links `noopener nofollow` but the same URLs in Sources `noopener` only (Flint: MI 10K, Census Reporter, Land Bank).
- Learn pages are consistent (`noopener`, followed).
- Recommended conventions are in §5.

### F11 (low): internal anchor over-optimization from templates
- `/michigan-property-tax-calculator/` is linked with the exact anchor "Michigan property tax calculator" from 514 pages (77% of its anchors).
- On all 276 city pages the same anchors repeat: "How Michigan taxable value works" (276), "2026 Uncapping Study" (274), "HomeReady and Home Possible" (236), plus "Conventional Loans", "FHA Loans" and "VA Loans".
- Internal exact-match repetition carries little risk, but rotating city-specific anchors adds relevance. P2.

### F12 (low): small hygiene items
- **2 internal links through a 301:** Salem Township → `/washtenaw-county/` and Springfield Township → `/learn/homestead-exemption/`.
- **4 self-links** in learn copy.
- **1 "this guide" anchor** on Richland Township.
- **3 footer links to `/licensing/`.**
- **Glossary links counted as boilerplate:** about 120 "Full guide on …" links on `/learn/mortgage-glossary/` sit inside per-term `<footer>` tags.
- **Unstable archive targets:** 2 links point to archived mirrors (`ophelia.sdsu.edu:8443` on Flat Rock, `webharvest.gov` FEMA snapshot).

---

## 4. Internal architecture details

**Click depth (BFS from the homepage over the crawled link graph):**

| Path | Depth 0 | Depth 1 | Depth 2 | Depth 3 | Depth 4 |
|---|---|---|---|---|---|
| All links (navigation included) | home | 129 | 705 | 0 | 0 |
| Body links only | home | 92 | 516 | 224 | 2 (`/research/`, `/research/michigan-mortgage-market-report/`) |

Through body links only, 223 learn articles are 3 clicks deep. The navigation keeps them at 2. Depth is not the bottleneck; the distribution of inlinks is.

**Contextual inlink distribution by page type** (unique source pages; median, with min to max):

| Type | Median | Min to max | Pages with fewer than 10 |
|---|---|---|---|
| City | 9 | 2 to 21 | 59% |
| Learn | 19 | 3 to 796 | 27% |
| County hub | 21 | 14 to 61 | 0 |
| Product | 31 | 2 to 417 | 3 pages ≤5 |
| Calculator | 50 | 8 to 541 | — |
| Purchase subs | 64 | 18 to 492 | — |
| Refinance subs | 90 | 25 to 115 | — |
| Research | 4 | 1 to 344 | — |
| State hubs | 2 | 2 to 42 | — |
| `/purchase/` | 16 | — | — |
| `/refinance/` | 5 | — | — |

The weakest learn articles (3–4 inlinks) are off-topic lifestyle and investing pieces (for example `/learn/impact-of-zoning-laws-on-home-value/`, `/learn/creating-minimalist-home/`, `/learn/benefits-of-investing-in-student-housing-markets/`). Hand them to the content team for prune-or-merge decisions rather than adding links.

**Navigation sets (identical sitewide):**
- **Header:** 43 unique internal targets (16 products, Purchase + 4 subs, Refinance + 3 subs, Learn + 8 categories, Calculators, Service Areas, About, Samantha, Reviews, Contact, Our Process, Apply Now), printed twice.
- **Popup:** the same 43 again.
- **Footer:** 46 unique targets.
  - 10 product links that duplicate the header.
  - 9 learn category links that duplicate the header.
  - 4 calculators.
  - 6 PDFs. All return 200 with a `Link: rel="canonical"` header, so the `?v=` cache-busters are safe.
  - 3 research pages.
  - 3 state hubs.
  - 3 links to `/licensing/`.
- **Individual learn articles linked sitewide:** none (only `/learn/mortgage-glossary/` in the footer). This is correct.
- **Key money pages missing from navigation:** all county hubs, every individual calculator except the 4 in the footer, `/purchase/down-payment-assistance/` (72 inlinks), `/purchase/va-homebuyer-plan/` (18), `/purchase/self-employed-homebuyer/` (22), the 3 stranded non-QM products, `/product-loans/heloc/` and `/compare-loan-estimates/` (footer only).

**City and county hubs:**
- All 276 city pages link their county hub, and the 13 hubs together link all 276 cities.
- 52 cities are also linked from the homepage.
- One city (`/mortgage-lender-marquette-mi/`) has only 2 inlinks, and the median sibling-city links per page is 6.
- 39 cities live under `/mortgage-michigan/additional-cities/`, a catch-all with a generic name.

**Template share:** on city pages, 13.8 of about 30 unique body targets are the same block on every page (FHA, Conventional, VA, HomeReady, `/product-loans/` twice, Learn, `/start/`, property-tax calculator, Uncapping Study, taxable-value guide, Game Plan, loan limits). It is useful, but it is boilerplate, so it should carry the hubs.

**Other checks:**
- **Internal targets not crawled:** only `/start/` (200, `noindex, follow`, correctly outside the sitemap), plus the 2 redirecting URLs.
- **Self-links:** 4.
- **Empty anchors:** 2,091 (2,086 from card images, 5 on calculators) plus the hamburger toggle.
- **Generic anchors:** 2,159 "Read more", 69 "Read the article →" (press page, external) and 1 "this guide".
- **Broken internal links:** 0.

---

## 5. Recommended architecture changes

### 5.1 Header mega-menu
1. **Print it once.** In the Elementor Nav Menu widget set the dropdown breakpoint to "None" (the off-canvas popup already handles mobile), or drop the popup and keep the dropdown. This removes about 45 duplicate links per page.
2. **Replace the 5 alignwithalign.com items with on-site pages**:

   | Menu item | New target |
   |---|---|
   | Plan my purchase | `/purchase/homebuyer-game-plan/` |
   | Try payment scenarios | `/mortgage-calculator/` |
   | Explore my equity | `/refinance/home-equity-review/` |
   | Save my plan | `/start/` |
   | Ask Samantha a question | `/contact-us/` |

   If the tool must stay in the menu, add `rel="noopener"` (and `nofollow` unless the domain is meant to rank).
3. **Purchase column:** add *Down Payment Assistance* (`/purchase/down-payment-assistance/`), *VA Homebuyer Plan* and *Self-Employed Homebuyer*. These are high-intent pages that currently get no navigation link.
4. **Loans column:** group the products as *Buy* (Conventional, FHA, VA, USDA, HomeReady, Jumbo), *Self-employed & Non-QM* (Non-QM, Bank Statement, **1099 Income**, **Asset-Based**, DSCR, **Physician**), *Equity* (Home Equity Loan, **HELOC**, Cash-Out) and *Terms* (30-yr, 15-yr, ARM, Buydown). The column grows by 4 items, which is more than offset by removing the duplicate copy.
5. **Calculators:** add 4 sub-items: Mortgage Calculator, Home Affordability, Michigan Property Tax, Refinance Calculator.
6. **Service Areas:** add Oakland, Wayne, Macomb, Genesee, Washtenaw and Livingston County hubs plus "All Michigan areas". County hubs then receive sitewide links and pass them to the 276 city pages.
7. **Learn:** keep the 8 category links. Do not add individual articles to navigation.
8. **Hamburger toggle:** add `aria-label="Open menu"`.

### 5.2 Footer (48 → about 35 links)
- Collapse the three `/licensing/` links into "Licensing and disclosures" plus "Texas consumer complaint notice" → `/licensing/#texas-complaint-notice` (create the anchor id).
- Replace the 10 product links, which duplicate the header, with a *Service areas* list: the top 6 county hubs plus Florida and North Carolina.
- Keep Research, Calculators, Learn categories, editorial policy and the PDFs. Consider pointing the PDFs at a `/guides/` HTML landing page so the HTML page, not the PDF, collects the sitewide links.
- Link the trust-strip text "5.0 on Google, 123 reviews" to `/reviews/` in the shared template (353 pages).

### 5.3 Hubs
- **Make `/purchase/` and `/refinance/` the hubs that templates point to:** the city "Loan options" list, the learn CTA blocks, the homepage cards and refinance-relevant product pages (exact rows in `internal-link-fixes.csv`). Each hub should then link down to its subs (both already do) and to its calculator. `/refinance/` should add a link to `/mortgage-refinance-calculator/`.
- **Research hub:** add one contextual link to the Michigan Mortgage Market Report from the homepage, `/purchase/`, `/refinance/`, `/learn/mortgage-rates/`, `/learn/housing-market-trends/` and `/mortgage-michigan/`.
- **County hubs:** split `/mortgage-michigan/additional-cities/` (39 cities) into real county hubs wherever a county has 5 or more city pages, each with a visible breadcrumb. Leave the remainder in a regional hub with a descriptive name (for example "West Michigan and other areas"). Coordinate with `04-city-pages`.
- **Non-QM hub:** list all six self-employed/non-QM products (see F8).

### 5.4 Breadcrumbs
Render a visible trail matching the existing BreadcrumbList on:

| Page type | Trail |
|---|---|
| City pages | Home › Service Areas › {County} County › {City} |
| Products | Home › Loans › {Product} |
| Purchase subs | Home › Buy a Home › {Page} |
| Refinance subs | Home › Refinance › {Page} |
| Calculators | Home › Calculators › {Tool} |

Reuse the `nav.al-crumbs` markup from `/learn/`, or `[rank_math_breadcrumb]`. Use one breadcrumb style sitewide; the county hubs currently use a different `»` style.

### 5.5 External-link pattern (city pages and guides)
1. **Cite at the claim, once.** Link a source the first time its fact appears and do not repeat the same URL inline. On learn pages, link eCFR sections, not whole Parts: `https://www.ecfr.gov/current/title-7/section-3555.10` instead of `…/part-3555`. For Michigan law use `https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-27a`, the format already used on most pages.
2. **One Sources list at the end:** an ordered list, each URL once, labeled "Publisher — Document title (year)". Learn pages already do this (`span.al-src-pub`); city pages should match it.
3. **City pages get a separate "Local resources" box:** at most 12 official links (city or township hall, assessor, treasurer or tax payment, building and permits, school district, parks and recreation, road or drain commission, FEMA flood map). Remove festival, event, restaurant and employer links unless they support a housing decision. Employers belong in one sentence with the city or county economic-development source, not 5 separate employer homepages.
4. **Caps:** about 35 unique external URLs on a city page (today the average is 40 and the maximum 122) and about 25 on a guide (today 27). Calculators citing data tables can go higher.
5. **rel conventions:**

   | Link type | `rel` value |
   |---|---|
   | Government and primary citations | `noopener` (followed). Remove `nofollow` from the county hubs and the city first-section links. |
   | News | `noopener` |
   | Local businesses, events and other non-primary links | `nofollow noopener` |
   | Owned tools (Calendly, alignwithalign.com) | `nofollow noopener` |
   | Paid or sponsored features (if any) | `sponsored noopener` |

   Every `target="_blank"` link gets `noopener`.
6. **No statistics from aggregators.** Population and income come from the Census Bureau ACS (data.census.gov, or Census Reporter labeled "U.S. Census Bureau ACS via Census Reporter", as Flint already does). Property data comes from the municipal assessor or county equalization department.
7. **HTTPS only.** No `http://` links.

---

## 6. Legacy URLs: recommended handling

| Item | Current state (verified) | Recommendation |
|---|---|---|
| 301s (293 `/mortgage-location/…` → 138 city pages; 96 root posts → `/learn/…`) | All single-hop 301 → 200 (10/10 spot-checked; all 96 posts in crawl `redirects`) | **Keep permanently.** They carry old backlinks and GSC history, and they cost nothing. |
| http/www variants | `http://www.` legacy URL takes 3 hops | Add one edge rule (Cloudflare or `.htaccess`) that sends `http://` and `www.` to `https://alignlending.com/$1` **before** WordPress, so a legacy URL takes at most 2 hops. Better still, make the path rules host-agnostic so they reach the final URL in 1 hop. |
| WordPress status | 293 `mortgage-location` + 96 `post` items are `publish`; exposed at `/wp-json/wp/v2/mortgage-location` and `/wp-json/wp/v2/posts` | 1) Export the 389-row redirect map. 2) Load it as explicit 301 rules in Rank Math → Redirections (or server rules) so the redirects **no longer depend on the posts existing**. 3) Re-crawl the 389 URLs to confirm 301 → 200. 4) Then set the posts to **Draft** (trash after 30 days). 5) Set `show_in_rest => false` and `public => false` on the `mortgage-location` CPT, and unregister the empty CPTs `mortgage`, `michigan_mortgage` and `north-carolina-mortg` (REST returns 0 items for each). Do **not** unpublish before step 3: if a redirect is tied to the post, unpublishing turns it into a 404. |
| Sitemaps | Only `page-sitemap.xml` (363) + `learn-sitemap.xml` (472) in the index; `post-sitemap.xml` and `mortgage-location-sitemap.xml` 404 | Keep. In Rank Math → Titles & Meta also set Posts and Mortgage Locations to `noindex` and turn "Include in sitemap" off, as a safeguard if anyone re-enables them. |
| RSS | `/feed/` returns 410 | Keep. |
| GSC still showing old URLs | Queries credited to `/mortgage-location/flint-mi-48552/`, `/wixom-mi-48393/`, `/farmington-hills-mi-48331/`, `/pontiac-mi-48341/` and `/well-water-home-value/` in the 90-day window (Aug 17–Nov 10). City pages went live around 2026-09-09. | **Probably lag.** The 90-day window includes pre-redirect weeks, and many-to-one consolidations (53 Detroit ZIP URLs → 1 page) take Google longer. **Confirm:** in GSC URL Inspection for those 5 URLs, check that "Google-selected canonical" equals the new URL and that "Last crawl" is after 2026-09-09. In Performance → Pages, filter `/mortgage-location/` and compare the last 28 days with the prior 28: impressions should be falling. If after 90 days a legacy URL is still Google's selected canonical, treat it as a real problem (look for internal or external links still pointing at it, and confirm the target page is not `noindex`). No internal link currently points to any legacy URL (0 found). |
| Bing | No Bing data connected | Submit the sitemap index in Bing Webmaster Tools and use its URL Inspection on the same 5 URLs. **[Needs Bing export]** |

---

## 7. Broken links: what was and was not verified

| Check | Result |
|---|---|
| Internal links (889 unique targets) | **0 broken.** 2 links go through a 301 (in `broken-links.csv`). |
| Internal PDFs (13) | All 200, each with a `Link: <…>; rel="canonical"` header (checked live). |
| Legacy redirects (10 spot-checked + 96 in crawl) | All one hop to 200 (3 hops for `http://www.`). |
| External URLs checked (353: 348 michigan.gov, 4 storage.googleapis.com, 1 mirealtors.com) | **2 × 404** (P0 rows) and **21 redirecting URLs** (34 source/URL pairs, P2 rows). Everything else returned 200. |
| External URLs not checkable (~11,290) | **Unverified:** proxy refusal (`ProxyError`/`ConnectionError`). The 811 `sms:` URLs report `InvalidSchema`; they are valid text-message links, not broken. |
| External defects provable from HTML | 59 wrong-target links (58 Wikipedia + 1 "McLaren Health Care" → Flint & Genesee page), 81 insecure `http://` link pairs, 2 archived mirrors, 62 policy-violation link pairs. All are in `broken-links.csv`. |

**What each `broken-links.csv` row type means:**

| `status` value | Rows | Meaning | Priority |
|---|---|---|---|
| `404 (lands on …)` | 2 | Confirmed dead external link | P0 |
| `301 -> …` | 2 | Internal link through a redirect | P0 |
| `policy violation (domain)` | 62 | Off-policy source | P0 |
| `wrong target (…)` | 59 | Anchor and URL disagree | P1 |
| `insecure http://` | 81 | Live status unverified | P1 |
| `unstable archived mirror` | 2 | Link points to an archived copy | P1 |
| `external redirect -> …` | 34 | Works, but should be updated to the final URL | P2 |

**To finish the 404/410/5xx/DNS check**, run this from a machine with open internet:

```
python3 check_external.py <DATA dir>
```

`check_external.py` is the existing script in the scratchpad `scripts/` folder, which does HEAD then GET with 2 connections per host. Alternatively, run Screaming Frog in "List mode" on the URLs in `external_links.json`. Then filter status 404, 410, 5xx or DNS failure and append to `broken-links.csv` using the same columns. Treat 0/403/429 as bot-blocked, not broken. **Static risk list to check first:**
- 38 `legislature.mi.gov/documents/mcl/pdf/…` links.
- 16 `benefits.va.gov/HOMELOANS/…pdf` circulars.
- 6 `census.gov/quickfacts/fact/table/…/PST04522x` links (QuickFacts table IDs change yearly).
- 17 eCFR part-level links (live, but should be section-level).

---

## 8. Indexation hygiene (linking view)

| Check | Result |
|---|---|
| Canonical | 835/835 `canonical_ok = True` (self-referencing). The homepage's GBP UTM URL (`/?utm_source=google&utm_medium=organic&utm_campaign=gbp`, 822 GSC impressions) canonicalizes to `/`. |
| Robots meta | All 835 index/follow. City pages and county hubs print `index, follow`; the rest print Rank Math's `follow, index`. One tag per page, so this is cosmetic. |
| Sitemap coverage | 835 sitemap URLs = 835 live pages. None missing, none redirecting, none non-200. |
| Sitemap entries that redirect | 0. The 96 redirecting posts are in neither sitemap. |
| `/start/` | `noindex, follow` and not in the sitemap. Correct for an application entry page. |
| `app.alignlending.com` | Appears in GSC (5 impressions). **[VERIFY]** that the application subdomain sends `noindex` (X-Robots-Tag) so it cannot rank. |
| Feeds and archives | `/feed/` 410 and `/mortgage-location/` 404. |

---

## 9. Implementation order

1. **P0 (this week):**
   - City-template hub links.
   - Homepage hub links.
   - Refinance CTA hub link.
   - Non-QM product list.
   - Physician guide → product link.
   - Remove the 69 policy-violation links.
   - Fix the 2 links through redirects.
   - Replace the 2 confirmed 404s.
2. **P1 (this month):**
   - Visible breadcrumbs.
   - Related-card cleanup.
   - Buyer CTA hub link.
   - alignwithalign.com links (on-site targets or `rel`).
   - Calculator, research and trust links.
   - Replace Wikipedia links.
   - Switch `http://` links to `https://`.
   - Citation pattern and `rel` conventions on city and learn templates.
   - Legacy-URL cleanup steps 1–5.
   - External re-check from open internet.
3. **P2 (backlog):**
   - Single menu copy.
   - Footer restructure.
   - Anchor rotation.
   - Glossary wrapper.
   - Split the county hubs.
   - Footer `/licensing/` duplicates.

---

## Auditor corrections

Independent audit, 2026-11-15. **Verdict: PASS WITH CORRECTIONS.**
- Full audit: `08-audit/audit-links.md`. Row-level fixes: `08-audit/corrections-links.csv`.
- Everything above this heading is the team's text, unchanged. Where they differ, the corrections below take precedence.
- 23 of the 29 checked findings reproduce exactly, including `/refinance/` 5 and `/purchase/` 16, the 3 menu copies, the 12,525 alignwithalign.com links, 318 links per city page, the 69 policy links on 60 pages, 349 breadcrumb gaps, 136 `http://` links, the live REST totals of 293 and 96, and the GSC legacy-URL attribution.

**Counts**
- §2 Purchase row: `/purchase/` has 16 inlinks, **8** (not 12) from its own sub-pages.
- Wikipedia wrong-target links: **about 51**, not 58. Seven anchors are population or housing figures on the correct city article ("1,084 residents", "92% of homes are single-family"). That is a source problem (P1), not a wrong target.
- County coverage: the 13 county hubs link **275 of 276** cities. `/mortgage-lender-blair-township-mi/` is linked only from a state hub, so add it to its county hub.
- Unverified external URLs: 811 of the ~11,290 are `sms:` links, so about **10,479** web URLs remain to check. The 2 × 404 and 21 redirects rest on the team's recheck log; michigan.gov returned a proxy 403 to the auditor.

**Scores (rubric §6)**
- Sitewide External linking: **78 (C)** (simple mean of the 10 page-type scores), not 70. Money-page external: 79 (C).
- Sitewide Internal 71 (C) stands. Add type mean 70 (C) and money-page score 71 (C).
- Report the hubs separately: `/purchase/` internal **56 (F)**, `/refinance/` internal **50 (F)**. Purchase subs are about 76 (C), refinance subs 78 (C). The 60 (D) refinance group grade misstates both.

**External-link policy**
- **houzz.com is Tier 4, P2, not VIOLATION/P0.** These are Houzz Magazine design articles, the same class as Angi, which the Editorial Policy names as acceptable.
- **nolo.com: keep as Tier 4.** The Editorial Policy names it. Add the Michigan statute only where a legal rule rests on Nolo alone.
- **datausa.io** (44 links, 42 city pages) cites income figures exactly as the VIOLATION aggregators do. Give it the same treatment and add fix rows.
- project-osrm.org and openstreetmap.org are methodology attribution, not "primary" sources.
- webharvest.gov is an archived mirror: replace it, as F12 says.
- The 9 non-city policy rows need specific fixes, not the city boilerplate:
  - Trading Economics → Census New Residential Sales.
  - security.org → remove.
  - FortuneBuilders → remove, or link hudhomestore.gov [VERIFY].
  - Ownwell → St. Clair County Equalization or the assessor [VERIFY].
- **Priority:** P0 = the 7 lead-gen and affiliate links (Ownwell, security.org, FortuneBuilders). Aggregators, Wikipedia and datausa = P1. The guide treats Wikipedia and WPR alike. Ship the replacements in the same pass as the `04-city-pages` corrected figures, so a Census link never sits on a WPR projection.

**Navigation (unified spec, 02-links is the owner; see audit-core-pages-B K4)**
- **Buy:** Conventional, FHA, VA, USDA, HomeReady & Home Possible, Jumbo, Physician, Manufactured.
- **Rate and term** [COMPLIANCE REVIEW]: 30-Year Fixed, 15-Year Fixed, ARM, Buydown.
- **Self-employed and non-QM:** Non-QM, Bank Statement, 1099 Income, Asset Depletion, DSCR, Non-Warrantable Condo.
- **Home equity:** Home Equity Loan, HELOC, Cash-Out Refinance.
- `internal-link-fixes` row 41 adds Condo, not Physician. The physician page does not present the program as non-QM.
- Print the menu once by removing the duplicate **dropdown**. Keep popup 822: 01-ctas makes it the mobile menu with an action row. Delete the "drop the popup" option.
- alignwithalign.com items: **P0**, following 01-ctas row 2.
  - "Try payment scenarios" → `/mortgage-calculator/#p-pay`.
  - "Explore my equity" → `/refinance/home-equity-review/#available-equity`.
  - Remove "Save my plan" unless it is a working account feature. Never send it to `/start/` (guide §5.2 rule 1).

**Implementation**
- `internal-link-fixes` rows 20–21 (hub links in the Learn CTA blocks) must ship inside the 01-ctas `al-module`/`al-next` template. Otherwise the `/refinance/` fix is lost when that template is rebuilt.
- Rows 28–39: vary the anchors. Each set repeats one anchor 6 times; the cap is 3.
- Visible breadcrumbs: keep P1. For multi-county cities, use the city team's majority-county rule.
- Trust-strip link (row 50): keep it only while the review count is maintained from one template (guide §7.7).
