# Decisions log: cross-team conflict resolution

**Team:** Consistency, cross-team conflict resolver · **Date:** 2026-11-17 · **Deliverables:** `MASTER-CHANGES.csv` (7,163 rows), `redirect-map.csv` (159 rows), `unified-specs.md`, `owner-decisions.md`, `counsel-review.md`, this log.
**Inputs:** the 20 team change files listed in the brief, the 7 auditor correction files, `brand-fixes.csv` (290 rows) and `seo-ai-fixes.csv` (51 rows), with `brand-compliance-review.md` §5 (CTA vocabulary, binding), `query-ownership-map.csv` (147 themes, binding), `KNOWN-CORRECTIONS.md` (F1-F21 win, D1-D8 stay open) and the 7 audit reports' cross-team conflict sections.
**Method:** python (stdlib csv/json). Working scripts in the scratchpad (`resolver/normalize.py`, `layers.py`, `resolve*.py`, `outputs.py`, `docs.py`) rebuild every file here from the inputs.

---

## 1. Summary

- **7,163 rows** in one schema. Every team row is there, with the auditor, brand and SEO rows they added, 143 redirect-map rows and 12 resolver spec rows.
- **6,018 rows ship** (4,682 as written, 1,336 with an edit). Of the shippable rows, 356 are P0, 2,801 P1 and 2,861 P2.
- **789 rows are superseded** by another row that carries the same change, and **200 are rejected** with a reason. **92 wait for an owner decision** and **64 wait for counsel**.
- **916 conflicts found and resolved**, in seven classes (§3). Every one has a rule and a recorded outcome.
- **Change layers applied:** auditor corrections changed 869 rows, brand fixes 448, SEO/AI fixes 114, and the resolver 538. Each row's `decided_by_rule` names the layer and the reference (for example `corrections-ctas#82` or `brand-fixes#116`), and `source_refs` gives the team file and row.
- **Hard rules re-screened on every shippable value** (§4): no rates, F19 fair-housing words, title 60 or fewer characters, meta 140-160, "Talk with Samantha" on every booking button, no NAMB, no "local" expert. All titles and metas in shippable rows now pass (397 title rows, 197 meta rows).

### Rows by phase and status

| Phase | APPROVED | APPROVED-WITH-EDIT | SUPERSEDED | REJECTED | PENDING-OWNER | PENDING-COUNSEL | Total |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 template-level | 94 | 189 | 20 | 0 | 7 | 0 | 310 |
| 2 money pages | 1,485 | 300 | 72 | 16 | 3 | 57 | 1,933 |
| 3 city pages | 1,619 | 404 | 192 | 11 | 71 | 0 | 2,297 |
| 4 learn/links | 427 | 292 | 181 | 155 | 8 | 4 | 1,067 |
| 5 images | 793 | 103 | 1 | 0 | 0 | 0 | 897 |
| 6 content refresh | 264 | 48 | 323 | 18 | 3 | 3 | 659 |
| **All** | **4,682** | **1,336** | **789** | **200** | **92** | **64** | **7,163** |

Phase 1 is template work that multiplies (nav, Learn module template, entity and schema, city template, sitewide CTA rules). Phase 2 is the money pages. Phase 3 is city pages, county hubs and city-page link insertions, in one pass per page (links auditor K6). Phase 4 is Learn links, Learn CTA modules and the redirect map. Phase 5 is images. Phase 6 is content refresh and new posts.

---

## 2. Precedence and how rows were mapped

**Precedence (rule P0), applied to every row:** compliance or verified fact (KNOWN-CORRECTIONS F1-F21, brand guide §6-7) > auditor correction > brand fix > SEO/AI fix > original team row. The brand editor built its fixes on the auditor-corrected value, so a brand fix is applied on top of the auditor value, not instead of it. Where a brand fix and an SEO fix touch the same row, the brand's compliance wording is kept and the SEO wording is merged around it (brand review §8). SEO/AI query-ownership decisions bind unless they conflict with a verified fact or compliance; none did.

