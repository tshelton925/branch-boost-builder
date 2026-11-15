# Independent Audit: Core Pages B (Products A, Products B, Calculators & Research)

**Auditor:** independent auditor, 08-audit · **Date:** 2026-11-15 · **Read-only:** nothing on the live site was changed.
**Scope:** `03-core-pages/products-a-*` (13 purchase-program pages), `products-b-*` (9 equity and non-QM pages), `calculators-research-*` (18 tools plus 4 research pages).
**Companion file:** `08-audit/corrections-core-pages-B.csv` (77 rows: file, row_identifier, field, current_value, corrected_value, reason).

**Method.** I re-derived every headline number with python against `$DATA` (`page_summary.csv`, `pages.jsonl`, `inlinks.json`, `text/`). I fetched two live pages, one at a time with a pause between them (`/product-loans/va-loans/` for JSON-LD and `/va-loan-calculator/` for hero CSS and the tax default). I also pulled DataWise GSC (queries plus the detailed overview, which has page-level rows), measured every recommended title, meta and above-the-fold subhead, and checked every internal-link row against the live link graph. Program facts were checked with WebSearch. consumerfinance.gov, bankersonline.com, va.gov, hud.gov, fhfa.gov and michigan.gov do not resolve from this session. Where a fact rests on a search result that quotes the primary source, I say so.

---

## 1. Verdicts

| Group | Verdict | Why |
|---|---|---|
| **Products A** (13 pages, 440 rows, 50 P0) | **PASS WITH CORRECTIONS** | Nearly all headline data reproduces exactly. The Fannie Mae and Reg Z findings are confirmed. Five problems need fixing: (1) The report says down-payment and fee percentages are marked `[COMPLIANCE REVIEW]`, but only 7 of 440 rows carry the flag, and several unflagged ones sit in subheads beside "Start my application". (2) The P0 government non-affiliation disclaimer that the guide assigns to product teams is missing on FHA, VA, USDA and manufactured. (3) The stale 1.5% tax default on VA, buydown and HomeReady is labelled "plausible". (4) Accuracy is over-scored by 10 to 24 points on 4 sampled pages. (5) "283 cities" is really 276 cities plus 7 other places. 2 P0 link rows are no-ops, and 2 inbound rows use a URL that does not exist. |
| **Products B** (9 pages, 471 rows, 8 P0) | **PASS WITH CORRECTIONS** | Every headline number reproduces: menu gaps, non-QM 2 of 5, the HELOC editorial note, the 4 "agency" pages, DSCR with 0 sources, and the 620 claim, with Freddie Mac also confirmed. The corrections: (1) the overall score is an unweighted mean, not the rubric weighting; (2) the 1.5% default is left as a P2 `[VERIFY]` when the site's own study already disproves it; (3) the guide's named example, the asset-based review with "great rates" from originators shown without NMLS IDs, is missed; (4) "our non-QM loan options" is lender language; (5) 59 of the 136 link rows (43%) add links that already exist; (6) the nav plan conflicts with 02-links. |
| **Calculators & Research** (22 pages, 194 rows, 36 P0) | **PASS WITH CORRECTIONS** | Strongest of the three on evidence. The 620px hero, the JS-only fee chart, 1.5% vs 36.0 mills = 1.8%, the inlink counts and the page-level GSC figures are all confirmed. The corrections: (1) the proposed tax label and worked examples say "a taxable value of half the price", which breaks the Editorial Policy's required wording; (2) the examples do not use the exact hypothetical label; (3) a trust line claims "checked against VA.gov on November 15, 2026" although VA.gov was unreachable; (4) the non-affiliation disclaimer is missing on 4 government-program tools; (5) internal-linking scores sit 12 to 23 points below the rubric anchors; (6) one P0 link already exists; (7) the property-tax title and H1 conflict with the competitor-gap team. |

---

## 2. Headline numbers re-derived

