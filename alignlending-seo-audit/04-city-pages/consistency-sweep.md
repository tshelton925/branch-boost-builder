# City pages: consistency sweep (all 276 pages)

Owner request: "confirm accuracy and consistency in the city pages." This file covers the **programmatic consistency** part: template, uniqueness, wrong-place leakage, trust/NAP, duplicates, hub coverage, data freshness and metadata. The three fact-check groups check whether each figure is true against primary sources. This sweep checks whether the pages agree with each other, with their hubs and with the rest of the site.

Crawl date: 2026-11-15. Pages covered: 276 `type=city` rows, 13 county-hub rows (12 counties plus `/mortgage-michigan/additional-cities/`) and 3 state hubs. Every number below comes from `pages.jsonl`, `page_summary.csv`, `text/*.txt`, `inlinks.json`, `link_graph.json`, four raw HTML pages (Flint from the sample set, plus Northville, Blair Township and Farmington Hills fetched live), two live status checks, and DataWise GSC queries (property `7faa6221…`, 90 days).

Files in this folder:

| File | What it holds |
|---|---|
| `city-matrix.csv` | 276 rows × 57 fields: county (eyebrow/schema), hubs, ZIPs vs legacy ZIPs, population and its source label, millage, price figures, income tax, word/H2/FAQ counts, title/meta, links, inlinks, hero image/alt, NAP, uniqueness, GSC impressions, five scores, flags |
| `city-fixes.csv` | 912 rows: url, element, current, recommended_exact, issue, priority, impact, effort (21 P0, 280 P1, 611 P2) |
| `similarity-top-pairs.csv` | 50 most similar pairs out of 37,950 compared, plus 21 named pairs (city vs same-name township, Farmington/Farmington Hills, Rochester/Rochester Hills, Dearborn/Dearborn Heights) |

---

## 1. Summary

The city template is **strongly consistent where it matters most for trust**, and its drift sits in the details a reader notices first.

- **Trust and NAP: 100% consistent.** All 276 pages carry the same phone CTA (`tel:+12485065727`), both NMLS numbers (1647301 and 2041154), "5.0 on Google, 123 reviews" (the same N as the homepage, contact and reviews pages), the six-state licensing line, the same disclaimer, and the same Calendly and `/start/?goal=buy` destinations. Titles and H1s follow one pattern on 276 of 276 pages. No page has another city's name in its eyebrow, H1 or title.
- **Uniqueness is high, so doorway risk is low.** The median page has 68% unique five-word shingles. The most similar pair of the 37,950 compared (Flint Township vs Frenchtown Township) shares 12.9% of its text, or 4.8% once template boilerplate is removed.
- **The problems are agreement problems.** On 17 pages the meta description cites a ZIP-level or different-metric price as if it were the city figure (Ypsilanti meta $335,000 vs page headline $272,000; Farmington Hills $350,000 vs $385,000). Northville gives three different county answers (eyebrow "Oakland and Wayne", breadcrumb "Wayne", schema "Oakland"). Nine more pages describe a two- or three-county city with a one-county eyebrow. Blair Township, published 2026-11-14, is the only city page no hub links to. The Farmington Hills page is the only one off the URL pattern, and the patterned URL returns 404.
- **Template drift.** Stat values are marked up as headings on every page (1,001 H3s like "$49,000"). The checklist section sits in two different places (136 pages vs 129). Population is labeled six different ways. 132 pages link to Wikipedia, which breaks the brand's primary-sources rule. 111 metas run under 140 characters.

### Headline scores (city template, all 276 pages)

| Aspect | Score | Grade |
|---|---|---|
| Accuracy & compliance (consistency portion) | **83** | B |
| Intent & H1 | **92** | A |
| Title & meta | **83** | B |
| Internal linking | **89** | B |
| Uniqueness | **96** | A |

---

## 2. Scorecard

Method: each page is scored 0–100 per aspect from its flags (deductions are listed in `city-matrix.csv` → `flags`). Group scores are page means. Site-wide deductions apply to every page: unverified quote provenance (−3) and hero alt vs schema caption mismatch (−2) under accuracy, plus an unlabeled glance-box source (−3) and a tax-rate row shown on only 157 of 276 pages (−2). Intent loses −4 for the refinance gap. Title & meta loses −3 for title case, −5 because titles carry no differentiator and −4 because the only proof in metas is NMLS. Linking loses −7 for no visible breadcrumb, a one-way neighbor graph and only 31 learn→city links.

### 2a. Template overall

| Aspect | Score | Grade | Rationale (evidence) |
|---|---|---|---|
| Accuracy & compliance (consistency) | 83 | B | NAP, NMLS, review count, licensing and disclaimer are identical on 276/276. Deductions: 17 meta price mismatches plus 44 rounding mismatches; Northville's three-way county conflict and 9 single-county eyebrows on multi-county cities; 132 pages with Wikipedia links; population labeled 6 ways, including one "2026 estimate" (Berkley) that cannot exist yet. |
| Intent & H1 | 92 | A | "Mortgage Broker in {City}, MI" is unique on 276/276 and matches the dominant local query order (30 of 33 broker+city queries put "mortgage broker" first). Deductions: 21 hero subheads read as keyword strings ("Mortgage broker Gaines MI:"); 101 don't say what Align does; refinance city queries have no matching section (2/276 link `/refinance/`). |
| Title & meta | 83 | B | 275/276 titles are ≤60 chars, all on one pattern, all unique. Deductions: title-case "In"; 111 metas under 140 chars; 17 meta figures that disagree with the page; 6 metas anchored to a far-away city (Summit Township "36 miles west of downtown Ann Arbor"); no review or Samantha proof in any meta. |
| Internal linking | 89 | B | State hub links all 276; 275 have a county or additional-cities hub link; 276/276 link back to a hub; the median page has 6 neighbor links. Deductions: Blair Township is on no hub; 40 pages in 16 counties sit only under `/additional-cities/`; 302 one-way neighbor links across 163 pages; 2 links to 301s; only 31 learn-article links point into city pages. |
| Uniqueness | 96 | A | Median unique share 68.5% (min 58.4%, Kentwood). Boilerplate is 16.6% of a median page. 0 of 37,950 pairs exceed 0.05 Jaccard ex-boilerplate. Titles, H1s and metas are all unique. Small deduction: 60 metas share 5+-page skeletons ("a separate tax unit from the City of X though the two share ZIP…"). |