**Mapping.** Team rows are keyed `file + spreadsheet row` (the id prefix names the file: `PUR-0444` is `purchase-changes.csv` line 444). Auditor corrections were mapped by row number where given (core pages A, links, CTA rows), by hand where the audit named the row in prose (core pages B, using the brand editor's validated map), by `URL | element` (city, 254 corrections) and by URL (content). Brand fixes map by `row N | URL`; GSC fixes propagate to every duplicate row with the same target and copy. The 51 SEO/AI fixes were mapped by hand; 14 of them had no team row (keyword-gap ownership, schema, templates) and became `SEO-` rows. Two SEO fixes (#39 checked-date, #40 half-the-price) were already satisfied by brand fixes. One city correction (Clarkston and Grosse Pointe Shores population labels) had no team row and became its own row.

**IDs added here:** `RD-` redirect map, `NAV-` unified navigation, `SPEC-` unified template specs, `SEO-`/`BRD-` rows the editors added, `-N0x` rows an auditor added.

**Status rules.** APPROVED: the team row stands with no change. APPROVED-WITH-EDIT: the final value differs from the team's (auditor, brand, SEO or resolver edit), or the row was re-homed. SUPERSEDED: another row carries the same change (`status` names it). REJECTED: not built, with the reason. PENDING-OWNER: blocked by D1-D8 or a new decision N1-N8 (`owner-decisions.md`). PENDING-COUNSEL: carries a `[COMPLIANCE REVIEW]` or `[COUNSEL]` flag (`counsel-review.md`). `[VERIFY]` and `[DATE CHECKED]` tags are pre-publish source checks for the implementer, so those rows keep their status and say so in `depends_on`.

---

## 3. Conflict classes, rules and decisions

| Class | What | Found | Rule(s) |
|---|---|---:|---|
| (a) | Same page element, different (or duplicate) values from different teams | 355 | R-a1 to R-a4 |
| (b) | Links, CTAs and page edits whose source or target is 301'd, merged or pruned, or that anchor an owned query on the wrong URL | 238 | R-b1 to R-b6 |
| (c) | CTA rows that break the final vocabulary (labels, destinations, /start/ parameters, friction line) | 94 | R-c1 to R-c7 |
| (d) | Query-ownership contradictions (titles, H1s, anchors, GSC routing) | 183 | R-d1, R-b4 |
| (e) | 301 decisions that differ between teams, chain, or redirect a ranking URL | 24 | RD-1 to RD-6 |
| (f) | Nav, menu, footer and breadcrumb proposals from several teams | 21 | R-f1 |
| (g) | Rows that depend on D1-D8, new owner decisions or counsel | 156 blocked + 165 with a soft dependency | R-g1 to R-g3 |

### (a) Same element, different values

**R-a1 single-valued slots** (title, meta, H1, eyebrow, subhead per page): the winner is the value that (1) passes the hard rules, (2) carries the SEO editor's decision (titles and H1s, binding), (3) comes from the page-owning team (audit-content §6 #22: the owning team's text is the base; content-team rewrites are inputs), (4) carries a brand fix, (5) carries an auditor correction, then priority, then GSC impressions. Losing single-slot rows are SUPERSEDED; combined GSC rows keep their H2 and drop the losing title or meta.
**R-a2 duplicates:** identical rows from several queries or files keep the first id. **R-a3 CTA slots:** the CTA team owns label and destination (charter §4.3 rule 1, brand §5); the page team's row sets placement and points at the CTA row. **R-a4 new-post candidates:** `blog-plan.csv` is the content team's reconciled decision for all 84 candidates; GSC candidate titles are inputs to the briefs.

| Kind | Rows |
|---|---:|
| GSC new-post candidate vs reconciled blog plan | 152 |
| city external link fixed twice (02 vs 04, K6) | 93 |
| title conflict (duplicate) | 45 |
| CTA slot labelled differently by the page team and the CTA team | 18 |
| same link proposed by 02 and the page-owning team | 17 |
| meta conflict (different value) | 9 |
| title conflict (different value) | 7 |
| title conflict (inventory refresh vs title row) | 7 |
| same question heading from two teams | 4 |
| duplicate link fix (02 broken-links vs 02 internal-link-fixes) | 2 |
| city hero alt rule proposed by the city team and the images team | 1 |

Notable outcomes:
- **Home title:** "Michigan Mortgage Broker and Home Loans | Align Lending" (SEO, adds the 716-impression "home loans"), over the refinance team's "…Multiple Lenders" and seven identical GSC rows. Home meta: the refinance team's row (RHT-0003) wins over the GSC meta (owning team).
- **USDA product title:** "USDA Rural Development Loans in Michigan | Align Lending" (PRA-0132, owning team) over the GSC "Michigan USDA Loans: Rural Home Loan Broker". **VA funding fee calculator:** "VA Funding Fee Calculator and Chart | Align Lending" (SEO, no year) over the GSC "…Purchase, Cash-Out and IRRRL".
- **City external links (K6):** 93 links-team rows on city pages are SUPERSEDED by the city team's per-page row, so a Census link never sits on a World Population Review number; the 02 rows are the checklist.
- **GSC new-post candidates:** 152 rows point at their blog-plan row (MERGE INTO, REFRESH, OWNED BY or NEW POST). Example: "How DSCR Loans Work in Michigan…" (GSC) yields to blog-plan rank 11 "How DSCR Loans Work: The Ratio, the Rent and Michigan Taxes", which avoids the product page's "dscr loans michigan".
- **City hero alt:** the city team's "alt="" or caption" rule (CTY-0309) yields to the images team's F14 pattern on all 276 heroes.
- **Duplicate question headings** (e.g. "Who is eligible for a USDA loan in Michigan?" from GSC, calculators and SEO on `/usda-eligibility-check/`): one heading, the SEO editor's 40-60-word block.

