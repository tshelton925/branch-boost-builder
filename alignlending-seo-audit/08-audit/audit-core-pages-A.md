# Independent audit: core pages, group A (Purchase; Refinance + Home + Trust)

**Auditor:** independent audit, 08-audit · **Date:** 2026-11-15 · **Scope:** `03-core-pages/purchase-*` (12 pages) and `03-core-pages/refinance-home-trust-*` (11 pages)
**Standard:** `00-project/BRIEF.md`, `00-project/scoring-rubric.md`, `00-project/brand-voice-and-compliance-guide.md`
**Evidence used:** `$DATA/page_summary.csv`, `pages.jsonl`, `inlinks.json`, `text/*.txt`, `images.json`, `external_status.jsonl`; DataWise GSC (property `7faa6221…`, 90 days, query level plus the `overview` opportunities list, which carries a page column); live fetches of `alignlending.com/` and `/purchase/mortgage-readiness-review/`; primary-source fetches on michigan.gov (MSHDA MI Home Loan, MI 10K, First-Generation DPA, lender requirements; Treasury). Every claim I could not reproduce is marked unverifiable. Corrections are itemised in `corrections-core-pages-A.csv` (122 rows).

---

## 1. Verdicts

| Group | Verdict | Why |
|---|---|---|
| **Purchase** (`purchase-report.md`, `purchase-changes.csv`, `scores-purchase.csv`) | **PASS WITH CORRECTIONS** | The data claims hold up: H1s, titles, inlink counts, GSC zero-impression findings, DPA content gap and review edits. All 12 titles are ≤60 characters, all 12 metas are 140–160 and all 12 ATF subheads are ≤60 words (measured). Four problems must be fixed before this goes to the owner. (1) **P0 copy promotes MSHDA's $25,000 First-Generation DPA "when funds are open". MSHDA lists the program as closed: funds exhausted, no waitlist.** (2) The CTA rows contradict guide §5.2, including a sitewide rule that sends "Build my homebuyer game plan" to Calendly. (3) No page gets the government non-affiliation disclaimer, and the VA page needs it most. (4) Scores use invented weights (15/15/10) and skip External linking and Media. The 301 of Readiness Review is defensible on content but under-scoped. Hold it for a PM decision. |
| **Refinance / Home / Trust** (`refinance-home-trust-report.md`, `refinance-home-trust-changes.csv`, `scores-refinance-home-trust.csv`) | **PASS WITH CORRECTIONS** | The GSC numbers, live schema faults, review-text claims and the 36.9 vs 36.0 mills conflict all reproduce, and the $5,400 recomputation is correct. All 10 changed titles are ≤60 characters and all 9 changed metas are 140–160 (the rate-policy and agents metas are kept). Fixes needed: (1) the **`/learn/types-of-refinancing/` inlink figure is 22, not 44**; (2) the new "canonical" entity and Person paragraphs claim **"she writes and reviews every guide"**, which guide §7.8 forbids, add **NAMB Broker of the Year**, which guide §10.2 says not to use until verified, and depart from the guide §1 statements; (3) the new break-even example contains a finance-charge amount ("$4,500 in closing costs and points"), the report wrongly calls it trigger-free, and it lacks the required label; (4) the "Where we lend" / "lends" headings use banned lender language; (5) the CTA rows keep retired labels; (6) scores are an unweighted mean of 9 aspects. |

**Headline numbers after audit.** Purchase section: team 68 (D), rubric-weighted **68.8 (D)**, so the grade stands. Refinance/Home/Trust: team 76 (C), rubric-weighted **76.5 (C)**, so the grade stands, and the homepage is still the weakest page at 71. Five page grades cross a boundary (section 4).

**Counts.** Team findings checked: **50** (28 purchase, 22 refinance/home/trust), every P0 included. **36 confirmed, 10 corrected, 2 refuted, 2 unverifiable.** Score sample: 28 aspect scores (14 per group), of which **13 move by more than 5 points**. Recommendation sample: 50 rows (25 per group): **42 pass, 2 weak, 6 need fixes**. A further 50+ CTA and compliance rows outside the sample also need correcting. **New auditor findings: 13.**

---

## 2. Findings checked

Status key: **C** confirmed · **X** corrected · **R** refuted · **U** unverifiable.

### 2.1 Purchase group

