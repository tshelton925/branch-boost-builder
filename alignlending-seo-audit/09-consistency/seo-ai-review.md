# SEO and AI-search impact review: alignlending.com overhaul

**Role:** SEO & AI-search impact editor, Consistency Team · **Date:** 2026-11-16 · **Inputs:** every team report and CSV in 01–05 and 07 with their "Auditor corrections", 08-audit (6 audits + 6 correction files), `00-project/` (brief, rubric, brand guide §1/§8, KNOWN-CORRECTIONS), the crawl (`page_summary.csv`, `pages.jsonl`, `text/`), and DataWise GSC (property `7faa6221…`, synced 2026-11-13; the `overview` call returns 60 page-attributed query rows and 42 page rows across its 90- and 30-day views).
**Scope:** whether the recommendations will move rankings, CTR, conversions and AI citations, and whether they fit the owner's request. Blog drafts (06-blogs) are out of scope. No other team's file was edited.

**Files in this folder from this review**

| File | What it holds |
|---|---|
| `seo-ai-review.md` | This report |
| `query-ownership-map.csv` | 147 query themes covering the top non-brand GSC demand plus keyword-gap terms: GSC impressions and weighted position, the page that ranks now (GSC-attributed or inferred), the owner page decided, supporting pages, the team rows that implement it, and conflict flags |
| `seo-ai-fixes.csv` | 51 rows (8 P0, 28 P1, 15 P2) that need changing on SEO or AI grounds, each with `source_file`, `row_identifier`, exact `recommended` text, reason and priority |
| `ai-answer-blocks.md` | Exact 40–60-word answer blocks, entity lines, quotable facts, FAQ sets and schema notes for the top 15 money pages, plus 3 Learn owner pages. All 31 blocks are checked at 50–60 words |

---

## 1. Summary

1. **The recommendations are mostly right. The biggest risk is pointing queries at pages Google does not rank.** In three places a team wants to move intent away from the URL that holds it today:
   - "usda eligibility" (576 impressions @11.1) would move from the learn article to the tool.
   - "amortization" (315 @14.5) would lose its canonical, `/learn/amortization-schedules/`.
   - "15 year fixed mortgage" sits on a page the links team would 301 to the wrong target.

   **Ruling:** keep each ranking URL as owner and hand intent off with links and above-the-fold answers. The "usda eligibility" call follows the auditor's K1 ruling. Nine more rows create new cannibalization: titles, a new USDA requirements post, a new LTV calculator URL and duplicate funding-fee charts. All are in `seo-ai-fixes.csv`.
2. **Impressions are not the constraint. Position and snippets are.** Over the last 90 days the site had 416 clicks on 181,048 impressions. Non-brand top-10 queries earned 8 clicks from 10,665 impressions. 79.5% of on-topic impressions rank 21 or lower. The fastest value is:
   - title and above-the-fold fixes on the ~25 pages already sitting at positions 5–20;
   - the GBP and local-pack levers behind "home loans" (716 @2.8) and "near me";
   - the home page's broker answer.
3. **AI readiness is strong on paper and weak in practice.** The teams wrote 334 question-heading answers for money pages and tools, and 292 meet the 40–60-word rule. But:
   - **None of the 15 top money pages** carries the canonical entity sentence today; only the VA page has a partial broker line.
   - **0 of 15** carry the government non-affiliation line.
   - The one unique dataset (the 2026 Uncapping Study) is not stated in quotable form on the calculator or the taxable-value guide. That is why Align is absent on all four AI engines for both uncapping prompts.

   `ai-answer-blocks.md` closes these gaps. One P0 and one P1 compliance-sensitive answer were also fixed: the home FAQ "How is Align Lending paid?" (D5), and two different "who pays transfer tax" answers on two pages.
4. **The schema plan needs one reconciliation.** Use the guide's canonical entity sentence verbatim as `description`. List the six states only in `areaServed`. Use no `aggregateRating` and no `openingHours` until Align gives real phone hours. Verified awards only, no NAMB. The spec is in §4.
5. **Order of work:**
   - First the measurement and compliance gates: Calendly UTM, GA4 `link_text`, and the P0 copy errors.
   - Then the four template fixes that multiply: city template, Learn CTA module and answer box, product template, hero image delivery.
   - Then page-level work, in value order: USDA trio, home, GBP and Bing Places, CTR rewrites, refinance, calculators.

   The top 25 changes are in §6.
6. **Under-served asks.** The analysis has no Bing data (none is connected). No team rewrote Learn above-the-fold copy, although Learn pages hold most impressions. City pages have no independent audit. Scores exist everywhere but use different methods, so the owner has no single scorecard. Two owner decisions block content: MSHDA access (D3) and reverse mortgages (D1).

---

## 2. Ownership decisions and reasoning

**Rule used.** One owner URL per query. Where GSC attributes a query to a page (DataWise `overview` page rows), that page keeps the query unless the intent clearly mismatches. The owner gets the title, H1 and first answer. Other pages answer in one sentence and link with a descriptive anchor. Inferred mappings are labelled "inferred, unconfirmed" in the CSV, because the two GSC analysts disagreed on 265 of 810 shared inferences. **Before any 301 in this section, export GSC → Performance → Pages and Query × Page for the URL.**

### 2.1 "usda eligibility": the learn article stays the owner, with a strong tool handoff

- **Evidence:**
  - GSC attributes "usda eligibility" to `/learn/usda-loan-basics/`: 576 impressions @11.1 over 90 days, 593 @13.3 over 30 days. It also gets "usda rural development loan" (335 @13.9) and the head terms "usda loans" 758 @46.8 and "usda loan" 695 @47.7.
  - The article earned 10,182 page-level impressions, 96% of them in the last 30 days.
  - `/usda-eligibility-check/` has 86 impressions @41.5.
- **Decision:** the article owns national "usda eligibility", "usda rural development loan" and the USDA head terms. The tool owns "usda eligibility check", "usda eligibility michigan", "usda income limits" and "is my address USDA eligible". The product page owns "USDA loans Michigan", "USDA Rural Development loans in Michigan" and "Michigan USDA loan broker".
- **Why not move it to the tool:**
  - Google is testing the article for this query on page 2 right now. Retitling the tool to the head term and stripping the article would ask Google to swap URLs mid-test. The usual result is both pages sliding.
  - The searcher wants to check eligibility, so the article gets a 56-word eligibility answer and a "Check an address for USDA" link **before the first H2**. Today its above-the-fold text is 327 words with 0 CTAs (`ai-answer-blocks.md` A1). That converts the intent without moving the ranking.
- **Title:** keep "Eligibility": "USDA Loans: Eligibility and How Rural Development Loans Work" (60). The auditor's "USDA Loans in Michigan: How Rural Development Loans Work" drops the page's best striking query and narrows a page whose impressions are mostly national. Michigan goes in the H1 and the first 60 words.
- **Also P0:** replace the meta "subsidized rates as low as 1%" (F13).
- **Overruled rows:** `gsc-gap-report.md` §6 P0 "re-point", `blog-plan.csv` rank 65, `products-a-report.md` §4. All three are in `seo-ai-fixes.csv`, consistent with `audit-core-pages-B.md` K1.

### 2.2 "refinancing options": the learn article owns it; `/refinance/` owns "refinance home loan"

