# GSC Gap Report: alignlending.com (Google Search Console, plus a Bing plan)

Prepared by the GSC gap analyst (Content team, part 2 of 3). Data pulled 2026-11-15 from DataWise (`sc-domain:alignlending.com`, last synced 2026-11-13). Bing Webmaster data is **not connected**: there are no Bing numbers in this report. Section 7 covers what to export from Bing.

## 1. Summary

- **Impressions are growing, but they are not traffic yet.** Last 90 days: 416 clicks on 181,048 impressions (0.23% CTR), average position 28. The last 30 days brought 134,261 impressions, up 287% on the previous 30 days (34,706), and 241 clicks, up 115% (112). Average position fell from 24.0 to 32.8 at the same time. Google is testing a newly indexed library (the 90 days before that had only 418 impressions) and is showing most of it on page 3 and beyond.
- **Most core demand sits too deep to earn clicks.** Of the 68,975 non-brand, on-topic impressions in our query table, 79.5% rank at position 21 or worse and only 10.1% rank in the top 10. Non-brand queries in the top 10 earned 8 clicks from 10,665 impressions (0.08%).
- **Two pages drove the October to November surge:** `/learn/lease-to-own-vs-rent-to-own-whats/` (14,548 impressions in 90 days, 62% of them in the last 30; the head term "lease to own" alone has 15,242 impressions at position 59.8 and 0 clicks) and `/learn/usda-loan-basics/` (10,182 impressions in 90 days, 96% in the last 30). The USDA query family totals 11,392 impressions and has 0 clicks.
- **The right content often exists, but the wrong page ranks or the page sits on page 2.** "usda eligibility" (576 impressions, position 11.1) lands on the learn article instead of `/usda-eligibility-check/`. Legacy `/mortgage-location/` ZIP URLs still rank for Flint, Wixom and Farmington. Duplicate legacy posts (for example `/well-water-home-value/`, `/hoa-fees-guide-2/`) still collect impressions despite canonicals.
- **True gaps are narrow and specific, not broad.** The site already has 471 `/learn/` URLs; 431 of them are articles of 4,000+ words (median 5,572). GSC shows gaps at the next level down: USDA income limits, DTI, credit, loan limits and 502 Direct; VA IRRRL rules, funding-fee chart, disabled-veteran benefits; FHA DTI and MIP removal; DSCR, bank-statement and portfolio-loan pricing explainers; well and septic rules; jumbo thresholds; and an honest "how to compare Michigan lenders" guide. **30 new posts** cover 7,836 impressions of unanswered demand (section 5.3). **32 refreshes** cover the larger clusters where a page already exists but underperforms.
- **Do first (P0):** fix the USDA meta that promises "subsidized rates as low as 1%" (a rate claim), re-point "usda eligibility" to the tool, apply the 25 title/meta rewrites (section 5.2), 301 the ranking legacy duplicates and ZIP URLs, and publish N01, N02, N20 and N27.

## 2. Data and method

| Item | Detail |
|---|---|
| Source | DataWise `datawise_search_console`, property `7faa6221b18546d9a3c4c6a4fd0ae4ed` (free calls only; no DataForSEO credits used) |
| Overview pulls | `overview` for 90 and 30 days: daily trend, top pages, and "opportunities" (the only output that returns a page per query, 60 queries) |
| Query pulls | `queries`, sorted by impressions, limit 200, offsets 0 to 1,200 (top **1,400** queries), plus 31 targeted `search` pulls: michigan, " mi", near me, broker, lender, fha, "va " (2 pages), usda, refinanc, heloc, first time, down payment, closing cost, credit, property tax, uncap, homestead, transfer tax, pmi, dscr, non qm, self employed, jumbo, condo, manufactured, calculator (2 pages), how, what, can i, should i, vs |
| Combined table | `gsc-queries-full.csv`: **2,968 deduplicated queries, 84,267 impressions, 87 clicks.** That is 47% of the property's 90-day impressions; the rest is anonymized or long-tail queries GSC does not list. |
| Page dimension | The `queries` endpoint does not return a page. Column `page` holds the GSC page where the overview returned one; `page_inferred` holds the best on-site match (token match on slug, title, H1 and H2s against the 931-page crawl, city-name matching for local queries, and manual overrides for head terms). Inferred pages are labelled "(inferred)" everywhere. **Confirm P0 items with a GSC Query + Page export** before you change a URL. |
| Page type | Joined to `page_summary.csv` (`type`). The 96 root-slug posts missing from the summary are labelled `legacy_post`. |
| Caveat | The DataWise windows do not nest cleanly. For example, "what is homestead exemption" shows 68 impressions in the query table but 202 in the 30-day opportunities. Read impression counts as directional. The queries endpoint has no date dimension, so surge attribution uses page totals for 30 days against 90 days. |
| Topic clusters | A rule-based taxonomy of 95 clusters (column `topic_cluster`), including drift, bot and exam-question flags |

## 3. Scorecard

| Aspect (rubric) | Score | Grade | Rationale (evidence) |
|---|---|---|---|
| **Title & meta: CTR health** | 30 | F | Non-brand queries in the top 10 earn 8 clicks from 10,665 impressions (0.08%), and 102 on-topic queries rank in the top 10 with 15+ impressions at under 1% CTR (5,455 impressions). Titles are generic "X: How It Works" patterns that often omit the head term ("lease to own", "USDA loans", "amortization"). Even the brand query "align lending" averages position 5.0 with 4.1% CTR. Some zero-click impressions are structural (local pack, AI answers), which keeps this above zero. |
| **AI-search readiness: coverage of question queries** | 58 | F | 483 on-topic question queries (6,177 impressions). Structure is strong: 66% of question impressions land on a page with a matching question H2, and /learn/ pages carry 8 to 9 FAQ schema questions. But only 25% of question impressions rank in the top 10, they earned **0 clicks**, and 34% land on pages without a matching question heading. AI Mode-style prompts ("is it harder to refinance a rural mortgage…", position 5.9) are being retrieved from tangential pages. |
| **Intent: page-to-query match** | 68 | D | 84% of on-topic impressions with a defined target land on an acceptable page (80% excluding "lease to own"). That figure is inflated because most pages are inferred. The misses are costly: the #1 striking-distance query ("usda eligibility") ranks the article instead of the tool, 3 legacy ZIP URLs still rank, and the site has cannibalizing sets: two amortization guides, four closing-cost pages, three interest-only and three balloon pages, and legacy duplicates of 10+ learn articles. |
| **Overall GSC gap health** | 52 | F | Coverage is broad, but ranking depth, CTR and intent precision lag. The surge is Google testing pages, not demand being won. |

## 4. Findings ranked by impact

1. **Ranking depth, not coverage, is the bottleneck (critical).** 79.5% of core impressions are at position 21+. The library is large (471 /learn/ URLs, median 5,572 words), so new posts must be narrow, Michigan-specific and data-led. Generic additions would compete with the site's own pages. *Evidence:* query table buckets; `page_summary.csv` word counts.
2. **"lease to own" is the single largest impression source and has no commercial path (high).** It has 16,051 impressions across 38 queries at weighted position 58.7, with 3 clicks. *Fix:* retitle to lead with the head term, add a "typical rent-to-own terms" answer block (57 impressions at position 72.8), 301 the duplicate `/lease-to-own-vs/`, and publish N19 (rent-to-own vs land contract vs mortgage) to route the traffic toward a purchase plan.
3. **The USDA cluster is the biggest commercial opportunity (high).** It has 11,392 impressions, position 36, 0 clicks. The fix has three parts: re-point eligibility intent to the tool (576 + 119 + 60 impressions), retitle the basics guide to the head term "USDA loans" (758 at 46.8, 695 at 47.7, 454 at 41.3), and publish 8 narrow USDA posts (N01 to N08). The basics guide's meta says "Direct loans with subsidized rates as low as 1%", a rate statement that breaks the brand rate policy. Replace it now (P0, compliance).
4. **Near-zero CTR on top positions (high).** "conveyance" has 1,123 impressions at position 1.3 with 0 clicks. "home loans" (716 at 2.8), "top mortgage broker" (277 at 1.0) and "local mortgage" (234 at 3.4) look like local-pack/GBP impressions; the GBP UTM URL shows 822 impressions at position 2.8. Exact title/meta rewrites for 25 queries are in section 5.2. For the generic head terms, the lever is the GBP listing (services, photos, review velocity) and the home title.
5. **Legacy URLs dilute signals (high).** `/mortgage-location/flint-mi-48552/` (126 at 18.5), `/mortgage-location/wixom-mi-48393/` (105 at 15.0) and `/mortgage-location/farmington-hills-mi-48331/` (57 at 17.1) still rank instead of the new city pages. Legacy root posts with canonicals to /learn/ still rank: `/well-water-home-value/` (176 impressions in 90 days), `/hoa-fees-guide-2/`. Canonicals are being ignored, so use 301s. Coordinate with the links team.
6. **VA demand is large and ranks badly (high).** 7,965 impressions at position 53.6, 0 clicks. The IRRRL cluster (2,078 at 70) and requirements cluster (1,399 at 54) need refreshes plus a money page. There is no VA refinance sub-page under `/refinance/`. Recommend `/refinance/va-irrrl/` as a money page (owned by the core-pages team) and posts N09 to N12.
7. **Local: city coverage is complete, but rankings are page 2 (medium).** Dearborn has 863 impressions at 20.8, Ann Arbor 648 at 32.8 ("mortgage loan officer ann arbor" alone is 341 at 20.3), Macomb 351 at 47.9, and Farmington Hills 319 at 18.8. Only a few low-volume Michigan places have no page (Frankfort, Marshall; New Hudson and Byron Center are covered by township pages). See section 5.5.
8. **15% of listed impressions are off-target drift (medium).** That is 12,605 impressions: personal loans 1,755, crowdfunding/investing 2,046, home insurance 1,578, home improvement 1,428, energy audit 1,351, NMLS exam questions 647 and scraper/bot strings 594. Do not optimize for these. Prune or consolidate through the blog-inventory review (section 5.6).
9. **AI Mode is visible in the data (medium).** Long, conversational prompts ("my main motivations: …", "which lenders let me lock a rate for 60 days or longer?", "can a usda loan in nebraska be used to refinance…") rank at positions 1 to 9 with 0 clicks. Pages are being retrieved as sources. Tight 40 to 60 word answers under exact-question H2s, plus Michigan specifics, make those citations more likely to name Align.
10. **The brand SERP is not owned (medium).** "align lending" has 1,293 impressions at average position 5.0 and 4.1% CTR. "align mortgage" (40 at 45.2) and "align loan(s)" (327 at 49 to 64) suggest entity confusion with other "Align" brands (for example "align credit union mortgage rates"). *Fix:* Organization schema with `sameAs` (GBP, NMLS Consumer Access, LinkedIn), and the brand name in the home title. Bing Places and GBP name consistency.

