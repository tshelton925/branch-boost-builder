# Purchase section: core pages audit

**Scope:** `/purchase/` + 10 sub-pages and `/mortgage-process/` (12 pages) · **Team:** Core Pages, Purchase group · **Date:** 2026-11-15
**Data:** crawl of 2026-11-15 (`pages.jsonl`, `page_summary.csv`, `text/*.txt`, `inlinks.json`, `link_graph.json`), GSC via DataWise (90 days, property `sc-domain:alignlending.com`), DataForSEO People Also Ask (6 seeds, Michigan location 21031), Google SERP skim for 3 head queries, primary-source checks (FHFA, HUD, MSHDA, Michigan Treasury, VA).
**Constraint:** read-only. Everything below is a recommendation with exact replacement text. Nothing has been changed on the live site. Drafts describing how Align works are subject to Align approval.

## Summary

The purchase pages are well written, calm and specific, and almost entirely invisible in search. **The section averages 68/100 (D).** No page reaches B. The writing is not the problem. The problem is how the pages are labelled and wired together:

1. **The H1s are slogans, not topics.** 8 of 12 H1s contain none of the words people search for, and a ninth names only the audience ("You are not supposed to understand this yet", "You do not need to apologize for using a benefit you earned", "Buy it because the numbers work…"). In 90 days of GSC data there are **zero impressions** for "first time home buyer michigan", "down payment assistance michigan", "mshda" or "mi 10k". Michigan VA queries sit at positions 49–69.
2. **The Michigan facts live in the learn articles, not on the money pages.** `/learn/first-time-home-buyer-grants-and-programs/` (135 contextual inlinks) and `/learn/first-time-home-buyers/` carry the MSHDA rules, MI 10K terms, the First-Time Home Buyer Savings Program deadline (Dec 31, 2026) and Form 2368. Meanwhile `/purchase/down-payment-assistance/`, titled "Programs in Michigan", **names no Michigan program and links to no MSHDA page.**
3. **Two pages are one page.** Homebuyer Game Plan and Mortgage Readiness Review embed the same 8-question assessment, argue the same thesis ("call early") and answer synonym questions. They should merge.
4. **The internal link equity is lopsided.** Game Plan has 492 contextual inlinks. VA has 18, Mortgage Process 15, Self-Employed 22 and the hub 16. Inbound anchors are CTA phrases ("Review an investment property" ×100) rather than topics, and four key learn articles never link up to the page that converts.
5. **Compliance is mostly clean.** There are no rates, APRs or Reg Z trigger terms on any purchase page, and the rewrites keep it that way. Five things still need fixing: an unsourced speed claim ("under 14 days… to clear to close") on `/mortgage-process/`; MSHDA facts with no date stamp; one review edited from its Google original; the VA page missing the Samantha/NMLS trust line; and the open question of whether Align can actually originate MSHDA loans.

**What fixing it is worth:** the rewrites put the head query in every H1 and title. They add the Michigan program content that the SERP rewards: every top result for the two highest-value queries is a list of MSHDA and local programs. They also give each H2 a 40–60-word answer that AI engines can quote. The fixes are mostly copy and template changes (low effort). The one structural change is the Readiness → Game Plan merge.


## Section scorecard

