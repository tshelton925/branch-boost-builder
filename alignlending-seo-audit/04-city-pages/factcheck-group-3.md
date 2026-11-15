# City Pages Fact-Check, Group 3 (West, Mid and Northern Michigan)

Fact-checker #3 · data crawled 2026-11-15 · checked 2026-11-15 · scope: 87 city pages whose eyebrow names Washtenaw, Kent, Ottawa, Kalamazoo, Grand Traverse, Ingham, Muskegon, Saginaw, Clinton, Bay, Allegan, Jackson, Berrien, Van Buren, Calhoun, Eaton, Marquette, Midland or Barry County, plus the Washtenaw, Kent, Ottawa and Additional Cities hubs (91 URLs).

Companion file: `factcheck-group-3.csv` (298 rows: every verified claim, every anomaly, and one internal-coherence row per page).

## 1. Summary

**Headline Accuracy & compliance score for the group: 95.5 / 100 (A).** 86 pages grade A and 5 grade B. No page grades below B.

These pages are unusually well built. They read as generated from one dataset (Census ACS and TIGER, Michigan Treasury's 2025 millage table and Align's own 2026 Uncapping Study), and the numbers hold together:

- **Internal coherence: 0 numeric conflicts on the 79 template pages.** The hero "at a glance" box, the stats block, the body, the FAQ and the county hub cards agree on typical value, tax share, ZIP list and post-sale jump on every one.
- **Uncapping figures match Align's own study on 84 of 84 pages** where the study row could be matched. The study's millage column also matches each page's homestead millage (for example Grand Rapids 33.1, Kentwood 39.2, Walker 27.5, Traverse City 37.1 and Muskegon 42.8).
- **Every primary-source check of loan limits, income taxes and city-published millage came back correct**: FHFA $832,750, HUD $541,287, MSHDA $566,355 and MI 10K $10,000. All 23 income-tax statements were correct, as were the Ann Arbor, East Grand Rapids and Marquette millage, the Ann Arbor ordinances and the Manchester cityhood date.
- **No page claims or implies a local office in the schema or the copy.** Schema carries the Waterford address. The hubs say "Office in Waterford, about two hours east of the county". **One template heading still undercuts this:** every city page has an H2 "Talk with a local mortgage expert".

**Error rate.** Of 104 claim instances checked against a source (internal-coherence rows excluded), **13 are incorrect (12.5%)**. Only **2 are plain factual errors (1.9%)**: the U-M jobs figure on Ann Arbor and the EMU enrollment on Ypsilanti. The other 11 are inconsistencies, mislabels or compliance slips. Another **34 are outdated (33%)**, and 33 of those are a single repeated line, "the Census Bureau's 2024 estimate" population. Vintage 2025 came out on May 14, 2026. Another 16 could not be verified because the primary hosts are blocked from this session (see section 7).

**Where the errors are.** Almost all of them sit on the **8 older Washtenaw pages written outside the data template**: Ann Arbor, Ypsilanti, Chelsea, Dexter, Manchester, Milan, Saline and Barton Hills. All five B grades are on those pages.

### Top 5 findings

1. **P0 · Ann Arbor understates U-M employment and cites Wikipedia.** "About 30,000 jobs between them" conflicts with Ann Arbor SPARK's September 2026 list (U-M about 37,400), which 10 sibling Align pages already cite. U-M's own count is 56,276 faculty and staff on the Ann Arbor campus and hospital (Nov 2025).
2. **P0 · Ypsilanti says EMU has "about 23,000 students".** Fall 2025 enrollment was 12,176. The 23,000 figure is about a decade old. The page also gives "roughly 19,600 people" with no year or source (2020 Census: 20,648).
3. **P1 · "Typical home value" means four different things.** On 80 pages it is the Census owner median. On Ann Arbor, Ypsilanti, Saline and Milan it is a Zillow index. On Chelsea it is Zillow plus a March 2026 Redfin figure. On Dexter it is a spring Redfin median. On Manchester it is a ZIP-wide Redfin median for a city that covers 2% of the ZIP. Dexter, Chelsea and Manchester contradict figures elsewhere on the same page: Manchester shows $360,000 against a Census $232,000, and Dexter shows $475,000 against $421,000 and $526,000. Because the Washtenaw hub ranks communities on these numbers, it compares unlike measures.
4. **P1 · The "Talk with a local mortgage expert" H2 appears on all 87 city pages**, including Marquette, which is 335 miles from the Waterford office. The Additional Cities hub already uses the fix: "Talk with a Michigan mortgage expert".
5. **P1/P2 · Stale or partial figures that cut against the site's otherwise current data.**
   - 33 pages cite Vintage 2024 population. Every value spot-checked (10) was right for 2024, but all are now superseded.
   - East Lansing gives only its Ingham County population (45,264 in 2020) instead of the city total of 47,741.
   - Norton Shores quotes the City of Muskegon's 2022 employer list (Trinity about 4,000) while the Muskegon page uses the 2025 list (about 3,540).
   - Ann Arbor rounds Scio's 30.5% jump to 31% while the Scio page says 30%.

