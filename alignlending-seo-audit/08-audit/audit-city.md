# Independent audit: City Pages team (04-city-pages)

Auditor: independent auditor, city scope · audited 2026-11-15 · crawl of 2026-11-15
Files audited: `consistency-sweep.md`, `city-matrix.csv`, `city-fixes.csv`, `similarity-top-pairs.csv`, `factcheck-group-1.md/.csv`, `factcheck-group-2.md/.csv`, `factcheck-group-3.md/.csv`.
Companion file: `08-audit/corrections-city.csv` (296 rows: file, row_identifier, field, current_value, corrected_value, reason).

Method in one line: I re-derived the sweep's numbers from `$DATA` with my own Python (not the team's scripts) and verified all 44 P0s plus 53 other findings against primary files I downloaded myself: Census Vintage 2025 sub-county estimates, ACS 2020-2024 table files B25077/B25103, the 2020 PL 94-171 Michigan file, 2020 ZCTA relationship files, the Wayne County 2025 and 2026 apportionment reports, and MCL 211.7cc from legislature.mi.gov. I also ran one polite live check of the Farmington Hills URLs. My scratch work is in `scratchpad/audit_city/`.

**Access limits.** www.michigan.gov returns 403 to scripted requests from this session (bot protection). I did not try to get around it. As a result, Treasury's 2025 Total Rates PDF and the PRE guidance page were not read directly: the PRE rule was checked against the statute instead, and Treasury millage was spot-checked through the Wayne County report. The Census API now requires a key, so I used the Census bulk files. obp.umich.edu, emich.edu and annarborusa.org are outside the allowlist, so those figures come from search excerpts and are labeled that way below.

---

## 1. Verdicts

| Agent | Verdict | Why (one line) |
|---|---|---|
| Consistency sweep | **PASS WITH CORRECTIONS** | Every headline number reproduces. But the P0 meta fix copies a mixed-measure figure into 17 metas, the Otisville multi-county flag is wrong, the Northville schema order is backwards, the population-label fixes would mislabel aggregator, tract and ZIP figures as Census, and it missed three template compliance issues. Two scores sit outside rubric tolerance. |
| Fact-check group 1 (Oakland, Livingston, Lapeer, Genesee) | **PASS WITH CORRECTIONS** | All 18 P0s confirmed exactly against ACS and MCL 211.7cc. The strongest of the three. Corrections: the 90 (A) group score is inflated by about 10 points against rubric anchors; 8 hero rows carry `[VERIFY]` where the data exists; one correction cites Wikipedia; it missed fair-housing words on 8 pages. |
| Fact-check group 2 (Wayne, Macomb, St. Clair, Monroe, Lenawee) | **PASS WITH CORRECTIONS** | The Highland Park 2026 millage and every sampled 2026 Wayne rate reproduce to four decimals. Corrections: the Emmett population finding is wrong (the page is right). It applied a looser tax-share standard than group 1 (31 pages are off by more than 0.25 point, but only 8 were marked incorrect). The Highland Park priority is overstated. The 93 (A) score is inflated by about 12 points. Many fixes are instructions rather than exact text. |
| Fact-check group 3 (West, Mid and Northern Michigan) | **PASS WITH CORRECTIONS** | Both P0 claims are confirmed wrong on the page. Corrections: the EMU replacement is a year stale; its own U-M figure (56,276) did not reproduce; the Lansing correction is wrong (114,800 vs the Census 113,900); it cites Wikipedia, a student newspaper and Bridge in its own evidence; 33 placeholders are resolvable now; it missed 4 tax-share errors. Verification depth was thin, so the 95.5 (A) is about 9 points high. |

No agent fails: the research underneath is careful, and the errors fall into patterns that can be fixed in bulk. The common failure is **calibration and cross-agent standards**, not fabrication.

---

## 2. Re-derivation of the sweep's headline numbers