| # | Team claim | Re-derived value (source) | Status |
|---|---|---|---|
| A1 | Products A section 75 (C) | Stated mean 74.9. Rubric-weighted 75.7 (External links and Media unscored). After audit re-scores, 75.0. | Confirmed |
| A2 | 5 of 6 priority pages give no requirement in the first 60 words | FHA, VA, USDA, conventional and hub give none. Jumbo gives only "$832,750" (`above_fold_text`). | Confirmed |
| A3 | USDA queries land on `/learn/usda-loan-basics/`; product page has 92 inlinks, does not link the article, mid-CTA goes to USDA's map | DataWise overview maps "usda eligibility" (576, 11.1) and "usda rural development loan" (335, 13.9) to the learn URL. Product `content_inlinks` = 92. No link to the learn article. Mid-CTA "Check an address on the USDA map" goes to eligibility.sc.egov.usda.gov. **But** the product page already links `/usda-eligibility-check/` lower down ("Is this address in a USDA area?"), and the learn article already links the product page twice and the tool once. | Confirmed with nuance |
| A4 | Physician page has 2 contextual inlinks; its learn guide does not link it | `content_inlinks` 2, `all_inlinks` 4. `/learn/physician-mortgage-loans/` has no link to it. | Confirmed |
| A5 | "620 floor" outdated (Fannie Mae DU) | Text: conventional "Usually declined" below 620; FHA page's conventional cell "Usually 620"; cash-out "usually starts at 620". See F1. | Confirmed |
| A6 | Hub promises "fifteen options" but lists 21 | `text/product-loans.txt`: "narrow fifteen options". The hub links 21 distinct product URLs in content. | Confirmed |
| A7 | Literal "### Step" on manufactured page | "### Step 1", "### Step 2", "### Step 3", "### In Michigan" in the text file | Confirmed |
| A8 | Template adds 283 **cities** to each page's schema | Live `/product-loans/va-loans/` and cached FHA HTML: MortgageLoan `areaServed` = 283 nodes = **276 City + 6 State + 1 AdministrativeArea** | **Corrected** |
| A9 | Reg Z commentary: "no down payment" is not a trigger | See F7 | Confirmed (use still needs counsel per guide) |
| A10 | 34 "Read the guide" anchors; 5 metas under 140 | 34 (FHA 3, VA 4, USDA 3, conv 2, jumbo 4, HR 4, 30y 3, 15y 3, ARM 4, buydown 4). Metas: 30-yr 103, USDA 130, VA 135, ARM 135, jumbo 137. | Confirmed |
| B1 | Products B average 75 | Unweighted mean of 9 aspects. Rubric-weighted 76.4; after audit re-scores, 76.2. | **Corrected** (method) |
| B2 | HELOC, 1099, asset-based and condo missing from header, mobile menu and footer | Home-page header (printed twice: desktop plus mobile) has 15 product links plus the hub; footer has 10. None of the four appears. Physician and manufactured are also missing. The only header hit for each is a self-link on its own page. | Confirmed |
| B3 | Non-QM hub links only 2 of 5 children | Content links: bank statement, DSCR (plus jumbo and hub). No link to 1099, asset-based or condo. | Confirmed |
| B4 | Cash-out "620 minimum" outdated | "conventional cash-out usually starts at 620" | Confirmed |
| B5 | HELOC publishes an internal editorial note in Sources | "Michigan Treasury, change of ownership (source of the approved uncapping sentence)" | Confirmed |
| B6 | 4 non-agency pages say "Guidelines are set by the agency" | The phrase appears on 15 product pages. The non-agency ones in B scope are HEL, non-QM, DSCR and bank statement. **Jumbo (Products A scope) is also non-agency and is unflagged.** | Confirmed (+1 gap for A) |
| B7 | DSCR page has no sources | 0 external citations (only the Google reviews link). No "Check the rules at the source" H2. | Confirmed |
| B8 | Inlinks HELOC 19, 1099 6, asset 7, condo 38 | Identical in `page_summary.csv` and `inlinks.json` | Confirmed |
| B9 | areaServed "about 275 City nodes" | 276 City + 6 State + 1 AdministrativeArea | **Corrected** |
| C1 | No tool above the fold: 620px hero, first input about 830px down | Live CSS: `.adp-hero{min-height:620px;margin:24px 0 88px}`, so the tool starts 732px or more below the header on desktop. A ≤767px rule sets `min-height:0`, so the 830px figure is desktop-only; on mobile the hero card still fills the first screen. | Confirmed (desktop) |
| C2 | VA funding fee chart lives only in JS | Page text has no fee percentage (the only % is an unrelated "4%"). The FAQ "How much is the VA funding fee?" answers with no number. | Confirmed |
| C3 | 1.5% default labelled "statewide median" vs Uncapping Study 36.0 mills (1.8%); also on 4 product pages | Text search: mortgage, affordability and VA loan calculators plus bank-statement, buydown, home-ready and va-loans. The study text has "36.0 mills, 2025 rates, median across Michigan's homes" and a revision note ($1,508 to $1,814, 2026-10-27). 36.0 mills × 50% SEV = 1.8%. Understatement on a $300,000 home: $75 a month. | Confirmed |
| C4 | VA loan calculator has 9 contextual inlinks; "35 VA learn articles" link only the fee calculator | 9 confirmed (1 learn source). 43 pages link the fee calculator but not the loan calculator: 34 Learn (about 8 VA-specific), plus the VA product page, the VA plan page, 6 legacy posts and 1 city page. | **Corrected** (35 VA articles) |
| C5 | Research hub has 1 contextual inlink | 1 (from `/research/methodology/`). Market report 2, methodology 4. | Confirmed |
| C6 | Page-level GSC: VA loan calc 849 impressions at 53.5; USDA check 86 at 41.5 | DataWise detailed overview `top_pages`: identical | Confirmed |
| C7 | Wayne County charges $0.55 per $500 | Wayne County ROD page (via search) lists $0.55 county and $3.75 state | Confirmed |
| C8 | Market report figures used in links (218,394; 66,247; 3 in 10 above 43% DTI; 42%; 15.5%; twice; seven times) | All in `text/research__michigan-mortgage-market-report.txt` (57% vs 8% = 7.1×) | Confirmed |
| C9 | 832 identical anchors to the property tax calculator | 834 "michigan property tax calculator" anchors (1,063 content links in all) | Confirmed |

