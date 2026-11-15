# AI-search visibility and AEO playbook: alignlending.com

Prepared 2026-11-15. Sources:
- **DataWise AI Visibility tracker**, project "Align Michigan watchlist". It holds 12 prompts across ChatGPT, Gemini, Google AI Mode and Perplexity, last checked 2026-11-03 and 2026-11-04. Brand terms tracked: "Align Lending", "alignlending", "Samantha Shelton".
- **DataWise AI Mentions** (DataForSEO LLM Mentions), aggregated over the last period: one Google (AI Overviews/AI Mode) comparison and one ChatGPT comparison.
- Live checks of the home page and `/learn/michigan-taxable-value/` JSON-LD, robots.txt, and the 2026-11-15 crawl.

---

## 1. Summary

- **Align is cited on 4 of 12 tracked prompts, and on 5 of 48 engine checks (10%).** Every citation comes from ChatGPT, Gemini or Perplexity. Google AI Mode cited Align on 0 of 12.
- **The local-broker prompts work. The question prompts mostly do not.**
  - ChatGPT named Align first for "Best mortgage broker near Waterford, Michigan" ("Align Lending would be my first…"), citing `/mortgage-lender-waterford-mi/`.
  - ChatGPT cited the Berkley city page at position 3 for an Oakland County broker prompt.
  - Perplexity cited Align first for broker vs. bank (`/learn/benefits-of-working-with-mortgage-broker/`) and second for bank statement loans.
  - Align is **absent on all four engines** for both uncapping prompts, the transfer tax prompt, the Loan Estimate prompt, points vs. lender credit, FHA/VA brokers, and Troy and Ann Arbor brokers.
- **Align's research is not reaching AI answers yet.** The Michigan Property Tax Uncapping Study (published 2026-09-30) is the most specific uncapping dataset in the state. Even so, the two uncapping prompts cite michigan.gov and municipal sites (Southfield, Melvindale, Menominee, Dearborn, Midland) instead.
- **One Michigan broker dominates Google's AI surfaces.** In Google AI Overviews and AI Mode, riverbankfinance.com has **785 mentions (423,730 AI search volume)** against Align's **19 (4,090)**. Riverbank was cited on 7 of Align's 12 tracked prompts. It wins with program × location pages ("FHA/VA home loans in Grosse Pointe, MI") and Michigan calculators ("Michigan property transfer tax calculator").
- **ChatGPT is Align's strongest engine.** Align has 40 ChatGPT mentions (1,057 AI search volume), behind lendmire.com (52, 3,636) and far ahead of riverbankfinance.com (4), rossmortgage.com (3) and clear2mortgage.com (1).

---

## 2. Scorecard

| Aspect | Score | Grade | Rationale (evidence) |
|---|---|---|---|
| Citation rate on tracked prompts | 40 | F | 5 citations in 48 engine-prompt checks; 4 of 12 prompts cited by at least one engine (tracker, 2026-11-03/04). |
| Google AI Overviews / AI Mode presence | 15 | F | 0 of 12 tracked prompts; 19 Google AI mentions against riverbankfinance.com's 785 (`ai_mentions`, platform google). |
| ChatGPT presence | 70 | C | 40 mentions, second of 5 compared domains, with first-position answers for Waterford (tracker and `ai_mentions` chatgpt). |
| Answer-block and schema readiness | 75 | C | 469 of 471 `/learn/` pages have FAQPage and question H2s and 466 have SpeakableSpecification (crawl); `/learn/michigan-taxable-value/` carries Article with datePublished 2026-09-30 and dateModified 2026-10-27 (live JSON-LD). |
| Original data reaching AI answers | 20 | F | 0 citations on 2 uncapping prompts despite the 83-county Uncapping Study; all 4 research pages have `faq_q = 0` and no Dataset schema (crawl). |
| Entity consistency and third-party corroboration | 60 | D | Home `sameAs` lists Facebook, Instagram, LinkedIn, NMLS Consumer Access and GBP. BBB is missing even though it is the most-cited domain in these AI answers (35 citations). DFS shows lookalike brand queries landing on Align ("aligned mortgage" 26, "align finance" 43, "lockit lending" 37). |
| Local (city) AI coverage | 50 | F | Waterford and the Oakland County prompt are cited (ChatGPT, Gemini); the Troy and Ann Arbor prompts are absent on all 4 engines. |

