# Blog inventory: what we have and what is left

**Scope:** every live `/learn/` URL on alignlending.com (473: 471 typed `learn` plus 2 articles typed `calculator`) and the 96 legacy root-slug posts that now 301. Prepared by the Blog Inventory Analyst (Content team, part 1 of 3) for the content strategist.
**Data:** crawl of 2026-11-15 (`page_summary.csv`, `pages.jsonl`, `text/`, `link_graph.json`, `learn-sitemap.xml`) and Google Search Console via DataWise (property `sc-domain:alignlending.com`, top 1,000 queries by impressions out of 5,231). Bing Webmaster data is not connected; there are no Bing numbers here, and a Bing export is needed before the gap plan is final.
**Files in this folder:**
- `blog-inventory.csv`: one row per URL (473 live plus 96 legacy), with the requested columns and five extras (page_type, question_headings, michigan_mentions, content_inlinks, top_queries).
- `gsc-queries-top1000.csv`: the GSC export the team shares. It adds an intent bucket and an inferred page mapping, because the GSC tool returns no page dimension.
- this report.

---

## 1. Summary

**What we have.** The library holds **424 articles** (421 standard guides plus 3 short Michigan glossary answers) and **49 hub pages**: the `/learn/` landing page, the A-to-Z glossary, 8 subject hubs and 39 topic sub-hubs. The articles total **2.35 million words**, with a median of **5,604 words** (range 1,285 to 6,511). Every article carries Samantha Shelton's byline with her NMLS number, a visible "Updated October/November 2026" date, Article and FAQPage schema (5 to 12 questions) and a Sources list. 423 of 424 have a Michigan section. Every URL in the learn sitemap shows a lastmod between **2026-10-11 and 2026-11-14**. The whole library was rebuilt on one template in five weeks.

**How it performs.** 737 informational queries in the top 1,000 map to Learn content. They produced **50,180 impressions and 4 clicks** on articles, at an impression-weighted average position of **about 47**. Only 76 of those queries rank in the top 10 and 57 sit at positions 11 to 20. 105 of the 424 articles appear in the top-1,000 queries at all. Core-relevance articles are 44% of the library but carry **82% of mapped impressions** (41,023). Drift articles are 16% of the library and carry 7% (3,494).

**Headline scores, articles only:**

| Aspect | Score | Grade | One-line rationale |
|---|---|---|---|
| E-E-A-T & trust | 79 | C | Byline + NMLS, visible updated date, Sources and government sourcing on 100% of articles; no reviewer on any page, a sourced Samantha quote or first-hand note on only 5 of 424, and the identical five-week "Updated" stamp reads as templated. |
| AI-search readiness | 72 | C | Question H2s (median 67% of H2s), FAQ schema on every article, and a specific number in the first 60 words on 71%; but the median page runs 5,604 words with a 331-word intro, only 3 pages are concise, and only 26% cite the site's own `/research/` data. |
| Heading structure | 80 | B | One H1 everywhere, no skipped levels, question-led H2s; but outlines are bloated (median 17 H2s, max 26) and the same closing headings (FAQ, Bottom line, How Align, Sources, Related resources) repeat on about 420 pages. |
| Title & meta | 73 | C | All titles are 60 characters or less and unique, and 97% of metas are 140-160; but auto title-casing errors appear on 82% of titles, head terms are missing on the biggest opportunities, and CTR is near zero (4 clicks against about 730 expected at the observed positions). |

**What is left (the short version).** The library does not lack volume. It is weighted the wrong way and it duplicates itself:
- The five core program clusters (FHA, VA, USDA, conventional, jumbo) have **20 articles**, about 5% of the library, yet draw 27% of mapped impressions. Buying process/strategies, homeownership/maintenance, investing and selling hold **219 articles** (52%) with a combined 19% of impressions.
- **61 cannibalization groups** cover 87 articles that should merge into a canonical. One more duplicates a tool page, and one sub-hub duplicates a subject hub.
- **38 drift articles** should be pruned with 301s, and 1 should be noindexed.

The changes in this inventory bring the library to **about 297 articles**. The real gaps are **26 Michigan- and program-specific guides** that do not exist yet: MSHDA MI Home Loan and MI 10K DPA, USDA income limits and eligible areas in Michigan, DSCR, VA funding fee, the disabled-veteran property tax exemption, how much house you can afford in Michigan, credit-event waiting periods, and refinancing a land contract. They are listed in section 9.

**Action counts (articles):** KEEP 199 · REFRESH 88 · MERGE 88 · RE-ANGLE 10 · PRUNE 38 · NOINDEX 1. **Hubs:** KEEP 31 · REFRESH 13 · EXPAND 4 · MERGE 1. **Priorities across all 569 rows:** P0 10 · P1 117 · P2 442.

---

## 2. Scorecard

Scores follow the brief's rubric. Each aspect score is a weighted sum of measured signals from the crawl, listed under the table. Clusters follow the brief's list, plus "mortgage basics & rates", "specialty financing" and "industry rules & news" so those 61 articles do not all fall into "other". Small clusters (2-6 articles) score high on E-E-A-T because they are all core and fully templated; their weakness shows up in demand (positions) and coverage (section 9), not in the template.

| Scope | Articles | E-E-A-T & trust | AI-search readiness | Heading structure | Title & meta | Mapped impr / clicks | Drift share |
|---|---|---|---|---|---|---|---|
| **Whole library (articles)** | 424 | 79 C | 72 C | 80 B | 73 C | 50,180 / 4 | 16% |
| buying process | 87 | 78 C | 72 C | 82 B | 74 C | 2,632 / 0 | 11% |
| homeownership/maintenance | 51 | 73 C | 75 C | 79 C | 73 C | 4,382 / 1 | 63% |
| refinance/equity | 49 | 84 B | 78 C | 79 C | 74 C | 5,088 / 0 | 0% |
| investing | 44 | 75 C | 63 D | 80 B | 74 C | 2,408 / 0 | 34% |
| selling | 37 | 78 C | 65 D | 81 B | 72 C | 130 / 0 | 14% |
| mortgage basics & rates | 26 | 82 B | 76 C | 79 C | 78 C | 1,818 / 0 | 0% |
| industry rules & news | 21 | 77 C | 74 C | 77 C | 78 C | 268 / 0 | 10% |
| market trends | 18 | 76 C | 84 B | 81 B | 74 C | 232 / 0 | 22% |
| first-time buyer/DPA | 15 | 85 B | 73 C | 86 B | 71 C | 556 / 0 | 0% |
| specialty financing | 14 | 84 B | 70 C | 81 B | 74 C | 16,604 / 3 | 0% |
| non-QM/self-employed/investor | 12 | 85 B | 73 C | 83 B | 73 C | 1,943 / 0 | 0% |
| real-estate-agent topics | 11 | 78 C | 69 D | 76 C | 74 C | 48 / 0 | 0% |
| credit/DTI | 10 | 84 B | 75 C | 85 B | 66 D | 351 / 0 | 0% |
| VA | 6 | 85 B | 76 C | 74 C | 72 C | 2,193 / 0 | 0% |
| Michigan property tax/homestead | 6 | 78 C | 67 D | 73 C | 69 D | 180 / 0 | 0% |
| FHA | 5 | 85 B | 75 C | 79 C | 70 C | 2,470 / 0 | 0% |
| conventional/HomeReady | 5 | 85 B | 74 C | 81 B | 77 C | 251 / 0 | 0% |
| closing costs | 3 | 85 B | 75 C | 82 B | 70 C | 20 / 0 | 0% |
| jumbo | 2 | 85 B | 77 C | 68 D | 65 D | 168 / 0 | 0% |
| USDA | 2 | 85 B | 75 C | 75 C | 75 C | 8,438 / 0 | 0% |

How each aspect is computed (weights out of 100):
- **E-E-A-T & trust:** Samantha byline with NMLS (20), visible updated date (10), Sources section (20), five or more government or primary-source links (10), Michigan specificity of 15+ mentions (10), expertise fit (15: core 1, adjacent 0.5, drift 0), reviewer or fact-checker (10: none present), first-hand experience or sourced quote (5: 5 of 424 pages).
- **AI-search readiness:** question-led H2 share (20), FAQ schema (15), a specific number in the first 60 words after the byline (15), concision, meaning an intro of 200 words or less and a page of 3,500 words or less (10), Michigan entity clarity (15), link to first-party `/research/` data (15), no year-stamped staleness (10).
- **Heading structure:** single H1 (15), no skipped levels (15), question-led H2 share (25), 8 to 16 H2s (20), H3 sub-questions present (15), no decorative or navigational headings (10, half credit because of the repeated template tail).
- **Title & meta:** title of 60 characters or less (25), meta of 140-160 characters (20), unique (15), title head term present in the H1 (15), correct casing (10), CTR against a position-based expected CTR (15). For CTR, articles earned 4 clicks against about 732 expected; this is the main drag on the score.

**Hubs and landing page,** scored separately because hubs are not meant to carry Sources lists:

| Page set | Heading structure | Above-the-fold intro | Internal linking | Indexability | Taxonomy fit | Overall |
|---|---|---|---|---|---|---|
| 48 hubs (8 subject, 39 sub-hubs, glossary) | 72 C: 47 of 49 hubs use "More on …" or "Featured resources" as H2s, and the glossary uses 25 letter H2s | 78 C: 39 hubs open with a 40-60 word answer; 9 open with only breadcrumb, H1 and byline (about 30 words) | 90 A: every hub links every child on one page, so no pagination is needed; 1-7 money-page links per hub | 100 A: all index,follow, self-canonical, in sitemap | 62 D: Buying strategies has 51 children while USDA has 3, conventional 4, FHA 5, VA 5 and first-time buyers 4; loan-comparisons duplicates loan-types; financing-investments has no children of its own | **78 C** |
| `/learn/` landing | 80 B | 85 B: H1 "Straight answers about mortgages, from a Michigan broker." followed by trust lines (NMLS, sources checked, "No rate quotes, no predictions") and a search box | 85 B: 131 content links, three "Common starting points" with CTAs | 100 A | 70 C: Loan types sits third, and Home buying's "Start here" picks are appraisal, inspection checklist and competitive offer rather than preapproval, affordability or DPA | **82 B** |

---

## 3. Findings ranked by impact

