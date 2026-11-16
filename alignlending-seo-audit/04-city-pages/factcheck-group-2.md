# City page fact-check, group 2: Wayne, Macomb, St. Clair, Monroe and Lenawee

**Scope:** 95 city pages whose hero eyebrow names Wayne County (42), Macomb County (21), St. Clair County (11), Monroe County (11), Lenawee County (9) or "Oakland and Wayne counties" (Northville, 1), plus the 5 county hubs (`/mortgage-michigan/wayne-county/`, `/macomb-county/`, `/st-clair-county/`, `/monroe-county/`, `/lenawee-county/`). That is 100 URLs, selected with Python from `pages.jsonl`. Crawl date 2026-11-15; checks run 2026-11-15.
**Companion file:** `factcheck-group-2.csv` (1,243 rows: url, claim_type, on_page_text, verified_value, source_url, status, corrected_text_exact, priority).

## 1. Summary

| Headline | Result |
|---|---|
| **Accuracy & compliance score, group** | **93 / 100 (A).** Mean of 100 page scores. Median 96. City pages average 93.2; hubs average 96.4. |
| Grade distribution, 95 city pages | A 76, B 15, C 2 (Belleville, Emmett), D 1 (Detroit, 69), F 1 (Highland Park, 56) |
| By county, city pages | Macomb 96.0 · Monroe 94.7 · St. Clair 93.5 · Lenawee 92.4 · Wayne 91.5 · Northville 90 |
| Atomic claims checked against primary data | about 5,300: 2,322 millage figures, 1,970 Census dollar figures, 99 population claims, 122 ZIP land-share sentences, 95 ZIP lists, 96 uncapping figures, 63 property-tax-share stats, 192 loan-limit figures, 77 MSHDA statements, 106 statute statements, 95 municipality types, 23 ACS tax statements, 10 city income tax statements and 12 local-program or coherence items |
| **Hard-error rate** | **26 incorrect findings, about 0.6% of atomic claims.** At the row level, 6.7% of the 1,243 CSV rows are incorrect or outdated (26 + 57) and 14% are unverifiable (174). Most unverifiable rows are non-primary sources (98) or the unsourced property-tax-share stat (40). |
| Pages verified in depth | 42 city pages plus all 5 hubs. This includes every page the brief named: Detroit, Dearborn, Livonia, Westland, Canton, Taylor, Southgate, all five Grosse Pointes, Sterling Heights, Warren, Clinton Twp, Macomb Twp, Shelby Twp, Port Huron and Monroe. **Adrian has no city page.** The Lenawee hub says so ("Adrian, the county seat, does not have a city guide yet"). The remaining 53 pages got the same automated primary-source checks on every claim family. |
| Compliance | Equal Housing Opportunity and both NMLS numbers appear on all 100 pages. No mortgage rate, APR or payment promise was found. The "effective rate" phrases are property-tax ratios and are accurate, and "amazing" appears only inside quoted Google reviews. |

**Verdict.** These pages are unusually well sourced. Every Wayne County millage figure matches the county's certified 2025 apportionment report to four decimals. Census ZIP-to-city land shares are right in every checkable case, and all five city income taxes in the group are stated correctly. The errors fall into a few repeatable patterns. One hero stat has no defined method, so some pages show impossible values. 2025 millage went stale when the counties published 2026 rates in October 2026. A few hero ZIP lists include post-office-box ZIPs. Some intro paragraphs were written from World Population Review instead of the Census. Detroit has internal number conflicts. The fixes are mechanical, and section 6 lists them with exact replacement text.

### Top findings, ranked by impact

1. **P0: Highland Park's millage dropped 16 mills in 2026, and the site still shows 2025.** Wayne County's 2026 apportionment report puts Highland Park at **47.0420 homestead / 62.8362 non-homestead**, down from 63.2210 / 79.2184, because the city debt levy fell from 21.22 to 5.40 mills. The old figure appears in the Highland Park hero and FAQ, twice on the Detroit page ("Highland Park: 63.22 Close to Detroit's rate"), and in the Wayne hub's first-year-tax table (about $6,130, now about $4,560). On $50,000 of taxable value the difference is about $809 a year.
2. **P1: The "Property tax current owners pay: about X% of value" hero stat has no source and no consistent method.** It appears on 63 city pages. On the township pages it equals the ACS 2020-2024 ratio of median real estate tax to median owner value (15 pages match exactly). On the other pages it matches neither that ratio nor the rate implied by the page's own millage and uncapping figures. On eight pages it is implausible: **Belleville 0.44%** (ACS 1.94%), **Emmett 0.31%** (1.81%), **Livonia 0.76%** (1.37%), **St. Clair 0.71%** (1.52%), **Harper Woods 1.12%** (2.18%, at 87.9 mills), **Flat Rock 1.15%** (2.38%), **Rockwood 1.08%** (1.92%) and **Melvindale 1.09%** (1.58%). A buyer reading Belleville's 0.44% would underestimate taxes by a factor of four.
3. **P1/P2: 2025 millage is now outdated in three of the five counties.** Wayne, Monroe and Lenawee published 2026 apportionment reports in October 2026, and 43 page-level millage sets now differ from current bills. Eleven moved more than 1 mill: Sumpter Twp about −3.1, Dearborn Heights No. 7 −3.1, Westland and Inkster (Romulus schools) −2.9 and −2.8, Romulus −2.4, Harper Woods −2.0 and −1.5, Riverview −1.6, Rockwood −1.3, Grosse Pointe Woods −1.1, Melvindale −1.1 and Grosse Ile −1.0. Monroe County rows fell about 1 mill countywide. The pages label the figures "2025", so they are honest, but they are a year behind the summer 2026 bills. Macomb and St. Clair have not posted 2026 apportionment reports, so 2025 is still the latest verifiable year there.
4. **P1: Hero ZIP lists include non-residential ZIPs and omit a real one.** Belleville lists **48112**, Port Huron **48061** and Warren **48090**, and the stats block calls each a "Residential ZIP code". None has a Census ZIP Code Tabulation Area, because they are post-office-box ZIPs. Hamtramck lists only 48212, yet **18.9% of the city's land is in 48211**. The site's own Detroit page says 9% of 48211 is Hamtramck. New Haven lists 48050, which lies entirely in Lenox Township outside the village.
5. **P1/P2: Some claims rest on non-primary sources, and a few numbers conflict on the same page.** World Population Review is linked on 21 pages, and its projections fill the intro paragraphs: "roughly 4,070" (Algonac), 27,190 (Allen Park), 1,925 (Capac), 2,286 (Carleton), 10,249 (Flat Rock), 25,972 (Garden City). None matches a Census figure, and Emmett's "258 people" is 8% above the 2020 Census count of 239. Allen Park labels 28,533 as the "2020 Census" figure; the count was 28,638 (28,533 is the July 2020 estimate). Grosse Pointe Woods attributes "$373,339" to "Census QuickFacts"; ACS says $342,100, and Census medians are always rounded to $100. Ownwell (a tax-appeal vendor) is cited on 2 pages, Data USA on 22 and Wikipedia on 50. On the Detroit page, the hero says "$395,000 downtown (48226)" and "$411,000 in Midtown (48201)", while the cards say $365,000 and $377,000. The FAQ says the ZIP medians "ran from about $144,000 in 48209", but the page lists 48217 near $45,000.