### (b) Links and edits on redirected URLs

**R-b1** a link or CTA whose target is 301'd points at the final target (readiness review links go to `/purchase/homebuyer-game-plan/#readiness`, and the label becomes "Build my homebuyer game plan", R-c5). **R-b2** an insertion whose source page merges is re-homed on the canonical (it ships only if the sentence survives the merge); a pruned source drops it. **R-b3** a retarget that would create a self-link is rejected. **R-b4** an anchor that is an owned query must point at the owner. **R-b5** page-level copy, CTAs and links on a URL that is 301'd are not built; H2s, answers and body copy are re-homed onto the canonical as merge content; everything on a pruned URL is rejected. **R-b6** city external links: one pass per page with the city row (K6).

| Kind | Rows |
|---|---:|
| edit on a 301 source page | 179 |
| link/CTA destination redirected | 35 |
| source merged | 14 |
| compliance drop (F20 anchor) | 6 |
| source pruned | 4 |

### (c) CTA vocabulary

Every CTA-bearing row (CTA file, core-page CTA rows, templates, link-fix rows with buttons) was run through the final vocabulary in brand review §5. **R-c1** every Calendly button reads "Talk with Samantha"; "Talk through your options" survives only on `/purchase/` (secondary), `/refinance/` (ATF primary) and the `/product-loans/` end-of-grid block. **R-c2** retired labels map to their vocabulary label and destination. **R-c3** a plan label never opens Calendly. **R-c4** `/start/` takes `goal=buy|refi|equity` only (`stage`, `why` and `aim` dropped; cash-out uses `goal=equity`; `from` only with values in `alignStartCfg.sources`, N6). **R-c5** readiness review labels follow the merge. **R-c6** "No credit pull to talk" sits only beside talk CTAs. **R-c7** destinations the brand table does not cover keep the team's label as a documented extension.

Most of the label sprawl had already been fixed by the CTA auditor's 15 global swaps and the brand editor's 29 booking-label fixes, so this pass found 94 rows still off-vocabulary:

| Label changed (before) | Rows |
|---|---:|
| See what the property produces | 36 |
| /start/ params | 13 |
| Compare two Loan Estimates | 6 |
| See the VA homebuyer plan | 6 |
| See how FHA works in Michigan | 4 |
| See how ARMs work | 4 |
| Check my VA funding fee | 3 |
| See non-warrantable condo loans | 3 |
| Start my application | 3 |
| Estimate your VA funding fee | 2 |
| Find your county limit | 2 |
| Try payment scenarios | 2 |
| Explore my equity | 2 |
| See HomeReady and Home Possible | 2 |
| Run a payment on the total cost | 1 |
| See how much equity I may be able to use | 1 |
| Run my numbers in the refinance calculator | 1 |
| Review my homebuying budget | 1 |

Vocabulary extensions kept (R-c7, owner to confirm in one pass with the brand table): "See Michigan down payment help" (10), "Add up my cash to close" (9), "See what self-employed files need" (4), "Check when my PMI can end" (3), "Compare points and lender credits" (1), "Compare renting and buying" (1).

### (d) Query ownership

`query-ownership-map.csv` is binding. Titles and H1s on non-owner pages, anchors on owned queries and GSC routing rows were checked against it.

| Kind | Rows |
|---|---:|
| MSHDA anchor points at the DPA money page | 137 |
| city title rewrite vs the kept city pattern | 31 |
| query pointed at the township page; the county hub owns it | 7 |
| misrouted ownership row | 3 |
| anchor on owned query points at a non-owner | 1 |
| h1 targets a query owned by / | 1 |
| h1 targets a query owned by /refinance/break-even-review/ | 1 |
| title targets a query owned by /refinance/break-even-review/ | 1 |
| calculator query pointed at a city page | 1 |

