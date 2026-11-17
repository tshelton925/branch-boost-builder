# Counsel review

**Team:** Consistency, cross-team conflict resolver · **Date:** 2026-11-17 · Marketing-compliance questions for counsel; this is not legal advice.
Every row with a `[COMPLIANCE REVIEW]` or `[COUNSEL]` flag is PENDING-COUNSEL in `MASTER-CHANGES.csv` (65 rows). Groups follow the brand editor's C1-C9 (`brand-compliance-review.md` §6) plus one new group (C10) and the F7 scope question. Where a conservative interim is always compliant (removing a claim, a neutral label, adding a disclaimer), it ships now and is not counted as waiting.

| Group | Topic | Rows waiting |
|---|---|---:|
| C1 (D7) | Repayment-period terms ("30-year", "15-year") as product names on money pages | 31 |
| C2 (D7) | Down-payment percentages and "no down payment" on money pages and in learn titles | 15 |
| C3 | Government fee percentages (FHA MIP, USDA guarantee fees, VA funding fee chart) | 13 |
| C4 | Closing-cost figures in refinance break-even illustrations | 2 |
| C5 | Worked examples with monthly amounts on calculators | 3 |
| C6 | Attributed down-payment figure in the Freddie Mac PMMS description | 1 |
| C7 | Reviews and testimonials | 0 |
| C8 | Recordkeeping for approved copy (Regulation N, 24 months) | 0 |
| C9 | "No credit pull to talk" and the point where /start/ pulls credit | 0 |
| C10 | Third-party savings claims (Polygon Research) on city pages | 0 |
| F7 scope | Government non-affiliation line on city pages | 0 |

**Fastest unblock:** one counsel ruling on C1 and C2 (D7) releases 46 of the 65 rows, including the 30-year and 15-year product pages and the FHA, VA, USDA, conventional and HomeReady down-payment cards.

---

## C1 (D7): Repayment-period terms ("30-year", "15-year") as product names on money pages

