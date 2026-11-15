# Calculators, Tools and Research: Core Pages Audit

**Scope:** the 18 pages typed `calculator` in `page_summary.csv` (16 tools, plus 2 `/learn/` articles that carry an embedded tool and are typed as calculators), and the 4 research pages. That makes 22 URLs.
**Prepared:** 2026-11-15 by the Core Pages specialist (Calculators, Tools and Research).
**Companion files in this folder:**
- `calculators-research-changes.csv`: 194 implementation rows with exact replacement copy (36 P0, 105 P1, 53 P2).
- `scores-calculators-research.csv`: 224 rows, one score per aspect per page plus an overall score.

**Evidence used**
- The crawl: `page_summary.csv`, `pages.jsonl` (outline, above-fold text, CTAs, links), `text/<slug>.txt`, `link_graph.json`, `inlinks.json` and `external_status.jsonl`. No content link on any in-scope page is broken.
- Live HTML for 6 calculators (VA funding fee, VA loan, Michigan transfer tax, Michigan property tax, USDA check, mortgage) and the 2 study pages, fetched 2026-11-15. I used it to see what renders server-side, read the JSON-LD, read the calculator JavaScript and read the hero CSS.
- Google Search Console through DataWise (property `7faa6221…`, 90 days), 22 topic searches.
- People Also Ask for 6 seeds: VA funding fee calculator, Michigan transfer tax calculator, Michigan property tax after buying, PMI removal calculator, mortgage payoff calculator, USDA eligibility. The USDA seed returned no questions.
- WebSearch for the three SERPs the brief named, and for fact checks (VA fee chart, FHFA 2027 status, the Wayne County rate, USDA FY 2026 limits).

**Limits**
- Competitor pages (homelight.com, veteransunited.com) could not be fetched: their hosts are not in this session's network allowlist. SERP composition comes from search results, not page renders.
- VA.gov, rd.usda.gov and michigan.gov could not be fetched directly. Figures checked only through secondary sources are marked `[VERIFY]`.
- **Bing Webmaster data is not connected.** No Bing numbers appear here. Bing-specific actions are flagged, and a Bing export is needed.

---

## 1. Summary

The calculators and the research are some of the best work on alignlending.com:
- The tools are accurate. They never show a default rate. They state their method, cite Michigan statutes and use Michigan-specific inputs that national tools ignore, such as tax after the uncapping reset, the $500 transfer-tax steps and the county loan limits.
- The research pages are real original data, with CSVs, embed codes, a published methodology, a correction log and Dataset schema. Few mortgage sites have anything like it.

The problems are in presentation and linking, not in substance:
1. **On every tool, the tool sits below the fold.** A decorative hero with `min-height: 620px` comes first, so a desktop visitor sees a photo, an H1 and a "Use the calculator" button. They do not see an input.
2. **The highest-demand pages are starved of internal links.**
   - The VA loan calculator (849 impressions, average position 53.5) has 9 contextual source pages.
   - The refinance calculator has 8.
   - The research hub has 1, and the Mortgage Market Report has 2.
   - Their natural parent pages (`/learn/va-loans/`, `/refinance/`, `/press/`, `/samantha-shelton/`) link to them only from the footer.
3. **Some of the most-searched answers exist only in JavaScript, or not at all.** The VA funding fee chart lives only inside the calculator script. "How much is a va funding fee" ranks at position 84 and "va funding fee chart" at 69. The transfer-tax page has no price table.
4. **One real accuracy defect.** Three payment calculators default property tax to 1.5% of the price and label it "Michigan's statewide median homestead rate." The site's own corrected Uncapping Study (revised 2026-10-27) puts that median at 36.0 mills, which is **1.8% of the price**. On a $300,000 home the estimate is about $75 a month too low.

### Headline scores (0–100)

| Group | Overall | Strongest aspect | Weakest aspect |
|---|---|---|---|
| 16 tools | **74.0 C** | Accuracy & compliance 87 | Internal linking 67, Title & meta 68 |
| 4 research pages | **79.5 C** | Accuracy 91, E-E-A-T 89, Linkable asset 89 | Internal linking 46 |
| All 22 pages | **75.7 C** | Accuracy 88 | Internal linking 64 |

- **Best page:** `/research/michigan-property-tax-uncapping-study/`, 86 B.
- **Weakest pages:** `/va-loan-calculator/` 62 D, `/mortgage-calculator/` 65 D, `/mortgage-refinance-calculator/` 67 D and `/home-affordability-calculator/` 69 D. All four use the older "classic payment" template.

Implementing the P0 rows should lift the tool average into the low 80s (B). Almost all of the gain comes from above-the-fold placement, internal linking and title and meta.

---

## 2. Scorecard

Grades: A 90–100 · B 80–89 · C 70–79 · D 60–69 · F <60. The one-sentence rationale for every cell is in `scores-calculators-research.csv`.

