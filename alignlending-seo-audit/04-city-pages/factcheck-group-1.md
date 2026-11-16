# City page fact-check, group 1: Oakland, Livingston, Lapeer and Genesee counties

Fact-checker #1 · crawl of 2026-11-15 · checked 2026-11-15
Scope: 95 city pages whose hero eyebrow names Oakland (53, plus Northville's "Oakland and Wayne counties"), Livingston (12), Lapeer (9) or Genesee (20) County, and the 4 county hubs (`/mortgage-michigan/oakland-county/`, `/livingston-county/`, `/lapeer-county/`, `/genesee-county/`). That is 99 pages. These are Align's home-market pages, since the office is in Waterford.
Companion file: `factcheck-group-1.csv`, with 3,367 claim rows (url, claim_type, on_page_text, verified_value, source_url, status, corrected_text_exact, priority).

---

## 1. Summary

**Headline: Accuracy & compliance score for the group is 90/100 (A, right on the line).** The page mean is 90.3 and the median is 94. 64 pages earn an A, 28 a B and 7 a C. By county: Livingston 92.2, Oakland 90.8, Lapeer 88.2, Genesee 87.6 and hubs 96.8.

**Error rate: 3.0%.** Of 2,893 claims that could be checked against a primary source, 74 are incorrect and 13 are outdated. 26 of the incorrect items are a P2 labeling error: an accurate Census number presented as "market research". Without those, the error rate is 2.1%. Another 474 claims could not be verified. Most of those are municipal millage line items, Align's own Uncapping Study percentages, or portal price figures.

The research behind these pages is unusually good. Every millage total sourced to Michigan Treasury matches the 2025 Total Rates table to four decimals: 776 values across all 99 pages, with no transcription errors. Of the Census dollar figures, 1,472 match ACS 2020-2024 exactly at the municipality, tract, block group or ZIP level. All 25 "2020 Census" population statements match the 2020 count exactly. All 76 first-year tax examples reproduce from the stated uncapping percentage and the Treasury millage. Every city income tax statement is correct.

The errors are not scattered typos. They cluster in a few **template fields and secondary sources**, so they can be fixed in bulk:

1. **"Property tax current owners pay: about X% of value" is wrong on 24 of 54 pages that show it (P0 on 15).** The figure appears in the hero and again in the stats block. On Montrose it reads 0.42% where the Census ratio is 2.33%; Brighton, Clio, Howell, Imlay City and Linden all show 0.5-0.64% against 1.2-1.9%. These figures understate a buyer's carrying cost by half or more on the pages where we argue that the tax bill matters most.
2. **The hero "Typical home value" is not one measure.** On 26 pages it is the rounded Census owner median (a 2020-2024 average of owners' estimates), yet it is labeled "from the market research on this page" and the Sources list says "Redfin market data". 18 pages use a Redfin sale median, 23 a Zillow index, and 28 something else or nothing stated. The "else" includes list prices and figures a year old. County hubs then rank communities by these mixed measures.
3. **The principal residence exemption deadline is given as "May 1" on Auburn Hills, Fenton and Holly.** That rule has not applied since 2012. The deadline is June 1 for the summer levy or November 1 for the winter levy.
4. **Secondary aggregators produce the outdated numbers.** World Population Review (linked on 19 pages), Data USA (20) and City-Data are behind most of the outdated population and income figures. Examples: Berkley "15,386 residents (2026 estimate)" against a Census figure of 15,145, and 2019-2023 incomes on six pages.
5. **P.O. Box ZIPs are listed as "Residential ZIP codes":** 48012 Birmingham, 48361 Lake Orion and 48068 Royal Oak. Flint has a "ZIP 48501" price card. Oxford's page also contradicts itself on where 48370 lies.

The fixes for items 1, 3 and 5 are exact replacement strings in the CSV. Item 2 needs a policy decision (section 5) before the copy can change.

---

## 2. Method and sources

**Step 1, extraction (all 99 pages).** Python pulled every checkable claim from `text/<slug>.txt`:
- four-decimal and two-decimal millage figures in sentences about mills or homesteads
- every dollar figure in a Census sentence
- population statements
- ZIP lists and ZIP land-share statements
- household income, income tax, exemption deadlines, loan limits and MSHDA terms
- hero and stats-block values: typical value, uncapping %, effective tax %, ZIPs
- worked tax examples

**Step 2, internal coherence (all 99 pages).** All of these passed on every page:
- The city name is the same in H1, title, hero card, the "What should you know before buying a home in X?" heading and the closing CTA.
- The hero card matches the stats block for typical value, uncapping %, effective tax % and ZIP list.
- The uncapping % is the same in the hero, the stats block, the tax section and the county hub table. The one exception is the City of Fenton: 25% on the Oakland hub and 55% on the Genesee hub and the Fenton page.
- The county named in loan-limit sentences matches the eyebrow county.
- Every worked example's arithmetic reproduces (76 of 76).

Coherence failures were found in four places: the hero typical value against the body text (Otter Lake, Flint), Oxford's 48370 statements, the Fenton uncapping figure, and the Genesee hub tagging Flint with "estate and luxury homes".

**Step 3, primary-source verification.** Bulk files were matched by script against every page in the group. That covers more than the required sample: all 20 Genesee pages, the 16 named Oakland pages, Howell, Brighton and Lapeer are all inside the 43-page "sample" flag in the scorecard. Some claims needed one-off checks; those went through targeted searches of Treasury, MSHDA, FHFA and HUD pages.

| Claim type | Primary source used |
|---|---|
| Millage (homestead, non-homestead, by school district and village) | Michigan Treasury, [2025 Total Property Tax Rates](https://www.michigan.gov/taxes/-/media/Project/Websites/taxes/4029/Total-Rates-Reports/2025-Total-Rates.pdf) (parsed, 3,578 rows), plus the [2024 table](https://www.michigan.gov/taxes/-/media/Project/Websites/taxes/4029/Total-Rates-Reports/2024-Total-Rates.pdf) to detect stale values |
| Owner values, quartiles, tenure, units, year built, real estate taxes, income | Census ACS 2020-2024 5-year table-based summary files (B25077, B25076, B25078, B25003, B25001, B25035, B25103, B19013, B25024) at place, county subdivision, tract, block group and ZCTA level; [ACS 2019-2023](https://www2.census.gov/programs-surveys/acs/summary_file/2023/table-based-SF/data/5YRData/) to identify outdated figures; ACS 2024 1-year for cities over 65,000 |
| 2020 population | [2020 Census P.L. 94-171, Michigan](https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Michigan/mi2020.pl.zip) |
| Current population | Census [Vintage 2025 sub-county estimates](https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_26.csv) |
| ZIP to municipality | Census 2020 ZCTA relationship files ([county subdivision](https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_cousub20_natl.txt), [place](https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_place20_natl.txt)) |
| City income tax | Treasury, [Which cities impose an income tax?](https://www.michigan.gov/taxes/questions/iit/accordion/general/what-cities-impose-an-income-tax) (24 cities) and [Flint administration change](https://www.michigan.gov/taxes/citytax/flint) |
| Exemption deadline | Treasury, [PRE claim requirement](https://www.michigan.gov/taxes/property/principal/principal-residence-exemption-pre-guidelines-and-faqs/claim-requirement) |
| Loan limits | [FHFA 2026 CLL](https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026) ($832,750); [HUD ML 2025-23](https://www.hud.gov/sites/dfiles/hudclips/documents/2025-23hsgml.pdf) ($541,287 floor) |
| MSHDA | [MI Home Loan](https://www.michigan.gov/mshda/pathway-to-housing/mi-home-loan) ($566,355 price limit after June 1, 2026; MI 10K up to $10,000 statewide) |

**Network note.** At the start, the audit environment blocked census.gov and michigan.gov. With the owner's approval, `api.census.gov`, `www2.census.gov`, `www.census.gov` and `www.michigan.gov` were added to the environment allowlist. The Census API now requires a key, so bulk files were used instead. County equalization sites and municipal sites remain unreachable. Claims sourced only to a township millage sheet, budget, calendar or ordinance are therefore marked **unverifiable** rather than guessed: 248 municipal millage line items, local event dates and phone numbers. They are not counted as errors.

**Step 4, classification.** Each claim is classified as correct, outdated (newer primary data exists), incorrect, or unverifiable (with the reason). The CSV gives exact replacement text for every incorrect or outdated claim, plus the source URL.

---

## 3. Findings ranked by impact

### P0: fix now (18 items)

**P0-1. Effective property tax figure is wrong in the hero and stats block (15 P0, 9 P1).**
The label promises "Property tax current owners pay, as a share of value". The Census measures exactly that: median real estate taxes (B25103) divided by median owner value (B25077). On 28 pages the page figure matches that ratio within 0.25 points. On Bloomfield Township, Ferndale, Independence, Novi, Oakland Township and Orion it matches exactly, which shows the intended method. On the 24 pages below, it does not.

The 15 understated pages also contradict their own figures. For example, Howell's 0.59% at the city's 37.87 homestead mills would require taxable value to be about 16% of market value. That implies taxable value rising roughly 220% after a sale, against the page's own 44% uncapping figure. Replace the figure in **both** places: the hero (`Property tax current owners pay: about X% of value`) and the stats block (`X% Property tax current owners pay, as a share of value`).

| Page | On page | Census check (ACS 2020-2024) | Exact replacement | Priority |
|---|---|---|---|---|
| `/mortgage-lender-brighton-mi/` | about 0.53% of value | 1.33% ($4,515 tax / $339,000 value) | Property tax current owners pay: about 1.3% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-burton-mi/` | about 1.19% of value | 1.61% ($2,281 / $141,600) | Property tax current owners pay: about 1.6% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-clio-mi/` | about 0.53% of value | 1.88% ($2,596 / $138,200) | Property tax current owners pay: about 1.9% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-columbiaville-mi/` | about 0.95% of value | 1.30% ($1,847 / $142,600) | Property tax current owners pay: about 1.3% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-flushing-mi/` | about 0.84% of value | 1.55% ($3,168 / $204,500) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-fowlerville-mi/` | about 0.85% of value | 1.31% ($2,514 / $192,000) | Property tax current owners pay: about 1.3% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-goodrich-mi/` | about 0.88% of value | 1.51% ($3,728 / $246,400) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-grand-blanc-mi/` | about 0.95% of value | 1.61% ($3,782 / $235,500) | Property tax current owners pay: about 1.6% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-hazel-park-mi/` | about 2.10% of value | 1.56% ($2,468 / $158,600) | Property tax current owners pay: about 1.6% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-howell-mi/` | about 0.59% of value | 1.22% ($3,231 / $265,600) | Property tax current owners pay: about 1.2% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-imlay-city-mi/` | about 0.60% of value | 1.46% ($2,186 / $150,000) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-lake-orion-mi/` | about 0.76% of value | 1.45% ($5,465 / $376,600) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-linden-mi/` | about 0.64% of value | 1.37% ($3,280 / $239,700) | Property tax current owners pay: about 1.4% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-madison-heights-mi/` | about 1.18% of value | 1.48% ($2,941 / $199,100) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-milford-mi/` | about 0.93% of value | 1.45% ($5,276 / $363,700) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-montrose-mi/` | about 0.42% of value | 2.33% ($2,641 / $113,300) | Property tax current owners pay: about 2.3% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-northville-mi/` | about 0.93% of value | 1.40% ($6,517 / $465,400) | Property tax current owners pay: about 1.4% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-orchard-lake-village-mi/` | about 0.80% of value | 1.20% ($8,853 / $737,000) | Property tax current owners pay: about 1.2% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-otisville-mi/` | about 0.88% of value | 1.84% ($2,060 / $112,000) | Property tax current owners pay: about 1.8% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-otter-lake-mi/` | about 0.95% of value | 2.15% ($2,183 / $101,400) | Property tax current owners pay: about 2.2% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-rochester-hills-mi/` | about 0.70% of value | 1.11% ($4,540 / $409,800) | Property tax current owners pay: about 1.1% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-swartz-creek-mi/` | about 0.72% of value | 1.55% ($2,693 / $174,200) | Property tax current owners pay: about 1.5% of value (Census, 2020 to 2024) | P0 |
| `/mortgage-lender-west-bloomfield-mi/` | about 0.86% of value | 1.28% ($5,467 / $426,200) | Property tax current owners pay: about 1.3% of value (Census, 2020 to 2024) | P1 |
| `/mortgage-lender-wolverine-lake-mi/` | about 0.71% of value | 1.34% ($3,855 / $288,000) | Property tax current owners pay: about 1.3% of value (Census, 2020 to 2024) | P0 |

The stats-block replacement follows the same pattern, for example `2.3% Property tax current owners pay, as a share of value (Census, 2020 to 2024). A buyer's bill can reset higher the year after a sale`.

Bloomfield Hills and Birmingham are marked unverifiable, not wrong: their ACS median tax is top-coded at $10,001+. The other 41 city pages show no effective-tax figure.

**P0-2. Principal residence exemption deadline: "May 1" (3 pages).** Treasury's rule under MCL 211.7cc: an affidavit filed by June 1 counts from the summer levy, and one filed June 2 to November 1 counts from the winter levy.

| Page | On page | Exact replacement |
|---|---|---|
| `/mortgage-lender-auburn-hills-mi/` | "File the Principal Residence Exemption affidavit with the Assessing Office by May 1, …" | File the Principal Residence Exemption affidavit (Form 2368) with the Assessing Office by June 1 for the summer bill or by November 1 for the winter bill, … |
| `/mortgage-lender-fenton-mi/` (2 sentences) | "…the owner must occupy the home as a principal residence on or before May 1." | The affidavit (Form 2368) goes to the City Assessor, and it counts for the summer bill if filed by June 1 or for the winter bill if filed by November 1. |
| `/mortgage-lender-holly-mi/` (2 sentences) | "…the exemption depends on owning and occupying the home as of May 1." | The owner files the affidavit (Form 2368) with the township assessor by June 1 for the summer levy or by November 1 for the winter levy. |

The Fenton page attributes the May 1 date to the city's assessor page. If that city page still says May 1, cite Treasury instead.

### P1: this month (33 items)

**P1-1. Hero "Typical home value": wrong measure or stale on 8 pages.**
- **Otter Lake.** The hero shows $300,000, but the body says values "cluster in the low-to-mid $200,000s". The $300,000 is a small-sample Redfin figure. Replace with `Typical home value near $250,000` and keep the body's caveat.
- **Sylvan Lake, Columbiaville, Lathrup Village.** The hero is a median list price: Zillow April 2026, spring 2026, and Redfin ZIP 48076 shared with Southfield respectively. Replace it with the site's standard measure.
- **Imlay City, Auburn Hills, Goodrich, Wixom.** The figure is 12 or more months old: Redfin November 2025, "late 2025", or no year given.
- **Flint.** The hero uses Zillow's $49,000 index, the lowest of the three figures on the page. The others are a Redfin July-September 2026 median of $66,000 and a Census owner median of $53,500. The Genesee hub repeats $49,000 as the county's floor. Suggested: `Typical home value near $54,000` (Census) with "recent sales near $66,000" in the body. Section 5 covers the policy choice.

**P1-2. Outdated or unsupported population figures. All come from World Population Review or other secondary sources.**

| Page | On page | Primary figure | Exact replacement |
|---|---|---|---|
| Berkley | "about 15,386 residents (2026 estimate)" | Census 2025 est. 15,145; 2020 Census 15,194 | The city of about 15,100 residents (Census Bureau 2025 estimate) |
| South Lyon | "roughly 12,465 residents" | 2025 est. 12,107; 2020 Census 11,746 | Home to about 12,100 residents (Census Bureau 2025 estimate) |
| Independence Twp | "about 37,600 residents in the Census Bureau's 2024 estimate" | 2024 est. 37,217; 2025 est. 37,725 | home to about 37,700 residents in the Census Bureau's 2025 estimate |

P2 items: Brighton "7,500 to 8,020" (use about 7,900), Novi 67,700 (67,300), Farmington Hills 83,150 (83,300), Wixom 17,348 (17,300), Farmington 11,540 (11,400), Swartz Creek 5,812 (5,800), and Auburn Hills's "26,280 by 2026" projection (25,900). Exact strings are in the CSV.

**P1-3. Outdated household income (2019-2023 vintage or City-Data).**

| Page | On page | Primary figure |
|---|---|---|
| Berkley | $97,000-$113,000 | $116,239 |
| Lathrup Village | $99,286 | $109,893 |
| Metamora | $102,000 | Township $108,565; village $85,750 |
| Oak Park | $66,000 | $71,510 |
| Wolverine Lake | $88,000 | $92,247 |
| Orchard Lake Village | tops $212,000 | $206,667 |
| Otter Lake | $39,000 (City-Data) | $42,969 |

All primary figures are ACS 2020-2024 (B19013). Replacement sentences are in the CSV.

**P1-4. P.O. Box ZIPs listed as "Residential ZIP codes" (hero and stats block).** Census draws no ZIP area for a P.O. Box ZIP, because it has no street addresses.

| Page | Replacement |
|---|---|
| Birmingham | `ZIP codes 48009 (P.O. boxes also use 48012)` |
| Lake Orion | `ZIP codes 48360, 48362 (P.O. boxes also use 48361)`. The page's own card already says 48361 "has no figures of its own". |
| Royal Oak | `ZIP codes 48067, 48073 (P.O. boxes also use 48068)` |

In the stats block, change the count ("3 Residential ZIP codes" becomes "2"). The Flint "ZIP 48501, near $49,000" card should be retitled `Citywide, near $49,000` (P2).

**P1-5. Oxford: 48370 is placed in the wrong township.** The intro says "48370 is mostly unincorporated Oxford Township." The Census ZCTA file puts 97% of 48370 in Addison Township and 3% in Oakland Township, while all of Oxford Township lies in 48371. The page's own tax section says the same. Replace with: `Unlike the compact Village of Oxford (population 3,492 in the 2020 Census), the township around it is large lots, hobby farms and lakefront estates, and 48370 Oxford mailing addresses fall mostly in Addison Township.` Relabel the hero ZIPs as `ZIP codes 48371 (Oxford Township and village) and 48370 (Oxford mailing addresses in Addison Township)`.

**P1-6. Flint: "McLaren Health Care is headquartered here."** McLaren's headquarters is One McLaren Parkway, Grand Blanc. Replace with: `McLaren Flint and Hurley Medical Center are major employers here, and McLaren Health Care is headquartered nearby in Grand Blanc,`.

**P1-7. Claims that break the editorial policy and cannot be verified.**
- Portal forecasts: Auburn Hills "Zillow projects only modest about 1.5% appreciation over the next year" and Goodrich "with Zillow projecting a further about 2.4%". Delete both.
- Unsupported volume claims: Franklin "Align Lending works these files every week" and Swartz Creek "We finance buyers across this ZIP every week". Mark both `[VERIFY: Align to confirm or delete]`.

### P2: backlog (selected; all are in the CSV)

- **Census number labeled as "market research" (26 pages).** Addison, Bingham Farms, Bloomfield, Brandon, Brighton, Davison, Fenton, Flint, Genoa, Grand Blanc, Green Oak, Hamburg, Hartland, Independence, Lyon, Marion, Mundy, Oakland, Oceola, Orion, Rose, Springfield, Tyrone and Vienna townships, plus Lake Angelus and Mount Morris. On these pages the hero equals the rounded ACS owner median, but it is captioned "from the market research on this page" and the Sources list cites Redfin. Use the exact strings in the CSV, for example `Typical home value near $417,000 (Census owner median, 2020 to 2024)`.
- **Unlabeled Treasury special-assessment column.** On 11 pages the "Treasury" figures are the columns that include ad valorem special assessments. Those pages are Waterford, Commerce Township, Sylvan Lake, Brandon, Ortonville, Hazel Park, Lathrup Village, Rose, Swartz Creek, Wolverine Lake and Holly. The figures are correct, but Commerce Township and Sylvan Lake never say so. Commerce's 33.2203 Huron Valley figure includes 5.70 mills of special assessments; the base total is 27.5203. Add a one-line label, for example on Waterford: `…counting the township's voted police and fire special assessments`.
- **City of Fenton uncapping.** The Oakland hub table says +25%; the Genesee hub and the Fenton page say +55%. Fenton is one assessing unit, so use +55% everywhere.
- **Flint "birthplace of … the United Auto Workers".** The UAW was founded in Detroit in 1935. Use `the birthplace of General Motors and the site of the 1936-37 Sit-Down Strike that built the United Auto Workers`.
- **Pontiac UWM sentence.** The page says UWM "moved some 2,300 employees downtown in 2018". The campus is on South Boulevard, not downtown, and about 2,700 employees moved. It also names a wholesale lender on a broker page. Suggested: `a large mortgage company's headquarters campus on South Boulevard, opened in 2018,`.
- **Clarkston "incorporated Village of Clarkston".** Use `City of the Village of Clarkston`. The rest of the page already does.
- **MSHDA wording on Flint and Pontiac.** "First-time buyers" understates eligibility: MSHDA also serves repeat buyers in targeted areas. `[VERIFY: targeted-area status]`.
- **Hub template tags.** The Genesee hub lists Flint ($49,000) under "estate and luxury homes". The Oakland hub range ($146,000 Pontiac to $1,052,000 Lake Angelus) compares a sale median with an ACS owner median.
- **Secondary-source links on 32 pages** (World Population Review, Data USA, City-Data). Replace them with data.census.gov or QuickFacts links for the same figure.
- **Flint "44,226 homes".** This is ACS 2024 **1-year** data (verified), while the rest of the page uses the 5-year series (43,028 units). Label it `2024 one-year estimates`.

---

## 4. Error patterns

| Pattern | Pages | Root cause | Fix at the source |
|---|---|---|---|
| Effective-tax field off by 0.3-1.9 points | 24 of 54 that show it | Field filled from more than one method. It matches the ACS ratio exactly on 6 pages and is unrelated on 15. | Compute it in one place as B25103 ÷ B25077 for the page's own place or county subdivision. Suppress it where the tax median is top-coded. |
| "Typical home value" mixes five measures | 95 city pages, 4 hubs | ACS owner median (26), Redfin sale median (18), Zillow index (23), list price or other (28). All are labeled "market research". | One standard measure, one period, a stated source and month (section 5). |
| PRE deadline copied from outdated municipal pages | 3 | City pages still carry the pre-2012 "May 1" rule. | Put state rules in shared copy sourced to Treasury, not to municipal pages. |
| Secondary aggregators produce outdated figures | 32 pages link them; 10 figures wrong | World Population Review projections, Data USA and Census Reporter on older vintages, City-Data. | Use only Census (PEP and ACS) for population and income. Ban aggregator links in the brief. |
| P.O. Box ZIPs treated as residential | 3 (+ Flint card) | The ZIP list was built from USPS city names, not ZCTAs. | Build "Residential ZIP codes" from the ZCTA relationship file. List P.O. Box ZIPs separately. |
| Mixed ACS products and vintages | Flint (1-year), 6 income figures (2019-2023) | Pages were researched at different times. | Freeze a data vintage per refresh cycle and stamp it on the page. |
| Proprietary Uncapping Study % with no public method | 97 pages | It is the most prominent hero number and cannot be checked externally. It is consistent everywhere except Fenton. | Publish a methodology page (unit, years, median vs mean, STC source) and link it from the stats block. |

**What is consistently right** (no action needed):
- **Treasury millage:** 776 values, including neighbor units in Tuscola, Saginaw, Washtenaw, St. Clair and Macomb.
- **School-district counts** per unit match Treasury rows.
- **ACS figures:** 1,472, including block-group margins and quartiles.
- **Population:** 2020 Census counts, and township ACS figures in the "about N residents … (N in the 2020 census)" sentences.
- **ZIP land shares:** checked on Flint, Flushing, Linden, Davison, Fenton, Clio, Mount Morris, Burton and Waterford.
- **Income tax:** Flint, Pontiac and Lapeer at 1% resident and 0.5% nonresident are all on Treasury's 24-city list. Treasury takes over Flint administration on January 1, 2027. No other page claims a city income tax, and Auburn Hills correctly says it has none.
- **Program terms:** 2026 conforming $832,750 and FHA floor $541,287; MSHDA $566,355 and MI 10K $10,000.
- **Legal descriptions:** taxable value resets to SEV (half of the assessor's true cash value) after a transfer; the 5%-or-inflation cap under MCL 211.27a; summer and winter due dates (September 14 and February 14); charter-township status of Brighton and Genoa, where the Census names lag.
- **Compliance:** company NMLS, individual NMLS and Equal Housing appear on every page. No rate or APR language. The only exclamation points are inside quoted Google reviews.

---

## 5. Where the price figures come from, and whether that holds up

Each page says its figures are "market research for orientation, not a quote". The Sources list names "Redfin (and/or Zillow) market data, named in the text and not linked". That disclosure is honest, but the hero figure does not consistently follow it:

| Hero measure | Pages | Defensible? |
|---|---|---|
| Census ACS owner median, rounded (e.g., Addison $417,000 = ACS $416,700; Brandon $331,000; Davison Twp $232,000) | 26, mostly township template pages | Primary and verifiable, but it is a 2020-2024 average of **owners' estimates**, not market research. It runs 10-25% below current sales (Brandon's 48462 ZIP sold at $404,881 against a $331,000 hero). It is also mislabeled. |
| Redfin median sale price (city or ZIP, one month or three) | 18 | Portal data. Acceptable as named, unlinked market context if the month and geography are stated. Periods range from November 2025 to October 2026. |
| Zillow home value index or "average value" | 23 | Portal model output, not a transaction measure. Defensible only if it is labeled as an index. It is not comparable with the rows above. |
| List price (Zillow, Movoto, Redfin ZIP), RealtyTrac, mixed ranges, or no stated basis | 28 | **Not defensible** as a "home value". List prices and small-sample ZIP figures should not headline a page. |

**Recommendation (Align to decide).**
1. Headline one primary, verifiable number on every page: `Census owner median value: $X (2020 to 2024)`.
2. Show one consistently sourced recent-sales number beside it: `Recent sales: about $Y (Redfin median sale price, [city/ZIP], three months ending [month year])`.
3. Retire Zillow indexes and list prices as headline figures.
4. Rebuild the hub ranking tables on the Census number only, so communities are compared like for like.

This keeps portal data named and unlinked, as the brand rules require, without presenting it as the page's value.

---

## 6. Recommended data-refresh process

**Owner:** content operations, with Samantha's sign-off on wording. **Tooling:** the validation scripts used for this audit, kept in the repo (parsers for the Treasury PDF, ACS summary files, PL files and ZCTA files, plus the claim matchers).

| Data | Primary source | Release timing | Action |
|---|---|---|---|
| Millage (homestead, non-homestead, SA columns) | Treasury Total Rates PDF | Each spring, for the prior levy year (2025 table now current) | Re-parse, diff against the page values, update all rows, and change "2025" to the new year everywhere in one pass. Keep the SA-column label. |
| Owner value, tenure, units, taxes, income | ACS 5-year (table-based summary file) | Each December (2021-2025 release due December 2026) | Regenerate every Census figure and the effective-tax field from one script. Stamp `Census, 2021 to 2025`. Never mix in 1-year data without a label. |
| Population | Census PEP sub-county estimates | Each May | Replace "about N residents" with the new vintage. Keep the 2020 count where it is quoted. |
| Loan limits | FHFA and HUD | Late November / December | Update $832,750 and $541,287 site-wide on January 1. |
| MSHDA limits | MSHDA income and sales-price PDF | When MSHDA republishes (last 6/1/2026) | Update $566,355 and the MI 10K terms. Re-check targeted areas (Flint, Pontiac). |
| City income tax list | Treasury "Which cities impose an income tax?" | Check each January | Confirm Flint, Pontiac and Lapeer rates. Note Treasury administration of Flint from 2027. |
| PRE, uncapping and bill dates | Treasury PRE guidelines, MCL 211.27a, MCL 211.44/44a | Annual check | Keep as shared copy blocks, not per-page text. |
| Market price figure | One provider, one measure, one window | Quarterly | Update all pages in the same week, and print the window on the page. |
| Uncapping Study % | Align (STC data) | Annual | Publish the methodology. Keep hubs and pages generated from one table, which fixes the Fenton inconsistency. |

**Automated pre-publish checks.** Each of these failed at least once in this audit:
1. Hero values equal stats-block values, and the uncapping % equals the hub table.
2. The effective-tax field equals B25103 ÷ B25077 (±0.1). Fail if the median tax is top-coded.
3. Every "Residential ZIP code" exists as a ZCTA that intersects the municipality.
4. Every four-decimal millage value exists in the current Treasury table for the unit or a named neighbor.
5. Every population and income figure matches the current PEP or ACS vintage exactly or within rounding.
6. Block any link to worldpopulationreview, datausa, city-data, zillow, redfin, realtor.com, movoto or realtytrac.
7. Flag any date string more than 9 months older than the publish date in a market-figure sentence.
8. Flag "May 1" near "exemption", any "projects … appreciation" phrase, and "every week" business claims.

---

## 7. Accuracy scorecard (rubric: Accuracy & compliance)

**How the score is computed.** Each page starts at 100. Deductions:

| Item | Deduction |
|---|---|
| P0 incorrect or outdated | −12 |
| P1 | −6 |
| P2 | −2 |
| Hero value with no stated source or month | −3 |
| Hero value from portal data, source named | −1 |
| Links to secondary aggregators | −2 |
| Portal forecast or unverifiable business claim | −4 |
| Proprietary uncapping % without a public method (every page that carries it) | −3 |

The floor is 40. Grades: A 90+, B 80-89, C 70-79, D 60-69, F under 60. "Sample" marks the pages the brief required: all Genesee pages, the named Oakland pages, Howell, Brighton, Lapeer and the hubs. Every page went through the automated primary-source checks.

| Page | County | Sample | Claims checked | Correct | Incorrect | Outdated | Unverifiable | Score | Grade | Rationale (evidence) |
|---|---|---|---|---|---|---|---|---|---|---|
| `/mortgage-lender-davison-mi/` | Genesee | yes | 34 | 22 | 0 | 0 | 12 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-davison-township-mi/` | Genesee | yes | 27 | 24 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-fenton-township-mi/` | Genesee | yes | 33 | 25 | 1 | 0 | 7 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-flint-township-mi/` | Genesee | yes | 32 | 29 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-grand-blanc-township-mi/` | Genesee | yes | 36 | 30 | 1 | 0 | 5 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-mount-morris-mi/` | Genesee | yes | 34 | 26 | 1 | 0 | 7 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-mundy-township-mi/` | Genesee | yes | 23 | 21 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-vienna-township-mi/` | Genesee | yes | 37 | 35 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-gaines-mi/` | Genesee | yes | 29 | 26 | 0 | 0 | 3 | 92 | A | Main issues: hero value source not disclosed; links to secondary aggregators. |
| `/mortgage-lender-burton-mi/` | Genesee | yes | 26 | 22 | 1 | 0 | 3 | 86 | B | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value source not disclosed. |
| `/mortgage-lender-flint-mi/` | Genesee | yes | 48 | 42 | 4 | 0 | 2 | 84 | B | Main issues: incorrect employer/HQ (P1); incorrect history (P2). |
| `/mortgage-lender-flushing-mi/` | Genesee | yes | 50 | 45 | 1 | 0 | 4 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-grand-blanc-mi/` | Genesee | yes | 30 | 24 | 1 | 0 | 5 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-linden-mi/` | Genesee | yes | 39 | 33 | 1 | 0 | 5 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-montrose-mi/` | Genesee | yes | 44 | 33 | 1 | 0 | 10 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-clio-mi/` | Genesee | yes | 28 | 22 | 1 | 0 | 5 | 82 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value source not disclosed. |
| `/mortgage-lender-fenton-mi/` | Genesee | yes | 47 | 40 | 0 | 1 | 6 | 82 | B | Main issues: outdated PRE (homestead) filing deadline (P0); links to secondary aggregators. |
| `/mortgage-lender-otisville-mi/` | Genesee | yes | 33 | 29 | 1 | 0 | 3 | 82 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); links to secondary aggregators. |
| `/mortgage-lender-swartz-creek-mi/` | Genesee | yes | 26 | 16 | 1 | 0 | 9 | 76 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); business claim. |
| `/mortgage-lender-goodrich-mi/` | Genesee | yes | 38 | 32 | 2 | 1 | 3 | 71 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); outdated typical home value (hero) (P1). |
| `/mortgage-lender-beverly-hills-mi/` | Oakland |  | 29 | 26 | 0 | 0 | 3 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-bloomfield-hills-mi/` | Oakland | yes | 31 | 26 | 0 | 0 | 5 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-clawson-mi/` | Oakland |  | 52 | 48 | 0 | 0 | 4 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-ferndale-mi/` | Oakland |  | 73 | 70 | 0 | 0 | 3 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-keego-harbor-mi/` | Oakland |  | 14 | 11 | 0 | 0 | 3 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-novi-mi/` | Oakland | yes | 33 | 21 | 0 | 0 | 12 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-troy-mi/` | Oakland | yes | 55 | 51 | 0 | 0 | 4 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-walled-lake-mi/` | Oakland |  | 35 | 31 | 0 | 0 | 4 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-waterford-mi/` | Oakland | yes | 44 | 42 | 0 | 0 | 2 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-white-lake-mi/` | Oakland | yes | 57 | 45 | 0 | 0 | 12 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-addison-township-mi/` | Oakland |  | 35 | 33 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-bloomfield-township-mi/` | Oakland |  | 29 | 26 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-brandon-township-mi/` | Oakland |  | 25 | 21 | 1 | 0 | 3 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-lake-angelus-mi/` | Oakland |  | 13 | 10 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-lyon-township-mi/` | Oakland |  | 29 | 26 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-oakland-township-mi/` | Oakland |  | 26 | 23 | 1 | 0 | 2 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-orion-township-mi/` | Oakland |  | 32 | 30 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-rose-township-mi/` | Oakland |  | 26 | 24 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-springfield-township-mi/` | Oakland |  | 29 | 24 | 1 | 0 | 4 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-commerce-township-mi/` | Oakland |  | 40 | 38 | 0 | 0 | 2 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-farmington-mi/` | Oakland |  | 51 | 46 | 0 | 0 | 5 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-highland-mi/` | Oakland | yes | 25 | 20 | 0 | 0 | 5 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-huntington-woods-mi/` | Oakland |  | 29 | 26 | 0 | 0 | 3 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-in-farmington-hills/` | Oakland | yes | 33 | 28 | 0 | 0 | 5 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-leonard-mi/` | Oakland |  | 38 | 35 | 0 | 0 | 3 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-ortonville-mi/` | Oakland |  | 21 | 16 | 0 | 0 | 5 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-pleasant-ridge-mi/` | Oakland |  | 34 | 30 | 0 | 0 | 4 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-rochester-mi/` | Oakland |  | 21 | 15 | 0 | 0 | 6 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-southfield-mi/` | Oakland | yes | 51 | 47 | 0 | 0 | 4 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-bingham-farms-mi/` | Oakland |  | 16 | 12 | 1 | 0 | 3 | 93 | A | Main issues: links to secondary aggregators; hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-clarkston-mi/` | Oakland | yes | 41 | 33 | 1 | 0 | 7 | 92 | A | Main issues: hero value source not disclosed; incorrect municipality name (P2). |
| `/mortgage-lender-birmingham-mi/` | Oakland |  | 48 | 27 | 1 | 0 | 20 | 90 | A | Main issues: incorrect ZIP codes (hero and stats block) (P1); hero value from portal data. |
| `/mortgage-lender-franklin-mi/` | Oakland |  | 32 | 26 | 0 | 0 | 6 | 90 | A | Main issues: business claim; links to secondary aggregators. |
| `/mortgage-lender-hazel-park-mi/` | Oakland |  | 39 | 35 | 1 | 0 | 3 | 90 | A | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value from portal data. |
| `/mortgage-lender-pontiac-mi/` | Oakland | yes | 36 | 30 | 2 | 0 | 4 | 90 | A | Main issues: hero value source not disclosed; incorrect employer (P2). |
| `/mortgage-lender-rochester-hills-mi/` | Oakland | yes | 29 | 20 | 1 | 0 | 8 | 90 | A | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value from portal data. |
| `/mortgage-lender-royal-oak-mi/` | Oakland | yes | 41 | 38 | 1 | 0 | 2 | 90 | A | Main issues: incorrect ZIP codes (hero and stats block) (P1); hero value from portal data. |
| `/mortgage-lender-independence-township-mi/` | Oakland | yes | 29 | 24 | 2 | 0 | 3 | 89 | B | Main issues: incorrect population (P1); hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-sylvan-lake-mi/` | Oakland |  | 29 | 19 | 1 | 0 | 9 | 89 | B | Main issues: incorrect typical home value (hero) (P1); links to secondary aggregators. |
| `/mortgage-lender-wixom-mi/` | Oakland | yes | 33 | 28 | 0 | 1 | 4 | 89 | B | Main issues: outdated typical home value (hero) (P1); links to secondary aggregators. |
| `/mortgage-lender-madison-heights-mi/` | Oakland |  | 33 | 27 | 1 | 0 | 5 | 88 | B | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value source not disclosed. |
| `/mortgage-lender-oak-park-mi/` | Oakland |  | 45 | 40 | 0 | 1 | 4 | 88 | B | Main issues: outdated median household income (P1); links to secondary aggregators. |
| `/mortgage-lender-south-lyon-mi/` | Oakland |  | 46 | 39 | 1 | 0 | 6 | 88 | B | Main issues: incorrect population (P1); links to secondary aggregators. |
| `/mortgage-lender-west-bloomfield-mi/` | Oakland | yes | 54 | 50 | 1 | 0 | 3 | 88 | B | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value source not disclosed. |
| `/mortgage-lender-northville-mi/` | Oakland/Wayne |  | 21 | 16 | 1 | 0 | 4 | 86 | B | Main issues: incorrect effective property tax rate (hero + stats) (P1); hero value source not disclosed. |
| `/mortgage-lender-lathrup-village-mi/` | Oakland |  | 33 | 30 | 1 | 1 | 1 | 85 | B | Main issues: outdated median household income (P1); incorrect typical home value (hero) (P1). |
| `/mortgage-lender-milford-mi/` | Oakland |  | 30 | 26 | 1 | 0 | 3 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-berkley-mi/` | Oakland |  | 40 | 33 | 0 | 2 | 5 | 82 | B | Main issues: outdated population (P1); outdated median household income (P1). |
| `/mortgage-lender-holly-mi/` | Oakland |  | 49 | 36 | 0 | 1 | 12 | 82 | B | Main issues: outdated PRE (homestead) filing deadline (P0); links to secondary aggregators. |
| `/mortgage-lender-orchard-lake-village-mi/` | Oakland |  | 20 | 15 | 1 | 1 | 3 | 82 | B | Main issues: outdated median household income (P1); incorrect effective property tax rate (hero + stats) (P1). |
| `/mortgage-lender-oxford-mi/` | Oakland | yes | 53 | 46 | 2 | 0 | 5 | 80 | B | Main issues: incorrect ZIP geography (P1); incorrect ZIP codes (hero and stats block) (P1). |
| `/mortgage-lender-lake-orion-mi/` | Oakland |  | 21 | 17 | 2 | 0 | 2 | 76 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); incorrect ZIP codes (hero and stats block) (P1). |
| `/mortgage-lender-wolverine-lake-mi/` | Oakland |  | 20 | 13 | 1 | 1 | 5 | 76 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); outdated median household income (P1). |
| `/mortgage-lender-auburn-hills-mi/` | Oakland |  | 29 | 19 | 1 | 1 | 8 | 73 | C | Main issues: incorrect PRE (homestead) filing deadline (P0); outdated typical home value (hero) (P1). |
| `/mortgage-lender-brighton-township-mi/` | Livingston |  | 29 | 24 | 1 | 0 | 4 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-genoa-township-mi/` | Livingston |  | 34 | 32 | 1 | 0 | 1 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-green-oak-township-mi/` | Livingston |  | 35 | 28 | 1 | 0 | 6 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-hamburg-township-mi/` | Livingston |  | 34 | 28 | 1 | 0 | 5 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-hartland-township-mi/` | Livingston |  | 29 | 22 | 1 | 0 | 6 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-marion-township-mi/` | Livingston |  | 27 | 21 | 1 | 0 | 5 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-oceola-township-mi/` | Livingston |  | 35 | 25 | 1 | 0 | 9 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-tyrone-township-mi/` | Livingston |  | 23 | 19 | 1 | 0 | 3 | 95 | A | Main issues: hero value is the Census owner median labeled as market research (P2). |
| `/mortgage-lender-pinckney-mi/` | Livingston |  | 54 | 43 | 0 | 0 | 11 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-fowlerville-mi/` | Livingston |  | 47 | 35 | 1 | 0 | 11 | 88 | B | Main issues: incorrect effective property tax rate (hero + stats) (P1); links to secondary aggregators. |
| `/mortgage-lender-howell-mi/` | Livingston | yes | 40 | 33 | 1 | 0 | 6 | 84 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); hero value from portal data. |
| `/mortgage-lender-brighton-mi/` | Livingston | yes | 41 | 34 | 2 | 0 | 5 | 80 | B | Main issues: incorrect effective property tax rate (hero + stats) (P0); links to secondary aggregators. |
| `/mortgage-lender-dryden-mi/` | Lapeer |  | 36 | 29 | 0 | 0 | 7 | 96 | A | Main issues: hero value from portal data. |
| `/mortgage-lender-almont-mi/` | Lapeer |  | 40 | 31 | 0 | 0 | 9 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-clifford-mi/` | Lapeer |  | 19 | 16 | 0 | 0 | 3 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-lapeer-mi/` | Lapeer | yes | 57 | 42 | 0 | 0 | 15 | 94 | A | Main issues: links to secondary aggregators; hero value from portal data. |
| `/mortgage-lender-north-branch-mi/` | Lapeer |  | 41 | 39 | 0 | 0 | 2 | 94 | A | Main issues: hero value source not disclosed. |
| `/mortgage-lender-metamora-mi/` | Lapeer |  | 53 | 44 | 0 | 1 | 8 | 86 | B | Main issues: outdated median household income (P1); hero value source not disclosed. |
| `/mortgage-lender-columbiaville-mi/` | Lapeer |  | 41 | 37 | 2 | 0 | 2 | 85 | B | Main issues: incorrect typical home value (hero) (P1); incorrect effective property tax rate (hero + stats) (P1). |
| `/mortgage-lender-imlay-city-mi/` | Lapeer |  | 44 | 33 | 1 | 1 | 9 | 77 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); outdated typical home value (hero) (P1). |
| `/mortgage-lender-otter-lake-mi/` | Lapeer |  | 24 | 20 | 3 | 0 | 1 | 74 | C | Main issues: incorrect effective property tax rate (hero + stats) (P0); incorrect typical home value (hero) (P1). |
| `/mortgage-michigan/oakland-county/` | Hub | yes | 4 | 2 | 1 | 0 | 1 | 98 | A | Main issues: incorrect taxable value rise after sale (hub table) (P2). |
| `/mortgage-michigan/lapeer-county/` | Hub | yes | 2 | 1 | 0 | 0 | 1 | 97 | A | All Treasury, Census and program figures checked match primary sources. |
| `/mortgage-michigan/livingston-county/` | Hub | yes | 3 | 2 | 0 | 0 | 1 | 97 | A | All Treasury, Census and program figures checked match primary sources. |
| `/mortgage-michigan/genesee-county/` | Hub | yes | 4 | 2 | 1 | 0 | 1 | 95 | A | Main issues: incorrect hub housing tags (P2). |

---

## 8. Limits of this check

- **Municipal and county sites remained unreachable.** Line-item millage, township fees, event dates, phone numbers and ordinance details are marked unverifiable (about 270 rows), not wrong. A follow-up pass with county equalization reports would close most of them.
- **School-district shares by homes, and ZIP shares by homes** (2020 block counts), were not re-tabulated. Area-based shares were checked against the ZCTA files.
- **Commute times** are OSRM no-traffic routes. They are labeled as such on the pages and were not re-run.
- **Portal price figures were not "corrected" to other portal data.** Section 5 rates their source quality instead.

## Auditor corrections

*Independent audit, 2026-11-15. Full detail: `08-audit/audit-city.md`; exact row changes: `08-audit/corrections-city.csv`.*
**Verdict: PASS WITH CORRECTIONS.** All 18 P0s are confirmed:
- The 15 tax-share values reproduce exactly from the ACS 2020-2024 B25103 and B25077 files (e.g., Montrose $2,641 / $113,300 = 2.33%).
- The 3 "May 1" PRE deadlines are confirmed against MCL 211.7cc(2).

These are also confirmed against primary files: Berkley 15,145 (V2025) and 15,194 (2020); the P.O. Box ZIPs (no ZCTA); Oxford 48370 at 96.8% Addison Township; McLaren HQ in Grand Blanc; Flint's $53,500. This group's tax-share standard (gap ≥0.5 point = P0, 0.25-0.5 = P1, one decimal) is adopted as the unified standard for all groups.

1. **Score:** the group's 90 (A) → **80 (B)** under the rubric's §3.11 anchors. One material error (a wrong figure, an outdated program rule) is the 60 anchor, but such pages were scored 71-96. Sample re-scores: Montrose 84 → 65, Auburn Hills 73 → 60, Fenton 82 → 65, Holly 82 → 60, Flint 84 → 76, Oxford 80 → 65, Waterford 96 → 88, Troy 96 → 88, Addison Twp 95 → 88, Berkley 82 → 80.
2. **`[VERIFY]` hero rows** (Sylvan Lake, Auburn Hills and other stale or list-price heroes) get exact Census values, pending D2. Sylvan Lake becomes $391,000; the old `[VERIFY: standard sale-price measure]` contradicted this report's own §5. Otter Lake is $101,000 with a wide-margin caveat.
3. **Sources:** the McLaren correction cites Wikipedia; use McLaren's 2017 annual report.
4. **Fenton +25% (Oakland hub):** this is not a transcription error. The Uncapping Study lists a separate Fenton (Oakland part) row at +25.1%, and that part has about 25 residents. Drop the row from the Oakland hub, or label it "mostly Genesee County, +55%".
5. **Lake Orion ZIPs:** the village lies 100% in ZCTA 48362, so 48360 should not be listed as a village ZIP `[VERIFY page scope]`.
6. **Missed findings:**
   - §6 fair-housing words on 8 pages (Bingham Farms, Birmingham, Brighton, Dryden, Holly, Lake Angelus, Otter Lake, South Lyon).
   - "Talk with a local mortgage expert" on every page (F15).
   - The paraphrased or unsourced Samantha quotes.
   - No government non-affiliation line.
7. **Not reproducible here:** the 776 Treasury millage matches. Treasury's PDF returns 403 to scripted requests from this session. A spot-check of Northville's Wayne side against the Wayne County report matches (42.1693 / 60.1693).