## 2. Scope and method

1. **Selection.** Python over `pages.jsonl`: city URLs matching `/mortgage-lender-.*-mi/` whose `above_fold_text` starts with an in-scope county. That gives 87 pages: Washtenaw 18, Kent 17, Ottawa 12, Kalamazoo 7, Grand Traverse 6, Ingham 4, Muskegon 4, Saginaw 3, Clinton/Bay/Allegan/Jackson/Berrien 2 each, and Van Buren/Calhoun/Eaton/Marquette/Midland/Barry 1 each. Four hubs were added.
2. **Claim extraction (all pages).** From `text/<slug>.txt`, I extracted:
   - eyebrow county and H1 city
   - hero, stats and body typical value
   - Census owner median, effective tax rate and median tax paid
   - post-sale jump
   - ZIP list and count
   - population and its vintage
   - every "N mills" sentence
   - every income-tax sentence
   - "% of ZIP" claims and school district names
   - loan-limit and MSHDA figures
   - employer, enrollment and superlative claims
   - local-presence phrases
3. **Internal coherence (all 91).** I ran these checks:
   - hero, stats and body agreement
   - ZIP count against the list
   - ZIP prefixes against the area
   - median tax paid divided by median value against the stated rate
   - own-name jump percentages
   - hub cards against city pages
   - FAQ numbers against body numbers
   - neighbor figures cited on one page against that neighbor's own page (e.g. Ann Arbor's figures for Scio, Pittsfield, Lodi, Barton Hills, Salem and Northfield, and Grand Rapids' figures for East Grand Rapids, Grand Rapids Township, Kentwood and Walker)
   - every page's jump against the Uncapping Study table
4. **Primary-source verification.** 36 pages have at least one page-specific claim checked against an outside source. 12 more were reconciled cross-page. Required pages all covered: Ann Arbor, Ypsilanti and its township, Grand Rapids, Wyoming, Kentwood, Walker, Holland, Grand Haven, Kalamazoo, Portage, Traverse City, Lansing, East Lansing, Muskegon and Saginaw Township. All 23 income-tax statements in the group were verified.
5. **Classification.** Each claim is marked correct, outdated, incorrect or unverifiable, with exact replacement text where a change is needed. Price figures were judged on their stated source. Nothing was "corrected" to portal data. Where a headline is fixed, it moves to the Census owner median the page already cites.

**Scoring.** Each page starts at 100. Deductions:

| Deduction | Points |
|---|---|
| Hard factual error | -10 |
| Headline figure contradicted on the same page | -8 |
| Partial or misleading framing | -5 |
| Mixed-measure headline | -4 |
| Unsourced figure | -3 |
| Local-presence heading | -3 |
| Outdated vintage | -2 |
| Minor label, rounding or source-quality issue | -1 to -2 |

Mortgage-advertising compliance was clean on all 91 URLs:
- Equal Housing Opportunity and company NMLS #2041154 appear on all 91.
- Samantha's NMLS 1647301 appears on 90 of 91.
- No rates, APRs, payment promises or Reg Z trigger terms appear.
- Exclamation points and hype words appear only inside quoted Google reviews, which carry "Individual experiences. Results vary."

## 3. Accuracy scorecard (Accuracy & compliance)

"Primary sources" = at least one page-specific claim verified against an outside source. "Cross-page" = reconciled against the page's own data, sibling pages or the Uncapping Study. "Coherence only" = internal checks passed, no outside lookup. Sorted worst first.

