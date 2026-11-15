# Independent audit: Content & Keyword analysts (05-content-keywords)

**Auditor:** independent content auditor · **Date:** 2026-11-15 · **Scope:** `blog-inventory-report.md` + `blog-inventory.csv` + `gsc-queries-top1000.csv` (analyst 1), `gsc-gap-report.md` + `gsc-queries-full.csv` + `gsc-opportunities.csv` + `gsc-blog-candidates.csv` (analyst 2), `competitor-gap-report.md` + `keyword-gaps.csv` + `paa-question-bank.csv` + `ai-visibility.md` (analyst 3). The content strategist's `content-plan.md`, `blog-plan.csv` and briefs were not audited (consistency team).
**Corrections file:** `08-audit/corrections-content.csv` (one row per fix, with exact corrected text).

**Method.**
- **Recomputed with python (stdlib)** from `$DATA/page_summary.csv`, `pages.jsonl`, `text/`, `link_graph.json`, the learn-sitemap lastmod file the inventory analyst saved (`scratchpad/inv/lastmod.json`), and the analysts' own CSVs.
- **Re-queried DataWise GSC** (property `7faa6221…`, free): overview at 30 and 90 days, plus 12 query searches ("lease to own", "conveyance", "usda elig", "usda loan", "mortgage broker", "personal loan", "mshda", "property tax calculator", "homestead", "pre approv", "pre-approv", "first time home buyer").
- **One paid `datawise_keyword_metrics` call** (a first attempt failed and returned no data; 2 calls in total, under the cap of 3) covering 6 keywords.
- **Not re-run:** no other paid DataForSEO tool. Claims that rest only on paid calls (competitor ranked keywords, AI tracker, AI mentions) are marked **Not reproduced** and checked for internal consistency only.

---

## 1. Verdicts

| Analyst | Verdict | One-line reason |
|---|---|---|
| **1. Blog inventory** | **PASS WITH CORRECTIONS** | The headline counts reproduce exactly (424 articles, median 5,604 words, lastmod 2026-10-11 to 11-14, 50,180 impressions / 4 clicks, "lease to own" 22.2%, 61 groups / 87 merges, 38 prunes, 2026 figures on 123/54/73 pages). **Three claims are refuted:** Samantha quotes appear on **142** articles, not 5; mansion is not the only off-topic page with a click; the amortization canonical is the wrong URL. One recommended fix rests on the refuted claim and must be re-scoped. |
| **2. GSC gaps** | **PASS WITH CORRECTIONS** | Every GSC figure checked reproduces exactly (+287%, position 24.0→32.8, 79.5%, 8 clicks / 10,665 impressions, the USDA "as low as 1%" meta, "conveyance" 1,123 @1.3). **One P0 item is refuted:** the legacy posts it says need 301s already 301 in one hop. The scorecard labels outcome KPIs as rubric aspects; 3 scores sit more than 5 points from the anchors. Several rewrites need content fixes. |
| **3. Competitor & AI gaps** | **PASS WITH CORRECTIONS** | The volumes reproduce (12,100 / KD 22; 9,900 / KD 13; 880; 590; 3,600 / KD 5), as do the GSC positions and the Align research figures. **Refuted:** "no Dataset schema" on the research pages, and the premise of a new DTI calculator tool. **Compliance fixes needed** in the AEO playbook (a trigger term on product pages, an unverified award in schema, the Michigan taxable-value wording). Two new posts duplicate existing pages. |

**Counts:** 66 findings checked: **33 confirmed, 23 corrected, 7 refuted, 3 not reproduced** (paid-only data). Recommendation samples: 20 title/meta rewrites, 15 merge/prune decisions, 15 PAA H2 mappings, and every P0 across the three analysts (§3).

---

## 2. Checked-findings table

Status: **C** confirmed · **Corr** confirmed in part, corrected · **R** refuted · **NR** not reproduced (paid tool, no raw output saved).

### 2.1 Blog inventory (analyst 1)