| Page | Intent/H1 | Headings | ATF | CTA | Title/meta | Int. links | E-E-A-T | AI-ready | Accuracy | Linkable | **Overall** |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/calculators/` | 80 | 86 | 70 | 66 | 68 | 88 | 70 | 60 | 92 | – | **76 C** |
| `/mortgage-calculator/` | 70 | 66 | 60 | 62 | 64 | 55 | 74 | 68 | 68 | – | **65 D** |
| `/home-affordability-calculator/` | 78 | 70 | 62 | 62 | 74 | 58 | 74 | 72 | 70 | – | **69 D** |
| `/mortgage-refinance-calculator/` | 74 | 68 | 66 | 62 | 66 | 38 | 72 | 70 | 88 | – | **67 D** |
| `/va-loan-calculator/` | 68 | 68 | 58 | 68 | 60 | 32 | 74 | 60 | 70 | – | **62 D** |
| `/va-funding-fee-calculator/` | 88 | 72 | 72 | 70 | 64 | 70 | 72 | 52 | 90 | – | **72 C** |
| `/usda-eligibility-check/` | 84 | 64 | 78 | 74 | 74 | 82 | 74 | 76 | 80 | – | **76 C** |
| `/loan-limits/` | 84 | 74 | 84 | 72 | 82 | 92 | 74 | 86 | 93 | – | **82 B** |
| `/michigan-property-tax-calculator/` | 86 | 68 | 62 | 76 | 80 | 70 | 80 | 84 | 90 | – | **77 C** |
| `/michigan-transfer-tax-calculator/` | 90 | 82 | 80 | 84 | 68 | 84 | 74 | 74 | 95 | – | **81 B** |
| `/pmi-removal-calculator/` | 88 | 72 | 76 | 82 | 60 | 60 | 76 | 78 | 94 | – | **76 C** |
| `/mortgage-payoff-calculator/` | 86 | 72 | 74 | 70 | 60 | 46 | 72 | 68 | 92 | – | **71 C** |
| `/points-vs-lender-credit-calculator/` | 86 | 84 | 76 | 78 | 72 | 70 | 72 | 76 | 94 | – | **79 C** |
| `/rent-vs-buy-calculator/` | 82 | 74 | 72 | 76 | 62 | 70 | 72 | 72 | 92 | – | **75 C** |
| `/seller-net-sheet-calculator/` | 88 | 76 | 76 | 84 | 76 | 76 | 72 | 74 | 92 | – | **79 C** |
| `/compare-loan-estimates/` | 70 | 78 | 72 | 86 | 60 | 86 | 76 | 74 | 90 | – | **77 C** |
| `/learn/fha-loan-limits/` | 84 | 88 | 88 | 72 | 70 | 80 | 92 | 90 | 93 | – | **84 B** |
| `/learn/how-to-compare-loan-estimates/` | 86 | 86 | 86 | 60 | 76 | 64 | 90 | 90 | 84 | – | **80 B** |
| `/research/` | 84 | 80 | 86 | 78 | 70 | 30 | 88 | 78 | 92 | 82 | **77 C** |
| `/research/methodology/` | 80 | 82 | 80 | 74 | 60 | 44 | 95 | 78 | 95 | 88 | **78 C** |
| `/research/michigan-property-tax-uncapping-study/` | 88 | 78 | 90 | 80 | 82 | 90 | 84 | 86 | 92 | 95 | **86 B** |
| `/research/michigan-mortgage-market-report/` | 84 | 82 | 88 | 78 | 68 | 22 | 88 | 84 | 84 | 90 | **77 C** |
| **Average, 16 tools** | 81 | 73 | 71 | 73 | 68 | 67 | 74 | 72 | 87 | | **74.0 C** |
| **Average, 4 research** | 84 | 80 | 86 | 78 | 70 | 46 | 89 | 82 | 91 | | **79.5 C** |
| **Average, all 22** | 82 | 76 | 75 | 73 | 69 | 64 | 78 | 75 | 88 | | **75.7 C** |

---

## 3. Findings, ranked by impact

### F1. Every tool sits below the fold (P0, critical, all 16 tools)

**What the live HTML shows (2026-11-15).** Every tool page opens with `section.adp-hero`:
- The CSS is `min-height:620px; margin:24px 0 88px`.
- On desktop, the first input therefore starts about 830 px or more from the top, below a 768 px laptop fold and below the first phone screen.
- The hero's primary button is "Use the calculator," a jump link to the tool. It exists only because the tool is not visible.
- On `/michigan-property-tax-calculator/` it is worse. A full H2 explainer of about 180 words sits between the hero and the tool.

**What is fine:**
- The form markup is server-rendered. Every `<input>` and `<select>` and every label is in the HTML, so inputs and help text are crawlable.
- Results are JavaScript-only and sit in an `aria-live` region.
- Explanatory content follows directly below the tool.

**Fix:** a compact `adp-hero--tool` variant.
- No minimum height.
- Desktop: copy and the trust line in a 40% column, the tool in a 60% column.
- Mobile: the H1, a one-line intro, then the first input.
- Remove "Use the calculator."

What the brief asks for, in SERP terms: competing VA calculators (Bankrate, Veterans United, NerdWallet, Zillow) and Michigan transfer-tax tools (HomeLight, anytimeestimate, everycalculators) all lead with the tool. See section 4.1.

### F2. The VA funding fee chart is invisible to search and AI engines (P0, critical)

`/va-funding-fee-calculator/` applies VA's schedule correctly in JavaScript. The `buyRate()` function returns 2.15, 1.5, 1.25 or 3.3; cash-out is 2.15 or 3.3; the IRRRL is 0.5.

But no percentage appears anywhere in the page text. Even the FAQ "How much is the VA funding fee?" answers without a number. In GSC:

| Query | Impressions | Position |
|---|---|---|
| how much is a va funding fee | 52 | 84.2 |
| how much is the va funding fee | 26 | 86.7 |
| how much is va funding fee | 22 | 89.6 |
| va funding fee chart | 12 | 69.1 |
| calculate va funding fee | 74 | 17.6 |
| va loan funding fee calculator | 61 | 15.3 |

The site already publishes the full chart on `/learn/buying-home-with-va-loan/`, so the calculator page is the odd one out. **Fix:** add a crawlable "VA funding fee chart for 2026" table and a 58-word answer capsule, plus a 2026 title hook. Exact copy is in section 5.6.

### F3. The VA loan calculator is cut off from the VA content cluster (P0, high)

`/va-loan-calculator/` gets 849 impressions at average position 53.5, but its intent modifiers do much better:
- "va loan calculator with funding fee": 98 impressions, position 20.9.
- "va loan calculator with taxes and insurance": 36 impressions, position 37.7.

Its links:
- It has **9 contextual source pages, only 1 of them a learn article.**
- 35 VA learn articles link the *fee* calculator in content and link the loan calculator only from the footer. These include `/learn/va-loans/`, `/learn/buying-home-with-va-loan/`, `/learn/how-to-qualify-for-va-loan/`, `/product-loans/va-loans/` and `/purchase/va-homebuyer-plan/`.

**Fix:**
- Put "with Funding Fee, Taxes" in the title and H1.
- Add 6 contextual links with exact anchors (section 5.5).
- Link from the fee calculator's result state into the loan calculator.

### F4. A stale 1.5% property-tax default contradicts the site's own corrected study (P0, critical accuracy)

The settings:
- `pTaxPct value="1.50"` in `/mortgage-calculator/`.
- `h*0.015` in `/va-loan-calculator/`.
- The same default on `/home-affordability-calculator/`.

All three carry the label "About 1.5% of the price … at Michigan's statewide median homestead rate."

The 2026-10-27 correction to the Uncapping Study:
- It moved the statewide median homestead millage to **36.0 mills**, and the added-tax figure from $1,508 to $1,814.
- 36.0 mills on a taxable value of half the price is **1.8% of the price**.
- The 1.5% figure matches the pre-correction median. The calculators were not updated.

The same sentence is also live on 4 product pages: `bank-statement-loan`, `buydown-loans`, `home-ready` and `va-loans`. Those need a flag to the product team.

**Fix:** default 1.80, plus the exact label in the CSV.

### F5. The research is effectively orphaned (P0, high)

| Page | Contextual inlinks | Total inlinks (nav/footer) |
|---|---|---|
| `/research/` | **1** | 838 |
| `/research/michigan-mortgage-market-report/` | **2** | 841 |
| `/research/methodology/` | 4 | 844 |
| Uncapping Study | 354 | 1,369 |

`/press/`, `/samantha-shelton/` and `/about-us/` link the research only from the footer. So does `/learn/michigan-taxable-value/`, the 294-inlink guide most related to the Uncapping Study.

The Mortgage Market Report has quotable facts that natural parent pages could cite:
- 66,247 home equity loans and lines.
- 3 in 10 approved purchase loans had a DTI above 43%.
- Manufactured homes were denied about 7 times as often.

Those parent pages are `/learn/debt-to-income-ratio-dti/` (167 inlinks), `/learn/home-equity-line-of-credit-heloc/` and `/product-loans/manufactured-home-loans/`. **Fix:** 11 sentence-level link insertions, listed in the CSV and in section 6.

### F6. The refinance and payoff tools rank at positions 40–55 with almost no links (P0/P1, high)

- **Refinance calculator.** 8 contextual source pages. `/refinance/` and every `/learn/refinancing*` guide link it only from the footer.
- **Mortgage payoff cluster.** About 700 impressions across "mortgage payoff calculator" (234, position 41.4), "payoff mortgage calculator" (67), "payoff calculator" (65) and similar queries. The page has 21 contextual source pages and a 42-character title with no hook.

**Fix:**
- New titles.
- Hub links from `/refinance/` to all three current-mortgage tools.
- A refinance guide link.
- PAA answers, for example "What happens if I pay an extra $100 a month?"

### F7. The transfer-tax page is accurate but ranks at position 37 for its exact-match query (P0, high)

"michigan transfer tax calculator" gets 168 impressions at position 37.3.

**The SERP** is mostly thin calculator farms (everycalculators, feecalculator.us, statecalc) plus HomeLight:
- feecalculator.us puts "2026" in its title.
- It also wrongly applies $0.75 per $500 to Wayne County.

**Align's page is correct:**
- It cites MCL 207.523, 207.504, 207.525 and 207.526.
- The Wayne County Register of Deeds confirms $0.55.
- But it has no price table, its title has no year and its meta is 137 characters.

**Fix:**
- A 9-row "transfer tax by sale price" table (pure arithmetic, no credit terms).
- A "2026" title.
- 3 new FAQs: price-specific, first-time buyer and refund window.

### F8. Title and meta underuse the queries that already rank (P1, medium)

- 9 tool titles are 44 characters or shorter, with no hook beyond "| Align Lending."
- 7 metas are under 140 characters.
- The CSV gives exact rewrites for all 22 pages (≤60 / 140–160, length-checked by script).
- Hooks come from GSC modifiers: "with funding fee," "2026 chart," "after you buy," "80% and 78%," "extra, biweekly or lump sum."

### F9. Calculators carry no visible reviewer or "last checked" date (P1, medium)

- `visible_updated = None` on all 16 tools. Only the JSON-LD `dateModified` exists.
- The `/learn/` pages carry "Written by Samantha Shelton NMLS 1647301 · Updated October 2026."
- Rule-based tools (the VA chart, the transfer tax statute, loan limits) need the same freshness and attribution signal more than articles do.

**Fix:** "Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026," plus a page-specific trust line naming the rule set.

### F10. Result-state CTAs drift from the brand vocabulary and from intent (P1, high)

- **Mortgage and affordability:** "Get pre-approved." This is off-vocabulary and implies a preapproval from an estimate. It also contradicts the affordability page's own "A ceiling, not a target."
- **Refinance:** "Start my application" as the only post-result step on a should-I decision.
- **Good patterns to keep:** "Send to Samantha" on the Loan Estimate check; "See what the whole sale leaves you" on transfer tax; "Ask her to check back" on PMI.

The CSV gives exact labels and destinations for every tool (section 4.3).

### F11. Three cannibalization pairs (P1, medium)

1. **`/compare-loan-estimates/` vs `/learn/how-to-compare-loan-estimates/`.** The tool's title reads "How To Compare Loan Estimates, Box By Box." That is an informational title, and it duplicates the guide. "how to compare loan estimates" ranks at position 37.2. **Fix:** retitle the tool "Loan Estimate Checker: Compare Two Offers."
2. **"usda eligibility" (576 impressions, position 11.1) lands on a learn article, not the tool.** Keep the learn page as the explainer. Add a tool link in its first 100 words, and retitle the tool around "address and income."
3. **`/mortgage-refinance-calculator/` vs `/refinance/break-even-review/`.** Both answer the break-even question. Define the roles (calculator = self-serve, review = service) and cross-link them.

### F12. Anchor over-optimization to the property tax calculator (P1, medium)

832 contextual anchors are the identical string "Michigan property tax calculator," mostly from the city and learn templates. Yet the page ranks at position 48.8 for that exact phrase.

**Fix:** vary the city-template anchor to "estimate property tax on a {City} home after you buy." Deep-link it with `?place={slug}` so the tool pre-selects the community.

### F13. GSC gaps no tool serves (P1/P2)

| Gap | Evidence | Recommendation |
|---|---|---|
| LTV / CLTV calculator | "loan to value calculator" 58+48, "loan to value ratio calculator" 50+40, "ltv calculator" 15+14, "calculate ltv" 54, all at positions 18–36. PAA: "How to calculate LTV to remove PMI?" | New `/loan-to-value-calculator/` (P1). Spec in the CSV. |
| VA vs conventional | about 166 impressions across 5 variants, positions 43–51 | "Compare with conventional" toggle on the VA loan calculator (P2) |
| USDA guarantee fee | "usda loan funding fee calculator" 11.4, "usda annual funding fee" 28.9, about 60 impressions | Guarantee-fee section and result line on the USDA check (P2) |
| 15- vs 30-year | 52 impressions at position 6.1 (served by a learn page) | "Compare two terms" toggle on the mortgage calculator (P2) |

### F14. Accuracy and compliance: verified, with a short to-do list

| Item | What the site says | Checked against | Status |
|---|---|---|---|
| VA funding fee logic | 2.15/1.5/1.25% first-use purchase, 3.3% later use under 5% down, cash-out 2.15/3.3%, IRRRL 0.5%, in effect since April 7, 2023 | VA chart as reproduced by several sources citing VA's page (updated October 5, 2026) | Correct. `[VERIFY]` assumption and manufactured-home rows directly on VA.gov. |
| Michigan transfer tax | $3.75 state + $0.55 county per $500; seller liable; PRE exemption; Wayne at $0.55 | MCL 207.504/.523/.525/.526; Wayne County Register of Deeds recording page | Correct. A competitor (feecalculator.us) is wrong on Wayne. |
| PMI | Request at 80% of original value, automatic at 78%, midpoint backstop; FHA 11 years if LTV ≤90%, else life (case numbers from June 3, 2013) | Homeowners Protection Act; HUD ML 2013-04 | Correct |
| 2026 limits | $832,750 conforming (2–4 units $1,066,250 / $1,288,800 / $1,601,750); FHA $541,287 floor, $1,249,125 ceiling | FHFA baseline × unit ratios; HUD 65% / 150% | Correct (math reconciles) |
| 2027 limits | "Not announced yet"; some lenders at about $845K–$850K | Industry reporting as of November 3, 2026: no official figure; release expected about November 24–25 | Correct today. Needs a same-day update (section 5.8). |
| USDA FY 2026 income limit | $122,800 (1–4 people) in most counties; 6 higher counties | Could not confirm. FY 2025 baseline was $119,850; FY 2026 map dated July 13, 2026. | `[VERIFY]` every county figure and the "map in effect since July 25, 2023" date |
| USDA fees | 1% upfront, 0.35% annual (FY 2026) | Site's own `/learn/recent-changes-to-usda-loan-programs/` | Consistent. `[VERIFY]` with USDA. |
| Payment-calculator tax default | 1.5% of price, "statewide median" | Uncapping Study after correction: 36.0 mills, about 1.8% | **Stale. Fix (F4).** |
| Uncapping $1,814 | Added first-year tax on a $300K home | 36.0 mills × ($150,000 − $150,000 ÷ 1.505) ≈ $1,812 | Correct (rounding) |
| "1,534 cities and townships" | Michigan has about 1,520 cities and townships | Methodology: a unit that spans two counties is counted once per county | Correct and explained |
| Market Report hero | "Every mortgage application … 364,013" | The report's own tables exclude business-purpose loans and reverse mortgages | **Overclaim. Reword.** |
| Webflow-hosted "Loan-Cost-Study-2024.pdf" in the LE guide | Cited as a study | Publisher unknown | `[VERIFY]`. Replace it if it comes from a lender or vendor. |

**Compliance posture: good.**
- Calculators open with "Choose a rate," never a default rate.
- The VA calculator says "down payment options for eligible veterans" rather than "no down payment."
- Every tool carries "not a quote / offer of credit," NMLS #2041154 and Equal Housing Opportunity.
- Every worked example I propose avoids rates. Examples that state a fee amount, a payment difference or a down-payment tier are tagged `[COMPLIANCE REVIEW]`.
- The VA chart itself contains down-payment tiers, a Reg Z triggering-term category. The identical chart is already live on `/learn/buying-home-with-va-loan/`, so compliance can rule once for both pages.

---

## 4. Template-wide changes (apply to all 16 tools)

### 4.1 Compact tool hero (P0)

```
.adp-hero--tool  { min-height:0; margin:16px 0 24px; }
≥1025px: grid 40% copy (eyebrow, H1, ≤50-word intro, trust line, 1 text link) | 60% tool card
≤1024px: H1 → intro (max 3 lines) → tool inputs. Photo moves below the FAQ or is dropped.
Remove the "Use the calculator" button. Keep one secondary text link (guide or related tool).
Acceptance: first input visible at ≤600 px on 1366×768 desktop and ≤450 px on a 390×844 phone.
```

### 4.2 Trust and freshness line, directly under the tool (P1)

`Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026` plus a page-specific rule-set sentence. Each page's exact sentence is in section 5. Update the date whenever a rule table changes (VA chart, FHFA/HUD limits, USDA limits, Treasury millage).

### 4.3 Result-state CTA pattern

The rule: one primary button in the established vocabulary, one secondary, and at most two contextual "next tool" text links that pass values.

| Tool | Primary (label → destination) | Secondary | Contextual text link(s) |
|---|---|---|---|
| Mortgage | Start my application → `/start/?goal=buy` | Talk with Samantha → Calendly | Use this address's real tax rate → `/michigan-property-tax-calculator/` |
| Affordability | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | Start my application → `/start/?goal=buy` | Turn this price into a payment → `/mortgage-calculator/` |
| Refinance | Talk through your options → Calendly | Start my application → `/start/?goal=refi` | Get a break-even review → `/refinance/break-even-review/`; Compare points and a lender credit → `/points-vs-lender-credit-calculator/` |
| VA loan | Start my application → `/start/?goal=buy` | Talk with Samantha → Calendly | Exempt or not sure? Check your funding fee → `/va-funding-fee-calculator/` |
| VA funding fee | Talk it through with Samantha → Calendly (keep) | – | See this fee in a full VA payment → `/va-loan-calculator/` |
| USDA (eligible) | Start my application → `/start/?goal=buy` | Talk with Samantha → Calendly | – |
| USDA (not eligible) | Talk through your options → Calendly | – | See Michigan down payment help → `/purchase/down-payment-assistance/` |
| Property tax | Have Samantha check the property → Calendly (keep) | – | Put this tax into a monthly payment → `/mortgage-calculator/?price=&tax=` |
| Transfer tax | See what the whole sale leaves you → `/seller-net-sheet-calculator/` (keep, pass price) | Talk with Samantha → Calendly | – |
| PMI | Talk it through with Samantha (keep) + Ask her to check back (keep) | – | See if a refinance removes it sooner → `/learn/refinancing-to-remove-mortgage-insurance/`; Reach 80% sooner with extra payments → `/mortgage-payoff-calculator/` |
| Payoff | Talk it through with Samantha (keep) | – | When will PMI end? → `/pmi-removal-calculator/`; Compare with a refinance → `/mortgage-refinance-calculator/` |
| Points vs credit | Go over the options with Samantha (keep) | Check a Loan Estimate (keep) | – |
| Rent vs buy | Talk it through with Samantha (keep) | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | – |
| Seller net sheet | Talk about the next home with Samantha (keep) | – | Plan buying before you sell → `/purchase/buy-before-you-sell/` |
| Loan limits | Talk with Samantha about your loan (keep) | – | Over the limit: See how jumbo loans work → `/product-loans/jumbo-loans/` |
| LE check | Send to Samantha (keep) | Pick a time to talk (keep) | – |

Track every primary and secondary click as a GA4 event: `calc_result_cta` with `tool`, `label` and `position` parameters. This feeds the CTA team.

### 4.4 Schema (P1)

Keep `WebApplication`, `FAQPage`, `BreadcrumbList` and `WebPage`, and add:
- On `WebApplication`: `featureList`, `creator` (organization @id), `isPartOf` (`/calculators/#webpage`), `inLanguage`, `dateModified` and `about`.
- On `WebPage`: `"reviewedBy": {"@id":"https://alignlending.com/samantha-shelton/#samantha-shelton"}` and `"lastReviewed":"2026-11-15"`.