- **Evidence:** GSC attributes "refinancing options" to `/learn/types-of-refinancing/`: 421 @11.9 over 90 days, 479 @11.9 over 30 days. The SERP is informational ("7 types of refinance" lists from Chase, Freddie Mac and Rocket, per the refinance team). `/refinance/` has 5 contextual inlinks.
- **Decision:** the article keeps it, with the title "Refinancing Options: 7 Types of Refinance Compared" and a comparison table. It gets an above-the-fold answer and the links "Calculate my break-even" and "refinance options in Michigan" (A3).
- **`/refinance/`:** its "Four common refinancing options" H2 becomes "What a refinance can change: rate type, term or cash", so it stops competing. The hub owns "refinance home loan", "refinance home" and "refinance mortgage michigan".
- **Hub title:** "Refinance Your Michigan Home Loan | Align Lending", not "Michigan Mortgage Refinance Review". "Review" is a service name, not a query, and reads like the break-even tool.
- **The hub's real lever** is the 8 inbound links from the refinance learn cluster that the refinance team listed.

### 2.3 "mortgage broker" and "michigan mortgage broker": the home page owns them; four pages step back

- **Evidence:** all GSC-attributed to `/`.
  - "mortgage broker": 460 @11.7.
  - "michigan mortgage broker": 403 @22.5.
  - "mortgage broker michigan": 255 @48.7 over 90 days, 67 @19.9 over 30 days.
  - "mortgage lender": 185 @5.6; "michigan mortgage lender": 106 @14.7; "michigan mortgage broker near me": 65 @5.5.
- **Decision:** the home page owns broker and lender head terms.
  - **Title:** "Michigan Mortgage Broker and Home Loans | Align Lending" (adds the 716-impression "home loans").
  - **H1:** "Michigan Mortgage Broker: One Application, Multiple Wholesale Lenders".
  - **Answers:** a 50-word "What does a mortgage broker do?" block (team row 12) and the honest broker-vs-lender answer (row 13). Together they capture lender intent without claiming to be a lender.
- **Supporting pages step back:**
  - `/about-us/` and `/contact-us/` titles drop "Michigan Mortgage Broker" (refinance team).
  - `/mortgage-michigan/` becomes the county and city directory. Its H1 is per corrections-core-pages-A row 343. It does not take "michigan mortgage lenders" (that `keyword-gaps.csv` row is reassigned).
  - `/learn/why-work-with-align-lending/` is retitled, because its title ends "…A Michigan Mortgage Broker".
- **Other owners in the cluster:**
  - "Best mortgage lenders in Michigan" goes to the refreshed `/learn/comparing-mortgage-lenders-what-to-look/` (blog-plan 35–36, no new URL).
  - "Broker vs bank" stays with `/learn/benefits-of-working-with-mortgage-broker/`, which Perplexity already cites first.
- **"Near me" and "home loans"** are local-pack impressions (the GBP-tagged home URL shows 822 impressions @2.8). The lever is the Google Business Profile (services, Q&A, posts), NAP on the home page and Bing Places. Titles matter less here.

### 2.4 Property tax: calculator, taxable-value guide and study