**What held up (verified correct):** all 2025 Wayne County millage figures (Detroit 64.1844, Hamtramck 49.9446, Dearborn 50.8704 and 52.9112, Livonia 41.2361 and 37.4524, Harper Woods 86.6266 and 87.9346 including its 17.5-mill special assessment, and so on). Every Census ZIP land share that could be checked, for example Detroit 48203 at 63.8% Detroit and 36.2% Highland Park, Tecumseh's eight-way split of 49286, and Dundee's five-township split of 48131. Detroit 2.4%/1.2%, Highland Park 2%/1%, Hudson and Port Huron 1%/0.5%, and the "24 cities" count. The 2026 FHA floor of $541,287 and conforming limit of $832,750. MSHDA's $566,355 price limit and the MI 10K terms. The NEZ Homestead rules. The PRE's 18 mills and the uncapping rule in MCL 211.27a. All 96 uncapping percentages match Align's own 2026 Uncapping Study. 1,923 of 1,970 Census dollar figures match ACS 2020-2024 tables exactly. Every municipality type (city, village, charter township) matches the Census.

## 2. Method and primary sources

| Claim family | How it was checked | Primary source (fetched and parsed in full) |
|---|---|---|
| Population | Every "N residents/people" claim tied to the page's place or township was compared with the 2020 Census count, the Census July 2020–2025 estimates (Vintage 2025, released May 2026) and ACS 2020-2024 | [sub-est2025_26.csv](https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/cities/totals/sub-est2025_26.csv); [2020 PL 94-171 Michigan file](https://www2.census.gov/programs-surveys/decennial/2020/data/01-Redistricting_File--PL_94-171/Michigan/mi2020.pl.zip); [ACS 2024 5-year table files](https://www2.census.gov/programs-surveys/acs/summary_file/2024/table-based-SF/data/5YRData/) |
| ZIP codes and "% of ZIP" | Hero ZIP lists and every "% of ZIP land" sentence were compared with the 2020 ZCTA-to-place and ZCTA-to-county-subdivision relationship files (land area) | [ZCTA–place](https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_place20_natl.txt), [ZCTA–county subdivision](https://www2.census.gov/geo/docs/maps-data/data/rel2020/zcta520/tab20_zcta520_cousub20_natl.txt) |
| Millage | Every decimal mill figure near "mill/homestead/rate" (2,322) was matched by value against the county-certified 2025 totals, including millage-based special assessments and village levies, then compared with 2026 where published | Wayne [2025](https://www.waynecountymi.gov/files/assets/mainsite/v/1/management-amp-budget/documents/assessment-data/2025/2025-wayne-county-apportionment-report.pdf) / [2026](https://www.waynecountymi.gov/files/assets/mainsite/v/1/management-amp-budget/documents/assessment-data/2026/apportionment-report-2026-2026-apportionment-report-official-version-as-submitted-to-county-commission.pdf); [Macomb 2025](https://www.macombgov.org/sites/default/files/files/2025-10/2025%20Macomb%20County%20Apportionment%20Report%20-%20BOC%20Agenda%20-%20rev.pdf); [St. Clair 2025 (amended 12/10/2025)](https://www.stclaircounty.org/Uploads/Equalization/2025%20St%20Clair%20County%20Apportionment%20Report%20-%20Amended%2012-10-2025.pdf); Monroe [2025](https://www.co.monroe.mi.us/DocumentCenter/View/5374/2025-Monroe-County-Apportionment-Report-PDF), [special-assessment addendum](https://www.co.monroe.mi.us/DocumentCenter/View/5375/2025-Monroe-County-Special-Assessment-Addendum-PDF), [2026](https://www.co.monroe.mi.us/DocumentCenter/View/6255/2026-Monroe-County-Apportionment-Report-PDF); Lenawee [2024](https://www.lenawee.mi.us/DocumentCenter/View/11275/2024-MILLAGE-RATES) / [2026](https://www.lenawee.mi.us/DocumentCenter/View/16406) |
| Census dollar figures | Every $ figure attributed to the Census/ACS (1,970) was matched against B25077, B19013, B25064 and B25103 for every Michigan place, township, ZCTA, tract and block group in these counties | ACS 2020-2024 5-year table files (above) |
| City income tax | All 10 statements | [Treasury: which cities impose an income tax](https://www.michigan.gov/taxes/questions/iit/accordion/general/what-cities-impose-an-income-tax); [Form 5469 TY2025 (Detroit rates)](https://www.michigan.gov/taxes/-/media/Project/Websites/taxes/Forms/City-Withholding/TY2025/5469_ty2025.pdf); [MCL 141.611](https://www.legislature.mi.gov/documents/mcl/pdf/MCL-141-611.pdf) |
| Loan limits, MSHDA | Text match | [HUD 2026 FHA limits](https://www.hud.gov/news/hud-no-25-145); [FHFA conforming limit](https://www.fhfa.gov/data/conforming-loan-limit); [MSHDA MI Home Loan](https://www.michigan.gov/mshda/homeownership/mi-home-loan) |
| Uncapping % | Compared with Align's study table (the stated source, built from State Tax Commission SEV/TV data) | [Align 2026 Uncapping Study](https://alignlending.com/research/michigan-property-tax-uncapping-study/) |
| Internal coherence | Python, on all 100 pages: hero vs stats block vs FAQ, eyebrow county vs body, city name in title/meta/H2s, ZIP prices quoted twice, hub tables vs city pages | `pages.jsonl`, `text/*.txt` |

**Access limits, stated plainly.** Michigan Treasury's own "2025 Total Rates" PDF and detroitmi.gov return HTTP 403 (bot protection) to this environment, so I could not read Treasury's table directly. I used the county apportionment reports instead; they are the certified source of those same totals. The Census Data API now requires a key, so I used the Census bulk files on www2.census.gov. Lenawee County has not posted its 2025 millage table, so the 2025 Lenawee figures (276) are marked unverifiable; they sit between the county's 2024 and 2026 totals. Price figures attributed to Redfin or Zillow were not "corrected" to portal data (see section 4).

**Scoring.** Each page starts at 100. Deductions: incorrect P0 −15, P1 −8, P2 −4; outdated P0 −12, P1 −4, P2 −2; unverifiable P1 −4, P2 −1.5, with unverifiable deductions capped at −12. Grades follow the brief (A 90+ … F <60).

## 3. Named-sample verification notes

| Page | Score | What was verified (source) | What failed or is stale |
|---|---|---|---|
| Detroit | 69 D | 649,000 residents = V2025 649,095 ✓; Detroit 64.1844 / 82.1844 mills ✓ (Wayne 2025); 48203 split 64/36 ✓, 48212 32% Hamtramck ✓, 48239 one-fifth Detroit ✓; income tax 2.4%/1.2% ✓; NEZ rules ✓; 28 residential ZIPs defensible (48236/48239 slivers covered under "City lines"); Census owner median $83,900 ✓, 48201 $412,600 ✓; uncap +128% ✓ (study) | Hero ZIP prices conflict with the page's own cards ($395k vs $365k, $411k vs $377k); FAQ ZIP range starts at $144k though the list goes down to $45k; 54 vs 53 days on market; Highland Park 63.22 → 47.04 (2026); "residents counted" should say "estimate"; property-tax share 1.86% unsourced (ACS 1.67%) |
| Dearborn | 95 A | 50.87 / 52.91 mills ✓; no city income tax and "Detroit and 23 others" ✓; four ZIPs and land shares (36% / 35% / ~20% / ~10%) ✓; uncap 66% ✓ | "nearly 110,000 people" is the 2020 Census count; July 2025 estimate is 105,611 |
| Livonia | 88 B | 95,535 at the 2020 Census ✓; 41.2361 (Livonia PS) and 37.4524 (Clarenceville) ✓; three ZIPs with roughly equal shares ✓ | Property-tax share 0.76% is implausible (ACS 1.37%; page's own millage implies about 1.43%); Clarenceville −0.51 mill in 2026 |
| Westland | 93 A | 2020 Census 85,420 and ACS 83,633 ✓; 48185/48186 split 60/40 ✓; all five district rates ✓ (2025) | Romulus-district parcels −2.88 mills in 2026 |
| Canton Twp | 96 A | Three district rates, each including 9.42 mills of special assessments ✓; no bordering income-tax city ✓; 48187/48188 each about half ✓; ACS tax 1.41% ✓ | "99,800 … 2024 estimate" superseded (V2025: 99,714) |
| Taylor | 96 A | 49.8402 / 67.4569 ✓; ACS 62,081 ✓; one ZIP, 48180 ✓ | Property-tax share 1.22% unsourced (ACS 1.70%); Data USA cited |
| Southgate | 98 A | 58.4267 / 76.4267 ✓; 48195 = 100% ✓ | Property-tax share 1.47% unsourced (ACS 1.90%) |
| Grosse Pointe | 98 A | 52.2962 / 66.7739 ✓; 48230 ✓ | −0.63 mill in 2026 |
| Grosse Pointe Farms | 96 A | 52.7433 ✓; summer/winter split on the bill; 48236 at 99% ✓; ACS tax share 1.86% ✓ | +0.83 mill in 2026 |
| Grosse Pointe Park | 95 A | 54.5661 / 69.0438 ✓; 2020 Census 11,595 ✓ | −0.86 mill in 2026; Data USA and Wikipedia cited |
| Grosse Pointe Shores | 100 A | Wayne side 52.43, Macomb side 43.58 ✓; ACS 2,795 ✓ | — |
| Grosse Pointe Woods | 82 B | 55.2398 ✓; no income tax ✓; ACS 16,094 ✓ | "$373,339 (Census QuickFacts)" is wrong (ACS $342,100); 93.3% of 6,609 should be 93.2% of 6,604; −1.14 mill in 2026 |
| Sterling Heights | 100 A | 38.9277 (Utica) and 43.3451 (Warren Con.) ✓ (Macomb 2025); 133,500 ≈ ACS 133,573 ✓; four ZIPs ✓ | Troy 36.04 (Oakland) not checked |
| Warren | 85 B | Six district rates ✓; 137,000 ≈ V2025 137,138 | 48090 is a PO-box ZIP; World Population Review cited |
| Clinton Twp | 96 A | Every rate = county rate + 9.00 mills fire/police special assessment ✓ (Clintondale 46.37 etc.); ZIP land 39/30/31% ✓; ACS tax 1.48% ✓ | "101,400 … 2024 estimate" label (V2025: 101,374) |
| Macomb Twp | 96 A | 27.31 / 30.81 / 32.07 / 32.45 = county rate + 1.90 mill fire special assessment ✓; ZIPs 63/37 ✓ | "94,300 … 2024 estimate" superseded (V2025: 95,099) |
| Shelby Twp | 96 A | Romeo 32.29, Rochester 28.55 ✓; 48315 at 36% of the township ✓; ACS tax 1.07% ✓ | "80,400 … 2024 estimate" label |
| Port Huron | 90 A | 41.3099 ✓; income tax 1%/0.5% ✓; Fort Gratiot 31.8036 ✓ | 48061 is a PO-box ZIP |
| Monroe | 90 A | 43.6803 ✓; 2020 Census 20,462 ✓; city = 10% of 48162 ✓ | "20,040 (World Population Review)"; 2026 rate 42.6624 (−1.02) |
| Adrian | — | **No city page exists.** The Lenawee hub row is correct: City of Adrian +39%; 2026 homestead 41.4509 mills (Adrian schools) | Coverage gap for the county seat (about 20,000 residents) |
| Highland Park | 56 F | 2%/1% income tax ✓; ZIP 48203 split ✓; 2025 rates 63.2210 / 79.2184 ✓ (as of 2025) | 2026 rate is 47.0420 / 62.8362, so the hero, FAQ and budget math are about 16 mills high; population 8,100 (World Population Review) vs V2025 8,248 |
| Hamtramck | 89 B | 49.9446 / 67.9446 ✓; levies a city income tax ✓ | Omits 48211 (19% of city land); give the rates (1% / 0.5%) |
| Belleville | 76 C | 37.8841 + 11.25 special assessment = 49.1341 ✓; 48111 school-district shares | 48112 is a PO-box ZIP; property-tax share 0.44% (ACS 1.94%); World Population Review figure 3,814 |
| Washington Twp / Romeo | 92 A / 96 A | Village 41.5818 = county figure before special assessments; Bruce side 31.3006 and 45.6482 ✓ | Washington Twp 31.28 / 29.69 / 27.54 match neither county basis (28.87 before, 32.92 after the 4.0485-mill special assessments); mixed basis between village and township |
| Algonac / New Baltimore / Memphis | 86 B / 96 A / 92 A | St. Clair rates ✓ (Algonac 37.2823, Clay 32.23 with special assessments) | Ira and Casco "Anchor Bay" and Riley "Armada" rows sit 1.6992 mills below the county's amended report (conflict to verify); Algonac mixes bases; Memphis eyebrow should name both counties (29% of residents are in St. Clair) |

## 4. Error patterns

1. **Undefined derived metric (systemic).** "Property tax current owners pay" is computed one way on township pages (ACS median tax ÷ median value) and an unknown way on the city and village pages. It contradicts the page's own millage on 8 pages and cannot be traced on 40. *Fix:* compute it one way for every page (ACS B25103 ÷ B25077), cite it under the stat, and suppress it where the ACS margin is wide (villages under about 1,000 people).
2. **Annual data with no refresh trigger (systemic).** The pages were written from 2025 rates and published while the counties were certifying 2026 rates (October 2026). Population labels "Census Bureau's 2024 estimate" predate the Vintage 2025 release (May 2026). The 2026 loan limits expire January 1, 2027.
3. **Mixed special-assessment basis (moderate).** Most pages quote Treasury-style totals that include millage-based special assessments, which is the right basis. But Algonac (city without, township with), Flat Rock (Berlin Twp without the 2-mill fire debt assessment, while Estral Beach and South Rockwood include it) and Washington Twp/Romeo (village without, township partly with) mix bases within a page or between pages.
4. **Intro paragraphs from a different research pass (moderate).** The "What should you know before buying" paragraph on 21 pages uses World Population Review numbers and links that site. On 50 pages it uses Wikipedia, and elsewhere Data USA, City-Data, Ownwell and Business View Magazine. The structured sections below on the same pages use Census data, so the same page can state two populations (for example Carleton: 2,286 in the intro, 2,595 in the body).
5. **ZIP list built from USPS city names rather than ZCTAs (low volume, high visibility).** PO-box ZIPs are labeled "Residential" (3 pages), and a 19% ZIP share is missing (Hamtramck).
6. **Hand-written numbers that drift from structured cards (Detroit).** The intro and FAQ prices were not regenerated when the Redfin July–September 2026 cards were. This is the strongest argument for rendering hero, stats and FAQ numbers from one data record.
7. **Stated source does not match the figure (rare but damaging for E-E-A-T).** "Census QuickFacts" on a Zillow-style number (Grosse Pointe Woods), and "2020 Census" on a July 2020 estimate (Allen Park).

**Price figures (not "corrected" to portal data).** Price claims cite Redfin (82 pages) or Zillow (50) by name, with a date window (for example "three months ending September 2026") and without links. That meets the brief's no-portal-link rule and is defensible as attributed and dated market data. The hero "Typical home value … from the market research on this page" is vague, though, and it matches the hub tables (so it is consistent across pages). The basis also varies from page to page: on 23 of the 95 pages (mostly townships, for example Canton $372,000 vs ACS $372,400 and Macomb Twp $387,000) it equals the rounded ACS 2020-2024 owner median, while on the other 72 it is a recent-sales figure (for example Belleville $272,000 vs ACS $148,300). Name the basis in the stats block, for example "Typical home value: Redfin median sale, Jul–Sep 2026" or "Census owner median, 2020-2024", and use one basis across the city set.


## 5. Accuracy scorecard, all 100 pages (rubric aspect: Accuracy & compliance)

Sorted from lowest score. "Deep sample" = verified claim by claim against primary sources and read in context. Every other page got the same automated primary-source checks for every claim family. Counts are CSV rows; one millage or ACS row aggregates all of a page's figures of that type.

| Page | County (eyebrow) | Deep sample | Claim rows | Correct | Incorrect | Outdated | Unverifiable | Score | Grade | Main issues |
|---|---|---|---|---|---|---|---|---|---|---|
| /mortgage-lender-highland-park-mi/ | Wayne County | yes | 16 | 9 | 0 | 3 | 4 | 56 | F | millage (currency) (outdated P0); millage (headline) (outdated P0); millage (non-homestead) (outdated P0) |
| /mortgage-lender-detroit-mi/ | Wayne County | yes | 25 | 18 | 3 | 2 | 2 | 69 | D | internal coherence (prices) (incorrect P1); internal coherence (FAQ) (incorrect P1); millage (neighbor) (outdated P1) |
| /mortgage-lender-belleville-mi/ | Wayne County | yes | 16 | 10 | 2 | 0 | 4 | 76 | C | ZIP codes (hero list) (incorrect P1); property tax share (hero stat) (incorrect P1); source quality (unverifiable P1) |
| /mortgage-lender-emmett-mi/ | St. Clair County | yes | 14 | 10 | 2 | 0 | 2 | 78 | C | property tax share (hero stat) (incorrect P1); population (incorrect P1); source quality (unverifiable P1) |
| /mortgage-lender-flat-rock-mi/ | Wayne County | yes | 16 | 10 | 2 | 0 | 4 | 80 | B | property tax share (hero stat) (incorrect P1); millage basis (incorrect P2); source quality (unverifiable P1) |
| /mortgage-lender-melvindale-mi/ | Wayne County |  | 16 | 11 | 1 | 1 | 3 | 81 | B | property tax share (hero stat) (incorrect P1); millage (currency) (outdated P1); source quality (unverifiable P1) |
| /mortgage-lender-allen-park-mi/ | Wayne County | yes | 16 | 10 | 1 | 0 | 5 | 82 | B | population (label) (incorrect P1); source quality (unverifiable P1) |
| /mortgage-lender-grosse-pointe-woods-mi/ | Wayne County | yes | 16 | 12 | 2 | 1 | 1 | 82 | B | Census ACS value (attribution) (incorrect P1); millage (currency) (outdated P1); Census ACS housing units (incorrect P2) |
| /mortgage-lender-warren-mi/ | Macomb County | yes | 13 | 9 | 1 | 0 | 3 | 85 | B | ZIP codes (hero list) (incorrect P1); source quality (unverifiable P1) |
| /mortgage-lender-algonac-mi/ | St. Clair County | yes | 15 | 9 | 1 | 0 | 5 | 86 | B | millage basis (incorrect P2); source quality (unverifiable P1) |
| /mortgage-lender-tecumseh-mi/ | Lenawee County | yes | 16 | 9 | 0 | 1 | 6 | 86 | B | source quality (unverifiable P1); millage (currency) (outdated P2) |
| /mortgage-lender-carleton-mi/ | Monroe County | yes | 15 | 11 | 1 | 1 | 2 | 88 | B | source quality (unverifiable P1); internal coherence (population) (incorrect P2); millage (currency) (outdated P2) |
| /mortgage-lender-harper-woods-mi/ | Wayne County | yes | 11 | 9 | 1 | 1 | 0 | 88 | B | property tax share (hero stat) (incorrect P1); millage (currency) (outdated P1) |
| /mortgage-lender-livonia-mi/ | Wayne County | yes | 11 | 8 | 1 | 1 | 1 | 88 | B | property tax share (hero stat) (incorrect P1); millage (currency) (outdated P2) |
| /mortgage-lender-rockwood-mi/ | Wayne County |  | 9 | 7 | 1 | 1 | 0 | 88 | B | property tax share (hero stat) (incorrect P1); millage (currency) (outdated P1) |
| /mortgage-lender-st-clair-mi/ | St. Clair County |  | 12 | 10 | 1 | 0 | 1 | 88 | B | property tax share (hero stat) (incorrect P1); source quality (unverifiable P1) |
| /mortgage-lender-hamtramck-mi/ | Wayne County | yes | 12 | 9 | 1 | 0 | 2 | 89 | B | ZIP codes (hero list) (incorrect P1) |
| /mortgage-lender-inkster-mi/ | Wayne County |  | 12 | 8 | 0 | 1 | 3 | 89 | B | millage (currency) (outdated P1); source quality (unverifiable P1) |
| /mortgage-lender-romulus-mi/ | Wayne County |  | 17 | 13 | 0 | 1 | 3 | 89 | B | millage (currency) (outdated P1); source quality (unverifiable P1) |
| /mortgage-lender-dearborn-heights-mi/ | Wayne County | yes | 13 | 10 | 0 | 1 | 2 | 90 | A | millage (currency) (outdated P1); source quality (unverifiable P1) |
| /mortgage-lender-lincoln-park-mi/ | Wayne County |  | 14 | 9 | 0 | 1 | 4 | 90 | A | source quality (unverifiable P1); millage (currency) (outdated P2) |
| /mortgage-lender-monroe-mi/ | Monroe County | yes | 16 | 11 | 0 | 1 | 4 | 90 | A | source quality (unverifiable P1); millage (currency) (outdated P2) |
| /mortgage-lender-morenci-mi/ | Lenawee County |  | 13 | 8 | 0 | 1 | 4 | 90 | A | source quality (unverifiable P1); millage (currency) (outdated P2) |
| /mortgage-lender-northville-mi/ | Oakland and Wayne counties | yes | 14 | 9 | 0 | 0 | 5 | 90 | A | source quality (unverifiable P1) |
| /mortgage-lender-port-huron-mi/ | St. Clair County | yes | 11 | 9 | 1 | 0 | 1 | 90 | A | ZIP codes (hero list) (incorrect P1) |
| /mortgage-michigan/wayne-county/ | county hub | hub | 6 | 3 | 1 | 1 | 1 | 90 | A | internal coherence (count) (incorrect P2); first-year tax table (outdated P1) |
| /mortgage-lender-blissfield-mi/ | Lenawee County |  | 13 | 8 | 0 | 1 | 4 | 92 | A | millage (currency) (outdated P2) |
| /mortgage-lender-clinton-mi/ | Lenawee County |  | 14 | 9 | 0 | 1 | 4 | 92 | A | millage (currency) (outdated P2) |
| /mortgage-lender-deerfield-mi/ | Lenawee County |  | 13 | 8 | 0 | 1 | 4 | 92 | A | millage (currency) (outdated P2) |
| /mortgage-lender-garden-city-mi/ | Wayne County |  | 13 | 9 | 0 | 0 | 4 | 92 | A | source quality (unverifiable P1) |
| /mortgage-lender-memphis-mi/ | Macomb County | yes | 17 | 12 | 1 | 0 | 4 | 92 | A | county (eyebrow) (incorrect P2) |
| /mortgage-lender-washington-township-mi/ | Macomb County | yes | 13 | 11 | 1 | 0 | 1 | 92 | A | millage (unverifiable P1); millage basis (incorrect P2) |
| /mortgage-lender-capac-mi/ | St. Clair County | yes | 15 | 12 | 0 | 0 | 3 | 93 | A | source quality (unverifiable P1) |
| /mortgage-lender-eastpointe-mi/ | Macomb County |  | 14 | 11 | 0 | 0 | 3 | 93 | A | source quality (unverifiable P1) |
| /mortgage-lender-gibraltar-mi/ | Wayne County |  | 14 | 10 | 0 | 2 | 2 | 93 | A | millage (currency) (outdated P2); Census ACS income (outdated P2) |
| /mortgage-lender-westland-mi/ | Wayne County | yes | 12 | 9 | 0 | 1 | 2 | 93 | A | millage (currency) (outdated P1) |
| /mortgage-lender-wyandotte-mi/ | Wayne County |  | 13 | 10 | 0 | 0 | 3 | 93 | A | source quality (unverifiable P1) |
| /mortgage-lender-britton-mi/ | Lenawee County |  | 13 | 9 | 0 | 1 | 3 | 94 | A | millage (currency) (outdated P2) |
| /mortgage-lender-maybee-mi/ | Monroe County |  | 21 | 14 | 0 | 1 | 6 | 94 | A | millage (currency) (outdated P2) |
| /mortgage-lender-new-haven-mi/ | Macomb County |  | 11 | 9 | 1 | 0 | 1 | 94 | A | ZIP codes (hero list) (incorrect P2) |
| /mortgage-lender-petersburg-mi/ | Monroe County |  | 13 | 9 | 0 | 1 | 3 | 94 | A | millage (currency) (outdated P2) |
| /mortgage-lender-riverview-mi/ | Wayne County |  | 11 | 9 | 0 | 1 | 1 | 94 | A | millage (currency) (outdated P1) |
| /mortgage-lender-cement-city-mi/ | Lenawee County |  | 10 | 7 | 0 | 1 | 2 | 95 | A | millage (currency) (outdated P2) |
| /mortgage-lender-dearborn-mi/ | Wayne County | yes | 15 | 12 | 0 | 1 | 2 | 95 | A | population (outdated P2) |
| /mortgage-lender-estral-beach-mi/ | Monroe County | yes | 12 | 9 | 0 | 1 | 2 | 95 | A | millage (currency) (outdated P2) |
| /mortgage-lender-grosse-pointe-park-mi/ | Wayne County | yes | 13 | 10 | 0 | 1 | 2 | 95 | A | millage (currency) (outdated P2) |
| /mortgage-lender-hudson-mi/ | Lenawee County | yes | 13 | 10 | 0 | 1 | 2 | 95 | A | millage (currency) (outdated P2) |
| /mortgage-lender-south-rockwood-mi/ | Monroe County | yes | 12 | 9 | 0 | 1 | 2 | 95 | A | millage (currency) (outdated P2) |
| /mortgage-lender-bedford-township-mi/ | Monroe County |  | 13 | 11 | 0 | 1 | 1 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-lender-canton-township-mi/ | Wayne County | yes | 14 | 12 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-chesterfield-township-mi/ | Macomb County |  | 14 | 12 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-clinton-township-mi/ | Macomb County | yes | 16 | 14 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-dundee-mi/ | Monroe County |  | 11 | 9 | 0 | 1 | 1 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-lender-ecorse-mi/ | Wayne County |  | 11 | 9 | 0 | 1 | 1 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-lender-grosse-ile-township-mi/ | Wayne County |  | 11 | 10 | 0 | 1 | 0 | 96 | A | millage (currency) (outdated P1) |
| /mortgage-lender-grosse-pointe-farms-mi/ | Wayne County | yes | 15 | 13 | 0 | 1 | 1 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-michigan/lenawee-county/ | county hub | hub | 3 | 1 | 0 | 1 | 1 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-lender-macomb-township-mi/ | Macomb County | yes | 14 | 12 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-new-baltimore-mi/ | Macomb County | yes | 13 | 10 | 0 | 0 | 3 | 96 | A | none material |
| /mortgage-lender-northville-township-mi/ | Wayne County |  | 13 | 11 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-onsted-mi/ | Lenawee County |  | 14 | 11 | 0 | 1 | 2 | 96 | A | millage (currency) (outdated P2) |
| /mortgage-lender-plymouth-township-mi/ | Wayne County |  | 13 | 11 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-romeo-mi/ | Macomb County | yes | 9 | 8 | 0 | 0 | 1 | 96 | A | millage (unverifiable P1) |
| /mortgage-lender-shelby-township-mi/ | Macomb County | yes | 15 | 13 | 0 | 1 | 1 | 96 | A | population (outdated P2) |
| /mortgage-lender-st-clair-shores-mi/ | Macomb County |  | 13 | 12 | 0 | 0 | 1 | 96 | A | source quality (unverifiable P1) |
| /mortgage-lender-sumpter-township-mi/ | Wayne County |  | 10 | 9 | 0 | 1 | 0 | 96 | A | millage (currency) (outdated P1) |
| /mortgage-lender-taylor-mi/ | Wayne County | yes | 14 | 11 | 0 | 0 | 3 | 96 | A | none material |
| /mortgage-lender-center-line-mi/ | Macomb County |  | 12 | 10 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-mount-clemens-mi/ | Macomb County | yes | 13 | 11 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-roseville-mi/ | Macomb County |  | 11 | 9 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-trenton-mi/ | Wayne County |  | 12 | 10 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-wayne-mi/ | Wayne County |  | 13 | 11 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-yale-mi/ | St. Clair County |  | 17 | 15 | 0 | 0 | 2 | 97 | A | none material |
| /mortgage-lender-fraser-mi/ | Macomb County | yes | 11 | 10 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-lender-frenchtown-township-mi/ | Monroe County |  | 11 | 10 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-grosse-pointe-mi/ | Wayne County | yes | 9 | 8 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-luna-pier-mi/ | Monroe County |  | 8 | 7 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-marine-city-mi/ | St. Clair County |  | 11 | 10 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-lender-marysville-mi/ | St. Clair County | yes | 11 | 10 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-michigan/monroe-county/ | county hub | hub | 2 | 1 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-monroe-township-mi/ | Monroe County |  | 11 | 10 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-redford-township-mi/ | Wayne County |  | 12 | 11 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-river-rouge-mi/ | Wayne County |  | 10 | 9 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-lender-southgate-mi/ | Wayne County | yes | 10 | 9 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-michigan/st-clair-county/ | county hub | hub | 2 | 1 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-lender-utica-mi/ | Macomb County |  | 13 | 12 | 0 | 0 | 1 | 98 | A | none material |
| /mortgage-lender-van-buren-township-mi/ | Wayne County |  | 11 | 10 | 0 | 1 | 0 | 98 | A | millage (currency) (outdated P2) |
| /mortgage-lender-brownstown-township-mi/ | Wayne County |  | 12 | 12 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-bruce-township-mi/ | Macomb County |  | 12 | 12 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-clay-township-mi/ | St. Clair County |  | 11 | 11 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-fort-gratiot-township-mi/ | St. Clair County |  | 11 | 11 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-grosse-pointe-shores-mi/ | Wayne County | yes | 12 | 12 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-harrison-township-mi/ | Macomb County |  | 11 | 11 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-huron-township-mi/ | Wayne County |  | 12 | 11 | 0 | 0 | 1 | 100 | A | none material |
| /mortgage-michigan/macomb-county/ | county hub | hub | 2 | 2 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-plymouth-mi/ | Wayne County |  | 10 | 10 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-richmond-mi/ | Macomb County |  | 10 | 10 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-st-clair-township-mi/ | St. Clair County |  | 11 | 11 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-sterling-heights-mi/ | Macomb County | yes | 11 | 11 | 0 | 0 | 0 | 100 | A | none material |
| /mortgage-lender-woodhaven-mi/ | Wayne County |  | 12 | 12 | 0 | 0 | 0 | 100 | A | none material |

## 6. Implementation-ready fixes

### P0 and P1: exact replacement text (source-quality rows are listed after the table)

| # | Page | Claim | Current text (excerpt) | Status | Exact replacement | Priority |
|---|---|---|---|---|---|---|
| 1 | /mortgage-lender-highland-park-mi/ | millage (currency) | Page cites 2025 totals for Highland Park | outdated | 2026 homestead total (Wayne County 2026 apportionment): 47.042 mills with Highland Park | P0 |
| 2 | /mortgage-lender-highland-park-mi/ | millage (headline) | Highland Park City Schools covers the whole city, with 63.2210 homestead mills in 2025 | outdated | Highland Park City Schools covers the whole city, with 47.0420 homestead mills in 2026, down from 63.2210 in 2025 | P0 |
| 3 | /mortgage-lender-highland-park-mi/ | millage (non-homestead) | a home without a principal residence exemption is taxed at 79.2184 mills instead of 63.2210 | outdated | a home without a principal residence exemption is taxed at 62.8362 mills instead of 47.0420 (2026 rates) | P0 |
| 4 | /mortgage-lender-allen-park-mi/ | population (label) | Roughly 27,190 residents live here (28,533 at the 2020 Census ) | incorrect | About 27,400 residents live here (Census Bureau July 2025 estimate: 27,445; 28,638 at the 2020 Census) | P1 |
| 5 | /mortgage-lender-belleville-mi/ | ZIP codes (hero list) | ZIP codes 48111, 48112 | incorrect | ZIP code 48111 (48112 is a Belleville post office box ZIP)  /  1 Residential ZIP code: 48111 | P1 |
| 6 | /mortgage-lender-belleville-mi/ | property tax share (hero stat) | Property tax current owners pay: about 0.44% of value | incorrect | Property tax current owners pay: about 1.94% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 7 | /mortgage-lender-dearborn-heights-mi/ | millage (currency) | Page cites 2025 totals for Dearborn Heights | outdated | 2026 homestead total (Wayne County 2026 apportionment): 49.0183 mills with Dearborn; 49.6292 mills with Dearborn Heights No. 7; 46.0992 mills with Taylor; 50.6959 mills with Wayne-Westland; 51.7992 mills with Crestwood; 51.464 mills with Westwood | P1 |
| 8 | /mortgage-lender-detroit-mi/ | millage (neighbor) | Highland Park: 63.22 Close to Detroit's rate, with its own city and school levies. | outdated | Highland Park: 47.04 About 17 mills under Detroit's 2026 rate of 64.10, after the city's debt levy fell in 2026. | P1 |
| 9 | /mortgage-lender-detroit-mi/ | millage (neighbor) | 48203 ... the City of Highland Park, whose 2025 homestead total was 63.22 mills | outdated | the City of Highland Park, whose 2026 homestead total is 47.04 mills (63.22 in 2025) | P1 |
| 10 | /mortgage-lender-detroit-mi/ | internal coherence (prices) | up to about $395,000 downtown (48226) and $411,000 in Midtown (48201) | incorrect | up to about $365,000 downtown (48226) and $377,000 in Midtown (48201) | P1 |
| 11 | /mortgage-lender-detroit-mi/ | internal coherence (FAQ) | By ZIP code the median ran from about $144,000 in 48209 to about $377,000 in 48201 | incorrect | By ZIP code the median ran from about $45,000 in 48217 to about $377,000 in 48201, and each ZIP figure is thin enough to swing. | P1 |
| 12 | /mortgage-lender-emmett-mi/ | property tax share (hero stat) | Property tax current owners pay: about 0.31% of value | incorrect | Property tax current owners pay: about 1.81% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 13 | /mortgage-lender-emmett-mi/ | population | Emmett is a tiny farming village of roughly 258 people | incorrect | Emmett is a tiny farming village of about 240 people (2020 Census: 239) | P1 |
| 14 | /mortgage-lender-flat-rock-mi/ | property tax share (hero stat) | Property tax current owners pay: about 1.15% of value | incorrect | Property tax current owners pay: about 2.38% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 15 | /mortgage-lender-grosse-ile-township-mi/ | millage (currency) | Page cites 2025 totals for Grosse Ile Township | outdated | 2026 homestead total (Wayne County 2026 apportionment): 43.1573 mills with Grosse Ile | P1 |
| 16 | /mortgage-lender-grosse-pointe-woods-mi/ | millage (currency) | Page cites 2025 totals for Grosse Pointe Woods | outdated | 2026 homestead total (Wayne County 2026 apportionment): 54.0993 mills with Grosse Pointe | P1 |
| 17 | /mortgage-lender-grosse-pointe-woods-mi/ | Census ACS value (attribution) | the estimated median value sits near $373,339 ( Census QuickFacts ) | incorrect | the Census Bureau's 2020 to 2024 median owner value is $342,100 | P1 |
| 18 | /mortgage-lender-hamtramck-mi/ | ZIP codes (hero list) | ZIP code 48212 | incorrect | ZIP codes 48212, 48211  /  2 Residential ZIP codes: 48212, 48211 | P1 |
| 19 | /mortgage-lender-harper-woods-mi/ | millage (currency) | Page cites 2025 totals for Harper Woods | outdated | 2026 homestead total (Wayne County 2026 apportionment): 84.6248 mills with Grosse Pointe; 86.4649 mills with Harper Woods | P1 |
| 20 | /mortgage-lender-harper-woods-mi/ | property tax share (hero stat) | Property tax current owners pay: about 1.12% of value | incorrect | Property tax current owners pay: about 2.18% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 21 | /mortgage-lender-inkster-mi/ | millage (currency) | Page cites 2025 totals for Inkster | outdated | 2026 homestead total (Wayne County 2026 apportionment): 61.7537 mills with Romulus; 54.0042 mills with Taylor; 58.6009 mills with Wayne-Westland; 59.369 mills with Westwood | P1 |
| 22 | /mortgage-lender-livonia-mi/ | property tax share (hero stat) | Property tax current owners pay: about 0.76% of value | incorrect | Property tax current owners pay: about 1.37% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 23 | /mortgage-lender-melvindale-mi/ | millage (currency) | Page cites 2025 totals for Melvindale | outdated | 2026 homestead total (Wayne County 2026 apportionment): 68.9635 mills with Melvindale-Northern Allen Park | P1 |
| 24 | /mortgage-lender-melvindale-mi/ | property tax share (hero stat) | Property tax current owners pay: about 1.09% of value | incorrect | Property tax current owners pay: about 1.58% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 25 | /mortgage-lender-port-huron-mi/ | ZIP codes (hero list) | ZIP codes 48060, 48061 | incorrect | ZIP code 48060 (48061 is a Port Huron post office box ZIP)  /  1 Residential ZIP code: 48060 | P1 |
| 26 | /mortgage-lender-riverview-mi/ | millage (currency) | Page cites 2025 totals for Riverview | outdated | 2026 homestead total (Wayne County 2026 apportionment): 49.4351 mills with Riverview | P1 |
| 27 | /mortgage-lender-rockwood-mi/ | millage (currency) | Page cites 2025 totals for Rockwood | outdated | 2026 homestead total (Wayne County 2026 apportionment): 48.5697 mills with Gibraltar | P1 |
| 28 | /mortgage-lender-rockwood-mi/ | property tax share (hero stat) | Property tax current owners pay: about 1.08% of value | incorrect | Property tax current owners pay: about 1.92% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 29 | /mortgage-lender-romeo-mi/ | millage | Romeo Community Schools at 31.3006 homestead mills in Bruce Township and 31.2827 in Washington Township, and at 45.6482 and 41.5818 inside the village | unverifiable | Romeo Community Schools at 31.3006 homestead mills in Bruce Township and 32.9218 in Washington Township, and at 45.6482 and 45.6303 inside the village, all including township special assessments [VERIFY: Washington Township figures against Treasury 2025 Total Rates] | P1 |
| 30 | /mortgage-lender-romulus-mi/ | millage (currency) | Page cites 2025 totals for Romulus | outdated | 2026 homestead total (Wayne County 2026 apportionment): 48.2626 mills with Romulus; 45.1098 mills with Wayne-Westland; 47.6374 mills with Woodhaven-Brownstown | P1 |
| 31 | /mortgage-lender-st-clair-mi/ | property tax share (hero stat) | Property tax current owners pay: about 0.71% of value | incorrect | Property tax current owners pay: about 1.52% of value (Census ACS 2020 to 2024: median real estate tax divided by median owner value) | P1 |
| 32 | /mortgage-lender-sumpter-township-mi/ | millage (currency) | Page cites 2025 totals for Sumpter Township | outdated | 2026 homestead total (Wayne County 2026 apportionment): 29.687 mills with Airport; 37.2691 mills with Lincoln Consolidated; 33.8242 mills with Huron; 31.5381 mills with Van Buren | P1 |
| 33 | /mortgage-lender-warren-mi/ | ZIP codes (hero list) | ZIP codes 48088, 48089, 48090, 48091, 48092, 48093 | incorrect | ZIP codes 48088, 48089, 48091, 48092, 48093  /  5 Residential ZIP codes: 48088, 48089, 48091, 48092, 48093 | P1 |
| 34 | /mortgage-lender-washington-township-mi/ | millage | Michigan Treasury's 2025 homestead totals in the township are 31.28 mills with Romeo, 29.69 with Utica and 27.54 with Rochester | unverifiable | Macomb County's 2025 homestead totals in the township, including its 4.0485 mills of ambulance and fire special assessments, are 32.92 mills with Romeo, 31.33 with Utica and 29.18 with Rochester [VERIFY: page figures sit a constant 2.4094 mills above the county's pre-assessment rates; confirm against Treasury 2025 Total Rates] | P1 |
| 35 | /mortgage-lender-westland-mi/ | millage (currency) | Page cites 2025 totals for Westland | outdated | 2026 homestead total (Wayne County 2026 apportionment): 49.5485 mills with Garden City; 47.1427 mills with Livonia; 50.9873 mills with Romulus; 43.2378 mills with Taylor; 47.8345 mills with Wayne-Westland | P1 |
| 36 | /mortgage-michigan/wayne-county/ | first-year tax table | City of Highland Park +183% about $6,130 | outdated | City of Highland Park +183% about $4,560 (2026 millage) | P1 |

**Source-quality fixes (P1, 23 pages):** remove the World Population Review links and figures on Algonac, Allen Park, Belleville, Capac, Carleton, Dearborn Heights, Eastpointe, Flat Rock, Garden City, Highland Park, Inkster, Lincoln Park, Melvindale, Monroe, Morenci, Northville, Romulus, St. Clair Shores, Tecumseh, Warren and Wyandotte. Remove the Ownwell citations on Emmett and St. Clair. Replace each with the Census July 2025 estimate; the exact sentence is in the CSV `corrected_text_exact` column. **P2:** replace the Data USA (22 pages), Wikipedia (50), City-Data (Britton, Maybee) and Business View (Center Line) citations with the underlying primary source.

### P2 summary (full text in the CSV)
- Refresh every "2025" millage set to 2026 on the 31 Wayne, Monroe and Lenawee pages that moved 0.5–1 mill, and on the Monroe village pages. Each CSV row carries the 2026 values.
- Relabel 8 "Census Bureau's 2024 estimate" population figures to the July 2025 estimate (Canton 99,700, Chesterfield 47,800, Clinton Twp 101,400, Macomb Twp 95,100, Northville Twp 31,400, Plymouth Twp 27,100, Shelby Twp 80,400; Dearborn 105,600).
- Put special assessments on one basis: Algonac (38.2823 city), Flat Rock (Berlin 35.0364), and the Washington Twp village row (45.63).
- Add Hamtramck's rates (1% / 0.5%). Add a city-income-tax line to the Wayne hub (Detroit, Highland Park, Hamtramck), the St. Clair hub (Port Huron) and the Lenawee hub (Hudson).
- Memphis eyebrow: "Macomb and St. Clair counties, Michigan". New Haven: drop 48050 from the village's ZIP list. Wayne hub: "43 communities", not 44. Gibraltar: 48173 income $94,100. Grosse Pointe Woods: 93.2% of 6,604 units. Detroit: 53 days; "July 2025 estimate".
- Add a source line under the property-tax-share stat on the 15 pages where it already equals the ACS ratio; on the other 40, replace the value with the ACS ratio given in the CSV.
- Build `/mortgage-lender-adrian-mi/`, the missing Lenawee county seat. Its 2026 homestead total is 41.4509 mills (Adrian schools) and 39.0509 (Madison).

## 7. Recommended data-refresh process

**One record per municipality, rendered everywhere.** Keep a single data file (CSV/JSON in the build repo or an ACF options table) keyed by Census GEOID. Fields: county or counties with population split; ZIP list from ZCTAs, with land shares; population (value + vintage + label); millage by school district (year, homestead, non-homestead, with-special-assessment flag); ACS values (vintage); uncapping %; city income tax; typical value (source + window). The hero, the "By the numbers" block, the FAQ answers and the hub tables should read from that record instead of hand-typed numbers. That removes the Detroit-type conflicts at the root.

**Annual calendar (owner: a named data steward; copy changes go to Samantha for approval as usual):**

| When | Refresh | Source | Pages affected in this group |
|---|---|---|---|
| Late Nov → Jan 1 | FHA floor and conforming limit; change "2026" to "2027" | [FHFA](https://www.fhfa.gov/data/conforming-loan-limit), HUD mortgagee letter | 96 |
| Oct–Dec | Current-year millage from county apportionment reports (Wayne, Macomb, St. Clair, Monroe, Lenawee); Treasury Total Rates when published | County equalization pages listed in section 2 | all 95 + hubs |
| March (counties), May (cities/townships) | Population estimates: replace every "2024 estimate" label and every World Population Review figure | Census `sub-est20YY_26.csv` | 99 population rows |
| May–June | Uncapping Study (SEV/TV) → the "Taxable value rises X%" stat and first-year-tax tables | State Tax Commission equalization data | 96 + hubs |
| Mid-December | ACS 5-year release (2021-2025 arrives Dec 2026): owner median, tax ratio, units, income | ACS table-based summary files | about 1,970 figures |
| June (or on MSHDA notice) | MI Home Loan price cap and MI 10K terms | [MSHDA](https://www.michigan.gov/mshda/homeownership/mi-home-loan) | 77 |
| January | City income tax list and rates | [Treasury list](https://www.michigan.gov/taxes/questions/iit/accordion/general/what-cities-impose-an-income-tax) | Detroit, Hamtramck, Highland Park, Hudson, Port Huron + hubs |
| Quarterly | Redfin/Zillow price windows (keep the date in the sentence) | Named, unlinked | all |

**Pre-publish validators** (the checks used for this audit, ready to port into CI):
1. Every hero ZIP must be a Census ZCTA that intersects the municipality; flag ZIPs that hold at least 5% of municipal land but are missing.
2. Every millage figure must equal a county-certified total for the stated year, on the stated basis (with special assessments), within 0.0001.
3. Every "2020 Census" population must equal the PL 94-171 count; every "estimate" must name its vintage.
4. Hero = stats block = FAQ for value, uncapping %, tax share and ZIP count; one price per ZIP per page.
5. Blocked source domains: worldpopulationreview.com, ownwell.com, datausa.io, city-data.com, movoto.com, homes.com, wikipedia.org (cite the primary source instead).
6. "Property tax current owners pay" is computed only as ACS B25103 ÷ B25077, with the source line rendered under it.
7. A visible "Figures checked [month year]" line in each data section, which already exists in the Sources block, plus a per-section "Data year" label.

## 8. Unverifiable items and open questions

- **Lenawee 2025 millage (276 figures, 9 pages):** no county 2025 table online and the Treasury PDF is blocked here. The values sit between the county's 2024 and 2026 totals; the CSV gives the 2026 replacement text.
- **St. Clair "Anchor Bay" and "Armada" rows** (Ira, Casco, Riley Townships; Algonac, New Baltimore and Memphis pages) sit exactly 1.6992 mills below the county's report amended on December 10, 2025. The pages may reflect the pre-amendment or Treasury figure. Verify against Treasury's 2025 Total Rates.
- **Washington Township** figures sit a constant 2.4094 mills above the county's pre-assessment rates, which matches neither the county's 4.0485-mill special-assessment total nor zero. Verify against Treasury.
- **Detroit Land Bank** "progress photos every 45 days" (buildingdetroit.org not reachable); **Hudson Ordinance 190 (1971)** (city code not reachable); **Toledo 2.5%** income tax (Ohio source not fetched). The rates and rules are consistent with known law, but the specifics were not independently confirmed.
- Block-group and home-count shares ("about 62% of 48065 homes") need block-level ZCTA assignment and were not recomputed.
- Out-of-county neighbor rates (Oakland: Troy, Novi, Ferndale, Southfield; Lapeer; Sanilac; Washtenaw) were not checked.

## Auditor corrections

*Independent audit, 2026-11-15. Full detail: `08-audit/audit-city.md`; exact row changes: `08-audit/corrections-city.csv`.*
**Verdict: PASS WITH CORRECTIONS.** The Highland Park 2026 rates (47.0420 / 62.8362; the debt levy fell from 21.22 to 5.40) and every sampled 2026 Wayne rate reproduce from the county's 2026 apportionment report: Detroit 64.1017, Grosse Pointe Woods, Harper Woods, Sumpter, Westland and Romulus. Also confirmed against primary files:
- Allen Park 28,638 / 27,445; Grosse Pointe Woods $342,100
- Hamtramck 48211 (18.9% of land); P.O. Box ZIPs 48112, 48061 and 48090; New Haven 48050
- Memphis's two counties; the Detroit price conflicts; Adrian's missing page

1. **Emmett population: REFUTED.** The 2020 Census count (PL 94-171 POP100) is **258**, exactly what the page says. 239 is the Census estimates base. Withdraw the correction (optional V2025 relabel: about 240 residents, July 1, 2025).
2. **Tax-share standard was looser than group 1's.** 31 group-2 pages deviate from the ACS ratio by more than 0.25 point and 14 by ≥0.5 point. Only 8 were marked incorrect; the rest were "unverifiable P2". Re-grade under the unified standard: River Rouge 1.52 vs 2.43, Trenton 1.41 vs 2.00, Riverview, Blissfield, Romulus, New Haven and Allen Park become P0, and the 8 flagged pages move P1 → P0. Use one decimal (ACS medians do not support two). Suppress Emmett (margin 57% of the estimate).
3. **Highland Park: P0 → P1-high.** Every instance is labeled "2025" and is true for 2025. Page score 56 (F) → 66 (D), which lifts the G2 cap.
4. **Millage currency (43 pages):** do not rewrite tables into mixed years. Add one dated 2026 sentence only where the certified rate moved ≥1.0 mill (12 Wayne pages, including Highland Park). Refresh everything else when Treasury publishes its 2026 Total Rates. `current_value` must quote the on-page sentence; "Page cites 2025 totals for X" is a description, not text that can be replaced.
5. **Instruction-only rows** (World Population Review, Data USA, Wikipedia) are made exact in the CSV. For example, Wyandotte becomes "about 24,100 residents (U.S. Census Bureau estimate, July 1, 2025)".
6. **Score:** the group's 93 (A) → **81 (B)**. Sample re-scores: River Rouge 98 → 65, Trenton 97 → 65, Belleville 76 → 60, Hamtramck 89 → 65 ("sought-after ... enclave" is a §6 word), Emmett 78 → 65, Sterling Heights 100 → 88, Port Huron 90 → 80, Detroit 69 → 65, Grosse Pointe Woods 82 → 78.
7. **Missed findings:**
   - §6 fair-housing words on Britton, Hamtramck, Maybee, South Rockwood, Wyandotte and Yale.
   - "Talk with a local mortgage expert" on every page (F15).
   - No government non-affiliation line.
   - Northville's breadcrumb should be Oakland, the majority county. Group 1 owns that page's score.