---

## 3. Results by prompt (tracker)

| Prompt | ChatGPT | Gemini | Google AI Mode | Perplexity | Cited instead (top domains) |
|---|---|---|---|---|---|
| Who is a good mortgage broker in Oakland County, Michigan? | **Cited #3** (`/mortgage-lender-berkley-mi/`) | Absent | Absent | Absent | fastexpert.com, comparespot.org, firstcommercefinancial.com, nmlsconsumeraccess.org; Gemini: advantagelendingcorp.com, riverbankfinance.com (Oakland County page); Perplexity: bbb.org ×8; AI Mode: yelp |
| Best mortgage broker near Waterford, Michigan | **Cited #1** (`/mortgage-lender-waterford-mi/`) | **Cited #3** (home, `/contact-us/`) | Absent | Absent | riverbankfinance.com (Waterford page), michiganmortgagesolutions.com, yelp, bbb.org, yellowpages |
| Should I use a mortgage broker or a bank to buy a house in Michigan? | Absent | Absent | Absent | **Cited #1** (`/learn/benefits-of-working-with-mortgage-broker/`) | consumerfinance.gov, nerdwallet.com, michigan.gov, experian, bankrate, themortgagereports.com, michiganfirst.com, riverbankfinance.com |
| How much will my property taxes go up after I buy a house in Michigan? | Absent | Absent | Absent | Absent | michigan.gov, dearborn.gov, cityofsouthfield.com, melvindale.org, menominee.us, ownwell.com, homelight.com, smartasset.com |
| Which Michigan mortgage brokers do FHA and VA loans? | Absent | Absent | Absent | Absent | clear2mortgage.com (`/fha-loans/michigan/`), riverbankfinance.com (city FHA/VA pages), michiganvamortgage.com, expresshomeloans.com |
| Who can help me with a bank statement loan in Michigan if I'm self-employed? | Absent | Absent | Absent | **Cited #2** (`/product-loans/bank-statement-loan/`) | clear2mortgage.com, riverbankfinance.com (`/michigan-bank-statement-loans.html`), lendmire.com (4 Michigan bank statement pages), griffinfunding.com |
| How do I compare two Loan Estimates? | Absent | Absent | Absent | Absent | consumerfinance.gov; lendmire.com (`/loan-estimate-comparison-table/`) |
| What is the Michigan transfer tax and who pays it? | Absent | Absent | Absent | Absent | michigan.gov, legislature.mi.gov, riverbankfinance.com (`/michigan-property-transfer-tax-calculator.html`), ravenreg.com |
| Is it better to pay points or take a lender credit? | Absent | Absent | Absent | Absent | consumerfinance.gov |
| Mortgage broker in Troy, Michigan | Absent | Absent | Absent | Absent | mtgpros.com, clear2mortgage.com (`/troy/`), riverbankfinance.com (Troy page), bbb.org |
| Mortgage broker in Ann Arbor, Michigan | Absent | Absent | Absent | Absent | a2mortgage.com, arboronemortgage.com, ruoff.com, bbb.org |
| How does uncapping work on Michigan property taxes? | Absent | Absent | Absent | Absent | michigan.gov, cityofmidlandmi.gov, menominee.us, melvindale.org, cityofsouthfield.com, detroitmi.gov |

**Share of voice across the 12 prompts** (citations; number of prompts cited):

| Domain | Citations | Prompts |
|---|---|---|
| bbb.org | 35 | 4 |
| michigan.gov | 33 | 6 |
| consumerfinance.gov | 18 | 3 |
| riverbankfinance.com | 16 | 7 |
| google.com | 13 | 5 |
| melvindale.org | 13 | 2 |
| **alignlending.com** | **10** | **4** |
| lendmire.com | 8 | 2 |
| clear2mortgage.com | 7 | 3 |
| ravenreg.com | 7 | 2 |

**Domain-level AI mentions** (`datawise_ai_mentions`):