---

## 3. Checked findings

### 3.1 Every P0 row (94)

C = confirmed · X = corrected (see CSV) · R = refuted · U = unverifiable

**Products A (50 P0): 32 C, 16 X, 2 R**

| Rows | Topic | Status | Note |
|---|---|---|---|
| 3 | Hub ATF subhead | C | 56 words; names 20+ programs, Waterford, broker angle |
| 29 | Hub → PMI calculator link | C | New link; P1 would be enough |
| 36 | "fifteen" → "more than 20" | C | 21 listed |
| 38, 49 | FHA subhead, requirements H2 | X | Facts right (HUD 580/3.5%, 500–579/10%); missing `[COMPLIANCE REVIEW]`; fallback text supplied |
| 53 | FHA 2026 limits 1–4 units | C | $541,287 / $693,050 / $837,700 / $1,041,125 match HUD (65% floor) and `/loan-limits/` |
| 65 | FHA → `/learn/fha-loan-limits/` | C | Not already linked |
| 80, 202 | Conventional 620 cells | X | Fact right; "Most lenders set 620" unverifiable and "automated approval" imprecise; harmonized text |
| 84, 90 | VA subhead, meta | X | Facts right; "no down payment" needs the counsel flag |
| 95 | VA eligibility H2 | C | |
| 127, 133 | USDA subhead, meta | X | Unflagged fee percentages beside the apply CTA; meta rewritten (159 chars) |
| 138, 139 | USDA qualifies and income-limits H2s | C | Matches `/usda-eligibility-check/`; keep `[VERIFY]` |
| 155 | USDA → tool link | X | Already linked lower on the page; this is an ATF move |
| 156–160 | USDA outbound links (5) | C | Targets exist, not already linked |
| 166 | USDA mid-CTA → on-site tool | X | Right change; label must be the guide's "Check an address for USDA" |
| 169, 178 | Conventional subhead, requirements H2 | X | "as little as 3% down" is the guide's own trigger example |
| 192 | Conventional → PMI calculator | C | |
| 205, 211, 213 | Jumbo subhead, meta (158), requirements H2 | C | 213's 680–700 and 43% are lender-norm ranges; acceptable as "most look for" |
| 215 | Jumbo H2 "When will the 2027 limit be announced?" | X | Stale within about 10 days; evergreen H2 supplied |
| 264, 292, 320, 335, 400 | Links and meta (ARM 151 chars) | C | Targets exist, not already linked |
| 280 | 30-year meta (159) | X | Term-trigger flag missing |
| 401, 402 | Physician → jumbo, → mortgage insurance | **R** | Both links already exist in content; downgrade to P2 |
| 403–407 | Inbound links to physician | C | None already present. 407 is a city page: coordinate with 04-city-pages |
| 408, 410 | Physician in menu and footer | X | Gap confirmed; superseded by the unified nav spec (section 8) |
| 421–424, 437 | Manufactured literal "###" headings | C | |

**Products B (8 P0): 4 C, 4 X**

| Rows | Topic | Status | Note |
|---|---|---|---|
| 37 | HELOC editorial note | C | |
| 133, 152 | Cash-out 620 card | C | Text is good ("many lenders still set their own minimums"); Freddie Mac claim confirmed |
| 186 | Non-QM "Which non-QM loan fits your situation?" | C | 55-word answer; table links to children |
| 54, 373, 415, 457 | HELOC, 1099, asset, condo into header, mobile and footer | X | Gap confirmed. Footer part conflicts with 02-links section 5.2; label must match final H1 |

**Calculators & Research (36 P0): 30 C, 5 X, 1 R**

| Rows | Topic | Status | Note |
|---|---|---|---|
| 2, 99 | Compact tool hero; property-tax tool placement | C | Live CSS confirmed |
| 9 | 1.8% default | X | Number right; label wording breaks the required taxable-value sentence |
| 46 | `/refinance/` body links to 3 tools | C | Not already linked |
| 50–53 | VA loan calc title (58), meta (150), H1, intro (46 words) | C | Matches GSC modifiers (98 at 20.9; 36 at 37.7) |
| 56 | VA loan calc outline | X | Drop the duplicate "VA funding fee chart" H2 (cannibalization) |
| 58–63 | Links into VA loan calc | C | None present today |
| 64, 65, 71 | Fee calc title (55), meta (152), outline | C | |
| 69 | Fee chart table | X | Figures right; caption claims a check date that did not happen |
| 70 | Fee answer capsule (58 words) | X | Needs the same `[COMPLIANCE REVIEW]` as row 69 |
| 92 | 2027 swap plan | C | Uses placeholders and `[VERIFY]` on HUD |
| 109, 114 | Transfer-tax title (53), price table | C | All 9 rows of arithmetic re-computed and correct |
| 110 | Transfer-tax meta | X | Second sentence unreadable; rewritten (157 chars) |
| 127, 128 | Payoff title (55), meta (152) | C | |
| 166–168, 170 | Research links from home, Samantha, press, about | C | Footer-only today |
| 169 | Editorial policy → methodology | **R** | Already linked in content ("how our research works") |
| 187–191 | Market-report stat links | C | Every figure is in the report text |

