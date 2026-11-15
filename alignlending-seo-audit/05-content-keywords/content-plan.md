# Content plan: closing the blog, GSC and keyword gaps

**Prepared by:** Content strategist (Content team, step 4 of 4) · **Date:** 2026-11-15 · **For:** the owner, the PM, blog writers, the core-page, city, links, CTA and images teams, and the brand/SEO consistency team.
**Inputs:** `blog-inventory-report.md` + `blog-inventory.csv` (analyst 1), `gsc-gap-report.md` + `gsc-blog-candidates.csv` + `gsc-opportunities.csv` (analyst 2), `competitor-gap-report.md` + `keyword-gaps.csv` + `paa-question-bank.csv` + `ai-visibility.md` (analyst 3), the core-page reports in `03-core-pages/`, the links team's `02-links/` files, the CTA report, the content auditor's `08-audit/audit-content.md` and `corrections-content.csv`, and `00-project/KNOWN-CORRECTIONS.md` (F1–F18, D1–D8).
**Deliverables:** this file · `blog-plan.csv` (92 rows: every candidate, its decision and owner) · 14 sprint briefs in `06-blogs/briefs/` plus 1 backlog brief in `06-blogs/briefs/backlog/` · shared writing rules in `06-blogs/briefs/_README.md`.
**Data limits:** Bing Webmaster data is not connected, so there are no Bing numbers anywhere in this plan; a Bing export is needed (section 13). GSC returns no page dimension except for a few dozen "opportunities" rows, so most query-to-page mappings are inferred (the auditor found the two analysts disagree on 33% of shared mappings); confirm any URL change with a GSC Page × Query export first. Nothing has been changed on the live site.

---

## 1. Summary

**The owner asked for "as many blogs as needed to close the gaps".** The evidence says the library does not lack volume: 424 articles (median 5,604 words), all re-dated in five weeks, earned 50,180 impressions and 4 clicks (auditor: at least 11 Learn clicks at page level). Search systems read that as scaled content. So "as many as needed" here means **every evidenced gap gets one owner**, and a new URL only where no existing page, money page or tool can own the query.

**Decisions on the 84 nominated ideas** (26 inventory + 30 GSC + 28 competitor; the auditor counts 69 distinct topics after double-listing):

| Decision | Rows | What it means |
|---|---|---|
| **NEW POST** | 15 | 14 drafted this sprint, 1 in the backlog. Each is Michigan-specific or built on Align's own data, 1,500–2,500 words, and owns a query set no other page owns. |
| **MERGE INTO a new post** | 15 | Duplicate nominations folded into the 15 posts (for example 5 GSC USDA ideas into 1 post). |
| **REFRESH an existing URL** | 32 | The gap is real but an existing article already owns the intent (closing costs, homestead/PRE, Michigan first-time programs, lender comparison, rate lock, 3/7/3, well water and more). |
| **OWNED BY a money page or tool** | 22 | The query belongs to a product page, a purchase or refinance page, a calculator, `/loan-limits/` or a city page. No blog post. |
| **DEFER (owner decision)** | 1 | Reverse mortgages (D1). |
| **DROP (off-topic)** | 7 | GSC drift themes (personal loans, crowdfunding, insurance deductibles, energy audits, NMLS exam questions, 1031 exchanges, mansions). |

**The library gets smaller and stronger:** 424 articles − 85 merged − 38 pruned = **301**, plus 15 new = **316 indexable articles (−25%)**. 63 merge groups, 38 prunes (crowdfunding becomes a 301; the mixed-use page is kept, per the auditor), 14 legacy redirects repointed so no chain is created.

**The sprint (priority order):** MSHDA MI Home Loan · what disqualifies you from a home equity loan · VA and property tax benefits for disabled veterans in Michigan · rent-to-own vs. land contract vs. mortgage · how to get preapproved (national query, Michigan angle) · mortgages after 60 · USDA loan requirements · income needed to buy in Michigan · adding or removing a name on a mortgage · what not to tell a lender · how DSCR loans work · Michigan homestead property tax credit · buying after bankruptcy or foreclosure · buying on SSI or disability income. Backlog: VA entitlement (after the 2027 limits).

**What makes these posts better than what ranks:** they answer with Michigan facts and Align's own research, which no competitor has. Four briefs use the 2025 HMDA Market Report (for example, HELOC denials of 30.1% vs 15.5% for purchase loans; median buyer income $91,000 on a $285,000 home), and ten use the 2026 Uncapping Study (a typical 50.5% taxable-value jump after a sale; 36.0 mills statewide median), all without stating a rate.

**Top refreshes and fixes (week 1):** remove the "subsidized rates as low as 1%" meta on `/learn/usda-loan-basics/` and the same phrase on 7 more Learn pages (F13); remove rate forecasts from `housing-market-outlook` and the "rates near 6.5%" meta on `mortgage-news`; retitle and merge the lease-to-own canonical (15,242 impressions on its head term); refresh the Michigan first-time programs page and the homestead/PRE guide in place; update every page carrying the 2026 conforming limit the day FHFA announces 2027 (section 10).

**Changes made after the auditor and the corrections register:** dropped the well/septic post (existing pages cover it; refresh instead), added an informational DSCR post at `/learn/how-dscr-loans-work/` (the product page keeps "dscr loans michigan"), reframed the pre-approval post as a national query with Michigan-specific wins (score cut from 70 to 56), flipped the amortization canonical to `/learn/amortization-schedules/`, made the DTI page own the calculator query (a calculator already runs on it), removed every stock Samantha quote from the briefs in favor of `[NEEDS SAMANTHA QUOTE: topic]`, and applied F1 (First-Generation DPA closed), F2 (MSHDA participating-lender wording), F3 (no fixed 620 conventional floor), F4 (36.0 mills), F5 (June 1 / November 1) and F7 (government non-affiliation line).

---

## 2. How the decisions were made

**Ownership rules (applied in this order):**
1. **A money page or tool owns commercial and tool queries.** "Michigan X loans", "X calculator", "check eligibility", county limits and city queries go to the product page, purchase/refinance page, calculator, `/loan-limits/` or city page that the core-page and city teams are already rewriting. Their query ownership maps (products-a §4, products-b §4.1, purchase report, refinance §4) were applied as given.
2. **An existing article owns its intent** if it already matches and has equity (inlinks, impressions). Refresh it in place rather than add a competing URL. This is why closing costs, the homestead/PRE guide, Michigan first-time programs and the lender comparison are refreshes, not new posts.
3. **A new URL must pass four tests:** evidenced demand (GSC impressions, measured volume, or People Also Ask frequency); no existing owner and no cannibalization of a money page; a Michigan-specific angle or Align original data; a query a tool or money page should not own.
4. **Duplicates collapse to one URL**, and narrow sibling ideas fold into one stronger post (USDA: 5 ideas → 1 post; bankruptcy: 3 nominations → 1 post).
5. **Owner decisions are not resolved here** (D1 reverse mortgages, D2 typical home value, D3 MSHDA access); each affected brief carries the pending wording.

**Priority score** = impact × feasibility × strategic fit, each 1–5, scaled to 100 (125 = 100).
- **Impact:** demand (GSC impressions and position, volume and KD, PAA frequency), AI-visibility gap, closeness to a money page.
- **Feasibility:** verifiable primary sources, compliance risk (trigger terms, rate questions), dependencies on owner decisions, competition.
- **Strategic fit:** Michigan broker relevance, a path to a conversion, and how much unique Michigan or Align data the post can carry.

**Sprint cut:** posts scoring 34 or more and with no blocking dependency (14). The 15th (VA entitlement, 26) waits for the 2027 county limits.

---

## 3. Plan scorecard (self-assessed; auditors re-score)

| Aspect | Score | Grade | Rationale (evidence) |
|---|---|---|---|
| Gap coverage | 95 | A | All 84 nominations plus the reverse-mortgage and drift themes have a decision and an owner in `blog-plan.csv` (92 rows); the 10 "missing" core topics in the inventory's coverage map each map to a new post, a refresh or a money page. |
| Cannibalization control | 86 | B | Every brief has a "Do not target" list naming the owning URL; 3 boundaries still need another team to act (budget-review H2, `/purchase/first-time-homebuyer/` title, VA requirements owner, section 12). |
| Scaled-content risk | 85 | B | Indexable articles fall 25% (424 → 316); new posts are capped at 2,500 words against a 5,604-word median and drop the 5-heading template tail; many refreshed pages are still 5,000+ words. |
| Michigan specificity and original data | 85 | B | 12 of 15 briefs require a Michigan statute, program, tax fact or Align dataset in the first 60 words; the USDA-requirements, what-not-to-tell and SSI briefs carry their Michigan angle (post-sale taxes in the 29% ratio; Friend of the Court and tax liens; MiABLE and MSHDA) further down. |
| Compliance readiness | 84 | B | Every brief applies F1–F18 and the trigger-term rules; 9 tables are flagged `[COMPLIANCE REVIEW]` for counsel; MSHDA wording waits on D3. |
| Evidence quality | 78 | C | Volumes are measured or GSC-backed for 10 posts; 5 rest on PAA frequency or unmeasured informational demand; GSC page mappings are inferred (33% analyst disagreement per the auditor). |

---

## 4. All 84 candidates, merged and deduplicated

Source IDs: **I1–I26** inventory new guides (`blog-inventory-report.md` §9), **N01–N30** GSC candidates (`gsc-blog-candidates.csv`), **C1–C28** competitor candidates (`competitor-gap-report.md` §6). Ranks follow `blog-plan.csv` (new posts first, then merges, refreshes, owned, deferred, dropped). Scores for non-new rows rate the urgency of the owner's action.