- **Basis:** 12 CFR 1026.24(d)(1)(ii): a repayment period is a trigger term; Align publishes no APR or full disclosure. The guide takes the conservative line.
- **Question for counsel:** Does "30-Year Fixed"/"15-Year Fixed" as a product name, page title, H2 or link anchor trigger 1026.24(d)? If yes, what neutral names do we use ("Fixed-rate mortgage, longer term")?
- **What we did pending the ruling:** Flagged rows wait. Shipped now: CTA labels "Compare fixed-rate terms"; refinance loan cards "Fixed-rate mortgage, longer term / shorter term" (RHT-N002); nav keeps today's labels.
- **Rows waiting (31):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `PRA-0274` | /product-loans/30-year-fixed/ | subhead | A 30-year fixed fits buyers who want the lowest required payment of the fixed terms and the freedom to pay extra when it suits them. Principal and interest never change; taxes and insurance can. It is available on conven |
| `PRA-0279` | /product-loans/30-year-fixed/ | title | 30-Year Fixed Mortgages in Michigan \| Align Lending |
| `PRA-0280` | /product-loans/30-year-fixed/ | meta | A 30-year fixed mortgage keeps the required payment lowest of the fixed terms. See how it compares with a 15-year in Michigan, who it fits, and how to qualify. |
| `PRA-0281` | /product-loans/30-year-fixed/ | h2/h3 outline | Why choose a 30-year fixed? |
| `PRA-0282` | /product-loans/30-year-fixed/ | h2/h3 outline | Is a 30-year or 15-year mortgage better? \| A 30-year keeps the required payment lower and leaves more room in your debt ratio, so you qualify for more and keep a cushion in lean months. A 15-year costs far less total int |
| `PRA-0283` | /product-loans/30-year-fixed/ | h2/h3 outline | How much does paying extra on a 30-year save? \| Every extra dollar goes straight to principal on conforming, FHA, VA and USDA loans, which carry no prepayment penalty, so it shortens the loan and cuts total interest. How |
| `PRA-0284` | /product-loans/30-year-fixed/ | h2/h3 outline | What do lenders check for a 30-year fixed? \| Label H3s become table rows. |
| `PRA-0286` | /product-loans/30-year-fixed/ | h2/h3 outline | 30-year fixed questions Michigan buyers ask |
| `PRA-0287` | /product-loans/30-year-fixed/ | h2/h3 outline | Where can I see today's 30-year fixed rate in Michigan? \| We do not publish rates, because yours depends on credit, down payment, loan type, points and the day you lock. Samantha quotes a rate on your actual file and put |
| `PRA-0291` | /product-loans/30-year-fixed/ | h2/h3 outline | Compare a 30-year fixed with other Michigan loans \| Entity-specific sibling block. |
| `PRA-0292` | /product-loans/30-year-fixed/ | link insertion | "15-year vs 30-year payments and interest" → https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ @ Comparison H2 |
| `PRA-0297` | /learn/15-year-vs-30-year-mortgage-comparison/ | link insertion | "30-year fixed mortgages in Michigan" → https://alignlending.com/product-loans/30-year-fixed/ |
| `PRA-0298` | /mortgage-calculator/ | link insertion | "30-year fixed mortgages" → https://alignlending.com/product-loans/30-year-fixed/ |
| `PRA-0299` | /mortgage-payoff-calculator/ | link insertion | "30-year fixed mortgages" → https://alignlending.com/product-loans/30-year-fixed/ |
| `PRA-0302` | /product-loans/15-year-fixed/ | subhead | A 15-year fixed fits buyers and refinancers who want the loan gone in half the time and far less total interest, and who can carry a noticeably higher required payment in their leanest month. It works with conventional,  |
| `PRA-0307` | /product-loans/15-year-fixed/ | title | 15-Year Fixed Mortgages in Michigan \| Align Lending |
| `PRA-0308` | /product-loans/15-year-fixed/ | h2/h3 outline | Why choose a 15-year fixed? |
| `PRA-0309` | /product-loans/15-year-fixed/ | h2/h3 outline | Usually priced below a longer term \| Card: "Lenders usually price 15-year loans below 30-year loans for the same borrower; your Loan Estimate shows the actual difference." |
| `PRA-0310` | /product-loans/15-year-fixed/ | h2/h3 outline | How much does a 15-year mortgage save? \| On the same loan, a 15-year typically costs less than half the total interest of a 30-year, because the balance falls faster and the rate is usually lower. The price is a required |
| `PRA-0311` | /product-loans/15-year-fixed/ | h2/h3 outline | Should I take a 15-year or pay extra on a 30-year? \| If the higher payment fits comfortably every month and your emergency savings are in place, the 15-year's lower pricing saves the most. If income varies or other goals |
| `PRA-0312` | /product-loans/15-year-fixed/ | h2/h3 outline | What do lenders check for a 15-year fixed? |
| `PRA-0314` | /product-loans/15-year-fixed/ | h2/h3 outline | 15-year fixed questions Michigan buyers ask |
| `PRA-0315` | /product-loans/15-year-fixed/ | h2/h3 outline | Where can I see today's 15-year fixed rate in Michigan? \| We do not publish rates, because yours depends on credit, down payment, loan type, points and the day you lock. Samantha quotes a rate on your actual file and put |
| `PRA-0319` | /product-loans/15-year-fixed/ | h2/h3 outline | Compare a 15-year fixed with other Michigan loans \| Entity-specific sibling block. |
| `PRA-0320` | /product-loans/15-year-fixed/ | link insertion | "15-year vs 30-year payments and interest" → https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ @ Savings H2 |
| `PRA-0321` | /product-loans/15-year-fixed/ | link insertion | "refinancing to a 15-year" → https://alignlending.com/learn/refinancing-to-shorter-loan-term/ @ FAQ "Can I refinance my thirty into a fifteen?" |
| `PRA-0324` | /learn/15-year-vs-30-year-mortgage-comparison/ | link insertion | "15-year fixed mortgages in Michigan" → https://alignlending.com/product-loans/15-year-fixed/ |
| `PRA-0325` | /learn/refinancing-to-shorter-loan-term/ | link insertion | "15-year fixed mortgages" → https://alignlending.com/product-loans/15-year-fixed/ |
| `LIN-0116` | /mortgage-calculator/ | link insertion | Link "15-year vs. 30-year mortgage comparison" -> https://alignlending.com/learn/15-year-vs-30-year-mortgage-comparison/ \| NEW: To compare terms on the same loan amount, read our 15-year vs. 30-year mortgage comparison. |
| `LIN-0218` | /learn/how-rates-work/ | link insertion | Link "15-year fixed" -> https://alignlending.com/product-loans/15-year-fixed/ \| Loan term and lock length: A 15-year fixed prices below a 30-year on the same file, since the lender’s money is exposed for half as long. |
| `GSC-0086` | /learn/15-year-vs-30-year-mortgage-comparison/ | title | Title: 15-Year vs. 30-Year Mortgage: Payment and Interest Compared |

---

## C2 (D7): Down-payment percentages and "no down payment" on money pages and in learn titles

