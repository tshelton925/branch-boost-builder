# Article linking strategy: alignlending.com Learn Center

Owner question: "Is there a better way to link our articles?"
Scope: the 473 `/learn/` URLs (420 articles, 50 category hubs, 2 tool pages and the Learn root; closing-costs, michigan-taxable-value and mortgage-glossary are counted as hubs), how they connect to the product, purchase, refinance and calculator pages, and how city and county pages hand off to the Michigan guides. Broken links and site architecture belong to the link-health workstream and are not covered here.
Data: crawl of 2026-11-15 (`page_summary.csv`, `pages.jsonl`, `text/`), and Google Search Console via DataWise (top 600 queries by impressions, plus `search` pulls for tax, credit, closing, down payment, HELOC, first time, PMI, sell, escrow and cash out).

Files in this folder:

| File | What it is |
|---|---|
| `cluster-map.csv` | 528 rows: every `/learn/` URL (473) plus the 55 pillar and money pages, with cluster, role, pillar, hub, estimated GSC impressions and whether the page already links its pillar |
| `link-insertions.csv` | 252 specific insertions (107 P0, 141 P1, 4 P2). 224 use a phrase that already exists in the source text; 27 add one new sentence; 1 re-points an existing link |
| `cannibalization.csv` | 68 overlap groups, each with a canonical URL and an action: 34 merge, 31 differentiate, 3 redirect. 53 URLs to 301 |
| `city-guide-link-insertions.csv` | Supplement: 384 more city-page links to the Michigan guides, each anchored on an existing sentence (bulk work for a developer) |

---

## 1. Summary

**Yes, there is a better way.** The articles are not under-linked. They link everywhere. The median article carries 28 in-body internal links to 20 different Learn pages. What is missing is direction: almost none of that link equity flows into the pages that should rank and convert, or back down from them.

The four structural problems:

1. **Money pages are dead ends for Learn equity.** Product, purchase and refinance pages link to only 2 to 6 `/learn/` URLs each, and those are usually the same generic cards (credit score, DTI, closing costs). The FHA page links 0 of its 4 FHA guides, `/refinance/` links 0 of 33 refinance guides, and `/purchase/` links 0 of 36 buying-process guides. Across all clusters, only **11%** of articles get a link from their own cluster's money pages.
2. **The two main commercial pages are skipped.** Articles send their "next step" to conversion sub-pages (break-even review, homebuyer game plan), so `/refinance/` has **5** contextual inlinks and `/purchase/` has **16**. None of the 33 refinance articles links `/refinance/`.
3. **The modules are not topical.** The "Related resources" block is fixed per category. Three posts (`how-to-create-competitive-offer`, `negotiating-home-purchase`, `advantages-of-buying-fixer-upper`) fill 50 modules each, so the septic-system guide recommends offer-negotiation articles. Previous/next links are chronological: only 29% stay inside the topic.
4. **Duplicate topics split the signals.** 68 groups of near-duplicate pages compete for the same queries: three ~5,700-word balloon-mortgage articles, three interest-only articles, five seller's-market articles and seven regulation-update pages. The site's biggest impression earner, the lease-to-own guide (15,242 impressions for "lease to own", average position 59.8), shares its topic with two other pages.

The fix is a **cluster system**. It has 22 topical clusters. Each cluster has one pillar money page and one hub. Every article gets a "next step" link to its pillar in the first 30% of the text, and every pillar links down to its best 4 to 6 guides. Calculators and articles link to each other. City pages link to the Michigan guides they already mention. The rules are in section 6, and the data each rule needs (cluster, pillar, hub) is in `cluster-map.csv`.

## 2. Scorecard: Internal linking (article system)

Formula, applied to each cluster's articles: next-step link to the article's pillar (25 points; half credit for linking another money page in the cluster), that link appearing in the first 30% (10), down-links from the cluster's money pages (20), hub coverage (15), calculator pairing (10, when the cluster has a calculator), same-cluster share of the Related module (10), and depth of same-cluster linking (10). Each overlap group takes off 2 points, up to 10. The overall score is the average weighted by article count.