| # | Team claim (priority) | Status | Evidence |
|---|---|---|---|
| P-01 | Section average 68 (D) (P0 headline) | **X** (method) | The team used weights of 15/15/10 and 9 aspects. Rubric §4 (12/8/18/18/8/6/2/8/8/4/8, plus Trust weights for `/mortgage-process/`) with External linking and Media scored gives 69.2. After the audited aspect corrections it is **68.8 (D)**. The grade stands. |
| P-02 | 8 of 12 H1s are slogans; a ninth names only the audience (P0) | **C** | `page_summary.h1`: 8 brand lines plus "Self-employed is different, not harder". Hub, DPA and process name the topic. |
| P-03 | Titles of 8 of 10 sub-pages omit "Michigan" (P0) | **C** | Only Game Plan and DPA titles contain "Michigan". |
| P-04 | GSC has 0 impressions for "first time home buyer michigan", "down payment assistance michigan", "mshda", "mi 10k" (P0) | **C** | DataWise: "mshda" 0 rows, "10k" 0 rows, "down payment assistance" 1 row (`who qualifies…` 6 impressions, position 89.2), and no Michigan rows under "first time". |
| P-05 | DPA page names no MSHDA program and links only to CFPB (P0) | **C** | `text/purchase__down-payment-assistance.txt`: "MSHDA" 0, "MI 10K" 0, "10,000" 0. Content external links: CFPB ×2 only. |
| P-06 | Rewrite: "a first-generation pilot of up to $25,000 when funds are open" (P0 copy, rows 58, 77, 81, 353, 360, 375, 379, 380) | **R** | michigan.gov/mshda/pathway-to-housing/firstgendpa, fetched 2026-11-15: *"The First-Generation Down Payment Assistance Program is closed as all funds have been exhausted. Applications are no longer being accepted, and the waitlist is not available."* |
| P-07 | MSHDA participation needs confirmation (P0 [VERIFY]) | **C** (strengthened) | MSHDA lender requirements: eligible lenders must be "licensed to service mortgage loans in Michigan" and hold FNMA/FHLMC seller/servicer or FHA DE, VA-Automatic or RD approval. MI 10K page: "Homebuyers must contact a MSHDA approved lender to apply." A broker that "does not lend our own money" cannot meet that directly, so the referral wording should be the default. |
| P-08 | Unsourced "under 14 days… to clear to close" on `/mortgage-process/` (P0) | **C** (scope extended) | Present in `mortgage-process.txt`. The same claim also appears on `/learn/how-fast-can-a-mortgage-close/`, `/learn/rocket-mortgage-vs-mortgage-broker/`, `/learn/why-work-with-align-lending/` and `/mortgage-lender-lake-orion-mi/`. |
| P-09 | Contextual inlinks: Game Plan 492, VA 18, process 15, self-employed 22, hub 16 (P0/P1) | **C** | `inlinks.json` `inlinks_content`, exact match. |
| P-10 | Anchor "Review an investment property" ×100 | **C** | `pages.jsonl` content links: 100 of 116 anchors. |
| P-11 | ATF word counts 65–161; no sub-page names a number or outcome above the fold | **C** | `above_fold_words`: VA 65, Game Plan 161. |
| P-12 | Readiness Review duplicates Game Plan (same assessment, synonym H2s and FAQs) | **C** | Identical assessment block in both outlines, including the empty H2 and "home ?". 34.5% of Readiness 5-word shingles also appear on Game Plan. "Two pages are one page" overstates it. |
| P-13 | 301 Readiness → `/purchase/homebuyer-game-plan/#readiness`; "update 64 contextual inlinks" (P1) | **X** | GSC has **0 queries containing "readiness"** ("mortgage ready credit" has 4 impressions). Page-level impressions **cannot be verified**, because DataWise has no page dimension beyond the opportunities list and the page is not on it. Links: **99 content links from 78 pages**, not 64. 01-ctas proposes **23 more rows** pointing to this URL, including the credit-topic module on `/learn/credit-and-qualifying/` (11 articles) and on the site's top-impression page `/learn/lease-to-own-vs-rent-to-own-whats/`. 05-content-keywords plans **5 blogs** that link to it. Guide §5.2 treats "Take the readiness review" as a standard Plan label. Ranking loss would be small, but shipping the 301 now would send 100+ links to a redirect. Downgrade to **P2, decision for the PM**. Repoint the links first. External backlinks were not checked (no free tool). |
| P-14 | No visible byline or updated date; 9 pages carry Article + Person schema (P1) | **C** | `byline` and `modified` are empty on all 12 pages. Article is on 9 pages. |
| P-15 | Heading hygiene: empty H2, "home ?", H4 widget labels | **C** | `outline`: empty H2 on Game Plan and Readiness; H4s on First-Time ("Due at closing"…) and Investment. |
| P-16 | CTA drift: "Build my homebuyer game plan" goes to Calendly on Game Plan but to the page from the hub and process page; DPA → `/start/` | **C** | `pages.jsonl.ctas`. |
| P-17 | FAQ schema counts: hub 0, process 0, VA 4, DPA 5 | **C** | `page_summary.faq_q`. |
| P-18 | "Michigan VA queries sit at positions 49–69" | **X** | Actual range is **22.9–52.3**: eligibility 22 impressions at 22.9, application 26 at 23.5, "michigan va loans" 52 at 49.4, limits 27 at 52.3. |
| P-19 | `/mortgage-process/` ranks 1.9–2.8 for Michigan process and preapproval queries | **U** | The query positions reproduce ("michigan mortgage pre-approval" 23 impressions at 1.9; "michigan mortgage process explained" 19 at 2.8). Which page ranks cannot be verified. |
| P-20 | Query map: self-employed 1.3, bridge 2.7, "approval tips" 1.0, financing options 27 at 20.8, "how much house…" 35.3 | **U** | All query numbers reproduce, but the page attribution is not in the data. The affordability query is "how much house can i **actually** afford in michigan", with only 6 impressions. |
| P-21 | MI Home Loan: $566,355 after June 1, 2026; 640 score; MI 10K up to $10,000; education class | **C** | MSHDA MI Home Loan page, fetched directly. michigan.gov was reachable from the audit session; the team reported it blocked. |
| P-22 | MI 10K repayment triggers [VERIFY] | **C** (resolved) | MSHDA MI 10K page: "Repayment of the loan is deferred until… payoff of the first mortgage, the sale or refinance of the home, or when the home is no longer owner-occupied." |
| P-23 | MI Home Loan loan types [VERIFY] | **C** (resolved) | MSHDA lender requirements list MSHDA Conventional, FHA, VA and RD loans. |
| P-24 | Jason Sych review edited on Readiness, verbatim on 6 other pages | **X** | Verbatim on **8** other pages: 4 purchase pages, 3 refinance tools and `/reviews/`. |
| P-25 | DPA says "No credit check to ask"; VA lacks the Samantha/NMLS trust line | **C** | DPA ATF text; VA `above_fold_text` has no Samantha or NMLS. |
| P-26 | The Learn grants article (135 inlinks) does not link to DPA | **C** | `pages.jsonl` links. |
| P-27 | `/learn/buying-process/` duplicates `/learn/home-buying-process/` (6 vs 94 inlinks) | **C** | `inlinks.json`. |
| P-28 | No rates, APRs or Reg Z trigger terms on any purchase page | **C** | Regex scan of the 12 text files found no "N% down", "NN-year", "0% down" or payment amounts. The government disclaimer is a separate gap (N-01). |