### 3.2 Sampled non-P0 rows (60: 20 per CSV, seeded random)

| Group | Rows sampled | C | X | U | Main issues |
|---|---|---|---|---|---|
| Products A | 15, 26, 56, 94, 103, 111, 137, 180, 209, 263, 276, 299, 346, 358, 375, 386, 394, 396, 414, 430 | 12 | 8 | 0 | 15/103 "no down payment" unflagged; 103 is 80 words; 94 Title Case fragment; 137 fragment plus fee %; 209 reviewer line needs an Align decision; 276 term flag; 358 label should be "Estimate my buydown cost"; 386 "Compare two Loan Estimates" is a weak above-the-fold secondary for a physician page (keep "Talk with Samantha") |
| Products B | 14, 51, 86, 94, 102, 160, 187, 238, 250, 316, 328, 345, 364, 366, 375, 387, 400, 407, 418, 433 | 12 | 7 | 1 | 14 not final copy; 160/364/407 already linked; 364/407 "our non-QM loan options"; 238 label; 345/387 reviewer decision; 400 Fannie Mae early-withdrawal treatment `[VERIFY B3-3.1-09]` |
| Calculators | 10, 15, 24, 28, 42, 44, 45, 54, 57, 67, 82, 100, 116, 143, 149, 154, 159, 160, 172, 192 | 11 | 9 | 0 | 24/57 required wording and exact label; 45/82 exact label; 67 false "checked against VA.gov"; 15 fee % unflagged; 42 reviewer decision; 172 brand suffix; 82 Oakland limit `[VERIFY]` |

### 3.3 Link-row integrity (all link rows, not only the samples)

Each "add link" row was checked against the content links in `pages.jsonl`:

| CSV | Link rows | Target missing | Source page missing | Already linked in content |
|---|---|---|---|---|
| Products A | 113 | 0 (excluding template wildcards) | 2 (rows 78, 326: `/mortgage-lender-farmington-hills-mi/` should be `/mortgage-lender-in-farmington-hills/`) | **44** (39%) |
| Products B | 136 | 0 | 0 | **59** (43%) |
| Calculators | 29 | 1 proposed new tool (`/loan-to-value-calculator/`, row 16) | 0 | 2 (rows 84, 169) |

Some already-linked rows still have value as body-copy re-anchors of a card or sibling-block link. But `content_inlinks` counts unique source pages, so none of them adds an inlink. They should be relabelled "re-anchor/move", set to P2, and taken out of any projected link gains.

---

## 4. Fact-check table