| Domain | Google AI mentions | Google AI search vol | ChatGPT mentions | ChatGPT AI search vol |
|---|---|---|---|---|
| alignlending.com | 19 | 4,090 | 40 | 1,057 |
| riverbankfinance.com | 785 | 423,730 | 4 | 91 |
| rossmortgage.com | 16 | 2,930 | 3 | 21 |
| clear2mortgage.com | 8 | 5,200 | 1 | 18 |
| michiganmortgagesolutions.com | 1 | 210 | n/a | n/a |
| lendmire.com | n/a | n/a | 52 | 3,636 |

In ChatGPT answers, Align is cited most often alongside rocketmortgage.com (16 co-mentions), homes.com (8) and singlefamily.fanniemae.com (4).

### The three owner-requested prompts

| Prompt | Tracked? | Status (closest evidence) | Who is cited |
|---|---|---|---|
| "best mortgage broker in Michigan" | Not as worded | The two closest tracked prompts (Oakland County, Waterford) are cited by ChatGPT (#3, #1) and Gemini (#3), but absent in Perplexity and Google AI Mode | fastexpert, comparespot, bbb.org, riverbankfinance, advantagelendingcorp, yelp |
| "Michigan first-time homebuyer programs" | No | No proxy prompt. Organically, Align does not rank in the 3,600/mo cluster and no GSC query contains "mshda" | Unmeasured; web results sampled 2026-11-15 show michigan.gov/mshda, themortgagereports.com, askdoss.com and lender pages. **Add to the tracker.** |
| "how does Michigan property tax uncapping affect a mortgage payment" | Not as worded | Both uncapping prompts are **absent on all four engines** | michigan.gov, city and county sites, ownwell, homelight, smartasset |

---

## 4. Why the cited domains win

1. **Government and municipal sites win the definitions.** For "how does uncapping work", the engines cite the authority that writes the rule (michigan.gov) and the city assessors who explain it. Align will not outrank the source of the rule. It can become the source for the **number**: how much taxes rise, county by county. To do that, Align has to state the figure in quotable form on pages that other sites link to.
2. **Program × place pages win the "who can help me with X in Michigan" prompts.** Riverbank (`/services/<city>-fha-va-home-loans-<city>-mi.html`, `/mortgage-programs/michigan-bank-statement-loans.html`), clear2mortgage (`/fha-loans/michigan/`, `/bank-statement-loans/michigan/`) and lendmire (four Michigan bank statement pages) all say "we do X in Michigan" in the first lines. Align's product pages are titled "<Program> in Michigan", but the AI engines did not use them for the FHA/VA prompt.
3. **Tools with the state name in the title win the tool prompts.** Riverbank's "Michigan property transfer tax calculator" is cited by Gemini and Google AI Mode. Align has `/michigan-transfer-tax-calculator/` and `/learn/michigan-transfer-tax/` and was not cited.
4. **Comparison tables win the comparison prompts.** lendmire's `/loan-estimate-comparison-table/` is cited for "How do I compare two Loan Estimates?". Align has `/compare-loan-estimates/` and `/learn/how-to-compare-loan-estimates/` and was not cited.
5. **Directories win "best broker" prompts.** BBB (35 citations), Yelp, FastExpert, comparespot.org, Expertise.com and NMLS Consumer Access act as third-party corroboration.
6. **Gemini quotes contact-page facts.** Its citations of Align use text fragments from `/contact-us/`: "Waterford, MI Mortgage Broker", "NMLS #2041154", "Equal Housing Opportunity" and appointment hours. Consistent, crawlable NAP and licensing text is being used.

---

## 5. AEO playbook (ranked)

Each tactic lists the exact change, the pages it applies to and its priority. Copy follows the brief: no rates, no superlatives, Samantha's byline, and Sources lists.

### P0: do this month

**A1. Put the Uncapping Study's numbers in answer blocks where the engines look.**
- Answer block to place under the uncapping H2 on `/learn/michigan-taxable-value/`, `/michigan-property-tax-calculator/` and the new Detroit, PRE and millage pages (exact, 55 words): "When you buy a Michigan home, its taxable value uncaps the next year and resets to the state equalized value, half of market value. In 2026 that reset raised a typical home's taxable value about 50%, from 37% in Monroe County to 92% in Charlevoix County (Align Lending Uncapping Study, Michigan Treasury data)."
- Add a "Cite this study" block on `/research/michigan-property-tax-uncapping-study/`. Suggested citation (exact): "Align Lending. Michigan Property Tax Uncapping Study, 2026 edition. Published September 30, 2026; revised October 27, 2026. Data: Michigan Department of Treasury. CC BY 4.0. https://alignlending.com/research/michigan-property-tax-uncapping-study/"
- Add Dataset JSON-LD to the study page. Fill `[CSV URL]` with the live download link.
```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Michigan Property Tax Uncapping Study, 2026 edition",
  "description": "Taxable value versus state equalized value for all 83 Michigan counties and 1,534 cities and townships, measuring the taxable value reset after a home sale, 2008 to 2026.",
  "url": "https://alignlending.com/research/michigan-property-tax-uncapping-study/",
  "creator": {"@type": "Organization", "name": "Align Lending LLC", "url": "https://alignlending.com/"},
  "author": {"@type": "Person", "name": "Samantha Shelton", "identifier": "NMLS 1647301"},
  "datePublished": "2026-09-30",
  "dateModified": "2026-10-27",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isBasedOn": "Michigan Department of Treasury, State Tax Commission records",
  "spatialCoverage": {"@type": "Place", "name": "Michigan, United States"},
  "temporalCoverage": "2008/2026",
  "distribution": [{"@type": "DataDownload", "encodingFormat": "text/csv", "contentUrl": "[CSV URL]"}]
}
```
- Do the same for `/research/michigan-mortgage-market-report/` (2025 HMDA, 364,013 applications). Add question H2s with 40–60-word answers to both research pages; both have `faq_q = 0` today. Example H2s: "How much does a Michigan home's taxable value rise after it sells?" and "What share of Michigan mortgage applications were denied in 2025?" (answer: 22.6% of decided applications; 15.5% for purchase loans).

**A2. Earn third-party citations for the research.** AI engines cite sites that link to sources. Pitch the county table (37% to 92% by county) and the 2013-to-2026 trend (9% to 50.5%) to:
- Michigan newsrooms: Detroit Free Press, The Detroit News, Crain's Detroit Business, MLive, Bridge Michigan, WDIV/WWJ.
- Michigan Realtors and the local boards (Greater Metropolitan Association of Realtors, Oakland County).
- County equalization departments, offering the data as free-to-cite (CC BY).

Track the links that result with `datawise_backlinks` once a month.

**A3. Write "we do X in Michigan" entity statements into the first 60 words of each product page, and add program facts to city pages.**
- FHA template (exact; adapt per program): "Align Lending arranges FHA loans for Michigan buyers through multiple wholesale lenders. We are an independent mortgage broker in Waterford, NMLS #2041154, licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas. Samantha Shelton (NMLS 1647301) reviews every file. FHA allows 3.5% down with a 580 credit score. [VERIFY: HUD 4000.1]"
- On city pages, add an H2 "Which loan programs can you use in <City>?" Answer in two or three sentences with city-specific facts: the county FHA loan limit (from `/loan-limits/`), USDA eligibility yes or no [VERIFY: USDA eligibility map], and the MSHDA price limit. This answers the FHA/VA and bank statement broker prompts without creating thin program × city pages.

**A4. Fix where tools and comparisons are not cited.**
- `/michigan-transfer-tax-calculator/`: add a 50-word answer above the tool: "Michigan charges a state real estate transfer tax of $3.75 per $500 of sale price and a county tax of $0.55 per $500 in most counties. By custom the seller pays both, though the purchase agreement controls. Some transfers are exempt. Enter your price to see both amounts. [VERIFY: Michigan Treasury, MCL 207.526]"
- `/learn/how-to-compare-loan-estimates/`: add an HTML table, "Loan Estimate line items, in the order to compare them". Rows: A Origination charges · B Services you cannot shop for · C Services you can shop for · E Taxes and government fees · F Prepaids · G Initial escrow · J Lender credits · Total closing costs · Cash to close. Columns: "What it is" · "Can it change at closing?" (cite CFPB tolerance rules). This is the format lendmire is cited for.
- `/points-vs-lender-credit-calculator/`: add a 45-word answer with no rates: "Paying points means paying cash at closing for a lower rate; one point costs 1% of the loan amount. A lender credit works the other way. Divide the point cost by the monthly savings to find your break-even month, then compare it with how long you expect to keep the loan."

**A5. Build the six P0 posts in answer-first format** (see `competitor-gap-report.md` section 6). The H2s come from `paa-question-bank.csv`. Each H2 is followed by a 40–60-word direct answer that names a Michigan number and its source, then the detail.

### P1: this quarter

**A6. Corroborate the entity through the directories AI engines already cite.**
- Claim or complete the BBB profile. BBB is the most-cited domain in these answers (35 citations).
- Do the same for Yelp (Google AI Mode cites m.yelp.com for local broker prompts), FastExpert, Expertise.com and comparespot.org, plus a Bing Places listing (see section 7).
- Use identical NAP everywhere: Align Lending LLC, Pontiac Lake Road, Waterford, MI, 248-506-5727, NMLS #2041154.
- Use only review counts shown on the platform itself. Never solicit fake reviews.
- Then extend the Organization `sameAs` with the BBB and Yelp profile URLs once they exist. Do not add real-estate portals.

**A7. Strengthen Person and Organization schema** (home, `/about-us/`, `/samantha-shelton/`):
- Person (Samantha Shelton): add `award` ["Hall of AIME", "NAMB Broker of the Year", "Woman with Vision"] [VERIFY: award names and years with the issuers]. Add `hasCredential` (NMLS 1647301) and `sameAs` (her NMLS Consumer Access individual page and her LinkedIn).
- Organization: add `legalName` "Align Lending LLC", `foundingDate` "2020-08", `founder` (the Person above), and `alternateName` "Align Lending". The goal is to separate Align from lookalike names that DFS shows confusing searchers: "aligned mortgage", "align finance", "align mortgage", "lockit lending", "belong lending".

**A8. Make every update date visible and machine-readable.** The checked article already has `dateModified` in its Article schema. Also:
- Add `<meta property="article:modified_time">`. It is missing on `/learn/michigan-taxable-value/`; only `article:publisher` is present.
- Show the full date ("Updated October 27, 2026") instead of "Updated October 2026" in the byline.

**A9. Close the gaps on Google AI Mode** (0 of 12). AI Mode leans on Google's organic index and the Business Profile.
- Finish the P0 refreshes so the target pages reach the top 10.
- Complete the GBP services list (FHA, VA, USDA, conventional, jumbo, bank statement, DSCR, HELOC), post monthly, and answer GBP Q&A with the same 40–60-word answers.
- Create a DataWise Local project so `datawise_gbp_audit` can score the profile. None exists today: `list_projects` shows only the organic project.

### P2: backlog

**A10. Keep AI crawlers allowed.** robots.txt (checked 2026-11-15) disallows only `/wp-admin/`. Confirm the host or WAF does not rate-limit GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended or Bingbot. The crawl brief notes the server resets bursts of requests.

**A11. Expand the tracker.** Viewing the tracker is free; add these prompts:
1. "best mortgage broker in Michigan"
2. "Michigan first-time homebuyer programs"
3. "how does Michigan property tax uncapping affect a mortgage payment"
4. "What is MSHDA MI 10K down payment assistance?"
5. "How much are closing costs in Michigan?"
6. "What is a non-warrantable condo?"
7. "Can I get a mortgage at 70?"
8. "How do I file the Michigan principal residence exemption after closing?"
9. "What disqualifies you from a HELOC?"
10. "Detroit property taxes after buying a house"
11. "How do I get pre-approved for a mortgage in Michigan?"

Re-check monthly. Run `datawise_ai_mentions` quarterly against riverbankfinance.com, clear2mortgage.com and lendmire.com.

---

## 6. Measurement

| Metric | Baseline (2026-11) | Source | Target by 2027-02 |
|---|---|---|---|
| Tracked prompts cited (any engine) | 4 of 12 | DataWise tracker | 10 of 23 (after adding 11 prompts) |
| Engine-prompt citations | 5 of 48 | DataWise tracker | 15 or more |
| Google AI mentions | 19 | `ai_mentions` google | 60 or more |
| ChatGPT mentions | 40 | `ai_mentions` chatgpt | 70 or more |
| Uncapping prompts cited | 0 of 2 | DataWise tracker | 2 of 2 on at least one engine |
| Referring domains linking to /research/ | measure with `datawise_backlinks` | DataWise backlinks | +10 Michigan news or association links |

Targets are planning goals, not forecasts.

---

## 7. Bing and Copilot (no Bing data connected)

Microsoft Copilot grounds its answers on Bing's index, so a page Bing has not indexed and ranked cannot be cited in Copilot. **A Bing Webmaster Tools export is needed** before Bing gaps can be measured:
- Search Performance, queries and pages, last 90 days.
- URL inspection and index coverage for the 28 new and 14 refreshed URLs.
- Backlinks.
- Any AI or Copilot citation reporting the account shows.

No Bing numbers appear in this report. Factors that matter for this site:
- **Exact-match titles, H1s and URLs.** Bing reads these more literally than Google, so the refreshed titles in `competitor-gap-report.md` section 5 put the exact query first (for example "Michigan Property Tax Calculator…", "Conventional Loan Guidelines 2026…"). Keep slugs literal (`/learn/closing-costs-in-michigan/`).
- **IndexNow.** Rank Math ships an Instant Indexing (IndexNow) module. Enable it so new and updated URLs are pushed to Bing and the other IndexNow engines at publish time. Also submit `sitemap_index.xml` in Bing Webmaster Tools, which can import the property from Google Search Console.
- **Social signals.** Bing has said it takes social signals into account. Share each new research release and post on the Facebook, LinkedIn and Instagram profiles already listed in `sameAs`.
- **Bing Places for Business.** Claim the listing, or import it from the Google Business Profile, with identical NAP and the "Mortgage Broker" category. Copilot and Bing local answers draw on Bing Places in the same way Google AI Mode drew on Yelp and Google Maps in the tracker.
- **Crawl access.** robots.txt allows Bingbot. Confirm the host does not block or throttle it.

---

## Auditor corrections

*Added by the independent content auditor, 2026-11-15. Full detail: `08-audit/audit-content.md`; exact replacement text: `08-audit/corrections-content.csv`. (This file is part of analyst 3's deliverable; verdict **PASS WITH CORRECTIONS**.)*

- **Not reproduced (paid tools):** 4 of 12 prompts, 5 of 48 checks, and riverbankfinance.com 785 vs Align 19 AI mentions. The per-prompt table is internally consistent (ChatGPT 2, Gemini 1, Perplexity 2; Riverbank on 7 prompts). The share-of-voice "10 citations" is not reconciled with the 6 cited URLs listed.
- **Refuted: "no Dataset schema" on the research pages.** Both report pages already carry `Dataset`, `DataDownload` and `Report`. Change A1 from "add Dataset JSON-LD" to "validate the existing markup and add only missing `license` / `temporalCoverage` / `distribution.contentUrl`". The "Original data reaching AI answers" score (20) stands as an outcome score; correct its rationale.
- **A1 answer block:** use the guide §7.6 wording ("…resets to the state equalized value, half of the assessor's market value, not automatically half the price you paid…"). The figures are verified.
- **A3 FHA product template:** remove "FHA allows 3.5% down with a 580 credit score" (a trigger term on a money page, guide §7.2) and "Samantha Shelton reviews every file" (unverified, §10.1). Add the visible government non-affiliation line (§7.6).
- **A3 city H2:** USDA eligibility is set by address. Say whether any part of the city is eligible and link the address check, rather than "yes or no".
- **A7 award schema:** remove "NAMB Broker of the Year" (Verify status, PM-07). Use "2023 Women With Vision honoree" and add the approved "Hall of AIME inductee (2024)", "Mortgage Professional America 2025 Elite Women" and "HousingWire 2024 Rising Star".