## 5. Analyses

### 5.1 Striking distance (positions 4.5 to 20, 15+ impressions, on-topic)

168 queries with 7,816 impressions. 29 of them (1,504 impressions) rank on the wrong page. The top 30 are below; every row is in `gsc-opportunities.csv` (`issue_type = striking` or `local`).

| Query | Impr | Pos | Ranking page | Right page? | Fix |
|---|---|---|---|---|---|
| usda eligibility | 576 | 11.1 | `/learn/usda-loan-basics/` | **no** → `/usda-eligibility-check/` | Retitle the tool (table 4.2), add H2 'Who is eligible for a USDA loan in Michigan?' with a 50-word answer, and link 'check USDA eligibility for your address' from the first 100 words of /learn/usda-loan-basics/. |
| mortgage broker | 460 | 11.7 | `/` | yes | Add a 50-word 'What does a mortgage broker do for you?' block above the fold; Organization sameAs to the GBP profile; GBP services and reviews complete. |
| refinancing options | 421 | 11.9 | `/learn/types-of-refinancing/` | yes | Informational intent fits. Add a 7-row comparison table (type, best for, cost, Michigan note) under the first H2 and a CTA box to /refinance/ and /refinance/break-even-review/. |
| usda rural development loan | 335 | 13.9 | `/learn/usda-loan-basics/` | yes | Retitle to the USDA head term; put 'What is a USDA loan?' answer in the first 60 words; link /product-loans/usda-loans/ and the eligibility tool. |
| amortization | 315 | 14.5 | `/learn/amortization-schedules/` | yes | /learn/mortgage-amortization/ competes for the same intent. Retitle, merge the best sections of the duplicate and 301 it here. |
| mortgage lender | 185 | 5.6 | `/` | yes | Add a two-sentence 'broker vs. lender' answer above the fold. |
| lease to own vs rent to own | 128 | 14.2 | `/learn/lease-to-own-vs-rent-to-own-whats/` | yes | Retitle to lead with 'Lease to Own' (head term 15,242 impr @59.8); 301 duplicate /lease-to-own-vs/. |
| flint mortgage | 126 | 18.5 | `/mortgage-location/flint-mi-48552/` | **no** → `/mortgage-lender-flint-mi/` | Legacy ZIP URL still ranks. Verify single-hop 301, swap internal links, resubmit sitemap. |
| michigan mortgage lender | 106 | 14.7 | `/` | yes | Use 'Michigan mortgage lender' in the H1 support line and the county module intro. |
| mortgage broker wixom mi | 105 | 15.0 | `/mortgage-location/wixom-mi-48393/` | **no** → `/mortgage-lender-wixom-mi/` | Legacy ZIP URL still ranks. Same 301/internal-link fix. |
| what are the benefits of a va loan | 104 | 19.3 | `/learn/va-loan-benefits-for-veterans/` | yes | Rename H2 'What are the biggest VA loan benefits?' to the exact query; 50-word list answer under it; retitle. |
| mortgage rate lock period | 94 | 15.0 | `/learn/what-is-mortgage-rate-lock/` | yes | Retitle; add H2 'When should you lock your mortgage rate?'; link new post N18. |
| explain the current economic factors impacting the national housing market | 94 | 9.1 | `/learn/economic-factors-driving-housing-demand/` | yes | Retitle; add an 'as of' date line and a 5-bullet answer block. |
| enterprise jumbo mortgage service | 91 | 8.0 | `/learn/jumbo-loan-tips/` | yes | Treat as jumbo intent. Retitle; link /product-loans/jumbo-loans/ in the first 150 words. |
| mortgage lenders near me | 87 | 14.4 | `/` | yes | Near-me = GBP proximity. Complete GBP services; add Waterford NAP and service-area cities on the home page. |
| usda max dti | 80 | 19.8 | `/learn/debt-to-income-ratio-dti/` | **no** → `/product-loans/usda-loans/` | Generic DTI guide ranks. Publish N02 (USDA DTI) and link it from the DTI page's USDA row. |
| rent to own vs lease to own | 76 | 11.6 | `/learn/lease-to-own-vs-rent-to-own-whats/` | yes | Same as above. |
| calculate va funding fee | 74 | 17.6 | `/va-funding-fee-calculator/` | yes | Retitle; add H2 'How much is the VA funding fee in 2026?' with the fee table; publish N10. |
| michigan mortgage lender near me | 69 | 5.8 | `/` | yes | Retitle: "Michigan Mortgage Broker and Home Loans \| Align Lending" |
| what is homestead exemption | 68 | 12.2 | `/learn/homestead-exemption-benefits-and-filing-guide/` | yes | Retitle: "What Is a Homestead Exemption? Michigan's PRE Explained"; Add H2: "What is a homestead exemption in Michigan?" |
| mortgage banker near me | 68 | 14.9 | `/` | yes | Retitle: "Michigan Mortgage Broker and Home Loans \| Align Lending" |
| homeready mortgage | 68 | 6.5 | `/learn/homeready-mortgages/` | yes | Retitle: "HomeReady Mortgage: Income Limits, PMI and Who Qualifies"; Add H2: "What are the benefits of a HomeReady mortgage?"; Link to money page /product-loans/home-ready/ |
| michigan fha loans | 67 | 12.2 | `/product-loans/fha-loans/` | yes | Retitle: "Michigan FHA Loans: Requirements and Limits \| Align Lending"; Add H2: "What are the FHA loan requirements in Michigan?" |
| michigan mortgage broker near me | 65 | 5.5 | `/` | yes | Retitle: "Michigan Mortgage Broker and Home Loans \| Align Lending" |
| va loan funding fee calculator | 61 | 15.3 | `/va-funding-fee-calculator/` | yes | Retitle: "VA Funding Fee Calculator: Purchase, Cash-Out and IRRRL"; Add H2: "How much is the VA funding fee in 2026?" |
| fixed rate mortgage farmington mi | 57 | 17.1 | `/mortgage-location/farmington-hills-mi-48331/` | **no** → `/mortgage-lender-farmington-mi/` | City + service in title and first 60 words; 3 links from county hub and neighbor cities |
| contact mortgage broker michigan | 56 | 16.0 | `/` | yes | Retitle: "Michigan Mortgage Broker and Home Loans \| Align Lending" |
| how do home mortgage consultants stay updated on the latest mortgage products and regulations? | 55 | 8.3 | `/learn/new-mortgage-disclosure-rules/` | yes | Retitle: "Mortgage Disclosure Rules and the 3/7/3 Timing Rule"; Add H2: "What is the 3/7/3 rule in mortgage lending?"; Link to money page / |
| mortgage loans near me | 54 | 15.1 | `/` (inf.) | yes | Retitle: "Michigan Mortgage Broker and Home Loans \| Align Lending" |
| fha loan lenders | 53 | 12.1 | `/product-loans/fha-loans/` (inf.) | yes | Retitle: "Michigan FHA Loans: Requirements and Limits \| Align Lending"; Add H2: "What are the FHA loan requirements in Michigan?" |

