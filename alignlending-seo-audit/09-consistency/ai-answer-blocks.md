# AI answer blocks: top 15 money pages (plus 3 Learn owner pages)

SEO & AI-search impact editor, Consistency Team · 2026-11-16 · Companion to `seo-ai-review.md` and `seo-ai-fixes.csv`.

**How to use this file.** The core-page teams already wrote most question-H2 answers for these pages, and most meet the 40–60-word rule (automated check of the five core-page change files: 292 of 334 proposed question headings on 50 money pages and tools have a 40–60-word answer; 25 have no answer text, 13 are under 40 words and 4 are over 60; see `seo-ai-review.md` §4). This file does **not** rewrite those. For each page it gives:

1. **Use as written**: the team rows that already pass (with any auditor correction applied).
2. **Entity line**: the exact string to place on the page. The canonical sentence (guide §1) goes once per page, in the "Why Align" section or the reviewer/author box. Above the fold uses the short form.
3. **New or replacement blocks**: exact final text for every question heading that is missing an answer, runs outside 40–60 words, or breaks a KNOWN-CORRECTIONS rule. Word counts are in brackets.
4. **Quotable facts**: one fact per sentence, with number, place, period and source, for a "Key facts" box or the body. Use only these or the team's sourced figures.
5. **FAQ set**: real questions from GSC and the PAA bank (`05-content-keywords/paa-question-bank.csv`). The visible FAQ must match `FAQPage` JSON-LD word for word.
6. **Schema**: what the page needs, per the spec in `seo-ai-review.md` §5.

**Rules applied to every block.** The first sentence restates the subject and answers it; the second gives the deciding number or rule with its source; the third, where useful, gives the Michigan or Align specific. No CTA inside a block, no rate, APR or payment, and no down-payment percentage on a money page (F20). Fee schedules are flagged `[COMPLIANCE REVIEW]`. Government-program pages carry the non-affiliation line (F7). MSHDA wording follows F1/F2. Anything not verified in this project is tagged `[VERIFY]`. Copy that describes how Align works is subject to Align approval.

**Standard strings used below**

- Canonical entity sentence (guide §1, verbatim): "Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas."
- Short form (guide §1): "Align Lending, an independent Michigan mortgage broker in Waterford"
- Samantha line (guide §1): "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301"
- Government non-affiliation line (shared loan-card component, corrections-core-pages-A): "Align Lending is not acting on behalf of or at the direction of FHA, HUD, USDA or the VA, and is not affiliated with or endorsed by any government agency."
- MSHDA line (F2 default, until D3 is decided): "Samantha explains the MSHDA programs and, if one fits, refers you to a participating lender."

---

## 1. Home: `/`

**Owns:** mortgage broker, Michigan mortgage broker, mortgage lender, home loans, near-me (with the GBP).
**Use as written:** `03-core-pages/refinance-home-trust-changes.csv` rows 12, 13, 29, 30, 31, 32, 33 (with corrections-core-pages-A row 33). H1 per corrections-core-pages-A row 5: "Michigan Mortgage Broker: One Application, Multiple Wholesale Lenders".
**Entity line:** canonical sentence as the first sentence of the "Why Michigan buyers and homeowners choose Align Lending" section, followed by the Samantha line in "Meet Samantha Shelton".

**Replacement and new blocks**

### H3: How is Align Lending paid? (replaces row 28; D5 is open)
> Align Lending is paid for arranging your loan, and the amount and who pays it appear on your Loan Estimate and Closing Disclosure. Federal rules in 12 CFR 1026.36(d) bar a loan originator's pay from changing with your interest rate or other loan terms. A first conversation with Samantha needs no application and no credit pull. [56]

Why: row 28 uses the "paid by the lender, not by a fee you pay Align" sentence, which guide §10.1 marks **Verify** (D5). AI engines lift FAQ answers verbatim, so an unverified absolute claim would become the quoted answer.

### H3: What is the downside of using a mortgage broker? (PAA)
> A broker can offer only the loans of the wholesale lenders it works with, so some lenders' retail-only programs are out of reach. The broker's compensation is part of the loan's cost and appears on your Loan Estimate. Ask which lenders a broker compares, then read each Loan Estimate line by line, as you would with any lender. [58]

### H3: Can I use a Michigan mortgage broker who is not in my town? (GSC near-me cluster, 681 impressions)
> Yes. A mortgage broker licensed in Michigan can arrange a loan for a home anywhere in the state, and most of the work happens by phone, text, video and secure upload. Align Lending, NMLS #2041154, works from one office at 2625 Pontiac Lake Road in Waterford, and office visits are by appointment. [52]