- **Basis:** 1026.24(d)(1)(i) and CFPB comment 24(d)(1) (statements like "no downpayment" do not trigger, but the guide requires counsel sign-off before money-page use). F20 already keeps percentages out of anchors and away from apply CTAs.
- **Question for counsel:** May FHA, conventional, HomeReady, VA and USDA pages state the agency minimums ("3.5% down with 580", "3% down", "no down payment with full entitlement") as each agency's rule, in body sections away from apply CTAs?
- **What we did pending the ruling:** Flagged rows wait; 6 percentage anchors dropped (F20); learn H2s name the program, not the percentage; the zero-down post was folded into an H2 on the low-down-payment guide.
- **Rows waiting (15):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `PRA-0015` | /product-loans/ | h2/h3 outline | Which loans need no down payment? \| VA loans for eligible borrowers with full entitlement and USDA loans for eligible rural addresses and incomes. Neither requires a down payment, though closing costs still apply unless  |
| `PRA-0046` | /product-loans/fha-loans/ | h2/h3 outline | Card text: "3.5% down with a credit score of 580 or higher." |
| `PRA-0047` | /product-loans/fha-loans/ | h2/h3 outline | Card text: "500 to 579 is possible with 10% down. Past credit issues do not rule you out; FHA sets waiting periods after a bankruptcy or foreclosure." |
| `PRA-0084` | /product-loans/va-loans/ | subhead | A VA loan fits eligible veterans, service members, Guard and Reserve members, and some surviving spouses. With full entitlement, VA requires no down payment, charges no monthly mortgage insurance and sets no loan limit.  |
| `PRA-0090` | /product-loans/va-loans/ | meta | VA loans in Michigan: who is eligible, why full entitlement means no down payment or monthly mortgage insurance, and who is exempt from the VA funding fee. |
| `PRA-0092` | /product-loans/va-loans/ | h2/h3 outline | No Down Payment With Full Entitlement \| Card: "VA does not require a down payment when you have full entitlement and the price is at or below the appraised value." |
| `PRA-0136` | /product-loans/usda-loans/ | h2/h3 outline | No Down Payment \| Card: "USDA does not require a down payment for an eligible address and household income." |
| `PRA-0177` | /product-loans/conventional-loans/ | h2/h3 outline | Card text: "As little as 3% down for first-time buyers and income-qualified programs; 5% otherwise." |
| `PRA-0178` | /product-loans/conventional-loans/ | h2/h3 outline | What are the conventional loan requirements in Michigan? \| Fannie Mae's automated underwriting has set no fixed minimum score since November 16, 2025, though many lenders still look for 620 or higher. Lenders also want t |
| `PRA-0203` | /product-loans/conventional-loans/ | body copy | No monthly mortgage insurance and no down payment with full entitlement; a funding fee applies unless you are exempt. |
| `PRA-0250` | /product-loans/home-ready/ | h2/h3 outline | Low Down Payment card: "3% down, with reduced mortgage insurance." |
| `PRA-0259` | /product-loans/home-ready/ | h2/h3 outline | Is HomeReady better than FHA? \| For a borrower under the income limit with a credit score around 680 or higher, usually yes: the mortgage insurance is reduced and can be cancelled, while FHA's lasts for the life of the l |
| `PRB-0314` | /product-loans/bank-statement-loan/ | answer block | H3: Do bank statement loans require 20% down? \|\| Answer (exact): Not always. Each lender sets the down payment, and it moves with your credit score, the loan amount, the property type and whether you will live in the hom |
| `INV-0021` | /learn/low-down-payment-mortgages/ | content refresh | REFRESH: 480 impr (low down payment mortgage options pos 21.5). Absorb buying-home-with-low-down-payment (301); add Michigan DPA stacking (MI 10K) section linking /purchase/down-payment-assistance/. \|\| SEO/AI EDIT: Low D |
| `SEO-008` | /learn/low-down-payment-mortgages/ | title | Low Down Payment Mortgage Options: 4 Loans Compared \|\| SEO note: Low Down Payment Mortgage Options: 4 Loans Compared (51). Keep the percentages inside the guide body as each agency's rule. |

---

## C3: Government fee percentages (FHA MIP, USDA guarantee fees, VA funding fee chart)