### 2.2 Refinance / Home / Trust group

| # | Team claim (priority) | Status | Evidence |
|---|---|---|---|
| R-01 | Group average 76 (C); homepage weakest at 71 (P0 headline) | **X** (method) | The team used an unweighted mean of 9 aspects. Rubric §4 (Home, Purchase/refinance and Trust weights, External linking and Media scored) gives 77.1. Audited: **76.5 (C)**. The homepage is still the lowest at 71. |
| R-02 | "mortgage broker" 460 impressions at 11.7 → `/`; "michigan mortgage broker" 403 at 22.5; "mortgage broker michigan" 255 at 48.7 (P0) | **C** | DataWise queries. The opportunities list maps "mortgage broker" to `https://alignlending.com/`. |
| R-03 | "Six URLs use 'Michigan mortgage broker' in a title or H1" | **X** | **Four**: `/`, `/about-us/`, `/learn/why-work-with-align-lending/`, `/mortgage-michigan/`. `/contact-us/` uses "Waterford, MI Mortgage Broker". |
| R-04 | Homepage schema has a self-serving AggregateRating and 24/7 openingHours (P0) | **C** fact / **X** priority | Live JSON-LD: `aggregateRating {5.0, 123}`, `openingHours ["Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"]`, `priceRange "$$"`, 276 `City` items. Visible text: "Phone: 7 days a week, evenings included". Removal is consistent with Google policy, but guide §8.6 allows AggregateRating that matches Google, so the PM should rule. Set to **P1**: there is no consumer harm. |
| R-05 | AggregateRating appears only on the homepage | **C** | `page_summary.schema`. |
| R-06 | `/reviews/` features Ben Davis (Feb 2025): "…has great rates" (P0) | **C** (extended) | `text/reviews.txt`. The same feed also names other originators with no NMLS ID ("Kevin was great!", "Taylor is the best", "Ryan Greiner…", "Travis and the team…"), which guide §7.5 forbids [COUNSEL]. |
| R-07 | `/refinance/` has 5 contextual inlinks vs 44 for `/learn/types-of-refinancing/` (P0) | **X** | `inlinks.json`: `/refinance/` **5** (correct). `/learn/types-of-refinancing/` **22**, from 50 content links on 23 source pages. The conclusion holds; the number does not. |
| R-08 | Contextual inlinks: `/about-us/` 3, `/real-estate-agents/` 5, `/reviews/` 7, `/samantha-shelton/` 502 | **C** | `inlinks.json`. |
| R-09 | "refinancing options" 421 at 11.9 → learn article; "align lending waterford" 180 at 13.7 → `/product-loans/`; "2625 pontiac lake road" 195 at 18.7 → `/samantha-shelton/` | **C** | DataWise opportunities list, which carries pages. |
| R-10 | Two refinance tools have slogan H1s; titles of 43 characters; metas of 123–125 | **C** | `page_summary`. |
| R-11 | The break-even topic has no GSC impressions | **C** | 0 rows for "break even"; the "worth" rows are unrelated. |
| R-12 | `/refinance/` shortens Cadieux's review ("… [A]ll steps"); break-even changes "breathe" to "breath" | **C** | Text files. "breathe of fresh air" is verbatim on 7 other pages. |
| R-13 | "Client review" testimonials sit under "5.0 on Google across 123 reviews" headers | **C** | Nathan Lobo, Andrew Kuhn and Jason Sych are labelled "Client review" on `/reviews/` and appear under the Google header on all three tools. |
| R-14 | Homepage teaser uses 36.9 mills; the Uncapping Study uses 36.0 | **C** | Live homepage: "$5,535 a year… $300,000 home at 36.9 mills". Study text: "statewide median homestead rate 36.0 mills, 2025 rates", revised Oct 27, 2026. The team's $5,400 is correct ($300,000 × 50% × 0.036). |
| R-15 | `Person.award` omits NAMB; add it (P1) | **X** | The omission is a fact, but the recommendation is wrong: guide §10.2 marks NAMB "Verify, do not use in new copy". Lead for PM-07: HousingWire's 2024 Rising Star profile describes her as "2023 NAMB Broker of the Year" (search result; housingwire.com could not be fetched from this session). No NAMB primary listing was found. |
| R-16 | No visible updated date on any of the 11 pages | **C** | `byline` and `modified` empty. |
| R-17 | The trust strip links to `/reviews/` only from the homepage | **C** | 1 page in `pages.jsonl`. |
| R-18 | `/why-we-dont-publish-rates/` has 10 contextual inlinks, none from `/` or `/refinance/` | **C** | The 10 sources are listed in the audit working files. |
| R-19 | The homepage marks "13 county names" as H3s | **X** (minor) | 12 county H3s plus "Additional Michigan Cities". |
| R-20 | GBP UTM URL: 9 clicks, 822 impressions, position 2.8; "align lending" 1,293 at 5.0, 71 clicks | **C** | DataWise overview `top_pages` and `top_queries`. |
| R-21 | "See all 276 city guides" vs a 275-page inventory | **C** (open) | The crawl has **276** `type=city` URLs, including the non-standard `/mortgage-lender-in-farmington-hills/`. Flag to 04. |
| R-22 | Break-even example: "no rate, APR or payment amount, so no Reg Z trigger terms" (report line 783) | **R** | "$4,500 in closing costs **and points**" states a finance-charge amount, a §1026.24(d)(1)(iv) trigger; guide §7.2 lists "$3,000 in points" as an example. The block also lacks the exact "Hypothetical example…" label. |

