# Brand voice and compliance review

**Team:** Consistency, brand voice and compliance editor · **Date:** 2026-11-16 · **Standard:** `00-project/brand-voice-and-compliance-guide.md`, `KNOWN-CORRECTIONS.md` (F1–F21, D1–D8), `scoring-rubric.md` §3.11
**Deliverables:** this report · `09-consistency/brand-fixes.csv` (290 rows) · `07-images/alt-text-corrected.csv` (873 rows, load-ready)
**Scope:** every proposed-copy row in the 14 team change files, after the auditors' corrections. `06-blogs/` is out of scope (the blog editors review it).

---

## 1. Summary

- **What was checked.** 5,274 rows were gathered into one working table. 4,477 of them carry proposed copy; the other 797 are schema, redirect or navigation instructions. Auditor corrections were applied first and touched 712 rows: 96 alt values, 13 added learn alts, about 380 CTA rows through the global label swaps, plus the row-level fixes in the core-page, link and content files. Every screen ran on the corrected value.
- **Automated screens:** 21 rules, 268 hits on 247 rows. After triage, 86 of those hits were false positives (listed in §3). Manual sweeps then found more rows the regexes could not see: city metas, lender language and retired labels.
- **Voice review:** 528 rows read by hand. That is all 322 P0 copy rows plus a stratified sample of 206 rows, 10 to 14 per file. Most team copy is on-voice and stays as written.
- **Fixes:** 290 rows have exact corrected copy in `brand-fixes.csv`. By severity: 8 Critical, 49 High, 118 Medium, 115 Low.
- **The 8 Critical items:**
  1. A new About-page answer says "Samantha writes and reviews every guide" (F8).
  2. The About press answer and two schema rows reintroduce NAMB Broker of the Year (F9).
  3. Three link insertions use "3% down" as the anchor (F20).
  4. The down-payment assistance (DPA) apply CTA carries the micro-line "Samantha checks which Michigan programs fit" (F2, pending D3).
  5. The /product-loans/ hub has no government non-affiliation line (F7b).
  6. The /refinance/ hub has no government non-affiliation line (F7b).
- **The main voice pattern:** templated copy written at scale drifts off-voice. Three sources stand out:
  - **City meta descriptions:** 38 carry unsourced loan-mix claims tied to a city's price level ("FHA and first-time buyer programs do most of the work"). 15 of the 38 also list MSHDA as if Align offered it.
  - **GSC question H2s:** raw search queries pasted in as headings, including a New York query (Align is not licensed there) and an Iowa query.
  - **Link templates:** link sentences repeated from one template ("See X for the HMDA data behind this").
- **Second pattern:** the same rule is applied unevenly between teams. Examples are the "Reviewed by" line, the 30-year/15-year flags, the "today's rates" phrasing and the "local expert" wording. `brand-fixes.csv` sets one standard for each.

---

## 2. Method

1. **Gather** (`scratchpad/brand/gather.py`). Each row is keyed by `source_file | row N` (spreadsheet line number) plus URL and element. Copy fields were taken from:
   - `recommended_exact` in the core-page and city files;
   - `recommended` in the CTA file;
   - `existing_sentence_or_new_sentence` and `anchor_text_exact` in the link insertions;
   - `exact_fix` in the internal link fixes;
   - `corrected_text_exact` in the fact-checks (only where filled);
   - `exact_title_or_h2_if_applicable` in the GSC opportunities. These were de-duplicated by target and copy, which left 148 unique strings from 491 rows;
   - quoted titles and H2s in `blog-inventory.csv` refresh notes (22);
   - `recommended_alt_exact` in the alt-text file.
2. **Apply auditor corrections first.**
   - **Core pages A:** row-numbered; every reference was validated against the URL and element.
   - **Core pages B:** hand-mapped. One misnumbered reference was resolved: the audit's "row 127" for the USDA secondary CTA is row 129.
   - **CTA:** row-level replacements plus the 15 global label swaps in corrections-ctas #54–#82.
   - **Links:** rows 12, 72, 84, 104–106, 108, 125, 131, 136, 153 and 192.
   - **Images:** 96 value replacements and 13 added rows.
   - **Content:** the corrected amortization title.

   Where an auditor value replaced a team value, the auditor value is the "current copy" in `brand-fixes.csv`.