- **Basis:** 1026.24(d)(1)(iv): finance-charge components. The figures are the agencies' published schedules, attributed.
- **Question for counsel:** May money pages and calculators show FHA MIP (1.75% upfront), USDA (1% upfront, 0.35% annual) and the VA funding fee schedule as attributed agency figures?
- **What we did pending the ruling:** Kept in body sections away from apply CTAs; the VA chart lives only on the funding fee calculator (K2); the USDA fees H2 lives on the learn article.
- **Rows waiting (13):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `PRA-0024` | /product-loans/ | cta label/destination | \| Program \| Usually fits \| Down payment (program minimum) \| Insurance or fee \| 2026 Michigan limit (1 unit) \| ⏎ \|---\|---\|---\|---\|---\| ⏎ \| Conventional \| Steady income; no fixed minimum score in automated underwriting, ma |
| `PRA-0052` | /product-loans/fha-loans/ | h2/h3 outline | How much is FHA mortgage insurance, and when does it end? \| FHA charges an upfront premium of 1.75% of the loan, usually added to the balance, plus an annual premium paid monthly [VERIFY: current annual MIP 0.50%–0.55% i |
| `PRA-0064` | /product-loans/fha-loans/ | cta label/destination | \| Requirement \| FHA rule (2026) \| Where it comes from \| ⏎ \|---\|---\|---\| ⏎ \| Credit score \| 580+ for the 3.5% minimum; 500–579 needs 10% down; below 500 not eligible \| HUD \| ⏎ \| Down payment \| 3.5% (580+) or 10% (500–579) |
| `PRA-0097` | /product-loans/va-loans/ | h2/h3 outline | How much is the VA funding fee in 2026? \| For a purchase, VA's fee is 2.15% of the loan on first use with less than 5% down, 3.3% on later use with less than 5% down, 1.5% with 5% to 9.99% down, and 1.25% with 10% or mor |
| `PRA-0137` | /product-loans/usda-loans/ | h2/h3 outline | Card text add: "USDA's annual fee is 0.35% of the remaining balance a year, usually less than FHA's annual mortgage insurance premium." |
| `PRA-0140` | /product-loans/usda-loans/ | h2/h3 outline | Is USDA or FHA cheaper? \| When both the address and income qualify, USDA usually is. It needs no down payment, its upfront fee is 1% against FHA's 1.75%, and its annual fee is 0.35% against FHA's annual premium. FHA work |
| `PRA-0146` | /product-loans/usda-loans/ | h2/h3 outline | Add the figures: "a 1% upfront guarantee fee and a 0.35% annual fee". |
| `CAL-0015` | /calculators/ | body copy | Add one fact per card, e.g. Loan limits: "$832,750 conforming, $541,287 FHA in every Michigan county (2026)"; Transfer tax: "$4.30 per $500, paid by the seller"; VA funding fee: "2.15% first use, under 5% down"; Property |
| `CAL-0057` | /va-loan-calculator/ | body copy | Hypothetical example, not an offer. Actual rates, costs and payments vary. A $300,000 home at first use with less than 5% down: VA's 2.15% funding fee adds $6,450, so the loan becomes $306,450. If the assessor's market v |
| `CAL-0069` | /va-funding-fee-calculator/ | h2/h3 outline | Table (caption: "VA funding fee as a percentage of the loan amount, loans closed on or after April 7, 2023. Source: VA, Funding fee and closing costs, checked [DATE CHECKED]."): Purchase or construction, less than 5% dow |
| `CAL-0070` | /va-funding-fee-calculator/ | answer block | How much is the VA funding fee in 2026? It is a share of the loan amount set by VA: 2.15% on a first-use purchase with less than 5% down, 1.5% with 5% down, 1.25% with 10% down, and 3.3% on a later use with less than 5%  |
| `CAL-0083` | /usda-eligibility-check/ | body copy | What USDA charges: For fiscal 2026, USDA's upfront guarantee fee is 1% of the loan amount, which can be added to the loan, and the annual fee is 0.35% of the scheduled unpaid balance, collected monthly. Both are set by U |
| `BPL-0081` | /learn/usda-loan-basics/ | query ownership | OWNED BY: USDA guarantee fees -> https://alignlending.com/learn/usda-loan-basics/ (fees H2). The tool and the product page give a one-line summary with a link. |

---

## C4: Closing-cost figures in refinance break-even illustrations

- **Basis:** Closing costs are a finance-charge component in an illustration on a refinance money page and tool.
- **Question for counsel:** Are the break-even worked examples acceptable with the exact label "Hypothetical example, not an offer. Actual rates, costs and payments vary."?
- **What we did pending the ruling:** Exact hypothetical label applied; examples sit away from apply links.
- **Rows waiting (2):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `RHT-0171` | /refinance/break-even-review/ | answer block | H2: Refinance break-even example \|\| Answer: Hypothetical example, not an offer. Actual rates, costs and payments vary. If a refinance costs $4,500 to close and lowers the monthly payment by $150, the break-even is 30 mon |
| `CAL-0045` | /mortgage-refinance-calculator/ | body copy | Hypothetical example, not an offer. Actual rates, costs and payments vary. Closing costs of $4,800 and a $150 drop in monthly principal and interest: $4,800 ÷ $150 = 32 months. If you expect to keep the loan five years ( |

---

## C5: Worked examples with monthly amounts on calculators

- **Basis:** Payment and budget figures in examples (escrow, DTI budget, VA payment).
- **Question for counsel:** Are labeled hypothetical examples with monthly amounts acceptable on calculator pages?
- **What we did pending the ruling:** Exact hypothetical label applied; examples away from apply links.
- **Rows waiting (3):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `CAL-0034` | /home-affordability-calculator/ | body copy | Hypothetical example, not an offer. Actual rates, costs and payments vary. Gross income of $8,000 a month at a 43% debt-to-income limit allows $3,440 a month for all debts. Subtract $500 in car and student loan payments  |
| `CAL-0072` | /va-funding-fee-calculator/ | body copy | Hypothetical arithmetic on VA's chart, not an offer of credit. A first-use purchase with a $300,000 base loan and less than 5% down: $300,000 × 2.15% = $6,450, and the financed loan becomes $306,450. Put 5% down on the s |
| `CAL-0142` | /points-vs-lender-credit-calculator/ | body copy | Hypothetical example. Offer A costs $3,000 more at closing than Offer B, and its monthly principal and interest is $50 lower: $3,000 ÷ $50 = 60 months. Keep the loan longer than five years and Offer A costs less; sell or |

---

## C6: Attributed down-payment figure in the Freddie Mac PMMS description

- **Basis:** "excellent credit and 20% down" describes Freddie Mac's survey borrower on /why-we-dont-publish-rates/.
- **Question for counsel:** Is the attributed PMMS description acceptable on the rate-policy page?
- **What we did pending the ruling:** Attributed to Freddie Mac; flagged.
- **Rows waiting (1):**

| Row | Page | Element | Copy as it would ship (flag removed) |
|---|---|---|---|
| `RHT-0303` | /why-we-dont-publish-rates/ | answer block | H2: Where can I see today's average mortgage rates? \|\| Answer: For a national benchmark, Freddie Mac publishes its Primary Mortgage Market Survey every Thursday. It describes a borrower with excellent credit and 20% down |

---

## C7: Reviews and testimonials

- **Basis:** Reviews naming other originators without NMLS IDs (guide 7.5); reviews with rate language (FTC 16 CFR 255.1, F18).
- **Question for counsel:** Do state rules require NMLS IDs beside reviews that name an originator? Confirm the removals of rate-language reviews.
- **What we did pending the ruling:** The auditors' removals stand; no review with rate language is republished.
- **Rows waiting (0):**

_No row is blocked; the interim handling above ships._

---

## C8: Recordkeeping for approved copy (Regulation N, 24 months)

- **Basis:** All changes in this release.
- **Question for counsel:** Confirm the retention approach.
- **What we did pending the ruling:** Keep MASTER-CHANGES.csv, brand-fixes.csv and the approved files with approval dates.
- **Rows waiting (0):**

_No row is blocked; the interim handling above ships._

---

## C9: "No credit pull to talk" and the point where /start/ pulls credit

- **Basis:** Accuracy of the friction lines (also owner decision N1).
- **Question for counsel:** Confirm both lines once Align states the pull point.
- **What we did pending the ruling:** Talk friction line ships; the apply friction line waits for N1.
- **Rows waiting (0):**

_No row is blocked; the interim handling above ships._

---

## C10: Third-party savings claims (Polygon Research) on city pages

- **Basis:** A savings claim from a third-party study on Lake Orion and Rochester Hills pages.
- **Question for counsel:** May the claim be used on Learn content, and with what qualification?
- **What we did pending the ruling:** Removed from the city pages now (ships); reuse only after counsel.
- **Rows waiting (0):**

_No row is blocked; the interim handling above ships._

---

## F7 scope: Government non-affiliation line on city pages

- **Basis:** City pages name FHA a median of 4 times.
- **Question for counsel:** Confirm city pages are in F7 scope (we ship the line now as the conservative default; counsel may narrow).
- **What we did pending the ruling:** Shipped in the shared city disclaimer (CTY-N004).
- **Rows waiting (0):**

_No row is blocked; the interim handling above ships._