### 2.3 New findings the teams missed

| # | Group | Finding | Evidence | Priority |
|---|---|---|---|---|
| N-01 | Purchase (+ home) | **No government non-affiliation disclaimer** on the VA page, the 203(k) and DPA sections, or the FHA/VA/USDA loan cards, and neither team recommends it | VA page mentions VA 41 times and has no disclaimer string. Guide §7.6. | **P0** (VA), P1 (cards) |
| N-02 | Purchase | **Two reviewers with near-identical text**: Will Dauer and Zachary Miketa, "As a first[-]time homebuyer in Birmingham, I [fully] trusted Samantha at Align Lending for my loan. Her [guidance/communication] was amazing…" | First-Time, Readiness and Game Plan pages. Miketa is absent from `/reviews/`; Dauer is labelled "Client review" there. | **P0 until verified** against the GBP |
| N-03 | Purchase | Row 251 transfer-tax URL is broken | `michigan.gov/taxes/property/transfer-tax` → 302 to `/taxes/404`. Correct URL: `/taxes/business-taxes/misc/state-real-estate-transfer-tax-srett`. | P1 |
| N-04 | Purchase | CTA rows send plan/review/check labels to Calendly; the sitewide rule (row 449) inverts guide §5.2; "Get pre-approved" is retired | Rows 7, 8, 53, 108, 109, 143, 176, 202, 230, 298, 327, 357, 405, 406, 449 | P1 |
| N-05 | Purchase / Refi | Byline template "Reviewed by Samantha Shelton…" | Guide §7.8: the wording is [DECISION: Align] and writers do not add a "reviewed" claim. | P1 |
| N-06 | Refi | Entity and Person paragraphs claim "she writes and reviews every guide" / "writes the Align Learn Center" and add NAMB without a year | Rows 267, 335, §5.3 JSON-LD. Guide §7.8, §10.2. | **P0** |
| N-07 | Refi | Rows 333–335 create new "canonical" entity text that differs from guide §1 and uses "NMLS #1647301" | Guide §1, §4 | P1 |
| N-08 | Refi | "Where we lend in Michigan" (home H2) and "Where Align Lending lends in Michigan" (`/mortgage-michigan/` H1) | Guide §6: "we lend" is banned for a broker | P1 |
| N-09 | Refi | Trust line abbreviates the licensing statement ("MI, OH, NC, FL, LA and TX") | Guide §4/§7.5 exact string | P1 |
| N-10 | Refi | Rate-policy hero rewrite introduces "20% down" | §1026.24(d)(1)(i). Row 303 attributes 20% to Freddie Mac PMMS and may stay [COUNSEL]. | P1 |
| N-11 | Refi | "30-Year Fixed" / "15-Year Fixed" loan cards on all four refinance pages are not flagged | Guide §7.2 P0 [COUNSEL] list (repayment period on money pages) | P1 [COUNSEL] |
| N-12 | Refi | CTA rows keep retired labels: "Schedule a call with Samantha" ×3, "Pick a time to talk", "Get my refinance checkup" → Calendly, "Compare my options", "Check a Loan Estimate you already have" as a button, "Call Samantha…" | Guide §5.2 | P1 |
| N-13 | Refi | Homepage H1 rewrite is 79 characters | Rubric §3.1 "under ~70" | P2 |

---

## 3. Weighting check

Neither team applied rubric §4.

- **Purchase** used "Intent & H1 15%, Above-the-fold answer 15%, every other aspect 10%". That under-weights CTA (rubric 18) and ATF (18) and over-weights Internal linking, E-E-A-T, AI and Accuracy. It also treated `/mortgage-process/` as a purchase page, but rubric §4 lists `mortgage-process` among **Trust pages**.
- **Refinance/Home/Trust** used an unweighted mean of 9 aspects for all 11 pages, ignoring the separate Home, Purchase/refinance and Trust columns.
- **Both** omitted **External linking** and **Media**. Neither aspect is N/A on these pages: every page has a hero image and outbound links. Rubric §1 allows N/A only when the aspect does not apply. I scored both aspects from `images.json` and the content external links:
  - **Media:** WebP heroes with dimensions set and not lazy-loaded score 80. The purchase hub hero (228 KB) and the cash-out hero (176 KB) are over the 150 KB target, so 72–74. A lazy-loaded 202×300 JPEG above the fold and a 683×1024 JPEG below it appear on most pages.
  - **External linking:** Tier 1–2 deep links score 80–90. The hub, buy-before-you-sell and process pages state rules with no sources, so 58–60. DPA links only to CFPB, so 62. `/contact-us/` is N/A.
- **Gates.** No gate triggers on the audited scores. If the PM rules the 14-day claim a P0 defect, as the purchase team's own finding implies, **G1 caps `/mortgage-process/` at 59 (F)**.

---

## 4. Score calibration

Fourteen aspect scores per group were sampled against the rubric anchors. Any delta over 5 points, or any grade boundary crossed, is flagged with the corrected score.

### 4.1 Purchase sample