Notable outcomes:
- **MSHDA anchors:** 137 city-guide and learn insertions anchored "MSHDA" or "MI 10K DPA" pointed at the DPA money page. Q102 gives MSHDA program names to the new MSHDA guide while D3 is open, and F2 keeps MSHDA wording off money pages, so they point at `/learn/mshda-mi-home-loan/` once blog-plan rank 1 is published (until then they keep the DPA target).
- **City titles:** 31 GSC "city page already ranks, rewrite the title" rows yield to the kept pattern "Mortgage Broker in {City}, MI | Align Lending" (SEO §2.9) and the new city program H2 (SEO-015). Ann Arbor keeps its one title test.
- **Samantha's H1** used the home page's query "Michigan mortgage broker"; it becomes the guide §1 line "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending". **Refinance calculator H1** dropped "Find Your Break-Even Month" (owned by the break-even review). The points-vs-lender-credit title keeps "Break-Even" (a different concept; reviewed, kept).
- **Macomb:** 7 GSC rows wanted "macomb mortgage" pointed at the township page; Q014 gives Macomb queries to the county hub, so the hub keeps them. Three misrouted "point this query at the city page" rows (targets that are not city pages) and one calculator query routed to Detroit are rejected.
- **USDA eligibility:** the learn article keeps the national query (GSC 576 @11.1); the GSC re-point row is rewritten, blog-plan ranks 65 and 80 change owner, and one anchor "usda eligibility" is retargeted to the article.

### (e) Redirects