| # | Fact | Teams | Status | Source and note |
|---|---|---|---|---|
| F1 | Fannie Mae removed DU's 620 minimum for casefiles created on or after Nov 16, 2025 (SEL-2025-09, Nov 5, 2025) | A, B | **Confirmed** | Search results quoting Fannie Mae SEL-2025-09 and Selling Guide B3-5.1-01; Orrick (Nov 14, 2025); NMP. Lender overlays still common, so "many lenders still require 620" is the right framing. |
| F2 | Freddie Mac LPA sets no minimum score for Accept loans | B | **Confirmed** (secondary) | Freddie Mac lender news (Apr 2022, "removed the minimum 620 indicator score requirement"), as quoted in search results. `[VERIFY Guide 5201.12]` |
| F3 | 2026 conforming limit $832,750; high-cost ceiling $1,249,125 | A, B, C | **Confirmed** | FHFA release of Nov 25, 2025, via search. No Michigan county above baseline per the site's `/loan-limits/`; the FHFA file is not reachable. |
| F4 | 2026 FHA floor $541,287 (65%); ceiling $1,249,125 | A, C | **Confirmed** | HUD 2026 limits release, via search. 2–4 unit figures match 65% of the FHFA 2–4 unit baselines rounded down to $25 and the site's tool. |
| F5 | 2027 limits not yet published (FHFA announces late November) | A, C | Confirmed (timing) | Last year's release was Nov 25. Swap plans are in place. |
| F6 | VA funding fee: 2.15% / 3.3% (<5% down), 1.5% (5–9.99%), 1.25% (10%+); cash-out 2.15/3.3; IRRRL 0.5% | A, C | **Confirmed** (secondary) | Several sources citing VA.gov; schedule unchanged since Apr 7, 2023. Assumption 0.5% and manufactured 1% are consistent but **unverifiable** this session; keep `[VERIFY]`. |
| F7 | Reg Z: "no downpayment" does not trigger 1026.24(d); the down-payment trigger is limited to credit sales | A | **Confirmed** | Search results quoting CFPB Interp-24, comment 24(d)(1): "This provision applies only if a downpayment is actually required; statements such as no downpayment or no trade-in required do not trigger the additional disclosures." **But** the project guide (7.2) treats it as a counsel item, so the wording must carry `[COMPLIANCE REVIEW]`. consumerfinance.gov is blocked; confirm on eCFR. |
| F8 | Reg Z: "30-year mortgage" is a period-of-repayment trigger | A | **Confirmed** (secondary) | A forum transcription of comment 24(d)(1) lists "30-year mortgage" and "48-month payment terms". `[VERIFY on eCFR]` |
| F9 | USDA FY2026 limit $122,800 (1–4) / $162,100 (5–8), higher in 6 counties | A, C | **Confirmed** for the standard figure (secondary); county figures **unverifiable** | Lower.com cites FY2026 limits effective July 13, 2026 (USDA PN 657) at $122,800; a Pennymac notice confirms PN 657. A conflicting $112,450 figure is the FY2024 number. Keep `[VERIFY]` on the six county rows. |
| F10 | USDA fees 1% upfront, 0.35% annual | A, C | Confirmed | Long-standing guaranteed-loan schedule; the team cites USDA's Jan 2026 overview; consistent with the site. Fee use still needs the compliance flag. |
| F11 | FHA 580/3.5%, 500–579/10%; MIP for life under 10% down, 11 years at 10% or more; UFMIP 1.75% | A | Confirmed | HUD 4000.1 and ML 2013-04, as cited; standard program rules. The annual MIP figure stays `[VERIFY]`. |
| F12 | VA: no loan limit with full entitlement | A | Confirmed | VA loan-limits page (Blue Water Navy Act 2020) |
| F13 | Uncapping Study statewide median homestead rate 36.0 mills; 1.8% of value; $1,508 → $1,814 revision | C | **Confirmed**, wording **corrected** | Study text. 1.8% is of the **assessor's market value** (SEV = 50%). It equals 1.8% "of the price" only when price ≈ market value, so the label must say so (guide 7.6). |
| F14 | Michigan transfer tax $3.75 state + $0.55 county per $500, seller pays, Wayne at $0.55 | C | **Confirmed** | Wayne County ROD (via search); MCL 207.504/.526 as cited; table arithmetic recomputed |
| F15 | Market-report statistics used in new links | C | **Confirmed** | Report text |
| F16 | Fannie Mae investment cap of 10 financed properties (B row 250) | B | Unverifiable here | Consistent with the Selling Guide; not fetched |
| F17 | "Guidelines are set by the agency" on non-agency pages | A, B | **Confirmed** wrong | Text files (HEL, non-QM, DSCR, bank statement, jumbo) |
| F18 | Calculators start blank (guide 7.1) | A, B | Confirmed | Live VA page: `<option value="" selected>Choose a rate`; term also blank |

---

## 5. Score calibration and adjustments

**Method findings (all three teams).**
1. None of the three scores **External linking** or **Media**. Both apply to every page in scope: all have images, and most have outbound citations. Rubric section 1 allows N/A only when an aspect does not apply. Each team should add both aspects or justify N/A.
2. Products B's overall is an **unweighted mean**. Recomputed with rubric section 4 weights, every page moves up 0.5 to 1.8 points, and condo reaches 80 (B).
3. Calculators' "Linkable-asset strength" is not a rubric aspect. It is fine as a supplement and is correctly kept out of the overall.
4. Rounding check: recomputing each team's own aspect scores with rubric weights gives overalls within 2.5 points of what they stated. The arithmetic is sound. The deltas below come from anchor calibration.

**Blind re-score sample (10 aspect scores per group; flagged when the delta is more than 5)**

