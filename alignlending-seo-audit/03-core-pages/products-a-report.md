# Products A: Purchase Loan Program Pages — Audit and Rewrite Plan

Align Lending SEO overhaul · 03-core-pages · Specialist: Core Pages (Products A) · Prepared 2026-11-15 · Data: crawl of 2026-11-15 (`pages.jsonl`, `page_summary.csv`, `link_graph.json`), DataWise GSC (90 days), DataWise People Also Ask (8 seeds), primary-source checks (FHFA, HUD, VA, USDA, Fannie Mae, Freddie Mac, CFPB, Michigan Treasury).

Read-only: nothing here has been changed on the live site. All replacement copy is exact final text, subject to Align approval where it describes how Align works. Items marked `[VERIFY: …]` or `[COMPLIANCE REVIEW]` must be cleared before publishing.

**Verification note.** Direct fetches of fhfa.gov and hud.gov were blocked by this session's network allowlist, so primary-source checks were made through search results that quote the official documents (FHFA 2026 release, HUD ML 2025-23, VA funding fee page, USDA program overview of January 2026, Fannie Mae SEL-2025-09 and HomeReady matrix, CFPB Reg Z commentary). External-link status for these pages is `0 / ProxyError` in `external_status.jsonl` (blocked, not broken). DataWise GSC returns queries without a page dimension; page mappings come from the brief or are inferred.

## 1. Summary

**Section score: 75/100 (C).** The 13 pages are well built and careful (comparison tables, official-source blocks, FAQPage schema, NMLS and Equal Housing on every page, no rates published). They underperform for three reasons: the first screen avoids the facts people search for, the shared template turns half of every outline into generic headings, and several pages are cut off from the guides and tools Google already ranks.

Top five findings:

1. **Above-the-fold copy hides the deciding facts.** None of the six priority pages states its key requirement in the first 60 words: no 580/3.5% on FHA, no "no down payment" on VA or USDA, no income limit on USDA, no 620/3%/PMI rule on conventional. VA and USDA use the euphemism "down payment options for eligible borrowers", which CFPB commentary shows is unnecessary: "no downpayment" does not trigger Reg Z disclosures (comment 24(d)(1)-1.ii).
2. **USDA demand is going to the wrong URLs.** "usda eligibility" (576 imprs, pos 11.1) and "usda rural development loan" (335, pos 13.9) map to /learn/usda-loan-basics/, while /product-loans/usda-loans/ has 92 contextual inlinks, does not link that article, and sends its mid-page CTA to the external USDA map instead of the site's own Michigan eligibility tool.
3. **Physician page is nearly orphaned** (2 contextual inlinks, 4 total), and its matching guide /learn/physician-mortgage-loans/ does not link to it. The 15-year (13), ARM (15), buydown (24) and 30-year (27) pages are also thinly linked, and none links the learn article that already ranks for its comparison query.
4. **One outdated fact, one wrong number, one rendering bug.** Conventional and FHA pages say credit below 620 is "usually declined" / "usually 620", but Fannie Mae removed DU's 620 minimum for casefiles created on or after Nov 16, 2025 (SEL-2025-09). The hub promises to "narrow fifteen options" while listing 21. The manufactured-home page shows four headings as literal "### Step 1…" text.
5. **Template headings and markup dilute every page.** "Key benefits", "Guidelines for this loan", "Questions about this loan", "Start with your question", "Learn", "Other loan options" plus three process-step H3s repeat on 11 pages; 42 "Read the guide" card anchors; MortgageLoan schema lists 283 cities per page; no page shows a reviewer or updated date.

Loan limits: FHFA has not announced 2027 limits as of today (it announces in late November). All copy uses 2026 limits ($832,750 conforming, $541,287 FHA) with a same-day update plan in section 6.

## 2. Scorecard

| Page | Intent/H1 | Headings | ATF | CTA | Title/meta | Int. links | E-E-A-T | AI-ready | Accuracy | Overall |
|---|---|---|---|---|---|---|---|---|---|---|
| /product-loans/ | 85 | 78 | 66 | 80 | 84 | 82 | 68 | 60 | 84 | **76 C** |
| /product-loans/fha-loans/ | 88 | 72 | 68 | 78 | 72 | 74 | 72 | 70 | 84 | **75 C** |
| /product-loans/va-loans/ | 88 | 72 | 72 | 80 | 68 | 76 | 72 | 66 | 84 | **75 C** |
| /product-loans/usda-loans/ | 84 | 72 | 64 | 68 | 66 | 62 | 68 | 60 | 88 | **70 C** |
| /product-loans/conventional-loans/ | 86 | 74 | 60 | 76 | 82 | 74 | 72 | 64 | 80 | **74 C** |
| /product-loans/jumbo-loans/ | 86 | 72 | 76 | 76 | 72 | 70 | 66 | 70 | 86 | **75 C** |
| /product-loans/home-ready/ | 84 | 72 | 76 | 76 | 80 | 66 | 72 | 64 | 90 | **76 C** |
| /product-loans/30-year-fixed/ | 78 | 74 | 76 | 80 | 64 | 62 | 70 | 70 | 76 | **72 C** |
| /product-loans/15-year-fixed/ | 80 | 72 | 76 | 78 | 80 | 58 | 70 | 70 | 74 | **73 C** |
| /product-loans/adjustable-rate-mortgage/ | 84 | 76 | 76 | 76 | 74 | 62 | 70 | 76 | 88 | **76 C** |
| /product-loans/buydown-loans/ | 82 | 72 | 80 | 80 | 82 | 70 | 66 | 74 | 84 | **77 C** |
| /product-loans/physician-loans/ | 86 | 80 | 80 | 76 | 82 | 40 | 74 | 82 | 82 | **76 C** |
| /product-loans/manufactured-home-loans/ | 86 | 56 | 80 | 76 | 82 | 76 | 78 | 84 | 90 | **79 C** |
| **Average** | 84 | 72 | 73 | 77 | 76 | 67 | 71 | 70 | 84 | **75 C** |

Grades: A 90–100 · B 80–89 · C 70–79 · D 60–69 · F <60. Each score's one-line evidence is in `scores-products-a.csv`.

## 3. Findings ranked by impact

| # | Priority | Impact | Finding | Evidence | Fix |
|---|---|---|---|---|---|
| 1 | P0 | critical | ATF copy on the 6 priority pages omits the key requirement and Align's angle | above_fold_text for FHA/VA/USDA/conventional/jumbo/hub; e.g. USDA: "with down payment options for eligible addresses and incomes" | Replace with the ≤60-word subheads in section 7 (each states who it fits, the requirement, and Align's angle). |
| 2 | P0 | high | USDA cannibalization and missing links | GSC: "usda eligibility" 576/pos 11.1 and "usda rural development loan" 335/pos 13.9 on /learn/usda-loan-basics/; product page 92 contextual inlinks; no link to the learn article; mid-CTA → external map | Ownership split in section 7.4; CTA to /usda-eligibility-check/; reciprocal links; H1 adds "Rural Development". |
| 3 | P0 | high | Physician page nearly orphaned | all_inlinks=4, content_inlinks=2; /learn/physician-mortgage-loans/ has no link to it | Add menu/footer entry and 5 contextual inbound links (section 7.12). |
| 4 | P0 | medium | Outdated 620 credit floor on conventional and FHA pages | "Credit below 620: Usually declined"; "Usually 620" | Fannie Mae SEL-2025-09 (DU minimum removed 11/16/2025). Exact replacement text in changes CSV. |
| 5 | P0 | medium | Hub states "narrow fifteen options" but lists 21 | /product-loans/ body copy | "narrow more than 20 options". |
| 6 | P0 | high | Manufactured page renders 4 headings as literal ### text | text file shows "### Step 1: …", "### Step 2…", "### Step 3…", "### In Michigan" | Output real <h3> elements. |
| 7 | P1 | high | No quotable numbers for AI answers | No 3.5%, 1.75%, funding-fee table, USDA 1%/0.35%, $122,800 income limit, HomeReady 25% MI coverage on any product page | New question-led H2s with verified figures (flagged for compliance review where they state fees or down-payment percentages). |
| 8 | P1 | high | Product pages do not link the learn articles/tools Google already ranks | No link: USDA→/learn/usda-loan-basics/, HomeReady→/learn/homeready-mortgages/ (pos 6.5), 15-year→/learn/15-year-vs-30-year-mortgage-comparison/ (pos 6.1), conventional→/pmi-removal-calculator/, FHA→/learn/fha-loan-limits/ | Exact anchors per page in section 7 and the changes CSV. |
| 9 | P1 | medium | Titles lead with "Broker" and 5 metas are under 140 chars | FHA/VA/USDA/jumbo titles "Michigan X Loan Broker"; metas 103-137 chars on 30-year, VA, USDA, jumbo, ARM | New titles/metas (all ≤60 / 140-160). |
| 10 | P1 | medium | No reviewer or visible updated date on any page | byline=None, visible_updated=None (13/13) | Add "Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026" and `reviewedBy` schema. |
| 11 | P1 | medium | Generic template headings and "Read the guide" anchors | 11 pages share 6 generic H2s + 3 process H3s; 42 "Read the guide" anchors | Section 5 template changes. |
| 12 | P1 | medium | MortgageLoan schema lists 283 cities | FHA raw HTML: areaServed 283 City nodes; page HTML ~400 KB | areaServed: State Michigan. |
| 13 | P1 | medium | Reg Z trigger terms need a compliance decision | CFPB comment 24(d)(1): "30-year mortgage" is a repayment-period trigger; 15-year/30-year pages use it in H1/title | Section 6: counsel decision; no rename recommended without it. |
| 14 | P2 | low | VA page Michigan exemption link likely outdated | links /taxes/property/exemptions/homeowner/disabled-veteran-exemption; Treasury page now at /taxes/property/exemptions/veterans/disabled-veterans-exemption | Update link. |
| 15 | P2 | low | Unsourced first-person Samantha quotes | Physician and manufactured "How Samantha helps" blocks | [VERIFY] sign-off by Samantha. |

## 4. Query ownership map (who owns the head term)

| Query cluster (GSC evidence) | Owner URL | Supporting URLs (link to owner with the anchor shown) |
|---|---|---|
| michigan mortgage loan programs; align lending waterford (lands on hub) | /product-loans/ | /learn/loan-types/ ("compare Michigan loan programs"); homepage/about-us should own branded-local |
| michigan fha loans (67, pos 12.2); michigan fha loan requirements (48, 22.1) | /product-loans/fha-loans/ | /learn/fha-loans/, /learn/fha-loan-limits/ ("FHA loans in Michigan") |
| fha loan limits (186, 42.4); fha county loan limits (164, 45.9) | /learn/fha-loan-limits/ | FHA product page H2 links "how FHA loan limits are set" |
| fha loan limits michigan (154, 42.1); michigan loan limits 2026/2027 | /loan-limits/ | FHA and jumbo pages ("look up the FHA limit for any county") |
| michigan va loans (52, 49.4); michigan va loan eligibility (22, 22.9) | /product-loans/va-loans/ | /learn/va-loans/, /va-loan-calculator/ |
| va loan requirements (169, 77) | /learn/va-loans/ | VA product page |
| va funding fee calculator (145, 23) | /va-funding-fee-calculator/ | VA product page funding fee H2 |
| usda eligibility (576, 11.1); usda income limits (43-85) | /usda-eligibility-check/ | /learn/usda-loan-basics/ (add ATF link), USDA product page |
| usda rural development loan (335, 13.9); usda loans michigan; michigan usda loan broker (47, 9.5) | /product-loans/usda-loans/ | /learn/usda-loan-basics/ ("USDA loans in Michigan") |
| michigan conventional loans (24, 14.3) | /product-loans/conventional-loans/ | /learn/conventional-loans/, /learn/what-is-conventional-97-loan/ |
| michigan jumbo loan (155, 46.4); ann arbor jumbo loan (79, 40.7) | /product-loans/jumbo-loans/ | /learn/how-to-qualify-for-jumbo-loan/, Ann Arbor/Birmingham/Bloomfield Hills city pages |
| homeready mortgage (68, 6.5) | /learn/homeready-mortgages/ (keep) | Product page owns "HomeReady Michigan"; reciprocal links |
| 15 year vs 30 year mortgage calculator (52, 6.1) | /learn/15-year-vs-30-year-mortgage-comparison/ | 15-year and 30-year product pages |
| fixed vs adjustable rate mortgage (61, 46.8) | /learn/fixed-vs-arm/ | ARM product page |
| michigan physician loan (26, 29.9) | /product-loans/physician-loans/ | /learn/physician-mortgage-loans/ (add link) |
| michigan manufactured home loans (22, 29.7) | /product-loans/manufactured-home-loans/ | /learn/manufactured-homes-pros-and-cons/, /learn/refinancing-manufactured-home/ |

Bing: no Bing Webmaster export is connected, so no Bing positions are claimed. Bing weighs exact-match titles and visible dates more than Google; the title and reviewer/updated-date changes help there. A Bing export is needed to confirm.

## 5. Sitewide template changes (11 template pages; physician and manufactured use a newer template)

| Current | Recommended exact | Why |
|---|---|---|
| H2 Key benefits | H2 Why Michigan buyers choose {program}  (ARM/jumbo/buydown: How {program} works) | Entity in heading; "Key benefits" repeats on 11 pages. |
| H2 Guidelines for this loan + label H3s (Credit Score, DTI Ratio …) | H2 What are the {program} requirements in Michigan? + 40-60-word answer + requirements table (rows, not headings) | Question-led; matches "{program} requirements michigan" queries; removes 4-5 label H3s per page. |
| H2 Check the rules at the source | H2 Where we check {program} rules | Entity-specific; keeps the Sources function. |
| H2 Questions about this loan | H2 {Program} questions Michigan buyers ask | Entity + location. |
| H3 ×3 Tell us what you are trying to do / We look at your situation / You leave with a plan | Styled ordered list (no heading tags) | Decorative; 39 H3s across scope. |
| H2 Start with your question | H2 Plan your next step | Clearer label. |
| H2 Learn | H2 {Program} guides from the Learn Center | Entity. |
| H2 Other loan options | H2 Compare {program} with other Michigan loans | Entity. |
| Card links ending "Read the guide" | Descriptive inline anchors per row (exact anchors in section 7) | 42 generic anchors. |
| No reviewer/date | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026 | E-E-A-T and freshness. |
| MortgageLoan areaServed = 283 City nodes | areaServed = State Michigan | Lean schema. |

Stat-as-heading check: no stat values are marked up as headings on these 13 pages (the pattern seen elsewhere on the site). Two headings carry a dollar figure that goes stale yearly (hub H3 "Borrow above $832,750", jumbo FAQ "Where in Michigan do loans go above $832,750?"); both are renamed. Heading misuse found: literal markdown headings (manufactured), label H3s used as card titles, a calculator H3 reading "The loan" (buydown), and an action ("Request Your COE Early") filed under Key benefits (VA).

## 6. Compliance and update notes