**Quotable facts**
- Align Lending LLC, NMLS #2041154, is licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas (NMLS Consumer Access).
- Align Lending was founded in August 2020 and has one office, at 2625 Pontiac Lake Road, Waterford, MI 48328 (`/licensing/`).
- Align Lending is rated 5.0 on Google across 123 reviews (count as of November 15, 2026; re-check monthly, guide §7.7).
- A $300,000 Michigan home at 36.0 mills, the 2025 statewide median homestead rate in Align's 2026 Uncapping Study, carries about $5,400 a year in property tax after the sale (planning estimate; `/research/michigan-property-tax-uncapping-study/`).

**FAQ set (visible = schema):** How is Align Lending paid? · Is it better to use a mortgage broker or a bank? · What is the downside of using a mortgage broker? · Does it cost anything to talk to a mortgage broker? · Can a mortgage broker get me a lower rate? · When should I talk to a mortgage broker? · Can I use a Michigan mortgage broker who is not in my town? · Where is Align Lending licensed?

**Schema:** Organization + FinancialService (one node, `@id` #organization), Person (#samantha-shelton), WebSite + SearchAction, FAQPage. No AggregateRating, no openingHours (review §5).

---

## 2. Purchase hub: `/purchase/`

**Owns:** buying a home in Michigan, Michigan home loan options.
**Use as written:** `purchase-changes.csv` rows 10, 17, 18, 19, 24, 25, 26, 28 (row 25 with the F1/F2 corrections in corrections-core-pages-A).
**Entity line:** above the fold, row 6 already opens with the short form. Add the canonical sentence once, in the "What happens on a first call with Samantha?" section.

**Replacement block**

### FAQ: Who pays transfer tax when you buy a house in Michigan? (replaces row 27, so the hub and the transfer tax calculator give one answer)
> Usually the seller. Michigan's state transfer tax is $3.75 and the county tax $0.55 for each $500 of the sale price, and state law makes the seller liable for both, though a purchase agreement can assign the cost differently. Some sellers of a principal residence qualify for a state exemption. [VERIFY: MCL 207.502 and 207.523; Michigan Treasury SRETT page] [50]

Why: row 27 says "by custom", while `calculators-research-changes.csv` row 111 says "by law". Two different answers on two pages weaken the citation for the AI prompt "What is the Michigan transfer tax and who pays it?" (Align is absent on all four engines today).

**Quotable facts**
- The 2026 conforming loan limit is $832,750 for a one-unit home in every Michigan county (FHFA; 2027 limits expected late November 2026).
- The 2026 FHA loan limit for a one-unit home is $541,287 across Michigan (HUD; date-stamp and update when HUD publishes 2027 limits).
- MSHDA's MI Home Loan sales price limit is $566,355 statewide after June 1, 2026 (MSHDA).
- After closing, Michigan buyers file the Property Transfer Affidavit (Form 2766) within 45 days and the Principal Residence Exemption (Form 2368) by June 1 or November 1 (Michigan Treasury).

**FAQ set:** What credit score do you need to buy a house in Michigan? · Does Michigan have a first-time homebuyer program? · Should I talk to a lender before a real estate agent? · Who pays transfer tax when you buy a house in Michigan? · How long does it take to buy a house in Michigan?

**Schema:** WebPage, BreadcrumbList, CollectionPage + ItemList of the purchase pages, Service (provider = #organization, areaServed Michigan), FAQPage.

---

## 3. First-Time Homebuyer: `/purchase/first-time-homebuyer/`

**Owns:** first time home buyer Michigan, first-time home buyer loans in Michigan (the learn grants article owns the "programs/grants" list query; see `query-ownership-map.csv`).
**Use as written:** `purchase-changes.csv` rows for the H2s "How do I buy my first house in Michigan?", "Who counts as a first-time homebuyer in Michigan?", "What credit score do you need…", "How much do you need saved…", "What happens, in order…", "Which loans should first-time buyers compare?", "Which Michigan forms do you file after closing?", with every First-Generation reference removed or rewritten per corrections-core-pages-A (F1).
**Entity line:** short form in the subhead; canonical sentence in the closing "Talk with Samantha" section.

**New block**

### H2: How much income do you need to buy a house in Michigan? (PAA salary cluster: 14 questions in 9 of 15 seeds)
> There is no single number, because lenders weigh your debt-to-income ratio, not income alone. Align's Michigan Mortgage Market Report found a median income of $91,000 among 2025 Michigan home-purchase borrowers, on a median home value of $285,000. Your own number depends on your debts, savings, property taxes and loan type. [VERIFY: both medians against the report table] [50]

Link the new post `/learn/income-needed-to-buy-a-house-michigan/` (blog-plan #8) from the next sentence, and `/home-affordability-calculator/`.

**Quotable facts**
- MSHDA's MI 10K is a deferred down payment loan of up to $10,000 that must be paired with an MI Home Loan and requires a 640 credit score (MSHDA).
- MSHDA's MI First-Generation Down Payment Assistance program is closed: its funds are exhausted and there is no waitlist (MSHDA program page, checked November 15, 2026; F1).
- A first-time homebuyer is usually anyone who has not owned a principal residence in the past three years (HUD definition, followed by MSHDA).
- MSHDA line (F2): "Samantha explains the MSHDA programs and, if one fits, refers you to a participating lender."

**FAQ set:** Who counts as a first-time homebuyer in Michigan? · How much income do you need to buy a house in Michigan? · What credit score do you need to buy your first home in Michigan? · Which Michigan forms do you file after closing?

**Schema:** Article (author Person #samantha-shelton), Service, BreadcrumbList, FAQPage. Add the government non-affiliation line where FHA, VA or USDA loans are named.

---

## 4. Down Payment Assistance: `/purchase/down-payment-assistance/`

**Owns:** down payment assistance Michigan (MSHDA program-name queries go to `/learn/mshda-mi-home-loan/` while D3 is open).
**Use as written:** `purchase-changes.csv` rows 356, 360, 366, 367, 368, 369, 370, 380, each with the F1/F2 corrections in corrections-core-pages-A (First-Generation is closed; Align refers to a participating lender).
**Entity line:** canonical sentence in the closing section; MSHDA line directly under the program list.

**New block**

### FAQ: What is the difference between a grant and down payment assistance? (PAA, mapped to this page)
> A grant is one kind of down payment assistance. Down payment assistance is any program that helps with the down payment or closing costs: grants you never repay, forgivable loans that are erased if you stay long enough, and deferred or repayable second loans. MSHDA's MI 10K is a deferred loan, not a grant, so it is repaid later. [59]

**Quotable facts**
- MSHDA's MI 10K provides up to $10,000, pairs only with an MI Home Loan, and requires a 640 credit score (MSHDA).
- MI 10K is repaid when the home is sold or refinanced, the first mortgage is paid off, or the home stops being your principal residence (MSHDA MI 10K page, confirmed by the purchase auditor).
- MSHDA's MI First-Generation Down Payment Assistance program is closed as of November 15, 2026 (MSHDA; F1).
- The MI Home Loan sales price limit is $566,355 statewide after June 1, 2026 (MSHDA).

**FAQ set:** What down payment assistance programs are available in Michigan? · Who qualifies for MSHDA down payment assistance? · What is the difference between a grant and down payment assistance? · Does down payment assistance have to be paid back? · Is the $25,000 first-generation program still open? (row 379 as rewritten by the auditor)

**Schema:** Article (author Samantha), BreadcrumbList, FAQPage; `mentions` GovernmentOrganization "Michigan State Housing Development Authority". Government non-affiliation line under the program list.

---

## 5. Refinance hub: `/refinance/`

**Owns:** refinance home loan, refinance mortgage Michigan. `/learn/types-of-refinancing/` keeps "refinancing options" (GSC 421 @11.9).
**Use as written:** `refinance-home-trust-changes.csv` rows 63, 74, 75, 76.
**Entity line:** short form in the subhead (row 54 already says "We compare refinance and home equity options from multiple wholesale lenders"); canonical sentence in the FAQ intro.

**Missing blocks (rows 72 and 73 keep their headings but have no answer text)**

### H3: What does a refinance cost, and where do I see it?
> Refinance closing costs usually include lender charges, an appraisal, title insurance and recording fees, plus prepaid interest and escrow deposits. Every lender must list them on a Loan Estimate within three business days of your application, so compare Section A, lender credits and total closing costs side by side. In Michigan, a refinance does not uncap your taxable value. [59]

### H3: What are the steps to closing?
> A refinance usually runs in five steps: application with documents, the Loan Estimate, the appraisal or an appraisal waiver, underwriting, and closing. You receive the Closing Disclosure at least three business days before you sign. On a home you live in, a refinance with a new lender usually gives you three business days to cancel after signing. [57]

**Quotable facts**
- A Michigan refinance is not a transfer of ownership, so it does not uncap the home's taxable value (MCL 211.27a).
- Lenders must deliver the Loan Estimate within three business days of an application and the Closing Disclosure at least three business days before closing (12 CFR 1026.19).
- FHA streamline and VA IRRRL refinances generally require 210 days and six payments on the current loan (HUD Handbook 4000.1; VA) [VERIFY on hud.gov and va.gov].
- Michigan lenders made 66,247 home equity loans and lines in 2025, up 13.7% (Align Lending, Michigan Mortgage Market Report, 2025 HMDA data).

**FAQ set:** What does a refinance cost, and where do I see it? · What are the steps to closing? · Will refinancing hurt my credit score? · How soon can I refinance after buying? · Can Align refinance a home outside Michigan?

**Schema:** WebPage, BreadcrumbList, Service ("Mortgage refinance", provider #organization, areaServed the six states), FAQPage. No rate, APR or term properties.

---

## 6. Cash-out vs. home equity: `/refinance/cash-out-vs-home-equity/`

**Owns:** cash-out refinance vs home equity loan vs HELOC; borrowing against a paid-off home (blog-plan #74–75).
**Use as written:** `refinance-home-trust-changes.csv` rows 105, 110, 111, 115, 116, 117, 118.
**Entity line:** canonical sentence above the comparison table's source line.

**Missing block (row 108 has a heading and no answer)**

### H2: What decides which structure fits?
> Four things decide it: the rate on your current mortgage, how much you need, whether you need it at once or over time, and how long you will keep the home. A low first-mortgage rate usually favors a home equity loan or HELOC. A cash-out refinance fits when you would replace the first mortgage anyway. [55]

**New block**

### FAQ: How is a $50,000 home equity loan different from a $50,000 HELOC? (PAA, mapped to this page)
> A $50,000 home equity loan pays the full amount at closing, and you repay the whole balance on a set schedule, usually at a fixed rate. A $50,000 HELOC is a limit you draw against as needed, paying interest only on what you use, usually at a variable rate that can change over time. [54]

**Quotable facts**
- None of the three options uncaps a Michigan home's taxable value, because borrowing is not a transfer of ownership (MCL 211.27a).
- In Align's 2025 Michigan HMDA data, HELOC applications were denied 30.1% of the time and home equity loan applications 27.3%, against 15.5% for home purchases (Align Lending, Michigan Mortgage Market Report) [VERIFY: figures against the report table].
- Michigan lenders made 66,247 home equity loans and lines in 2025, up 13.7% (same report).

**FAQ set:** Do I have to touch my first mortgage? · Can I change my mind later? · Does a cash-out refinance or home equity loan raise my Michigan property taxes? · Is cash-out refinance money taxable? · How is a $50,000 home equity loan different from a $50,000 HELOC?

**Schema:** Article, BreadcrumbList, Service, FAQPage. The comparison table needs units and a source line under it (guide §8.3).

---

## 7. Break-even review: `/refinance/break-even-review/`

**Owns:** is refinancing worth it, refinance break-even, when to refinance. The refinance calculator keeps "mortgage refinance calculator".
**Use as written:** `refinance-home-trust-changes.csv` rows 169, 172, 176, 177, and row 171 as rewritten by corrections-core-pages-A (labelled "Hypothetical example, not an offer…").
**Entity line:** canonical sentence in the closing section.

**Missing block (row 173 has a heading and no answer)**

### H3: When should you not refinance?
> Skip a refinance when you expect to sell or refinance again before the break-even month, when a new long term would raise your total interest, or when the closing costs would be added to a balance you are trying to shrink. If the honest answer is to keep the loan you have, Samantha says so. [55]

**Quotable facts**
- Break-even in months equals the refinance's total cost (closing costs and points, minus lender credits) divided by the monthly savings (guide definition; show the worked example only with the F12 label).
- Samantha's definition, verbatim from the quote bank (guide §10.3): "If you're making a change to your mortgage and there are costs involved, how long does it take before the benefit of that change has made up for those costs? That's the idea."
- A refinance does not uncap Michigan taxable value (MCL 211.27a).

**FAQ set:** How do I know whether refinancing is worth it? · What is the 2% rule for refinancing? · When should you not refinance? · Is a one-point rate drop worth refinancing? · Does refinancing restart my loan term?

**Schema:** Article, BreadcrumbList, Service, WebApplication for the break-even tool (`offers.price` 0, no default rate), FAQPage.

---

## 8. FHA loans: `/product-loans/fha-loans/`

**Owns:** Michigan FHA loans, FHA lenders (GSC "michigan fha loans" 67 @12.2). `/learn/fha-loan-limits/` keeps national limit queries; `/loan-limits/` keeps county lookups.
**Use as written:** `products-a-changes.csv` FHA rows except the two below; meta per corrections-core-pages-B row 44.
**Entity line:** canonical sentence in "Why Michigan buyers choose FHA".

**Replacement blocks (F20: no down-payment percentages on money pages)**

### H2: What are the FHA loan requirements in Michigan? (replaces row 49)
> HUD sets FHA's credit floor at 580 for its lowest down payment tier and at 500 with a larger down payment, and lenders can require more. The home must be your primary residence, the loan must fit the county limit ($541,287 across Michigan for 2026), and the appraisal must meet HUD's property standards. [53]

### FAQ: Can I get an FHA loan with a 500 credit score? (PAA, mapped to this page)
> Possibly. HUD allows scores from 500 to 579 with a larger down payment than its minimum, but many lenders set their own floor at 580 or higher. A broker can check which wholesale lenders accept a lower score for your file. FHA also sets waiting periods after a bankruptcy or foreclosure, so recent credit events matter too. [57]

**Visible disclaimer (required, F7):** government non-affiliation line, directly under the requirements answer.

**Quotable facts**
- The 2026 FHA loan limit for a one-unit home is $541,287 across Michigan (HUD; update when the 2027 limits are published).
- FHA loans are insured by HUD and made by FHA-approved wholesale lenders (guide §6 approved wording).
- Since November 16, 2025, Fannie Mae's DU no longer applies a fixed 620 minimum for conventional loans, which changes the FHA-or-conventional comparison for scores in the 600s (Fannie Mae SEL-2025-09; F3).

**FAQ set:** What are the FHA loan requirements in Michigan? · Can I get an FHA loan with a 500 credit score? · What would disqualify a home from an FHA loan? (answer in one sentence and link `/learn/fha-loans/`) · How much is FHA mortgage insurance, and when does it end? [COMPLIANCE REVIEW] · Is FHA or conventional better for me?

**Schema:** WebPage, BreadcrumbList, MortgageLoan (`areaServed` State Michigan, provider #organization; no interestRate, APR, loanTerm or amount), FAQPage.

---

## 9. VA loans: `/product-loans/va-loans/`

**Owns:** VA loans Michigan, Michigan VA loan eligibility. The fee calculator owns the funding-fee chart (K2); `/learn/how-to-qualify-for-va-loan/` owns national "VA loan requirements".
**Use as written:** `products-a-changes.csv` VA rows except rows 98 and 103.
**Entity line:** canonical sentence in "Why Michigan buyers choose VA".

**Replacement blocks**

### H2: What does a VA lender check? (row 98 has a 19-word table note, not an answer)
> A VA lender checks four things: your Certificate of Eligibility, which proves your service and entitlement; your credit and debts, including VA's residual income test; the home, which must pass a VA appraisal and be your primary residence; and the funding fee, unless you are exempt. Each wholesale lender also sets its own credit minimum. [55]

### H3: Do I need a down payment for a VA loan? (row 103 is 83 words; trimmed and percentage removed)
> Not with full entitlement, as long as the price is at or below the appraised value. With reduced entitlement on a larger loan, lenders usually ask for a down payment to cover the part of the loan your remaining entitlement does not guarantee. Samantha reads your entitlement from your Certificate of Eligibility. [52]

### FAQ: Can you buy a $2 million house with a VA loan? (PAA, mapped to this page)
> It can be possible with full entitlement. Since 2020 VA has set no loan limit for borrowers with full entitlement, but each lender sets its own maximum loan amount, and you still have to qualify for the payment. With reduced entitlement, the county limit, $832,750 across Michigan for 2026, shapes any down payment. [VERIFY: VA.gov loan limits page] [53]

**Visible disclaimer (required, F7):** government non-affiliation line under the eligibility answer.

**Quotable facts**
- Michigan exempts the principal residence of a veteran with a 100% service-connected disability rating, or individual unemployability, from property tax; the exemption is filed each year with the local assessor (MCL 211.7b) [VERIFY filing rules on michigan.gov/treasury].
- The VA funding fee schedule in effect since April 7, 2023 is on `/va-funding-fee-calculator/` (link it; do not repeat the chart here, K2).

**FAQ set:** Do I need a down payment for a VA loan? · Can you buy a $2 million house with a VA loan? · Who is exempt from the VA funding fee? (one sentence + link to the fee calculator) · What's the downside of a VA loan? · How many VA loans can you have at one time?

**Schema:** WebPage, BreadcrumbList, MortgageLoan (State Michigan; remove the `Offer` node), FAQPage.

---

## 10. USDA loans: `/product-loans/usda-loans/`

**Owns:** USDA loans Michigan, USDA Rural Development loans in Michigan, Michigan USDA loan broker. The learn article keeps national "usda eligibility" and "usda rural development loan" (08 K1).
**Use as written:** `products-a-changes.csv` USDA rows (including "Who qualifies for a USDA loan in Michigan?"), except rows 127 and 141; meta per corrections-core-pages-B row 133.
**Entity line:** canonical sentence in "Why Michigan buyers choose USDA".

**Replacement blocks**

### ATF subhead (replaces row 127; no fee percentages above the fold)
> A USDA loan fits Michigan households buying in an eligible rural or small-town area with income at or under the county limit, $122,800 for 1 to 4 people in most counties for FY2026. USDA allows financing with no down payment and charges a guarantee fee. Samantha checks the address and income before you rely on either. [56]

### H2: What else does a USDA lender check? (row 141 is a 15-word table note)
> Beyond the address and income, a USDA lender checks your credit and debts, starting from USDA's guideline ratios of 29% for housing and 41% for all debts. It also checks that the home is in sound condition and will be your primary residence. Lenders can approve higher ratios when the file shows strengths such as savings. [56]

**Visible disclaimer (required, F7):** government non-affiliation line under the eligibility answer.

**Quotable facts**
- USDA's FY2026 moderate income limit is $122,800 for 1 to 4 people in most Michigan counties (USDA RD, HB-1-3555 Appendix 5) [update when FY2027 limits post].
- USDA-guaranteed loans were 0.7% of Michigan home-purchase loans in 2025 (Align Lending, Michigan Mortgage Market Report) [VERIFY against the report table].
- The guarantee fee schedule (upfront and annual) is explained on `/learn/usda-loan-basics/` [COMPLIANCE REVIEW for any percentage shown here].

**FAQ set:** Who qualifies for a USDA loan in Michigan? · How do I check whether an address is USDA eligible? (link the tool) · Can I get a USDA loan if I make $100,000? (link the tool's answer) · Is it better to get a USDA loan or a conventional loan?

**Schema:** WebPage, BreadcrumbList, MortgageLoan (name "USDA Rural Development Guaranteed Loan", State Michigan), FAQPage.

---

## 11. Conventional loans: `/product-loans/conventional-loans/`

**Owns:** Michigan conventional loans. `/learn/conventional-loans/` owns national "conventional loan guidelines" (2,900/mo gap).
**Use as written:** `products-a-changes.csv` conventional rows except rows 180 and 186; subhead and meta with the F3 (620) and F20 fixes in corrections-core-pages-B.
**Entity line:** canonical sentence in "Why Michigan buyers choose conventional".

**Replacement blocks**

### H2: What does a conventional lender check? (row 180 is a 17-word table note)
> A conventional lender checks your credit through Fannie Mae or Freddie Mac underwriting, your debt-to-income ratio, your down payment and reserves, the appraisal, and the loan size against the $832,750 conforming limit for 2026. Fannie Mae's system no longer applies a fixed 620 minimum score, though many lenders keep their own floor. [52]

### H3: How much do I need to put down on a conventional loan? (row 186 is 38 words and states percentages)
> Less than many buyers expect. Fannie Mae and Freddie Mac allow low down payment conventional loans for first-time buyers, and for income-eligible buyers through HomeReady and Home Possible. Borrowing no more than 80% of the home's value avoids mortgage insurance from the start. Our conventional loans guide lists each program's minimum. [51]

Link "conventional loans guide" to `/learn/conventional-loans/`, where the percentages live (F20).

### FAQ: Do I have to pay PMI on a conventional loan? (PAA)
> Only if you borrow more than 80% of the home's value. You can ask to cancel PMI once your balance reaches 80% of the original value, and it ends automatically at 78% if your payments are current, under the Homeowners Protection Act. Fannie Mae and Freddie Mac also allow removal based on a new appraisal after a waiting period. [VERIFY: Fannie Mae Selling Guide B-8.1-04] [59]

**Quotable facts**
- The 2026 conforming loan limit is $832,750 for a one-unit home in every Michigan county (FHFA).
- Fannie Mae removed DU's fixed 620 minimum for case files created on or after November 16, 2025 (Fannie Mae SEL-2025-09).
- PMI can be cancelled on request at 80% of original value and ends automatically at 78% (Homeowners Protection Act; CFPB).

**FAQ set:** What does a conventional lender check? · How much do I need to put down on a conventional loan? · Do I have to pay PMI on a conventional loan? · When does PMI actually come off a conventional loan? · Is FHA or conventional better for me?

**Schema:** WebPage, BreadcrumbList, MortgageLoan (State Michigan; drop `amount.maxValue` or date it, since 2027 limits are imminent), FAQPage.

---

## 12. HELOC: `/product-loans/heloc/`

**Owns:** Michigan HELOC. `/learn/home-equity-line-of-credit-heloc/` owns "what is a HELOC".
**Use as written:** `products-b-changes.csv` HELOC rows 4, 10, 11, 15, 16, 20, 21, 22, 23, 24, 28 (14 of 15 question answers pass).
**Entity line:** canonical sentence in "How does Align compare HELOC offers?".

**New block**

### FAQ: What disqualifies you from a HELOC? (PAA; keyword gap 880/mo; the full answer lives in the new post, blog-plan #2)
> The usual reasons are too little equity left after the line, a credit score below the lender's floor, debt-to-income above its limit, or a property or title issue the lender will not take. In Align's 2025 Michigan HMDA data, 30.1% of HELOC applications were denied, against 15.5% for home purchases. [VERIFY: figures against the report table] [50]

**Quotable facts**
- Borrowing against a Michigan home with a HELOC does not uncap its taxable value (MCL 211.27a; keep the products-B citation wording).
- Michigan lenders made 66,247 home equity loans and lines in 2025, up 13.7% (Align Lending, Michigan Mortgage Market Report).

**FAQ set:** What is a HELOC? · What do you need to qualify for a HELOC in Michigan? · What disqualifies you from a HELOC? · What does a HELOC cost to open and keep? · What are the risks of a HELOC?

**Schema:** WebPage (reviewedBy only after the K6 decision), BreadcrumbList, MortgageLoan ("Home equity line of credit", State Michigan), FAQPage.

---

## 13. USDA eligibility check: `/usda-eligibility-check/`

**Owns:** USDA eligibility check, USDA eligibility Michigan, USDA income limits Michigan, "is my address USDA eligible". It does **not** take national "usda eligibility" from the learn article.
**Use as written:** `calculators-research-changes.csv` rows 74, 75, 76 and the ATF intro row; the trust line without a reviewer until K6 is decided.
**Entity line:** short form in the trust line under the tool: "Built by Align Lending, an independent Michigan mortgage broker in Waterford. USDA makes the final eligibility decision."

**New blocks (the team outline has label H2s only, such as "How the USDA check works")**

### H2: Who is eligible for a USDA loan in Michigan? (place directly under the tool)
> Eligibility has three parts. The home must sit in a USDA-eligible area on USDA's map, household income must be at or under the county limit, $122,800 for 1 to 4 people in most Michigan counties for FY2026, and the home must be your primary residence. Lenders then review your credit and debts. [52]

### FAQ: Can I get a USDA loan if I make $100,000? (PAA, mapped to this page)
> Often, in Michigan. The limit counts the income of every adult in the household, not only the borrowers, and in most Michigan counties it is $122,800 for 1 to 4 people for FY2026, with a higher limit for larger households. Some counties differ, so check yours in the income-limit table on this page. [53]

**Visible disclaimer (required, F7):** government non-affiliation line under the result.

**Quotable facts**
- USDA's FY2026 moderate income limit is $122,800 for 1 to 4 people in most Michigan counties (USDA RD, HB-1-3555 Appendix 5).
- Property eligibility is set by address on USDA's own map (eligibility.sc.egov.usda.gov), not by city name.

**FAQ set:** Who is eligible for a USDA loan in Michigan? · What is the USDA income limit in Michigan? · Can I get a USDA loan if I make $100,000? · How do I know if an address is USDA eligible? · Does USDA count my roommate's income?

**Schema:** WebApplication (`applicationCategory` FinanceApplication, `offers.price` 0, creator #organization), BreadcrumbList, FAQPage, Dataset for the county income-limit table.

---

## 14. VA funding fee calculator: `/va-funding-fee-calculator/`

**Owns:** VA funding fee calculator, calculate VA funding fee, VA funding fee chart, how much is the VA funding fee (08 K2; blog-plan #71–72).
**Use as written:** `calculators-research-changes.csv` ATF intro, the "VA funding fee chart for 2026" table and its answer capsule [COMPLIANCE REVIEW, as the team flagged]. Change every "checked against VA.gov on November 15, 2026" to the date Align actually checks VA.gov (F17; va.gov was blocked in this session).
**Entity line:** short form in the trust line under the tool.

**New block**

### FAQ: Who is exempt from the VA funding fee?
> You do not pay the VA funding fee if you receive VA disability compensation, are eligible for it but receive retirement or active-duty pay instead, are a surviving spouse receiving Dependency and Indemnity Compensation, or are an active-duty service member with a Purple Heart. A disability rating that arrives after closing can make you eligible for a refund. [VERIFY: VA.gov funding fee page] [58]

**Visible disclaimer (required, F7):** government non-affiliation line under the result.

**Quotable facts**
- The VA funding fee chart in the table applies to loans closed on or after April 7, 2023 (VA; date the "last checked" line only with a real check).
- An IRRRL (VA streamline refinance) carries a 0.5% funding fee unless you are exempt (VA) [COMPLIANCE REVIEW].

**FAQ set:** How much is the VA funding fee in 2026? · Who is exempt from the VA funding fee? · Can the seller pay the VA funding fee? · Is the VA funding fee tax deductible? · What if my disability rating comes through after I close?

**Schema:** WebApplication, BreadcrumbList, FAQPage.

---

## 15. Michigan property tax calculator: `/michigan-property-tax-calculator/`

**Owns:** Michigan property tax calculator (9,900/mo gap), property taxes in Michigan, Michigan millage rates. `/learn/michigan-taxable-value/` owns the uncapping definition; the research study is the citable data source.
**Use as written:** title and H1 per 08 K3 ("Michigan Property Tax Calculator: Estimate After You Buy"; "Michigan Property Tax Calculator: Estimate Your Tax After You Buy"), the ATF intro and the Dataset row in `calculators-research-changes.csv`; the FAQ answer "Are Michigan property taxes based on the purchase price?" with the F16 wording fix in `seo-ai-fixes.csv`.
**Entity line:** short form in the trust line; cite "Align Lending's 2026 Michigan Property Tax Uncapping Study" by name.

**New blocks (the unique-data answer is missing from the outline)**

### H2: How much will my property taxes go up after I buy a house in Michigan? (place directly under the tool; same block on `/learn/michigan-taxable-value/` and the research page)
> Usually, because of uncapping. The year after a Michigan home sells, its taxable value resets to the state equalized value, half of the assessor's market value, not automatically half your price. In 2026 that reset raised a typical home's taxable value about 50.5%, from 37.0% in Monroe County to 91.7% in Charlevoix County (Align Lending, 2026 Uncapping Study). [58]

### FAQ: How much would property tax be on a $300,000 home in Michigan? (PAA, mapped to this page)
> About $5,400 a year at the statewide median, as a planning estimate. That assumes the state equalized value lands near half the price, or $150,000, taxed at 36.0 mills, the 2025 median homestead rate in Align's 2026 Uncapping Study: $150,000 × 36.0 ÷ 1,000. Your address's millage can be much higher or lower. [53]

### FAQ: Who files the Principal Residence Exemption after a sale?
> You do. The seller's exemption ends with the sale, so file Form 2368 with your local assessor: by June 1 to count for that year's summer levy, or by November 1 for the winter levy. Without it, your bill includes up to 18 mills of school operating tax that a principal residence does not pay. [55]

**Quotable facts**
- A typical Michigan home's taxable value rose about 50.5% the year after it sold in 2026, from 37.0% in Monroe County to 91.7% in Charlevoix County (Align Lending, 2026 Michigan Property Tax Uncapping Study).
- The 2025 statewide median homestead rate is 36.0 mills, about 1.8% of taxable value at sale (same study; F4).
- The Principal Residence Exemption deadlines are June 1 (summer levy) and November 1 (winter levy) (Michigan Treasury; F5).

**FAQ set:** How much will my property taxes go up after I buy a house in Michigan? · How much would property tax be on a $300,000 home in Michigan? · Are Michigan property taxes based on the purchase price? · Who files the Principal Residence Exemption after a sale? · Do disabled veterans pay property tax in Michigan?

**Schema:** WebApplication, BreadcrumbList, FAQPage, Dataset (2025 millage table, `isBasedOn` Treasury's 2025 Total Rates report).

---

## Appendix: answer boxes for the three Learn pages that own money queries

These pages hold the impressions (GSC page level: usda-loan-basics 10,182, lease-to-own 14,548, types-of-refinancing 421 on "refinancing options"). Each gets a 40–60-word answer box **before the first H2**, then one text link to the money page or tool. Today they open with 224–344 words and no next step.

### A1. `/learn/usda-loan-basics/` (keeps national "usda eligibility")
> A USDA loan is a mortgage guaranteed by USDA Rural Development for homes in eligible rural and small-town areas. Eligibility turns on three things: the address must be on USDA's eligibility map, household income must be at or under the county limit, and the home must be your primary residence. Lenders review credit and debts on top. [57]

Next line (text links): "Check an address for USDA" → `/usda-eligibility-check/#usda-check` · "USDA loans in Michigan" → `/product-loans/usda-loans/`. Add the government non-affiliation line at the end of the article. Replace the meta that says "subsidized rates as low as 1%" (F13, P0).

### A2. `/learn/lease-to-own-vs-rent-to-own-whats/` (first H2: "What is lease to own?")
> Lease to own is a rental agreement that gives you the option, not the obligation, to buy the home at an agreed price before the lease ends. You usually pay an upfront option fee, and part of each rent payment may count toward the purchase. Rent to own can obligate you to buy, so check which one you are signing. [60]

Next line: "Build my homebuyer game plan" → `/purchase/homebuyer-game-plan/#readiness` (not the Readiness Review, which is slated to merge) · "Compare renting and buying" → `/rent-vs-buy-calculator/#rent-buy`.

### A3. `/learn/types-of-refinancing/` (keeps "refinancing options")
> Most refinances fall into seven types, from rate-and-term and cash-out refinances to streamline refinances for FHA, VA and USDA loans. Each changes something different: the rate, the term, the balance or how closing costs are paid. Which one fits depends on your goal and how long you expect to keep the loan. [VERIFY: matches the seven types the page lists] [52]

Next line: "Calculate my break-even" → `/refinance/break-even-review/#break-even` · "refinance options in Michigan" → `/refinance/`.