| Group | Page · aspect | Team | Auditor | Δ | Anchor reasoning |
|---|---|---|---|---|---|
| A | FHA · Accuracy | 84 | **64** | −20 | Missing government non-affiliation disclaimer (rubric 3.11 60-anchor names it) plus the outdated "Usually 620" cell |
| A | VA · Accuracy | 84 | **60** | −24 | Missing disclaimer plus the stale 1.5% "statewide median" label ("a wrong millage" is a 60-anchor example) |
| A | USDA · Accuracy | 88 | **64** | −24 | Missing disclaimer; vague down-payment wording |
| A | Conventional · Accuracy | 80 | **70** | −10 | Team classes the 620 line as an outdated P0 fact; hedged, so above 60 |
| A | Physician · Internal linking | 40 | 40 | 0 | 2 contextual inlinks = near-orphan anchor |
| A | 15-year · Internal linking | 58 | 58 | 0 | 13 contextual, bottom quartile, nav-dependent |
| A | FHA · ATF | 68 | 70 | +2 | Answer vague, no why-Align, next step and reducer present |
| A | USDA · ATF | 64 | 66 | +2 | |
| A | VA · Title & meta | 68 | 72 | +4 | Meta 135 (not under 120), generic "Broker" title |
| A | Manufactured · Headings | 56 | 60 | +4 | Four headings lost to literal "###"; rest sound |
| B | DSCR · Accuracy | 76 | **68** | −8 | Agency boilerplate wrong for the product; unsourced norms on a page with 0 sources |
| B | Bank statement · Accuracy | 76 | **64** | −12 | Agency boilerplate plus the stale 1.5% tax label |
| B | HELOC · Internal linking | 55 | 55 | 0 | 16 contextual, no nav |
| B | 1099 · Internal linking | 45 | 45 | 0 | 4 contextual |
| B | Non-QM · Internal linking | 52 | 50 | −2 | Hub routes to 2 of 5 children |
| B | DSCR · E-E-A-T | 55 | 58 | +3 | Footer identity only, no sources |
| B | Non-QM · E-E-A-T | 58 | 60 | +2 | |
| B | HELOC · Accuracy | 85 | 80 | −5 | Published editorial note = non-standard string (80-anchor) |
| B | DSCR · ATF | 82 | 79 | −3 | Who, answer and next step present; no why-Align, no requirement |
| B | Cash-out · Accuracy | 74 | 72 | −2 | |
| C | VA loan calc · Internal linking | 32 | **55** | +23 | 9 contextual = bottom quartile (60-anchor), not near-orphan (40 = 1–2) |
| C | Refinance calc · Internal linking | 38 | **52** | +14 | 8 contextual |
| C | Research hub · Internal linking | 30 | **42** | +12 | 1 contextual = 40-anchor; below 40 is reserved for orphans and broken links |
| C | Market report · Internal linking | 22 | **42** | +20 | 2 contextual |
| C | VA loan calc · Accuracy | 70 | **58** | −12 | Stale default plus missing disclaimer; gate G2 (cap 69) applies but does not bind |
| C | USDA check · Accuracy | 80 | **66** | −14 | Missing disclaimer |
| C | Mortgage calc · Accuracy | 68 | 64 | −4 | Stale default |
| C | Transfer tax · Accuracy | 95 | 92 | −3 | All figures verified |
| C | VA fee calc · AI-ready | 52 | 55 | +3 | No numbers in text |
| C | Loan limits · Internal linking | 92 | 90 | −2 | 351 contextual |

**Resulting overall changes (rubric weights, External links and Media still unscored)**

| Page | Stated | Audited | Grade change |
|---|---|---|---|
| `/product-loans/fha-loans/` | 75 C | 73 C | — |
| `/product-loans/va-loans/` | 75 C | 73 C | — |
| `/product-loans/usda-loans/` | 70 C | **68 D** | C → D |
| `/product-loans/conventional-loans/` | 74 C | 73 C | — |
| Products B (all 9, weighted) | 76, 74, 76, 70, 77, 75, 77, 74, 79 | 77, 75, 77, 72, 78, 75, 78, 73 (asset, after the reviews re-score), **80 B** (condo) | condo C → B |
| `/mortgage-refinance-calculator/` | 67 D | **70 C** | D → C |
| `/va-loan-calculator/` | 62 D | 63 D | — |
| `/usda-eligibility-check/` | 76 C | 75 C | — |
| `/research/`, market report | 77 C, 77 C | 79 C, 79 C | — |
| **Section averages** | A 74.9 · B 75.3 · C 75.7 | A 75.0 · B 76.2 · C 76.5 | all stay C |

Outside the sample, re-score these for the same defects: HomeReady (90), buydown (84) and manufactured (90) accuracy in A; asset-based accuracy (84 → about 64, reviews defect) in B; VA funding fee calculator (90) and loan limits (93) accuracy in C (missing disclaimer).

---

## 6. Recommendation quality

**Measured across all rows, not only samples:**
- Titles: every recommended title is 60 characters or fewer.
- Metas: every recommended meta is 140–160 characters. The only exceptions are B rows 73 and 241, which carry "(160)" and "(156)" inside the exact text.
- Above-the-fold subheads and intros: all 60 words or fewer (A 53–60, B 50–58, C 39–47). The claimed counts match.
- Products B: all 102 question answers are 40–60 words. Products A: 15 Q&A rows fall outside 38–62 words; most are layout notes, but row 103 is an 80-word answer.
- Brand-voice scan (banned and avoid list, exclamation points): clean, apart from "our non-QM loan options" (B rows 364, 407) and the anchor "navigating HOA rules" (B row 456). "lowest required payment" (A rows 274, 280) is factual, not hype.
- No rates, APRs or payments anywhere. No lender or portal links. No invented quotes: the teams used `[VERIFY]` and `[NEEDS SAMANTHA QUOTE]` correctly.