### 2b. By county hub (city pages grouped by the hub that should list them)

| Hub group | Pages | Accuracy | Intent & H1 | Title & meta | Linking | Uniqueness | What drives the score |
|---|---|---|---|---|---|---|---|
| Oakland | 54 | 81 B | 92 A | 83 B | 90 A | 97 A | 7 meta figure mismatches (Farmington Hills, Farmington, Clarkston, Oak Park, Oxford, Southfield, Sylvan Lake); 28 Wikipedia pages; 7 robotic heroes; Northville conflict; off-pattern Farmington Hills URL |
| Wayne | 43 | 81 B | 92 A | 82 B | 91 A | 96 A | 5 meta mismatches (Dearborn Heights, Garden City, Grosse Pointe, Taylor, Westland); 21 short metas; 4 pages missing a core section (Redford Twp ×2, Northville Twp, Wayne); Grosse Pointe Shores single-county eyebrow |
| Macomb | 21 | 82 B | 92 A | 81 B | 90 A | 95 A | 14 of 21 metas under 140; St. Clair Shores and Sterling Heights ZIP-level meta figures; Bruce Twp far anchor; Clinton Twp name collision |
| Genesee | 20 | 84 B | 90 A | 84 B | 90 A | 92 A | 3 robotic heroes (Fenton, Gaines, Montrose); Gaines vs Kent's Gaines Township collision; 16 of 20 pages missing reciprocal neighbor links |
| Washtenaw | 18 | 86 B | 92 A | 85 B | 90 A | 95 A | Ypsilanti meta uses a 48197 sale median ($335,000 vs $272,000); Milan single-county eyebrow |
| Kent | 17 | 83 B | 95 A | 84 B | 90 A | 96 A | 13 Wikipedia pages; 11 rounding-only meta differences; Gaines Township collision |
| Livingston | 12 | 86 B | 93 A | 83 B | 92 A | 95 A | Howell meta ZIP figure; Tyrone Twp far anchor; hub meta cites Handy Township (no page) |
| Ottawa | 12 | 84 B | 95 A | 86 B | 91 A | 96 A | Holland single-county eyebrow (page says Ottawa/Allegan line); Holland Twp renamed tax H2 |
| Monroe | 11 | 83 B | 89 B | 81 B | 91 A | 95 A | 3 robotic heroes (Carleton, Luna Pier, Monroe Twp); Carleton meta cites a Homes.com median; Frenchtown far anchor |
| St. Clair | 11 | 86 B | 91 A | 82 B | 92 A | 95 A | 8 of 11 metas under 140; Algonac and Emmett robotic heroes |
| Lapeer | 9 | 81 B | 90 A | 82 B | 91 A | 98 A | All 9 population figures lack a source label; 6 short metas; Otter Lake single-county eyebrow |
| Lenawee | 9 | 79 C | 91 A | 80 B | 91 A | 97 A | 8 of 9 metas under 140; Britton and Tecumseh missing "Check records"; Cement City eyebrow; Clinton collision |
| Additional cities (16 hubless counties) | 40 | 86 B | 93 A | 84 B | 81 B | 97 A | No county hub for 40 pages (Kalamazoo 7, Grand Traverse 6, Ingham 4, Muskegon 4…); Blair Township unlinked; Marquette 0 and Lincoln/St. Joseph Twp 1 neighbor link each; Lansing/East Lansing/Traverse City eyebrows |

Northville counts in both Oakland and Wayne.

Hub pages themselves (not scored above, findings in §3.15): all 12 county-hub meta price ranges match their city pages' headline values except Livingston. Hubs use three H2 wording families. None carries FAQPage schema, while every city page does.

### 2c. The 20 cities with the most GSC impressions

GSC in DataWise has no page dimension, so impressions are attributed by matching a page's city name in the query. 197 local queries match 43 city pages for 4,227 impressions. **All 197 matched queries show 0 clicks**, and average positions run 6–54, so ranking is the larger lever. Titles and metas only convert once a page reaches page one.