| Query type | Owner | Why |
|---|---|---|
| "michigan property tax calculator" (9,900/mo; GSC 77 @48.8), "millage calculator", "property taxes in michigan", "michigan millage rates" | `/michigan-property-tax-calculator/` | Tool intent, and it has the 2025 millage table and Dataset. Title and H1 per 08 K3, P0. `keyword-gaps.csv` gives millage rates to the study; overruled because the calculator holds the table and the GSC rows. |
| "property tax uncapping michigan", "what is taxable value" | `/learn/michigan-taxable-value/` | Definition page (294 contextual inlinks; the links team's canonical) |
| "how much do property taxes go up after buying" (data) | Both pages carry the **same** answer block. `/research/michigan-property-tax-uncapping-study/` is the citable source. | AI engines cite the data source. The study needs question H2 answer blocks and a "Cite this study" block. |
| "property tax detroit michigan" (8,100/mo), county property tax | `/mortgage-lender-detroit-mi/`, county hubs | blog-plan 73; city and hub tax sections |
| Homestead exemption / PRE | `/learn/homestead-exemption-benefits-and-filing-guide/` | GSC-attributed "what is homestead exemption" 202 @9.0 (30 days). Keep the question-form title. |
| Homestead property tax **credit** | New post (blog-plan 12) | Different program (MI-1040CR). Cross-link; never share titles. |

The missing piece is the quotable number. The calculator and the taxable-value guide should both state: "In 2026 that reset raised a typical home's taxable value about 50.5%, from 37.0% in Monroe County to 91.7% in Charlevoix County." The block is in `ai-answer-blocks.md` §15. The model block in guide §8.1 points this way, but no team's outline for the calculator includes it.

### 2.5 VA funding fee chart: one chart, on the calculator

- **Evidence:** the funding-fee query family is 569 impressions. GSC attributes "calculate va funding fee" (74 @17.6) and "va loan funding fee calculator" (61 @15.3) to `/va-funding-fee-calculator/`. The chart would otherwise appear on four or five URLs (K2): the learn article, the VA product page, both calculators, and the planned table on `/learn/va-loan-benefits-for-veterans/`.
- **Decision:** the fee calculator owns "va funding fee", "calculator", "chart" and "how much is". Every other page gets one sentence and a link.
  - **Title:** "VA Funding Fee Calculator and Chart | Align Lending" (no "2026": the schedule dates from April 7, 2023, and the year expires in six weeks).
  - **Fix the trust line:** remove "checked against VA.gov on November 15, 2026" until someone has actually checked VA.gov (F17; va.gov was blocked in this session).
  - **Exemption FAQ** block is in §14 of the answer file.
- **Related owners:** the VA loan calculator owns "va loan calculator with funding fee/taxes". The GSC team's N10 chart post stays folded into the calculator, as the blog plan already decided.

### 2.6 HELOC vs home equity loan vs cash-out

| Intent | Owner |
|---|---|
| "cash out refinance vs home equity loan", "heloc vs cash out", "i own my house outright and want a loan" | `/refinance/cash-out-vs-home-equity/` |
| "michigan heloc" | `/product-loans/heloc/` |
| "michigan cash out refinance" (81 @42.5) | `/product-loans/cashout-loans/` |
| "home equity loan michigan" | `/product-loans/home-equity-loan/` |
| "what is a heloc / home equity line of credit" | `/learn/home-equity-line-of-credit-heloc/` |
| "what is a cash-out refinance", debt consolidation | `/learn/what-is-cash-out-refinance-loan/` |
| "how can I compare HELOC lenders side by side?" (67 @1.5, AI-mode prompt) | `/learn/how-to-compare-heloc-lenders/` (drop "Rates" from the title) |
| "what disqualifies you from a home equity loan" (880/mo) | New post (blog-plan 2), citing Align's HMDA denial rates |
| "should I use my home equity" | `/refinance/home-equity-review/` |

The product pages keep a short "What is a HELOC?" answer, because AI engines need the definition next to the offer. Their H2s stay Michigan-qualified, and the learn article owns the national definition. Two decisions overrule `keyword-gaps.csv`: debt consolidation goes to the learn page (informational), and "paid-off house" goes to the comparison page.

### 2.7 Purchase sub-pages: readiness, game plan and budget

| Page | Owns | Decision |
|---|---|---|
| `/purchase/homebuyer-game-plan/` | getting ready to buy, "what to do before buying" | Absorbs the Readiness Review |
| `/purchase/mortgage-readiness-review/` | nothing in GSC (no "readiness" queries; 84 total inlinks vs the Game Plan's 3,190) | **Merge, P1.** Repoint the 99 content links and the 01-ctas rows first, then 301 the page URL. If the PM holds the merge, retitle it "Preparing Your Credit for a Mortgage in Michigan" so it does not carry a synonym title ("Getting Mortgage-Ready in Michigan" vs "How to Get Ready to Buy a Home in Michigan"). |
| `/purchase/budget-review/` | "how much house can I **comfortably** afford", homebuying budget | Title per corrections-core-pages-A row 138 |
| `/home-affordability-calculator/` | "how much house can I afford (in Michigan)", "home affordability calculator" | The calculator owns tool intent (a calculator-dominated SERP). Use the calculators-team title, not the purchase team's "(DTI Limit)" version. blog-plan 70 is reassigned. |
| New post (blog-plan 8) | income and salary questions (14 PAA questions) | Uses Align's HMDA median buyer income as unique data |

Related purchase calls:

- **First-time buyers.** `/learn/first-time-home-buyer-grants-and-programs/` owns the list query "michigan first time home buyer programs" (3,600/mo; 135 contextual inlinks; blog-plan 31). The money page `/purchase/first-time-homebuyer/` takes persona and loan intent: "First-Time Home Buyer Loans in Michigan".
- **MSHDA program names** ("mshda", "mi home loan", "mi 10k") go to one new learn post (blog-plan 1) while D3 is open. The DPA money page drops "MI 10K" from its title (F2). If Align confirms MSHDA access, the DPA page can absorb those queries later.

### 2.8 Lease-to-own

- **Evidence:** the largest impression source. 16,051 impressions across 38 queries @58.7. The page-level figure is 14,548 @33.0. 3 clicks.
- **Decision:** `/learn/lease-to-own-vs-rent-to-own-whats/` stays the canonical.
  - **Title:** "Lease to Own a Home: How It Works vs. Rent to Own".
  - **First H2:** "What is lease to own?", with a 60-word answer (A2).
  - **Merge:** fold `navigating-lease-to-own-agreements` and `lease-option-agreements-pros-and-cons` into it. The two teams agree, and neither page has GSC-attributed impressions.
  - **Next step:** "Build my homebuyer game plan", not the Readiness Review that is slated to merge (`link-insertions` row 3; `cta-recommendations` rows 6 and 301).
- **Sibling guard:** the new post "Rent-to-Own vs. Land Contract vs. Mortgage in Michigan" (blog-plan 4) may not use "lease to own" in its title or H1. The lease-to-own refresh drops its duplicate land-contract table.
- **Expectation:** the head-term SERP is mixed (listings, cars, furniture). Judge success on the comparison and how-to queries (128 @14.2, 76 @11.6, 57 @72.8), not on "lease to own" itself.

### 2.9 Other contested calls (full detail in the CSVs)

| Topic | Decision | Overrules |
|---|---|---|
| Amortization | `/learn/amortization-schedules/` is canonical (GSC "amortization" 315 @14.5); 301 `/learn/mortgage-amortization/` into it | `02-links/cannibalization.csv`; link-insertions rows 53, 57, 77 |
| `/learn/fixed-rate-mortgage-options/` (GSC "15 year fixed mortgage" 60 @16.9) | 301 to `/learn/15-year-vs-30-year-mortgage-comparison/` (term intent; ranks 6.1), not to benefits-and-drawbacks | 02 cannibalization "fixed-rate" row |
| Jumbo | The product page owns "michigan jumbo loan(s)". The learn page owns "jumbo loan requirements" under the title "Jumbo Loan Requirements: Credit, Down Payment, Reserves". `/loan-limits/` owns "jumbo loan limit". | corrections-content row 18 ("Jumbo Loans in Michigan…" collides); blog-plan 44 |
| FHA | Product title "Michigan FHA Loans: Requirements and Limits" (GSC 67 @12.2). The learn page owns national limits; `/loan-limits/` owns county lookups. Hold "2026" in titles until HUD publishes 2027. | products-a row 43; calculators rows 159–160 |
| VA requirements | `/learn/how-to-qualify-for-va-loan/` owns "va loan requirements". The `/learn/va-loans/` hub stays a directory. | products-a §4 |
| Michigan disabled-veteran tax exemption | New post (blog-plan 3) owns it; the VA plan page answers in one H2 | keyword-gaps; purchase ownership map |
| LTV calculator | Embed the widget in `/learn/what-is-loan-to-value-ratio/`, which ranks 18.7–21.8 for "loan to value calculator" and earned 374 impressions in 30 days. No new URL. | calculators row 193 |
| Refinance calculator | Title "Mortgage Refinance Calculator for Michigan". Break-even belongs to `/refinance/break-even-review/`. | calculators row 38 |
| USDA new posts | Cap at three. The "USDA Loan Requirements" post is re-scoped to "USDA Credit Score and DTI Rules" so it does not split the 1,410 requirement impressions on basics. | blog-plan 7 |
| Pre-approval | New post owns "how to get pre-approved" (12,100/mo). The importance article keeps "why". `/mortgage-process/` keeps Michigan process queries (pos 1.9). | keyword-gaps |
| City titles | Keep "Mortgage Broker in {City}, MI \| Align Lending"; test "loan officer" on Ann Arbor only | gsc-gap-report §5.2 Dearborn and Ann Arbor rewrites |

### 2.10 Recommendations that would 301 a ranking URL or create cannibalization

| Recommendation | Risk | Fix row |
|---|---|---|
| Re-point "usda eligibility" to the tool (05 gsc-gap-report, blog-plan 65, products-a §4) | Swaps a page-1 test URL | P0, P1 |
| Keep `mortgage-amortization` as canonical (02 cannibalization, P0) | Demotes the URL GSC credits | P0 |
| 301 `fixed-rate-mortgage-options` to benefits-and-drawbacks (02, 05 before correction) | Sends a GSC-attributed URL to the wrong intent | P1 |
| 301 `tips-for-refinancing-vacation-home` (05 inventory) | "refinance home" 135 @1.1 is inferred to it; unverified | P2 (hold) |
| PRUNE `benefits-of-investing-in-mixed-use-developments` (05) | 2 clicks in 90 days (GSC page-attributed), one of the few Learn pages with any. A relevant 301 keeps most of it. | Acceptable; no fix row |
| New "USDA Loan Requirements" post (blog-plan 7) | Splits the basics page's requirement queries | P1 |
| New `/loan-to-value-calculator/` (calculators 193) | Splits calculator intent from the ranking article | P1 |
| Learn title "Jumbo Loans in Michigan: Requirements…" (corrections-content 18) | Collides with the product page | P1 |
| First-time money page titled "Programs" (purchase 48) | Collides with the learn owner | P1 |
| DPA title "…: MI 10K" (purchase 352) | Collides with the MSHDA post; F2 | P1 |
| Refinance calculator titled "Break-Even Month" (calculators 38) | Collides with break-even review | P1 |
| Fifth funding-fee chart (05 inventory, VA benefits) | Splits citations; K2 | P2 |
| Land-contract table on lease-to-own plus a new post on the same comparison | Duplicate comparison | P2 |
| Readiness Review kept with a synonym title | Self-cannibalization | P1 |

The legacy `/mortgage-location/` URLs (Flint, Wixom, Farmington Hills, Pontiac) and `/well-water-home-value/` still show GSC impressions. They already 301 in one hop, so the fix is recrawl and URL Inspection, not a new redirect. **Never remove those redirects:** for Flint and Wixom, the GSC-attributed ranking URL is the legacy one.

---

## 3. AI-search readiness standard

**The standard** (guide §8, rubric §3.9), applied to every money page:

1. A question H2 phrased as people search, followed by a self-contained 40–60-word answer with no CTA inside.
2. The canonical entity sentence once per page, the short form above the fold, and Samantha's line where she is named.
3. Quotable Michigan facts: one per sentence, with number, place, period and source. Prefer Align's own data (the Uncapping Study, the 2025 HMDA report).
4. A visible FAQ of 4–8 questions taken from GSC and PAA, matching `FAQPage` word for word.
5. Schema by page type (§4.4), and the visible government non-affiliation line on FHA, VA and USDA pages.

### 3.1 Where the top 15 money pages stand

"Now" = 2026-11-15 crawl. "Proposed" = the teams' change CSVs after auditor corrections. "Answers pass" = proposed question headings whose answer is 40–60 words.

| Page | Question H2s now | FAQ Qs now | Entity sentence now | Gov. line now | Answers pass (proposed) | Gaps closed in `ai-answer-blocks.md` |
|---|---|---|---|---|---|---|
| `/` | 0 | 0 | no | n/a (cards need it) | 8/8 | "How is Align paid?" replaced (D5); 2 new PAA/near-me answers; entity placement |
| `/purchase/` | 1 | 0 | no | n/a | 9/9 | Transfer-tax answer harmonized; dated facts; entity |
| `/purchase/first-time-homebuyer/` | 11 | 7 | no | **missing** | 10/10 | Income answer with Align HMDA data; F1/F2 facts |
| `/purchase/down-payment-assistance/` | 5 | 5 | no | **missing** | 8/8 | Grant vs DPA answer; F1/F2 lines |
| `/refinance/` | 5 | 4 | no | n/a | 4/8 | 2 missing answers; Service schema |
| `/refinance/cash-out-vs-home-equity/` | 10 | 6 | no | n/a | 7/8 | "What decides which structure fits?"; $50k HELOC vs loan |
| `/refinance/break-even-review/` | 10 | 6 | no | n/a | 4/5 | "When should you not refinance?" |
| `/product-loans/fha-loans/` | 7 | 7 | no | **missing** | 8/8 (1 uses % down) | F20-safe requirements answer; 500-score FAQ |
| `/product-loans/va-loans/` | 6 | 6 | partial | **missing** | 6/8 | Lender-check answer; trimmed down-payment answer; $2M FAQ |
| `/product-loans/usda-loans/` | 6 | 6 | no | **missing** | 7/8 | F20-safe subhead; lender-check answer |
| `/product-loans/conventional-loans/` | 6 | 6 | no | n/a | 4/6 | Lender-check; down payment (no %); PMI FAQ |
| `/product-loans/heloc/` | 7 | 5 | no | n/a | 14/15 | HELOC-disqualifier FAQ with HMDA data |
| `/usda-eligibility-check/` | 10 | 6 | no | **missing** | 0/0 (label H2s only) | "Who is eligible…in Michigan?"; $100k FAQ |
| `/va-funding-fee-calculator/` | 7 | 6 | no | **missing** | 2/2 | Exemption FAQ; F17 trust-line fix |
| `/michigan-property-tax-calculator/` | 8 | 8 | no | n/a | 2/2 | **Uncapping answer with study numbers**; $300k FAQ; PRE filing FAQ |

### 3.2 Gaps that sit across pages

- **Entity statement.**
  - The VA page has a partial broker sentence; no other top money page carries one.
  - The teams added it only to `/` and `/purchase/`.
  - **Fix:** one Elementor global widget for the reviewer/trust box holding the canonical sentence, so it is consistent by construction (P1).
- **Government non-affiliation line.**
  - It appears on 0 of 15 pages, and no team row contains the exact string.
  - **Fix:** add it to the shared loan-card component and under the first eligibility answer on the FHA, VA, USDA and manufactured pages, the VA and USDA tools, and the USDA learn article (P0, F7b).
- **Calculator outlines use label H2s.** Examples: "How the USDA check works" and "USDA income limits in Michigan, FY 2026 (table)". AI engines extract question-led blocks. Every calculator needs one question H2 directly under the tool.
- **Down-payment percentages vs quotable numbers.**
  - F20 keeps "3%", "3.5%" and "0%" off money pages. The replacement blocks therefore quote credit scores, loan limits, income limits and Align data instead.
  - The percentages live in the Learn guides as each agency's rule, flagged `[COMPLIANCE REVIEW]`.
  - One Learn title still carries them in the SERP: "Low-down-payment Mortgages: 4 Options From 0% To 3.5%". Retitle it "Low Down Payment Mortgage Options: 4 Loans Compared", an exact match for its GSC query (122 @8.5).
- **Freshness claims.** "Checked against VA.gov on November 15, 2026" and "Rules last checked November 15, 2026" were written by a session that could not reach va.gov or michigan.gov. A visible date is a freshness signal that engines quote, so publish only real dates (F17, P0).
- **Two answers to one question.** "Who pays Michigan transfer tax?" reads "by custom" on `/purchase/` and "by law" on the calculator. Use one sourced sentence on all three pages. The answer file has it, with a `[VERIFY]` on MCL 207.502 and 207.523.
- **Research pages.** Their Q&A answers are one sentence each (8–30 words). Expand them to 40–60 words and validate the existing Dataset markup; don't add a second Dataset node. Add the "Cite this study" block. These are the pages AI engines should be citing for Michigan uncapping and denial-rate questions.
- **Learn above the fold.** Learn pages carry most impressions. 470 of 471 have no action above the first H2, and their above-the-fold text runs 224–429 words. Add a 40–60-word answer box plus one text link on the 50 highest-impression articles (template P1). The top three are written (A1–A3).
- **City pages.** Add one templated, data-driven H2, "Which loan programs can you use in {City}?". It answers the "which Michigan brokers do FHA/VA" prompts that Riverbank wins with program × place pages, without creating thin pages. USDA wording is by address (content auditor).

---

## 4. Entity paragraph and schema spec

### 4.1 One canonical entity paragraph (sitewide)

Use it word for word in author boxes, the reviewer/trust component, About sections and the press kit. Every sentence is already an approved string (guide §1 and §10.1).

> Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas. We do not lend our own money. We arrange mortgages with wholesale lenders, which make the credit decision and fund the loan. Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301, founded the company.

- **Short form** (above the fold, trust lines): "Align Lending, an independent Michigan mortgage broker in Waterford".
- **City pages** use the guide's city entity line with {City} and {County}.
- **Reconciliation:** this replaces the refinance team's 69-word "long" paragraph and 27-word "short" paragraph, and its Person paragraph. Their versions changed the fact order, added "One application, compared across multiple wholesale lenders" as an entity fact, and (in the Person text) added the forbidden claim "writes and reviews every guide" and an unverified NAMB award. The corrections-core-pages-A rows 333–335 rule the same way. Keep the company NMLS as "NMLS #2041154" and Samantha's as "NMLS 1647301" (style sheet).

### 4.2 Organization + FinancialService (home; referenced by `@id` everywhere else)

Changes from the refinance team's §5.2 node:

- `description` becomes the canonical sentence.
- `areaServed` is the six states only. Twelve hand-picked counties misstate the 29-county city coverage; cities and counties go in city-page `Service` nodes.
- No `aggregateRating`. Self-serving ratings earn no stars on LocalBusiness/Organization, and the brief asks for none. The auditor's P1 still stands as the timing.
- No `openingHours`. The 24/7 value is false. Add `contactPoint.hoursAvailable` only after Align states exact phone hours (visible copy says "7 days a week, evenings included").
- No `priceRange`.
- No `award` on the Organization.
- `sameAs` lists only profiles that exist. Add BBB and Yelp after they are claimed (ai-visibility A6). Never add portals.

```json
{
  "@context": "https://schema.org",
  "@type": ["FinancialService", "Organization"],
  "@id": "https://alignlending.com/#organization",
  "name": "Align Lending",
  "legalName": "Align Lending LLC",
  "url": "https://alignlending.com/",
  "description": "Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas.",
  "slogan": "Understand your options before you decide.",
  "foundingDate": "2020-08",
  "founder": { "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton" },
  "logo": { "@type": "ImageObject", "@id": "https://alignlending.com/#logo", "url": "[VERIFY: live logo URL, e.g. /wp-content/uploads/2026/10/align-lending-logo-400.webp]", "width": 400, "height": 185 },
  "image": { "@id": "https://alignlending.com/#logo" },
  "telephone": "+1-248-506-5727",
  "email": "samantha@alignlending.com",
  "address": { "@type": "PostalAddress", "streetAddress": "2625 Pontiac Lake Road", "addressLocality": "Waterford", "addressRegion": "MI", "postalCode": "48328", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "[VERIFY against GBP: 42.654091]", "longitude": "[VERIFY against GBP: -83.339245]" },
  "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0",
  "contactPoint": [{
    "@type": "ContactPoint", "telephone": "+1-248-506-5727", "email": "samantha@alignlending.com",
    "contactType": "customer service", "areaServed": ["US-MI", "US-OH", "US-NC", "US-FL", "US-LA", "US-TX"], "availableLanguage": "en"
  }],
  "identifier": { "@type": "PropertyValue", "propertyID": "NMLS", "value": "2041154", "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154" },
  "areaServed": [
    { "@type": "State", "name": "Michigan" }, { "@type": "State", "name": "Ohio" }, { "@type": "State", "name": "North Carolina" },
    { "@type": "State", "name": "Florida" }, { "@type": "State", "name": "Louisiana" }, { "@type": "State", "name": "Texas" }
  ],
  "knowsAbout": ["Mortgage brokerage", "Home purchase loans", "Mortgage refinancing", "Home equity loans", "HELOCs", "FHA loans", "VA loans", "USDA loans", "Conventional loans", "Jumbo loans", "Non-QM loans", "Michigan property taxes"],
  "sameAs": [
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154",
    "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0",
    "https://www.linkedin.com/company/align-lending-llc",
    "[VERIFY one Facebook URL: facebook.com/alignwithalign/ or facebook.com/105599291490093]",
    "https://www.instagram.com/align.lending/"
  ]
}
```

### 4.3 Person (Samantha)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton",
  "name": "Samantha Shelton",
  "jobTitle": "Broker Owner and Senior Loan Originator",
  "url": "https://alignlending.com/samantha-shelton/",
  "image": "[VERIFY: current headshot URL; reuse attachment 10423 per the images auditor]",
  "description": "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301, founded the company in Waterford, Michigan in August 2020. She has been a licensed loan officer since May 2020.",
  "worksFor": { "@id": "https://alignlending.com/#organization" },
  "identifier": { "@type": "PropertyValue", "propertyID": "NMLS", "value": "1647301", "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301" },
  "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Mortgage loan originator license, NMLS 1647301", "recognizedBy": { "@type": "Organization", "name": "Nationwide Multistate Licensing System & Registry (NMLS)", "url": "https://www.nmlsconsumeraccess.org/" } },
  "award": ["Hall of AIME inductee (2024)", "2023 Women With Vision honoree", "Mortgage Professional America 2025 Elite Women", "HousingWire 2024 Rising Star"],
  "sameAs": ["https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301"],
  "subjectOf": { "@type": "WebPage", "url": "https://alignlending.com/press/" }
}
```

- **No NAMB award:** add it only after Align supplies the year and the NAMB source (F9, D8, PM-07).
- **LinkedIn:** add her LinkedIn to `sameAs` only if it is her personal profile. The URL in the team's draft looks like a company account.
- **Learn articles:** the author `Person` references this `@id`. `reviewedBy` waits for the Align decision on the byline verb (K6).

### 4.4 Page-type nodes (all reference `#organization` as `provider` or `publisher`)