**Compliance flags.** Products A has 77 rows containing percentages, down-payment wording or term names, and only 7 of them carry `[COMPLIANCE REVIEW]`. The unflagged ones include P0 subheads that sit beside "Start my application", such as FHA "3.5% down", conventional "as little as 3% down" and USDA "1% upfront fee and 0.35% annual fee". The CSV adds the flag and supplies fallback copy with no percentages. Every fallback was measured: FHA subhead 58 words, USDA subhead 58, conventional 56, HomeReady 55; FHA meta 148 characters, USDA 159, conventional 160, HomeReady 160. Products B: 0 rows flagged, though only row 314 needs one. Calculators: 5 flagged; rows 15 and 70 still need it.

**Template copy that breaks a mandatory string.** The calculators team writes "a taxable value of half the price" in the default label (row 9) and the two worked examples (rows 24, 57). The Editorial Policy wording is mandatory: "half of the assessor's market value, not automatically half the price you paid". The exact replacements are in the CSV.

**Weak rows with corrected exact text in the CSV:**
- A: 94, 103, 137, 215
- B: 14, 238, 456
- C: 110, 172

**Impact.** The highest-impact rows are sound and should ship first:
- Navigation additions
- Non-QM hub child links
- Compact calculator hero
- VA fee chart in HTML
- 1.8% default (with the corrected label)
- USDA tool as the above-the-fold secondary
- Research links

The lowest-impact rows can wait for the backlog: the generic "Compare {program} with other Michigan loans" H2 renames, the 59 B and 44 A re-anchors of existing links, and P0 rows 401 and 402.

---

## 7. Coverage gaps

| # | Gap | Group | Priority | Fix |
|---|---|---|---|---|
| G1 | **Government non-affiliation disclaimer** missing on `/product-loans/fha-loans/`, `/va-loans/`, `/usda-loans/`, `/manufactured-home-loans/` (guide 7.6: "P0 for the product teams") and on `/va-loan-calculator/`, `/va-funding-fee-calculator/`, `/usda-eligibility-check/`, `/loan-limits/`. None of the three teams mentions it. | A, C | P0 | Exact guide string, in the CSV |
| G2 | **Stale 1.5% tax default on product pages** treated as "plausible" (A) and as P2 `[VERIFY]` (B), although the calculators team proved it wrong | A, B | P0 | 1.80 plus the corrected label |
| G3 | **Asset-based reviews** "Taylor is the best ... great rates" and "Kevin was great!": rate claim and other originators with no NMLS ID; guide 7.7 names this page | B | P0 | Swap for verbatim process reviews about Samantha |
| G4 | Jumbo carries "Guidelines are set by the agency" (non-agency) | A | P1 | Non-agency line |
| G5 | External linking and Media aspects unscored | A, B, C | P1 | Score or justify N/A |
| G6 | Physician and manufactured use the fallback `Samantha4-683x1024.jpg` og:image | A | P2 | Hand to 07-images |
| G7 | Bing: every team correctly notes no Bing data; none lists the Bing export as an action item for its pages | all | P2 | PM requests the Bing export (tracker) |

---

## 8. Cross-team conflicts and proposed resolutions

**K1. USDA eligibility query ownership** (Products A vs Calculators vs the incumbent learn URL)
- DataWise shows `/learn/usda-loan-basics/` is the ranking URL: 10,182 impressions at 31.5 overall, "usda eligibility" 576 at 11.1, "usda rural development loan" 335 at 13.9. It already embeds a USDA checker and links both the product page and the tool.
- Products A names `/usda-eligibility-check/` (86 impressions at 41.5) as the owner of "usda eligibility", but also says not to de-optimize the learn article. Those two positions contradict each other.
- **Resolution:**
  - National "usda eligibility" and "usda rural development loan" stay with the learn article. Do not retarget them.
  - `/usda-eligibility-check/` owns the Michigan and tool modifiers ("usda eligibility check", "usda income limits michigan").
  - The product page owns "USDA loans Michigan" and "USDA Rural Development loans in Michigan".
  - Add the learn article's above-the-fold link to the tool (calculators row 84, an existing link moved up). Drop Products A row 161, which duplicates an existing link.

**K2. VA calculators** (Products A vs Calculators)
- The fee chart would appear on four URLs: the learn article (live), the VA product page (A rows 97 and 112), the fee calculator (C row 69) and the VA loan calculator (C row 56).
- **Resolution:**
  - The fee calculator owns "va funding fee", "va funding fee chart" and "calculate va funding fee".
  - The VA loan calculator owns "va loan calculator with funding fee/taxes".
  - The VA product page owns eligibility and the program.
  - On the product page, keep A's short funding-fee H2 answer (flagged) and replace its full table with a link to the fee calculator. Remove the chart H2 from the loan calculator (CSV).

**K3. Property tax calculator** (Calculators vs 05-content-keywords)
- Calculators: title "...: Your Bill After You Buy", H1 "...: Your Tax After You Buy", priority P1.
- Competitor-gap: title "...: Estimate After You Buy", H1 "...Calculator and Estimator", priority P0. It cites 9,900 monthly searches; GSC shows the page at position 48.8 on 77 impressions.
- **Resolution:**
  - Title "Michigan Property Tax Calculator: Estimate After You Buy" (56 characters).
  - H1 "Michigan Property Tax Calculator: Estimate Your Tax After You Buy".
  - Priority P0, with the calculators team as page owner.
  - The fix for the 834 identical city anchors (calculators report section 5.9, city-template anchor item) needs the city team's sign-off.