**NEW POST** (15 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 1 | I1+C3 | MSHDA MI Home Loan: Income Limits, Price Limit and Rules | `/learn/mshda-mi-home-loan/` (new) | mshda mi home loan 720/mo KD1, mshda loan 590 KD1, mi home loan 590 KD19, mshda income limits 390 KD0, mshda loan requirements 140; 0 GSC queries contain 'mshda'; MSHDA named on 162 pages with no … | 80 |
| 2 | C7 | What Disqualifies You From a Home Equity Loan or HELOC? | `/learn/what-disqualifies-you-from-a-home-equity-loan/` (new) | 880/mo KD2 (The Mortgage Reports #2); heloc limit 170; home equity loan with 520 credit score 90; refi-team PAA 'What will disqualify you from a home equity loan?'; original data: Align 2025 HMDA … | 80 |
| 3 | N11+I6+C24 | VA Benefits for Disabled Veterans Buying a Home in Michigan | `/learn/va-benefits-disabled-veterans-michigan/` (new) | GSC disability cluster 345 impr wpos 49 (22 queries, 0 clicks); michigan disabled veteran property tax exemption 170/mo KD2; MCL 211.7b mentioned on 26 pages with no owner; AI tracker FHA/VA broker … | 64 |
| 4 | N19 | Rent-to-Own vs. Land Contract vs. Mortgage in Michigan | `/learn/rent-to-own-vs-land-contract-michigan/` (new) | GSC cluster 177 impr (buy lease or rent 64 pos 38.9; rent to own vs buying 31 pos 33; rent to own vs buying a house 19 pos 8.0); bridges the 16,051-impression lease-to-own pool (pos 58.7, 3 clicks) … | 64 |
| 5 | C1+I22 | How to Get Pre-Approved for a Mortgage in Michigan | `/learn/how-to-get-pre-approved-for-a-mortgage/` (new) | 12,100/mo KD22 is the NATIONAL query (mortgagecenter.com #20); the Michigan variant shows 0 volume (auditor CG-3); GSC michigan mortgage pre-approval 23 impr pos 1.9, pre-approval dearborn 47 pos … | 56 |
| 6 | C9 | Can You Get a Mortgage at 60, 70 or 80? Senior Home Loans | `/learn/mortgage-for-seniors/` (new) | 210/mo KD23; senior mortgage loan 140 KD1; fha cash out plan for seniors 110; can you buy a house on social security 90; PAA age questions in 9 of 15 seeds (The Mortgage Reports #2). Reverse-mortgage … | 51 |
| 7 | N02+N03+N04+N06+N08 | USDA Loan Requirements: Credit, DTI, Property and Occupancy | `/learn/usda-loan-requirements/` (new) | GSC USDA-requirements family 1,410 impr wpos 33 (usda loan qualification 207 pos 43; usda loan requirements 91 pos 42.6; usda dti limits 91 pos 21.1; usda max dti 80 pos 19.8); 17 USDA PAA questions … | 48 |
| 8 | C8+I11 salary questions | What Income Do You Need to Buy a House in Michigan? | `/learn/income-needed-to-buy-a-house-michigan/` (new) | 14 PAA salary questions in 9 of 15 seeds (e.g. 'How much do you need to make to afford a $300,000 house in Michigan?'); original data: 2025 HMDA median buyer income $91,000 on $285,000 median value … | 48 |
| 9 | C19+I17 | Adding or Removing a Name on a Mortgage in Michigan | `/learn/add-or-remove-name-on-mortgage-michigan/` (new) | 320/mo KD0 + adding a name to a mortgage 170 KD0 (The Mortgage Reports #2-4); divorce buyout refinance has no page; unique Michigan angle: deed changes can uncap taxable value (MCL 211.27a). Score I3 … | 48 |
| 10 | C25+I23 | What Not to Tell a Mortgage Lender (and What You Must Share) | `/learn/what-not-to-tell-a-mortgage-lender/` (new) | PAA in 8 of 15 seeds ('What should you not tell a mortgage lender?', 'What not to say to a mortgage broker?'); 'what not to do before closing' missing (2 passing mentions). Score I3 x F5 x S4 | 48 |
| 11 | N20+I8 | How DSCR Loans Work: The Ratio, the Rent and Michigan Taxes | `/learn/how-dscr-loans-work/` (new) | DSCR family 556 impr pos 39-46, 0 clicks, all commercial and owned by /product-loans/dscr-loans-michigan/; DSCR on 85 Learn pages with no explainer. Auditor + orchestrator: keep one informational … | 48 |
| 12 | C11+I25 | Michigan Homestead Property Tax Credit: Who Qualifies | `/learn/michigan-homestead-property-tax-credit/` (new) | 1,600/mo KD0; 8 PAA questions (seniors, income limit, how calculated); mentioned on 22 pages, no owner; seasonal: MI-1040CR filing season Jan-Apr. Score I4 x F4 x S3 | 38 |
| 13 | I12+N26+C23 | Buying a House After Bankruptcy or Foreclosure: Wait Times | `/learn/buying-a-house-after-bankruptcy-or-foreclosure/` (new) | fha chapter 13 bankruptcy 90 KD21, conventional bk waiting period 70, buying a house in chapter 13 50, fha chapter 7 waiting period 50 (gustancho #1-7); GSC fha waiting period 9 pos 11.1, refinance … | 38 |
| 14 | C13 | Buying a Home on SSI or Disability Income in Michigan | `/learn/buying-a-home-on-ssi-or-disability-income/` (new) | 720/mo KD0; ssi home buying program 590 KD16; housing grants for people with disabilities 590 KD17; mortgage loans for disabled people 480 KD1 (The Mortgage Reports #1-2); no Align page. Score I4 x … | 34 |
| 15 | I7+N12 | VA Entitlement Explained: Second VA Loans and Loan Limits | `/learn/va-entitlement-michigan/` (new) | GSC va minimum loan amount 39 pos 31.7, michigan va loan limits 27 pos 52.3, va supplemental loan 26 pos 34.2; entitlement content sits in va-loan-tips (being merged). Publish after 2027 county … | 26 |

**MERGE INTO** (15 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 16 | I1 | MSHDA MI Home Loan and MI 10K DPA (inventory P0) | `/learn/mshda-mi-home-loan/` | Same intent as C3; one URL. MI 10K/DPA queries stay with /purchase/down-payment-assistance/ | 80 |
| 17 | C24 | Michigan disabled veteran property tax exemption explained | `/learn/va-benefits-disabled-veterans-michigan/` | 170/mo KD2; becomes the MCL 211.7b section of the disabled-veteran post; /purchase/va-homebuyer-plan/ keeps a short summary | 64 |
| 18 | I6 | VA loan benefits for disabled veterans in Michigan (inventory) | `/learn/va-benefits-disabled-veterans-michigan/` | 211 impr (inventory map); same post as N11 | 64 |
| 19 | I22 | Preapproval documents checklist | `/learn/how-to-get-pre-approved-for-a-mortgage/` | Inventory P2 gap; becomes the documents H2 of the pre-approval post (no separate URL) | 56 |
| 20 | I8 | DSCR loans in Michigan | `/learn/how-dscr-loans-work/` | 528 impr (inventory map); slug /learn/dscr-loans-michigan/ would mirror the product URL, so the informational angle goes to /learn/how-dscr-loans-work/ and the commercial query stays with … | 48 |
| 21 | I17 | Refinancing to buy out an ex-spouse in Michigan | `/learn/add-or-remove-name-on-mortgage-michigan/` | Inventory P1 gap, no measured volume; divorce H2s of the add/remove-name post | 48 |
| 22 | N06 | Can you have two USDA loans? | `/learn/usda-loan-requirements/` | 151 impr pos 20-32; occupancy H2 of the requirements post | 48 |
| 23 | N08 | USDA rules on co-signers, condos, land and property | `/learn/usda-loan-requirements/` | 150 impr pos 16-54; property and household H2s of the requirements post | 48 |
| 24 | N03 | USDA loan credit score requirements | `/learn/usda-loan-requirements/` | 198 impr, best pos 4.3; credit H2 of the USDA requirements post | 48 |
| 25 | N04 | Is there a USDA loan limit? | `/learn/usda-loan-requirements/` | 363 impr pos 24-28; H2 "Is there a maximum USDA loan amount?" in the requirements post (income table stays with the tool) | 48 |
| 26 | I23 | What not to do between preapproval and closing | `/learn/what-not-to-tell-a-mortgage-lender/` | Inventory P2 gap; second half of the what-not-to-tell post | 48 |
| 27 | C23 | Buying a house after bankruptcy: waiting periods by loan type | `/learn/buying-a-house-after-bankruptcy-or-foreclosure/` | 260/mo cluster; same post | 38 |
| 28 | I25 | Michigan Homestead Property Tax Credit (inventory P2) | `/learn/michigan-homestead-property-tax-credit/` | Same intent as C11; one URL | 38 |
| 29 | N26 | Waiting periods after bankruptcy, foreclosure or modification | `/learn/buying-a-house-after-bankruptcy-or-foreclosure/` | 58 impr; GSC analyst defers to the competitor topic; same post | 38 |
| 30 | N12 | VA loan limits and minimums in Michigan | `/learn/va-entitlement-michigan/` | 116 impr; same backlog post | 26 |

**REFRESH** (32 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 31 | C2 | Michigan first-time home buyer programs and grants (pillar) | `/learn/first-time-home-buyer-grants-and-programs/` | 3,600/mo KD5 + michigan first time home buyer grant 3,600 KD1; Align not ranking. Refresh the existing 135-inlink /learn/ page in place instead of a 4th competing URL; money pages own 'first time … | 72 |
| 32 | C4 | Michigan principal residence exemption guide | `/learn/homestead-exemption-benefits-and-filing-guide/` | 880/mo KD0 + principal residence exemption 590 KD0; existing guide ranks 22.8-29.9 (30-day 202 impr pos 9.0); GSC analyst R20 and inventory both say refresh, not a new URL | 72 |
| 33 | C5 | Closing costs in Michigan: who pays what | `/learn/closing-costs/` | 210/mo KD6 + when is closing cost due 260 KD21; 10 PAA questions; /learn/closing-costs/ (190 inlinks) already exists with two twins: re-angle it to Michigan and absorb /learn/mortgage-closing-costs/ | 64 |
| 34 | I18 | DPA by Michigan county and city | `/learn/first-time-home-buyer-grants-and-programs/` | Local programs absent (Detroit DPA on 0 pages); becomes the local-programs H2 of the refreshed programs page; /purchase/down-payment-assistance/ owns 'michigan down payment assistance' | 60 |
| 35 | C14 | How to choose a mortgage lender in Michigan | `/learn/comparing-mortgage-lenders-what-to-look/` | 1,000/mo KD9 (Align 47-50); same refresh as N27; the state hub /mortgage-michigan/ keeps 'michigan mortgage lenders' navigation intent | 56 |
| 36 | N27 | How to compare Michigan mortgage lenders and brokers: 9 checks | `/learn/comparing-mortgage-lenders-what-to-look/` | 614 impr cluster (best mortgage lenders in michigan 185 pos 52); /learn/comparing-mortgage-lenders-what-to-look/ exists and would be cannibalized by a new URL | 56 |
| 37 | N09 | VA IRRRL rules: seasoning, NTB, credit, cash back | `/learn/va-interest-rate-reduction-refinance-loans/` | 366 impr; IRRRL guide (1,309 impr pos 70.7) is being refreshed with the same rules; a 2nd IRRRL URL would split the cluster | 56 |
| 38 | N13 | FHA debt-to-income limits | `/learn/debt-to-income-ratio-dti/` | 190 impr pos 62-76; the DTI guide (167 inlinks) gets an FHA H2 plus the HMDA DTI data | 52 |
| 39 | I14 | Refinancing out of a land contract in Michigan | `/learn/michigan-land-contract/` | land contract refinancing 40/mo pos 36; the concise land-contract guide (model format) adds the H2 and the retitle | 52 |
| 40 | N05 | USDA Direct vs. Guaranteed: Section 502 | `/learn/usda-loan-basics/` | 408 impr pos 36-46; Align cannot originate Direct loans (USDA RD lends them), so a comparison H2 + table on the basics guide, not a new URL | 52 |
| 41 | C15 | Do conventional loans require a home inspection? | `/learn/conventional-loans/` | 720/mo KD0; the answer is two sentences (lenders require an appraisal, not an inspection): H2 on the conventional hub per competitor R2 | 48 |
| 42 | C16 | Letter of explanation for a mortgage | `/learn/mortgage-underwriting/` | 780/mo KD0 (The Mortgage Reports #2); not Michigan-specific, so an H2 with a fill-in sample on the underwriting guide | 48 |
| 43 | I26 | How mortgage brokers are paid | `/learn/benefits-of-working-with-mortgage-broker/` | PAA 'How much does a mortgage broker make on a $500,000 loan?', 'What is a typical fee for a mortgage broker?'; the broker-vs-bank guide is cited #1 by Perplexity; D5 pending | 44 |
| 44 | N16 | What counts as a jumbo loan in Michigan | `/learn/how-to-qualify-for-jumbo-loan/` | 175 impr pos 45-70; H2 on the jumbo canonical linking /loan-limits/ for the dated figure | 44 |
| 45 | N18 | Rate lock expiring before closing | `/learn/what-is-mortgage-rate-lock/` | 189 impr pos 16-48; H2s on the rate-lock canonical (after absorbing benefits-of-mortgage-rate-locks) | 44 |
| 46 | N17 | Zero-down home loans in Michigan | `/learn/low-down-payment-mortgages/` | 109 impr; a 'zero down' headline is a conservative Reg Z trigger term [COUNSEL]; answer as agency rules inside the low-down canonical | 44 |
| 47 | C26 | Cash-out refinance to pay off credit cards | `/learn/what-is-cash-out-refinance-loan/` | 210/mo; H2 on the cash-out canonical (absorbing pros-and-cons-of-cash-out-refinancing) | 40 |
| 48 | C22 | Collections and charge-offs | `/learn/buying-home-with-bad-credit/` | 560/mo cluster KD0-28 (gustancho #2-6); table on the bad-credit guide (already pos 1.0 for its query) | 40 |
| 49 | N25 | Escrow account when you refinance or pay off | `/learn/mortgage-escrow-accounts/` | 49 impr pos 6-12; H2 on the escrow guide (positions 2-10 already) | 40 |
| 50 | I13 | How lenders count your income | `/learn/mortgage-underwriting/` | Inventory P1 gap with no measured demand; income-calculation H2 on the underwriting guide | 40 |
| 51 | C18 | Is HELOC interest tax deductible? | `/learn/mortgage-interest-deductions-how-they-work/` | 350/mo KD0-4; HELOC H2 on the mortgage-interest-deduction guide (IRS Pub. 936) | 40 |
| 52 | N15 | Portfolio loan rates: what moves the price | `/learn/what-is-portfolio-loan/` | 746 impr pos 39-58; rate-shopping intent Align never answers with numbers; add a pricing-factors H2 to the existing page | 40 |
| 53 | C20 | VA manual underwriting | `/learn/how-to-qualify-for-va-loan/` | 390/mo KD15; H2 on the VA requirements guide | 40 |
| 54 | N30 | The 3/7/3 rule | `/learn/new-mortgage-disclosure-rules/` | 90 impr, ranks 5-13 already; rename the H2 and retitle the disclosure guide | 36 |
| 55 | N22 | Buying a Michigan home with a well or septic: loan rules | `/learn/how-well-water-impacts-homes-value/` | GSC 236 impr wpos 38.4 (buying a home with a well 158 @42.3). Content auditor GG-18: the existing well guide already has 'How lenders and appraisers treat a home on a well' and the septic guide has … | 36 |
| 56 | I9 | FHA MIP: premiums and when MIP ends | `/learn/mortgage-insurance/` | Inventory P1; evidence thin (fha pmi removal calculator 25 pos 7); FHA MIP section on the mortgage-insurance guide; removal math belongs to /pmi-removal-calculator/ | 36 |
| 57 | I10 | FHA vs. conventional for Michigan buyers | `/learn/fha-loans/` | No demand in top-1,000 GSC; expand the existing H2 on the FHA hub into a comparison table (also answers 14 FHA PAA questions mapped there) | 36 |
| 58 | N29 | Rural Michigan appraisals: comps, acreage, refinancing | `/learn/tips-for-buying-home-in-rural-area/` | 177 impr; AI-Mode prompts rank 3-9; the rural buying guide already covers rural financing | 36 |
| 59 | C28 | Hobby farm loans in Michigan | `/learn/tips-for-buying-home-in-rural-area/` | 170/mo KD2 (mortgagecenter.com #7); acreage/outbuilding H2 in the rural buying guide | 32 |
| 60 | N23 | HomeReady vs. Home Possible | `/learn/homeready-mortgages/` | 129 impr; comparison H2 on the HomeReady guide; /product-loans/home-ready/ owns the Michigan commercial term | 32 |
| 61 | I24 | How soon can you refinance | `/learn/refinancing-eligibility/` | No measured demand; seasoning table on the refinancing-eligibility guide | 32 |
| 62 | C21 | HUD $100 down program | `/learn/how-to-buy-foreclosed-home/` | 490/mo cluster; HUD homes are foreclosures: H2 on the foreclosure canonical; '$100 down' stated only as HUD's rule | 32 |

**OWNED BY** (22 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 63 | I4 | 2027 conforming loan limits in Michigan | `/loan-limits/` | /loan-limits/ is already the Michigan county table (351 inlinks); update it on release day and link out from 100+ pages instead of restating | 64 |
| 64 | I20 | Estimating property taxes on a Michigan home you are buying | `/michigan-property-tax-calculator/` | 9,900/mo KD13 at pos 48.8; calculators team rewrites the tool with a worked example and the post-sale reset | 64 |
| 65 | I3 | Is my Michigan address USDA eligible? | `/usda-eligibility-check/` | usda eligibility 576 pos 11.1 ranks the article instead of the tool (GSC P0); the tool owns address checks | 60 |
| 66 | N01 | USDA income limits in Michigan by county | `/usda-eligibility-check/` | 1,026 impr; Michigan limits are uniform except 6 counties (a 7-row table); products-a assigns 'usda income limits' to the tool; product page carries the table | 60 |
| 67 | I2 | USDA income limits in Michigan (inventory P0) | `/usda-eligibility-check/` | 722 impr; same as N01 | 60 |
| 68 | C12 | Michigan millage rates by city and township (data page) | `/michigan-property-tax-calculator/` | 1,000/mo KD9; the 1,843-row 2025 millage table stays on the calculator with CSV download and Dataset schema (calculators team); not a blog post | 56 |
| 69 | C6 | What is a non-warrantable condo? | `/product-loans/non-warrantable-condo-loans/` | 1,600/mo KD0, 0 GSC impressions; products-b adds 'What is a non-warrantable condo?' and 'What makes a condo non-warrantable?' H2s to the product page | 52 |
| 70 | I11 | How much house can I afford in Michigan | `/purchase/budget-review/` | Purchase team gives the query to /purchase/budget-review/ (new H1) and the DTI-limit calculator query to /home-affordability-calculator/; the salary/income questions go to the new income post | 48 |
| 71 | I5 | VA funding fee 2027 chart | `/va-funding-fee-calculator/` | 519 impr; the calculator plus the VA product page H2 'How much is the VA funding fee?' own the chart (products-a, calculators team) | 48 |
| 72 | N10 | VA funding fee percentages, exemptions, refunds | `/va-funding-fee-calculator/` | 142 impr pos 69-90; chart on the calculator; exemptions and refunds covered in the disabled-veteran post | 48 |
| 73 | C10 | Detroit property taxes for home buyers | `/mortgage-lender-detroit-mi/` | 8,100/mo KD11 (part navigational); the Detroit city page already has 'What will my property taxes be after I buy in Detroit?', a millage comparison and the +128% uncapping figure: city team … | 44 |
| 74 | I16 | HELOC vs. home equity loan vs. cash-out | `/refinance/cash-out-vs-home-equity/` | 23 impr pos 81; refinance and products-b teams give all 'vs' queries to the comparison money page | 44 |
| 75 | C17 | Borrowing against a house you own free and clear | `/refinance/cash-out-vs-home-equity/` | 490/mo cluster; add H2 'What if you own your home free and clear?' to the comparison page (cross-team request) | 40 |
| 76 | I15 | Buying before you sell in Michigan | `/purchase/buy-before-you-sell/` | michigan bridge loan mortgage pos 2.7; purchase team owns it on the situation page | 40 |
| 77 | C27 | DTI calculator tool | `/learn/debt-to-income-ratio-dti/` | 640/mo cluster KD23-24. Auditor CG-15: the DTI guide already runs an on-page calculator, so no new tool; retitle the guide 'DTI Calculator and Limits by Loan Type: FHA, VA, USDA' (53) | 40 |
| 78 | N21 | How bank statement loans calculate income | `/product-loans/bank-statement-loan/` | 190 impr; the product page already carries a calculator and is cited #2 by Perplexity | 36 |
| 79 | N28 | Jumbo loans in Ann Arbor and Washtenaw | `/product-loans/jumbo-loans/` | 307 impr; products-a maps 'ann arbor jumbo loan' to the jumbo product page with Ann Arbor city-page support; no program-by-city posts | 32 |
| 80 | N07 | USDA guarantee fees | `/usda-eligibility-check/` | 126 impr; calculators team adds a guarantee-fee line to the USDA check (F13); product page H3 | 32 |
| 81 | N24 | How asset depletion turns savings into income | `/product-loans/asset-based-income-loans/` | 94 impr; add the income-calculation H2 to the product page | 28 |
| 82 | I21 | Asset-depletion mortgages | `/product-loans/asset-based-income-loans/` | michigan asset depletion loans 55 pos 37.2; product page owns | 28 |
| 83 | N14 | Can you remove FHA mortgage insurance? | `/pmi-removal-calculator/` | 47 impr pos 7-17; the PMI removal calculator FAQ covers PMI vs MIP (calculators team) | 28 |
| 84 | I19 | Financing a manufactured home in Michigan | `/product-loans/manufactured-home-loans/` | 85 impr; products-a assigns 'michigan manufactured home loans' to the product page (3,345 words); add the HMDA fact (57% denied vs 8% site-built) to /learn/manufactured-homes-pros-and-cons/ | 28 |

**DEFER (owner decision)** (1 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 85 | GSC 5.6 | Reverse mortgages (HECM) content | `/learn/reverse-mortgages-how-they-work/` | 514 impr pos 71.4; 'michigan reverse mortgage broker' 24 pos 3.6; owner decision D1. Hold /learn/reverse-mortgages-how-they-work/ to figure accuracy only; the seniors post mentions HECMs neutrally | 0 |

**DROP (off-topic)** (7 rows)

| Rank | IDs | Idea | Owner / target | Evidence (full text in blog-plan.csv) | Score |
|---|---|---|---|---|---|
| 86 | GSC 5.6 | 1031 exchanges | — | 542 impr pos 74; ignore | 0 |
| 87 | GSC 5.6 | Energy audits | — | 1,351 impr pos 61; ignore | 0 |
| 88 | GSC 5.6 | Home insurance deductibles | — | 1,578 impr pos 62; low value; link to escrow only | 0 |
| 89 | GSC 5.6 | Mansions | — | 430 impr pos 11.4; keep the one ranking page, add one jumbo link, no new content | 0 |
| 90 | GSC 5.6 | NMLS/SAFE exam questions | — | 647 impr pos 4.3; study traffic | 0 |
| 91 | GSC 5.6 | Personal loans | — | 1,755 impr pos 6.9; Align does not offer them | 0 |
| 92 | GSC 5.6 | Crowdfunding and REITs | — | 2,046 impr; never needs a mortgage; /learn/real-estate-crowdfunding/ goes noindex | 0 |

### 4.1 Reconciliation with the content auditor

| Auditor finding | Plan decision |
|---|---|
| 84 nominal → 69 distinct topics; 11 double-listed (MSHDA, USDA income limits, VA funding fee, VA entitlement, DSCR, FHA MIP, affordability, bankruptcy, lender comparison, asset depletion, homestead credit) | Each is one row-owner here: MSHDA, affordability, bankruptcy, homestead credit, VA entitlement and DSCR are one post each; lender comparison is one refresh; USDA income limits and VA funding fee are owned by tools; asset depletion by its product page; FHA MIP by a refresh plus the PMI calculator. |
| 11 should fold into existing pages (USDA eligible areas, conforming limit + jumbo threshold, HELOC vs. cash-out, estimating property taxes, FTHB pillar, PRE, closing costs MI, DTI tool, well/septic, zero-down, portfolio rates) | All 11 folded (OWNED BY or REFRESH). |
| "About 58 genuinely new topics remain" | The auditor's 58 are topics with no exact existing URL. This plan applies two further filters the auditor did not: money-page/tool ownership from the core-page teams, and the Michigan/original-data test for new URLs. Result: 15 new URLs, with the rest owned by refreshes and money pages. |
| Cap new USDA posts at 3 | 1 new USDA post (requirements). If the PM prefers the auditor's view that USDA income limits deserve their own guide (products-a gives the query to the tool), that guide is the first backlog candidate and the USDA count would be 2. |
| DSCR post must target "how DSCR loans work" | Done: `/learn/how-dscr-loans-work/`; the product page keeps "dscr loans michigan". |
| Pre-approval volume is national; Michigan variant 0 | The brief sizes expectations against the national head term (KD 22, Align average position 59) and sets week-12 goals on Michigan variants, PAA and AI citations. |
| Drop well/septic; DTI page already has a calculator; amortization canonical is `amortization-schedules` | All three applied. |
| Quotes already on 142 articles, one repeated 33 times | No brief reuses a quote-bank line; each names a `[NEEDS SAMANTHA QUOTE: topic]`. The refresh list adds quote slots only where the auditor found none (section 6). |
| VA disabled veterans: two pages | Kept as one Michigan page (same reader, one decision, avoids a third owner beside `/purchase/va-homebuyer-plan/`), with a week-8 split test. |
| Core-page and city titles conflict | Any title proposed here for a core-page, tool or city page is labeled **"proposed, consistency team to reconcile"**; the owning team's text is the base. |

---

## 5. The ranked new-post set

| Rank | Slug (under /learn/) | Title tag | Primary keyword | I × F × S | Score | Cluster | Sprint | Publish | Brief |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `mshda-mi-home-loan` | MSHDA MI Home Loan: Income Limits, Price Limit and Rules | mshda mi home loan (720, KD 1) | 5 × 4 × 5 | 80 | C07 | Y | W2 | `06-blogs/briefs/mshda-mi-home-loan.md` |
| 2 | `what-disqualifies-you-from-a-home-equity-loan` | What Disqualifies You From a Home Equity Loan or HELOC? | what disqualifies you from getting a home equity loan (880, KD 2) | 4 × 5 × 5 | 80 | C10 | Y | W3 | `06-blogs/briefs/what-disqualifies-you-from-a-home-equity-loan.md` |
| 3 | `va-benefits-disabled-veterans-michigan` | VA Benefits for Disabled Veterans Buying a Home in Michigan | va loan benefits for disabled veterans (GSC cluster 345 impr) | 4 × 4 × 5 | 64 | C02 | Y | W3 | `06-blogs/briefs/va-benefits-disabled-veterans-michigan.md` |
| 4 | `rent-to-own-vs-land-contract-michigan` | Rent-to-Own vs. Land Contract vs. Mortgage in Michigan | rent to own vs land contract (GSC cluster 177 impr) | 4 × 4 × 5 | 64 | C21 | Y | W4 | `06-blogs/briefs/rent-to-own-vs-land-contract-michigan.md` |
| 5 | `how-to-get-pre-approved-for-a-mortgage` | How to Get Pre-Approved for a Mortgage in Michigan | how to get pre approved for a home loan (12,100 national, KD 22) | 4 × 3.5 × 5 | 56 | C08 | Y | W2 | `06-blogs/briefs/how-to-get-pre-approved-for-a-mortgage.md` |
| 6 | `mortgage-for-seniors` | Can You Get a Mortgage at 60, 70 or 80? Senior Home Loans | home loans for seniors on social security (210) + PAA 9/15 seeds | 4 × 4 × 4 | 51 | C08 | Y | W5 | `06-blogs/briefs/mortgage-for-seniors.md` |
| 7 | `usda-loan-requirements` | USDA Loan Requirements: Credit, DTI, Property and Occupancy | usda loan requirements (GSC family 1,410 impr) | 5 × 4 × 3 | 48 | C03 | Y | W4 | `06-blogs/briefs/usda-loan-requirements.md` |
| 8 | `income-needed-to-buy-a-house-michigan` | What Income Do You Need to Buy a House in Michigan? | how much do you need to make to afford a house in michigan (14 PAA) | 4 × 3 × 5 | 48 | C08 | Y | W5 | `06-blogs/briefs/income-needed-to-buy-a-house-michigan.md` |
| 9 | `add-or-remove-name-on-mortgage-michigan` | Adding or Removing a Name on a Mortgage in Michigan | can you add someone to a mortgage loan (320, KD 0) | 3 × 4 × 5 | 48 | C09 | Y | W6 | `06-blogs/briefs/add-or-remove-name-on-mortgage-michigan.md` |
| 10 | `what-not-to-tell-a-mortgage-lender` | What Not to Tell a Mortgage Lender (and What You Must Share) | what not to tell a mortgage lender (PAA 8/15 seeds) | 3 × 5 × 4 | 48 | C08 | Y | W6 | `06-blogs/briefs/what-not-to-tell-a-mortgage-lender.md` |
| 11 | `how-dscr-loans-work` | How DSCR Loans Work: The Ratio, the Rent and Michigan Taxes | how do dscr loans work / dscr ratio | 3 × 4 × 4 | 48 | C16 | Y | W7 | `06-blogs/briefs/how-dscr-loans-work.md` |
| 12 | `michigan-homestead-property-tax-credit` | Michigan Homestead Property Tax Credit: Who Qualifies | michigan homestead property tax credit (1,600, KD 0) | 4 × 4 × 3 | 38 | C12 | Y | W7 | `06-blogs/briefs/michigan-homestead-property-tax-credit.md` |
| 13 | `buying-a-house-after-bankruptcy-or-foreclosure` | Buying a House After Bankruptcy or Foreclosure: Wait Times | buying a house after bankruptcy (260/mo cluster) | 3 × 4 × 4 | 38 | C08 | Y | W8 | `06-blogs/briefs/buying-a-house-after-bankruptcy-or-foreclosure.md` |
| 14 | `buying-a-home-on-ssi-or-disability-income` | Buying a Home on SSI or Disability Income in Michigan | ssi disability home loans requirements (720; cluster 2,720) | 4 × 3.5 × 3 | 34 | C07 | Y | W8 | `06-blogs/briefs/buying-a-home-on-ssi-or-disability-income.md` |
| 15 | `va-entitlement-michigan` | VA Entitlement Explained: Second VA Loans and Loan Limits | va loan limits (GSC ~100 impr) | 2 × 4 × 4 | 26 | C02 | Backlog | W9 | `06-blogs/briefs/backlog/va-entitlement-michigan.md` |

Ties at 48 and 38 are ordered by measured demand. Hubs that gain children: `/learn/first-time-home-buyers/` (+2), `/learn/credit-and-qualifying/` (+4), `/learn/usda-and-assistance-programs/` (+1, and list the MSHDA post), `/learn/financing-investments/` (its first own child), `/learn/va-loans/` (+2), `/learn/taxes-and-money/` (+1), `/learn/home-equity/` (+1), `/learn/specialty-financing/` (+1), `/learn/refinance-situations/` (+1), `/learn/preparing-to-buy/` (+1).

---

## 6. Refresh list: the top 30 existing URLs

Titles ≤ 60 and metas 140–160 characters (measured). "Absorb" means merge the listed URL's unique sections in, then 301 it (section 7). Every refresh: fix Title-Case casing, add a visible "Updated {date}" that matches `dateModified`, change the date only when content changes, keep the byline, and add a `[NEEDS SAMANTHA QUOTE: topic]` slot only where the auditor found no quote (the 26 top-40 articles without one, starting with lease-to-own, usda-loan-basics, fha-loan-limits, conveyance and portfolio-loan). All 30 are `/learn/` pages owned by the content team; where a title touches another team's page it is marked "proposed, consistency team to reconcile".

**1. `/learn/lease-to-own-vs-rent-to-own-whats/`** · P0 · 14,548 impressions in 90 days; "lease to own" 15,242 @59.8, 0 clicks · W1
- Title (49): `Lease to Own a Home: How It Works vs. Rent to Own` · Meta (160): `Lease to own gives you the option to buy; rent to own can obligate you. See typical terms, option fees, how rent credits work and what protects Michigan buyers.`
- H1: "Lease to own a home: how it works, what it costs and how it differs from rent to own". First H2 "What is lease to own?" with a 40–60 word definition (the head term is a definition query, not a comparison).
- Add H2s: "What are typical rent-to-own terms in Michigan?" (57 @72.8) · "Do rent credits count toward a mortgage down payment?" · "How do you get from lease to own to a mortgage?" (links the new rent-to-own vs. land contract post and `/rent-vs-buy-calculator/`).
- Absorb: `/learn/navigating-lease-to-own-agreements/` (agreement checklist H2) and `/learn/lease-option-agreements-pros-and-cons/` (option-fee section); repoint legacy `/lease-option-agreements/`. Do not add a 301 for `/lease-to-own-vs/` (already done).
- Module CTA: **Take the readiness review** → `/purchase/homebuyer-game-plan/#readiness`. `[NEEDS SAMANTHA QUOTE: what she tells renters weighing a lease-to-own offer]`.

**2. `/learn/usda-loan-basics/`** · P0 (F13) · 10,182 impressions in 90 days; USDA family 11,392 · W1
- Remove the meta "…Direct loans with subsidized rates as low as 1%" (also carries "zero down payment", a conservative trigger term) and the same phrase in the body.
- Title (54): `USDA Loans Explained: How Rural Development Loans Work` (the auditor proposes "USDA Loans in Michigan: How Rural Development Loans Work" (56); products-a's product H1 is "USDA Rural Development Loans in Michigan": proposed, consistency team to reconcile). Meta (156): `How USDA Rural Development loans work in Michigan: what the program is, Guaranteed vs. Direct loans, what they cost, and how to check an address and income.`
- First 100 words: link "check a Michigan address and income" → `/usda-eligibility-check/` (so "usda eligibility", 576 @11.1, moves to the tool) and "USDA Rural Development loans in Michigan" → `/product-loans/usda-loans/`.
- Add H2 "What is the difference between USDA Direct and Guaranteed loans?" with a comparison table (absorbs N05; Align cannot originate Direct loans, so say who does).
- Cut the requirements detail (credit, DTI, co-signers, property) to a 120-word summary linking `/learn/usda-loan-requirements/`; target 3,500 words or less. FY2027 figures when USDA publishes. F7 line.

**3. `/learn/housing-market-outlook/`** · P0 now, January rewrite · compliance (rate forecast in Align's voice)
- Now: meta (150) `What 2026 brought for Michigan and U.S. home prices, sales and inventory, what the public data shows, and why no one can tell you where rates go next.` and rename the H2 "Where will mortgage rates be in 2026?" to the auditor's exact text (`08-audit/corrections-content.csv`).
- January (W7): publish the 2027 edition in place. Title (58): `Michigan Housing Market Outlook 2027: Prices and Inventory` · Meta (159): `What public data says about Michigan home prices, inventory and new-owner property taxes heading into 2027. No rate forecasts, just the numbers to plan around.` Use Align's HMDA report and Uncapping Study as the Michigan data; no forecasts.

**4. `/learn/mortgage-rate-predictions/`** · P1 (auditor downgraded from P0) · title only
- Title (56): `Mortgage Rate Forecasts: How They Work and Why They Miss` · Meta (155): `Why mortgage rate forecasts so often miss, what actually moves rates day to day, and how to plan a purchase or refinance without betting on any prediction.` Link `/why-we-dont-publish-rates/` and the rate-lock guide.

**5. `/learn/first-time-home-buyer-grants-and-programs/`** · P0 · owns "michigan first time home buyer programs/grants" (3,600 + 3,600/mo, KD 1–5); 135 contextual inlinks · W1
- Title (49): `Michigan First-Time Homebuyer Programs and Grants` (auditor; conflicts with the purchase team's money-page title, section 12) · Meta (160): `Michigan first-time buyer programs in one place: MSHDA's MI Home Loan and MI 10K, local down payment help, the MCC and which grants are real. Every one sourced.`
- H2s (each with a 40–60 word answer): "What first-time homebuyer programs does Michigan offer?" · "What is the $25,000 down payment assistance program in Michigan?" (First-Generation DPA, closed, F1) · "What is the $7,500 first-time home buyer grant in Michigan?" `[VERIFY: older MSHDA amount]` · "Which Michigan cities and counties offer down payment help?" (Detroit DPA and others, each `[VERIFY]`; absorbs I18) · "Is down payment assistance a grant or a loan?".
- Link the new MSHDA post ("how the MSHDA MI Home Loan works"), `/purchase/down-payment-assistance/` and `/purchase/first-time-homebuyer/`. MSHDA wording per F2. Remove "as low as 1%" (F13) and any "May 1" PRE date (F5). Cut the Congress-bills section to three sentences.

**6. `/learn/homestead-exemption-benefits-and-filing-guide/`** · P0 · "michigan homestead exemption" 880 and "principal residence exemption" 590/mo (KD 0); ranks 9–12 over 30 days · W1
- Title (59): `Homestead Exemption in Michigan: What It Is and How to File` · Meta (158): `A homestead exemption lowers property tax on the home you live in. In Michigan it is the Principal Residence Exemption, worth up to 18 mills. See how to file.`
- First H2 "What is a homestead exemption in Michigan?" (one generic sentence, then Michigan's PRE). Add: "How do you file Form 2368 after closing?" · "What are the June 1 and November 1 deadlines?" (F5) · "Can you have two primary residences in Michigan?" (140/mo) · "How much does the homestead exemption save in Michigan?" (hypothetical at the 36.0-mill median, F12).
- Shrink "How homestead exemptions differ by state" and the creditor-protection sections to a short summary. Link the new homestead credit post as the separate MI-1040CR program. Fix the redirecting `/learn/homestead-exemption/` link on `/mortgage-lender-springfield-township-mi/` (city team).

**7. `/learn/fha-loan-limits/`** · P0, timed to HUD's CY2027 Mortgagee Letter (W2) · FHA limits 2,877 impressions @44.3
- Hold the title until the release; then title (57): `FHA Loan Limits 2027: How They Affect What You Can Borrow` · Meta (159): `See the 2027 FHA loan limits, from the national floor to the ceiling, how your county's limit caps what you can borrow, and where to find each Michigan county.` (auditor alternative in section 10; consistency team to reconcile).
- Add H2 "How do FHA loan limits affect you?" (86 @49) and an above-the-fold button **Find my county loan limit** → `/loan-limits/`. Replace 24 instances of the floor and 16 of the ceiling. F7 line.

**8. `/learn/conventional-loans/`** (hub) · P0 · "conventional loan guidelines" 2,900/mo (KD 13; Align at 70–98) · W2, with the FHFA figure
- Title (60): `Conventional Loan Guidelines: Credit, DTI, Down Payment, PMI` · Meta (159): `Conventional loan guidelines in plain English: how Fannie Mae's DU weighs credit, the DTI limits, down payment programs, PMI and Michigan's current loan limit.`
- H1 "Conventional loan guidelines: credit, DTI, down payment and PMI". H2s: "What are the conventional loan guidelines?" (no year; F3 credit wording) · "How much down payment does a conventional loan require?" (as Fannie Mae and Freddie Mac rules, named and linked) · "Does a conventional loan require a home inspection?" (two sentences: lenders require an appraisal, not an inspection; link the inspection checklist; C15) · "What is the 2027 conforming loan limit in Michigan?" (link `/loan-limits/`).

**9. `/learn/federal-housing-finance-agency-updates/`** · P0 · becomes the single GSE tracker · W2
- Title (54): `FHFA, Fannie Mae and Freddie Mac Updates: What Changed` · Meta (158): `One dated log of FHFA, Fannie Mae and Freddie Mac changes that affect Michigan borrowers, starting with the 2027 conforming loan limit and credit score rules.`
- Absorb `/learn/fannie-mae-updates/`, `/learn/freddie-mac-updates/`, `/learn/fannie-mae-and-freddie-mac-stabilizing-housing-market/`. Lead with a dated change log: the 2027 limit and the November 16, 2025 DU credit-score change (F3).

**10. `/learn/michigan-taxable-value/`** · P0 for AI answers (294 inlinks; both uncapping prompts uncited) · W2
- Title (53): `Michigan Taxable Value and Uncapping: What Buyers Pay` · Meta (150): `Why a Michigan home's taxable value resets the year after a sale, how big the jump ran in 2026 by county, and how to budget from the buyer's tax bill.`
- Place the auditor's corrected 59-word uncapping answer block (F16 wording; 50.5% typical, 37% Monroe to 92% Charlevoix) under "Why it matters when you buy". Link the new homestead credit and add-or-remove-name posts. Keep it short (the model format).

**11. `/learn/closing-costs/`** · P1 (auditor) · becomes the Michigan closing-costs page (absorbs competitor N5) · 190 inlinks · W2
- Title (53): `Closing Costs in Michigan: Who Pays What and How Much` · Meta (155): `Michigan buyer closing costs line by line: lender and title fees, the transfer tax sellers usually pay, prorated property taxes, escrow and how to compare.`
- H2s: "How much are closing costs in Michigan?" · "Who pays closing costs in Michigan, the buyer or the seller?" (who-pays table: state and county transfer tax, owner's and lender's title policies `[VERIFY custom with a title source]`, recording fees, prorated summer and winter taxes) · "When are closing costs due?" (260/mo) · "What would closing costs be on a $300,000 house in Michigan?" (hypothetical, F12, no rate) · "Can I buy a house with no money down and no closing costs?" (answer honestly; never as a claim).
- Absorb `/learn/mortgage-closing-costs/`; re-scope `/learn/how-to-budget-for-closing-costs/` to "how to lower or cover your closing costs". Link **Check my Loan Estimate** → `/compare-loan-estimates/` and `/michigan-transfer-tax-calculator/`.

**12. `/learn/whats-good-credit-score-to-buy-house/`** · P1 + F3 accuracy (title says "620 And Up") · 87 inlinks · W3
- Title (57): `What Credit Score Do You Need to Buy a House in Michigan?` · Meta (160): `Credit scores by loan type for Michigan buyers: how FHA, VA, USDA and conventional underwriting treat your score, MSHDA's 640, and what to fix before you apply.`
- Absorb `/learn/how-does-my-credit-impact-buying-house/` (repoint legacy `/credit-impact-home-buying/`). Replace every fixed 620 conventional floor with the F3 wording. Add the HMDA fact: credit history was cited on 42% of denied Michigan purchase applications in 2025.

**13. `/learn/how-to-qualify-for-va-loan/`** · P1 · "va loan requirements" 169 @77; VA requirements cluster 1,399 @54 · W3
- Title (53): `VA Loan Requirements: Service, COE, Credit and Income` · Meta (160): `VA loan requirements in one place: service rules, your Certificate of Eligibility, how lenders weigh credit and residual income, and when manual review applies.`
- First H2 "What are the requirements for a VA loan?" with a 6-item list. Add "What is VA manual underwriting?" (C20, 390/mo) and "What disqualifies you for a VA loan?" (PAA). F7 line. Owner conflict with the `/learn/va-loans/` hub noted in section 12. Fix the "1.5%" tax figure (F4).

**14. `/learn/va-interest-rate-reduction-refinance-loans/`** · P1 · IRRRL cluster 2,078 @70 · W3
- Title (51): `VA IRRRL (VA Streamline Refinance): Rules and Costs` · Meta (155): `How the VA Interest Rate Reduction Refinance Loan works: 210-day seasoning, the net tangible benefit test, the funding fee and when a lender checks credit.`
- Absorb N09 as H2s: "What are the VA IRRRL seasoning rules?" · "What is the net tangible benefit test?" · "Can you get cash back with a VA IRRRL?" · "Can you do an IRRRL after forbearance?" · an IRRRL vs. VA cash-out table. Funding fee percentage stated as VA's figure with `[COMPLIANCE REVIEW]`. Link the disabled-veterans post (fee exemption). F7 line.

**15. `/learn/va-loan-benefits-for-veterans/`** · P1 · "what are the benefits of a va loan" 104 @19.3 · W3
- Title (54): `What Are the Benefits of a VA Loan? 8 That Matter Most` · Meta (154, auditor): `The VA loan benefits worth the most, from no PMI and limits on closing costs to residual-income underwriting and the funding fee exemption for disability.`
- First H2 = the exact query with a 50-word list answer; link the disabled-veterans post and **Estimate my VA funding fee**. Fix "1.5%" (F4). F7 line.

**16. `/learn/debt-to-income-ratio-dti/`** · P1 · 167 inlinks; already runs an on-page DTI calculator (auditor) · W4
- Title (53): `DTI Calculator and Limits by Loan Type: FHA, VA, USDA` · Meta (158): `Calculate your debt-to-income ratio in two steps, then compare it with FHA, VA, USDA and conventional limits and the factors that let each one stretch higher.`
- Add H2s: "What DTI does FHA allow?" (N13) · "What is the maximum DTI for a USDA loan?" (two sentences + link to the USDA requirements post) · "Can you get a mortgage with a high debt-to-income ratio?" (HMDA: 30% of 2025 Michigan purchase loans above 43%; 40.8% of denials at 50%+). F3 sweep.

**17. `/learn/comparing-mortgage-lenders-what-to-look/`** · P1 · absorbs N27 and C14 ("best mortgage lenders in michigan" 185 @52; "michigan mortgage lenders" 1,000/mo) · W4
- Title (53): `How to Choose a Mortgage Lender in Michigan: 9 Checks` · Meta (160): `How to compare Michigan mortgage lenders and brokers honestly: check NMLS and DIFS licenses, line up Loan Estimates, ask 9 questions and spot the warning signs.`
- First H2 "How do you choose a mortgage lender in Michigan?"; add "How do you check a lender's license in Michigan?" (NMLS Consumer Access, DIFS) and "What are the best mortgage lenders in Michigan?" (no ranking, no lender names linked; criteria only). Rewrite "How Align works, and how we are paid" with the `/licensing/` wording (D5).

**18. `/learn/types-of-refinancing/`** · P1 · "refinancing options" 421 @11.9 · W4
- Title (50): `Refinancing Options: 7 Types of Refinance Compared` · Meta (156): `Compare refinancing options side by side: rate-and-term, cash-out, streamline, no-closing-cost, shorter-term and renovation refis, and which fits your goal.`
- 7-row comparison table under the first H2; CTA box to `/refinance/` and **Review my break-even** → `/refinance/break-even-review/`.

**19. `/learn/amortization-schedules/`** (canonical) · P1 · "amortization" 315 @14.5 (GSC page-attributed) · W4
- Title (55): `Amortization: What It Means and How Your Schedule Works` · Meta (151): `Amortization splits each mortgage payment between interest and principal. See a sample schedule, how extra payments shorten it, and when PMI comes off.`
- Absorb `/learn/mortgage-amortization/`. 50-word definition first; a month-1 / month-60 / month-120 schedule labeled with the F12 line and `[COMPLIANCE REVIEW]`; link `/mortgage-payoff-calculator/`.

**20. `/learn/home-equity-line-of-credit-heloc/`** · P1 · "home equity line of credit" 124 @93 · W5
- Title (58): `What Is a Home Equity Line of Credit (HELOC)? How It Works` · Meta (159): `A HELOC is a revolving line of credit secured by your home. See how the draw and repayment periods work, how lenders size the line and the variable-rate risks.`
- 50-word definition first; draw/repayment table; link "HELOCs in Michigan" → `/product-loans/heloc/` and the new home equity disqualifiers post.

**21. `/learn/what-is-usda-streamline-refinance/`** · P1 · USDA refinance 902 @57 · W5
- Title (55): `Refinancing a USDA Loan: Streamline, Assist or Standard` · Meta (155): `Compare USDA's three refinance options: who qualifies, when an appraisal is needed, the savings test, and when a conventional refinance is the better move.`
- Add H2 "Is it harder to refinance a rural home because of limited comparable sales?" (AI-Mode query, 52 @5.9). F7 line.

**22. `/learn/what-is-mortgage-rate-lock/`** · P1 · 520 @35.7 · W5
- Title (54): `Mortgage Rate Lock Period: How Long It Lasts and Costs` · Meta (159): `How mortgage rate lock periods work, how lenders price longer locks, what an extension costs, what happens if a lock expires and when a float-down is worth it.`
- Absorb `/learn/benefits-of-mortgage-rate-locks/` ("when to lock" as an H2). Add N18 H2s: "What happens if your rate lock expires before closing?" · "How much does a rate lock extension cost?" (lender-specific; no figures unless sourced).

**23. `/learn/how-to-qualify-for-jumbo-loan/`** · P0 (inventory) · jumbo 1,124 @42.7 · W5
- Title (56, auditor): `Jumbo Loans in Michigan: Requirements and How to Qualify` (products-a gives "michigan jumbo loan" to the product page: proposed, consistency team to reconcile) · Meta (154): `What jumbo lenders check: credit in the 700s, a larger down payment, 6 to 12 months of reserves and DTI near 43%, plus where Michigan's jumbo line starts.` `[VERIFY each figure or soften to "lender guidelines vary"]`
- Absorb `/learn/jumbo-loan-tips/`. H2 "What counts as a jumbo loan in Michigan?" (N16) linking `/loan-limits/` for the 2027 figure; link `/product-loans/jumbo-loans/` in the first 150 words.

**24. `/learn/michigan-land-contract/`** · P1 · land contract 77 @43.9; "who pays property taxes on a land contract" 23 @13.5 · W6
- Title (59): `Michigan Land Contracts: How They Work and How to Refinance` · Meta (160): `How a Michigan land contract works for buyers and sellers, who pays the property tax, what forfeiture means and how to refinance into a mortgage. Short answers.`
- Add H2s "Can you refinance a land contract into a mortgage in Michigan?" (I14; a standalone guide only if this H2 ranks, per the auditor) and "Who pays property taxes on a land contract in Michigan?". Link the new rent-to-own vs. land contract post. Keep the concise format.

**25. `/learn/mortgage-escrow-accounts/`** · P1 · positions 2–10 with 0 clicks (242 @12.5) · W6
- Title (59): `Mortgage Escrow Accounts and Your Escrow Balance, Explained` · Meta (159): `What the escrow balance on your mortgage statement means, how the yearly escrow analysis and two-month cushion work, and what happens to it when you refinance.`
- Tighten "What is the escrow balance on my mortgage statement?" to a 50-word answer; add "What happens to your escrow account when you refinance or pay off?" (N25) and "How often can a mortgage company do an escrow analysis?". Michigan note: summer and winter tax bills.

**26. `/learn/low-down-payment-mortgages/`** · P1 · 711 @41 · W6
- Title (55): `Low Down Payment Mortgages: Options for Michigan Buyers` (removes "0% To 3.5%" from the title, a trigger-term risk) · Meta (154): `Low down payment home loans for Michigan buyers: what FHA, VA, USDA and conventional programs require under agency rules, and how MSHDA's MI 10K can help.`
- Absorb `/learn/buying-home-with-low-down-payment/` (repoint legacy `/buy-home-low-down-payment/`). H2 "Which home loans need no down payment?" stated as VA and USDA rules, agencies named and linked (folds N17; `[COUNSEL]`). MSHDA per F1/F2. F7 line.

**27. `/learn/what-is-loan-to-value-ratio/`** · P1 · LTV 691 @41.4 · W6
- Title (58, auditor): `Loan-to-Value Ratio: How to Calculate LTV, Why 80% Matters` · Meta (159, auditor): `Figure your loan-to-value ratio in one step: divide the loan by the home's value. See why 80% matters for PMI, how lenders use LTV and the limits by loan type.`
- H2 "How do you calculate LTV?" with a worked example; link `/loan-to-value-calculator/` once the calculators team ships it (then restore "Calculator" in the title). Re-parent under Mortgage basics (the terminology hub redirects to the glossary).

**28. `/learn/conveyance-in-real-estate/`** · P1 (CTR) · "conveyance" 1,123 @1.3, 0 clicks · W7
- Title (54): `Conveyance in Real Estate: Meaning, Deeds and Timeline` · Meta (159): `Conveyance is the transfer of title from seller to buyer by deed. See which deed conveys your home, how long recording takes, and the Michigan fees at closing.`
- Add a 40-word definition box at the top; link the add-or-remove-name post. The legacy `/conveyance-real-estate-explained/` already 301s (resubmit via IndexNow only).

**29. `/learn/mortgage-underwriting/`** · P1 · absorbs C16 (letter of explanation, 780/mo) and I13 (income calculation) · W7
- Title (55): `Mortgage Underwriting: Steps, Timeline and Requirements` (casing fix) · Meta (160): `What underwriters check and in what order, how they calculate income, when they ask for a letter of explanation (with a sample) and how long underwriting takes.`
- Add H2s "What is a letter of explanation, and what should it say?" (with a fill-in sample) and "How do underwriters calculate your income?" (hourly, overtime, bonus, new job, gaps; Fannie Mae B3-3 `[VERIFY]`). No time promises (F10). F3 sweep. Link the what-not-to-tell post.

**30. `/learn/benefits-of-working-with-mortgage-broker/`** · P1 · Perplexity cites it #1 for broker vs. bank; "michigan mortgage broker vs bank" 18 @1.0 · W7
- Title (53): `Mortgage Broker vs. Bank vs. Credit Union in Michigan` (casing fix) · Meta (160): `How a mortgage broker, a bank and a credit union differ for a Michigan home loan: who lends, how many programs you see, how each is paid and when each one fits.`
- Keep the first answer intact (it is being cited). Add "Are credit unions better than banks for a mortgage?" (competitor R7 text; 1,900/mo) and "How are mortgage brokers paid?" (I26; `/licensing/` wording until D5) and "What is the downside of using a mortgage broker?" (PAA). Never state a lender count.

**Refresh wave 2 (weeks 8–12, one line each):** `/learn/what-is-portfolio-loan/` (H2 "Why portfolio loan rates run higher than conforming", no rates; N15) · `/learn/what-is-cash-out-refinance-loan/` (absorb pros-and-cons; H2 "Should you use a cash-out refinance to pay off credit cards?"; C26) · `/learn/mortgage-interest-deductions-how-they-work/` (H2 "Is HELOC interest tax deductible?" from IRS Pub. 936; tax-year 2026 figures; C18) · `/learn/buying-home-with-bad-credit/` (collections and charge-offs table by loan type; C22) · `/learn/how-to-buy-foreclosed-home/` (absorb foreclosure-process; H2 on HUD homes with the $100 figure attributed to HUD, never in a title; C21) · `/learn/tips-for-buying-home-in-rural-area/` (rural appraisal, acreage and hobby-farm H2s; N29, C28) · `/learn/fha-loans/` hub (FHA vs. conventional comparison table and the 14 FHA PAA answers; I10) · `/learn/mortgage-insurance/` (FHA MIP section; I9) · `/learn/refinancing-eligibility/` (seasoning table by loan type; I24) · `/learn/homeready-mortgages/` (remove "3% Down" from the title; Home Possible comparison; N23) · `/learn/what-is-conventional-97-loan/` (title without "3% Down"; F3; auditor meta) · `/learn/manufactured-homes-pros-and-cons/` (HMDA: 57% of Michigan manufactured-home purchase applications denied vs 8% site-built; I19) · `/learn/how-well-water-impacts-homes-value/` (retitle "Buying a Home With a Well in Michigan: Tests, Rules, Value" (58), cross-link the septic guide; N22) · `/learn/new-mortgage-disclosure-rules/` (H2 "What is the 3/7/3 rule in mortgage lending?" and the auditor's corrected meta; N30) · `/learn/second-mortgages/` · `/learn/benefits-of-va-construction-loans/` · `/learn/what-is-plat-map/` · `/learn/drive-by-appraisal/` · `/learn/home-inspection-waivers-risks-and-benefits/` · `/learn/state-specific-mortgage-assistance-programs/` (re-angle to the five other licensed states) · `/learn/personal-loan-vs-home-equity/` (P2 title test only; "personal loans" is drift) · `/learn/reverse-mortgages-how-they-work/` (figures only, pending D1).

---

## 7. Consolidation plan

### 7.1 Merges (63 groups; 85 articles and 2 hubs merge)

Process for every group: move the source's unique sections, examples and FAQ answers into the canonical; 301 the source to the canonical in Rank Math → Redirections (server rule, not dependent on the post existing); update every internal link that points to the source (do this **before** the 301 so no page links through a redirect); remove the source from hub listings and the sitemap; submit both URLs through Rank Math Instant Indexing (IndexNow, for Bing) and request indexing in GSC. Change the canonical's "Updated" date because its content changed.

| # | Group | Canonical (keep and refresh) | Merge in + 301 | Mapped impr (canonical + members) | Pri | Basis |
|---|---|---|---|---|---|---|
| 1 | lease-to-own | `/learn/lease-to-own-vs-rent-to-own-whats/` | `/learn/lease-option-agreements-pros-and-cons/`<br>`/learn/navigating-lease-to-own-agreements/` | 15,903 | P0 | inventory analyst; auditor-sampled where noted |
| 2 | jumbo | `/learn/how-to-qualify-for-jumbo-loan/` | `/learn/jumbo-loan-tips/` | 168 | P0 | inventory analyst; auditor-sampled where noted |
| 3 | gse-updates | `/learn/federal-housing-finance-agency-updates/` | `/learn/fannie-mae-and-freddie-mac-stabilizing-housing-market/`<br>`/learn/fannie-mae-updates/`<br>`/learn/freddie-mac-updates/` | 0 | P0 | inventory analyst; auditor-sampled where noted |
| 4 | tax-law | `/learn/impact-of-new-tax-laws-on-homeownership/` | `/learn/updates-to-property-tax-laws/` | 0 | P0 | inventory analyst; auditor-sampled where noted |
| 5 | balloon | `/learn/balloon-payments/` | `/learn/balloon-mortgages-risks-and-benefits/`<br>`/learn/balloon-mortgages/` | 521 | P1 | inventory analyst; auditor-sampled where noted |
| 6 | low-down | `/learn/low-down-payment-mortgages/` | `/learn/buying-home-with-low-down-payment/` | 480 | P1 | inventory analyst; auditor-sampled where noted |
| 7 | amortization | `/learn/amortization-schedules/` | `/learn/mortgage-amortization/` | 423 | P1 | Flipped vs inventory: GSC page data ranks /learn/amortization-schedules/ 14.5 for "amortization" (315 impr); auditor BI-19 confirms |
| 8 | rate-lock | `/learn/what-is-mortgage-rate-lock/` | `/learn/benefits-of-mortgage-rate-locks/` | 400 | P1 | inventory analyst; auditor-sampled where noted |
| 9 | home-equity-loan | `/learn/home-equity-loans-pros-and-cons/` | `/learn/home-equity-loan-tips/` | 315 | P1 | inventory analyst; auditor-sampled where noted |
| 10 | construction-loan | `/learn/construction-loan-guide/` | `/learn/construction-to-permanent-loans/` | 160 | P1 | inventory analyst; auditor-sampled where noted |
| 11 | fixed-rate (term intent) | `/learn/15-year-vs-30-year-mortgage-comparison/` | `/learn/fixed-rate-mortgage-options/` | 73 | P1 | Auditor BI-22: GSC page for "15 year fixed mortgage" 60 @16.9 is a term-comparison intent |
| 12 | industry-news | `/learn/whats-new-in-mortgage-industry/` | `/learn/new-mortgage-products/`<br>`/learn/innovative-mortgage-products/`<br>`/learn/mortgage-news/`<br>`/learn/trends-in-mortgage-lending/` | 73 | P1 | inventory analyst; auditor-sampled where noted |
| 13 | interest-only | `/learn/interest-only-mortgages/` | `/learn/interest-only-mortgages-risks-and-benefits/`<br>`/learn/pros-and-cons-of-interest-only-mortgages/` | 68 | P1 | inventory analyst; auditor-sampled where noted |
| 14 | loan-estimate | `/compare-loan-estimates/` | `/learn/how-to-compare-loan-estimates/` | 25 | P1 | Inventory + links: the tool owns the intent; move the line-item table (ai-visibility A4) to the tool |
| 15 | refi-bad-credit | `/learn/refinancing-with-bad-credit/` | `/learn/refinancing-with-low-credit-score/` | 21 | P1 | inventory analyst; auditor-sampled where noted |
| 16 | buyer-closing-costs | `/learn/closing-costs/` | `/learn/mortgage-closing-costs/` | 20 | P1 | Canonical becomes the Michigan closing-costs page (absorbs competitor N5). Links team: keep /learn/how-to-budget-for-closing-costs/ re-scoped to "how to lower or cover closing costs" |
| 17 | appraisal | `/learn/home-appraisal-process/` | `/learn/why-home-appraisals-matter/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 18 | arm | `/learn/adjustable-rate-mortgage-resets/` | `/learn/adjustable-rate-mortgage-tips/` | 0 | P1 | Links team: both are post-closing management; pros-and-cons stays the decision page |
| 19 | cash-out | `/learn/what-is-cash-out-refinance-loan/` | `/learn/pros-and-cons-of-cash-out-refinancing/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 20 | credit-score | `/learn/whats-good-credit-score-to-buy-house/` | `/learn/how-does-my-credit-impact-buying-house/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 21 | fha-203k | `/learn/benefits-of-fha-203-k-loans/` | `/learn/pros-and-cons-of-fha-203-k-loans/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 22 | fha-updates | `/learn/recent-changes-to-fha-loan-requirements/` | `/learn/federal-housing-administration-updates/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 23 | fixed-rate | `/learn/fixed-rate-mortgages-benefits-and-drawbacks/` | `/learn/fixed-rate-mortgage-tips/` | 0 | P1 | inventory; fixed-rate-mortgage-options moved to its own row (auditor BI-22) |
| 24 | foreclosure | `/learn/how-to-buy-foreclosed-home/` | `/learn/foreclosure-process-what-home-buyers-should-know/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 25 | hoa | `/learn/buying-home-with-hoa-pros-and-cons/` | `/learn/navigating-hoa-regulations/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 26 | loan-comparisons hub | `/learn/loan-types/` | `/learn/loan-comparisons/` | 0 | P1 | Inventory (hub merge) |
| 27 | low-appraisal | `/learn/how-to-appeal-low-appraisal/` | `/learn/what-to-do-if-your-home-doesnt-appraise/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 28 | multi-family | `/learn/buying-multi-family-home/` | `/learn/investing-in-multi-family-properties/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 29 | negotiation | `/learn/how-to-negotiate-house-prices/` | `/learn/negotiating-home-purchase/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 30 | refi-condo | `/learn/refinancing-condo/` | `/learn/pros-and-cons-of-refinancing-condo/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 31 | refi-rising-rates | `/learn/refinancing-in-rising-rate-environment/` | `/learn/should-you-refinance-before-rates-rise/`<br>`/learn/strategies-for-refinancing-in-competitive-market/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 32 | refi-second-home | `/learn/refinancing-second-home/` | `/learn/tips-for-refinancing-vacation-home/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 33 | seller-financing | `/learn/pros-and-cons-of-seller-financing/` | `/learn/negotiating-home-purchase-with-seller-financing/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 34 | seller-proceeds | `/learn/what-is-sellers-net-sheet/` | `/learn/finances-of-selling/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 35 | va-buying | `/learn/buying-home-with-va-loan/` | `/learn/va-loan-tips/` | 0 | P1 | inventory analyst; auditor-sampled where noted |
| 36 | mortgage-rules | `/learn/mortgage-regulation-updates/` | `/learn/impact-of-new-mortgage-regulations/`<br>`/learn/new-lending-regulations/`<br>`/learn/regulatory-changes/`<br>`/learn/regulatory-updates-for-lenders/` | 75 | P2 | Inventory canonical (26 inlinks; auditor "sound"); retitle for borrowers ("New mortgage rules: what changed for borrowers") |
| 37 | agent-commission | `/learn/real-estate-agent-commissions-how-they-work/` | `/learn/how-much-agent-makes-from-home-sale/` | 48 | P2 | inventory analyst; auditor-sampled where noted |
| 38 | maintenance-budget | `/learn/how-to-budget-for-home-maintenance/` | `/learn/cost-of-home-repairs-planning-for-unexpected/` | 45 | P2 | inventory analyst; auditor-sampled where noted |
| 39 | market-type | `/learn/what-is-buyers-market-in-real-estate/` | `/learn/how-to-navigate-cooling-housing-market/`<br>`/learn/navigating-buyers-market-as-home-buyer/`<br>`/learn/what-is-balanced-housing-market/`<br>`/learn/what-is-sellers-market-for-home-buyers/` | 41 | P2 | inventory; auditor: retitle the canonical "Buyer's Market vs. Seller's Market vs. Balanced: How to Tell" (60) because "what is a seller's market" is a distinct query |
| 40 | mortgage-terminology hub | `/learn/mortgage-glossary/` | `/learn/mortgage-terminology/` | 40 | P2 | Links team: 1-child hub; re-parent /learn/what-is-loan-to-value-ratio/ under Mortgage basics |
| 41 | inspection | `/learn/home-inspection-checklist-for-buyers/` | `/learn/avoiding-common-home-inspection-pitfalls/` | 19 | P2 | inventory analyst; auditor-sampled where noted |
| 42 | buying-process | `/learn/home-buying/` | `/learn/buying-process/` | 18 | P2 | Links team: 301 to the 7,630-word pillar, not the hub |
| 43 | bidding-war | `/learn/how-to-handle-bidding-war/` | `/learn/navigating-multiple-offer-situations/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 44 | build-cost | `/learn/cost-of-building-house-is-it-worth/` | `/learn/building-home-on-budget-tips-and-tricks/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 45 | cash-flow | `/learn/cash-flow-in-real-estate/` | `/learn/evaluating-propertys-cash-flow-potential/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 46 | choose-agent | `/learn/how-to-choose-real-estate-agent/` | `/learn/how-to-find-real-estate-agent/`<br>`/learn/how-to-interview-real-estate-agent/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 47 | co-buying | `/learn/co-buying-home-with-family-or-friends/` | `/learn/pros-and-cons-of-co-buying-with-friends/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 48 | co-op | `/learn/condo-vs-co-op-similarities-and-differences/` | `/learn/navigating-co-op-board-approvals/`<br>`/learn/pros-and-cons-of-living-in-co-op/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 49 | energy-upgrades | `/learn/energy-efficient-home-upgrades/` | `/learn/how-to-evaluate-homes-energy-efficiency/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 50 | fixer-investing | `/learn/investing-in-fixer-uppers/` | `/learn/buying-distressed-properties/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 51 | housing-law | `/learn/housing-legislation/` | `/learn/housing-policy-changes/`<br>`/learn/housing-policy/`<br>`/learn/impact-of-new-housing-laws-on-home-buyers/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 52 | market-update | `/learn/market-update/` | `/learn/spring-housing-market-trends/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 53 | movers | `/learn/moving-and-settling/` | `/learn/hiring-movers/`<br>`/learn/how-to-hire-movers-questions-to-ask/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 54 | new-construction | `/learn/new-home-construction/` | `/learn/benefits-of-buying-newly-constructed-home/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 55 | new-investor | `/learn/real-estate-investment-strategies-for-beginners/` | `/learn/how-to-become-real-estate-investor/`<br>`/learn/tips-for-new-real-estate-investors/` | 0 | P2 | Links team canonical (17 vs 12 contextual inlinks) |
| 56 | pricing | `/learn/pricing-home-for-sale/` | `/learn/how-to-price-your-home-for-quick-sale/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 57 | rates-and-prices | `/learn/impact-of-interest-rates-on-home-prices/` | `/learn/impact-of-mortgage-rate-volatility-on-housing/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 58 | seasonal | `/learn/seasonal-home-maintenance-checklist/` | `/learn/winterizing-your-home/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 59 | seller-concessions | `/learn/seller-concessions-what-are-they/` | `/learn/how-to-negotiate-seller-concessions/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 60 | sellers-market-offer | `/learn/how-to-create-competitive-offer/` | `/learn/how-to-navigate-hot-housing-market/`<br>`/learn/how-to-win-house-in-sellers-market/`<br>`/learn/navigating-sellers-market-as-buyer/`<br>`/learn/strategies-for-buying-in-competitive-market/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 61 | selling-steps | `/learn/selling-a-home/` | `/learn/selling-your-house/` | 0 | P2 | Links team: duplicates the seller hub; /learn/selling-process/ stays |
| 62 | staging | `/learn/impact-of-home-staging-on-sale-price/` | `/learn/benefits-of-hiring-professional-stager/` | 0 | P2 | inventory analyst; auditor-sampled where noted |
| 63 | zoning | `/learn/zoning-regulations/` | `/learn/impact-of-zoning-laws-on-home-value/` | 0 | P2 | inventory analyst; auditor-sampled where noted |

### 7.2 Prunes (38 articles, 301 to the nearest relevant page)

All are drift for a Michigan mortgage broker with negligible demand (34 of 39 originally listed had 0–25 impressions). Changes from the inventory list, per the auditor: `/learn/real-estate-crowdfunding/` becomes a **301** (not noindex), and `/learn/benefits-of-investing-in-mixed-use-developments/` is **kept** without further investment (2 of the ~11 Learn clicks) until Align says whether it finances mixed-use 1–4 unit properties. No noindex pages remain in the plan.

| # | URL | 301 target | Mapped impr | Contextual inlinks | Chain check |
|---|---|---|---|---|---|
| 1 | `/learn/buying-home-in-gated-community/` | `/learn/buying-home-with-hoa-pros-and-cons/` | 0 | 5 | single hop |
| 2 | `/learn/buying-home-with-pool/` | `/learn/what-to-look-for-when-buying-house/` | 0 | 9 | single hop |
| 3 | `/learn/leaving-old-home-emotional-considerations/` | `/learn/moving-and-settling/` | 0 | 7 | single hop |
| 4 | `/learn/virtual-home-tours-how-they-work/` | `/learn/finding-home/` | 0 | 4 | single hop |
| 5 | `/learn/accessibility-features-in-modern-homes/` | `/learn/buying-home-for-aging-in-place/` | 0 | 10 | single hop |
| 6 | `/learn/addressing-mold-issues-in-your-home/` | `/learn/how-to-read-home-inspection-report/` | 0 | 19 | single hop |
| 7 | `/learn/benefits-of-smart-irrigation-systems/` | `/learn/home-improvement/` | 0 | 4 | single hop |
| 8 | `/learn/buying-cul-de-sac-house-pros-and-cons/` | `/learn/home-types-and-living/` | 0 | 6 | single hop |
| 9 | `/learn/choosing-energy-efficient-windows/` | `/learn/energy-efficient-home-upgrades/` | 0 | 7 | single hop |
| 10 | `/learn/coping-with-smoke-damage/` | `/learn/evaluating-home-insurance-options/` | 0 | 4 | single hop |
| 11 | `/learn/craftsman-houses-history-and-features/` | `/learn/different-types-of-houses-by-structure-and-style/` | 0 | 6 | single hop |
| 12 | `/learn/creating-functional-mudroom/` | `/learn/home-improvement/` | 0 | 4 | single hop |
| 13 | `/learn/creating-home-office-space/` | `/learn/home-improvement/` | 0 | 7 | single hop |
| 14 | `/learn/creating-minimalist-home/` | `/learn/home-improvement/` | 0 | 4 | single hop |
| 15 | `/learn/creating-sustainable-home/` | `/learn/energy-efficient-home-upgrades/` | 0 | 4 | single hop |
| 16 | `/learn/design-ideas-for-modern-home/` | `/learn/home-improvement/` | 0 | 4 | single hop |
| 17 | `/learn/diy-home-renovation-projects/` | `/learn/renovation-ideas-to-boost-home-value/` | 0 | 29 | single hop |
| 18 | `/learn/diy-home-security-upgrades/` | `/learn/insurance-and-protection/` | 0 | 4 | single hop |
| 19 | `/learn/eco-friendly-roofing-options/` | `/learn/energy-efficient-home-upgrades/` | 0 | 4 | single hop |
| 20 | `/learn/fire-safety-tips-for-homeowners/` | `/learn/insurance-and-protection/` | 0 | 17 | single hop |
| 21 | `/learn/home-automation-systems/` | `/learn/home-improvement/` | 0 | 11 | single hop |
| 22 | `/learn/home-renovation-permits-what-you-need/` | `/learn/what-is-renovation-loan/` | 0 | 73 | single hop |
| 23 | `/learn/how-to-address-water-damage-in-your-home/` | `/learn/homeowners-insurance-deductibles/` | 58 | 18 | single hop |
| 24 | `/learn/maintaining-homes-roof-tips-and-tricks/` | `/learn/home-maintenance/` | 18 | 14 | single hop |
| 25 | `/learn/benefits-of-investing-in-emerging-markets/` | `/learn/how-to-evaluate-real-estate-market-for-investment/` | 0 | 4 | single hop |
| 26 | `/learn/benefits-of-investing-in-green-housing-markets/` | `/learn/investor-market-analysis/` | 0 | 4 | single hop |
| 27 | `/learn/benefits-of-investing-in-senior-housing-markets/` | `/learn/investment-property-types/` | 0 | 5 | single hop |
| 28 | `/learn/commercial-real-estate-investing/` | `/learn/investment-property-types/` | 0 | 14 | single hop |
| 29 | `/learn/dealing-with-multiple-offers-from-tenants/` | `/learn/rental-management/` | 0 | 4 | single hop |
| 30 | `/learn/real-estate-crowdfunding/` | `/learn/investing-basics/` | 395 | 10 | single hop |
| 31 | `/learn/real-estate-investment-trusts-reits/` | `/learn/investing-basics/` | 0 | 14 | single hop |
| 32 | `/learn/tips-for-managing-multiple-rental-properties/` | `/learn/rental-management/` | 0 | 16 | single hop |
| 33 | `/learn/economic-impacts-of-housing-shortages/` | `/learn/housing-market-trends/` | 0 | 5 | single hop |
| 34 | `/learn/recent-trends-in-mortgage-delinquencies/` | `/learn/housing-market-trends/` | 0 | 5 | single hop |
| 35 | `/learn/urban-vs-suburban-housing-markets/` | `/learn/how-to-research-a-city-before-you-move/` | 0 | 23 | single hop |
| 36 | `/learn/decluttering-your-home-before-selling/` | `/learn/pricing-and-preparing/` | 0 | 5 | single hop |
| 37 | `/learn/how-to-improve-your-homes-curb-appeal/` | `/learn/pricing-and-preparing/` | 0 | 18 | single hop |
| 38 | `/learn/how-to-market-your-home-online/` | `/learn/selling-strategies/` | 0 | 14 | single hop |

### 7.3 Reconciliation with the inventory analyst and the links team

| Topic | Inventory | Links team | Decision and why |
|---|---|---|---|
| Amortization | canonical `mortgage-amortization` | differentiate | **Canonical `amortization-schedules`, merge `mortgage-amortization`**: GSC's own page data ranks it 14.5 for "amortization" (315 impressions); auditor BI-19. |
| Buyer closing costs | merge 2 twins | merge 1, re-scope `how-to-budget-for-closing-costs` | **Merge `mortgage-closing-costs` only; re-scope the budgeting page** to "how to lower or cover closing costs" (PAA maps there). The canonical becomes the Michigan closing-costs page. |
| Seller disclosure | merge | differentiate (seller vs buyer) | **Differentiate**: different audiences; retitle the seller page for the Michigan Seller Disclosure Act and the buyer page "How to read a seller's disclosure before you buy". |
| Closing process | merge | differentiate (timeline vs checklist) | **Differentiate**: "Home closing checklist: what to do in the last 30 days" is a distinct intent. |
| Seller's market offers | canonical `how-to-create-competitive-offer` | canonical `how-to-win-house-in-sellers-market` | **Inventory**: 80 contextual inlinks vs 18; repoint legacy `/win-house-sellers-market/`. |
| Buying process duplicate | → `home-buying-process` (a hub) | → `home-buying` (pillar) | **Links team**: send an article to the 7,630-word pillar, not to a hub. |
| Mortgage regulation group | canonical `mortgage-regulation-updates` | canonical `impact-of-new-mortgage-regulations` | **Inventory** (26 inlinks; auditor "sound"); retitle for borrowers. |
| Industry news group | canonical `whats-new-in-mortgage-industry` | folded into regulations | **Inventory**: keep two canonicals (rules vs news). |
| ARM tips | → pros-and-cons | → `adjustable-rate-mortgage-resets` | **Links team**: both are post-closing management. |
| New investor | canonical `how-to-become-real-estate-investor` | canonical `real-estate-investment-strategies-for-beginners` | **Links team**: 17 vs 12 inlinks. |
| Selling duplicate | → `selling-process` | → `selling-a-home` hub | **Links team**: it duplicates the hub's own "complete guide". |
| GSE updates | all into the FHFA tracker | freddie into fannie; keep FHFA | **Inventory**: one dated tracker for release-day updates. |
| Movers | both into the `moving-and-settling` hub | canonical `hiring-movers` | **Inventory**: drift topic; collapse into the hub. |
| Fixed-rate | 2 into benefits | — | **Auditor**: `fixed-rate-mortgage-options` → `15-year-vs-30-year-mortgage-comparison` (term intent). |
| Market type | 4 into buyer's market | partly into seller's market | **Inventory with the auditor's retitle**: "Buyer's Market vs. Seller's Market vs. Balanced: How to Tell" (60). |
| Glossary vs. terminology hub | re-file as an article | 301 to the glossary | **Links team**: a 1-child hub; re-parent the LTV guide under Mortgage basics. |
| Lease-to-own | merge 2 | merge 1, keep lease-option for sellers | **Inventory**: one page for one head term. |

### 7.4 301-chain risks

1. **Legacy root posts whose 301 target is being merged or pruned (14).** Repoint each straight to the final URL in the same release, so no legacy URL takes two hops. (The inventory listed 15; `/handle-seller-disclosures/` no longer needs a change because the seller-disclosure pages are differentiated, not merged.)

| # | Legacy URL | Current 301 target | Repoint straight to | Why |
|---|---|---|---|---|
| 1 | `/avoid-home-inspection-pitfalls/` | `/learn/avoiding-common-home-inspection-pitfalls/` | `/learn/home-inspection-checklist-for-buyers/` | target merges |
| 2 | `/build-home-budget-tips/` | `/learn/building-home-on-budget-tips-and-tricks/` | `/learn/cost-of-building-house-is-it-worth/` | target merges |
| 3 | `/buy-home-low-down-payment/` | `/learn/buying-home-with-low-down-payment/` | `/learn/low-down-payment-mortgages/` | target merges |
| 4 | `/craftsman-houses-history/` | `/learn/craftsman-houses-history-and-features/` | `/learn/different-types-of-houses-by-structure-and-style/` | target pruned |
| 5 | `/credit-impact-home-buying/` | `/learn/how-does-my-credit-impact-buying-house/` | `/learn/whats-good-credit-score-to-buy-house/` | target merges |
| 6 | `/cul-de-sac-house/` | `/learn/buying-cul-de-sac-house-pros-and-cons/` | `/learn/home-types-and-living/` | target pruned |
| 7 | `/distressed-properties-2025-investment-guide/` | `/learn/buying-distressed-properties/` | `/learn/investing-in-fixer-uppers/` | target merges |
| 8 | `/foreclosure-market-2025-buyers/` | `/learn/foreclosure-process-what-home-buyers-should-know/` | `/learn/how-to-buy-foreclosed-home/` | target merges |
| 9 | `/hire-movers-questions/` | `/learn/how-to-hire-movers-questions-to-ask/` | `/learn/moving-and-settling/` | target merges |
| 10 | `/hiring-movers-guide/` | `/learn/hiring-movers/` | `/learn/moving-and-settling/` | target merges |
| 11 | `/lease-option-agreements/` | `/learn/lease-option-agreements-pros-and-cons/` | `/learn/lease-to-own-vs-rent-to-own-whats/` | target merges |
| 12 | `/leaving-home-emotional-tips/` | `/learn/leaving-old-home-emotional-considerations/` | `/learn/moving-and-settling/` | target pruned |
| 13 | `/negotiate-home-purchase/` | `/learn/negotiating-home-purchase/` | `/learn/how-to-negotiate-house-prices/` | target merges |
| 14 | `/win-house-sellers-market/` | `/learn/how-to-win-house-in-sellers-market/` | `/learn/how-to-create-competitive-offer/` | target merges |

2. **New merges must not stack on old redirects.** Before each 301 goes live, run the link team's crawl check: no merge canonical is itself a redirect source (verified for all 63 groups), and no prune target is a merge source or another prune (verified for all 38).
3. **`/purchase/mortgage-readiness-review/` is being 301-redirected** to `/purchase/homebuyer-game-plan/#readiness` by the purchase team. 14 C08 Learn articles use it as their cluster pillar link. Update those links to the game plan URL in the same release; none of the new briefs links the old URL.
4. **http and www variants** of legacy URLs take 3 hops today (links team). Their host-agnostic edge rule should ship before or with the merges.
5. **Not a task anymore:** the GSC report's "301 the legacy duplicates and ZIP URLs" P0 is already done (auditor GG-9). Replace it with IndexNow submission and GSC URL Inspection for `/well-water-home-value/`, `/hoa-fees-guide-2/`, `/conveyance-real-estate-explained/`, `/lease-to-own-vs/` and the three ranking `/mortgage-location/` URLs, plus removal of internal links that point at redirects.

### 7.5 Release batches

| Batch | Week | Contents |
|---|---|---|
| A | W1 | 38 prunes, 14 legacy repoints, the P0 merges (lease-to-own ×2, GSE ×3, tax-law, jumbo, mortgage-news meta fix ahead of its merge) |
| B | W2–W6 | Each canonical's merges ship the same day as its refresh (section 9) |
| C | W9 | Remaining P1 merges |
| D | W10–W11 | P2 merges (investing, selling, maintenance, co-op, movers and similar) |

---

## 8. Correction sweeps (from KNOWN-CORRECTIONS and the auditor)

Counts come from a text scan of the 2026-11-15 crawl; each list needs a human check of context before editing.

| Rule | Pages | Action |
|---|---|---|
| **F13: "as low as 1%"** | 8 Learn pages: `/learn/usda-loan-basics/` (meta and body), `/learn/buying-home-with-low-income-tips-and-programs/`, `/learn/first-time-home-buyer-grants-and-programs/`, `/learn/loan-types/`, `/learn/recent-changes-to-usda-loan-programs/`, `/learn/state-specific-mortgage-assistance-programs/`, `/learn/tips-for-buying-home-in-rural-area/`, `/learn/usda-and-assistance-programs/` | P0, W1: delete the rate phrase; describe USDA Direct loans as "payment assistance that can lower the effective cost, set by USDA" `[VERIFY wording with USDA RD]`. |
| **Rate forecasts** | `/learn/housing-market-outlook/` (H2 and meta), `/learn/mortgage-news/` (meta "rates near 6.5%"), `/learn/mortgage-rate-predictions/` (title) | P0 for the first two (exact interim text in `08-audit/corrections-content.csv`); P1 title change for the third. |
| **F1: First-Generation DPA** | 13 Learn pages, e.g. `/learn/first-time-home-buyer-grants-and-programs/`, `/learn/first-time-home-buyers/`, `/learn/low-down-payment-mortgages/`, `/learn/15-first-time-home-buyer-tips/`, `/learn/budgeting-for-your-first-home/`, `/learn/state-specific-mortgage-assistance-programs/` | Describe as closed (funds exhausted, no waitlist). |
| **F3: 620 conventional floor** | 36 Learn and 7 product pages mention 620 near "conventional", e.g. `/learn/credit-and-qualifying/`, `/learn/debt-to-income-ratio-dti/`, `/learn/home-buying/`, `/learn/mortgage-underwriting/`, `/learn/whats-good-credit-score-to-buy-house/` (its title says "620 And Up") | Review each; describe credit as evaluated by DU for case files on or after Nov 16, 2025, with possible lender overlays. |
| **F4: "1.5%" property tax** | 11 Learn pages (e.g. `/learn/how-to-qualify-for-va-loan/`, `/learn/va-loan-benefits-for-veterans/`, `/learn/reverse-mortgages-how-they-work/`), 3 calculators, 4 product pages, 8 city pages | Replace with 36.0 mills (about 1.8% of market value after the reset). |
| **F5: "May 1"** | 36 Learn pages contain "May 1" (many unrelated) | Check each PRE reference; use June 1 and November 1. |
| **F7: non-affiliation line** | Every FHA, VA and USDA Learn page in the refresh list | Add the exact line when the page is refreshed. |
| **Quote repetition (auditor)** | Quote-bank quotes on 142 articles; one on 33 pages, one on 27 | When refreshing, keep a quote only on pages in its original topic cluster; replace the rest with `[NEEDS SAMANTHA QUOTE: topic]`. |
| **F16 wording** | Competitor R1 and AEO A1 answer blocks | Use the corrected 59-word blocks in the auditor's CSV. |

**Wording issue to flag (F4):** the register says "36.0 mills (≈1.8% of taxable value at sale)". 36.0 mills is 3.6% of taxable value. It is about **1.8% of market value** once taxable value resets to roughly half of market value. The briefs use the market-value wording; the PM may want to correct the register.

---

## 9. 12-week publishing calendar

Cadence: up to 2 new posts and 4 refreshes a week, with merges shipping alongside their canonical. Every new post: submit via Rank Math Instant Indexing (IndexNow) and GSC URL Inspection on publish; add the inbound links listed in its brief the same day. "Ref" = refresh number in section 6.

| Week | Dates | New posts | Refreshes (with merges) | Also |
|---|---|---|---|---|
| W1 | Nov 23–29 | — (drafting #1 and #5) | Ref 1 lease-to-own (+2), Ref 2 usda-loan-basics, Ref 5 Michigan first-time programs, Ref 6 homestead/PRE | **FHFA 2027 release (expected about Nov 24–25): Tier 1 updates, section 10.** P0 sweeps (F13, rate forecasts). Batch A. Add the 11 AI-tracker prompts plus 4 new ones (section 13). |
| W2 | Nov 30–Dec 6 | #1 MSHDA MI Home Loan; #5 How to get preapproved | Ref 8 conventional hub, Ref 9 FHFA tracker (+3), Ref 10 taxable value, Ref 11 closing costs (+1) | HUD CY2027 FHA limits expected: Ref 7 fha-loan-limits and Tier 2 |
| W3 | Dec 7–13 | #2 Home equity disqualifiers; #3 Disabled veterans | Ref 12 credit score (+1), Ref 13 VA requirements, Ref 14 IRRRL, Ref 15 VA benefits | |
| W4 | Dec 14–20 | #4 Rent-to-own vs. land contract; #7 USDA requirements | Ref 16 DTI, Ref 17 lender comparison, Ref 18 refinancing options, Ref 19 amortization (+1) | |
| W5 | Dec 21–27 | #6 Mortgages after 60; #8 Income needed in Michigan | Ref 20 HELOC, Ref 21 USDA refinance, Ref 22 rate lock (+1), Ref 23 jumbo (+1) | |
| W6 | Dec 28–Jan 3 | #9 Adding or removing a name; #10 What not to tell a lender | Ref 24 land contract, Ref 25 escrow, Ref 26 low down payment (+1), Ref 27 LTV | Holiday week: if capacity drops, move refreshes to W10 |
| W7 | Jan 4–10 | #12 Homestead property tax credit; #11 How DSCR loans work | Ref 28 conveyance, Ref 29 underwriting, Ref 30 broker vs. bank, Ref 4 rate-forecast title | Publish the 2027 `housing-market-outlook` in place (Ref 3, January version). MI-1040CR season starts. |
| W8 | Jan 11–17 | #13 After bankruptcy or foreclosure; #14 SSI or disability income | Wave 2: portfolio loan, cash-out (+1), interest deduction, bad credit | 6-week check on W2 posts |
| W9 | Jan 18–24 | #15 VA entitlement (backlog; 2027 limits in effect) | Wave 2: foreclosed homes (+1), rural buying, FHA hub, mortgage insurance | Batch C merges |
| W10 | Jan 25–31 | — | Wave 2: refinancing eligibility, HomeReady, Conventional 97, manufactured homes | 6-week check on W3–W4 posts |
| W11 | Feb 1–7 | — | Wave 2: well water guide, disclosure rules (3/7/3), second mortgages, VA construction | Batch D merges. Week-8 split test for the disabled-veterans post. |
| W12 | Feb 8–14 | — | Wave 2: plat map, drive-by appraisal, inspection waivers, state assistance re-angle | Measurement report; decide the next round (USDA income-limit guide, land-contract refinance guide if its H2 ranks) |

Totals: 15 new posts, 30 top refreshes, about 22 wave-2 refreshes, 63 merge groups and 38 prunes.

---

## 10. 2027 loan-limit and figure release-day update list

Rule: replace figures the day the issuing agency publishes, date-stamp them ("2027 limit"), and change the "Updated" date only on pages whose figures changed. Where a page only mentions a limit in passing, replace the figure with a link to `/loan-limits/` so future sweeps touch about 15 pages instead of 121.

| Trigger (verify with the issuer on the day) | Expected | Tier 1: same day | Tier 2: within 3 days | Tier 3: link out instead of restating |
|---|---|---|---|---|
| **FHFA 2027 conforming loan limits** (2026 baseline $832,750, F6) | Late Nov 2026 (about Nov 24–25) | `/loan-limits/` (calculators team; title "2027 Michigan Loan Limits by County", proposed, consistency team to reconcile); `/learn/conventional-loans/`; `/learn/federal-housing-finance-agency-updates/`; `/learn/how-to-qualify-for-jumbo-loan/`; `/product-loans/conventional-loans/`; `/product-loans/jumbo-loans/`; `/product-loans/` (H3 "What are the 2026 loan limits in Michigan?"); `/product-loans/va-loans/` (FAQ on remaining entitlement) | City template (274 pages; one template field, city team), 13 county hubs, `/mortgage-florida/`, `/mortgage-north-carolina/`, home page, `/purchase/`, `/purchase/buy-before-you-sell/`, `/purchase/homebuyer-game-plan/`, `/purchase/self-employed-homebuyer/`, `/product-loans/bank-statement-loan/`, `/product-loans/physician-loans/`, `/editorial-policy/`, `/learn/non-conforming-loans/`, `/learn/refinancing-jumbo-loan/`, `/learn/what-is-conventional-97-loan/`, `/learn/loan-types/`, `/learn/government-backed-loans/`, `/learn/jumbo-and-non-qm/` | The remaining Learn pages of the 121 that carry $832,750 |
| **HUD CY2027 FHA forward limits** (2026 floor $541,287 on 53 Learn pages; ceiling $1,249,125 on 72) | Early Dec 2026 (Mortgagee Letter) | `/learn/fha-loan-limits/` (title on release: "FHA Loan Limits 2027: How They Affect What You Can Borrow" (57); the auditor proposes "FHA Loan Limits 2027: Michigan Limits by County" (47): consistency team to reconcile with products-a, which gives "fha loan limits michigan" to `/loan-limits/`); `/loan-limits/`; `/product-loans/fha-loans/` | `/learn/fha-loans/`, `/learn/fha-loan-tips/`, `/learn/benefits-of-fha-203-k-loans/`, `/learn/government-backed-loans/`, `/learn/recent-changes-to-fha-loan-requirements/` (absorbing `federal-housing-administration-updates`), city template | Other Learn mentions |
| **HUD 2027 HECM limit** (on 10 pages) | Same Mortgagee Letter | `/learn/reverse-mortgages-how-they-work/`, `/learn/how-to-refinance-reverse-mortgage/` (accuracy only; D1 pending) | — | — |
| **VA county limits for remaining entitlement** (= FHFA limits, effective Jan 1, 2027) | Jan 1, 2027 | `/product-loans/va-loans/`, `/learn/buying-home-with-va-loan/` | Backlog post `/learn/va-entitlement-michigan/` publishes W9 with the 2027 figure | — |
| **USDA FY2027 income limits** (fiscal year began Oct 1, 2026; 2026 figure $122,800 for 1–4 people) | Confirm USDA RD publication | `/usda-eligibility-check/`, `/product-loans/usda-loans/` table, `/learn/usda-loan-basics/` | `/learn/usda-loan-requirements/` (links only) | — |
| **MSHDA limits** (price limit $566,355 after June 1, 2026, on 81 Learn and 216 city pages) | When MSHDA announces | `/learn/mshda-mi-home-loan/`, `/purchase/down-payment-assistance/`, `/purchase/first-time-homebuyer/` | `/learn/first-time-home-buyer-grants-and-programs/`, city template | Other Learn mentions link to the MSHDA post |
| **Michigan 2027 inflation rate multiplier** | Michigan Treasury announcement | `/learn/michigan-taxable-value/`, `/learn/property-tax-assessments-how-they-work/`, `/learn/homestead-exemption-benefits-and-filing-guide/` | 23 pages mentioning the multiplier | — |
| **Tax year 2026 federal figures; MI-1040CR limits** | IRS and Michigan Treasury (Jan 2027) | `/learn/michigan-homestead-property-tax-credit/`, `/learn/mortgage-interest-deductions-how-they-work/`, `/learn/impact-of-new-tax-laws-on-homeownership/` | `/learn/capital-gains-tax-exemptions/` | — |

---

## 11. Owner decisions

| # | Decision | What the evidence says | Recommendation | What changes with each answer |
|---|---|---|---|---|
| **D1** | Does Align broker reverse mortgages? | 514 GSC impressions at position 71.4; "michigan reverse mortgage broker" 24 @3.6; the CTA team already pairs the reverse guide with a HUD counselor link | Decide before the January sweep | **Yes:** refresh `/learn/reverse-mortgages-how-they-work/` with the 2027 HECM limit and a proprietary-reverse section, link it from the seniors post, and consider one Michigan reverse-mortgage post in the next round. **No:** keep the page for accuracy only with a HUD-approved counselor referral, label the cluster drift, and keep the seniors post's one neutral sentence. |
| **D2** | One standard measure for "typical home value" | City pages mix Census owner medians with portal sale medians; the new posts use Align's HMDA "median home value on purchase loans" with its year | Adopt two named measures and never mix them in one comparison: Census ACS 5-year median value of owner-occupied homes (with the year) for city and county pages, and HMDA median property value on purchase loans for market context; never "typical home value" without a named source | Affects 276 city pages, 13 hubs and the income-needed post (which already uses the HMDA label). |
| **D3** | Does Align have MSHDA participating-lender access, directly or through a partner? | F2 requires participating lenders; the purchase team flagged it P0 | Answer before W2 (the MSHDA post publishes then with the default wording) | **No / unknown:** keep "Samantha explains the MSHDA programs and, if one fits, refers you to a participating lender" and no apply CTA. **Yes:** approve stronger wording, add **Start my application** to the MSHDA post, and update the DPA and first-time money pages. |
| D5 | Is Align always paid by the lender? | `/about-us/` states it absolutely; `/licensing/` has the safe version | Until confirmed, Ref 30 and the pre-approval post use the `/licensing/` wording | Affects the broker-pay FAQ on the broker vs. bank guide. |
| PM | USDA income limits: tool or new guide? | Products-a gives the query to the tool; the auditor confirmed it as a topic | Keep with the tool; first backlog candidate if the PM disagrees | USDA new posts would go from 1 to 2 (cap 3). |
| PM | Disabled-veterans page: one or two? | Auditor suggests two | One now; split at week 8 if the exemption query is not top 20 | — |

---

## 12. Cross-team requests (proposed; each owning team decides)

| Team | Request | Why |
|---|---|---|
| Purchase | Shorten the new budget-review H2 "How much income do you need to afford a $300,000 house in Michigan?" to two sentences that link to `/learn/income-needed-to-buy-a-house-michigan/` (anchor "income needed by home price in Michigan"). | Avoids two pages answering the same 14 PAA questions; the budget review keeps "how much house can I comfortably afford in Michigan". |
| Purchase | `/mortgage-process/` step 2 links to the pre-approval post; `/purchase/va-homebuyer-plan/` keeps a two-sentence exemption summary linking to the disabled-veterans post; `/purchase/down-payment-assistance/` links "MI Home Loan income limits by county" to the MSHDA post. | One owner per intent. |
| Purchase + consistency | Resolve the title conflict: the auditor proposes "Michigan First-Time Homebuyer Programs and Grants" for the Learn page; the purchase team proposes "First-Time Homebuyer Programs in Michigan" for `/purchase/first-time-homebuyer/`. Recommendation: the Learn page owns "programs and grants", the money page owns "first-time homebuyer plan/help". | Two near-identical titles would cannibalize the 3,600/mo query. |
| Products A | VA requirements owner: products-a assigns "va loan requirements" to the `/learn/va-loans/` hub; the inventory and GSC analysts give it to `/learn/how-to-qualify-for-va-loan/`. Recommendation: the article owns it (it can carry the 6-item list and manual underwriting); the hub routes. USDA basics title: products-a's product H1 "USDA Rural Development Loans in Michigan" is close to the auditor's basics title "USDA Loans in Michigan: How Rural Development Loans Work"; this plan proposes "USDA Loans Explained: How Rural Development Loans Work" for the Learn page. | Consistency team to reconcile. |
| Products B | Add the "how DSCR loans work" link in the DSCR page's Learn block; keep DSCR LLC/refinance/appraisal/credit PAA on the product page. | The Learn post stays informational. |
| Refinance | Add H2 "What if you own your home free and clear?" to `/refinance/cash-out-vs-home-equity/` (C17: "i own my house outright and want a loan" 210/mo). | Money page owns the comparison. |
| Calculators | `/loan-limits/` release-day update and title; guarantee-fee line on the USDA check; keep the millage table with its CSV and Dataset markup on the property tax calculator (C12); add "Michigan homestead property tax credit" to the calculator FAQ; ship `/loan-to-value-calculator/` and then restore "Calculator" in the LTV guide's title. | Tool-owned queries. |
| City | Strengthen the Detroit page's property tax section (C10: "property tax detroit michigan" 8,100/mo) with the HOPE exemption `[VERIFY]` and the 128% uncapping figure already on the page; Ann Arbor jumbo support for the jumbo product page (N28). | City pages own city queries. |
| Links | Ship the 63 merges and 38 prunes as server-side 301s; repoint the 14 legacy redirects; update the 14 C08 pillar links from the readiness review to the game plan; add each brief's inbound links on publish. | Section 7. |
| CTA | Learn module labels for the new posts follow each brief (all booking buttons "Talk with Samantha", F11b); add a "learn_mshda", "learn_equity_denial" and "learn_income" key to the topic map. | Measurement by topic. |
| Images | Produce the 15 lead graphics in section 11 of each brief; no regulated figures inside images. | Release-day maintainability. |
| Consistency | Reconcile every title marked "proposed"; check the F4 register wording (section 8). | — |

---

## 13. Measurement, AI search and Bing

- **Per new post (weeks 2, 6, 12):** indexed (GSC and Bing), impressions, average position, clicks, People Also Ask presence for the brief's FAQ questions, and `cta_click` events by `data-cta-place` (module, end).
- **AI tracker:** add the 11 prompts in `ai-visibility.md` A11 plus "How do I get pre-approved for a mortgage in Michigan?" (already in A11), "What disqualifies you from a HELOC?" (in A11), "Do disabled veterans pay property tax in Michigan?", "What income do you need to buy a house in Michigan?", "Rent-to-own or land contract in Michigan?" and "What are USDA loan requirements?". Baseline: Align cited on 4 of 12 prompts, 0 on Google AI Mode.
- **Library level (monthly):** impressions and clicks per indexed article (target: up as the count falls 25%), the share of Learn impressions in core clusters (82% today), and Learn pages with zero impressions.
- **Targets are planning goals, not forecasts.** Week-12 goals for the sprint: every post indexed; 8 of 14 with impressions in the top 30; the MSHDA, home equity, disabled-veterans and income posts cited on at least one AI engine for their tracker prompt.
- **Bing (no data connected):** export Bing Webmaster Search Performance (queries and pages, 6 months), Site Explorer index coverage for the 15 new and 30 refreshed URLs and all redirect sources, and any Copilot citation report. Turn on Rank Math Instant Indexing (IndexNow) before W1 so every publish, refresh and 301 is pushed to Bing. Bing weights literal titles and slugs, which is why the new slugs repeat the query wording.

---

## 14. Files

| File | Contents |
|---|---|
| `05-content-keywords/content-plan.md` | This plan |
| `05-content-keywords/blog-plan.csv` | 92 rows: rank, slug, title, primary_kw, evidence (with source IDs), decision, owner_url_if_not_new, cluster, priority_score, sprint_y_n |
| `06-blogs/briefs/_README.md` | Shared standards for every brief: format, disclosures, CTA, compliance, schema template, images, internal-link rules, pre-publish checklist |
| `06-blogs/briefs/{slug}.md` (14) | Sprint briefs, ranks 1–14 |
| `06-blogs/briefs/backlog/va-entitlement-michigan.md` | Backlog brief, rank 15 |