Google has shown FAQ rich results only for government and health sites since 2023, so the FAQPage value here is for Bing and AI engines. **Bing:** confirm in Bing Webmaster Tools that the FAQ markup is detected, and enable IndexNow in Rank Math so rule-table updates (2027 limits) are pushed the same day. This needs the Bing export.

### 4.5 Smaller template fixes

- Replace "$0" result placeholders in the HTML with "—" plus an input prompt (P2).
- Move the "What our clients say" H2 below the FAQ (P2).
- Show a visible breadcrumb, Home › Calculators › Tool (P2).
- Support query-string hand-offs between tools (P2).

---

## 5. Page-by-page implementation

For each tool: GSC context; the above-the-fold rewrite (H1, ≤50-word intro, tool placement, result CTA, trust line); the outline below the tool; title and meta; schema; and internal links (exact anchor → URL). Worked examples are illustrative, contain no rates and carry `[COMPLIANCE REVIEW]` where they show a fee or payment figure. All copy is subject to Align approval.

### 5.1 `/calculators/`: 76 C

- **GSC:** hub; no direct queries. 211 contextual source pages.
- **H1:** Mortgage Calculators and Tools for Michigan Homebuyers and Owners
- **Intro (45 words):** "Pick the question you are trying to answer and the tool works from your own numbers, with Michigan rules built in: property tax after the sale, state and county transfer tax, and the 2026 loan limits. No sign-up, and nothing is sent unless you choose."
- **Above the fold:** replace "Check a Loan Estimate" with a chooser, "Find my calculator" → `#find`, offering four chips: Buying · Refinancing · Selling · Checking an offer. Keep "Check a Loan Estimate" as a text link.
- **Cards:** add one quotable fact per card:
  - Loan limits: "$832,750 conforming, $541,287 FHA in every Michigan county (2026)."
  - Transfer tax: "$4.30 per $500, paid by the seller."
  - VA fee: "2.15% at first use with less than 5% down."
  - Property tax: "Typical taxable value jump after a sale: +50.5%."
- **New card:** "Loan-to-value calculator: your LTV and CLTV, and how far you are from the 80% PMI line" → `/loan-to-value-calculator/` (new page, F13).
- **Title (55):** Michigan Mortgage Calculators and Tools | Align Lending
- **Meta (148):** Free mortgage calculators built on Michigan rules: payment, affordability, VA funding fee, property tax after you buy, transfer tax, PMI and payoff.
- **Schema:** keep `CollectionPage` and `ItemList`. Give each `ListItem` a `url` and a `name` that matches the H3.

### 5.2 `/mortgage-calculator/`: 65 D

- **GSC:** "mortgage calculator michigan" 101 at 40.2; "michigan mortgage calculator" 54 at 32.3; "mortgage calculator michigan detroit" 42 at 18.3. 39 contextual source pages, 4 of them learn.
- **H1:** Michigan Mortgage Calculator With Taxes, Insurance and PMI
- **Intro (41 words):** "See a full monthly payment, not just principal and interest: property tax after the sale, homeowners insurance, HOA dues and PMI, each on its own line. You need the price, your down payment, a rate you choose and the loan term."
- **Tool placement:** compact hero (4.1). Tool immediately after the intro.
- **Result CTA:** **Start my application** → `/start/?goal=buy`, replacing "Get pre-approved". Secondary: **Talk with Samantha** → Calendly. Text link under the tax line: "Use this address's real tax rate" → `/michigan-property-tax-calculator/`.
- **Trust line:** "Property tax default: Michigan's 2025 median homestead rate (36.0 mills) on half the price, the year after the sale. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Accuracy fix (P0):** property-tax default 1.50 → **1.80**. New label: "About 1.8% of the price a year: Michigan's 2025 median homestead rate (36.0 mills) on a taxable value of half the price, the year after the sale. Get the published rate for an address."
- **Outline below the tool:**
  - H2 How the mortgage payment is calculated
    - H3 Principal and interest
    - H3 Property tax after a Michigan sale
    - H3 Insurance, HOA and PMI
  - H2 A worked example: the lines around principal and interest. *"Hypothetical example. On a $300,000 Michigan home, taxable value resets to about $150,000 the year after the sale. At Michigan's 2025 median homestead rate of 36.0 mills, that is about $5,400 a year, or $450 a month in escrow, whatever the seller paid. Insurance at 0.5% of the price adds about $1,500 a year ($125 a month). PMI applies on a conventional loan above 80% of the price and ends under the 78% rule. Principal and interest depend on the rate you enter."*
  - H2 Compare a 15-year and a 30-year term (new toggle, P2; link `/learn/15-year-vs-30-year-mortgage-comparison/`)
  - H2 Questions about your mortgage payment: keep the 10 existing questions, with two changes:
    - Rename "What credit score range generally gets better rates?" to **"How does my credit score affect pricing?"**
    - Add **"Why is my Michigan property tax higher than the seller's?"** (answer: the uncapping reset; link the study).
  - H2 In Samantha's words (moved down)
  - H2 Sources: CFPB Loan Estimate explainer; CFPB on PMI; Michigan Treasury 2025 total millage rates; MCL 211.27a.
- **Title (60):** Michigan Mortgage Calculator With Taxes, PMI | Align Lending
- **Meta (159):** Estimate a Michigan mortgage payment with property tax after the sale, insurance, HOA and PMI on their own lines. You pick the rate. No signup, no credit pull.
- **Schema:** `WebApplication.featureList`: ["Principal and interest at a rate you choose","Michigan property tax after the sale","Homeowners insurance","HOA dues","PMI above 80% of price"].
- **Internal links:**
  - In: `/learn/importance-of-mortgage-preapproval/`: "Michigan mortgage calculator" → `/mortgage-calculator/`
  - In: `/purchase/budget-review/`: "mortgage calculator with Michigan property tax" → `/mortgage-calculator/`
  - In: `/learn/budgeting-for-your-first-home/`: "Michigan mortgage calculator" → `/mortgage-calculator/`
  - Out: "work backward from your income instead" → `/home-affordability-calculator/`; "when PMI ends" → `/pmi-removal-calculator/`; "Conventional loans" → `/product-loans/conventional-loans/`

### 5.3 `/home-affordability-calculator/`: 69 D