1. **A large, uniform library that earns almost no clicks.** The evidence:
   - 424 articles at a median of 5,604 words, all on one template: 421 end with "FAQ: …", "The bottom line on …", "Sources" and "Related resources", and 419 carry a "How Align …" sales H2.
   - Every learn-sitemap lastmod falls between 2026-10-11 and 2026-11-14.
   - Mapped informational queries returned 50,180 impressions and 4 clicks.

   This is the pattern search systems discount as scaled content. Fewer, deeper, clearly first-hand pages are the fix: merge, prune, and add `[NEEDS SAMANTHA QUOTE: topic]` slots to the top 40 articles (no quotes may be invented). Impact: critical. Effort: high.
2. **The topical weight is inverted against the business.** Core articles carry 82% of impressions, yet the core mortgage program sub-hubs are the thinnest in the library (USDA 3 children, conventional 4, FHA 5, VA 5). Meanwhile 68 drift articles cover mudrooms, smart irrigation, window U-factor, craftsman history, mansions, REITs, crowdfunding and senior housing. Of the drift, 32 sit in homeownership/maintenance and 15 in investing. Impact: high. Effort: medium.
3. **Two pages hold a third of the opportunity, and both are under-built for their head terms.**
   - "lease to own" shows 15,242 impressions at position 59.8, which is 22% of all top-1,000 impressions. It is split across 3 near-duplicates (`lease-to-own-vs-rent-to-own-whats`, `navigating-lease-to-own-agreements`, `lease-option-agreements-pros-and-cons`), and the canonical's title targets the "vs." comparison rather than the head term.
   - USDA queries total 8,438 impressions at an average position of 35, all routed to one article (`usda-loan-basics`). There is no Michigan income-limit or eligible-area page, even though "usda eligibility" ranks at 11.1 and "usda rural development loan" at 13.9.

   Impact: critical. Effort: medium.
4. **Cannibalization is systematic.** There are 61 groups with 87 articles to merge (section 6). The worst are:
   - the seller's-market and competitive-offer cluster (5 pages);
   - buyer's, seller's and balanced market definitions (5 pages);
   - the industry news and regulation sub-hub: 22 articles collapse to 8, for example `mortgage-regulation-updates`, `new-lending-regulations`, `impact-of-new-mortgage-regulations`, `regulatory-changes` and `regulatory-updates-for-lenders` all answer "new mortgage rules";
   - interest-only (3), balloon (3), fixed-rate (3), buyer closing costs (3) and lease-to-own (3).

   Impact: high. Effort: medium.
5. **Year-sensitive content is about to go stale, and some already has.**
   - `updates-to-property-tax-laws` carries 2025-stamped H2s ("What changed in property tax law for 2025?", "Should you itemize in 2025?", "The bottom line on 2025 property tax updates").
   - `housing-market-outlook` and `mortgage-market` have "2026" in their titles.
   - 254 pages carry 2026 program figures or 2026-dated headings. The 2026 conforming limit ($832,750) is hard-coded on 123 pages, the FHA floor ($541,287) on 54 and the FHA ceiling ($1,249,125) on 73.
   - FHFA announces the 2027 conforming limit in late November 2026, and FHA, jumbo, conventional and HECM figures follow (section 5).
   - The legacy URLs with "2025" slugs (for example `/fha-loan-limits-2025-homeownership/`, `/home-buyer-grants-2025/`) are already retired by 301s to evergreen `/learn/` URLs, which is good. But 15 legacy 301s become two-hop chains once this plan's merges and prunes ship (section 8).

   Impact: high. Effort: medium.
6. **A compliance and brand conflict sits inside the library.** The `/learn/` landing page promises "No rate quotes, no predictions". Against that:
   - `housing-market-outlook` asks "Where will mortgage rates be in 2026?" and its meta says "mortgage rates near 6%";
   - `mortgage-rate-predictions` is titled "Mortgage Rate Predictions: What Forecasters Expect";
   - `mortgage-market`'s meta says "so you can time your move confidently".

   Impact: high (P0). Effort: low.