| Page | Aspect | Team | Audit | Δ | Anchor reasoning |
|---|---|---|---|---|---|
| `/purchase/` | Intent & H1 | 84 | 84 | 0 | 80 anchor plus place; does not name mortgages. Stands. |
| `/purchase/` | AI-search readiness | 60 | **52** | −8 | 1 question heading, 0 FAQ, no FAQPage. Below the 60 anchor ("some question H2s… FAQ present"). Quotable facts keep it above 40. |
| `/purchase/first-time-homebuyer/` | Intent & H1 | 45 | **55** | +10 | Rubric §3.1 cites this exact H1 as "the 50–60 pattern". |
| `/purchase/first-time-homebuyer/` | Title & meta | 55 | **68** | +13 | Title within length with the keyword first. Meta is 128 characters; the 60 anchor applies under 120. |
| `/purchase/first-time-homebuyer/` | CTA effectiveness | 80 | **60** | −20 | 60 anchor names this case: "a 'plan' that opens Calendly". |
| `/purchase/homebuyer-game-plan/` | CTA effectiveness | 74 | **62** | −12 | Primary plan label opens Calendly. |
| `/purchase/homebuyer-game-plan/` | Internal linking | 85 | 80 | −5 | Top quartile, but 308 identical module anchors. Within tolerance. |
| `/purchase/mortgage-readiness-review/` | Intent & H1 | 45 | **55** | +10 | Brand-line H1 with the title carrying intent is the 60 anchor. The refi team scored the same pattern 62–64. |
| `/purchase/va-homebuyer-plan/` | Intent & H1 | 45 | **55** | +10 | As above. |
| `/purchase/va-homebuyer-plan/` | Internal linking | 60 | 60 | 0 | 18 contextual inlinks: bottom quartile (sub-page median 64). Stands. |
| `/purchase/va-homebuyer-plan/` | Accuracy & compliance | 88 | **60** | −28 | No government disclaimer on a VA page. The 60 anchor names "a missing government disclaimer". |
| `/purchase/down-payment-assistance/` | Intent & H1 | 85 | 85 | 0 | Stands. |
| `/purchase/down-payment-assistance/` | AI-search readiness | 45 | 45 | 0 | Stands. |
| `/mortgage-process/` | Accuracy & compliance | 70 | **60** | −10 | One material compliance weakness (unsubstantiated performance statistic). If ruled P0, G1 applies. |

### 4.2 Refinance / Home / Trust sample

| Page | Aspect | Team | Audit | Δ | Anchor reasoning |
|---|---|---|---|---|---|
| `/` | Intent & H1 | 74 | **80** | +6, crosses C→B | One unique H1 that names the entity type and place and matches "michigan mortgage broker" (80 anchor). "More options" is not an H1 criterion. |
| `/` | Heading structure | 56 | 56 | 0 | Stands. |
| `/` | Above-the-fold answer | 70 | 70 | 0 | Answer and next step present as path-card links; who and friction reducer missing. Stands. |
| `/` | CTA effectiveness | 68 | 64 | −4 | Within tolerance. |
| `/` | E-E-A-T & trust | 86 | 82 | −4 | Within tolerance. |
| `/` | Accuracy & compliance | 72 | **60** | −12 | "A wrong millage" is the 60 anchor (36.9 vs 36.0), plus inaccurate hours in schema. |
| `/refinance/` | Internal linking | 48 | 48 | 0 | Score stands; rationale number corrected (44 → 22). |
| `/refinance/home-equity-review/` | Intent & H1 | 62 | 60 | −2 | Rubric's own 60 example. Stands. |
| `/refinance/break-even-review/` | CTA effectiveness | 80 | **62** | −18 | Primary "Get my refinance checkup" opens Calendly; guide §5.1 names this label. |
| `/refinance/cash-out-vs-home-equity/` | CTA effectiveness | 78 | **64** | −14 | Primary "Compare my options" opens Calendly; the label is retired as ambiguous. |
| `/reviews/` | Accuracy & compliance | 64 | 62 | −2 | 60 anchor names "a review with a rate claim". Stands. |
| `/samantha-shelton/` | Accuracy & compliance | 76 | 78 | +2 | Score stands. The rationale wrongly docks for NAMB missing from schema. |
| `/about-us/` | Internal linking | 40 | 44 | +4 | 3 contextual inlinks. Stands. |
| `/why-we-dont-publish-rates/` | Accuracy & compliance | 90 | 86 | −4 | "No credit check to talk" is a non-standard string. Stands. |

### 4.3 Overall scores, rubric-weighted (audited)

| Page | Type (rubric §4) | Team | Audited | Grade change |
|---|---|---|---|---|
| `/purchase/` | purchase | 74 C | 74 C | — |
| `/purchase/first-time-homebuyer/` | purchase | 66 D | 66 D | — |
| `/purchase/homebuyer-game-plan/` | purchase | 69 D | 68 D | — |
| `/purchase/budget-review/` | purchase | 69 D | **70 C** | D→C |
| `/purchase/mortgage-readiness-review/` | purchase | 64 D | 67 D | — |
| `/purchase/self-employed-homebuyer/` | purchase | 71 C | 72 C | — |
| `/purchase/buy-before-you-sell/` | purchase | 70 C | 71 C | — |
| `/purchase/va-homebuyer-plan/` | purchase | 63 D | 64 D | — |
| `/purchase/investment-property-financing/` | purchase | 68 D | **70 C** | D→C |
| `/purchase/renovation-financing/` | purchase | 68 D | 69 D | — |
| `/purchase/down-payment-assistance/` | purchase | 65 D | 66 D | — |
| `/mortgage-process/` | **trust** | 71 C | **69 D** | C→D (59 F if G1) |
| **Purchase mean** | | **68 D** | **68.8 D** | stands |
| `/` | home | 71 C | 71 C | — (still weakest) |
| `/refinance/` | refinance | 73 C | 75 C | — |
| `/refinance/cash-out-vs-home-equity/` | refinance | 77 C | 74 C | — |
| `/refinance/home-equity-review/` | refinance | 74 C | 74 C | — |
| `/refinance/break-even-review/` | refinance | 76 C | 73 C | — |
| `/about-us/` | trust | 72 C | 75 C | — |
| `/contact-us/` | trust | 76 C | 78 C | — |
| `/reviews/` | trust | 73 C | 76 C | — |
| `/samantha-shelton/` | trust | 79 C | **80 B** | C→B |
| `/why-we-dont-publish-rates/` | trust | 82 B | 84 B | — |
| `/real-estate-agents/` | trust | 78 C | **81 B** | C→B |
| **Refi/Home/Trust mean** | | **76 C** | **76.5 C** | stands |