**On-page pattern for every striking-distance page:** (1) title per section 5.2, (2) the exact-query H2 with a 40 to 60 word answer in the first screen (who it's for, the number or rule, the Michigan detail), (3) 3 to 5 contextual links from related /learn/ articles using descriptive anchors, (4) one link up to the money page. Do not add more FAQ items to pages that already carry 8 to 9.

### 5.2 CTR problems: top 25 queries and exact title/meta rewrites

Selection: position 10.5 or better, 15+ impressions, CTR under 1%, on-topic. Rules: title 60 characters or fewer with the keyword first; meta 140 to 160 characters; no rates, no hype, no exclamation points. Character counts are in parentheses.

| # | Query | Impr | Pos | Page (source) |
|---|---|---|---|---|
| 1 | conveyance | 1123 | 1.3 | `/learn/conveyance-in-real-estate/` (inferred) |
| 2 | home loans | 716 | 2.8 | `/` (inferred) |
| 3 | top mortgage broker | 277 | 1.0 | `/` (inferred) |
| 4 | local mortgage | 234 | 3.4 | `/` (inferred) |
| 5 | mortgage lender | 185 | 5.6 | `/` (GSC) |
| 6 | consumer credit dti assessment tool usage guide | 184 | 4.1 | `/learn/debt-to-income-ratio-dti/` (inferred) |
| 7 | refinance home | 135 | 1.1 | `/refinance/` (inferred) |
| 8 | explain the current economic factors impacting the national housing market | 94 | 9.1 | `/learn/economic-factors-driving-housing-demand/` (GSC) |
| 9 | enterprise jumbo mortgage service | 91 | 8.0 | `/learn/jumbo-loan-tips/` (GSC) |
| 10 | michigan mortgage lender near me | 69 | 5.8 | `/` (GSC) |
| 11 | homeready mortgage | 68 | 6.5 | `/learn/homeready-mortgages/` (GSC) |
| 12 | how can i compare heloc lenders side-by-side? | 67 | 1.5 | `/learn/how-to-compare-heloc-lenders/` (inferred) |
| 13 | michigan mortgage broker near me | 65 | 5.5 | `/` (GSC) |
| 14 | dearborn home financing options | 62 | 1.0 | `/mortgage-lender-dearborn-mi/` (inferred) |
| 15 | how do home mortgage consultants stay updated on the latest mortgage products and regulations? | 55 | 8.3 | `/learn/new-mortgage-disclosure-rules/` (GSC) |
| 16 | is it harder to refinance a rural mortgage due to limited comparable sales for appraisals? | 52 | 5.9 | `/learn/what-is-usda-streamline-refinance/` (inferred) |
| 17 | 15 year vs 30 year mortgage calculator | 52 | 6.1 | `/learn/15-year-vs-30-year-mortgage-comparison/` (inferred) |
| 18 | michigan usda loan broker | 47 | 9.5 | `/product-loans/usda-loans/` (inferred) |
| 19 | michigan mortgage advisor | 44 | 8.5 | `/` (inferred) |
| 20 | what is conveyance in real estate | 39 | 8.7 | `/learn/conveyance-in-real-estate/` (inferred) |
| 21 | home lenders | 38 | 1.8 | `/` (inferred) |
| 22 | conveyed, transferred, signed over | 38 | 6.8 | `/learn/conveyance-in-real-estate/` (GSC) |
| 23 | who should consider refinancing a rural mortgage, those with improved credit or falling rates? | 37 | 7.3 | `/learn/what-is-usda-streamline-refinance/` (inferred) |
| 24 | what is an escrow balance on a mortgage | 37 | 7.7 | `/learn/mortgage-escrow-accounts/` (inferred) |
| 25 | benefits of homeready mortgage | 37 | 9.8 | `/learn/homeready-mortgages/` (inferred) |

| Page | Current title (chars) | New title (chars) | New meta description (chars) |
|---|---|---|---|
| `/learn/conveyance-in-real-estate/` | Conveyance In Real Estate: Definition And How It Works (54) | **Conveyance in Real Estate: Meaning, Deeds and Timeline** (54) | Conveyance is the transfer of title from seller to buyer by deed. See which deed conveys your home, how long recording takes, and the Michigan fees at closing. (159) |
| `/` | Michigan Mortgage Broker \| Buy And Refinance \| Align Lending (60) | **Michigan Mortgage Broker and Home Loans \| Align Lending** (55) | Independent Michigan mortgage broker in Waterford. Samantha Shelton compares wholesale lenders for purchase and refinance loans. 5.0 on Google, 123 reviews. (156) |
| `/learn/debt-to-income-ratio-dti/` | DTI Limits By Loan Type: FHA, VA, USDA And Conventional (55) | **DTI Calculator and Limits by Loan Type: FHA, VA, USDA** (53) | Calculate your debt-to-income ratio in two steps, then compare it with FHA, VA, USDA and conventional limits and the factors that let each one stretch higher. (158) |
| `/refinance/` | Refinance Your Michigan Mortgage \| Align Lending (48) | **Refinance Your Michigan Home Loan \| Align Lending** (49) | Compare rate-and-term, cash-out and streamline refinances for your Michigan home, find your break-even month, and get a review that can end with no change. (155) |
| `/learn/economic-factors-driving-housing-demand/` | Economic Factors Driving Housing Demand: What To Watch (54) | **Economic Factors Affecting the Housing Market Right Now** (55) | Rates, wages, jobs, household formation and supply: how each economic factor is moving housing demand, with the national data and what it means for Michigan. (157) |
| `/learn/jumbo-loan-tips/` | Jumbo Loan Tips: Credit, Down Payment, And Reserves (51) | **Jumbo Loan Requirements: Credit, Down Payment, Reserves** (55) | What jumbo lenders check: credit in the 700s, a larger down payment, 6 to 12 months of reserves and DTI near 43%, plus where Michigan's jumbo line starts. (154) |
| `/learn/homeready-mortgages/` | HomeReady Mortgages: 3% Down And Income Flexibility (51) | **HomeReady Mortgage: Income Limits, PMI and Who Qualifies** (56) | HomeReady is Fannie Mae's low-down-payment loan for income-eligible buyers, with reduced mortgage insurance and boarder income. Check the limit for an address. (159) |
| `/learn/how-to-compare-heloc-lenders/` | How To Compare HELOC Lenders: Fees, Rates And Terms (51) | **How to Compare HELOC Offers Side by Side** (40) | Line up HELOC offers on margin, rate caps, draw and repayment terms and every fee to open, keep and close the line, so the lower-cost offer is clear. (149) |
| `/mortgage-lender-dearborn-mi/` | Mortgage Broker In Dearborn, MI \| Align Lending (47) | **Dearborn Mortgage Broker: Home Loans and Refinancing** (52) | Buying or refinancing in Dearborn? Every sale needs a city inspection and Certificate of Occupancy. Compare FHA, VA and conventional loans with a local broker. (159) |
| `/learn/new-mortgage-disclosure-rules/` | New Mortgage Disclosure Rules: What Borrowers Now See (53) | **Mortgage Disclosure Rules and the 3/7/3 Timing Rule** (51) | The 3/7/3 rule in plain English: a Loan Estimate within 3 business days, 7 business days before closing, and a new 3-day wait if the APR or loan type changes. (158) |
| `/learn/what-is-usda-streamline-refinance/` | USDA Streamline Refinance: Rules, Costs And Savings (51) | **Refinancing a USDA Loan: Streamline, Assist or Standard** (55) | Compare USDA's three refinance options: who qualifies, when an appraisal is needed, the savings test, and when a conventional refinance is the better move. (155) |
| `/learn/15-year-vs-30-year-mortgage-comparison/` | 15-year Vs. 30-year Mortgage: Payments And Interest (51) | **15-Year vs. 30-Year Mortgage: Payment and Interest Compared** (59) | Compare 15-year and 30-year payments and lifetime interest on the same loan, how the term changes what you can afford, and run both in our mortgage calculator. (159) |
| `/product-loans/usda-loans/` | Michigan USDA Loan Broker \| Align Lending (41) | **Michigan USDA Loans: Rural Home Loan Broker \| Align Lending** (59) | See whether a Michigan address and your household income qualify for a USDA loan, how the upfront and annual fees work, and how USDA compares with FHA. (151) |
| `/learn/mortgage-escrow-accounts/` | Mortgage Escrow Accounts: How They Work (39) | **Mortgage Escrow Accounts and Your Escrow Balance, Explained** (59) | What the escrow balance on your mortgage statement means, how the yearly escrow analysis and two-month cushion work, and what happens to it when you refinance. (159) |

Additional exact rewrites for striking-distance pages (same rules):

| Page | New title (chars) | New meta description (chars) |
|---|---|---|
| `/product-loans/non-qm-loans/` | **Michigan Non-QM Loans: Bank Statement, DSCR, Asset-Based** (56) | Self-employed, investing or asset-rich? Compare Michigan non-QM loans that qualify you on bank statements, rental income or assets, and what each one costs. (156) |
| `/learn/benefits-of-va-construction-loans/` | **VA Construction Loans: Can You Build a Home With a VA Loan?** (59) | VA construction-to-permanent loans let eligible veterans build with one closing. See costs covered, the builder and inspection rules, and how to find one. (154) |
| `/learn/what-is-conventional-97-loan/` | **Conventional 97 Loan: Who Qualifies and How It Works** (52) | Conventional 97 is the lowest-down-payment conventional loan. See who qualifies, whether you must be a first-time buyer, the credit minimum and when PMI ends. (158) |
| `/product-loans/fha-loans/` | **Michigan FHA Loans: Requirements and Limits \| Align Lending** (59) | FHA loans in Michigan: credit and DTI guidelines, 2026 county loan limits, how FHA mortgage insurance works, and how a broker compares FHA lenders for you. (155) |
| `/learn/lease-to-own-vs-rent-to-own-whats/` | **Lease to Own Homes: How It Works vs. Rent to Own** (48) | Lease to own gives you the option to buy; rent to own can obligate you. See typical terms, option fees, how rent credits work and what protects Michigan buyers. (160) |
| `/learn/usda-loan-basics/` | **USDA Loans Explained: How Rural Development Loans Work** (54) | How USDA Rural Development loans work: which addresses and incomes qualify, the 29/41 ratios, the guarantee fees, and how Guaranteed and Direct loans differ. (157) |
| `/usda-eligibility-check/` | **USDA Eligibility Check: Michigan Address and Income** (51) | Check USDA eligibility in two steps: confirm the Michigan address on USDA's own map, then compare your household income with your county's limit for 2026. (154) |
| `/learn/types-of-refinancing/` | **Refinancing Options: 7 Types of Refinance Compared** (50) | Compare refinancing options side by side: rate-and-term, cash-out, streamline, no-closing-cost, shorter-term and renovation refis, and which fits your goal. (156) |
| `/learn/amortization-schedules/` | **Amortization: What It Means and How Your Schedule Works** (55) | Amortization splits each mortgage payment between interest and principal. See a sample schedule, how extra payments shorten it, and when PMI comes off. (151) |
| `/learn/homestead-exemption-benefits-and-filing-guide/` | **What Is a Homestead Exemption? Michigan's PRE Explained** (55) | A homestead exemption lowers property tax on the home you live in. In Michigan it is the Principal Residence Exemption, worth up to 18 mills. See how to file. (158) |
| `/learn/what-is-mortgage-rate-lock/` | **Mortgage Rate Lock Period: How Long It Lasts and Costs** (54) | Most rate locks run 30 to 60 days. See how lock periods are priced, what an extension costs, what happens if a lock expires and when a float-down is worth it. (158) |
| `/learn/va-loan-benefits-for-veterans/` | **What Are the Benefits of a VA Loan? 8 That Matter Most** (54) | The VA loan benefits worth the most to veterans, from no PMI and capped closing costs to residual-income underwriting and the funding fee waiver for disability. (160) |
| `/va-funding-fee-calculator/` | **VA Funding Fee Calculator: Purchase, Cash-Out and IRRRL** (55) | Find your VA funding fee in dollars for a purchase, cash-out refinance or IRRRL, from your own numbers and VA's current fee schedule, and see who is exempt. (156) |
| `/michigan-transfer-tax-calculator/` | **Michigan Transfer Tax Calculator: State, County, Who Pays** (57) | Work out Michigan's real estate transfer tax on a home sale: $3.75 state and $0.55 county per $500, the seller's exemption, and who pays at closing. (148) |
| `/learn/what-is-loan-to-value-ratio/` | **Loan-to-Value Ratio: LTV Calculator and How to Figure It** (56) | Figure your loan-to-value ratio in one step with our LTV calculator, then see why 80% matters for PMI, how lenders use LTV, and the LTV limits by loan type. (156) |
| `/mortgage-lender-ann-arbor-mi/` | **Ann Arbor Mortgage Broker and Loan Officer \| Align Lending** (58) | Buying in Ann Arbor, where medians run near $528,000? Talk with a local loan officer about conventional, jumbo and FHA options and the property tax math first. (159) |
| `/mortgage-michigan/macomb-county/` | **Macomb, MI Mortgage Broker and Loan Officer \| Align Lending** (59) | Mortgage broker for Macomb County and Macomb Township. Homes run from about $166,000 in Eastpointe to $408,000 in Washington Township; see how taxes reset. (155) |
| `/learn/fha-loan-limits/` | **FHA Loan Limits 2026: How They Affect What You Can Borrow** (57) | See the 2026 FHA loan limits, from the $541,287 floor to the $1,249,125 ceiling, how your county's limit caps your loan, and where Michigan counties fall. (154) |
| `/loan-limits/` | **2026 Michigan FHA and Conforming Loan Limits by County** (54) | Every Michigan county's 2026 FHA and conforming loan limits in one table, plus Ohio, North Carolina, Florida, Louisiana and Texas, and where 2027 limits stand. (159) |
| `/mortgage-payoff-calculator/` | **Mortgage Payoff Calculator: Extra Payments and Lump Sums** (56) | Use your own statement to see how much sooner extra payments, biweekly payments or a lump sum pay off your mortgage, and what a recast does to the payment. (155) |
| `/learn/home-equity-line-of-credit-heloc/` | **What Is a Home Equity Line of Credit (HELOC)? How It Works** (58) | A HELOC is a revolving line of credit secured by your home. See how the draw and repayment periods work, how lenders size the line and the variable-rate risks. (159) |
| `/learn/second-mortgages/` | **What Is a Second Mortgage? How It Works and What It Costs** (57) | A second mortgage borrows against equity behind your first loan. Compare home equity loans and HELOCs, what each costs, and when a cash-out refi fits better. (157) |
| `/learn/how-to-qualify-for-va-loan/` | **VA Loan Requirements: Service, COE, Credit and Income** (53) | The VA loan requirements in one place: the 90- or 181-day service rule, your Certificate of Eligibility, the credit score most lenders want and residual income. (160) |
| `/learn/va-interest-rate-reduction-refinance-loans/` | **VA IRRRL (VA Streamline Refinance): Rules and Costs** (51) | How the VA Interest Rate Reduction Refinance Loan works: 210-day seasoning, the net tangible benefit test, the 0.5% funding fee and when credit is checked. (155) |

Compliance notes: none of these titles or metas state a rate, APR or payment. Down-payment percentages are Reg Z triggering terms in advertising, so the rewrites avoid them on product pages. Existing learn titles that state "3% down" (HomeReady, Conventional 97) are replaced with non-percentage wording. Route all copy through Align's approval before publishing.

### 5.3 True content gaps: NEW blog candidates (30), ranked

A query counts as a gap when no page genuinely answers it: the best match is tangential (a general guide covering it in one H2) or ranks worse than 30. Each candidate is checked against the 471 /learn/ slugs and 96 legacy posts to avoid cannibalization. Cluster impressions are summed from the query table; full supporting-query lists are in `gsc-blog-candidates.csv`.

| ID | Pri | Working title | Primary query (impr / pos) | Top supporting queries (impr / pos) | Cluster impr | Best pos | Intent | Why new, not a refresh | Link to (money page) |
|---|---|---|---|---|---|---|---|---|---|
| N01 | P0 | USDA Income Limits in Michigan for 2026, County by County | usda income limits (43 impr, pos 34.0) | usda loan income limits (85/32.7); usda income eligibility (65/28.4); usda home loan income limits (60/34.5) | 1026 | 6.5 | Informational / eligibility check | Only an H2 inside the 6,000-word basics guide and a one-line limit on the tool; searchers want the county table plus how household income is counted. | `/usda-eligibility-check/` |
| N27 | P0 | How to Compare Michigan Mortgage Lenders and Brokers: 9 Checks | best mortgage lenders in michigan (185 impr, pos 52.0) | best mortgage companies in michigan (60/39.4); best mortgage companies in dearborn (40/19.3); michigan best mortgage broker (39/10.9) | 614 | 1.0 | Commercial investigation | Listicle intent ('best lenders') we should answer honestly with a checklist (NMLS Consumer Access, DIFS license, Loan Estimate comparison), not a ranking. Merge with competitor-gap topic 'How to choose a mortgage lender in Michigan'. | `/` |
| N20 | P0 | How DSCR Loans Work in Michigan, With a Worked Example | dscr loans michigan (230 impr, pos 39.0) | dscr loan michigan (206/41.4); michigan dscr loans (92/46.5); dscr loans avondale (11/59.5) | 556 | 39.0 | Commercial investigation (supports money page) | Money page ranks 39-46 with no supporting article anywhere in /learn/ (no DSCR slug exists). | `/product-loans/dscr-loans-michigan/` |
| N02 | P0 | USDA Debt-to-Income Limits: The 29/41 Rule and GUS Exceptions | usda dti limits (91 impr, pos 21.1) | usda max dti (80/19.8); dti for usda loan (37/27.0); usda loan dti (25/25.6) | 312 | 12.9 | Informational / qualification | Generic DTI guide ranks ~20 for USDA-specific DTI queries; a USDA-only answer (29/41, GUS, compensating factors) is missing. | `/product-loans/usda-loans/` |
| N15 | P1 | Portfolio Loan Rates: What Moves the Price and How to Compare Quotes | portfolio loan interest rates (182 impr, pos 47.4) | portfolio loan rates (177/39.1); portfolio loans rates (170/39.9); interest rates on portfolio loans (128/58.2) | 746 | 19.2 | Commercial investigation | Existing page answers 'what is a portfolio loan'; 746 impressions are rate/pricing intent. Explain pricing drivers without publishing rates. | `/product-loans/non-qm-loans/` |
| N05 | P1 | USDA Direct vs. Guaranteed Loans: Section 502 Explained | usda 502 loan (85 impr, pos 36.2) | usda 502 (49/39.5); usda 502 direct loan (35/46.2); 502 direct loan (34/40.9) | 408 | 7.1 | Informational / program comparison | Program-comparison intent (Section 502 Direct vs Guaranteed) is an H2 inside the basics guide; dedicated queries rank 36-46. | `/product-loans/usda-loans/` |
| N09 | P1 | VA IRRRL Rules: Seasoning, Net Tangible Benefit, Credit and Cash Back | va irrrl credit qualifying (34 impr, pos 75.9) | va refinance after forbearance (24/64.0); va cash out refinance after forbearance (24/26.8); va irrrl ntb (23/65.0) | 366 | 26.8 | Informational / refinance qualification | IRRRL guide ranks 70+; rules-level questions (seasoning, NTB, credit qualifying, cash back, after forbearance) need their own answer page. | `/refinance/` |
| N04 | P1 | Is There a USDA Loan Limit? How Much You Can Borrow in Michigan | usda loan limits (43 impr, pos 24.0) | usda max loan amount (26/28.1); usda home loan limits (24/24.8); usda loan max (23/24.3) | 363 | 18.7 | Informational / affordability | No page answers 'is there a USDA loan limit'; the honest answer (income and DTI cap the loan, Direct has area limits) is missing. | `/usda-eligibility-check/` |
| N11 | P1 | VA Home Loan Benefits for Disabled Veterans in Michigan | disabled veteran home loan benefits (39 impr, pos 41.0) | disabled veterans refinance benefits (40/56.4); va loan benefits for disabled veterans (31/42.1); va mortgages for disabled veterans (22/29.9) | 345 | 15.7 | Informational / benefits | One H2 in the VA benefits guide; 22 disability queries rank 30-65. Pair with competitor-gap topic on the Michigan disabled veteran property tax exemption. | `/product-loans/va-loans/` |
| N22 | P1 | Buying a Michigan Home With a Well or Septic: FHA, VA, USDA Rules | buying a home with a well (158 impr, pos 42.3) | house with well water (31/29.4); well water house (28/39.5); how much value does a well add to property (9/6.8) | 236 | 6.8 | Informational / purchase | 'Buying a home with a well' (158 @42) lands on a home-value article and a legacy duplicate; lender well/septic rules for FHA/VA/USDA are absent. | `/product-loans/usda-loans/` |
| N03 | P1 | USDA Loan Credit Score Requirements: What 640 Really Means | usda minimum credit score (37 impr, pos 22.1) | usda rural housing loan credit score requirements (24/20.9); usda loan credit requirements 2021 (23/24.8); minimum credit score for usda home loan (14/24.5) | 198 | 4.3 | Informational / qualification | Credit-score questions rank 21-28 off the basics guide; the 640 GUS threshold and manual underwriting deserve a direct answer. | `/product-loans/usda-loans/` |
| N13 | P1 | FHA Debt-to-Income Limits: 31/43 and When You Can Go Higher | fha debt to income ratio (65 impr, pos 72.0) | debt to income ratio fha (46/67.0); dti calculator fha (18/18.6); fha dti (11/76.2) | 190 | 13.8 | Informational / qualification | DTI guide ranks 62-76 for FHA DTI; FHA-specific 31/43 and AUS stretch rules missing. | `/product-loans/fha-loans/` |
| N21 | P1 | How Bank Statement Loans Calculate Your Income | bank statement loan calculator (57 impr, pos 44.0) | michigan bank statement loans (70/54.4); bank statement loan lender in chicago (30/68.0); ohio bank statement loans (18/72.4) | 190 | 1.0 | Commercial investigation (supports money page) | Product page has a calculator in the title but ranks 44-54; no explainer on 12/24-month deposits and expense factors. | `/product-loans/bank-statement-loan/` |
| N19 | P1 | Rent-to-Own vs. Land Contract vs. Mortgage in Michigan | rent to own vs buying (31 impr, pos 33.0) | buy lease or rent (64/38.9); rent to own vs buying a house (19/8.0); own vs lease (16/10.1) | 177 | 3.5 | Commercial investigation | Bridges 15K 'lease to own' impressions to a mortgage path; Michigan land contracts are common and covered only separately. | `/purchase/homebuyer-game-plan/` |
| N16 | P1 | What Counts as a Jumbo Loan in Michigan in 2026? | jumbo mortgage limit (49 impr, pos 44.6) | jumbo loan limit (40/69.2); jumbo loan limits (18/58.0); what is jumbo loan limit (11/51.8) | 175 | 4.7 | Informational / qualification | Conforming limit sits on /loan-limits/ and jumbo tips; 'what counts as jumbo' queries rank 45-70. | `/product-loans/jumbo-loans/` |
| N10 | P1 | VA Funding Fee 2026: Percentages by Loan Use, Exemptions, Refunds | how much is a va funding fee (52 impr, pos 84.2) | how much is the va funding fee (26/86.7); how much is va funding fee (22/89.6); va funding fee chart (12/69.1) | 142 | 26.5 | Informational / cost | Calculator ranks for 'calculator' queries (15-23) but 'how much is the VA funding fee' ranks 84-90; needs a chart page. | `/va-funding-fee-calculator/` |
| N17 | P1 | Zero-Down Home Loans in Michigan: Who Qualifies and the Real Costs | first time home buyer loans with 0 down (39 impr, pos 11.1) | 0 down home mortgage (17/16.0); zero down payment mortgage options (9/12.3); types of home loans with no down payment (9/25.7) | 109 | 8.8 | Commercial investigation | '0 down' intent differs from the 0-3.5% guide; Michigan angle (USDA map, VA, MSHDA DPA) not covered in one place. | `/purchase/first-time-homebuyer/` |
| N26 | P1 | Mortgage Waiting Periods After Bankruptcy, Foreclosure or Modification | can i refinance my mortgage after chapter 7 (24 impr, pos 63.6) | can you refinance after a loan modification (14/12.1); fha waiting period (9/11.1); what happens after a loan modification is approved (6/76.5) | 58 | 6.2 | Informational / qualification | Waiting periods split across three pages ranking 12-64. Merge with competitor-gap topic 'Buying a house after bankruptcy: waiting periods by loan type'. | `/purchase/mortgage-readiness-review/` |
| N28 | P2 | Jumbo and High-Price Home Loans in Ann Arbor and Washtenaw County | ann arbor jumbo loan (79 impr, pos 40.7) | ann arbor home loan (50/54.9); ann arbor mortgage (41/43.5); ann arbor jumbo mortgage (40/34.0) | 307 | 34.0 | Commercial / local | City page ranks 34-55 for jumbo/price intent in Ann Arbor ($528K medians). | `/mortgage-lender-ann-arbor-mi/` |
| N18 | P2 | Rate Lock Expiring Before Closing? Extensions, Relocks and Fees | mortgage rate lock fee (31 impr, pos 39.0) | rate lock extension fee (27/42.7); when is the mortgage rate locked in (26/29.4); rate lock expires before closing (21/16.0) | 189 | 1.0 | Informational / process | Extension fees and expired locks are one H2 in the lock guide; 12 queries rank 16-48. | `/purchase/homebuyer-game-plan/` |
| N29 | P2 | Rural Michigan Appraisals: Limited Comps, Acreage and Refinancing | is it harder to refinance a rural mortgage due to limited comparable sales for appraisals? (52 impr, pos 5.9) | who should consider refinancing a rural mortgage, those with improved credit or falling rates? (37/7.3); rural mortgage (26/30.4); rural mortgage loan (17/26.7) | 177 | 2.7 | Informational / AI-search answer | AI-Mode style rural appraisal/refi questions already rank 3-9 off tangential pages; a focused answer can win the citation. | `/product-loans/usda-loans/` |
| N06 | P2 | Can You Have Two USDA Loans or Use the Program Twice? | second usda loan (32 impr, pos 31.8) | multiple usda loans (18/20.4); can you have more than one usda loan (17/31.6); can you have two usda loans (16/30.8) | 151 | 20.4 | Informational / eligibility | Specific eligibility question ranking 20-32; no direct answer page. | `/product-loans/usda-loans/` |
| N08 | P2 | USDA Rules on Co-Signers, Condos, Land and Property Condition | can you have a cosigner on a usda loan (26 impr, pos 19.2) | usda home loan house requirements (24/54.3); usda loan co signer (17/32.9); usda land loans (17/29.8) | 150 | 16.0 | Informational / eligibility | Co-signer/condo/land rules scattered; queries rank 19-54. | `/usda-eligibility-check/` |
| N23 | P2 | HomeReady vs. Home Possible: Income Limits and Fit in Michigan | home possible income limits (25 impr, pos 23.0) | home possible loan (32/27.6); home possible income lookup (18/12.2); home possible (13/51.2) | 129 | 4.3 | Commercial investigation | Income-limit comparison intent; two separate program pages rank 9-51. | `/product-loans/home-ready/` |
| N07 | P2 | USDA Guarantee Fees: Upfront and Annual Costs, Explained | usda loan annual funding fee (22 impr, pos 28.9) | usda funding fee waiver (19/29.7); usda funding fee exemption (14/27.3); usda funding fee calculation (14/24.7) | 126 | 11.4 | Informational / cost | Fee questions rank 11-35; current fee levels must be verified with USDA RD before publishing. | `/product-loans/usda-loans/` |
| N12 | P2 | VA Loan Limits and Minimums in Michigan: What Entitlement Covers | va minimum loan amount (39 impr, pos 31.7) | michigan va loan limits (27/52.3); minimum va loan amount (22/74.0); va loan minimum (16/79.8) | 116 | 31.7 | Informational / qualification | VA limit/minimum questions rank 32-94; entitlement explanation missing. | `/product-loans/va-loans/` |
| N24 | P2 | How Asset Depletion Mortgages Turn Savings Into Qualifying Income | michigan asset depletion loans (55 impr, pos 37.2) | asset depletion loans in grosse pointe shores, michigan (12/11.5); asset-based lending michigan (9/72.6); asset depletion loans in orchard lake village, michigan (8/2.4) | 94 | 2.4 | Commercial investigation (supports money page) | Supports the asset-based product page (ranks 37) with a how-income-is-calculated explainer. | `/product-loans/asset-based-income-loans/` |
| N30 | P2 | The 3/7/3 Rule: Mortgage Disclosure Timing in Plain English | what is the 3 7 3 rule for a mortgage? (20 impr, pos 10.2) | what is the 3 7 3 rule in mortgage? describe what constitutes a "significant change" (20/7.0); 373 rule mortgage (19/8.3); what is the 3 7 3 rule in mortgage? (11/11.7) | 90 | 4.8 | Informational / AI-search answer | Disclosure page ranks 5-13 via one H2; a dedicated answer page or a renamed H2 can capture the snippet. | `/compare-loan-estimates/` |
| N25 | P2 | What Happens to Your Escrow Account When You Refinance or Pay Off | how often can a mortgage company do an escrow analysis (16 impr, pos 6.6) | escrow analysis calculator (12/12.1); when you refinance do you get your escrow balance back (9/8.9); crypto refinance escrow services (6/6.0) | 49 | 6.0 | Informational / servicing | Servicing questions rank 6-12 off the escrow guide; small but answer-ready. | `/refinance/` |
| N14 | P2 | Can You Remove FHA Mortgage Insurance? MIP Rules by Loan Date | fha pmi removal calculator (25 impr, pos 7.0) | fha pmi rate (7/17.1); lenders that offer fha 203k loan with no pmi (5/12.6); difference between pmi and mip (4/10.5) | 47 | 7.0 | Informational / cost reduction | FHA MIP removal questions rank 7-17 off the PMI calculator; rules differ by case date and down payment. | `/pmi-removal-calculator/` |

**Writing rules for these posts:** 1,500 to 2,500 words, not 5,000 or more. Open with a 40 to 60 word direct answer. Add one Michigan-specific table (county limits, Register of Deeds, DIFS, MSHDA). Byline: Samantha Shelton, NMLS 1647301. End with a Sources list (USDA RD, VA.gov, HUD 4000.1, Fannie Mae/Freddie Mac guides, CFPB, Michigan Treasury, DIFS). Never quote rates. Use `[VERIFY: …]` for program numbers: USDA FY2026 income limits (the site's tool says $122,800 for 1 to 4 people), USDA guarantee fees, the VA funding fee table, FHA MIP duration rules and the 2026 conforming limit ($832,750 per `/loan-limits/`). Use `[NEEDS SAMANTHA QUOTE: …]` where a broker's view helps.

**Overlaps with the competitor-gap analyst (`keyword-gaps.csv`), to merge, not duplicate:** N26 = "Buying a house after bankruptcy: waiting periods by loan type". N27 = "How to choose a mortgage lender in Michigan". N11 pairs with "Michigan disabled veteran property tax exemption explained" (cross-link both). For closing costs, GSC evidence is small (119 impressions), so defer to their "Closing costs in Michigan" post. Their "Michigan principal residence exemption" topic would compete with the existing homestead guide, which already ranks 9 to 12; refresh that guide instead (R20).

#### REFRESH candidates (existing URL underperforms; fix the page, do not write a new one)

| ID | URL | GSC evidence (cluster impr / weighted pos) | Refresh action | Pri |
|---|---|---|---|---|
| R01 | `/learn/usda-loan-basics/` | USDA family 11,392 / 36.1; "usda loans" 758 @46.8, "usda loan" 695 @47.7 | Retitle to head term (5.2); remove the "rates as low as 1%" meta; move eligibility intent to the tool; link N01 to N08 from the matching H2s | P0 |
| R02 | `/usda-eligibility-check/` | "usda eligibility" 576 @11.1 (on wrong page); "usda loan eligibility" 119 @26.9 | Retitle; H2 "Who is eligible for a USDA loan in Michigan?"; question-form income H2 | P0 |
| R03 | `/learn/lease-to-own-vs-rent-to-own-whats/` + legacy `/lease-to-own-vs/` | 16,051 / 58.7 | Retitle; "typical rent-to-own terms" answer block; 301 the duplicate; link N19 and `/rent-vs-buy-calculator/` | P0 |
| R04 | `/learn/va-interest-rate-reduction-refinance-loans/` | VA IRRRL 2,078 / 70.0 | Retitle; requirements H2; link N09; new money page `/refinance/va-irrrl/` (core-pages team) | P1 |
| R05 | `/learn/how-to-qualify-for-va-loan/` | VA requirements 1,399 / 54.4; "va loan requirements" 169 @77 | Retitle "VA Loan Requirements…"; first H2 = exact query | P1 |
| R06 | `/loan-limits/` + `/learn/fha-loan-limits/` + legacy `/fha-loan-limits-2025-homeownership/` | FHA limits 2,877 / 44.3 | Make `/loan-limits/` the Michigan county answer; learn page = "how limits affect you" (86 @49); 301 the legacy page. Out-of-state (NY, CT, CO, MN, NJ) impressions are drift | P1 |
| R07 | `/refinance/` + `/learn/types-of-refinancing/` | Refinance general 2,644 / 41.2; "refinance home loan" 856 @66.9 | Retitle the money page; comparison table on the learn page; cross-link | P1 |
| R08 | `/learn/benefits-of-va-construction-loans/` | 895 / 48.4 | Retitle; "Does the VA offer construction loans?" answer block | P1 |
| R09 | `/learn/home-equity-line-of-credit-heloc/` + `/product-loans/heloc/` | 863 / 56.2 (head terms at 88 to 93) | Retitle to "What Is a Home Equity Line of Credit (HELOC)?"; definition block; link product | P1 |
| R10 | `/learn/what-is-usda-streamline-refinance/` | USDA refinance 902 / 57.0 | Broaden to "Refinancing a USDA loan" (3 options + to conventional); retitle | P1 |
| R11 | `/learn/jumbo-loan-tips/` + `/product-loans/jumbo-loans/` | Jumbo 1,124 / 42.7 | Retitle to "requirements"; "michigan jumbo loan" queries should hit the product page, so add a product link in the first 150 words | P1 |
| R12 | `/mortgage-payoff-calculator/` | 1,008 / 43.6 | Retitle; "how much faster" answer block; link from the amortization guides | P1 |
| R13 | `/learn/amortization-schedules/` (merge `/learn/mortgage-amortization/`) | 520 / 23.8; "amortization" 315 @14.5 | Retitle; consolidate the duplicate with a 301 | P1 |
| R14 | `/learn/what-is-mortgage-rate-lock/` | 520 / 35.7 | Retitle to "lock period"; "When should you lock?" H2; link N18 | P1 |
| R15 | `/learn/va-loan-benefits-for-veterans/` | 643 / 48.8; "what are the benefits of a va loan" 104 @19.3 | Exact-query H2; link N11 | P1 |
| R16 | `/learn/what-is-loan-to-value-ratio/` | LTV 691 / 41.4 (calculator queries at 19 to 26) | Add an on-page LTV calculator widget (no LTV tool exists); retitle | P1 |
| R17 | `/learn/second-mortgages/` | 475 / 82.3 | Retitle to definition; answer block; link HELOC and home-equity product pages | P2 |
| R18 | `/learn/low-down-payment-mortgages/` | 711 / 41.0 | Answer block; link N17 | P2 |
| R19 | `/learn/what-is-portfolio-loan/` | 1,320 / 47.5 (definition subset) | Keep definition intent; link N15 for pricing | P2 |
| R20 | `/learn/homestead-exemption-benefits-and-filing-guide/` | 127 / 25.6 (30-day: 202 @9.0) | Retitle with Michigan PRE; Form 2368 filing steps; this replaces a new PRE post | P1 |
| R21 | `/learn/mortgage-escrow-accounts/` | 242 / 12.5 (positions 2 to 10, 0 clicks) | Retitle (CTR); link N25 | P1 |
| R22 | `/learn/conveyance-in-real-estate/` + legacy | 1,406 / 2.8, 0 clicks | Retitle (CTR); 301 `/conveyance-real-estate-explained/` | P1 |
| R23 | `/learn/new-mortgage-disclosure-rules/` | 3/7/3 queries 90 / 8.7 | Rename H2 to "What is the 3/7/3 rule…"; retitle; or publish N30 | P2 |
| R24 | `/learn/michigan-land-contract/` | 174 / 43.0; "who pays property taxes on a land contract" 23 @13.5 | Add exact H2; link N19 | P2 |
| R25 | `/learn/drive-by-appraisal/` + legacy | 181 / 28.5; "drive by appraisal for home equity loan" 60 @40.4 | H2 "Can a home equity loan use a drive-by appraisal?"; 301 legacy | P2 |
| R26 | `/learn/home-inspection-waivers-risks-and-benefits/` + legacy | 286 / 54.8 | H2; 301 `/waiving-home-inspections-risk-guide/` | P2 |
| R27 | `/learn/how-well-water-impacts-homes-value/` + legacy `/well-water-home-value/` | Legacy still ranks (176 impressions) | 301 the legacy page; link N22 | P1 |
| R28 | `/mortgage-process/` + `/learn/mortgage-loan-process/` + `/learn/home-closing-process/` | Closing process 590 / 56.7 | Pick one owner per intent (process vs closing); H2 "How long does it take to close a mortgage in Michigan?" (43 @70.7) | P2 |
| R29 | `/learn/what-is-plat-map/` | 445 / 49.4; "plat of survey" 274 @61.1 | Promote the "plat of survey" H2 near the top; Michigan Register of Deeds steps | P2 |
| R30 | `/learn/debt-to-income-ratio-dti/` | 254 / 23.5; odd "dti assessment tool" 184 @4.1 | Retitle as "DTI Calculator…"; link N02/N13 from the FHA and USDA rows | P1 |
| R31 | `/learn/pros-and-cons-of-refinancing-fha-loan/` | FHA refinance 210 / 57.9 | "Can you refinance an FHA loan to conventional?" H2; link N14 | P2 |
| R32 | `/learn/homeowners-insurance-deductibles/` | 1,578 / 62.1 (adjacent, low value) | Low priority: link to escrow guide only | P2 |

### 5.4 Question queries: answer-block opportunities for AI Overviews and LLMs

483 on-topic question queries with 6,177 impressions and 0 clicks. Grouped by theme, with the page and the exact H2 to add. Under each H2: a 40 to 60 word answer that leads with the rule or number, names Michigan where relevant, and links one next step.

| Theme (questions / impr / wpos) | Top questions (impr @ pos) | Page | H2 to add (exact) or new post |
|---|---|---|---|
| USDA basics and qualifying (55 / 1,249 / 32.6) | what is a usda loan (179 @31.4); what are the requirements for a usda loan (118 @48); how to qualify for a usda loan (116 @44.3) | `/learn/usda-loan-basics/`; tool | "What is a USDA loan, and how does it work?" on basics; "Who is eligible for a USDA loan in Michigan?" on the tool |
| USDA income, DTI, credit, limits, multiple loans (25 / 300+) | what income limits apply… (10 @6.5); what is the maximum usda loan amount (12 @25.9); can you have two usda loans (16 @30.8); what is the minimum credit score for a usda loan (12 @26.8) | New | N01, N04, N06, N03 |
| VA requirements (27 / 365 / 53.9) | what are the requirements for a va loan (86 @57.5); how to qualify for a va loan (28 @61.8) | `/learn/how-to-qualify-for-va-loan/` | "What are the requirements for a VA loan?" |
| VA benefits (14 / 213) | what are the benefits of a va loan (104 @19.3); what are the advantages of a va loan (35 @29.1) | `/learn/va-loan-benefits-for-veterans/` | "What are the benefits of a VA loan?" |
| VA funding fee (5 / 127 / 78.6) | how much is a va funding fee (52 @84.2); how to avoid va funding fee (11 @70.6) | `/va-funding-fee-calculator/` + N10 | "How much is the VA funding fee in 2026?" |
| VA construction (11 / 133 / 31.4) | what costs do va construction loans typically include? (35 @6.0); does the va offer construction loans (16 @32.9) | `/learn/benefits-of-va-construction-loans/` | "Does the VA offer construction loans?" |
| HELOC (16 / 245) | how can i compare heloc lenders side-by-side? (67 @1.5); what is a home equity line of credit (56 @88.7) | `/learn/how-to-compare-heloc-lenders/`; `/learn/home-equity-line-of-credit-heloc/` | "How do I compare two HELOC offers with different draw terms?"; "What is a home equity line of credit, and how does it work?" |
| Escrow (16 / 219 / 13.1) | what is an escrow balance on a mortgage (37 @7.7); how often can a mortgage company do an escrow analysis (16 @6.6) | `/learn/mortgage-escrow-accounts/` + N25 | "What is the escrow balance on my mortgage statement?" (exists; tighten to 50 words) |
| Refinance situations (27 / 213) | can i refinance my mortgage after chapter 7 (24 @63.6); can you refinance after a loan modification (14 @12.1) | N26 | New post (waiting-period table) |
| Lease/rent to own (13 / 176 / 58) | what are typical rent to own terms (57 @72.8); how does lease to own work (23 @50.4) | `/learn/lease-to-own-vs-rent-to-own-whats/` | "What are typical rent-to-own terms in Michigan?" |
| Closing timing / 3-7-3 (15 / 164) | how long to close a mortgage loan (43 @70.7); what is the 3 7 3 rule for a mortgage? (20 @10.2) | `/mortgage-process/`; `/learn/new-mortgage-disclosure-rules/` | "How long does it take to close a mortgage in Michigan?"; "What is the 3/7/3 rule in mortgage lending?" |
| FHA limits and refinance (15 / 257) | how fha loan limits affect you (86 @49); can i refinance fha loan (28 @62) | `/learn/fha-loan-limits/`; `/learn/pros-and-cons-of-refinancing-fha-loan/` | "How do FHA loan limits affect you?"; "Can you refinance an FHA loan into a conventional loan?" |
| Rate lock (13 / 133 / 34.6) | when is the mortgage rate locked in (26 @29.4); how long can you lock in a mortgage rate (19 @47.7) | `/learn/what-is-mortgage-rate-lock/` + N18 | "When should you lock your mortgage rate?" |
| Broker vs lender (14 / 142 / 17.2) | is rocket mortgage a broker (18 @5.8); rocket mortgage vs a mortgage broker. which should i use? (16 @3.6) | `/learn/rocket-mortgage-vs-mortgage-broker/` | Exists; ranks 3 to 6. Tighten the opening answer and add a "Talk with Samantha" CTA |
| LTV (8 / 103 / 62.9) | how to calculate ltv (51 @53.9) | `/learn/what-is-loan-to-value-ratio/` | "How do you calculate LTV?" plus a calculator widget |
| Plat maps (8 / 122) | what is a plat map (64 @44.8); are plat maps public record (14 @9.9) | `/learn/what-is-plat-map/` | "Are plat maps public record in Michigan?" |
| Homestead (4 / 85) | what is homestead exemption (68 @12.2) | homestead guide | "What is a homestead exemption in Michigan?" |
| Second mortgage (7 / 85 / 80.7) | what is a second mortgage (34 @81.9) | `/learn/second-mortgages/` | "What is a second mortgage, and how does it work?" |
| Michigan "how to get a mortgage" (5 / 70) | how to get a mortgage in michigan (18 @1.0); how to qualify for a mortgage in michigan (15 @1.0) | Ranks #1 via legacy/learn pages, 0 clicks (AI Mode) | Keep; add a "Talk through your options" CTA directly under the answer |

Drift question groups (home insurance deductibles 433 impressions, mansions 316, energy audit 252, reverse mortgages 239) are excluded on purpose.

### 5.5 Local queries

| Place | Queries / impr | Weighted pos (best) | Ranking page | Status and action |
|---|---|---|---|---|
| Statewide "Michigan …" | 221 / 6,129 | 35.9 (1.0) | home, product pages | "michigan mortgage broker" 403 @22.5, "mortgage broker michigan" 255 @48.7: home title plus N27 |
| Dearborn | 27 / 863 | 20.8 (1.0) | `/mortgage-lender-dearborn-mi/` | Page exists, page 2. New title (5.2); H2s on pre-approval, refinance and the city Certificate of Occupancy; links from the Wayne County hub |
| Near me | 30 / 681 | 15.0 (1.0) | home | GBP proximity: complete GBP services/categories, NAP on home, Bing Places sync |
| Ann Arbor | 10 / 648 | 32.8 (20.3) | `/mortgage-lender-ann-arbor-mi/` | "mortgage loan officer ann arbor" 341 @20.3: put "loan officer" in the title (5.2); jumbo intent goes to N28 |
| Flint | 8 / 361 | 34.7 (17.0) | city page + legacy `/mortgage-location/flint-mi-48552/` | Fix the legacy 301 and internal links; "flint commercial mortgage" (102) and "flint apartment loans" (51) are out of scope (commercial/multifamily) |
| Macomb | 9 / 351 | 47.9 (15.7) | county hub / Macomb Township | "macomb" is ambiguous (county vs township): county hub retitle (5.2); cross-link the township page |
| Farmington Hills / Farmington | 17 / 554 | 18.8 to 22.6 | city pages + legacy ZIP URL | 301 cleanup; product-in-city queries ("fixed rate mortgage farmington hills mi" 38 @11, "cash-out refinance farmington mi" 42 @22.3): add a "Loan options in Farmington Hills" H2 linking product pages |
| Wixom, Wolverine Lake, Milford, Ferndale, Northville, Royal Oak, Rochester Hills, Ypsilanti | 1 to 6 each / 28 to 105 | 5.7 to 26 | city pages (Wixom = legacy URL) | Good positions; titles already match "Mortgage Broker In X, MI". Add a 50-word answer and nearby-city links |
| Grand Rapids, Lansing, Detroit, Traverse City, Holland, Kalamazoo | 1 to 11 each / 41 to 127 | 22 to 47 | city pages | Far from the office; low priority unless Align serves them actively |

**Places with impressions but no page:** Frankfort (7 impr), Marshall (3), plus out-of-state places (Parkland FL 40, Levittown PA 49, Chicago 36, Monmouth NJ 34, Collin County TX 9, Tyler TX 5). No new city pages are justified by GSC volume. New Hudson (13) and Byron Center (6) are served by the Lyon and Byron Township pages; mention those place names on those pages. Florida and Texas are licensed states: if Align wants that business, the state hubs (`/mortgage-florida/`) should name their metros, but GSC volume does not justify city pages yet.

### 5.6 Off-target queries (drift)

| Drift theme | Impr / pos | Top queries | Recommendation |
|---|---|---|---|
| Personal loans | 1,755 / 6.9 | personal loans (1,657 @4.5) | **Ignore.** Align does not offer them; the home-equity comparison page will not convert this traffic |
| Real estate investing / crowdfunding / REITs | 2,046 / 45.1 | rental market analysis (201), real estate crowdfunding (197) | Ignore crowdfunding/REITs. Link rental-analysis pages to DSCR (N20) |
| Home insurance deductibles | 1,578 / 62.1 | home insurance deductible (206 @69.3) | Low priority; link to escrow only |
| Home improvement (garage, kitchen, foundation) | 1,428 / 55.4 | garage conversion (114), kitchen renovation cost (67) | Prune or consolidate via blog inventory. Well/septic goes to N22 |
| Energy audits | 1,351 / 61.0 | energy audit (203), home energy audit (162) | Ignore; optional link to `/purchase/renovation-financing/` |
| NMLS/SAFE exam questions | 647 / 4.3 | "for a non-hpml qualified mortgage to include a balloon payment…" (149 @4.1) | Ignore (study traffic) |
| Scraper/operator strings | 594 / 9.2 | "refinance+pruning", `site:hud.gov …`, quoted broker-owner search strings | Ignore; filter out of reporting |
| 1031 exchanges | 542 / 74.2 | 1031 exchange rules (47 @83.7) | Ignore |
| Mansions | 430 / 11.4 | how big is a mansion (49 @7.4) | Ignore; add one jumbo link |
| Home warranty, seller topics, HOA, inspections | 1,342 | home warranty policies (100 @71.8) | Ignore; 301 the legacy duplicates |
| Reverse mortgages | 514 / 71.4 | proprietary reverse mortgage (35), "michigan reverse mortgage broker" (24 @3.6) | **Ask Align** whether it brokers HECMs. If not, label as drift and add a HUD counselor referral |

### 5.7 Trend: the October to November 2026 impression surge

| Period | Days | Impr/day | Clicks/day |
|---|---|---|---|
| Aug 17 to Sep 22 | 37 | 366 | 2.2 |
| Sep 23 to Oct 8 | 16 | 1,184 | 3.8 |
| Oct 9 to Oct 31 | 23 | 3,129 | 5.1 |
| Nov 1 to Nov 10 | 10 | 7,618 | 15.4 |

- **Step changes:** single-day spikes on Aug 26 (1,685), Aug 31 (1,388), Sep 25 (2,917) and Oct 10 (4,508), then a sustained climb from about Oct 13 and a jump to 8,000 to 9,000 a day from Nov 2. This looks like progressive indexing of the relaunched /learn/ library and the new city URLs (293 legacy `/mortgage-location/` URLs 301 to them) rather than a single ranking win. Clicks rose about 7x, impressions about 21x.
- **Pages driving it:** `/learn/usda-loan-basics/` (9,738 of its 10,182 90-day impressions came in the last 30 days, avg position 32.8), `/learn/lease-to-own-vs-rent-to-own-whats/` (9,002 of 14,548, position 30.6), the home page (6,596 in 90 days but only 373 in the last 30 at position 20.9, so its share is shrinking), `/va-loan-calculator/` (849 @53.5), `/va-funding-fee-calculator/` (663 @48.6), `/learn/definition-of-mansion…` (558 @10.9), `/learn/what-is-loan-to-value-ratio/` (374 in 30 days) and `/product-loans/` (205 in 30 days @51.2).
- **Queries driving it:** "lease to own" (15,242), the USDA family (11,392 total; "usda loans" 758, "usda loan" 695, "usda eligibility" 576), "personal loans" (1,657, drift), "conveyance" (1,123), FHA limits (2,877), VA IRRRL (2,078) and the Michigan broker/lender head terms.
- **Implication:** the surge widens the funnel but lowers average position. Expect impressions to stay volatile until refreshes and consolidations settle. **To confirm attribution at page level, export GSC Performance with "Compare: last 28 days vs previous period" by Page and by Query** (DataWise has no date dimension for queries).

## 6. Implementation order

| Pri | Item | Owner | Impact / effort |
|---|---|---|---|
| P0 | Replace `/learn/usda-loan-basics/` meta (removes the "rates as low as 1%" claim) and retitle | Content | critical / low |
| P0 | Re-point "usda eligibility" to `/usda-eligibility-check/` (retitle, H2, link from basics) | Content | high / low |
| P0 | Apply the 25 CTR rewrites plus the striking-page titles (5.2) | Content | high / low |
| P0 | 301 legacy ZIP URLs that still rank (Flint, Wixom, Farmington Hills) and legacy duplicates (`/lease-to-own-vs/`, `/well-water-home-value/`, `/hoa-fees-guide/`, `/hoa-fees-guide-2/`, `/conveyance-real-estate-explained/`, `/fha-loan-limits-2025-homeownership/`, `/drive-by-appraisals-home-valuation-guide/`, `/waiving-home-inspections-risk-guide/`, `/home-warranty-options/`, `/choose-title-company/`) | Links/tech | high / low |
| P0 | Publish N01, N02, N20, N27 | Blog writers | high / medium |
| P1 | 14 P1 posts (N03, N05, N09, N10, N11, N13, N15, N16, N17, N19, N21, N22, N26, N04); refreshes R04 to R16, R20 to R22, R27, R30 | Content | medium / medium |
| P1 | `/refinance/va-irrrl/` money page; LTV calculator widget | Core pages / dev | medium / medium |
| P2 | Remaining posts and refreshes; drift pruning via blog inventory | Content | low / medium |

## 7. Bing Webmaster Tools: what is missing and what to do

**Status:** Bing Webmaster data is not connected to this project. There are no Bing impressions, clicks or positions in this report, and none have been estimated.

**Export from Bing Webmaster Tools (Search Performance and related reports):**
1. *Search Performance → Queries* and *→ Pages*, the longest available range (6 months), with clicks, impressions, CTR and average position, exported to CSV. We will join it to `gsc-queries-full.csv` by query and page, then list Bing-only queries and pages where Bing ranks better than Google.
2. *Search Performance by country/device* (Bing skews desktop and older; check Michigan desktop share for refinance and VA terms).
3. *Site Explorer / Index coverage*: indexed vs excluded URLs, especially the 293 `/mortgage-location/` 301s, the 96 legacy root posts and the 276 city pages.
4. *SEO Reports* and *URL Inspection* for the P0 pages (title/meta length, duplicate titles, H1 issues).
5. *Backlinks* (referring domains vs GSC links) and *Keyword Research* for the 30 new-post primary queries (Bing volume for Michigan).
6. If the account shows an AI/Copilot performance or citation report, export it too. Copilot answers cite pages from the Bing index.

**IndexNow via Rank Math:** in WordPress, go to *Rank Math → Dashboard* and turn on the **Instant Indexing** module, then *Rank Math → General Settings → Instant Indexing*. Select the post types to auto-submit (Posts, Pages, the /learn/ and city post types), keep the auto-generated API key (Rank Math serves the key file), and save. New posts and updates then ping IndexNow (Bing, Yandex, Seznam, Naver) on publish. Use *Submit URLs* to bulk-submit the 30 new posts, every refreshed URL, and both the old and new URLs of each 301 so Bing recrawls the redirects. Google does not use IndexNow; keep the XML sitemap submitted in GSC as well.

**Bing and Copilot considerations:**
- Bing leans harder on exact-match titles, H1s and meta descriptions than Google does. The 5.2 rewrites (keyword first) help on both engines.
- Prefer 301s over canonicals for the legacy duplicates. Bing treats canonicals as hints and often keeps both URLs.
- Claim and sync **Bing Places for Business** from the GBP listing (same name, Pontiac Lake Road address, 248-506-5727, categories). "Near me" and city queries on Bing and Copilot draw on Bing Places.
- Copilot and other Bing-grounded assistants (ChatGPT search also uses Bing among its sources) quote short, specific answers. The 40 to 60 word answer blocks and Michigan specifics in 5.4 are the Bing/Copilot play. Keep `FinancialService`/`LocalBusiness` and `FAQPage` schema valid.
- The brief notes the server resets bursts of requests. In Bing Webmaster *Crawl Control*, set a gentler crawl rate during business hours so Bingbot does not trip it, and make sure robots.txt does not block Bingbot or the IndexNow key file.

## 8. Files

- `gsc-queries-full.csv`: 2,968 deduplicated queries (query, clicks, impressions, ctr, position, page, page_inferred, page_type, topic_cluster, is_question, city, pull_sources)
- `gsc-opportunities.csv`: 783 rows (123 striking, 43 CTR, 152 gap, 172 question, 123 local, 170 drift; 33 P0, 163 P1, 587 P2); every row has an action, target page or new topic, exact title/H2 where applicable, priority, impact and effort
- `gsc-blog-candidates.csv`: 30 new-post candidates with primary and supporting queries, cluster impressions, best and weighted position, intent, closest existing page, money page and priority
- `gsc-gap-report.md`: this report

---

## Auditor corrections

*Added by the independent content auditor, 2026-11-15. Full detail: `08-audit/audit-content.md`; exact replacement text: `08-audit/corrections-content.csv`. Verdict: **PASS WITH CORRECTIONS**.*

**Confirmed by re-querying DataWise and recomputing the CSVs:**
- 30 days: 134,261 vs 34,706 impressions (+287%); position 24 → 32.8.
- 90 days: 416 / 181,048, with 418 impressions in the prior 90 days.
- 79.6% of on-topic impressions at position >20; 10.1% in the top 10.
- Non-brand top 10: exactly 8 clicks from 10,665 impressions.
- USDA basics meta, verbatim "…subsidized rates as low as 1%". It also says "zero down payment".
- "conveyance" 1,123 @1.3, 0 clicks. "usda eligibility" 576 @11.1 on the article (GSC-attributed).
- The queries endpoint has no page dimension.
- Surge pages: 14,548 / 62% and 10,182 / 96%.

Note: the query table holds only 87 of 416 clicks, so every "0 clicks" figure is a floor.

**Refuted:**
1. "Legacy root posts with canonicals … use 301s" (P0). They already 301 in a single hop, as does `/lease-to-own-vs/` (crawl `redirects`). Replace the P0 with a P1: resubmit old URLs via IndexNow / URL Inspection and fix internal links to redirects. The ZIP URLs already 301 per the brief.
2. N22 (well/septic). The existing `/learn/buying-home-with-septic-system/` and `/learn/how-well-water-impacts-homes-value/` already carry FHA/USDA lender-rule H2s. Retitle the well page instead.

**Corrected:**
- **Scorecard labels.** The scorecard reports outcome KPIs as rubric aspects. Relabel "CTR health 30" and "question coverage 58" as outcome KPIs; under the rubric anchors, Title & meta = **73 C**, AI readiness = **72 C** and Intent = **75 C** (was 68).
- **Library size:** 424 articles, median 5,604 words (not "431 … 5,572").
- **P0 count.** The 33 P0 rows are 12 unique actions.
- **Rewrite fixes:**
  - LTV: drop "Calculator" until the widget exists.
  - 3/7/3 meta: the third "3" is the Closing Disclosure rule.
  - VA benefits: "limits on closing costs" and "exemption".
  - Conventional 97: remove "lowest".
  - Four limits/eligibility metas: drop "2026". Hold the FHA limits titles until the CY2027 release.
  - Home meta: "We compare…", not Samantha personally.
  - Dearborn and Ann Arbor: "Michigan", not "local".
  - Move the `jumbo-loan-tips` copy to `how-to-qualify-for-jumbo-loan`.
  - Lease-to-own: "Lease to Own a Home: How It Works vs. Rent to Own".
- **DSCR (N20)** targets "how DSCR loans work", not the money page's "dscr loans michigan".
- **USDA carve-up.** Cap new USDA posts at 3 (N01; N02 + N03; N05) and fold N04/N06/N07/N08 into the basics page.
- **Fold into H2s:** N15, N16, N17 [COUNSEL], N25, N30.
- **N01 title:** "(FY2027)"; N10 drops "2026".
- **Inferred mappings.** Fix 5 implausible ones in `gsc-queries-full.csv`. The two analysts disagree on 265 of 810 shared mappings, so confirm with a GSC Page × Query export.
- **Cross-team scope.** Eleven of the rewritten pages (home, refinance, product pages, city pages, calculator) belong to the core-pages and city teams, which propose different titles. Treat these rewrites as inputs for the consistency team.