| Page type | Nodes | Rules |
|---|---|---|
| Home | Organization/FinancialService, Person, WebSite + SearchAction, FAQPage | The only page that prints the full Organization node; others reference the `@id` |
| Purchase, refinance hubs and subs | WebPage, BreadcrumbList (matching a visible breadcrumb), Service (`serviceType`, `areaServed` the six states or Michigan), FAQPage | Refinance pages have no Service node today (auditor gap). No rate, APR or term. |
| Products | WebPage, BreadcrumbList, MortgageLoan (`areaServed` State Michigan instead of 283 places), FAQPage | Never `interestRate`, `annualPercentageRate`, `loanTerm`. Drop `amount` min/max, or date it (2027 limits are imminent). Remove `Offer` nodes. |
| Calculators | WebApplication (`FinanceApplication`, `offers.price` 0, `creator` #organization), BreadcrumbList, FAQPage, Dataset where a table is published | No default rate anywhere |
| City | WebPage, Service (`areaServed` City → `containedInPlace` county, matching the visible eyebrow), BreadcrumbList, FAQPage | Never a LocalBusiness with a city address |
| Research | Report/Article + the existing Dataset/DataDownload | Validate; add `license`, `temporalCoverage`, `distribution.contentUrl` only if missing |

---

## 5. Impact scoring by recommendation group

Scored per group (template or recommendation type), not per row.

- **Impact:** traffic (T), CTR (C), conversion (V) and AI citation (A), each 0–5.
- **Confidence:** 1.0 (mechanical or compliance), 0.7 (evidence-backed), 0.55 (demand exists but no current rankings, or an owner decision pending).
- **Effort:** 1 (copy or settings), 2 (template or dev), 3 (content production or large merges).
- **Value** = (T+C+V+A) × confidence ÷ effort.

| Rank | Group | Scope | T | C | V | A | Conf | Effort | **Value** | Dependency |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | G6 USDA trio (learn owner kept, ATF answer + tool handoff, title keeps "Eligibility", P0 meta, tool H2, product) | 3 pages | 4 | 4 | 3 | 3 | 0.7 | 1 | **9.8** | none |
| 2 | G4 Home page (title, H1, broker answer, FAQ, entity, schema) | 1 | 3 | 3 | 3 | 3 | 0.7 | 1 | **8.4** | G5 |
| 3 | G24 Off-site entity (GBP services, Q&A and posts; Bing Places; BBB/Yelp; IndexNow) | off-site | 3 | 2 | 2 | 4 | 0.7 | 1 | **7.7** | Bing account |
| 4 | G8 CTR rewrites on ~25 striking-distance Learn pages | ~30 | 2 | 4 | 1 | 3 | 0.7 | 1 | **7.0** | none |
| 5 | G14 Refinance hub + 3 subs | 4 | 2 | 2 | 3 | 2 | 0.7 | 1 | **6.3** | none |
| 6 | G2 P0 compliance and trust blockers | ~40 | 1 | 1 | 2 | 2 | 1.0 | 1 | **6.0** | gate |
| 7 | G5 Sitewide entity component + Organization/Person JSON-LD | all | 1 | 1 | 0 | 4 | 0.7 | 1 | **4.2** | K6 (byline verb only) |
| 8 | G12 Product template | 21 | 3 | 2 | 3 | 4 | 0.7 | 2 | **4.2** | D7 |
| 9 | G17 Calculators (titles, ATF, question H2 answers, result CTAs, WebApplication, single VA chart, LTV widget) | 16 | 3 | 3 | 3 | 3 | 0.7 | 2 | **4.2** | F17 dates |
| 10 | G26 Trust pages (about, contact, Samantha, reviews) | 5 | 1 | 1 | 1 | 3 | 0.7 | 1 | **4.2** | D5, D6, D8 |
| 11 | G10 City template (meta generator, stat H3s, "Michigan expert" H2, refinance block, programs H2, county eyebrow/schema, breadcrumb) | 276 | 3 | 3 | 2 | 3 | 0.7 | 2 | **3.8** | D2 |
| 12 | G13 Purchase hub + 10 subs | 11 | 3 | 3 | 3 | 3 | 0.55 | 2 | **3.3** | D3, merge ruling |
| 13 | G7 Lease-to-own canonical | 1 + 2 | 3 | 3 | 1 | 2 | 0.7 | 2 | **3.1** | merge ruling |
| 14 | G1 Measurement prerequisites (Calendly UTM, `link_text`, derived GA4 events) | all | 0 | 0 | 3 | 0 | 1.0 | 1 | **3.0** | blocks KPI reading |
| 15 | G3 Header menu (alignwithalign.com actions, menu printed once) | all | 1 | 0 | 3 | 0 | 0.7 | 1 | **2.8** | D4 |
| 16 | G9 Learn template (topic CTA module, end block, ATF answer box on top 50) | 423 | 0 | 1 | 3 | 3 | 0.7 | 2 | **2.4** | G1; K4 |
| 17 | G15 Learn linking system (pillar link in first 30%, money pages link down) | ~470 | 4 | 0 | 2 | 1 | 0.7 | 2 | **2.4** | K5 |
| 18 | G22 Learn refreshes (~32) | 32 | 3 | 2 | 2 | 3 | 0.7 | 3 | **2.3** | Jan 2027 sweep |
| 19 | G11 City accuracy facts | ~120 | 1 | 0 | 1 | 2 | 1.0 | 2 | **2.0** | D2 |
| 20 | G23 Research pages + outreach | 4 | 2 | 0 | 0 | 5 | 0.55 | 2 | **1.9** | none |
| 21 | G21 New posts (sprint) | ~14 | 4 | 0 | 2 | 3 | 0.55 | 3 | **1.7** | ownership guards |
| 22 | G18 Hero image delivery | sitewide | 1 | 0 | 1 | 0 | 0.7 | 1 | **1.4** | PSI check |
| 23 | G19 Alt text, og images, favicon | ~1,250 | 1 | 1 | 0 | 0 | 0.7 | 1 | **1.4** | F19 |
| 24 | G25 Legacy URL hygiene | 389 | 1 | 0 | 0 | 0 | 1.0 | 1 | **1.0** | none |
| 25 | G16 Cannibalization merges | ~53 | 2 | 1 | 0 | 1 | 0.7 | 3 | **0.9** | K5, GSC Pages |
| 26 | G20 External-link cleanup | ~180 | 0 | 0 | 0 | 1 | 1.0 | 2 | **0.5** | ship with G11 |

Two notes on reading this table:

- **Gates come first regardless of value.** G1 (measurement) and G2/G11-P0/G20-P0 (compliance) are scheduled first. Without G1 none of the later gains can be attributed. Without G2 the rubric caps the affected pages at 59–69.
- **Template groups score lower than their reach suggests**, because Effort counts once per template. They are sequenced early because each is a single change that lands on 21–423 pages, and later page-level work builds on them.

### 5.1 Impact-ranked implementation order

**Wave 0: gates and baselines (week 0–1).**
1. Snapshot the baselines in §8.
2. G1: Calendly UTM, `link_text` in `alignTrack`, `apply_click`/`text_request` derived events.
3. G2 + the P0 rows of G11/G20:
   - USDA meta rate claim; the "great rates" review.
   - MSHDA First-Gen closed; F2 wording.
   - Remove the 14-day claim; fix the 620 floor.
   - 36.0-mill default replaces 1.5%.
   - PRE "May 1" on Auburn Hills, Fenton and Holly; Highland Park 2026 millage.
   - Government non-affiliation line; false "checked" dates; the 7 lead-gen links.
4. Ask Align for D3, D4, D5, K6, D2 and the Bing Webmaster export.

**Wave 1: template-level fixes (weeks 1–3).**
1. **City template** (G10): T2 meta generator, T1 stat-H3 demotion, the "Talk with a Michigan mortgage expert" H2, T5 refinance block, the new loan-programs H2 (T13), T4 county eyebrow/schema from one list, T10 visible breadcrumb.
2. **Learn template** (G9): 01-ctas topic map with the 08 corrections, `al-next` on all 423 articles, and the above-the-fold answer box with one text link on the top 50 impression articles.
3. **Product template** (G12): requirement-led subhead, requirements H2 + table, template H2 renames, disclaimer, MortgageLoan `areaServed`, "Guides for this loan" block.
4. **Hero image delivery** (G18): snippets 1–3 and 5 with the auditor's fixes (not snippet 4); home LCP preload; srcset on 83 hero pages; eager-load the 52-px headshot.
5. **Entity component and schema** (G5), plus the header menu fix (G3) once D4 is answered.

**Wave 2: page-level, highest value first (weeks 2–5).**
G6 USDA trio → G4 home → G24 GBP and Bing Places → G8 CTR rewrites → G14 refinance → G17 calculators (property tax first) → G26 trust pages → G13 purchase → G7 lease-to-own.

**Wave 3: content and structure (weeks 4–12).**
G15 linking system → G22 refreshes → G21 new posts (with the ownership guards) → G23 research answers and outreach → G16 uncontested merges, then disputed groups after PM rulings and a GSC Pages export → G19 alt text and og images → G25 legacy redirect map.

---

## 6. The 25 changes that deliver most of the value

| # | Change | Pages | Why it pays | Source rows |
|---|---|---|---|---|
| 1 | Keep `/learn/usda-loan-basics/` as the "usda eligibility" owner. Add the 56-word eligibility answer + "Check an address for USDA" link before the first H2. Title "USDA Loans: Eligibility and How Rural Development Loans Work". Replace the "rates as low as 1%" meta. | 1 | 11,392 USDA impressions, 0 clicks; 576 @11.1 is the top striking query | fixes P0 ×2; answer A1 |
| 2 | Home title "Michigan Mortgage Broker and Home Loans \| Align Lending", H1 "Michigan Mortgage Broker: One Application, Multiple Wholesale Lenders", "What does a mortgage broker do?" block | 1 | "mortgage broker" 460 @11.7, Michigan variants 658, lender 185 @5.6 | refinance rows 2, 5, 12; fixes P0 |
| 3 | GBP: services list (FHA, VA, USDA, conventional, jumbo, bank statement, DSCR, HELOC), Q&A with the 40–60-word answers, monthly posts. Claim Bing Places. Identical NAP. | off-site | "home loans" 716 @2.8 and the GBP URL's 822 @2.8 are local-pack impressions; Copilot uses Bing Places | ai-visibility A6/A9; gsc-gap §7 |
| 4 | The 25 CTR title/meta rewrites (conveyance, types-of-refinancing, amortization, homestead, rate lock, VA benefits, HomeReady, 3/7/3, escrow, HELOC compare…) with the content-auditor fixes | ~25 | Positions 1–15 with ~0% CTR; 0.08% non-brand top-10 CTR today | gsc-gap §5.2 + corrections-content |
| 5 | Calendly UTM + `link_text` + derived GA4 events | all | Without it, no CTA or booking can be attributed | 01-ctas P0 |
| 6 | Entity widget (canonical sentence) on every template + Organization/Person JSON-LD per §4 | all | Entity resolution against lookalikes ("aligned mortgage" 115 impr landing on `/licensing/`) | fixes P1; §4 |
| 7 | Property tax calculator: K3 title/H1, the uncapping answer block with study numbers under the tool, 36.0-mill default | 1 (+2) | 9,900/mo at KD 13 vs pos 48.8; Align absent on all AI engines for uncapping | fixes P0; answer §15 |
| 8 | Government non-affiliation line on 8 FHA/VA/USDA pages and tools + the loan-card component | ~12 | Compliance gate; correct framing for quoted answers | fixes P0 |
| 9 | `/refinance/`: title "Refinance Your Michigan Home Loan", 8 inbound links, 2 missing answers, Service schema | 1 | 5 contextual inlinks; "refinance home loan" 856 | refinance rows 50, 72–95; fixes |
| 10 | City template: meta generator + refinance block + loan-programs H2 + "Michigan mortgage expert" H2 | 276 | 4,227 city impressions mostly at positions 15–35; AI program × place prompts | consistency-sweep T2/T5; fixes T13 |
| 11 | Learn above-the-fold answer box + topic-keyed module on the top 50 impression articles | 50 → 423 | Learn holds most impressions; 470/471 have no next step above the first H2 | fixes P1; cta-report §8 |
| 12 | Product template: requirement-led subhead and requirements H2 (F20-safe) | 21 | AI "who can help with X in Michigan" prompts; 5 of 6 priority product pages state no requirement in their 52–74-word opening (products-a finding 1) | products-a §5; answer §8–§11 |
| 13 | Lease-to-own: retitle, "What is lease to own?" first H2, fold 2 siblings, Game Plan next step | 1 | 16,051 impressions; comparison queries at 11–14 | inventory; fixes |
| 14 | VA funding fee calculator as the single chart home; title without "2026"; exemption FAQ; honest check date | 1 (+4) | 569 fee impressions on one URL instead of five | K2; fixes |
| 15 | Transfer tax: one "who pays" sentence on 3 pages + 50-word answer above the calculator | 3 | GSC 121 @19.1 (30 days); Riverbank wins the AI answer | fixes P1; ai-visibility A4 |
| 16 | Purchase topic H1s/titles with the ownership guards (First-Time "Loans", DPA "Who Qualifies", budget "Comfortably", VA plan) | 11 | 8 of 12 H1s carry no query words; 0 impressions for the Michigan program terms | purchase rows; fixes |
| 17 | Amortization canonical = `amortization-schedules`; repoint 3 link insertions | 2 | Protects 315 @14.5 | fixes P0/P1 |
| 18 | Money pages link down to 4–6 cluster guides; refinance and buying articles link `/refinance/` and `/purchase/` early | ~470 | Hubs have 5 and 16 contextual inlinks | 02 R3/R7 |
| 19 | Readiness Review → Game Plan merge, after links are repointed | 2 | Removes a synonym pair; consolidates 99 links | fixes P1 |
| 20 | Research Q&A blocks expanded to 40–60 words + "Cite this study" + Michigan newsroom outreach | 2 | The only unique data; 0 AI citations on uncapping | fixes P1; ai-visibility A1/A2 |
| 21 | Home hero LCP: preload, srcset, no Motion Effects layer (PSI-confirmed) | 1 (+83) | Home Media 63 (D); the top click page | 07 D01 |
| 22 | Decide alignwithalign.com (D4), then fix or remove the 5 menu actions on every page | all | 12,525 off-domain links with no `rel`; actions filed as `partner_site` | 01-ctas row 2 |
| 23 | LTV widget inside the ranking article (no new URL) | 1 | 374 impressions in 30 days; calculator queries at 18.7–21.8 | fixes P1 |
| 24 | Low-down-payment retitle without percentages (exact-match query) | 1 | 122 @8.5 (30 days); F20 | fixes P1 |
| 25 | MSHDA post and the Michigan-led first-time-programs refresh as the program owners (F1/F2 wording) | 2 | 3,600/mo + ~3,000/mo MSHDA family at KD 0–5; no owner today | blog-plan 1, 31 |

---

## 7. Fit-to-request check

| Owner ask | Deliverables that satisfy it | Status | Gap or note |
|---|---|---|---|
| 1. Review every CTA and link; better article linking | 01-ctas (inventory, 444 rows, Learn topic map), 02-links (cluster system R1–R12, 252 insertions, 384 city insertions, broken and external policy), 08 audits | **Served** | Module destinations ruled (K4: 01 owns). Measurement depends on G1. alignwithalign.com waits on D4. This review adds 4 link rows that target soon-to-301 URLs. |
| 2. Product, purchase and refinance pages: best H1/H2/H3 | 03 purchase, refinance-home-trust, products-a, products-b (+08 A/B corrections) | **Served** | Calculator outlines still use label H2s (fixed here). A VA IRRRL refinance page is proposed but not built (P2, owner decision). |
| 3. Answer the question above the fold | 03 ATF subheads (all money pages), calculators ATF intros | **Partly served** | **Learn pages were not covered**, though they hold most impressions. This review adds the template spec and 3 written boxes. City heroes: 21 keyword-string subheads fixed by 04. |
| 4. Score and grade everything | Scores in 01, 02, 03 (5 files), 04 (matrix + 3 groups), 05, 07; auditors re-scored per rubric | **Served, fragmented** | Teams used different formulas; auditors corrected several to rubric §4 weights. The owner needs **one consolidated scorecard** (page type × aspect, money-page score separate, gates applied). The conflict resolver should produce it from the audited numbers. Learn was scored by sample, as the rubric allows. |
| 5. City pages accurate and consistent | 04 consistency sweep (276 pages), 3 fact-check groups (~8,300 claims), 912 fix rows | **Served** | **No independent audit of 04** in 08-audit. D2 (typical-value measure) blocks the hero/meta price field and hub rankings. Wayne, Monroe and Lenawee published 2026 millage in October, so a refresh pass is needed. |
| 6. Blog inventory; GSC and Bing gaps; plan and write blogs | 05 inventory (570 rows), gsc-gap, competitor-gap, keyword-gaps, PAA bank, blog-plan (92 rows, reconciled); 06 drafts | **GSC served; Bing not** | **Bing Webmaster data is missing.** No Bing queries or pages were analysed (gsc-gap §7 lists the export). The blog plan has ownership conflicts with money pages (fixed in `seo-ai-fixes.csv`). |
| 7. Photos and images optimized | 07 (1,977 optimized files, 5 snippets, alt text, og map) + 08 corrections | **Served** | Alt text must load only with the F19 corrections. The AI-imagery disclosure (F21) and IPTC tags are not yet done. Do not install snippet 4. |
| 8. On-brand, SEO-impactful, specific enough for AI answers | Brand guide; brand editor (parallel); 05 ai-visibility; this review | **Partly served** | AI tracker covers 12 prompts and needs the 11 additions. The entity statement and government line are missing on the money pages. Unique data isn't in answer form. BBB/Yelp/GBP corroboration isn't done. D1 (reverse mortgages) and D3 (MSHDA) leave two high-demand clusters without an owner. |

---

## 8. Measurement plan

### 8.1 Baselines to snapshot now (before Wave 1 ships)

DataWise has no page × query or date dimension, so pull these from the GSC UI and save them with the date.

1. **GSC Performance exports (last 28 days and last 3 months).** Pages; Queries; and Query × Page for the 40 owner pages in `query-ownership-map.csv`. Apply regex query filters for the clusters below.
2. **Index coverage.** The Page indexing report (indexed vs not, for /learn/ and the city URLs). URL Inspection on the 5 legacy URLs still credited: Flint, Wixom, Farmington Hills, Pontiac ZIP URLs and `/well-water-home-value/`.
3. **Core Web Vitals.** The mobile LCP URL groups, plus PageSpeed Insights on `/`, `/purchase/`, one city page and one Learn page.
4. **GA4 (28 days).** `cta_click` by `page_path` and `destination`, `phone_click`, `/start/` sessions, and my1003app outbound clicks. Booking attribution starts only after G1.
5. **GBP Insights (3 months).** Calls, website clicks, direction requests and search terms.
6. **AI visibility.** DataWise tracker (12 prompts now, plus the 11 in ai-visibility A11) and `ai_mentions` for alignlending.com, riverbankfinance.com, clear2mortgage.com and lendmire.com.
7. **Bing.** As soon as the account is connected, export Search Performance by Query and Page (6 months).

**Known baselines** (DataWise, synced 2026-11-13; 90 days unless noted):

| Metric | Baseline |
|---|---|
| Site | 416 clicks · 181,048 impressions · avg position 28 · last 30 days 241 / 134,261 / 32.8 |
| Non-brand top-10 | 8 clicks / 10,665 impressions (0.08% CTR) |
| Brand "align lending" | 1,293 impressions @5.0, 4.1% CTR |
| `/` | 63 clicks / 6,596 @14.3 (+ GBP URL 9 / 822 @2.8) |
| `/learn/lease-to-own-vs-rent-to-own-whats/` | 3 / 14,548 @33.0 |
| `/learn/usda-loan-basics/` | 2 / 10,182 @31.5 |
| `/va-loan-calculator/` · `/va-funding-fee-calculator/` · `/usda-eligibility-check/` | 0 / 849 @53.5 · 0 / 663 @48.6 · 0 / 86 @41.5 |
| Owner queries | usda eligibility 576 @11.1 · mortgage broker 460 @11.7 · refinancing options 421 @11.9 · michigan mortgage broker 403 @22.5 · usda rural development loan 335 @13.9 · amortization 315 @14.5 · mortgage lender 185 @5.6 · lease to own vs rent to own 128 @14.2 · michigan mortgage lender 106 @14.7 · michigan fha loans 67 @12.2 · what is homestead exemption 202 @9.0 (30 days) · michigan transfer tax calculator 121 @19.1 (30 days) · conveyance 1,123 @1.3 (0 clicks) |
| Cluster totals (query table) | lease to own 16,051 · USDA 11,392 · local broker/lender 9,037 · FHA limits 2,877 · refinance 2,659 · VA IRRRL 2,063 |
| AI | 4 of 12 prompts cited; 5 of 48 engine checks; Google AI mentions 19 vs Riverbank 785; ChatGPT 40 |
| Media | Home LCP image 218 KB CSS background; money-page Media score 74 (C) |

### 8.2 KPIs per change group

| Group | Primary KPI | Secondary | Target (directional) |
|---|---|---|---|
| G6 USDA | Position and CTR of "usda eligibility", "usda rural development loan", "usda loans" on `/learn/usda-loan-basics/`; clicks to `/usda-eligibility-check/` from the article (GA4 `cta_click` outcome=hero) | Tool impressions for Michigan modifiers; one URL per query in Query × Page | eligibility ≤8, CTR ≥2% by week 12 |
| G4 + G24 Home, GBP | Clicks on broker/lender queries; GBP calls and website clicks | Local-pack share for "home loans", "mortgage lenders near me" | "mortgage broker" ≤8; GBP actions +25% |
| G8 CTR rewrites | CTR on queries whose position is unchanged ±1 (the title effect) | Clicks on the 25 pages | Non-brand top-10 CTR ≥1% |
| G14 Refinance | `/refinance/` impressions and position on refinance head terms; contextual inlinks (crawl) | Break-even tool `cta_click` | Inlinks ≥13; impressions ×2 |
| G17 Calculators | "michigan property tax calculator" position; tool result-state CTA clicks | AI citations on the uncapping and transfer tax prompts | ≤20 by week 12 |
| G10/G11 City | City query impressions and position (regex of city names); city `cta_click` | Pages with the meta in 140–160 chars; 0 PRE "May 1" | Weighted position 25 → ≤18 |
| G9/G15 Learn template and linking | `cta_click` with `tool_id=learn_*` per 1,000 Learn sessions; contextual inlinks to money pages | Money-page sessions from Learn referrals | Baseline set after G1 |
| G12/G13 Products, purchase | Impressions for Michigan program terms (currently ~0 for MSHDA and first-time); `/start/` clicks from those pages | AI "who can help with X in Michigan" prompts | First impressions by week 4; top 30 by week 12 |
| G5/G23 Entity, research | AI tracker citations (all engines); Google AI mentions | Backlinks to the study (`datawise_backlinks` monthly) | 10 of 23 prompts by 2027-02 (ai-visibility target) |
| G18 Images | Mobile LCP (CrUX/PSI) on home and city URL groups | CWV "good" URL share | Home LCP ≤2.5 s |
| G16/G25 Merges, legacy | Impressions consolidating on the canonical (Query × Page); 0 legacy URLs as Google-selected canonical | Crawl: 0 links to 301s | By week 8 |

### 8.3 How to read results at 4, 8 and 12 weeks

- **Rules for every read:**
  - Compare 28-day windows aligned to the same weekdays, and annotate GSC and GA4 with each release date.
  - Read query **cohorts** (the owner queries above), not site totals. The October–November indexing surge makes totals volatile and pushes average position down as Google tests more pages.
  - Exclude brand and drift (personal loans, crowdfunding, insurance, mansions, exam questions) from every KPI.
  - Expect a seasonal purchase slowdown from late November through January. January also brings the 2027 limit and fee updates, which change many pages at once.
- **Week 4 (validation):**
  - Are the new titles showing in the SERP?
  - CTR change on queries whose position held: this is the clean read of the title rewrites.
  - Recrawl evidence: URL Inspection last-crawl date after release; IndexNow submissions accepted by Bing.
  - Correct GA4 events for the new modules and UTM on Calendly bookings.
  - **Do not judge rankings yet.**
- **Week 8 (direction):**
  - Positions for the striking-distance owners (USDA, broker, refinancing options, amortization, homestead, FHA).
  - Query × Page should show one URL per owner query. Two URLs alternating means cannibalization: tighten titles and anchors, don't 301 yet.
  - City cohort position.
  - First AI-tracker re-check after the answer blocks ship.
  - Merged groups should show impressions moving onto the canonical.
- **Week 12 (outcome):**
  - Clicks and conversions: Calendly bookings by `utm_content`, `/start/` → my1003app hand-offs, phone clicks.
  - Local-pack and GBP actions.
  - AI citations vs the 4/12 baseline.
  - First impressions and positions for the new posts and the MSHDA/first-time owners.
  - Decide the next wave from what moved.
  - Re-run this ownership map against a fresh GSC Query × Page export and retire any decision the data contradicts.

---

## 9. Limits and caveats

- **Page attribution.** It is confirmed (GSC page-attributed) for 26 of the 147 map rows. The rest rely on inference, labelled in the CSV. A GSC Query × Page export can settle them in one pass and should precede any 301.
- **Bing.** No Bing data was available, so no Bing numbers are used. The title, entity and IndexNow recommendations are the expected Bing/Copilot levers, but they are unmeasured until the export is connected.
- **Unverified facts.** Facts marked `[VERIFY]` in `ai-answer-blocks.md` could not be checked from this session because michigan.gov, va.gov, hud.gov and consumerfinance.gov were blocked. They need a human check before publishing. The government-fee percentages there stay `[COMPLIANCE REVIEW]`.
- **Scoring.** The group values in §5 are editorial estimates on stated scales, meant for ordering work, not forecasting traffic.