3. **Screen** (`screens.py`). Regex screens ran on all copy rows, with URLs removed so slugs such as `/30-year-fixed/` do not trigger. High-signal rules (F8, F9) also ran on instruction rows, because several schema and E-E-A-T rows propose visible copy.
4. **Triage and voice review.** Every hit was read in context. The 528-row read covered all P0 rows plus 10 to 14 random rows per file. The sample keys are saved in `scratchpad/brand/voice_sample_keys.json`.
5. **Fix** (`fixes.py`).
   - Hand-written corrections for every confirmed hit and voice finding.
   - Pattern rewrites for the city metas, each checked to land at 140–160 characters.
   - A final validation pass over every corrected string: titles 60 characters or fewer, metas 140–160, subheads 60 words or fewer, no banned words, no "Reviewed by", no NAMB.

---

## 3. Screen results by rule

"Rows flagged" is the automated result. "Fixed" counts rows in `brand-fixes.csv` for that rule, including rows found in the manual sweep that the regex missed.

| # | Rule (source) | Rows flagged | Fixed | False positives and notes |
|---|---|---|---|---|
| R01 | Banned and hype words, superlatives, lender language (guide §6) | 11 | 13 | FP: "not your best" (leanest-month advice); "leading to the porch" (alt text); "HUD-approved housing counselor" (HUD's own service, correctly named). Sweep added 8 rows of "one of our non-QM loan options" and "how our physician loans work" (banned "our loans"). |
| R02 | Exclamation points | 0 | 0 | Clean. |
| R03a | Rate or APR language (F13) | 6 | 3 | Fixed "today's rates" in 3 product answers (now "current market rates"). FP: "No broker can promise a lower rate" (teaches the limit) and "a lower rate or a different term" (describes the goal, not an offer). |
| R03b | Reg Z trigger terms: down-payment %, term, payment or finance-charge amount (F12, F20, guide 7.2) | 49 | 49 | 21 product-page headings and anchors with 30-year/15-year got the term flag the auditor used for the ATF, title and meta rows. 6 percentage anchors dropped (F20). "3% down" moved out of 3 learn H2s. 5 worked examples got the exact hypothetical label. Fee and down-payment flags were added where missing. FP: the ARM "5, 7 or 10-year fixed period" (an initial period, not the repayment term) and the $3-a-month manufactured-housing specific tax. |
| R04 | Fair housing: places and people (F19, guide 7.4) | 37 | 51 | Confirmed: 6 alt texts, the USDA household example ("two adults and two children" became "a four-person household"), 4 non-QM and asset rows describing borrowers as "retirees" (now describe the income source), 2 county-hub templates. The manual meta review found 38 city metas tying loan types to a city's price level (fair-lending steering risk, §4.1; 15 of them also counted under R12). FP: award name "Women With Vision", USDA's income deductions for children and household members 62+ (a program rule), "older street" and "young trees" (era and landscape), "quiet stretches" (process waits). |
| R05 | "Local" on non-local markets (F15) | 1 | 1 | The flagged "your local assessor" is a FP. Manual review found the county-hub H2 template "Talk with a {County} County mortgage expert", which implies local presence in 11 non-Oakland counties; changed to "Talk with a Michigan mortgage expert". Fact-checker 3's 87 city H2 corrections already follow F15. |
| R06 | Samantha editorial claims (F8) and first person | 21 + 5 | 45 | P0: "Samantha writes and reviews every guide" (About H2). "Read what she writes" (Samantha CTA). 6 instruction rows proposing "Reviewed by Samantha Shelton". 12 calculator trust lines with "Reviewed by… Rules last checked November 15, 2026", which also breaches F17 (no check happened today). One standard everywhere: **"Samantha Shelton, NMLS 1647301 · Updated {Month YYYY}"** (22 product rows normalized from the auditor's [DECISION] prefix). First person: 4 of 5 were reader-voice FPs; 1 myth heading was put in quotes. |
| R07 | NAMB uses (F9) | 2 + 2 | 4 | About H2 answer, the Samantha H3 (held pending D8), and two schema rows that would add NAMB to `Person.award`. |
| R08 | Time-to-close claims (F10) | 5 | 1 | All 5 were FPs (biweekly "every two weeks"; days on market). Manual: "about two minutes" on the readiness check removed (unverified; the auditor removed it from the CTA). |
| R09 | CTA label and destination; booking label other than "Talk with Samantha" (F11, F11b) | 17 | 29 | Calendly buttons still carrying bespoke labels: "Talk with Samantha about VA", "Have Samantha check the property", "Talk it through with Samantha" (×2), "Talk with Samantha about your loan", "Book" (chrome bar), "Plan my move with Samantha", "Ask Samantha about a land contract", "Talk through your options" off-hub (×4). Retired apply label "Start with a few questions" (×2). Retired "Run the VA loan calculator" (×6). DSCR tool label reconciled. FP: "Ask Samantha a question" goes to /contact-us/ (a question form, so the label matches). |
| R10 | "No credit pull to talk" beside non-talk CTAs; credit-pull absolutes | 11 | 3 | 3 metas ended "No credit pull." and now read "No credit pull to talk." 8 FPs: talk-context answers, plus calculators and the self-check, which truly do not pull credit. The CTA auditor had already fixed "nothing here checks your credit" beside "Start my application" (preapproval modules). |
| R11 | Missing government non-affiliation line on FHA, VA and USDA pages (F7, F7b) | 16 pages | 6 new rows | Added: /product-loans/ hub (P0), /refinance/ (streamline H3), /pmi-removal-calculator/ (FHA MIP rules), the product page template for every product page that compares itself with FHA, VA or USDA, and 2 learn pages the GSC team targets with VA copy (no disclaimer in live text). /purchase/ and /first-time-homebuyer/ are covered by the auditor's shared loan-card row. The other flags were multi-URL artifacts. |
| R12 | MSHDA wording (F1, F2) | 2 | 18 | F1 is clean after the purchase auditor's corrections (no open-ended "First-Generation" or $25,000 copy remains). F2: the DPA micro-line "Samantha checks which Michigan programs fit your answers" sat under an apply button (Critical). 15 city metas list MSHDA beside FHA and VA as if Align originated it. 1 purchase row used "checks" where F2's default is "explains". FP: HomeReady income check (not MSHDA). |
| R13 | 620 as a hard conventional floor (F3) | 5 | 4 | Conventional subhead, conventional requirements answer, HomeReady qualifier, hub table. All now describe Fannie Mae's automated underwriting with lender overlays. FP: VA lender overlay ("580 to 620"). |
| R14 | 1.5% tax default (F4) | 8 | 0 | All 8 are FPs: city-specific Census effective rates ("about 1.5% of value, Census 2020 to 2024"), not the statewide default. The calculators auditor already set the default to 1.80 everywhere (calculators row 9, products B row 319, new rows for VA, buydown and HomeReady). |
| R15 | May 1 PRE deadline (F5) | 0 | 0 | Clean. City fact-checks use June 1 and November 1. |
| R16 | Undated or old loan limits (F6) | 1 | 0 | FP: an H3 being removed. Every $832,750 and $541,287 in new copy carries "2026". |
| R17 | Title over 60 characters, meta outside 140–160, subhead over 60 words | 17 | 22 | 17 GSC new-post titles shortened. 5 products B titles still carried "(58)"-style counts inside the copy. 3 brand rewrites were caught over length in validation and fixed before writing. |
| R18 | Style sheet (preapproval, homebuyer, NMLS formats) | 43 | 42 | 24 city metas "pre-approval" became "preapproval"; "home buyers" became "homebuyers" (3). Company NMLS normalized to "NMLS #2041154" in 13 product trust lines (also counted under F8). FP: "Michigan First-Time Home Buyer Savings Program" (official program name) and existing-sentence anchors. |
| R19 | Taxable-value wording (F16) | 2 | 3 | Mortgage calculator trust line ("36.0 mills on half the price"), property-tax FAQ, and the property-tax worked example. All now use the Editorial Policy wording: "half the assessor's market value, not automatically half the price you paid". |

**Other fixes outside the screens:**
- Claims library (D5): "Align's compensation is paid by the wholesale lender" was replaced with the approved /licensing/ wording.
- Accuracy: "USDA lends up to the appraised value" corrected (USDA guarantees; lenders lend).
- Licensing: the New York jumbo H2 was deleted.
- D1 hold: 3 reverse-mortgage Learn modules lost their apply link until Align confirms it brokers reverse mortgages.

---

## 4. Voice findings (before and after)

Copy was judged against the guide: calm, plain, specific, Michigan-local, teaches before it sells, numbers over adjectives, and Samantha in the third person. Most of the 528 rows read pass, including all purchase sub-page answer blocks, the product ATF subheads, the alt text after the audit, and the CTA module copy. The patterns below are the exceptions.

### 4.1 Templated city metas tie loan types to a city's price level (38 rows)
The metas follow one formula: value, then a judgment of which loans "do the work" there. The judgment is unsourced, often wrong for the individual buyer, and in lower-priced majority-minority cities it reads as steering toward FHA. That is a fair-lending perception risk the Editorial Policy rules out.
- Before (Southfield): "Mortgage broker in Southfield, MI. At typical values near $229,000, FHA and first-time buyer programs do most of the work. Rated 5.0 on Google. NMLS #2041154."
- After: "Mortgage broker in Southfield, MI. Typical values sit near $229,000. Conventional, FHA and VA loans compared across multiple wholesale lenders. NMLS #2041154." (153 chars)
- Before (Clinton Township): "…Medians near $225,000 suit FHA, VA, conventional and MSHDA assistance." After: the same neutral loan line, with MSHDA removed (F2).
- Rule for the city team: every meta lists the same loan set, or none. The local fact is a housing or tax fact (value, millage, ZIP, days on market), never a verdict on who borrows how.

### 4.2 Raw search queries pasted in as H2s (GSC file, 18 rows)
- "What s the remittance schedule like for long-term loans?" became "How does the payment schedule change on a shorter loan term?"
- "What role do labor and material costs play in the iowa housing shortage?" was deleted (off-topic, not Michigan).
- "How to secure a jumbo loan in new york?" was deleted. Align is not licensed in New York (guide 7.5), so no heading may target it.
- "Is rocket mortgage a direct lender?" plus two near-duplicates became one H2, "Is Rocket Mortgage a lender or a broker?"
- "Can you refinance with bad credit?" became "Can you refinance with a low credit score?" ("bad credit" is on the banned list.)
- "How do the closing costs and fees from rocket mortgage compare…" became "How much do closing costs vary from one lender to the next?" A named-lender comparison invites a claim we cannot source.

### 4.3 Robotic link templates (links team, 8 rows)
- Before: "See <a>how Michigan buyers financed homes last year</a> for the HMDA data behind this." ("this" has no antecedent, and "last year" is undated.)
- After: "For how Michigan buyers financed homes in 2025, see the <a>Michigan Mortgage Market Report</a>, built from federal HMDA data."
- Before: "see our <a>Michigan home buying page</a>." After: "see <a>buying a home in Michigan</a>."
- Before: "Buying a home in {City}: how we plan it". After: "Buying a home in {City}: where to start".

### 4.4 Claims about Samantha and about how Align works
- Before (About): "Samantha writes and reviews every guide on this site against primary sources…"
- After: "Every guide is published under Samantha Shelton's name and license and approved by Align before it goes live. We use software, including AI writing tools, to research, draft and check the library; software does not decide what a guide says…" (Editorial Policy wording, F8.)
- Before (12 calculators): "Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- After: "Samantha Shelton, NMLS 1647301 · Rules last checked [DATE CHECKED]." The date goes in only when someone actually checks (F17).
- Before: "Align's compensation is paid by the wholesale lender…" After: "how Align Lending is paid on your loan, and how much, appears on your Loan Estimate and Closing Disclosure." (Claims library; D5 pending.)

### 4.5 Bespoke booking labels survived on calculators and sub-pages
"Have Samantha check the property", "Talk with Samantha about your loan" and "Talk it through with Samantha" all open the same Calendly page. They become "Talk with Samantha". The topic moves to a lead-in line ("Want the published millage for a specific parcel? Samantha can check it."), which keeps the useful promise without breaking F11b.

### 4.6 Lender language and rate talk in product answers
- "DSCR is one of our non-QM loan options." became "…one of several non-QM loan options." (7 rows; the auditor had fixed 2.)
- "It fits best when today's rates are no higher than the one you hold." became "It fits when current market rates are at or below the rate you hold."
- "because USDA lends up to the appraised value" became "because a USDA-guaranteed loan can go up to the appraised value".

### 4.7 Age and family descriptors, applied as a precaution
- "For retirees, early retirees and savers" (eyebrow) became "For borrowers who qualify on savings and investments".
- "A household of two adults and two children under 18 in Oakland County…" became "A four-person household in Oakland County…"
- The ECOA answer "Can retirees get a mortgage without a job?" stays as written. It answers a real search and states the age-discrimination protection.

### 4.8 Good copy kept unchanged (examples of the standard)
- "Buying or refinancing in Oak Park? One ZIP, 48237, spans three school districts, with 2025 homestead rates from 59.4486 to 60.0713 mills. We check the parcel, then compare your loan across multiple wholesale lenders." (city hero)
- "What happens on a first call with Samantha? It is a conversation, not an application, and there is no credit pull…" (/purchase/)
- "An FHA loan fits Michigan buyers with credit in the 500s or 600s, a recent setback, or little saved…" (FHA subhead, auditor version)
- "A credit check comes later, only with your permission." (preapproval module, auditor version)
- The city hero alt pattern "…, illustrating homes in {City}, Michigan" holds on all 276 rows (F14).

---

## 5. Final CTA vocabulary (single table)

This table reconciles the CTA team, the five core-page teams and both auditors. Every button follows it, and anything not listed is retired.

| Intent | Button label (exact) | Destination | Friction line (only beside this CTA) | Where used |
|---|---|---|---|---|
| Apply (content) | **Start my application** | `/start/?goal={buy\|refi\|equity}` (+`&from=` only with values in `alignStartCfg.sources`) | "A credit check comes later, only with your permission." [VERIFY with Align: where credit is pulled in /start/ → my1003app]. Never "No credit pull to talk" | Product ATF primary and end block; home hero secondary; /mortgage-process/; calculator result states when eligible; Learn module "start online" text link; mobile menu row |
| Apply (header) | **Apply Now** | `/start/` | none | Header only (grandfathered nav convention) |
| Talk | **Talk with Samantha** | `https://calendly.com/samanthashelton?utm_source=alignlending&utm_medium=website&utm_campaign={template}&utm_content={placement}` | "No credit pull to talk", directly under the button | Every other Calendly button: home hero primary; all purchase and refinance sub-pages; product ATF secondary and end ghost; every calculator result state; Learn module link; city mid-page and closing; state pages; About, Contact, Reviews, Samantha, Agents; chrome bar; mobile menu |
| Talk (hub variant) | **Talk through your options** | Calendly (same UTMs) | "No credit pull to talk" | Only /purchase/ (secondary), /refinance/ (ATF primary) and the /product-loans/ end-of-grid block |
| Call | **Call 248-506-5727** | `tel:+12485065727` | none | Agents page primary, menu row. Header and footer show "248-506-5727"; body text "Call or text 248-506-5727"; product end block "or call 248-506-5727" |
| Text | **Text 248-506-5727** | `sms:+12485065727` (prefilled body allowed) | none | Contact page ghost button; property tax result ("Want the millage for a specific address?") |
| Plan | **Build my homebuyer game plan** | `/purchase/homebuyer-game-plan/` (`#readiness` on that page). Never Calendly | "No application required" | /purchase/ primary, game plan page primary, /mortgage-process/ secondary, Learn "process" modules, affordability calculator result |
| Plan (purchase situations) | **Review my budget** → `/purchase/budget-review/#affordability` · **Take the readiness review** → `/purchase/mortgage-readiness-review/#readiness` · **Plan my buy-before-you-sell move** → `/purchase/buy-before-you-sell/` · **Review an investment property** → `/purchase/investment-property-financing/` · **Get my first-time homebuyer plan** → `/purchase/first-time-homebuyer/` · **Plan my VA purchase** → `/purchase/va-homebuyer-plan/` · **Review renovation financing** → `/purchase/renovation-financing/` · **Set a check-back date** → readiness `#check-back` form | as listed | "No application required" | Learn modules and end blocks; purchase cross-links |
| Plan (refinance and equity) | **Calculate my break-even** → `/refinance/break-even-review/#break-even` · **Estimate my available equity** → `/refinance/home-equity-review/#available-equity` · **Compare cash-out and home equity** → `/refinance/cash-out-vs-home-equity/#equity-compare` | as listed | "Every tool is free and needs no signup" | Refinance sub-page primaries (tool first, talk second); HELOC, home equity and cash-out product tertiary links; Learn refinance and equity modules |
| Calculate | **Estimate my payment** (`/mortgage-calculator/#p-pay`) · **Estimate my property tax** (`/michigan-property-tax-calculator/#mi-tax`) · **Estimate my refinance payment** (`/mortgage-refinance-calculator/`) · **Calculate my payoff date** (`/mortgage-payoff-calculator/`) · **Estimate my transfer tax** (`/michigan-transfer-tax-calculator/#mi-transfer`) · **Estimate my VA payment** (`/va-loan-calculator/#p-va`) · **Estimate my VA funding fee** (`/va-funding-fee-calculator/#va-fee`) · **Check an address for USDA** (`/usda-eligibility-check/#usda-check`) · **Find my county loan limit** (`/loan-limits/#loan-limits`) · **Check whether the rent covers the payment** (DSCR `#p-dscr`) · **Estimate my income from deposits** (bank statement `#p-bs`) · **See what your sale leaves you** (`/seller-net-sheet-calculator/#seller-net`) · **Find my calculator** (`/calculators/#find`) | as listed | "Every tool is free and needs no signup" | Calculator ATF, product tertiary links, city tax section button, Learn modules |
| Compare | **Compare loan options** → `/product-loans/` · **Check my Loan Estimate** → `/compare-loan-estimates/` · **Compare fixed-rate terms** → `/product-loans/15-year-fixed/` or `/mortgage-calculator/#p-pay` (until counsel rules on term names, D7) | as listed | none | Learn modules, home hero card 3, product tertiary links, payoff calculator |
| Learn (text links, not buttons) | **See how {program} loans work** (product page) · **How Michigan taxable value works** · **Read the 2026 Uncapping Study** | product, learn and research pages | none | End blocks and city tax sections |

**Retired (do not ship):**
- Old apply and talk labels: Start with a few questions, Get pre-approved, Start your pre-approval, Schedule a call with Samantha, Book my refinance checkup, Get my refinance checkup, Get a real number from Samantha, Talk it through (first / with Samantha), Talk through my equity options, Talk through your refinance options, Pick a time to talk, Ask Samantha about … (any Calendly button), Have Samantha check …, Talk with Samantha about …, Book, Meet.
- Old plan and compare labels: Build my plan with Samantha, Plan my first purchase with Samantha, Plan my move with Samantha, Compare my options (with Samantha / in 3 questions), Check a Loan Estimate (you already have).
- Old calculator labels: Get a budget review, Get a homebuying budget review, Run a break-even estimate, Use the … calculator, Run the … calculator, Run the numbers …, Calculate my DSCR, Look up my county loan limit, See the 30-year or 15-year fixed, Compare 15-year and 30-year payments.

**Reconciliation decisions made here, for the conflict resolver:**
1. **Home hero primary.** Ship "Talk with Samantha" (corrections-core-pages-A #94, F11b), not "Talk through your options" (corrections-ctas #35). The hub variant belongs only to the three hubs the guide names.
2. **DPA page primary.** Ship "Talk with Samantha" with the F2 line "Samantha explains the MSHDA programs and, if one fits, refers you to a participating lender." "Start my application" is the secondary. This overrides corrections-ctas #86/#53 ("Start with a few questions") until D3 confirms Align's MSHDA access. An apply button under "Samantha checks which programs fit" implies Align originates MSHDA loans.
3. **DSCR tool label.** Ship "Check whether the rent covers the payment" (corrections-ctas #45/#79), not "Calculate my DSCR" (corrections-core-pages-B #41): plain English, no undefined jargon.
4. **"Start with a few questions" is retired.** One apply label keeps the GA4 `link_text` comparable.
5. **Reviewer line.** Ship "Samantha Shelton, NMLS 1647301 · Updated {Month YYYY}" on every page, matching auditor A. Auditor B's "[DECISION: Align] … Reviewed by" prefix is a placeholder, not load-ready copy. Align can later switch every instance to "Reviewed by" or "By" in one template change (guide 7.8).
6. **Chrome bar.** The Calendly item reads "Talk with Samantha" (Call · Text · Talk with Samantha). If it cannot fit at 360 px, the PM may approve "Talk" as the single compact exception.

---

## 6. Compliance items for counsel and the owner

**For counsel (marketing review, not legal advice):**

| # | Item | Where | What we did pending the ruling |
|---|---|---|---|
| C1 (D7) | Repayment-period terms ("30-year", "15-year") as product names on money pages, where Align publishes no APR (12 CFR 1026.24(d)(1)(ii)) | /product-loans/30-year-fixed/, /15-year-fixed/ (title, H1, H2s, anchors), refinance loan cards, mortgage calculator headings, GSC learn title on the 15-year vs 30-year comparison guide | `[COMPLIANCE REVIEW]` on every row (about 30 more added here). CTA labels and calculator headings use "Compare fixed-rate terms" or "a shorter and a longer fixed term" |
| C2 (D7) | Down-payment percentages and "no down payment" or "zero down" on money pages and in learn titles (1026.24(d)(1)(i); CFPB comment 24(d)(1)) | FHA, conventional, HomeReady, VA, USDA product pages and hub table; GSC "Zero-Down Home Loans in Michigan" title | Flagged. No percentage in any anchor (F20); learn H2s state the program name, not the percentage |
| C3 | Government fee percentages (FHA MIP 1.75%, USDA 1% and 0.35%, VA funding fee chart) as finance-charge components (1026.24(d)(1)(iv)) | FHA and USDA product pages, hub table, VA funding fee calculator chart and capsule, calculators hub cards | Flagged, kept in body sections away from apply CTAs |
| C4 | Closing-cost figures in break-even illustrations on refinance money pages and tools | /refinance/break-even-review/ example; /mortgage-refinance-calculator/ worked example | Exact hypothetical label plus a `[COUNSEL]` flag |
| C5 | Worked examples with monthly amounts (escrow $450/month, DTI budget $2,940/month) on calculator pages | Mortgage, affordability, VA and rent-vs-buy calculators | Exact label "Hypothetical example, not an offer. Actual rates, costs and payments vary." Examples sit away from apply links |
| C6 | Attributed down-payment figure in the Freddie Mac PMMS description ("excellent credit and 20% down") | /why-we-dont-publish-rates/ | Flagged; attributed to Freddie Mac |
| C7 | Reviews naming other loan originators without NMLS IDs (guide 7.5); review with "great rates" (FTC 16 CFR 255.1, F18) | /reviews/, /product-loans/asset-based-income-loans/, refinance pages | Auditors' removals stand; counsel to confirm state rules on NMLS IDs in testimonials |
| C8 | Recordkeeping for approved copy (Regulation N, 24 months) | All changes in this release | Keep `brand-fixes.csv` and the final approved files with approval dates |
| C9 | "No credit pull to talk" accuracy and the point where /start/ pulls credit | Every talk CTA; apply friction line | Friction line held as `[VERIFY with Align]` |

**Owner decisions still open (not resolved here):**
- **D1 (reverse mortgages):** 3 Learn modules are held and their apply link removed.
- **D3 (MSHDA access):** decides whether the DPA page can make Start my application its primary CTA.
- **D5 (lender-paid compensation):** the absolute claim was replaced with the /licensing/ wording.
- **D6 (loan-officer headcount):** "Samantha handles each of her loans herself" is used only where it already appears.
- **D7:** see C1 and C2.
- **D8 (NAMB):** the Samantha H3 is held and NAMB removed from new copy and schema.
- **Also needed from Align:** the byline decision ("Written by" vs "By" vs "Reviewed by"), because the Editorial Policy FAQ says guides are "published under her name". **This conflict goes to the PM.**
- **F21 (AI imagery disclosure):** PM item, still needed because heroes are AI illustrations.

---

## 7. Brand score per team

Two scores per team, 0–100 with the rubric grade:
- **Accuracy & compliance (A&C):** rubric §3.11 anchors, applied to the copy as handed over after the audit.
- **Voice:** calm, plain, specific, Michigan-local, teaches first, Samantha in the third person.

"Projected" assumes every row in `brand-fixes.csv` ships and is labelled projected (rubric §7.5).

| Team (file) | Copy rows | Brand fixes (Crit / High / Med / Low) | A&C now | Voice now | A&C projected | Rationale (evidence) |
|---|---|---|---|---|---|---|
| CTA (`01-ctas`) | 444 | 19 (1 / 1 / 9 / 8) | 74 (C) | 86 (B) | 93 (A) | The auditor's 15 label swaps fixed most of the label sprawl. The DPA micro-line still breaches F2 beside an apply CTA, and 8 Calendly labels were off-vocabulary (chrome "Book", "Plan my move with Samantha", "Run the VA loan calculator"). Module copy is plain and specific ("Taxes, insurance and HOA dues belong in the payment you plan around"). |
| Links (`02-links`) | 298 | 15 (3 / 3 / 1 / 8) | 65 (D) | 80 (B) | 92 (A) | Six anchors on "3% down" or "3.5% down" promote a trigger term (F20; 3 still P0 after the audit). The new sentences are accurate, but 8 template sentences read mechanically ("for the HMDA data behind this"). |
| Purchase (`purchase-changes`) | 381 | 10 (0 / 2 / 1 / 7) | 86 (B) | 89 (B) | 95 (A) | After the auditor's MSHDA and CTA corrections, what remains is minor: "checks" where F2 wants "explains", an unverified "about two minutes", style strings. The answer blocks are the strongest on-voice copy in the project. |
| Refinance, home and trust (`refinance-home-trust-changes`) | 300 | 19 (3 / 11 / 3 / 2) | 38 (F, gated G1) | 86 (B) | 93 (A) | P0 defects remain in new copy: "Samantha writes and reviews every guide" (F8), NAMB in the About press answer and two schema rows (an unverified award, rubric 0–39 anchor), the D5 absolute compensation claim, and five "Reviewed by" proposals. The voice elsewhere is calm and checkable ("A rate isn't yours until it's locked"). |
| Products A (`products-a-changes`) | 427 | 52 (1 / 4 / 42 / 5) | 62 (D) | 84 (B) | 91 (A) | The conventional subhead, requirements answer and HomeReady answer present 620 as the norm without automated-underwriting context (F3). The /product-loans/ hub has no government disclaimer. 21 term-name headings and anchors were unflagged. The subheads are well built (who it fits, the rule, why Samantha). |
| Products B (`products-b-changes`) | 381 | 30 (0 / 0 / 16 / 14) | 78 (C) | 84 (B) | 94 (A) | Lender language ("one of our non-QM loan options" ×7), "today's rates" ×3 and age-based eyebrows; titles still carried character counts. Accuracy is otherwise strong: non-agency guideline language, ECOA answer. |
| Calculators and research (`calculators-research-changes`) | 182 | 31 (0 / 9 / 17 / 5) | 55 (F, gated G2) | 87 (B) | 92 (A) | 12 trust lines claim "Rules last checked November 15, 2026" and "Reviewed by" (F17, F8). Two rows use the "half the price" taxable-value wording the Editorial Policy forbids (F16). Three examples lacked the exact hypothetical label. The tool intros are clear and practical. |
| City pages (`04-city-pages`) | 1,021 | 63 (0 / 16 / 23 / 24) | 66 (D) | 78 (C) | 92 (A) | 38 metas make unsourced loan-mix claims by price level, 15 of them listing MSHDA as an Align product (F2). The county-hub template implies a local expert in 11 counties (F15). The fact-check corrections themselves are precise and sourced (2026 millages by school district). |
| Content and keywords (`05-content-keywords`) | 170 unique | 45 (0 / 3 / 6 / 36) | 70 (C) | 68 (D) | 90 (A) | The question H2s are raw queries: a New York query in an unlicensed state, an Iowa query, "bad credit", unpunctuated or lowercase forms. 17 titles run over 60 characters. The refresh titles in the blog inventory are on-voice. |
| Images (`07-images`, after the auditor) | 873 | 6 (0 / 0 / 0 / 6) | 95 (A) | 91 (A) | 98 (A) | The auditor's 109 corrections removed every "quiet", "modest" and "tidy", people descriptors and outcome claims. 6 residual polish items ("hand in hand", "two-family"). All 276 city heroes follow the F14 pattern. |

**Project brand score (simple mean of the 10 teams):** A&C 69 (D) now, 93 (A) projected. Voice 83 (B). Money-page teams only (purchase, refinance, products A and B, CTA): A&C 68 (D) now, 93 (A) projected.

---

## 8. How to use the deliverables

- **`09-consistency/brand-fixes.csv`**
  - Columns: `source_file, row_identifier, element, current_copy, corrected_copy, rule, severity, note`.
  - `row_identifier` is `row N | URL`, where N is the line number in the team file. `NEW (brand editor)` marks an added row.
  - `current_copy` is the value after auditor corrections, not the raw team value.
  - Bracketed tags (`[COMPLIANCE REVIEW]`, `[VERIFY]`, `[COUNSEL]`, `[HOLD]`, `[DATE CHECKED]`) block publishing until resolved.
  - Severity scale: Critical = P0 compliance; High = material accuracy, F2/F3/F11b on money pages, or licensing; Medium = consistency of a compliance standard, or fair-lending tone; Low = voice and style.
- **`07-images/alt-text-corrected.csv`**
  - The same 14 columns as `alt-text.csv` plus `brand_fix_note`.
  - 860 team rows (96 auditor values applied), plus 13 added learn-hero rows from the image auditor, plus 6 brand fixes.
  - 0 rows still match "quiet", "modest" or "tidy", people descriptors or outcome claims. It is ready to load.
- **For the conflict resolver:** take §5 as the CTA standard. Where `brand-fixes.csv` and an SEO-editor change touch the same row, keep the brand version's compliance changes (flags, wording) and merge the SEO wording around them.
- **Working files** (scratchpad, not deliverables), all under `/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/brand/`:
  - `working.json`: the gathered table with corrections applied.
  - `hits.json`: every screen hit.
  - `gather.py`, `screens.py`, `fixes.py`: the scripts that rebuild all of the above.

## 9. Limits

- Screens are regex-based. Triage removed the false positives listed in §3, but phrasing outside the patterns relies on the 528-row manual read. That read covered every P0 row, not every row.
- Fixes were written against the change files only; the live site was not re-checked. Facts that need a live check carry `[VERIFY]`: MSHDA status on the publish date, the VA chart date, Census Vintage 2025 figures, and the credit-pull point in /start/.
- Learn-page disclaimer coverage was checked only for pages that receive new FHA, VA or USDA copy in this release. 303 Learn pages already carry the line.