- **GSC:** low direct volume ("how much house can i actually afford in michigan", 6 impressions at 35.3). 47 source pages, 37 of them city pages.
- **H1:** How Much House Can I Afford? Michigan Home Affordability Calculator
- **Intro (45 words):** "Work backward from your income, monthly debts and down payment to the highest home price that fits the debt-to-income limit you pick, with Michigan property tax after the sale included. You need gross monthly income, debt payments, your down payment and a rate you choose."
- **Result CTA:** **Build my homebuyer game plan** → `/purchase/homebuyer-game-plan/`. Secondary: **Start my application** → `/start/?goal=buy`. Text link: "Turn this price into a payment" → `/mortgage-calculator/`.
- **Trust line:** "Uses the DTI limits the main loan programs publish and Michigan's 2025 median homestead millage. A ceiling, not a target. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Accuracy fix (P0):** the 1.5% → 1.8% tax default, as in 5.2.
- **Outline:**
  - H2 How the affordability calculation works
    - H3 Step 1: your DTI limit
    - H3 Step 2: what is left for housing
    - H3 Step 3: the price that fits
  - H2 A worked example (hypothetical). *"Gross income of $8,000 a month at a 43% debt-to-income limit allows $3,440 a month for all debts. Subtract $500 in car and student loan payments and $2,940 is left for the housing payment, including property tax and insurance. The calculator then finds the price whose payment, at the rate you enter, fits inside $2,940."* `[COMPLIANCE REVIEW]`
  - H2 DTI limits by loan type: 2 sentences plus a link, "DTI limits by loan type" → `/learn/debt-to-income-ratio-dti/`
  - H2 Questions about affordability: keep the 10 existing questions and add **"Can I afford a $300,000 house on a $70,000 salary?"** *"$70,000 a year is about $5,833 a month. At a 43% debt-to-income limit, that allows about $2,508 a month for all debts, including the new housing payment. With no other debts, $2,508 is your ceiling for principal, interest, tax and insurance. Whether $300,000 fits depends on your rate and down payment, so enter them above."*
  - H2 Your ceiling is not your budget (existing)
  - H2 Sources: CFPB on DTI; Fannie Mae Selling Guide B3-6-02; HUD Handbook 4000.1; VA Lenders Handbook M26-7 ch. 4; USDA HB-1-3555 ch. 11.
- **Title (56):** How Much House Can I Afford? Michigan Calculator | Align
- **Meta (157):** See the Michigan home price your income, debts and down payment support at the DTI limit you pick, with property tax after the sale built in. A ceiling only.
- **Internal links:**
  - In: `/learn/debt-to-income-ratio-dti/`: "home affordability calculator" → `/home-affordability-calculator/`
  - In: `/learn/budgeting-for-your-first-home/`: "home affordability calculator" → `/home-affordability-calculator/`
  - Out: "FHA loans" → `/product-loans/fha-loans/`; "HomeReady and Home Possible" → `/product-loans/home-ready/` (existing cards)

### 5.4 `/mortgage-refinance-calculator/`: 67 D

- **GSC:** no "refinance calculator" impressions yet. 8 contextual source pages.
- **H1:** Mortgage Refinance Calculator: Find Your Break-Even Month
- **Intro (43 words):** "See how many months a refinance takes to pay back its closing costs, and whether you'll keep the loan that long. You need the balance, rate and years left from your statement, the new rate and term you're considering, and the closing costs."
- **Result CTA:** **Talk through your options** → Calendly. Secondary: **Start my application** → `/start/?goal=refi`. Text links: "Get a break-even review" → `/refinance/break-even-review/`; "Compare points and a lender credit" → `/points-vs-lender-credit-calculator/`.
- **Trust line:** "Standard amortization on your own statement figures; no rate from us. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Outline:**
  - H2 How the break-even month is calculated
    - H3 Your current payment
    - H3 The new payment
    - H3 Closing costs divided by the monthly difference
  - H2 A worked example (hypothetical). *"Closing costs of $4,800 and a $150 drop in monthly principal and interest: $4,800 ÷ $150 = 32 months. If you expect to keep the loan five years (60 months), the costs are earned back with 28 months to spare. If you expect to move in two years, they are not."* `[COMPLIANCE REVIEW]`
  - H2 When break-even is not the whole answer
    - H3 Restarting the term
    - H3 Rolling costs into the loan
    - H3 Cash-out and debt
  - H2 Questions about refinancing: keep the 9 existing questions and add "Does refinancing remove PMI?" (link `/pmi-removal-calculator/` and `/learn/refinancing-to-remove-mortgage-insurance/`).
  - H2 Sources: CFPB Loan Estimate explainer; CFPB "What is a refinance" page.
- **Title (54):** Refinance Calculator: Break-Even Month | Align Lending
- **Meta (159):** See how many months a Michigan refinance takes to pay back its closing costs, from your statement and a rate you choose, against how long you'll keep the loan.
- **Internal links (all new, contextual):**
  - `/refinance/` hub (P0): "refinance break-even calculator" → `/mortgage-refinance-calculator/`; "PMI removal calculator" → `/pmi-removal-calculator/`; "mortgage payoff calculator" → `/mortgage-payoff-calculator/`
  - `/learn/refinancing/`: "refinance calculator" → `/mortgage-refinance-calculator/`
  - `/learn/refinancing-closing-costs/`: "refinance break-even calculator" → `/mortgage-refinance-calculator/`
  - `/refinance/break-even-review/`: "mortgage refinance calculator" → `/mortgage-refinance-calculator/` (roles: tool vs service)

### 5.5 `/va-loan-calculator/`: 62 D

- **GSC:** 849 impressions at 53.5. "va loan calculator with funding fee" 98 at **20.9**; "va loan calculator" 61 at 56.4; "va vs conventional loan calculator" 58 at 45.6; "va loan calculator with taxes and insurance" 36 at 37.7.
- **SERP:** Bankrate, NerdWallet, Veterans United, Zillow, LendingTree, Lower, Omni, Military.com and Mable. All lead with the tool. Most include the funding fee, taxes and insurance. Mable and Veterans United add first-use/subsequent and exempt toggles, which Align already has.
- **H1:** VA Loan Calculator With Funding Fee, Taxes and Insurance
- **Intro (46 words):** "Estimate a VA loan payment with the funding fee added to the loan, Michigan property tax after the sale and homeowners insurance. You need the price, any down payment, a rate you choose, and whether you've used your VA benefit or are exempt from the fee."
- **Result CTA:** **Start my application** → `/start/?goal=buy`. Secondary: **Talk with Samantha** → Calendly. Text link under the fee line: "Exempt or not sure? Check your funding fee" → `/va-funding-fee-calculator/`.
- **Trust line:** "Funding fee from VA's chart for loans closed on or after April 7, 2023; property tax default from Michigan's 2025 median homestead rate (36.0 mills). Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Accuracy fix (P0):** `h*0.015` → `h*0.018`, plus the label in 5.2.
- **Outline:**
  - H2 How the VA loan calculator works
    - H3 The funding fee is added to the loan
    - H3 Principal and interest
    - H3 Property tax and insurance in Michigan
  - H2 A worked example (hypothetical). *"Hypothetical example, not an offer of credit. A $300,000 home at first use with less than 5% down: VA's 2.15% funding fee adds $6,450, so the loan becomes $306,450. Michigan property tax at the 2025 median homestead rate is about $5,400 a year ($450 a month) after the reset, and insurance at 0.5% of the price about $1,500 a year ($125 a month). Principal and interest depend on the rate you enter."* `[COMPLIANCE REVIEW]`
  - H2 VA funding fee chart (2026): the same table as 5.6, or a 3-row summary plus a link.
  - H2 VA vs. conventional: what changes in the payment
    - H3 Mortgage insurance
    - H3 Upfront cost
    - H3 Down payment

    Add a "Compare with a conventional loan" toggle (P2).
  - H2 Questions about VA loan payments: keep the 9 existing questions and add **"How much is a VA loan payment on a $300,000 house?"** *"It depends on the rate you choose. Enter $300,000 above: the calculator adds the funding fee (2.15% at first use with less than 5% down, $6,450), Michigan property tax (about $450 a month at the 2025 median rate) and insurance to principal and interest at your rate."*
  - H2 Using your benefit, in Samantha's words (moved down)
  - H2 Sources: VA funding fee and closing costs; VA Lenders Handbook M26-7 (residual income); CFPB Loan Estimate explainer; Michigan Treasury millage.
- **Title (58):** VA Loan Calculator With Funding Fee, Taxes | Align Lending
- **Meta (150):** Estimate a VA loan payment with the funding fee for your down payment and use, Michigan property tax after the sale, and insurance. You pick the rate.
- **Schema:** `featureList`: ["VA funding fee by down payment and use","Funding fee exemption","Michigan property tax after the sale","Homeowners insurance","No monthly mortgage insurance"].
- **Internal links (P0, contextual, exact copy in the CSV):**
  - `/learn/va-loans/`: "VA loan calculator with the funding fee, taxes and insurance" → `/va-loan-calculator/`
  - `/learn/buying-home-with-va-loan/`: "VA loan calculator" → `/va-loan-calculator/`
  - `/learn/how-to-qualify-for-va-loan/`: "estimate the VA payment for a specific price" → `/va-loan-calculator/`
  - `/product-loans/va-loans/`: in-content button "Estimate a VA payment" → `/va-loan-calculator/`
  - `/purchase/va-homebuyer-plan/`: "Estimate the full VA payment" → `/va-loan-calculator/`
  - `/va-funding-fee-calculator/` result: "See this fee in a full VA payment" → `/va-loan-calculator/`

### 5.6 `/va-funding-fee-calculator/`: 72 C

- **GSC:** "va funding fee calculator" 145 at 23.0; "calculate va funding fee" 74 at **17.6**; "va loan funding fee calculator" 61 at **15.3**; "how much is a va funding fee" 52 at 84.2; "va funding fee chart" 12 at 69.1.
- **PAA:** How much is the VA funding fee on a purchase? · What exempts you from paying VA funding fees? · Can the VA funding fee be paid by the seller? · How to avoid the VA funding fee? · Can you write off VA funding fee on taxes? · Is VA funding fee different than closing cost? · What is the VA funding fee on cash out loans? · What is the VA funding fee for 2026?
- **H1:** VA Funding Fee Calculator (keep; exact match)
- **Intro (43 words):** "Work out the one-time VA funding fee in dollars for a purchase, cash-out refinance or IRRRL. You need the price and down payment, or the new loan amount, and whether you've used your VA benefit before. Veterans with a disability exemption pay $0."
- **Result CTA:** **Talk it through with Samantha** → Calendly (keep). Text link: "See this fee in a full VA payment" → `/va-loan-calculator/?price=&down=&use=&exempt=`.
- **Trust line:** "Uses VA's funding fee chart for loans closed on or after April 7, 2023, checked against VA.gov on November 15, 2026. Reviewed by Samantha Shelton, NMLS 1647301."
- **New H2 directly below the tool (P0): "VA funding fee chart for 2026"**

  | Loan | First use | After first use |
  |---|---|---|
  | Purchase or construction, less than 5% down | 2.15% | 3.3% |
  | 5% to less than 10% down | 1.5% | 1.5% |
  | 10% or more down | 1.25% | 1.25% |
  | Cash-out refinance | 2.15% | 3.3% |
  | IRRRL (streamline refinance) | 0.5% | 0.5% |
  | Loan assumption | 0.5% | 0.5% |
  | Manufactured home not on a permanent foundation | 1% | 1% |

  Caption: "VA funding fee as a percentage of the loan amount, loans closed on or after April 7, 2023. Source: VA, Funding fee and closing costs, checked November 15, 2026." `[VERIFY the assumption and manufactured-home rows on VA.gov]` `[COMPLIANCE REVIEW: VA's schedule; identical figures already live on /learn/buying-home-with-va-loan/]`

  **Answer capsule (58 words):** "How much is the VA funding fee in 2026? It is a share of the loan amount set by VA: 2.15% on a first-use purchase with less than 5% down, 1.5% with 5% down, 1.25% with 10% down, and 3.3% on a later use with less than 5% down. A cash-out refinance is 2.15% or 3.3%, an IRRRL 0.5%, and exempt veterans pay nothing."