---

## 5. Recommendation quality

### 5.1 Measurements across all rows (not only the sample)

| Check | Purchase | Refinance / Home / Trust |
|---|---|---|
| Titles ≤60 characters | 13/13 pass (50–59) | 10/10 pass (50–60) |
| Metas 140–160 characters | 12/12 pass (152–158) | 9/9 pass (155–160) |
| ATF subheads ≤60 words | 12/12 pass (45–57) | 11/11 pass (46–56) |
| H1 under ~70 characters | 12/12 | 6/11 (home 79, reviews 75, about 74, cash-out 72, agents 72) |
| Link targets exist in `page_summary.csv` (or `/start/`) | all pass | all pass, including every "In: …" source page |
| Never-link domains | none | none |
| Exclamation points in Align voice | none | none (client reviews only) |
| Banned words in Align voice | "Get pre-approved" ×2 (retired label) | "we lend" / "lends" ×2; "NMLS #1647301" ×9 (style) |
| Trigger terms | none | "$4,500 in closing costs and points" (row 171); "20% down" (rows 293, 303) |
| External URLs proposed | 1 broken (row 251), 1 redirect to a closed program (row 393). Others are 200 or proxy-blocked (va.gov, hud.gov, fhfa.gov and consumerfinance.gov return 403 from the proxy: unverifiable, not broken) | none broken |

### 5.2 Sample of 25 rows per CSV (seed 20261115)

**Purchase (rows 14, 25, 50, 84, 92, 97, 100, 124, 156, 182, 233, 245, 266, 311, 323, 340, 351, 359, 361, 369, 381, 394, 401, 411, 426): 21 pass, 2 weak, 2 fix.**
- *Pass (strong):* 25 (statewide-program FAQ, accurate against MSHDA), 50 (H1), 233 (sell-first vs buy-first answer), 266 (VA funding fee answer: exemptions and the April 7, 2023 schedule are correct), 323 (meta, 152), 369 (DPA downsides, balanced), 401 (meta, 155), 426 (remote closing FAQ). These are specific and quotable and should help AI-answer eligibility.
- *Pass:* 92, 97 (MSHDA URL live), 100, 124, 182, 245, 311, 340, 359, 361, 381, 394 (MCC URL returns 200), 411.
- *Weak:* 14 (router H3 "Self-employed income", low impact); 351 ("Add the 203(k) H2; date-stamp it" is a pointer, not exact text, but the H2 itself is in other rows).
- *Fix:* 84 ("Reviewed by" byline, see row 447 correction); 156 (columns reversed; corrected in the CSV).