| Page | County | Verification | Score | Grade | Rationale (deductions, with evidence in the CSV) |
|---|---|---|---|---|---|
| /mortgage-lender-ypsilanti-mi/ | Washtenaw | Primary sources | 80 | B | -10 EMU "about 23,000 students" vs 12,176 in fall 2025; -3 population 19,600 has no year or source; -4 Zillow headline value, June 2026 market data; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-ann-arbor-mi/ | Washtenaw | Primary sources | 82 | B | -10 U-M jobs "about 30,000" wrong, contradicts 10 sibling pages (SPARK 37,400; U-M 56,276); -4 headline value is Zillow, not the Census median used on 80 pages; -1 Scio 31% vs 30% on Scio page; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-chelsea-mi/ | Washtenaw | Cross-page | 89 | B | -8 headline/market section uses March 2026 data the page contradicts ($395,000 Sept 2026); -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-dexter-mi/ | Washtenaw | Cross-page | 89 | B | -8 headline $475,000 (spring Redfin) contradicts the ACS $421,000 and Nov 2026 $526,000 on the same page; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-manchester-mi/ | Washtenaw | Primary sources | 89 | B | -8 headline is ZIP-wide Redfin median ($360,000) for a city that is 2% of the ZIP; ACS $232,000; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-east-lansing-mi/ | Ingham | Primary sources | 92 | A | -5 population shows Ingham part only (city 47,741 in 2020); -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-milan-mi/ | Washtenaw | Cross-page | 92 | A | -4 Zillow headline value; -1 ACS labeled "2024 estimate"; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-norton-shores-mi/ | Muskegon | Primary sources | 92 | A | -3 employer data from 2022 report conflicts with Muskegon page (2025); -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-saline-mi/ | Washtenaw | Cross-page | 93 | A | -4 Zillow headline value, not the Census median; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-battle-creek-mi/ | Calhoun | Primary sources | 94 | A | -1 $750 exemption not confirmable; -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-grand-rapids-mi/ | Kent | Primary sources | 94 | A | -1 Wikipedia cited for largest employer; -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-lansing-mi/ | Ingham | Primary sources | 94 | A | -1 "Michigan's first public zoo" contested; -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-ada-township-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-allendale-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-byron-township-mi/ | Kent | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-caledonia-township-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-cannon-township-mi/ | Kent | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-cascade-township-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-delhi-township-mi/ | Ingham | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-delta-township-mi/ | Eaton | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-east-grand-rapids-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-gaines-township-mi/ | Kent | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-georgetown-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-grand-haven-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-grand-rapids-township-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-holland-mi/ | Ottawa | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-holland-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-kalamazoo-mi/ | Kalamazoo | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-kentwood-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-meridian-township-mi/ | Ingham | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-midland-mi/ | Midland | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-park-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-peninsula-township-mi/ | Grand Traverse | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-pittsfield-township-mi/ | Washtenaw | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-plainfield-township-mi/ | Kent | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-portage-mi/ | Kalamazoo | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-saginaw-township-mi/ | Saginaw | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-spring-lake-township-mi/ | Ottawa | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-texas-township-mi/ | Kalamazoo | Coherence only | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-traverse-city-mi/ | Grand Traverse | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-walker-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-webster-township-mi/ | Washtenaw | Primary sources | 95 | A | -2 ACS population identical to 2020 count, likely copy error; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-wyoming-mi/ | Kent | Primary sources | 95 | A | -3 "Talk with a local mortgage expert" heading; -2 Vintage 2024 population (V2025 out May 2026) |
| /mortgage-lender-ypsilanti-township-mi/ | Washtenaw | Primary sources | 96 | A | -1 compares sale prices to loan limits; -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-algoma-township-mi/ | Kent | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-alpine-township-mi/ | Kent | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-antwerp-township-mi/ | Van Buren | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-barton-hills-mi/ | Washtenaw | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-bath-township-mi/ | Clinton | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-bay-city-mi/ | Bay | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-blair-township-mi/ | Grand Traverse | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-blendon-township-mi/ | Ottawa | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-comstock-township-mi/ | Kalamazoo | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-courtland-township-mi/ | Kent | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-dewitt-township-mi/ | Clinton | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-dexter-township-mi/ | Washtenaw | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-east-bay-township-mi/ | Grand Traverse | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-fruitport-township-mi/ | Muskegon | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-garfield-township-mi/ | Grand Traverse | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-grand-haven-mi/ | Ottawa | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-grandville-mi/ | Kent | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-jamestown-township-mi/ | Ottawa | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-kalamazoo-township-mi/ | Kalamazoo | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-laketown-township-mi/ | Allegan | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-leighton-township-mi/ | Allegan | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-leoni-township-mi/ | Jackson | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-lincoln-township-mi/ | Berrien | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-lodi-township-mi/ | Washtenaw | Cross-page | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-long-lake-township-mi/ | Grand Traverse | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-marquette-mi/ | Marquette | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-monitor-township-mi/ | Bay | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-muskegon-mi/ | Muskegon | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-muskegon-township-mi/ | Muskegon | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-northfield-township-mi/ | Washtenaw | Cross-page | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-oshtemo-township-mi/ | Kalamazoo | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-richland-township-mi/ | Kalamazoo | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-salem-township-mi/ | Washtenaw | Cross-page | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-scio-township-mi/ | Washtenaw | Cross-page | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-st-joseph-township-mi/ | Berrien | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-summit-township-mi/ | Jackson | Primary sources | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-superior-township-mi/ | Washtenaw | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-tallmadge-township-mi/ | Ottawa | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-thomas-township-mi/ | Saginaw | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-thornapple-township-mi/ | Barry | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-tittabawassee-township-mi/ | Saginaw | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-york-township-mi/ | Washtenaw | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-lender-zeeland-township-mi/ | Ottawa | Coherence only | 97 | A | -3 "Talk with a local mortgage expert" heading |
| /mortgage-michigan/additional-cities/ | Hub | Cross-page | 97 | A | -3 Samantha named without NMLS 1647301 |
| /mortgage-michigan/washtenaw-county/ | Hub | Cross-page | 98 | A | -2 price range built on mixed "typical value" measures from city pages |
| /mortgage-michigan/kent-county/ | Hub | Cross-page | 100 | A | No defects found |
| /mortgage-michigan/ottawa-county/ | Hub | Cross-page | 100 | A | No defects found |