| Sweep claim | Auditor recompute (own script on `$DATA`) | Result |
|---|---|---|
| Trust/NAP consistent on 276/276 (tel, both NMLS, "5.0 on Google, 123 reviews", six-state line, EHO, Calendly, `/start/`) | 276/276 on all eight checks | **Confirmed** |
| 1,001 stat values marked up as headings | 984 pure-value H3s (strict), 1,008 value-led H3s (loose); all are H3 and present on 276/276; Barton Hills 11, Lake Angelus 13 | **Confirmed** (definition-dependent, ±2%) |
| 132 pages link Wikipedia (171 links); 4 city-data links | 132 pages, 171 links, all in the content region; city-data on Britton, Maybee, Metamora, Otter Lake | **Confirmed** |
| 111 metas under 140 characters | 111 (all 121-139; none under 120, none over 160) | **Confirmed** |
| Median unique text 68.5%; minimum Kentwood 58.4%; closest pair 12.9% (4.8% ex-boilerplate) | Median 68.1%, minimum Kentwood 57.8%, boilerplate median 16.6%, Flint Twp/Frenchtown Twp 0.129 full and 0.048 ex-boilerplate. 20-page random sample (seed 20261115): median 68.3%, max nearest-sibling containment 22.5% | **Confirmed** |
| 17 metas quote a different price (Ypsilanti $335K vs $272K; Farmington Hills $350K vs $385K) | All 17 differ from the glance. 16 of the meta figures exist on the page as ZIP or sale figures. The Farmington Hills $350,000 is the page's 2024 yearly median. Oak Park's $230,000 appears nowhere on the page | **Confirmed** (the fix is corrected, §6.1) |
| `/mortgage-lender-farmington-hills-mi/` returns 404 | Live, 2026-11-15: 404; `/mortgage-lender-in-farmington-hills/` returns 200 | **Confirmed** |
| Northville gives three county answers | Raw HTML: eyebrow "Oakland and Wayne counties", `BreadcrumbList` position 3 "Wayne County", `containedInPlace` "Oakland County, Michigan"; it links back to the Oakland hub only | **Confirmed** (the fix is corrected: Census V2025 puts the majority in **Oakland**, 3,285 of 6,013) |
| Blair Township sits on no hub; 40 pages have only `/additional-cities/` | Blair is linked only by the state hub `/mortgage-michigan/` and 5 neighbors; no county hub or `/additional-cities/` link. 40 pages are additional-cities-only | **Confirmed** |
| Berkley shows a "2026 estimate" | "The city of about 15,386 residents (2026 estimate)". Census V2025 = 15,145 | **Confirmed** |

---

## 3. Checked-findings table

Status key: **C** = confirmed as written · **C*** = confirmed, but the fix, priority, source or scope is corrected in `corrections-city.csv` · **R** = refuted · **U** = could not be verified from this session.

### 3.1 All P0s (44)

| # | Agent | Finding | Primary evidence | Status |
|---|---|---|---|---|
| 1-17 | Sweep | 17 meta price mismatches (Carleton, Clarkston, Dearborn Heights, Farmington, Farmington Hills, Garden City, Grosse Pointe, Howell, Oak Park, Oxford, Southfield, St. Clair Shores, Sterling Heights, Sylvan Lake, Taylor, Westland, Ypsilanti) | `page_summary.meta_description` vs `text/*.txt` glance | **C*** The mismatch is real, but it is a consistency issue, not a wrong fact: downgrade to P1 and sequence after D2. The prescribed fix (copy the glance figure) would put a Zillow list price into the Sylvan Lake meta in place of the Census median, a spring list price into Southfield's, and a ZIP 48081 card into St. Clair Shores'. |
| 18 | Sweep | Berkley "2026 estimate" | sub-est2025_26.csv: 15,145 | **C*** Downgrade to P1. Exact text: "The city of about 15,100 residents (U.S. Census Bureau estimate, July 1, 2025)" |
| 19 | Sweep | Farmington Hills patterned URL 404 | Live check | **C** |
| 20 | Sweep | Northville schema/breadcrumb/eyebrow conflict | Raw JSON-LD; Census V2025 parts | **C*** The order must be Oakland first (55% of residents), with the breadcrumb set to Oakland, not Wayne |
| 21 | Sweep | Blair Township missing from every county hub | `pages.jsonl` links | **C** |
| 22-36 | G1 | "Property tax current owners pay" wrong on 15 pages (Brighton, Clio, Flushing, Goodrich, Grand Blanc, Howell, Imlay City, Lake Orion, Linden, Milford, Montrose, Otisville, Otter Lake, Swartz Creek, Wolverine Lake) | ACS 2020-2024 B25103 ÷ B25077 (place). Every value reproduces exactly, e.g. Montrose $2,641 / $113,300 = 2.33% vs 0.42% on the page | **C** (15/15) |
| 37-39 | G1 | PRE deadline "May 1" on Auburn Hills, Fenton (2 sentences) and Holly (2 sentences) | MCL 211.7cc(2): May 1 applied only to taxes levied before Jan 1, 2012; June 1 for the summer levy, November 1 for the winter levy | **C** (3/3) |
| 40-42 | G2 | Highland Park 2025 millage 63.2210/79.2184 vs 2026 47.0420/62.8362 (hero, FAQ, budget math) | Wayne County 2026 apportionment report, row 82070; the city debt levy fell from 21.2200 to 5.4000 | **C*** The values are exact, but every on-page instance is labeled "2025" and true for 2025, so this is P1-high, not P0 (unified rule U7). Page score 56 → 66 |
| 43 | G3 | Ann Arbor: U-M and Michigan Medicine "about 30,000 jobs" | Ann Arbor SPARK lists ≥36,700 (Jan 2024 list; Sept 2026 list per G3, 37,400). U-M OBP November 2025 headcount summary 51,947 (campus + hospital, excluding student employees); grand total 58,505 (search excerpts; obp.umich.edu is outside the allowlist) | **C*** The claim is wrong. G3's "56,276" did not reproduce, so mark it `[VERIFY]`. The SPARK-based fix may stand (Tier 3), or use "more than 50,000 faculty and staff" from U-M's own count |
| 44 | G3 | Ypsilanti: "EMU, with about 23,000 students" | Fall 2025 preliminary 12,176 (EMU enrollment VP via The Eastern Echo); fall 2026 preliminary about 11,468 (MASU data via Bridge Michigan) | **C*** The claim is wrong, but the replacement ("about 12,200 students in fall 2025") is a year stale and sourced to a student paper. Corrected text is in the CSV |