7. **Michigan coverage is broad but scattered.** MSHDA is mentioned on 162 pages and MI 10K on 116, yet there is no dedicated MSHDA or MI 10K guide. There is no local DPA guide (Detroit's down payment assistance program is named on 0 pages), no Michigan USDA income-limit page, and no page on the 100% disabled-veteran property tax exemption (it is mentioned on 26 pages). The three concise Michigan glossary answers (`michigan-land-contract`, `michigan-taxable-value`, `michigan-transfer-tax`, about 1,300-1,400 words each, opening with "The short answer") are the most AI-extractable format in the library. They should be the model for the new Michigan guides. Impact: high. Effort: medium.
8. **Titles are not earning clicks.**
   - 82% of titles show auto title-casing errors: "15-year Vs. 30-year Mortgage: Payments And Interest", "Adjustable-rate Mortgages: Pros And Cons For Buyers".
   - Head terms are missing where volume is: "usda loans", "va loan requirements", "lease to own".
   - Top-10 positions return zero clicks: "conveyance" at position 1.3 returned 0 clicks from 1,123 impressions, and "personal loans" at position 4.5 returned 0 from 1,657, which suggests SERP features or AI answers absorb the click.
   - Fix the casing site-wide in one pass, either with the Rank Math or theme title-case setting or by editing titles, using sentence case to match the H1s.

   Impact: medium. Effort: low.
9. **Hubs are complete but not prioritized** (section 7). Their linking is complete and nothing is paginated or orphaned. But 9 sub-hubs have no intro, 47 hubs use navigational H2s, `loan-comparisons` duplicates `loan-types`, `financing-investments` has no children, and Home buying's "Start here" choices skip preapproval and DPA. Impact: medium. Effort: low.
10. **Learn pages compete with tools and money pages for the same queries.**
    - `/learn/how-to-compare-loan-estimates/` ("How To Compare Two Loan Estimates, Line By Line") duplicates `/compare-loan-estimates/` ("How To Compare Loan Estimates, Box By Box").
    - `/learn/fha-loan-limits/` overlaps `/loan-limits/`.
    - `/learn/mortgage-loan-process/` overlaps `/mortgage-process/`.
    - Learn program hubs (`/learn/fha-loans/`, `/learn/va-loans/`) sit beside `/product-loans/fha-loans/` and `/product-loans/va-loans/` for "michigan fha loans"-type queries.

    The Learn page should own "how it works and requirements", and the product page should own "Michigan X loan broker, apply". Impact: medium. Effort: low.

---

## 4. Top refresh list (P0 and P1, ordered by priority then mapped impressions)

70 rows in the CSV are P0/P1 REFRESH, RE-ANGLE or EXPAND. The top 32 are below; full text is in `blog-inventory.csv` (`action_detail`). Canonicals of merge groups also carry a REFRESH that tells you which pages to absorb.

| # | URL | Action | Mapped impr / pos | Relevance | What to change | Pri |
|---|---|---|---|---|---|---|
| 1 | /learn/lease-to-own-vs-rent-to-own-whats/ | REFRESH | 15,903 / 58.9 | core | Canonical for 'lease to own' (15,242 impr, pos 59.8; 22% of all top-1,000 query impressions). Retitle 'Lease to Own a Home: How It Works vs. Rent to Own' (49 chars); H1 'Lease to own a home: how it works, what it costs and how it differs from rent to own'; make the first H2 'What is lease to own?' with a 40-60 word definition; fold in navigating-lease-to-own-agreements and lease-option-agreements-pros-and-cons... | P0 |
| 2 | /learn/usda-loan-basics/ | REFRESH | 8,438 / 35.3 | core | Top USDA target (8,438 impr; 'usda eligibility' pos 11.1, 'usda rural development loan' pos 13.9, head terms pos 41-48). Retitle 'USDA Loans in Michigan: Eligibility, Income Limits, Costs' (57 chars); put a 50-word eligibility answer (address + 115% AMI income + occupancy) under the first H2; add a FY2027 Michigan county income-limit table [VERIFY: USDA RD income limits effective FY2027] and a prominent link to... | P0 |
| 3 | /learn/fha-loan-limits/ | REFRESH | 2,470 / 44.5 | core | 2,470 impr across 'fha loan limits' variants (pos 28-54). HUD publishes CY2027 FHA limits after FHFA's late-November conforming announcement: replace the 2026 floor/ceiling ($541,287/$1,249,125) and all 83 Michigan county figures the day the Mortgagee Letter posts [VERIFY: HUD Mortgagee Letter for 2027 limits]; retitle 'FHA Loan Limits 2027: Michigan Limits by County' (47 chars; update the year in place each... | P0 |
| 4 | /learn/how-to-qualify-for-jumbo-loan/ | REFRESH | 168 / 57.9 | core | Michigan jumbo queries (michigan jumbo loan 155 impr pos 46, ann arbor jumbo loan 79) need a Michigan-led page: retitle 'Jumbo Loans in Michigan: How to Qualify' (39 chars; no hard-coded limit in the title) and swap to the 2027 conforming limit when FHFA announces it in late November [VERIFY: FHFA 2027 CLL]; merge jumbo-loan-tips (301); link /product-loans/jumbo-loans/. | P0 |
| 5 | /learn/conventional-loans/ | REFRESH | 21 / 7.2 | core | Hub carries the 2026 conforming limit ($832,750) in the intro; update to the 2027 FHFA limit the day it is announced (expected late November 2026) and add a 'Conventional loan requirements in Michigan' FAQ answer. | P0 |
| 6 | /learn/federal-housing-finance-agency-updates/ | REFRESH | 0 / – | adjacent | Make this the single 'Fannie Mae, Freddie Mac and FHFA updates' tracker: absorb fannie-mae-updates, freddie-mac-updates and fannie-mae-and-freddie-mac-stabilizing-housing-market (301 all three); lead with the 2027 conforming loan limit announcement [VERIFY: FHFA press release, late Nov 2026] and a dated change log. | P0 |
| 7 | /learn/housing-market-outlook/ | REFRESH | 0 / – | adjacent | Title is year-stamped '2026 Housing Market Outlook' and an H2 asks 'Where will mortgage rates be in 2026?', which conflicts with the Learn Center promise 'No rate quotes, no predictions' and the brand rule on rates. In January publish the 2027 version in place (same URL), remove rate forecasts and the 'mortgage rates near 6%' meta, and frame as Michigan inventory/price data with sources. | P0 |
| 8 | /learn/mortgage-rate-predictions/ | RE-ANGLE | 0 / – | adjacent | Title 'Mortgage Rate Predictions: What Forecasters Expect' contradicts the Learn Center line 'No rate quotes, no predictions'. Retitle 'Mortgage Rate Forecasts: How They Work and Why They Miss' (56 chars), strip any quoted forecast numbers, and point readers to /why-we-dont-publish-rates/ and the rate-lock guide. | P0 |
| 9 | /learn/usda-and-assistance-programs/ | EXPAND | 0 / – | core | Only 3 child guides for the topic with the second-largest impression pool (USDA ~8.4K impr). Add USDA income limits Michigan, USDA eligible areas Michigan, MSHDA MI Home Loan and MI 10K DPA, Detroit and local DPA programs. | P0 |
| 10 | /learn/personal-loan-vs-home-equity/ | REFRESH | 1,723 / 5.9 | core | 'personal loans' shows 1,657 impr at pos 4.5 with 0 clicks (likely a SERP-feature slot); test title 'Personal Loan vs. Home Equity Loan: Which Costs Less?' and a 45-word comparison answer at the top so the snippet earns the click; link /product-loans/home-equity-loan/ and /product-loans/heloc/. | P1 |
| 11 | /learn/va-interest-rate-reduction-refinance-loans/ | REFRESH | 1,309 / 70.7 | core | 1,309 impr on IRRRL/streamline queries at pos 64-84. Retitle 'VA IRRRL (Streamline Refinance): Rules, Costs, Seasoning' (56 chars); lead with the 210-day seasoning and net-tangible-benefit tests [VERIFY: 38 CFR 36.4307 / VA Circular]; add 'IRRRL vs. VA cash-out' table and differentiate from benefits-of-refinancing-va-loan. | P1 |
| 12 | /learn/what-is-portfolio-loan/ | REFRESH | 1,165 / 47.1 | core | 1,165 impr on 'portfolio loan rates' variants (pos 39-58). Intent is rate-shopping, which we never answer with numbers: add an H2 'Why portfolio loan rates run higher than conforming' (pricing factors, no rates) and link /why-we-dont-publish-rates/ and /product-loans/non-qm-loans/. | P1 |
| 13 | /learn/va-loan-benefits-for-veterans/ | REFRESH | 985 / 42.3 | core | VA benefit queries rank pos 19-52 (what are the benefits of a va loan pos 19.3). Add a 50-word answer under 'What are the benefits of a VA loan?' as the first H2, a 2026/2027 funding-fee table that links /va-funding-fee-calculator/, and the Michigan 100% disabled veteran property tax exemption (MCL 211.7b) as a quotable fact; merge va-loan-tips into buying-home-with-va-loan, not here. | P1 |
| 14 | /learn/how-to-qualify-for-va-loan/ | REFRESH | 701 / 54.7 | core | 'va loan requirements' 169 impr at pos 77 and 'va loan eligibility' 114 at pos 80.6: the page is not seen as the answer. Retitle 'VA Loan Requirements: Eligibility, COE and Credit' (49 chars) and open with a 6-item requirement list (service, COE, occupancy, credit overlay, DTI/residual income, property MPRs). | P1 |
| 15 | /learn/what-is-usda-streamline-refinance/ | REFRESH | 669 / 64.5 | core | 669 impr on 'refinance usda loan' variants (pos 53-88). Retitle 'How to Refinance a USDA Loan: Streamline and Other Options' (58 chars) to match the dominant query, not only the streamline program. | P1 |
| 16 | /learn/home-equity-line-of-credit-heloc/ | REFRESH | 547 / 58.4 | core | 596 impr; 'home equity line of credit' 124 impr at pos 93 (not ranking). Retitle 'HELOC: How a Home Equity Line of Credit Works in Michigan' (57 chars); add a 50-word definition first, draw/repayment table, and link /product-loans/heloc/ and /refinance/cash-out-vs-home-equity/. | P1 |
| 17 | /learn/types-of-refinancing/ | REFRESH | 544 / 21.5 | core | 'refinancing options' 421 impr at pos 11.9: tune hub title to 'Refinancing Options: 7 Types of Refinance Compared' and add a 7-row comparison table above the fold; link /refinance/. | P1 |
| 18 | /learn/balloon-payments/ | REFRESH | 521 / 10.8 | core | Canonical for balloon content (legacy /balloon-payments-mortgage-guide/ already 301s here). Absorb balloon-mortgages and balloon-mortgages-risks-and-benefits; keep the QM balloon/HPML rule section that ranks pos 2-5 for exam-style 'non-HPML balloon' queries. | P1 |
| 19 | /learn/low-down-payment-mortgages/ | REFRESH | 480 / 46.4 | core | 480 impr (low down payment mortgage options pos 21.5). Absorb buying-home-with-low-down-payment (301); add Michigan DPA stacking (MI 10K) section linking /purchase/down-payment-assistance/. | P1 |
| 20 | /learn/analyzing-rental-market-trends/ | REFRESH | 412 / 23.4 | adjacent | 412 impr ('rental market analysis' pos 26.7). Add a Michigan rent-data section (HUD Fair Market Rents by MI county [VERIFY: HUD FMR FY2027]) and link /product-loans/dscr-loans-michigan/ since DSCR underwriting uses market rent. | P1 |
| 21 | /learn/what-is-mortgage-rate-lock/ | REFRESH | 400 / 35.4 | core | Canonical of group 'rate-lock': absorb /learn/benefits-of-mortgage-rate-locks/ (301 each), merge their best unique sections/FAQs, then re-check H1 against the primary query. | P1 |
| 22 | /learn/buying-home-as-investment-property/ | REFRESH | 395 / 57.3 | core | 395 impr on 'real estate financing'/'investor financing' (pos 48-64). Retitle 'Investment Property Loans in Michigan: Down Payment and DSCR' (59 chars); add DSCR and portfolio options and link /purchase/investment-property-financing/ and /product-loans/dscr-loans-michigan/. | P1 |
| 23 | /learn/mortgage-amortization/ | REFRESH | 394 / 18.3 | core | 'amortization' 315 impr at pos 14.5 (striking distance). Absorb amortization-schedules (301), add a 50-word definition under the first H2 and a month-1/month-60/month-120 illustrative table labeled 'hypothetical, not an offer'; link /mortgage-payoff-calculator/. | P1 |
| 24 | /learn/what-is-loan-to-value-ratio/ | REFRESH | 364 / 53.0 | core | 364 impr on LTV calculation queries (pos 19-95); there is no LTV calculator on the site. Add an inline 'How to calculate LTV' worked example under the first H2 and request a simple LTV calculator (tools team). | P1 |
| 25 | /learn/debt-to-income-ratio-dti/ | REFRESH | 333 / 31.9 | core | 'fha debt to income ratio' 65 impr at pos 72; add a DTI-limits-by-loan-type table (FHA, VA residual income, USDA 29/41, conventional) as the first H2 answer. | P1 |
| 26 | /learn/home-equity-loans-pros-and-cons/ | REFRESH | 315 / 60.9 | core | Canonical of group 'home-equity-loan': absorb /learn/home-equity-loan-tips/ (301 each), merge their best unique sections/FAQs, then re-check H1 against the primary query. | P1 |
| 27 | /learn/reverse-mortgages-how-they-work/ | REFRESH | 292 / 57.7 | core | Year-sensitive program figures (2026 limits/fees) sit in the answer itself: update to 2027 figures in the January sweep (FHFA conforming limit, HUD FHA limits, VA, USDA FY2027 fees/income limits, MSHDA limits) and change 'Updated' date only when figures change [VERIFY each against the issuing agency]. | P1 |
| 28 | /learn/fha-loans/ | EXPAND | 149 / 26.9 | core | Core program hub with only 5 child guides (vs. 51 under Buying strategies). Add children from the coverage map: FHA MIP 2027, FHA requirements in Michigan, FHA vs. conventional for Michigan buyers, FHA 2-4 unit house hacking. | P1 |
| 29 | /learn/michigan-land-contract/ | REFRESH | 145 / 42.6 | core | Best-built page in the library for AI answers ('The short answer' box, 1,408 words, Sources, 5 FAQ Q) and real demand (land contract 77 impr pos 43.9, land contracts 45, 'who pays property taxes on a land contract' pos 13.5). Retitle 'Michigan Land Contracts: How They Work and How to Refinance' (59 chars) to carry the head term; spin the 'Refinancing out of a land contract' section into its own new guide... | P1 |
| 30 | /learn/mortgage-escrow-accounts/ | REFRESH | 104 / 8.2 | core | Striking distance: what is an escrow balance on a mortgage (37, pos 7.7); what is escrow balance on a mortgage (27, pos 8.5); what is the escrow balance on a mortgage statement (21, pos 8.2). Tune title/H1/first-60-word answer to the top query and add it as a question H2 with a 40-60 word answer. | P1 |
| 31 | /learn/home-closing-process/ | REFRESH | 102 / 87.0 | core | Canonical of group 'closing-process': absorb /learn/how-to-prepare-for-home-closing/ (301 each), merge their best unique sections/FAQs, then re-check H1 against the primary query. | P1 |
| 32 | /learn/homestead-exemption-benefits-and-filing-guide/ | REFRESH | 91 / 23.8 | core | Retitle 'Michigan Homestead Exemption: Who Qualifies and How to File' (58 chars) so the page leads with Michigan's Principal Residence Exemption (Form 2368, June 1/Nov 1 deadlines) [VERIFY: Michigan Treasury]; 'what is homestead exemption' ranks pos 12.2. A city page still links the redirecting /learn/homestead-exemption/ URL; update that link. | P1 |

---

## 5. January 2027 figure sweep (year-stamped content)

| Trigger (verify against the issuing agency) | Expected | Pages to update first | Then |
|---|---|---|---|
| FHFA 2027 conforming loan limit (one-unit baseline, currently $832,750 on 123 pages) | Late November 2026 | `/learn/conventional-loans/`, `/learn/how-to-qualify-for-jumbo-loan/`, `/learn/federal-housing-finance-agency-updates/`, `/learn/non-conforming-loans/`, `/learn/refinancing-jumbo-loan/`, `/learn/what-is-conventional-97-loan/`, `/learn/loan-types/`, `/learn/government-backed-loans/` | Replace the figure with a link to `/loan-limits/` (or the new conforming-limit answer page) on the 100+ non-core pages that only mention it in passing, so future sweeps touch about 15 pages instead of 123. |
| HUD CY2027 FHA forward limits and HECM limit (floor $541,287 on 54 pages; ceiling $1,249,125 on 73) | After the FHFA release | `/learn/fha-loan-limits/`, `/learn/fha-loans/`, `/learn/recent-changes-to-fha-loan-requirements/`, `/learn/reverse-mortgages-how-they-work/` | Same rule: link out rather than restate. |
| USDA FY2027 income limits and fees | Confirm the RD notice | `/learn/usda-loan-basics/`, `/learn/recent-changes-to-usda-loan-programs/`, `/learn/what-is-usda-streamline-refinance/` | New USDA Michigan income-limit page (section 9). |
| VA funding fee schedule and county limits used for partial entitlement | Confirm the VA circular | `/learn/va-loan-benefits-for-veterans/`, `/learn/buying-home-with-va-loan/`, `/learn/proposed-changes-to-va-loan-programs/` | New VA funding fee page. |
| MSHDA 2027 income and purchase-price limits | Confirm MSHDA | `/learn/first-time-home-buyer-grants-and-programs/`, `/learn/state-specific-mortgage-assistance-programs/` | New MSHDA page. |
| Michigan 2027 inflation rate multiplier (cap on taxable-value growth) | Michigan Treasury | `/learn/michigan-taxable-value/`, `/learn/property-tax-assessments-how-they-work/`, `/learn/homestead-exemption-benefits-and-filing-guide/` | 23 pages mention the multiplier. |
| Federal tax year 2026 figures (SALT cap, standard deduction) | IRS | `/learn/impact-of-new-tax-laws-on-homeownership/` (absorbs the 2025-stamped `updates-to-property-tax-laws`), `/learn/mortgage-interest-deductions-how-they-work/`, `/learn/capital-gains-tax-exemptions/` | |
| Titles with a year | January | `/learn/housing-market-outlook/` (publish 2027 in place, with no rate forecasts) and `/learn/mortgage-market/` (drop the year) | |

Rule for the sweep: change the "Updated" date only when a figure or rule on the page actually changes. Re-dating 470 pages at once is part of the templated-freshness problem in finding 1. In the CSV, `stale_year` marks 254 pages "2026 figures/headings (Jan-2027 sweep)". It marks 34 more "cites mostly 2025 data", meaning survey or report citations to refresh when newer editions publish (for example NAR 2025 seller and staging surveys on `how-to-choose-real-estate-agent` and `impact-of-home-staging-on-sale-price`).

---

## 6. Merge list (cannibalization)

Each group targets the same query or intent, judged by similar titles, H1s and slugs. Keep the canonical URL, move unique sections, examples and FAQ answers into it, 301 the others, and update internal links. Canonicals were chosen by query match, then content inlinks, then legacy-redirect equity. 61 groups, 87 articles merged, plus:
- `/learn/how-to-compare-loan-estimates/` merges into `/compare-loan-estimates/`;
- `/learn/loan-comparisons/` (sub-hub) merges into `/learn/loan-types/`.

Combined impressions are the canonical's plus the members' mapped GSC impressions.

| Group | Canonical (keep) | Merge in + 301 | Combined mapped impr | Pri |
|---|---|---|---|---|
| lease-to-own | /learn/lease-to-own-vs-rent-to-own-whats/ | /learn/navigating-lease-to-own-agreements/<br>/learn/lease-option-agreements-pros-and-cons/ | 15,903 | P0 |
| balloon | /learn/balloon-payments/ | /learn/balloon-mortgages/<br>/learn/balloon-mortgages-risks-and-benefits/ | 521 | P1 |
| low-down | /learn/low-down-payment-mortgages/ | /learn/buying-home-with-low-down-payment/ | 480 | P1 |
| amortization | /learn/mortgage-amortization/ | /learn/amortization-schedules/ | 423 | P1 |
| rate-lock | /learn/what-is-mortgage-rate-lock/ | /learn/benefits-of-mortgage-rate-locks/ | 400 | P1 |
| home-equity-loan | /learn/home-equity-loans-pros-and-cons/ | /learn/home-equity-loan-tips/ | 315 | P1 |
| jumbo | /learn/how-to-qualify-for-jumbo-loan/ | /learn/jumbo-loan-tips/ | 168 | P0 |
| construction-loan | /learn/construction-loan-guide/ | /learn/construction-to-permanent-loans/ | 160 | P1 |
| closing-process | /learn/home-closing-process/ | /learn/how-to-prepare-for-home-closing/ | 102 | P1 |
| mortgage-rules | /learn/mortgage-regulation-updates/ | /learn/new-lending-regulations/<br>/learn/impact-of-new-mortgage-regulations/<br>/learn/regulatory-changes/<br>/learn/regulatory-updates-for-lenders/ | 75 | P2 |
| industry-news | /learn/whats-new-in-mortgage-industry/ | /learn/mortgage-news/<br>/learn/new-mortgage-products/<br>/learn/innovative-mortgage-products/<br>/learn/trends-in-mortgage-lending/ | 73 | P1 |
| interest-only | /learn/interest-only-mortgages/ | /learn/interest-only-mortgages-risks-and-benefits/<br>/learn/pros-and-cons-of-interest-only-mortgages/ | 68 | P1 |
| agent-commission | /learn/real-estate-agent-commissions-how-they-work/ | /learn/how-much-agent-makes-from-home-sale/ | 48 | P2 |
| maintenance-budget | /learn/how-to-budget-for-home-maintenance/ | /learn/cost-of-home-repairs-planning-for-unexpected/ | 45 | P2 |
| market-type | /learn/what-is-buyers-market-in-real-estate/ | /learn/what-is-sellers-market-for-home-buyers/<br>/learn/what-is-balanced-housing-market/<br>/learn/navigating-buyers-market-as-home-buyer/<br>/learn/how-to-navigate-cooling-housing-market/ | 41 | P2 |
| seller-disclosure | /learn/what-is-sellers-disclosure/ | /learn/how-to-handle-seller-disclosures/ | 39 | P1 |
| refi-bad-credit | /learn/refinancing-with-bad-credit/ | /learn/refinancing-with-low-credit-score/ | 21 | P1 |
| buyer-closing-costs | /learn/closing-costs/ | /learn/mortgage-closing-costs/<br>/learn/how-to-budget-for-closing-costs/ | 20 | P1 |
| inspection | /learn/home-inspection-checklist-for-buyers/ | /learn/avoiding-common-home-inspection-pitfalls/ | 19 | P2 |
| tax-law | /learn/impact-of-new-tax-laws-on-homeownership/ | /learn/updates-to-property-tax-laws/ | 0 | P0 |
| gse-updates | /learn/federal-housing-finance-agency-updates/ | /learn/fannie-mae-updates/<br>/learn/freddie-mac-updates/<br>/learn/fannie-mae-and-freddie-mac-stabilizing-housing-market/ | 0 | P0 |
| fha-203k | /learn/benefits-of-fha-203-k-loans/ | /learn/pros-and-cons-of-fha-203-k-loans/ | 0 | P1 |
| fixed-rate | /learn/fixed-rate-mortgages-benefits-and-drawbacks/ | /learn/fixed-rate-mortgage-options/<br>/learn/fixed-rate-mortgage-tips/ | 0 | P1 |
| arm | /learn/adjustable-rate-mortgages-pros-and-cons/ | /learn/adjustable-rate-mortgage-tips/ | 0 | P1 |
| buying-process | /learn/home-buying-process/ | /learn/buying-process/ | 0 | P1 |
| appraisal | /learn/home-appraisal-process/ | /learn/why-home-appraisals-matter/ | 0 | P1 |
| low-appraisal | /learn/how-to-appeal-low-appraisal/ | /learn/what-to-do-if-your-home-doesnt-appraise/ | 0 | P1 |
| negotiation | /learn/how-to-negotiate-house-prices/ | /learn/negotiating-home-purchase/ | 0 | P1 |
| seller-financing | /learn/pros-and-cons-of-seller-financing/ | /learn/negotiating-home-purchase-with-seller-financing/ | 0 | P1 |
| foreclosure | /learn/how-to-buy-foreclosed-home/ | /learn/foreclosure-process-what-home-buyers-should-know/ | 0 | P1 |
| cash-out | /learn/what-is-cash-out-refinance-loan/ | /learn/pros-and-cons-of-cash-out-refinancing/ | 0 | P1 |
| refi-condo | /learn/refinancing-condo/ | /learn/pros-and-cons-of-refinancing-condo/ | 0 | P1 |
| refi-second-home | /learn/refinancing-second-home/ | /learn/tips-for-refinancing-vacation-home/ | 0 | P1 |
| refi-rising-rates | /learn/refinancing-in-rising-rate-environment/ | /learn/should-you-refinance-before-rates-rise/<br>/learn/strategies-for-refinancing-in-competitive-market/ | 0 | P1 |
| credit-score | /learn/whats-good-credit-score-to-buy-house/ | /learn/how-does-my-credit-impact-buying-house/ | 0 | P1 |
| hoa | /learn/buying-home-with-hoa-pros-and-cons/ | /learn/navigating-hoa-regulations/ | 0 | P1 |
| fha-updates | /learn/recent-changes-to-fha-loan-requirements/ | /learn/federal-housing-administration-updates/ | 0 | P1 |
| multi-family | /learn/buying-multi-family-home/ | /learn/investing-in-multi-family-properties/ | 0 | P1 |
| va-buying | /learn/buying-home-with-va-loan/ | /learn/va-loan-tips/ | 0 | P1 |
| seller-proceeds | /learn/what-is-sellers-net-sheet/ | /learn/finances-of-selling/ | 0 | P1 |
| sellers-market-offer | /learn/how-to-create-competitive-offer/ | /learn/how-to-win-house-in-sellers-market/<br>/learn/navigating-sellers-market-as-buyer/<br>/learn/strategies-for-buying-in-competitive-market/<br>/learn/how-to-navigate-hot-housing-market/ | 0 | P2 |
| bidding-war | /learn/how-to-handle-bidding-war/ | /learn/navigating-multiple-offer-situations/ | 0 | P2 |
| co-buying | /learn/co-buying-home-with-family-or-friends/ | /learn/pros-and-cons-of-co-buying-with-friends/ | 0 | P2 |
| fixer-investing | /learn/investing-in-fixer-uppers/ | /learn/buying-distressed-properties/ | 0 | P2 |
| new-construction | /learn/new-home-construction/ | /learn/benefits-of-buying-newly-constructed-home/ | 0 | P2 |
| build-cost | /learn/cost-of-building-house-is-it-worth/ | /learn/building-home-on-budget-tips-and-tricks/ | 0 | P2 |
| seller-concessions | /learn/seller-concessions-what-are-they/ | /learn/how-to-negotiate-seller-concessions/ | 0 | P2 |
| choose-agent | /learn/how-to-choose-real-estate-agent/ | /learn/how-to-find-real-estate-agent/<br>/learn/how-to-interview-real-estate-agent/ | 0 | P2 |
| staging | /learn/impact-of-home-staging-on-sale-price/ | /learn/benefits-of-hiring-professional-stager/ | 0 | P2 |
| pricing | /learn/pricing-home-for-sale/ | /learn/how-to-price-your-home-for-quick-sale/ | 0 | P2 |
| movers | /learn/moving-and-settling/ | /learn/hiring-movers/<br>/learn/how-to-hire-movers-questions-to-ask/ | 0 | P2 |
| housing-law | /learn/housing-legislation/ | /learn/housing-policy/<br>/learn/housing-policy-changes/<br>/learn/impact-of-new-housing-laws-on-home-buyers/ | 0 | P2 |
| zoning | /learn/zoning-regulations/ | /learn/impact-of-zoning-laws-on-home-value/ | 0 | P2 |
| market-update | /learn/market-update/ | /learn/spring-housing-market-trends/ | 0 | P2 |
| rates-and-prices | /learn/impact-of-interest-rates-on-home-prices/ | /learn/impact-of-mortgage-rate-volatility-on-housing/ | 0 | P2 |
| cash-flow | /learn/cash-flow-in-real-estate/ | /learn/evaluating-propertys-cash-flow-potential/ | 0 | P2 |
| new-investor | /learn/how-to-become-real-estate-investor/ | /learn/real-estate-investment-strategies-for-beginners/<br>/learn/tips-for-new-real-estate-investors/ | 0 | P2 |
| co-op | /learn/condo-vs-co-op-similarities-and-differences/ | /learn/pros-and-cons-of-living-in-co-op/<br>/learn/navigating-co-op-board-approvals/ | 0 | P2 |
| seasonal | /learn/seasonal-home-maintenance-checklist/ | /learn/winterizing-your-home/ | 0 | P2 |
| energy-upgrades | /learn/energy-efficient-home-upgrades/ | /learn/how-to-evaluate-homes-energy-efficiency/ | 0 | P2 |
| selling-steps | /learn/selling-process/ | /learn/selling-your-house/ | 0 | P2 |

---

## 7. Prune and noindex list, and hub verdict

### Prune and noindex

These are drift for a Michigan mortgage broker, with no meaningful demand in the top 1,000 queries. 301 each to the nearest relevant hub or guide, then remove it from hub listings and the sitemap. Drift pages that do earn impressions are kept with no further investment, or re-angled (energy audit, kitchen remodel, garage conversion, foundation problems, student housing, multigenerational housing). `definition-of-mansion-what-makes-house-mansion` stays: it is the only off-topic page that has earned a click, at positions 6.6 to 8.3. Drift that sits inside a merge group (movers, staging, co-op, HOA rules, winterizing) is handled in section 6.

| URL | Action | 301 target | Mapped impr |
|---|---|---|---|
| /learn/buying-home-in-gated-community/ | PRUNE | /learn/buying-home-with-hoa-pros-and-cons/ | 0 |
| /learn/buying-home-with-pool/ | PRUNE | /learn/what-to-look-for-when-buying-house/ | 0 |
| /learn/leaving-old-home-emotional-considerations/ | PRUNE | /learn/moving-and-settling/ | 0 |
| /learn/virtual-home-tours-how-they-work/ | PRUNE | /learn/finding-home/ | 0 |
| /learn/accessibility-features-in-modern-homes/ | PRUNE | /learn/buying-home-for-aging-in-place/ | 0 |
| /learn/addressing-mold-issues-in-your-home/ | PRUNE | /learn/how-to-read-home-inspection-report/ | 0 |
| /learn/benefits-of-smart-irrigation-systems/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/buying-cul-de-sac-house-pros-and-cons/ | PRUNE | /learn/home-types-and-living/ | 0 |
| /learn/choosing-energy-efficient-windows/ | PRUNE | /learn/energy-efficient-home-upgrades/ | 0 |
| /learn/coping-with-smoke-damage/ | PRUNE | /learn/evaluating-home-insurance-options/ | 0 |
| /learn/craftsman-houses-history-and-features/ | PRUNE | /learn/different-types-of-houses-by-structure-and-style/ | 0 |
| /learn/creating-functional-mudroom/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/creating-home-office-space/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/creating-minimalist-home/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/creating-sustainable-home/ | PRUNE | /learn/energy-efficient-home-upgrades/ | 0 |
| /learn/design-ideas-for-modern-home/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/diy-home-renovation-projects/ | PRUNE | /learn/renovation-ideas-to-boost-home-value/ | 0 |
| /learn/diy-home-security-upgrades/ | PRUNE | /learn/insurance-and-protection/ | 0 |
| /learn/eco-friendly-roofing-options/ | PRUNE | /learn/energy-efficient-home-upgrades/ | 0 |
| /learn/fire-safety-tips-for-homeowners/ | PRUNE | /learn/insurance-and-protection/ | 0 |
| /learn/home-automation-systems/ | PRUNE | /learn/home-improvement/ | 0 |
| /learn/home-renovation-permits-what-you-need/ | PRUNE | /learn/what-is-renovation-loan/ | 0 |
| /learn/how-to-address-water-damage-in-your-home/ | PRUNE | /learn/homeowners-insurance-deductibles/ | 58 |
| /learn/maintaining-homes-roof-tips-and-tricks/ | PRUNE | /learn/home-maintenance/ | 18 |
| /learn/benefits-of-investing-in-emerging-markets/ | PRUNE | /learn/how-to-evaluate-real-estate-market-for-investment/ | 0 |
| /learn/benefits-of-investing-in-green-housing-markets/ | PRUNE | /learn/investor-market-analysis/ | 0 |
| /learn/benefits-of-investing-in-mixed-use-developments/ | PRUNE | /learn/investment-property-types/ | 24 |
| /learn/benefits-of-investing-in-senior-housing-markets/ | PRUNE | /learn/investment-property-types/ | 0 |
| /learn/commercial-real-estate-investing/ | PRUNE | /learn/investment-property-types/ | 0 |
| /learn/dealing-with-multiple-offers-from-tenants/ | PRUNE | /learn/rental-management/ | 0 |
| /learn/real-estate-crowdfunding/ | NOINDEX | /learn/investing-basics/ (or noindex,follow) | 395 |
| /learn/real-estate-investment-trusts-reits/ | PRUNE | /learn/investing-basics/ | 0 |
| /learn/tips-for-managing-multiple-rental-properties/ | PRUNE | /learn/rental-management/ | 0 |
| /learn/economic-impacts-of-housing-shortages/ | PRUNE | /learn/housing-market-trends/ | 0 |
| /learn/recent-trends-in-mortgage-delinquencies/ | PRUNE | /learn/housing-market-trends/ | 0 |
| /learn/urban-vs-suburban-housing-markets/ | PRUNE | /learn/how-to-research-a-city-before-you-move/ | 0 |
| /learn/decluttering-your-home-before-selling/ | PRUNE | /learn/pricing-and-preparing/ | 0 |
| /learn/how-to-improve-your-homes-curb-appeal/ | PRUNE | /learn/pricing-and-preparing/ | 0 |
| /learn/how-to-market-your-home-online/ | PRUNE | /learn/selling-strategies/ | 0 |

### Hub and landing verdict

**Verdict: keep the hub system and change what it prioritizes. Do not rebuild it.**

1. **Structure.** There are 8 subject hubs, 39 sub-hubs and the glossary. Every hub links all of its children on a single page, with no pagination, no orphans, index,follow, self-canonicals and sitemap inclusion. Children range from 1 (`mortgage-terminology`) to 51 (`buying-strategies`), and subject hubs link 34 to 112 learn URLs.
2. **Intros.** 39 hubs open with an answer-first paragraph, for example the FHA hub: "An FHA loan is a government-insured mortgage that lets you buy with as little as 3.5% down and a 580 credit score…". These 9 have no intro before the first H2, so add a 40-60 word intro to each: `home-improvement`, `investing-basics`, `investment-property-types`, `investor-market-analysis`, `pricing-and-preparing`, `refinance-situations`, `selling-situations`, `selling-strategies`, `specialty-financing`.
3. **Headings.** 47 hubs use "More on {subject}" and "Featured resources" as H2s, which are navigation rather than content. Demote them to styled `<p>` or `<div>` labels. The glossary's letter H2s are acceptable for a DefinedTermSet page.
4. **Taxonomy fixes.**
   - Merge `loan-comparisons` (2 children; H1 "Mortgage loan comparisons: Which loan type is right for you?") into `loan-types` (H1 "Types of mortgage loans and how to choose the right one").
   - Give `financing-investments` real children: DSCR, portfolio and investment-property loans.
   - Re-file `mortgage-terminology` as an article.
   - Fold `hiring-movers` and `how-to-hire-movers-questions-to-ask` into `moving-and-settling`.
   - Grow the core sub-hubs (FHA, VA, USDA and assistance, conventional, first-time buyers) with the new guides in section 9 until each has 8 to 12 children.
5. **Internal links.** Each program hub should link its product page above the fold (`/product-loans/fha-loans/`, `/product-loans/va-loans/`, `/product-loans/usda-loans/`, `/purchase/down-payment-assistance/`), and each product page should link back to the hub as "How FHA loans work". This splits the informational and commercial intent cleanly.
6. **`/learn/` landing page.**
   - The count "421 guides across 8 subjects" is correct today (421 standard guides). Update it to about 297 after the merges and prunes.
   - Move "Loan types & programs" to the first subject card.
   - Change Home buying's "Start here" picks to preapproval, the new "how much house can I afford in Michigan" guide and the new MSHDA DPA guide.
   - Add a "Michigan essentials" block linking PRE/homestead, uncapping, transfer tax, MSHDA and land contracts.
   - Add 4-5 FAQ questions with FAQPage schema.
   - Lengthen the meta (117 characters) to 140-160. Exact replacement: `Plain-English mortgage guides from a Michigan broker: loan programs, MSHDA down payment help, property taxes and refinancing, each with sources. NMLS #2041154.`
   - Title: replace "Learn: Mortgage And Home Buying Guides | Align Lending" with `Michigan Mortgage and Home Buying Guides | Align Lending` (55 characters).

---

## 8. Legacy root-slug posts (96)

- 95 of the 96 legacy posts 301 in a single hop into `/learn/`. 1 leaves `/learn/`: `/mortgage-services-in-michigan/` → `/mortgage-michigan/`, which is correct.
- **9 land on a category hub instead of an equivalent article**, so they redirect somewhere other than a matching guide:
  - `/buy-house-12-steps/`, `/first-time-home-buyer-playbook-2025/` and `/first-time-home-buyers-2025-2/` → `/learn/first-time-home-buyers/`;
  - `/home-buying-process-2025/`, `/modern-home-buying-guide-2025/` and `/modern-homebuyers-blueprint-property-acquisition/` → `/learn/home-buying-process/`;
  - `/conventional-loans-guide/` → `/learn/conventional-loans/`;
  - `/mortgage-basics-guide/` → `/learn/mortgage-basics/`;
  - `/moving-tips-home-buyers/` → `/learn/moving-and-settling/`.

  These are acceptable for retired guides. If any has backlinks, point it at the closest article instead.
- **Many-to-one consolidations:** `/hoa-fees-guide/` and `/hoa-fees-guide-2/` → `/learn/homeowner-association-fees/`, and `/buy-vacation-home/` and `/buy-second-home/` → `/learn/buying-second-home/`.
- **15 must be repointed when this plan ships**, because their current targets are being merged or pruned. Examples: `/win-house-sellers-market/` → `/learn/how-to-create-competitive-offer/`, `/lease-option-agreements/` → `/learn/lease-to-own-vs-rent-to-own-whats/`, `/negotiate-home-purchase/` → `/learn/how-to-negotiate-house-prices/`, `/hiring-movers-guide/` → `/learn/moving-and-settling/`. All 15 are rows marked `UPDATE 301` in the CSV.
- One internal link still points at a redirect: `/mortgage-lender-springfield-township-mi/` links `/learn/homestead-exemption/`, which 301s to `/learn/homestead-exemption-benefits-and-filing-guide/`. Update the link.

---

## 9. Topical coverage map: what a Michigan mortgage broker's library needs

Status key:
- **Covered well:** a dedicated, strong page exists.
- **Covered weakly:** the topic exists only inside another page, is duplicated across pages, is generic rather than Michigan-specific, or has a page that does not rank (position worse than 40 on its head queries).
- **Missing:** no page owns the topic.

Demand figures come from `gsc-queries-top1000.csv` (impressions over 90 days). "None in top 1,000" means the GSC and competitor teammates should size the demand. It does not mean there is none.

| Area | Topic | Status | Where it lives now | GSC demand (top 1,000) | Action | Pri |
|---|---|---|---|---|---|---|
| Loan programs | FHA basics and requirements | Covered well | /learn/fha-loans/ (hub), /learn/fha-loan-tips/ | "michigan fha loans" pos 12.2; "fha loans" pos 4.0 | Keep; add a "FHA requirements in Michigan" FAQ answer and a link to /product-loans/fha-loans/ above the fold | P2 |
| Loan programs | FHA loan limits (Michigan, 2027) | Covered well; stale on Jan 1 | /learn/fha-loan-limits/, /loan-limits/ (tool) | 39 queries, 2,164 impr, wpos 44.8 | REFRESH with CY2027 limits (section 5) | P0 |
| Loan programs | FHA MIP: 2027 premiums and when MIP ends | Covered weakly (inside mortgage-insurance) | /learn/mortgage-insurance/ | "fha pmi removal calculator" pos 7.0 | NEW guide | P1 |
| Loan programs | FHA vs. conventional for Michigan buyers | Covered weakly (one H2 in the FHA hub) | /learn/fha-loans/ | None in top 1,000 | NEW guide (compare stage) | P1 |
| Loan programs | FHA 203(k) renovation | Covered (duplicated) | /learn/benefits-of-fha-203-k-loans/ + pros-and-cons twin | None in top 1,000 | MERGE twin | P1 |
| Loan programs | VA eligibility, COE and requirements | Covered, not ranking | /learn/how-to-qualify-for-va-loan/ | 13 queries, 584 impr, wpos 61.2 | REFRESH (title and first-answer list) | P1 |
| Loan programs | VA funding fee (2027 chart, exemptions) | Missing (calculator only; mentioned on 109 pages) | /va-funding-fee-calculator/ | 9 queries, 519 impr, wpos 33.6 | NEW guide | P1 |
| Loan programs | VA benefits for disabled veterans incl. Michigan property tax exemption (MCL 211.7b) | Missing (mentions on 26 pages) | none | 8 queries, 211 impr, wpos 45.4 | NEW guide | P1 |
| Loan programs | VA entitlement, second VA loan, partial-entitlement limits | Covered weakly (inside va-loan-tips, which is being merged) | /learn/va-loan-tips/ | "va supplemental loan" 26, "va minimum loan amount" 39 | NEW guide | P1 |
| Loan programs | VA IRRRL (streamline) | Covered, not ranking | /learn/va-interest-rate-reduction-refinance-loans/ | 32 queries, 980 impr, wpos 73.1 | REFRESH | P1 |
| Loan programs | VA cash-out refinance | Covered weakly | /learn/benefits-of-refinancing-va-loan/ | "va cash out refinance after forbearance" pos 26.8 | REFRESH existing page around VA cash-out rules | P2 |
| Loan programs | VA construction | Covered well | /learn/benefits-of-va-construction-loans/ | 507 impr; one query at pos 6.0 | Keep | P2 |
| Loan programs | USDA loan basics | Covered, under-ranking | /learn/usda-loan-basics/ | 8,438 impr, wpos 35.3 | REFRESH | P0 |
| Loan programs | USDA income limits in Michigan by county (FY2027) | Covered weakly (inside basics) | /learn/usda-loan-basics/ | 19 queries, 722 impr, wpos 29.1 | NEW guide | P0 |
| Loan programs | USDA eligible areas in Michigan (map, address rules, examples) | Covered weakly (inside basics + tool) | /learn/usda-loan-basics/, /usda-eligibility-check/ | 37 eligibility queries, 2,263 impr, wpos 28.9 ("usda eligibility" 576 at pos 11.1) | NEW guide | P0 |
| Loan programs | USDA refinance | Covered, not ranking | /learn/what-is-usda-streamline-refinance/ | 669 impr, wpos 64.5 | REFRESH title to the dominant query | P1 |
| Loan programs | Conventional loans + 2027 conforming limit in Michigan | Covered; limit goes stale | /learn/conventional-loans/, /learn/federal-housing-finance-agency-updates/ | "conventional loans" 80 impr at pos 87.6 | REFRESH + NEW short "2027 conforming loan limits in Michigan" answer page that links /loan-limits/ | P0 |
| Loan programs | HomeReady, Home Possible, Conventional 97 | Covered well | 3 dedicated articles | HomeReady queries pos 6.5-9.8 | Keep; January income-lookup refresh | P2 |
| Loan programs | PMI and PMI removal | Covered well | /learn/mortgage-insurance/, /learn/refinancing-to-remove-mortgage-insurance/ | PMI queries pos 7-22 | Keep | P2 |
| Loan programs | Jumbo loans in Michigan | Covered, needs a Michigan lead | /learn/how-to-qualify-for-jumbo-loan/ (+ tips twin) | 17 queries, 828 impr, wpos 41.4 | REFRESH + MERGE twin | P0 |
| Loan programs | Bank-statement / self-employed non-QM | Covered well | /learn/non-qm-loans-for-self-employed-borrowers/ | non-QM family 545 impr, wpos 37.4 | Keep; link the product pages | P2 |
| Loan programs | DSCR loans (qualify on rent) | Missing (product page only; DSCR mentioned on 85 pages) | /product-loans/dscr-loans-michigan/ | 3 queries, 528 impr, wpos 41.2 | NEW guide | P1 |
| Loan programs | Asset-depletion loans | Missing (product page only) | /product-loans/asset-based-income-loans/ | "michigan asset depletion loans" 55 at pos 37.2 | NEW guide | P2 |
| Loan programs | 1099 and P&L-only loans | Covered weakly | /learn/how-to-buy-home-as-freelancer/ | 1099/freelancer queries 93 impr | REFRESH freelancer article to cover 1099 and P&L-only | P2 |
| Loan programs | Manufactured homes in Michigan (real vs. personal property, financing) | Covered weakly | /learn/manufactured-homes-pros-and-cons/, /learn/refinancing-manufactured-home/ | 48 impr, pos 30-42 | NEW guide | P1 |
| Loan programs | Condo financing (warrantable vs. non-warrantable) | Covered well | /learn/condominium-financing/ | "michigan condo loans" pos 28.8 | Keep | P2 |
| Loan programs | Construction and renovation loans | Covered (duplicated) | construction-loan-guide, what-is-renovation-loan, HomeStyle, 203(k) | 19 construction queries, 626 impr | MERGE duplicates | P1 |
| Loan programs | Reverse mortgage / HECM (2027 limit, proprietary) | Covered; sub-topics weak | /learn/reverse-mortgages-how-they-work/ | 12 queries, 274 impr, wpos 61.5 | REFRESH (2027 HECM limit, proprietary section) | P1 |
| Loan programs | Physician loans | Covered well | /learn/physician-mortgage-loans/ | 106 impr | Keep | P2 |
| Loan programs | Buy before you sell (bridge vs. HELOC vs. contingent offer) | Covered weakly | /learn/bridge-loans/, /purchase/buy-before-you-sell/ | "michigan bridge loan mortgage" pos 2.7 | NEW guide | P1 |
| Loan programs | Land contracts in Michigan | Covered well (concise) | /learn/michigan-land-contract/ | 145 impr | REFRESH title | P1 |
| Loan programs | Refinancing out of a land contract | Covered weakly (one section) | /learn/michigan-land-contract/ | None in top 1,000 | NEW guide | P1 |
| Loan programs | Lease to own / rent to own | Covered (3 duplicates) | /learn/lease-to-own-vs-rent-to-own-whats/ | 15,903 impr, wpos 58.9 | REFRESH + MERGE | P0 |
| Michigan essentials | MSHDA MI Home Loan and MI 10K DPA (2027 limits, how to apply) | Covered weakly (MSHDA on 162 pages, no dedicated guide) | /learn/first-time-home-buyer-grants-and-programs/, /purchase/down-payment-assistance/ | None in top 1,000 (new topic for the site) | NEW guide | P0 |
| Michigan essentials | Local DPA: Detroit, Oakland, Wayne, Kent, Flint, Grand Rapids, Lansing | Missing (Detroit DPA on 0 pages) | none | None in top 1,000 | NEW guide (or one per metro) | P1 |
| Michigan essentials | Michigan first-time buyer guide | Covered weakly (generic hub with a Michigan section; 4 children) | /learn/first-time-home-buyers/ | "first time home buyer loans with 0 down" pos 11.1 | EXPAND sub-hub with the Michigan DPA children | P1 |
| Michigan essentials | Principal Residence Exemption (homestead) | Covered, generic title | /learn/homestead-exemption-benefits-and-filing-guide/ | "what is homestead exemption" pos 12.2 | REFRESH to Michigan PRE | P1 |
| Michigan essentials | Taxable value and uncapping | Covered well | /learn/michigan-taxable-value/, /research/michigan-property-tax-uncapping-study/ | "property tax uncapping michigan" pos 43.1 | Keep | P2 |
| Michigan essentials | Estimating property taxes on a Michigan home you are buying | Covered weakly (calculator + assessments article) | /michigan-property-tax-calculator/, /learn/property-tax-assessments-how-they-work/ | "michigan property tax calculator" 77 at pos 48.8 | NEW guide | P1 |
| Michigan essentials | Homestead Property Tax Credit (MI-1040CR) | Covered weakly (mentions on 22 pages) | none dedicated | None in top 1,000 | NEW short answer page | P2 |
| Michigan essentials | Transfer tax | Covered well | /learn/michigan-transfer-tax/, /michigan-transfer-tax-calculator/ | 168 impr (tool intent) | Keep | P2 |
| Michigan essentials | Closing costs and who pays what in Michigan | Covered (duplicated) | /learn/closing-costs/ + 2 twins | "closing costs checklist" 20 | MERGE twins; add a Michigan who-pays table | P1 |
| Michigan essentials | Seller disclosure, well/septic time-of-sale, inspections | Covered well | /learn/what-is-sellers-disclosure/, septic and well guides | seller disclosure pos 38-51 | Keep (merge disclosure twin) | P2 |
| Michigan essentials | Michigan home-buying laws overview | Covered weakly (generic multi-state) | /learn/state-specific-home-buying-regulations/ | None in top 1,000 | RE-ANGLE | P1 |
| Qualifying | Credit score needed by loan type | Covered (duplicated) | /learn/whats-good-credit-score-to-buy-house/ | credit family 835 impr | MERGE + REFRESH | P1 |
| Qualifying | DTI limits by loan type | Covered, not ranking | /learn/debt-to-income-ratio-dti/ | 9 queries, 566 impr, wpos 27.9 | REFRESH | P1 |
| Qualifying | Buying after bankruptcy, foreclosure or short sale (waiting periods) | Missing (refinance-only page exists) | /learn/refinancing-after-bankruptcy/ | "can i refinance my mortgage after chapter 7" 24 | NEW guide | P1 |
| Qualifying | How lenders count income (hourly, overtime, bonus, new job, gaps) | Missing (mentions only) | none | None in top 1,000 | NEW guide | P1 |
| Qualifying | Preapproval documents checklist | Covered weakly | /learn/prequalified-vs-preapproved-whats-difference/ | None in top 1,000 | NEW guide | P2 |
| Qualifying | What not to do between preapproval and closing | Missing (2 passing mentions) | none | None in top 1,000 | NEW guide | P2 |
| Qualifying | Co-borrowers, gift funds, 401(k), student loans | Covered well | dedicated articles | None in top 1,000 | Keep | P2 |
| Process and costs | How much house can I afford in Michigan | Missing (calculator only; phrase on 1 page) | /home-affordability-calculator/ | None in top 1,000 for this exact intent | NEW guide | P1 |
| Process and costs | Preapproval | Covered well | /learn/importance-of-mortgage-preapproval/ | "michigan mortgage pre-approval" pos 1.9 | Keep | P2 |
| Process and costs | Loan process and timeline | Covered, not ranking; overlaps /mortgage-process/ | /learn/mortgage-loan-process/, /learn/how-fast-can-a-mortgage-close/ | 6 queries, 335 impr, wpos 66.0 | REFRESH and differentiate from /mortgage-process/ | P1 |
| Process and costs | Closing process | Covered (duplicated), not ranking | /learn/home-closing-process/ | 5 queries, 102 impr, wpos 87.0 | MERGE + REFRESH | P1 |
| Process and costs | Appraisal and low appraisal | Covered (duplicated) | /learn/home-appraisal-process/, /learn/how-to-appeal-low-appraisal/ | drive-by appraisal pos 29-43 | MERGE twins | P1 |
| Process and costs | Loan Estimate and Closing Disclosure | Covered (duplicates a tool page) | /compare-loan-estimates/, /learn/how-to-compare-loan-estimates/ | "how to compare loan estimates" 25 at pos 37.2 | MERGE into the tool page | P1 |
| Process and costs | Rate lock, points, buydowns | Covered (duplicated) | /learn/what-is-mortgage-rate-lock/, /learn/mortgage-rate-buydowns/ | 15 queries, 422 impr, wpos 33.6 | MERGE rate-lock twin | P1 |
| Process and costs | Escrow accounts | Covered well | /learn/mortgage-escrow-accounts/ | escrow balance queries pos 7.7-8.5 | REFRESH snippet answer | P1 |
| Refinance and equity | When to refinance / break-even | Covered well | /learn/refinancing-guide/, /refinance/break-even-review/ | None in top 1,000 | Keep | P2 |
| Refinance and equity | Cash-out refinance | Covered (duplicated) | /learn/what-is-cash-out-refinance-loan/ | 4 queries, 170 impr, wpos 40.5 | MERGE twin | P1 |
| Refinance and equity | HELOC and home equity loans | Covered, not ranking | /learn/home-equity-line-of-credit-heloc/, /learn/home-equity-loans-pros-and-cons/ | 24 queries, 992 impr, wpos 57.0 | REFRESH | P1 |
| Refinance and equity | HELOC vs. home equity loan vs. cash-out | Covered weakly (money sub-page, not Learn) | /refinance/cash-out-vs-home-equity/ | "home equity vs cash-out refinance" 23 at pos 81.1 | NEW guide | P1 |
| Refinance and equity | Second mortgages | Covered, not ranking | /learn/second-mortgages/ | 9 queries, 374 impr, wpos 82.9 | REFRESH | P2 |
| Refinance and equity | Refinancing to buy out an ex-spouse (divorce) | Missing | none (selling-during-divorce exists) | divorce queries 70 impr (selling side) | NEW guide | P1 |
| Refinance and equity | How soon can you refinance (seasoning by loan type) | Covered weakly (one H2) | /learn/refinancing-eligibility/ | None in top 1,000 | NEW short answer page | P2 |
| Refinance and equity | FHA, VA and USDA streamlines | Covered well | 4 articles | see VA IRRRL and USDA rows | Keep | P2 |
| Investor financing | Investment property loans in Michigan | Covered, not ranking | /learn/buying-home-as-investment-property/ | 395 impr, wpos 57.3 | REFRESH | P1 |
| Investor financing | House hacking with FHA 2-4 units | Covered (duplicated) | /learn/buying-multi-family-home/ | None in top 1,000 | MERGE twin | P1 |
| Investor financing | Short-term rental financing and Michigan local rules | Covered well | /learn/investing-in-short-term-rentals/, /learn/navigating-short-term-rental-regulations/ | "short term rental regulations" pos 18.4 | Keep | P2 |
| Rates and market | How rates are set; why Align does not publish rates | Covered well | /learn/how-rates-work/, /why-we-dont-publish-rates/ | None in top 1,000 | Keep | P2 |
| Rates and market | Michigan housing market data (no predictions) | Covered weakly (national framing) | /learn/market-update/, /research/michigan-mortgage-market-report/ | "michigan mortgage rate trends" pos 11.8 | RE-ANGLE market-update to monthly Michigan data | P2 |
| Broker value | Broker vs. bank vs. credit union | Covered well | /learn/benefits-of-working-with-mortgage-broker/ | "michigan mortgage broker vs bank" pos 1.0 | Keep | P2 |
| Broker value | How mortgage brokers are paid (lender-paid vs. borrower-paid) | Covered weakly | /learn/benefits-of-working-with-mortgage-broker/, /learn/rocket-mortgage-vs-mortgage-broker/ | "is rocket mortgage a broker" pos 5.8 | NEW short answer page | P2 |

**Coverage tally (74 core topics):** 20 covered well; 44 covered weakly (duplicated, generic, buried inside another page, or not ranking); 10 missing. The weak and missing rows are "what we have left". The weak rows are mostly fixed by the merges and refreshes above. The missing rows need new guides.

### New guides to commission (what is left), in priority order

Every guide follows the editorial rules: Samantha byline, Sources list, no rates, `[VERIFY: …]` on every program figure, and `[NEEDS SAMANTHA QUOTE: …]` where her experience adds value. The target format is the concise Michigan glossary answer: a short-answer box, 1,500-2,500 words, a worked Michigan example and an FAQ. The 5,000-word template is not the target. The GSC and competitor teammates should confirm volumes before final sequencing.

| # | Pri | Working title | Suggested URL | Hub | Why (evidence) |
|---|---|---|---|---|---|
| 1 | P0 | MSHDA MI Home Loan and MI 10K DPA in 2027: limits, income caps, how to apply | /learn/mshda-mi-home-loan-mi-10k-dpa/ | USDA & assistance | Core Michigan program with no owner page despite 162 mentions; links /purchase/down-payment-assistance/ |
| 2 | P0 | USDA income limits in Michigan by county (FY2027) | /learn/usda-income-limits-michigan/ | USDA & assistance | 722 impr, wpos 29.1 |
| 3 | P0 | Is my Michigan address USDA eligible? Map rules and examples | /learn/usda-eligible-areas-michigan/ | USDA & assistance | 2,263 impr on eligibility queries; "usda eligibility" pos 11.1; links /usda-eligibility-check/ |
| 4 | P0 | 2027 conforming loan limits in Michigan (short answer page) | /learn/conforming-loan-limits-michigan/ | Conventional | Lets 100+ pages link out instead of restating $832,750; publish the day FHFA announces |
| 5 | P1 | VA funding fee 2027: chart, exemptions and how it is paid | /learn/va-funding-fee/ | VA | 519 impr, wpos 33.6; links /va-funding-fee-calculator/ |
| 6 | P1 | VA loan benefits for disabled veterans in Michigan (fee exemption and MCL 211.7b property tax exemption) | /learn/va-benefits-disabled-veterans-michigan/ | VA | 211 impr; unique Michigan angle |
| 7 | P1 | VA entitlement explained: full, remaining and second VA loans | /learn/va-entitlement-second-va-loan/ | VA | Replaces the merged va-loan-tips content |
| 8 | P1 | DSCR loans in Michigan: qualifying on rental income | /learn/dscr-loans-michigan/ | Jumbo & non-QM / Financing investments | 528 impr, wpos 41.2 (product page only today) |
| 9 | P1 | FHA MIP in 2027: upfront and annual premiums and when MIP ends | /learn/fha-mip/ | FHA | Pairs with /pmi-removal-calculator/ |
| 10 | P1 | FHA vs. conventional loan for Michigan buyers | /learn/fha-vs-conventional/ | FHA / Loan types | High-intent compare page missing |
| 11 | P1 | How much house can I afford in Michigan? Income examples by county | /learn/how-much-house-can-i-afford-michigan/ | Preparing to buy | Pairs with /home-affordability-calculator/; [VERIFY] county medians |
| 12 | P1 | Buying after bankruptcy, foreclosure or short sale: waiting periods by loan type | /learn/buying-home-after-bankruptcy-foreclosure/ | Credit & qualifying | Only a refinance version exists |
| 13 | P1 | How lenders count your income: hourly, overtime, bonus, new job and gaps | /learn/how-lenders-calculate-income/ | Credit & qualifying | Missing qualifying basic |
| 14 | P1 | Refinancing out of a land contract in Michigan | /learn/refinance-land-contract-michigan/ | Specialty financing | Michigan-specific broker topic; links the land contract page |
| 15 | P1 | Buying before you sell in Michigan: bridge loan vs. HELOC vs. contingent offer | /learn/buy-before-you-sell-michigan/ | Specialty financing | "michigan bridge loan mortgage" pos 2.7; links /purchase/buy-before-you-sell/ |
| 16 | P1 | HELOC vs. home equity loan vs. cash-out refinance | /learn/heloc-vs-home-equity-loan-vs-cash-out/ | Home equity | Learn version of /refinance/cash-out-vs-home-equity/ |
| 17 | P1 | Refinancing to buy out an ex-spouse in Michigan | /learn/refinance-divorce-buyout-michigan/ | Refinance situations | Common refinance trigger; no page |
| 18 | P1 | Down payment assistance by Michigan county and city (Detroit, Oakland, Wayne, Kent, Genesee, Ingham) | /learn/michigan-down-payment-assistance-by-county/ | USDA & assistance | Local programs absent; [VERIFY] each program |
| 19 | P1 | Financing a manufactured home in Michigan (real vs. personal property) | /learn/manufactured-home-financing-michigan/ | Home types / Specialty | Product page exists; Learn support missing |
| 20 | P1 | How to estimate property taxes on a Michigan home you are buying | /learn/estimate-michigan-property-taxes-when-buying/ | Taxes & money | Uses uncapping + millage; links /michigan-property-tax-calculator/ |
| 21 | P2 | Asset-depletion mortgages: qualifying on savings | /learn/asset-depletion-mortgage/ | Jumbo & non-QM | "michigan asset depletion loans" pos 37.2 |
| 22 | P2 | Preapproval documents checklist | /learn/mortgage-preapproval-documents-checklist/ | Preparing to buy | Supports /purchase/mortgage-readiness-review/ |
| 23 | P2 | What not to do between preapproval and closing | /learn/what-not-to-do-before-closing/ | Home buying process | Classic gap |
| 24 | P2 | How soon can you refinance? Seasoning by loan type | /learn/how-soon-can-you-refinance/ | Refinancing guide | Short answer page |
| 25 | P2 | Michigan Homestead Property Tax Credit (MI-1040CR) | /learn/michigan-homestead-property-tax-credit/ | Taxes & money | Short answer page |
| 26 | P2 | How mortgage brokers are paid | /learn/how-mortgage-brokers-get-paid/ | How mortgages work | Supports broker-vs-bank and Rocket comparison pages |

---

## 10. Method, caveats and notes for other teams

- **Inventory.** The inventory covers the 473 live `/learn/` URLs: the brief's 471 `type=learn` plus `/learn/fha-loan-limits/` and `/learn/how-to-compare-loan-estimates/`, which the crawl typed as `calculator`. Hubs were identified from the breadcrumb and from having no Sources section. Clusters, stage (learn, compare or decide) and relevance (core, adjacent or drift) were assigned by rules plus manual review of all 424 titles and H1s, and are visible row by row in the CSV.
- **GSC mapping is inferred.** The DataWise `queries` action returns no page dimension, so each query was routed by rule: brand, local, money page, tool, informational, out-of-state or noise. Informational queries were mapped to the single best Learn article; tool, money and local queries were not credited to articles. Per-article `gsc_impr`, `gsc_clicks` and `gsc_pos` are therefore lower-bound estimates. The top 1,000 queries hold 68,632 of the property's about 181K impressions (38%). Treat the numbers as directional. A page-level GSC export (page + query) would confirm the canonical choices.
- **External link status was inconclusive.** 10,557 of 11,643 checks returned a proxy error, and no 404/410 was confirmed. The links team owns this. Learn pages link only government and primary sources (no lender, rate or portal domains found), plus one calendly.com booking link per page.
- **Notes for other teams:**
  - Images: about 2,139 of 2,608 content images on Learn pages lack alt text (images team).
  - `/research/michigan-mortgage-market-report/` is titled "Michigan Mortgage Market Report 2025" and is stale (core pages and consistency team).
  - 419 articles carry a "How Align …" section and a Calendly booking CTA. Keep the CTA vocabulary consistent with the CTA team's findings.
- **Nothing was changed on the live site.** All actions are recommendations, and drafts describing how Align works need Align's approval.

---

## Auditor corrections

*Added by the independent content auditor, 2026-11-15. Full detail: `08-audit/audit-content.md`; exact replacement text: `08-audit/corrections-content.csv`. Verdict: **PASS WITH CORRECTIONS**.*

**Confirmed by recomputation:** 424 articles and 49 hubs; median 5,604 words (range 1,285–6,511); learn-sitemap lastmod 2026-10-11 to 2026-11-14; 50,180 mapped impressions and 4 clicks at position 47; "lease to own" 15,242 @59.8 = 22.2% of top-1,000 impressions (re-queried in DataWise); 68 drift; 61 groups / 87 merges; 38 prunes; $832,750 / $541,287 / $1,249,125 on 123 / 54 / 73 Learn pages; no named reviewer; the "No rate quotes, no predictions" conflict on `housing-market-outlook`.

**Refuted:**
1. "Sourced Samantha quote … on only 5 of 424". Verbatim quote-bank quotes appear on **142 of 424** articles. The real issue is repetition ("only works when nothing goes wrong" on 33 pages, "somebody else's tax bill" on 27). Re-scope finding 1's fix: add `[NEEDS SAMANTHA QUOTE: topic]` only to the **26** top-40 impression articles that have none, and limit each quote to its topic cluster.
2. "`definition-of-mansion…` is the only off-topic page that has earned a click". In GSC page-level data, `benefits-of-investing-in-mixed-use-developments` has 2 clicks and `benefits-of-investing-in-senior-housing-markets` has 1. Change mixed-use to KEEP pending Align's view.
3. Amortization canonical. GSC attributes "amortization" (315 @14.5) to **`/learn/amortization-schedules/`**. Make it the canonical and 301 `mortgage-amortization` into it.

**Corrected:**
- **Program counts.** "20 articles / 27%" holds for the cluster labels, but about 28–32 program-led articles (≈32% of impressions) exist once IRRRL, streamline and program-update guides are counted.
- **Lease to own.** The "3 near-duplicates" overlap in intent, not in text (shingle overlap ≤9%). Its title already leads with the head term.
- **`mortgage-rate-predictions`** becomes a P1 title change only. **`housing-market-outlook`** needs an interim meta and H2 fix now, not in January.
- **Missed P0:** the `/learn/mortgage-news/` meta says "30-year rates near 6.5%".
- **Merge targets.** `fixed-rate-mortgage-options` merges into `/learn/15-year-vs-30-year-mortgage-comparison/`. The market-type canonical needs a three-term title. `crowdfunding` gets a 301 only. Jumbo keeps `how-to-qualify-for-jumbo-loan` as canonical, with the title "Jumbo Loans in Michigan: Requirements and How to Qualify".
- **USDA basics title:** "USDA Loans in Michigan: How Rural Development Loans Work". "Income Limits" would cannibalize new guide #2.
- **New guides to drop or fold:** #3 (USDA eligible areas → the tool), #4 (conforming limit → `/loan-limits/`), #16 (→ `/refinance/cash-out-vs-home-equity/`), #20 (→ the calculator refresh), #22 (→ competitor N1).
- **New guides to re-scope:** #8 DSCR becomes `/learn/how-dscr-loans-work/`, not the money page's query. #6 splits into federal VA benefits and the Michigan exemption. #26 uses the approved `/licensing/` wording.
- **Personal-loan refresh** drops to P2.

**Score adjustments:** E-E-A-T 79 C → **81 B** (corrected first-hand input; crosses the grade boundary, so reconcile). Heading structure 80 B → **78 C**. AI readiness (72) and Title & meta (73) stand.