| City | City-query impr. | Avg pos | Acc | Intent | T&M | Link | Uniq | Main consistency issue |
|---|---|---|---|---|---|---|---|---|
| Dearborn | 873 | 20.8 | 79 | 96 | 88 | 93 | 96 | Refinance and pre-approval queries ("refinance my home in dearborn" 43, "mortgage pre-approval dearborn" 47) have no matching section; 5 Wikipedia links |
| Ann Arbor | 665 | 33.1 | 79 | 96 | 80 | 87 | 99 | "mortgage loan officer ann arbor" (341 impr., pos 20) isn't reflected in title/meta; meta 132 chars |
| Flint | 390 | 35.1 | 81 | 96 | 88 | 85 | 100 | Clean; the meta is a model (146 chars, millage + income tax + value) |
| Macomb Township | 351 | 47.9 | 84 | 96 | 88 | 87 | 93 | "macomb mortgage/home loan" queries are ambiguous with the county hub |
| Farmington Hills | 331 | 18.6 | 67 | 87 | 78 | 85 | 100 | P0: off-pattern slug, `/mortgage-lender-farmington-hills-mi/` 404s; meta $350,000 vs page $385,000 |
| Farmington | 238 | 22.5 | 73 | 90 | 70 | 91 | 100 | P0: meta uses the 48335 figure ($362,000) vs page $330,000; meta 131 chars |
| Detroit | 162 | 38.1 | 87 | 96 | 88 | 93 | 100 | "649,000 residents counted in 2025": no source type named |
| Grand Rapids | 138 | 48.6 | 81 | 96 | 74 | 87 | 96 | "grand rapids mortgage broker" (43) puts the city first; meta 135 chars; 1.5% income tax not in glance box |
| Wixom | 105 | 15.0 | 79 | 90 | 80 | 89 | 97 | Hero has no Align role; short meta |
| Lansing | 105 | 23.5 | 74 | 92 | 88 | 83 | 93 | Three-county city, one-county eyebrow; 7 FAQs (template 8); no county hub |
| Rochester | 87 | 44.9 | 87 | 96 | 88 | 93 | 91 | Clean |
| Rochester Hills | 75 | 15.3 | 88 | 96 | 88 | 91 | 100 | Clean |
| Ferndale | 74 | 14.1 | 90 | 96 | 88 | 89 | 100 | Clean |
| Kalamazoo | 53 | 24.8 | 84 | 96 | 77 | 81 | 97 | No Kalamazoo County hub (7 pages); short meta |
| Wolverine Lake | 50 | 5.7 | 79 | 96 | 77 | 93 | 98 | Short meta, at position 5.7 (best CTR upside) |
| Milford | 44 | 12.6 | 87 | 91 | 88 | 91 | 90 | Clean |
| Ypsilanti | 44 | 17.7 | 67 | 90 | 78 | 91 | 100 | P0: meta 48197 median $335,000 vs page $272,000 |
| Holland | 41 | 32.0 | 71 | 92 | 85 | 93 | 100 | Ottawa/Allegan city, Ottawa-only eyebrow |
| Monroe | 41 | 53.9 | 82 | 90 | 74 | 93 | 98 | Short meta; Monroe vs Monroe Township distinction only in body |
| Northville | 38 | 23.2 | 64 | 96 | 88 | 83 | 100 | P0: eyebrow/breadcrumb/schema disagree on county; links back to one of two hubs |
| **Top-20 mean** | | | **79 C** | **94 A** | **83 B** | **89 B** | **97 A** | |

---

## 3. Findings ranked by impact

### 3.1 P0: Meta descriptions cite a different number than the page headline (17 pages; 44 more differ only by rounding)

The glance box ("Typical home value near $X") is the page's headline figure, and county-hub metas quote it exactly. But 17 city metas quote a ZIP-level or different-metric figure as if it described the city:

| Page | Meta says | Page headline | Where the meta figure comes from |
|---|---|---|---|
| Ypsilanti | "48197 medians run near $335,000" | $272,000 | 48197 sale median, early 2026 |
| Oxford | "48370 homes run near $556,500" | $481,000 | 48370 ZIP card |
| Grosse Pointe | "Sale medians near $437,000" | $488,000 | Redfin 3-month median |
| Farmington Hills | "values near $350,000" | $385,000 | 2024 yearly sales median |
| Farmington | "48335 homes sit near $362,000" | $330,000 | ZIP 48335, which "also takes in part of Farmington Hills" |
| Howell | "medians run near $387,000" | $354,000 | ZIP 48843 card |
| Sylvan Lake | "Off-water homes sit near $391,000" | $359,000 | ACS owner median |
| Westland, Taylor, Southfield, Sterling Heights, St. Clair Shores, Dearborn Heights, Garden City, Clarkston, Carleton | ZIP or sale-median figure | city headline | ZIP cards / Redfin / Homes.com |
| Oak Park | "48237 values near $230,000" | $236,000 | **not found anywhere on the page** |

Why it matters: the meta is the line a searcher (and an AI summary) quotes, and when it disagrees with the page and the county hub it reads as an error. Fix: every meta uses the glance figure, labeled "typical values". Exact rewrites, all 140–160 chars, are in `city-fixes.csv` (element `meta description`, P0).

### 3.2 P0: Farmington Hills is off the URL pattern, and the patterned URL 404s

- Live page: `/mortgage-lender-in-farmington-hills/` (canonical to itself; 12 inlinks; the six legacy `/mortgage-location/farmington-hills-mi-4833X/` URLs 301 to it).
- `/mortgage-lender-farmington-hills-mi/` returns **404** (live check 2026-11-15). It is the URL every other city follows and the one a person, agent or AI would guess.
- No duplicate content exists: only one Farmington Hills page is live. Farmington (`/mortgage-lender-farmington-mi/`) is a separate city, and its text overlaps Farmington Hills at 7.1% Jaccard, the same as any unrelated pair.
- Farmington Hills queries earn about 331 impressions at position 18.6.