## 4. Error patterns, ranked by impact

### 4.1 Legacy Washtenaw pages carry the factual errors (P0/P1)
The 8 pages built outside the template (Ann Arbor, Ypsilanti, Chelsea, Dexter, Manchester, Milan, Saline and Barton Hills) differ from the rest:
- free-text narrative
- portal data in the hero
- "early 2026", "spring 2026" or "June 2026" market periods where the template pages use July to September 2026
- 4-decimal millage on some and 2-decimal on others

They hold both hard factual errors and 7 of the 13 incorrect items:

| Page | On-page claim | Verified | Fix |
|---|---|---|---|
| Ann Arbor | "University of Michigan and Michigan Medicine, about 30,000 jobs between them … ( Wikipedia )" | SPARK Sept 2026: U-M about 37,400 (cited on 10 sibling pages); U-M OBP Nov 2025: 56,276 Ann Arbor campus + hospital | CSV row, P0 |
| Ypsilanti | "EMU, with about 23,000 students" | 12,176 fall 2025 (EMU via The Eastern Echo) | CSV row, P0 |
| Ypsilanti | "roughly 19,600 people" | 2020 Census 20,648; V2023 19,393; no year on page | CSV row, P1 |
| Dexter | Hero $475,000 | Same page: ACS $421,000; Redfin ZIP $526,000 (Nov 2026) | CSV row, P1 |
| Chelsea | "$370,000 (Zillow … Redfin $369,000 March 2026)" | Same page: Redfin $395,000 (Sept 2026); ACS $312,700 | CSV row, P1 |
| Manchester | Hero $360,000 = ZIP 48158 Redfin median | City is about 2% of the ZIP; ACS $232,000 | CSV row, P1 |

**Fix pattern.** Move these 8 pages onto the data template. Until then, apply the CSV rows.

