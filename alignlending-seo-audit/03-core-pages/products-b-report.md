# Products B: Equity and Non-QM Product Pages

**Scope:** 9 product pages: `/product-loans/heloc/`, `/home-equity-loan/`, `/cashout-loans/`, `/non-qm-loans/`, `/dscr-loans-michigan/`, `/bank-statement-loan/`, `/1099-income-loans/`, `/asset-based-income-loans/`, `/non-warrantable-condo-loans/`
**Prepared:** 2026-11-15 by the Core Pages specialist (Products B) · **Data:** crawl of 2026-11-15 (`pages.jsonl`, `page_summary.csv`, `text/*.txt`, `link_graph.json`, `inlinks.json`, `external_status.jsonl`), GSC via DataWise (90 days), DataWise People Also Ask (6 seeds), web checks against primary sources.
**Companion files:** `products-b-changes.csv` (471 implementation rows) · `scores-products-b.csv` (90 rows: 9 aspects plus an overall score for each page)
**Status:** These are recommendations only; nothing has been changed on the live site. Copy that describes how Align works is subject to Align approval.

---

## 1. Summary

The nine pages average **75 (C)**, with a narrow range from **70 (non-QM hub)** to **79 (non-warrantable condo)**. The writing is mostly careful, specific and on-brand. The four pages built on the newer template (HELOC, 1099, asset-based, condo) carry 7 to 11 dated primary sources and are close to B-grade content. These pages lose points less on what they say than on **how they are connected and introduced**:

- **Internal linking (avg 60, D)** is the weakest aspect. **Four of the nine pages were never wired into the site**: HELOC (19 total inlinks), 1099 (6), asset-based (7) and non-warrantable condo (38). None of them appears in the header, footer or mobile menu, while their siblings have 2,555 to 3,420 inlinks. All four also still use the fallback portrait `og:image`.
- **The non-QM hub does not work as a hub.** It links to 2 of its 5 child programs, and its situation table names asset-based and condo loans without linking them. It has 15 contextual inlinks, and it is the page behind the only click these topics earned in 90 days ("non qm loans michigan").
- **None of the nine above-the-fold blocks says what you need to qualify.** Each defines the product and stops there. Section 6 gives rewrites of 60 words or fewer for all nine.
- **E-E-A-T (avg 69, D).** The five older-template pages cite 0 to 2 sources (DSCR cites none), and no page shows a reviewer or updated date.
- **Accuracy issues to fix now (P0):** the cash-out page says "conventional cash-out usually starts at 620", which has been out of date since Fannie Mae dropped its fixed 620 minimum for DU loans in November 2025; the HELOC page publishes an internal editorial note ("source of the approved uncapping sentence"); and four non-agency pages say "Guidelines are set by the agency" (P1).
- **Demand:** the Michigan head terms for these nine products drew **1,113 impressions and 1 click** in 90 days. The **DSCR cluster (528 impressions, positions 39 to 46)** is the largest single opportunity. The **"second mortgage" synonym cluster (about 500 impressions, positions 80 to 87)** is unclaimed by any product page.

No page publishes or implies a rate. The rate fields in the DSCR and bank statement calculators are user inputs; keep them unselected by default and add the "we do not publish rates" line.

## 2. Scorecard

Grades: A 90-100 · B 80-89 · C 70-79 · D 60-69 · F under 60. Overall is the unweighted mean of the nine aspects. Evidence for every score is in section 6 and in `scores-products-b.csv`.