Fix: at minimum, 301 the patterned URL to the live page now. For consistency, move the page to `/mortgage-lender-farmington-hills-mi/`, 301 the `-in-` URL to it, repoint the six legacy 301s straight to the new URL (no chains), and update the canonical, breadcrumb, hub link and internal links.

### 3.3 P0/P1: County answers disagree (Northville, plus 9 multi-county cities)

Sampled raw JSON-LD (4 pages) shows the template writes the county into `BreadcrumbList` (via the hub) and `Service.areaServed.containedInPlace`:

| Page | Eyebrow | Breadcrumb | Schema `containedInPlace` | Hub links in / back |
|---|---|---|---|---|
| Flint | Genesee County | Genesee County | Genesee County, Michigan | Genesee / Genesee ✔ |
| Farmington Hills | Oakland County | Oakland County | Oakland County, Michigan | Oakland / Oakland ✔ |
| Blair Township | Grand Traverse County | Additional Michigan Cities | Grand Traverse County, Michigan | **none** / additional-cities |
| **Northville** | **Oakland and Wayne counties** | **Wayne County** | **Oakland County, Michigan** | Oakland + Wayne / **Oakland only** |

Nine more pages say in their own text that the municipality spans counties, yet the eyebrow (and so presumably the schema) names one: **Holland** (Ottawa/Allegan line), **Milan** (Washtenaw/Monroe line; the page also links the Monroe hub), **Grosse Pointe Shores** ("sits in two counties"), **Lansing**, **East Lansing** (Ingham/Clinton), **Traverse City** (Leelanau County side), **Otter Lake** ("two townships and two counties"), **Otisville** (county line through the village) and **Cement City** (Jackson and Lenawee county line). Northville already shows the right eyebrow format.

Fix: list every county in the eyebrow ("Ottawa and Allegan counties, Michigan"), make `containedInPlace` an array, link back to every hub that applies, and set the breadcrumb to the majority county. These are flagged `[VERIFY]` for the fact-check groups to confirm with county GIS.

### 3.4 P0/P1: Hub coverage gaps

- **Blair Township** (Grand Traverse; `datePublished` 2026-11-14) is the only city page no county hub links to. `/additional-cities/` names it twice in text ("Blair Township to the south", "$275,000 in Blair Township") but links neither mention and gives it no card. It has 6 content inlinks.
- Every other city is linked from exactly the right hub: 12 hubs × their cities match the eyebrow counties exactly (Oakland 54 incl. Northville, Wayne 43 incl. Northville, Macomb 21, Genesee 20, Washtenaw 18, Kent 17, Livingston 12, Ottawa 12, Monroe 11, St. Clair 11, Lapeer 9, Lenawee 9). `/mortgage-michigan/` links all 276.
- Every city links back to a hub (anchor "{County} County overview" or "Additional Michigan Cities").
- **40 pages in 16 counties have no county hub** and hang off `/additional-cities/`, a 7,230-word page with 84 cards and 46 inlinks. Four counties have enough pages to justify a hub: **Kalamazoo (7), Grand Traverse (6), Ingham (4, plus Clinton 2 and Eaton 1 around Lansing), Muskegon (4)**. GSC already shows Kalamazoo (53) and Lansing (105) query impressions.

### 3.5 P1: Same-name places are not told apart

- `/mortgage-lender-gaines-mi/` (Genesee) actually covers **Gaines Township in Genesee County** plus the village ("township homes split between ZIP codes 48436 and 48473… a village home pays its own mills"). Meanwhile `/mortgage-lender-gaines-township-mi/` is **Gaines Township in Kent County**. Neither page mentions or links the other. The Genesee hero also opens with the keyword string "Mortgage broker Gaines MI:".
- `/mortgage-lender-clinton-mi/` is the Village of Clinton "inside Clinton Township… in northeast Lenawee County", while `/mortgage-lender-clinton-township-mi/` is Clinton Township in **Macomb** County. The Macomb page never says which Clinton Township it covers.
- The other 16 city/township pairs distinguish themselves well. 13 of 16 township pages make the distinction in the hero or meta ("a separate tax unit from the City of X"), all 16 do in the body, and both sides link each other. City pages mostly mention the township only in the body: 3 of 16 do it in the hero or meta.

Fix: one-line disambiguation and a cross-link on all four pages (exact text in fixes). Rewrite the Gaines hero.

### 3.6 P1: Non-primary external links on 132 pages

171 links to `en.wikipedia.org` on 132 city pages and 4 links to `city-data.com` (Britton, Maybee, Metamora, Otter Lake). 18 pages also cite "( Wikipedia )" inline. The brand rule allows only government, regulator or primary sources. The pages otherwise follow the rule well: Redfin and Zillow are "named in the text and not linked" on every page, and the remaining domains are michigan.gov, census.gov, FEMA and county and municipal sites. Per-page link lists are in fixes.

### 3.7 P1: Stat values and decoration marked up as headings (all 276 pages)

The "By the numbers" block renders values as H3: `$49,000`, `+78%`, `1.85%`, `6` on Flint, which makes **1,001 stat H3s** across the template. Barton Hills has 11 and Lake Angelus 12 (sale cards like "$2,200,000, May 2024"). The CTA block adds three step H3s ("Tell us what you are trying to do"…) and every page has an "In Samantha's words" H3. One template change fixes all of them: use a styled `<p>`.

### 3.8 P1: Meta length and proof