### 4.2 One label, four measures: "Typical home value" (P1)
On 80 pages, "Typical home value near $X, from the market research on this page" is the Census ACS 2020 to 2024 owner median, and the page says so in the market section. On 7 Washtenaw pages it is a Zillow index or a Redfin sale median. Two problems follow:
- The hub's "from $234,000 in Ypsilanti Township to $1,410,000 in Barton Hills" compares unlike numbers.
- On the Census basis, Manchester ($232,000) and Ypsilanti ($233,000) would sit below Ypsilanti Township.

**Recommendation.** Make the Census owner median the only headline measure, and keep portal figures in the financing paragraph with their dates. Exact replacements are in the CSV. After the change, regenerate the Washtenaw hub range.

### 4.3 Local-presence implication (P1, 87 pages)
No city page claims an office in its market, and the schema address is Waterford. But the closing H2 on every city page reads "Talk with a local mortgage expert". For Grand Rapids (about 2 hours), Traverse City (more than three hours) or Marquette (335 miles in a straight line), "local" is not supportable. **Replace it with "Talk with a Michigan mortgage expert"** on all 87 pages; it is one template string. This is the wording the Additional Cities hub already uses, and it keeps the keyword "mortgage expert".

### 4.4 Vintage drift (P2, 33 pages)
The template pages use three population bases:
- "Census Bureau's 2024 estimate" (33 pages)
- ACS 2020 to 2024 with the 2020 count in brackets (about 47 pages)
- free text (7 pages)

The ACS base is current until the 2021 to 2025 ACS release in December 2026. The Vintage 2024 base was superseded on May 14, 2026. Examples: Grand Rapids is 201,180 in Vintage 2025 against 200,117 in Vintage 2024, and Lansing is 114,783 against 114,336.

All 10 Vintage 2024 values I spot-checked were correct for 2024: Grand Rapids, Lansing, Kalamazoo, Wyoming, Kentwood, Battle Creek, Portage, Midland, Holland and Traverse City. This is a refresh job, not an error. Exact text is given for Grand Rapids and Lansing; `[VERIFY: …]` placeholders are given for the rest.

### 4.5 Partial, stale or weakly sourced narrative facts (P1/P2)
- **East Lansing** leads with its Ingham County part (43,304 ACS; 45,264 in 2020) instead of the city's 47,741.
- **Norton Shores** cites the City of Muskegon's 2022 employer list, which conflicts with the Muskegon page's 2025 list.
- **Grand Rapids** cites Wikipedia for Corewell's rank. The same page already has the city's 2025 financial report figure (about 25,000).
- **Lansing** calls Potter Park "Michigan's first public zoo". That is contested: John Ball Zoo dates to 1891, and Potter Park Zoo opened in 1920.
- **Webster Township** shows ACS and 2020 population as the identical 6,575, which is likely a copy error. The 2020 figure is right.
- **Milan** calls ACS 5-year data "the Census Bureau's 2024 estimate".
- **Battle Creek**: the $750 exemption could only be traced to a 2011 source.

### 4.6 Rounding and concept consistency (P2)
- **Rounding.** The template rounds .5 to even: Scio 30.5% shows as 30% and Delhi 34.5% as 34%. The hand-written Ann Arbor page rounds half up (Scio 31%). Pick half-up and apply it everywhere. Under that rule Scio becomes 31% and Delhi 35%. Alternatively, change Ann Arbor to 30% as the CSV does, for the fewest edits.
- **Loan limits.** Ypsilanti Township (and loosely Kentwood) compares sale prices with the FHA and conforming limits. Ada Township states the correct rule: the limit caps the loan, not the price. Use the Ada wording everywhere.
- **Millage precision.** Some pages show 4 decimals (Lodi 34.7171, Grand Haven 34.0702) and others 2. Standardize on 2 decimals, matching the Ann Arbor and Grand Rapids pages.

### 4.7 Hub compliance (P2)
The Additional Cities hub names Samantha twice without NMLS 1647301. Every other page in scope shows it.

## 5. Income-tax claims: full verification

All income-tax statements in the group are correct:

| City | On-page claim | Verified |
|---|---|---|
| Grand Rapids | 1.5% residents (and 0.75% nonresidents on the Grand Rapids Township page) | 1.5% and 0.75% since July 1, 2010 |
| Walker | 1% and 0.5%, $600 exemption, returns due April 30 | Confirmed |
| Lansing | 1% residents | 1% and 0.5% |
| East Lansing | 1% and 0.5% since Jan 1, 2019, approved for 12 years | Approved August 2018, expires 2030 |
| Muskegon | 1% and 0.5% | Confirmed |
| Battle Creek | 1% and 0.5% since 1967 | Adopted by voters Feb 7, 1967 |
| Jackson (Summit Twp page) | 1% residents | Confirmed |
| Saginaw (Saginaw Twp page) | 1.5% residents (0.75% nonresidents) | Secondary sources; Treasury page blocked |
| Muskegon Heights and Springfield | Levy one | Both on the list of 24 |
| Kalamazoo, East Grand Rapids, Kentwood, Wyoming, Grandville, Grand Ledge, Norton Shores, all townships | No income tax | None on the list of 24 |
| Treasury list | 24 cities, no townships | Matches secondary sources and the City of Grand Rapids list; the Treasury page itself was blocked |

The only pages in the group that sit in an income-tax city are Grand Rapids, Walker, Lansing, East Lansing, Muskegon and Battle Creek. All six disclose the tax up front (in the hero, the financing section or a taxing-unit card) and again in an FAQ. The only gap is Battle Creek's $750 exemption, which needs confirmation in the 2025 instructions.