| Cluster | Articles | Est. GSC impr.* | Score | Grade | Rationale (evidence) |
|---|---|---|---|---|---|
| C01 FHA loans | 4 | 1,846 | 80 | B | Every article links `/product-loans/fha-loans/`, but the FHA page links none of the 4 FHA guides, and 203(k) appears on 2 overlapping pages |
| C02 VA loans | 6 | 1,124 | 80 | B | Every article links the VA pillar (92% early), but `/va-loan-calculator/` has 9 contextual inlinks and the VA page links 1 of 6 guides |
| C03 USDA and rural | 2 | 4,945 | 88 | B | Linking is tight, but the USDA product page links 0 USDA guides even though `usda-loan-basics` is the second-largest impression earner |
| C04 Conventional, HomeReady | 4 | 217 | 76 | C | Every article links the pillar, but neither product page (417 and 270 inlinks) links any of the 4 conventional guides |
| C05 Jumbo | 3 | n/a | 73 | C | Pillar linked from all three articles; only 44% of Related slots stay in the cluster |
| C06 Non-QM, self-employed, DSCR | 10 | 1,120 | 49 | F | Only 40% link `/product-loans/non-qm-loans/` (15 inlinks), there is no calculator, and 3 balloon plus 3 interest-only pages overlap |
| C07 First-time buyers and DPA | 13 | 514 | 49 | F | 38% link `/purchase/first-time-homebuyer/`, the hub covers 54% of articles, and 1 of 17 relevant articles links the affordability calculator |
| C08 Credit, DTI, qualifying | 12 | 521 | 65 | D | Every article links the readiness review, but none links the affordability calculator and the money pages link 25% of the guides |
| C09 Refinancing | 33 | 1,411 | 41 | F | 0 of 33 link `/refinance/` (5 inlinks), 0 of 39 link the refinance calculator, and `/refinance/` links 0 refinance guides |
| C10 Home equity, cash-out, HELOC | 13 | 2,364 | 57 | F | 77% link the right product, but `/product-loans/heloc/` has 16 inlinks and 4 overlap groups (home equity loan, cash-out, HELOC) |
| C11 Closing costs, Loan Estimates | 5 | 53 | 45 | F | No article links its money page in the first 30%, the hub covers 40%, and 3 near-duplicate closing-cost guides compete |
| C12 Michigan property tax | 5 | 229 | 43 | F | The hub `/learn/michigan-taxable-value/` has 294 inlinks but links 0 of its 5 articles and sends "Principal Residence Exemption" to the glossary |
| C13 Buying process | 36 | 2,213 | 42 | F | 1 of 36 articles links `/purchase/`, `/purchase/` links none of them, and 7 overlap groups exist (appraisal, closing, agent, process) |
| C14 Buying strategies, special properties | 54 | 189 | 53 | F | 81% link the game plan, but the money pages link 0 of 54 and the Related module repeats the same 3 posts |
| C15 Selling | 46 | 184 | 64 | D | Strong calculator pairing (96%), but the money pages link 4% of the articles and 8 overlap groups exist |
| C16 Investing | 44 | 1,449 | 69 | D | 95% link `/purchase/investment-property-financing/`, but the money pages link 7% of the articles |
| C17 Homeownership | 48 | 2,263 | 54 | F | Next-step links are good (90%), but the money pages link 2% of the articles and no calculator is paired |
| C18 Fixed vs. ARM | 7 | 113 | 65 | D | Pillar linked by 71%, but 1 of 7 articles links the mortgage calculator and 3 fixed-rate pages overlap |
| C19 Rates, locks, points | 6 | 275 | 64 | D | Points calculator linked by 67%, but only 25% of articles link a money page in the first 30% |
| C20 Market trends, industry | 38 | 131 | 37 | F | The hub covers 45% of articles, no money link appears early, and 9 overlap groups exist (seven regulation pages alone) |
| C21 Specialty financing | 18 | 15,948 | 43 | F | 28% link the right money page, and the top page (lease-to-own) links only the generic game-plan CTA, the loan hub and the rent-vs-buy calculator, nothing for a reader who cannot qualify yet |
| C22 Mortgage basics | 13 | 705 | 50 | F | 38% link the pillar calculator, and amortization is split across 2 pages |
| **Overall (article-weighted)** | **420** | | **54** | **F** | Hub links are strong (87%) and the Related module stays topical in 84% of slots, but down-links reach 11% of articles and the exact pillar is linked by 62% |

*Estimated impressions: the DataWise GSC connector returns query-level rows with no page column, so I mapped each query to its most likely ranking URL with explicit rules (`page = rule(query)`). Treat these numbers as directional, and confirm in GSC → Performance → Pages before any redirect.

After the P0 and P1 work in this folder (insertions, module rules, merges), I project the overall score to reach about 80 (B). The biggest gains come from down-links, from `/refinance/` and `/purchase/` getting their clusters' links, and from removing the 53 duplicates.

## 3. Findings ranked by impact