- Length: 0 over 160, **111 under 140**, 165 in range.
- Proof: 276/276 end with "NMLS #2041154.", 0 mention the 5.0 Google rating, Samantha or "no credit pull".
- Openers: 274 start "Mortgage broker in {City}, MI". Two start "Mortgage broker serving" (Capac, Oxford).
- Far anchors: Summit Township "about 36 miles west of downtown Ann Arbor" (it's a Jackson County township), Muskegon Township "34 miles northwest of downtown Grand Rapids", Bruce Township "36 miles north of downtown Detroit" (the page says it covers the north half of Romeo), Tyrone Township "32 miles north of downtown Ann Arbor" (it shares Fenton's 48430), Frenchtown "23 miles northeast of downtown Toledo", Sumpter "26 miles southwest of downtown Detroit".
- Near-duplicate skeletons: 60 metas share a 5+-page frame. Not a penalty risk, but less distinctive.

### 3.9 P1: Hero subhead formula varies

The text between H1 and CTAs runs 17–74 words (median 35). 21 open with a keyword string or describe the page's sources instead of answering. Examples: "Mortgage broker Monroe Township MI:", "Fenton city taxes, Treasury millage… checked against Census, Treasury and city sources", "Romulus mortgage guidance from Census, Treasury and city records". 101 never say what Align does (compare wholesale lenders, Samantha, "we"), and 33 exceed 50 words. Exact rewrites for the 21 are in fixes, using only facts already in each hero.

### 3.10 P1: Refinance intent has no home on city pages

GSC city queries include refinance intent: "rate and term refinance farmington hills" 55, "mortgage refinance dearborn mi" 46, "refinance my home in dearborn" 43, "mortgage refinance farmington hills mi" 38, "refinance home loan rochester hills, michigan" 25. City pages are purchase-only (CTA `goal=buy`), and 2 of 276 link `/refinance/`. Fix: one line in the Loan options block on every page.

### 3.11 P1: Quote provenance and income-tax surfacing

- "In Samantha's words" shows one of **4 quote texts** rotated across all 276 pages (79/74/66/57). The brand rule forbids invented Samantha quotes, so confirm each has a recorded source. If any doesn't, replace it with `[NEEDS SAMANTHA QUOTE: property taxes after a sale]`.
- All 14 city pages for places on Treasury's income-tax list mention the tax. Six state it in the hero; eight only in the body or FAQ (Detroit, East Lansing, Hamtramck, Hudson, Lansing, Lapeer, Port Huron, Walker). Township pages correctly say they don't levy it (e.g., Flint Township, Grand Rapids Township). Add a glance-box row.

### 3.12 P2 (P0 for one page): Data-freshness labels drift

| Item | Consistency finding |
|---|---|
| ACS | "2020 to 2024" used everywhere it appears (297 mentions), the latest 5-year release. ✔ |
| Millage | 2025 Treasury totals on 254 pages; 2025 and 2026 together on 11; no 2024 millage anywhere. ✔ |
| Loan limits | 2026 conforming $832,750 on 274 pages; 2026 FHA floor $541,287 on 140; no stale 2025 limits. ✔ |
| Uncapping | "2026 Uncapping Study" (Align research), 654 mentions. ✔ |
| Sources line | "every link checked November 2026" on 276/276. ✔ |
| **Population** | Several labels: ACS 2020–2024 (81), **no year or source (81)**, Census "2024 estimate" (46), not stated (44), "2020 Census" (12), a year with no source type (7), ACS with no years (4), **"2026 estimate" (Berkley, 15,386: no such Census vintage exists at crawl date)**. Vintage 2025 city estimates should be available by Nov 2026 [VERIFY], so "2024 estimate" is one vintage behind. |
| Market snapshots | Redfin windows vary page to page ("July through September 2026" 68, "September 2026" 69, "October 2026" 22, "March 2026" 20, "November 2025" 13…). "as of" phrasing has 10+ variants ("as of mid", "as of spring 2026", "as of December"). |
| Glance box | "Typical home value near $X" has no named source; the body cites Zillow, Redfin and ACS figures side by side. The "Property tax current owners pay" row shows on 157 of 276. |

Recommended standard: population as "about N residents (U.S. Census Bureau Vintage 2025 population estimate)" or "(2020 to 2024 American Community Survey)". Market figures as "{Source} {metric}, {Month}–{Month} {Year}". Glance value as "Typical home value near $X ({Source}, {Month Year})".

### 3.13 P2: Template drift (sections and wording)

- **Core outline** (16 H2s) is present on 272–276 pages. A ZIP variant ("How does the {City} housing market differ by ZIP code?") replaces "What is the {City} housing market like?" on 40 larger cities.
- **Missing or renamed core sections (12 pages):** "Check {City} records yourself" is missing on Bingham Farms, Britton, Tecumseh and Wayne. "Living in {City}" is missing on East Bay Twp, Northville Twp and Redford Twp. The property-tax H2 is renamed "…property taxes after you buy" on Holland Twp, Lathrup Village and Redford Twp. "Which neighborhoods are in and near…" replaces the neighborhoods H2 on Howell, Onsted and Ortonville.
- **Section order:** the checklist sits after the FAQ on 136 pages and before testimonials on 129. 11 pages have none.
- **Flexible slots:** 585 distinct H2 wordings for three jobs (ZIP/geography, millage comparison, pre-offer checklist), e.g., "Things to settle on a X house" (91), "X details to pin down early", "Six checks on a X house". **British spelling** "neighbours" appears in 5 H2s (Fenton, Lathrup Village, Luna Pier, Oxford, Redford Twp). One "by ZIP Code" (Farmington Hills).
- FAQ count is 8 on 272 pages, 7 on Lansing, Meridian Twp and Wyoming, and 9 on Tittabawassee Twp.