**P0 tally: 44 checked, 20 confirmed as written, 24 confirmed with a corrected fix or priority, 0 refuted.**

### 3.2 Other findings (53)

| ID | Agent | Finding | Primary evidence | Status |
|---|---|---|---|---|
| S1-S5, S10, S16 | Sweep | NAP, stat headings, Wikipedia links, short metas, uniqueness, 40 hub-less pages, title/H1 pattern (275/276 titles ≤60) | §2 | **C** (7) |
| S12 | Sweep | Nine multi-county cities have a one-county eyebrow | Census V2025 place parts (SUMLEV 157) | **C*** 8 of 9 confirmed. **Otisville refuted**: it lies wholly in Genesee County (805 residents), and the "county line through the village" sentence on its page describes Otter Lake. Missed: **Memphis** (Macomb 782 / St. Clair 309) and **Midland** (Bay part, 176) |
| S13 | Sweep | Four rotated "In Samantha's words" quotes need provenance | Quote bank §10.3; site-wide text search | **C*** Resolved. 74 pages use a bank quote verbatim. 57 use a long form also published on the Uncapping Study. **66 pages use a paraphrase** of the calculator's verbatim quote ("County alone does not tell you much..."). **79 pages use a quote found nowhere else** ("In Michigan, don't just look at the current tax bill...") |
| S14 | Sweep | 92 population-label rows: keep the page number and add a Census Vintage 2025 label `[VERIFY]` | sub-est2025_26.csv; page context | **C*** As written, the fix would mislabel World Population Review projections as Census (Algonac 4,070 vs V2025 4,109). 7 rows target tract, ZIP, township or county-side figures (Clawson "Tract 1800 Population 2,445"; Estral Beach "13,170 people live across the ZIP"). 90 rows are resolved with V2025 values in the CSV and the 7 are withdrawn |
| S15 | Sweep | "No compliance issues in Align's own copy" | Text scans of 276 pages | **C*** Missed: (a) "Talk with a local mortgage expert" H2 on 276/276 (F15), which the sweep's own T7 section order re-specifies; (b) a government non-affiliation line on 0/276, although FHA appears a median 4 times per page and in 106 metas; (c) fair-housing banned words (guide §6) in Align copy on 14 pages; (d) a "30-year fixed ... $10,662 less" savings sentence on Lake Orion and Rochester Hills |
| G1-a | G1 | 9 P1 tax-share errors (Burton, Columbiaville, Fowlerville, Hazel Park, Madison Heights, Northville, Orchard Lake, Rochester Hills, West Bloomfield) | My all-page scan finds the same 24 pages >0.25 point off | **C** |
| G1-b | G1 | Berkley V2025 15,145; 2020 Census 15,194 | sub-est2025; PL POP100 | **C** |
| G1-c | G1 | South Lyon 12,107; Independence 37,725; Novi 67,319; Farmington Hills 83,291 | sub-est2025 | **C** |
| G1-d | G1 | P.O. Box ZIPs 48012, 48361, 48068 and Flint "ZIP 48501" | 2020 ZCTA file: none of the four is a ZCTA | **C** |
| G1-e | G1 | Oxford: 48370 lies mostly in Addison Township | ZCTA-cousub file: 96.8% Addison, 3.2% Oakland Twp | **C** |
| G1-f | G1 | Oxford village 3,492 (2020) | PL POP100 = 3,492 | **C** |
| G1-g | G1 | McLaren headquarters is in Grand Blanc, not Flint | McLaren 2017 annual report (One McLaren Parkway, Grand Blanc) | **C*** The finding stands; replace its Wikipedia source |
| G1-h | G1 | Fenton +25% (Oakland hub) vs +55% | Uncapping Study lists **two** rows: Fenton (Genesee) +55.4%, Fenton (Oakland) +25.1%; the Oakland part has about 25 residents | **C*** Not a transcription error. Drop the row from the Oakland hub, or label it "mostly Genesee County, +55%" |
| G1-i | G1 | 26 pages show the Census owner median labeled "market research" | B25077 match within ±$1,000: 26 | **C** |
| G1-j | G1 | Sylvan Lake hero $359,000 is a Zillow list price | Page text; ACS $391,000 | **C*** The fix `[VERIFY: standard sale-price measure]` contradicts G1's own §5; corrected to the Census median, pending D2 |
| G1-k | G1 | Flint Census owner median $53,500 | B25077 = 53,500 | **C** |
| G1-l | G1 | Treasury millage matches (spot-check on Northville, Wayne side: 42.17 / 60.17) | Wayne 2025 apportionment: 42.1693 / 60.1693 | **C** |
| G1-m | G1 | 776 Treasury millage values match to four decimals | Treasury PDF returns 403 to scripted requests from this session | **U** (spot-check only) |
| G2-a | G2 | Detroit 2026 rate 64.10 | Wayne 2026: 64.1017 | **C** |
| G2-b | G2 | 2026 rates: Grosse Pointe Woods 54.0993; Harper Woods 84.6248 / 86.4649; Sumpter 29.6870 / 37.2691 / 33.8242 / 31.5381; Westland (5 districts); Romulus (3) | Wayne 2026 report | **C** |
| G2-c | G2 | Tax share wrong on Belleville 1.94, Emmett 1.81, Livonia 1.37, St. Clair 1.52, Harper Woods 2.18, Flat Rock 2.38, Rockwood 1.92, Melvindale 1.58 | ACS B25103 ÷ B25077 | **C** (the values are right; priority P1 → P0 under U7) |
| G2-d | G2 | Emmett "roughly 258 people" is wrong; 2020 Census was 239 | **PL 94-171 POP100 for Emmett village = 258.** 239 is the Census estimates base | **R**: the page is right |
| G2-e | G2 | Allen Park 2020 = 28,638 (not 28,533); V2025 27,445 | PL; sub-est2025 | **C** |
| G2-f | G2 | Grosse Pointe Woods "$373,339 (Census QuickFacts)" is wrong; ACS $342,100 | B25077 = 342,100 | **C** |
| G2-g | G2 | Hamtramck omits 48211 (18.9% of the city's land) | ZCTA-place: 48212 81.1%, 48211 18.9% | **C** |
| G2-h | G2 | 48112, 48061, 48090 are P.O. Box ZIPs | No ZCTA | **C** |
| G2-i | G2 | New Haven: 48050 lies outside the village | ZCTA-place: the village is 100% in 48048 | **C** |
| G2-j | G2 | Memphis spans Macomb and St. Clair | V2025: 782 / 309 | **C** |
| G2-k | G2 | Detroit hero $395K/$411K vs cards $365K/$377K; FAQ range starts at $144K while the 48217 card is $45K | Page text | **C** |
| G2-l | G2 | Detroit 649,095; Dearborn 105,611 (2020: 109,976); Monroe 20,076 (2020: 20,462) | sub-est2025; PL | **C** |
| G2-m | G2 | Adrian has no city page | Not in `pages.jsonl` or `crawl_urls.txt` | **C** |
| G2-n | G2 | 23 of 95 pages use the Census owner median | 24 match | **C** |
| G2-o | G2 | Tax share "implausible on 8, untraceable on 40" | All-page ACS comparison | **C*** Under group 1's standard, **31 G2 pages are >0.25 point off and 14 are ≥0.5 point off**. Missed as incorrect: River Rouge 1.52 vs 2.43, Trenton 1.41 vs 2.00, Riverview 1.37 vs 1.90, Blissfield 0.97 vs 1.49, Romulus 1.20 vs 1.72, New Haven 1.03 vs 1.54, Allen Park 1.39 vs 1.89, plus 16 more between 0.25 and 0.5 |
| G2-p | G2 | Livonia 41.2361 / 37.4524 (2025) | Wayne 2025 | **C** |
| G3-a | G3 | Lansing Vintage 2025 = 114,783; fix "about 114,800" | **sub-est2025: 113,884** (Ingham 108,771 + Eaton 5,113) | **R**: use "about 113,900" |
| G3-b | G3 | Grand Rapids V2025 201,180 ("about 201,200") | 201,183 | **C** |
| G3-c | G3 | East Lansing city total 47,741 (2020) | PL POP100 = 47,741 | **C*** Replace its Wikipedia source with the PL file |
| G3-d | G3 | Ypsilanti 2020 = 20,648; ACS median $233,000 | PL; B25077 = 232,700 | **C** |
| G3-e | G3 | Ann Arbor ACS median $453,000 | B25077 = 453,400 | **C** |
| G3-f | G3 | 80 of 87 pages headline the Census median | 79 match | **C** |
| G3-g | G3 | "Talk with a local mortgage expert" on all 87 pages | Present on **276/276** | **C*** Extend to every city page |
| G3-h | G3 | Scio 30.5% vs Ann Arbor's "31%" | Uncapping Study row: Scio +30.5% | **C** |
| G3-i | G3 | Additional Cities hub names Samantha without NMLS 1647301 | 0 occurrences | **C** |
| G3-j | G3 | Marquette is about 335 miles from Waterford | Great-circle distance about 333 miles | **C** |
| G3-k | G3 | Webster Twp 6,575, Grand Haven 11,011, Barton Hills 316 (2020) | PL POP100 | **C** |
| G3-l | G3 | 33 pages cite the superseded "2024 estimate" | sub-est2025: all 33 resolved | **C** (placeholders replaced in the CSV) |
| G3-m | G3 | Tax share coherent across group 3 | All-page ACS comparison | **C*** Missed on 4 legacy Washtenaw pages: Manchester 1.03 vs 1.47, Saline 1.36 vs 1.78, Milan 1.20 vs 1.59, Ypsilanti 1.49 vs 1.86 |

**Overall tally: 97 items checked (44 P0 + 53 other): 64 confirmed as written, 30 confirmed with a corrected fix, priority, source or scope, 2 refuted outright (Emmett, Lansing) plus 1 refuted item inside a corrected list (Otisville), and 1 unverifiable from this session (Treasury bulk match).**

---

## 4. Cross-agent consistency

### 4.1 Where the agents use different standards

| Topic | Sweep | Group 1 | Group 2 | Group 3 | Effect |
|---|---|---|---|---|---|
| Tax-share error threshold | not checked | any gap >0.25 point = incorrect; ≥0.5 = P0 | only "implausible" values incorrect (8), the rest "unverifiable P2" (40) | coherence only; missed 4 | The same 0.5-point error is P0 in Genesee and P2 in Wayne |
| Tax-share format | — | one decimal, "(Census, 2020 to 2024)" | two decimals plus a long method caption | — | Two hero formats across groups |
| "Typical home value" | meta must copy the glance figure | Census median headline, portal sales second (recommendation) | "name the basis, use one", no pick | Census median only | The sweep's meta fix conflicts with group 1 and 3 hero fixes on Ypsilanti, Sylvan Lake and Southfield |
| Population | label the existing number "[VERIFY] Vintage 2025" | replace with V2025, "(Census Bureau 2025 estimate)", round to 100 | replace with V2025, "(Census Bureau July 2025 estimate: N)" | V2025 for 2 pages, 2020 Census for Ypsilanti, `[VERIFY]` for 31 | Four label styles. The sweep's approach would misattribute aggregator numbers |
| Millage year | "2025 Treasury ✔" | Treasury 2025 only | county 2026 where certified (43 pages "outdated") | Treasury 2025 | Applying group 2 alone creates mixed-year comparison tables across county lines (Northville, Grosse Pointe Shores, Milan, Memphis) |
| "Local mortgage expert" (F15) | re-specified in T7 | not flagged | not flagged | flagged on 87 | Fix it once for 276 |
| Scoring method | flag deductions | bespoke deductions (P0 −12) | different bespoke deductions (P0 −15, unverifiable capped) | different again (−10 / −8 / −3) | Group means are not comparable, and none follow rubric anchors (§5) |
| Page ownership | — | scores Northville (86) | scores Northville (90) | — | Two scores for one page |

### 4.2 Conflicting fixes on the same page

| Page | Conflict | Resolution |
|---|---|---|
| Ypsilanti | Sweep meta → "typical values near $272,000" (Zillow index); group 3 hero → $233,000 (Census) | Decide D2 first. The meta is generated from the D2 field |
| Sylvan Lake | Sweep meta → $359,000 (Zillow list price); group 1 hero → "standard measure" | Hero becomes the Census median of $391,000 (pending D2); keep the current meta figure |
| Southfield, St. Clair Shores | Sweep meta copies a glance figure that is itself a spring list price or a ZIP 48081 card | Same: wait for D2 |
| Northville | Sweep: Wayne first, breadcrumb = majority; groups 1 and 2 both score the page | Oakland first (3,285 of 6,013 residents), breadcrumb Oakland, back-links to both hubs; group 1 owns the score |
| Otisville | Sweep: "Genesee and Lapeer counties" | Withdraw (single county) |
| Berkley | Sweep `[VERIFY: figure]` vs group 1's 15,100 | Group 1's figure with the unified label |
| Emmett | Group 2 "about 240 (2020 Census 239)" | The page's 258 is the 2020 count. Optionally relabel to V2025 (about 240, 2025 estimate) |
| Lake Orion | Group 1 keeps 48360 in the residential ZIPs | ZCTA: the village is 100% in 48362. `[VERIFY]` whether the page covers the village only |
| Fenton | Group 1 "+55% everywhere" | The Study has a separate Oakland-part row (+25.1%); drop or label the Oakland hub row |

### 4.3 Unified recommendations (one per systemic issue)

**U1. Property-tax % stat ("Property tax current owners pay").**
- Method: ACS 5-year **B25103_E001 ÷ B25077_E001** for the page's own Census geography (place for cities and villages, county subdivision for townships, the whole place for multi-county cities). Never derived from a portal, and never hand-typed.
- Display: one decimal. Hero: `Property tax current owners pay: about X.X% of value (Census, 2020 to 2024)`. Stats block: `X.X% Property tax current owners pay, as a share of value (Census ACS 2020 to 2024: median real estate tax / median owner value). A buyer's bill can reset higher the year after a sale`.
- Suppress the stat when B25103 is top-coded ($10,001+: Bloomfield Hills, Birmingham) or when either median's coefficient of variation exceeds 30% (margin of error above about half the estimate; today only Emmett). In its place, give the buyer estimate in the Editorial Policy's taxable-value wording.
- Priority (all groups): a gap of ≥0.5 point = **P0**, 0.25-0.5 = P1. Today that is **59 pages wrong** (group 1: 24, group 2: 31, group 3: 4), 37 of them P0. It is one template recompute.
- Regenerate when ACS 2021-2025 is released (expected December 2026).

**U2. "Typical home value" (owner decision D2: auditor recommendation, still pending).**
- Headline: **Census ACS owner median (B25077)**, labeled `Typical home value near $X (Census owner median, 2020 to 2024)`. It is the only measure available for all 276 places, it is Tier 1 and verifiable, and it already headlines 129 pages (group 3: 79 of 87).
- Optional second line, only where the portal publishes the municipality itself and the window is no older than 6 months: `Recent sales: about $Y (Redfin median sale price, {City}, three months ending {Month YYYY})`, named and never linked.
- Retire from headlines: Zillow indexes, list prices, ZIP figures for another geography, Homes.com and RealtyTrac.
- Where the ACS margin is wide (CV above 30%), show a range or the township figure.
- Hubs rank only on the headline field, and metas are generated from it.
- Tell the owner the trade-off plainly: the Census median lags current sales by 10-25% (Brandon: $331,000 vs $404,881 in 48462), which is why the second line exists.
- Sequence: decide D2, then rebuild the hero, stats, hub tables and metas in one pass on the ACS 2021-2025 data, so nothing is done twice. The 17 meta P0s wait for this.

**U3. Population vintage.**
- One label: `about N residents (U.S. Census Bureau estimate, July 1, 2025)`; inline, `in the Census Bureau's July 1, 2025 estimate`. Round N to 3 significant figures (nearest 100 at 10,000+, nearest 10 at 1,000+, exact below 1,000).
- A 2020 figure is quoted only as the PL 94-171 **POP100 count**, never the estimates base (the Emmett lesson).
- ACS population is never the population headline (it is a 5-year average) and is never called "the 2024 estimate" (Milan).
- Multi-county places use the whole-place total (East Lansing 49,355), with county parts labeled as parts.
- Refresh every May-June (Vintage 2026, about May 2027). World Population Review, Data USA, City-Data and Wikipedia are blocked as sources.

**U4. Millage refresh cadence.**
- One statewide year label from Treasury's **Total Property Tax Rates** (2025 now; the 2026 table is expected spring 2027), on Treasury's special-assessment-inclusive basis, labeled. This keeps every comparison table on one basis across county lines.
- **Material-change exception:** where a county apportionment report certifies a current-year homestead total **≥1.0 mill** away from the page's figure, add one dated sentence beside the table: "Wayne County's 2026 apportionment report certifies 47.04 homestead mills for Highland Park." That covers 12 Wayne pages today (Highland Park −16.18, Sumpter −3.1, Dearborn Heights No. 7 −3.1, Westland and Inkster Romulus-district −2.9/−2.8, Romulus −2.4, Harper Woods, Riverview, Rockwood, Grosse Pointe Woods, Melvindale, Grosse Ile) and the Wayne hub table. Do not rewrite tables into mixed years.
- Calendar: October-December, scan county apportionment reports for ≥1-mill moves. Spring, refresh everything from Treasury in one pass and change the year everywhere. July 1 and December 1, re-check pages that quote current-year summer or winter levies.

**U5. "Local" wording (F15).** One template string on all 276 pages: "Talk with a Michigan mortgage expert".

**U6. Counties.** List every county the municipality has residents in, using Census V2025 place parts, majority first. Breadcrumb and the first `containedInPlace` entry = the majority county, with back-links to every hub. The corrected list:
- Northville (Oakland first), Holland, Milan, Memphis, Grosse Pointe Shores, Lansing, East Lansing, Traverse City, Otter Lake, Cement City.
- Optional: Midland (Bay part, 176 residents), and Fenton only if the 25-resident Oakland part matters.
- Not Otisville.

**U7. Priority and scoring standard.** A wrong figure in a hero stat, a wrong program rule or a hard factual error = P0. Labeled-but-stale = P1. Score with the rubric §3.11 anchors, not bespoke deduction tables. One owner per page (Northville → group 1).

**U8. Samantha quotes.** Only verbatim quotes from the §10.3 bank or another published source, punctuation exact. Replace the 66-page paraphrase now. Put the 79-page unsourced quote behind `[NEEDS SAMANTHA QUOTE]` until Align confirms its source. If Align cannot confirm it, rubric §3.11 treats it as fabricated (G1 hard cap) on those 79 pages until the template changes.

**U9. Government non-affiliation line.** Add it to the shared city disclaimer (one template change, P1). PM or counsel to confirm city pages are in F7 scope, since they name FHA a median of 4 times.

---

## 5. Score calibration (rubric anchors; >5-point deltas flagged)

### 5.1 Group and template scores

| Score | Team | Auditor | Δ | Flag | Anchor-based reason |
|---|---|---|---|---|---|
| Sweep: Accuracy & compliance (consistency portion) | 83 B | Retire; unified city-set accuracy **82 B** | −1 | Method | One aspect cannot have two numbers. The unified figure combines truth and consistency (§5.3) |
| Sweep: Intent & H1 | 92 A | 88 B | −4 | **Grade boundary** | Rubric §3.1 names this exact template as the 80-90 pattern. Title = H1 + brand (the 100 anchor wants them not identical). Refinance intent unaddressed |
| Sweep: Title & meta | 83 B | 76 C | −7 | **Yes** | The §3.5 60-anchor cites this title pattern by name. 111 metas are 121-139 characters. 17 meta figures disagree with the page. The sweep's "only NMLS proof" deduction is wrong (the rubric counts NMLS as proof) |
| Sweep: Internal linking | 89 B | 85 B | −4 | No | Contextual inlinks median 9 (Q1 8, Q3 10) = middle quartiles (80 anchor); 2 links to 301s |
| Sweep: Uniqueness | 96 A | 92 A | −4 | No | Unique shingles 68% (the 100 anchor wants ≥70%); nearest-sibling containment ≤22.5% passes; wrong local facts on about 52 pages |
| Group 1 accuracy | 90 A | **80 B** | −10 | **Yes** | 25 pages with a material error belong at 60-69 (§3.11: "a wrong millage ... an outdated program rule"); the team scored them 71-89 |
| Group 2 accuracy | 93 A | **81 B** | −12 | **Yes** | The looser tax-share standard hid 23 errors. River Rouge (98) and Trenton (97) carry 0.6-0.9-point errors. The Emmett deduction is wrong |
| Group 3 accuracy | 95.5 A | **86 B** | −9.5 | **Yes** | 5 material-error pages scored 80-89. 43 "coherence only" pages scored 95-97 with no outside check. 4 tax-share errors were missed |

### 5.2 Page re-score sample (30 pages, about 10% per group; Accuracy & compliance)

How I scored: a page with no material error and only template-level minor issues (unsourced headline value, "local" wording, missing government line) = 88. One P1 issue = 80. Two P1 issues = 76. One material error = 65. Two or more material errors, or a material error plus a §6 fair-housing word = 60.

| Page | Team | Auditor | Δ | Main reason |
|---|---|---|---|---|
| Montrose | 84 | 65 | −19 | Hero and stats tax share 0.42% vs ACS 2.33% |
| Auburn Hills | 73 | 60 | −13 | PRE "May 1", stale hero value, Zillow forecast |
| Fenton | 82 | 65 | −17 | PRE "May 1" (2 sentences) |
| Holly | 82 | 60 | −22 | PRE "May 1" ×2, and "small-town quiet" (§6) |
| Flint | 84 | 76 | −8 | McLaren HQ, UAW history, ZIP 48501 card, lowest-of-three hero |
| Oxford | 80 | 65 | −15 | 48370 placed in the wrong township; meta built on it |
| Berkley | 82 | 80 | −2 | Impossible "2026 estimate"; 2019-2023 income |
| Waterford | 96 | 88 | −8 | Portal hero with no month; template minors |
| Troy | 96 | 88 | −8 | Same |
| Addison Twp | 95 | 88 | −7 | Census median labeled "market research" |
| Highland Park | 56 | 66 | **+10** | One labeled-stale issue, not "several errors"; no G2 cap |
| Detroit | 69 | 65 | −4 | Internal price conflicts (within tolerance) |
| Belleville | 76 | 60 | −16 | Tax share 0.44 vs 1.94, P.O. Box ZIP, WPR source |
| River Rouge | 98 | 65 | −33 | Tax share 1.52 vs 2.43 (missed) |
| Trenton | 97 | 65 | −32 | Tax share 1.41 vs 2.00 (missed) |
| Grosse Pointe Woods | 82 | 78 | −4 | False "Census QuickFacts" attribution |
| Hamtramck | 89 | 65 | −24 | "sought-after, walkable enclave" (§6); 48211 omitted |
| Emmett | 78 | 65 | −13 | Tax share 0.31 vs 1.81 stands; the population deduction is refuted |
| Sterling Heights | 100 | 88 | −12 | 100 is impossible while the headline value is unsourced |
| Port Huron | 90 | 80 | −10 | P.O. Box ZIP 48061 |
| Ann Arbor | 82 | 65 | −17 | U-M jobs; Zillow headline; Wikipedia |
| Ypsilanti | 80 | 60 | −20 | EMU enrollment; Zillow headline; tax share 1.49 vs 1.86 |
| Manchester | 89 | 65 | −24 | ZIP-wide headline for 2% of the ZIP; tax share gap |
| Lansing | 94 | 86 | −8 | Contested "first public zoo"; stale label |
| East Lansing | 92 | 80 | −12 | Ingham-only population; two-county city with a one-county eyebrow |
| Grand Rapids | 94 | 86 | −8 | Wikipedia for the employer rank; stale label |
| Kentwood | 95 | 88 | −7 | Template minors |
| Marquette | 97 | 88 | −9 | Template minors ("local" 333 miles away) |
| Traverse City | 95 | 86 | −9 | Leelanau part not shown; stale label |
| Saline | 93 | 78 | −15 | Zillow headline; tax share 1.36 vs 1.78 |

24 of 30 pages differ by more than 5 points. The pattern is one-directional: **material errors are under-penalized, and "clean" pages are scored as if every figure were sourced and dated.** The only upward correction is Highland Park.

### 5.3 Unified city-set accuracy

Applying the §5.2 mapping to all 276 pages, using the verified issue lists (59 tax-share errors, PRE, Highland Park, EMU, U-M, Oxford, Detroit, three contradicted Washtenaw headlines, 14 fair-housing pages, ZIP and label issues), gives:
- group 1: mean 80.4 (25 pages in D)
- group 2: mean 81.2 (22 in D)
- group 3: mean 86.3 (5 in D)
- **city set: 82 (B)**

Every gated page stays at or above 60, so no G1 or G2 cap applies, **unless** Align cannot source the 79-page quote (U8).

---

## 6. Recommendation fixes

### 6.1 Sweep P0 meta fixes: re-sequenced
The 17 meta rows are downgraded to P1 and wait for D2. The CSV gives each page's Census figure, ready if D2 picks the Census median. Two exceptions:
- **Oak Park:** its $230,000 is unsupported anywhere on the page, so drop the price now. Exact interim text is in the CSV.
- **Sylvan Lake:** do not apply the fix. Fix the glance box instead.

### 6.2 Sample of 30 recommendation rows (8 sweep, 8 group 1, 8 group 2, 6 group 3; random, seed 1115)

| Result | Count | Rows |
|---|---|---|
| Exact, authoritative source, on-brand | 15 | Sweep: Tittabawassee title, Berkley hero, Ortonville meta*, Petersburg neighbor, Metamora title. G1: Wolverine Lake income, Hartland, Rose and Bingham Farms labels, Royal Oak ZIPs. G2: Monroe and Carleton population. G3: 3 × "Talk with a Michigan mortgage expert" |
| Acceptable with a note | 3 | G1 Fenton hub (reason corrected); G2 Onsted 2026 millage (hold under U4); G3 Battle Creek `[VERIFY]` (a genuine gap) |
| Not implementable as written | 12 | Sweep: Almont and Clinton population (`[VERIFY]` while V2025 is available), Allendale external links (an instruction, with no replacement source named). G1: Sylvan Lake and Auburn Hills heroes (`[VERIFY]`; Sylvan Lake contradicts G1's own §5). G2: Romulus millage (`current` is a description, not on-page text), Wyandotte and Lincoln Park WPR, Petersburg Wikipedia, Deerfield Data USA (instructions). G3: Pittsfield and Caledonia population (`[VERIFY]`) |

\* "Rated 5.0 on Google" (added to many sweep metas) is allowed by guide §7.7 only while it matches the live Google Business Profile. Tie it to the same monthly check (PM-09).

Compliance and brand in the sample: no banned words, rate language or exclamation points in any replacement. The sweep's hero rewrites ("We check the parcel, then compare your loan across multiple wholesale lenders") describe how Align works, so they need Align approval (brief §5). Sources inside the fact-checkers' own evidence that break guide §7.10: Wikipedia (G1 Flint; G3 East Lansing and Potter Park), The Eastern Echo (G3 EMU), bridgemi.com (G3 Lansing, carrying the wrong figure). All are replaced in the CSV.

### 6.3 What the CSV now makes exact
- 90 sweep population rows get Vintage 2025 figures; 7 mis-targeted rows are withdrawn.
- 32 group 3 population placeholders are filled, and Lansing is corrected.
- 21 group 2 World Population Review rows become exact replacements.
- 31 group 2 and 4 group 3 tax-share rows are re-graded to U1.
- 7 group 1 hero rows get Census values (pending D2).
- 14 fair-housing rewrites, the quote, disclaimer and "local" template rows, and the Memphis, Midland and multi-county eyebrow rows with placeholders resolved.

---

## 7. Hand-offs

- **Consistency team:** apply `corrections-city.csv` before merging the city fixes. Do U5, U8 (paraphrase) and U1 first: each is one template or generator change covering most pages.
- **Owner:** D2 (U2), with the auditor recommendation above; and the Samantha quote source for 79 pages (U8).
- **PM / counsel:** F7 scope for city pages (U9); the Polygon "30-year fixed ... $10,662 less" sentence on Lake Orion and Rochester Hills.
- **Network:** to close the remaining unverifiable items, allow scripted access to the Treasury Total Rates PDF, obp.umich.edu and emich.edu (EMU IRIM).