**RD-1** SEO editor ownership decisions bind (amortization canonical `/learn/amortization-schedules/`, `fixed-rate-mortgage-options` to the 15-vs-30 comparison, the vacation-home hold, the readiness-review merge). **RD-2** `content-plan.md` §7 (the content team's list, written after both the content and links audits and ruling every K5 group) beats the raw 02 cannibalization row and the raw 05 inventory row; a URL that this plan keeps as a canonical (or differentiates) is never redirected by a lower proposal. **RD-3** a proposal only one team made is adopted if it passes RD-4 to RD-6. **RD-4** a GSC-attributed ranking URL is redirected only into the owner of its query, after a GSC Pages and Query x Page export. **RD-5** no chains: every source points at its final URL, and legacy root posts whose target now redirects are repointed in the same release. **RD-6** never remove or move the legacy `/mortgage-location/` redirects, and never move a ranking city URL.

Result: 153 source URLs were proposed for a 301 by at least one team. **141 are approved**, 2 are on hold (N3) and 10 are rejected (kept). The final map has no chains and no loops (checked). The links auditor's K5 found 20 of 53 02-links 301s disagreeing with the inventory; with the content plan's later decisions and the SEO editor's rulings, 24 source URLs still had competing proposals:

| Source | Proposals | Decision | Rule |
|---|---|---|---|
| `/learn/freddie-mac-updates/` | 05 content-plan §7.1 #3 -> /learn/federal-housing-finance-agency-updates/; 02 cannibalization row 46 (Fannie Mae / Freddie Mac / FHFA updates) -> /learn/fannie-mae-updates/; 05 inventory row 273 -> /learn/federal-housing-finance-agency-updates/ | /learn/federal-housing-finance-agency-updates/ | RD-2 |
| `/learn/fixed-rate-mortgage-options/` | 05 content-plan §7.1 #11 -> /learn/15-year-vs-30-year-mortgage-comparison/; 02 cannibalization row 27 (fixed-rate mortgage) -> /learn/fixed-rate-mortgages-benefits-and-drawbacks/; 05 inventory row 61 -> (keep); seo-ai-fixes#4 (RD-1) -> /learn/15-year-vs-30-year-mortgage-comparison/ | /learn/15-year-vs-30-year-mortgage-comparison/ | RD-1 |
| `/learn/new-mortgage-products/` | 05 content-plan §7.1 #12 -> /learn/whats-new-in-mortgage-industry/; 02 cannibalization row 50 (new / innovative mortgage products) -> /learn/innovative-mortgage-products/; 05 inventory row 39 -> /learn/whats-new-in-mortgage-industry/ | /learn/whats-new-in-mortgage-industry/ | RD-2 |
| `/learn/mortgage-news/` | 05 content-plan §7.1 #12 -> /learn/whats-new-in-mortgage-industry/; 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; 05 inventory row 363 -> /learn/whats-new-in-mortgage-industry/ | /learn/whats-new-in-mortgage-industry/ | RD-2 |
| `/learn/trends-in-mortgage-lending/` | 05 content-plan §7.1 #12 -> /learn/whats-new-in-mortgage-industry/; 02 cannibalization row 49 (mortgage market / lending trends) -> /learn/mortgage-market/; 05 inventory row 449 -> /learn/whats-new-in-mortgage-industry/ | /learn/whats-new-in-mortgage-industry/ | RD-2 |
| `/learn/adjustable-rate-mortgage-tips/` | 05 content-plan §7.1 #18 -> /learn/adjustable-rate-mortgage-resets/; 02 cannibalization row 28 (adjustable-rate mortgage) -> /learn/adjustable-rate-mortgage-resets/; 05 inventory row 49 -> /learn/adjustable-rate-mortgages-pros-and-cons/ | /learn/adjustable-rate-mortgage-resets/ | RD-2 |
| `/learn/new-lending-regulations/` | 05 content-plan §7.1 #36 -> /learn/mortgage-regulation-updates/; 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; 05 inventory row 377 -> /learn/mortgage-regulation-updates/ | /learn/mortgage-regulation-updates/ | RD-2 |
| `/learn/regulatory-changes/` | 05 content-plan §7.1 #36 -> /learn/mortgage-regulation-updates/; 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; 05 inventory row 415 -> /learn/mortgage-regulation-updates/ | /learn/mortgage-regulation-updates/ | RD-2 |
| `/learn/regulatory-updates-for-lenders/` | 05 content-plan §7.1 #36 -> /learn/mortgage-regulation-updates/; 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; 05 inventory row 416 -> /learn/mortgage-regulation-updates/ | /learn/mortgage-regulation-updates/ | RD-2 |
| `/learn/what-is-sellers-market-for-home-buyers/` | 05 content-plan §7.1 #39 -> /learn/what-is-buyers-market-in-real-estate/; 02 cannibalization row 13 (seller's market (buyer side)) -> /learn/how-to-win-house-in-sellers-market/; 05 inventory row 467 -> /learn/what-is-buyers-market-in-real-estate/ | /learn/what-is-buyers-market-in-real-estate/ | RD-2 |
| `/learn/buying-process/` | 05 content-plan §7.1 #42 -> /learn/home-buying/; 02 cannibalization row 16 (home buying process overview) -> /learn/home-buying/; 05 inventory row 223 -> /learn/home-buying-process/ | /learn/home-buying/ | RD-2 |
| `/learn/how-to-hire-movers-questions-to-ask/` | 05 content-plan §7.1 #53 -> /learn/moving-and-settling/; 02 cannibalization row 21 (hiring movers) -> /learn/hiring-movers/; 05 inventory row 314 -> /learn/moving-and-settling/ | /learn/moving-and-settling/ | RD-2 |
| `/learn/tips-for-new-real-estate-investors/` | 05 content-plan §7.1 #55 -> /learn/real-estate-investment-strategies-for-beginners/; 02 cannibalization row 55 (beginner real estate investing) -> /learn/real-estate-investment-strategies-for-beginners/; 05 inventory row 447 -> /learn/how-to-become-real-estate-investor/ | /learn/real-estate-investment-strategies-for-beginners/ | RD-2 |
| `/learn/how-to-navigate-hot-housing-market/` | 05 content-plan §7.1 #60 -> /learn/how-to-create-competitive-offer/; 02 cannibalization row 13 (seller's market (buyer side)) -> /learn/how-to-win-house-in-sellers-market/; 05 inventory row 320 -> /learn/how-to-create-competitive-offer/ | /learn/how-to-create-competitive-offer/ | RD-2 |
| `/learn/navigating-sellers-market-as-buyer/` | 05 content-plan §7.1 #60 -> /learn/how-to-create-competitive-offer/; 02 cannibalization row 13 (seller's market (buyer side)) -> /learn/how-to-win-house-in-sellers-market/; 05 inventory row 372 -> /learn/how-to-create-competitive-offer/ | /learn/how-to-create-competitive-offer/ | RD-2 |
| `/learn/strategies-for-buying-in-competitive-market/` | 05 content-plan §7.1 #60 -> /learn/how-to-create-competitive-offer/; 02 cannibalization row 13 (seller's market (buyer side)) -> /learn/how-to-win-house-in-sellers-market/; 05 inventory row 440 -> /learn/how-to-create-competitive-offer/ | /learn/how-to-create-competitive-offer/ | RD-2 |
| `/learn/selling-your-house/` | 05 content-plan §7.1 #61 -> /learn/selling-a-home/; 02 cannibalization row 59 (selling a house overview) -> /learn/selling-a-home/; 05 inventory row 437 -> /learn/selling-process/ | /learn/selling-a-home/ | RD-2 |
| `/learn/real-estate-crowdfunding/` | 05 content-plan §7.2 #30 -> /learn/investing-basics/; 05 inventory row 119 -> /learn/ | /learn/investing-basics/ | RD-2 |
| `/learn/how-to-budget-for-closing-costs/` | 05 inventory row 71 -> /learn/closing-costs/; 05 content-plan §7.3 / 02 cannibalization -> differentiate (keep) | KEEP (differentiate) | RD-2 |
| `/learn/how-to-handle-seller-disclosures/` | 05 inventory row 72 -> /learn/what-is-sellers-disclosure/; 05 content-plan §7.3 / 02 cannibalization -> differentiate (keep) | KEEP (differentiate) | RD-2 |
| `/learn/how-to-prepare-for-home-closing/` | 05 inventory row 73 -> /learn/home-closing-process/; 05 content-plan §7.3 / 02 cannibalization -> differentiate (keep) | KEEP (differentiate) | RD-2 |
| `/learn/mortgage-regulation-updates/` | 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; canonical in RD-1/RD-2 decision | KEEP (canonical) | RD-2 |
| `/learn/whats-new-in-mortgage-industry/` | 02 cannibalization row 48 (mortgage regulation updates) -> /learn/impact-of-new-mortgage-regulations/; canonical in RD-1/RD-2 decision | KEEP (canonical) | RD-2 |
| `/learn/real-estate-investment-strategies-for-beginners/` | 05 inventory row 397 -> /learn/how-to-become-real-estate-investor/; canonical in RD-1/RD-2 decision | KEEP (canonical) | RD-2 |

Other 301 decisions: the Farmington Hills patterned slug gets only the minimum fix (301 the 404 `/mortgage-lender-farmington-hills-mi/` to the live page); moving the live page is rejected under RD-6 because its legacy ZIP URL is still GSC-attributed. `/learn/benefits-of-investing-in-mixed-use-developments/` is kept (auditor; N4). `/learn/real-estate-crowdfunding/` is a 301, not a noindex.

### (f) Navigation

Six teams' proposals (21 rows: 02-links §5.1-5.2 and rows 10-17, 01-ctas rows 2 and 8, products A rows 408 and 410, products B's five menu/footer rows and its breadcrumb row, calculators row 4, city row 310) collapse into five rows: NAV-001 header, NAV-002 mobile popup, NAV-003 footer, NAV-004 off-domain actions, NAV-005 breadcrumbs. **R-f1:** the core-pages-B K4 unified Loans menu (owner 02-links) wins over products A and B; Physician sits under Buy, Non-Warrantable Condo under non-QM, "Asset Depletion Loans" is the label; the popup stays (K2: drop the duplicate dropdown, not the popup); "Save my plan" is removed (K3); the footer carries service areas, not products; breadcrumbs ship at P1 (K7) with the city team's majority-county rule. Cash-out's breadcrumb is Home › Loans › Cash-Out Refinance (one product hierarchy). Full spec in `unified-specs.md` §1.