| # | Claim | Auditor evidence | Status |
|---|---|---|---|
| BI-1 | 424 articles (421 + 3 glossary answers), 49 hubs | `blog-inventory.csv` page_type: article 421, glossary-answer 3, hub 49; 473 `/learn/` URLs in `page_summary` | C |
| BI-2 | Median 5,604 words, range 1,285–6,511, 2.35M total | Recomputed from `page_summary.word_count`: median 5,604, min 1,285, max 6,511, sum 2,353,892 | C |
| BI-3 | Learn sitemap lastmod 2026-10-11 to 2026-11-14 | `inv/lastmod.json`: 472 URLs, min 2026-10-11, max 2026-11-14. (`pages.jsonl` published/modified are null for all Learn pages, so the sitemap is the only date source.) 372 pages show "Updated October 2026" and 97 show "Updated November 2026". | C |
| BI-4 | 50,180 mapped impressions and 4 clicks; position ~47; 76 queries in the top 10 and 57 at 11–20 | `gsc-queries-top1000.csv`: 737 rows count toward articles (51,121 impressions, of which 50,180 are on articles and the rest on hubs), 4 clicks, weighted position 47.0, 76 / 57 | C. Note: this is a floor. GSC page-level data shows **at least 11 Learn clicks** in 90 days (lease-to-own 3, usda-loan-basics 2, mixed-use 2, and 1 each on refinancing-with-bad-credit, dual-agency, mansion and senior-housing). |
| BI-5 | "lease to own" 15,242 impressions @59.8 = 22% of top-1,000 impressions | DataWise re-query: 15,242 @59.8, 0 clicks. Top-1,000 total 68,632, so 22.2% | C |
| BI-6 | Lease to own is split "across 3 near-duplicates" | 5-word shingle Jaccard against the canonical: 0.085 (`navigating-lease-to-own-agreements`) and 0.088 (`lease-option-agreements-pros-and-cons`). These are **intent overlaps, not near-duplicate text**. The merge is still defensible for one head term. | Corr |
| BI-7 | FHA/VA/USDA/conventional/jumbo = 20 articles (~5%) with 27% of impressions | The arithmetic holds for the analyst's cluster labels (5+6+2+5+2 = 20; 13,520 / 50,180 = 26.9%). But program-led articles filed under refinance, credit or news (VA IRRRL, FHA streamline, USDA streamline, jumbo refinance, FHA/VA/USDA updates) bring the count to **about 28–32 (7%)**, with **about 32%** of impressions. The direction holds; the number is understated. | Corr |
| BI-8 | 68 off-topic (drift) articles | CSV relevance: core 186, adjacent 170, drift 68 | C |
| BI-9 | 61 duplicate groups, 87 articles to merge | 62 group labels (61 multi-member plus 1 singleton); member arithmetic 148 − 61 = 87; 88 MERGE article rows (87 + `how-to-compare-loan-estimates`) | C (count). Sample quality is in §5.2: 6 of 10 groups are sound, 4 need changes. |
| BI-10 | 38 prunes plus 1 noindex are drift with no meaningful demand | Checked all 39 rows against `gsc-queries-full.csv`: 34 have 0–25 impressions. The largest are crowdfunding (430, 0 clicks), water damage (72) and roof (61). All are genuinely off-topic. | C |
| BI-11 | "`definition-of-mansion…` is the only off-topic page that has earned a click" | GSC page-level (90 days): `benefits-of-investing-in-mixed-use-developments` **2 clicks** / 57 impressions, `benefits-of-investing-in-senior-housing-markets` **1 click** / 26 impressions. Both are on the PRUNE list. | **R** |
| BI-12 | 254 pages carry 2026 figures; $832,750 on 123 pages, $541,287 on 54, $1,249,125 on 73 | CSV stale_year flag = 254. Text scan of all 473 Learn URLs: 123 / 54 / 73, exact | C |
| BI-13 | Rate-forecast content contradicts the `/learn/` promise "No rate quotes, no predictions" | `/learn/` text contains "No rate quotes, no predictions". `housing-market-outlook`: H2 "Where will mortgage rates be in 2026?" is answered in Align's voice ("Mortgage rates are forecast to average about 6% to 6.5% in 2026…"), and the meta says "mortgage rates near 6%". No never-link domains are linked. | C |
| BI-14 | `mortgage-rate-predictions` contradicts the policy (P0 re-angle, "strip forecast numbers") | The H1 is already "…who publishes them, how they are built, and how often they miss". The body reports **sourced third-party** forecasts and historical PMMS data, not Align predictions. Only the title ("What Forecasters Expect") conflicts. **Title-only fix, P1.** | Corr |
| BI-15 | Samantha's voice "on 5 of 424 pages" | A verbatim scan for 22 quote-bank quotes (guide §10.3) finds them in **142 of 424 articles**; 153 articles have "Samantha … puts it / says". The same quote repeats heavily: "only works when nothing goes wrong" on 33 pages, "somebody else's tax bill" on 27, "financing the plan for the house" on 22. 26 of the top-40 impression articles carry no quote. | **R** |
| BI-16 | No reviewer is named | The regex "reviewed by / fact-checked by / edited by" matches only body text ("should be reviewed by a licensed real estate professional…"). No reviewer line exists. | C |
| BI-17 | Head terms missing in titles, including "lease to own" | The canonical's title starts "Lease-to-Own Vs. Rent-to-Own…", so the head term **is** first. The issue is intent framing (comparison vs. definition), not a missing keyword. The USDA ("usda loans") and VA requirements cases hold. | Corr |
| BI-18 | 82% of titles have casing errors; 97% of metas are 140–160 | Recomputed: 84% of titles have Title-Case small words; metas: 410 of 424 (96.7%) | C |
| BI-19 | Amortization canonical = `/learn/mortgage-amortization/` (absorb `amortization-schedules`) | GSC overview (page-attributed, not inferred): "amortization" 315 @14.5 ranks **`/learn/amortization-schedules/`**. The inventory credited the query to the other URL by inference. GSC report R13 has it right. | **R** |
| BI-20 | New guides #3 (USDA eligible areas), #4 (conforming-limit page), #16 (HELOC vs. HE vs. cash-out), #20 (estimating Michigan property taxes) | Each duplicates an existing asset: `/usda-eligibility-check/` (GSC routes "usda eligibility" there), `/loan-limits/` (already shows conforming limits by county), `/refinance/cash-out-vs-home-equity/` (the inventory itself calls #16 "the Learn version"), and `/michigan-property-tax-calculator/` (which competitor R1 is refreshing for "estimator"). That recreates the Learn-vs-money cannibalization the inventory's finding 10 warns against. | Corr |
| BI-21 | 95 of 96 legacy posts 301 in a single hop | `link_graph.sitemap_or_crawled_urls_that_redirect`: 96 entries, all single 301s | C |
| BI-22 | Merge targets for the fixed-rate and market-type groups ("0 impressions") | `fixed-rate-mortgage-options` is the GSC-attributed page for "15 year fixed mortgage" (60 @16.9, 30-day opportunities), so its intent is term comparison, not "benefits". In market-type, "what is a seller's market" is a distinct definitional query (shingle overlap 0.011 with the canonical). | Corr |

### 2.2 GSC gaps (analyst 2)