**Refinance / Home / Trust (rows 14, 25, 42, 50, 72, 78, 83, 84, 92, 97, 100, 124, 156, 174, 176, 182, 233, 245, 255, 264, 266, 280, 311, 323, 340): 21 pass (4 are KEEP rows), 4 fix.**
- *Pass (strong):* 83, 84 (P0 inbound links to `/refinance/` from 75- and 18-inlink articles, descriptive anchors), 97 (meta, 158), 100 (ATF answers the comparison in 56 words), 176 (one-point-drop answer), 255 (trust strip links to `/reviews/` sitewide).
- *Pass:* 14, 42, 50 (title fine, weak hook), 92, 124, 156, 174, 182, 245, 266 (H1 acceptable; consider the guide's role wording), 311; KEEP rows 72, 78, 280, 323.
- *Fix:* 25 ("Where we lend"), 233 (office is by appointment), 264 (NAMB, "#"), 340 ("Reviewed by").

### 5.3 Exact corrected text for the most important fixes

All 122 corrections are in `corrections-core-pages-A.csv`. The ones that matter most:

**Purchase: First-Generation DPA is closed (P0)**
- Row 58 (`/purchase/first-time-homebuyer/`, new H2 answer): *"The core statewide programs come from the Michigan State Housing Development Authority (MSHDA): the MI Home Loan, the MI 10K down payment loan of up to $10,000 and a Mortgage Credit Certificate. MSHDA's $25,000 First-Generation pilot is closed because its funds ran out. Some cities and counties add their own programs, each with income, price and credit rules."* (58 words)
- Row 360 (DPA H2 answer): *"Statewide, the Michigan State Housing Development Authority (MSHDA) offers MI 10K, a deferred loan of up to $10,000 paired with its MI Home Loan. MSHDA's Mortgage Credit Certificate is a tax credit rather than cash, and its $25,000 First-Generation pilot is closed. Some cities, counties and nonprofits run their own programs with local income limits."* (55 words) plus `[VERIFY: name Detroit, Pontiac or county programs only after checking their current terms]`
- Row 379 (DPA FAQ; keeps the real PAA query): *"Q: What happened to Michigan's $25,000 down payment assistance program? A: MSHDA's First-Generation Down Payment Assistance pilot offered up to $25,000 to first-generation buyers starting in February 2025. MSHDA now lists it as closed: all funds have been used, applications are no longer accepted and there is no waitlist. MI 10K, up to $10,000 paired with an MI Home Loan, is still offered statewide."*
- Row 353 (DPA meta, 159): *"Michigan down payment assistance explained: MSHDA's MI 10K and MI Home Loan, the Mortgage Credit Certificate and local programs, who qualifies and what to ask."*
- Rows 61, 77, 363, 375: delete the First-Generation H3s and bodies. Rows 81 and 380: drop "and the First Generation pilot".

**Purchase: MSHDA access default (P0)**
- Row 356 (DPA ATF, 60 words): *"Michigan's main statewide help comes from the Michigan State Housing Development Authority (MSHDA): MI 10K, a deferred loan of up to $10,000 paired with an MI Home Loan, with a 640 minimum credit score and income and price limits. Some cities and counties add their own. Samantha explains which programs fit your income, price range and address before you offer."*

**Purchase: government disclaimer (P0 on VA; P1 on the 203(k), DPA and loan-card component)**
- *"Align Lending is not acting on behalf of or at the direction of FHA, HUD, USDA or the VA, and is not affiliated with or endorsed by any government agency."*

**Purchase: CTAs (P1; reconcile with 01-ctas)**
- Rows 7 and 449: "Build my homebuyer game plan" → `https://alignlending.com/purchase/homebuyer-game-plan/`, never Calendly.
- Row 8: "Talk through your options" → Calendly (keep current).
- Row 108: "Build my homebuyer game plan" → `…/homebuyer-game-plan/#readiness`.
- Rows 53, 109, 143, 176, 202, 230, 298, 327, 357, 405: "Talk with Samantha" → `https://calendly.com/samanthashelton`.
- Row 406: keep "Build my homebuyer game plan" → game plan page.

**Purchase: other**
- Row 251: *Michigan Treasury: State Real Estate Transfer Tax → https://www.michigan.gov/taxes/business-taxes/misc/state-real-estate-transfer-tax-srett*
- Row 447 byline: *"Samantha Shelton, NMLS 1647301 · Updated {Month YYYY}"* (verb wording is [DECISION: Align], guide §7.8)
- Row 444: hold the 301 (P2, PM decision). Full sequence in the CSV.

**Refinance/Home/Trust: entity and Person (P0)**
- Row 333 (long): use guide §1 word for word: *"Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas."*
- Row 335 and the §5.3 `Person.description`: *"Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301, founded the company in Waterford, Michigan in August 2020. She has been a licensed loan officer since May 2020, is a Hall of AIME inductee (2024) and a 2023 Women With Vision honoree, and every Align guide is published under her name and license."*
- `Person.award`: `["Hall of AIME, Association of Independent Mortgage Experts, 2024", "Women With Vision, 2023"]` until NAMB is verified. Then add `"NAMB Broker of the Year, National Association of Mortgage Brokers, 2023"`.
- Row 264 (Samantha meta, 156): *"Samantha Shelton, NMLS 1647301, is Broker Owner of Align Lending in Waterford, MI, licensed since May 2020 and a Hall of AIME inductee. Read her background."*

**Refinance/Home/Trust: compliance and voice**
- Row 171 (break-even example): *"Hypothetical example, not an offer. Actual rates, costs and payments vary. If a refinance costs $4,500 to close and lowers the monthly payment by $150, the break-even is 30 months ($4,500 ÷ $150). Keep the loan five years and the change has paid for itself. Sell or refinance again within two years and it has not."* plus `[COUNSEL]`
- Row 293 (rate-policy ATF): *"An advertised mortgage rate is usually priced for a borrower with top credit, a large down payment and sometimes points paid up front. Yours depends on your credit, equity, loan type, lock period and that day's market. Samantha prices your file with multiple wholesale lenders, and your Loan Estimate is the official version of the numbers."*
- Row 25 (home H2): *"Michigan county and city mortgage guides"*. Row 343 (`/mortgage-michigan/` H1): *"Where Align Lending Works in Michigan: County and City Guides"*
- Row 10 (trust line, 160): *"No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas."*
- Row 5 (home H1, 69): *"Michigan Mortgage Broker: One Application, Multiple Wholesale Lenders"*
- Homepage tax teaser: *"Michigan property tax: about $5,400 a year · Planning number: a $300,000 home at 36.0 mills, the 2025 statewide median homestead rate in Align's 2026 Uncapping Study"*
- `/reviews/`: remove from the curated feed, or show NMLS IDs for, the reviews naming Kevin, Taylor, Ryan Greiner and Travis. They stay on Google.
- Refinance loan cards: *"Fixed-rate mortgage, longer term"* / *"Fixed-rate mortgage, shorter term"* in place of "30-Year Fixed" / "15-Year Fixed" until counsel rules.
- CTAs: "Talk with Samantha" replaces "Schedule a call with Samantha" (×3), "Pick a time to talk", "Get my refinance checkup", "Ask Samantha about your own situation", "Get a real number from Samantha" and "Talk through my equity options". Other replacements: "Compare cash-out and home equity" (row 101), "Estimate my available equity" (row 138), "Calculate my break-even" (rows 56, 165), "Check my Loan Estimate" (row 295), "Call 248-506-5727" (row 318).

---

## 6. Coverage

| Group | In scope | Full treatment? | Gaps |
|---|---|---|---|
| Purchase | 12 (`/purchase/` + 10 sub-pages + `/mortgage-process/`) | **Yes, 12/12.** Each page has a scorecard, query and intent, ATF rewrite, heading outline, title and meta, schema, internal links and an issues section. Each has CSV rows for H1, title, meta, ATF, primary and secondary CTA, H2s, schema, links and trust (23–52 rows per page). | (1) External linking and Media not scored on any page. (2) `/mortgage-process/` scored with purchase weights rather than Trust weights. (3) No government-disclaimer rows. (4) Dauer/Miketa reviews not checked. (5) The 14-day claim is fixed on one page only. |
| Refinance / Home / Trust | 11 | **Yes, 11/11.** Each page has a scorecard, outline, title and meta, ATF, CTAs, links and E-E-A-T. | (1) External linking and Media not scored. (2) Rate-policy H1, title and meta, and the agents meta, are KEEP decisions in the report with no KEEP rows in the CSV (minor). (3) No `Service` schema (provider = Organization `@id`) recommended for `/refinance/` and its 3 sub-pages, which guide §8.6 requires. (4) No government disclaimer for the homepage FHA/VA/USDA cards. (5) "30-Year/15-Year Fixed" cards not addressed. |

---

## 7. Cross-team conflicts for the consistency team

1. **Readiness Review 301 vs live CTA and link plans.** 03-purchase wants the 301. **01-ctas** adds 23 rows pointing to `/purchase/mortgage-readiness-review/#readiness`, including the credit-topic module and the lease-to-own article (15,242 impressions). **05-content-keywords** plans 5 blogs (N1, N16, N22, N23, N25) that link to it. Guide §5.2 lists "Take the readiness review" as a standard Plan label. Decide once: keep the page, or merge and repoint everything to Game Plan `#readiness` before the redirect ships.
2. **CTA labels and destinations differ by page between 03 and 01-ctas, and both differ from guide §5.2 in places.**

   | Page | 03 core proposes | 01-ctas proposes |
   |---|---|---|
   | Game Plan | "Build my homebuyer game plan" → Calendly | "Build my plan with Samantha" → Calendly |
   | First-Time | "Get my first-time buyer plan" → Calendly | "Plan my first purchase with Samantha" → Calendly |
   | Break-even | "Run a break-even estimate" primary | "Book my refinance checkup" → Calendly |
   | Cash-out | "Compare my options in 3 questions" → on-page tool | "Compare my options with Samantha" → Calendly |
   | `/refinance/` | "Talk through your options" | "Talk through your refinance options" |
   | DPA | "Check which programs fit me" → Calendly | "Start with a few questions" → `/start/?goal=buy` |
   | `/purchase/` hub | "Build my homebuyer game plan" → Calendly + "Get pre-approved" | "Build my homebuyer game plan" → game plan page + "Talk through your options" (this one matches the guide) |

   01-ctas also adds UTM parameters to every Calendly URL; the 03 rows do not. One owner (01-ctas) should publish the final label table, and 03 should defer to it.
3. **"How much house can I afford" is claimed twice.** 03-purchase gives `/purchase/budget-review/` the title "How Much House Can I Afford in Michigan?" and wants the calculator retitled "Home Affordability Calculator (DTI Limit)". The calculators group (`calculators-research-changes.csv`) titles the calculator "How Much House Can I Afford? Michigan Calculator | Align". Recommendation: the calculator owns the calculator query, and Budget Review owns "comfortably afford": *"How Much House Can I Comfortably Afford in Michigan? | Align"* (60).
4. **Refinance query ownership** is consistent across 03-refi, 05 and 02. `/learn/types-of-refinancing/` owns "refinancing options" (421 impressions); `/refinance/` owns Michigan transactional refinance terms; `/mortgage-refinance-calculator/` owns the calculator query. Two things to settle: 05 proposes the learn title *"Refinancing Options: 7 Types of Refinance Compared"*, so pick one; and 02-links and 03-refi both add a `/refinance/` → calculator link, so pick one anchor.
5. **Homepage vs `/mortgage-michigan/`.** 03-refi proposes a new H1 for a page 04-city-pages owns, using banned "lends" wording. Use *"Where Align Lending Works in Michigan: County and City Guides"*, with 04's sign-off. Also tell 04 that the crawl has 276 city-type URLs, including the non-standard `/mortgage-lender-in-farmington-hills/`, which affects the "See all 276 city guides" homepage claim.
6. **Preapproval queries.** 03-purchase gives "Michigan preapproval process" to `/mortgage-process/` and "michigan mortgage approval tips" to Game Plan. 05 plans `/learn/how-to-get-pre-approved-for-a-mortgage/`. Assign one owner and cross-link.
7. **Shared components owned by no single team.** The loan-option cards need the government disclaimer and term-neutral names. The trust strip needs the `/reviews/` link and the exact licensing string. The byline template: both core groups propose "Reviewed by…", which is [DECISION: Align]. The Organization/Person JSON-LD: 03-refi replaces the shared node; every team's page-level `Service` and `provider` must reference `https://alignlending.com/#organization`.
8. **Unsourced "under 14 days" claim** is also on 3 Learn pages (05/06) and `/mortgage-lender-lake-orion-mi/` (04). Fix it once, everywhere.
9. **NAMB Broker of the Year** appears on 18 pages across teams. The 03-refi schema change would add it to `Person.award`. Hold until PM-07 closes; the lead is "2023" per HousingWire.

---

## 8. Method notes

- Inlinks: `inlinks.json` `inlinks_content` (unique source pages). Link instances were recounted from `pages.jsonl` `links` where `region = content`.
- GSC: DataWise `queries` (search filters: mortgage broker, refinanc, mshda, first time, down payment assistance, readiness, ready, 10k, process, self employed, self-employed, michigan va, bridge loan, michigan mortgage, afford, how much house, break even, worth, align lending, home loan financing) and `overview` (90 days, which carries the page-level opportunities list). A query-to-page mapping is "confirmed" only where the opportunities list shows the page.
- Live fetches (2 pages, then MSHDA and Treasury pages one at a time with pauses): homepage JSON-LD parsed from the single `ld+json` graph. `va.gov`, `hud.gov`, `fhfa.gov`, `consumerfinance.gov` and `housingwire.com` were blocked by the session proxy, so claims resting only on them are unverifiable here.
- Shingle overlap: 5-word shingles on lower-cased `text/*.txt`.
- Weighted scores: auditor External linking and Media scores are in the working script. Every other aspect uses the team score unless listed in section 4.