### (g) Pending decisions

92 rows are blocked by an owner decision and 64 by counsel; 165 more ship now with a soft dependency in `depends_on` (for example a city meta whose dollar figure is regenerated if D2 changes the measure). **R-g1** a row waits only when its core change depends on the decision. **R-g2** a bracketed `[COMPLIANCE REVIEW]` or `[COUNSEL]` flag blocks publishing. **R-g3** where the conservative option is always compliant, it ships now and counsel can narrow it later (example: the non-affiliation line in the shared city disclaimer). Blocked rows by decision: C1 (D7) 31, C2 (D7) 14, C3 13, C4 2, C5 3, C6 1, D1 11, D2 71, D6 3, D8 1, N1 3, N3 2, N7 1.

---

## 4. Hard-rule re-screen of final copy

Run on the final value of every shippable row, after all layers.

| Rule | Check | Result |
|---|---|---|
| No rates (F13, guide §6) | rate claims, "as low as", "today's rates", % APR | 1 hit, a quoted review that a removal row already deletes (F18); 0 in new copy |
| F19 fair housing | quiet, modest, tidy, safe, family-friendly, good schools, upscale, desirable, sought-after, thriving, retirees… | 4 city metas still tied loan types to price level ("put most buyers in conventional or FHA range"): rewritten to the brand's neutral pattern (140-160 checked). 2 fixed by hand: "award letters for retirees" (PUR-0417) and "modest village bungalows" in a city sentence used for a link (CGL-0039). Remaining hits are false positives ("quiet stretches" of a process, "SAFE" exam, "Safe SVG" plugin) |
| Title 60 or fewer | every title in a shippable row | all pass (397 title rows); the one over-length string is a flag text on a counsel-pending row |
| Meta 140-160 | every meta in a shippable row | all pass; D2-sequenced city metas are pending, not shipped |
| "Talk with Samantha" for booking | every Calendly button | 0 off-vocabulary Calendly labels left (§3c) |
| No NAMB | new copy and schema | 0 shippable rows add NAMB; the Samantha H3 is PENDING-OWNER (D8) |
| No "local" on far markets (F15) | "local mortgage expert" | 0 left; one template string "Talk with a Michigan mortgage expert" on all 276 city pages and 12 hubs |
| F5 PRE deadline | "May 1" | 2 existing city sentences used as link anchors carried "May 1" (Fenton, Highland Township): corrected to June 1 / November 1 in the row and the page body |
| F1, F2, F3, F8, F10 | First-Generation, MSHDA access, 620 floor, "writes and reviews", "under 14 days" | 0 violations in shippable copy (the remaining matches state the corrected facts) |