1. **Pillar pages pass no equity down (critical).** Evidence: `/product-loans/fha-loans/` links `/learn/fha-loans/`, credit score, DTI, closing-cost budgeting and mortgage insurance, but not FHA loan limits, 203(k), FHA streamline or FHA tips. `/refinance/` links `/learn/refinancing-guide/`, `/learn/refinancing/` and `/learn/home-equity/` only. `/purchase/` links three Michigan tax guides and the Learn root. Site-wide, money pages link 11% of the articles in their cluster. Fix: the "Guides for this loan" block (section 7.3) and 38 money-page and calculator rows in `link-insertions.csv`.
2. **`/refinance/` and `/purchase/` are starved (critical).** `/refinance/` has 5 contextual inlinks and `/purchase/` has 16 (`page_summary.csv`). Refinance articles all point to `/refinance/break-even-review/` (115 inlinks) instead. The query "refinance home loan" shows 856 impressions at position 66.9, and "refinancing options" shows 421 at 11.9. Fix: R3 (next-step rule), plus 7 rows to `/refinance/` and 13 rows to `/purchase/`.
3. **The site's largest impression pages have weak next steps (high).** Examples: lease-to-own (est. 15,616 impressions) links only the generic game-plan CTA, not the readiness or first-time buyer pages its readers need; conveyance (est. 1,162, position 1.3) and plat map (est. 338) never link `/purchase/`; the IRRRL guide (est. 370) never links `/refinance/`. Fix: P0 new-sentence rows.
4. **Related and previous/next modules ignore topic (high).** The Related block is fixed per category: 159 distinct targets serve 420 articles, and three posts take 150 slots. Only 29% of previous/next links stay inside the cluster. Fix: module spec in sections 7.1 and 7.2.
5. **Cannibalization (high).** There are 68 groups and 53 URLs to merge or redirect (`cannibalization.csv`). The six P0 groups are lease-to-own, closing costs, low down payment, amortization, home buying process (`buying-process` repeats the hub's H1 pattern), and FHA loan limits (internal "loan limits" anchors send 351 links to `/loan-limits/`, while `/learn/fha-loan-limits/` earns the est. 1,779 FHA-limit impressions).
6. **Calculators are not paired (medium-high).** `/mortgage-refinance-calculator/` is linked from 0 of 39 refinance articles and has 8 contextual inlinks. `/home-affordability-calculator/` is linked from 2 Learn pages, `/va-loan-calculator/` from 1 of 8 VA articles, and `/mortgage-calculator/` from 2 of 20 basics and term articles. Calculators link back to only 2 to 4 Learn pages each. By contrast, the exact anchor "Michigan property tax calculator" appears on 210 Learn pages. Fix: pairing matrix in section 6, R8.
7. **City pages mention Michigan topics without linking the guide (medium).** 275 city pages mention homestead or the PRE, but 66 link the homestead guide. 214 mention MSHDA or MI 10K, but 68 link a DPA page. Septic: 183 mention, 149 link. Private well: 173 mention, 119 link. Waterfront: 97 mention, 71 link. Transfer tax and USDA are already covered (126 of 126, 112 of 114). Fix: R9, plus 12 rows in the main file and 384 in the supplement.
8. **The Michigan property-tax hub is a sink (medium).** `/learn/michigan-taxable-value/` has 294 contextual inlinks but no link to the homestead, assessment or transfer-tax guides, or to the uncapping study. Fix: 4 rows, including re-pointing its PRE link from the glossary to the homestead guide.
9. **The site's own research is barely linked (medium).** `/research/michigan-mortgage-market-report/` has 2 contextual inlinks, yet it holds quotable Michigan statistics that strengthen AI-search answers. I verified these on the report page: 30% of 2025 Michigan purchase loans had DTI above 43%; manufactured-home purchase applications were denied 57% of the time versus 8% for site-built homes; home equity lines were denied 30% of the time versus 15.5% for purchases. Fix: 5 new-sentence rows.
10. **Over-optimized repetition (low-medium).** "Michigan property tax calculator" appears 210 times, and "Build your homebuyer game plan" or "Get my homebuyer game plan" 243 times. The CTA labels are fine as button text, but in-body anchors should vary (R10).

## 4. The cluster model

Each article belongs to one cluster, plus an optional secondary cluster. Each cluster has one **pillar** (the money page that should rank and convert), any number of **secondary money pages**, one **hub** (the Learn category page that lists every article in the cluster) and its **calculators**. An article's own next-step target is the `pillar_url` column in `cluster-map.csv`. It defaults to the cluster pillar, and topic rules override it. For example, HELOC articles go to `/product-loans/heloc/`, septic, well and rural articles go to `/product-loans/usda-loans/`, and lease-to-own and land-contract articles go to `/purchase/mortgage-readiness-review/`.

| ID | Cluster | Articles | Pillar (contextual inlinks today) | Secondary money pages | Hub | Calculators |
|---|---|---|---|---|---|---|
| C01 | FHA loans | 4 | `/product-loans/fha-loans/` (361) | `/learn/fha-loan-limits/`, `/loan-limits/` | `/learn/fha-loans/` | `/learn/fha-loan-limits/`, `/loan-limits/`, `/mortgage-calculator/` |
| C02 | VA loans | 6 | `/product-loans/va-loans/` (329) | `/purchase/va-homebuyer-plan/`, `/va-loan-calculator/`, `/va-funding-fee-calculator/` | `/learn/va-loans/` | `/va-funding-fee-calculator/`, `/va-loan-calculator/` |
| C03 | USDA and rural | 2 | `/product-loans/usda-loans/` (92) | `/usda-eligibility-check/` | `/learn/usda-and-assistance-programs/` | `/usda-eligibility-check/` |
| C04 | Conventional, HomeReady, Home Possible | 4 | `/product-loans/conventional-loans/` (417) | `/product-loans/home-ready/`, `/loan-limits/`, `/pmi-removal-calculator/` | `/learn/conventional-loans/` | `/loan-limits/`, `/pmi-removal-calculator/` |
| C05 | Jumbo and non-conforming | 3 | `/product-loans/jumbo-loans/` (92) | `/loan-limits/` | `/learn/jumbo-and-non-qm/` | `/loan-limits/` |
| C06 | Non-QM, self-employed, DSCR | 10 | `/product-loans/non-qm-loans/` (15) | `/purchase/self-employed-homebuyer/`, `/product-loans/bank-statement-loan/`, `/product-loans/1099-income-loans/`, `/product-loans/asset-based-income-loans/`, `/product-loans/dscr-loans-michigan/` | **Proposed:** split `/learn/jumbo-and-non-qm/` into a jumbo hub and a `/learn/non-qm-and-self-employed/` hub | Gap: no bank-statement income calculator ("bank statement loan calculator", 57 impressions, position 44) |
| C07 | First-time buyers, down payment, DPA | 13 | `/purchase/first-time-homebuyer/` (53) | `/purchase/down-payment-assistance/`, `/product-loans/home-ready/`, `/home-affordability-calculator/`, `/rent-vs-buy-calculator/`, `/purchase/homebuyer-game-plan/` | `/learn/first-time-home-buyers/` | `/home-affordability-calculator/`, `/rent-vs-buy-calculator/` |
| C08 | Credit, DTI, qualifying | 12 | `/purchase/mortgage-readiness-review/` (64) | `/purchase/budget-review/`, `/home-affordability-calculator/` | `/learn/credit-and-qualifying/` | `/home-affordability-calculator/` |
| C09 | Refinancing | 33 | `/refinance/` (5) | `/refinance/break-even-review/`, `/mortgage-refinance-calculator/` | `/learn/refinancing/` (sub-hubs: refinancing-guide, types-of-refinancing, refinance-situations) | `/mortgage-refinance-calculator/` |
| C10 | Home equity, cash-out, HELOC | 13 | `/refinance/cash-out-vs-home-equity/` (25) | `/refinance/home-equity-review/`, `/product-loans/heloc/`, `/product-loans/cashout-loans/`, `/product-loans/home-equity-loan/` | `/learn/home-equity/` | `/mortgage-refinance-calculator/` (gap: LTV and equity calculator; "loan to value calculator" queries sit at positions 19 to 27) |
| C11 | Closing costs, Loan Estimates | 5 | `/compare-loan-estimates/` (130) | `/learn/how-to-compare-loan-estimates/`, `/michigan-transfer-tax-calculator/`, `/purchase/budget-review/` | `/learn/closing-costs/` (acting hub: add a "Closing cost guides" list) | `/compare-loan-estimates/`, `/michigan-transfer-tax-calculator/` |
| C12 | Michigan property tax, uncapping, homestead, transfer tax | 5 | `/michigan-property-tax-calculator/` (541) | `/michigan-transfer-tax-calculator/`, `/research/michigan-property-tax-uncapping-study/` | `/learn/michigan-taxable-value/` (**upgrade to a true hub**) | `/michigan-property-tax-calculator/`, `/michigan-transfer-tax-calculator/` |
| C13 | Buying process (offer to closing) | 36 | `/purchase/` (16) | `/purchase/homebuyer-game-plan/`, `/mortgage-process/` | `/learn/home-buying-process/` | `/mortgage-calculator/` |
| C14 | Buying strategies, special properties | 54 | `/purchase/homebuyer-game-plan/` (492) | `/purchase/`, `/purchase/budget-review/` | `/learn/buying-strategies/` | `/home-affordability-calculator/` |
| C15 | Selling | 46 | `/seller-net-sheet-calculator/` (69) | `/purchase/buy-before-you-sell/` | `/learn/selling-a-home/` | `/seller-net-sheet-calculator/`, `/michigan-transfer-tax-calculator/` |
| C16 | Real estate investing | 44 | `/purchase/investment-property-financing/` (63) | `/product-loans/dscr-loans-michigan/` | `/learn/real-estate-investing/` | Gap: rental cash-flow and DSCR calculator |
| C17 | Homeownership, maintenance, improvement, insurance | 48 | `/refinance/home-equity-review/` (90) | `/purchase/renovation-financing/`, `/mortgage-payoff-calculator/` | `/learn/homeownership/` | `/mortgage-payoff-calculator/` |
| C18 | Fixed vs. ARM, loan terms | 7 | `/product-loans/adjustable-rate-mortgage/` (15) | `/product-loans/30-year-fixed/`, `/product-loans/15-year-fixed/`, `/mortgage-calculator/` | `/learn/fixed-vs-arm/` | `/mortgage-calculator/` |
| C19 | Rates, locks, points, buydowns | 6 | `/points-vs-lender-credit-calculator/` (43) | `/product-loans/buydown-loans/`, `/why-we-dont-publish-rates/` | `/learn/rate-strategy/` | `/points-vs-lender-credit-calculator/` |
| C20 | Market trends, industry rules | 38 | `/purchase/homebuyer-game-plan/` (492) | `/research/michigan-mortgage-market-report/`, `/refinance/break-even-review/` | `/learn/housing-market-trends/` (+ `/learn/industry-updates-and-rules/`) | `/rent-vs-buy-calculator/` |
| C21 | Specialty financing | 18 | `/purchase/renovation-financing/` (40) | `/product-loans/manufactured-home-loans/`, `/product-loans/non-warrantable-condo-loans/`, `/product-loans/physician-loans/`, `/purchase/buy-before-you-sell/` | `/learn/specialty-financing/` | Gap: none |
| C22 | Mortgage basics | 13 | `/mortgage-calculator/` (38) | `/mortgage-payoff-calculator/`, `/pmi-removal-calculator/`, `/mortgage-process/` | `/learn/mortgage-basics/` | `/mortgage-calculator/`, `/mortgage-payoff-calculator/`, `/pmi-removal-calculator/` |

**Journey order** (the order of stages, used by the "adjacent stage" rule): rent and plan (C07, C08, C20) → choose a loan (C01 to C06, C18, C19, C21) → shop and offer (C14, C13) → close (C11, C12) → own (C17, C22, C10, C09) → sell or invest (C15, C16). Adjacent clusters, used by the Related module and the topical-link rule:

`C01: C07 C04 C08 C09 C21 · C02: C07 C09 C21 · C03: C07 C14 C09 · C04: C07 C01 C05 C22 · C05: C04 C06 C09 · C06: C05 C08 C16 · C07: C01 C02 C03 C04 C08 C11 C13 C14 · C08: C07 C01 C04 C06 C09 · C09: C10 C11 C19 C01 C02 C03 C04 C05 C22 · C10: C09 C17 C21 · C11: C13 C07 C19 C12 C15 · C12: C13 C17 C15 C11 · C13: C11 C07 C14 C12 C08 · C14: C13 C07 C03 C21 C16 · C15: C21 C11 C12 C13 · C16: C06 C09 C21 · C17: C10 C12 C21 C22 · C18: C19 C22 C09 · C19: C18 C11 C09 C20 · C20: C19 C16 C14 · C21: C10 C01 C04 C14 C15 C17 · C22: C18 C19 C04 C09 C11`

**Proposed hub changes** (subject to Align approval):
- Split `/learn/jumbo-and-non-qm/` into a jumbo section and a new non-QM and self-employed hub, so self-employed, bank-statement, portfolio, interest-only and balloon guides have a hub that matches their pillar.
- Upgrade `/learn/michigan-taxable-value/` from a 1,409-word explainer into the Michigan property-tax hub. Keep its explainer at the top, then list homestead, assessments and appeals, home improvements and taxes, transfer tax, the uncapping study, and both calculators.
- Retire `/learn/mortgage-terminology/` (one child article) by redirecting it to `/learn/mortgage-glossary/`.
- Add a "Closing cost guides" list block to `/learn/closing-costs/`, which already has 190 contextual inlinks and works as the cluster's center.

## 5. Cannibalization findings

Full list: `cannibalization.csv`. The canonical rule: the URL with the most GSC page-level impressions for the shared query wins; if there is no page-level data, the one with the most contextual inlinks; if those tie, the broadest intent and the cleanest slug. Each judgment exception is labeled in the CSV.

| Priority | Topic | Canonical | Action |
|---|---|---|---|
| P0 | Lease-to-own / rent-to-own / lease option (15,242 impressions for "lease to own", position about 60) | `/learn/lease-to-own-vs-rent-to-own-whats/` | Merge `navigating-lease-to-own-agreements` and 301 it; re-scope `lease-option-agreements-pros-and-cons` to sellers or merge it too |
| P0 | Closing costs (buyer) | `/learn/closing-costs/` (190 inlinks) | Merge `mortgage-closing-costs`; re-scope `how-to-budget-for-closing-costs` to the savings plan |
| P0 | Low down payment | `/learn/low-down-payment-mortgages/` | Merge `buying-home-with-low-down-payment` |
| P0 | Amortization ("amortization": 315 impressions, position 14.5) | `/learn/mortgage-amortization/` | Differentiate: retitle `amortization-schedules` to "How to read an amortization schedule" |
| P0 | Home buying process overview | `/learn/home-buying/` | 301 `buying-process`; retitle the H1 of the `home-buying-process` hub |
| P0 | FHA loan limits | `/learn/fha-loan-limits/` | Differentiate: anchors that mention FHA limits point to the article, generic limit anchors point to `/loan-limits/` |
| P1 | Interest-only (3 pages), balloon (3), fixed-rate (3), rate lock (2), 203(k) (2), appraisal (2), low appraisal (2), refinance with bad credit (2), home equity loan (2), seller's market (5), bidding war (2), regulation updates (7) | See CSV | Merge |
| P1 | Seller's disclosure, IRRRL vs. VA cash-out, cash-out definition vs. decision, HELOC article vs. product, Michigan tax pages, USDA basics vs. hub, Michigan DPA | See CSV | Differentiate (retitle, re-scope, cross-link) |

Rules for merges: move the unique sections into the canonical, then 301. **Update every internal link to point at the canonical URL directly**; do not rely on redirects. Merge the FAQ schema questions. Keep the byline and the Sources list.

## 6. The linking system (rules a developer or editor can apply)

**R1. One cluster, one pillar, one hub per article.** Read `cluster`, `pillar_url` and `hub_url` from `cluster-map.csv`. Store them on each post as three custom fields (`adp_cluster`, `adp_pillar_url`, `adp_hub_url`) so templates and editors use the same source. A new article gets its cluster before it is drafted. If a page already covers the target query (check the `cannibalization_group` column and the cluster list), update that page instead.

**R2. In-body contextual links.**
- **How many:** one internal in-body link per 250 words of body text, with a minimum of 6 and a maximum of 20. Most articles run 4,400 to 6,500 words with a median of 28 links, so the change for most of them is **re-pointing** links, not adding them. This count excludes breadcrumbs, the byline, footnote and "Return to text" links, the Related module and CTA buttons.
- **Mix per article:** 1 link to the pillar (R3), 1 link to the hub (already standard: "If you're earlier in the process, start with our ... guide"), at least 3 links to same-cluster articles, at most 3 links to adjacent-cluster articles, and 1 link to the cluster calculator where the article discusses numbers (R8).
- **Where:** the first link in the first 100 words (the hub sentence), the pillar in the first 30%, and same-cluster links at the point where the sub-question comes up. Use at most one link per paragraph, and never link inside an H2 or H3.
- **Anchor style:** 2 to 6 words, descriptive, using a phrase already in the sentence. Use the target's topic and, for money pages, add "Michigan" where it reads naturally (for example "HELOCs in Michigan", "Michigan down payment assistance"). Never use "click here", "read more" or a bare URL. Do not use the same exact anchor for the same target more than 3 times per publishing batch; track it in a link inventory. Do not link to the same target twice on one page, except the pillar, which may appear once more in the closing section.
- **Never** link from a rate example, an APR table or a Sources or footnote line, and never link a phrase inside a quoted statute or a quote. Every row in `link-insertions.csv` was filtered on these rules, and no row sits on, or points to, a URL that `cannibalization.csv` merges or redirects.

**R3. Next step to the pillar: twice per article.**
1. **In the first 30%:** add one sentence right after the hub sentence in the intro. Template (Align voice, no promises, adapt the noun): "When you are ready to apply this to your own [purchase / refinance / equity plan], see [descriptive anchor to `pillar_url`]." Most articles already have an early "Next step" CTA box. Keep it, but make it point to the pillar's conversion page as mapped below, and add the in-text sentence, because in-text links carry more relevance than CTA buttons.
2. **In the closing section:** the existing "Next step" box after Related resources. Map it by cluster: C09 → `/refinance/break-even-review/`; C10 and C17 → `/refinance/home-equity-review/`; C01 to C08, C13, C14 and C18 to C21 → `/purchase/homebuyer-game-plan/`, except C07 → `/purchase/first-time-homebuyer/`, C08 → `/purchase/mortgage-readiness-review/`, C02 → `/purchase/va-homebuyer-plan/`, C06 → `/purchase/self-employed-homebuyer/`, C16 → `/purchase/investment-property-financing/`, C21 renovation → `/purchase/renovation-financing/`; C15 → `/purchase/buy-before-you-sell/`; C11, C12 and C22 → the cluster calculator.

**R4. Related guides module.** Replaces the category-fixed block; full spec in section 7.1. Use 4 slots: 2 from the same cluster, 1 from the next journey stage (an adjacent cluster), and 1 tool or money card.

**R5. Previous / next links.** Replace chronological order with cluster order: the hub's list order. Previous and next stay inside the cluster, and the last article's "next" is the cluster hub. If that is not feasible in Astra, remove previous/next. Only 29% of the current links are on-topic.

**R6. Hub page layout** (all 50 hubs, in order):
1. A 40 to 60-word direct answer to the hub's head question, with the entity named (Align Lending, Michigan).
2. A **"Start here" card** linking the pillar money page with a descriptive anchor.
3. **Core guides:** every article in the cluster (100% coverage is the rule; today 87%), grouped under 3 to 5 subheadings in journey order. Each entry shows the title and a one-line description.
4. **Tools:** the cluster's calculators.
5. **Related clusters:** 2 or 3 adjacent hubs.
6. The closing "Next step" box (R3).
Hubs should not repeat full article content (see the USDA hub vs. basics row in `cannibalization.csv`).

**R7. Money pages link down.** Every product, purchase and refinance page gets the "Guides for this loan" block (section 7.3) with 4 to 6 articles from its own cluster, plus one in-text link where the page mentions a sub-topic. For example, the FHA page's "FHA Streamline" text links `/learn/fha-streamline-refinance-loans/`, and its "take over an FHA loan" text links `/learn/what-is-assumable-mortgage/`. Keep at most one generic card (credit score, DTI or closing costs) per page.

**R8. Calculator ↔ article pairing.** Each calculator links to at least 3 paired articles in a "Learn the rules behind these numbers" line under the results. Each paired article links the calculator once, at the section where it discusses the math, with a "Run your own numbers" callout (section 7.4).

| Calculator | Paired articles (must link both ways) |
|---|---|
| `/mortgage-refinance-calculator/` | refinancing-closing-costs, benefits-of-rate-and-term-refinance, should-you-refinance-before-rates-rise, refinancing-guide, types-of-refinancing, plus every C09 article that shows break-even math |
| `/home-affordability-calculator/` | debt-to-income-ratio-dti, budgeting-for-your-first-home, how-to-improve-your-debt-to-income-ratio, buying-home-with-low-income-tips-and-programs, how-to-buy-home-with-student-loan-debt |
| `/va-loan-calculator/` and `/va-funding-fee-calculator/` | va-loans, va-loan-benefits-for-veterans, buying-home-with-va-loan, how-to-qualify-for-va-loan, va-interest-rate-reduction-refinance-loans |
| `/usda-eligibility-check/` | usda-loan-basics, what-is-usda-streamline-refinance, tips-for-buying-home-in-rural-area, buying-home-with-septic-system, how-well-water-impacts-homes-value |
| `/pmi-removal-calculator/` | mortgage-insurance, refinancing-to-remove-mortgage-insurance, what-is-loan-to-value-ratio, what-is-conventional-97-loan, homeready-mortgages |
| `/mortgage-calculator/` | mortgage-amortization, mortgage-escrow-accounts, 15-year-vs-30-year-mortgage-comparison, payments-escrow-servicing, how-mortgages-work |
| `/mortgage-payoff-calculator/` | mortgage-amortization, amortization-schedules, mortgage-recasting, refinancing-to-shorter-loan-term |
| `/points-vs-lender-credit-calculator/` | mortgage-rate-buydowns, what-is-mortgage-rate-lock, annual-percentage-rate-apr, rate-strategy |
| `/seller-net-sheet-calculator/` | what-is-sellers-net-sheet (in the first 30%), sellers-closing-costs, finances-of-selling, when-does-seller-get-money-after-closing |
| `/compare-loan-estimates/` | how-to-compare-loan-estimates, closing-costs, annual-percentage-rate-apr, seller-paid-closing-costs |
| `/michigan-property-tax-calculator/` | michigan-taxable-value, homestead-exemption-benefits-and-filing-guide, property-tax-assessments-how-they-work, impact-of-home-improvements-on-property-taxes. Use varied anchors: 210 Learn pages already use the exact anchor "Michigan property tax calculator" |
| `/michigan-transfer-tax-calculator/` | michigan-transfer-tax, sellers-closing-costs, closing-costs |
| `/loan-limits/` | fha-loan-limits (anchors that mention FHA limits go to the article), how-to-qualify-for-jumbo-loan, non-conforming-loans, conventional-loans |

**R9. City and county pages → Michigan guides.** On each city page, link the **first** mention of each trigger once, with a phrase from the sentence:

| Trigger phrase on the page | Target | Today (mentions → linked) |
|---|---|---|
| homestead, Principal Residence Exemption | `/learn/homestead-exemption-benefits-and-filing-guide/` | 275 → 66 |
| MSHDA, MI 10K, MI Home Loan | `/purchase/down-payment-assistance/` | 214 → 68 |
| septic system | `/learn/buying-home-with-septic-system/` | 183 → 149 |
| private well, well water | `/learn/how-well-water-impacts-homes-value/` | 173 → 119 |
| waterfront, lakefront, inland lake | `/learn/buying-waterfront-property/` | 97 → 71 |
| flood, floodplain | `/learn/buying-home-in-flood-zone/` | 276 → 236 |
| transfer tax | `/learn/michigan-transfer-tax/` or the calculator | 126 → 126 (done) |
| USDA | `/usda-eligibility-check/` or `/product-loans/usda-loans/` | 114 → 112 (done) |
| land contract | `/learn/michigan-land-contract/` | 4 → 1 |

County hubs (13) link the three core Michigan guides (taxable value, homestead, DPA) once each in their intro section. `city-guide-link-insertions.csv` lists 384 ready rows. Rows for city pages that already earn impressions (Dearborn, Ann Arbor, Flint, Farmington, Traverse City, Richmond, Detroit, Wolverine Lake) are P0 or P1 in the main file.

**R10. Anchor governance.** Keep a link inventory: source, target, anchor, date. Before publishing, check three caps: no target gets more than 3 identical in-body anchors per batch, no article has more than 20 in-body internal links, and no anchor points at a redirecting URL.

**R11. Cannibalization governance.** One URL per query. A new article proposal must name its cluster, the query it targets, and the existing page it does not duplicate. Merges follow `cannibalization.csv`.

**R12. QA checks** (scriptable against a fresh crawl, using the same logic as this audit):
- (a) Each article has at least 1 link to `adp_pillar_url` at or before 30% of body length.
- (b) Each article links its hub.
- (c) Each article has at least 3 same-cluster in-body links.
- (d) Each article has 6 to 20 in-body internal links.
- (e) Hub coverage is 100%.
- (f) Every money page links at least 4 articles from its own cluster.
- (g) Every calculator links at least 3 paired articles, and each of those links back.
- (h) Related modules do not repeat a body link, and no single article fills more than 25% of a cluster's Related slots.
- (i) No internal link points at a 301.

## 7. Module specs

### 7.1 Related guides (replaces "Related resources")

- **Data:** for each article, `adp_cluster`, `adp_secondary_cluster`, `est_impressions` (from GSC Pages, refreshed monthly), `contextual_inlinks` (from the crawl), and its keyword tokens (slug + H1, minus stop words).
- **Candidates:** all published articles, excluding (a) the article itself, (b) URLs already linked in its body, (c) URLs marked merged or redirected in `cannibalization.csv`, and (d) hubs.
- **Score** (deterministic):
  - +50 if same cluster
  - +25 if the candidate's cluster is the article's secondary cluster, or the next journey stage in the adjacency list
  - +30 × Jaccard similarity of keyword tokens
  - +10 if the candidate is a striking-distance page (average position 4 to 30 with at least 30 impressions in GSC Pages)
  - +5 if updated in the last 180 days
  - −20 if the candidate already appears in 25% or more of its cluster's Related modules
- **Slots:** slot 1 and slot 2 are the top two same-cluster candidates; slot 3 is the top adjacent-cluster candidate; slot 4 is a tool or money card (the cluster calculator, or the article's `pillar_url` if the body does not link it yet).
- **Tie-breaker:** lower `contextual_inlinks` first, then alphabetical by slug.
- **Markup:** keep the current card (image, title, "20-minute read", one-line description). Use an `<h2>Related guides</h2>` heading, and `<a>` tags around the title only, not three separate links to the same URL (today each card links image, title and "Read more").
- **Build:** a PHP shortcode `[adp_related_guides]` run nightly into a transient, or computed offline with this audit's scripts and stored as a post meta list of 4 URLs.

### 7.2 Next step (in-text) and Next step box

- **In-text:** one sentence after the intro's hub sentence (R3), linking `adp_pillar_url`. An editor writes it once per article. The 27 new-sentence rows in `link-insertions.csv` are worked examples.
- **Box:** the existing component, with the target mapped by cluster (R3). Keep the established CTA labels ("Build my homebuyer game plan", "Talk through your options", "Run a break-even review").

### 7.3 "Guides for this loan" (money pages)

- **Placement:** replaces the current "Learn" card row on product, purchase and refinance pages, above "Other loan options".
- **Selection:** articles in the page's cluster, sorted by:
  1. Striking-distance flag
  2. Estimated impressions
  3. Journey coverage: one each of qualify, costs, compare, and "later" (refinance or sell)
- Use 4 to 6 cards, with at most 1 generic cross-cluster card.
- **Example for `/product-loans/fha-loans/`:** fha-loans (hub), fha-loan-limits, benefits-of-fha-203-k-loans, fha-streamline-refinance-loans, fha-loan-tips, plus mortgage-insurance as the one generic card.

### 7.4 "Run your own numbers" callout (articles)

- **Placement:** one per article, at the H2 where the math is explained.
- **Text pattern:** "[Calculator name]: see [what it shows] from your own numbers." For example: "Points vs. Lender Credit Calculator: see the break-even month for paying points, from your own numbers."
- **Rules:** never show a rate or payment promise. The IRRRL article already uses this pattern for the VA funding fee calculator.

## 8. Link insertions: how to use `link-insertions.csv`

- **Columns:** `priority`, `source_url`, `anchor_text_exact`, `existing_sentence_or_new_sentence`, `target_url`, `reason`, plus `insertion_type`, `placement`, `source_cluster`, `source_type`, `target_type`, estimated source and target impressions, `impact` and `effort`.
- **Insertion types:**
  - **link existing phrase (224):** the sentence is copied verbatim from the page text and the anchor is an exact substring. I checked every row against `text/<slug>.txt` (0 mismatches), and the target is not already linked anywhere on the source page.
  - **new sentence (27):** the text starts with `NEW:`, and `placement` says where it goes. The new sentences contain no rates or promises, and their only facts are figures I verified on the Align research page.
  - **change existing link (1):** re-point the PRE link on `/learn/michigan-taxable-value/`.
- **Priority logic:** P0 = the source earns est. 100 or more impressions and the target is a money page or striking-distance page, or the target is an under-linked pillar. P1 = a missing pillar link, a money-page down-link or a calculator pairing. P2 = backlog.
- **Spread:** 179 source pages and 91 target pages. Caps: 3 rows per source (4 for sources with est. 1,000 or more impressions) and 3 identical anchors per target (city pages exempt, because R9 links the first mention of a proper noun such as MSHDA).
- **Top targets by row count:** `/purchase/` 13, `/purchase/down-payment-assistance/` 12, `/purchase/first-time-homebuyer/` 9, `/purchase/renovation-financing/` 8, `/learn/low-down-payment-mortgages/` 8, `/refinance/` 7.
- **Order of work:** P0 rows (107) in week 1, together with the 6 P0 cannibalization actions; P1 rows (141) and the module builds (sections 7.1 to 7.4) in weeks 2 to 4; P2 and the city supplement after that.
- **Draft wording:** new sentences that describe how Align works are subject to Align approval before publishing.

## 9. Measurement and caveats

- **Track:** GSC Pages impressions and average position for the 35 striking-distance targets in this plan, contextual inlinks to `/refinance/` (5 today), `/purchase/` (16), `/mortgage-refinance-calculator/` (8) and `/research/michigan-mortgage-market-report/` (2), and the QA checks in R12 on a monthly crawl.
- **GSC attribution is inferred.** The connector has no page dimension. The query-to-page rules sit in the scratchpad script `gscmap2.py`, and impressions marked "est." are sums of the mapped queries. The queries pulled total about 50,600 impressions, of which about 43,900 map to a URL; the site total is 181K. Confirm page-level numbers before any 301.
- **Bing:** Bing Webmaster data is not connected. Bing weighs exact-match anchors and on-page relevance more heavily than Google, which strengthens the case for R2 anchor variety and R7 down-links. I need a Bing export before giving Bing-specific numbers.
- **Not in scope here:** orphans, broken links and redirect chains (link-health workstream), and title, H1 and meta rewrites for the merged canonicals (core-pages and content workstreams).

---

## Auditor corrections

Independent audit, 2026-11-15. **Verdict: PASS WITH CORRECTIONS.**
- Full audit: `08-audit/audit-links.md`. Row-level fixes: `08-audit/corrections-links.csv`.
- Everything above this heading is the team's text, unchanged. Where they differ, the corrections below take precedence.
- Confirmed: all 224 existing-phrase rows and all 384 city rows are verbatim. The median of 28 in-body links (auditor 29), money pages linking 2 to 6 Learn pages, 0 of 33 and 0 of 36, the "3 posts × 50 modules", prev/next 29%, homestead 275 → 66, 0 Learn links to the refinance calculator, and every research-report figure in the new sentences.

**Compliance (P0)**
- **Row 108** (`/purchase/first-time-homebuyer/`, a money page) used "from 0% to 3.5%", a down-payment percentage (guide §7.2 rule 1). Corrected:
  - Anchor: "low-down-payment mortgage options".
  - Sentence: "NEW: If the down payment is the hurdle, compare low-down-payment mortgage options."
- Rows 104, 105, 106, 131, 153 and 192 anchor links on "3% down" or "3.5% down". Drop them or hold them for [COUNSEL] (104–106 move P0 → P1). Never anchor a link on a down-payment percentage.
- Rows 116, 135 and 218 (term names): add `[COMPLIANCE REVIEW]`.
- Rows 72 and 84: do not anchor "purchase loan" inside the ICE "36.8 days" statistic. Link a different sentence.

**Score**
- The overall 54 (F) is a custom formula, not the rubric.
- A blind rubric re-score (§3.6 anchors) of 6 articles gives **71 (C)**: no orphans, no broken links, hub links on 87%, a money-page link on 92%, median inlinks of 17.5–19.
- Keep 54 as a labelled "cluster-architecture index". Relabel the cluster column the same way: C20's 37 falls below the rubric floor, which is reserved for orphans and broken links.
- The projected score after fixes on the rubric basis is about 82 (B), projected.

**Corrected or refuted statements**
- C13: **0 of 36** articles link `/purchase/`, not 1. No Learn page links `/purchase/` in body copy.
- "11%" becomes **about 9%** (36 of 420).
- "The modules are not topical" becomes "concentrated": 84% of Related slots stay in the cluster, but 3 posts take 150 slots.
- "The connector has no page column" is refuted. The DataWise `overview` returns `top_pages_90` and `opps_90` with URLs, and the estimates miss them:

  | Page | Actual impressions | Team estimate |
  |---|---|---|
  | `usda-loan-basics` | 10,182 | 4,945 |
  | `usda-eligibility-check` | 86 | 695 |
  | `va-loan-calculator` | 849 | 209 |

  Use the page rows where they exist, then re-run the P0 logic.
- P0 rule: 26 of the 107 P0 rows fail the stated rule. Restate it to include "target is a striking-distance page (position 4–30, ≥ 30 impressions)".
- Downgrade row 81 to P2: it is a cross-cluster link, not "same-cluster".
- Caps: `michigan-taxable-value` has 4 source rows, and "Michigan Mortgage Market Report" is used ×4 on one target. Cut each to 3.
- R2: a 20-link cap against a median of 28 means pruning about 8 links per article. Raise the cap to 30 or say so.

**Copy fixes**
- Row 12: "NEW: For all seven types of refinancing, read refinancing options and who each one fits."
- Row 136: "NEW: A loan above the conforming limit is non-conforming; see how non-conforming loans work."
- Rows 56, 170 and 182, and city rows 192–199: link the **second** occurrence of the anchor. The first sits inside an existing link.

**Cannibalization and the blog inventory (05-content-keywords)**
- 33 of the 53 URLs to 301 agree with `blog-inventory.csv`. **20 disagree:**

  | Topic | URLs | Note |
  |---|---|---|
  | `buying-process` (P0) | 1 | Different 301 target: 05 sends it to `/learn/home-buying-process/`. |
  | Seller's market | 4 | 05 merges 02's canonical. |
  | Regulation updates | 6 | Inverted. |
  | Trends and new products | 2 | Different targets. |
  | Beginner investing | 2 | Inverted. |
  | Freddie Mac | 1 | Different target. |
  | Movers | 1 | Different target. |
  | Selling overview | 1 | Different target. |
  | ARM | 1 | The cell is malformed and contradicts the row's own canonical. |
  | `mortgage-terminology` | 1 | 05 keeps it. |

- 05 also merges 24 pages that 02 only differentiates. Among them:
  - `amortization-schedules` (P0). GSC `opps_90` credits "amortization" (315, 14.5) to this URL, so check GSC Pages before any 301.
  - `how-to-budget-for-closing-costs`.
  - `how-to-compare-loan-estimates`, a C11 secondary money page in `cluster-map.csv`.
- The PM rules per group. Until then, freeze those 301s.
- 18 insertion rows sit on source pages that 05 merges (14) or prunes (4): P0 rows 32 and 33, plus 16 P1 rows. Re-home them on the surviving canonical, and drop those on pruned pages.
- Row 125 now targets `/learn/what-is-cash-out-refinance-loan/`.

**Next-step box (conflict with 01-ctas §8)**
- 01-ctas owns the `al-module`/`al-next` destinations and labels.
- This team supplies only the `/refinance/` and `/purchase/` hub text links inside that template, and drops the R3 closing-box map.
- Use guide §5.2 labels: "Review my break-even" or "Calculate my break-even", not "Run a break-even review".