| Page | Intent & H1 | Heading structure | Above-the-fold answer | CTA effectiveness | Title & meta | Internal linking | E-E-A-T & trust | AI-search readiness | Accuracy & compliance | Overall |
|---|---|---|---|---|---|---|---|---|---|---|
| [HELOC](https://alignlending.com/product-loans/heloc/) | 78 C | 72 C | 70 C | 78 C | 85 B | 55 F | 76 C | 84 B | 85 B | **76 C** |
| [Home equity loan](https://alignlending.com/product-loans/home-equity-loan/) | 82 B | 70 C | 74 C | 76 C | 78 C | 74 C | 62 D | 78 C | 76 C | **74 C** |
| [Cash-out refinance](https://alignlending.com/product-loans/cashout-loans/) | 84 B | 72 C | 76 C | 78 C | 80 B | 76 C | 62 D | 80 B | 74 C | **76 C** |
| [Non-QM hub](https://alignlending.com/product-loans/non-qm-loans/) | 84 B | 68 D | 74 C | 70 C | 76 C | 52 F | 58 F | 72 C | 78 C | **70 C** |
| [DSCR loans](https://alignlending.com/product-loans/dscr-loans-michigan/) | 86 B | 70 C | 82 B | 82 B | 86 B | 76 C | 55 F | 80 B | 76 C | **77 C** |
| [Bank statement loans](https://alignlending.com/product-loans/bank-statement-loan/) | 84 B | 70 C | 80 B | 80 B | 86 B | 62 D | 58 F | 76 C | 76 C | **75 C** |
| [1099 income loans](https://alignlending.com/product-loans/1099-income-loans/) | 84 B | 76 C | 76 C | 70 C | 84 B | 45 F | 82 B | 86 B | 88 B | **77 C** |
| [Asset-based (asset depletion) loans](https://alignlending.com/product-loans/asset-based-income-loans/) | 74 C | 76 C | 76 C | 70 C | 76 C | 45 F | 82 B | 84 B | 84 B | **74 C** |
| [Non-warrantable condo loans](https://alignlending.com/product-loans/non-warrantable-condo-loans/) | 86 B | 76 C | 80 B | 72 C | 84 B | 58 F | 84 B | 86 B | 88 B | **79 C** |
| **Average** | 82 B | 72 C | 76 C | 75 C | 82 B | 60 D | 69 D | 81 B | 81 B | **75 C** |

## 3. Findings ranked by impact

| # | Finding | Evidence | Fix (where) | Priority / impact |
|---|---|---|---|---|
| 1 | **Four pages are not wired into the site.** HELOC, 1099, asset-based and condo are missing from the header mega menu, mobile popup and footer. They are the four newest pages and also carry the fallback `og:image` `Samantha4-683x1024.jpg`. | `inlinks_all`: HELOC 19, 1099 6, asset 7, condo 38, against 3,404 (home equity loan), 3,420 (cash-out), 3,358 (non-QM), 3,361 (bank statement). Header links show 1 occurrence each for the four pages. | Add Home Equity and Non-QM groups to the nav (section 4.3). | P0 / critical |
| 2 | **The non-QM hub does not route to its children.** It links Bank Statement, DSCR and Jumbo only; its table mentions asset-based loans and portfolio/condo loans without links; there is no parent/child breadcrumb. | Hub content links (`pages.jsonl`): 2 of 5 children. Hub `content_inlinks` 15. GSC: "michigan non qm loans" 117 impressions, position 30; "non qm loans michigan" 1 click. | Program cards and table links, an ItemList, a sibling strip on every child, visible breadcrumbs (sections 4.2 and 6.4). | P0 / high |
| 3 | **Out-of-date or wrong statements.** Cash-out: "conventional cash-out usually starts at 620". HELOC: internal note in the source list. HEL, non-QM, DSCR and bank statement: "Guidelines are set by the agency". HEL and DSCR: "680+ preferred" stated as a norm. DSCR: "non-warrantable properties allowed". Bank statement: hard-coded $832,750, which goes stale when FHFA sets 2027 limits in late November. | Page text files; Fannie Mae removed its DU minimum score for files created on or after Nov 16, 2025 (Orrick, Nov 14, 2025); FHFA 2026 limit release of Nov 25, 2025. | Exact replacements in each page's accuracy table and in the CSV. | P0 to P1 / high |
| 4 | **The above-the-fold copy never answers "what do I need to qualify?"** It averages about 70 words, defines the product, and often closes on a line like "Before how, Samantha asks why." | `above_fold_text` for all nine. | Rewritten eyebrow, H1, subhead of 60 words or fewer, CTAs and trust line per page (section 6). | P1 / high |
| 5 | **Question-led answers are missing for AI search.** The older-template pages have no "What is X?" or "What do you need to qualify?" capsules, and the top PAA questions go unanswered: what happens after the HELOC draw period, the 12-month cash-out rule, DSCR in an LLC, DSCR refinance, DSCR appraisal, 20% down on bank statement loans, FHA on non-warrantable condos, "is cash-out taxable" (GSC position 20.5). | PAA pulls (6 seeds); GSC. | 102 new or renamed question H2s and H3s, each with an exact 40-60 word answer (section 6). | P1 / high |
| 6 | **Thin sourcing and no reviewer on the older template.** HEL has 2 sources, cash-out 1, non-QM 1, bank statement 1, DSCR none. No page shows a reviewer or date. | `links` (external, content); `byline` and `visible_updated` are empty on all nine. | Add sources per page, the reviewed-by line, and WebPage `reviewedBy`/`lastReviewed`. | P1 / high |
| 7 | **Cannibalization in the equity cluster.** Three different comparison tables compete with `/refinance/cash-out-vs-home-equity/` for "vs" queries, and the HELOC Learn article (142 inlinks) is the internally stronger HELOC page. | "home equity vs cash-out refinance" 23 impressions, position 81; "home equity line of credit" 124 impressions, position 93. | Query-ownership map, one standard table, and links up and down (section 4.1). | P1 / medium |
| 8 | **CTA gaps.** 1099, asset and condo send the primary CTA to bare `/start/`. No equity page links the refinance calculator, break-even review or points vs lender credit calculator at the decision point. | `ctas` per page. | `?goal=&from=` on every primary CTA; tertiary text links; calculator links (section 6). | P1 / medium |
| 9 | **Heading misuse.** About 25 to 30% of each outline is template chrome (5 H2s and 3 step H3s shared by 20+ product pages). Calculator form labels are marked up as H3s (DSCR "The property", bank statement "Your deposits" and "The loan"), CTA tiles as H3s (HELOC), and H3s mix Title Case with sentence case. | `outline` for all nine. | Demote the template blocks, use legends for form groups, sentence-case the H3s (section 5). | P2 / medium |
| 10 | **Voice.** On the four newer-template pages, a first-person paragraph follows each Samantha quote, and it is unclear whether it is part of the recorded quote. | Text files ("Once I understand the reason, I put a line...", "Tell me how you get paid...", "Send me your statements...", "Send me the condo questionnaire..."). | Third-person replacements are provided; log each quote's source. | P1 / low |

## 4. Cluster architecture and cannibalization

### 4.1 Equity cluster: which page owns which query

| Page | Owns (primary) | Supports, then links to the owner | Must not target |
|---|---|---|---|
| `/refinance/home-equity-review/` | "should I use my home equity", "using home equity wisely" | how much equity is available | product head terms |
| `/refinance/cash-out-vs-home-equity/` | "cash-out vs home equity loan", "HELOC vs home equity loan", "home equity vs cash-out refinance" | 3-way decision | Michigan product head terms |
| `/product-loans/heloc/` | "Michigan HELOC", "home equity line of credit Michigan", HELOC requirements and costs | short comparison answer, then a link to the comparison page | "vs" in the title or H1 |
| `/product-loans/home-equity-loan/` | "home equity loan Michigan", "second mortgage Michigan" (synonym) | short comparison answer | "pros and cons" (Learn), "vs" |
| `/product-loans/cashout-loans/` | "cash-out refinance Michigan", cash-out requirements, seasoning and amount | short comparison answer | "what is a cash-out refinance" (Learn), "vs" |
| `/learn/home-equity-line-of-credit-heloc/` | "how does a HELOC work", "what is a HELOC" (generic) | links up with "HELOCs in Michigan" | Michigan commercial terms |
| `/learn/second-mortgages/`, `/learn/home-equity-loans-pros-and-cons/`, `/learn/what-is-cash-out-refinance-loan/` | generic informational | link up to the product pages with Michigan anchors | Michigan commercial terms |

This map matches the ownership set out in `refinance-home-trust-report.md` (the comparison page owns the "vs" queries; the cash-out product page keeps "michigan cash out refinance"). Either team's anchors for links into the comparison page are acceptable; use one per page.

**Standard three-column table** (use the same rows on all three equity product pages and highlight the current page's column):

| | HELOC | Home equity loan | Cash-out refinance |
|---|---|---|---|
| How the money arrives | Draw as needed during a draw period | One lump sum at closing | One lump sum at closing |
| Your first mortgage | Stays in place | Stays in place | Paid off and replaced by a larger loan |
| Rate | Usually variable | Generally fixed | Fixed or adjustable |
| You pay interest on | Only what you have drawn | The full amount from day one | The whole new balance |
| Payments afterward | Two: your first mortgage plus the line | Two: your first mortgage plus this loan | One |
| Cost disclosure | Home equity disclosures and the CFPB HELOC booklet | Loan Estimate | Loan Estimate |
| Closing costs figured on | The line; ask about annual and early-closure fees | The new loan amount | The whole new loan |
| Usually fits | Costs that arrive in stages, or a reserve | One known cost, like a roof or a quote | Today's rates are no higher than the one you hold |
| The question that settles it | Can you carry a payment that changes? | Do you know the amount today? | What rate do you hold now? |

Below the table on each page: "See the full side-by-side comparison" linking to `/refinance/cash-out-vs-home-equity/`. On HELOC and HEL add "If a cash-out refinance is on the table, a break-even review shows how long its closing costs take to pay back," linking to `/refinance/break-even-review/`.

### 4.2 Non-QM cluster: parent and children

```
/product-loans/non-qm-loans/                    PARENT: "non-QM loans Michigan", what non-QM is, triage, cost
 ├─ /product-loans/bank-statement-loan/          CHILD: "bank statement loans Michigan", calculator
 ├─ /product-loans/1099-income-loans/            CHILD: "1099 loans Michigan" (agency and non-QM routes)
 ├─ /product-loans/asset-based-income-loans/     CHILD: "asset depletion loans Michigan" (agency and non-QM routes)
 ├─ /product-loans/dscr-loans-michigan/          CHILD: "DSCR loans Michigan", calculator
 ├─ /product-loans/non-warrantable-condo-loans/  CHILD: property-driven non-QM / portfolio
 └─ (sibling) /product-loans/jumbo-loans/
Journey pages that link down:  /purchase/self-employed-homebuyer/  -> bank statement, 1099, asset, hub
                               /purchase/investment-property-financing/ -> DSCR, hub
Learn pages that link up:      /learn/non-qm-loans-for-self-employed-borrowers/, /learn/jumbo-and-non-qm/,
                               /learn/what-is-no-doc-mortgage/, /learn/what-is-portfolio-loan/, /learn/non-conforming-loans/
```

Rules: URLs stay as they are (no redirects needed). Hierarchy is expressed through **visible breadcrumbs plus BreadcrumbList** (Home > Loans > Non-QM Loans > [Program]), the hub's **program cards plus ItemList**, and a **sibling strip** under each child's FAQ:

> Other non-QM options: Bank statement loans · 1099 income loans · Asset depletion loans · DSCR loans · Non-warrantable condo loans · All non-QM loans

Bank statement and 1099 cross-link as each other's alternative ("If your deposits tell the story better than your 1099s..."). Neither targets the other's head term.

### 4.3 Navigation change (exact, sitewide; P0)

Header mega menu "Loans" and the mobile popup: keep the existing groups, and add or rename two groups:

- **Home equity:** Home Equity Loan · **HELOC** (new) · Cash-Out Refinance
- **Non-QM and self-employed:** Non-QM Loans · Bank Statement Loans · **1099 Income Loans** (new) · **Asset Depletion Loans** (new) · DSCR Loans · **Non-Warrantable Condo Loans** (new)

Footer: add HELOC, DSCR Loans (missing from the footer today), 1099 Income Loans, Asset Depletion Loans and Non-Warrantable Condo Loans, and rename "Cashout Loans" to "Cash-Out Refinance". (Coordinate with the links team; this is the single highest-impact change for these pages.)

## 5. Shared template fixes (all nine pages)

1. **Non-agency disclaimer** (HEL, non-QM, DSCR, bank statement), replacing "Guidelines are set by the agency and the lender...":
   > Guidelines are set by each lender and change often. These are common ranges, not a commitment to lend or an offer of credit. Align Lending LLC, NMLS #2041154. Equal Housing Opportunity.
2. **Reviewed-by line** under every subhead, linked to `/samantha-shelton/` and `/editorial-policy/`, mirrored in WebPage `reviewedBy` and `lastReviewed`:
   > Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY]
3. **Primary CTA attribution:** keep the label "Start my application" and add `?goal=<buy|equity>&from=<slug>` everywhere (the HELOC tiles already use `from=`). Keep "Talk with Samantha" as the ghost button. Add one tertiary text link per page (listed in section 6) for researchers.
4. **Heading hygiene:** demote the template block titles ("What our clients say", "Start with your question", "Learn", "Other loan options") and the three numbered step H3s to non-heading elements. Use `<legend>` for calculator field groups and card labels for CTA tiles. Sentence-case all H3s.
5. **Descriptive anchors** replace every "Read the guide" (exact anchors listed per page).
6. **Schema:** trim `MortgageLoan.areaServed` from about 275 City nodes to `State: Michigan`; add `reviewedBy`; add an ItemList on the hub; keep FAQPage in step with the visible FAQ; never add AggregateRating to these pages.
7. **Compliance guardrails for writers:** no rates, APRs or example payments. Do not state repayment periods, number of payments or down payment percentages as Align terms (Reg Z closed-end trigger terms, 12 CFR 1026.24(d)). Keep HELOC draw-period figures attributed to the CFPB (12 CFR 1026.16(d)). Calculator rate selectors stay unselected by default.

## 6. Page-by-page recommendations

Statuses: **KEEP** (no change), **RENAME** (same section, new heading), **NEW** (add), **DEMOTE** (not a content heading). Each page's 40-60 word answers are exact final copy.

### 6.1 HELOC: `/product-loans/heloc/`

**Overall: 76 (C).** Target query: **michigan heloc / heloc michigan / home equity line of credit michigan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 78 | C | H1 'HELOCs in Michigan' matches 'michigan heloc' and is unique, but it never spells out 'home equity line of credit', the phrase in the largest HELOC query cluster (124 impressions). |
| Heading structure | 72 | C | 15 H2s with 7 question headings. 'HELOCs, in short', 'How it works' and 'Michigan notes' are labels rather than questions, CTA tiles are marked up as H3s, and 5 template H2s are shared sitewide. |
| Above-the-fold answer | 70 | C | The 61 words before the first H2 define a HELOC and say the first mortgage stays, but 'Before how, Samantha asks why' spends the space without saying who qualifies or what lenders require. |
| CTA effectiveness | 78 | C | A clear primary/ghost pair (Start my application to /start/?goal=equity, Talk with Samantha) and good why-routed tiles (&why=improve/debt/expense). There is no low-friction equity or calculator step for researchers. |
| Title & meta | 85 | B | The 58-character title leads with 'Michigan HELOC' and spells out the term. The 149-character meta is specific and names Samantha. Only the Title Case 'Of' needs fixing. |
| Internal linking | 55 | F | 19 total inlinks (16 contextual) against 3,404 for the home equity loan page. It is missing from the header, footer and mobile menu, and the Learn article on HELOCs (142 inlinks) outranks it internally. |
| E-E-A-T & trust | 76 | C | 11 primary sources, NMLS, licensing and reviews are present. There is no visible reviewer or updated date, and the source list leaks an internal note ('source of the approved uncapping sentence'). |
| AI-search readiness | 84 | B | A 50-word definition capsule, 5 direct FAQ answers with FAQPage schema, a three-way table and Michigan-specific facts. A qualification answer and the draw-period-end answer (a top PAA question) are missing. |
| Accuracy & compliance | 85 | B | Reg Z and IRS statements check out (1026.40, 1026.15, Pub 936) and no rates are shown. The open items are the unverified MCL subsection letter and the first-person paragraph after the quote. |

**Target query and intent.** Commercial investigation: a Michigan homeowner deciding whether a line of credit fits, what it takes to qualify, and what it costs, before comparing lenders. Secondary: heloc requirements; how does a heloc work (brief answer, then link to the Learn article); heloc rates michigan (explain how rates are set, never publish one); ann arbor / detroit heloc.

**GSC evidence (90 days).** michigan heloc 28 impr, pos 88.5; heloc michigan 6, pos 85.5; heloc rates michigan 8, pos 23.9; ann arbor heloc rates 28, pos 64.6; detroit heloc 11, pos 80.7; home equity line of credit 124, pos 93.3; what is a home equity line of credit 56, pos 88.7; how can i compare heloc lenders side-by-side? 67, pos 1.5 (served by the comparison article/worksheet). 0 clicks on any HELOC query in 90 days.

**Cannibalization and structure.** The product page has 19 total inlinks (16 contextual) and is missing from the header, footer and mobile menu, while /learn/home-equity-line-of-credit-heloc/ has 142 inlinks. Google is likely to treat the Learn article as the site's HELOC page. Fix: put the product page in the nav, have the Learn article link up with 'HELOCs in Michigan', and keep the product page Michigan-specific and qualification-led while the Learn article stays generic and explanatory.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For homeowners | For Michigan homeowners |
| H1 | HELOCs in Michigan | HELOCs in Michigan: Home Equity Lines of Credit **[RENAME]** |
| Subhead (50 words) | A home equity line of credit lets you borrow against your home as you need the money, while the mortgage you already have stays where it is. Before how, Samantha asks why. | For Michigan homeowners who want to borrow in stages and keep their current mortgage. Lenders generally look for enough equity to stay within their combined loan-to-value limit, income that supports the payment, and credit that meets their minimums. Limits vary by lender, so we compare lines from more than one. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=equity` | **Start my application** -> `https://alignlending.com/start/?goal=equity&from=heloc` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | See how much equity I may be able to use -> `/refinance/home-equity-review/#available-equity` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[RENAME] H2: What is a HELOC?** (was: "HELOCs, in short")
  > A HELOC is a revolving line of credit secured by your home. You draw what you need during a draw period, pay interest on what you have drawn, then repay the balance over a repayment period, usually at a variable rate. It sits behind your first mortgage instead of replacing it.
  *Note:* Keep the existing second paragraph (Align places standalone HELOCs through multiple wholesale lenders) as the follow-on line. Subject to Align approval.
- **[NEW] H2: What do you need to qualify for a HELOC in Michigan?**
  > Most lenders look at four things: the equity left after the line, measured against a combined loan-to-value limit each lender sets; credit that meets its minimum; income and debts that support the payment; and the property, usually a home you live in. An appraisal or other valuation confirms the value. Requirements vary by lender.
    - **[NEW] H3: Equity and combined loan-to-value**
      *Note:* Each lender caps everything borrowed against the home, the first mortgage plus the new line, at a share of its value, then subtracts what you owe. Down payment assistance loans count toward that total.
    - **[NEW] H3: Credit, income and debts**
      *Note:* Minimums are set by each lender. Ask what payment the lender used to qualify you, and what the payment would be at the line's maximum rate.
    - **[NEW] H3: The property and how you use it**
      *Note:* Many lines are limited to a primary residence. Some lenders allow second homes; fewer allow rentals. Ask before you apply if the home is, or will be, rented.
- **[RENAME] H2: Who is a HELOC a good fit for?** (was: "Is it a fit?")
  > A HELOC suits homeowners who want to keep their first mortgage, have a clear reason for the money, and expect costs to arrive in stages or cannot size them yet. It suits people comfortable with a payment that can change and who have a plan to pay the balance down. It does not suit everyday spending.
  *Note:* KEEP H3s 'Who it fits' and 'Who it may not fit' and their bullets.
- **[RENAME] H2: How does a HELOC work?** (was: "How it works")
  > During the draw period you borrow up to your limit, repay, and borrow again; the CFPB's example draw period is 10 years. When it ends, borrowing stops and the balance is repaid on your agreement's schedule, often at a noticeably higher payment. Most lines carry a variable rate: a public index, such as the prime rate, plus the lender's margin.
  *Note:* Delete the duplicate eyebrow 'How it works' above the H2. Turn the three bold lead-ins into H3s below.
    - **[NEW] H3: The draw period**
      *Note:* Existing 'The draw period' paragraph.
    - **[NEW] H3: The repayment period**
      *Note:* Existing 'The repayment period' paragraph.
    - **[NEW] H3: How the rate and payment move**
      *Note:* Existing 'Variable payments' paragraph.
- **[NEW] H2: How does a HELOC compare with a home equity loan or cash-out refinance?**
  > A HELOC lets you draw as needed, usually at a variable rate, and leaves your first mortgage alone. A home equity loan pays one lump sum, generally at a fixed rate, and also leaves your first mortgage alone. A cash-out refinance replaces your first mortgage with a larger one. The rate you hold today usually decides between the last two.
  *Note:* Move the existing three-column table here, using the standard rows shared by all three equity pages (see report section 4). Add below the table: 'See the full side-by-side comparison' linking to /refinance/cash-out-vs-home-equity/.
- **[RENAME] H2: What documents do you need for a HELOC?** (was: "What to have ready")
  > Bring your latest mortgage statement and statements for any other loan against the home, including down payment assistance. Add your homeowners insurance declarations page, your property tax bill, recent pay stubs and W-2s or tax returns if you are self-employed, a contractor's quote if the money is for a renovation, and any HELOC offer you already have.
  *Note:* KEEP the existing bullet list below the answer.
- **[NEW] H2: What does a HELOC cost to open and keep?**
  > Expect some of the same costs as a mortgage: an application or origination fee, an appraisal or other valuation, title work and the county recording fee. After closing, some lines charge annual, inactivity, early-closure or rate-conversion fees. Ask each lender for every fee in writing, then compare lines on the same list, not on the rate alone.
  *Note:* Link 'compare lines' to /learn/how-to-compare-heloc-lenders/ and keep the existing HELOC comparison worksheet PDF link here.
- **[RENAME] H2: What are the risks of a HELOC?** (was: "Tradeoffs to understand")
  > The payment can rise when the index moves and again when the draw period ends. A lender can freeze or reduce the line if your home's value falls significantly or your finances change for the worse. Some fees continue after closing. And your home is the collateral, so missed payments can put it at risk.
  *Note:* KEEP the five existing bullets.
- **[RENAME] H2: What is different about a HELOC in Michigan?** (was: "Michigan notes")
  > Three things. Borrowing against your home does not uncap its taxable value, because Michigan law treats a transfer for security as not a transfer of ownership. A mortgage that secures a line owes no state or county transfer tax. And the county register of deeds records it for a flat fee, currently $30 per document.
    - **[RENAME] H3: Your taxable value stays capped** (was: "(bold lead-in) Borrowing does not uncap your property taxes.")
      *Note:* Keep the approved uncapping sentence verbatim. Change the citation to 'MCL 211.27a(7)' until the subsection letter is verified (see accuracy table).
    - **[NEW] H3: No transfer tax on the mortgage, one recording fee**
      *Note:* Michigan's state and county real estate transfer taxes apply to deeds, not to a mortgage given as security (MCL 207.526(d) and MCL 207.505(d)). The register of deeds charges a flat recording fee per document (MCL 600.2567). When you close the line for good, ask the lender to record a discharge so the lien comes off your title. [VERIFY: discharge timing under MCL 565.41 and 565.44 before stating any deadline]
    - **[RENAME] H3: Down payment assistance loans count** (was: "(bold lead-in) Assistance loans count.")
      *Note:* Keep existing text.
- **[RENAME] H2: How does Align compare HELOC offers?** (was: "How Samantha helps")
  > Samantha starts with why: what the money is for and when you need it. Then we put a line of credit next to a fixed home equity loan and a cash-out refinance, from multiple wholesale lenders, so the tradeoffs sit side by side. If the honest answer is to leave your equity alone for now, she will say so.
  *Note:* Keep the Samantha quote only if it is verbatim from a recorded source; otherwise replace with [NEEDS SAMANTHA QUOTE: why she asks what the money is for]. Replace the first-person paragraph after the quote with this third-person answer. Subject to Align approval.
- **[KEEP] H2: What is the money for?**
  *Note:* DEMOTE the three tile titles (Home improvements / Paying off other debt / A large expense coming up) from H3 to card labels; they are CTA tiles, not content headings.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Delete '(source of the approved uncapping sentence)' from the Michigan Treasury link text. Add MCL 207.526, MCL 600.2567 and the reviewed-by line.
- **[RENAME] H2: HELOC questions Michigan homeowners ask** (was: "Questions about this loan")
  *Note:* KEEP the five existing questions. Add the four below. Mirror all nine in FAQPage schema.
    - **[NEW] H3: What happens when the HELOC draw period ends?**
      > Borrowing stops and repayment begins. If you paid interest only during the draw, the payment now has to cover principal too, over the years that remain, so it can rise sharply on the same balance. Some plans require a balloon payment instead. Your agreement says which applies, so ask for the repayment-period payment before you sign.
    - **[NEW] H3: What disqualifies you from a HELOC?**
      > The common reasons are too little equity left after the line, a credit score below the lender's minimum, debts that leave too little room for the payment, a property type or use the lender does not accept, or a recent bankruptcy or foreclosure inside its waiting period. A different lender may read the same file differently.
    - **[NEW] H3: Do I need an appraisal for a HELOC?**
      > Usually some valuation is required. Depending on the lender and the amount, it may be a full appraisal, an exterior-only drive-by appraisal, or an automated valuation. The value sets your limit, so an online estimate is only a starting point. Ask each lender which method it uses and who pays for it.
      *Note:* Link 'drive-by appraisal' to /learn/drive-by-appraisal/.
    - **[NEW] H3: What happens to my HELOC if I sell or refinance?**
      > A sale pays the line off at closing, along with the first mortgage. If you refinance the first mortgage and keep the line, the HELOC lender has to agree to stay in second place through a subordination agreement, or the line is paid off as part of the refinance. Ask about subordination before you start a refinance.
      *Note:* Link 'subordination agreement' to /learn/refinancing-home-with-second-mortgage/.
- **[DEMOTE] H2: What our clients say / The first conversation does not have to turn into anything / Start with your question / Learn / Other loan options**
  *Note:* Template blocks shared by every product page. Keep the content; mark the block titles up as styled <p> or <div role='heading' aria-level='2'> only if accessibility review requires, and turn the three numbered step H3s into an ordered list.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Michigan HELOC: Home Equity Line Of Credit \| Align Lending (58) | Michigan HELOC: Home Equity Line of Credit \| Align Lending (58) |
| Meta | Borrow against your equity and keep your first mortgage. How a Michigan HELOC works, what it costs to open and keep, and how Samantha compares lines. (149) | How a Michigan HELOC works, what lenders look for, and what it costs to open and keep. Keep your first mortgage while Samantha compares several lenders. (152) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Source list: 'Michigan Treasury, change of ownership (source of the approved uncapping sentence)' | Internal editorial note published on the live page. | Change link text to 'Michigan Treasury, transfer of ownership and uncapping'. | P0 |
| 'MCL 211.27a(7)(j)' cited for 'a transfer for security is not a transfer of ownership' | Substance is supported: the statute lists 'a transfer for security or an assignment or discharge of a security interest' as not a transfer of ownership (shown as item (i) in the 1998 amendment text; Treasury guidance says the list now runs to (x)). The current letter could not be confirmed because legislature.mi.gov is unreachable from the audit environment. | Cite 'MCL 211.27a(7)' until someone confirms the letter on legislature.mi.gov. [VERIFY: current subsection letter] | P1 |
| 'The CFPB's example draw period is 10 years.' | Accurate as an attributed CFPB example. Stated as Align's own term, a draw or repayment period is a payment term that triggers extra HELOC advertising disclosures (12 CFR 1026.16(d)). | Keep it attributed to the CFPB. Never restate it as an Align or lender term. | P2 |
| First-person paragraph after the Samantha quote ('Once I understand the reason, I put a line of credit...') | Brand rule: Samantha in third person except in sourced quotes. It is unclear whether the paragraph is part of a recorded quote. | Use the third-person answer in the outline, or confirm and log the quote source. | P1 |
| 'When you apply through a broker, they can arrive within three business days.' / nonrefundable fee rule | Accurate (12 CFR 1026.40(b) and (h)). | Keep. | - |
| 'Is HELOC interest tax deductible? It can be...' | Accurate. The One Big Beautiful Bill Act (July 2025) made permanent the rule that home-equity interest is deductible only when the money buys, builds or substantially improves the home that secures the loan, within the $750,000 limit. | Keep. Optionally add 'and you itemize'. | - |
| New copy: '$30 per document' recording fee; no transfer tax on a mortgage | Verified against county register of deeds pages citing MCL 600.2567(1)(a) (flat $30, effective Oct 1, 2016) and the exemptions in MCL 207.526(d) and 207.505(d). | Publish with those citations. Re-check if the Legislature changes the fee. | - |
| 'Align places standalone HELOCs through multiple wholesale lenders' | A business claim about Align's lender panel. | Confirm with Align before publishing. Subject to Align approval. | P2 |

**Schema**

- WebPage: add reviewedBy (Person: Samantha Shelton, NMLS 1647301, url /samantha-shelton/) and lastReviewed matching the visible reviewed-by date.
- BreadcrumbList: Home > Loans > HELOC, with matching visible breadcrumbs (none render today).
- MortgageLoan: keep. Set loanType 'Home equity line of credit (HELOC)', add a one-sentence description, and trim areaServed from about 275 City nodes to a single State: Michigan. The JSON-LD on the sampled product page is about 32 KB.
- FAQPage: mirror all nine visible questions word for word. Google limits FAQ rich results, but the markup still helps AI parsers map questions to answers.
- Do not add AggregateRating to the product page: self-serving review markup is ignored and risks a manual action.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| home equity loan | `/product-loans/home-equity-loan/` | Comparison H2 answer |
| cash-out refinance | `/product-loans/cashout-loans/` | Comparison H2 answer |
| See the full side-by-side comparison | `/refinance/cash-out-vs-home-equity/` | Under comparison table |
| See how much equity I may be able to use | `/refinance/home-equity-review/#available-equity` | ATF tertiary link |
| break-even review | `/refinance/break-even-review/` | Comparison H2, after the table: 'If a cash-out refinance is on the table, a break-even review shows how long its closing costs take to pay back.' |
| refinance calculator | `/mortgage-refinance-calculator/` | Comparison H2: 'Run your current loan through the refinance calculator before you give up its rate.' |
| compare lines | `/learn/how-to-compare-heloc-lenders/` | Cost H2 answer |
| drive-by appraisal | `/learn/drive-by-appraisal/` | FAQ: appraisal |
| subordination agreement | `/learn/refinancing-home-with-second-mortgage/` | FAQ: sell or refinance |
| how a sale pays off a home equity loan | `/learn/selling-home-with-home-equity-loan/` | FAQ: sell or refinance |
| Michigan transfer tax | `/learn/michigan-transfer-tax/` | Michigan H3 'No transfer tax on the mortgage' |
| Michigan taxable value | `/learn/michigan-taxable-value/` | Michigan H3 'Your taxable value stays capped' |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Header mega menu, mobile popup menu and footer (sitewide) | HELOC | Equity group next to Home Equity Loan and Cash-Out Refinance |
| /learn/home-equity-line-of-credit-heloc/ | HELOCs in Michigan | First paragraph: 'If you are comparing HELOCs in Michigan, start with what lenders look for.' |
| /learn/how-to-compare-heloc-lenders/ | compare Michigan HELOC offers with Samantha | Closing section |
| /learn/home-equity/ | home equity line of credit in Michigan | HELOC section |
| /learn/refinancing-for-home-improvements/ | a HELOC for a renovation paid in stages | Options section |
| /learn/home-equity-loan-tips/ | HELOC | Where the article contrasts a fixed loan with a line |
| /product-loans/home-equity-loan/ | HELOC | Comparison table header and answer, not only 'Other loan options' |

---

### 6.2 Home equity loan: `/product-loans/home-equity-loan/`

**Overall: 74 (C).** Target query: **home equity loan michigan / home equity loans in michigan / michigan home equity loan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 82 | B | H1 'Home Equity Loans in Michigan' matches the primary query exactly and is unique. It misses the 'second mortgage' synonym, which draws about 500 impressions at position 80-87. |
| Heading structure | 70 | C | 10 H2s with 7 question H3s in the FAQ. The H2s are generic ('Key benefits', 'Guidelines for this loan'), the H3s use inconsistent Title Case, and there is no qualification or cost H2. |
| Above-the-fold answer | 74 | C | 78 words define the product and give good sizing advice ('size it to the quote'), but say nothing about who qualifies or what lenders check. |
| CTA effectiveness | 76 | C | Standard primary and ghost CTAs plus a useful mid-page 'See how much equity I can use'. Four 'Read the guide' links are generic, and there is no calculator or Loan Estimate step. |
| Title & meta | 78 | C | The 45-character title has the keyword first but no hook and uses Title Case 'In'. The 148-character meta is clear and in range. |
| Internal linking | 74 | C | In the nav (3,404 total inlinks, 51 contextual). HELOC is linked only in 'Other loan options', four anchors read 'Read the guide', and there are no calculator links. |
| E-E-A-T & trust | 62 | D | Only 2 sources (CFPB) even though the page cites IRS Pub 936 and MCL 211.27a in the text. No visible reviewer or updated date. |
| AI-search readiness | 78 | C | 7 FAQ answers with schema, a comparison table and a worked $400,000 example. There is no definition capsule or 'what do you need to qualify' answer. |
| Accuracy & compliance | 76 | C | No rates and the math is correct, but '680+ preferred' is stated as a norm and the boilerplate wrongly says an agency sets home equity loan guidelines. |

**Target query and intent.** Commercial investigation: a homeowner with a known cost who wants a fixed second loan and needs to know eligibility, amount and cost. Secondary: second mortgage (synonym cluster, about 500 impressions at pos 80-87); fixed-rate second mortgage; closed end home equity loan; home equity loan process timeline; drive-by appraisal for home equity loan.

**GSC evidence (90 days).** home equity loans in michigan 38 impr, pos 82.7; home equity loan michigan 29, pos 86.4; michigan home equity loan 12, pos 79.9; home equity loans 43, pos 85.1; home equity loan pros and cons 37, pos 33.5 (Learn article territory); drive by appraisal for home equity loan 60+38, pos about 41; second mortgage 107, pos 86.6; second mortgage loan 65, pos 83.9; home equity loan process timeline 5, pos 4.6.

**Cannibalization and structure.** /learn/home-equity-loans-pros-and-cons/ should own 'pros and cons', /learn/second-mortgages/ should own 'what is a second mortgage', and /refinance/cash-out-vs-home-equity/ should own the 'vs' queries. The product page owns 'home equity loan Michigan' and adds 'second mortgage' as an on-page synonym (H1 and definition) so it can rank for the commercial version.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For homeowners | For Michigan homeowners |
| H1 | Home Equity Loans in Michigan | Home Equity Loans in Michigan: A Second Mortgage Paid Out Once **[RENAME]** |
| Subhead (56 words) | A home equity loan is a second mortgage paid out once, at a fixed rate, that leaves your first mortgage and its rate in place. It fits a cost you can name today, so size it to the quote rather than to all the equity you have. | For homeowners with one cost they can price today, like a roof or a renovation quote, who want to keep their first mortgage and its rate. Lenders typically look at the equity left after both loans, your credit, and whether the new payment fits your income. Amounts and terms vary by lender, so we compare several. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=equity` | **Start my application** -> `https://alignlending.com/start/?goal=equity&from=home-equity-loan` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | See how much equity I may be able to use -> `/refinance/home-equity-review/#available-equity` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[NEW] H2: What is a home equity loan?**
  > A home equity loan is a second mortgage: a separate loan against your home, paid out in one lump sum at closing and usually repaid at a fixed rate over a set term. Your first mortgage, its rate and its payment stay as they are. Lenders sometimes call it a closed-end second mortgage.
- **[RENAME] H2: Why do homeowners choose a home equity loan?** (was: "Key benefits")
  > Mostly to protect a first-mortgage rate they do not want to give up. A home equity loan adds a second payment instead of replacing the first, sets the rate and payment at closing, and pays out only what the project needs. The tradeoff is that you pay interest on the full amount from the first payment.
    - **[RENAME] H3: Keep your first mortgage** (was: "Keep Your First Mortgage")
      *Note:* Sentence case. Keep text.
    - **[RENAME] H3: A payment that does not move** (was: "A Payment That Does Not Move")
      *Note:* Sentence case. Keep text.
    - **[RENAME] H3: What happens if you sell or refinance** (was: "If You Sell or Refinance")
      *Note:* Sentence case. Keep text; link 'this lender's agreement to stay in second place' to /learn/refinancing-home-with-second-mortgage/.
- **[NEW] H2: What do you need to qualify for a home equity loan in Michigan?**
  > Lenders generally look for equity left over after both loans, measured against a combined loan-to-value limit that is often 80% to 90% of the home's value. They also want credit that meets their minimum and income that supports both payments. An appraisal or other valuation sets the value. Each lender sets its own limits, so offers differ.
  *Note:* Move the 'Guidelines for this loan' cards here as H3s (below).
    - **[RENAME] H3: Credit** (was: "Credit Score (card: '680+ preferred.')")
      *Note:* Replace card text with: 'Minimums are set by each lender. A stronger score usually widens the choice of lenders and improves pricing.' Replace 'Read the guide' with 'Home equity loan pros and cons' linking to /learn/home-equity-loans-pros-and-cons/.
    - **[KEEP] H3: Equity**
      *Note:* Keep text. Replace 'Read the guide' with 'Home equity loans, HELOCs and second mortgages explained' linking to /learn/home-equity/.
    - **[RENAME] H3: Loan term** (was: "Loan Terms")
      *Note:* Keep 'Fixed terms set by the lender.' Do not add year ranges: a repayment period is a Reg Z advertising trigger term (12 CFR 1026.24(d)). Replace 'Read the guide' with 'How amortization builds equity' linking to /learn/mortgage-amortization/.
    - **[RENAME] H3: Closing costs** (was: "Closing Costs")
      *Note:* Keep text. Replace 'Read the guide' with 'Refinance and second-mortgage closing costs' linking to /learn/refinancing-closing-costs/.
- **[RENAME] H2: Home equity loan, HELOC or cash-out refinance: which fits?** (was: "Home equity loan against a line of credit")
  > If you need one known amount and want a payment that does not change, a home equity loan usually fits. If the cost arrives in stages, a HELOC charges interest only on what you draw. If today's rates are no higher than the one you hold, a cash-out refinance may be simpler. The full comparison walks through each.
  *Note:* Replace the two-column table with the standard three-column equity table (report section 4). Keep the 'The thing people regret' row. Link 'full comparison' to /refinance/cash-out-vs-home-equity/.
- **[NEW] H2: How much can you borrow with a home equity loan?**
  > Lenders cap the first mortgage and the new loan together at a share of the home's value, often 80% to 90%, set by each lender. On a $400,000 home with a $220,000 first mortgage, an 80% cap allows up to $100,000 before costs: $320,000 minus $220,000. An appraisal sets the value, not an online estimate.
  *Note:* Promoted from the FAQ. Remove 'How much can I borrow?' from the FAQ to avoid duplication.
- **[NEW] H2: What does a home equity loan cost?**
  > A home equity loan comes with a Loan Estimate, so every fee is listed line by line: origination, appraisal or valuation, title and the county recording fee. Michigan charges no transfer tax on a mortgage. Compare two Loan Estimates side by side rather than rates alone, and ask whether any fee applies if you pay the loan off early.
  *Note:* Link 'Compare two Loan Estimates' to /compare-loan-estimates/. Add the line: 'Paying points to lower the rate only pays off if you keep the loan long enough; the points versus lender credit calculator shows when.' Link it to /points-vs-lender-credit-calculator/.
- **[NEW] H2: What is different about a home equity loan in Michigan?**
  > Your property taxes do not uncap, because Michigan treats a mortgage as a transfer for security, not a change of ownership. The mortgage owes no state or county transfer tax, only the county's flat recording fee. Any down payment assistance loan counts toward the lender's limit, and its own terms say what happens when you borrow behind it.
    - **[NEW] H3: Your taxable value stays capped**
      *Note:* Move the existing FAQ answer 'Does a home equity loan raise my Michigan property taxes?' here; cite MCL 211.27a(7).
    - **[NEW] H3: No transfer tax, one recording fee**
      *Note:* Same copy as the HELOC page H3 (MCL 207.526(d), 207.505(d), 600.2567).
    - **[NEW] H3: Down payment assistance loans count**
      *Note:* Reuse the HELOC page's 'Assistance loans count' paragraph. [VERIFY: MSHDA subordination policy before saying a DPA lien can stay in place]
- **[KEEP] H2: Check the rules at the source**
  *Note:* Add IRS Publication 936, 12 CFR 1026.19(e) (Loan Estimate), 12 CFR 1026.23 (right to cancel), MCL 211.27a, MCL 207.526 and the reviewed-by line. Today only two CFPB pages are listed.
- **[RENAME] H2: Home equity loan questions Michigan homeowners ask** (was: "Questions about this loan")
  *Note:* KEEP: existing mortgage, tax deductible, spend the money, home equity loan or HELOC (shorten to 60 words), credit score. MOVE: property taxes (to Michigan H2) and how much (to H2). ADD the four below.
    - **[NEW] H3: Do I need an appraisal for a home equity loan?**
      > Usually some valuation is required. Depending on the lender and the loan amount, it may be a full appraisal, an exterior-only drive-by appraisal, or an automated valuation. The value decides how much you can borrow, so an online estimate is only a starting point. Ask each lender which method it uses and who pays.
    - **[NEW] H3: What disqualifies you from a home equity loan?**
      > The usual reasons are too little equity after both loans, a credit score under the lender's minimum, a debt-to-income ratio that leaves no room for the new payment, a property type the lender does not accept, or a recent bankruptcy or foreclosure. Lenders weigh these differently, so a no from one is not a no from all.
    - **[NEW] H3: How long does a home equity loan take to close?**
      > It follows mortgage steps on a smaller scale: application, valuation, title work, underwriting and closing. On a home you live in, federal law then gives you three business days to cancel before the money is released. Timing depends on the lender, the valuation and how quickly documents come in, so ask each lender for its current estimate.
    - **[NEW] H3: What happens to a home equity loan if I sell my house?**
      > It is paid off at closing from the sale proceeds, along with your first mortgage, and the payoffs are recorded as discharges. If you refinance the first mortgage instead, the home equity lender must agree to stay in second place through a subordination agreement, or the loan is paid off as part of the refinance.
- **[DEMOTE] H2: What our clients say / Ask Samantha whether this loan fits / Start with your question / Learn / Other loan options**
  *Note:* Same template treatment as the HELOC page.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Home Equity Loans In Michigan \| Align Lending (45) | Home Equity Loans in Michigan \| Keep Your First Mortgage (56) |
| Meta | Home equity loans in Michigan: a fixed second loan against your home, how it compares with a HELOC or cash-out refinance, and what lenders look for. (148) | A Michigan home equity loan is a second mortgage paid out once, usually at a fixed rate, that leaves your first mortgage alone. What lenders check and how much. (160) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Guideline card: 'Credit Score 680+ preferred.' | Presented as a standard. There is no agency standard for home equity loans, and minimums vary by lender. | Replace with 'Minimums are set by each lender. A stronger score usually widens the choice of lenders and improves pricing.' | P1 |
| Boilerplate under table: 'Guidelines are set by the agency and the lender and they change.' | Home equity loans are lender products, not agency programs, so the sentence is inaccurate on this page. | Replace with the non-agency disclaimer in report section 5. | P1 |
| 'Lenders cap the first mortgage and this loan together, often at 80% to 90%' | A reasonable typical range, framed as lender-set. | Keep, with 'set by each lender'. | - |
| Worked example: $400,000 home, $220,000 first, 80% cap, up to $100,000 | The arithmetic is correct. A loan amount is not a Reg Z trigger term. | Keep with 'before costs' and 'an appraisal sets the value'. | - |
| Any future copy stating loan terms in years | Repayment period is a closed-end trigger term (12 CFR 1026.24(d)) that requires full disclosures. | Keep 'Fixed terms set by the lender.' Never add year ranges or payment examples. | P1 |
| Tax deductibility answer citing Publication 936 | Accurate and permanent after the July 2025 law. The IRS link is missing from the source list. | Add the IRS Publication 936 link to sources. | P2 |
| Sources: two CFPB pages only | Thin for E-E-A-T compared with the HELOC page's 11 sources. | Add the sources listed in the outline. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed (as on the HELOC page).
- BreadcrumbList: Home > Loans > Home Equity Loan, with visible breadcrumbs.
- MortgageLoan: loanType 'Home equity loan (closed-end second mortgage)', alternateName 'Second mortgage', description, areaServed State: Michigan (trim the City list).
- FAQPage: mirror the nine visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| HELOC | `/product-loans/heloc/` | Comparison H2 answer and table header |
| cash-out refinance | `/product-loans/cashout-loans/` | Comparison H2 answer |
| full comparison | `/refinance/cash-out-vs-home-equity/` | Comparison H2 answer |
| Compare two Loan Estimates | `/compare-loan-estimates/` | Cost H2 |
| points versus lender credit calculator | `/points-vs-lender-credit-calculator/` | Cost H2 |
| drive-by appraisal | `/learn/drive-by-appraisal/` | FAQ: appraisal |
| second mortgages | `/learn/second-mortgages/` | Definition H2: 'how second mortgages work' |
| Home equity loan pros and cons | `/learn/home-equity-loans-pros-and-cons/` | Credit card (replaces 'Read the guide') |
| home equity loan tips | `/learn/home-equity-loan-tips/` | Why-choose H2 |
| how a sale pays off a home equity loan | `/learn/selling-home-with-home-equity-loan/` | FAQ: sell |
| subordination agreement | `/learn/refinancing-home-with-second-mortgage/` | FAQ: sell, and H3 'What happens if you sell or refinance' |
| Michigan taxable value | `/learn/michigan-taxable-value/` | Michigan H3 |
| Michigan transfer tax | `/learn/michigan-transfer-tax/` | Michigan H3 |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| /learn/second-mortgages/ | home equity loans in Michigan | Where the article defines a closed-end second |
| /learn/drive-by-appraisal/ | home equity loan | Section on when lenders use drive-by appraisals (this article draws 98 impressions for 'drive by appraisal for home equity loan') |
| /learn/home-equity-loans-pros-and-cons/ | Home equity loans in Michigan | Closing paragraph |

---

### 6.3 Cash-out refinance: `/product-loans/cashout-loans/`

**Overall: 76 (C).** Target query: **michigan cash out refinance / cash out refinance michigan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 84 | B | H1 'Cash-Out Refinance in Michigan' matches the leading query (81 impressions, position 42.5) and is unique. |
| Heading structure | 72 | C | Question-led H2 'Is a cash-out refinance for you?' is good. 'Cash-out refinance against borrowing behind your mortgage' is awkward, 'Credit' and 'Credit And Debt' overlap, and 5 template H2s are shared sitewide. |
| Above-the-fold answer | 76 | C | 64 words that define the product and give the key warning (check your rate), but no qualification cues such as the 80% cap, credit or seasoning. |
| CTA effectiveness | 78 | C | 'Compare both against my current loan' goes to the right comparison page. There are no refinance calculator, break-even or points links at the decision point. |
| Title & meta | 80 | B | The 46-character title has the keyword first but no hook. The 149-character meta is specific. |
| Internal linking | 76 | C | In the nav with 74 contextual inlinks. It links the break-even review but not /mortgage-refinance-calculator/ or /points-vs-lender-credit-calculator/, and its cards use generic 'Read the guide' anchors. |
| E-E-A-T & trust | 62 | D | One external source (Fannie B2-1.3-03) plus an MCL link. No reviewer or updated date. |
| AI-search readiness | 80 | B | 6 direct FAQ answers, a comparison table and a worked example. The '12-month rule' and 'is cash-out taxable' PAA and GSC questions are not answered. |
| Accuracy & compliance | 74 | C | No rates. 'Conventional cash-out usually starts at 620' is out of date after Fannie Mae dropped the DU minimum in Nov 2025, and several facts carry no source. |

**Target query and intent.** Commercial or transactional: a homeowner who has decided they want cash and is checking whether to replace the first mortgage and whether they qualify. Secondary: cash-out refinance requirements; 12-month rule / waiting period; how much cash can I take out; is cash-out refinance taxable; FHA/VA cash-out (supporting); cash-out refinance farmington mi (city page territory).

**GSC evidence (90 days).** michigan cash out refinance 81 impr, pos 42.5; cash-out refinance farmington mi 42, pos 22.3; cash out home equity michigan 7, pos 37.1; is cash out refinance taxable 6, pos 20.5; home equity vs cash-out refinance 23, pos 81.1 (comparison page's job); va cash out refinance after forbearance 24, pos 26.8; usda cash out refinance 14, pos 15.4.

**Cannibalization and structure.** /learn/what-is-cash-out-refinance-loan/ (131 inlinks) owns 'what is a cash-out refinance'; /learn/pros-and-cons-of-cash-out-refinancing/ owns pros and cons; /refinance/cash-out-vs-home-equity/ owns 'vs'. The product page owns 'cash-out refinance Michigan' plus requirements, amount and Michigan specifics. The 60 internal links that use the exact anchor 'cash-out refinance' should be diversified over time.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For homeowners | For Michigan homeowners |
| H1 | Cash-Out Refinance in Michigan | Cash-Out Refinance in Michigan **[KEEP]** |
| Subhead (58 words) | A cash-out refinance replaces your current mortgage with a larger one and hands you the difference in cash. It also replaces the rate you hold today, so check that rate before anything else. | For homeowners who need one lump sum and are willing to replace their current mortgage, rate included. Conventional and FHA cash-out loans generally cap the new loan at 80% of the appraised value, and lenders review credit, income and debts as on any refinance. VA can go higher for eligible borrowers. Check the rate you hold now first. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=equity` | **Start my application** -> `https://alignlending.com/start/?goal=equity&from=cashout` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | Run my numbers in the refinance calculator -> `/mortgage-refinance-calculator/` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[NEW] H2: What is a cash-out refinance?**
  > A cash-out refinance pays off your current mortgage with a new, larger one and gives you the difference in cash at closing, minus costs. You end up with one mortgage and one payment, on new terms. Because the old loan is gone, so is its rate, which is why the rate you hold today matters most.
- **[RENAME] H2: Who is a cash-out refinance a good fit for?** (was: "Is a cash-out refinance for you?")
  > It fits homeowners willing to replace their mortgage, who need one lump sum for a cost they can name, and whose budget has room for a payment on a larger balance. It fits best when today's rates are no higher than the one you hold. It fits poorly when you need money off and on over time.
  *Note:* KEEP the three H3s (sentence case). ADD H3 'Who it may not fit': 'You hold a rate well below today's. You need money off and on over time. You expect to sell before the closing costs pay back.'
- **[NEW] H2: What do you need to qualify for a cash-out refinance in Michigan?**
  > Lenders look at equity, credit, debts and time. Conventional and FHA cash-out loans generally cap the new loan at 80% of the appraised value, and VA can go higher for eligible borrowers. You also need credit that meets the lender's minimum, total debts the new payment fits within, and, on most programs, some ownership and seasoning history.
  *Note:* Move the 'Guidelines for this loan' cards here as H3s (below).
    - **[RENAME] H3: Credit** (was: "Credit (card: 'conventional cash-out usually starts at 620')")
      *Note:* Replace card text with: 'Minimums vary by program and lender. Fannie Mae dropped its fixed 620 floor for loans run through its automated underwriting in November 2025, but many lenders still set their own minimums, and a higher score usually improves pricing and the amount available.' Anchor: 'Refinancing with a lower credit score' linking to /learn/refinancing-with-low-credit-score/.
    - **[KEEP] H3: Equity**
      *Note:* Add 'on a one-unit home you live in; second homes and 2-4 units are lower'. Anchor: 'How a cash-out refinance works' linking to /learn/what-is-cash-out-refinance-loan/.
    - **[RENAME] H3: Debt-to-income ratio** (was: "Credit And Debt")
      *Note:* Keep text. Anchor: 'How DTI is calculated' linking to /learn/debt-to-income-ratio-dti/.
    - **[NEW] H3: Ownership and seasoning**
      *Note:* 'Conventional rules generally expect you to have been on title for at least six months, and Fannie Mae generally looks for the mortgage being paid off to be at least 12 months old. FHA and VA set their own seasoning rules.' [VERIFY: Fannie Mae B2-1.3-03, HUD 4000.1 and VA guidance before publishing]
    - **[RENAME] H3: Closing costs** (was: "Closing Costs")
      *Note:* Keep text. Anchor: 'Refinancing closing costs' linking to /learn/refinancing-closing-costs/.
- **[RENAME] H2: Cash-out refinance or a home equity loan or HELOC: which costs less?** (was: "Cash-out refinance against borrowing behind your mortgage")
  > It depends on the rate you hold now. If today's rates are no higher than yours, a cash-out refinance can replace two payments with one at little rate cost. If your current rate is well below today's, borrowing behind it with a home equity loan or HELOC often costs less overall, even when the second loan's rate is higher.
  *Note:* KEEP the existing table. Under it add: 'See the full side-by-side comparison' linking to /refinance/cash-out-vs-home-equity/.
- **[NEW] H2: How much cash can you take out?**
  > Most conventional and FHA cash-out refinances allow a new loan up to 80% of the appraised value, minus what you owe. On a $400,000 home with a $220,000 balance, that is about $100,000 before costs, and closing costs are figured on the new $320,000 loan. VA has its own limits. An appraisal, not an online estimate, sets the value.
  *Note:* Promoted from the FAQ. Remove the FAQ duplicate.
- **[NEW] H2: What does a cash-out refinance cost, and when does it pay back?**
  > You pay full closing costs on the whole new loan: origination, appraisal, title, the county recording fee, and prepaid interest, taxes and insurance. Michigan charges no transfer tax on a mortgage. Whether paying points makes sense depends on how long you keep the loan, so run a break-even review before you choose between options.
  *Note:* Links: 'break-even review' to /refinance/break-even-review/; 'points versus a lender credit' to /points-vs-lender-credit-calculator/ ('Compare paying points with taking a lender credit before you lock'); 'refinance calculator' to /mortgage-refinance-calculator/.
- **[NEW] H2: What is different about a cash-out refinance in Michigan?**
  > A refinance does not uncap your taxable value, because Michigan treats a transfer for security, and the discharge of one, as not a transfer of ownership. The new mortgage owes no state or county transfer tax, only the county's flat recording fee. Changing who is on the deed is a separate question, so ask before adding or removing anyone.
    - **[NEW] H3: Your taxable value stays capped**
      *Note:* Move the existing FAQ answer here; cite MCL 211.27a(7).
    - **[NEW] H3: No transfer tax on the new mortgage**
      *Note:* MCL 207.526(d), 207.505(d); recording fee MCL 600.2567.
    - **[NEW] H3: Down payment assistance loans are usually repaid**
      *Note:* 'A down payment assistance loan's terms often require repayment when you refinance. Bring its note or payoff letter so the new loan is sized to cover it.' [VERIFY: MSHDA DPA repayment terms]
- **[KEEP] H2: Check the rules at the source**
  *Note:* Today only the Fannie Mae B2-1.3-03 link. Add the Fannie Mae Eligibility Matrix, HUD Handbook 4000.1 (FHA cash-out), VA Lender's Handbook (cash-out refinance), 12 CFR 1026.23 (right of rescission), IRS Publication 936, MCL 211.27a, MCL 207.526 and the reviewed-by line.
- **[RENAME] H2: Cash-out refinance questions Michigan homeowners ask** (was: "Questions about this loan")
  *Note:* KEEP: rate I have now, use of money, how long it takes (add funds timing), credit. MOVE: how much cash (to H2), property taxes (to Michigan H2). ADD the four below.
    - **[NEW] H3: Is there a waiting period for a cash-out refinance?**
      > Usually. For a conventional cash-out, you generally need to have been on title at least six months, and Fannie Mae generally wants the loan being paid off to be at least 12 months old. FHA and VA have their own seasoning rules. Bring your purchase date and current note date, and we will check which rules apply.
      *Note:* [VERIFY: Fannie Mae B2-1.3-03 seasoning text before publishing]
    - **[NEW] H3: Is the rate on a cash-out refinance higher than on a regular refinance?**
      > Often, yes. Lenders treat cash-out as somewhat riskier than a refinance that only changes the rate or term, so pricing adjustments usually apply, and they grow as the loan-to-value rises or the score falls. We do not publish rates. Compare full Loan Estimates for both options, issued on the same day.
    - **[NEW] H3: Is the cash from a cash-out refinance taxable?**
      > Generally no. Cash from a refinance is borrowed money, not income, so it is not taxed as income. Whether the interest on the extra amount is deductible depends on how you use it: the IRS allows it only for buying, building or substantially improving the home that secures the loan, within limits. Ask a tax professional.
    - **[NEW] H3: Can I do a cash-out refinance with an FHA or VA loan?**
      > Yes. FHA offers a cash-out refinance for owner-occupied homes, generally up to 80% of the value. VA offers one to eligible veterans and service members, and it can go higher, depending on the lender. Each program has its own seasoning, occupancy and cost rules, including FHA mortgage insurance and the VA funding fee.
      *Note:* Links: /product-loans/fha-loans/, /product-loans/va-loans/, /va-funding-fee-calculator/.
- **[DEMOTE] H2: What our clients say / Ask Samantha whether this loan fits / Start with your question / Learn / Other loan options**
  *Note:* Template treatment.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Cash-Out Refinance In Michigan \| Align Lending (46) | Cash-Out Refinance in Michigan: Requirements and Tradeoffs (58) |
| Meta | A cash-out refinance replaces your mortgage with a larger one and returns the difference in cash. Compare it with a second loan that keeps your rate. (149) | How a Michigan cash-out refinance works, how much equity you can take (often up to 80% of value), and when a second loan that keeps your rate costs less. (153) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Guideline card: 'conventional cash-out usually starts at 620' | Out of date. Fannie Mae removed its fixed 620 minimum for loans submitted through Desktop Underwriter from Nov 16, 2025 (Selling Guide update, Nov 2025); Freddie Mac had already done so. Lender overlays still commonly apply. | Use the replacement card text in the outline. | P0 |
| 'Usually up to 80% of the value, less what you owe.' | Correct for a one-unit principal residence (Fannie Mae Eligibility Matrix, Dec 2025) and FHA. Lower for second homes and 2-4 units. | Add 'on a one-unit home you live in'. | P2 |
| '43% to 45%... conventional files can reach 50%' | Consistent with the DU maximum of 50%. | Keep. | - |
| 'three business day right of rescission after closing before the funds are released' | Correct for a principal dwelling (12 CFR 1026.23). The source is not listed. | Add 12 CFR 1026.23 to sources. | P2 |
| Michigan property-tax answer: transfer for security and discharge are not a transfer of ownership | Consistent with the MCL 211.27a(7) text. | Keep. Cite 'MCL 211.27a(7)' without a letter until verified. | P2 |
| New copy: 6-month title and 12-month seasoning | Could not be confirmed from primary text in this audit (the Fannie Mae Selling Guide was not fetched). | [VERIFY: Fannie Mae B2-1.3-03] before publishing. | P1 |
| Sources: one link | Thin for a page that states credit, DTI, LTV, VA and rescission facts. | Add the sources listed in the outline. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Refinance > Cash-Out Refinance, which matches the URL's refinance intent better than Loans. Pick one and use it consistently, visible and in schema.
- MortgageLoan: loanType 'Cash-out refinance', description, areaServed State: Michigan.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| home equity loan | `/product-loans/home-equity-loan/` | Comparison H2 answer |
| HELOC | `/product-loans/heloc/` | Comparison H2 answer |
| See the full side-by-side comparison | `/refinance/cash-out-vs-home-equity/` | Under comparison table |
| break-even review | `/refinance/break-even-review/` | Cost H2 |
| points versus a lender credit | `/points-vs-lender-credit-calculator/` | Cost H2 |
| Run my numbers in the refinance calculator | `/mortgage-refinance-calculator/` | ATF tertiary and Cost H2 |
| cash-out refinance pros and cons | `/learn/pros-and-cons-of-cash-out-refinancing/` | Fit H2 |
| refinance appraisal requirements | `/learn/refinance-appraisal-requirements/` | How-much H2: 'An appraisal, not an online estimate, sets the value' |
| Refinancing with a lower credit score | `/learn/refinancing-with-low-credit-score/` | Credit H3 |
| VA loans | `/product-loans/va-loans/` | FAQ: FHA or VA |
| FHA loans | `/product-loans/fha-loans/` | FAQ: FHA or VA |
| VA funding fee calculator | `/va-funding-fee-calculator/` | FAQ: FHA or VA |
| Michigan taxable value | `/learn/michigan-taxable-value/` | Michigan H3 |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| /refinance/ | cash-out refinance in Michigan | Refinance hub section on taking equity |
| /learn/what-is-cash-out-refinance-loan/ | Michigan cash-out refinance requirements | Requirements section (diversifies the 60 identical 'cash-out refinance' anchors) |
| /learn/pros-and-cons-of-cash-out-refinancing/ | cash-out refinance in Michigan | Conclusion |

---

### 6.4 Non-QM hub: `/product-loans/non-qm-loans/`

**Overall: 70 (C).** Target query: **michigan non qm loans / non qm loans michigan / michigan non-qm mortgage**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 84 | B | H1 'Non-QM Loans in Michigan' matches the top query (117 impressions, position 30) and the one click ('non qm loans michigan'). |
| Heading structure | 68 | D | Generic H2s ('Key benefits', 'Guidelines for this loan'), no section that routes to the five child programs, and five template H2s. |
| Above-the-fold answer | 74 | C | 73 words say who it is for and are honest about cost. Requirements and next steps are missing. |
| CTA effectiveness | 70 | C | The primary CTA goes to /start/?goal=buy. 'Tell Samantha the situation' goes to Calendly. There is no path to the child programs, which a triage page needs most. |
| Title & meta | 76 | C | The 43-character title leads with 'Broker' instead of the searched word 'loans' and has no hook. The 147-character meta is good. |
| Internal linking | 52 | F | Links only 2 of 5 children; asset-based and condo are named in the table without links; 15 contextual inlinks for a hub. |
| E-E-A-T & trust | 58 | F | One source (12 CFR 1026.43). No reviewer, date or quote. |
| AI-search readiness | 72 | C | The situation table is quotable and there are 6 short FAQ answers, but no definition capsule, no cost answer and no ItemList of programs. |
| Accuracy & compliance | 78 | C | No rates and an honest cost statement. The boilerplate wrongly says an agency sets the guidelines, and the ITIN/foreign national row needs Align confirmation. |

**Target query and intent.** Commercial investigation with triage: the visitor knows their file does not fit and needs to be routed to the right program, and to know what non-QM costs. Secondary: what is a non-qm loan; how do non-qm lenders evaluate borrowers; non qm loans for self employed (Learn article territory); non-qm cost vs alternatives; non qm lenders near me.

**GSC evidence (90 days).** michigan non qm loans 117 impr, pos 30.1; michigan non-qm mortgage 36, pos 10.0; michigan non qm home loans 8, pos 15.4; non qm loans michigan 5 impr, 1 click, pos 25 (the only click across all nine pages' topics in 90 days); how do non-qm lenders evaluate borrowers? 10, pos 5.6; how to evaluate the overall cost of a non-qm loan (apr, points, and fees) vs alternatives? 8, pos 3.9; non qm loans for self employed 16, pos 48.3.

**Cannibalization and structure.** The hub is the parent; Bank Statement, 1099, Asset Depletion, DSCR and Non-Warrantable Condo are children, and Jumbo is a sibling. Today the hub links to only 2 of the 5 children (Bank Statement and DSCR), its situation table names asset-based and condo loans without linking them, and the hub itself has only 15 contextual inlinks. /learn/non-qm-loans-for-self-employed-borrowers/ owns 'non qm loans for self employed', and /learn/jumbo-and-non-qm/ overlaps the hub; that article should link up to the hub with 'non-QM loans in Michigan'.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For home buyers and homeowners | For self-employed borrowers, investors and other non-traditional files |
| H1 | Non-QM Loans in Michigan | Non-QM Loans in Michigan **[KEEP]** |
| Subhead (54 words) | Non-Qualified Mortgage (Non-QM) loans are built for borrowers whose files don't fit conventional lending guidelines, and they usually cost more. Whether you're self-employed, using asset-based income, or recovering from recent credit events, Non-QM loans offer other ways to document a file. | For borrowers whose income, history or property does not fit conventional or government rules: the self-employed, investors, retirees living on savings, and buyers after a recent credit event. Lenders may qualify you on bank statements, 1099s, assets or a rental's income instead. Expect a larger down payment and higher cost; terms vary by lender. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=buy` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=non-qm` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | Find the non-QM program for your situation -> `/product-loans/non-qm-loans/#programs` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[NEW] H2: What is a non-QM loan?**
  > A non-QM loan is a mortgage outside the federal Qualified Mortgage rules, often because income is documented another way, such as bank statements or assets. For a consumer home loan, the lender still has to verify that you can repay. Non-QM lenders write their own guidelines, so terms and requirements vary from one lender to the next.
- **[RENAME] H2: Which non-QM loan fits your situation?** (was: "Which non-QM loan fits which situation")
  > Start with the part of your file that does not fit. Heavy write-offs on a business return point to a bank statement or 1099 loan. Living on savings points to asset depletion. Buying rentals points to DSCR. A condo that failed agency review points to a non-warrantable condo loan. A recent credit event points to shorter-seasoning programs.
  *Note:* Add id='programs'. KEEP the table, but make each 'What to ask about' cell a link to its child page. Add the H3 cards below. Remove the 'Foreign national or ITIN' row unless Align confirms it places these loans.
    - **[NEW] H3: Bank statement loans**
      *Note:* 'Qualify on 12 or 24 months of deposits instead of tax returns.' Link: 'Bank statement loans in Michigan' to /product-loans/bank-statement-loan/.
    - **[NEW] H3: 1099 income loans**
      *Note:* 'For contractors and gig workers paid on a 1099.' Link: '1099 income loans' to /product-loans/1099-income-loans/.
    - **[NEW] H3: Asset depletion loans**
      *Note:* 'Turn eligible savings and retirement balances into qualifying income.' Link: 'Asset depletion loans' to /product-loans/asset-based-income-loans/.
    - **[NEW] H3: DSCR loans for rental property**
      *Note:* 'Qualify a rental on its rent, not your tax returns.' Link: 'DSCR loans in Michigan' to /product-loans/dscr-loans-michigan/.
    - **[NEW] H3: Non-warrantable condo loans**
      *Note:* 'When the building, not you, fails agency review.' Link: 'Non-warrantable condo loans' to /product-loans/non-warrantable-condo-loans/.
    - **[NEW] H3: Jumbo loans**
      *Note:* 'Above the conforming limit, with or without non-QM documentation.' Link: 'Jumbo loans' to /product-loans/jumbo-loans/.
    - **[NEW] H3: After a bankruptcy, foreclosure or short sale**
      *Note:* Two sentences pointing to the H2 below. (Backlog: a dedicated page; see report.)
- **[RENAME] H2: Why would you choose a non-QM loan?** (was: "Key benefits")
  > Because a conventional or government loan cannot see the income or property you actually have. Non-QM offers other ways to document income, shorter waiting periods after some credit events, and property types the agencies decline. The tradeoff is cost: expect higher pricing and often a larger down payment, so compare it with agency options first.
  *Note:* KEEP the three H3s in sentence case.
- **[RENAME] H2: What do non-QM lenders usually require?** (was: "Guidelines for this loan")
  > Each program sets its own rules, but most look at credit history, a down payment larger than conventional, reserves after closing, and income documented by the program's method: bank statements, 1099s, assets, or for a rental, the property's rent. Debt-to-income limits can be more flexible with compensating factors. Ask each lender for its requirements in writing.
  *Note:* KEEP the cards (Credit score / Down payment / Income / DTI) and ADD a 'Reserves' card: 'Most programs expect some months of payments held back after closing.' Replace the four 'Read the guide' anchors with descriptive ones (see links).
- **[NEW] H2: How much more does a non-QM loan cost?**
  > Usually more than a conventional loan: a higher rate, often higher fees, and sometimes a larger down payment or reserves. We do not publish rates. The fair comparison is two full Loan Estimates issued the same day, one agency and one non-QM where both are possible, comparing APR, points and cash to close, not the rate alone.
  *Note:* Links: 'two full Loan Estimates' to /compare-loan-estimates/; 'points' to /points-vs-lender-credit-calculator/.
- **[NEW] H2: How long after a bankruptcy or foreclosure can you get a non-QM loan?**
  > Some non-QM programs consider a file one to two years after a bankruptcy, foreclosure or short sale, sooner than the agency waiting periods. Expect to show the discharge or sale papers, a short letter explaining what happened, and on-time payments since. Pricing and down payment usually reflect how recent the event was.
  *Note:* Promoted from the FAQ. Add a small table of agency waiting periods with citations (Fannie Mae B3-5.3-07; HUD 4000.1). [VERIFY: current agency waiting periods before publishing figures]
- **[NEW] H2: What is different about a non-QM loan in Michigan?**
  > Mostly the tax line. The year after a Michigan home sells, its taxable value resets to half of the assessor's market value, so the seller's tax bill is not your tax bill. A rental is also taxed at the non-homestead rate, which adds school operating millage a home you live in does not pay. Estimate the tax first.
  *Note:* Promoted from the FAQ. The uncapping sentence is the site's approved wording; keep it verbatim. Link 'Estimate the tax' to /michigan-property-tax-calculator/.
- **[NEW] H2: How does Align place non-QM loans?**
  > We start by checking whether a conventional or government loan can still work, because it usually costs less. If not, we take your file to the wholesale non-QM lenders whose rules match the part that does not fit, and put their terms side by side. Align is a broker, so the lender makes the credit decision.
  *Note:* Add [NEEDS SAMANTHA QUOTE: why she checks agency options before non-QM]. Subject to Align approval.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Today one source. Add CFPB 'What is a Qualified Mortgage?', 12 CFR 1026.43(e) and (g), Fannie Mae B3-5.3-07, HUD 4000.1, Michigan Treasury Principal Residence Exemption, MCL 211.27a and the reviewed-by line.
- **[RENAME] H2: Non-QM questions Michigan borrowers ask** (was: "Questions about this loan")
  *Note:* KEEP: assets instead of income (expand to 40+ words and link the asset page), mortgage insurance. MOVE: what makes a loan non-QM (to H2), bankruptcy (to H2), cost (to H2), Michigan (to H2). ADD the three below.
    - **[NEW] H3: How do non-QM lenders evaluate borrowers?**
      > They still verify that you can repay, using the program's documents instead of tax returns: deposits on bank statements, 1099 totals, account balances, or a rental's lease or market rent. They also weigh credit history, reserves, down payment and the property. Each lender weighs these differently, which is why comparing more than one matters.
    - **[NEW] H3: Is a non-QM loan a bad idea?**
      > Not by itself. Non-QM is a documentation route, not a lower standard: for a consumer home loan the lender must still verify ability to repay, and prepayment penalties are restricted. The real risks are cost and an exit plan that depends on refinancing later. Make sure the payment works on its own terms.
    - **[NEW] H3: Can I refinance out of a non-QM loan later?**
      > Many borrowers plan to, once two years of tax returns show enough income or a credit event ages. But a later refinance depends on rates, your file and the home's value at that time, so treat it as a possibility rather than the plan. Choose a payment you can carry for as long as you might keep the loan.
- **[DEMOTE] H2: What our clients say / Ask Samantha whether this loan fits / Start with your question / Learn / Other loan options**
  *Note:* Template treatment. Expand 'Other loan options' to list all five children.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Michigan Non-QM Loan Broker \| Align Lending (43) | Non-QM Loans in Michigan \| Self-Employed & Investor Options (59) |
| Meta | Non-QM loans in Michigan for self-employed borrowers, investors and people with non-traditional income or recent credit events. See which one fits. (147) | Non-QM loans in Michigan for self-employed borrowers, investors, retirees and recent credit events. Compare bank statement, 1099, asset and DSCR options. (153) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Boilerplate: 'Guidelines are set by the agency and the lender...' | Non-QM loans have no agency; the sentence is wrong on this page. | Replace with: 'Guidelines are set by each lender and change often. These are common ranges, not a commitment to lend or an offer of credit. Align Lending LLC, NMLS #2041154. Equal Housing Opportunity.' | P1 |
| Table row: 'Foreign national or ITIN programs' | This implies Align places these loans. That is not confirmed anywhere else on the site. | Keep only if Align confirms. [VERIFY with Align] | P1 |
| 'For a home you will live in, the lender still has to verify that you can repay (12 CFR 1026.43)' | Ability-to-repay covers consumer credit secured by any dwelling, including second homes; business-purpose loans are exempt. | Use 'For a consumer home loan, the lender still has to verify that you can repay'. | P2 |
| 'Credit Score: Varies by program; many look for 620 or higher.' | A reasonable typical statement with a 'varies' qualifier. | Keep. | - |
| 'Some non-QM programs consider a file one to two years after a bankruptcy...' | Typical, and qualified with 'some'. | Keep. If agency comparison figures are added, cite B3-5.3-07 and HUD 4000.1. | - |
| Non-homestead rate 'adds school operating millage' | Accurate: the Principal Residence Exemption exempts a homestead from up to 18 mills of school operating tax (MCL 211.7cc; MCL 380.1211). No source is listed. | Add Michigan Treasury PRE to sources. | P2 |
| Sources: one CFPB link | Thin for the hub page. | Add the sources listed in the outline. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans (visible and in schema). Each child adds a fourth level.
- ItemList (NEW): the five child programs plus Jumbo, each a ListItem with name and url. This helps AI systems map the parent-child structure.
- MortgageLoan: loanType 'Non-QM', description, areaServed State: Michigan.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| Bank statement loans in Michigan | `/product-loans/bank-statement-loan/` | Program card and table row |
| 1099 income loans | `/product-loans/1099-income-loans/` | Program card and table row |
| Asset depletion loans | `/product-loans/asset-based-income-loans/` | Program card, table row and FAQ |
| DSCR loans in Michigan | `/product-loans/dscr-loans-michigan/` | Program card and table row |
| Non-warrantable condo loans | `/product-loans/non-warrantable-condo-loans/` | Program card and table row |
| Jumbo loans | `/product-loans/jumbo-loans/` | Program card |
| self-employed homebuyer plan | `/purchase/self-employed-homebuyer/` | Program intro |
| investment property financing | `/purchase/investment-property-financing/` | DSCR card |
| two full Loan Estimates | `/compare-loan-estimates/` | Cost H2 |
| points | `/points-vs-lender-credit-calculator/` | Cost H2 |
| portfolio loan | `/learn/what-is-portfolio-loan/` | Why-choose H2 (property types) |
| why 'no-doc' loans still need documents | `/learn/what-is-no-doc-mortgage/` | Requirements H2 |
| non-QM loans for self-employed borrowers | `/learn/non-qm-loans-for-self-employed-borrowers/` | Requirements H2 |
| refinancing after bankruptcy | `/learn/refinancing-after-bankruptcy/` | Bankruptcy H2 |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Each child page (5) | non-QM loan options | Intro sentence and the sibling strip |
| /learn/jumbo-and-non-qm/ | non-QM loans in Michigan | Non-QM section |
| /learn/non-conforming-loans/ | non-QM loans in Michigan | Types section |
| /learn/what-is-portfolio-loan/ | non-QM loans | Where portfolio and non-QM overlap |

---

### 6.5 DSCR loans: `/product-loans/dscr-loans-michigan/`

**Overall: 77 (C).** Target query: **dscr loans michigan / dscr loan michigan / michigan dscr loans**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 86 | B | H1 'DSCR Loans in Michigan' matches the dominant cluster (about 530 impressions across three variants, positions 39-46) and the eyebrow names investors. |
| Heading structure | 70 | C | Generic 'Key benefits' and 'Guidelines' H2s, the calculator form label 'The property' marked up as an H3, and no H2 for risks or refinancing. |
| Above-the-fold answer | 82 | B | 77 words cover who it is for and what qualifies (rent vs payment, no tax returns). Down payment, reserves and credit are missing. |
| CTA effectiveness | 82 | B | Primary and ghost CTAs, an in-page calculator jump and 'Talk through this property' next to the result: good placement at the decision point. |
| Title & meta | 86 | B | The 54-character title pairs the keyword with a 'calculator' hook. The 141-character meta is specific but ends weakly ('with interest-only'). |
| Internal linking | 76 | C | In the header (2,555 total inlinks, 40 contextual) and linked from investment and city pages. Missing links to the condo, refinance-investment and short-term-rental pages, and 4 anchors read 'Read the guide'. |
| E-E-A-T & trust | 55 | F | No 'Check the rules at the source' section at all; its only external links are Calendly and Google reviews. No reviewer or date. |
| AI-search readiness | 80 | B | The formula answer, comparison table and Michigan non-homestead fact are quotable. LLC, refinance, appraisal and credit questions (all PAA) are unanswered. |
| Accuracy & compliance | 76 | C | No advertised rates (the calculator rate is user input). '680+ preferred' and 'non-warrantable properties allowed' overstate typical terms, and prepayment penalties go unmentioned. |

**Target query and intent.** Commercial or transactional: an investor checking whether a specific Michigan rental qualifies and what lenders require. Secondary: dscr loan michigan requirements; dscr calculator; can I use a DSCR loan to refinance; DSCR loan for LLC; how many DSCR loans; DSCR credit score 640; do DSCR loans require an appraisal.

**GSC evidence (90 days).** dscr loans michigan 230 impr, pos 39.0; dscr loan michigan 206, pos 41.4; michigan dscr loans 92, pos 46.5; dscr loan michigan requirements 8, pos 53.5; dscr loans michigan guide 6, pos 39.2. About 530 impressions in total, the largest query cluster across these nine pages, with 0 clicks.

**Cannibalization and structure.** /purchase/investment-property-financing/ owns the investor journey ('investment property financing Michigan') and lists DSCR as the first loan to compare. That is correct; keep it linking down with 'DSCR loans in Michigan'. The product page owns 'DSCR loan Michigan' and 'DSCR calculator'.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For real estate investors | For Michigan real estate investors |
| H1 | DSCR Loans in Michigan | DSCR Loans in Michigan: Qualify on the Property's Rent **[RENAME]** |
| Subhead (55 words) | A debt-service coverage ratio (DSCR) loan is for investment property only. The lender weighs the property's rent against its full monthly payment instead of your personal income or employment history. If the property's rent covers its payment, it may qualify without your tax returns or W-2s. | For investors buying or refinancing a rental, not a home they will live in. The lender compares the property's rent with its full monthly payment, including taxes, insurance and dues, instead of your tax returns. Most lenders also want rent at or above that payment, a larger down payment and reserves. Terms vary by lender. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=buy` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=dscr` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | Run the DSCR calculator -> `/product-loans/dscr-loans-michigan/#p-dscr` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[NEW] H2: What is a DSCR loan?**
  > A DSCR loan is a mortgage for investment property that qualifies on the debt-service coverage ratio: the property's rent divided by its full monthly payment, including principal, interest, taxes, insurance and any association dues. If the rent covers the payment, the loan may qualify without your tax returns or W-2s. It is not available for a home you live in.
- **[NEW] H2: What do you need to qualify for a DSCR loan in Michigan?**
  > Most lenders look for a ratio of about 1.0 or higher, a down payment larger than on a home you live in, reserves of several months of payments, credit that meets their minimum, and an appraisal with a rent schedule. Some go below 1.0 with more down or reserves. Each lender sets its own minimums.
  *Note:* Move the 'Guidelines for this loan' cards here as H3s (below).
    - **[RENAME] H3: Credit** (was: "Credit Score (card: '680+ preferred.')")
      *Note:* 'Each lender sets its own minimum, and pricing usually improves as scores rise. Ask what yours needs.' Anchor: 'Real estate investing: strategies and financing' linking to /learn/real-estate-investing/.
    - **[RENAME] H3: Coverage ratio** (was: "DSCR")
      *Note:* Keep text. Anchor: 'How to evaluate a property's cash flow' linking to /learn/evaluating-propertys-cash-flow-potential/.
    - **[RENAME] H3: Property types** (was: "Property Types (card: '1 to 4 units, condos, and non-warrantable properties allowed.')")
      *Note:* 'Often 1 to 4 unit homes and condos. Some lenders accept non-warrantable condos or short-term rentals. Rules vary by lender.' Link 'non-warrantable condos' to /product-loans/non-warrantable-condo-loans/.
    - **[KEEP] H3: Down payment**
      *Note:* Keep text. Anchor: '8 ways to finance a real estate investment' linking to /learn/financing-investments/.
    - **[NEW] H3: Reserves**
      *Note:* 'Lenders commonly expect several months of payments held back after closing, sometimes for each financed property.'
- **[RENAME] H2: How do you calculate DSCR on a Michigan rental?** (was: "DSCR Calculator")
  > Divide the property's monthly rent by its full monthly payment, including taxes, insurance and dues. Rent equal to the payment is a DSCR of 1.00; rent 25% above it is 1.25. Rent usually comes from the signed lease or, for a vacant unit, the appraiser's market rent schedule. Use the new owner's Michigan tax at the non-homestead rate.
  *Note:* KEEP the calculator. DEMOTE 'The property' from H3 to a fieldset legend. Under the rate selector add 'Use the rate from your own quote; we do not publish rates.' and confirm no rate is preselected.
- **[RENAME] H2: DSCR loan or conventional investment loan: which fits?** (was: "DSCR against a conventional investment loan")
  > A conventional investment loan qualifies on your personal income and debts, usually costs less, and stops at ten financed properties. A DSCR loan qualifies on the property's rent, often allows an LLC as the borrower, and has no agency property cap. If your tax returns support the loan, price conventional first.
  *Note:* KEEP the table. Edit rows: 'Buying inside an LLC' DSCR cell becomes 'Often allowed; rules vary by lender'. 'How many properties' DSCR cell becomes 'No agency cap; lenders set their own exposure limits'.
- **[RENAME] H2: Why do investors choose DSCR loans?** (was: "Key benefits")
  > Because the property, not the investor's tax return, carries the qualification. Each rental is judged on its own rent, which helps investors whose write-offs or number of mortgages limit conventional financing. Some programs offer an interest-only period. The tradeoffs are higher pricing than conventional, larger down payments and reserves.
  *Note:* KEEP H3s in sentence case. Link 'interest-only period' to /learn/interest-only-mortgages/.
- **[NEW] H2: What are the risks of a DSCR loan?**
  > The loan depends on the rent. Vacancy, repairs or a rent drop still leave a full payment due, and interest-only periods pay down no principal. Pricing is usually above conventional, and some DSCR loans carry prepayment penalties, which are allowed on business-purpose loans. Ask for the prepayment terms in writing before you choose.
  *Note:* [VERIFY: Michigan limits on prepayment penalties for business-purpose loans (MCL 438.31c) before adding any specifics]
- **[NEW] H2: Can you use a DSCR loan to refinance or take cash out?**
  > Yes, with many lenders. A DSCR refinance can lower the payment or pull cash out of a rental, using the same rent-to-payment test. Lenders usually set a lower loan-to-value limit for cash-out than for a purchase and may want a period of ownership first. Bring the lease, the payoff statement and the property's expenses.
  *Note:* Link 'refinance a rental' to /learn/how-to-refinance-investment-property/.
- **[NEW] H2: What is different about a DSCR loan in Michigan?**
  > The tax line. The year after a Michigan home sells, its taxable value resets to half of the assessor's market value, so the seller's tax bill is not your tax bill. A rental also pays the non-homestead rate, which adds the school operating millage a home you live in does not pay. That full figure goes into the payment.
  *Note:* Promoted from the FAQ. The uncapping sentence is approved wording; keep it verbatim.
    - **[NEW] H3: Local rental rules**
      *Note:* 'Many Michigan cities require rental registration, inspection or a certificate of compliance, and some regulate short-term rentals. Check the city's rules before you count on the rent.' Link to /learn/navigating-short-term-rental-regulations/. [VERIFY: cite one primary city ordinance, e.g. City of Detroit rental registration]
    - **[NEW] H3: Transfer tax on the purchase**
      *Note:* 'Michigan's state and county transfer taxes are owed when the deed is recorded, and by local custom the seller usually pays them. Estimate them with the transfer tax calculator.' Link to /michigan-transfer-tax-calculator/.
- **[NEW] H2: Check the rules at the source**
  *Note:* This section is missing on the DSCR page. Add: Fannie Mae B2-2-03 (multiple financed properties), 12 CFR 1026.3(a) (business-purpose exemption), Michigan Treasury Principal Residence Exemption, MCL 211.27a, MCL 207.526, and the reviewed-by line.
- **[RENAME] H2: DSCR questions Michigan investors ask** (was: "Questions about this loan")
  *Note:* KEEP: below 1.0 (expand to 40+ words), signed lease, how many properties, short-term rental income (expand, link /learn/investing-in-short-term-rentals/). SHORTEN 'How is the DSCR ratio calculated?' (now covered by the H2). MOVE: Michigan (to H2). ADD the five below.
    - **[NEW] H3: Can I get a DSCR loan in an LLC?**
      > Many DSCR lenders allow it, and some prefer it. You will usually sign a personal guarantee, and the lender will ask for the LLC's articles of organization, operating agreement and EIN letter. Talk with your attorney or accountant about how title and the loan should be held before you apply, since that is hard to change later.
    - **[NEW] H3: Do DSCR loans require an appraisal?**
      > Yes. The lender orders an appraisal for the value and, for most DSCR loans, a rent schedule that estimates market rent. For a vacant unit or a new purchase, that rent schedule often becomes the rent the ratio uses, so a low rent estimate can change the numbers as much as a low value. Build appraisal time into your contract.
    - **[NEW] H3: Can I get a DSCR loan with a 640 credit score?**
      > Possibly. Some DSCR programs consider scores in that range, usually with a larger down payment, more reserves or different pricing; others set a higher floor. Because minimums vary by lender, the honest answer comes from comparing more than one. Bring your score, the property and its expected rent, and we will check which lenders fit.
    - **[NEW] H3: Can I use a DSCR loan to flip a house?**
      > Usually not. DSCR loans are built for properties you will rent, qualified on that rent, and many carry prepayment terms that make a quick sale expensive. Flips are usually financed with short-term fix-and-flip or bridge loans instead. If you plan to renovate and then rent, ask about refinancing into a DSCR loan once it is leased.
    - **[NEW] H3: How fast do DSCR loans close?**
      > Often about as fast as other purchase loans, because there are no tax returns to analyze. Timing still depends on the appraisal and rent schedule, title work, any LLC documents and the lender's current pipeline. Ask each lender for its turn times, and give your purchase agreement enough room for the appraisal.
- **[DEMOTE] H2: What our clients say / Ask Samantha whether this loan fits / Start with your question / Learn / Other loan options**
  *Note:* Template treatment. Add the non-QM sibling strip.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | DSCR Loans In Michigan \| DSCR Calculator For Investors (54) | DSCR Loans in Michigan \| DSCR Calculator for Investors (54) |
| Meta | DSCR loans qualify on the property, not your income. Free calculator shows the coverage ratio a Michigan lender measures, with interest-only. (141) | DSCR loans qualify a Michigan rental on its rent, not your tax returns. Run the free coverage-ratio calculator and see what DSCR lenders typically look for. (156) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Guideline card: 'Credit Score 680+ preferred.' | Stated as a norm; DSCR minimums vary widely by lender. | Use the replacement text in the outline. | P1 |
| Guideline card: '1 to 4 units, condos, and non-warrantable properties allowed.' | Too absolute. Many DSCR lenders exclude non-warrantable condos or some property types. | 'Often 1 to 4 unit homes and condos. Some lenders accept non-warrantable condos or short-term rentals. Rules vary by lender.' | P1 |
| Table: 'Financing tightens after a handful and stops entirely at ten.' | Accurate for Fannie Mae (a borrower financing a second home or investment property may have up to 10 financed properties, B2-2-03). No source is listed. | Keep and cite Fannie Mae B2-2-03. | P2 |
| Table: 'Buying inside an LLC: Normal and expected.' | Overstates it; lender rules vary. | 'Often allowed; rules vary by lender.' | P2 |
| Calculator: rate dropdown 5.000% to 10.000% | A user-selected input, not an advertised rate. It must never default to a value or be described as current pricing. | Confirm the 'Choose a rate' placeholder stays unselected. Add 'Use the rate from your own quote; we do not publish rates.' | P2 |
| No disclosure of prepayment penalties | Prepayment penalties are common on DSCR loans and allowed on business-purpose credit (12 CFR 1026.3(a) exempts it from 1026.43). Michigan usury rules may limit them. | Add the risks H2. [VERIFY: MCL 438.31c applicability] | P2 |
| Boilerplate: 'Guidelines are set by the agency and the lender' | DSCR is a non-agency product. | Use the non-agency disclaimer. | P1 |
| No 'Check the rules at the source' section | The only DSCR-cluster page without sources; weak E-E-A-T. | Add the sources section. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans > DSCR Loans.
- MortgageLoan: loanType 'DSCR (investment property)', description, areaServed State: Michigan.
- WebApplication (calculator): keep. Check that its Offer node is price 0 / priceCurrency USD and carries no rate or APR property.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| non-QM loan options | `/product-loans/non-qm-loans/` | Intro line under the subhead: 'DSCR is one of our non-QM loan options.' |
| investment property financing plan | `/purchase/investment-property-financing/` | Fit section |
| non-warrantable condos | `/product-loans/non-warrantable-condo-loans/` | Property types card |
| conventional investment loan | `/product-loans/conventional-loans/` | Comparison H2 |
| refinance a rental | `/learn/how-to-refinance-investment-property/` | Refinance H2 |
| short-term rental income | `/learn/investing-in-short-term-rentals/` | FAQ: short-term rental |
| short-term rental rules | `/learn/navigating-short-term-rental-regulations/` | Michigan H3 |
| interest-only period | `/learn/interest-only-mortgages/` | Why-choose H2 |
| transfer tax calculator | `/michigan-transfer-tax-calculator/` | Michigan H3 |
| Compare two Loan Estimates | `/compare-loan-estimates/` | Risks H2: 'Compare DSCR and conventional offers on two Loan Estimates.' |
| points versus a lender credit | `/points-vs-lender-credit-calculator/` | Risks H2 |
| portfolio loan | `/learn/what-is-portfolio-loan/` | What-is H2 |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Header mega menu (already present), footer (missing: add) | DSCR Loans | Non-QM group |
| /product-loans/non-qm-loans/ | DSCR loans in Michigan | Program card |
| /learn/how-to-refinance-investment-property/ | DSCR refinance | Options section |

---

### 6.6 Bank statement loans: `/product-loans/bank-statement-loan/`

**Overall: 75 (C).** Target query: **michigan bank statement loans / bank statement loan michigan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 84 | B | H1 'Bank Statement Loans in Michigan' matches the primary query (70 impressions, position 54) and is unique. |
| Heading structure | 70 | C | Generic 'Key benefits' and 'Guidelines' H2s, and the calculator labels 'Your deposits' and 'The loan' are marked up as H3s. |
| Above-the-fold answer | 80 | B | 76 words cover who it is for and the 12-24 month documentation, but not time in business, down payment or reserves. |
| CTA effectiveness | 80 | B | Strong set: primary, ghost, calculator jump, a CTA next to the result, and 'Talk it through first'. |
| Title & meta | 86 | B | The 52-character title adds an 'Income Calculator' hook that matches the 'bank statement loan calculator' query (57 impressions). The 150-character meta is specific. |
| Internal linking | 62 | D | Only 13 contextual inlinks despite being in the nav. No links to sibling 1099 or asset pages, and the 'Income' guide link points to the jumbo article. |
| E-E-A-T & trust | 58 | F | One source. No reviewer, date or quote. |
| AI-search readiness | 76 | C | 5 practical FAQ answers and a comparison table. No definition capsule, and the requirements, 20%-down and statement red-flag questions (all PAA) are missing. |
| Accuracy & compliance | 76 | C | No advertised rates. The hard-coded $832,750 will go stale soon, the 1.5% tax default is unsourced, and the agency boilerplate is wrong for this product. |

**Target query and intent.** Commercial investigation: a self-employed borrower checking whether deposits will qualify them and for how much. Secondary: bank statement loan calculator; bank statement loan requirements; do bank statement loans require 20% down; minimum credit score for bank statement loan; non qm bank statement loan.

**GSC evidence (90 days).** michigan bank statement loans 70 impr, pos 54.4; bank statement loan calculator 57, pos 44.0; bank statement mortgage michigan 4, pos 48; non qm bank statement loan(s) 6, pos 18-29; bank statement loans in troy, michigan 4, pos 8.5 (city page); ohio bank statement loans 18+9, pos about 70 (Align is licensed in Ohio; no Ohio page exists, which is a backlog opportunity, not this page's job).

**Cannibalization and structure.** The child of the non-QM hub. /purchase/self-employed-homebuyer/ owns the self-employed journey and correctly lists Bank Statement first. /learn/non-qm-loans-for-self-employed-borrowers/ owns 'non qm loans for self employed'. The 1099 page must not compete for 'bank statement' and vice versa: each links to the other as the alternative.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For home buyers and homeowners | For self-employed borrowers and business owners |
| H1 | Bank Statement Loans in Michigan | Bank Statement Loans in Michigan **[KEEP]** |
| Subhead (54 words) | Bank statement loans are for business owners, freelancers and the self-employed whose tax returns, after write-offs, show less income than the business brings in. Rather than W-2s or tax returns, you can use 12 to 24 months of bank statements to qualify. | For self-employed borrowers whose tax returns, after write-offs, show less than the business earns. Instead of returns, lenders average 12 or 24 months of business or personal bank deposits. Most also look for about two years in business, reserves, and a larger down payment than conventional. Credit minimums and expense factors vary by lender. |
| Primary CTA | Start my application -> `https://alignlending.com/start/?goal=buy` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=bank-statement` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | Estimate my income from deposits -> `/product-loans/bank-statement-loan/#p-bs` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[NEW] H2: What is a bank statement loan?**
  > A bank statement loan is a non-QM mortgage for self-employed borrowers that documents income with 12 or 24 months of bank deposits instead of tax returns. The lender averages qualifying deposits, applies an expense factor to business accounts, and counts your ownership share. It can be used to buy or refinance, and it usually costs more than conventional.
  *Note:* Add 'one of our non-QM loan options' linking to the hub in the next line.
- **[NEW] H2: What do you need to qualify for a bank statement loan?**
  > Most lenders look for about two years of self-employment, 12 or 24 months of complete statements, proof you own the business, such as a CPA letter or business license, credit that meets their minimum, reserves, and a down payment larger than conventional. Expense factors, minimums and limits vary by lender, so compare more than one.
  *Note:* Move the 'Guidelines for this loan' cards here as H3s (below).
    - **[KEEP] H3: Credit score**
      *Note:* Keep text. Anchor: 'What credit score you need to buy' linking to /learn/whats-good-credit-score-to-buy-house/.
    - **[KEEP] H3: Income**
      *Note:* Keep text. Anchor: 'Non-QM loans for self-employed borrowers' linking to /learn/non-qm-loans-for-self-employed-borrowers/ (today it goes to the jumbo article).
    - **[KEEP] H3: Property types**
      *Note:* Keep text. Anchor: 'Buying a second home' linking to /learn/buying-second-home/.
    - **[NEW] H3: Down payment and reserves**
      *Note:* 'Expect more down than a conventional loan and some months of payments in reserve. The exact figures depend on the lender, your score and the loan size.'
    - **[NEW] H3: Proof of the business**
      *Note:* 'Lenders commonly ask for a CPA or tax preparer letter, a business license or registration, and sometimes a profit and loss statement.'
- **[RENAME] H2: How much income will a bank statement loan count?** (was: "Bank Statement Loan Calculator")
  > Average your monthly deposits over the statement period, back out transfers between your own accounts and one-time non-business deposits, apply the lender's expense factor to business-account deposits, then multiply by your ownership share. The calculator below walks through each step. The result is a planning range, not an approval.
  *Note:* KEEP the calculator. DEMOTE H3s 'Your deposits' and 'The loan' to fieldset legends. Under the rate selector add 'Use the rate from your own quote; we do not publish rates.'
- **[RENAME] H2: Bank statement loan or conventional loan: which fits a self-employed borrower?** (was: "Bank statement against a conventional self-employed file")
  > A conventional loan reads two years of tax returns, so write-offs lower the income you can use; if your returns support the loan, it usually costs less. A bank statement loan reads deposits instead, which helps when deductions are heavy, at higher pricing and with more down. Price both before you choose.
  *Note:* KEEP the table.
- **[RENAME] H2: Why do self-employed borrowers choose bank statement loans?** (was: "Key benefits")
  > Because deductions that lower taxable income do not lower deposits. A bank statement loan lets a business owner keep legitimate write-offs and still show the income the business actually brings in. Some programs also lend above the conforming loan limit. The cost is higher pricing and more cash at closing than an agency loan.
  *Note:* KEEP H3s in sentence case. In 'Loan amounts above the limit', replace '$832,750' with 'the conforming loan limit FHFA sets each year' so the copy does not go stale when FHFA announces 2027 limits (late November 2026).
- **[NEW] H2: What do lenders look for in your bank statements?**
  > Steady deposits that match the business you describe. Underwriters back out transfers between your own accounts, loan proceeds and one-time deposits, and they ask about large or unusual ones. Overdrafts and returned items can raise questions. Never edit or redact statements: lenders verify them with the bank, and altered documents can end a file.
- **[NEW] H2: What is different about a bank statement loan in Michigan?**
  > The program works the same way here; the local difference is the tax line. The year after a Michigan home sells, its taxable value resets to half of the assessor's market value, so the seller's tax bill is not your tax bill. Budget with the new owner's figure before you settle on a price.
  *Note:* Uncapping sentence is approved wording. Link 'new owner's figure' to /michigan-property-tax-calculator/.
- **[NEW] H2: How does Align place bank statement loans?**
  > We compare what your tax returns support with what your deposits support, because if the returns work, an agency loan usually costs less. If they do not, we take 12 or 24 months of statements to wholesale lenders whose expense factors and rules fit your business, and show their terms side by side.
  *Note:* Add [NEEDS SAMANTHA QUOTE: self-employed documentation]. Subject to Align approval.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Add 12 CFR 1026.43(c)(4), CFPB 'What is a Qualified Mortgage?', Fannie Mae B3-3.5-01 (for the conventional comparison), the FHFA conforming loan limits page and the reviewed-by line.
- **[RENAME] H2: Bank statement loan questions Michigan borrowers ask** (was: "Questions about this loan")
  *Note:* KEEP all five. ADD the three below. Add the sibling strip under the FAQ.
    - **[NEW] H3: Do bank statement loans require 20% down?**
      > Not always. Each lender sets the down payment, and it moves with your credit score, the loan amount, the property type and whether you will live in the home. Some programs allow less than 20% for a primary residence with strong credit, while investment property usually needs more. Ask each lender for its figure in writing.
    - **[NEW] H3: Are bank statement loans a good idea?**
      > They can be when your tax returns understate what the business earns and you can carry the higher cost. They are a poor fit when your returns already support the loan, since an agency loan usually costs less, or when deposits are irregular. The test is whether the payment works on its own, not on a hoped-for refinance.
    - **[NEW] H3: Can I get a mortgage with just bank statements?**
      > Almost. The statements replace tax returns as the income document, but lenders still verify that the business exists, pull credit, check assets and reserves, appraise the home and confirm your identity. Expect a shorter income file, not a no-document loan. If you are paid on 1099s, a 1099 income loan may fit better.
      *Note:* Link 'no-document loan' to /learn/what-is-no-doc-mortgage/ and '1099 income loan' to /product-loans/1099-income-loans/.
- **[DEMOTE] H2: What our clients say / Ask Samantha whether this loan fits / Start with your question / Learn / Other loan options**
  *Note:* Template treatment. Add the 1099 and asset-based pages to 'Other loan options'.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Bank Statement Loans In Michigan \| Income Calculator (52) | Bank Statement Loans in Michigan \| Income Calculator (52) |
| Meta | Qualify on 12 to 24 months of deposits instead of tax returns. Free calculator estimates the income a Michigan bank statement lender would credit you. (150) | Qualify on 12 to 24 months of deposits instead of tax returns. Free calculator estimates the income a Michigan bank statement lender would credit you. (150) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| 'Some programs lend above the $832,750 conforming limit.' | Correct for 2026 (FHFA, Nov 25, 2025), but FHFA announces 2027 limits in late November 2026, so a hard-coded figure will go stale within weeks. | Use 'the conforming loan limit FHFA sets each year', or pull the figure from one site-wide variable. | P1 |
| Calculator note: 'About 1.5% of the price at Michigan's statewide median homestead rate' | The source is not shown. | [VERIFY: Michigan Treasury millage data or the site's research page], then cite it next to the field. | P2 |
| 'personal-account deposits are often counted in full, depending on the lender' | A typical statement, qualified. | Keep. | - |
| Boilerplate: 'Guidelines are set by the agency...' | Non-agency product. | Use the non-agency disclaimer. | P1 |
| Calculator rate dropdown | User input. Confirm no default value and no 'current rate' wording. | Add the 'we do not publish rates' line. | P2 |
| Sources: one CFPB link | Thin. | Add the sources listed in the outline. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans > Bank Statement Loans.
- MortgageLoan: loanType 'Bank statement (non-QM)', description, areaServed State: Michigan.
- WebApplication (income calculator): keep; Offer price 0 only.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| one of our non-QM loan options | `/product-loans/non-qm-loans/` | Definition H2 |
| 1099 income loan | `/product-loans/1099-income-loans/` | FAQ: just bank statements; sibling strip |
| asset depletion loan | `/product-loans/asset-based-income-loans/` | Sibling strip and fit text: 'If your savings, not your business, carry the file, an asset depletion loan may fit.' |
| self-employed homebuyer plan | `/purchase/self-employed-homebuyer/` | Existing link; keep |
| Non-QM loans for self-employed borrowers | `/learn/non-qm-loans-for-self-employed-borrowers/` | Income card |
| no-document loan | `/learn/what-is-no-doc-mortgage/` | FAQ |
| how to buy a home as a freelancer | `/learn/how-to-buy-home-as-freelancer/` | Fit text |
| Compare two Loan Estimates | `/compare-loan-estimates/` | Comparison H2: 'Price both on two Loan Estimates.' |
| points versus a lender credit | `/points-vs-lender-credit-calculator/` | Comparison H2 |
| affordability calculator | `/home-affordability-calculator/` | Calculator footer |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| /product-loans/1099-income-loans/ | bank statement loan | Fit section: 'If your deposits tell the story better than your 1099s' |
| /product-loans/non-qm-loans/ | Bank statement loans in Michigan | Program card |
| /learn/how-to-buy-home-as-freelancer/ | bank statement loans in Michigan | Loan options section |

---

### 6.7 1099 income loans: `/product-loans/1099-income-loans/`

**Overall: 77 (C).** Target query: **michigan 1099 loans / 1099 income loans michigan / 1099 mortgage michigan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 84 | B | H1 '1099 Income Loans in Michigan' matches 'michigan 1099 loans' (64 impressions, position 48) and is unique. |
| Heading structure | 76 | C | A clean newer template with question FAQs. '1099 Income Loans, in short', 'How it works' and 'Is it a fit?' are labels, and 5 template H2s remain. |
| Above-the-fold answer | 76 | C | 66 words name the audience and both routes, with no qualification specifics. |
| CTA effectiveness | 70 | C | The primary CTA goes to bare /start/ with no goal or source parameter (equity pages pass ?goal=equity). There is no self-employed plan or calculator path. |
| Title & meta | 84 | B | 58-character title with geo and audience. 141-character meta, specific. |
| Internal linking | 45 | F | 6 total inlinks (4 contextual). Missing from the header, footer and mobile menu, and not linked from the non-QM hub or the bank statement page. |
| E-E-A-T & trust | 82 | B | 8 dated primary sources (Fannie, Freddie, HUD, CFR, IRS) and a Samantha quote. No visible reviewer or updated date. |
| AI-search readiness | 86 | B | A strong definition capsule, rule-cited explanations, a route table and 5 direct FAQ answers. Only the qualification and 1099-K questions are missing. |
| Accuracy & compliance | 88 | B | Carefully sourced and hedged, with no rates. The open items are the first-person paragraph and re-verifying the dated Guide citations. |

**Target query and intent.** Informational to commercial: a contractor checking whether and how their 1099 income will count before choosing a route. Secondary: can you get a home loan with 1099 income; how many years of 1099s; 1099-only loan; non-qm loans for freelancers.

**GSC evidence (90 days).** michigan 1099 loans 64 impr, pos 48.0; can a 1099 contractor qualify for a debt consolidation loan 3, pos 5; non-qm loans for freelancers 4, pos 55.5. PAA 'Can you get a home loan with 1099 income?' is the top on-topic question for the seed '1099 mortgage'.

**Cannibalization and structure.** The child of the non-QM hub, and a sibling of Bank Statement. Only 6 total inlinks (4 contextual): it is missing from the nav and footer, and neither the non-QM hub nor the bank statement page links to it. /learn/how-to-buy-home-as-freelancer/ should link to it.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For contractors and gig workers | For contractors, freelancers and gig workers |
| H1 | 1099 Income Loans in Michigan | 1099 Income Loans in Michigan **[KEEP]** |
| Subhead (52 words) | Paid as a contractor, freelancer or gig worker? Your income can be documented through your tax returns or, with some lenders, through your 1099s. Samantha looks at both before you pick one. | For people paid on a 1099 instead of a W-2. Agency loans usually want two years of tax returns and count income after Schedule C expenses. If that number falls short, some non-QM lenders qualify you from the 1099s themselves, often with more cash down. Samantha checks both routes before you choose. |
| Primary CTA | Start my application -> `https://alignlending.com/start/` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=1099` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | See how a self-employed homebuyer plan works -> `/purchase/self-employed-homebuyer/` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[RENAME] H2: Can you get a mortgage with 1099 income?** (was: "1099 Income Loans, in short")
  > Yes. Fannie Mae, Freddie Mac and FHA generally treat 1099 pay like self-employment income: about two years of history, your tax returns, and the income left after Schedule C expenses. If that supports the loan, the agency route usually costs less. If not, some non-QM lenders qualify you from the 1099s themselves, on terms that vary by lender.
  *Note:* Add a next line: '1099 loans are one of our non-QM loan options when the agency route falls short.' Link it to the hub.
- **[NEW] H2: What do you need to qualify for a 1099 loan?**
  > On the agency route: usually two years of 1099 work, or one year plus earlier work in the same field, two years of signed returns with all schedules, and income after expenses that supports the payment. On the 1099-only route: the 1099s, proof of this year's earnings, often more cash down and reserves, and terms set by each lender.
  *Note:* Move the existing 'What to have ready' list under an H3 'Documents to gather'.
- **[RENAME] H2: Who is a 1099 income loan a good fit for?** (was: "Is it a fit?")
  > It fits people paid on Form 1099-NEC, 1099-MISC or 1099-K whose clients pay well but whose deductions shrink the income on their return, especially with a steady record of 1099 work or earlier work in the same field. If your returns already show enough income, start with a conventional or FHA loan instead.
  *Note:* KEEP the H3s 'Who it fits' and 'Who it may not fit'.
- **[RENAME] H2: How do lenders count 1099 income?** (was: "How it works")
  > On the agency route, the lender starts with net profit on your Schedule C, adds back non-cash items such as depreciation, and averages it, usually over two years. On a 1099-only loan, the lender starts with your 1099 totals and may subtract an expense factor it sets. That difference is why write-offs matter so much.
  *Note:* Turn the bold lead-ins into H3s: 'The agency route: Fannie Mae, Freddie Mac and FHA' and 'The non-QM 1099 route'. KEEP the table.
- **[RENAME] H2: What are the tradeoffs of a 1099-only loan?** (was: "Tradeoffs to understand")
  > Deductions cut both ways: every expense you deduct lowers the income the agency route counts. Non-QM pricing can run above agency loans and need more cash at closing. Short histories need earlier work in the same field. And a later refinance depends on your file then, so the loan should make sense on its own.
  *Note:* KEEP the bullets, including the Reg Z prepayment-penalty line.
- **[NEW] H2: What is different about a 1099 loan in Michigan?**
  > The income rules are federal or lender-set, so they work the same here. Two local details help. If you work in a licensed trade, your Michigan LARA license record can help show time in the field. And the year after a Michigan home sells, its taxable value resets, so budget with the new owner's tax, not the seller's.
  *Note:* [VERIFY: lender acceptance of LARA license lookups as history evidence varies; keep 'can help']. Link 'new owner's tax' to /michigan-property-tax-calculator/.
- **[RENAME] H2: How does Align compare 1099 loan options?** (was: "How Samantha helps")
  > Samantha starts with how you get paid, then reads your 1099s and returns. We look at the agency route first, because it usually costs less, then compare non-QM 1099 options across multiple wholesale lenders and put them side by side. If waiting for one more year of returns makes more sense, she will say so.
  *Note:* Keep the quote only if verbatim from a recorded source. Replace the first-person paragraph with this answer. Subject to Align approval.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Add the reviewed-by line. The dated sources are a model for the other pages.
- **[RENAME] H2: 1099 loan questions Michigan contractors ask** (was: "Questions about this loan")
  *Note:* KEEP all five. ADD the two below. Add the sibling strip.
    - **[NEW] H3: Can I use 1099-K income from a payment app or platform?**
      > It can count when it is income from your work, appears on your tax return and shows a steady history. On the agency route it is read like other self-employment income, after expenses. Some 1099-only programs accept 1099-K totals and others do not, so bring the forms and platform statements and ask each lender.
      *Note:* [VERIFY: phrasing with Align; lender acceptance varies]
    - **[NEW] H3: Will a big write-off year hurt my application?**
      > On the agency route, it can. The lender averages your net income, so a year with heavy deductions lowers the average, and a drop from one year to the next draws extra review; FHA sends declines of more than 20% to manual underwriting. Talk with your tax professional before you file the year you plan to buy.
- **[DEMOTE] H2: What our clients say / The first conversation does not have to turn into anything / Start with your question / Learn / Other loan options**
  *Note:* Template treatment.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Michigan 1099 Income Loans For Contractors \| Align Lending (58) | Michigan 1099 Mortgage Loans for Contractors \| Align Lending (60) |
| Meta | Paid on a 1099? How agency loans read your tax returns, how 1099-only non-QM loans work, and what to gather first. Align Lending places both. (141) | Paid on a 1099 in Michigan? How agency loans read your tax returns, how 1099-only non-QM loans work, and what to gather first. Align compares both routes. (154) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Primary CTA href '/start/' (no goal or source) | Attribution is lost and the application cannot pre-route; the HELOC and DSCR pages pass ?goal=. | Use /start/?goal=buy&from=1099. | P1 |
| First-person paragraph after the quote ('Tell me how you get paid...') | Voice rule: Samantha in third person except in sourced quotes. | Use the third-person answer, or log the quote source. | P1 |
| 'A drop of more than 20% means manual underwriting (HUD 4000.1, II.A.4.c.x)' | Consistent with HUD 4000.1 self-employment income guidance; cited. | Keep; re-check on each Handbook revision. | - |
| 'On a home you live in, Regulation Z bars a prepayment penalty on a non-QM loan (12 CFR 1026.43(g)(1))' | Accurate in effect. The rule covers consumer credit secured by any dwelling, so 'a home you live in' is narrower than the rule, but not wrong. | Keep, or say 'On a consumer home loan'. | P2 |
| Freddie Mac 5303.1(e) 'effective 06/03/2026' | Cited and dated; could not be re-fetched in this audit (Freddie Mac guide blocked by proxy). | Keep; re-verify at each Guide bulletin. | P2 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans > 1099 Income Loans.
- MortgageLoan: loanType '1099 income (agency or non-QM)', description, areaServed State: Michigan.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| one of our non-QM loan options | `/product-loans/non-qm-loans/` | Under the definition answer |
| bank statement loan | `/product-loans/bank-statement-loan/` | Fit H2: 'If your deposits tell the story better than your 1099s, a bank statement loan may fit.' |
| asset depletion loan | `/product-loans/asset-based-income-loans/` | Sibling strip |
| conventional loan | `/product-loans/conventional-loans/` | Fit H2 |
| FHA loan | `/product-loans/fha-loans/` | Fit H2 |
| how to buy a home as a freelancer | `/learn/how-to-buy-home-as-freelancer/` | Fit H2 |
| debt-to-income ratio | `/learn/debt-to-income-ratio-dti/` | Qualify H2 |
| Compare two Loan Estimates | `/compare-loan-estimates/` | Tradeoffs H2 ('Compare full Loan Estimates') |
| affordability calculator | `/home-affordability-calculator/` | Qualify H2: 'Then check the price range with the affordability calculator.' |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Header mega menu, mobile popup and footer (sitewide) | 1099 Income Loans | Non-QM group |
| /product-loans/non-qm-loans/ | 1099 income loans | Program card and table row |
| /product-loans/bank-statement-loan/ | 1099 income loan | FAQ and sibling strip |
| /learn/how-to-buy-home-as-freelancer/ | 1099 income loans in Michigan | Loan options section |
| /learn/non-qm-loans-for-self-employed-borrowers/ | 1099 income loans | Already links; keep |

---

### 6.8 Asset-based (asset depletion) loans: `/product-loans/asset-based-income-loans/`

**Overall: 74 (C).** Target query: **michigan asset depletion loans / asset depletion mortgage michigan / asset-based lending michigan**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 74 | C | The H1 'Asset-Based Income Loans in Michigan' does not use 'asset depletion', the term in the title and the top query (55 impressions, position 37). |
| Heading structure | 76 | C | A clean newer template, but label H2s ('in short', 'How it works') and a duplicated balance-to-income topic in the H2 and the FAQ. |
| Above-the-fold answer | 76 | C | 67 words name the audience and say assets can count. There is no hint of the mechanism or requirements. |
| CTA effectiveness | 70 | C | Bare /start/ with no goal or source. No budget-review path for an audience that plans more than it applies. |
| Title & meta | 76 | C | 55-character title on target. The meta is 130 characters, under the 140-160 range. |
| Internal linking | 45 | F | 7 total inlinks (5 contextual), missing from the nav and footer, and the hub names asset-based loans in its table without linking. |
| E-E-A-T & trust | 82 | B | 7 dated primary sources including Freddie Bulletin 2026-10, and a quote. No reviewer or date. |
| AI-search readiness | 84 | B | Precise rule-by-rule explanations and a table, quotable. No qualification answer or 'retirees without a job' answer. |
| Accuracy & compliance | 84 | B | Well sourced. The flat 'Align is paid by the lender' claim needs confirmation against Align's compensation plan. |

**Target query and intent.** Informational to commercial: a retiree, early retiree or saver checking whether balances can qualify them. Secondary: can retirees get a mortgage without a job; asset depletion mortgage lenders; how does a balance become income.

**GSC evidence (90 days).** michigan asset depletion loans 55 impr, pos 37.2; asset-based lending michigan 9, pos 72.6; asset loans michigan 6, pos 51.3; asset depletion mortgage lenders 4, pos 79.3; asset depletion loans in orchard lake village, michigan 8, pos 2.4 and in birmingham, michigan 3, pos 4 (city pages are winning these local variants).

**Cannibalization and structure.** A child of the non-QM hub, but it also covers agency (Fannie and Freddie) asset rules. Only 7 total inlinks; not in the nav. The H1 says 'Asset-Based Income' while searchers and the title say 'asset depletion', so align the H1 with the title.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | When savings do the work of a paycheck | For retirees, early retirees and savers |
| H1 | Asset-Based Income Loans in Michigan | Asset Depletion Loans in Michigan: Qualify on Your Savings **[RENAME]** |
| Subhead (55 words) | When savings, retirement accounts or investments do the work a paycheck usually does, some loans can count them as income. Samantha checks which rule fits your accounts before you apply. | For borrowers whose savings, retirement or investment accounts do the work of a paycheck. Asset-based, or asset depletion, rules subtract the cash you need to close, then divide eligible balances by a set number of months to create qualifying income. Which accounts count, and the divisor, depend on Fannie Mae, Freddie Mac or the lender. |
| Primary CTA | Start my application -> `https://alignlending.com/start/` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=asset-based` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | Review my homebuying budget -> `/purchase/budget-review/` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[RENAME] H2: What is an asset depletion loan?** (was: "Asset-Based Income Loans, in short")
  > An asset depletion loan turns eligible account balances into monthly qualifying income. Fannie Mae and Freddie Mac each have a rule for it: what is left after the cash you need to close is divided by a set number of months. Non-QM lenders offer their own versions on terms that vary by lender. Which accounts count comes first.
  *Note:* Add: 'Asset depletion is one of our non-QM loan options, and it has agency versions too.' Link to the hub.
- **[NEW] H2: What do you need to qualify for an asset depletion loan?**
  > Eligible accounts you can document and access, such as retirement, brokerage, savings or a lump-sum payout, with statements showing their history. After the down payment, closing costs and reserves come off, enough must remain to create income that covers the payment and your other debts. Agency rules add loan-purpose and loan-to-value limits; non-QM lenders set their own.
- **[RENAME] H2: Who is an asset depletion loan a good fit for?** (was: "Is it a fit?")
  > It fits people whose accounts, not a paycheck, are what they would show a lender: retirees, early retirees, people between jobs, and borrowers whose tax returns show modest income but large balances. It fits poorly when most of the money goes to the down payment or sits in assets the rules exclude, such as real estate.
  *Note:* KEEP the H3s 'Who it fits' and 'Who it may not fit'.
- **[RENAME] H2: How does a balance become monthly income?** (was: "How it works")
  > The lender takes eligible balances, subtracts what you need to close and any withdrawal penalty, then divides by a set number of months. Fannie Mae divides by the loan's amortization term in months. Freddie Mac uses its own divisor, which changes for loans settling from February 3, 2027. Non-QM lenders choose their own divisor.
  *Note:* Turn the bold lead-ins into H3s: 'Fannie Mae's rule', 'Freddie Mac's rule', 'FHA counts distributions, not balances', 'Non-QM asset depletion'. KEEP the table. Remove the duplicate FAQ 'How does a balance become monthly income?'.
- **[RENAME] H2: What documents do you need?** (was: "What to have ready")
  > Bring the latest statement for each account you want counted, with a year of history for bank and investment accounts, and proof you can withdraw each retirement account in full. Add a distribution letter or Form 1099-R for severance or lump-sum money, closing documents if you sold a business, and award letters for any pension or Social Security.
  *Note:* KEEP the list.
- **[RENAME] H2: What are the tradeoffs of qualifying on assets?** (was: "Tradeoffs to understand")
  > The divisor decides the number: the fewer months a balance is spread over, the more monthly income it counts for. Cash to close comes first, so a larger down payment leaves less to count. Non-QM versions can cost more. Withdrawals can carry taxes and penalties, so move money carefully and ask your tax professional first.
  *Note:* KEEP the bullets.
- **[NEW] H2: What is different about an asset depletion loan in Michigan?**
  > The qualifying rules are federal or lender-set. Two local details matter. The year after a Michigan home sells, its taxable value resets, so budget with the new owner's tax. And if the home will be your principal residence, file the Principal Residence Exemption affidavit with the local assessor so you are not billed the non-homestead school millage.
  *Note:* [VERIFY: PRE filing deadlines (June 1 / November 1) on Michigan Treasury Form 2368 before adding dates]. Link 'new owner's tax' to /michigan-property-tax-calculator/.
- **[RENAME] H2: How does Align check which rule fits your accounts?** (was: "How Samantha helps")
  > Send your statements and tell us what you are trying to do. Samantha checks which rule, Fannie Mae, Freddie Mac or a non-QM lender's, counts the most of your balances, then we compare options across multiple wholesale lenders side by side. If waiting, or a different loan, makes more sense, she will say so.
  *Note:* Keep the quote only if verbatim from a recorded source. Replace the first-person paragraph. Subject to Align approval.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Add the reviewed-by line. Set a content reminder for February 3, 2027 (Freddie Mac Bulletin 2026-10 effective date) to update the Freddie Mac paragraph.
- **[RENAME] H2: Asset depletion questions Michigan borrowers ask** (was: "Questions about this loan")
  *Note:* KEEP: need a job, withdraw monthly, refinance or rental, cost (fix the compensation sentence; see accuracy). REMOVE: balance becomes income (now an H2). ADD the two below.
    - **[NEW] H3: Can retirees get a mortgage without a job?**
      > Yes. A lender needs verified income or assets that show you can repay, not a job. Pension, Social Security and regular retirement distributions count as income, and asset depletion rules can turn eligible balances into qualifying income. Federal law also bars lenders from discriminating because of age. Bring award letters and account statements to the first conversation.
      *Note:* Cite ECOA / Regulation B (12 CFR 1002.6(b)(2)) in sources.
    - **[NEW] H3: Do retirement accounts count if I am under 59 and a half?**
      > Often, but at a reduced value. Fannie Mae subtracts any early-withdrawal penalty, and some lenders also discount pre-tax accounts for income tax. You generally must be able to withdraw the money; accounts you cannot access are usually excluded. Ask each lender how it values your specific accounts before you move or withdraw anything.
- **[DEMOTE] H2: What our clients say / The first conversation does not have to turn into anything / Start with your question / Learn / Other loan options**
  *Note:* Template treatment. Add the sibling strip.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Michigan Asset Depletion Mortgage Loans \| Align Lending (55) | Michigan Asset Depletion Mortgage Loans \| Align Lending (55) |
| Meta | Qualify from savings and investments instead of a paycheck. How Fannie Mae, Freddie Mac and non-QM lenders count assets as income. (130) | Qualify from savings, retirement or investment accounts instead of a paycheck. How Fannie Mae, Freddie Mac and non-QM lenders count assets as income. (149) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| FAQ: 'Align is paid by the lender, not by a fee you pay Align.' | A compensation claim that must hold on every loan (12 CFR 1026.36(d)). If Align ever uses borrower-paid compensation, the sentence is false. | Confirm Align's compensation model. If it varies, use: 'How Align is paid is disclosed on your Loan Estimate.' [VERIFY with Align] | P1 |
| Freddie Mac Bulletin 2026-10 changes for loans settling from Feb 3, 2027 | Cited and dated; could not be independently re-fetched (Freddie Mac guide blocked by proxy). | Keep; set a Feb 3, 2027 update reminder. | P2 |
| 'Fannie Mae requires no minimum income history for employment-related assets' | Consistent with B3-3.4-06. | Keep. | - |
| First-person paragraph after the quote | Voice rule. | Use the third-person answer. | P1 |
| Primary CTA '/start/' with no goal | Attribution is lost. | Use /start/?goal=buy&from=asset-based. | P1 |
| Meta description 130 characters | Below the 140-160 target. | Use the 140-160 character meta provided. | P2 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans > Asset Depletion Loans.
- MortgageLoan: name 'Asset depletion loan', alternateName 'Asset-based income loan', description, areaServed State: Michigan.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| one of our non-QM loan options | `/product-loans/non-qm-loans/` | Under the definition |
| bank statement loan | `/product-loans/bank-statement-loan/` | Fit H2: 'If business deposits, not savings, carry the file, see bank statement loans.' |
| jumbo loans | `/product-loans/jumbo-loans/` | Fit H2 (large balances, larger loans) |
| conventional loan | `/product-loans/conventional-loans/` | Agency rule H3s |
| Review my homebuying budget | `/purchase/budget-review/` | ATF tertiary |
| Compare two Loan Estimates | `/compare-loan-estimates/` | Tradeoffs H2 |
| affordability calculator | `/home-affordability-calculator/` | Qualify H2 |
| Jumbo and non-QM loans | `/learn/jumbo-and-non-qm/` | Existing Learn link; keep |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Header mega menu, mobile popup and footer (sitewide) | Asset Depletion Loans | Non-QM group |
| /product-loans/non-qm-loans/ | Asset depletion loans | Program card, table row and FAQ 'assets instead of income' |
| /learn/jumbo-and-non-qm/ | asset depletion loans in Michigan | Income documentation section |
| /product-loans/bank-statement-loan/ | asset depletion loan | Sibling strip |

---

### 6.9 Non-warrantable condo loans: `/product-loans/non-warrantable-condo-loans/`

**Overall: 79 (C).** Target query: **non-warrantable condo loan michigan / michigan condo loans (non-warrantable intent)**.

| Aspect | Score | Grade | Evidence |
|---|---|---|---|
| Intent & H1 | 86 | B | H1 'Non-Warrantable Condo Loans in Michigan' matches the problem query, and the eyebrow and hook ('a verdict on the building, not on you') meet the visitor's situation. |
| Heading structure | 76 | C | A clean newer template with label H2s ('in short', 'How it works', 'Michigan notes') and 5 template H2s. |
| Above-the-fold answer | 80 | B | 64 words with a strong, empathetic answer. The common causes and the more-cash expectation come only later. |
| CTA effectiveness | 72 | C | Bare /start/ with no goal. No 'what to ask the HOA' step, which is the visitor's real next action. |
| Title & meta | 84 | B | 52-character title on target. 141-character meta with a strong hook ('Told your condo doesn't qualify?'). |
| Internal linking | 58 | F | 38 total inlinks, 31 of them from city pages with weak 'page' anchors. Missing from the nav and the non-QM hub. |
| E-E-A-T & trust | 84 | B | 10 dated primary sources (Fannie, Freddie, HUD, VA, CFR) and Michigan statute citations. No reviewer or date. |
| AI-search readiness | 86 | B | The cited project-standard list, the HOA question list and Michigan statute notes are highly quotable. 'Who decides' and FHA/conventional (PAA) are not H2s yet. |
| Accuracy & compliance | 88 | B | Carefully cited and hedged. Only the first-person paragraph and periodic re-verification remain. |

**Target query and intent.** Problem-solving and commercial: a buyer or owner who has just been told the building does not qualify and needs to know why and who can still lend. Secondary: what makes a condo non-warrantable; who can finance non-warrantable condos; can you get an FHA loan on a non-warrantable condo; is it a bad idea to buy a non-warrantable condo; who determines if a condo is warrantable.

**GSC evidence (90 days).** michigan condo loans 24 impr, pos 28.8; condo refinance and refinance condo mortgage application 3-5 impressions each, pos 6-20. No 'warrantable' query has impressions yet (0 rows), so the page's demand comes from PAA and city pages.

**Cannibalization and structure.** /learn/condominium-financing/ (375 inlinks) owns general condo financing. The product page owns the non-warrantable problem. 32 city pages link here, mostly with weak anchors ('non-warrantable condo loan page' x12, 'non-warrantable condo page' x7). Missing from the nav and the non-QM hub.

**Rewritten above-the-fold (exact text)**

| Element | Current | Recommended |
|---|---|---|
| Eyebrow | For condo buyers | For Michigan condo buyers and owners |
| H1 | Non-Warrantable Condo Loans in Michigan | Non-Warrantable Condo Loans in Michigan **[KEEP]** |
| Subhead (58 words) | Told the condo you want "doesn't qualify"? That is usually a verdict on the building, not on you. Samantha finds out why, then looks for a lender that works with that reason. | For buyers and owners told a condo "doesn't qualify." That label is usually about the building, such as litigation, thin reserves, one investor owning many units or too much commercial space, not about you. Portfolio and non-QM lenders can still finance some of these units, often with more down and more reserves. The reason decides which lenders fit. |
| Primary CTA | Start my application -> `https://alignlending.com/start/` | **Start my application** -> `https://alignlending.com/start/?goal=buy&from=non-warrantable-condo` |
| Secondary CTA | Talk with Samantha -> Calendly | **Talk with Samantha** -> `https://calendly.com/samanthashelton` (keep) |
| Tertiary text link (new) | (none) | See what to ask the HOA -> `/product-loans/non-warrantable-condo-loans/#ask-the-hoa` |
| Trust line | No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews | Keep: No credit pull to talk · Licensed mortgage broker, NMLS 2041154 · 5.0 on Google, 123 reviews |
| Reviewed-by (new) | (none) | Reviewed by Samantha Shelton, Broker Owner, NMLS 1647301 · Updated [Month YYYY] |

**Recommended H2/H3 outline (exact headings; 40-60 word answers in quotes)**

- **[RENAME] H2: What is a non-warrantable condo?** (was: "Non-Warrantable Condo Loans, in short")
  > A condo is non-warrantable when its project does not meet Fannie Mae or Freddie Mac standards, so a loan on a unit there cannot be sold to them. That does not make it unfinanceable. Some lenders keep these loans on their own books, as portfolio or non-QM loans, and set their own terms based on why the project failed.
  *Note:* Merge the FAQ 'What does non-warrantable mean?' here and remove it from the FAQ. Add: 'one of our non-QM loan options', linked to the hub.
- **[NEW] H2: What do you need to get a loan on a non-warrantable condo?**
  > Two files: yours and the building's. For you, lenders review credit, income and assets, and usually want a larger down payment and more reserves than an agency loan. For the building, they review the condo questionnaire, budget, reserves, insurance, delinquencies, litigation and inspections. The reason the project failed decides which portfolio or non-QM lenders will consider it.
- **[RENAME] H2: What makes a condo non-warrantable?** (was: "How it works")
  > A project is non-warrantable when it fails Fannie Mae or Freddie Mac project standards. Common reasons under Fannie Mae's rules include commercial space above 35%, one owner holding too many units, litigation about safety or structure, critical repairs, hotel-style operation, dues delinquency above 15% of units, reserves below 10% of the budget, or a new project under 50% presold.
  *Note:* KEEP the cited list. Turn the bold lead-ins into H3s: 'What a lender reviews' and 'Where a portfolio lender comes in'.
- **[NEW] H2: Who decides whether a condo is warrantable?**
  > The lender does, by reviewing the project against Fannie Mae or Freddie Mac standards, usually from the association's questionnaire and documents. A project can pass one lender's review and fail another's if the answers differ or change over time. FHA and VA keep their own approved-project lists, which are separate from warrantability.
- **[RENAME] H2: Who is a non-warrantable condo loan a good fit for?** (was: "Is it a fit?")
  > It fits buyers in a project that failed agency review over a lawsuit, investor concentration, thin reserves or commercial space; owners of units in mixed-use buildings; owners refinancing after a project lost its status; and buyers who can bring more cash to closing. It fits poorly when you need the smallest down payment a program allows.
  *Note:* KEEP the H3s.
- **[NEW] H2: Can you use a conventional, FHA or VA loan on a non-warrantable condo?**
  > Not a conventional loan sold to Fannie Mae or Freddie Mac, since that is what non-warrantable means. FHA and VA have their own condo rules: FHA keeps a list of approved projects plus rules for single units in some unapproved ones, and VA keeps its own list. A project that fails one review may or may not pass another.
  *Note:* Promoted from the FAQ 'Can I use FHA or VA instead?'; remove the FAQ duplicate. Links: /product-loans/fha-loans/, /product-loans/va-loans/.
- **[RENAME] H2: Is it a bad idea to buy a non-warrantable condo?** (was: "Tradeoffs to understand")
  > Not automatically, but go in clear-eyed. Financing usually needs more cash and costs more, fewer lenders compete for the loan, and the label can limit resale buyers and a future refinance until the problem is fixed. The cause matters most: a lawsuit or deferred repairs can reach owners later through special assessments.
  *Note:* KEEP the bullets. ADD H3 'Will it be hard to sell later?': 'While the project stays non-warrantable, your buyers are mostly cash buyers and buyers using portfolio loans. Once the cause is fixed, agency financing may return. Ask the association what is being done and when.'
- **[RENAME] H2: What should you ask the HOA before you buy?** (was: "What to have ready")
  > Ask whether the association or developer is in any lawsuit, arbitration or mediation and why; how large the reserve fund is and how old the reserve study is; how many units are 60 or more days delinquent; whether special assessments are planned; how many units any one owner holds; and how long the condo questionnaire takes.
  *Note:* Add id='ask-the-hoa'. KEEP the list.
- **[RENAME] H2: What does Michigan condo law give buyers?** (was: "Michigan notes")
  > Michigan's Condominium Act gives you tools: a written statement of unpaid assessments if you ask at least five days before closing, the right to examine the association's books and records, and, when buying from a developer, the master deed, a buyer's handbook and a disclosure statement. Many Michigan site condos are detached homes legally organized as condominiums.
  *Note:* KEEP the four cited H3s (MCL 559.104, 559.157, 559.211, 559.184a, 559.205).
- **[RENAME] H2: How does Align find a lender for a non-warrantable condo?** (was: "How Samantha helps")
  > Send the condo questionnaire and the reason you were given. Samantha takes the file to the wholesale lenders that work with that kind of project and compares what each asks for. If the problem is close to being fixed, she will tell you whether waiting makes more sense than a portfolio loan today.
  *Note:* Keep the quote only if verbatim from a recorded source. Replace the first-person paragraph. Subject to Align approval.
- **[KEEP] H2: Check the rules at the source**
  *Note:* Add the reviewed-by line.
- **[RENAME] H2: Non-warrantable condo questions Michigan buyers ask** (was: "Questions about this loan")
  *Note:* KEEP: down payment, become warrantable again, questionnaire timing. REMOVE (now H2s): what does non-warrantable mean, FHA or VA. ADD the two below.
    - **[NEW] H3: Can I refinance a condo in a non-warrantable project?**
      > Often, through the same portfolio and non-QM lenders, with the project reviewed again at the time. If the problem has been fixed since you bought, an agency refinance may be possible. Bring the latest questionnaire, budget and any notice about litigation or assessments so lenders can see the project's current status before you apply.
      *Note:* Link to /learn/refinancing-condo/.
    - **[NEW] H3: Do Fannie Mae's condo rules change?**
      > Yes, periodically. The figures on this page come from the Fannie Mae Selling Guide sections dated in our sources list, and lenders follow the version in force when your loan is underwritten. That is why we ask for the specific reason a project failed, in writing, rather than relying on an old checklist.
- **[DEMOTE] H2: What our clients say / The first conversation does not have to turn into anything / Start with your question / Learn / Other loan options**
  *Note:* Template treatment. Add the sibling strip and DSCR (investor condos) to 'Other loan options'.

**Title and meta (exact)**

| | Current | Recommended |
|---|---|---|
| Title | Michigan Non-Warrantable Condo Loans \| Align Lending (52) | Michigan Non-Warrantable Condo Loans \| Align Lending (52) |
| Meta | Told your condo doesn't qualify? What makes a condo project non-warrantable, what lenders review, and how Align looks for a lender that fits. (141) | Told your Michigan condo doesn't qualify? What makes a project non-warrantable, what lenders review, and how Align looks for a portfolio lender that fits. (154) |

**Accuracy and compliance**

| Claim on page | Finding | Fix | Priority |
|---|---|---|---|
| Fannie Mae thresholds (35% commercial, 15% delinquency, 10% reserves, 50% presale, $10,000-per-unit critical repairs) | Consistent with the cited Selling Guide sections dated 08/05/2026. | Keep; re-verify at each Selling Guide update. | - |
| Single-entity ownership: 'more than 2 units in a project of 11 to 20 units... or more than 20% of a project of 21 or more' | Could not be re-fetched in this audit. | [VERIFY: B4-2.1-03 current single-entity thresholds] | P2 |
| Michigan Condominium Act citations (559.104, 559.157, 559.211, 559.184a, 559.205) | Consistent with the statute as summarized. legislature.mi.gov was unreachable for a direct re-check. | Keep; re-verify once the host is allowlisted. | P2 |
| First-person paragraph after the quote ('Send me the condo questionnaire...') | Voice rule. | Use the third-person answer. | P1 |
| Primary CTA '/start/' with no goal | Attribution is lost. | Use /start/?goal=buy&from=non-warrantable-condo. | P1 |

**Schema**

- WebPage + reviewedBy/lastReviewed.
- BreadcrumbList: Home > Loans > Non-QM Loans > Non-Warrantable Condo Loans.
- MortgageLoan: loanType 'Non-warrantable condo (portfolio / non-QM)', description, areaServed State: Michigan.
- FAQPage: mirror the visible questions.

**Internal links to add from this page (anchor -> URL)**

| Anchor | URL | Placement |
|---|---|---|
| one of our non-QM loan options | `/product-loans/non-qm-loans/` | Definition H2 |
| FHA loans | `/product-loans/fha-loans/` | Conventional/FHA/VA H2 |
| VA loans | `/product-loans/va-loans/` | Conventional/FHA/VA H2 |
| conventional loan | `/product-loans/conventional-loans/` | Conventional/FHA/VA H2 |
| DSCR loan | `/product-loans/dscr-loans-michigan/` | Fit H2: 'Buying the unit as a rental? A DSCR loan qualifies on its rent, if the lender accepts the project.' |
| condo financing | `/learn/condominium-financing/` | Definition H2 |
| refinancing a condo | `/learn/refinancing-condo/` | FAQ: refinance |
| buying a condo: pros and cons | `/learn/pros-and-cons-of-buying-condo/` | Bad-idea H2 |
| navigating HOA rules | `/learn/navigating-hoa-regulations/` | HOA H2 |

**Links to add pointing to this page**

| Source | Anchor | Placement |
|---|---|---|
| Header mega menu, mobile popup and footer (sitewide) | Non-Warrantable Condo Loans | Non-QM group |
| /product-loans/non-qm-loans/ | Non-warrantable condo loans | Program card and table row |
| /product-loans/dscr-loans-michigan/ | non-warrantable condos | Property types card |
| 32 city pages that link with 'non-warrantable condo loan page' / 'non-warrantable condo page' | non-warrantable condo loans in Michigan | Change the anchor text in place (city-page team) |

---

## 7. Michigan and federal fact-check log

| Claim used or recommended | Status | Source checked |
|---|---|---|
| Borrowing against a home (HELOC, home equity loan, refinance) does not uncap taxable value. The statute excludes "a transfer for security or an assignment or discharge of a security interest" from transfer of ownership. | **Substance confirmed. Subsection letter unconfirmed.** The 1998 text lists it as item (i); Treasury guidance says the exclusions now run (7)(a)-(x). The site cites (7)(j). | [1998 SB 1229 text](https://capitol.legislature.mi.gov/documents/1997-1998/billintroduced/Senate/htm/1998-SIB-1229.htm); State Tax Commission Transfer of Ownership Guidelines (michigan.gov, not reachable from this session). Cite "MCL 211.27a(7)" until the letter is confirmed. |
| No state or county transfer tax on a mortgage or its discharge | **Confirmed**: MCL 207.526(d) (state) and MCL 207.505(d) (county) exempt instruments given as security and assignments or discharges | [Van Buren County ROD](https://vanburencountymi.gov/?p=13038), [Chippewa County ROD](https://www.chippewacountymi.gov/rod-state-exemptions), [MCL 207.526 PDF](https://capitol.legislature.mi.gov/documents/mcl/pdf/mcl-207-526.pdf) |
| Mortgage (including HELOC) recording fee is a flat $30 per document | **Confirmed**: MCL 600.2567(1)(a), effective Oct 1, 2016 | [Bay County ROD](https://www.baycountymi.gov/ROD/RecordingFees), [Saginaw County ROD](https://www.saginawcounty.com/departments/register-of-deeds/fees), [Osceola County ROD](https://www.osceola-county.org/residents/county_departments/register_deeds/fees.php) |
| Deadline for a lender to record a discharge after payoff | **Not confirmed.** Secondary sources conflict (75 or 60 days under 565.44(2); a separate 7-day rule after a borrower's request). Publish no figure. | [MCL 565.41 PDF](https://ombudsman.legislature.mi.gov/documents/mcl/pdf/MCL-565-41.pdf) |
| Homestead (PRE) is exempt from up to 18 mills of school operating tax, so rentals pay more | Consistent with MCL 211.7cc and MCL 380.1211; not re-fetched (michigan.gov unreachable) | Michigan Treasury PRE guidance, to cite in sources |
| Fannie Mae no longer has a fixed 620 minimum for DU loans | **Confirmed**: files created on or after Nov 16, 2025 | [Orrick, Nov 14, 2025](https://infobytes.orrick.com/2025-11-14/fannie-mae-updates-selling-guide-removes-minimum-credit-score-for-loans-using-desktop-underwriter/), [National Mortgage Professional](https://nationalmortgageprofessional.com/news/fannie-mae-ending-its-hard-620-score-cutoff) |
| 2026 baseline conforming loan limit $832,750 | **Confirmed.** The 2027 limit is expected in late November 2026, so do not hard-code the figure. | [FHFA release, Nov 25, 2025](https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026) |
| Conventional cash-out maximum 80% LTV on a one-unit principal residence | **Confirmed** (Eligibility Matrix, Dec 10, 2025) | [Fannie Mae Eligibility Matrix](https://singlefamily.fanniemae.com/media/20786/display) |
| Cash-out seasoning: 6 months on title / 12 months on the existing loan | **Not confirmed in this audit.** Marked [VERIFY] in the copy. | Fannie Mae B2-1.3-03 (not fetched) |
| Home equity interest deductible only for buy, build or substantially improve, within $750,000; now permanent | **Confirmed**: One Big Beautiful Bill Act, July 2025 | [University of Illinois Tax School](https://taxschool.illinois.edu/post/one-big-beautiful-bill-implements-significant-tax-package/); IRS Publication 936 |
| HELOC disclosures within 3 business days via a broker; no nonrefundable fee until 3 days after; 3-day right to cancel | Consistent with 12 CFR 1026.40(b), (h) and 1026.15 as cited on the page | consumerfinance.gov Regulation Z (cited on the page) |
| Fannie Mae condo project thresholds (35% commercial, 15% delinquency, 10% reserves, 50% presale) | Consistent with the cited Selling Guide sections dated 08/05/2026; not re-fetched | selling-guide.fanniemae.com (blocked by proxy) |

## 8. Data notes and limits

- **GSC:** queries come from DataWise `datawise_search_console` (property `7faa6221b18546d9a3c4c6a4fd0ae4ed`, 90 days, searched by topic: heloc, home equity, cash out, cash-out, non qm, non-qm, dscr, bank statement, 1099, asset, condo, warrantable, self employed, self-employed, investor, investment property, second mortgage, equity loan). The endpoint does not return a query-to-page mapping, so the owning page for each query is inferred. **Request a GSC page+query export** to confirm which URL ranks (especially the HELOC product page vs the HELOC Learn article). "kingsbridge home equity" impressions belong to another company and were ignored.
- **People Also Ask:** 6 seeds: "HELOC vs home equity loan" (depth 2), "cash out refinance Michigan" (depth 2), "DSCR loan Michigan", "bank statement loan requirements", "non-warrantable condo loan", "1099 mortgage" (depth 1 each). Lender-specific, rate and celebrity questions ("Dave Ramsey", "AmeriSave", "current rates") and the bank-statement editing questions were excluded; the safe intent behind the latter is answered in "What do lenders look for in your bank statements?".
- **Bing:** Bing Webmaster data is not connected. No Bing numbers are used. After the nav fix, request a Bing export to check whether Bing indexes the four under-linked pages.
- **External links:** all 33 unique external links on these pages are primary sources (CFPB, Fannie Mae, Freddie Mac, HUD, VA, IRS, Michigan Legislature) or Calendly and Google reviews. All returned status 0 (proxy-blocked) in `external_status.jsonl`, which counts as unverified, not broken. None were confirmed broken.
- **Network:** `www.legislature.mi.gov` and `www.michigan.gov` failed DNS from this session. Allowlist both to verify the MCL 211.27a subsection letter, MCL 565.41 timing and the PRE text directly.
- **Placeholders left for Align:** `[NEEDS SAMANTHA QUOTE: ...]` (non-QM, bank statement), `[VERIFY: ...]` on seasoning, MSHDA subordination, LARA, PRE deadlines, MCL 438.31c, the 1.5% tax default, the ITIN/foreign national row, and the asset page's compensation sentence.

## 9. Backlog (outside these nine pages, noted for the content team)

- A **"Mortgage after bankruptcy or foreclosure in Michigan"** non-QM child page. The hub currently answers this in one H2, and there is a PAA and GSC pattern around waiting periods.
- An **Ohio bank statement loans** page: "ohio bank statement loans" draws 27 impressions at about position 70, and Align is licensed in Ohio.
- City-page anchors: change "non-warrantable condo loan page" and "non-warrantable condo page" (19 links across 32 city pages) to "non-warrantable condo loans in Michigan" (city-page team).