---

## 5. Notable individual decisions

1. **Readiness Review merges into the Game Plan** (RD-1, SEO §2.7, P1). 21 CTA and link rows (plus link-insertion row 3 on the lease-to-own guide) are retargeted to `/purchase/homebuyer-game-plan/#readiness` in this list, 13 page-level rows on the old URL are not built and 12 of its question sections are re-homed onto the game plan; SPEC-005 moves the readiness questions and the `#check-back` form first. The brand table's "Take the readiness review" is retired with the page. Owner may veto (N9 in `owner-decisions.md`); the fallback is the SEO editor's retitle.
2. **Home hero:** primary "Talk with Samantha" + secondary "Start my application" (brand §5 #1 over corrections-ctas #35).
3. **DPA page:** primary "Talk with Samantha" with the F2 line; "Start my application" secondary until D3 (brand §5 #2 over corrections-ctas #53/#86).
4. **DSCR tool label:** "Check whether the rent covers the payment" (brand §5 #3 over corrections-core-pages-B #41).
5. **Cash-out apply link:** `/start/?goal=equity` (the vocabulary has no `aim` parameter; equity access is the intent), resolving corrections-ctas K12.
6. **About "How a broker is paid":** the absolute "paid by the wholesale lender" claim (D5 Verify) is replaced with the same Loan Estimate wording the SEO editor set for the home FAQ, so it ships now and is revisited after D5.
7. **Learn module "investment" key:** "See what the property produces" becomes the vocabulary label "Review an investment property" on 35 rows; "See the VA homebuyer plan" becomes "Plan my VA purchase"; "Check my VA funding fee" becomes "Estimate my VA funding fee".
8. **City quote block split:** the verbatim and sourced quotes ship now; the unsourced 79-page quote is removed now (not left as a placeholder) and restored only with an Align source (N5).
9. **City disclaimer:** the government non-affiliation line ships in the shared city disclaimer now (R-g3) instead of waiting for counsel.
10. **Amortization:** `/learn/amortization-schedules/` is canonical; the 301 runs from `mortgage-amortization`, and link-insertion rows 53, 57 and 77 retarget.
11. **USDA:** the learn article keeps "usda eligibility"; its title is "USDA Loans: Eligibility and How Rural Development Loans Work" (SEO over corrections-content rows 19/53); the tool owns "usda eligibility check" and income limits; guarantee fees go to the article's fees H2.
12. **Jumbo learn title:** "Jumbo Loan Requirements: Credit, Down Payment, Reserves" (SEO over corrections-content row 18, which collided with the product page).
13. **Affordability:** the calculator owns "how much house can I afford"; Budget Review owns "comfortably afford"; the purchase team's "(DTI Limit)" title is replaced.
14. **LTV calculator:** no new URL; the widget goes into `/learn/what-is-loan-to-value-ratio/` (SEO over calculators row 193).
15. **Seller disclosure, closing process and budgeting for closing costs:** kept and differentiated (content plan §7.3 and 02 agree) although the raw inventory merged them; the `/handle-seller-disclosures/` legacy repoint is therefore not needed.
16. **Regulation and industry-news groups:** two canonicals (`mortgage-regulation-updates` for rules, `whats-new-in-mortgage-industry` for news), as the content plan ruled; 02's inverted proposals would have created chains and are overruled.
17. **Farmington Hills:** only the 404 patterned slug is redirected; the live page and its legacy 301s stay.
18. **Breadcrumb priority:** P1 everywhere (K7), one style, one trail per page type.
19. **Off-domain menu actions:** on-domain now with vocabulary labels; alignwithalign.com only returns after D4, with `rel="nofollow noopener"`.
20. **Organization schema:** description = the canonical sentence, six states in `areaServed`, no aggregateRating, openingHours or Organization award; the refinance team's 12-county list and long paragraph are superseded.

---

## 6. Counts by source file

| Source file | Rows | APPROVED | APPROVED-WITH-EDIT | SUPERSEDED | REJECTED | PENDING-OWNER | PENDING-COUNSEL |
|---|---:|---:|---:|---:|---:|---:|---:|
| `04-city-pages/city-fixes.csv` | 933 | 749 | 162 | 4 | 8 | 10 | 0 |
| `07-images/alt-text-corrected.csv` | 873 | 775 | 98 | 0 | 0 | 0 | 0 |
| `05-content-keywords/gsc-opportunities.csv` | 785 | 68 | 218 | 471 | 20 | 7 | 1 |
| `03-core-pages/products-b-changes.csv` | 471 | 407 | 55 | 6 | 2 | 0 | 1 |
| `03-core-pages/purchase-changes.csv` | 451 | 374 | 61 | 2 | 14 | 0 | 0 |
| `03-core-pages/products-a-changes.csv` | 450 | 336 | 58 | 3 | 6 | 0 | 47 |
| `01-ctas/cta-recommendations.csv` | 444 | 24 | 298 | 2 | 114 | 6 | 0 |
| `02-links/city-guide-link-insertions.csv` | 384 | 253 | 131 | 0 | 0 | 0 | 0 |
| `04-city-pages/factcheck-group-2.csv` | 356 | 300 | 56 | 0 | 0 | 0 | 0 |
| `03-core-pages/refinance-home-trust-changes.csv` | 347 | 278 | 62 | 1 | 0 | 4 | 2 |
| `05-content-keywords/blog-inventory.csv` | 258 | 109 | 5 | 137 | 6 | 0 | 1 |
| `02-links/link-insertions.csv` | 252 | 203 | 20 | 17 | 10 | 0 | 2 |
| `02-links/broken-links.csv` | 242 | 127 | 4 | 95 | 16 | 0 | 0 |
| `03-core-pages/calculators-research-changes.csv` | 199 | 138 | 47 | 2 | 3 | 0 | 9 |
| `04-city-pages/factcheck-group-1.csv` | 161 | 104 | 3 | 0 | 0 | 54 | 0 |
| `04-city-pages/factcheck-group-3.csv` | 147 | 105 | 35 | 0 | 0 | 7 | 0 |
| `09-consistency/redirect-map.csv` | 143 | 141 | 0 | 0 | 0 | 2 | 0 |
| `05-content-keywords/blog-plan.csv` | 92 | 85 | 5 | 0 | 0 | 1 | 1 |
| `02-links/cannibalization.csv` | 68 | 28 | 1 | 38 | 1 | 0 | 0 |
| `02-links/internal-link-fixes.csv` | 56 | 35 | 12 | 9 | 0 | 0 | 0 |
| `07-images/delivery-fix-list.csv` | 22 | 17 | 5 | 0 | 0 | 0 | 0 |
| `09-consistency/seo-ai-fixes.csv` | 17 | 15 | 0 | 2 | 0 | 0 | 0 |
| `09-consistency/unified-specs.md` | 11 | 10 | 0 | 0 | 0 | 1 | 0 |
| `09-consistency (resolver)` | 1 | 1 | 0 | 0 | 0 | 0 | 0 |

Rejected rows by reason: page is pruned or merged (R-b5) 165; withdrawn by the auditor 10; percentage anchor dropped (F20) 6; brand/licensing delete (NY, Iowa, duplicate H2s) 6; redirect proposal overruled (RD rules) 5; self-link or source pruned (R-b2/R-b3) 4; misrouted or conflicting ownership row (R-d1) 4.
Superseded rows by reason: duplicate or losing value for the same page element (R-a1/R-a2) 313; consolidated into the redirect map 178; GSC new-post candidate reconciled in the blog plan (R-a4) 152; K6 city external links: one pass per page (R-b6) 93; city title pattern / template H2 kept (R-d1) 32; unified nav spec (R-f1) 20; other 1.

---

## 7. Limits

- Matching is by row number, `URL | element` and URL. Where an auditor cited a row only in prose, the brand editor's validated hand map was reused; one city correction could not be mapped and became its own row.
- The slot-conflict check covers title, meta, H1, eyebrow and subhead, question headings and CTA slots. Body paragraphs proposed by two teams for the same section are not compared word for word.
- Query-ownership checks use a curated list of the owned head terms in the SEO editor's map, not every one of the 147 themes.
- Inferred GSC mappings are labelled unconfirmed by the SEO editor. Every 301 of a URL with mapped impressions carries the precondition to export GSC Pages and Query x Page first.
- No change was made to the live site or to any other team's files.