**K4. Navigation** (Products A, Products B, 02-links section 5)
- A adds Physician to the menu and footer. B adds Home equity and Non-QM groups and five footer items.
- 02-links prints the menu once, regroups the Loans column (Physician under Non-QM; no condo or manufactured), and **removes** the footer product list.
- **Unified spec (one owner: 02-links):**
  - **Buy:** Conventional Loans · FHA Loans · VA Loans · USDA Loans · HomeReady & Home Possible · Jumbo Loans · Physician Loans · Manufactured Home Loans
  - **Rate and term:** 30-Year Fixed · 15-Year Fixed · Adjustable Rate Mortgage · Buydown Loans (term names `[COMPLIANCE REVIEW]`, as already noted in A section 6)
  - **Self-employed and non-QM:** Non-QM Loans · Bank Statement Loans · 1099 Income Loans · Asset Depletion Loans (matches B's new H1) · DSCR Loans · Non-Warrantable Condo Loans
  - **Home equity:** Home Equity Loan · HELOC · Cash-Out Refinance
  - **Footer:** 02-links section 5.2 (no product list). If Align keeps a product list, it lists all 21. A row 408 and B's footer additions are superseded.

**K5. Above-the-fold CTA labels** (Products A vs 01-ctas vs guide 5.2)
- A replaces the secondary "Talk with Samantha" with tool CTAs and demotes talk to a text link.
- 01-ctas proposes program-specific talk labels ("Ask Samantha if FHA fits"), which the guide's retire list argues against.
- Calculators removes "Use the calculator". 01-ctas keeps it as the calculator primary. The guide retires it.
- **Resolution, following the guide:**
  - Secondary = "Talk with Samantha", except where a calculate tool answers the page, which then uses guide labels: USDA "Check an address for USDA"; buydown "Estimate my buydown cost"; DSCR "Calculate my DSCR".
  - Calculators drop "Use the calculator" once the tool is above the fold.
  - PM decides.

**K6. "Reviewed by Samantha" line** (A, B, C all add it) vs guide 7.8 ("writers do not change the byline on their own"; `[DECISION: Align]`). Hold every reviewer line until Align decides.

**K7. 1.5% default** (C vs A vs B): resolved in C's favor, with the corrected wording (G2).

**K8. "620" wording** (A vs B): one harmonized sentence (CSV rows for A 80/202; B rows 133/152 already match).

**K9. Research links on the home page** (C row 166 module vs 02-links section 5.3 link to the market report): compatible. Use one "Michigan data we publish" module that links both studies and the hub.

---

## 9. Counts

| | Checked | Confirmed | Corrected | Refuted | Unverifiable |
|---|---|---|---|---|---|
| Headline claims | 28 | 24 | 4 | 0 | 0 |
| P0 rows (A 50, B 8, C 36) | 94 | 66 | 25 | 3 | 0 |
| Sampled non-P0 rows | 60 | 35 | 24 | 0 | 1 |
| **Total findings and rows** | **182** | **125** | **53** | **3** | **1** |
| Fact checks | 18 | 14 confirmed (4 via secondary quotes) | 1 (F13 wording) | 0 | 3 partly (F6 assumption and manufactured rows, F9 county rows, F16) |
| Score sample | 30 aspect scores | 18 within ±5 | 12 adjusted (>5) | — | — |
| Coverage gaps added | 7 | | | | |
| Cross-team conflicts | 9 | | | | |

## 10. Sources

- Fannie Mae SEL-2025-09 and Selling Guide B3-5.1-01 (selling-guide.fanniemae.com; singlefamily.fanniemae.com), via search; Orrick InfoBytes, Nov 14, 2025; National Mortgage Professional, "Fannie Mae Ending Its Hard 620 Score Cutoff"
- Freddie Mac lender news, April 2022 (my.sf.freddiemac.com), via search
- CFPB, Regulation Z official interpretation 1026.24 (consumerfinance.gov/rules-policy/regulations/1026/interp-24/), via search excerpts; domain blocked here
- FHFA 2026 conforming loan limit release (Nov 25, 2025); HUD No. 25-145, 2026 FHA limits, via search
- USDA FY2026 guaranteed income limits (PN 657, July 13, 2026), via Lower.com and Pennymac announcement 26-82
- VA funding fee schedule (va.gov), via secondary sources citing VA.gov
- Wayne County Register of Deeds, Document Recording (waynecountymi.gov), via search
- DataWise GSC, property `7faa6221…`: queries and detailed overview (top_pages, opportunities)
- Live HTML fetched 2026-11-15: `/product-loans/va-loans/` and `/va-loan-calculator/`; cached `site/product-loans_fha-loans.html`
- `$DATA`: `page_summary.csv`, `pages.jsonl`, `inlinks.json`, `text/*.txt`