### 3.14 P2: Neighbor-link graph

Neighbor counts: 6 on 228 pages, 7 on 31, 5 on 10, 8–9 on 4. Marquette has **0**, and Lincoln Twp and St. Joseph Twp have **1** each. 302 neighbor links run one way (A links B, B doesn't link A) across 163 pages. 414 cross-county neighbor links are expected along county lines. Two internal links hit 301s: Salem Twp → `/washtenaw-county/` and Springfield Twp → `/learn/homestead-exemption/`. Only 31 learn-article links point into city pages, while calculators supply 210. The full per-page list of missing back-links is in fixes.

### 3.15 P2: Hub-page consistency

- All 12 county-hub metas quote low/high values that match the named city pages exactly (Genesee $49,000 Flint → $390,000 Linden, etc.). The exception is **Livingston**, whose low end is "$250,000 in Handy Township", a place with no page (lowest city page: Fowlerville $292,000).
- Titles: 9 hubs use "…County, Michigan | Align Lending" and 3 use "…County, MI" (Livingston, St. Clair, Washtenaw, all length-driven). All use title-case "In".
- Hub H2s come in three wording families. `/additional-cities/` alone uses Title Case H2s. Its meta claims "80 more Michigan communities" against 84 cards and 40 city pages.
- Hubs have an "X County mortgage FAQs" H2 but no FAQPage JSON-LD (city pages: 276/276).

### 3.16 P2: Legacy redirects and ZIP cross-reference

- **ZIP leakage check: no city page claims another city's ZIP without explaining it.** 64 pages list in their glance box a ZIP that the legacy map assigned to another city. 60 are townships or villages sharing a mailing ZIP, and each names the other place on the page (e.g., Flint Township lists 48532/48504/48507 and explains the Flint addresses). The other 4 are naming artifacts: legacy `saint-clair`/`saint-clair-shores` vs new `st-clair` slugs, and Grosse Pointe Shores' 48236, which the legacy map wrongly gave to Grosse Pointe Park.
- Legacy ZIPs missing from pages are PO-box or unique ZIPs (Ann Arbor 48106/48107/48113, Flint 48550–48557, Detroit 482xx unique, Novi 48376, Troy 48007/48099). That's correct.
- The **legacy map itself had wrong ZIPs** that now route inconsistently. `grosse-ile-mi-48173` 301s to **Rockwood** (48173 is Rockwood's ZIP; Grosse Ile is 48138), while name-based redirects send `grosse-pointe-park-mi-48236` and `south-lyon-mi-48025` to their named cities. `newport-mi-48166` goes to Estral Beach. Fix: send the Grosse Ile URL to `/mortgage-lender-grosse-ile-township-mi/`.

### 3.17 P2: Hero image alt and breadcrumb display

- All 276 hero images have `alt=""` while the JSON-LD `ImageObject` carries a descriptive caption. Pick one rule. The images agent owns the alt text itself.
- `BreadcrumbList` exists in schema but no breadcrumb shows on the page (`breadcrumbs: false` on 276). A visible breadcrumb would put the hub path above the fold.

### What is consistent (no action)

| Check | Result |
|---|---|
| Phone CTA | `tel:+12485065727` on 276/276; matches homepage, contact, licensing |
| NMLS | 1647301 and 2041154 on 276/276; ATF "Licensed loan originator, NMLS 1647301" on 276/276 |
| Reviews | "5.0 on Google, 123 reviews" on 276/276 and in the testimonials header; same N on homepage, contact, reviews |
| Licensing | "Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas" on 276/276, identical to homepage and `/licensing/` |
| Address | 2625 Pontiac Lake Road, Waterford, MI 48328 in Organization schema (sampled) = homepage, contact, licensing text |
| Disclaimer | Identical closing disclaimer (NMLS, Equal Housing, six states, "not a credit decision") on 276/276 |
| Schema | Identical 15-type set on 276/276; FAQPage on 276 (8 Qs on 272) |
| Title/H1 pattern | 276/276 conform; city names in title = H1 = eyebrow page |
| Leakage | 0 wrong-city names in eyebrow, H1 or title. 72 metas and 138 FAQ questions name another place, all contextual ("shares ZIP 48423 with…", "My listing says Rochester…"); no copy-paste errors found |
| Testimonials | 4 Google reviews rotated, labeled "Individual experiences. Results vary." |
| Compliance wording | No rate/APR claims and no hype in Align's own copy ("amazing" and "!" appear only inside quoted Google reviews) |

External-link health is inconclusive. The background check returned ProxyError for 18,037 of 19,081 city-page external links, and 920 returned 200. It found no confirmed 404, 410 or 5xx.

---

## 4. Uniqueness and doorway risk

Method: body text per page; own city name and county replaced with tokens; 5-word shingles. Shingles that appear on ≥10% of city pages (27+) count as template boilerplate. Every pair of the 37,950 is compared.

| Measure | Value |
|---|---|
| Unique shingles per page (on no other city page) | median **68.5%**, mean 68.1%, p10 63.8%, min 58.4% (Kentwood) |
| Template boilerplate share | median 16.6%, max 22.2% |
| Pairwise Jaccard, ex-boilerplate | median 0.0012, p99 0.0069, max **0.048** (Flint Twp / Frenchtown Twp); 0 pairs > 0.05 |
| Pairwise Jaccard, full text (random 3,000-pair sample) | median 0.068, p90 0.080, sample max 0.116 |
| Most similar pairs overall (full-text Jaccard) | Flint Twp–Frenchtown Twp 0.129; Clay Twp–Mundy Twp 0.127; Davison Twp–Grand Blanc Twp 0.122; Grand Blanc Twp–Mundy Twp 0.122 |
| City vs same-name township | 0.063–0.088 (Northville/Northville Twp highest), the same as unrelated pairs |
| Titles / H1s / metas | 276 unique each; titles and H1s differ only by city by design |

Conclusion: doorway-page risk is low. The most-similar pairs are townships that share the township-specific FAQ and checklist phrasing (well/septic, PRE affidavit, "which township taxes the parcel"). That is good content reuse, not thin duplication.

---

## 5. Metadata: GSC local query patterns and the recommended exact pattern

What local searchers type (197 city-name queries, 4,227 impressions):

- **Word order:** among broker + city queries, "mortgage broker" comes first in 30 of 33 (598 of 657 impressions), e.g., "mortgage broker wixom mi" 105, "mortgage broker in dearborn mi" 43, "mortgage broker milford michigan" 44. City-first: "grand rapids mortgage broker" 43, "detroit mortgage brokers" 9.
- **State token:** "mi" or "michigan" appears in 75 queries (1,666 impressions). 126 queries (2,602) omit it.
- **Head terms:** "{city} mortgage" family 1,049; broker 657; loan officer 457 (341 from "mortgage loan officer ann arbor", pos 20); home loan(s) 425; mortgage lender 352; refinance 268; mortgage rates 209 (don't target, per the rate policy); mortgage company 203.
- **State-level** (same template logic): "michigan mortgage broker" 403 vs "mortgage broker michigan" 255. "Near me" queries ("mortgage broker near me" 34, pos 6.3) depend on the GBP and the page's location signals, not on title wording.

Evaluation: "Mortgage Broker in {City}, MI" matches the dominant query order, matches the H1, and keeps "MI" (present in the highest-impression local queries). "{City}, MI Mortgage Broker" would fit city-first searches but contradicts 90% of broker queries. Title-case "In" has no ranking effect, but it mismatches the H1 and sentence-style site conventions, so fix it in the same pass. The bigger CTR lever is the meta: city plus one verified local cost fact plus the comparison promise plus proof.

### Recommended exact pattern

| Element | Exact pattern | Rules |
|---|---|---|
| **Title** | `Mortgage Broker in {City}, MI \| Align Lending` | ≤60 chars. If it overflows (only Tittabawassee Township, 61), use `{City}, MI Mortgage Broker \| Align Lending`. Optional test on Ann Arbor only: `Ann Arbor, MI Mortgage Broker & Loan Officer \| Align Lending` (60), for the 341-impression "loan officer" query. |
| **H1** | `Mortgage Broker in {City}, MI` | Unchanged; already unique on 276/276. |
| **Eyebrow** | `{County} County, Michigan` · multi-county: `{County A} and {County B} counties, Michigan` · three: `{A}, {B} and {C} counties, Michigan` | Must equal the schema `containedInPlace` list and the hub(s) linked. |
| **Hero subhead** | `Buying or refinancing in {City}? {One local fact that changes the payment: taxing unit/ZIP split, millage, or city income tax}. We check the parcel, then compare your loan across multiple wholesale lenders.` | 25–45 words; no keyword strings; no "this page lays out…" |
| **Meta description** | `Mortgage broker in {City}, MI{, where … / . …} {one local fact using the glance-box figure}. [We compare multiple wholesale lenders.] [Rated 5.0 on Google.] NMLS #2041154.` | 140–160 chars; the price is always the glance figure, labeled "typical values"; ZIP-level prices stay in the body; bracketed add-ons fill to length; no rates. |

Model meta already live (Flint, 146 chars): "Mortgage broker in Flint, MI, where a 52.34-mill homestead total and a city income tax shape the monthly cost. Values near $49,000. NMLS #2041154."

---

## 6. Template fixes (one change each, applied site-wide)

| # | Change | Priority |
|---|---|---|
| T1 | Stat values: `<h3>` → `<p class="adp-stat__value">` (1,001 headings); CTA steps and "In Samantha's words" → styled `<p>` | P1 |
| T2 | Meta generator: pull the price from the glance field; enforce 140–160 by appending "We compare multiple wholesale lenders." / "Rated 5.0 on Google."; opener always "Mortgage broker in" | P1 |
| T3 | Title generator: lowercase "in"; city-first fallback above 60 chars | P2 |
| T4 | Eyebrow, `containedInPlace` and hub back-links driven from one county list per page (array for multi-county) | P1 |
| T5 | Loan options block: add "Already own in {City}? Compare refinance options" → `/refinance/` | P1 |
| T6 | Glance box: always 4 rows (typical value with named source and month, uncapping %, effective tax rate, ZIPs) plus a "City income tax" row on the 14 income-tax cities | P1/P2 |
| T7 | Section order: … taxes → millage comparison → Check records → checklist → What our clients say → FAQ → Communities near → Guides → Loan options → Talk with … → Sources | P2 |
| T8 | Flexible H2 slots, one question pattern each: "Which ZIP codes and taxing units cover {City}?" · "How does {City}'s 2025 millage compare with its neighbors?" · "What should you settle before an offer on a/an {City} house?" | P2 |
| T9 | Population label standard; "as of" standard ("{Source} {metric}, {Month}–{Month} {Year}") | P2 |
| T10 | Visible breadcrumb matching `BreadcrumbList`; one hero-alt rule (alt = caption, or alt="" and no caption) | P2 |
| T11 | Communities near: enforce reciprocity (if A lists B, B lists A) and a minimum of 3 neighbors | P2 |
| T12 | Hubs: add FAQPage JSON-LD; one H2 wording family; sentence-case `/additional-cities/`; new hubs for Kalamazoo, Grand Traverse, Ingham, Muskegon | P1/P2 |

Per-page exact text for every item is in `city-fixes.csv`.

---

## 7. Hand-offs

**To the fact-check groups** (consistency found it; truth needs a primary source):
- Multi-county status and county splits: Holland, Milan, Grosse Pointe Shores, Lansing, East Lansing, Traverse City, Otter Lake, Otisville, Cement City, Northville.
- Berkley "15,386 residents (2026 estimate)"; Detroit "649,000 residents counted in 2025"; Flushing, Milan and Oak Park population years.
- Which source each glance "Typical home value" uses (Zillow vs Redfin vs ACS), so the label can name it.
- Carleton cites Homes.com and RealtyTrac medians; confirm that's acceptable under the named-not-linked rule.

**To the links team:** 302 one-way neighbor links; 31 learn→city links (the uncapping, PRE and property-tax guides are natural sources); 2 links to 301s.

**To the images team:** hero alt vs JSON-LD caption rule (276 pages).

**To Align (approval needed):** provenance of the 4 "In Samantha's words" quotes; whether to move the Farmington Hills URL or only redirect the patterned slug.

**Data notes:** Bing data is not connected, so this has no Bing query-pattern view and a Bing export is needed to check whether "{city} mortgage broker" word order differs there. GSC in DataWise is query-level only; a page-level GSC export would replace the name-matching attribution in §2c.

## Auditor corrections

*Independent audit, 2026-11-15. Full detail: `08-audit/audit-city.md`; exact row changes: `08-audit/corrections-city.csv`.*
**Verdict: PASS WITH CORRECTIONS.** Every headline number reproduces from `$DATA`: NAP 276/276; about 1,000 stat H3s (984 strict to 1,008 loose); 132 Wikipedia pages and 171 links; 111 metas under 140; median unique 68.1% (Kentwood minimum); top pair 0.129 / 0.048. The Farmington Hills 404 is confirmed live. Northville's three county answers, Blair Township's missing hub link, the 40 additional-cities-only pages and Berkley's impossible label are all confirmed.

1. **Meta P0s (17) move to P1 and wait for owner decision D2.** The mismatch is real, but 16 of the meta figures exist on the page as ZIP or sale figures. Copying the glance figure would carry the mixed-measure problem into the metas: Sylvan Lake's glance is a Zillow list price while its meta holds the Census median $391,000, so do not apply that fix; Southfield's glance is a spring list price; St. Clair Shores' is a ZIP 48081 card. Only Oak Park's $230,000 is unsupported; drop that price now.
2. **Northville:** Census Vintage 2025 puts 3,285 of 6,013 residents in Oakland. Use `containedInPlace` [Oakland, Wayne], set the breadcrumb to Oakland County, and link back to both hubs.
3. **Multi-county list:** withdraw **Otisville**. It is wholly in Genesee County; the "county line through the village" sentence on that page describes Otter Lake. Add **Memphis** (Macomb 782 / St. Clair 309) and, optionally, Midland (Bay part, 176). The `<County 1>` placeholders are resolved in the CSV.
4. **Berkley:** P1, not P0. Exact text: "The city of about 15,100 residents (U.S. Census Bureau estimate, July 1, 2025)".
5. **Population-label rows (92):** do not apply them as written. They would put a Census label on aggregator figures (Algonac's 4,070 is a World Population Review projection). The CSV replaces 90 with Vintage 2025 values and withdraws 7 that describe a tract, ZIP, township or county side (e.g., Clawson "Tract 1800 Population 2,445").
6. **Missed compliance items:**
   - "Talk with a local mortgage expert" is on 276/276 pages, and T7 re-specifies it. Use "Talk with a Michigan mortgage expert" (F15).
   - 0/276 pages carry the government non-affiliation line (F7; PM or counsel to confirm scope).
   - 14 pages use §6 fair-housing words ("quiet", "desirable", "sought-after", "upscale", "thriving"); exact rewrites are in the CSV.
   - Lake Orion and Rochester Hills carry a "30-year fixed ... $10,662 less" savings sentence [COUNSEL].
7. **Samantha quotes:** 74 pages use a bank quote verbatim and 57 use a long form published elsewhere. Replace the **66-page paraphrase** ("County alone does not tell you much...") with the verbatim quote "I wouldn't tell somebody, 'You're in Oakland County, so here's what your taxes are.' It doesn't work like that. We need the actual property." Hold the **79-page quote** ("In Michigan, don't just look at the current tax bill...") behind `[NEEDS SAMANTHA QUOTE]` until Align confirms its source.
8. **Scores:**
   - Intent & H1: 92 → 88 (B). The rubric cites this template as the 80-90 pattern.
   - Title & meta: 83 → 76 (C). The rubric's 60 anchor names this title pattern.
   - Linking 89 → 85 and Uniqueness 96 → 92 are within tolerance.
   - Retire the separate "consistency" accuracy score. Unified city-set Accuracy & compliance = 82 (B).