- **Down payment wording.** CFPB's Reg Z commentary (comment 24(d)(1)-1.ii) says statements such as "no downpayment" do not trigger additional disclosures and that the down-payment trigger is limited to credit-sale transactions. Recommended copy therefore says "no down payment" for VA and USDA. Where copy states a down-payment percentage (3%, 3.5%, 10%) it is marked `[COMPLIANCE REVIEW]`; if Align's compliance review keeps the current no-percentage policy, use the fallback noted in the changes CSV (keep "a low minimum down payment"). The site's own learn articles already publish these percentages in titles (e.g. /learn/low-down-payment-mortgages/ "4 Options From 0% To 3.5%"), so a single policy is needed (flag to 09-consistency).
- **Fee percentages** (FHA 1.75% UFMIP, VA funding fee table, USDA 1%/0.35%) are government fee schedules quoted with sources; marked `[COMPLIANCE REVIEW]` because fees are finance-charge components.
- **Repayment-period trigger.** CFPB comment 24(d)(1) lists "30-year mortgage" as a triggering term. The 15-year and 30-year pages use the term as a product name in H1/title/URL. No rename is recommended (it would remove the page's topic); Align's compliance reviewer should confirm the product-name use is acceptable or add a compliant representative-example disclosure.
- **No rates.** No recommendation publishes a rate. Rate-intent queries ("15 year fixed mortgage rates michigan", 39 imprs) get a no-rate FAQ that links Freddie Mac's PMMS. The VA, HomeReady and buydown calculators list 5.000%–10.000% as input options; keep the "Estimates only… not a rate quote" disclaimer adjacent to results.
- **Quotes.** Physician and manufactured pages carry first-person Samantha quotes without attribution; confirm they are her approved words ([VERIFY]).
- **2027 limits update plan.** When FHFA publishes 2027 limits (expected late November 2026; effective January 1, 2027) and HUD follows: update $832,750 on hub card text, conventional (subhead, requirements, table, FAQ, schema amount), jumbo (subhead, requirements, FAQ, meta, schema), physician (Who it fits), and $541,287 plus 2-4 unit figures on FHA (subhead, H2, title year, meta, schema). Titles that include "2026" (FHA) change to "2027" on January 1, 2027. Jumbo title deliberately has no figure.

## 7. Page-by-page plans

### 7.1 Loan programs hub — `/product-loans/` — 76/100 (C)

**Target query and intent.** Primary: michigan mortgage loan programs / michigan home loan options. Secondary: types of mortgage loans michigan; align lending waterford (branded, lands here); mortgage broker loan programs.  
GSC evidence: Branded "align lending" 1,293 imprs pos 5.0 (71 clicks); "align lending" "waterford" 180 imprs pos 13.7 lands on /product-loans/ per brief. Generic "mortgage loan types" 4 imprs pos 89. The hub is the site's #3 most-linked page (382 contextual inlinks, 3,231 total).  
PAA used: Where is the best place to get a mortgage loan?; What type of loan is most likely to be approved?; What loan is better than a VA loan?; Is it better to have conventional or FHA or USDA?

**Cannibalization and ownership.** Owner: /product-loans/ for commercial "Michigan loan programs/options". Support: /learn/loan-types/ (5,893 words, 72 inlinks) owns informational "types of mortgage loans" and /learn/loan-comparisons/ owns "how to choose a loan type". The hub must link to /learn/loan-types/ with an informational anchor, and /learn/loan-types/ should link back with "compare Michigan loan programs". Branded "align lending waterford" should land on the homepage or /about-us/; add the Waterford office line to the hub trust strip so the hub at least answers that query cleanly, and tell the links team to strengthen homepage/about-us for branded-local anchors.

**Above the fold (exact).**

- Current: Loan options / Michigan Mortgage Loan Programs / "Compare your loan options Start with what you are trying to do; each card below opens the loan that usually fits." CTAs: Talk through your options (Calendly) + Start with a few questions (/start/). Trust: No application required, No credit pull to talk, 5.0 on Google, 123 reviews.
- Eyebrow: Michigan home loan programs
- H1 (KEEP): Michigan Mortgage Loan Programs
- Subhead (56 words): Compare more than 20 loan programs, from conventional, FHA, VA and USDA to jumbo, bank statement and DSCR loans. Start with what you are trying to do, not a product name. Align Lending is an independent broker in Waterford, Michigan, so Samantha compares wholesale lenders and narrows the list to the two or three that fit.
- Primary CTA: **Talk through your options** → https://calendly.com/samanthashelton
- Secondary CTA: **Start with a few questions** → https://alignlending.com/start/
- Tertiary text link: Check 2026 loan limits for your county → https://alignlending.com/loan-limits/
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews · Office in Waterford, Michigan
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Michigan Mortgage Loan Programs |  |
| H2 | KEEP | What are you trying to do? | Good question-led opener; keep the eight goal cards. |
| H3 | RENAME | Borrow above $832,750  →  Borrow above the conforming limit | A dollar figure in a heading goes stale every January; keep $832,750 in the card text and update it with the 2027 figure. |
| H3 | KEEP | Other seven goal cards (Buy with a smaller down payment … Trade an adjustable rate for a fixed one) |  |
| H2 | RENAME | Standard and government-backed loans  →  Conventional and government-backed loans | Uses the words searchers use. |
| H2 | RENAME | How the rate and term are structured  →  Fixed, adjustable and bought-down rates |  |
| H2 | KEEP | Larger loans and non-traditional income |  |
| H2 | KEEP | When the home or the buyer needs its own route |  |
| H2 | KEEP | Using the equity you already have |  |
| H2 | NEW | Which mortgage loan is right for me? | It depends on four things: your credit, the cash you have for the down payment and closing, the price of the home against the county loan limit, and whether you have military service or a rural address. The choice usually comes down to two loans, such as conventional against FHA, or VA against conventional. Samantha prices both on your numbers. |
| H2 | NEW | How do the main Michigan loan programs compare? | TABLE (see below). Lead-in: "Program rules for 2026. Lenders can add stricter requirements, and every figure here comes from the agency that sets it." |
| H2 | NEW | Loan program questions Michigan buyers ask | FAQ block with FAQPage schema (questions below). |
| H3 | NEW | Which loans need no down payment? | VA loans for eligible borrowers with full entitlement and USDA loans for eligible rural addresses and incomes. Neither requires a down payment, though closing costs still apply unless the seller or a lender credit covers them. Conventional and FHA loans need a small down payment. |
| H3 | NEW | What are the 2026 loan limits in Michigan? | Every Michigan county has the same 2026 limits for a one-unit home: $832,750 for a conforming loan and $541,287 for FHA. VA has no limit with full entitlement and USDA sets no loan limit. FHFA announces 2027 limits in late November; this page updates when it does. |
| H3 | NEW | What is the easiest mortgage to qualify for? | There is no single answer. FHA accepts the lowest credit scores, VA and USDA ask the least cash, and conventional usually costs the least over time with good credit. The easiest loan is the one whose rules your file already meets, which is what the first call sorts out. |
| H3 | NEW | Can a mortgage broker offer loans my bank does not? | Often. A bank offers its own programs. Align Lending is an independent broker that submits loans to multiple wholesale lenders, so one application can be matched to the lender whose rules fit your file, including jumbo, non-QM and physician programs a single bank may not offer. |
| H2 | KEEP | What our clients say |  |
| H2 | KEEP | Not sure which loan you need? | Fix the body copy: "narrow fifteen options" → "narrow more than 20 options" (the hub lists 21 programs). |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Process steps as a styled list, not headings. |
| H2 | RENAME | Start with your question  →  Plan your next step |  |
| H2 | RENAME | Calculators  →  Loan calculators and tools | Add Loan limits by county, USDA eligibility check, VA funding fee calculator and PMI removal calculator to this block. |
| H2 | RENAME | Learn  →  Guides to Michigan loan types |  |

**Table to add (exact).**

| Program | Usually fits | Down payment (program minimum) | Insurance or fee | 2026 Michigan limit (1 unit) |
|---|---|---|---|---|
| Conventional | Steady income; most lenders want 620+ | 3% for first-time buyers | PMI under 20% down; can be cancelled | $832,750 |
| FHA | Credit 580+ (500–579 with 10% down) | 3.5% with a 580+ score | 1.75% upfront plus annual MIP | $541,287 |
| VA | Eligible veterans, service members, some surviving spouses | None with full entitlement | No monthly MI; funding fee unless exempt | No VA limit with full entitlement |
| USDA | Eligible rural or small-town address; income at or under county limit | None | 1% upfront, 0.35% annual | No loan limit; income limit $122,800 (1–4 people) in most counties |
| HomeReady / Home Possible | Income at or under 80% of area median | 3% | Reduced MI coverage | $832,750 |
| Jumbo | Loan above the conforming limit | Set by each lender | Usually none | Starts above $832,750 |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Michigan Mortgage Loan Programs | Align Lending | Michigan Mortgage Loan Programs | Align Lending | 47 |
| Meta | Compare Michigan home loans: conventional, FHA, VA, USDA, jumbo, non-QM, fixed and adjustable terms, and home equity. Start with what you are trying to do. | Compare Michigan home loans side by side: conventional, FHA, VA, USDA, jumbo, non-QM and home equity. Start with your goal. No credit pull to talk. | 147 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Conforming limit used for jumbo threshold | $832,750 (2026), every Michigan county | $832,750 one-unit baseline for 2026; no Michigan high-cost county. 2027 not yet announced (FHFA announces late Nov). | https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026 | correct (flag for 2027 update) |
| Number of options Samantha narrows | "narrow fifteen options" | The hub lists 21 program cards (21 product URLs) | https://alignlending.com/product-loans/ | wrong (internal inconsistency) |
| HomeReady/Home Possible income rule | households at or under 80% of AMI | 80% of AMI for the property location (Fannie B5-6-01; Freddie Home Possible) | https://selling-guide.fanniemae.com/sel/b5-6-01/homeready-mortgage-loan-and-borrower-eligibility | correct |
| FHA mortgage insurance can last life of loan | can last the life of the loan | Life of loan when LTV > 90% at origination; 11 years at ≤ 90% | https://archives.hud.gov/news/2023/pr23-041.cfm | correct |
| VA: no monthly MI; funding fee unless exempt | as stated | Correct per VA | https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/ | correct |
| Temporary buydown: first one to three years; qualify at full payment | as stated | Fannie B2-1.4-04: max 3 years; B3-6-04: qualify at note rate | https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns | correct |

**Schema.** Keep CollectionPage + ItemList + BreadcrumbList. Add FAQPage for the 4 new questions (visible text must match). Add `about` → each ItemList entry's MortgageLoan @id so the hub is the parent entity of the 21 product nodes. Add WebPage `dateModified` and `reviewedBy` → Person Samantha Shelton (@id https://alignlending.com/samantha-shelton/#person).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "how each type of mortgage works" → https://alignlending.com/learn/loan-types/ — Under new H2 "Which mortgage loan is right for me?"
- "2026 loan limits for every Michigan county" → https://alignlending.com/loan-limits/ — ATF tertiary link + new FAQ "What are the 2026 loan limits in Michigan?"
- "Check whether an address qualifies for USDA" → https://alignlending.com/usda-eligibility-check/ — USDA row of the comparison table + Loan calculators and tools block
- "Estimate your VA funding fee" → https://alignlending.com/va-funding-fee-calculator/ — VA row of the table + tools block
- "See when PMI would come off" → https://alignlending.com/pmi-removal-calculator/ — Conventional row of the table + tools block
- "Michigan down payment assistance" → https://alignlending.com/purchase/down-payment-assistance/ — Goal card "Buy with a smaller down payment"
- "FHA, VA and USDA compared" → https://alignlending.com/learn/government-backed-loans/ — Under the comparison table

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/loan-types/ → "compare Michigan loan programs" → https://alignlending.com/product-loans/
- https://alignlending.com/learn/loan-comparisons/ → "every Michigan loan program Align offers" → https://alignlending.com/product-loans/
- https://alignlending.com/purchase/ → "Compare Michigan loan programs" → https://alignlending.com/product-loans/

### 7.2 FHA — `/product-loans/fha-loans/` — 75/100 (C)

**Target query and intent.** Primary: fha loans michigan / michigan fha loans. Secondary: michigan fha loan requirements; fha loan requirements michigan; michigan apply for fha loan; fha loan lenders; best fha lender in farmington hills mi.  
GSC evidence: "michigan fha loans" 67 imprs pos 12.2 (this page); "michigan fha loan requirements" 48 pos 22.1; "michigan apply for fha loan" 26 pos 11.3; "fha loan lenders" 53 pos 12.1; "best fha lender in farmington hills mi" 40 pos 17.2. Limit cluster is large but ranks poorly: "fha loan limits" 186 pos 42.4, "fha loan limits michigan" 154 pos 42.1, "fha county loan limits" 164 pos 45.9. 263 FHA queries, 0 clicks.  
PAA used: How to qualify for an FHA loan in Michigan?; What disqualifies you from an FHA loan?; What would disqualify a home from an FHA loan?; What's the downside of an FHA loan?; Why do sellers not like FHA?; What is the new FHA loan limit for 2026?; What are the new FHA guidelines for 2026?; Does the state of Michigan offer assistance with mortgage payments? (MSHDA cluster)

**Cannibalization and ownership.** Owner: /product-loans/fha-loans/ for "FHA loans Michigan", "Michigan FHA loan requirements" and apply/lender intent. Support: /learn/fha-loans/ (national "what is an FHA loan / MIP / 203(k)"), /learn/fha-loan-limits/ (generic "fha loan limits", 4,311 words), /loan-limits/ ("fha loan limits michigan", "michigan loan limits 2026"), /pmi-removal-calculator/ ("fha pmi removal calculator" pos 7). The product page answers the limit in one H2 and hands off to /loan-limits/ for county lookups; it does not try to outrank /learn/fha-loan-limits/ on the national head term. The product page currently does not link /learn/fha-loan-limits/ at all.

**Above the fold (exact).**

- Current: For home buyers / FHA Loans in Michigan / "An FHA loan is insured by the Federal Housing Administration, which lets lenders accept lower credit scores and smaller down payments. What decides it is whether the mortgage insurance ever goes away, and the table below answers that." CTAs: Start my application + Talk with Samantha.
- Eyebrow: FHA loans for Michigan home buyers
- H1 (KEEP): FHA Loans in Michigan
- Subhead (58 words): An FHA loan fits Michigan buyers with credit in the 500s or 600s, a recent setback, or little saved. HUD's minimum is 3.5% down with a 580 score, and the 2026 limit is $541,287 in every Michigan county. The tradeoff is mortgage insurance that can last the life of the loan, so Samantha prices FHA against conventional first.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Check your county's FHA limit** → https://alignlending.com/loan-limits/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | FHA Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  Why Michigan buyers choose FHA |  |
| H3 | KEEP | Low Down Payment | Card text: "3.5% down with a credit score of 580 or higher." [COMPLIANCE REVIEW: down-payment percentage] |
| H3 | KEEP | Flexible Credit Requirements | Card text: "500 to 579 is possible with 10% down. Past credit issues do not rule you out; FHA sets waiting periods after a bankruptcy or foreclosure." |
| H3 | RENAME | Refinance Options  →  Streamline Refinance Later |  |
| H3 | KEEP | Assumable Later |  |
| H2 | NEW | What are the FHA loan requirements in Michigan? | HUD requires a 580 credit score for its 3.5% minimum down payment, or 10% down with a score from 500 to 579. The home must be your primary residence, the loan must fit Michigan's $541,287 limit for 2026, and the appraisal must meet HUD's safety standards. Lenders can set stricter credit minimums than HUD. |
| H3 | REMOVE | Primary Residence Only / Credit Score / DTI Ratio / Closing Costs / Mortgage Insurance (label H3s) | Replace the five label H3s of "Guidelines for this loan" with the requirements table below (rows, not headings). Keep each row's link to its guide with a descriptive anchor (see Internal links). |
| H2 | RENAME | FHA or conventional: which one actually fits  →  Is FHA or conventional better for me? | If your score is around 680 or higher and you can put 5% or more down, conventional usually costs less over time because its mortgage insurance comes off. FHA usually wins with credit in the 500s or low 600s, a higher debt load, or a recent credit event. Keep the existing comparison table under this answer. |
| H2 | NEW | How much is FHA mortgage insurance, and when does it end? | FHA charges an upfront premium of 1.75% of the loan, usually added to the balance, plus an annual premium paid monthly [VERIFY: current annual MIP 0.50%–0.55% in HUD Handbook 4000.1 Appendix 1.0]. With less than 10% down, the annual premium lasts for the life of the loan. With 10% or more down, it ends after 11 years. |
| H2 | NEW | What is the FHA loan limit in Michigan for 2026? | $541,287 for a one-unit home in all 83 Michigan counties, which is HUD's national floor. Two units: $693,050. Three: $837,700. Four: $1,041,125. The limit caps the loan amount, not the price. HUD sets 2027 limits after FHFA's late-November announcement, and this page updates when they post. |
| H2 | NEW | Can I use down payment assistance with an FHA loan? | Often, yes. FHA accepts down payment and closing cost help from approved government and nonprofit programs, and many Michigan grant, forgivable and deferred programs pair with an FHA first mortgage. Each program adds its own income, price and homebuyer-education rules. [VERIFY with Align: which Michigan programs, including MSHDA, Align can place] |
| H2 | RENAME | Check the rules at the source  →  Where we check FHA rules | Add HUD Handbook 4000.1 and the 2026 limits Mortgagee Letter (ML 2025-23) to the two existing HUD links. |
| H2 | RENAME | Questions about this loan  →  FHA loan questions Michigan buyers ask | Keep 6 existing questions; move "What is the FHA loan limit in Michigan?" up to its own H2 (above); add 3 new questions. |
| H3 | KEEP | Can I use an FHA loan if I have owned a home before? / Can my parents give me the whole down payment? / What is an FHA Streamline Refinance? / Can a parent co-sign if they will not be living with me? / Can I buy a duplex and rent out the other side? / Will I be stuck paying FHA mortgage insurance forever? |  |
| H3 | NEW | How long after bankruptcy or foreclosure can I get an FHA loan? | Usually two years after a Chapter 7 discharge, one year into a Chapter 13 repayment plan with the court's permission, and three years after a foreclosure, with credit re-established since. Documented circumstances beyond your control can shorten some of these. [VERIFY: waiting periods against HUD Handbook 4000.1 II.A.5.a.iii before publishing] |
| H3 | NEW | What would disqualify a house from an FHA loan? | Safety, security and soundness problems the appraiser flags: a failing roof, exposed wiring, no working heat, missing handrails, or peeling paint on a home built before 1978. Most are repairable before closing, often at the seller's expense. Cosmetic wear does not disqualify a house. |
| H3 | NEW | Why do some sellers hesitate at FHA offers? | Mostly because of the appraisal. FHA appraisers check condition as well as value, so a seller may worry about repair requests. A clean preapproval, a realistic price and a pre-listing look at obvious safety items usually settle it. An FHA offer is a fully financed offer. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  FHA guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare FHA with other Michigan loans | Entity-specific sibling block. |

**Table to add (exact).**

| Requirement | FHA rule (2026) | Where it comes from |
|---|---|---|
| Credit score | 580+ for the 3.5% minimum; 500–579 needs 10% down; below 500 not eligible | HUD |
| Down payment | 3.5% (580+) or 10% (500–579); gifts from family, employer or approved programs allowed | HUD |
| Loan limit | $541,287 (1 unit) in every Michigan county | HUD ML 2025-23 |
| Debt-to-income | Set by FHA's automated scorecard; manual underwriting starts at 31% housing / 43% total | HUD |
| Mortgage insurance | 1.75% upfront + annual premium; life of loan under 10% down, 11 years at 10%+ | HUD |
| Occupancy | Primary residence, 1–4 units, move in within 60 days | HUD |
| Property | Must meet HUD minimum property standards (safety, security, soundness) | HUD |
| Credit events | Waiting periods after bankruptcy or foreclosure [VERIFY 4000.1] | HUD |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Michigan FHA Loan Broker | Align Lending | FHA Loans in Michigan: 2026 Limits & Rules | Align Lending | 58 |
| Meta | FHA loans in Michigan, explained: flexible credit requirements, low down payment options, and when FHA mortgage insurance does and does not come off. | FHA loans in Michigan: 580 credit for 3.5% down, a $541,287 limit in every county for 2026, and when FHA mortgage insurance ends. No credit pull to talk. | 153 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| FHA 1-unit limit, every Michigan county, 2026 | $541,287 | $541,287 = 2026 national floor (65% of $832,750); Michigan counties sit at the floor | https://www.hud.gov/sites/dfiles/hudclips/documents/2025-23hsgml.pdf | correct |
| Low minimum down payment needs 580+ | 580 or higher | 580+ = maximum financing (96.5% LTV); 500–579 = 90% LTV; <500 ineligible | https://answers.hud.gov/FHA/s/article/Does-FHA-require-a-minimum-credit-score-and-how-is-it-determined | correct |
| 500 to 579 possible with larger down payment | larger down payment | 10% down (90% max LTV) | https://answers.hud.gov/FHA/s/article/Does-FHA-require-a-minimum-credit-score-and-how-is-it-determined | correct (make specific: 10%) |
| MIP life of loan above 90% LTV; drops after 11 years at ≤90% | as stated | Unchanged since ML 2013-04; still in Handbook 4000.1 Appendix 1.0 | https://archives.hud.gov/news/2023/pr23-041.cfm | correct |
| Upfront MIP applies, usually financed | "An upfront premium applies" | 1.75% of base loan, nearly always financed (HUD Q1 FY2026 MMI report) | https://www.hud.gov/sites/default/files/Housing/documents/MMI-Qtrly-Q1-FY2026.pdf | correct (add the 1.75% figure) |
| DTI up to 57% with automated approval | Up to 57% | No HUD cap for TOTAL Scorecard accepts; ~57% is an AUS outcome, not a rule. Manual: 31/43, up to 40/50 with compensating factors | https://answers.hud.gov/FHA/s/article/What-are-the-maximum-qualifying-ratio-requirements-for-manually-underwritten-loans | partially correct (reword as AUS-dependent) |
| Conventional lowest workable credit score | "Usually 620" | Fannie Mae removed DU's 620 minimum for casefiles created on/after 11/16/2025 (SEL-2025-09); many lenders keep a 620 overlay | https://singlefamily.fanniemae.com/news-events/announcement-sel-2025-09-selling-guide-updates | outdated |
| Conventional DTI generally up to 50% | Generally up to 50% | Fannie DU max 50% | https://selling-guide.fanniemae.com/sel/b3-6-02/debt-to-income-ratios | correct |
| Conventional PMI: request at 80%, auto at 78% | as stated | Homeowners Protection Act | https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/ | correct |
| FHA credit score models | not on page | ML 2026-11 adds FICO 10T and VantageScore 4.0 for case numbers on/after 1/1/2027; minimums unchanged | https://www.hud.gov/sites/default/files/hudclips/documents/2026-11hsgml.pdf | add (new for 2027) |
| Michigan taxable value uncaps to half of market value the year after sale | as stated | Taxable value uncaps to SEV (50% of true cash value) the year after a transfer | https://www.michigan.gov/taxes/property/change-ownership | correct |
| Gift funds can cover 100% of down payment and closing | as stated | FHA allows gifts from family, employer, approved programs | https://www.hud.gov/hud-partners/single-family-handbook-4000-1 | correct |

**Schema.** MortgageLoan (#loan): keep name/loanType/provider/description; REPLACE the 283-item City areaServed with `"areaServed": {"@type": "State", "name": "Michigan"}`; add `"amount": {"@type": "MonetaryAmount", "maxValue": 541287, "currency": "USD"}` (2026 one-unit limit, update yearly) and `"loanTerm"` omitted (Reg Z). FAQPage: regenerate from the visible FAQ (9 questions incl. 3 new; remove the limit question that moved to an H2, or keep it in both visible FAQ and schema). WebPage: add `reviewedBy` → #person and keep `dateModified`.

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "how FHA loan limits are set" → https://alignlending.com/learn/fha-loan-limits/ — New H2 "What is the FHA loan limit in Michigan for 2026?"
- "look up the FHA limit for any county" → https://alignlending.com/loan-limits/ — Same H2 + ATF secondary CTA
- "estimate an FHA payment" → https://alignlending.com/mortgage-calculator/ — Under the FHA vs conventional table
- "FHA mortgage insurance, explained" → https://alignlending.com/learn/mortgage-insurance/ — Requirements table, Mortgage insurance row (replaces "Read the guide")
- "FHA debt-to-income limits" → https://alignlending.com/learn/debt-to-income-ratio-dti/ — Requirements table, DTI row (replaces "Read the guide")
- "what credit score you need" → https://alignlending.com/learn/whats-good-credit-score-to-buy-house/ — Requirements table, Credit row
- "Michigan down payment assistance" → https://alignlending.com/purchase/down-payment-assistance/ — New H2 on down payment assistance
- "how the FHA Streamline Refinance works" → https://alignlending.com/learn/fha-streamline-refinance-loans/ — FAQ "What is an FHA Streamline Refinance?"
- "buying and renovating with an FHA 203(k)" → https://alignlending.com/learn/benefits-of-fha-203-k-loans/ — FAQ "What would disqualify a house…"
- "refinancing from FHA to conventional" → https://alignlending.com/learn/refinancing-to-remove-mortgage-insurance/ — MIP H2

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/fha-loan-limits/ → "FHA loans in Michigan" → https://alignlending.com/product-loans/fha-loans/
- https://alignlending.com/loan-limits/ → "FHA loans in Michigan: requirements" → https://alignlending.com/product-loans/fha-loans/
- https://alignlending.com/pmi-removal-calculator/ → "how FHA mortgage insurance works in Michigan" → https://alignlending.com/product-loans/fha-loans/
- https://alignlending.com/mortgage-lender-farmington-hills-mi/ → "FHA loans in Michigan" → https://alignlending.com/product-loans/fha-loans/

**Schema example (FHA; pattern for all program pages).**

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "MortgageLoan", "@id": "https://alignlending.com/product-loans/fha-loans/#loan",
     "name": "FHA Loan", "loanType": "FHA",
     "description": "FHA loans in Michigan: 580 credit for 3.5% down, a $541,287 limit in every county for 2026, and when FHA mortgage insurance ends.",
     "provider": {"@id": "https://alignlending.com/#organization"},
     "areaServed": {"@type": "State", "name": "Michigan"},
     "amount": {"@type": "MonetaryAmount", "maxValue": 541287, "currency": "USD"},
     "requiredCollateral": "Residential real estate"},
    {"@type": "WebPage", "@id": "https://alignlending.com/product-loans/fha-loans/#webpage",
     "mainEntity": {"@id": "https://alignlending.com/product-loans/fha-loans/#loan"},
     "reviewedBy": {"@id": "https://alignlending.com/samantha-shelton/#person"},
     "dateModified": "2026-11-XX"},
    {"@type": "BreadcrumbList", "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://alignlending.com/"},
      {"@type": "ListItem", "position": 2, "name": "Loan Programs", "item": "https://alignlending.com/product-loans/"},
      {"@type": "ListItem", "position": 3, "name": "FHA Loans in Michigan", "item": "https://alignlending.com/product-loans/fha-loans/"}]},
    {"@type": "FAQPage", "mainEntity": [
      {"@type": "Question", "name": "How long after bankruptcy or foreclosure can I get an FHA loan?",
       "acceptedAnswer": {"@type": "Answer", "text": "(visible answer text, verbatim)"}}]}
  ]
}
```

Breadcrumb label: rename position 2 from "Products" to "Loan Programs" on all product pages (matches the hub H1).

### 7.3 VA — `/product-loans/va-loans/` — 75/100 (C)

**Target query and intent.** Primary: va loans michigan / michigan va loans. Secondary: michigan va loan eligibility; michigan va loan application; va loan requirements (informational, learn owns); va funding fee (tool owns).  
GSC evidence: "michigan va loans" 52 imprs pos 49.4; "va loans michigan" 48 pos 53.6; "michigan va loan eligibility" 22 pos 22.9; "michigan va loan application" 26 pos 23.5; "va loan requirements" 169 pos 77; "va funding fee calculator" 145 pos 23; "what are the benefits of a va loan" 104 pos 19.3. 283 VA queries, 0 clicks.  
PAA used: Is it easier to get a VA loan?; Can you use a VA loan on any house?; What's the downside of a VA loan?; Who's exempt from paying VA funding fees?; What are the VA funding fees for 2026?; What are the current VA loan limits?; How many VA loans can you have at one time?; What are the benefits for veterans in Michigan?

**Cannibalization and ownership.** Owner: /product-loans/va-loans/ for "VA loans Michigan" and Michigan eligibility/apply. Support: /learn/va-loans/ (national "VA loan requirements/eligibility", 2,960 words), /learn/buying-home-with-va-loan/ and /learn/va-loan-benefits-for-veterans/ ("benefits of a VA loan", pos 19-23), /va-funding-fee-calculator/ ("va funding fee calculator"), /va-loan-calculator/ (9 inlinks only; the product page embeds a near-duplicate calculator). Decision: keep the embedded calculator but give it an anchor id and link /va-loan-calculator/ as the full tool; product page links the benefits article with a "benefits" anchor so it does not chase the national benefits query.

**Above the fold (exact).**

- Current: For home buyers / VA Loans in Michigan / "VA loans are backed by the U.S. Department of Veterans Affairs for eligible service members, veterans and some surviving spouses. Samantha checks your Certificate of Eligibility, your entitlement and the funding fee before anything else." CTAs: Start my application + Talk with Samantha.
- Eyebrow: VA loans for Michigan veterans and service members
- H1 (KEEP): VA Loans in Michigan
- Subhead (55 words): A VA loan fits eligible veterans, service members, Guard and Reserve members, and some surviving spouses. With full entitlement, VA requires no down payment, charges no monthly mortgage insurance and sets no loan limit. A one-time funding fee applies unless you are exempt. Samantha checks your Certificate of Eligibility, entitlement and fee before anything else.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Estimate my VA payment** → #estimate-a-va-loan (on-page calculator; add id to the H2)
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | VA Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  Why Michigan veterans choose a VA loan |  |
| H3 | NEW | No Down Payment With Full Entitlement | Card: "VA does not require a down payment when you have full entitlement and the price is at or below the appraised value." |
| H3 | NEW | No Monthly Mortgage Insurance | Card: "No monthly mortgage insurance at any down payment." |
| H3 | RENAME | Request Your COE Early  →  Certificate of Eligibility First | It is an action, not a benefit; keep the card text. |
| H3 | KEEP | Up to Four Units |  |
| H3 | KEEP | Michigan Property Tax Relief |  |
| H2 | NEW | Who is eligible for a VA loan in Michigan? | Veterans, active-duty service members, National Guard and Reserve members who meet VA's service requirements, and some surviving spouses. Eligibility is shown on your Certificate of Eligibility, which VA issues online or through your lender. VA sets no minimum credit score; lenders usually look for 580 to 620 or higher. The home must be your primary residence. |
| H2 | RENAME | VA against FHA: what the benefit is actually worth  →  Is a VA loan better than FHA or conventional? | For an eligible borrower, usually yes. VA charges no monthly mortgage insurance at any down payment, while FHA's lasts for the life of most loans and conventional's lasts until you reach 20% equity. The VA funding fee is the main cost, and many disabled veterans are exempt. Keep the existing VA vs FHA table under this answer. |
| H2 | NEW | How much is the VA funding fee in 2026? | For a purchase, VA's fee is 2.15% of the loan on first use with less than 5% down, 3.3% on later use with less than 5% down, 1.5% with 5% to 9.99% down, and 1.25% with 10% or more down. It is usually financed. Veterans receiving VA disability compensation pay nothing. [COMPLIANCE REVIEW: fee percentages] |
| H2 | RENAME | Guidelines for this loan  →  What does a VA lender check? | Replace label H3s (COE, Credit Score, Property Type, VA Funding Fee) with a 4-row table; link each row descriptively. |
| H2 | RENAME | Estimate a VA loan  →  Estimate a VA loan payment | Add id="estimate-a-va-loan" for the ATF CTA. Calculator note: the rate dropdown (5.000%–10.000%) is an input list, not an offer; keep the existing "Estimates only… not a rate quote" disclaimer directly under the result. |
| H2 | RENAME | Check the rules at the source  →  Where we check VA rules | Add VA funding fee table and VA entitlement and limits pages; fix the Michigan disabled veteran exemption link to the current URL (https://www.michigan.gov/taxes/property/exemptions/veterans/disabled-veterans-exemption). |
| H2 | RENAME | Questions about this loan  →  VA loan questions Michigan veterans ask |  |
| H3 | KEEP | Who is eligible for a VA loan? | Shorten to one line and point to the new eligibility H2, or remove to avoid duplicating it. |
| H3 | KEEP | Can I use my VA loan more than once? |  |
| H3 | RENAME | Do I need a down payment?  →  Do I need a down payment for a VA loan? | Not with full entitlement, as long as the price is at or below the appraised value. With reduced entitlement on a larger loan, lenders usually ask for a down payment so that your remaining guaranty plus the down payment covers 25% of the loan. Samantha reads yours from your Certificate of Eligibility. (Replaces the current "VA offers down payment options for eligible borrowers", which does not answer the question. CFPB comment 24(d)(1)-1.ii: "no downpayment" does not trigger Reg Z disclosures.) |
| H3 | KEEP | Can I buy a duplex with a VA loan and rent the other unit? |  |
| H3 | KEEP | Do I still pay the funding fee if I have a disability rating? |  |
| H3 | KEEP | Is there a Michigan property tax exemption for disabled veterans? | Add who qualifies: "…a veteran rated 100% permanently and totally disabled, rated individually unemployable, or approved for VA specially adapted housing, and an unremarried surviving spouse." |
| H3 | NEW | Is there a VA loan limit in Michigan? | Not with full entitlement: VA sets no maximum loan, and the lender and appraisal decide the size. If part of your entitlement is still tied to another VA loan, VA's guaranty is based on the county limit, which is $832,750 everywhere in Michigan for 2026, and a down payment may be needed on the difference. |
| H3 | NEW | Can I use a VA loan on any house? | Any home you will live in as your primary residence, from one to four units, including condos in VA-approved projects and new construction. The appraiser checks VA's minimum property requirements for safety and soundness, so a home with major defects may need repairs before closing. |
| H3 | NEW | What is the downside of a VA loan? | The funding fee, unless you are exempt, and the primary-residence rule. VA appraisals also check property condition, which some sellers dislike. For an exempt veteran, the cost case for VA is very strong; for others, compare it with conventional when you have 20% to put down. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  VA guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare VA with other Michigan loans | Entity-specific sibling block. |

**Table to add (exact).**

| Purchase loan, down payment | First use | Later use |
|---|---|---|
| Less than 5% | 2.15% | 3.3% |
| 5% to 9.99% | 1.5% | 1.5% |
| 10% or more | 1.25% | 1.25% |

Exempt: veterans receiving VA compensation for a service-connected disability (or entitled to it), surviving spouses receiving DIC, service members with a proposed or memorandum rating before discharge, and active-duty Purple Heart recipients. Source: VA.gov funding fee page.

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Michigan VA Loan Broker | Align Lending | VA Loans in Michigan: Eligibility & Fees | Align Lending | 56 |
| Meta | VA loans in Michigan for veterans and service members: eligibility, the funding fee and who is exempt, and how entitlement is restored. | VA loans in Michigan: who is eligible, why full entitlement means no down payment or monthly mortgage insurance, and who is exempt from the VA funding fee. | 155 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Funding fee exemptions incl. Purple Heart on active duty | as listed in calculator note | Matches VA's exemption list | https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/ | correct |
| Funding fee amounts | not stated ("depends on the down payment and prior use") | 2.15% / 3.3% (<5% down), 1.5% (5–9.99%), 1.25% (10%+); IRRRL 0.5% | https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/ | missing (add) |
| Loan limit with full entitlement | not stated | No VA loan limit with full entitlement; county limit applies to remaining entitlement | https://www.va.gov/housing-assistance/home-loans/loan-limits/ | missing (add) |
| Down payment | "down payment options for eligible borrowers" | No down payment required with full entitlement when price ≤ appraised value | https://www.va.gov/housing-assistance/home-loans/loan-limits/ | vague (fix) |
| Credit score minimum 580 to 620+ depending on lender | as stated | VA sets no minimum; lender overlays | https://www.va.gov/housing-assistance/home-loans/loan-limits/ | correct |
| Entitlement restored after payoff and sale, or one-time restoration | as stated | Matches VA entitlement rules | https://www.va.gov/housing-assistance/home-loans/loan-limits/ | correct |
| Michigan DVE under MCL 211.7b, Form 5107 with local assessor | as stated | Correct; qualifying = 100% P&T, individually unemployable, or specially adapted housing; unremarried surviving spouse; Form 5107 filed with local assessor; no re-application needed from 2025 | https://www.michigan.gov/taxes/property/exemptions/veterans/disabled-veterans-exemption | correct (add criteria) |
| Michigan DVE link | michigan.gov/taxes/property/exemptions/homeowner/disabled-veteran-exemption | Treasury's current page is /taxes/property/exemptions/veterans/disabled-veterans-exemption | https://www.michigan.gov/taxes/property/exemptions/veterans/disabled-veterans-exemption | check (link may redirect or 404) [VERIFY] |
| Property tax planning figure ~1.5% of price at statewide median homestead rate | as stated (calculator) | Plausible: ~30 mills × 50% SEV; site-wide figure owned by the tax-calculator team | https://www.michigan.gov/taxes/property/change-ownership | not re-verified [VERIFY with 09-consistency] |

**Schema.** MortgageLoan (#loan): loanType "VA"; areaServed State Michigan (replace 283 cities); remove `Offer` node unless it carries no price/rate (it currently appears in schema types; verify it holds no rate). WebApplication (calculator) keep. FAQPage regenerated from visible FAQ (9 questions). WebPage reviewedBy → #person.

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "Estimate your VA funding fee" → https://alignlending.com/va-funding-fee-calculator/ — New funding fee H2 (already linked once in Start with your question; move up)
- "full VA loan calculator with taxes and insurance" → https://alignlending.com/va-loan-calculator/ — Under the embedded calculator
- "Michigan county limits for remaining entitlement" → https://alignlending.com/loan-limits/ — New FAQ "Is there a VA loan limit in Michigan?"
- "how to qualify for a VA loan" → https://alignlending.com/learn/how-to-qualify-for-va-loan/ — New eligibility H2
- "the benefits of a VA loan" → https://alignlending.com/learn/va-loan-benefits-for-veterans/ — Why Michigan veterans choose a VA loan
- "VA IRRRL streamline refinance" → https://alignlending.com/learn/va-interest-rate-reduction-refinance-loans/ — FAQ "Can I use my VA loan more than once?"
- "VA construction loans" → https://alignlending.com/learn/benefits-of-va-construction-loans/ — FAQ "Can I use a VA loan on any house?"
- "VA Homebuyer Plan" → https://alignlending.com/purchase/va-homebuyer-plan/ — Keep in Plan your next step (exists)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/va-loan-calculator/ → "VA loans in Michigan: eligibility and fees" → https://alignlending.com/product-loans/va-loans/
- https://alignlending.com/learn/va-loan-benefits-for-veterans/ → "VA loans in Michigan" → https://alignlending.com/product-loans/va-loans/
- https://alignlending.com/learn/proposed-changes-to-va-loan-programs/ → "how VA loans work in Michigan" → https://alignlending.com/product-loans/va-loans/

### 7.4 USDA — `/product-loans/usda-loans/` — 70/100 (C)

**Target query and intent.** Primary: usda loans michigan / usda rural development loan michigan. Secondary: michigan usda loan broker; michigan usda home loan; usda loan requirements (learn owns); usda eligibility / income limits (tool owns).  
GSC evidence: "usda eligibility" 576 imprs pos 11.1 and "usda rural development loan" 335 pos 13.9 map to /learn/usda-loan-basics/ (brief). "michigan usda loan broker" 47 pos 9.5; "michigan usda home loan" 88 pos 45.4; "usda loans michigan" 67 pos 35.7; "usda loans" 758 pos 46.8; "usda dti limits" 91 pos 21.1; "usda loan income limits" 85 pos 32.7. 428 USDA queries, 0 clicks.  
PAA used: What disqualifies you from a USDA loan?; Why would a USDA loan get denied?; Which one is better, FHA or USDA?; What is the USDA income limit for 2026?; How long does USDA loan approval take?; Who pays closing costs on a USDA loan?; What are the drawbacks to a USDA loan?

**Cannibalization and ownership.** Three URLs split the topic. Decision: (1) /usda-eligibility-check/ should own "usda eligibility", "usda income limits" and "usda loan eligibility" because the intent is to check an address and income and it is the only page with Michigan's FY2026 county limits and the live map; (2) /product-loans/usda-loans/ owns "USDA loans Michigan", "USDA Rural Development loan Michigan" and broker/apply intent; (3) /learn/usda-loan-basics/ (5,985 words, 108 inlinks) keeps national informational "what is a USDA loan". Do not de-optimize the learn article (it holds pos 11); instead add an above-the-fold link from it to the tool ("Check a Michigan address and income") and to this page, and make this page link both. Today the product page links neither /learn/usda-loan-basics/ nor the tool as a primary action (its mid-page CTA goes to the external USDA map). Only 92 contextual inlinks vs 361 for FHA.

**Above the fold (exact).**

- Current: For home buyers / USDA Loans in Michigan / "USDA loans are mortgages backed by the U.S. Department of Agriculture, with down payment options for eligible addresses and incomes. They help eligible low-to-moderate income households buy in rural and suburban areas, with an annual fee that is usually lower than FHA's mortgage insurance." CTAs: Start my application + Talk with Samantha.
- Eyebrow: USDA loans for rural and small-town Michigan
- H1 (RENAME): USDA Rural Development Loans in Michigan
- Subhead (57 words): A USDA loan fits Michigan households buying in an eligible rural or small-town area with income at or under the county limit: $122,800 for 1 to 4 people in most counties. USDA requires no down payment and charges a 1% upfront fee and 0.35% annual fee. Samantha checks the address and income before you rely on either.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Check an address and income** → https://alignlending.com/usda-eligibility-check/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | RENAME | USDA Loans in Michigan  →  USDA Rural Development Loans in Michigan | Adds the program entity searchers use ("usda rural development loan", 335 imprs). |
| H2 | RENAME | Key benefits  →  Why Michigan buyers choose USDA |  |
| H3 | NEW | No Down Payment | Card: "USDA does not require a down payment for an eligible address and household income." |
| H3 | KEEP | Lower Annual Fee | Card text add: "0.35% a year, against FHA's annual premium." |
| H3 | KEEP | The Whole Household Counts |  |
| H3 | KEEP | Check the Address First |  |
| H2 | NEW | Who qualifies for a USDA loan in Michigan? | Three things have to pass. The home must be in an eligible area on USDA's map, which covers much of outer Metro Detroit and most small towns. Household income must be at or under the county limit, $122,800 for 1 to 4 people in most counties. And the home must be your primary residence. |
| H2 | NEW | What are the USDA income limits in Michigan for 2026? | USDA's fiscal 2026 limit is $122,800 for a household of 1 to 4 people and $162,100 for 5 to 8 in most Michigan counties. Six counties run higher: Washtenaw, Livingston, Leelanau, Grand Traverse, Ottawa and Midland. Income from every adult in the home counts, and USDA deducts for children, elderly members and some childcare costs. |
| H2 | RENAME | USDA against FHA: less cash down, but only in the right place  →  Is USDA or FHA cheaper? | When both the address and income qualify, USDA usually is. It needs no down payment, its upfront fee is 1% against FHA's 1.75%, and its annual fee is 0.35% against FHA's annual premium. FHA works anywhere and has no income cap, so it is the fallback when USDA's map or limit rules you out. Keep the existing table. |
| H2 | RENAME | Guidelines for this loan  →  What else does a USDA lender check? | Label H3s (Location, Credit Score, Income, Property) become table rows; add the county-limit table below. |
| H2 | RENAME | Check the rules at the source  →  Where we check USDA rules | Add the USDA fiscal 2026 program overview (fees) and HB-1-3555. |
| H2 | RENAME | Questions about this loan  →  USDA loan questions Michigan buyers ask |  |
| H3 | KEEP | How do I know if the house I want is in an eligible area? | Change the link from the external USDA map to the on-site check (https://alignlending.com/usda-eligibility-check/), keeping USDA's map as the source link. |
| H3 | RENAME | Are there income limits?  →  How is USDA household income counted? | Answer: "Every adult who will live in the home counts, even if they are not on the loan. USDA then subtracts allowances for each child, for a household member 62 or older, and for some childcare and medical costs, so a household slightly over the limit can still qualify." |
| H3 | KEEP | Do I have to be a first-time buyer? |  |
| H3 | KEEP | Can I build a new house with a USDA loan? |  |
| H3 | KEEP | Does USDA charge mortgage insurance like FHA does? | Add the figures: "a 1% upfront guarantee fee and a 0.35% annual fee". [COMPLIANCE REVIEW: fee percentages] |
| H3 | KEEP | What does Michigan add to a USDA purchase? |  |
| H3 | NEW | What disqualifies you from a USDA loan? | Most often the address or the income: a home outside USDA's eligible map, or household income above the county limit. Other common reasons are owning a home in the area that meets your needs, a payment that does not fit USDA's ratios, or a property that is an investment or has an income-producing use. |
| H3 | NEW | Is USDA or FHA better? | If the address and household income both qualify, USDA usually costs less: no down payment, a 1% upfront fee instead of FHA's 1.75%, and a 0.35% annual fee instead of FHA's annual premium. FHA wins when the home is outside a USDA area or the household earns over the limit. |
| H3 | NEW | How long does USDA approval take? | Longer than FHA or conventional, because the lender approves the file and then USDA issues its own guarantee commitment. Plan for extra days in the contract timeline. [VERIFY: current USDA Michigan state-office turn time before quoting a number] Samantha builds that step into the closing date from the start. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  USDA guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare USDA with other Michigan loans | Entity-specific sibling block. |

**Table to add (exact).**

| County | 1–4 people | 5–8 people |
|---|---|---|
| Most Michigan counties | $122,800 | $162,100 |
| Washtenaw | $153,550 | $202,700 |
| Livingston | $150,200 | $198,300 |
| Leelanau | $140,450 | $185,400 |
| Grand Traverse | $130,950 | $172,900 |
| Ottawa | $130,750 | $172,600 |
| Midland | $123,250 | $162,700 |

Source: USDA fiscal 2026 moderate income limits (HB-1-3555 Appendix 5), as published on Align's USDA eligibility check. [VERIFY each figure against Appendix 5 before publishing]

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Michigan USDA Loan Broker | Align Lending | USDA Rural Development Loans in Michigan | Align Lending | 56 |
| Meta | USDA loans in Michigan: which addresses and incomes qualify, how the upfront and annual fees work, and how USDA compares with FHA. | USDA loans in Michigan: no down payment, a $122,800 income limit for 1 to 4 people in most counties, the 1% and 0.35% fees, and a free address check. | 149 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Income limits typically cap at 115% of AMI | 115% of area median | Guaranteed program: adjusted income ≤ 115% of median (moderate income) | https://www.rd.usda.gov/programs-services/single-family-housing-guaranteed-loan-program/mi | correct |
| FY2026 Michigan income limit (most counties) | not on page (on /usda-eligibility-check/) | $122,800 (1–4) / $162,100 (5–8); higher in 6 counties | https://www.rd.usda.gov/resources/directives/handbooks | correct per site tool and secondary corroboration [VERIFY vs HB-1-3555 App. 5] |
| Upfront fee applies; annual fee lower than FHA's | no figures | 1.00% upfront guarantee fee; 0.35% annual fee (USDA program overview, Jan 2026) | https://www.rd.usda.gov/media/file/download/usda-rd-sfh-guarantee-loan-program-101-jan-2026.pdf | correct (add figures) |
| Smaller upfront fee than FHA | as stated | 1% vs FHA 1.75% | https://www.rd.usda.gov/media/file/download/usda-rd-sfh-guarantee-loan-program-101-jan-2026.pdf | correct |
| USDA sets no program credit minimum | as stated | USDA has no regulatory minimum; GUS uses 640 for streamlined credit review [VERIFY HB-1-3555 ch. 10] | https://www.rd.usda.gov/resources/directives/handbooks | correct |
| Repeat buyers OK if not owning adequate home in area | as stated | 7 CFR 3555.151 applicant eligibility | https://www.rd.usda.gov/resources/directives/handbooks | correct |
| Down payment | "down payment options for eligible addresses and incomes" | No down payment required (100% financing of appraised value) | https://www.rd.usda.gov/media/file/download/usda-rd-sfh-guarantee-loan-program-101-jan-2026.pdf | vague (fix) |
| Eligibility map in effect since July 25, 2023 (site tool) | on tool page | Matches site tool note; proposed 2020-Census maps pending | https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do | not re-verified [VERIFY] |

**Schema.** MortgageLoan (#loan): loanType "USDA"; name "USDA Rural Development Guaranteed Loan"; areaServed State Michigan. FAQPage regenerated (9 questions). Link the WebPage `relatedLink` to /usda-eligibility-check/.

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "Check a Michigan address and income for USDA" → https://alignlending.com/usda-eligibility-check/ — ATF secondary CTA; FAQ "How do I know if the house…"; income-limits H2
- "how USDA loans work, step by step" → https://alignlending.com/learn/usda-loan-basics/ — Who qualifies H2
- "tips for buying a home in a rural area" → https://alignlending.com/learn/tips-for-buying-home-in-rural-area/ — Who qualifies H2
- "what changed in USDA's fees and rules" → https://alignlending.com/learn/recent-changes-to-usda-loan-programs/ — Where we check USDA rules
- "USDA debt-to-income limits" → https://alignlending.com/learn/debt-to-income-ratio-dti/ — "What else does a USDA lender check?" table (replaces Read the guide)
- "USDA Streamline Refinance" → https://alignlending.com/learn/what-is-usda-streamline-refinance/ — Learn block

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/usda-loan-basics/ → "USDA loans in Michigan" → https://alignlending.com/product-loans/usda-loans/
- https://alignlending.com/learn/usda-loan-basics/ → "Check a Michigan address and income (above the fold)" → https://alignlending.com/usda-eligibility-check/
- https://alignlending.com/learn/tips-for-buying-home-in-rural-area/ → "USDA Rural Development loans in Michigan" → https://alignlending.com/product-loans/usda-loans/
- https://alignlending.com/learn/government-backed-loans/ → "USDA loans in Michigan" → https://alignlending.com/product-loans/usda-loans/

### 7.5 Conventional — `/product-loans/conventional-loans/` — 74/100 (C)

**Target query and intent.** Primary: conventional loans michigan / michigan conventional loans. Secondary: conventional loan requirements; minimum down for conventional loan; conventional home loans dearborn; conventional loan definition.  
GSC evidence: "michigan conventional loans" 24 imprs pos 14.3; "conventional home loans dearborn" 30 pos 14.6; "minimum down for conventional loan" 24 pos 12.5; "conventional loan only for first time home buyer 3 percent down" 28 pos 1.9 (learn article); "conventional loans" 80 pos 87.6; "conventional loan requirements" 16 pos 70.5. 80 queries, 0 clicks.  
PAA used: What credit score do you need to have to get a conventional loan?; Can I get a Fannie Mae loan without a credit score?; How much income do you need to qualify for a $400,000 home loan?; How much down payment does Fannie Mae require?

**Cannibalization and ownership.** Owner: /product-loans/conventional-loans/ for "conventional loans Michigan" and local variants. Support: /learn/conventional-loans/ (national "conventional loan requirements/definition"), /learn/what-is-conventional-97-loan/ ("3% down first-time" pos 1.9), /pmi-removal-calculator/ ("when does PMI come off"), /loan-limits/ (conforming limit). The product page currently links neither the 97 article nor the PMI calculator even though it has an FAQ titled "When does PMI actually come off a conventional loan?".

**Above the fold (exact).**

- Current: For home buyers / Conventional Loans in Michigan / "A conventional loan is a mortgage that is not backed by a government agency. It fits buyers with steady credit and income." CTAs: Start my application + Talk with Samantha.
- Eyebrow: Conventional loans for Michigan buyers
- H1 (KEEP): Conventional Loans in Michigan
- Subhead (56 words): A conventional loan fits buyers with steady income and credit, most often 620 or higher at the lender. First-time buyers can put as little as 3% down, mortgage insurance can come off at 80% of the original value, and the 2026 limit is $832,750 in every Michigan county. Samantha compares it with FHA on your numbers.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **See when PMI would come off** → https://alignlending.com/pmi-removal-calculator/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Conventional Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  Why Michigan buyers choose conventional |  |
| H3 | KEEP | Flexible Down Payments | Card text: "As little as 3% down for first-time buyers and income-qualified programs; 5% otherwise." [COMPLIANCE REVIEW] |
| H3 | KEEP | Mortgage Insurance That Comes Off |  |
| H3 | KEEP | No Upfront Mortgage Insurance |  |
| H2 | NEW | What are the conventional loan requirements in Michigan? | Most lenders want a 620 credit score or higher, total debts near or under 45% of income (up to 50% with strong credit or reserves), and two years of steady income. First-time buyers can put 3% down; others 5%. The loan must fit the $832,750 conforming limit for 2026, and mortgage insurance applies under 20% down. |
| H2 | KEEP | When conventional is the right call, and when it is not | Keep the six-situation table; fix the first row (see changes CSV). |
| H2 | NEW | When does PMI come off a conventional loan? | You can ask your servicer to cancel it once the balance reaches 80% of the home's original value, and it ends automatically when the balance is scheduled to reach 78%, if your payments are current. A rise in value can also count, with a new appraisal and the servicer's seasoning rules. FHA mortgage insurance follows different rules. |
| H2 | RENAME | Guidelines for this loan  →  What does a conventional lender check? | Label H3s (Credit Score, DTI, Loan Limit, Closing Costs, Loan Term) become table rows with descriptive links. |
| H2 | RENAME | Check the rules at the source  →  Where we check conventional loan rules | Add Fannie Mae Selling Guide B3-6-02 (DTI) and SEL-2025-09 (credit score change). |
| H2 | RENAME | Questions about this loan  →  Conventional loan questions Michigan buyers ask |  |
| H3 | KEEP | What is the difference between a conventional and an FHA loan? |  |
| H3 | KEEP | Can the whole down payment be a gift? | Make specific: "Yes on a one-unit home you will live in: the whole down payment and closing costs can come from a family gift. Two- to four-unit homes, second homes and investment properties have stricter rules." |
| H3 | KEEP | Is there an income limit on a conventional loan? |  |
| H3 | KEEP | Can I use this for a second home? |  |
| H3 | REMOVE | When does PMI actually come off a conventional loan? | Promoted to its own H2 above; delete here to avoid duplication. |
| H3 | KEEP | What does Michigan add to a conventional purchase? |  |
| H3 | NEW | What credit score do I need for a conventional loan? | Most lenders look for 620 or higher. Since November 2025, Fannie Mae's automated underwriting no longer applies a fixed 620 minimum and weighs the whole file instead, but many lenders still keep 620 as their own floor. Pricing improves at each step above 620, so a higher score lowers your cost. |
| H3 | NEW | How much do I need to put down on a conventional loan? | As little as 3% when at least one borrower is a first-time buyer, or through HomeReady or Home Possible if your income qualifies; 5% otherwise. Putting 20% down removes mortgage insurance from the start. [COMPLIANCE REVIEW: down-payment percentages] |
| H3 | NEW | Can I get a Fannie Mae loan without a credit score? | In some cases. Fannie Mae and Freddie Mac allow certain borrowers without a score to qualify with nontraditional credit, such as rent and utility history, mostly through HomeReady and Home Possible and with extra conditions. Samantha checks whether your file fits before you apply. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  Conventional loan guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare conventional with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Conventional Home Loans In Michigan | Align Lending | Conventional Loans in Michigan: Requirements | Align Lending | 60 |
| Meta | Conventional home loans in Michigan, explained: who they fit, what lenders look for, how PMI comes off, and when another loan type fits better. | Conventional loans in Michigan: 3% down for first-time buyers, when PMI comes off, the $832,750 limit for 2026, and when FHA or VA fits better instead. | 151 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Conforming limit 1-unit, every MI county, 2026 | $832,750 | $832,750 baseline; no Michigan high-cost county | https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026 | correct (flag for 2027 update) |
| Credit below 620 usually declined | "Usually declined" | Fannie DU 620 minimum removed for casefiles created on/after 11/16/2025; lender overlays still common | https://singlefamily.fanniemae.com/news-events/announcement-sel-2025-09-selling-guide-updates | outdated |
| Credit score set by lender; many look for 620+ | as stated | Consistent with post-2025 rules (lender overlay) | https://singlefamily.fanniemae.com/news-events/announcement-sel-2025-09-selling-guide-updates | correct |
| DTI 43–45%, up to 50% with strong credit/reserves | as stated | Fannie DU max 50%; manual 36%, up to 45% with compensating factors | https://selling-guide.fanniemae.com/sel/b3-6-02/debt-to-income-ratios | correct |
| PMI request at 80% of original value; automatic at 78% | as stated | Homeowners Protection Act | https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/ | correct |
| No upfront mortgage insurance premium | as stated | Correct for borrower-paid monthly PMI (single-premium options exist) | https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/ | correct |
| Second homes and investment properties allowed | as stated | Correct (Fannie/Freddie) | https://selling-guide.fanniemae.com/sel/b3-6-02/debt-to-income-ratios | correct |
| FHA MIP 11 years at ≤90% LTV | as stated (FAQ) | Correct | https://archives.hud.gov/news/2023/pr23-041.cfm | correct |

**Schema.** MortgageLoan (#loan): loanType "Conventional"; areaServed State Michigan; `amount.maxValue` 832750 (2026, update). FAQPage regenerated (8 questions). WebPage reviewedBy → #person.

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "See when PMI would come off your loan" → https://alignlending.com/pmi-removal-calculator/ — ATF secondary CTA + new PMI H2
- "3% down with a Conventional 97 loan" → https://alignlending.com/learn/what-is-conventional-97-loan/ — Requirements H2 and Flexible Down Payments card
- "how private mortgage insurance is priced" → https://alignlending.com/learn/mortgage-insurance/ — PMI H2
- "estimate a conventional payment" → https://alignlending.com/mortgage-calculator/ — Under the six-situation table
- "avoiding PMI with a piggyback loan" → https://alignlending.com/learn/what-is-piggyback-mortgage/ — PMI H2
- "conventional loan requirements in detail" → https://alignlending.com/learn/conventional-loans/ — Requirements H2 (replaces Read the guide)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/pmi-removal-calculator/ → "conventional loans in Michigan" → https://alignlending.com/product-loans/conventional-loans/
- https://alignlending.com/learn/what-is-conventional-97-loan/ → "conventional loans in Michigan" → https://alignlending.com/product-loans/conventional-loans/
- https://alignlending.com/mortgage-lender-dearborn-mi/ → "conventional home loans in Michigan" → https://alignlending.com/product-loans/conventional-loans/

### 7.6 Jumbo — `/product-loans/jumbo-loans/` — 75/100 (C)

**Target query and intent.** Primary: michigan jumbo loan / jumbo loans michigan. Secondary: ann arbor jumbo loan; jumbo mortgage michigan; michigan jumbo loan requirements; jumbo loan limit (2026/2027).  
GSC evidence: "michigan jumbo loan" 155 imprs pos 46.4; "jumbo loan michigan" 123 pos 43.7; "ann arbor jumbo loan" 79 pos 40.7; "ann arbor jumbo mortgage" 40 pos 34; "jumbo loans michigan" 39 pos 26.3; "michigan jumbo loans" 21 pos 13.2; "jumbo mortgage limit" 49 pos 44.6. 85 queries, 0 clicks.  
PAA used: What is a jumbo loan for 2026?; What is the max conforming loan limit for 2026?; Is $600000 a jumbo loan?; What are the Fannie Mae and Freddie Mac loan limits for 2026?; What salary do you need for a $1,000,000 house?

**Cannibalization and ownership.** Owner: /product-loans/jumbo-loans/ for "Michigan jumbo loan(s)" and Ann Arbor/Birmingham variants. Support: /learn/how-to-qualify-for-jumbo-loan/ ("jumbo loan requirements", 84 inlinks), /learn/jumbo-loan-tips/, /learn/jumbo-and-non-qm/, /loan-limits/ ("jumbo loan limit", "2027 loan limits"). Product page currently ranks ~pos 44 for its head term with 1,096 words and 92 contextual inlinks; it needs depth (requirements H2, Michigan market H2) and links from Ann Arbor, Birmingham and Bloomfield Hills city pages.

**Above the fold (exact).**

- Current: For home buyers and homeowners / Jumbo Loans in Michigan / "A jumbo loan is a mortgage for a loan amount above the conforming limit, $832,750 in every Michigan county in 2026. It depends on the loan, not the price: a home priced at or below that limit never needs one, and a larger down payment keeps a higher price under it." CTAs: Start my application + Talk with Samantha.
- Eyebrow: Jumbo loans for Michigan homes above the conforming limit
- H1 (KEEP): Jumbo Loans in Michigan
- Subhead (57 words): A jumbo loan is any loan above $832,750, the 2026 conforming limit in every Michigan county. It fits buyers in places like Birmingham, Bloomfield Hills and Ann Arbor who can show strong credit, a larger down payment and months of reserves after closing. Each jumbo lender writes its own rules, so Samantha compares several before you choose.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Check your county's loan limit** → https://alignlending.com/loan-limits/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Jumbo Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  How jumbo loans work in Michigan | These three cards are rules, not benefits. |
| H3 | KEEP | The Loan Decides It, Not the Price / Reserves in the Bank / A Closer Look at the File |  |
| H2 | NEW | What are the jumbo loan requirements in Michigan? | Jumbo lenders set their own rules, but most look for a credit score of 680 to 700 or higher, debts at or under about 43% of income, a larger down payment than conforming loans, and several months of full payments in reserve after closing. Expect deeper income and asset documentation, and sometimes a second appraisal on larger loans. |
| H2 | KEEP | Jumbo against conforming: what changes above the limit |  |
| H2 | NEW | Where in Michigan are jumbo loans common? | Mostly where many homes sell above about $900,000: Birmingham, Bloomfield Hills, Bloomfield Township, Northville and parts of Ann Arbor, plus lake and Up North second homes around Traverse City and Harbor Springs. Plan the property tax too, because a high-value home's taxable value uncaps the year after you buy. [VERIFY: confirm community list against current sales data or remove names] |
| H2 | NEW | When will the 2027 conforming limit be announced? | FHFA announces the 2027 conforming loan limit in late November 2026, and it takes effect January 1, 2027. Until then, $832,750 is the line in every Michigan county. When the new figure is published, this page, our loan limits tool and every jumbo threshold on the site update on the same day. |
| H2 | RENAME | Guidelines for this loan  →  What does a jumbo lender check? | Label H3s (Credit Score, Down Payment, DTI, Reserve Requirements, Closing Costs) become table rows with descriptive links. |
| H2 | RENAME | Check the rules at the source  →  Where we check jumbo thresholds |  |
| H2 | RENAME | Questions about this loan  →  Jumbo loan questions Michigan buyers ask |  |
| H3 | KEEP | What makes a loan jumbo in my county? / Can I buy a second home or a rental with a jumbo loan? / Is it genuinely harder to qualify for a jumbo? / Do jumbo loans come with mortgage insurance? / Do jumbo loans cost more than conforming? |  |
| H3 | REMOVE | Where in Michigan do loans go above $832,750? | Promoted to the new H2 "Where in Michigan are jumbo loans common?" (removes a dollar figure from a heading). |
| H3 | NEW | Is a $900,000 home a jumbo loan in Michigan? | Only if the loan is above $832,750, the 2026 limit in every Michigan county. With $67,250 or more down, a $900,000 purchase stays conforming; with less down, the loan is jumbo. The loan amount decides it, not the price, which is why the down payment matters so much near the limit. |
| H3 | NEW | How much do I need to put down on a jumbo loan? | Each jumbo lender sets its own minimum by loan size, credit and property type, and most ask for more than a conforming loan. A larger down payment usually improves pricing and can remove mortgage insurance. Samantha compares several jumbo lenders' rules for your loan size before you write an offer. |
| H3 | NEW | What happens to jumbo loans when the 2027 limit comes out? | FHFA announces the 2027 conforming limit in late November 2026, effective January 1, 2027. If it rises, loans between $832,750 and the new limit become conforming for 2027 applications. Some lenders already lend above $832,750 as conforming ahead of the announcement, so ask before assuming jumbo. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  Jumbo loan guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare jumbo with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Michigan Jumbo Loan Broker | Align Lending | Michigan Jumbo Loans: Requirements & Limits | Align Lending | 59 |
| Meta | Jumbo loans in Michigan for loan amounts above the $832,750 conforming limit: reserves, down payment, appraisals, and how jumbo compares. | Jumbo loans in Michigan start above $832,750 in 2026. What jumbo lenders check: credit, down payment, reserves and appraisals, and how a broker compares them. | 158 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Conforming limit / jumbo threshold, all MI counties, 2026 | $832,750 | $832,750; 2027 announcement due late Nov 2026, not yet published on 11/15/2026 | https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026 | correct (update when FHFA publishes 2027) |
| Credit score generally 680+, some 700+ | as stated | Lender-set (portfolio/private investor); not agency-verifiable | https://www.fhfa.gov/data/conforming-loan-limit | plausible (lender overlay; label as typical) |
| DTI preferably below 43–45% | as stated | Lender-set; QM rules still apply | https://www.fhfa.gov/data/conforming-loan-limit | plausible |
| Michigan limit same in every county | as stated | No Michigan county above baseline in FHFA 2026 file (per site /loan-limits/; FHFA file could not be fetched in this session) | https://www.fhfa.gov/data/conforming-loan-limit | correct [VERIFY county file] |
| Lenders pre-pricing 2027 at $845k–$850k (on /loan-limits/) | not on this page | Lender-specific; not verifiable | https://alignlending.com/loan-limits/ | not verifiable (keep on tool page only, labeled) |

**Schema.** MortgageLoan (#loan): loanType "Jumbo"; areaServed State Michigan; `amount.minValue` 832751 (2026; update with 2027). FAQPage regenerated (8 questions).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "Ann Arbor" → https://alignlending.com/mortgage-lender-ann-arbor-mi/ — ATF subhead + Michigan H2
- "Birmingham" → https://alignlending.com/mortgage-lender-birmingham-mi/ — ATF subhead (already linked in FAQ)
- "Bloomfield Hills" → https://alignlending.com/mortgage-lender-bloomfield-hills-mi/ — ATF subhead (already linked in FAQ)
- "jumbo loan tips for credit, down payment and reserves" → https://alignlending.com/learn/jumbo-loan-tips/ — Requirements H2
- "how to qualify for a jumbo loan" → https://alignlending.com/learn/how-to-qualify-for-jumbo-loan/ — Requirements table (replaces Read the guide)
- "how much house you can afford" → https://alignlending.com/home-affordability-calculator/ — Requirements H2
- "refinancing a jumbo loan" → https://alignlending.com/learn/refinancing-jumbo-loan/ — Learn block
- "2026 and 2027 loan limits by county" → https://alignlending.com/loan-limits/ — 2027 H2 + ATF secondary CTA

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/mortgage-lender-ann-arbor-mi/ → "jumbo loans in Michigan" → https://alignlending.com/product-loans/jumbo-loans/
- https://alignlending.com/mortgage-lender-birmingham-mi/ → "jumbo loans in Michigan" → https://alignlending.com/product-loans/jumbo-loans/
- https://alignlending.com/mortgage-lender-bloomfield-hills-mi/ → "jumbo loans in Michigan" → https://alignlending.com/product-loans/jumbo-loans/
- https://alignlending.com/mortgage-michigan/washtenaw-county/ → "Michigan jumbo loans" → https://alignlending.com/product-loans/jumbo-loans/
- https://alignlending.com/product-loans/physician-loans/ → "jumbo loans above the conforming limit" → https://alignlending.com/product-loans/jumbo-loans/

### 7.7 HomeReady and Home Possible — `/product-loans/home-ready/` — 76/100 (C)

**Target query and intent.** Primary: homeready mortgage michigan / homeready loan michigan. Secondary: homeready vs home possible; homeready income limits; homeready loan vs conventional loan.  
GSC evidence: "homeready mortgage" 68 imprs pos 6.5 (learn article per brief); "benefits of homeready mortgage" 37 pos 9.8; "homeready mortgage michigan" 7 pos 47.6; "homeready vs home possible" 6 pos 36.2; "homeready loan vs conventional loan" 6 pos 6.2. 31 queries.  
PAA used: What does Fannie Mae consider a first time homebuyer?; Which is better, FHA or Fannie Mae?; How much down payment does Fannie Mae require?; Is there an income limit for Freddie Mac Home One?

**Cannibalization and ownership.** Owner: /learn/homeready-mortgages/ keeps national "homeready mortgage" (pos 6.5, do not disturb). /product-loans/home-ready/ owns "HomeReady Michigan" plus apply intent and "HomeReady vs Home Possible". The product page does not link the learn article today and the learn article links back only with "HomeReady loan page"; add reciprocal descriptive links. Freddie Mac "Home One" PAA: mention Home One in the FAQ as the no-income-limit 3% alternative.

**Above the fold (exact).**

- Current: For home buyers / H1 / "HomeReady® (Fannie Mae) and Home Possible® (Freddie Mac) are conventional loans for households earning at or under 80% of their area's median income. They pair a low down payment with reduced mortgage insurance, for first-time and repeat buyers alike."
- Eyebrow: Low-down-payment conventional loans for Michigan buyers
- H1 (KEEP): HomeReady® and Home Possible® Loans in Michigan
- Subhead (53 words): HomeReady (Fannie Mae) and Home Possible (Freddie Mac) fit Michigan households earning at or under 80% of the area median income for the address. Both allow 3% down with reduced mortgage insurance, for first-time and repeat buyers. Samantha checks your income against both programs' limits and compares them with FHA before you choose.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Check the income limit for an address** → https://ami-lookup-tool.fanniemae.com/amilookuptool/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | HomeReady® and Home Possible® Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  Why Michigan buyers choose HomeReady or Home Possible |  |
| H3 | KEEP | Low Down Payment / Boarder Income Can Count / Credit Flexibility | Low Down Payment card: "3% down, with reduced mortgage insurance." [COMPLIANCE REVIEW] |
| H2 | NEW | Who qualifies for HomeReady or Home Possible? | Households whose qualifying income is at or under 80% of the area median for the home's address, buying or refinancing a one- to four-unit home they will live in. First-time and repeat buyers both qualify. If every borrower is a first-time buyer, a short homeownership course is required. Most lenders look for a 620 credit score. |
| H2 | RENAME | HomeReady and Home Possible against standard conventional  →  How is HomeReady different from a standard conventional loan? | Same loan, cheaper to carry if you are under the income limit. Mortgage insurance coverage drops from 35% to 25% at the highest loan-to-value, which lowers the monthly premium, and a one-unit purchase needs no minimum contribution from your own funds. Standard conventional loans have no income limit. Keep the existing table. |
| H2 | RENAME | Guidelines for this loan  →  What does a HomeReady lender check? | Label H3s become table rows. |
| H2 | KEEP | Home price at your debt-to-income limit | Calculator. Change result CTA label "Get pre-approved" → "Start my application" (site CTA vocabulary). |
| H2 | RENAME | Check the rules at the source  →  Where we check HomeReady and Home Possible rules |  |
| H2 | RENAME | Questions about this loan  →  HomeReady and Home Possible questions Michigan buyers ask |  |
| H3 | KEEP | Do I need to be a first-time buyer? / What is the difference between HomeReady and Home Possible? / Can I buy a two to four unit property? / Do I still pay mortgage insurance on these? |  |
| H3 | NEW | What is the HomeReady income limit in Michigan? | 80% of the area median income for the home's census tract, so it varies by address. Fannie Mae's Area Median Income Lookup tool shows the exact figure, and Freddie Mac publishes its own for Home Possible. Samantha checks the address against both, because one can qualify when the other does not. |
| H3 | NEW | Is homebuyer education required for HomeReady? | Yes, when every borrower is a first-time homebuyer. Fannie Mae accepts its free online HomeView course, and Freddie Mac accepts CreditSmart Homebuyer U for Home Possible. Both take a few hours and can be finished before you make an offer. [VERIFY: HomeView acceptance in current Fannie Mae B5-6-02] |
| H3 | NEW | Is HomeReady better than FHA? | For a borrower under the income limit with a credit score around 680 or higher, usually yes: the mortgage insurance is reduced and can be cancelled, while FHA's lasts for the life of the loan with less than 10% down. With lower credit, FHA's pricing can win. Samantha runs both. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  HomeReady guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare HomeReady and Home Possible with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | HomeReady And Home Possible Loans | Michigan Broker | HomeReady & Home Possible Loans in Michigan | Align Lending | 59 |
| Meta | HomeReady and Home Possible in Michigan: low-down-payment conventional loans for incomes at or under 80% of area median, with reduced mortgage insurance. | HomeReady and Home Possible in Michigan: 3% down, reduced mortgage insurance, and an income limit of 80% of area median. Check the limit for your address. | 154 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Income at or under 80% AMI for the address | as stated | 80% of AMI for property location (Fannie B5-6-01; Freddie Home Possible) | https://selling-guide.fanniemae.com/sel/b5-6-01/homeready-mortgage-loan-and-borrower-eligibility | correct |
| Reduced MI coverage | as stated | 25% coverage at 90.01–97% LTV vs 35% standard (HomeReady matrix) | https://singlefamily.fanniemae.com/media/8341/display | correct (add figure) |
| 1-unit: no minimum own funds; 2–4 units need own funds | as stated | HomeReady matrix: $0 for 1-unit; 3% for 2–4 units above 80% LTV | https://singlefamily.fanniemae.com/media/8341/display | correct |
| Homeownership course when every borrower is first-time | as stated | Required when all borrowers are first-time homebuyers (Freddie: CreditSmart Homebuyer U) | https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/home-possible | correct |
| Boarder income can count (HomeReady) | as stated | Allowed under HomeReady (B5-6-02) | https://selling-guide.fanniemae.com/sel/b5-6-01/homeready-mortgage-loan-and-borrower-eligibility | correct |
| Updated AMI limits | not stated | Freddie Mac updated Home Possible AMI limits effective June 13, 2026 | https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/home-possible | add (note annual update) |

**Schema.** MortgageLoan (#loan): name "HomeReady and Home Possible"; loanType "Conventional"; areaServed State Michigan. FAQPage regenerated (7 questions).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "how HomeReady mortgages work" → https://alignlending.com/learn/homeready-mortgages/ — Who qualifies H2
- "Freddie Mac Home Possible requirements" → https://alignlending.com/learn/freddie-macs-home-possible-loans-benefits-and-requirements/ — Difference H2
- "Michigan down payment assistance" → https://alignlending.com/purchase/down-payment-assistance/ — Key benefits, Low Down Payment card
- "Conventional 97 for first-time buyers" → https://alignlending.com/learn/what-is-conventional-97-loan/ — FAQ "Do I need to be a first-time buyer?"
- "FHA loans in Michigan" → https://alignlending.com/product-loans/fha-loans/ — New FAQ "Is HomeReady better than FHA?"

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/homeready-mortgages/ → "HomeReady and Home Possible loans in Michigan" → https://alignlending.com/product-loans/home-ready/
- https://alignlending.com/purchase/down-payment-assistance/ → "HomeReady and Home Possible loans in Michigan" → https://alignlending.com/product-loans/home-ready/

### 7.8 30-year fixed — `/product-loans/30-year-fixed/` — 72/100 (C)

**Target query and intent.** Primary: 30 year fixed mortgage michigan. Secondary: 30 year mortgage mi; 15 vs 30 year mortgage (learn owns); what happens if I pay an extra $100 a month on a 30 year mortgage (PAA).  
GSC evidence: "30 year mortgage mi" 27 imprs pos 46.8; "30 year conforming fixed" 11 pos 47.3; "15 vs 30 year mortgage" 21 pos 58.8; "15 year vs 30 year mortgage calculator" 52 pos 6.1 (learn). Only 27 contextual inlinks.  
PAA used: What happens if I pay an extra $100 a month on my 30-year mortgage?; How to cut 10 years off a 30-year mortgage?; What percentage of people actually pay off a 30 year mortgage?

**Cannibalization and ownership.** Owner: product page for "30-year fixed mortgage Michigan". /learn/15-year-vs-30-year-mortgage-comparison/ owns the comparison/calculator query (pos 6.1); /learn/fixed-rate-mortgage-options/ (4 inlinks) overlaps heavily and should be consolidated into the comparison article by the content team. Rate-intent queries ("30 year mortgage rates") cannot be served with a rate; answer them with the no-rate FAQ.

**Above the fold (exact).**

- Current: "A 30-year fixed-rate mortgage spreads the loan over the longest common term, so the required payment is lower than a shorter fixed term on the same loan. It suits buyers who want a lower required payment and the option to pay extra."
- Eyebrow: Fixed-rate mortgages for Michigan buyers and homeowners
- H1 (KEEP): 30-Year Fixed Mortgages in Michigan
- Subhead (56 words): A 30-year fixed fits buyers who want the lowest required payment of the fixed terms and the freedom to pay extra when it suits them. Principal and interest never change; taxes and insurance can. It is available on conventional, FHA, VA, USDA and jumbo loans. Samantha shows it beside a 15-year so you see the tradeoff.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Compare 15-year and 30-year payments** → https://alignlending.com/mortgage-calculator/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | 30-Year Fixed Mortgages in Michigan |  |
| H2 | RENAME | Key benefits  →  Why choose a 30-year fixed? |  |
| H2 | RENAME | Thirty years against fifteen: what the longer term actually buys  →  Is a 30-year or 15-year mortgage better? | A 30-year keeps the required payment lower and leaves more room in your debt ratio, so you qualify for more and keep a cushion in lean months. A 15-year costs far less total interest but locks in a much higher payment. Paying extra on a 30-year gets you part of the way with the option to stop. |
| H2 | NEW | How much does paying extra on a 30-year save? | Every extra dollar goes straight to principal on conforming, FHA, VA and USDA loans, which carry no prepayment penalty, so it shortens the loan and cuts total interest. How much depends on the rate and balance; run your own numbers in the payoff calculator. Even one extra payment a year can take years off the term. |
| H2 | RENAME | Guidelines for this loan  →  What do lenders check for a 30-year fixed? | Label H3s become table rows. |
| H2 | RENAME | Check the rules at the source  →  Where we check fixed-rate rules |  |
| H2 | RENAME | Questions about this loan  →  30-year fixed questions Michigan buyers ask |  |
| H3 | KEEP | Why would I take a thirty over a fifteen? / Can I pay a thirty year off early without a penalty? / What is actually in my monthly payment? / Can I get a thirty year with a lower credit score? / Can I refinance later if rates change? |  |
| H3 | NEW | Where can I see today's 30-year fixed rate in Michigan? | We do not publish rates, because yours depends on credit, down payment, loan type, points and the day you lock. Samantha quotes a rate on your actual file and puts it on a Loan Estimate you can compare line by line. For the national weekly average, see Freddie Mac's Primary Mortgage Market Survey. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  Fixed-rate mortgage guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare a 30-year fixed with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | 30-Year Fixed Mortgage In Michigan | Align Lending | 30-Year Fixed Mortgages in Michigan | Align Lending | 51 |
| Meta | See how a 30-year fixed compares with a fifteen, what it takes to qualify in Michigan, and who it fits. | A 30-year fixed mortgage keeps the required payment lowest of the fixed terms. See how it compares with a 15-year in Michigan, who it fits, and how to qualify. | 159 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Available on conventional, FHA, VA, USDA and jumbo | as stated | Correct | https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/ | correct |
| No prepayment penalty on FHA, VA, USDA and conforming loans | as stated | Correct (QM/agency rules; FHA post-2015 rule) | https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/ | correct |
| Reg Z: "30-year mortgage" is a period-of-repayment triggering term | Product name in H1/title | CFPB official comment 24(d)(1): "30-year mortgage" listed as a repayment-period trigger | https://www.consumerfinance.gov/rules-policy/regulations/1026/Interp-24 | compliance review (product name) |

**Schema.** MortgageLoan (#loan): name "30-Year Fixed Mortgage"; loanType "Fixed-rate"; omit loanTerm (Reg Z trigger pending compliance review). FAQPage regenerated (6 questions).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "15-year vs 30-year payments and interest" → https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ — Comparison H2
- "mortgage payoff calculator" → https://alignlending.com/mortgage-payoff-calculator/ — Paying-extra H2
- "refinancing to a shorter term" → https://alignlending.com/learn/refinancing-to-shorter-loan-term/ — FAQ "Can I refinance later…"
- "how amortization builds equity" → https://alignlending.com/learn/mortgage-amortization/ — Paying-extra H2
- "Freddie Mac's weekly rate survey" → https://www.freddiemac.com/pmms — New rate FAQ (external, GSE)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ → "30-year fixed mortgages in Michigan" → https://alignlending.com/product-loans/30-year-fixed/
- https://alignlending.com/mortgage-calculator/ → "30-year fixed mortgages" → https://alignlending.com/product-loans/30-year-fixed/
- https://alignlending.com/mortgage-payoff-calculator/ → "30-year fixed mortgages" → https://alignlending.com/product-loans/30-year-fixed/

### 7.9 15-year fixed — `/product-loans/15-year-fixed/` — 73/100 (C)

**Target query and intent.** Primary: 15 year fixed mortgage michigan. Secondary: 15 year fixed mortgage; 15-year fixed mortgage farmington mi; 15 year fixed mortgage rates michigan (rate intent).  
GSC evidence: "15 year fixed mortgage" 35 imprs pos 20.7; "15 year fixed mortgage rates michigan" 39 pos 40.7; "15 year mortgage rates michigan" 36 pos 40.6; "15-year fixed mortgage farmington mi" 42 pos 28.6; "15 year vs 30 year mortgage calculator" 52 pos 6.1 (learn). Only 13 contextual inlinks.  
PAA used: How to cut 10 years off a 30-year mortgage?; Is it smart to pay a mortgage every 2 weeks?

**Cannibalization and ownership.** Owner: product page for "15-year fixed mortgage Michigan"; /learn/15-year-vs-30-year-mortgage-comparison/ owns the comparison; /learn/refinancing-to-shorter-loan-term/ owns refinance-to-15. Add the no-rate FAQ for the 75 imprs of rate-intent queries.

**Above the fold (exact).**

- Current: "A 15-year fixed-rate mortgage is for buyers and refinancers who want to pay off their loan faster and pay less total interest. The tradeoff is a higher payment every month, so the test is whether it still fits in your leanest month."
- Eyebrow: Fixed-rate mortgages for Michigan buyers and homeowners
- H1 (KEEP): 15-Year Fixed Mortgages in Michigan
- Subhead (56 words): A 15-year fixed fits buyers and refinancers who want the loan gone in half the time and far less total interest, and who can carry a noticeably higher required payment in their leanest month. It works with conventional, FHA, VA and jumbo loans, and the same low-down-payment options apply. Samantha tests it beside a 30-year first.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Compare 15-year and 30-year payments** → https://alignlending.com/mortgage-calculator/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | 15-Year Fixed Mortgages in Michigan |  |
| H2 | RENAME | Key benefits  →  Why choose a 15-year fixed? |  |
| H3 | RENAME | Usually a Lower Rate  →  Usually Priced Below a 30-Year | Same fact without a "lower rate" headline (brand rule: no low-rate claims). Card: "Lenders usually price 15-year loans below 30-year loans for the same borrower; your Loan Estimate shows the actual difference." |
| H3 | KEEP | Equity Builds Sooner / Less Total Interest / Principal and Interest Set for the Full Term |  |
| H2 | RENAME | What fifteen years saves, and what it demands  →  How much does a 15-year mortgage save? | On the same loan, a 15-year typically costs less than half the total interest of a 30-year, because the balance falls faster and the rate is usually lower. The price is a required payment that is much higher every month with no option to drop back. Test it against your leanest month, not your best. |
| H2 | NEW | Should I take a 15-year or pay extra on a 30-year? | If the higher payment fits comfortably every month and your emergency savings are in place, the 15-year's lower pricing saves the most. If income varies or other goals compete, a 30-year with planned extra payments keeps the option to stop. Many Michigan buyers start with a 30 and refinance to a 15 later. |
| H2 | RENAME | Guidelines for this loan  →  What do lenders check for a 15-year fixed? |  |
| H2 | RENAME | Check the rules at the source  →  Where we check fixed-rate rules |  |
| H2 | RENAME | Questions about this loan  →  15-year fixed questions Michigan buyers ask |  |
| H3 | KEEP | Existing 6 questions |  |
| H3 | NEW | Where can I see today's 15-year fixed rate in Michigan? | We do not publish rates, because yours depends on credit, down payment, loan type, points and the day you lock. Samantha quotes a rate on your actual file and puts it on a Loan Estimate you can compare line by line. For the national weekly average, see Freddie Mac's Primary Mortgage Market Survey. |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  Fixed-rate mortgage guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare a 15-year fixed with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | 15-Year Fixed Mortgage In Michigan | Align Lending | 15-Year Fixed Mortgages in Michigan | Align Lending | 51 |
| Meta | A 15-year fixed mortgage pays the loan off in half the time with less total interest, and a higher payment. See what it takes to qualify in Michigan. | A 15-year fixed mortgage pays the loan off in half the time with less total interest, and a higher payment. See what it takes to qualify in Michigan. | 149 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Fifteen-year rates usually run below thirty-year | "Usually a Lower Rate" (H3) | Generally true (Freddie Mac PMMS shows 15-yr below 30-yr), but a rate-comparison headline conflicts with the brand rule on rate claims | https://www.freddiemac.com/pmms | correct but reword (brand/compliance) |
| Roughly half the interest of a thirty, sometimes more | as stated | Amortization math: at equal rates a 15-yr pays ~45% of the 30-yr's interest; less with a lower rate | https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/ | correct (illustrative) |
| Available loan types FHA, conventional, VA, jumbo | as stated (USDA omitted) | USDA guaranteed purchase loans are 30-year fixed [VERIFY 7 CFR 3555.104] | https://www.rd.usda.gov/resources/directives/handbooks | correct |
| Reg Z trigger: "15-year" period of repayment | Product name | CFPB comment 24(d)(1) | https://www.consumerfinance.gov/rules-policy/regulations/1026/Interp-24 | compliance review |

**Schema.** As 30-year page. FAQPage regenerated (7 questions).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "15-year vs 30-year payments and interest" → https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ — Savings H2
- "refinancing to a 15-year" → https://alignlending.com/learn/refinancing-to-shorter-loan-term/ — FAQ "Can I refinance my thirty into a fifteen?"
- "mortgage payoff calculator" → https://alignlending.com/mortgage-payoff-calculator/ — 15 vs pay-extra H2
- "refinance break-even review" → https://alignlending.com/refinance/break-even-review/ — Refinance FAQ (exists in Plan block; add in body)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ → "15-year fixed mortgages in Michigan" → https://alignlending.com/product-loans/15-year-fixed/
- https://alignlending.com/learn/refinancing-to-shorter-loan-term/ → "15-year fixed mortgages" → https://alignlending.com/product-loans/15-year-fixed/
- https://alignlending.com/mortgage-lender-farmington-hills-mi/ → "15-year fixed mortgages" → https://alignlending.com/product-loans/15-year-fixed/

### 7.10 ARM — `/product-loans/adjustable-rate-mortgage/` — 76/100 (C)

**Target query and intent.** Primary: adjustable rate mortgage michigan. Secondary: arm loan michigan; fixed vs adjustable rate mortgage (learn owns); fha adjustable rate mortgage.  
GSC evidence: "adjustable rate mortgage michigan" 9 imprs pos 55.2; "fixed vs adjustable rate mortgage" 61 pos 46.8 (learn); "adjustable purchase loans" 15 pos 21.1; "fha adjustable rate mortgage" 13 pos 36.2. 15 contextual inlinks.  
PAA used: (no ARM seed run; GSC questions used) are adjustable rate mortgages bad; adjustable rate mortgage pros and cons

**Cannibalization and ownership.** Owner: product page for "adjustable-rate mortgage Michigan". /learn/fixed-vs-arm/ owns "fixed vs adjustable"; /learn/adjustable-rate-mortgages-pros-and-cons/ owns "pros and cons"; /learn/adjustable-rate-mortgage-resets/ owns "how ARMs reset". Product page should link all three with those anchors and not add a long pros/cons section of its own.

**Above the fold (exact).**

- Current: "Adjustable-Rate Mortgages (ARMs) hold a fixed rate for an initial period and then adjust, which can suit homebuyers who expect to move before the rate adjusts. The question to answer first is what happens to the payment if you are still there when it does."
- Eyebrow: Adjustable-rate mortgages for Michigan buyers and homeowners
- H1 (KEEP): Adjustable-Rate Mortgages (ARMs) in Michigan
- Subhead (60 words): An ARM fits buyers with a dated plan to sell, move or pay off within the fixed period, commonly 5, 7 or 10 years. After that, the rate resets to an index plus a margin, limited by three caps. Before you choose one, test the payment at the highest rate your caps allow. Samantha walks through those caps with you.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Test a payment at the cap rate** → https://alignlending.com/mortgage-calculator/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Adjustable-Rate Mortgages (ARMs) in Michigan |  |
| H2 | RENAME | Key benefits  →  How an ARM works | The three cards describe mechanics. |
| H2 | RENAME | When an adjustable beats a fixed, and when it does not  →  Is an ARM or a fixed rate better for me? | An ARM can cost less if you sell, move or pay off the loan inside its fixed period, because the opening rate is often lower than a fixed rate. If you might stay longer, you take on whatever rates become, within the caps. If the only reason is a lower first payment, a fixed rate usually fits better. |
| H2 | NEW | What do the caps on an ARM mean? | Most ARMs list three caps, such as 2/1/5: how far the rate can move at the first adjustment, at each later adjustment, and over the life of the loan, in percentage points. The lifetime cap sets the worst case. Page 2 of your Loan Estimate shows all three in the Adjustable Interest Rate table. |
| H2 | RENAME | Guidelines for this loan  →  What do lenders check for an ARM? | Add note: lenders qualify 5-year-or-shorter ARMs at a higher rate than the start rate (Fannie B3-6-04). |
| H2 | RENAME | Check the rules at the source  →  Where we check ARM rules | Add Fannie B3-6-04 qualifying payment requirements. |
| H2 | RENAME | Questions about this loan  →  ARM questions Michigan buyers ask |  |
| H3 | KEEP | Is an adjustable rate mortgage risky? / Can I refinance out of an adjustable later? / Who is an adjustable actually right for? / What happens when the fixed period ends? / What should I test the payment against? |  |
| H3 | REMOVE | How do I read the caps on my Loan Estimate? | Promoted to the caps H2; keep its longer text as the H2 body. |
| H3 | NEW | How often does an ARM adjust after the fixed period? | Most conventional ARMs today adjust every six months after the fixed period and are written as 5/6, 7/6 or 10/6, tied to the SOFR index. Some government ARMs adjust yearly. Your note and Loan Estimate state the schedule, the index and the margin. [VERIFY: Fannie Mae B2-1.4-02 current ARM plans] |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  ARM guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare an ARM with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Adjustable-Rate Mortgages In Michigan | Align Lending | Adjustable-Rate Mortgages in Michigan | Align Lending | 53 |
| Meta | How an adjustable-rate mortgage works in Michigan: the fixed period, how the rate resets, the three caps, and who an ARM actually fits. | How an adjustable-rate mortgage works in Michigan: the 5, 7 or 10-year fixed period, how the rate resets, the three caps, and who an ARM actually fits. | 151 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Fixed period five, seven or ten years | as stated | Common agency ARM products 5/6, 7/6, 10/6 (Fannie B2-1.4-02) | https://selling-guide.fanniemae.com/sel/b2-1.4-02/adjustable-rate-mortgages-arms | correct |
| Caps example 2/1/5 | as stated | Standard cap structure for 5/6 SOFR ARMs | https://selling-guide.fanniemae.com/sel/b2-1.4-02/adjustable-rate-mortgages-arms | correct |
| AIR table on page 2 of the Loan Estimate | as stated | Correct (TRID) | https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/ | correct |
| DTI typically below 50% | as stated | Fannie DU max 50% | https://selling-guide.fanniemae.com/sel/b3-6-02/debt-to-income-ratios | correct |

**Schema.** MortgageLoan (#loan): name "Adjustable-Rate Mortgage"; loanType "Adjustable-rate". FAQPage regenerated (7 questions).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "how ARM resets work" → https://alignlending.com/learn/adjustable-rate-mortgage-resets/ — Caps H2
- "ARM pros and cons" → https://alignlending.com/learn/adjustable-rate-mortgages-pros-and-cons/ — ARM vs fixed H2 (exists in Learn; add in body)
- "six ways to manage ARM risk" → https://alignlending.com/learn/adjustable-rate-mortgage-tips/ — FAQ "Is an adjustable rate mortgage risky?"
- "fixed vs adjustable, side by side" → https://alignlending.com/learn/fixed-vs-arm/ — ARM vs fixed H2

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/fixed-vs-arm/ → "adjustable-rate mortgages in Michigan" → https://alignlending.com/product-loans/adjustable-rate-mortgage/
- https://alignlending.com/learn/adjustable-rate-mortgage-tips/ → "adjustable-rate mortgages in Michigan" → https://alignlending.com/product-loans/adjustable-rate-mortgage/

### 7.11 Temporary buydown — `/product-loans/buydown-loans/` — 77/100 (C)

**Target query and intent.** Primary: temporary buydown michigan / 2-1 buydown. Secondary: 2-1 buydown calculator; seller paid buydown; fannie mae temporary buydown requirements.  
GSC evidence: Only 3 buydown queries in 90 days ("fannie mae temporary buydown selling guide" 6 imprs pos 11.8). 24 contextual inlinks. Low demand today; value is conversion on new-construction and seller-concession pages.  
PAA used: (no seed run; low volume)

**Cannibalization and ownership.** Owner: product page for "temporary buydown / 2-1 buydown" (it has the calculator). /learn/mortgage-rate-buydowns/ owns "temporary vs permanent buydown"; /learn/rate-strategy/ owns points/locks. Keep the calculator here; link /points-vs-lender-credit-calculator/ for permanent buydowns.

**Above the fold (exact).**

- Current: "A temporary buydown lowers your monthly payment for the first one to three years, paid from money set aside at closing, usually by the seller or a builder. The note rate on the loan does not change."
- Eyebrow: Seller-paid buydowns for Michigan buyers
- H1 (KEEP): Temporary Buydown Loans in Michigan
- Subhead (57 words): A temporary buydown fits buyers whose seller or builder will pay to lower the payment for the first one to three years, such as a 2-1 buydown. You still qualify at the full note-rate payment, and the payment steps up once a year. Samantha shows what the seller's money buys and checks that the full payment fits.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Run the buydown calculator** → #temporary-buydown-calculator (on-page; add id to the H2)
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Temporary Buydown Loans in Michigan |  |
| H2 | RENAME | Key benefits  →  How a temporary buydown works |  |
| H2 | NEW | How does a 2-1 buydown work? | The payment is figured at 2 percentage points below the note rate in year one and 1 point below in year two; from year three you pay the full note-rate payment. The seller or builder funds the difference into an escrow account at closing. You qualify at the full payment, so your borrowing power does not change. |
| H2 | KEEP | Temporary buydown against paying points | Add one-line lead answer: "A temporary buydown uses someone else's money for a short period; points use yours to lower the rate for the life of the loan." |
| H2 | RENAME | Guidelines for this loan  →  What are the rules for a temporary buydown? | Add Fannie Mae limits as a table row: up to 3 years, rate steps of no more than 1 point a year, qualify at note rate; FHA and VA have their own rules. |
| H2 | KEEP | Temporary Buydown Calculator | Add id="temporary-buydown-calculator". |
| H3 | RENAME | The loan  →  Enter your loan details | A bare "The loan" heading carries no meaning. |
| H2 | RENAME | Check the rules at the source  →  Where we check buydown rules | Add Fannie Mae B2-1.4-04 and B3-6-04. |
| H2 | RENAME | Questions about this loan  →  Buydown questions Michigan buyers ask |  |
| H3 | KEEP | What is a 2-1 buydown in plain terms? | Shorten (the new H2 now answers it) or merge. |
| H3 | KEEP | Who pays for the buydown? / What happens when the buydown period ends? / Can I refinance before it steps up? / Does Michigan change the buydown math? |  |
| H3 | RENAME | Can I use a buydown on any loan type?  →  Which loans allow a temporary buydown? | Conventional, FHA and VA fixed-rate loans commonly allow one, and Fannie Mae also allows certain ARMs. Each program caps how much a seller can contribute toward your costs, and the buydown counts toward that cap. [VERIFY: USDA HB-1-3555 temporary buydown allowance before adding USDA] |
| H2 | KEEP | What our clients say | Keep. Prefer reviews that mention this loan type or a Michigan city; never edit review text. |
| H2 | KEEP | Ask Samantha whether this loan fits | Keep the H2 and its one-line brief. |
| H3 | DEMOTE | Tell us what you are trying to do / We look at your situation / You leave with a plan | Change these three process steps from H3 to a styled ordered list (<ol class="adp-steps">). They repeat on ~20 product pages and carry no topic. |
| H2 | RENAME | Start with your question  →  Plan your next step | Generic label shared by every product page. |
| H2 | RENAME | Learn  →  Buydown guides from the Learn Center | Names the entity; keeps the existing article links and adds the ones listed under Internal links. |
| H2 | RENAME | Other loan options  →  Compare a temporary buydown with other Michigan loans | Entity-specific sibling block. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Temporary Buydown Loans In Michigan | Calculator | 2-1 Buydown Loans in Michigan: Calculator | Align Lending | 57 |
| Meta | A temporary buydown lowers your payment for the first one to three years. Free calculator shows each year of payments and what funding it costs. | A temporary buydown lowers your payment for the first one to three years. Free calculator shows each year of payments and what funding it costs. | 144 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Buydown period one to three years | as stated | Fannie B2-1.4-04: max 3 years; rate increase ≤1% per year; max 3% reduction | https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns | correct |
| Qualify at the note rate | as stated | Fannie B3-6-04: qualify without the bought-down rate | https://selling-guide.fanniemae.com/sel/b3-6-04/qualifying-payment-requirements | correct |
| Fixed-rate loans | "It is set up on a fixed-rate loan" | Fannie allows fixed-rate and certain ARMs | https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns | mostly correct (add ARM nuance) |
| Eligible loans FHA, VA and conventional | as stated | Correct; USDA also permits temporary buydowns under HB-1-3555 [VERIFY] | https://www.rd.usda.gov/resources/directives/handbooks | incomplete [VERIFY] |
| Unused escrow credited at payoff | "usually credited" | Fannie: funds must be applied for borrower benefit at payoff (B2-1.4-04) | https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns | correct |

**Schema.** MortgageLoan (#loan): name "Temporary Buydown"; keep WebApplication for the calculator; Offer node: confirm it carries no rate. FAQPage regenerated.

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "points vs lender credit calculator" → https://alignlending.com/points-vs-lender-credit-calculator/ — Temporary vs points H2
- "how to negotiate seller concessions" → https://alignlending.com/learn/how-to-negotiate-seller-concessions/ — FAQ "Who pays for the buydown?"
- "buying a new-construction home" → https://alignlending.com/learn/new-home-construction/ — 2-1 H2 (builder buydowns)
- "temporary vs permanent buydowns" → https://alignlending.com/learn/mortgage-rate-buydowns/ — Temporary vs points H2 (replaces Read the guide)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/how-to-negotiate-seller-concessions/ → "seller-paid temporary buydown" → https://alignlending.com/product-loans/buydown-loans/
- https://alignlending.com/points-vs-lender-credit-calculator/ → "temporary buydown calculator" → https://alignlending.com/product-loans/buydown-loans/

### 7.12 Physician — `/product-loans/physician-loans/` — 76/100 (C)

**Target query and intent.** Primary: physician loan michigan / physician mortgage loans michigan. Secondary: who qualifies for a physician loan; is a physician loan a conventional loan; resident physician mortgage.  
GSC evidence: "michigan physician loan" 26 imprs pos 29.9; "physician mortgage loan michigan" 22 pos 58.4; "physician mortgage loans michigan" 8 pos 7.4; "is a physician loan a conventional loan" 10 pos 85.6. 33 queries.  
PAA used: What is a physician's mortgage loan? (seed "physician loan Michigan" returned mostly loan-officer noise)

**Cannibalization and ownership.** Owner: product page for "physician loan Michigan". /learn/physician-mortgage-loans/ (5,849 words, 6 inlinks) owns the national informational topic. Neither page links to the other. The product page has only 2 contextual inlinks (hub and /learn/innovative-mortgage-products/) and 4 total, the weakest in scope; it is effectively orphaned from navigation.

**Above the fold (exact).**

- Current: "A signed contract, a training stipend and a large student loan balance can make a strong future look thin on paper. Physician programs are written for that file. Terms vary by lender, so Samantha compares them before you choose." + "The short answer" block.
- Eyebrow: For doctors and medical professionals
- H1 (KEEP): Physician Loans in Michigan
- Subhead (55 words): A physician loan fits MDs, DOs and some other medical professionals with a signed contract, training income or large student loans. Many programs allow a small down payment without mortgage insurance and accept a contract before the job starts. Each lender writes its own rules, so Samantha compares physician programs with conventional and jumbo first.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **Compare two Loan Estimates** → https://alignlending.com/compare-loan-estimates/
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Physician Loans in Michigan |  |
| H2 | RENAME | Physician Loans, in short  →  What is a physician loan? | Question-led; keep the existing 80-word answer (strong). |
| H2 | RENAME | Is it a fit?  →  Who qualifies for a physician loan? |  |
| H3 | KEEP | Who it fits / Who it may not fit |  |
| H2 | KEEP | How it works | Add H3s inside this long section: "Down payment and mortgage insurance", "Employment contract in place of pay history", "How student loans are counted", "Loan size, credit and reserves" (currently bold lead-ins, not headings). |
| H2 | RENAME | What to have ready  →  What documents do I need for a physician loan? |  |
| H2 | KEEP | Tradeoffs to understand |  |
| H2 | KEEP | Questions to ask any lender |  |
| H2 | KEEP | How Samantha helps | The first-person quote needs sign-off: [VERIFY: confirm "Just tell me the story. Then give me the documents." and the paragraph are Samantha's own approved words]. |
| H2 | RENAME | Check the rules at the source  →  Where we check physician loan rules |  |
| H2 | RENAME | Questions about this loan  →  Physician loan questions Michigan doctors ask |  |
| H3 | KEEP | All 6 existing questions |  |
| H3 | NEW | Is a physician loan a conventional loan? | No. A physician loan is a lender's own portfolio program, not a Fannie Mae, Freddie Mac, FHA or VA loan, so the lender writes its rules and usually keeps the loan. A conventional loan follows Fannie Mae or Freddie Mac rules. Comparing both on the same home shows which costs less. |
| H2 | KEEP | What our clients say |  |
| H2 | RENAME | The first conversation does not have to turn into anything  →  Ask Samantha whether a physician loan fits | Matches the other product pages; process H3s DEMOTE to a list. |
| H2 | RENAME | Start with your question / Learn / Other loan options | As template (Plan your next step / Physician loan guides from the Learn Center / Compare physician loans with other Michigan loans). |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Physician Mortgage Loans In Michigan | Align Lending | Physician Mortgage Loans in Michigan | Align Lending | 52 |
| Meta | How physician and medical professional mortgages work: contracts in place of pay history, student loans, mortgage insurance. Terms vary by lender. | How physician and medical professional mortgages work: contracts in place of pay history, student loans, mortgage insurance. Terms vary by lender. | 146 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| Fannie B3-6-05: credit report payment; $0 IDR payment allowed; deferred = 1% of balance or amortizing payment | as stated | Matches current Selling Guide B3-6-05 | https://selling-guide.fanniemae.com/sel/b3-6-05/monthly-debt-obligations | correct |
| Fannie B3-3.3-03 accepts non-contingent offer/contract with conditions | as stated | Matches current guide | https://selling-guide.fanniemae.com/sel/b3-3.3-03/employment-offers-or-contracts | correct |
| CFPB: PMI usually required under 20% down on conventional | as stated | Correct | https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/ | correct |
| 2026 conforming limit $832,750 | as stated | Correct; update for 2027 | https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026 | correct (2027 update) |
| Samantha first-person quote | "Just tell me the story…" | No source on page | https://alignlending.com/samantha-shelton/ | needs sign-off [VERIFY] |

**Schema.** Keep MortgageLoan + FAQPage; set areaServed State Michigan; add WebPage reviewedBy → #person. FAQPage add the new question (7).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "physician mortgage loans: benefits, rules and tradeoffs" → https://alignlending.com/learn/physician-mortgage-loans/ — What is a physician loan? H2
- "jumbo loans above the conforming limit" → https://alignlending.com/product-loans/jumbo-loans/ — Who it fits (loan above the limit)
- "how private mortgage insurance works" → https://alignlending.com/learn/mortgage-insurance/ — Down payment and mortgage insurance H3

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/physician-mortgage-loans/ → "physician loans in Michigan" → https://alignlending.com/product-loans/physician-loans/
- https://alignlending.com/product-loans/jumbo-loans/ → "physician loans" → https://alignlending.com/product-loans/physician-loans/
- https://alignlending.com/product-loans/conventional-loans/ → "physician loans for doctors and residents" → https://alignlending.com/product-loans/physician-loans/
- https://alignlending.com/purchase/self-employed-homebuyer/ → "physician loans" → https://alignlending.com/product-loans/physician-loans/
- https://alignlending.com/mortgage-lender-ann-arbor-mi/ → "physician loans in Michigan" → https://alignlending.com/product-loans/physician-loans/
- site footer / Loan Options menu → "Physician Loans" → https://alignlending.com/product-loans/physician-loans/

### 7.13 Manufactured home — `/product-loans/manufactured-home-loans/` — 79/100 (C)

**Target query and intent.** Primary: manufactured home loans michigan. Secondary: manufactured home financing michigan; mobile home loans michigan; do you pay property taxes on mobile homes in michigan (PAA).  
GSC evidence: "michigan manufactured home loans" 22 imprs pos 29.7; "manufactured home loans michigan" 6 pos 14.3; "manufactured home financing michigan" 4 pos 41. 100 contextual inlinks.  
PAA used: Do you pay property taxes on mobile homes in Michigan?; Can you live in a mobile home on your own property?; Is it harder to get a mortgage on a manufactured home?; How much are payments on a $100,000 mobile home?

**Cannibalization and ownership.** Owner: product page. /learn/manufactured-homes-pros-and-cons/ (146 inlinks) owns "pros and cons"; /learn/refinancing-manufactured-home/ owns refinance and does not link back (fix both ways).

**Above the fold (exact).**

- Current: "Whether a manufactured home can carry a regular mortgage usually comes down to two questions: who owns the land under it, and whether the home is legally part of that land. Samantha starts there." + "The short answer" block.
- Eyebrow: For manufactured home buyers and owners
- H1 (KEEP): Manufactured Home Loans in Michigan
- Subhead (59 words): A manufactured home can carry a regular mortgage when it was built to the HUD Code on or after June 15, 1976, sits on a permanent foundation, and is legally part of land you own. Conventional, FHA, VA and USDA can all finance it; a rented lot usually means a chattel loan. Samantha checks the home before the loan.
- Primary CTA: **Start my application** → https://alignlending.com/start/?goal=buy
- Secondary CTA: **See what to have ready** → #what-to-have-ready (on-page; add id to the H2)
- Tertiary text link: Talk with Samantha → https://calendly.com/samanthashelton
- Trust line: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews
- Reviewer line: Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated November 2026

**Recommended H2/H3 outline (exact).**

| Level | Status | Heading | Direct answer / note |
|---|---|---|---|
| H1 | KEEP | Manufactured Home Loans in Michigan |  |
| H2 | RENAME | Manufactured Home Loans, in short  →  Can you get a mortgage on a manufactured home in Michigan? | Keep the existing answer. |
| H2 | RENAME | Is it a fit?  →  Which manufactured homes qualify for a mortgage? |  |
| H3 | KEEP | Who it fits / Who it may not fit |  |
| H2 | KEEP | How it works | BUG: four intended H3s render as literal text "### Step 1: …" in the body. Fix in the editor so they output real H3 elements: |
| H3 | NEW | Step 1: Know what kind of home it is | Currently literal "### Step 1: Know what kind of home it is" in a paragraph. |
| H3 | NEW | Step 2: Real property or personal property | Currently literal "### Step 2…". |
| H3 | NEW | Step 3: Match the home to a loan route | Currently literal "### Step 3…". |
| H3 | NEW | How Michigan turns a manufactured home into real property | Currently literal "### In Michigan"; rename for the query "how does a manufactured home become real property in Michigan". |
| H2 | NEW | Do you pay property taxes on a manufactured home in Michigan? | It depends on where it sits. A home in a licensed manufactured housing community pays a specific tax of $3 a month, collected by the community, instead of property tax on the home. A home affixed to land you own is taxed with the land as real property, and its taxable value uncaps the year after you buy. |
| H2 | RENAME | What to have ready  →  What documents do I need for a manufactured home loan? | Add id="what-to-have-ready" for the ATF CTA. |
| H2 | KEEP | Tradeoffs to understand |  |
| H2 | KEEP | How Samantha helps | [VERIFY: confirm the first-person quote is Samantha's approved wording] |
| H2 | RENAME | Check the rules at the source  →  Where we check manufactured home rules | Replace law.cornell.edu (38 U.S.C. 3710) with uscode.house.gov (government source). |
| H2 | RENAME | Questions about this loan  →  Manufactured home loan questions Michigan buyers ask |  |
| H3 | KEEP | All 6 existing questions |  |
| H3 | NEW | Is it harder to get a mortgage on a manufactured home? | Somewhat. Fewer lenders offer manufactured home mortgages, the home must meet HUD Code, foundation and real-property rules, and appraisals need comparable sales nearby. When the home and land qualify, the credit and income rules are the same as for a site-built home under each program. |
| H2 | RENAME | The first conversation does not have to turn into anything  →  Ask Samantha whether your home qualifies | Process H3s DEMOTE. |
| H2 | RENAME | Start with your question / Learn / Other loan options | As template. |

**Title and meta (exact).**

| | Current | Recommended | Length |
|---|---|---|---|
| Title | Manufactured Home Loans In Michigan | Align Lending | Manufactured Home Loans in Michigan | Align Lending | 51 |
| Meta | Financing a manufactured home: real property or chattel, the FHA, VA, USDA and conventional routes, and the papers to gather before you apply. | Financing a manufactured home: real property or chattel, the FHA, VA, USDA and conventional routes, and the papers to gather before you apply. | 142 |

**Fact check.**

| Claim | On page | Verified value | Source | Status |
|---|---|---|---|---|
| HUD Code effective June 15, 1976 | as stated | 24 CFR 3280; homes built on/after 6/15/1976 | https://www.ecfr.gov/current/title-24/subtitle-B/chapter-XX/part-3280 | correct |
| Fannie: ≥12 ft wide, ≥400 sq ft, permanent foundation; second homes multi-width | as stated | Fannie B2-3-02 / B5-2-02 | https://selling-guide.fanniemae.com/sel/b5-2-02/manufactured-housing-loan-eligibility | correct |
| FHA Title II ≥400 sq ft, HUD label, real estate | as stated | 24 CFR 203.43f | https://www.ecfr.gov/current/title-24/subtitle-B/chapter-II/subchapter-B/part-203/subpart-A/section-203.43f | correct |
| Licensed community specific tax $3.00/month | as stated | MCL 125.1041 | https://legislature.mi.gov/Laws/MCL?objectName=mcl-125-1041 | correct |
| Affidavit of affixture; "holds" = owns land or ground lease ≥20 years | as stated | MCL 125.2330i (not re-read this session) | https://legislature.mi.gov/Laws/MCL?objectName=mcl-125-2330i | not re-verified [VERIFY] |
| Literal ### markup | "### Step 1:" etc. in visible text | Rendering bug, 4 instances | https://alignlending.com/product-loans/manufactured-home-loans/ | fix |
| Reviews naming Travis and Ryan Greiner | 2024 reviews | Confirm these loan officers are current Align team members | https://alignlending.com/about-us/ | check [VERIFY] |

**Schema.** Keep MortgageLoan + FAQPage; areaServed State Michigan; FAQPage add the new questions (8).

**Internal links to add (outbound, exact anchor → URL @ placement).**

- "refinancing a manufactured home" → https://alignlending.com/learn/refinancing-manufactured-home/ — Who it fits (owners refinancing) + Learn block
- "Michigan taxable value after you buy" → https://alignlending.com/learn/michigan-taxable-value/ — New property tax H2 (exists in Learn; add in body)

**Inbound links to add (source → anchor → this page).**

- https://alignlending.com/learn/refinancing-manufactured-home/ → "manufactured home loans in Michigan" → https://alignlending.com/product-loans/manufactured-home-loans/

## 8. Implementation checklist

**P0 (fix now):** priority-page ATF subheads; USDA mid-CTA to /usda-eligibility-check/ and link to /learn/usda-loan-basics/; physician menu entry and inbound links; conventional/FHA 620 wording; hub "fifteen" → "more than 20"; manufactured literal ### headings; metas under 140 chars; outbound links to ranking learn articles/tools (usda-loan-basics, homeready-mortgages, 15-vs-30, pmi-removal-calculator, fha-loan-limits).
**P1 (this month):** titles; new question-led H2s with answers and tables; FAQ additions and regenerated FAQPage schema; template H2 renames; reviewer/updated line; schema areaServed fix; descriptive anchors replacing "Read the guide"; compliance decisions on percentages and the 15/30-year product names.
**P2 (backlog):** process-step demotion; minor heading renames; calculator CTA label; USDA review cards; VA michigan.gov link; Cornell LII → uscode.house.gov.

Counts: 462 change rows, 88 fact-check rows, 130 score rows.

## 9. Sources

- https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026
- https://www.fhfa.gov/data/conforming-loan-limit
- https://www.hud.gov/sites/dfiles/hudclips/documents/2025-23hsgml.pdf
- https://www.hud.gov/news/hud-no-25-145
- https://www.hud.gov/sites/default/files/Housing/documents/MMI-Qtrly-Q1-FY2026.pdf
- https://archives.hud.gov/news/2023/pr23-041.cfm
- https://answers.hud.gov/FHA/s/article/Does-FHA-require-a-minimum-credit-score-and-how-is-it-determined
- https://answers.hud.gov/FHA/s/article/What-are-the-maximum-qualifying-ratio-requirements-for-manually-underwritten-loans
- https://www.hud.gov/sites/default/files/hudclips/documents/2026-11hsgml.pdf
- https://www.hud.gov/hud-partners/single-family-handbook-4000-1
- https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/
- https://www.va.gov/housing-assistance/home-loans/loan-limits/
- https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/
- https://www.rd.usda.gov/media/file/download/usda-rd-sfh-guarantee-loan-program-101-jan-2026.pdf
- https://www.rd.usda.gov/programs-services/single-family-housing-guaranteed-loan-program/mi
- https://eligibility.sc.egov.usda.gov/eligibility/welcomeAction.do
- https://www.rd.usda.gov/resources/directives/handbooks
- https://singlefamily.fanniemae.com/news-events/announcement-sel-2025-09-selling-guide-updates
- https://singlefamily.fanniemae.com/media/8341/display
- https://selling-guide.fanniemae.com/sel/b5-6-01/homeready-mortgage-loan-and-borrower-eligibility
- https://ami-lookup-tool.fanniemae.com/amilookuptool/
- https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/home-possible
- https://selling-guide.fanniemae.com/sel/b2-1.4-04/temporary-interest-rate-buydowns
- https://selling-guide.fanniemae.com/sel/b3-6-04/qualifying-payment-requirements
- https://selling-guide.fanniemae.com/sel/b3-6-02/debt-to-income-ratios
- https://selling-guide.fanniemae.com/sel/b3-6-05/monthly-debt-obligations
- https://selling-guide.fanniemae.com/sel/b3-3.3-03/employment-offers-or-contracts
- https://selling-guide.fanniemae.com/sel/b5-2-02/manufactured-housing-loan-eligibility
- https://selling-guide.fanniemae.com/sel/b2-3-02/special-property-eligibility-and-underwriting-considerations-factory-built-housing
- https://www.consumerfinance.gov/ask-cfpb/when-can-i-remove-private-mortgage-insurance-pmi-from-my-loan-en-202/
- https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-fixed-rate-and-adjustable-rate-mortgage-arm-loan-en-100/
- https://www.consumerfinance.gov/rules-policy/regulations/1026/Interp-24
- https://www.consumerfinance.gov/data-research/research-reports/manufactured-housing-finance-new-insights-hmda/
- https://www.michigan.gov/taxes/property/exemptions/veterans/disabled-veterans-exemption
- https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-7b
- https://www.michigan.gov/taxes/property/change-ownership
- https://legislature.mi.gov/Laws/MCL?objectName=mcl-125-1041
- https://legislature.mi.gov/Laws/MCL?objectName=mcl-125-2330i
- https://www.ecfr.gov/current/title-24/subtitle-B/chapter-II/subchapter-B/part-203/subpart-A/section-203.43f
- https://www.ecfr.gov/current/title-24/subtitle-B/chapter-XX/part-3280
- https://www.freddiemac.com/pmms
- https://alignlending.com/loan-limits/
- https://alignlending.com/usda-eligibility-check/
- DataWise GSC property 7faa6221b18546d9a3c4c6a4fd0ae4ed (queries, 90 days; searches: fha, usda, va loan, conventional, jumbo, homeready, buydown, physician, manufactured, adjustable, arm, 15 year, 30 year, align, conforming, loan types, funding fee)
- DataWise People Also Ask: FHA loan Michigan; VA loan Michigan; USDA loan Michigan; jumbo loan limit Michigan 2027 (depth 2); conventional loan requirements; manufactured home loan Michigan; HomeReady mortgage; physician loan Michigan (depth 1)