| # | Claim | Auditor evidence | Status |
|---|---|---|---|
| GG-1 | Impressions +287% in 30 days; position 24.0 → 32.8 | DataWise overview (30 days): 134,261 vs prev 34,706 (+286.9%); avg position 32.8 vs prev 24 | C |
| GG-2 | 90 days: 416 clicks, 181,048 impressions; prior 90 days only 418 impressions | Overview summary 416 / 181,048; range prev_impressions 418 | C |
| GG-3 | 79.5% of on-topic impressions at position ≥21; 10.1% in the top 10 | Recomputed on `gsc-queries-full.csv` excluding brand and drift: 79.6% (position > 20) and 10.1%. The base 68,975 = 84,267 − 2,687 brand − 12,605 drift. | C |
| GG-4 | Non-brand top-10 queries: 8 clicks from 10,665 impressions | Recomputed exactly: 462 queries, 10,665 impressions, 8 clicks | C. Note: the query table holds only 87 of the 416 clicks, so every "0 clicks" statement is a floor. |
| GG-5 | USDA basics meta says "subsidized rates as low as 1%" | `pages.jsonl` meta_description: "See how USDA loans work: zero down payment, 115% area-median income limits on Guaranteed loans, and Direct loans with subsidized rates as low as 1%." Verbatim. It **also** carries "zero down payment" (a conservative-practice trigger term, guide §7.2). | C |
| GG-6 | "conveyance" 1,123 impressions @1.3, 0 clicks | DataWise re-query: identical | C |
| GG-7 | Page attribution is inferred; DataWise queries return no page dimension | The queries endpoint returned no page field in 12 calls. Only overview "opportunities" carry a page; 50 of 2,968 rows have a GSC page. | C |
| GG-8 | "usda eligibility" 576 @11.1 lands on the learn article, not the tool | Overview (90 days): page `/learn/usda-loan-basics/` (GSC-attributed) | C |
| GG-9 | Legacy root posts "with canonicals to /learn/ still rank… canonicals are being ignored, so use 301s" (P0) | `pages.jsonl` redirects: `/well-water-home-value/`, `/hoa-fees-guide-2/`, `/conveyance-real-estate-explained/`, `/lease-to-own-vs/` and the rest **already 301 in one hop** to their `/learn/` targets. The residual impressions fall inside the 90-day window from before or during the redirect. | **R** |
| GG-10 | Legacy ZIP URLs (Flint, Wixom, Farmington Hills) still rank | GSC overview attributes "flint mortgage" and "mortgage broker wixom mi" to the `/mortgage-location/` URLs. Per the brief, all 293 already 301. The action is recrawl / IndexNow / internal-link cleanup, not "301 them". | Corr |
| GG-11 | Lease to own 16,051 across 38 queries; USDA family 11,392; VA 7,965 | Cluster sums: 16,051; 11,416; 8,055 | C |
| GG-12 | Two pages drove the surge (lease-to-own 14,548 in 90 days, 62% in the last 30; USDA 10,182, 96%) | Overview top pages: 14,548 (9,002 in 30 days = 61.9%); 10,182 (9,738 = 95.6%) | C |
| GG-13 | "431 of [471 /learn/ URLs] are articles of 4,000+ words (median 5,572)" | 433 Learn URLs ≥4,000 words (hubs included), median 5,602. The library has 424 articles. The figure conflicts with analyst 1. | Corr |
| GG-14 | Scorecard: "Title & meta: CTR health 30", "AI-search readiness 58", "Intent 68" | These score ranking and click **outcomes**, not the rubric anchors (§4) | Corr |
| GG-15 | 33 P0 opportunities | 33 rows collapse to **12 unique actions**: home retitle ×6 rows, DSCR post ×6, USDA income limits ×6, USDA DTI ×5, lender-comparison post ×3, plus single rows for conveyance, usda eligibility, refinancing options, USDA rural development, amortization, lease to own and VA benefits | Corr |
| GG-16 | 38 title/meta rewrites follow the length rules | Parsed and measured: every title ≤60 and every meta 140–160; the stated counts are accurate | C |
| GG-17 | Rewrite content is accurate and compliant | 9 need fixes: LTV "calculator" (none exists on the page); 3/7/3 meta (the third "3" is the Closing Disclosure rule); "local broker" (Dearborn) and "local loan officer" (Ann Arbor) imply an office; VA "capped closing costs" and "waiver" (VA limits certain fees; the disability term is an exemption); "2026" in 4 limits/eligibility metas that go stale with the FY/CY2027 releases; home meta attributes the lender comparison to Samantha personally (guide §10.1 says "Verify before generalizing"); `jumbo-loan-tips` is the page analyst 1 merges away. | Corr |
| GG-18 | N22: no page covers well/septic lender rules | `/learn/buying-home-with-septic-system/` has H2s "What does an FHA appraiser check on a septic system?" and "What does USDA's regulation say about a private septic system?". `/learn/how-well-water-impacts-homes-value/` has "How lenders and appraisers treat a home on a well" and "What changed for FHA well distances in 2026?" | **R** |
| GG-19 | N20 DSCR post targets "dscr loans michigan" | That is the commercial query the money page `/product-loans/dscr-loans-michigan/` should own. A Learn post with the same primary query (and, in analyst 1's version, the same slug stem `/learn/dscr-loans-michigan/`) would cannibalize it. | Corr |
| GG-20 | Inferred page mappings are a reasonable best match | Sample of 14 inferred rows (≥40 impressions, on-topic): 12 plausible, 2 wrong ("new york fha mortgage limits" → `/mortgage-lender-york-township-mi/`; "best mortgage lenders in michigan" → the Rocket comparison article, while analyst 3's DFS data shows `/mortgage-michigan/`). Analysts 1 and 2 disagree on **265 of 810** shared inferred mappings (33%), and several of analyst 2's are implausible ("refinance home" → `tips-for-refinancing-vacation-home`; "va loan eligibility" → `benefits-of-va-construction-loans`). | Corr |
| GG-21 | "personal loans" 1,657 @4.5, 0 clicks | DataWise re-query: identical | C |

### 2.3 Competitor & AI gaps (analyst 3)

| # | Claim | Auditor evidence | Status |
|---|---|---|---|
| CG-1 | 459 ranked keywords at average position 59.3, ~37 visits a month | Paid `datawise_competitors`; no raw output saved. "37 visits" is DataForSEO's modeled estimate; GSC shows **241 clicks in the last 30 days**. Label it as a DFS estimate. | NR (label corrected) |
| CG-2 | "michigan property tax calculator" 9,900/mo, KD 13; Align at 48.8 | keyword_metrics: 9,900, KD 13. GSC: 77 impressions @48.8 | C |
| CG-3 | Michigan pre-approval topic at 12,100/mo, KD 22 | "how to get pre approved for a home loan" = 12,100, KD 22, but that is the **national** query. "michigan mortgage pre approval" = **0** volume. GSC "michigan mortgage pre-approval" = 23 impressions @1.9. | Corr |
| CG-4 | "michigan homestead exemption" 880 / PRE 590, KD 0; Align 22.8–29.9 with a "generic multi-state page" | Volumes and KD confirmed; GSC 4 @22.8 and 8 @29.9 confirmed. But the page is Michigan-heavy: 89 "Michigan" mentions, Form 2368, and 6 Michigan H2s, against 14 Texas / 13 Florida mentions. | Corr |
| CG-5 | "michigan first time home buyer programs" 3,600, KD 5; Align does not rank | keyword_metrics 3,600, KD 5; GSC "first time home buyer" search shows no Michigan program query | C |
| CG-6 | Not one GSC query contains "mshda" | DataWise search "mshda": 0 rows | C |
| CG-7 | Cited on 4 of 12 tracked prompts; none for uncapping | Paid tracker. Internally consistent: the per-prompt table shows ChatGPT 2, Gemini 1, Perplexity 2 = 5 of 48 checks, and uncapping is absent on all engines. (The share-of-voice "10 citations" is not reconciled with the 6 cited URLs listed.) | NR |
| CG-8 | riverbankfinance.com 785 Google AI mentions vs Align's 19 | Paid `ai_mentions`; cited on 7 of 12 prompts, which matches the table | NR |
| CG-9 | All 4 research pages have `faq_q = 0` and **no Dataset schema** | `faq_q = 0` confirmed. But `/research/michigan-property-tax-uncapping-study/` and `/research/michigan-mortgage-market-report/` **already carry `Dataset`, `DataDownload` and `Report`** (`pages.jsonl schema_types`) | **R** |
| CG-10 | Uncapping figures: 50.5% (2026), 9% (2013), 37% Monroe to 92% Charlevoix, 83 counties, 1,534 places, CC BY 4.0 | All present in `research__michigan-property-tax-uncapping-study` text | C |
| CG-11 | HMDA: 22.6% denied, 15.5% purchase, home equity about twice as often, 364,013 applications | All present in the market report text | C |
| CG-12 | 469 of 471 Learn pages have FAQ schema; 466 have SpeakableSpecification | 471 of 473 FAQPage; 468 Speakable | C |
| CG-13 | 65 of 221 PAA questions (29%) map to NEW posts | 65 / 221 = 29.4% | C |
| CG-14 | N2: new "Michigan first-time home buyer programs and grants" pillar | Missed the existing `/learn/first-time-home-buyer-grants-and-programs/` (32 MSHDA and 12 MI 10K mentions, H2 "What Michigan buyers should know about MSHDA assistance", and "Is there a $25,000 federal first-time buyer grant?"). It is not mentioned anywhere in analyst 3's files. Refresh it; do not create a new URL. | Corr |
| CG-15 | N27: new DTI calculator tool `/debt-to-income-calculator/` | `/learn/debt-to-income-ratio-dti/` already says "How do you use the DTI calculator on this page? The calculator below runs…". The gap is the title, not the tool. | **R** |
| CG-16 | A3 FHA entity template for product pages | It puts "FHA allows 3.5% down with a 580 credit score" on money pages (guide §7.2 writer rule 1: no trigger terms on money pages) and claims "Samantha Shelton reviews every file" (unverified; §10.1 says "Verify before generalizing", and CanvasRebel reports 20 LOs) | Corr |
| CG-17 | A7 Person `award` = "Hall of AIME", "NAMB Broker of the Year", "Woman with Vision" | NAMB is **Verify** status ("Do not use in new copy", PM-07). The approved form is "Women With Vision" (2023). Approved awards that are missing: MPA 2025 Elite Women, HousingWire 2024 Rising Star. | Corr |
| CG-18 | R1 and A1 answer blocks | R1 says "resets to half of market value", which is not the required Editorial Policy wording ("state equalized value, half of the assessor's market value, not automatically half the price you paid", guide §7.6). A1 is close but omits the last clause. | Corr |
| CG-19 | N1 destination "then app.alignlending.com" | The brief says app.alignlending.com is not linked from any page, and Apply goes to `/start/` | Corr |
| CG-20 | PAA H2 mappings | Sample of 15: 10 sound, 5 need changes (§5.3). Across the bank: **7 questions map to pages being merged** and **2 VA "no down payment" questions map to `/product-loans/va-loans/`**, which puts a trigger term on a money page | Corr |
| CG-21 | N6: non-warrantable condo is a gap with "0 GSC impressions" | `/learn/condominium-financing/` already has H2 "How do you finance a non-warrantable condo?" (18 mentions), and analyst 1 rates condo financing "Covered well". A new URL is defensible for "what is a non-warrantable condo" (1,600, KD 0) only with one owner per intent. | Corr |
| CG-22 | keyword-gaps.csv internal consistency | 4 rows map to pages analyst 1 merges away (`loan-comparisons` ×2, `construction-to-permanent-loans`, `buying-home-with-low-down-payment`). "best place to get pre approved" is 590 in the CSV but 720 in the report. | Corr |
| CG-23 | R4 MSHDA answer figures | "up to $10,000" and "$566,355" match guide §3.3 (2026 values in use). 640 carries [VERIFY]. "Lends" is the right verb (MI 10K is a loan, not a grant). | C |

---

## 3. P0 verification (every P0 across the three analysts)

| Source | P0 item | Verdict | Note |
|---|---|---|---|
| Inv #1 / GSC R03 | Lease-to-own canonical refresh + retitle | **Confirmed** | Use one title: analyst 1's "Lease to Own a Home: How It Works vs. Rent to Own" (49). GSC's "Lease to Own Homes: How It Works…" is ungrammatical. Drop GSC's "301 `/lease-to-own-vs/`" (already a 301). |
| Inv #2 / GSC R01 | USDA basics: retitle, remove the rate meta | **Confirmed** (meta verbatim) | The analysts give conflicting titles. Resolved: "USDA Loans in Michigan: How Rural Development Loans Work" (56). Analyst 1's "…Eligibility, Income Limits, Costs" would cannibalize the new income-limits guide. Use GSC's meta (157). |
| GSC | Re-point "usda eligibility" to the tool | **Confirmed** | GSC attributes the query to the article. Retitling the tool and linking from the article is sound. |
| GSC | Apply the 25 CTR rewrites + striking titles | **Confirmed with corrections** | 9 content fixes (§5.1). 11 of the target pages belong to the core-pages or city teams, which already propose different titles (§6). |
| GSC | 301 legacy ZIP URLs and legacy duplicates | **Refuted as written** | Already single-hop 301s. Replace with: submit the old URLs via IndexNow / GSC URL Inspection, and remove the remaining internal links to redirects. |
| GSC N01 / Inv new #2 | USDA income limits in Michigan | **Confirmed** (same topic, double-listed) | Title year conflict: "for 2026" (GSC) vs FY2027 (Inv). Use "USDA Income Limits in Michigan by County (FY2027)" (49) with [VERIFY: USDA RD FY2027 limits]. |
| GSC N02 | USDA DTI limits | **Confirmed** (312 impressions; "usda max dti" 80 @19.8 on the generic DTI page, GSC-attributed) | Consider folding N03 (USDA credit) into it; see §7. |
| GSC N20 / Inv new #8 | DSCR guide | **Corrected** | Keep it, but target the informational intent ("how DSCR loans work", "DSCR ratio"), use the slug `/learn/how-dscr-loans-work/`, and leave "dscr loans michigan" to the money page. Priority P1. |
| GSC N27 / Comp #14 | How to compare/choose a Michigan lender | **Confirmed** (double-listed) | One post. Destination `/` is fine; no rankings, no lender names linked. |
| Inv #3 | FHA loan limits refresh to 2027 | **Confirmed** (timing-based) | **Conflict:** GSC proposes a "FHA Loan Limits 2026" title now. Hold until HUD's CY2027 Mortgagee Letter, then use "FHA Loan Limits 2027: Michigan Limits by County" (47). Same rule for `/loan-limits/`. |
| Inv #4 | Jumbo refresh + merge `jumbo-loan-tips` | **Confirmed with correction** | GSC rewrites the page that this item 301s. Keep `how-to-qualify-for-jumbo-loan` as canonical with the title "Jumbo Loans in Michigan: Requirements and How to Qualify" (56) and GSC's jumbo meta (154). Fold GSC N16 in as an H2. |
| Inv #5, #6 | Conventional hub limit + FHFA tracker | **Confirmed** | "What are the 2026 conventional loan limits?" H2 and GSE pages verified |
| Inv #7 | `housing-market-outlook` | **Confirmed**, but timing corrected | "In January" is not P0. Interim fix now: replace the meta and rename the H2 (exact text in the CSV). Publish the 2027 version in January. |
| Inv #8 | `mortgage-rate-predictions` re-angle | **Corrected → P1** | Title change only (56); the body already reports sourced third-party data |
| Inv #9 | Expand `usda-and-assistance` | **Corrected** | Add the income-limits and MSHDA guides. Drop the eligible-areas guide (the tool owns it). |
| Inv new #1 / Comp #3 | MSHDA MI Home Loan + MI 10K | **Confirmed** (double-listed; 0 GSC "mshda" queries) | One URL: `/learn/mshda-mi-home-loan/` |
| Inv new #3 | USDA eligible areas guide | **Refuted as new page** | Strengthen `/usda-eligibility-check/` instead (GSC R02) |
| Inv new #4 | 2027 conforming limit answer page | **Corrected** | `/loan-limits/` owns it; link the 100+ passing mentions there |
| Inv merges | tax-law, gse-updates | **Confirmed** | `updates-to-property-tax-laws` H2s are 2025-stamped (verified) |
| Comp #1 | How to get preapproved | **Confirmed with correction** | Label 12,100 as national. Destination: `/purchase/mortgage-readiness-review/` then `/start/`, never app.alignlending.com. Also absorbs analyst 1's P2 "preapproval documents checklist". |
| Comp #2 | Michigan FTHB programs pillar | **Corrected** | Refresh the existing `/learn/first-time-home-buyer-grants-and-programs/` with the title "Michigan First-Time Homebuyer Programs and Grants" (49). **Conflict:** the core-pages team proposes the `/purchase/first-time-homebuyer/` title "First-Time Homebuyer Programs in Michigan". |
| Comp #4 | New Michigan PRE guide | **Corrected** | The existing homestead guide is Michigan-heavy and ranks 9–12 (30-day 202 @9.0). Refresh it with "Homestead Exemption in Michigan: What It Is and How to File" (59). No new URL. This agrees with GSC R20. |
| Comp #5 | Closing costs in Michigan (new) | **Corrected** | Analyst 1 merges 3 closing-cost pages into `/learn/closing-costs/` with a Michigan table. Make that canonical the Michigan page; do not add a 4th URL. 210/mo suggests P1. |
| Comp #6 | Non-warrantable condo explainer | **Confirmed with condition** | One owner per intent (§2.3 CG-21) |
| Comp #7, #8, #9 | HELOC disqualifiers; affordability; seniors | **Confirmed** | #7 uses verified HMDA figures. #8 = Inv new #11 (double-listed). #9: 210/mo plus PAA frequency, so P1 is more defensible than P0. |
| Comp R1–R4, R6, R13 | Calculator, conventional, FTHB, DPA, non-warrantable, taxable value | **Confirmed with corrections** | R1 wording (taxable value); R2 drop "2026" from the title; R3 and R4 are core-pages scope (conflicting titles, §6); R6 trim "Most banks" (unverifiable) to the version in the CSV |

---

## 4. Score adjustments (rubric §3 anchors; tolerance 5 points or a grade boundary)

Blind re-score of 5 high-impression articles (`lease-to-own-vs-rent-to-own-whats`, `usda-loan-basics`, `fha-loan-limits`, `va-interest-rate-reduction-refinance-loans`, `mortgage-escrow-accounts`). Evidence: byline "Written by Samantha Shelton NMLS 1647301", "Updated October 2026", Sources H2 and the "How we choose and check sources" link on all 5; company NMLS in the text; no canonical entity statement and no six-state line in body text on any of the 5; EHO in body text on 1 of 5; 13–21 H2s with 46–67% question-led; FAQPage + Speakable on all; titles 39–54 characters with Title-Case errors; metas 137–150. Text files have no line breaks, so the exact length of each direct answer could not be measured. The first sentence under each first question H2 is a direct definition.

| Report | Aspect | Team | Auditor | Δ | Action |
|---|---|---|---|---|---|
| Inventory | E-E-A-T & trust (articles) | 79 C | **81 B** | +2, **crosses C/B** | Reconcile (rubric §7.3). The first-hand input used 5/424; the true share is 142/424, which raises the analyst's own formula to 80.6. The anchors put the 5 sampled pages at 80–82: all identity elements present, no reviewer, templated "Updated" stamp. |
| Inventory | AI-search readiness | 72 C | 73 C | +1 | Stands. No entity statement on the sampled pages keeps it below the 80 anchor. |
| Inventory | Heading structure | 80 B | 78 C | −2, crosses B/C | Reconcile. Sound hierarchy, but 13–21 H2s and the repeated 5-heading template tail are "weak spots" in the 80 anchor's terms. Accept 78. |
| Inventory | Title & meta | 73 C | 74 C | +1 | Stands. Note that the CTR-outcome component (15 points) is not in the rubric anchor, and that 2 of 5 sampled metas are under 140. |
| GSC | "Title & meta: CTR health" | 30 F | **73 C** (rubric) | **+43** | Relabel 30 as a non-rubric "CTR outcome KPI". Under the Title & meta anchors, the titles are within length, unique and keyword-led, which puts them at the 70–80 anchors, in line with analyst 1. |
| GSC | "AI-search readiness: question coverage" | 58 F | **72 C** (rubric) | **+14** | Relabel 58 as "question-query ranking outcome". On readiness, 66% of question impressions land on a page with a matching question H2, and FAQ/Speakable are on 471 of 473 pages. |
| GSC | "Intent: page-to-query match" | 68 D | **75 C** | **+7** | 84% of impressions land on an acceptable page. The listed "misses" (legacy ZIP URLs, legacy duplicates) are already 301s, which leaves the USDA eligibility miss and the amortization twin. |
| GSC | Overall GSC gap health | 52 F | n/a | — | A non-rubric composite. Report it as an outcome summary next to the rubric scores above (mean 73 C). |
| Competitor | Original data leverage | 55 F | **60 D** | +5, crosses F/D | The rationale "no Dataset schema" is wrong (present on both reports). The remaining gaps are real: `faq_q = 0`, no question H2 answer blocks, 0 citations on the uncapping prompts. |
| AI visibility | Original data reaching AI answers | 20 F | 20 F | 0 | Stands as an outcome score; remove "no Dataset schema" from the rationale |
| Competitor vs AI visibility | Citation share 45 vs citation rate 40 | 45 / 40 | **40** | −5 | The same evidence (5 of 48 checks) is scored two ways; harmonize at 40 |
| Competitor | Title/H1 alignment | 60 D | 60 D | 0 | Matches the rubric 60 anchor example (`/purchase/first-time-homebuyer/`) |
| Competitor | Competitive coverage 35; Michigan demand 30; PAA coverage 62 | — | stand | — | Custom aspects with no rubric anchor; the evidence was verified (CG-2, CG-5, CG-6, CG-13) |
| AI visibility | Answer-block and schema readiness | 75 C | 75 C | 0 | Consistent with the inventory's 72–73 |

---

## 5. Recommendation fixes

### 5.1 Title/meta rewrites: sample of 20 (lengths measured)

| # | Page | Proposed by | Issue | Corrected exact text (chars) |
|---|---|---|---|---|
| 1 | `/learn/usda-loan-basics/` | Inv + GSC | Two different titles; Inv's version cannibalizes N01 | T: **USDA Loans in Michigan: How Rural Development Loans Work** (56). M: keep GSC (157) |
| 2 | `/learn/lease-to-own-vs-rent-to-own-whats/` | Inv + GSC | Two titles; GSC's is ungrammatical | T: **Lease to Own a Home: How It Works vs. Rent to Own** (49). M: keep GSC (160) |
| 3 | `/learn/amortization-schedules/` | GSC | Correct, and **this is the canonical** (BI-19) | T: keep **Amortization: What It Means and How Your Schedule Works** (55); 301 `mortgage-amortization` here |
| 4 | `/learn/how-to-qualify-for-jumbo-loan/` | GSC (on `jumbo-loan-tips`) | Target page is being merged | T: **Jumbo Loans in Michigan: Requirements and How to Qualify** (56). M: GSC jumbo meta (154) |
| 5 | `/learn/what-is-loan-to-value-ratio/` | GSC | Title and meta promise "our LTV calculator"; none on the page | T: **Loan-to-Value Ratio: How to Calculate LTV, Why 80% Matters** (58). M: **Figure your loan-to-value ratio in one step: divide the loan by the home's value. See why 80% matters for PMI, how lenders use LTV and the limits by loan type.** (159). Restore "Calculator" only after the widget ships. |
| 6 | `/learn/debt-to-income-ratio-dti/` | GSC | Fine: the page has a calculator | Keep GSC title (53) and meta (158) |
| 7 | `/learn/new-mortgage-disclosure-rules/` | GSC | Meta misstates the third "3" | M: **The 3/7/3 rule: a Loan Estimate within 3 business days of applying, at least 7 business days before closing, and a Closing Disclosure 3 business days before.** (157) |
| 8 | `/learn/va-loan-benefits-for-veterans/` | GSC | "capped closing costs" overstates; "waiver" is the wrong term | M: **The VA loan benefits worth the most, from no PMI and limits on closing costs to residual-income underwriting and the funding fee exemption for disability.** (154) |
| 9 | `/learn/what-is-conventional-97-loan/` | GSC | "lowest" is on the banned list | M: **Conventional 97 is a low-down-payment loan from Fannie Mae and Freddie Mac. See who qualifies, whether you must be a first-time buyer and when PMI ends.** (152) |
| 10 | `/product-loans/fha-loans/` | GSC | "2026 county loan limits" goes stale with CY2027; core-pages scope | M: **FHA loans in Michigan: credit and DTI guidelines, current county loan limits, how FHA mortgage insurance works, and how a broker compares FHA lenders for you.** (158) |
| 11 | `/usda-eligibility-check/` | GSC | "for 2026" goes stale (FY2027 began Oct 1) | M: **Check USDA eligibility in two steps: confirm the Michigan address on USDA's own map, then compare your household income with your county's current limit.** (153) |
| 12 | `/learn/fha-loan-limits/`, `/loan-limits/` | GSC | "2026" titles proposed six weeks before the 2027 release; conflicts with Inv | Hold; on release use **FHA Loan Limits 2027: Michigan Limits by County** (47) |
| 13 | `/` (home) | GSC | Meta credits Samantha personally; core-pages scope with a different title | M (if adopted): **Independent Michigan mortgage broker in Waterford, NMLS #2041154. We compare your scenario across multiple wholesale lenders. 5.0 on Google, 123 reviews.** (153). Review count must match GBP on publish. |
| 14 | `/mortgage-lender-dearborn-mi/` | GSC | "local broker" implies an office; city-team scope | M: **Buying in Dearborn? Every sale needs a city inspection and Certificate of Occupancy first. Compare FHA, VA and conventional loans with a Michigan broker.** (153) |
| 15 | `/mortgage-lender-ann-arbor-mi/` | GSC | "local loan officer"; median has no source | M: **Buying in Ann Arbor, where medians run near $528,000? Talk with a Michigan loan officer about conventional, jumbo and FHA options and the property tax math.** (156) + [VERIFY: median source and period on the page] |
| 16 | `/learn/homestead-exemption-benefits-and-filing-guide/` | Inv, GSC, Comp (3 decisions) | One title must keep both the generic and the Michigan query | T: **Homestead Exemption in Michigan: What It Is and How to File** (59). M: keep GSC (158) |
| 17 | `/learn/conventional-loans/` | Comp R2 | "Guidelines 2026" goes stale | T: **Conventional Loan Guidelines: Credit, DTI, Down Payment, PMI** (60); H2 "What are the conventional loan guidelines?" (no year) |
| 18 | `/learn/first-time-home-buyer-grants-and-programs/` | (Comp N2 as a new URL) | Existing page owns the intent | T: **Michigan First-Time Homebuyer Programs and Grants** (49) |
| 19 | `/learn/mortgage-rate-predictions/` | Inv | Correct; downgrade to P1 | T: **Mortgage Rate Forecasts: How They Work and Why They Miss** (56) |
| 20 | `/learn/` landing | Inv | Passes | T (56) and M (159) as proposed |

Also missed by both analysts: `/learn/mortgage-news/` meta states "30-year rates near 6.5%". Interim meta (154): **The mortgage news that changes a borrower's next step: weekly rate survey data, Federal Reserve decisions, loan limit changes and new rules, with sources.** Then merge it as analyst 1 plans.

### 5.2 Merge and prune decisions: sample of 15

| # | Group / URL | Decision | Auditor verdict |
|---|---|---|---|
| 1 | lease-to-own (3) | Merge into the vs. canonical | **Sound** (intent overlap; shingle overlap ≤ 9%). Drop the "near-duplicates" wording. |
| 2 | amortization (2) | Canonical `mortgage-amortization` | **Change canonical** to `amortization-schedules` (GSC page for "amortization" @14.5) |
| 3 | mortgage-rules (5) | Merge into `mortgage-regulation-updates` | **Sound.** All five are lender-facing; consider retitling the canonical for borrowers. |
| 4 | market-type (5) | Merge into buyer's-market | **Change:** retitle the canonical **Buyer's Market vs. Seller's Market vs. Balanced: How to Tell** (60), or keep the seller's-market page separate (a distinct query; overlap 0.011) |
| 5 | rate-lock (2) | Merge | **Sound** |
| 6 | jumbo (2) | Merge tips into qualify | **Sound**, once GSC's rewrite is moved to the canonical |
| 7 | refi-rising-rates (3) | Merge | **Sound** |
| 8 | buyer-closing-costs (3) | Merge into `/learn/closing-costs/` | **Sound.** Make this canonical the Michigan page and drop Comp N5 as a new URL. |
| 9 | cash-out (2) | Merge | **Sound** |
| 10 | fixed-rate (3) | Merge into benefits | **Change:** send `fixed-rate-mortgage-options` to `/learn/15-year-vs-30-year-mortgage-comparison/` (term-comparison intent; GSC page for "15 year fixed mortgage" 60 @16.9) |
| 11 | `real-estate-crowdfunding` | "NOINDEX … 301 (or noindex,follow)" | **Pick one:** 301 to `/learn/investing-basics/` (430 impressions, 0 clicks, drift per both analysts) |
| 12 | `benefits-of-investing-in-mixed-use-developments` | PRUNE | **Change to KEEP (no investment)** pending Align's view on mixed-use 1–4 unit financing. It has 2 of the ~11 Learn clicks. |
| 13 | `benefits-of-investing-in-senior-housing-markets` | PRUNE | **Sound** (1 click; off-topic). Correct the "only click" claim. |
| 14 | `how-to-address-water-damage-in-your-home` | PRUNE → deductibles | **Sound** (72 impressions, 0 clicks) |
| 15 | `creating-functional-mudroom`, `benefits-of-smart-irrigation-systems`, `craftsman-houses…` | PRUNE | **Sound** (0 impressions in either analyst's mapping) |

### 5.3 PAA H2 mappings: sample of 15

| Question | Mapped to | Verdict / fix |
|---|---|---|
| Which city in Michigan has the highest property taxes? | NEW millage data page | Sound (a tax fact, not a place ranking) |
| Is it better to pay extra principal monthly or yearly? | `/mortgage-payoff-calculator/` | Sound |
| Can I deduct VA funding fees on my taxes? | `/va-funding-fee-calculator/` | Better on the new VA funding fee guide (Inv #5 / GSC N10); [VERIFY: IRS Pub. 936] |
| What can't a VA buyer pay for? | `/learn/buying-home-with-va-loan/` | Sound |
| How to avoid paying property tax in Michigan? | NEW PRE post | **Remap** to `/learn/homestead-exemption-benefits-and-filing-guide/` (no new PRE URL) |
| What happens if someone else pays my property taxes in Michigan? | `/learn/mortgage-escrow-accounts/` | **Weak fit.** Move to `/learn/property-tax-assessments-how-they-work/` |
| Is a down payment required for a VA loan? | `/product-loans/va-loans/` | **Remap** to `/learn/buying-home-with-va-loan/` (trigger term off money pages, guide §7.2) |
| How many months do lenders look at bank statements? | `/product-loans/bank-statement-loan/` | Sound |
| How much down payment do I need for a $300,000 house? | `/learn/how-to-save-for-down-payment/` | Sound. State minimums as agency rules, named and linked. |
| What is the 3 7 3 rule in mortgage? | `/learn/new-mortgage-disclosure-rules/` | Sound; matches GSC R23 (an H2, not new post N30) |
| What disqualifies you for a VA loan? | `/learn/how-to-qualify-for-va-loan/` | Sound |
| What happens if you don't pay property taxes in Michigan? | `/learn/mortgage-escrow-accounts/` | **Weak fit.** Move to `/learn/property-tax-assessments-how-they-work/` |
| Requirements for the homestead exemption in Michigan? | NEW PRE post | **Remap** to the existing homestead guide |
| What percent of retirees still have a mortgage? | NEW seniors post | Sound; needs a sourced figure or [VERIFY] |
| Is it smart to pay off your house when you retire? | NEW seniors post | Sound; carry the not-advice line |

Bank-wide fixes: remap the 7 questions that point to merge members to their canonicals (`how-to-budget-for-closing-costs` → `closing-costs`; `jumbo-loan-tips` → `how-to-qualify-for-jumbo-loan`; `updates-to-property-tax-laws` → `impact-of-new-tax-laws-on-homeownership`; `va-loan-tips` ×3 → `buying-home-with-va-loan`). Also remap "Can I get a VA loan with no down payment?" and "What is the average down payment for a house in Michigan?" off money pages to Learn pages.

### 5.4 Answer-block and compliance fixes (exact text in the CSV)

- **A3 FHA product-page entity block:** remove "FHA allows 3.5% down with a 580 credit score" and "Samantha Shelton reviews every file". Use the corrected 61-word block in the CSV, then add the guide §7.6 non-affiliation disclaimer as visible text.
- **A3 city H2 "Which loan programs can you use in <City>?":** USDA eligibility is set by address, not by city. Write "whether any part of {City} is in a USDA-eligible area, with a link to the address check", not "yes or no".
- **A7 awards:** ["Hall of AIME inductee (2024)", "2023 Women With Vision honoree", "Mortgage Professional America 2025 Elite Women", "HousingWire 2024 Rising Star"]. Add NAMB only after PM-07 resolves.
- **A1 Dataset JSON-LD:** do not add a second Dataset. Validate the existing `Dataset`/`DataDownload` on both report pages and add any missing `license`, `temporalCoverage` or `distribution.contentUrl`.
- **R1 / A1 uncapping answers:** use the guide §7.6 wording (59-word blocks in the CSV).
- **Comp N21 title:** "The HUD $100 down program…" puts a down-payment amount in a title (§1026.24(d)(1)(i)) **[COUNSEL]**. Use **Buying a HUD Home in Michigan: Owner-Occupant Incentives** (56), and put the $100 figure in the body attributed to HUD.
- **GSC N17 "Zero-Down Home Loans in Michigan":** a conservative-practice trigger in a title, and it overlaps the low-down-payment canonical. Fold it in as an H2 on `/learn/low-down-payment-mortgages/` **[COUNSEL]**.
- **GSC N15 "Portfolio Loan Rates…":** a "rates" title for a site that never publishes rates invites a bounce. Use analyst 1's H2 on the existing `what-is-portfolio-loan` page instead of a new post.
- **Inv #26 "How mortgage brokers are paid":** only with the approved `/licensing/` wording; the absolute "paid by the lender" version is **Verify** status (§10.1).

---

## 6. Inconsistencies between analysts (and with other teams)

| # | Topic | Analyst 1 | Analyst 2 | Analyst 3 | Auditor resolution |
|---|---|---|---|---|---|
| 1 | Library size | 424 articles + 49 hubs | "471 /learn/ URLs; 431 articles 4,000+ words, median 5,572" | "469 of 471 /learn/ pages" | Use **424 articles, 49 hubs, 473 Learn URLs, median 5,604** |
| 2 | Lease-to-own impressions | 15,903 mapped (canonical) | 16,051 cluster; 14,548 page | — | Cite **14,548 impressions in 90 days (GSC page-level)** for the page and **15,242** for the head term |
| 3 | USDA impressions | 8,438 mapped | 11,392 family; 10,182 page | — | Cite **10,182 (page)** and **11,392 (query family)** |
| 4 | Lease-to-own action | Merge 3 articles; retitle | 301 the legacy `/lease-to-own-vs/` (already done) | — | Merge per analyst 1; analyst 1's title |
| 5 | Amortization canonical | `mortgage-amortization` | `amortization-schedules` | — | **`amortization-schedules`** (GSC page-level) |
| 6 | Jumbo | 301 `jumbo-loan-tips` | Retitle `jumbo-loan-tips` | — | Canonical `how-to-qualify-for-jumbo-loan` with GSC's copy; GSC N16 becomes an H2 |
| 7 | Homestead / PRE | Retitle the existing page to Michigan | Refresh the existing page; no new post | New PRE post; strip Michigan from the existing page | **Refresh the existing page** (Michigan-heavy, ranks 9–12); no new URL |
| 8 | Closing costs | Merge 3 into `/learn/closing-costs/` + Michigan table | Defer to analyst 3 | New `/learn/closing-costs-in-michigan/` | **One URL:** the merged canonical becomes the Michigan page |
| 9 | MSHDA | New `/learn/mshda-mi-home-loan-mi-10k-dpa/` | — | New `/learn/mshda-mi-home-loan/` + new FTHB pillar | One MSHDA guide; the FTHB pillar = refresh of the existing grants page |
| 10 | USDA eligibility | New eligible-areas guide | Route to `/usda-eligibility-check/` | — | **Tool owns it**; no new page |
| 11 | Conforming / jumbo threshold | New 2027 conforming-limit page | `/loan-limits/` owns it; new N16 "what counts as jumbo" | — | `/loan-limits/` + an H2 on the jumbo canonical; no new pages |
| 12 | Personal loans | P1 refresh to win the click | "Ignore" (drift) | — | **P2**; a title test only |
| 13 | VA disabled veterans | One combined guide | N11 (federal benefits) | #24 (Michigan property tax exemption) | **Two pages** (distinct intents), cross-linked |
| 14 | Land contract refinance | New guide | — | H2 on the existing page | H2 now (40/mo); new guide at P2 if it ranks |
| 15 | Bankruptcy waiting periods | New #12 | N26 | #23 | One post (triple-listed) |
| 16 | Pre-approval | "Covered well, keep"; P2 docs checklist | — | New P0 how-to + cut the existing H2 | New how-to (national 12,100) absorbs the docs checklist |
| 17 | DTI | — | Retitle the DTI page "DTI Calculator…" | New DTI calculator tool | **Retitle only**; the calculator already exists |
| 18 | DSCR | New `/learn/dscr-loans-michigan/` | N20 on "dscr loans michigan" | — | One informational post, `/learn/how-dscr-loans-work/`; the money page keeps the commercial query |
| 19 | Rate-forecast policy | P0 on 2 pages | Not mentioned; proposes "…Right Now" freshness title for economic factors | — | Analyst 1's finding stands, as corrected; add `mortgage-news` |
| 20 | Inferred mappings | Learn-only routing | Token match across all pages | DFS URLs | 265 of 810 shared queries disagree. **Confirm with a GSC Page × Query export before acting on any inferred URL.** |
| 21 | Year labels | FY2027 / 2027 | "2026" in N01, N10, N16 and 4 metas | "2026" in R2, N2 | Use FY2027/2027 or no year for anything published after Nov 2026 |
| 22 | Cross-team titles | — | Rewrites `/`, `/refinance/`, `/product-loans/fha-loans/`, `/usda-loans/`, `/non-qm-loans/`, Dearborn, Ann Arbor, Macomb, `/michigan-property-tax-calculator/`… | Rewrites `/purchase/first-time-homebuyer/`, `/purchase/down-payment-assistance/`, calculator | The core-pages and city teams already propose **different** text: home "Michigan Mortgage Broker, Multiple Lenders \| Align Lending"; FHA "FHA Loans in Michigan: 2026 Limits & Rules \| Align Lending"; USDA "USDA Rural Development Loans in Michigan \| Align Lending"; Dearborn "Mortgage Broker in Dearborn, MI \| Align Lending". **The owning team's version is the base; content-team rewrites are inputs for the consistency team.** |

**Double-counted new-post candidates:** 84 nominal (26 + 30 + 28) collapse to about **55 distinct topics**. **9** are listed by two or three analysts (MSHDA, USDA income limits, VA funding fee, VA entitlement/minimums, DSCR, FHA MIP, affordability, bankruptcy, lender comparison, asset depletion, homestead credit). **12 fold into existing pages:** USDA eligible areas, conforming limit, HELOC vs. cash-out, estimating property taxes, FTHB pillar, PRE, closing costs Michigan, DTI tool, well/septic, zero-down, portfolio rates, jumbo threshold.

---

## 7. Impacts on the content plan

The content strategist is drafting the plan from these three analysts. Items the plan likely relies on and that this audit changes:

1. **Samantha's voice is not "on 5 of 424 pages". It is on 142.** Any plan section that says "add first-hand quotes because none exist" is wrong. The real problem is **repetition**: one quote on 33 pages, another on 27, which strains guide §3.5 ("do not reuse a quote out of its original context"). Plan action: limit each quote-bank quote to its matching cluster, and add `[NEEDS SAMANTHA QUOTE: topic]` only to the **26 top-40 impression articles that have none**, starting with lease-to-own, usda-loan-basics, fha-loan-limits, conveyance and portfolio-loan.
2. **Do not create these new URLs:** USDA eligible areas (tool), 2027 conforming-limit page (`/loan-limits/`), HELOC vs. HE vs. cash-out (money sub-page), estimating Michigan taxes (calculator), Michigan FTHB programs pillar (refresh `/learn/first-time-home-buyer-grants-and-programs/`), Michigan PRE guide (refresh the homestead guide), closing costs in Michigan (refresh the merged `/learn/closing-costs/`), DTI calculator tool (exists), well/septic rules (existing pages), zero-down loans (H2), portfolio loan rates (H2), "what counts as jumbo" (H2). That removes **12 posts**.
3. **Merge several double-listed briefs:** MSHDA, USDA income limits, DSCR, VA funding fee, VA entitlement, FHA MIP, affordability, bankruptcy, lender comparison, asset depletion and homestead credit are each one brief, not two or three.
4. **The amortization canonical is `/learn/amortization-schedules/`.** Briefs and internal links that point to `mortgage-amortization` as the survivor must flip.
5. **The DSCR guide must not target "dscr loans michigan"** or use a slug that mirrors `/product-loans/dscr-loans-michigan/`. Target "how DSCR loans work".
6. **"Michigan pre-approval at 12,100/mo" is a national query.** Keep the post, but size expectations against a national head term with KD 22 and Align's average position of 59. The Michigan variant shows 0 volume and 23 GSC impressions.
7. **The legacy-301 P0 is already done.** Remove "301 the legacy duplicates/ZIP URLs" from any plan task list. Replace it with IndexNow / URL Inspection resubmission and removing internal links to redirects.
8. **The research pages already have Dataset schema.** The AEO work there is question H2s with 40–60-word answers, the "Cite this study" block and outreach, not schema creation.
9. **Year stamps:** every brief title, H2 or meta drafted with "2026" for loan limits, USDA income limits, the VA funding fee or conventional guidelines should use FY2027/2027 (with [VERIFY]) or no year. The CY2027 and FY2027 releases land between late November 2026 and January 2027.
10. **Compliance in briefs:** no "N% down", "no down payment" or "$100 down" in titles or on money pages **[COUNSEL]**. No NAMB award in schema or copy. Use the guide §7.6 Michigan taxable-value wording in every uncapping answer. Apply CTAs go to `/start/`.
11. **Pruning costs a few clicks:** mixed-use (2) and senior housing (1) earned 3 of the ~11 Learn clicks. Keep mixed-use pending Align, or accept the loss knowingly.
12. **Use GSC page-level numbers for the two lead pages:** lease-to-own 14,548 impressions / 3 clicks and usda-loan-basics 10,182 / 2 clicks (90 days). Treat every "0 clicks" figure as a floor: the query table holds only 87 of the 416 clicks.

---

## 8. What was not verified

- Competitor positions (Ross #31, Mortgage Center #19–26, TMR #2, Gustan Cho), the 459-keyword snapshot, AI tracker results and AI-mention counts (paid tools, no raw outputs saved). They are internally consistent but not reproduced.
- Exact 40–60-word answer lengths on live pages (the text files have no paragraph breaks).
- Hub-level scores (78 C hubs, 82 B landing) were not re-scored.
- External-link status, which the links team owns.