Sources: [Grand Rapids FAQ](https://www.grandrapidsmi.gov/Government/Departments/Income-Tax-Department/Individual-Tax-Form-FAQ), [Grand Rapids list of other cities](https://www.grandrapidsmi.gov/departments/fiscal-services/income-tax/other-michigan-cities-with-income-tax/), [Walker FAQ](https://walker.city/m/faq?cat=20), [WKAR, East Lansing](https://www.wkar.org/politics-government/2018-08-08/east-lansing-passes-income-tax), [Battle Creek board of review](https://battlecreekmi.gov/DocumentCenter/View/13318/Income-Tax-Board-of-Review), [CRC memo](https://crcmich.org/PUBLICAT/2010s/2011/memo1103.pdf), [Doeren, 24 cities](https://doeren.com/viewpoint/24-michigan-cities-that-make-you-pay-income-tax).

## 6. Verified correct (positive evidence)

- **Loan limits, checked on 16 sampled pages and repeated sitewide.**
  - 2026 conforming baseline: $832,750 ([FHFA](https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026)).
  - 2026 FHA floor: $541,287, which applies to these counties ([HUD](https://www.hud.gov/news/hud-no-25-145)).
  - MSHDA MI Home Loan sales price limit: $566,355 statewide from June 1, 2026, plus MI 10K up to $10,000, repaid on sale, refinance, payoff or move-out ([MSHDA](https://www.michigan.gov/mshda/homeownership/mi-home-loan)).
- **Millage confirmed against city publications.**
  - Ann Arbor 2025: 52.67 homestead and 68.63 non-homestead, with a 45.21 summer and 7.46 winter split. 2026 summer: 45.42 ([a2gov](https://www.a2gov.org/finance-and-administrative-services/assessing/property-tax-estimator/)).
  - East Grand Rapids: 47.50 (47.4995), cited on three pages ([eastgrmi.gov](https://eastgrmi.gov/550/Tax-Bill-Estimator-Millage-Rates)).
  - Marquette: 38.32 in 2025, and 37.31 of 39.62 for 2026 ([city charts](https://marquettemi.gov/wp-content/uploads/2026/06/All-Millage-Rate-Chart-2026-Summer-07.01.26.pdf)).
- **Local rules.**
  - Ann Arbor's fifteen local historic districts ([a2gov](https://www.a2gov.org/planning/historic-preservation/)).
  - Rental inspections every 30 months ([a2gov](https://www.a2gov.org/building-rental-and-inspection-services/rental-housing/property-registration-and-inspection-information/)).
  - Manchester became a city on Nov 15, 2023, after a 66% vote ([WEMU](https://www.wemu.org/wemu-news/2023-11-08/village-of-manchester-to-become-a-city-after-voters-pass-city-charter)).
- **Population.**
  - Grand Haven 11,011 (2020).
  - Webster Township 6,575 (2020).
  - Barton Hills 316 (2020).
  - Ten Vintage 2024 city estimates.
  - Grand Rapids ACS owner median $244,500 and household income $69,108.
- **Cross-page figures.** Every neighbor figure cited across pages matches the neighbor's own page, apart from Scio's rounding. Examples: Pittsfield 40.09, Lodi 34.72/35.61, Barton Hills 49.56, Salem 32.69, Northfield 41.23, Grand Rapids Township 28.66 to 33.41, Kentwood 39.22 to 41.99, Walker 27.51 to 33.73 and Ypsilanti 63.29/47.49. Hub cards match city pages on all 91 URLs.

## 7. Unverifiable items and why

During this session, outbound fetches to **census.gov, api.census.gov, michigan.gov (Treasury, MSHDA) and county and municipal sites** were blocked by the session network policy. Verification therefore relied on search-engine extracts of those primary pages. As a result, these could not be confirmed row by row:
- Treasury 2025 homestead totals for Grand Rapids, Kentwood, Walker, Holland, Grand Haven, Kalamazoo, Traverse City, East Lansing, Muskegon, Saginaw Township, Ypsilanti and Ypsilanti Township. Each matches Align's study table and neighboring pages.
- Vintage 2024 values for 23 township and smaller-city pages.
- ACS population figures for most township pages.

They are marked unverifiable in the CSV with that reason. **To close this, allow census.gov, data.census.gov, api.census.gov and michigan.gov (plus the county equalization domains) for the refresh job in section 8.** A scripted pull of the Treasury table and the Census APIs would turn these into checked values in minutes.

The Uncapping Study percentages are Align's own research. They are consistent with the published study page, but nothing outside Align can confirm them. Keep the study linked as the source, as the pages already do.

## 8. Recommended data-refresh process

1. **One dataset, one template.** Keep a municipality dataset (CSV or JSON) with a source URL, vintage and retrieved date for each field: population, ACS owner median, tax share, ZIPs and land shares, millage by school district, the Uncapping Study jump, income-tax status, employers and market period. Render all 87 pages and the hubs from it. Retire the 8 hand-written Washtenaw pages into the template; they hold all the factual errors found.
2. **Refresh calendar** (owner: content ops; reviewer: Samantha or compliance for anything describing Align):

| Source | When it changes | Action |
|---|---|---|
| FHFA conforming and HUD FHA limits | Late Nov (effective Jan 1) | Update the global constants in the first week of December |
| MSHDA price and income limits | Irregular (last change June 1, 2026) | Check monthly |
| Census Vintage city and township estimates | Mid-May | Replace "2024 estimate" with the new vintage |
| ACS 5-year | Early-mid December | Update owner medians, tax share and housing mix; the 2021-2025 release is due December 2026 |
| Michigan Treasury Total Property Tax Rates (prior year) | Spring | Update homestead and non-homestead tables. Re-check summer levies on July 1 and winter levies on December 1 for pages that quote the current year |
| Align Uncapping Study | Annually after May equalization | Re-run, then regenerate the jump figures |
| City income-tax list | January | Re-check the Treasury list. East Lansing's tax sunsets in 2030; watch for new city levies |
| Employer lists (Ann Arbor SPARK, city ACFRs) and university enrollment | September to January | Refresh the narrative and log the source year |
| Redfin and Zillow market periods | Quarterly | Use one period sitewide (e.g. "three months ending September 2026") |

3. **Automated pre-publish checks** (this audit's scripts can become the linter):
   - hero = stats = FAQ = hub
   - neighbor figures match the neighbor's page
   - jump figures match the study table
   - ZIP count matches the list
   - one rounding rule (half-up) and 2-decimal millage
   - vintage lint: flag "2024 estimate" once Vintage 2025 exists
   - banned phrases: "local mortgage expert", "Wikipedia" as a source, unsupported superlatives such as "first" or "oldest" without a source
   - NMLS present wherever Samantha is named
4. **Human review for narrative facts.** Every employer count, enrollment figure and "first/oldest/newest" claim needs a primary URL in the Sources list and a review date. Re-verify these yearly; they are where every hard error in this group came from.
5. **Change log.** Record each refresh (field, old value, new value, source, date) so the auditor can trace any figure on any page.