- **Outline:**
  - H2 VA funding fee chart for 2026 (above)
  - H2 How the VA funding fee is calculated
    - H3 The formula: fee = base loan × chart rate; financed loan = base loan × (1 + rate)
    - H3 What moves your rate: loan type, down payment as a share of price, first or later use
    - H3 When the fee is $0
  - H2 A worked example (hypothetical). *"Hypothetical arithmetic on VA's chart, not an offer of credit. A first-use purchase with a $300,000 base loan and less than 5% down: $300,000 × 2.15% = $6,450, and the financed loan becomes $306,450. Put 5% down on the same $300,000 price and the base loan is $285,000 at 1.5%: a $4,275 fee. An IRRRL on a $250,000 loan: $250,000 × 0.5% = $1,250."* `[COMPLIANCE REVIEW]`
  - H2 Who does not pay the VA funding fee (the existing exemption list, as bullets)
  - H2 Questions about the VA funding fee:
    - How much is the VA funding fee in 2026?
    - Who is exempt from the VA funding fee?
    - Can the seller pay the VA funding fee? (existing "Do I have to pay it in cash?" answer, retitled)
    - How can I lower or avoid the VA funding fee? (an exemption, the 5% and 10% tiers, an IRRRL's lower rate)
    - Is the VA funding fee part of closing costs? (It is a one-time VA charge shown on its own line of the Loan Estimate and can be financed.)
    - Is the VA funding fee tax deductible? *"It may be. The IRS treats the VA funding fee as a mortgage insurance premium, and whether that is deductible depends on the tax year and your return. Ask a tax professional and see IRS Publication 936."* `[VERIFY Pub. 936 for tax year 2026]`
    - What if my disability rating comes through after I close? (existing)
    - Does a refinance charge the fee again? (existing)
  - H2 Planning a VA loan (existing cards)
  - H2 Sources: VA, Funding fee and closing costs; 38 U.S.C. § 3729; CFPB Loan Estimate explainer.
- **Title (56):** VA Funding Fee Calculator and 2026 Chart | Align Lending
- **Meta (152):** Work out your VA funding fee in dollars for a purchase, cash-out refinance or IRRRL from VA's current chart, shown in full, and check if you are exempt.
- **Schema:** `WebApplication.featureList`: ["Purchase, cash-out and IRRRL fees","First and subsequent use","Exemption check","Fee in dollars and financed loan amount"]; `FAQPage` with the 8 questions; `about`: {"@type":"Thing","name":"VA funding fee"}.
- **Internal links:**
  - Out: "See this fee in a full VA payment" → `/va-loan-calculator/`; "VA loans" → `/product-loans/va-loans/`; "VA Homebuyer Plan" → `/purchase/va-homebuyer-plan/`; "IRRRL vs. cash-out refinance" → `/learn/benefits-of-refinancing-va-loan/`; "VA loan requirements and COE" → `/learn/va-loans/`
  - In: the 35 existing learn links are fine. Vary 5 of them to "VA funding fee chart and calculator."

### 5.7 `/usda-eligibility-check/`: 76 C

- **GSC:** page-level 86 impressions at 41.5. "usda eligibility" **576 at 11.1** lands on a learn article (likely `/learn/usda-loan-basics/`). "usda loan eligibility" 119 at 26.9; "usda income eligibility" 65 at 28.4; "usda loan eligibility calculator" 14 at 26.4.
- **H1:** USDA Loan Eligibility Check by Address and Income
- **Intro (44 words):** "Check whether a home's address sits in a USDA-eligible area, using USDA's own map, then compare your household's yearly income with USDA's FY 2026 limit for that county. You need the address and the income of every adult who will live in the home."
- **Result CTA:**
  - Eligible: **Start my application** → `/start/?goal=buy`, plus **Talk with Samantha**.
  - Not eligible: **Talk through your options** → Calendly, plus "See Michigan down payment help" → `/purchase/down-payment-assistance/`.
- **Trust line:** "Reads USDA's eligibility map and FY 2026 moderate income limits (HB-1-3555, Appendix 5). We don't save your address. USDA makes the final decision. Reviewed by Samantha Shelton, NMLS 1647301."
- **Headings fix:** replace H2 "Most of Michigan: $122,800 for 1 to 4 people" and the six bare county-name H3s with **H2 "USDA income limits in Michigan, FY 2026"** and this table:

  | County | 1–4 people | 5–8 people |
  |---|---|---|
  | All other Michigan counties | $122,800 | $162,100 |
  | Washtenaw | $153,550 | $202,700 |
  | Livingston | $150,200 | $198,300 |
  | Leelanau | $140,450 | $185,400 |
  | Grand Traverse | $130,950 | $172,900 |
  | Ottawa | $130,750 | $172,600 |
  | Midland | $123,250 | $162,700 |

  `[VERIFY every figure against USDA's FY 2026 guaranteed-loan limit map, rd-grhlimitmap.pdf]`
- **Outline:**
  - H2 USDA income limits in Michigan, FY 2026 (table)
  - H2 How the USDA check works
    - H3 Where is the home?
    - H3 What does the household earn?
    - H3 Does the payment fit?
  - H2 A worked example. *"Hypothetical example. A household of two adults and two children under 18 in Oakland County earns $123,500 a year, above the $122,800 limit on gross income. USDA deducts $480 for each child under 18, so adjusted income is $122,540, under the limit."* `[VERIFY the $480 deduction, HB-1-3555 ch. 9]`
  - H2 What USDA charges: the guarantee fee. *"For fiscal 2026, USDA's upfront guarantee fee is 1% of the loan amount, which can be added to the loan, and the annual fee is 0.35% of the scheduled unpaid balance, collected monthly. Both are set by USDA each fiscal year."* `[COMPLIANCE REVIEW]`
  - H2 Questions about USDA eligibility: keep the 6 existing questions and add "What is the USDA income limit in Michigan?" and "How do I know if an address is USDA eligible?"
  - H2 Sources: USDA eligibility site; HB-1-3555 (ch. 9, ch. 12, Appendix 5); Census geocoder; 7 CFR 3555.107 (fees).
- **Title (59):** USDA Eligibility Check: Michigan Address and Income | Align
- **Meta (151):** Check a Michigan address on USDA's own eligibility map, then compare your household income with USDA's FY 2026 limit for that county. Nothing is saved.
- **Internal links:**
  - In: `/learn/usda-loan-basics/`, in its first 100 words: "USDA eligibility check" → `/usda-eligibility-check/`
  - In: `/product-loans/usda-loans/`, as the above-the-fold secondary CTA: "Check an address" → `/usda-eligibility-check/`
  - Out: "USDA loans" → `/product-loans/usda-loans/`; "USDA and down payment help" → `/learn/usda-and-assistance-programs/`

### 5.8 `/loan-limits/`: 82 B

- **GSC:** "fha loan limits michigan" 154 at 42.1; "fha county loan limits" 164 at 45.9; "michigan va loan limits" 27 at 52.3; "michigan jumbo loan limit" 6 at 21.7. 361 source pages.
- **H1 (now):** 2026 Michigan Loan Limits by County, and Where 2027 Stands
- **Intro (47 words):** "Every Michigan county shares the same 2026 limits for a one-unit home: $832,750 conforming and $541,287 FHA. Pick a county in any of the six states we serve to see 1- to 4-unit limits and whether your loan fits. FHFA's 2027 figure is due in late November."
- **Result CTA:** keep **Talk with Samantha about your loan**. When the loan exceeds the limit, show "See how jumbo loans work" → `/product-loans/jumbo-loans/`.
- **Trust line:** "Limits read from FHFA's 2026 conforming loan limit file and HUD's 2026 FHA limits (Mortgagee Letter 2025-23). Checked November 15, 2026. Reviewed by Samantha Shelton, NMLS 1647301."
- **Headings fix:** take the values out of the H3s and use one table:

  | Units | Conforming | FHA |
  |---|---|---|
  | 1 | $832,750 | $541,287 |
  | 2 | $1,066,250 | $693,050 |
  | 3 | $1,288,800 | $837,700 |
  | 4 | $1,601,750 | $1,041,125 |

  Then H3 "VA loans: no limit with full entitlement" and H3 "USDA loans: no maximum loan amount."
- **Worked example:** *"Example. An $810,000 loan on a one-unit Michigan home is under the 2026 conforming limit of $832,750. An $850,000 loan is $17,250 over it and would be a jumbo loan in 2026, unless the lender already uses an early 2027 limit."*
- **FAQ adds:** "What is the jumbo loan limit in Michigan?" (above $832,750 for one unit in 2026) and "What is the 2027 conforming loan limit?" (pending; update on release).
- **Title (60):** Michigan FHA and Conforming Loan Limits 2026 | Align Lending
- **Meta (157):** 2026 Michigan loan limits: $832,750 conforming and $541,287 FHA for a one-unit home in all 83 counties, 2- to 4-unit limits, and where the 2027 limits stand.
- **2027 announcement-day playbook (P0, prepare now).** FHFA is expected to release on about November 24–25. On release day:
  1. Title: `2027 Michigan Loan Limits: Conforming and FHA | Align Lending`.
  2. H1: `2027 Michigan Loan Limits by County`.
  3. Intro sentence 1: `Every Michigan county shares the same 2027 limits for a one-unit home: $[FHFA figure] conforming and $[HUD figure] FHA.` Publish the FHA number only from HUD's Mortgagee Letter `[VERIFY]`.
  4. Keep the 2026 table below, labeled "2026 limits (loans closed through December 31, 2026)."
  5. Update the trust-line date, `dateModified` and the `/calculators/` card fact.
  6. Ping IndexNow (Bing) and request indexing in GSC.
  7. Update `/learn/fha-loan-limits/` once HUD publishes.
- **Schema:** add `Dataset` ("2026 conforming and FHA loan limits by county: MI, OH, NC, FL, LA, TX"; `isBasedOn` FHFA and HUD; `license` CC BY 4.0). JSON is in the CSV.
- **Internal links:**
  - Out (existing): "Conventional loans" → `/product-loans/conventional-loans/`, "FHA loans" → `/product-loans/fha-loans/`, "Jumbo loans" → `/product-loans/jumbo-loans/`
  - In: `/learn/fha-loan-limits/` above the fold: button "Find your county limit" → `/loan-limits/`

### 5.9 `/michigan-property-tax-calculator/`: 77 C

- **GSC:** "michigan property tax calculator" 77 at 48.8; "property tax uncapping michigan" 22 at 43.1; "millage rate calculator" 9 at 16.9; "property tax calculator michigan" 5 at 14.8.
- **SERP:** michigan.gov Property Tax Estimator (official, current taxes), SmartAsset, ustax.tools, HomeLight, propertytaxbystate and calcuris. The third-party tools apply flat effective rates (search results showed 1.19%, 1.38% and 1.54%) and **none model the post-sale reset**. That is Align's moat.
- **H1:** Michigan Property Tax Calculator: Your Tax After You Buy
- **Intro (41 words):** "Estimate the property tax you'll pay after a Michigan home's taxable value resets the year after the sale, not the seller's bill. You need the purchase price and the address, city or township; the calculator fills in Treasury's 2025 homestead millage."
- **Tool placement (P0):** move the tool directly under the intro. Put "How Michigan property tax is figured after you buy" immediately *below* the tool. Today about 180 words and an H2 precede the first input.
- **Result CTA:** keep **Have Samantha check the property** → Calendly. Add "Put this tax into a monthly payment" → `/mortgage-calculator/?price=&tax=`.
- **Trust line:** "Millage from Michigan Treasury's 2025 total rates; taxable value reset under MCL 211.27a. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Headings fix:**
  - "Her rule: never borrow somebody else's tax bill" → **"Why we plan from the buyer's tax bill, not the seller's"**
  - H3 "Not artificially cheaper" → "The seller's bill is lower for a reason"
  - H3 "Higher is the better surprise" → "Planning high is the safer surprise"
  - H3 "The property decides" → "The property sets the rate"
- **Outline:**
  - H2 How Michigan property tax is figured after you buy (existing; keep its 60-word answer)
  - H2 A worked example. *"Example. A $300,000 purchase in a community at 36.0 homestead mills, Michigan's 2025 median: taxable value after the reset is about $150,000, so the yearly tax is about $150,000 × 36.0 ÷ 1,000 = $5,400. If the seller's taxable value was about $99,700, their bill at the same millage was about $3,590. The difference, about $1,810, is the uncapping, in line with the $1,814 statewide figure in our 2026 Uncapping Study."*
  - H2 Three things set a Michigan buyer's tax bill (existing)
  - H2 Why we plan from the buyer's tax bill, not the seller's
  - H2 Questions about Michigan property tax after you buy: keep the 8 existing questions and add:
    - **Are Michigan property taxes based on the purchase price?** *"Not directly. The year after a sale, taxable value resets to the state equalized value, which is half of the assessor's estimate of market value. That often lands near half the price you paid, which is why we plan with half the price. Your tax is that value times the address's millage, divided by 1,000."*
    - **How much do property taxes go up after you buy in Michigan?** (taxable value typically +50.5% in 2026; link the study)
    - **Do disabled veterans pay property tax in Michigan?** (MCL 211.7b exemption) `[VERIFY]`
  - H2 2025 homestead millage by community (existing 1,843-row table; add a CSV download)
  - H2 Sources (existing)
- **Title (57):** Michigan Property Tax Calculator: Your Bill After You Buy
- **Meta (156):** Enter a Michigan address for its 2025 homestead millage from Treasury, then see the tax after taxable value resets the year after you buy, not the seller's.
- **Schema:** add `Dataset` for the millage table (`isBasedOn` Treasury 2025 Total Rates PDF; `temporalCoverage` 2025; CC BY 4.0).
- **Internal links:**
  - City template (P1): replace the 832 identical anchors with "estimate property tax on a {City} home after you buy" → `/michigan-property-tax-calculator/?place={city-slug}`.
  - Out: "2026 Uncapping Study" → `/research/michigan-property-tax-uncapping-study/`; "Michigan taxable value" → `/learn/michigan-taxable-value/`; "mortgage escrow accounts" → `/learn/mortgage-escrow-accounts/` (existing)

### 5.10 `/michigan-transfer-tax-calculator/`: 81 B

- **GSC:** "michigan transfer tax calculator" 168 at 37.3; "calculate property transfer tax" 14 at 24; "who pays transfer tax in michigan" 6 at 9.8; "wayne county transfer tax" 6 at 42.2; first-time-buyer variants at 14–20.
- **PAA:** Who is responsible for transfer tax in Michigan? · Is there a transfer tax in Michigan? · Who pays the transfer tax in a real estate transaction? · How to avoid taxes when transferring property? · Can I sell my house to my son for $1?
- **H1:** Michigan Transfer Tax Calculator (keep)
- **Intro (44 words):** "Michigan charges $3.75 in state tax and $0.55 in county tax on every $500 of a home's sale price, 0.86% in all, and the seller pays it by law. Enter the sale price to see each part, and check whether the state exemption applies."
- **Result CTA:** keep **See what the whole sale leaves you** → `/seller-net-sheet-calculator/?price=`. Secondary: **Talk with Samantha**.
- **Trust line:** "Rates from MCL 207.525 (state) and MCL 207.504 (county); exemption from MCL 207.526. Same county rate in all 83 counties, Wayne included. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **New H2 (P0): "Michigan transfer tax by sale price"**

  | Sale price | State ($3.75/$500) | County ($0.55/$500) | Total |
  |---|---|---|---|
  | $150,000 | $1,125 | $165 | $1,290 |
  | $200,000 | $1,500 | $220 | $1,720 |
  | $250,000 | $1,875 | $275 | $2,150 |
  | $300,000 | $2,250 | $330 | $2,580 |
  | $350,000 | $2,625 | $385 | $3,010 |
  | $400,000 | $3,000 | $440 | $3,440 |
  | $500,000 | $3,750 | $550 | $4,300 |
  | $750,000 | $5,625 | $825 | $6,450 |
  | $1,000,000 | $7,500 | $1,100 | $8,600 |

  Caption: "Arithmetic on MCL 207.525 and 207.504 rates. Any part of $500 counts as a full step. The state column is $0 when the principal residence exemption applies."
- **Outline:**
  - H2 Michigan transfer tax by sale price (table)
  - H2 How the transfer tax is calculated
    - H3 Counted in $500 steps
    - H3 One county rate across Michigan
    - H3 The principal residence exemption
    - H3 Other exemptions in the law `[VERIFY the list against MCL 207.505 and 207.526]`
  - H2 A worked example. *"Example. A $300,200 sale is 601 steps of $500. State tax: 601 × $3.75 = $2,253.75. County tax: 601 × $0.55 = $330.55. Total: $2,584.30. If the seller qualifies for the principal residence exemption, only the $330.55 county tax is due."*
  - H2 Questions about Michigan's transfer tax: keep the 5 existing questions and add:
    - **How much is the transfer tax on a $300,000 house in Michigan?** "$2,580: $2,250 in state tax and $330 in county tax, which the seller pays at closing unless the purchase agreement says otherwise."
    - **Do first-time buyers pay transfer tax in Michigan?** "No. Michigan law makes the seller liable for both the state and county transfer tax, so there is no first-time buyer exemption to claim; a buyer pays only if the purchase agreement shifts it."
    - **How long do I have to claim the state refund?** `[VERIFY the refund window on Treasury's Real Estate Transfer Tax page]`
  - H2 Selling one home and buying the next (existing)
  - H2 Sources: MCL 207.523, 207.504, 207.505, 207.525, 207.526; Michigan Treasury, Real Estate Transfer Tax; Wayne County Register of Deeds, Document Recording.
- **Title (53):** Michigan Transfer Tax Calculator 2026 | Align Lending
- **Meta (159):** Michigan transfer tax is $3.75 state plus $0.55 county per $500 of the price, paid by the seller. Enter a price for each part, the exemption and a quick table.
- **Internal links:**
  - Out (existing, good): "Seller net sheet" → `/seller-net-sheet-calculator/`; "Buy Before You Sell" → `/purchase/buy-before-you-sell/`; "Seller's closing costs" → `/learn/sellers-closing-costs/`
  - In: `/learn/michigan-transfer-tax/` already links in content. Keep it.

### 5.11 `/pmi-removal-calculator/`: 76 C

- **GSC:** "pmi removal calculator" 71 at 22.2; "removing pmi calculator" 17 at **2.8**; "fha pmi removal calculator" 25 at **7.0**; "pmi calculator removal" 25 at 15.6. AI-style persona queries ("…what pmi removal calculator…") show position 1.
- **PAA:** How much do I need to get rid of PMI? · How to calculate LTV to remove PMI? · What is the difference between PMI and MIP? · What is a loan to value ratio calculator?
- **H1:** PMI Removal Calculator: When Your Mortgage Insurance Ends
- **Intro (46 words):** "Find the month you can ask your servicer to cancel PMI (80% of original value) and the month it ends on its own (78%), or the FHA premium rule for your loan. You need the original value, loan amount, note rate, term and first payment date."
- **Result CTA:** keep both buttons. Add "See if a refinance removes it sooner" → `/learn/refinancing-to-remove-mortgage-insurance/` and "Reach 80% sooner with extra payments" → `/mortgage-payoff-calculator/`.
- **Trust line:** "Applies the Homeowners Protection Act's 80% and 78% rules and HUD Mortgagee Letter 2013-04 for FHA. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Outline:**
  - H2 How the PMI end dates are calculated
    - H3 80%: when you can ask
    - H3 78%: when it ends on its own
    - H3 The midpoint backstop
    - H3 FHA's own rule
  - H2 A worked example. *"Example. Original value is $300,000, the lower of the price and the appraisal. 80% of that is $240,000: once your scheduled balance reaches $240,000 you can ask to cancel. 78% is $234,000: PMI ends automatically when the scheduled balance gets there, if you are current. Extra principal can bring your actual balance to $240,000 sooner."*
  - H2 Questions about removing mortgage insurance: keep the 6 existing questions and add "How much do I need to pay to get rid of PMI?", "What is the difference between PMI and MIP?" and "How do I calculate my LTV to remove PMI?" (link the new LTV calculator).
  - H2 What clients say (moved below the FAQ)
  - H2 Sources: CFPB; Homeowners Protection Act, 12 U.S.C. 4901–4910; HUD ML 2013-04.
- **Title (54):** PMI Removal Calculator: Your 80% and 78% Dates | Align
- **Meta (159):** Find the month you can ask to cancel PMI at 80% of original value and the month it ends at 78%, from your loan papers, plus the FHA premium rule for your loan.
- **Internal links:**
  - In: `/refinance/` hub: "PMI removal calculator" → `/pmi-removal-calculator/`
  - In: `/learn/what-is-loan-to-value-ratio/`: already links in content. Keep it.
  - Out: "Conventional loans" → `/product-loans/conventional-loans/`; "mortgage insurance" → `/learn/mortgage-insurance/` (existing)

### 5.12 `/mortgage-payoff-calculator/`: 71 C

- **GSC:** about 700 impressions across 30+ variants. "mortgage payoff calculator" 234 at 41.4; "payoff mortgage calculator" 67 at 44.7; "payoff calculator" 65 at 54.5; "home loan payoff calculator" 44 at 56.2; "estimate mortgage payoff calculator" 11 at **3.8**.
- **PAA:** How to calculate paying a mortgage off early? · How can I pay my 30 year mortgage off in 15 years? · What happens if I pay an extra $100 a month? · Why is it not smart to pay off your mortgage early?
- **H1:** Mortgage Payoff Calculator: Extra Payments, Biweekly or Lump Sum
- **Intro (41 words):** "See how much sooner extra monthly payments, half-payments every two weeks or a one-time lump sum pay off your mortgage, and what a recast does to the payment. You need your balance, note rate and principal-and-interest payment from your latest statement."
- **Result CTA:** keep **Talk it through with Samantha**. Add "When will PMI end?" → `/pmi-removal-calculator/` and "Compare with a refinance" → `/mortgage-refinance-calculator/`.
- **Trust line:** "Runs your loan month by month from your own statement figures; extra money goes to principal. Reviewed by Samantha Shelton, NMLS 1647301 · Rules last checked November 15, 2026."
- **Outline:**
  - H2 How extra payments shorten a mortgage
    - H3 Extra each month
    - H3 Half every two weeks: 13 payments a year
    - H3 A lump sum, with or without a recast
  - H2 A worked example. *"Example. Half-payments every two weeks add up to 26 halves, or 13 full payments a year: one extra payment each year, all of it principal. A $10,000 lump sum cuts the balance by $10,000 at once. Without a recast, the payment stays the same and the payoff date moves up; with a recast, the servicer spreads the lower balance over the months left and the payment drops."*
  - H2 Questions about paying off a mortgage early: keep the 5 existing questions and add:
    - **What happens if I pay an extra $100 a month on my mortgage?** *"All $100 goes to principal, so the balance falls faster and less interest builds each month after that. How many months it saves depends on your rate, balance and time left; enter them above to see the new payoff date and the interest you would not pay."*
    - **How can I pay off a 30-year mortgage in 15 years?** (pay the payment a 15-year term would need on today's balance; the "extra each month" field shows the gap)
  - H2 What clients say (moved down)
  - H2 Sources: CFPB on prepayment penalties; 12 CFR 1026.43(g); CFPB on paying extra toward principal.
- **Title (55):** Mortgage Payoff Calculator: Extra, Biweekly or Lump Sum
- **Meta (152):** Use your statement to see how much sooner extra monthly payments, biweekly half-payments or a lump sum pay off your mortgage, and what a recast changes.
- **Internal links:**
  - In: `/refinance/` hub: "mortgage payoff calculator" → `/mortgage-payoff-calculator/`
  - In: `/learn/refinancing-to-shorter-loan-term/`: "mortgage payoff calculator" → `/mortgage-payoff-calculator/`
  - In: `/learn/payments-escrow-servicing/`: "mortgage payoff calculator" → `/mortgage-payoff-calculator/`
  - Out: "Mortgage recasting" → `/learn/mortgage-recasting/` (existing)

### 5.13 `/points-vs-lender-credit-calculator/`: 79 C

- **GSC:** no direct queries. This page supports conversion on Loan Estimate decisions.
- **H1:** keep.
- **Intro (44 words):** "Two offers on the same loan often trade a lower payment for more cash up front. Enter the points or lender credit and the monthly payment from each Loan Estimate to find the month paying more up front earns itself back. No rate needed."
- **Trust line:** "Uses page 1 (Projected Payments), page 2 (Sections A and J) and page 3 (In 5 Years) of the CFPB Loan Estimate. Reviewed by Samantha Shelton, NMLS 1647301."
- **Worked example:** *"Hypothetical example. Offer A costs $3,000 more at closing than Offer B, and its monthly principal and interest is $50 lower: $3,000 ÷ $50 = 60 months. Keep the loan longer than five years and Offer A costs less; sell or refinance sooner and Offer B does."* `[COMPLIANCE REVIEW]`
- **FAQ add:** "Are discount points tax deductible?" (IRS Topic 504 and Pub. 936) `[VERIFY]`
- **Title (55):** Points vs. Lender Credit Calculator: Break-Even | Align
- **Meta (149):** Enter the points and lender credit from two Loan Estimates and see the month paying more up front earns itself back, plus the five-year cost of each.
- **Internal links:**
  - In: `/refinance/break-even-review/`: links in content. Keep it.
  - Out: "Loan Estimate check" → `/compare-loan-estimates/`; "Rate buydowns and discount points" → `/learn/mortgage-rate-buydowns/` (existing)

### 5.14 `/rent-vs-buy-calculator/`: 75 C

- **GSC:** negligible demand. Keep at P2.
- **H1:** Rent vs. Buy Calculator for Michigan
- **Intro (39 words):** "Find the month owning starts to cost less than renting, from your own rent, the yearly increase you expect, and owning's one-time and monthly costs, including Michigan property tax after the sale. No verdict, and no rate from us."
- **Result CTA:** keep **Talk it through with Samantha**. Add **Build my homebuyer game plan** → `/purchase/homebuyer-game-plan/`.
- **Worked example:** *"Example. Rent of $1,800 a month rising 3% a year adds up to about $114,700 over five years. Enter owning's costs for the same home and the tool shows the first month owning's net cost stays below that running total."*
- **Title (52):** Rent vs. Buy Calculator for Michigan | Align Lending
- **Meta (156):** Rent vs. buy calculator: find the month owning starts to cost less than renting, from your own rent, closing costs and Michigan property tax after the sale.
- **Internal links:** In from `/learn/renting-vs-buying-financial-comparison/` (exists). Out: "First-time homebuyer plan" → `/purchase/first-time-homebuyer/`.

### 5.15 `/seller-net-sheet-calculator/`: 79 C

- **H1:** keep "Michigan Seller Net Sheet Calculator."
- **Intro (42 words):** "See what a Michigan home sale is likely to leave you after the mortgage payoff, the commissions you agreed, closing costs, concessions and state and county transfer tax. You need your payoff statement, your listing agreement terms and an expected sale price."
- **Result CTA:** keep **Talk about the next home with Samantha**. Add "Plan buying before you sell" → `/purchase/buy-before-you-sell/`.
- **Worked example:** *"Example. A $350,000 sale with a $210,000 payoff, 5.5% in agreed commissions ($19,250), $2,500 in title and closing fees and $3,010 in transfer tax (700 steps × $4.30) leaves about $115,240 before prorations, repairs and concessions."*
- **Fix:** replace the off-topic "Loan limits by county" card with "Seller's closing costs" → `/learn/sellers-closing-costs/`.
- **Title:** keep (52).
- **Meta (160):** See what a Michigan home sale leaves you: payoff, agreed commissions, closing costs, concessions and state and county transfer tax worked out from your figures.

### 5.16 `/compare-loan-estimates/`: 77 C

- **Issue:** the title "How To Compare Loan Estimates, Box By Box" competes with the guide (F11).
- **H1:** Loan Estimate Checker: What Does Your Loan Estimate Really Cost?
- **Intro (47 words):** "Choose a Loan Estimate PDF from any lender and every box is checked on your device, with plain feedback on what the lender charges and what to ask. Compare two offers on the same loan side by side. Nothing is uploaded unless you press Send to Samantha."
- **Above the fold:** cut 279 words to the hero, one privacy line and the file chooser. Move "What is read and sent" into an expandable panel under the tool.
- **CTA:** keep **Send to Samantha**. It is the strongest conversion pattern on the site.
- **Title (57):** Loan Estimate Checker: Compare Two Offers | Align Lending
- **Meta (155):** Choose a Loan Estimate PDF for box-by-box feedback on what the lender charges and what to ask, or compare two offers side by side. It stays on your device.
- **Internal links:** In: `/learn/how-to-compare-loan-estimates/` module CTA "Check my Loan Estimate" → `/compare-loan-estimates/`, replacing "Get a budget review".

### 5.17 `/learn/fha-loan-limits/`: 84 B (article typed as calculator)

- **Title (54):** 2026 FHA Loan Limits: $541,287 to $1,249,125 by County
- **Meta (156):** 2026 FHA loan limits run from the $541,287 floor to the $1,249,125 ceiling. See why your county's limit differs, how it's set and what it means in Michigan.
- Add an above-the-fold button "Find your county limit" → `/loan-limits/` after paragraph 1. Today atf_ctas = 0.
- National state queries ("fha loan limits new york", 68 impressions; Connecticut, Colorado, Minnesota) cannot convert for a 6-state broker. Do not chase them. The existing HUD lookup link serves them.

### 5.18 `/learn/how-to-compare-loan-estimates/`: 80 B (article typed as calculator)

- Module CTA: "Get a budget review" → **"Check my Loan Estimate"** → `/compare-loan-estimates/`.
- `[VERIFY]` the publisher of `cdn.prod.website-files.com/…/Loan-Cost-Study-2024.pdf`. If it is a lender or vendor, replace it with CFPB, FHFA or Freddie Mac research.

---

## 6. Research pages: linkable assets and AI-citation magnets

### 6.1 Assessment

| Criterion | Uncapping Study | Mortgage Market Report | Hub | Methodology |
|---|---|---|---|---|
| Original data | Yes: 83 counties, 1,534 places, 2008–2026 series | Yes: 2025 HMDA, 83 counties, 2024 comparison | Index | – |
| Methodology clarity | Linked; method in brief on-page | Method, limits, definitions on-page | Principles | **Excellent**: reconciliation to the STC report "to the dollar," retrieval date, county-split rule, data dictionary |
| Quotable stats | +50.5%; 9% in 2013; Charlevoix 91.7%; Monroe 37.0%; $1,814 on a $300K home | 218,394 loans; +66% refis; 66,247 HE loans/lines; 22.6% / 15.5% denials; 30.3% DTI>43%; 1 in 7 via third party | Stat tiles | Definitions |
| Downloads and embeds | PDF, 2 CSVs, PNG/SVG, embed code per chart | Same | – | – |
| License and "cite this" | CC BY 4.0, Short/Full citation | Same | Same | License section |
| Schema | Report + Dataset (`distribution`, `variableMeasured`, `temporalCoverage`, `isBasedOn`) | Same | CollectionPage/ItemList | WebPage only |
| Corrections | Logged 2026-10-27, explained | "No corrections" | Policy stated | Policy stated |
| Internal links in | 354 pages | **2** | **1** | 4 |
| Search result | "property tax uncapping michigan" at 43.1 | No queries yet | – | – |

**Verdict.** The Uncapping Study is a top-tier link magnet (95 on linkable-asset strength). The Market Report is close (90) but invisible inside the site. The research hub and methodology are credible scaffolding that needs internal authority.

### 6.2 Changes (exact copy in the CSV)

1. **Internal links (P0).** Add 11 insertions:
   - Home page: a "Michigan data we publish" module.
   - `/samantha-shelton/`, `/press/`, `/about-us/`, `/editorial-policy/` → research.
   - `/learn/michigan-taxable-value/` → Uncapping Study.
   - `/learn/debt-to-income-ratio-dti/`, `/learn/home-equity-line-of-credit-heloc/`, `/product-loans/manufactured-home-loans/`, `/learn/importance-of-mortgage-preapproval/`, `/refinance/home-equity-review/` → Market Report, each with the stat as the anchor context.
2. **"Questions this study/report answers" blocks (P1).** Add 5 Q&As each, with 40–60-word answers drawn only from the published figures (CSV rows). These become the passages AI Overviews, ChatGPT and Perplexity lift.
3. **Visible Sources list on the Uncapping Study (P1).** Today its only on-page external links are creativecommons.org and calendly.com. The primary sources (STC eEqualization forms L-4024/L-4046, Treasury 2025 Total Rates, the STC 2025 Annual Report, MCL 211.27a, the 2020 Census) sit only in JSON-LD and on the methodology page.
4. **"Cite this" sentence (P1).** *"According to Align Lending's 2026 Michigan Property Tax Uncapping Study, a typical Michigan home's taxable value rises 50.5% the year after it sells, up from 9% in 2013 (alignlending.com/research/michigan-property-tax-uncapping-study/)."* Add APA formats on the methodology page.
5. **Dataset schema tweaks (P2):**
   - `isAccessibleForFree: true` (boolean, not "1").
   - `version: "2026.1"` after the correction.
   - Add `citation` and `measurementTechnique`.
   - Add `contentSize` and `dateModified` on each `DataDownload`.
   - Add `TechArticle` on the methodology page, with author and dates, tied to both datasets.
6. **Market Report accuracy (P1).** Replace "Every mortgage application lenders reported on a Michigan home in 2025, 364,013 of them" with *"364,013 consumer mortgage applications lenders reported on Michigan homes in 2025 … Business-purpose loans and reverse mortgages are not included."*
7. **Titles and metas:**

   | Page | Title (length) | Meta (length) |
   |---|---|---|
   | Hub | Michigan Housing Research and Data, Free to Cite \| Align (56) | Original Michigan housing and mortgage research from public records: the 2026 Uncapping Study and 2025 Mortgage Market Report, with CSV data, charts and PDFs. (158) |
   | Methodology | Research Methodology: Sources, Methods, Citation \| Align (56) | How Align Lending research is built: public records only, published methods, reconciliation checks, a data dictionary, logged corrections and CC BY 4.0. (152) |
   | Uncapping Study | keep (58) | The year after a Michigan home sells, its taxable value rises about 50.5%. Data for all 83 counties and 1,534 cities and townships, free to cite with credit. (157) |
   | Market Report | Michigan Mortgage Market Report: 2025 HMDA Data \| Align (55) | 218,394 Michigan mortgage loans in 2025: what owners borrowed for, denial rates and reasons, debt-to-income and all 83 counties, from public HMDA records. (154) |

### 6.3 PR and outreach angles

Pitches should be drafted for Align's approval. Quotes must come from Samantha's existing published lines or be marked `[NEEDS SAMANTHA QUOTE: topic]`.

| Angle | Hook (from published figures) | Targets (outlet types and examples) | Timing |
|---|---|---|---|
| "Your tax bill is not the seller's" | Typical +50.5% taxable-value jump after a sale, up from 9% in 2013 | Statewide: Detroit Free Press, The Detroit News, MLive, Bridge Michigan, Crain's Detroit Business, Michigan Radio and WDET | Before winter tax bills (December 1), and again before spring listing season (March, Board of Review month) |
| 83 local stories | Each county's own jump (e.g., Charlevoix 91.7%, Benzie 87.7%, Leelanau 86.7%, Wayne 57%, Oakland 39%) | County dailies and weeklies (e.g., Traverse City and Petoskey-area papers for the northern leaders); local Realtor boards; county equalization departments | Rolling, 5–10 a week, with each county's chart embed |
| Proof for agents | One-page "buyer's tax, not seller's" sheet with the embed | Michigan Realtors and local boards (Realcomp-area agents); `/real-estate-agents/` page | With the agent newsletter |
| Home equity outpaced refinancing | 66,247 HE loans/lines vs 44,845 refis plus cash-outs | Crain's Detroit Business; personal-finance desks | Now; refresh with 2026 HMDA |
| Why Michigan mortgages get denied | Credit history and DTI each cited on 42% of denied purchase applications; 3 in 10 approvals above 43% DTI | MLive and Free Press personal finance; credit-counseling nonprofits; housing counselors (HUD-approved) | First-time-buyer season (February to April) |
| Manufactured homes denied about 7x as often | Market Report chart | Bridge Michigan (housing affordability); MSHDA-adjacent groups; manufactured-housing associations | Any |
| 1 in 7 applications came through a broker or third party | 14.2% | Trade press: National Mortgage Professional, Scotsman Guide; broker associations (AIME, NAMB, which link to Samantha's awards) | With the next AIME or NAMB event |

**AI-citation checklist.** Each study needs:
- A self-contained first sentence with the study name, year and figure ("The short answer" already does this; keep it).
- The Q&A block.
- Visible sources.
- A stable URL per edition. The 2027 edition should live at the same URL, with an archived `/2026/` copy so citations stay true.
- An entry in the Bing index, since Bing powers Copilot and much of ChatGPT search. This needs a Bing Webmaster export (not connected).

---

## 7. Where the GSC data points next (new tools)

1. **`/loan-to-value-calculator/` (P1, high impact, high effort).**
   - Title: "Loan-to-Value Calculator: LTV, CLTV and PMI Line | Align" (56).
   - H1: "Loan-to-Value (LTV) Calculator".
   - Intro: "Work out your loan-to-value and combined loan-to-value ratios from your home's value and what you owe, and see how far you are from the 80% line where PMI can be cancelled. You need the value, your first mortgage balance and any second mortgage or HELOC."
   - Link it from `/learn/what-is-loan-to-value-ratio/` (56 inlinks), which currently absorbs these queries, and from `/pmi-removal-calculator/`.
2. **VA vs. conventional toggle** on the VA loan calculator (P2).
3. **15- vs 30-year toggle** on the mortgage calculator (P2).
4. **USDA guarantee-fee line** in the USDA check result (P2).

---

## 8. Verification and compliance queue (before publishing)

**`[VERIFY]`**
- USDA FY 2026 income limits for all counties, plus the "map in effect since July 25, 2023" date (rd.usda.gov).
- VA chart rows for assumption (0.5%) and manufactured home (1%) (VA.gov).
- The USDA $480 per-child deduction (HB-1-3555 ch. 9).
- The Michigan transfer-tax refund window and the list of other exemptions (Treasury; MCL 207.505/526).
- MCL 211.7b disabled-veteran exemption terms.
- IRS Pub. 936 treatment for tax year 2026 (VA funding fee, points).
- The comparison base for "manufactured homes denied seven times as often."
- The publisher of the Loan-Cost-Study PDF.
- The HUD 2027 FHA figures on release day.

**`[COMPLIANCE REVIEW]`**
- The VA funding fee chart and examples (down-payment tiers and fee amounts). The same content is already live on `/learn/buying-home-with-va-loan/`.
- The affordability housing-budget example, the refinance and points payment-difference examples, and the USDA fee paragraph.

**`[NEEDS SAMANTHA QUOTE]`**
- None required for this scope. Existing published quotes ("I don't want to make a house look artificially cheaper because I used the seller's old tax bill.") can be reused in pitches.

**Cross-team flags**
- **Product team:** the stale 1.5% tax sentence on 4 product pages.
- **Links team:** the 832 identical property-tax anchors.
- **Images team:** wrong `primaryImageOfPage` on the property tax calculator (`align-hero-break-even-review-v2.webp`). The transfer-tax and USDA checks reuse `Samantha4-scaled.jpg`.
- **CTA team:** the result-CTA map in 4.3 and the GA4 event spec.


## Auditor corrections

*Added by the independent auditor (08-audit), 2026-11-15. Full detail: `08-audit/audit-core-pages-B.md`. Row-level fixes: `08-audit/corrections-core-pages-B.csv`. Verdict: **PASS WITH CORRECTIONS**.*

- **Confirmed:**
  - Hero CSS `min-height:620px; margin:24px 0 88px` (live, desktop; a ≤767px rule sets min-height to 0).
  - The VA fee chart is absent from page text.
  - 1.5% vs 36.0 mills = 1.8%, with the $75/month understatement on $300,000. The default appears on 3 calculators and 4 product pages.
  - VA loan calculator 9 contextual inlinks; research hub 1, market report 2, methodology 4.
  - Page-level GSC 849/53.5 and 86/41.5 (DataWise overview `top_pages`).
  - Wayne County at $0.55 per $500.
  - Every transfer-tax table row and every market-report statistic.
- **Corrected: tax-label wording (rows 9, 24, 57).** "A taxable value of half the price" breaks the Editorial Policy's required wording (half the assessor's market value, "not automatically half the price you paid"). Exact replacements are in the CSV.
- **Corrected: example labels.** Worked examples in rows 24, 45, 57 and 82 must open with the exact label "Hypothetical example, not an offer. Actual rates, costs and payments vary."
- **Corrected: VA.gov check dates.** Row 67 says "checked against VA.gov on November 15, 2026", and row 69's caption gives the same date, but VA.gov was unreachable this session. Use `[DATE CHECKED]` with `[VERIFY]`.
- **Corrected: compliance flags.** Rows 70 and 15 need `[COMPLIANCE REVIEW]` on the fee percentages.
- **Corrected: rows.**
  - Row 56: drop the duplicate fee-chart H2 on the VA loan calculator. The fee calculator owns "va funding fee chart".
  - Row 110: meta rewritten (157 characters).
  - Row 169 (P0) deleted: `/editorial-policy/` already links the methodology in content.
  - Row 84: the link already exists.
  - Row 16: the target `/loan-to-value-calculator/` does not exist yet.
  - Row 172: brand suffix.
  - F3: "35 VA learn articles" is really 34 Learn articles, about 8 of them VA-specific, out of 43 pages that link the fee calculator but not the loan calculator.
- **New P0 gap.** The government non-affiliation disclaimer (guide 7.6) is missing on `/va-loan-calculator/`, `/va-funding-fee-calculator/`, `/usda-eligibility-check/` and `/loan-limits/`.
- **Scores.** Internal linking sat below the rubric anchors (1-2 contextual inlinks = 40; below 40 only for orphans and broken links). Corrected:
  - Internal linking: VA loan calc 32→55, refinance calc 38→52, research hub 30→42, market report 22→42.
  - Accuracy: VA loan calc 70→58 (gate G2, not binding), USDA check 80→66.
  - Overalls: refinance 70 C, VA loan calc 63 D, USDA check 75 C, research hub 79 C, market report 79 C.
  - Re-score VA fee calculator and loan-limits accuracy for the missing disclaimer. External linking and Media are unscored.
- **Conflicts.**
  - Property tax title and H1 vs 05-content-keywords R1. Unified title "Michigan Property Tax Calculator: Estimate After You Buy" and H1 "Michigan Property Tax Calculator: Estimate Your Tax After You Buy", at P0.
  - "Use the calculator" removal vs 01-ctas: follow guide 5.2, which retires it.
  - Reviewer lines need `[DECISION: Align]`.