| Page | Overall | Intent & H1 | Headings | ATF | CTA | Title/meta | Links | E-E-A-T | AI-search | Accuracy |
|---|---|---|---|---|---|---|---|---|---|---|
| [Purchase hub](https://alignlending.com/purchase/) | **74 C** | 84 | 72 | 72 | 78 | 70 | 68 | 74 | 60 | 88 |
| [First-Time Homebuyer](https://alignlending.com/purchase/first-time-homebuyer/) | **66 D** | 45 | 70 | 55 | 80 | 55 | 72 | 80 | 66 | 82 |
| [Homebuyer Game Plan](https://alignlending.com/purchase/homebuyer-game-plan/) | **69 D** | 50 | 62 | 68 | 74 | 60 | 85 | 80 | 70 | 85 |
| [Homebuying Budget Review](https://alignlending.com/purchase/budget-review/) | **69 D** | 55 | 76 | 62 | 74 | 55 | 80 | 80 | 68 | 86 |
| [Mortgage Readiness Review](https://alignlending.com/purchase/mortgage-readiness-review/) | **64 D** | 45 | 60 | 58 | 78 | 58 | 74 | 72 | 66 | 80 |
| [Self-Employed Homebuyer](https://alignlending.com/purchase/self-employed-homebuyer/) | **71 C** | 62 | 74 | 68 | 72 | 60 | 62 | 82 | 74 | 88 |
| [Buy Before You Sell](https://alignlending.com/purchase/buy-before-you-sell/) | **70 C** | 55 | 74 | 64 | 80 | 60 | 80 | 70 | 72 | 86 |
| [VA Homebuyer Plan](https://alignlending.com/purchase/va-homebuyer-plan/) | **63 D** | 45 | 66 | 52 | 78 | 50 | 60 | 76 | 68 | 88 |
| [Investment Property Financing](https://alignlending.com/purchase/investment-property-financing/) | **68 D** | 50 | 68 | 60 | 80 | 62 | 72 | 80 | 70 | 88 |
| [Renovation Financing](https://alignlending.com/purchase/renovation-financing/) | **68 D** | 50 | 76 | 62 | 72 | 58 | 70 | 82 | 70 | 86 |
| [Down Payment Assistance](https://alignlending.com/purchase/down-payment-assistance/) | **65 D** | 85 | 62 | 58 | 68 | 72 | 68 | 55 | 45 | 70 |
| [Mortgage Process](https://alignlending.com/mortgage-process/) | **71 C** | 72 | 72 | 78 | 76 | 74 | 58 | 66 | 66 | 70 |
| **Section average** | **68 D** | 58 | 69 | 63 | 76 | 61 | 71 | 75 | 66 | 83 |

Weights: Intent & H1 15%, Above-the-fold answer 15%, every other aspect 10%. Grades: A 90–100, B 80–89, C 70–79, D 60–69, F <60. Per-aspect rationales are in `scores-purchase.csv`.


## Information architecture verdict

**Do Budget Review, Mortgage Readiness Review and Homebuyer Game Plan compete or confuse? Two of them do.**

| Pair | Verdict | Evidence |
|---|---|---|
| Game Plan ↔ Readiness Review | **Compete. Merge.** | Same 8-question assessment (`#readiness`) on both pages. Same thesis: "You do not have to be ready to talk to us" vs "There is no such thing as calling too early". Synonym H2s: "What should I do before I buy a house?" vs "What should I do before applying for a mortgage?". Duplicate FAQs: "Am I too early to talk to somebody?" vs "How early is too early to call?". Both primary CTAs book the same Calendly. Inlinks split 492 / 64. |
| Game Plan ↔ Budget Review | **Distinct. Keep both.** | Game Plan already hands off to Budget Review ("What is the difference between what I qualify for and what I should spend?… The Homebuying Budget Review walks through it"). Budget Review has its own calculator and 145 contextual inlinks. Fix the keyword targeting only. |
| Budget Review ↔ `/home-affordability-calculator/` | **Overlap. Split by intent.** | The calculator's title is "How Much House Can I Afford?" and it works to the DTI limit. Budget Review works out the comfortable number. Give the calculator "calculator / DTI limit" and Budget Review "comfortably afford in Michigan", and cross-link them in body copy (today they meet only in a footer list). |
| First-Time Homebuyer ↔ Down Payment Assistance ↔ learn grants articles | **Confuse.** | The learn articles hold the Michigan program facts and outrank both money pages. Make DPA the program authority, make First-Time the persona landing page that summarises programs and links to DPA, and keep the learn articles national, linking up. |
| `/mortgage-process/` ↔ 4 learn process articles | **Dilute.** | `/learn/mortgage-loan-process/`, `/learn/home-buying-process/`, `/learn/buying-process/` (a near-duplicate of the previous one) and `/learn/home-buying/` all compete. None link to `/mortgage-process/`, which already ranks 1.9–2.8 for Michigan process and preapproval queries. |

**Recommended structure (no URL changes except one 301):**

```
/purchase/  Buying a Home in Michigan  (hub: routes by situation)
├── Stage pages (where am I in the process?)
│   ├── /purchase/homebuyer-game-plan/        get ready (absorbs Mortgage Readiness Review via 301 → #readiness)
│   ├── /purchase/budget-review/              how much can I comfortably afford
│   ├── /purchase/down-payment-assistance/    Michigan cash help (MSHDA authority page)
│   └── /mortgage-process/                    the steps (breadcrumb: Home › Buy a Home › Mortgage process)
└── Situation pages (who am I?)
    ├── /purchase/first-time-homebuyer/
    ├── /purchase/va-homebuyer-plan/
    ├── /purchase/self-employed-homebuyer/
    ├── /purchase/buy-before-you-sell/
    ├── /purchase/investment-property-financing/
    └── /purchase/renovation-financing/
```

The hub router lists 6 situations today. It should list 9: add VA, self-employed and down payment help, and drop Readiness once it is merged.

**Query ownership map** (one page per query cluster; everything else links to the owner):

| Query cluster (evidence) | Owner | Must link to owner |
|---|---|---|
| buying a home in Michigan; michigan home loan financing options (27 impr, pos 20.8) | `/purchase/` | homepage, `/product-loans/`, `/mortgage-michigan/` |
| first time home buyer michigan; Michigan first-time programs (PAA: 117 Qs; GSC 0 impr) | `/purchase/first-time-homebuyer/` | `/learn/first-time-home-buyers/`, `/learn/15-first-time-home-buyer-tips/`, DPA page |
| down payment assistance michigan; MSHDA; MI 10K; $25,000 first-gen (PAA) | `/purchase/down-payment-assistance/` | `/learn/first-time-home-buyer-grants-and-programs/`, `/learn/state-specific-mortgage-assistance-programs/`, HomeReady/FHA product pages |
| what to do before buying / applying; how to get ready (GSC 'michigan mortgage approval tips' pos 1) | `/purchase/homebuyer-game-plan/` | `/learn/preparing-to-buy/`, `/learn/credit-and-qualifying/` |
| how much house can I comfortably afford in Michigan (GSC pos 35.3) | `/purchase/budget-review/` | affordability + mortgage calculators, `/learn/budgeting-for-your-first-home/` |
| mortgage process Michigan; Michigan preapproval process (pos 1.9–7.7) | `/mortgage-process/` | 4 learn process articles, `/compare-loan-estimates/` |
| buying a home with a VA loan in Michigan; MI disabled veteran tax exemption | `/purchase/va-homebuyer-plan/` | `/product-loans/va-loans/` (keeps "Michigan VA loans"), VA calculators, VA learn articles |
| self-employed mortgage Michigan (pos 1.3) | `/purchase/self-employed-homebuyer/` | bank statement, 1099 and asset-based product pages, freelancer learn article |
| buy before you sell; Michigan bridge loan (pos 2.7) | `/purchase/buy-before-you-sell/` | `/learn/bridge-loans/`, HELOC page, seller net sheet |
| investment property loans Michigan | `/purchase/investment-property-financing/` | `/learn/financing-investments/` (DSCR stays with `/product-loans/dscr-loans-michigan/`) |
| renovation / 203(k) loans Michigan | `/purchase/renovation-financing/` | 203(k), HomeStyle and fixer-upper learn articles, FHA product page |


## Findings ranked by impact

| # | Finding | Evidence | Fix | Priority |
|---|---|---|---|---|
| 1 | **H1s and titles do not name the topic**, so the pages do not rank for their head terms. | 8/12 H1s lack query words (a ninth names only the audience); titles of 8/10 sub-pages omit "Michigan"; GSC has 0 impressions for "first time home buyer michigan", "down payment assistance michigan", "mshda". | New H1, title and eyebrow per page (exact text below). Keep the voice lines as subheads or section copy. | P0 |
| 2 | **The DPA page names no Michigan program**, and the learn articles out-compete the money pages on Michigan facts. | DPA page outline has no MSHDA, MI 10K, MI Home Loan or First-Gen section and links only to CFPB; learn grants article (135 inlinks) states MI 10K terms and does not link to DPA. | Add programs + eligibility H2s, date-stamped and sourced to MSHDA; add the learn → DPA links. | P0 |
| 3 | **Readiness Review duplicates Game Plan.** | Identical assessment, thesis, synonym H2s and FAQs. | 301 Readiness → `/purchase/homebuyer-game-plan/#readiness`; move the unique pieces (first answer, credit section, check-back form). | P1 |
| 4 | **Above-the-fold copy reassures but does not answer.** | ATF word counts 65–161; none of the 10 sub-pages names a program, number or concrete outcome before the first H2 (`/mortgage-process/` does). | ≤60-word subheads that answer and state the outcome (all 12 below). | P0–P1 |
| 5 | **Internal links are lopsided, with CTA-phrase anchors.** | Game Plan 492 contextual inlinks vs VA 18, Mortgage Process 15, Self-Employed 22, hub 16; "Review an investment property" ×100; `/learn/bridge-loans/`, grants article and process articles do not link to their money page. | 50+ specific inbound links listed per page (in `purchase-changes.csv`). | P0 (VA) / P1 |
| 6 | **Unsourced performance claim.** | `/mortgage-process/`: "Over the last 12 months Samantha's loans averaged under 14 days from application to clear to close." | Remove, or publish with loan count, date range and source after Align approval. | P0 |
| 7 | **No visible byline or updated date anywhere**, though 9 pages carry Article + Person schema. | `byline` and `modified` are empty for all 12 pages in the crawl. | Template line: "Reviewed by Samantha Shelton, NMLS 1647301 · Updated <date>". | P1 |
| 8 | **Heading hygiene.** | Empty H2 and "home ?" on Game Plan and Readiness (assessment component); H4 widget labels on First-Time and Investment; H3s that repeat their H2 on Buy Before You Sell. | Template fixes (listed per page). | P1–P2 |
| 9 | **CTA label drift.** | "Build my homebuyer game plan" goes to Calendly on Game Plan but to the Game Plan page from the hub and process page; DPA and Renovation send exploratory visitors to `/start/?goal=buy`. | One label, one destination; Calendly for exploratory pages, `/start/` only as the secondary for ready buyers. | P1 |
| 10 | **AI-search readiness is uneven.** | FAQ schema: hub 0, process 0, VA 4, DPA 5 generic. Few quotable Michigan facts outside taxable value. | Question-led H2s with 40–60-word answers and Michigan facts (MSHDA limits, MCL 211.7b, Form 2368/2766, 203(k) $75,000, TRID 3-day rules). | P1 |

**Bing / Copilot note:** Bing Webmaster data is not connected, so no Bing numbers are given. Bing leans more heavily than Google on exact-match titles and H1s and on visible dates. Findings 1 and 7 should therefore help Bing and Copilot answers at least as much as Google. **Please provide a Bing Webmaster export** so the impact can be measured.


## Accuracy and compliance

### Program facts checked (MSHDA and others)

`www.michigan.gov` and `va.gov` could not be fetched from this session (the network blocked the hosts). Each fact below was checked against the official pages' indexed text and MSHDA press releases through web search. Anything not confirmed on the official page itself is marked **[VERIFY]**, and each one should be re-checked on michigan.gov on the day it goes live.

| Fact used in rewrites | Status | Source |
|---|---|---|
| MI 10K DPA: up to $10,000; must be used with an MI Home Loan; 640 minimum credit score; homebuyer education; MSHDA-approved lender | Confirmed (official MSHDA page text) | michigan.gov/mshda MI 10K / MI Home Loan pages |
| MI 10K repaid on sale, refinance, payoff of first mortgage or when no longer principal residence (deferred) | Consistent with existing Align copy, Bankrate and MSHDA summaries. **[VERIFY]** on the MI 10K page | Bankrate summary of MSHDA; site's own copy |
| MI Home Loan statewide sales price limit **$566,355 after June 1, 2026** (older pages show $544,233 / $453,000) | Confirmed (official MSHDA page text via search) | michigan.gov/mshda/pathway-to-housing/mi-home-loan |
| MI Home Loan: first-time buyers statewide, repeat buyers in targeted areas | Confirmed (MSHDA via site's own learn article and third-party guides) | MSHDA homeownership |
| MI Home Loan loan types (FHA, VA, USDA RD, conventional) | **[VERIFY]** | MSHDA MI Home Loan page |
| MI First Generation DPA: up to $25,000 deferred; pair with conventional/FHA/USDA MI Home Loan; in-person HUD-approved education; not stackable with MI 10K; pilot launched Feb 18, 2025, $8M | Confirmed (MSHDA press release, FAQ); **[VERIFY] funds still open in Nov 2026** | michigan.gov/FirstGenDPA; MSHDA press release 2025-02-18 |
| MSHDA Mortgage Credit Certificate active in 2026 (lender list 2-18-26, public notice 3-20-26); 20% of interest / $2,000 cap per third-party guides | Active: confirmed. Rate and cap: **[VERIFY]** | MSHDA MCC page |
| Michigan First-Time Home Buyer Savings Program: open accounts through Dec 31, 2026; deduction up to $5,000 single / $10,000 joint | Per Michigan Treasury notice of May 19, 2022 as cited on Align's own learn page and legislative analyses. **[VERIFY] extension** | Michigan Treasury; HB 4290 / SB 145 analyses |
| 2026 conforming limit $832,750 (all Michigan counties) | Confirmed | FHFA release, Nov 25, 2025 |
| Limited 203(k) cap $75,000; no consultant required; standard 203(k) requires a HUD consultant | Confirmed (ML 2024-13; ML 2026-06 kept the cap) | HUD Mortgagee Letter 2024-13 |
| VA funding fee schedule in effect since April 7, 2023; exemptions incl. Purple Heart on active duty | Confirmed via secondary sources; **[VERIFY] on va.gov** | VA funding fee page (blocked) |
| Disabled veteran homestead exemption MCL 211.7b, Form 5107 | Consistent with Michigan Treasury page already linked on the site | Michigan Treasury |
| Property Transfer Affidavit (Form 2766) within 45 days; PRE (Form 2368) by June 1 / Nov 1 | Consistent with Michigan Treasury guidance (PRE deadlines as cited on Align's learn page) | Michigan Treasury |
| Taxable value uncaps to SEV (50% of true cash value) the year after transfer | Confirmed (already on site, links Treasury) | Michigan Treasury change-of-ownership page |

### Compliance rules applied to every rewrite

- **No rates, APRs or payment amounts.** None appear on the 12 current pages, and none are added.
- **Reg Z trigger terms kept off commercial pages.** Down payment percentages, repayment periods (for example "30-year") and payment amounts are trigger terms under 12 CFR 1026.24(d). The current purchase pages already avoid them. They say "580 and up for the lowest minimum" and link out to `/learn/low-down-payment-mortgages/` for percentages, and the rewrites keep that pattern: "a larger down payment", "the lowest down payment option", "a fixed-rate first mortgage", and "deferred" rather than "0% interest". If Align wants percentages on these pages, the full 1026.24(d)(2) disclosure must be added.
- **MSHDA participation [VERIFY with Align, P0].** The DPA and First-Time copy says "Samantha checks which programs apply". If Align cannot originate MI Home Loan / MI 10K through a participating wholesale lender, change the copy to "Samantha explains the programs and refers you to a participating lender". Do not imply direct access.
- **Unverifiable claims.** Remove or substantiate the "under 14 days to clear to close" figure on `/mortgage-process/`. No new statistics are introduced. No Samantha quotes are invented. The existing "In Samantha's words" quotes are kept as they are on the site.
- **Reviews.** Use verbatim Google text. The Jason Sych review is edited on Readiness Review but verbatim on 6 other pages. Client-voice "amazing!" is acceptable in a quoted review, and none of the rewrites put it in Align's voice.
- **Trust line.** Use one standard ATF trust component everywhere. VA is missing Samantha/NMLS, and DPA uses "No credit check to ask" instead of the sitewide "No credit pull to talk".


---

# Page-by-page


## 1. Purchase hub — `/purchase/` — **74 (C)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 84 | B | H1 'Buying a Home in Michigan' matches hub intent and is unique sitewide, but says nothing about mortgages or the next step. |
| Heading structure | 72 | C | Only 1 question heading; utility H2s ('Learn', 'Free guides', 'Other questions') carry no meaning; router omits VA, self-employed and down payment help. |
| Above-the-fold answer | 72 | C | 107 ATF words: 'Start with a clear picture of what you can actually do' is a promise, not an answer; the Michigan bullets are strong. |
| CTA effectiveness | 78 | C | 'Build my homebuyer game plan' sends to an internal page while the same label books Calendly elsewhere; 'Start your pre-approval' is buried at the bottom. |
| Title & meta | 70 | C | 'Buying A Home In Michigan | Align Lending' (41) has no hook; 154-char meta is generic with no proof point. |
| Internal linking | 68 | D | 32 outlinks but 3 of 10 sub-pages missing from the router; just 16 contextual inlinks, anchors mostly 'Purchase overview'. |
| E-E-A-T & trust | 74 | C | Samantha + NMLS ATF and reviews present; no external sources (4 external links are Calendly/Google Maps); no visible updated date. |
| AI-search readiness | 60 | D | No FAQ, no FAQ schema; only one quotable Michigan paragraph (taxable value, transfer tax, MSHDA $10,000). |
| Accuracy & compliance | 88 | B | $832,750 2026 conforming limit verified against FHFA; MSHDA 'up to $10,000' consistent; no rate or trigger terms. |
| **Overall (weighted)** | **74** | **C** | |

### Primary query and intent

- **Target:** buying a home in Michigan (hub) — secondary: michigan home loan financing options, how to get a mortgage in michigan
- **Evidence:** GSC (90 days): 'michigan home loan financing options' 27 impr, pos 20.8; 'michigan affordable home loans' 20 impr, pos 14.2; 'how to get a mortgage in michigan' 18 impr, pos 1.0 (page not attributable in the query report). PAA (Michigan): 'Does Michigan have a first-time home buyer program?', 'What credit score do you need to buy a house in Michigan?'.
- **Cannibalization:** Low risk. /learn/home-buying/ ('How To Buy A Home: Steps, Costs, And Timeline', 115 contextual inlinks) answers the national 'how to buy a house' query; the hub should own the Michigan + lender-choice version and link down to it. The hub has only 16 contextual inlinks, mostly the anchor 'Purchase overview' from sibling footers.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Buy a Home | Buy a Home in Michigan |
| H1 | Buying a Home in Michigan | **Buying a Home in Michigan: Loan Options and a Plan Before You Offer** |
| Subhead (49 words) | Start with a clear picture of what you can actually do / We help you compare the loan options that genuinely fit your situation. | Align Lending is an independent mortgage broker in Waterford. Samantha Shelton compares loans from multiple wholesale lenders, estimates your Michigan tax bill as the new owner and checks down payment help, so you leave one conversation with a comfortable monthly number, the cash you need and your next step. |
| Primary CTA | Build my homebuyer game plan → /purchase/homebuyer-game-plan/ | **Build my homebuyer game plan** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Talk through your options → Calendly | Get pre-approved → `https://alignlending.com/start/?goal=buy` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton … NMLS 1647301 | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Buying a Home in Michigan: Loan Options and a Plan Before You Offer**
  - H2: **How do you buy a house in Michigan?** — _NEW_
    > Talk to a lender first, then get preapproved with documents, shop with an agent and write an offer under a Michigan purchase agreement. After acceptance come the inspection, appraisal, title work and underwriting, then closing. Budget with the new-owner property tax, not the seller's bill, and ask about MSHDA help before you offer.
  - H2: **Start with your situation** — _RENAME (was 'Not sure where to start?')_
    - H3: **Buying my first home** — _KEEP_
    - H3: **Setting a budget** — _KEEP_
    - H3: **Getting ready to apply** — _RENAME (was 'Somewhere in Between'; links to Game Plan)_
    - H3: **Selling and buying at once** — _KEEP_
    - H3: **Using a VA benefit** — _NEW (→ /purchase/va-homebuyer-plan/)_
    - H3: **Self-employed income** — _NEW (→ /purchase/self-employed-homebuyer/)_
    - H3: **Help with the down payment** — _NEW (→ /purchase/down-payment-assistance/)_
    - H3: **The house needs work** — _KEEP_
    - H3: **Buying a rental** — _RENAME (was 'I Am Buying an Investment')_
  - H2: **Which mortgage fits a Michigan home purchase?** — _RENAME (was 'Compare your loan options')_
    > Most Michigan buyers compare four loans. Conventional suits steady income and credit. FHA allows a thinner credit history in exchange for longer-lasting mortgage insurance. VA serves eligible veterans with no monthly mortgage insurance. USDA covers eligible rural and suburban addresses under an income limit. Loan amounts above $832,750 in 2026 are jumbo loans.
    - H3: **Conventional Loans** — _KEEP_
    - H3: **FHA Loans** — _KEEP_
    - H3: **VA Loans** — _KEEP_
    - H3: **USDA Loans** — _KEEP_
    - H3: **Jumbo Loans** — _KEEP_
    - H3: **HomeReady and Home Possible** — _KEEP_
  - H2: **What is different about buying a home in Michigan?** — _RENAME (was 'Buying in Michigan: what is different')_
    > Three things. Your property tax resets the year after you buy, because taxable value uncaps to half of the assessor's market value, so the seller's bill is not yours. The seller customarily pays the state and county transfer tax. And MSHDA offers the MI Home Loan and up to $10,000 in down payment assistance for buyers who qualify.
  - H2: **What happens on a first call with Samantha?** — _RENAME (was 'Talk to somebody first')_
    > It is a conversation, not an application, and there is no credit pull. Samantha asks what you are trying to do, when you hope to move and roughly what you earn, owe and have saved, then tells you what to settle before you make an offer and which loan types are worth comparing.
    - H3: **Tell us what you are trying to do** — _KEEP_
    - H3: **We look at your situation** — _KEEP_
    - H3: **You leave with a plan** — _KEEP_
  - H2: **What Michigan buyers say** — _RENAME (was 'What our clients say')_
  - H2: **Questions Michigan homebuyers ask** — _NEW (FAQ, see below)_
  - H2: **Free Michigan homebuyer guides** — _RENAME (was 'Free guides')_
  - H2: **Keep reading** — _RENAME (merges 'Learn' and 'Other questions')_

**FAQ set (built from PAA/GSC):**

- **What credit score do you need to buy a house in Michigan?** _(NEW)_  
  It depends on the loan. FHA uses 580 as the score for its lowest down payment option, MSHDA's MI 10K assistance requires 640, and VA leaves the minimum to each lender. Conventional approval weighs your score together with income and debts. Samantha reviews your reports first and tells you which programs your score opens.
- **Does Michigan have a first-time homebuyer program?** _(NEW)_  
  Yes. MSHDA's MI Home Loan is open to first-time buyers statewide and to repeat buyers in targeted areas, and its MI 10K loan adds up to $10,000 toward the purchase. MSHDA also runs a Mortgage Credit Certificate. Income, price and credit limits apply, and the lender must take part in the program.
- **Should I talk to a lender before a real estate agent?** _(NEW)_  
  It helps. A lender conversation tells you a comfortable price range, the cash you need and whether anything needs time to fix, and sellers expect a preapproval with an offer. Talking first means the homes you tour are homes you would actually be comfortable buying.
- **Who pays transfer tax when you buy a house in Michigan?** _(NEW)_  
  By custom the seller pays both the state and the county transfer tax, though the purchase agreement can say otherwise. A seller of a principal residence whose state equalized value has not risen since purchase may be exempt from the state portion. Buyers still pay their own lender, title and recording costs.
- **How long does it take to buy a house in Michigan?** _(NEW)_  
  Finding a home takes as long as your search does. After an accepted offer, the closing date in your Michigan purchase agreement sets the pace, and the lender's job is to have the loan ready before it. Starting the financing conversation months ahead keeps that calendar under your control.

### Title tag and meta description

- Current title (41): `Buying A Home In Michigan | Align Lending`
- **New title (59):** `Buying a Home in Michigan: Mortgage Options | Align Lending`
- Current meta (154): Start with a clear picture of what you can actually do. Build a homebuyer game plan, find your question, and compare loan options that fit your situation.
- **New meta (158):** Compare FHA, conventional, VA and USDA loans for a Michigan home, see how taxes and MSHDA help change the numbers, and get a plan. 5.0 on Google, 123 reviews.

### Schema

Current types: BreadcrumbList, FinancialService, ImageObject, ListItem, Organization, PostalAddress, PropertyValue, WebPage, WebSite; FAQ questions in schema: 0.

- Keep BreadcrumbList/WebPage/FinancialService graph.
- Add CollectionPage + ItemList listing the 11 purchase pages (name, url, position).
- Add FAQPage for the 5 new FAQs (no Google rich result since 2023, but parsed by AI answer engines and Bing).
- Add dateModified to WebPage and show 'Updated <date>' near the trust line.
- Give the hero ImageObject a non-empty on-page alt matching its schema caption (alt is currently empty).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/` → "buying a home in Michigan" → `/purchase/`
- `/product-loans/` → "start with your situation on our Michigan homebuying page" → `/purchase/`
- `/mortgage-michigan/` → "buying a home in Michigan" → `/purchase/`
- `/calculators/` → "how buying a home in Michigan works" → `/purchase/`

**Add outbound from this page (exact anchor → URL):**

- "Using a VA benefit" → /purchase/va-homebuyer-plan/
- "Self-employed income" → /purchase/self-employed-homebuyer/
- "Michigan down payment assistance programs" → /purchase/down-payment-assistance/
- "the Michigan mortgage process, step by step" → /mortgage-process/
- "MSHDA homeownership programs (external)" → https://www.michigan.gov/mshda/homeownership
- "Michigan Treasury: uncapping after a change in ownership (external)" → https://www.michigan.gov/taxes/property/change-ownership

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Router lists 6 situations and omits VA, self-employed and down payment help, the three thinnest-linked pages (VA 18, self-employed 22 contextual inlinks). | Add the 3 cards in 'Start with your situation'. | P1 | high | low |
| Same label 'Build my homebuyer game plan' goes to /purchase/homebuyer-game-plan/ here but to Calendly on the Game Plan page. | Make the label always book the call (Calendly); use 'See how the game plan works' for navigation links. | P1 | medium | low |
| No FAQ section or FAQ schema on the hub. | Add the 5-question FAQ and FAQPage JSON-LD. | P1 | medium | low |
| Hero image align-hero-purchase.webp has alt='' while schema caption describes the scene. | Set alt to the caption text (hand to 07-images). | P2 | low | low |

## 2. First-Time Homebuyer — `/purchase/first-time-homebuyer/` — **66 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 45 | F | H1 'You are not supposed to understand this yet' contains no topic words; GSC shows zero impressions for the head term 'first time home buyer michigan'. |
| Heading structure | 70 | C | 11 question headings, but calculator labels are H4s ('Due at closing', 'Paid before you get there') and there is no programs, definition or credit-score section. |
| Above-the-fold answer | 55 | F | 125 ATF words describe what a call covers; no program, cost or outcome is named before the first H2. |
| CTA effectiveness | 80 | B | 'Get my first-time buyer plan' is specific and benefit-led; 'See what it costs upfront' is a strong secondary; no path for buyers ready to apply. |
| Title & meta | 55 | F | 'First-Time Homebuyer Plan | Align Lending' has no 'Michigan'; meta is 128 chars with no benefit or proof. |
| Internal linking | 72 | C | 26 outlinks and 53 contextual inlinks, but the down payment assistance page is only linked from a footer list, and learn articles do not defer to this page. |
| E-E-A-T & trust | 80 | B | Samantha bio, NMLS, MSHDA and CFPB sources, 6 reviews; Article+Person schema exists but no visible byline or updated date. |
| AI-search readiness | 66 | D | 7 FAQ in schema, short answers; only one quotable Michigan fact block (MI 10K); no definition or program list for AI answers to cite. |
| Accuracy & compliance | 82 | B | MI 10K facts (640, paired with MI Home Loan, repaid on sale/refi/payoff/move) match MSHDA sources; not date-stamped; no rate or trigger terms. |
| **Overall (weighted)** | **66** | **D** | |

### Primary query and intent

- **Target:** first time home buyer michigan — secondary: michigan first time home buyer programs, MSHDA first time home buyer, what is considered a first-time home buyer in Michigan
- **Evidence:** GSC: no impressions at all for 'first time home buyer michigan' or 'michigan first time home buyer programs' in 90 days (the page is not ranking top-100 for its head term). Related: 'michigan first-time home buyer mortgage calculator' 8 impr pos 34.4; 'conventional loan only for first time home buyer 3 percent down' 28 impr pos 1.9. PAA (Michigan, depth 2, 117 questions): 'What programs are available for first-time homebuyers in Michigan in 2026?', 'Is there a grant for first-time home buyers in Michigan?', 'What is the $7500 first-time home buyer grant in Michigan?', 'What is the $25,000 down payment assistance program in Michigan?', 'What credit score do you need to buy a house in Michigan?', 'What is considered a first-time home buyer in Michigan?', 'Does Michigan have a first-time homebuyer credit?'. Top results (Chase, SoFi, Bankrate, The Mortgage Reports, michigan.gov Treasury) are program lists: MSHDA MI Home Loan, MI 10K, First-Gen DPA, MCC, local programs, the 3-year definition.
- **Cannibalization:** High. /learn/first-time-home-buyers/ (74 contextual inlinks) and /learn/first-time-home-buyer-grants-and-programs/ (135 inlinks) contain the Michigan specifics this page lacks (MSHDA MI Home Loan rules, MI 10K terms, the First-Time Home Buyer Savings Program closing Dec 31, 2026, PRE Form 2368), so Google sees the learn articles as more relevant. Fix: put the Michigan program summary on this page and have both learn articles link up with 'Michigan first-time homebuyer programs and steps'.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | First-Time Homebuyer | Michigan First-Time Homebuyers |
| H1 | You are not supposed to understand this yet | **First-Time Homebuyer Programs and Steps in Michigan** |
| Subhead (49 words) | The mistake Samantha sees most from first-time buyers is waiting until they think they are ready before they ask any questions. | You do not need to understand any of this before you call. Samantha walks first-time buyers through what to have saved, which loans and MSHDA programs fit, including MI 10K assistance of up to $10,000 for those who qualify, and what happens at each step from preapproval to keys. |
| Primary CTA | Get my first-time buyer plan → Calendly | **Get my first-time buyer plan** → `https://calendly.com/samanthashelton` |
| Secondary CTA | See what it costs upfront → #cash-to-close | See what it costs upfront → `https://alignlending.com/purchase/first-time-homebuyer/#cash-to-close` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google, 123 reviews · Samantha … NMLS 1647301 | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **First-Time Homebuyer Programs and Steps in Michigan**
  - H2: **How do I buy my first house in Michigan?** — _KEEP (tighten answer)_
    > Start with a conversation, not an application. Get preapproved with real documents, set a monthly budget that includes Michigan taxes as the new owner, and check MSHDA help before you tour. Then shop with an agent, make an offer, and work through inspection, appraisal, title and underwriting to closing.
  - H2: **Who counts as a first-time homebuyer in Michigan?** — _NEW_
    > Usually anyone who has not owned a principal residence in the past three years, the HUD definition MSHDA follows, so a past owner can qualify again. MSHDA's MI Home Loan also accepts repeat buyers in targeted areas. Conventional and FHA programs each apply their own definition, so check the one your loan uses.
  - H2: **What Michigan first-time homebuyer programs are available?** — _NEW_
    > The core statewide programs come from MSHDA: the MI Home Loan, the MI 10K down payment loan of up to $10,000, a Mortgage Credit Certificate, and a first-generation pilot of up to $25,000 when funds are open. Some cities and counties add their own. Each has income, price and credit rules, and the lender must take part.
    - H3: **MSHDA MI Home Loan** — _NEW_
    - H3: **MI 10K down payment assistance** — _NEW_
    - H3: **MI First Generation down payment assistance** — _NEW_
    - H3: **Mortgage Credit Certificate** — _NEW_
    - H3: **Michigan First-Time Home Buyer Savings Program** — _NEW_
    - H3: **City and county programs** — _NEW_
  - H2: **What credit score do you need to buy your first home in Michigan?** — _NEW_
    > There is no single number. MSHDA's MI 10K needs 640, FHA uses 580 as the cutoff for its lowest down payment option, and VA lets each lender set a minimum. If your score is below where you want it, start now: some items take months to change, and Samantha shows which ones matter for a mortgage.
  - H2: **How much do you need saved for your first home?** — _RENAME (was H3 'What do you actually need saved?'; calculator labels become styled text, not H4s)_
    > More than the down payment. Plan for the down payment, closing costs, prepaid taxes and insurance for the escrow account, earnest money, and the inspection and appraisal, which are paid weeks before closing. In Michigan the tax escrow is often larger than buyers expect. The calculator below shows which pieces you have not counted yet.
  - H2: **What happens, in order, from first call to closing?** — _RENAME (was 'What actually happens, in order')_
    > A first conversation, then preapproval with documents, then house hunting with your agent. After an accepted offer come the Loan Estimate, appraisal, title work and underwriting. You receive the Closing Disclosure at least three business days before closing, then sign and get keys. The quiet stretches are usually waits on documents or outside parties.
    - H3: **What should I avoid doing before closing?** — _KEEP_
    - H3: **The thing people do not think is worth mentioning** — _RENAME (was 'What this looks like in practice')_
  - H2: **Which loans should first-time buyers compare?** — _RENAME (was 'The loans to compare first')_
    > Start with four. FHA fits a thinner credit history, with mortgage insurance that can last the life of the loan. Conventional, including HomeReady and Home Possible for incomes at or under 80% of area median, suits steady credit. VA serves eligible veterans. USDA covers eligible rural and suburban addresses. MSHDA assistance pairs with several of them.
    - H3: **FHA Loan** — _KEEP_
    - H3: **Conventional Loan** — _KEEP_
    - H3: **HomeReady® and Home Possible®** — _KEEP_
    - H3: **VA Loan** — _KEEP_
    - H3: **USDA Loan** — _NEW (card; currently only a footer link)_
  - H2: **Which Michigan forms do you file after closing?** — _NEW_
    > Two go to your local assessor: the Property Transfer Affidavit (Form 2766) within 45 days, which the title company often files for you, and the Principal Residence Exemption (Form 2368), due by June 1 or November 1 for that tax season. Skipping the exemption means paying school operating millage a principal residence does not owe.
  - H2: **About Samantha Shelton** — _RENAME (was 'About Samantha')_
  - H2: **Where these rules come from** — _KEEP (add MSHDA MI Home Loan, MI 10K, MCC, Treasury PRE and savings-program links)_
  - H2: **First-time homebuyer questions** — _RENAME (was 'Questions people actually ask'; see FAQ)_
  - H2: **What first-time buyers say** — _RENAME (was 'What clients say')_
  - H2: **Most of what you need is knowing what is normal** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**Body copy for the new program H3s (exact):**

- **MSHDA MI Home Loan:** A fixed-rate first mortgage through MSHDA-participating lenders, open to first-time buyers statewide and to repeat buyers in targeted areas. MSHDA lists a statewide sales price limit of $566,355 after June 1, 2026, and income limits by county and household size. [VERIFY: michigan.gov/mshda MI Home Loan page on publish date]
- **MI 10K down payment assistance:** Up to $10,000 as a deferred second loan, repaid when you sell, refinance, pay off the first mortgage or stop living in the home. Requires a 640 credit score, an MI Home Loan and a homebuyer education course.
- **MI First Generation down payment assistance:** Up to $25,000 as a deferred second loan for buyers whose parents have not owned a home recently, paired with a conventional, FHA or USDA MI Home Loan and in-person homebuyer education. Launched as a limited pilot in February 2025; cannot be combined with MI 10K. [VERIFY: funds still open at michigan.gov/FirstGenDPA]
- **Mortgage Credit Certificate:** A federal tax credit for a share of the mortgage interest you pay each year, applied for before closing. First-time buyers qualify statewide and repeat buyers in targeted areas. [VERIFY: current credit percentage, annual cap and funding status on MSHDA's MCC page]
- **Michigan First-Time Home Buyer Savings Program:** A state-tax-advantaged savings account. Michigan Treasury's notice says accounts can be opened through December 31, 2026, with contributions deductible up to $5,000 single or $10,000 joint. If you are saving now, ask a tax professional before year end. [VERIFY: any extension past 2026]
- **City and county programs:** Detroit, Pontiac and several counties run their own help with local income limits and funding cycles. Samantha checks what applies to the address. [VERIFY: current Detroit and Pontiac program terms before naming amounts]

**FAQ set (built from PAA/GSC):**

- **Is there a grant for first-time home buyers in Michigan?** _(NEW)_  
  MSHDA's statewide help is structured as deferred loans rather than grants: MI 10K and the First Generation pilot are repaid when you sell, refinance or move out. Some city, county and nonprofit programs do offer grants or forgivable loans. Samantha checks which apply to your income and the address before you make an offer.
- **What is the $7,500 first-time homebuyer grant in Michigan?** _(NEW)_  
  That figure usually refers to MSHDA's older down payment assistance amount. MSHDA's current statewide program is MI 10K, a deferred loan of up to $10,000, not a grant. Third-party articles still repeat the old number, so check MSHDA's own page or ask Samantha which amount applies to your purchase today. [VERIFY: prior MSHDA DPA amount]
- What do I need to know before I call? — _KEEP (merge 'What am I supposed to already know before I call?' and 'What do I do first?')_
- What if my credit is not great? — _KEEP_
- What is the difference between prequalification and preapproval? — _KEEP_
- Does the seller actually care which one I have? — _KEEP_
- What documents will I need? — _KEEP_
- Does underwriting take forever? — _KEEP_

### Title tag and meta description

- Current title (41): `First-Time Homebuyer Plan | Align Lending`
- **New title (57):** `First-Time Homebuyer Programs in Michigan | Align Lending`
- Current meta (128): A first-time buyer needs context more than anything else. Knowing what is normal at each step is most of what you actually need.
- **New meta (157):** Buying your first home in Michigan? See MSHDA's MI Home Loan and MI 10K, what you need saved and each step to closing. No credit pull to talk. 5.0 on Google.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 7.

- Keep Article + FAQPage; set Article.author = Samantha Shelton (Person, NMLS identifier) and show a visible byline 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated <date>'.
- Add Service (serviceType 'First-time homebuyer mortgage guidance', areaServed State: Michigan, provider #organization).
- Add mentions: GovernmentOrganization 'Michigan State Housing Development Authority' (sameAs https://www.michigan.gov/mshda).
- Update FAQPage to the new question set; change calculator H4 labels to <p class> so they leave the heading outline.

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/first-time-home-buyers/` → "Michigan first-time homebuyer programs and steps" → `/purchase/first-time-homebuyer/`
- `/learn/first-time-home-buyer-grants-and-programs/` → "first-time homebuyer help in Michigan" → `/purchase/first-time-homebuyer/`
- `/learn/15-first-time-home-buyer-tips/` → "a first-time buyer plan for Michigan" → `/purchase/first-time-homebuyer/`
- `/learn/what-is-conventional-97-loan/` → "first-time homebuyer programs in Michigan" → `/purchase/first-time-homebuyer/`
- `/purchase/down-payment-assistance/` → "Michigan first-time homebuyer programs" → `/purchase/first-time-homebuyer/`

**Add outbound from this page (exact anchor → URL):**

- "Michigan down payment assistance programs" → /purchase/down-payment-assistance/
- "USDA address check" → /usda-eligibility-check/
- "home affordability calculator" → /home-affordability-calculator/
- "VA Homebuyer Plan" → /purchase/va-homebuyer-plan/
- "MSHDA: MI Home Loan (external)" → https://www.michigan.gov/mshda/pathway-to-housing/mi-home-loan
- "MSHDA: Mortgage Credit Certificate (external)" → https://www.michigan.gov/mshda/homeownership/mortgage-credit-certificate-program

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| H1 and title omit 'first-time' + 'Michigan' together; page has zero GSC impressions for its head term while learn articles carry the Michigan facts. | Apply new H1/title/meta and the programs H2. | P0 | critical | low |
| MSHDA facts are not date-stamped; programs change mid-year (MI Home Loan price limit changed June 1, 2026). | Add 'Program details checked <date> against MSHDA' under the programs H2. | P1 | medium | low |
| Calculator labels marked up as H4 ('Due at closing', 'Paid before you get there'). | Change to non-heading elements. | P2 | low | low |
| Down payment percentages are Reg Z trigger terms on a commercial page; current page is clean. | Keep percentages off this page (link to /learn/low-down-payment-mortgages/) unless 1026.24(d)(2) disclosures are added. | P1 | medium | low |

## 3. Homebuyer Game Plan — `/purchase/homebuyer-game-plan/` — **69 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 50 | F | H1 'You do not have to be ready to talk to us' has no topic words; the branded eyebrow 'Michigan Homebuyer Game Plan' is not a searched phrase. |
| Heading structure | 62 | D | Empty H2 from the assessment widget, 'How ready are you to buy a home ?' with a stray space, widget labels as H3s, 17 H2s in total. |
| Above-the-fold answer | 68 | D | 161 ATF words, the longest in the section; the 'walk away knowing' list is a strong outcome statement but the answer is buried. |
| CTA effectiveness | 74 | C | 'Build my homebuyer game plan' books Calendly here but links to this page from the hub and process page; 16 CTAs on one page. |
| Title & meta | 60 | D | 'Michigan Homebuyer Game Plan | Align Lending' targets a branded phrase with no search demand; meta 131 chars. |
| Internal linking | 85 | B | 492 contextual inlinks (most in the section) and a useful journey router, but inbound anchors are CTA phrases ('Build your homebuyer game plan' x308). |
| E-E-A-T & trust | 80 | B | Bio, NMLS, Michigan Treasury + CFPB sources, 5 reviews; no visible byline/date. |
| AI-search readiness | 70 | C | 9 FAQ, good direct answers on relocation and taxes; 'Talk to somebody' answer to the main question is thin on specifics. |
| Accuracy & compliance | 85 | B | Uncapping explanation and 60-day occupancy are accurate; duplicate assessment content with Readiness Review. |
| **Overall (weighted)** | **69** | **D** | |

### Primary query and intent

- **Target:** how to get ready to buy a house in Michigan — secondary: what should I do before I buy a house, what to do before applying for a mortgage (absorbs Readiness Review), homebuyer game plan (branded)
- **Evidence:** GSC: 'michigan mortgage approval tips' 20 impr pos 1.0; 'how to improve mortgage approval in michigan' 16 impr pos 2.7; 'how to qualify for a mortgage in michigan' 15 impr pos 1.0 (page not attributable). PAA: 'What questions are asked for a mortgage?', 'Should I buy now or wait?', 'What would disqualify you from a mortgage?', 'What not to tell a lender?'. The page already has the right question H2 'What should I do before I buy a house?'.
- **Cannibalization:** High with /purchase/mortgage-readiness-review/: same 8-question assessment widget (#readiness) on both pages, same thesis ('call early'), near-synonym H2s ('What should I do before I buy a house?' vs 'What should I do before applying for a mortgage?') and duplicate FAQs ('Am I too early…' vs 'How early is too early…'). Also /learn/preparing-to-buy/ (58 inlinks). Recommendation: merge Readiness into this page (301) and keep the learn article as the national checklist.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Michigan Homebuyer Game Plan | Michigan Homebuyer Game Plan |
| H1 | You do not have to be ready to talk to us | **Get Ready to Buy a Home in Michigan: Your Homebuyer Game Plan** |
| Subhead (51 words) | Most people wait until they think they have it figured out. That is backwards. The earlier we talk, the more options you have… | Talk to a lender before you tour, ideally six to twelve months out. In one conversation Samantha works out a monthly number you are comfortable with, the cash you will need, anything worth fixing first and a realistic timeline. No application, no credit pull, and next year is not too early. |
| Primary CTA | Build my homebuyer game plan → Calendly | **Build my homebuyer game plan** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Take the readiness assessment → #readiness | Take the 2-minute readiness check → `https://alignlending.com/purchase/homebuyer-game-plan/#readiness` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Get Ready to Buy a Home in Michigan: Your Homebuyer Game Plan**
  - H2: **What should I do before I buy a house?** — _KEEP_
    > Talk to a lender before you tour; a conversation is not an application. Then settle four things: a monthly payment you are comfortable with, the cash you will need, anything in your credit or paperwork that needs time, and a timeline. Six months out is a good place to be, and a year out is better.
  - H2: **How ready are you to buy a home?** — _KEEP (fix stray space; widget headings become non-heading text; delete the empty H2)_
    > Eight questions about your timing, savings, credit and income, about two minutes, with no credit pull. You get a readiness picture and the one or two things worth working on first. It is an educational self-check, not a preapproval, so bring the result to a call and Samantha will tell you what it means.
  - H2: **What should I do before applying for a mortgage?** — _NEW (moved from Readiness Review)_
    > Pull your free credit reports at AnnualCreditReport.com, add up what you have for a down payment and closing costs, note how your income is paid (W-2, self-employed or retirement) and pick a rough move date. None of it has to be in good shape yet. Hold off on new debt and large unexplained deposits until you have talked.
  - H2: **How far ahead should I start planning to buy a house?** — _NEW_
    > Six to twelve months before you want to move. That is enough time to fix a credit item, gather a document that takes weeks, or finish saving, without a deadline attached. If you are buying sooner, call anyway: the conversation is shorter, and you find out what matters before your offer does.
  - H2: **Where are you in your journey?** — _KEEP (router: replace 'Mortgage Readiness Review' card with #readiness; add Down payment help, House needs work, Buying a rental)_
  - H2: **What is the difference between what I qualify for and what I should spend?** — _KEEP_
    > A lender's maximum is based on your income and debts. A comfortable payment also has to fit what you spend on childcare, travel, savings and repairs. Start from the monthly number you are content to pay for years, then work back to a price. The Homebuying Budget Review walks through it with your own numbers.
  - H2: **Why can't I use the seller's Michigan tax bill?** — _RENAME (was 'Why you cannot use the seller's tax bill')_
    > Because Michigan caps taxable value while someone owns a home, then uncaps it the year after a sale to half of the assessor's market value. A long-time owner's bill can be far below what you will pay. Budget with the new-owner estimate from the property's own millage, not the number on the listing.
    - H3: **What this looks like in practice** — _KEEP_
  - H2: **Can I get approved before I move to Michigan?** — _RENAME (was 'Buying in Michigan before you move here')_
    > Often, yes. Many loan programs can use a signed job offer letter within limits each program sets, so bring it to the first call. A primary-residence loan expects you to move in within 60 days of closing. If you cannot be here to sign, ask early about a mail-away or remote closing.
  - H2: **What if my credit needs work?** — _NEW (moved from Readiness Review)_
    > Do not panic, and do not start random fixes from the internet. Samantha looks at what is actually on your reports and which items matter for a mortgage. Some take months to change, which is why starting early helps. If you are ready now, you find that out too, and nothing about the conversation commits you.
  - H2: **Which loans should I compare first?** — _RENAME (was 'The loans to compare first')_
    > Conventional if your credit and income are steady, FHA if your credit history is thinner or has a recent setback, VA if you are an eligible veteran or service member, and USDA if the address and household income qualify. The right one depends on your file, not on what a friend used last year.
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP (add AnnualCreditReport.com from Readiness Review)_
  - H2: **Questions people actually ask** — _KEEP (merge Readiness FAQs; see FAQ)_
  - H2: **Not ready yet? Ask Samantha to check back** — _NEW (moved check-back email form from Readiness Review)_
  - H2: **What clients say** — _KEEP_
  - H2: **You should leave this better, not sold** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Serving homebuyers across Michigan** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- What actually happens on the first call? — _KEEP_
- Am I too early to talk to somebody? — _KEEP (delete Readiness duplicate 'How early is too early to call?')_
- Am I wasting your time if I am not ready? — _KEEP_
- How much house should I be looking at? — _KEEP_
- Do I need to talk to a lender before a real estate agent? — _KEEP_
- Will this affect my credit? — _KEEP_
- I am self employed. Is that a problem? — _KEEP_
- Am I committing to anything? — _KEEP_
- Why not just use an online calculator first? — _MOVE from Readiness Review (keep text)_

### Title tag and meta description

- Current title (44): `Michigan Homebuyer Game Plan | Align Lending`
- **New title (58):** `How to Get Ready to Buy a Home in Michigan | Align Lending`
- Current meta (131): You do not have to be ready to buy before you talk to someone. Get a plan covering your budget, timeline, cash needs and next step.
- **New meta (154):** A Michigan homebuyer game plan: a comfortable monthly number, the cash you need, what to fix first and a timeline. No application, no credit pull to talk.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 9.

- Keep Article + FAQPage (update to merged set), WebApplication for the assessment.
- Add visible byline/updated date; add Service (serviceType 'Homebuyer planning consultation', areaServed Michigan).
- Remove the empty <h2> rendered by the assessment component (template fix applies to both pages).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/preparing-to-buy/` → "how to get ready to buy a home in Michigan" → `/purchase/homebuyer-game-plan/`
- `/learn/home-buying/` → "a Michigan homebuyer game plan" → `/purchase/homebuyer-game-plan/`
- `/learn/credit-and-qualifying/` → "what to do before applying for a mortgage" → `/purchase/homebuyer-game-plan/`
- `/purchase/mortgage-readiness-review/` → "301 redirect (all 64 contextual inlinks follow)" → `/purchase/homebuyer-game-plan/#readiness`

**Add outbound from this page (exact anchor → URL):**

- "home affordability calculator" → /home-affordability-calculator/
- "Michigan down payment assistance programs" → /purchase/down-payment-assistance/
- "the mortgage process, step by step" → /mortgage-process/
- "AnnualCreditReport.com (external)" → https://www.annualcreditreport.com/index.action

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Duplicate 8-question readiness assessment and thesis with /purchase/mortgage-readiness-review/. | Merge Readiness into this page; 301 the old URL to #readiness. | P1 | high | medium |
| Empty H2 and stray space in 'How ready are you to buy a home ?'; widget labels marked as H3. | Fix the assessment component template. | P1 | medium | low |
| Inbound anchors are CTA phrases ('Build your homebuyer game plan' x308, 'Get my homebuyer game plan' x179). | Change ~20 learn-article anchors to descriptive text (list in links_in). | P2 | medium | medium |

## 4. Homebuying Budget Review — `/purchase/budget-review/` — **69 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 55 | F | H1 'Affordability is not one number somebody hands you' omits the query; the first H2 'How much house can I comfortably afford?' carries it instead. |
| Heading structure | 76 | C | 12 question headings in logical order; 'What you leave with' is decoration; FAQ 'What am I not willing to give up…' is not a searched question. |
| Above-the-fold answer | 62 | D | 130 ATF words frame the idea well but give no method or outcome before the first H2. |
| CTA effectiveness | 74 | C | 'Review my budget with someone' is vague about who; 'Run the numbers' anchor works. |
| Title & meta | 55 | F | 'Homebuying Budget Review | Align Lending' matches no query; meta 133 chars. |
| Internal linking | 80 | B | 145 contextual inlinks; good learn links out, but no link to the affordability or mortgage calculator. |
| E-E-A-T & trust | 80 | B | Bio, CFPB x2 + MSHDA sources, 5 reviews; no byline/date. |
| AI-search readiness | 68 | D | 7 FAQ with short answers; method is described but no quotable step list. |
| Accuracy & compliance | 86 | B | MI 10K and taxable-value statements accurate; no trigger terms. |
| **Overall (weighted)** | **69** | **D** | |

### Primary query and intent

- **Target:** how much house can I afford in Michigan (comfort budget) — secondary: how much house can I comfortably afford, how much income do I need for a $300,000 house in Michigan
- **Evidence:** GSC: 'how much house can i actually afford in michigan' 6 impr pos 35.3; 'michigan mortgage affordability tips' 4 impr pos 28.5; 'va loan how much house can i afford' pos 90.5. PAA: 'How much house can I really afford?', 'How much mortgage can I qualify for?', 'How much do you need to make to afford a $300,000 house in Michigan?', 'How much house can I afford with a 100k salary in Michigan?', 'What's the minimum down payment for a $300,000 house?'.
- **Cannibalization:** Medium with /home-affordability-calculator/ (title 'Home Affordability Calculator, How Much House Can I Afford?'). Split intent: the calculator owns the DTI-limit 'calculator' query; this page owns 'comfortably afford in Michigan'. The two pages do not link to each other in the body (calculator links here only in a footer list).

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Homebuying Budget Review | Homebuying Budget Review |
| H1 | Affordability is not one number somebody hands you | **How Much House Can You Comfortably Afford in Michigan?** |
| Subhead (53 words) | There is a qualification calculation, and then there is your actual life. Both matter, and only one of them is on a lender's spreadsheet. | Start from the monthly payment you are content to pay for years, not the most a lender will approve. Subtract Michigan property taxes as the new owner, insurance and any association dues, and what is left is what the loan can carry. Samantha checks the math with your real numbers before you shop. |
| Primary CTA | Review my budget with someone → Calendly | **Review my budget with Samantha** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Run the numbers → #affordability | Find my comfortable number → `https://alignlending.com/purchase/budget-review/#affordability` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **How Much House Can You Comfortably Afford in Michigan?**
  - H2: **How much house can I comfortably afford?** — _KEEP_
    > Start with the monthly housing payment you would be content to pay for years. Subtract property taxes as the new owner, homeowners insurance and any association dues; what remains is what the loan can carry. Leave room for repairs and savings. That number, not the lender's maximum, sets your price range.
    - H3: **What does comfortable actually have to cover?** — _KEEP (calculator; delete decorative H3 'What you leave with')_
  - H2: **What is the difference between what I qualify for and what I can afford?** — _NEW_
    > Qualifying is math on your gross income and monthly debts, called debt-to-income ratio, within limits each loan program sets. Affordability is whether the payment still works after daycare, travel, savings and repairs. The home affordability calculator shows the first number; this review works out the second, and the lower one should win.
  - H2: **How much income do you need to afford a $300,000 house in Michigan?** — _NEW (PAA)_
    > It depends on the rate, your down payment, your other monthly debts and that home's Michigan tax bill as the new owner, which varies widely by city and township. Rather than trust a rule of thumb, run the address through the property tax calculator, then the affordability calculator, and compare the result with your comfortable number.
  - H2: **What is actually in the monthly payment?** — _RENAME (was H2 'Where the money actually goes' + H3)_
    > Principal and interest on the loan, property taxes, homeowners insurance, mortgage insurance if your loan has it, and association dues if the home has an association. Taxes and insurance are the pieces buyers most often leave out, and in Michigan the tax line depends on the new-owner reset, not the seller's bill.
    - H3: **What costs should I expect besides the down payment?** — _KEEP_
  - H2: **Do Michigan property taxes change what I can afford?** — _RENAME (promoted from FAQ)_
    > Yes, often more than buyers expect. The year after a Michigan home sells, its taxable value resets to half of the assessor's market value, and a rental or second home also pays school operating millage a principal residence does not. Run the specific address through the Michigan property tax calculator before you set a price.
  - H2: **Do I really need a large down payment?** — _KEEP_
    > Not always. Loan programs have different down payment structures, and which ones apply depends on your credit, income, the property and the program, not on a figure you heard. Putting less down is not automatically better either. Before you spend another year saving toward a number, find out whether that number applies to you.
    - H3: **Deciding you cannot before anybody has looked** — _RENAME (was 'What this looks like in practice')_
  - H2: **Which loans fit a tighter budget?** — _RENAME (was 'The loans to compare first')_
    > FHA, conventional HomeReady and Home Possible, VA and USDA are built for buyers without a large down payment, each with its own mortgage insurance or fee structure. MSHDA's MI 10K can add up to $10,000 if you qualify. The cheapest-looking option is not always cheapest over time, so compare total cost, not one line.
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP_
  - H2: **Budget questions people ask** — _RENAME (see FAQ)_
  - H2: **What clients say** — _KEEP_
  - H2: **Get the answer from your actual situation** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- Does preapproval tell me what I should spend? — _KEEP_
- What if I am comfortable with less than I qualify for? — _KEEP_
- Do car payments and student loans affect how much house I can afford? — _RENAME (was 'Does my car payment matter?')_
- Why is the online estimate different from yours? — _KEEP_
- **How much should I budget for home maintenance?** _(NEW)_  
  A common rule of thumb is about 1% of the home's value a year, more for an older house, a roof or furnace near the end of its life, or a well and septic system. Put a monthly repair cushion inside your comfortable number rather than outside it, because things break whether or not the budget has room.
- What am I not willing to give up just to own the house? — _REMOVE from FAQ (move the sentence into the first H2 body; not a searched question)_

### Title tag and meta description

- Current title (40): `Homebuying Budget Review | Align Lending`
- **New title (56):** `How Much House Can I Afford in Michigan? | Align Lending`
- Current meta (133): What a lender will approve and what you should comfortably spend are two different numbers. A budget review works out the second one.
- **New meta (158):** Find the monthly payment that fits your life, not the lender's maximum. Add Michigan taxes as the new owner, insurance and dues, then review it with Samantha.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 7.

- Keep Article + FAQPage (update), WebApplication for the comfort calculator; add visible byline/date.
- Add Service (serviceType 'Homebuying budget review', areaServed Michigan).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/budgeting-for-your-first-home/` → "how much house you can comfortably afford in Michigan" → `/purchase/budget-review/`
- `/mortgage-calculator/` → "work out a comfortable budget first" → `/purchase/budget-review/`
- `/home-affordability-calculator/` → "the payment you can comfortably afford (in body, not only the footer)" → `/purchase/budget-review/`
- `/learn/affordability-challenges-in-todays-housing-market/` → "a Michigan homebuying budget review" → `/purchase/budget-review/`

**Add outbound from this page (exact anchor → URL):**

- "home affordability calculator" → /home-affordability-calculator/
- "Michigan mortgage calculator" → /mortgage-calculator/
- "debt-to-income ratio" → /learn/debt-to-income-ratio-dti/
- "rent vs. buy calculator" → /rent-vs-buy-calculator/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Calculator page and this page both pitch 'How much house can I afford?'. | Calculator title to 'Home Affordability Calculator (DTI Limit) | Align Lending' (hand to calculators owner); this page owns 'comfortably afford in Michigan'. | P1 | medium | low |
| No body link to /home-affordability-calculator/ or /mortgage-calculator/. | Add both links in the new 'qualify vs afford' H2. | P1 | medium | low |

## 5. Mortgage Readiness Review — `/purchase/mortgage-readiness-review/` — **64 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 45 | F | H1 'There is no such thing as calling too early' has no topic words and competes with Game Plan for the same intent. |
| Heading structure | 60 | D | Empty H2 and duplicated assessment headings; good question H2 'What should I do before applying for a mortgage?'. |
| Above-the-fold answer | 58 | F | 104 ATF words of reassurance; no answer before the first H2. |
| CTA effectiveness | 78 | C | 'Start the conversation' + assessment, plus a genuinely low-friction 'Ask Samantha to check back' form. |
| Title & meta | 58 | F | 'Mortgage Readiness Review | Align Lending' matches no query; meta 140. |
| Internal linking | 74 | C | 64 contextual inlinks and good outlinks, but they split equity with Game Plan. |
| E-E-A-T & trust | 72 | C | Only one source (AnnualCreditReport.com); bio and reviews present; one review's text was edited from the Google original. |
| AI-search readiness | 66 | D | Strong 4-item answer under the first H2; 5 FAQ; duplicate content dilutes it. |
| Accuracy & compliance | 80 | B | Facts fine; Jason Sych review text corrected ('insure i' → 'ensure I') versus the version on 6 other pages. |
| **Overall (weighted)** | **64** | **D** | |

### Primary query and intent

- **Target:** RECOMMENDED: merge into Game Plan (301). If Align keeps the page: 'how to get ready for a mortgage' / 'what do lenders look at for a mortgage' (credit, savings and timing, 6–18 months out)
- **Evidence:** GSC: no readiness-specific queries with impressions. PAA: 'What would disqualify you from a mortgage?', 'What looks bad on bank statements for a mortgage?', 'What are red flags for mortgage lenders?', 'What credit score do you need to buy a house in Michigan?'.
- **Cannibalization:** High with Game Plan (identical assessment, same thesis, synonym H2s and FAQs) and with /learn/preparing-to-buy/ and /learn/credit-and-qualifying/. 64 contextual inlinks, almost all from learn articles with anchors 'Take a mortgage readiness review' (37) and 'Take the readiness review' (36).

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Mortgage Readiness Review | Mortgage Readiness Review |
| H1 | There is no such thing as calling too early | **Getting Mortgage-Ready in Michigan: Credit, Savings and Timing** |
| Subhead (55 words) | Next year is not too early, and neither is next month. The only thing we do not want is you stressed about something you do not need to be stressed about yet. | If you plan to buy in the next six to eighteen months, start with your credit reports, savings and how your income is paid. Samantha reviews what lenders will look at, names anything worth fixing and how long it usually takes, and checks back when you choose. No application and no credit pull to talk. |
| Primary CTA | Start the conversation → Calendly | **Start my readiness review** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Take the readiness assessment → #readiness | Ask Samantha to check back later → `https://alignlending.com/purchase/mortgage-readiness-review/#check-back` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Getting Mortgage-Ready in Michigan: Credit, Savings and Timing**
  - H2: **What should I do before applying for a mortgage?** — _KEEP_
    > Pull your free credit reports at AnnualCreditReport.com, total what you have for a down payment and closing costs, note how your income is paid, and pick a rough move date. None of it has to be in good shape yet. It tells Samantha where to start, and what needs time while you still have time to give it.
  - H2: **What do lenders check before approving a mortgage?** — _NEW_
    > Four things about you: credit history and score, income and how it is paid, assets for the down payment and closing costs, and monthly debts compared with income. The home matters too, through the appraisal. Knowing which piece is your weak spot tells you what to work on and roughly how long it will take.
  - H2: **What if my credit needs work?** — _RENAME (promoted from H3)_
    > Do not start random fixes from the internet. Samantha looks at what is on your reports and which items matter for a mortgage specifically. Some, like a recent late payment or high card balances, change on different timelines, so finding out now gives you the most months to work with. You leave with an order of operations.
  - H2: **What should I start gathering?** — _RENAME (promoted from H3)_
    > Basic income and asset documents are a reasonable start: recent pay stubs or returns, bank statements and anything showing other income. But a W-2 employee, a self-employed owner and a retiree each need different lists, so talk first and get the list that matches your situation rather than a generic one that creates homework you do not need.
  - H2: **What calling early actually buys you** — _RENAME (was 'What this looks like in practice')_
  - H2: **Not the right time? Ask Samantha to check back** — _RENAME (promote form; currently unlabeled H3 text)_
  - H2: **How ready are you to buy a home?** — _REMOVE duplicate assessment; link to /purchase/homebuyer-game-plan/#readiness instead_
  - H2: **The loans to compare first** — _KEEP_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP (add CFPB credit report page)_
  - H2: **Questions people actually ask** — _KEEP (delete 'How early is too early to call?', duplicated on Game Plan)_
  - H2: **What clients say** — _KEEP_
  - H2: **Start with a conversation, not an application** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- What if I am not ready? — _KEEP_
- Do I have to apply for anything? — _KEEP_
- Will this pull my credit? — _KEEP_
- **What would stop me from getting a mortgage?** _(NEW)_  
  Usually something fixable with time: a recent late payment or collection, debts that are high next to income, too short an income history, or cash for closing that cannot be documented. Large unexplained deposits and new debt during the process also cause problems. Most of these are easier to solve six months before an offer than six days.

### Title tag and meta description

- Current title (41): `Mortgage Readiness Review | Align Lending`
- **New title (50):** `Getting Mortgage-Ready in Michigan | Align Lending`
- Current meta (140): One conversation before you apply for anything. There is no application and no credit pull to talk, and next year is not too early to start.
- **New meta (158):** Buying in 6 to 18 months? See what lenders check, what to fix and how long it takes. No application, no credit pull, and Samantha checks back when you choose.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 5.

- If merged: remove from sitemap after the 301; no schema needed.
- If retained: Article + FAQPage (updated), visible byline/date; remove the duplicate assessment WebApplication.

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/credit-repair-strategies-for-home-buyers/` → "getting mortgage-ready in Michigan" → `/purchase/mortgage-readiness-review/`
- `/learn/credit-and-qualifying/` → "a mortgage readiness review" → `/purchase/mortgage-readiness-review/`

**Add outbound from this page (exact anchor → URL):**

- "the homebuyer readiness check" → /purchase/homebuyer-game-plan/#readiness
- "CFPB: check your credit reports (external)" → https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Duplicates Game Plan's assessment, thesis and FAQ; two URLs compete for 'what to do before buying/applying'. | PREFERRED: 301 to /purchase/homebuyer-game-plan/#readiness and move the unique pieces (first H2 answer, credit section, check-back form). FALLBACK: keep with the credit-readiness outline and remove the duplicate assessment. | P1 | high | medium |
| Review by Jason Sych is edited (spelling/punctuation) here but verbatim on 6 other pages. | Use the verbatim Google text everywhere, or mark '[edited for spelling]'. | P2 | low | low |
| Empty H2 from the assessment component. | Same template fix as Game Plan. | P1 | medium | low |

## 6. Self-Employed Homebuyer — `/purchase/self-employed-homebuyer/` — **71 (C)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 62 | D | H1 'Self-employed is different, not harder' names the audience but not mortgage, home loan or Michigan. |
| Heading structure | 74 | C | Logical question H2/H3s; 'Why the paperwork looks different' is vague; good FAQ set. |
| Above-the-fold answer | 68 | D | 118 ATF words: 'a documentation question, not a verdict' partly answers; no mention of two-year history or how income is counted. |
| CTA effectiveness | 72 | C | 'Review my situation' does not say what is reviewed; 'See what is likely to come up' is a strong secondary. |
| Title & meta | 60 | D | 'Self-Employed Homebuyer Plan | Align Lending' lacks 'mortgage' and 'Michigan'; meta 139. |
| Internal linking | 62 | D | Only 22 contextual inlinks; not in the hub router; good product outlinks. |
| E-E-A-T & trust | 82 | B | Fannie Mae Selling Guide B3-3.2-01 and IRS transcript sources, bio, reviews. |
| AI-search readiness | 74 | C | Quotable two-year-history answer; 6 FAQ; income calculation not explained step by step. |
| Accuracy & compliance | 88 | B | Two-year rule and 12–24 month exception match Fannie B3-3.2-01; non-QM 'usually costs more' is fair. |
| **Overall (weighted)** | **71** | **C** | |

### Primary query and intent

- **Target:** self-employed mortgage Michigan — secondary: michigan mortgage for self-employed, mortgage for freelancers michigan, how do lenders calculate self-employed income
- **Evidence:** GSC: 'michigan mortgage for self-employed' 16 impr pos 1.3; 'michigan mortgage for freelancers' 29 impr pos 21.4; 'non qm loans for self employed' 16 impr pos 48.3; 'michigan bank statement loans' 70 impr pos 54.4 (product page). PAA (general): 'What looks bad on bank statements for a mortgage?', 'Do mortgage brokers look at your bank account?'.
- **Cannibalization:** Medium. /product-loans/bank-statement-loan/ owns the product query; /learn/how-to-buy-home-as-freelancer/ (5,478 words, 9 inlinks) and /learn/non-qm-loans-for-self-employed-borrowers/ cover the national how-to. This page should own the Michigan, documentation-first 'self-employed mortgage' intent and link to both.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Self-Employed Homebuyer | Self-Employed Homebuyers |
| H1 | Self-employed is different, not harder | **Getting a Mortgage When You Are Self-Employed in Michigan** |
| Subhead (50 words) | The way your income gets reviewed is not the same as a regular paycheck. That is a documentation question, not a verdict on whether you qualify. | Most loans want two years of self-employment history and qualify you on income after write-offs, so your tax returns matter more than your revenue. If returns understate what the business earns, bank statement and 1099 loans read income differently. Samantha reviews your returns first and tells you which route fits. |
| Primary CTA | Review my situation → Calendly | **Review my self-employed income** → `https://calendly.com/samanthashelton` |
| Secondary CTA | See what is likely to come up → #doc-readiness | See which documents apply to me → `https://alignlending.com/purchase/self-employed-homebuyer/#doc-readiness` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Getting a Mortgage When You Are Self-Employed in Michigan**
  - H2: **What changes when I am self-employed?** — _KEEP_
    > Mainly documentation. Lenders usually want two years of self-employment history, your personal and business tax returns, and a look at how income moved year to year. Your business structure decides the list: a sole proprietor, an S corporation and a partnership each document income differently. The check below shows what is likely for yours.
    - H3: **What is likely to come up for your situation?** — _KEEP (document check)_
  - H2: **How do lenders calculate self-employed income?** — _RENAME (was H3 'Why business income and qualifying income are not the same number')_
    > From your tax returns, not your revenue. A lender starts with net income after write-offs, adds back certain non-cash items such as depreciation, and usually averages two years, looking harder at the lower year if income fell. So deductions that cut your taxes also cut the income you qualify with. Ask before you file.
  - H2: **What documents will I need as a self-employed borrower?** — _RENAME (promoted H3 'What documents will I actually need?')_
    > Usually two years of personal and business federal returns with all schedules, sometimes a year-to-date profit and loss statement, recent bank statements, and papers showing your ownership share and how the business is set up. IRS tax transcripts often confirm the returns. Your structure and history decide which apply, so start with your returns.
  - H2: **How long do I need to be self-employed to get a mortgage?** — _RENAME (promoted from FAQ)_
    > Most programs want two years. Between one and two years can work when it follows at least two years in the same line of work as an employee. Under a year is usually too short for the income to count yet, so bring what you did before and Samantha will look at what applies to your file.
  - H2: **When does a bank statement or 1099 loan make sense?** — _NEW_
    > When your returns, after write-offs, understate what the business really earns, or you are paid on 1099s. Bank statement loans read income from twelve or twenty-four months of deposits; 1099 loans use the forms themselves. They are non-QM loans, usually priced above conventional, so compare them against a standard loan first.
    - H3: **Complicated and impossible are not the same thing** — _RENAME (was 'What this looks like in practice')_
  - H2: **Which loans should self-employed buyers compare?** — _RENAME (add 'Conventional Loan' card first; keep Bank Statement, 1099, Asset-Based, Non-QM)_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP_
  - H2: **Questions people actually ask** — _KEEP (see FAQ)_
  - H2: **What clients say** — _KEEP_
  - H2: **Start with what your returns actually show** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- Why does the number I think I make not match the number the mortgage uses? — _KEEP_
- Is being self-employed harder? — _KEEP_
- What if I have more than one business? — _KEEP_
- Should I change how I file before I buy? — _KEEP_
- Does Michigan property tax change what I qualify for? — _KEEP_
- **Can I get a mortgage with a business that is less than two years old?** _(NEW)_  
  Sometimes. If you spent at least two years in the same field as an employee before going out on your own, many programs can count twelve to twenty-four months of self-employment. With less history, a larger down payment or a non-QM option may fit. Bring your prior work history and your most recent return to the first call.

### Title tag and meta description

- Current title (44): `Self-Employed Homebuyer Plan | Align Lending`
- **New title (51):** `Self-Employed Mortgages in Michigan | Align Lending`
- Current meta (139): Self-employed is different, not harder. The way your income gets reviewed changes, which is a documentation question rather than a verdict.
- **New meta (156):** Self-employed in Michigan? See how lenders count business income, what documents you need and when bank statement or 1099 loans fit. No credit pull to talk.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 6.

- Keep Article + FAQPage (update); add visible byline/date; add Service (serviceType 'Self-employed mortgage guidance', areaServed Michigan).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/product-loans/1099-income-loans/` → "self-employed mortgage options in Michigan" → `/purchase/self-employed-homebuyer/`
- `/product-loans/asset-based-income-loans/` → "getting a mortgage when you are self-employed" → `/purchase/self-employed-homebuyer/`
- `/learn/how-to-buy-home-as-freelancer/` → "self-employed mortgages in Michigan (replace anchor 'Review a self-employed plan')" → `/purchase/self-employed-homebuyer/`
- `/learn/non-qm-loans-for-self-employed-borrowers/` → "how lenders count self-employed income" → `/purchase/self-employed-homebuyer/`
- `/purchase/` → "Self-employed income (router card)" → `/purchase/self-employed-homebuyer/`

**Add outbound from this page (exact anchor → URL):**

- "debt-to-income ratio" → /learn/debt-to-income-ratio-dti/
- "buying a home as a freelancer" → /learn/how-to-buy-home-as-freelancer/
- "Michigan bank statement loans" → /product-loans/bank-statement-loan/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Only 22 contextual inlinks; absent from the hub router. | Add the 5 inbound links. | P1 | high | low |
| Primary CTA 'Review my situation' is generic. | Rename to 'Review my self-employed income'. | P2 | low | low |

## 7. Buy Before You Sell — `/purchase/buy-before-you-sell/` — **70 (C)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 55 | F | H1 'You are coordinating two houses, not one' is evocative but has no query terms; the title carries 'Buy Before You Sell'. |
| Heading structure | 74 | C | Strong first H2 'Do I sell first or buy first?'; H3 'Where does this go wrong most often?' repeats its H2. |
| Above-the-fold answer | 64 | D | 115 ATF words: sound advice ('do not list… until') but the options are not named before the first H2. |
| CTA effectiveness | 80 | B | 'Plan my move' and 'Work out the timing' fit the intent. |
| Title & meta | 60 | D | 'Buy Before You Sell | Align Lending' (35) has no Michigan or hook; meta 137. |
| Internal linking | 80 | B | 78 contextual inlinks; links to HELOC, bridge-loan guide, seller net sheet and transfer tax calculator. |
| E-E-A-T & trust | 70 | C | No 'Where these rules come from' section; agent review and bio present. |
| AI-search readiness | 72 | C | 'What are the actual ways people handle this?' lists the tools; no direct answer on how a bridge loan works. |
| Accuracy & compliance | 86 | B | Transfer tax exemption and the 2024 commission-practice change are described correctly. |
| **Overall (weighted)** | **70** | **C** | |

### Primary query and intent

- **Target:** buy before you sell Michigan — secondary: buying a house before selling yours, can I buy a house before selling mine, michigan bridge loan mortgage
- **Evidence:** GSC: 'michigan bridge loan mortgage' 20 impr pos 2.7; 'selling your home to downsize in michigan' 11 impr pos 8.2; 'can a seller back out of a contingent offer' 11 impr pos 28.6. PAA ('buying a house before selling yours', Michigan): 'What two things should you do before you make an offer?', 'Should I buy now or wait?', 'What not to do before you sell your house?'.
- **Cannibalization:** Medium with /learn/bridge-loans/ ('Bridge loans: What you need to know before you buy first', 50 inlinks), which does not link to this page, and /learn/home-sale-contingencies/.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Buy Before You Sell | Buy Before You Sell |
| H1 | You are coordinating two houses, not one | **Buy Before You Sell in Michigan: How to Time Two Homes** |
| Subhead (54 words) | Do not list the house you are in, or fall in love with the next one, until you understand how the two transactions fit together. | You can buy first, sell first, or close both together. Which works depends on whether you can qualify while carrying both payments and when your equity becomes cash. The usual tools are a sale contingency, a bridge loan, a HELOC on your current home or a rent-back. Samantha maps both closings before you list. |
| Primary CTA | Plan my move → Calendly | **Plan my move with Samantha** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Work out the timing → #sell-timing | Estimate what my sale nets → `https://alignlending.com/purchase/buy-before-you-sell/#sell-timing` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Buy Before You Sell in Michigan: How to Time Two Homes**
  - H2: **Do I sell first or buy first?** — _KEEP_
    > It depends on two things: whether you can qualify carrying both payments, and when your equity becomes usable cash. If you can, buying first avoids a double move. If you need the sale proceeds, sell first or close both together, using a rent-back or later possession to buy time. Decide before you list anything.
  - H2: **Can I buy a house before selling mine?** — _NEW_
    > Often, yes, if your income supports both housing payments or the lender can set aside your current payment because the sale is under contract. A home sale contingency, a bridge loan or a HELOC can supply the down payment before your sale closes. Each has a cost and a catch, so compare them with your real numbers first.
  - H2: **When can I use the equity in my current home?** — _RENAME (was 'Equity and available money are not the same thing')_
    > Only when it becomes cash: at your sale's closing, or earlier if you borrow against it with a HELOC or bridge loan. Your net is the sale price minus every lien payoff, commissions, concessions, title fees and transfer tax, if owed. The calculator below shows what is likely to land from the sale, and when.
    - H3: **What would actually land from the sale, and when?** — _KEEP (net-proceeds calculator)_
  - H2: **How does a bridge loan work?** — _NEW_
    > A bridge loan is short-term financing secured by the home you own, used for the next home's down payment, then paid off when your current home sells. It costs more than a standard mortgage and usually means carrying two payments for a while. A HELOC opened before you list can do a similar job at a different cost.
  - H2: **Where does buying and selling at once go wrong?** — _RENAME (merges H2 'Where this goes wrong' and its duplicate H3)_
    > When one side starts before the other is understood: listing before you know how the next purchase works, or falling for a house before you know what happens to the one you own. Urgency drives decisions you would not otherwise make. Test the assumption that you must sell first before it drives everything else.
    - H3: **What makes this harder than buying your first house** — _KEEP_
  - H2: **What if the sale and the purchase do not line up?** — _KEEP_
    > Have a backup before you need it. Dates can sometimes move if everyone agrees, a rent-back or later possession date can keep you in your current home, and short-term housing can cover a gap. There is no prize for closing both homes on the same day; taking the pressure off is often worth more.
    - H3: **What getting the order wrong looks like** — _RENAME (was 'What this looks like in practice')_
  - H2: **Does Michigan change anything when you buy and sell?** — _RENAME (promoted from FAQ)_
    > Two things. The next home's property tax resets the year after you buy, so do not assume it matches your current bill. And when you sell a principal residence whose state equalized value has not risen since you bought it, the state transfer tax may not apply. Run both numbers before you list.
  - H2: **Which loans help you buy before you sell?** — _RENAME (was 'The loans to compare first')_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _NEW (Michigan Treasury transfer tax, CFPB HELOC booklet, Michigan Treasury uncapping)_
  - H2: **Questions people actually ask** — _KEEP (see FAQ)_
  - H2: **What clients say** — _KEEP_
  - H2: **Understand how the two transactions fit together** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- Do I have to sell my house first? — _KEEP_
- How early should I call if I am only thinking about moving? — _KEEP_
- What are the actual ways people handle this? — _KEEP_
- Should I just sell and rent for a while? — _KEEP_
- Who needs to be talking to who? — _KEEP_
- **Can I afford two mortgages at once?** _(NEW)_  
  Only if your income covers both payments within the loan program's debt-to-income limits, or the lender can exclude your current payment because that sale is under contract with contingencies cleared. Even when it qualifies, check whether carrying both for a few months feels comfortable, including taxes, insurance and utilities on two homes.

### Title tag and meta description

- Current title (35): `Buy Before You Sell | Align Lending`
- **New title (56):** `Buy Before You Sell in Michigan: Options | Align Lending`
- Current meta (137): You are coordinating two houses, not one. Do not list the one you are in, or fall for the next one, until you know how they fit together.
- **New meta (156):** Own a home and need another? Compare buying first, selling first, bridge loans, HELOCs and rent-backs, and see what your Michigan sale nets before you list.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 6.

- Keep Article + FAQPage (update); add visible byline/date; WebApplication for the net-proceeds calculator.
- Add Service (serviceType 'Buy-before-you-sell mortgage planning', areaServed Michigan).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/bridge-loans/` → "buying a home before you sell yours in Michigan" → `/purchase/buy-before-you-sell/`
- `/learn/home-sale-contingencies/` → "plan the order of your sale and purchase" → `/purchase/buy-before-you-sell/`
- `/product-loans/heloc/` → "using a HELOC to buy before you sell" → `/purchase/buy-before-you-sell/`
- `/seller-net-sheet-calculator/` → "buying your next home before this one sells" → `/purchase/buy-before-you-sell/`

**Add outbound from this page (exact anchor → URL):**

- "Michigan Treasury: real estate transfer tax (external)" → https://www.michigan.gov/taxes/property/transfer-tax [VERIFY exact URL]
- "CFPB: what you should know about home equity lines of credit (external)" → https://files.consumerfinance.gov/f/201401_cfpb_booklet_heloc.pdf [VERIFY]
- "Michigan home equity loans" → /product-loans/home-equity-loan/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| No external sources section, unlike 9 sibling pages. | Add 'Where these rules come from' with Treasury and CFPB links. | P1 | medium | low |
| H3 'Where does this go wrong most often?' duplicates its parent H2. | Merge into one question-led H2. | P2 | low | low |

## 8. VA Homebuyer Plan — `/purchase/va-homebuyer-plan/` — **63 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 45 | F | H1 'You do not need to apologize for using a benefit you earned' omits 'VA loan' and 'Michigan'; Michigan VA queries sit at positions 49–69. |
| Heading structure | 66 | D | Only 4 FAQ; no eligibility, entitlement or 'downside' sections that searchers ask about. |
| Above-the-fold answer | 52 | F | 65 ATF words, no Samantha/NMLS line (the only purchase page without it), no answer. |
| CTA effectiveness | 78 | C | 'Talk to somebody who knows VA' and 'See your funding fee' fit the intent. |
| Title & meta | 50 | F | 'VA Homebuyer Plan | Align Lending' (33) has no 'loan' or 'Michigan'; meta 127. |
| Internal linking | 60 | D | 18 contextual inlinks, the lowest in the section; missing from the hub router. |
| E-E-A-T & trust | 76 | C | VA COE, VA home loans and Michigan Treasury sources; ATF trust line incomplete. |
| AI-search readiness | 68 | D | Excellent quotable Michigan exemption answer (MCL 211.7b, Form 5107) and funding-fee calculator; few other direct answers. |
| Accuracy & compliance | 88 | B | Funding fee schedule since April 7, 2023 and exemption categories match VA (confirmed via secondary sources; va.gov blocked here). |
| **Overall (weighted)** | **63** | **D** | |

### Primary query and intent

- **Target:** buying a home with a VA loan in Michigan — secondary: michigan va loan eligibility, va home loan michigan (shared with the product page), michigan disabled veteran property tax exemption
- **Evidence:** GSC: 'michigan va loans' 52 impr pos 49.4; 'va loans michigan' 48 pos 53.6; 'va home loan michigan' 40 pos 68.9; 'michigan va loan eligibility' 22 pos 22.9; 'michigan va loan application' 26 pos 23.5; 'va loan benefits for disabled veterans' 31 pos 42.1; 'va loan requirements' 169 pos 77. PAA ('va home loan michigan'): 'What is the downside of a VA loan?', 'What is the VA loan 1% rule?'. Competitors: lender pages plus michigan.gov/mvaa.
- **Cannibalization:** High. /product-loans/va-loans/ ('Michigan VA Loan Broker', 3,810 total inlinks) should own 'Michigan VA loans'; /learn/buying-home-with-va-loan/ ('VA Loans: How To Buy A Home With Your Benefit', 6,165 words) targets the same buyer intent nationally; /learn/va-loans/ and /learn/how-to-qualify-for-va-loan/ cover eligibility. This page should own the Michigan buyer intent and the disabled-veteran tax exemption.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | VA Homebuyer Plan | VA Homebuyer Plan |
| H1 | You do not need to apologize for using a benefit you earned | **Buying a Home With a VA Loan in Michigan** |
| Subhead (57 words) | Do not let somebody who does not understand VA financing talk you out of understanding it. Understand it first, then decide whether it makes sense for you. | A VA loan has no monthly mortgage insurance, and a well-prepared VA offer competes on the same terms as any other. Your Certificate of Eligibility shows your entitlement, the funding fee depends on prior use and down payment, and qualifying disabled veterans can claim a full Michigan property tax exemption. Samantha checks all three before you shop. |
| Primary CTA | Talk to somebody who knows VA → Calendly | **Talk with Samantha about VA** → `https://calendly.com/samanthashelton` |
| Secondary CTA | See your funding fee → #va-fee | Estimate my funding fee → `https://alignlending.com/purchase/va-homebuyer-plan/#va-fee` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google, 123 reviews (no Samantha/NMLS) | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Buying a Home With a VA Loan in Michigan**
  - H2: **What do most veterans not know about their own benefit?** — _KEEP_
    > That it can usually be used more than once, that a funding fee exemption may apply, and that a VA offer is not a weaker offer. Many veterans also do not know Michigan fully exempts a qualifying disabled veteran's homestead from property tax. Start with your Certificate of Eligibility, then check what you have been told.
  - H2: **Who is eligible for a VA home loan?** — _NEW_
    > Veterans, active-duty service members, and National Guard and Reserve members who meet VA's service requirements, plus some surviving spouses. Eligibility is confirmed by a Certificate of Eligibility, which a lender can usually request online. The COE also shows how much entitlement you have available, which matters if you have used the benefit before.
  - H2: **How much is the VA funding fee?** — _RENAME (was H3 'What will your VA funding fee be?')_
    > VA sets it by loan type, whether you have used the benefit before and your down payment, and it is often financed into the loan. Veterans receiving VA disability compensation, Purple Heart recipients on active duty and some surviving spouses are exempt. The calculator below applies VA's schedule in effect since April 7, 2023.
  - H2: **Is a VA offer weaker than a conventional offer?** — _RENAME (was 'The myth that a VA offer is a weaker offer')_
    > No. A well-prepared VA buyer with a lender who knows the program should compete on the same footing. The worry usually comes from old stories about appraisals or timing. When a listing agent hesitates, a direct call between the lender and the agent about the actual concern resolves most of it.
    - H3: **What happens when an agent is worried about VA financing?** — _KEEP_
  - H2: **Can I use my VA loan benefit more than once?** — _RENAME (promoted H3)_
    > Usually, yes. Entitlement can be restored after you sell and pay off a prior VA loan, and in some cases you can hold a second VA loan while keeping the first, using remaining entitlement. The answer depends on your Certificate of Eligibility and what happened with the earlier property, so Samantha checks those first.
    - H3: **I already used my VA loan, so that was it** — _RENAME (was 'What this looks like in practice')_
  - H2: **Do disabled veterans pay property tax in Michigan?** — _RENAME (promoted from FAQ)_
    > A qualifying disabled veteran's homestead can be fully exempt from Michigan property tax under MCL 211.7b, claimed on Form 5107 with the local assessor. Eligibility follows the VA disability and unemployability ratings Michigan Treasury lists. Check it before you budget the tax line, because it can change your monthly housing cost substantially.
  - H2: **Which loans should veterans compare?** — _RENAME (was 'The loans to compare first')_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP (add Michigan Veterans Affairs Agency and VA funding fee page)_
  - H2: **VA homebuyer questions** — _RENAME (see FAQ)_
  - H2: **What clients say** — _KEEP_
  - H2: **Understand it first, then decide** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- What should I have ready before I call? — _KEEP_
- Does anybody besides the veteran qualify? — _KEEP_
- Is a VA offer really harder to get accepted? — _REMOVE (now covered by the H2)_
- **What is the downside of a VA loan?** _(NEW)_  
  The funding fee is the main cost unless you are exempt, and the home must meet VA's minimum property requirements, which can matter on a fixer-upper. VA loans are for a home you will live in, not a rental. For some buyers with a large down payment, a conventional loan can cost less overall, so compare both.
- **Is there a VA loan limit in Michigan?** _(NEW)_  
  Veterans with full entitlement have no VA loan limit; the amount is set by what you qualify for. If part of your entitlement is still in use on another VA loan, the county conforming limit, $832,750 in every Michigan county for 2026, affects how much VA will guarantee. Samantha reads your Certificate of Eligibility to tell you which applies.

### Title tag and meta description

- Current title (33): `VA Homebuyer Plan | Align Lending`
- **New title (56):** `Buying a Home With a VA Loan in Michigan | Align Lending`
- Current meta (127): A VA buyer is not a weaker buyer. Understand the benefit you earned before somebody who does not understand it decides for you.
- **New meta (156):** Using your VA benefit in Michigan? Check entitlement and your funding fee, see how VA offers compete, and learn the disabled veteran property tax exemption.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 4.

- Keep Article + FAQPage (update); add visible byline/date.
- Add Service (serviceType 'VA home loan guidance', audience: Audience 'Veterans and service members', areaServed Michigan).
- Add the Samantha/NMLS trust line ATF (template component used on every other purchase page).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/purchase/` → "Using a VA benefit (router card)" → `/purchase/va-homebuyer-plan/`
- `/product-loans/va-loans/` → "buying a home with a VA loan in Michigan (replace anchor 'VA Homebuyer Plan')" → `/purchase/va-homebuyer-plan/`
- `/va-loan-calculator/` → "plan a Michigan VA purchase" → `/purchase/va-homebuyer-plan/`
- `/va-funding-fee-calculator/` → "how the funding fee fits a Michigan VA purchase" → `/purchase/va-homebuyer-plan/`
- `/learn/how-to-qualify-for-va-loan/` → "using your VA benefit to buy in Michigan" → `/purchase/va-homebuyer-plan/`
- `/learn/va-loan-benefits-for-veterans/` → "the Michigan VA homebuyer plan" → `/purchase/va-homebuyer-plan/`

**Add outbound from this page (exact anchor → URL):**

- "Michigan VA loan calculator" → /va-loan-calculator/
- "how to qualify for a VA loan" → /learn/how-to-qualify-for-va-loan/
- "Michigan Veterans Affairs Agency (external)" → https://www.michigan.gov/mvaa
- "VA: funding fee and closing costs (external)" → https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| ATF lacks the Samantha Shelton / NMLS line every sibling shows. | Add the standard trust component. | P1 | medium | low |
| 18 contextual inlinks; not in hub router; product page links with a bare 'VA Homebuyer Plan' anchor. | Add the 6 inbound links. | P0 | high | low |
| va.gov could not be fetched from this session; funding-fee schedule confirmed via secondary sources only. | [VERIFY] the April 7, 2023 schedule on va.gov before publishing. | P2 | low | low |

## 9. Investment Property Financing — `/purchase/investment-property-financing/` — **68 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 50 | F | H1 'Buy it because the numbers work, not because you like the house' has no query terms; title 'Investment Property Financing' is closer. |
| Heading structure | 68 | D | H4 widget label 'Every month, whoever is in it'; vague H2 'The part people skip'; no rental-income or DSCR section. |
| Above-the-fold answer | 60 | D | 127 ATF words open with a quote and a question; no financing facts above the fold. |
| CTA effectiveness | 80 | B | 'Review a property with us' and 'See what the property produces' match intent. |
| Title & meta | 62 | D | Title lacks Michigan; meta 133 chars with curly quotes and no proof. |
| Internal linking | 72 | C | 63 contextual inlinks, but the CTA anchor 'Review an investment property' accounts for 100 inbound link instances, so almost none describe the topic. |
| E-E-A-T & trust | 80 | B | Fannie Mae B3-3.1-08 and IRS Pub 527 sources; no review quote, only a link. |
| AI-search readiness | 70 | C | Non-homestead millage answer is quotable; no direct answers on down payment, rental income or DSCR. |
| Accuracy & compliance | 88 | B | Non-homestead school operating millage statement is correct; no trigger terms. |
| **Overall (weighted)** | **68** | **D** | |

### Primary query and intent

- **Target:** investment property loan Michigan — secondary: how to finance an investment property, how do lenders count rental income, DSCR vs conventional
- **Evidence:** GSC: 'investment real estate financing' 40 impr pos 64.4; 'financing for real estate investments' 27 pos 60.2; 'financing an investment property' 6 pos 76.5; 'investment property financing strategies' 3 pos 14.7; DSCR cluster ('dscr loans michigan' 230, 'dscr loan michigan' 206) belongs to /product-loans/dscr-loans-michigan/. PAA: 'How much deposit do you need for an investment property loan?', 'What are the downsides of a DSCR loan?'.
- **Cannibalization:** Medium. /learn/financing-investments/ ('How To Finance A Real Estate Investment: 8 Loan Options') and /learn/buying-home-as-investment-property/ (70 inlinks) target the national how-to; the DSCR product page owns DSCR. This page should own 'investment property loans in Michigan' and the underwriting questions.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Investment Property Financing | Investment Property Financing |
| H1 | Buy it because the numbers work, not because you like the house | **Investment Property Loans in Michigan: Run the Numbers First** |
| Subhead (56 words) | “I want to buy a rental” is not the plan. That is the beginning of the conversation. What are you actually trying to accomplish? | A rental is financed as a business. Lenders want a larger down payment than on a home you live in and cash reserves after closing, and they count only part of expected rent, or qualify the property on its rent with a DSCR loan. Samantha checks whether the property carries its own costs before you offer. |
| Primary CTA | Review a property with us → Calendly | **Review a property with Samantha** → `https://calendly.com/samanthashelton` |
| Secondary CTA | See what the property produces → #rental-flow | See what the property produces → `https://alignlending.com/purchase/investment-property-financing/#rental-flow` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Investment Property Loans in Michigan: Run the Numbers First**
  - H2: **What is different about financing a property you will not live in?** — _KEEP_
    > The loan is underwritten as a business. Expect a larger down payment than on a home you live in, cash reserves after closing and a closer look at how rental income is documented. Pricing is usually higher than for a primary residence. It is not necessarily harder, just a different transaction with different math.
    - H3: **What does the property produce before the financing?** — _KEEP (calculator; H4 label becomes styled text)_
  - H2: **How do lenders count rental income?** — _RENAME (promoted from FAQ)_
    > Usually not dollar for dollar. Conventional guidelines typically count a portion of the lease or the appraiser's market rent to allow for vacancy and upkeep, or use Schedule E from your returns if you already own rentals. A DSCR loan instead compares the property's rent with its payment. Your program decides which applies.
  - H2: **What is a DSCR loan, and when does it fit?** — _NEW_
    > A debt service coverage ratio loan qualifies the property on its rent compared with its monthly payment, taxes, insurance and dues, rather than on your personal income. It suits investors whose returns understate income or who own several rentals. It is a non-QM loan, usually priced above conventional, so compare both before choosing.
  - H2: **What does it mean for the property to work?** — _KEEP_
    > It means rent covers the property's taxes, insurance, repairs, management and vacant months before the mortgage, with enough left to carry the payment. Run it with a month or two empty and a real repair budget. If it only works when nothing goes wrong, it does not work yet.
  - H2: **How much should I keep in reserve after closing?** — _RENAME (was H2 'The part people skip' + H3 'Reserves…')_
    > Enough for at least one vacant month and one major repair on this property, held separately from your personal emergency fund. Loan programs set their own minimum reserves, often measured in months of payments, but treat that as a floor. A furnace or a roof does not wait for the next tenant.
    - H3: **When we tell somebody a deal does not work** — _KEEP_
    - H3: **The math that only works when nothing goes wrong** — _RENAME (was 'What this looks like in practice')_
  - H2: **What is specific about financing a rental in Michigan?** — _RENAME (promoted from FAQ)_
    > Property taxes. A rental pays the non-homestead rate, which adds up to 18 mills of school operating tax that a principal residence does not, and its taxable value resets after you buy. Rental rules also vary by city and township, including inspections and short-term rental limits, so check the address before you offer.
  - H2: **Which loans should investors compare?** — _RENAME (was 'The loans to compare first')_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP_
  - H2: **Questions people actually ask** — _KEEP (see FAQ)_
  - H2: **What clients say** — _KEEP (add one review quote; currently only a link)_
  - H2: **Bring the property, and the numbers you have** — _KEEP_
  - H2: **Related reading** — _KEEP_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- What happens if the property is vacant or something breaks? — _KEEP_
- What should I have in front of me before I call? — _KEEP_
- What changes once I own more than one? — _KEEP_
- How do I know when to walk away from a property? — _KEEP_
- **What are the downsides of a DSCR loan?** _(NEW)_  
  DSCR loans are usually priced above conventional loans, often carry prepayment penalties, and may require a larger down payment and more reserves. Because they rely on the property's rent, a building that barely covers its payment may not qualify. They make the most sense when your tax returns understate income or you are scaling a portfolio.

### Title tag and meta description

- Current title (45): `Investment Property Financing | Align Lending`
- **New title (53):** `Investment Property Loans in Michigan | Align Lending`
- Current meta (133): “I want to buy a rental” is not a plan. It is the start of a conversation about whether the property actually works as an investment.
- **New meta (157):** Financing a Michigan rental? See how lenders treat rental income, reserves and DSCR loans, and check whether the property carries its costs before you offer.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Offer, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebApplication, WebPage, WebSite; FAQ questions in schema: 6.

- Keep Article + FAQPage (update); visible byline/date; WebApplication for the cash-flow calculator.
- Add Service (serviceType 'Investment property financing', areaServed Michigan).

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/financing-investments/` → "investment property loans in Michigan" → `/purchase/investment-property-financing/`
- `/learn/buying-home-as-investment-property/` → "how a Michigan rental gets financed" → `/purchase/investment-property-financing/`
- `/learn/how-to-analyze-propertys-rental-potential/` → "check whether a rental carries its own costs" → `/purchase/investment-property-financing/`
- `/learn/real-estate-investment-strategies-for-beginners/` → "financing your first rental in Michigan" → `/purchase/investment-property-financing/`

**Add outbound from this page (exact anchor → URL):**

- "how to analyze a property's rental potential" → /learn/how-to-analyze-propertys-rental-potential/
- "short-term rental regulations" → /learn/navigating-short-term-rental-regulations/
- "Michigan DSCR loans" → /product-loans/dscr-loans-michigan/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| The anchor 'Review an investment property' accounts for 100 inbound link instances; almost no inbound link names the topic. | Vary anchors on learn articles (4 examples in links_in). | P2 | medium | medium |
| Down payment percentages for investment loans would be Reg Z trigger terms. | State 'larger down payment' only; link to the DSCR page/learn guide for figures, or add full disclosures. | P1 | medium | low |

## 10. Renovation Financing — `/purchase/renovation-financing/` — **68 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 50 | F | H1 'You are not just financing the house. You are financing a plan for it' contains no program or query terms. |
| Heading structure | 76 | C | Good question H2s and a strong 7-question FAQ; no H2 per program. |
| Above-the-fold answer | 62 | D | 129 ATF words warn before answering; programs only named below the first H2. |
| CTA effectiveness | 72 | C | Secondary 'Start with a few questions' sends exploratory visitors to the application flow /start/?goal=buy. |
| Title & meta | 58 | F | 'Renovation Financing Review | Align Lending' matches no query; no 203(k)/HomeStyle or Michigan. |
| Internal linking | 70 | C | 40 contextual inlinks; program cards link to generic FHA/conventional pages; 203(k) and HomeStyle learn guides not linked. |
| E-E-A-T & trust | 82 | B | HUD, Fannie Mae and Freddie Mac sources; bio; reviews. |
| AI-search readiness | 70 | C | Specific draw-schedule answer; no program figures such as the $75,000 limited 203(k) cap. |
| Accuracy & compliance | 86 | B | Program descriptions correct; HUD consultant requirement correct; limits missing rather than wrong. |
| **Overall (weighted)** | **68** | **D** | |

### Primary query and intent

- **Target:** renovation loan Michigan — secondary: 203k loan michigan, fixer upper loan, HomeStyle renovation loan
- **Evidence:** GSC: 'conventional renovation loan' 6 impr pos 8.5; 'renovation loans for distressed properties' 5 pos 16.8; 'non owner occupied renovation loans' 3 pos 8.7; 'lenders that offer fha 203k loan with no pmi' 5 pos 12.6; many renovation-insurance queries (54–67 impr, pos 21–67) belong to /learn/home-insurance-and-renovations/. No PAA call spent (budget cap of 6 seeds); questions taken from GSC and existing FAQ.
- **Cannibalization:** Medium. /learn/what-is-renovation-loan/ (99 inlinks), /learn/benefits-of-fha-203-k-loans/ (84), /learn/financing-home-renovations-options-and-tips/ and /learn/what-is-homestyle-renovation-loan/ all explain the programs. Only /learn/what-is-renovation-loan/ links here. This page should own 'renovation loans in Michigan' with program facts and the process.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Renovation Financing | Renovation Financing |
| H1 | You are not just financing the house. You are financing a plan for it | **Renovation Loans in Michigan: Buy and Fix Up With One Mortgage** |
| Subhead (50 words) | Before you fall in love with the fixer-upper, make sure you understand what it is actually going to take to turn it into the house you are picturing. | FHA 203(k), Fannie Mae HomeStyle and Freddie Mac CHOICERenovation fold the purchase and the repairs into one loan, based on the home's value after the work. Repair money is held at closing and paid in draws as work is done. Samantha checks the scope, bids and timeline before you commit. |
| Primary CTA | Talk through a project → Calendly | **Talk through my project** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Start with a few questions → /start/?goal=buy | Run a payment on the total cost → `https://alignlending.com/mortgage-calculator/` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **Renovation Loans in Michigan: Buy and Fix Up With One Mortgage**
  - H2: **What are my options on a house that needs work?** — _KEEP_
    > Two routes. Buy the house and pay for the work separately, from savings, a later HELOC or a personal loan. Or use a renovation mortgage, FHA 203(k), Fannie Mae HomeStyle or Freddie Mac CHOICERenovation, which combines the price and the repair budget in one loan based on the home's value after the work is done.
  - H2: **How does an FHA 203(k) loan work?** — _NEW_
    > It comes in two versions. The limited 203(k) covers non-structural repairs up to $75,000 under HUD's 2024 update, without a required consultant. The standard 203(k) handles larger or structural work and requires a HUD 203(k) consultant. Both pay contractors in draws after closing as work is completed and inspected.
  - H2: **What are HomeStyle and CHOICERenovation loans?** — _NEW_
    > They are the conventional versions. Fannie Mae HomeStyle Renovation and Freddie Mac CHOICERenovation finance the purchase plus repairs based on the as-completed value, and can suit buyers with stronger credit or properties FHA will not cover, including some second homes and investment properties under program rules. Each caps renovation costs differently.
  - H2: **When does a renovation loan make sense, and when does it not?** — _RENAME (was 'When does this make sense, and when does it not?')_
    > It makes sense when the location or layout is right but the house needs real work before it works for you, and paying separately is not practical. It does not when the job is small, when you want freedom to change scope midway, or when contractor paperwork already sounds like a bad time.
  - H2: **What does a renovation loan add to a normal purchase?** — _RENAME (was H2 'What the process actually adds' + H3)_
    > A contractor's bid and written scope of work, an appraisal of the home's value after repairs, possibly a HUD consultant or inspector, a holdback of repair funds at closing and a draw schedule after closing. More people are at the table, so the timeline runs longer than a purchase that needs nothing.
    - H3: **Where these go wrong** — _KEEP_
    - H3: **One that went smoothly, and one that did not** — _RENAME (was 'What this looks like in practice')_
  - H2: **Which renovation loans should I compare?** — _RENAME (cards: link FHA 203(k) to /learn/benefits-of-fha-203-k-loans/ and HomeStyle to /learn/what-is-homestyle-renovation-loan/ in addition to product pages)_
  - H2: **About Samantha Shelton** — _RENAME_
  - H2: **Where these rules come from** — _KEEP (add HUD ML 2024-13)_
  - H2: **Questions people actually ask** — _KEEP (see FAQ)_
  - H2: **What clients say** — _KEEP_
  - H2: **Understand the work, understand the financing** — _KEEP_
  - H2: **Related reading** — _KEEP (add 'Home insurance and renovations')_
  - H2: **More loan options** — _KEEP_
  - H2: **Other homebuying questions** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- When can the work actually start, and who controls the money? — _KEEP_
- Is renovation financing too much for a first-time buyer? — _KEEP_
- Do I get the renovation money at closing? — _KEEP_
- Can I use my own contractor? — _KEEP_
- How much longer does this take? — _KEEP_
- What if I only need a small amount of work done? — _KEEP_
- Does buying a house to renovate change the Michigan property tax? — _KEEP_
- **Do I need special insurance while the house is being renovated?** _(NEW)_  
  Tell your insurer about the project before work starts. A standard homeowners policy may not cover a home under major renovation or one you have not moved into, and contractors should carry their own liability and workers' compensation coverage. Your lender will also require hazard insurance on the as-completed value.

### Title tag and meta description

- Current title (43): `Renovation Financing Review | Align Lending`
- **New title (55):** `203(k) and Renovation Loans in Michigan | Align Lending`
- Current meta (137): Renovation financing is not a remodeling budget stapled to a mortgage. There is a process behind it, and it is worth understanding early.
- **New meta (152):** Buying a fixer-upper in Michigan? Compare FHA 203(k), HomeStyle and CHOICERenovation, see how draws and contractor bids work, and plan before you offer.

### Schema

Current types: Answer, Article, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Organization, Person, PostalAddress, PropertyValue, Question, Thing, WebPage, WebSite; FAQ questions in schema: 7.

- Keep Article + FAQPage (update); visible byline/date.
- Add Service (serviceType 'Renovation mortgage guidance', areaServed Michigan) with mentions of the three programs.

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/benefits-of-fha-203-k-loans/` → "203(k) and renovation loans in Michigan" → `/purchase/renovation-financing/`
- `/learn/pros-and-cons-of-fha-203-k-loans/` → "plan a renovation purchase in Michigan" → `/purchase/renovation-financing/`
- `/learn/what-is-homestyle-renovation-loan/` → "compare HomeStyle with 203(k) for a Michigan fixer-upper" → `/purchase/renovation-financing/`
- `/learn/advantages-of-buying-fixer-upper/` → "financing a fixer-upper with one mortgage" → `/purchase/renovation-financing/`
- `/product-loans/fha-loans/` → "FHA 203(k) renovation loans" → `/purchase/renovation-financing/`

**Add outbound from this page (exact anchor → URL):**

- "FHA 203(k) loans explained" → /learn/benefits-of-fha-203-k-loans/
- "HomeStyle renovation loans" → /learn/what-is-homestyle-renovation-loan/
- "home insurance during renovations" → /learn/home-insurance-and-renovations/
- "HUD Mortgagee Letter 2024-13 (external)" → https://www.hud.gov/sites/dfiles/OCHCO/documents/2024-13hsgml.pdf [VERIFY path; archive copy at archives.hud.gov/news/2024/2024-13hsgml.pdf]

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| ATF secondary CTA sends exploratory visitors to the application start (/start/?goal=buy). | Replace with 'Run a payment on the total cost' → /mortgage-calculator/. | P1 | medium | low |
| No program figures (limited 203(k) $75,000 cap, consultant rule). | Add the 203(k) H2; date-stamp it. | P1 | medium | low |

## 11. Down Payment Assistance — `/purchase/down-payment-assistance/` — **65 (D)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 85 | B | H1 'Down Payment Assistance Programs in Michigan' is an exact match, but the content beneath it names no Michigan program. |
| Heading structure | 62 | D | Generic type-of-help H2s; no H2 for MSHDA or eligibility; link cards marked up as H3s under 'Planning the cash side'. |
| Above-the-fold answer | 58 | F | 80 ATF words define kinds of help; no program, amount or eligibility; no Samantha line. |
| CTA effectiveness | 68 | D | Primary 'Check my down payment options' opens the application flow (/start/?goal=buy) for an informational visitor; 'Call Samantha' tel link is good. |
| Title & meta | 72 | C | Title 51 chars with keyword; meta 142 chars but no MSHDA, MI 10K or proof. |
| Internal linking | 68 | D | 72 contextual inlinks (48 from city pages), but the 135-inlink grants article and HomeReady product page do not link here. |
| E-E-A-T & trust | 55 | F | No bio, no review quotes, no MSHDA source (only CFPB x2), no byline or date; trust strip says 'No credit check to ask' vs the sitewide 'No credit pull to talk'. |
| AI-search readiness | 45 | F | 5 generic FAQ; nothing quotable about Michigan, so AI answers cite MSHDA and Bankrate instead. |
| Accuracy & compliance | 70 | C | Statements are accurate but omit the state program other Align pages cite; Align's MSHDA participation is not stated. |
| **Overall (weighted)** | **65** | **D** | |

### Primary query and intent

- **Target:** down payment assistance Michigan — secondary: MSHDA down payment assistance, MI 10K, michigan first time home buyer grant, $25,000 first generation down payment assistance michigan
- **Evidence:** GSC: no impressions for 'down payment assistance michigan', 'mshda' or 'mi 10k' in 90 days; 'who qualifies for down payment assistance' 6 impr pos 89.2. PAA (Michigan, depth 2): 'What down payment assistance programs are available in Michigan?', 'What is the $25,000 down payment assistance program in Michigan?', 'What is the biggest negative when using down payment assistance?', 'What housing grants are available in Michigan?', 'Does the state of Michigan offer assistance with mortgage payments?'. Top results (MSHDA, Bankrate, Mortgage Research Center, OnQ, Churchill) are program lists naming MI 10K, First-Gen DPA, MCC, Detroit and Pontiac programs.
- **Cannibalization:** High. /learn/first-time-home-buyer-grants-and-programs/ (135 inlinks) states the MI 10K terms and does not link to this page; /learn/state-specific-mortgage-assistance-programs/ (27) and /learn/usda-and-assistance-programs/ also compete. This page is titled 'Michigan' but names no Michigan program and links nowhere on michigan.gov.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Buying a home | Michigan Down Payment Assistance |
| H1 | Down Payment Assistance Programs in Michigan | **Down Payment Assistance Programs in Michigan** |
| Subhead (54 words) | Grants, forgivable loans and deferred loans can cover part of a down payment or closing costs. Which ones fit depends on the home, your income and the loan… | Michigan's main statewide help comes from MSHDA: the MI 10K loan of up to $10,000, paired with an MI Home Loan, with a 640 minimum credit score and income and price limits. Some cities and counties add their own programs. Samantha checks which ones fit your income, price range and address before you offer. |
| Primary CTA | Check my down payment options → /start/?goal=buy | **Check which programs fit me** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Add up my cash to close → /purchase/first-time-homebuyer/#cash-to-close | Add up my cash to close → `https://alignlending.com/purchase/first-time-homebuyer/#cash-to-close` |
| Trust line | No credit check to ask · Programs change, so we check what applies to you · 5.0 on Google, 123 reviews | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity · Program details checked <date> against MSHDA |

### Recommended heading outline

- H1: **Down Payment Assistance Programs in Michigan**
  - H2: **What down payment assistance programs are available in Michigan?** — _NEW_
    > Statewide, MSHDA offers MI 10K, a deferred loan of up to $10,000 paired with its MI Home Loan, and a first-generation pilot of up to $25,000 when funds are open. MSHDA's Mortgage Credit Certificate is a tax credit rather than cash. Cities such as Detroit and Pontiac, some counties and nonprofits run their own programs.
    - H3: **MSHDA MI 10K down payment assistance** — _NEW_
    - H3: **MSHDA MI Home Loan** — _NEW_
    - H3: **MI First Generation down payment assistance** — _NEW_
    - H3: **City and county programs** — _NEW_
    - H3: **Mortgage Credit Certificate** — _NEW_
  - H2: **Who qualifies for MSHDA down payment assistance?** — _NEW_
    > You need a credit score of 640 or higher, household income under MSHDA's limit for your county and household size, a home under the statewide sales price limit, which MSHDA lists at $566,355 after June 1, 2026, a homebuyer education course and an MSHDA-participating lender. The home must be your primary residence.
  - H2: **What kinds of down payment assistance are there?** — _RENAME (was 'Down payment assistance comes in four shapes')_
    > Four. Grants are not repaid if you meet the conditions. Forgivable loans are forgiven over time while you live in the home. Deferred loans, like MI 10K, are repaid when you sell, refinance, pay off the first mortgage or move out. Repayable second loans have their own monthly payment, which counts in your debt-to-income ratio.
    - H3: **Grants** — _KEEP_
    - H3: **Forgivable loans** — _KEEP_
    - H3: **Deferred loans** — _KEEP_
    - H3: **Repayable second loans** — _KEEP_
  - H2: **Does down payment assistance have to be paid back?** — _RENAME (promoted from FAQ)_
    > It depends on the type. Grants are not, forgivable loans are forgiven if you stay long enough, and deferred loans such as MSHDA's MI 10K are repaid when you sell, refinance, pay off the first mortgage or stop living in the home. Ask what triggers repayment before you count on any program.
  - H2: **What are the downsides of down payment assistance?** — _NEW (PAA)_
    > A deferred loan is a second lien you repay when you sell or refinance, which reduces your equity at that point. Programs add income and price limits, homebuyer education and sometimes longer approval timelines, and not every lender takes part. The first mortgage paired with assistance may be priced differently from one without it, so compare total cost.
  - H2: **Which loans work with down payment assistance?** — _RENAME (was 'Low down payment loans, side by side'; keep table)_
    > MSHDA's MI 10K pairs only with an MI Home Loan, which MSHDA offers in FHA, VA, USDA Rural Development and conventional versions. Local programs name their own eligible first mortgages. Outside programs, FHA, VA, USDA, HomeReady and Home Possible are the low-down-payment loans most often used with assistance.
  - H2: **Other ways the cash can come together** — _KEEP_
    - H3: **Gift funds** — _KEEP_
    - H3: **Seller concessions** — _KEEP_
    - H3: **Lender credits** — _KEEP_
  - H2: **Questions to ask about any program** — _KEEP_
  - H2: **Check programs at the source** — _KEEP (add MSHDA MI 10K, MI Home Loan, First-Gen DPA and MCC links)_
  - H2: **Questions about down payment help** — _KEEP (see FAQ)_
  - H2: **About Samantha Shelton** — _NEW (standard bio block)_
  - H2: **What Michigan buyers say** — _NEW (2 review quotes)_
  - H2: **Ask Samantha which kinds of help fit** — _KEEP_
  - H2: **Planning the cash side of buying** — _KEEP (link cards: change H3s to non-heading card titles)_

**Body copy for the new program H3s (exact):**

- **MSHDA MI 10K down payment assistance:** Up to $10,000 as a deferred second loan, repaid when you sell, refinance, pay off the first mortgage or stop living in the home. Requires a 640 credit score, an MI Home Loan, homebuyer education and an MSHDA-participating lender. [VERIFY on michigan.gov/mshda on publish date]
- **MSHDA MI Home Loan:** The fixed-rate first mortgage MI 10K pairs with, offered through participating lenders to first-time buyers statewide and repeat buyers in targeted areas. Statewide sales price limit $566,355 after June 1, 2026; income limits by county and household size.
- **MI First Generation down payment assistance:** Up to $25,000 as a deferred loan toward down payment, closing costs and prepaid escrows for buyers with no parent who owned a home in recent years, paired with a conventional, FHA or USDA MI Home Loan; in-person HUD-approved education required; not combinable with MI 10K. Pilot launched February 18, 2025 with limited funds. [VERIFY availability at michigan.gov/FirstGenDPA]
- **City and county programs:** Detroit, Pontiac, Ingham County and others run local assistance with their own income limits and funding cycles. [VERIFY current terms before naming amounts]
- **Mortgage Credit Certificate:** A federal tax credit for part of the mortgage interest you pay each year, not cash at closing; apply before you close. MSHDA posted 2026 lender notices, so the program is active. [VERIFY credit rate, annual cap and funding]

**FAQ set (built from PAA/GSC):**

- Do I have to be a first-time buyer? — _KEEP (add: MSHDA counts anyone without an ownership interest in the past three years; repeat buyers qualify in targeted areas)_
- Can I use assistance with any loan? — _KEEP_
- Can family help instead, or as well? — _KEEP_
- How do I find out what fits me? — _KEEP_
- **What is the $25,000 down payment assistance program in Michigan?** _(NEW)_  
  It is MSHDA's MI First Generation Down Payment Assistance pilot, launched in February 2025: up to $25,000 as a deferred loan for buyers whose parents have not owned a home recently, paired with a conventional, FHA or USDA MI Home Loan and in-person homebuyer education. Funding was limited, so check current availability first.
- **Are there down payment grants in Michigan?** _(NEW)_  
  Some local and nonprofit programs offer grants or forgivable loans, but MSHDA's statewide help, MI 10K and the First Generation pilot, is structured as deferred loans repaid when you sell, refinance or move out. Older articles mention a $7,500 MSHDA amount; MI 10K's current maximum is $10,000. Samantha checks what applies to your address.

### Title tag and meta description

- Current title (51): `Down Payment Assistance In Michigan | Align Lending`
- **New title (59):** `Down Payment Assistance in Michigan: MI 10K | Align Lending`
- Current meta (142): How down payment assistance programs work in Michigan: grants, forgivable and deferred loans, the loans they pair with, and what to ask first.
- **New meta (156):** Michigan down payment assistance explained: MSHDA's MI 10K, the MI Home Loan, first-generation help and local programs, who qualifies and what to ask first.

### Schema

Current types: Answer, BreadcrumbList, FAQPage, FinancialService, ImageObject, ListItem, Organization, PostalAddress, PropertyValue, Question, WebPage, WebSite; FAQ questions in schema: 5.

- Add Article with author Samantha Shelton (Person + NMLS identifier), datePublished/dateModified, and a visible byline/updated line.
- Keep FAQPage (update to the new set).
- Add mentions: GovernmentOrganization 'Michigan State Housing Development Authority' (sameAs https://www.michigan.gov/mshda).
- Change the 'Planning the cash side' card titles from H3 to non-heading elements.

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/first-time-home-buyer-grants-and-programs/` → "Michigan down payment assistance programs" → `/purchase/down-payment-assistance/`
- `/learn/state-specific-mortgage-assistance-programs/` → "MSHDA down payment assistance in Michigan" → `/purchase/down-payment-assistance/`
- `/learn/usda-and-assistance-programs/` → "down payment help available in Michigan" → `/purchase/down-payment-assistance/`
- `/learn/how-to-save-for-down-payment/` → "Michigan down payment assistance" → `/purchase/down-payment-assistance/`
- `/product-loans/home-ready/` → "pair HomeReady with Michigan down payment assistance" → `/purchase/down-payment-assistance/`
- `/purchase/first-time-homebuyer/` → "MI 10K and other Michigan down payment assistance" → `/purchase/down-payment-assistance/`

**Add outbound from this page (exact anchor → URL):**

- "MSHDA: MI 10K DPA loan (external)" → https://www.michigan.gov/mshda/pathway-to-housing/mi-10k-dpa-loan
- "MSHDA: MI Home Loan (external)" → https://www.michigan.gov/mshda/pathway-to-housing/mi-home-loan
- "MSHDA: First-Generation Down Payment Assistance (external)" → https://www.michigan.gov/FirstGenDPA
- "MSHDA: Mortgage Credit Certificate (external)" → https://www.michigan.gov/mshda/homeownership/mortgage-credit-certificate-program
- "Michigan first-time homebuyer programs and steps" → /purchase/first-time-homebuyer/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Page titled 'Michigan' names no Michigan program and links to no MSHDA page. | Add the programs and eligibility H2s, MSHDA sources and date stamp. | P0 | critical | medium |
| Compliance: the page must not imply Align originates MSHDA loans unless it can. | [VERIFY with Align: MSHDA participating-lender access through a wholesale partner]. If not available, replace 'Samantha checks which programs apply' with 'Samantha explains the programs and refers you to a participating lender'. | P0 | high | low |
| Primary CTA opens the application for an informational visitor. | Send to Calendly with 'Check which programs fit me'. | P1 | medium | low |
| No bio, reviews, byline or MSHDA source; trust strip wording differs from sitewide. | Add the standard bio, reviews and trust line. | P1 | medium | low |

## 12. Mortgage Process — `/mortgage-process/` — **71 (C)**

### Scorecard

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 72 | C | H1 'How the mortgage process actually works' matches 'mortgage process' but omits Michigan and 'step by step'. |
| Heading structure | 72 | C | 7 question headings, but H2 groupers ('Preapproval and paperwork', 'Money and timing') instead of numbered steps. |
| Above-the-fold answer | 78 | C | 102 ATF words and the first sentence is a real answer: 'Talk first, then the paperwork, then the house, then title, appraisal and underwriting before closing.' |
| CTA effectiveness | 76 | C | 'Start with a conversation' plus game plan; no path to preapproval for ready buyers, which this page attracts. |
| Title & meta | 74 | C | 'Our Mortgage Process, Step By Step | Align Lending' (50) lacks Michigan; meta 153 is good. |
| Internal linking | 58 | F | Only 15 contextual inlinks; no learn process article links here. |
| E-E-A-T & trust | 66 | D | No external sources at all, no byline or updated date. |
| AI-search readiness | 66 | D | Direct answers under questions, but no numbered step list, no FAQ schema, no TRID facts to quote. |
| Accuracy & compliance | 70 | C | 'Over the last 12 months Samantha's loans averaged under 14 days from application to clear to close' is an unsourced performance claim. |
| **Overall (weighted)** | **71** | **C** | |

### Primary query and intent

- **Target:** mortgage process Michigan, step by step — secondary: michigan mortgage process explained, michigan mortgage pre-approval process, how to get a mortgage in michigan, mortgage process steps
- **Evidence:** GSC: 'michigan mortgage pre-approval' 23 impr pos 1.9; 'michigan mortgage process explained' 19 pos 2.8; 'how to get a mortgage in michigan' 18 pos 1.0; 'michigan mortgage pre-approval process' 9 pos 7.7; national 'mortgage loan process' 97 pos 78.2, 'loan process steps' 87 pos 67.4, 'mortgage approval process' 14 pos 86.2. No PAA call spent (budget cap); questions from GSC and CFPB TRID steps.
- **Cannibalization:** High inside learn: /learn/mortgage-loan-process/ ('The Mortgage Loan Process: 9 Steps To Closing', 5,774 words, 15 inlinks), /learn/home-buying-process/ (94), /learn/buying-process/ (5,497 words, 6 inlinks, near-duplicate of home-buying-process) and /learn/home-buying/ (115). None of them link to /mortgage-process/, which has 15 contextual inlinks.

### Rewritten above-the-fold

| Element | Current | Recommended (exact) |
|---|---|---|
| Eyebrow | Our Process | Our Mortgage Process |
| H1 | How the mortgage process actually works | **The Mortgage Process in Michigan, Step by Step** |
| Subhead (45 words) | Talk first, then the paperwork, then the house, then title, appraisal and underwriting before closing. Here is what each step asks of you. | A Michigan purchase mortgage runs in seven steps: a first conversation, preapproval with documents, house hunting, the accepted offer, appraisal and title, underwriting, and closing. Most waiting happens between steps, not inside them. Samantha tells you what each step needs from you before it starts. |
| Primary CTA | Start with a conversation → Calendly | **Start with a conversation** → `https://calendly.com/samanthashelton` |
| Secondary CTA | Build my homebuyer game plan → /purchase/homebuyer-game-plan/ | Get pre-approved → `https://alignlending.com/start/?goal=buy` |
| Trust line | No application required · No credit pull to talk · 5.0 on Google… | No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301 · Align Lending LLC, NMLS #2041154 · Equal Housing Opportunity |

### Recommended heading outline

- H1: **The Mortgage Process in Michigan, Step by Step**
  - H2: **What are the steps in the mortgage process?** — _RENAME (was 'What does the whole process actually look like?')_
    > Seven steps: a first conversation, preapproval with documents, house hunting with your agent, an accepted offer and loan application, appraisal and title work, underwriting to clear to close, and closing. You get a Loan Estimate within three business days of applying and a Closing Disclosure at least three business days before you sign.
    - H3: **1. The first conversation** — _NEW (uses 'Is it too early to call?' text)_
    - H3: **2. Preapproval and documents** — _NEW (uses 'What does preapproval actually involve?' text)_
    - H3: **3. House hunting with your agent** — _NEW_
    - H3: **4. The accepted offer and your Loan Estimate** — _NEW_
    - H3: **5. Appraisal, title and inspection** — _NEW_
    - H3: **6. Underwriting and clear to close** — _NEW_
    - H3: **7. Closing Disclosure and closing day** — _NEW_
  - H2: **What is the difference between prequalification and preapproval?** — _NEW (promoted from body)_
    > A prequalification is an estimate based on what you tell a lender. A preapproval means the lender has reviewed your credit, income, assets and debts with documents behind them. Sellers weigh the difference, because accepting your offer takes their home off the market. The preapproval is the one worth having before you tour.
  - H2: **What documents will I need for a mortgage?** — _RENAME (promoted H3)_
    > It depends on how you earn and what you own. Most files document income, employment and assets: pay stubs and W-2s for employees, tax returns for the self-employed, award letters for retirees, plus recent bank statements. Rather than hand you a generic list, Samantha builds the one that applies to your file.
  - H2: **How long does the mortgage process take?** — _RENAME (was H3 'How long does it take?'; remove the 14-day claim unless substantiated)_
    > Your purchase agreement's closing date sets the calendar, and the lender's job is to have the loan cleared to close before it. Preapproval can take a few days once documents are in. After the offer, appraisal, title and underwriting run in parallel, and most delays come from waiting on documents or outside parties, not the work itself.
  - H2: **Where does the mortgage process slow down?** — _KEEP_
    > Usually while someone waits: on a document, an outside party such as the appraiser or title company, an answer or a condition. Underwriting is the step people fear, but a file prepared properly before it arrives tends to move. That is why Samantha asks for anything she will need later as early as possible.
  - H2: **How much money do I need to have saved?** — _KEEP_
  - H2: **What should I not do during the mortgage process?** — _RENAME (was 'What should I not do while I am getting ready?')_
  - H2: **What our clients say** — _KEEP_
  - H2: **You should leave this better, not sold** — _KEEP_
  - H2: **Mortgage process questions** — _NEW (FAQ, see below)_
  - H2: **Where these rules come from** — _NEW (CFPB Loan Estimate, CFPB Closing Disclosure, CFPB buying a house)_
  - H2: **Start with your question** — _KEEP_
  - H2: **Learn** — _KEEP_
  - H2: **Free guides** — _KEEP_

**FAQ set (built from PAA/GSC):**

- **Does getting preapproved hurt my credit?** _(NEW)_  
  A preapproval involves a credit check, which can cause a small, usually temporary dip. Credit scoring models generally treat several mortgage inquiries within a short shopping window as one, so comparing lenders over a few weeks costs little. A first conversation with Samantha involves no credit pull at all, and you are told before one happens.
- **What happens during underwriting?** _(NEW)_  
  An underwriter verifies that your income, assets, credit and the property meet the loan program's rules, then issues an approval with conditions, such as an updated pay stub or an explanation of a deposit. Once conditions are cleared, the file is clear to close. A well-prepared file usually means fewer and smaller conditions.
- **What is the Closing Disclosure?** _(NEW)_  
  A five-page federal form that shows your final loan terms, projected payments and cash to close. You must receive it at least three business days before closing, which gives you time to compare it with your Loan Estimate and ask about anything that changed before you sign anything.
- **Can I close on a Michigan home if I am out of state?** _(NEW)_  
  Often. Many title companies offer mail-away signings, and some closings can use remote online notarization, but the title company and the lender each decide what they allow for your loan. Ask early, before the closing date is set, so the signing plan does not become a last-week problem.

### Title tag and meta description

- Current title (50): `Our Mortgage Process, Step By Step | Align Lending`
- **New title (55):** `Michigan Mortgage Process, Step by Step | Align Lending`
- Current meta (153): How a mortgage with Align Lending works, in order: the first call, preapproval, shopping, the offer, the property side, closing, and where it slows down.
- **New meta (155):** How a Michigan mortgage works in seven steps, from first call and preapproval to underwriting, the Closing Disclosure and keys, plus where files slow down.

### Schema

Current types: BreadcrumbList, FinancialService, ImageObject, ListItem, Organization, PostalAddress, PropertyValue, WebPage, WebSite; FAQ questions in schema: 0.

- Add ItemList (or HowTo, for AI parsers; no Google rich result) with the 7 numbered steps.
- Add FAQPage for the 4 new FAQs; add Article/WebPage author + dateModified and a visible byline.
- Keep BreadcrumbList; consider breadcrumb Home › Buy a Home › Mortgage process so the page sits inside the purchase cluster without a URL change.

### Internal links

**Add inbound (source page → exact anchor → target):**

- `/learn/mortgage-loan-process/` → "Align Lending's mortgage process in Michigan, step by step" → `/mortgage-process/`
- `/learn/home-buying-process/` → "the Michigan mortgage process, step by step" → `/mortgage-process/`
- `/learn/home-closing-process/` → "what each mortgage step asks of you" → `/mortgage-process/`
- `/learn/importance-of-mortgage-preapproval/` → "how preapproval fits the mortgage process" → `/mortgage-process/`
- `/compare-loan-estimates/` → "where the Loan Estimate fits in the mortgage process" → `/mortgage-process/`
- `/purchase/first-time-homebuyer/` → "the mortgage process, step by step" → `/mortgage-process/`

**Add outbound from this page (exact anchor → URL):**

- "prequalified vs. preapproved" → /learn/prequalified-vs-preapproved-whats-difference/
- "compare Loan Estimates box by box" → /compare-loan-estimates/
- "the home closing process" → /learn/home-closing-process/
- "CFPB: Loan Estimate explained (external)" → https://www.consumerfinance.gov/owning-a-home/loan-estimate/
- "CFPB: Closing Disclosure explained (external)" → https://www.consumerfinance.gov/owning-a-home/closing-disclosure/

### Issues (accuracy, compliance, hygiene)

| Issue | Fix | Priority | Impact | Effort |
|---|---|---|---|---|
| Unsourced performance claim: 'Over the last 12 months Samantha's loans averaged under 14 days from application to clear to close.' | Remove, or publish with [VERIFY: loan count, date range, data source, 'past results do not guarantee future timelines'] after Align approval. | P0 | high | low |
| No external sources on a process page. | Add the CFPB sources section. | P1 | medium | low |
| Learn process articles (4) do not link here; /learn/buying-process/ near-duplicates /learn/home-buying-process/. | Add the inbound links; flag consolidation (301 buying-process → home-buying-process) to 05-content/06-blogs. | P1 | high | medium |


---

## Appendix: method and data

- **Scoring:** 9 aspects from the shared brief, scored 0–100. Overall = weighted mean (Intent & H1 15, Above-the-fold answer 15, others 10). Every score's rationale cites a field from `pages.jsonl` / `page_summary.csv`, a GSC row or a SERP observation (full list in `scores-purchase.csv`).
- **GSC pulls (DataWise, free):** searches "first time", "down payment", "va ", "investment", "renovation", "self employ", "pre approv", "assistance", "buyer", "afford", "process", "sell", "203", "dscr", "michigan" (200 rows). The query report is not page-attributed, so query-to-page mapping is inferred from topic and position.
- **People Also Ask (6 seeds, Michigan location 21031):** "first time home buyer michigan" (depth 2, 117 Qs), "down payment assistance michigan" (depth 2, 110 Qs), "how much house can i afford" (depth 2, 124 Qs), "va home loan michigan" (depth 1), "buying a house before selling yours" (depth 1), "investment property loan requirements" (depth 1). Off-topic PAA (realtor licensing, SNAP, UK salaries) was discarded.
- **SERP skim (3 head queries):** "first time home buyer michigan" (Chase, SoFi, Bankrate, The Mortgage Reports, Michigan Treasury: program lists plus the 3-year definition); "down payment assistance michigan programs" (MSHDA, Mortgage Research Center, OnQ, Churchill, Bankrate: MI 10K, First-Gen, MCC, Detroit/Pontiac/Ingham, FHLBank Indianapolis); "va home loan michigan lender" (lender pages + Michigan Veterans Affairs Agency). The winning structure is a program list or eligibility table, a definition, credit-score guidance and steps, which the rewrites follow.
- **External links on these pages:** no broken links found. Status 0 entries (Calendly, Google Maps, AnnualCreditReport, some CFPB/VA/Fannie URLs) are proxy-blocked, not broken; several were not yet checked by the background job.
- **Hand-offs to other teams:** hero image alt (07-images); `/home-affordability-calculator/` title (calculators owner); consolidation of `/learn/buying-process/` into `/learn/home-buying-process/` and re-anchoring of learn CTAs (02-links, 05/06); verbatim review text (09-consistency); MSHDA participation and the 14-day claim (Align approval).
- **Files:** `purchase-report.md` (this file), `purchase-changes.csv` (every change as exact text with priority/impact/effort), `scores-purchase.csv` (12 pages × 9 aspects + overall).

