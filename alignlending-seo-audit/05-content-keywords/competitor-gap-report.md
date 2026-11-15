# Competitor and keyword gap report: alignlending.com

Content team, part 3 of 3 (competitor and AI-search gaps). Prepared 2026-11-15. Data: DataWise SEO (DataForSEO, US, English), Google Search Console for `sc-domain:alignlending.com` (last 90 days), and the 2026-11-15 site crawl (`page_summary.csv`, `pages.jsonl`).

Companion files in this folder:
- `keyword-gaps.csv`: 164 filtered gap and Michigan-demand keywords, with KD, intent, competitor position, Align position, cluster, refresh URL, new topic and priority.
- `paa-question-bank.csv`: 221 deduplicated People Also Ask questions from 15 seeds, each mapped to an existing page or a new post, with an exact H2.
- `ai-visibility.md`: AI-search citation status, the AEO playbook and the Bing/Copilot note.

---

## 1. Summary

**What we found.**
1. **Align's rankings barely overlap with any competitor.** All six gap calls returned `my_advantages: 300` with 0 or 1 shared keyword. Align's 459 ranked keywords sit at an average position of 59.3, worth about 37 visits a month (DataWise competitors, Align's own row). Align ranks for long-tail Michigan tax and land-contract questions, but not for the head terms that competitors win.
2. **The biggest gaps are Michigan-specific, and Align already has the expertise for them.**
   - "michigan first time home buyer programs/grant" has 3,600 searches a month at KD 1–5. Align does not rank, and Ross Mortgage ranks #31.
   - "mshda" plus its variants add up to about 3,000 a month at KD 0–1. Not one GSC query contains "mshda".
   - "michigan property tax calculator" has 9,900 a month at KD 13. Align has the tool but ranks 48.8 (GSC).
   - "property tax detroit michigan" has 8,100 a month at KD 2–11.
   - "michigan homestead property tax credit" has 1,600 a month at KD 0.
   - "michigan homestead exemption" (880) and "principal residence exemption" (590) are both KD 0. Align ranks 22.8–29.9 with a generic multi-state page.
3. **The largest single national gap is "how to get pre approved for a home loan"** (12,100 a month, KD 22). The Mortgage Center, a lender in Southfield, MI, ranks #20. Align has two adjacent pages, but neither targets the how-to intent.
4. **The Mortgage Reports and Gustan Cho win the question queries.** The Mortgage Reports ranks 1–5 (mostly #2) on 51 relevant gaps: conventional guidelines (2,900), SSI and disability loans (720 + 590 + 590 + 480), "what disqualifies you from a home equity loan" (880), HELOC vs HEA (880) and letter of explanation (390 + 390). Gustan Cho ranks 1–8 on 47 relevant gaps, mostly underwriting guidelines: collections, charge-offs, bankruptcy waiting periods, VA manual underwriting and the HUD $100 down program.
5. **People Also Ask is dominated by life-stage questions that no Align page answers:**
   - Age ("Can a 70 year old get a 20 year mortgage?") appeared in 9 of 15 seeds.
   - Salary affordability ("Can I afford a $300k house on a $70k salary?") appeared in 9 of 15.
   - "What should you not tell a mortgage lender?" appeared in 8 of 15.
   - "Extra $100 a month" appeared in 7 of 15.

**What to do.** Publish **28 new pages**, ranked in section 6. Nine are P0:
1. How to get pre-approved in Michigan.
2. The Michigan first-time buyer programs pillar.
3. The MSHDA MI Home Loan explainer.
4. The Michigan PRE guide.
5. Closing costs in Michigan.
6. The non-warrantable condo explainer.
7. What disqualifies you from a home equity loan or HELOC.
8. How much house you can afford in Michigan.
9. Mortgages at 60, 70 or 80.

Also **refresh 14 existing pages** with the exact titles, H1s and H2s in section 5. Start with the property tax calculator, `/learn/conventional-loans/`, `/purchase/first-time-homebuyer/` and `/purchase/down-payment-assistance/`.

**Credits used (calls).**

| Tool | Calls | Budget |
|---|---|---|
| `datawise_competitors` | 1 | 1 |
| `datawise_ranked_keywords` (alignlending.com, limit 100) | 1 | 1 |
| `datawise_keyword_gap` | 6 (2 returned no data) | 6 |
| `datawise_people_also_ask` | 15 (4 at depth 2, 11 at depth 1) | 15 |
| `datawise_ai_visibility` + `datawise_ai_mentions` | 1 + 2 = 3 | 4 |
| `datawise_keyword_metrics` + `datawise_keyword_research` | 3 + 3 = 6 | 6 |
| `datawise_search_console`, `datawise_rank_tracking` (free) | 10 + 1 | n/a |

---

## 2. Scorecard

| Aspect | Score | Grade | Rationale (evidence) |
|---|---|---|---|
| Competitive keyword coverage | 35 | F | All gap calls returned 0–1 shared keywords from each competitor's top 300; Align averages position 59.3 across 459 keywords (DataWise competitors). |
| Michigan high-intent demand capture | 30 | F | No ranking for "michigan first time home buyer programs" (3,600/mo) or any MSHDA term (0 GSC queries); the property tax calculator ranks 48.8 for a 9,900/mo term (GSC). |
| Question (PAA) coverage | 62 | D | 469 of 471 `/learn/` pages carry FAQ schema and question H2s, but 65 of 221 PAA questions (29%) have no matching page and map to NEW posts. |
| AI-search citation share | 45 | F | Cited on 4 of 12 tracked prompts (ChatGPT 2, Perplexity 2, Gemini 1, Google AI Mode 0); Google AI mentions are 19 against riverbankfinance.com's 785 (see `ai-visibility.md`). |
| Original data leverage | 55 | F | The Uncapping Study covers 83 counties and 1,534 places under CC BY 4.0, yet it drew 0 citations on 2 uncapping prompts. All 4 research pages have `faq_q = 0` and no Dataset schema. |
| Title/H1 alignment on gap-relevant pages | 60 | D | The `/purchase/first-time-homebuyer/` H1 "You are not supposed to understand this yet" carries no keyword, and `/learn/conventional-loans/` ranks 70.5–97.8 for core terms (GSC). |
| Entity and third-party corroboration | 60 | D | Home `sameAs` lists NMLS, GBP, LinkedIn, Facebook and Instagram but not BBB, the domain AI engines cite most for broker prompts (35 citations); the Person schema has no `award` property. |

---

## 3. Competitor selection

**DataWise organic competitor list (1 call, US).** The 19 competitors it returned were giants and platforms: youtube, facebook, reddit, rocketmortgage (293 shared keywords), quora, investopedia, zillow, yahoo, bankrate, quickenloans, nerdwallet, freedommortgage, chase, themortgagereports (178 shared), experian, amerisave, instagram, pnc and smartasset. Gap lists against these would mostly contain national head terms, brand terms and rate tables. The brief rules those out, so only The Mortgage Reports was kept.

**Picks (5 with data plus 2 attempted).**

| # | Domain | Type | Why picked | Gap result | Relevant after filtering |
|---|---|---|---|---|---|
| 1 | rossmortgage.com | Independent lender in Troy, MI (Oakland County, Align's home county); blog at blog.rossmortgage.com | Local content program covering MSHDA DPA ("Unlock $25,000 in Down Payment Assistance… with MSHDA") and the Michigan first-time buyer savings program | 170 gaps, 0 shared | 19 (most rows were brand, address and other-lender noise) |
| 2 | mortgagecenter.com | Michigan lender in Southfield (Oakland County) with an FAQ and education library | Ranks for national how-to terms Align lacks: pre-approval, non-warrantable condos, conventional down payment | 300 gaps, 0 shared | 21 (dropped rate terms and "loan center" brand noise) |
| 3 | themortgagereports.com | Education-heavy national publisher; on DataWise's organic competitor list; its Michigan first-time buyer programs page appears in MSHDA searches | Wins question queries at positions 1–2 | 299 gaps, 1 shared | 51 |
| 4 | gustancho.com | National broker with a very large guideline Q&A library and Michigan pages | Wins underwriting-guideline questions (collections, bankruptcy, VA manual underwriting) | 300 gaps, 0 shared | 47 |
| 5a | mtg1.com | Mortgage 1, an independent Michigan lender named in Michigan "top lender" lists | Michigan content program | **0 keywords returned**: DataForSEO holds no ranked-keyword data for the domain | n/a |
| 5b | hallfinancial.com | Hall Financial, an independent lender in Troy, MI with a blog | Michigan content program | **0 keywords returned** | n/a |

**What the two empty results tell us.** Michigan independents with blogs have almost no measurable organic footprint in DataForSEO's index. In organic search, Align's real competition for Michigan questions is national publishers, aggregators (Benzinga, Tomo, Zillow, Yelp, BBB) and government and municipal sites.

**Recommended next gap run (not run: the gap budget was used up).** `riverbankfinance.com` is the Michigan lender that AI engines cite most. It had 785 Google AI mentions against Align's 19, and it was cited on 7 of the 12 prompts Align tracks. It should be the first competitor in the next credit cycle. Michigan supplementary demand was measured directly with `keyword_research` (Michigan first-time buyer, Michigan property tax, MSHDA) and `keyword_metrics`, to make up for the thin Michigan gap data.

**Filtering rules applied** to `keyword-gaps.csv`:
- Dropped rate tables and rate queries ("home mortgage rates today", "fannie mae mortgage rates", "750 credit score mortgage rate", dated refinance-rate queries).
- Dropped lender and brand terms (rosegate, ruoff, rate.com, schwab, mycu, loan solution center).
- Dropped addresses and logins.
- Dropped non-licensed-state terms (Puerto Rico, South Dakota, California, Denver, Georgia 203k, Nashville).
- Dropped off-topic terms (average US home size, "affordable warm places").

Two compliance-sensitive terms were kept at P2 with an educational angle only: "guaranteed mortgage approval" (the answer is that no lawful lender guarantees approval) and "fha vs conventional loan rates" (explain pricing factors, publish no rates).

---

## 4. Gap clusters

Cluster totals add up the listed keywords. Google groups close variants into one volume, so treat each total as an upper bound.

| Cluster | Keywords | Volume/mo | KD range | Intent | Best competitor evidence | Decision |
|---|---|---|---|---|---|---|
| Michigan property tax (calculator, PRE, credit, millage, Detroit, county) | 12 | 29,510 | 0–27 | Informational | No competitor measured; AI engines cite michigan.gov and city sites (Southfield, Melvindale, Menominee) | Refresh calculator + 4 NEW (PRE, homestead credit, millage data page, Detroit) |
| Pre-approval process | 4 | 13,330 | 21–23 | Informational/commercial | mortgagecenter.com #19–26 | NEW how-to; trim the duplicate H2 on `/learn/importance-of-mortgage-preapproval/` |
| Michigan first-time buyer programs and MSHDA | 13 | 10,970 | 0–19 | Informational | rossmortgage.com #31–43; themortgagereports.com Michigan programs page | NEW pillar + NEW MSHDA explainer; refresh both `/purchase/` pages |
| Conventional loan guidelines | 8 | 5,920 | 0–37 | Informational | themortgagereports.com #2; gustancho.com #2–4 | Refresh `/learn/conventional-loans/` + NEW inspection post |
| Non-warrantable condos | 5 | 3,120 | 0 | Informational/commercial | mortgagecenter.com #5–19 | NEW explainer; refresh product page |
| Disability and SSI income | 6 | 2,720 | 0–17 | Informational | themortgagereports.com #1–2 | NEW |
| Broker vs bank vs credit union | 2 | 2,290 | 8–15 | Informational/commercial | mortgagecenter.com #20; Perplexity already cites Align's page | Refresh `/learn/benefits-of-working-with-mortgage-broker/` |
| Michigan broker/lender selection | 2 | 1,880 | 9–12 | Commercial | Align at 47–53 (DFS) | Refresh home page/hub + NEW "how to choose a lender in Michigan" |
| Home equity qualification, limits, tax | 13 | 2,670 | 0–38 | Informational | themortgagereports.com #2–3 | NEW disqualifiers post, NEW tax post, NEW paid-off-home post; refresh HELOC and HEA pages |
| Underwriting documentation | 10 | 1,320 | 0–37 | Informational | themortgagereports.com #1–2; gustancho.com #4–8 | NEW letter-of-explanation post; refresh `/learn/mortgage-underwriting/` |
| DTI and income | 6 | 1,110 | 0–31 | Informational | gustancho.com #4–6; themortgagereports.com #2 | NEW DTI calculator; refresh DTI article |
| Collections, charge-offs, bankruptcy | 11 | 960 | 0–28 | Informational | gustancho.com #1–7 | 2 NEW |
| Second homes and occupancy | 4 | 890 | 0–22 | Informational | themortgagereports.com #2 | Refresh `/learn/buying-second-home/` |
| Closing costs (Michigan) | 3 | 790 | 6–21 | Informational | themortgagereports.com #2 | NEW Michigan guide; refresh `/learn/closing-costs/` |
| Seniors and age | 5 | 620 + PAA in 9 of 15 seeds | 0–23 | Informational/commercial | themortgagereports.com #2 | NEW |
| HUD homes, VA underwriting | 5 | 980 | 1–20 | Informational/commercial | gustancho.com #5–6 | 2 NEW |
| Refinance requirements, debt consolidation | 8 | 990 | 0–33 | Transactional/informational | rossmortgage.com #8–70 | Refresh appraisal page + NEW debt-consolidation post |
| All other clusters (first-time buyer basics, investment property, land contracts, borrowing against a paid-off home, adding a borrower, construction, renovation, ARM/float, local Troy, PMI, jumbo, non-QM, calculators) | 47 | 7,560 | 0–41 | Mixed | Mixed | Mostly refresh; NEW N17 and N19 (see CSV) |

---

## 5. Refresh decisions for existing pages (exact text)

All titles are 60 characters or fewer. Each answer block goes directly under the H2 it names and runs 40–60 words. Facts marked [VERIFY] must be confirmed against the named primary source before publishing.

| # | URL | Element | Current | Recommended (exact) | Reason | Priority |
|---|---|---|---|---|---|---|
| R1 | /michigan-property-tax-calculator/ | Title | Michigan Property Tax Calculator By Address \| Align Lending | Michigan Property Tax Calculator: Estimate After You Buy | Targets "michigan property tax calculator/estimator" (9,900/mo, KD 13), where Align ranks 48.8; adds the buyer angle competitors lack | P0 |
| R1 | same | H1 | Michigan Property Tax Calculator | Michigan Property Tax Calculator and Estimator | Captures the "estimator" variant (same 9,900 pool) | P0 |
| R1 | same | Above-fold answer (new, before the calculator) | none | "Michigan property tax is your taxable value times your local millage rate. After you buy, taxable value uncaps and resets to half of market value, so your bill is usually higher than the seller's. In 2026 that reset raised a typical home's taxable value about 50% (Align Lending Uncapping Study, Michigan Treasury data)." | Quotable answer built on Align's own data (`/research/michigan-property-tax-uncapping-study/`) | P0 |
| R1 | same | Structure | 15,714 words, including a "2025 homestead millage by community" table | Move the full millage table to the NEW data page (N12) and keep a county-level summary plus a link | A shorter, faster tool page, plus a separate citable data URL for "michigan property tax millage rates" (1,000/mo) | P1 |
| R2 | /learn/conventional-loans/ | Title | Conventional Loans: Requirements, Limits And Benefits | Conventional Loan Guidelines 2026: Credit, DTI, Down Payment | Targets "conventional loan guidelines" (2,900, KD 13; TMR #2); Align ranks 70.5–97.8 | P0 |
| R2 | same | H1 | Conventional loans: requirements, limits and low-down-payment programs | Conventional loan guidelines: credit, DTI, down payment and PMI | Matches the dominant query | P0 |
| R2 | same | New H2s | none | "What are the conventional loan guidelines in 2026?" · "How much down payment does a conventional loan require?" · "What are the 5% down conventional loan requirements?" · "Does a conventional loan require a home inspection?" (2 sentences plus a link to N15) | PAA and gap coverage | P0 |
| R3 | /purchase/first-time-homebuyer/ | Title | First-Time Homebuyer Plan \| Align Lending | First-Time Home Buyer in Michigan: Step-by-Step Plan | Brings "first time home buyer michigan" (2,900/mo, KD 0) onto the money page | P0 |
| R3 | same | H1 | You are not supposed to understand this yet | Buying your first home in Michigan, step by step | Keyword plus entity; keep the current line as the subhead: "You are not supposed to understand this yet." | P0 |
| R4 | /purchase/down-payment-assistance/ | Title | Down Payment Assistance In Michigan \| Align Lending | Michigan Down Payment Assistance: MSHDA and Local Programs | Adds MSHDA (880/mo "mshda down payment assistance", KD 0) | P0 |
| R4 | same | H1 | Down Payment Assistance Programs in Michigan | Down payment assistance in Michigan: MSHDA, city and lender programs | Covers MSHDA and Detroit DPA layering | P0 |
| R4 | same | New H2 plus answer | none | H2 "How does MSHDA down payment assistance work?" Answer: "MSHDA's MI 10K DPA lends up to $10,000 toward down payment and closing costs alongside a MI Home Loan first mortgage. The 2026 MI Home Loan sales price limit is $566,355 statewide, and the minimum credit score is 640. Income limits vary by county and household size. [VERIFY: michigan.gov/mshda MI Home Loan page]" | 1,186 words is thin; this answers the top MSHDA question in 55 words | P0 |
| R5 | /learn/importance-of-mortgage-preapproval/ | H2 "How to get preapproved" | Full section | Cut to two sentences: "Preapproval means a lender has reviewed your credit, income and assets and issued a conditional letter. Our step-by-step guide covers the documents, the credit pull and the timeline: [How to get pre-approved for a home loan in Michigan](/learn/how-to-get-pre-approved-for-a-mortgage/)." | Prevents cannibalization with N1, which targets the how-to intent (12,100/mo) | P0 |
| R6 | /product-loans/non-warrantable-condo-loans/ | Above-fold answer (new) | none | "A non-warrantable condo is a unit in a project that does not meet Fannie Mae or Freddie Mac project standards, for example because of a single owner holding too many units, pending litigation, low owner occupancy or commercial space above the limit. Most banks will not lend on these units. A portfolio or non-QM condo loan can. [VERIFY: Fannie Mae Selling Guide B4-2.1]" | 1,600/mo at KD 0 with 0 GSC impressions today | P0 |
| R7 | /learn/benefits-of-working-with-mortgage-broker/ | New H2 plus answer | none | H2 "Are credit unions better than banks for a mortgage?" Answer: "Not automatically. A credit union offers only its own loan programs, and so does a bank. Either can be a good fit if its pricing and guidelines match your file. A broker compares several wholesale lenders on one application, which helps most when your file is unusual or you want to see more than one offer." | "are credit unions better than banks" (1,900/mo, KD 15); Perplexity already cites this page | P1 |
| R8 | /learn/buying-second-home/ | New H2s | none | "What are the requirements for a second home loan?" · "Can you have two primary residences in Michigan?" | 590/mo (KD 0) + 140/mo (KD 0); GSC shows this page at 90.8 for "buying a second home" | P1 |
| R9 | /learn/what-is-home-equity-sharing-agreement/ | Title | Home Equity Sharing: How It Works And What It Costs | HELOC vs Home Equity Agreement (HEA): How They Compare | "heloc vs hea" 880/mo (KD 0); TMR #3 | P1 |
| R10 | /learn/refinance-appraisal-requirements/ | New H2 | none | "Can you refinance without an appraisal?" | 260 + 210 + 170/mo (KD 0); Align already ranks 12 for "is an appraisal required for a refinance" (DFS) | P1 |
| R11 | /learn/first-time-home-buyers/ | Answer block under the existing H2 "What counts as a first-time home buyer?" | (long-form) | "For most programs, you are a first-time home buyer if you have not owned a principal residence in the past three years. A single parent who only owned with a former spouse, or someone who only owned a home not fixed to a foundation, may also qualify. MSHDA, FHA and Fannie Mae each apply their own version, so check the program's definition. [VERIFY: HUD and Fannie Mae definitions]" | "what qualifies as a first time home buyer" (390 + 170/mo, KD 31) | P1 |
| R12 | /learn/debt-to-income-ratio-dti/ | New H2 | none | "Can you get a mortgage with a high debt-to-income ratio?" | 320/mo (KD 31; TMR #2) | P1 |
| R13 | /learn/michigan-taxable-value/ | Answer block under "Why it matters when you buy" | (current text) | "The year after a Michigan home sells, its taxable value uncaps to the state equalized value. In 2026 that step raised a typical home's taxable value 50.5%, up from 9% in 2013, and ranged from 37% in Monroe County to 92% in Charlevoix County. Budget from the buyer's number, not the seller's bill." | Puts Align's own study figures where AI engines look; both uncapping prompts are currently uncited | P0 |
| R14 | /mortgage-lender-troy-mi/ | No title change | | Add an H2 "How to compare mortgage companies in Troy, MI" with a 50-word answer covering NMLS lookup, Loan Estimates and the broker vs bank difference | "mortgage company troy mi" (Ross ranks #6) | P2 |

**Pages tied to striking-distance positions** (from DataForSEO ranked keywords):
- `/learn/fha-loan-limits/` sits at 2–5 for "fha loan limits michigan". Keep the 2027 limits current when FHFA and HUD publish them.
- `/learn/michigan-land-contract/` sits at 10–47 across seven land-contract queries. Add an H2 "Can you refinance a land contract into a mortgage in Michigan?" ("land contract refinancing", 40/mo, at 36).
- The legacy `/mortgage-location/flint-mi-48552/` URL still ranks (39–47) for "loans flint mi". Confirm its 301 points to the Flint city page.

---

## 6. Ranked NEW blog candidates (28)

Ranking blends four factors: cluster volume × (100 − KD), Michigan specificity, nearness to a money page, and PAA frequency. "n/m" means volume was not measured (no metrics credit was left); those topics rank on PAA frequency across seeds. Every post carries Samantha's byline (NMLS 1647301), a Sources list, no rate or payment promises, and is subject to Align's approval.

| Rank | Proposed H1 (exact) | Slug | Primary keyword | Vol | KD | Intent | Supporting keywords | Competitor evidence | Target money page | Pri | Impact / effort |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | How to get pre-approved for a home loan in Michigan | /learn/how-to-get-pre-approved-for-a-mortgage/ | how to get pre approved for a home loan | 12,100 | 22 | Informational | best place to get pre approved (720, KD 23), best pre approval home loan (320), instant mortgage pre approval (320) | mortgagecenter.com #19–26; Align ranks 1.9 only for "michigan mortgage pre-approval" (GSC) | /purchase/mortgage-readiness-review/ then app.alignlending.com | P0 | High / Medium |
| 2 | Michigan first-time home buyer programs and grants for 2026 | /learn/michigan-first-time-home-buyer-programs/ | michigan first time home buyer programs | 3,600 | 5 | Informational | michigan first time home buyer grant (3,600, KD 1), first time home buyer michigan (2,900, KD 0), first time home buyer loan michigan (170) | rossmortgage.com #31 for "grant"; themortgagereports.com Michigan programs page; PAA "$25,000" and "$7,500" grant questions | /purchase/first-time-homebuyer/ + /purchase/down-payment-assistance/ | P0 | High / Medium |
| 3 | MSHDA MI Home Loan and MI 10K down payment assistance, explained | /learn/mshda-mi-home-loan/ | mshda down payment assistance | 880 | 0 | Informational | mshda mi home loan (720), mshda loan (590), mshda income limits (390), mi home loan (590, KD 19), mshda loan requirements (140), mshda first-generation dpa (140) | Align ranks 48 for "mshda down payment assistance income limits" (DFS); 0 GSC queries contain "mshda" | /purchase/down-payment-assistance/ | P0 | High / Medium |
| 4 | Michigan's principal residence exemption: how and when to file | /learn/michigan-principal-residence-exemption/ | michigan homestead exemption | 880 | 0 | Informational | michigan principal residence exemption (590, KD 0); PAA "How much does the homestead exemption save in Michigan?" | Align's generic page ranks 22.8–29.9 (GSC); no competitor measured | /michigan-property-tax-calculator/ + /purchase/first-time-homebuyer/ | P0 | High / Low |
| 5 | Closing costs in Michigan: who pays what, and how much | /learn/closing-costs-in-michigan/ | closing costs in michigan | 210 | 6 | Informational | when is closing cost due (260, KD 21); PAA: 10 questions incl. "Who typically pays closing costs in Michigan?" | themortgagereports.com #2 for "when is closing cost due"; mortgagecenter.com FAQ covers Michigan tax prorations | /compare-loan-estimates/ | P0 | High / Medium |
| 6 | What is a non-warrantable condo? A Michigan buyer's guide | /learn/what-is-a-non-warrantable-condo/ | non warrantable condo | 1,600 | 0 | Informational | what is a non warrantable condo (480), non warrantable condo loans (390), lender (390), meaning (260) | mortgagecenter.com #5–19; Align has 0 GSC impressions | /product-loans/non-warrantable-condo-loans/ | P0 | High / Low |
| 7 | What disqualifies you from a home equity loan or HELOC? | /learn/what-disqualifies-you-from-a-home-equity-loan/ | what disqualifies you from getting a home equity loan | 880 | 2 | Informational | home equity loan with 520 credit score (90), heloc limit (170, KD 38) | themortgagereports.com #2; **original data**: Align's Market Report shows home equity applications were denied about twice as often as purchase loans in Michigan (2025 HMDA) | /product-loans/heloc/ + /refinance/home-equity-review/ | P0 | High / Low |
| 8 | How much house can you afford in Michigan on your income? | /learn/how-much-house-can-i-afford-michigan/ | how much house can I afford (Michigan) | n/m | n/m | Informational | 13 PAA salary questions, e.g., "How much do you need to make to afford a $300,000 house in Michigan?" | PAA salary questions in 9 of 15 seeds; competitors answer with national taxes, not Michigan uncapped taxes | /home-affordability-calculator/ | P0 | High / Medium |
| 9 | Can you get a mortgage at 60, 70 or 80? | /learn/mortgage-for-seniors/ | home loans for seniors on social security | 210 | 23 | Commercial | senior mortgage loan (140, KD 1), fha cash out plan for seniors (110), can you buy a house on social security (90) | themortgagereports.com #2; PAA age questions in 9 of 15 seeds; anchor the answer in ECOA/Reg B's ban on age discrimination | /refinance/ + /purchase/homebuyer-game-plan/ | P0 | High / Low |
| 10 | Detroit property taxes for home buyers: what you will actually pay | /learn/detroit-property-taxes/ | property tax detroit michigan | 8,100 | 11 | Informational (part navigational) | property tax in detroit michigan (8,100, KD 2) | No competitor measured; AI engines cite detroitmi.gov and highlandparkmi.gov | /mortgage-lender-detroit-mi/ | P1 | Medium / Medium |
| 11 | Michigan homestead property tax credit: who qualifies and how much | /learn/michigan-homestead-property-tax-credit/ | michigan homestead property tax credit | 1,600 | 0 | Informational | PAA: 8 questions (seniors, income limit, how it is calculated) | No competitor measured | /michigan-property-tax-calculator/ | P1 | Medium / Low |
| 12 | Michigan millage rates by city, township and school district | /research/michigan-millage-rates/ | michigan property tax millage rates | 1,000 | 9 | Informational | michigan property tax rate (1,000, KD 22), oakland county michigan property tax (720), wayne county michigan property tax (3,600, KD 13) | Align ranks 40.5 for "michigan property tax rate" (GSC); data already exists in the Uncapping Study | /michigan-property-tax-calculator/ | P1 | High / Low |
| 13 | Buying a home on SSI or disability income in Michigan | /learn/buying-a-home-on-ssi-or-disability-income/ | ssi disability home loans requirements | 720 | 0 | Informational | ssi home buying program (590, KD 16), housing grants for people with disabilities (590, KD 17), mortgage loans for disabled people (480, KD 1) | themortgagereports.com #1–2 | /purchase/homebuyer-game-plan/ | P1 | Medium / Medium |
| 14 | How to choose a mortgage lender in Michigan | /learn/how-to-choose-a-mortgage-lender-michigan/ | michigan mortgage lenders | 1,000 | 9 | Commercial | best mortgage lenders in michigan (170; Align at 47–50 via /mortgage-michigan/) | Benzinga, Tomo and Zillow listicles; AI engines cite BBB, FastExpert and Riverbank | / (home) | P1 | Medium / Medium |
| 15 | Do conventional loans require a home inspection? | /learn/conventional-loan-home-inspection/ | home inspection for conventional loan | 720 | 0 | Transactional | conventional loan inspection requirements (90, KD 0) | themortgagereports.com #2 | /product-loans/conventional-loans/ | P1 | Medium / Low |
| 16 | Letter of explanation for a mortgage: when you need one and what to write | /learn/letter-of-explanation-mortgage/ | letter of explanation for mortgage example | 390 | 0 | Informational | mortgage loan letter of explanation sample (390, KD 0) | themortgagereports.com #2 | /purchase/mortgage-readiness-review/ | P1 | Medium / Low |
| 17 | How to borrow against a house you own free and clear | /learn/borrow-against-paid-off-house/ | i own my house outright and want a loan | 210 | 0 | Transactional | i own my home and need money (140, KD 28), own home outright (140, KD 9) | themortgagereports.com #2 | /product-loans/home-equity-loan/ + /product-loans/cashout-loans/ | P1 | Medium / Low |
| 18 | Is HELOC interest tax deductible in 2026? | /learn/is-heloc-interest-tax-deductible/ | is heloc interest deductible in 2026 | 320 | 0 | Commercial | heloc tax deduction 2026 (90, KD 4) | themortgagereports.com #2 [VERIFY: IRS Pub. 936] | /product-loans/heloc/ | P1 | Medium / Low |
| 19 | Can you add someone to a mortgage? | /learn/add-someone-to-a-mortgage/ | can you add someone to a mortgage loan | 320 | 0 | Informational | adding a name to a mortgage (170, KD 0) | themortgagereports.com #2–4 | /refinance/ | P1 | Medium / Low |
| 20 | VA manual underwriting: when it happens and what it takes | /learn/va-manual-underwriting/ | va manual underwriting guidelines | 390 | 15 | Informational | what is the va amendatory clause (50) | gustancho.com #6 (CPC $35.74 signals commercial value) | /product-loans/va-loans/ + /purchase/va-homebuyer-plan/ | P1 | Medium / Medium |
| 21 | The HUD $100 down program: how HUD homes work in Michigan | /learn/hud-100-down-program/ | fha hud $100 down program | 320 | 8 | Informational | hud $100 down payment program (170, KD 20) | gustancho.com #6 [VERIFY: HUD Homestore terms] | /product-loans/fha-loans/ | P1 | Medium / Low |
| 22 | Collections and charge-offs: what FHA and conventional underwriters require | /learn/collections-charge-offs-mortgage/ | fha guidelines on charge offs | 210 | 0 | Informational | fha collection accounts (140), fannie mae collection accounts (90, KD 28), can you get a mortgage with collections (50) | gustancho.com #2–6 | /purchase/mortgage-readiness-review/ | P1 | Medium / Low |
| 23 | Buying a house after bankruptcy: waiting periods by loan type | /learn/buying-a-house-after-bankruptcy/ | fha chapter 13 bankruptcy | 90 | 21 | Informational | conventional bk waiting period (50), fha chapter 7 waiting period (50), buying a house in chapter 13 (50) | gustancho.com #1–7 | /purchase/mortgage-readiness-review/ | P1 | Low–Medium / Low |
| 24 | Michigan's disabled veteran property tax exemption, explained | /learn/michigan-disabled-veteran-property-tax-exemption/ | michigan disabled veteran property tax exemption | 170 | 2 | Informational | veterans property tax exemptions (50) | gustancho.com #4 (generic page) [VERIFY: MCL 211.7b, Treasury Form 5107] | /purchase/va-homebuyer-plan/ | P1 | Medium / Low |
| 25 | What not to tell a mortgage lender, and what you must disclose | /learn/what-not-to-tell-a-mortgage-lender/ | what not to tell a mortgage lender | n/m | n/m | Informational | "What not to say to a mortgage broker?" | PAA in 8 of 15 seeds; frame around honesty (misrepresentation is a federal crime, 18 U.S.C. §1014) | /purchase/mortgage-readiness-review/ | P1 | Medium / Low |
| 26 | Using a cash-out refinance to pay off credit cards: the math and the risks | /learn/cash-out-refinance-debt-consolidation/ | refinance to consolidate debt | 110 | 8 | Transactional | secured debt consolidation (50), mortgage credit card debt (50) | rossmortgage.com #8–43; CPC $55–69 | /product-loans/cashout-loans/ | P1 | Medium / Low |
| 27 | Debt-to-income ratio calculator (tool) | /debt-to-income-calculator/ | fha dti calculator | 320 | 23 | Informational | debt to income calculator fha (320, KD 24), high dti mortgage loans (320, KD 31), piti ratio (50) | gustancho.com #4–6 | /home-affordability-calculator/ then the app | P1 | Medium / Medium |
| 28 | Hobby farm loans in Michigan | /learn/hobby-farm-loans-michigan/ | hobby farm loans | 170 | 2 | Commercial | | mortgagecenter.com #7 | /product-loans/usda-loans/ | P2 | Low / Low |

**Briefing notes for the blog writers:**
- **N1 pre-approval.** Use H2s for the document checklist (pay stubs, W-2s, two years of tax returns for the self-employed, two months of bank statements), the hard pull and the 45-day rate-shopping window [VERIFY: CFPB], how long a letter lasts, and "What can void a preapproval?". Link to `/learn/prequalified-vs-preapproved-whats-difference/`.
- **N2 pillar and N3 MSHDA.** Cover the MI Home Loan, MI 10K DPA, the first-generation DPA [VERIFY current status and amount], the MCC (30/mo), Detroit DPA layering (detroitmi.gov bulletin of 2026-08-12, lien order MSHDA first → MSHDA DPA → Detroit DPA), and the Michigan First-Time Home Buyer Savings Program [VERIFY]. The Step Forward program should get one line on its status [VERIFY]. Answer the PAA "$25,000" and "$7,500" questions directly.
- **N4 PRE.** Cover Form 2368 and the filing deadlines [VERIFY: Michigan Treasury, June 1 / November 1], and the up-to-18-mill school operating exemption. Use a worked example from Uncapping Study millage data. Add a two-home rule H2 that links to R8.
- **N5 Michigan closing costs.** Cover state transfer tax ($3.75 per $500) and county tax ($0.55 per $500 in most counties), who customarily pays (seller pays transfer tax and owner's title policy in most Michigan markets [VERIFY with a title company]), recording fees, prepaid summer and winter taxes, escrow, and the 3-7-3 disclosure timeline. The worked example must be labeled illustrative and must not include rate or APR figures.
- **N7 home equity disqualifiers.** Quote Align's Market Report: in 2025, 22.6% of decided Michigan applications were denied, 15.5% for purchase, about double that for home equity, and DTI and credit history were the top reasons.
- **N8 affordability.** Build salary-to-price tables with labeled illustrative assumptions and Michigan post-sale taxes from the Uncapping Study. Show no rate or APR. Link to the affordability calculator for live math.
- **N9 seniors.** Cover ECOA/Reg B, the term-length myth, retirement asset depletion income, HECM vs. forward mortgage, and FHA cash-out for seniors.

**Cannibalization guards:**
- N1 owns "how to get pre approved". `/learn/importance-of-mortgage-preapproval/` keeps "why" and `/learn/prequalified-vs-preapproved-whats-difference/` keeps the comparison.
- N2 owns "michigan first time home buyer programs/grants". N3 owns "mshda …". `/purchase/down-payment-assistance/` owns "michigan down payment assistance".
- N4 owns "michigan homestead exemption". Cut the Michigan sections of `/learn/homestead-exemption-benefits-and-filing-guide/` to a summary that links to N4, and keep its national "what is homestead exemption" ranking (12.2).
- N12 owns millage. The calculator page owns "calculator/estimator".

---

## 7. Internal linking for the new pages (first pass)

- Each Michigan property tax page (N4, N10, N11, N12, N24) links to `/michigan-property-tax-calculator/` with the anchor "estimate your Michigan property tax after you buy". It also links to `/research/michigan-property-tax-uncapping-study/` with the anchor "Align Lending's 2026 uncapping study".
- N2 and N3 link to each other and to `/purchase/first-time-homebuyer/` (anchor "your first-time buyer plan") and `/purchase/down-payment-assistance/` (anchor "Michigan down payment assistance options").
- N1, N16, N22, N23 and N25 link to `/purchase/mortgage-readiness-review/` (anchor "a no-credit-pull readiness review"). This matches the site trust strip "No credit pull to talk".
- N7, N17, N18 and N26 link to `/refinance/cash-out-vs-home-equity/` (anchor "cash-out refinance vs. home equity loan vs. HELOC").

---

## 8. Data notes and caveats

- DataForSEO volumes are US monthly averages. Close variants often share one grouped number: for example, twenty "michigan first time home buyer …" variants all return 3,600. KD runs 0–100, and many long-tail gaps show KD 0, which means DataForSEO has too little data to score them; it does not mean they are easy.
- `datawise_keyword_gap` compares only the top 300 keywords of each domain. Long-tail gaps beyond that set are not visible here, which is why the PAA bank and the Michigan keyword research supplement it.
- Align positions combine DataForSEO ranked keywords (DFS, a snapshot) with GSC 90-day average positions. Where neither has data, the CSV says "not in top 100 (DFS) / no GSC impressions".
- No Bing data is connected. See the Bing/Copilot section of `ai-visibility.md`. A Bing Webmaster Tools export is needed before Bing gaps can be measured.

---

## Auditor corrections

*Added by the independent content auditor, 2026-11-15. Full detail: `08-audit/audit-content.md`; exact replacement text: `08-audit/corrections-content.csv`. Verdict: **PASS WITH CORRECTIONS**.*

**Confirmed:**
- `datawise_keyword_metrics` re-check: "how to get pre approved for a home loan" 12,100 / KD 22; "michigan property tax calculator" 9,900 / KD 13; "michigan homestead exemption" 880 / KD 0; "michigan principal residence exemption" 590 / KD 0; "michigan first time home buyer programs" 3,600 / KD 5.
- GSC: property tax calculator 77 @48.8; homestead 22.8–29.9; 0 queries contain "mshda".
- Uncapping figures (50.5%; 9% in 2013; 37% Monroe to 92% Charlevoix) and HMDA figures (22.6% / 15.5% / ~2× / 364,013), both from page text.
- 65 of 221 PAA questions map to NEW.

**Not reproduced** (paid tools, no raw output saved): the 459 keywords / position 59.3, the competitor positions, the AI tracker and the AI mentions. They are internally consistent. Label "about 37 visits a month" as a DataForSEO estimate; GSC shows 241 clicks in the last 30 days.

**Refuted:**
1. "All 4 research pages have … no Dataset schema". Both report pages already carry `Dataset`, `DataDownload` and `Report`. "Original data leverage" moves 55 → **60 D**.
2. N27 "Debt-to-income ratio calculator (tool)". `/learn/debt-to-income-ratio-dti/` already runs an on-page calculator; retitle that page instead.

**Corrected:**
- **Pre-approval volume.** The 12,100 is national; "michigan mortgage pre approval" shows 0 volume.
- **Homestead page.** It is Michigan-heavy (Form 2368, 6 Michigan H2s), not "generic multi-state". Refresh it as the PRE owner ("Homestead Exemption in Michigan: What It Is and How to File"); no new N4 URL.
- **N2 pillar** duplicates the existing `/learn/first-time-home-buyer-grants-and-programs/`, which already covers MSHDA and "$25,000". Refresh it as "Michigan First-Time Homebuyer Programs and Grants".
- **N5 closing costs** becomes the merged `/learn/closing-costs/` canonical (P1). **N9** drops to P1. **N6** keeps a single owner per intent.
- **N1 destination** is `/start/`, not app.alignlending.com.
- **N21 title** removes "$100 down" [COUNSEL].
- **Answer blocks.** R1 needs the guide §7.6 taxable-value wording. R6 is trimmed to 56 words with no "Most banks". R7 loses "only". R2 drops "2026".
- **keyword-gaps.csv:** 4 rows point to merge members. "best place to get pre approved" is 720 in the report but 590 in the CSV.
- **paa-question-bank.csv:** move 2 VA "no down payment" questions and 1 "average down payment" question off money pages; remap 7 questions from merge members to canonicals; remap the PRE, pillar and closing-cost "NEW" mappings to the existing pages.
- **Citation share** harmonized at 40 with `ai-visibility.md`.
