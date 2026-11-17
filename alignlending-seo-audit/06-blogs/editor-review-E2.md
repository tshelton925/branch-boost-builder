# Editor review, group E2

**Editor:** Consistency team, blog editor E2 · **Date:** 2026-11-17 · **Status of all four drafts:** "Edited draft — subject to Align approval"
**Standards applied:** `00-project/KNOWN-CORRECTIONS.md` (wins), `brand-voice-and-compliance-guide.md`, `scoring-rubric.md`, `06-blogs/briefs/_README.md`, `09-consistency/brand-compliance-review.md` §5 (final CTA vocabulary), and `06-blogs/editor-review-E3.md` (format and method).

| # | Draft (edited in place) | Publish week | Words (brief range) | Title / meta chars | Open `[VERIFY]` | Final score |
|---|---|---|---|---|---|---|
| 1 | `06-blogs/drafts/what-disqualifies-you-from-a-home-equity-loan.md` | W3 | 2,186 (1,700–2,200) | 55 / 153 | 0 | **90 (A)** |
| 2 | `06-blogs/drafts/add-or-remove-name-on-mortgage-michigan.md` | W6 | 2,295 (1,800–2,300) | 51 / 160 | 0 | **90 (A)** |
| 3 | `06-blogs/drafts/how-dscr-loans-work.md` | W7 | 2,056 (1,600–2,100) | 59 / 160 | 1 | **89 (B)** |
| 4 | `06-blogs/drafts/michigan-homestead-property-tax-credit.md` | W7 | 1,974 (1,500–2,000) | 53 / 160 | 1 | **90 (A)** |

**How the checks were run.**
- **Word count:** E3's method, recorded in each file's `word_count`. It counts the visible body, including the FAQ and the disclosure lines. It leaves out the front matter, the Sources list, HTML comments, editor tags and JSON-LD.
- **Word caps and quotes:** each `[NEEDS SAMANTHA QUOTE]` will add about 30 words when Align supplies the line. Posts 1 and 2 sit within 15 words of their caps, so trim a sentence when the quote goes in.
- **Screens:** E3's `qa.py`, extended to the full final CTA vocabulary and to `/refinance/` and product-anchor destinations, ran on every draft after editing. It checks:
  - banned and hype words, fair-housing and ECOA terms;
  - rate, APR and Reg Z trigger patterns;
  - F8/D6 claims about Samantha, NAMB, time-to-close claims, exclamation points and F17 freshness wording;
  - the required fixed strings, and CTA labels against destinations.
- **Structure:** the same script checked:
  - answer-block lengths and JSON-LD parsing;
  - that the visible FAQ equals the FAQPage text word for word;
  - that the Sources list equals the `citation` array and the order of body links.
  YAML front matter was also parsed.
- **Reading level:** an approximate Flesch-Kincaid grade on the openings (5.8–9.3), the answer blocks (8.1–9.9) and the body (7.1–8.7). Domain terms such as "combined loan-to-value" push the answer-block figures up.
- **Internal links:** checked against `page_summary.csv`. `/start/` is not in the crawl and is not used. Sprint posts were checked against the publish calendar in `05-content-keywords/content-plan.md`.
- **Align figures:** checked against the crawled `/research/` pages (2026-11-15).
- **External facts:** read directly from primary sources this session:
  - michigan.gov (Treasury, MSHDA, the State Tax Commission PDF and forms);
  - legislature.mi.gov (the first request was reset; the retry succeeded);
  - consumerfinance.gov and files.consumerfinance.gov;
  - eCFR, through its API;
  - selling-guide.fanniemae.com and va.gov.
- **Hosts that could not be read:**
  - uscode.house.gov and law.cornell.edu (refused by the proxy twice, 30+ seconds apart; Garn-St Germain was verified through its rule, 12 CFR 191.5);
  - singlefamily.fanniemae.com (a Cloudflare 403: the Eligibility Matrix and Form 3023);
  - guide.freddiemac.com (a JavaScript app with no readable text);
  - tcss.legis.texas.gov and grandrapidsmi.gov (refused by the proxy);
  - detroitmi.gov (the site's own 403);
  - www.ecfr.gov page URLs, which redirected to eCFR's bot "unblock" page after the API reads. The section text was read through the API, so only the page URLs need a link check on publish day.
- **Result:** all four posts pass every structural check. Every question H2 opens with a 46–59-word answer, every opening is 60 words, and every FAQ matches its JSON-LD exactly.

**Screen false positives (read in context and kept):**
- "$2,000 a month", "$297 a month" and "about $190 a month" in post 3. These are rent, cash flow and tax, not loan payments. They are listed for counsel below.
- "rate" in every post. These are millage rates, "variable rate" as a HELOC feature (as the brief allows), "fixed-rate" and "adjustable-rate" as loan types, the F12 label and the disclosure line. There are no rate claims.
- "Seniors" in post 4 H2s and FAQ. It is the searched PAA wording about tax programs, not a description of who lives somewhere. The copy is rights-based and neutral.

---

## 1. What disqualifies you from a home equity loan or HELOC?

### Changes made
- **Misattributed CFPB claim fixed.**
  - The draft said the CFPB HELOC booklet "illustrates this with a 75% cap and notes that the lender also weighs your ability to repay".
  - The current booklet (`cfpb_heloc-brochure.pdf`, "Last updated 08/22") was read in full. It has no 75% example and no ability-to-repay note; that example came from the old Federal Reserve booklet.
  - The post now quotes the booklet's own words: a line is "generally a percentage of the appraised value of your home, minus the amount you owe on your mortgage".
- **"Many lenders cap combined borrowing around 80% to 90%" cut.**
  - No GSE or regulator source could be read: Fannie Mae's Eligibility Matrix is behind a Cloudflare 403.
  - Per the brief's fallback, the text now says each lender and program sets its own cap.
  - The labeled hypothetical keeps its illustrative 85% cap, as the brief prescribes.
- **HELOC qualifying payment sourced.**
  - 12 CFR 1026.43(a)(1) excludes HELOCs from Regulation Z's ability-to-repay rule, so each lender picks the payment it counts.
  - The wording is now "a lender may figure it on the full line", and the link is added.
- **Regulation B:** §1002.9 confirmed (30 days; specific reasons, or the right to them within 60 days). eCFR's version history shows it was last amended 2023-08-29, so the 2026 Regulation B rule did not change it. The inline `[VERIFY]` is removed.
- **MSHDA bullet rewritten from MSHDA's own page.**
  - The page calls MI 10K "an interest-free loan" with "no monthly payments", repaid on payoff of the first mortgage, a sale or refinance, or loss of owner-occupancy.
  - It never says "second mortgage" and is silent on new liens. The unsupported "some lenders refuse to sit behind it" became "MSHDA's page does not say how it treats a new equity line, so ask its servicer first".
  - The non-affiliation line now uses MSHDA's full name and sits with the disclosure above Sources.
- **Texas:** the 80% figure is cut, because the Texas Constitution host could not be reached. The one-line note the brief asks for stays, with no number.
- **Other confirmations:**
  - the tax-foreclosure chain, read in MCL 211.78a(2), 211.78g(1) and 211.78k;
  - the Fannie Mae listing rule (B2-1.3-03, 12/10/2025);
  - the 4-year / 2-year Chapter 7 wait (B3-5.3-07);
  - all 1026.40(f)(3)(vi) freeze grounds;
  - every HMDA figure, against the report.
- **FAQ 6:** "it depends on the lender" now gives a primary-source comparison. Fannie Mae generally wants a borrower on title six months before a cash-out refinance (B2-1.3-03). The schema is updated to match.
- **Trusts, estates, manufactured homes:** an unsourced probate claim became plain lender variation, so that `[VERIFY]` is closed.
- **CTA:**
  - The module's "Explore my equity options" is not in the brand review's §5 final table, so it is retired. It became **Estimate my available equity** → `#available-equity`, with "Every tool is free and needs no signup".
  - **The end-block "Start my application" button is removed.** The brief (§9) lists talk only, the post's whole advice is to check before applying, and guide §5.2 rule 3 puts talk as the primary on Learn guides.
  - The talk end block keeps the brief's lead line.
- **Voice:**
  - The 7-reason answer, one 50-word list sentence, is split into three sentences.
  - "Lenders never lend all of it" and "the cap always leaves…" contradicted FAQ 2's "Rarely". They are softened to "rarely" and "the lender's cap leaves…".
  - The robotic "Product details:" line is rewritten.
  - The off-topic 43% purchase-loan aside is cut.
- **Schema and layout:**
  - `publisher` is reduced to the `@id`.
  - The research page moved from `citation` to `isBasedOn`, so `citation` equals the 11 Sources in order.
  - The chart has real dimensions (1,600 × 787) in the img tag and the ImageObject.
  - E3's markup is used (`al-answer`/`al-takeaways` divs, `al-module`/`al-next` asides).
  - The W8 link is a dated HTML comment.
  - The front matter has status, editor review, publish week, word count, open flags and resolved flags.

### Final scorecard (learn article; Media N/A because the images are briefs, not files yet; weights rescaled to the other 10 aspects)

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 88 | 92 | 88 | 92 | 86 | 88 | 90 | 91 | 94 | 90 | **90** | A | — |

E3-comparable score (9 aspects, external links left out): 90.

- **Intent & H1, 88 (B):** the H1 is the exact PAA query. It has no place name, and the title repeats it in title case.
- **Headings, 92 (A):** 9 question H2s plus FAQ and Sources (11 in all), and two PAA H3s. No label headings.
- **ATF answer, 88 (B):**
  - The 60-word answer gives who (a Michigan owner borrowing against the home), the three main reasons and the 30% vs. 15.5% Michigan figure.
  - "Most can be checked before you apply" follows, then 4 numeric takeaways.
  - As usual for Learn, there is no "why Align" above the first H2.
- **CTA, 92 (A):** final-vocabulary labels, each with its own reducer. The tool and talk module sits after the first answer. The end block is talk only, with no CTA near the CLTV example.
- **Title & meta, 86 (B):** the title (55) is the exact query. The meta (153) has a 2025 Michigan data hook but no brand or proof element.
- **Internal linking, 88 (B):**
  - 12 descriptive contextual links; the HELOC money page is in the first 30%.
  - The tool, the research report and 6 sibling guides are linked.
  - The hub is linked only through the breadcrumb. One link is held for W8, and 8 inbound links are publish-day work.
- **External linking, 90 (A):** 11 Tier 1–2 deep links (CFPB, eCFR, MCL, MSHDA, Fannie Mae), all in Sources and `citation`. The Texas Constitution link is unopened.
- **E-E-A-T, 91 (A):**
  - Byline, NMLS numbers, entity, broker and approval lines, the disclosure with Equal Housing Opportunity, and the MSHDA line.
  - Align's HMDA report is cited by name with figures. The quote is still a placeholder.
- **AI-ready, 94 (A):**
  - Every question H2 opens with a 47–56-word answer.
  - Quotable dated figures: 30.1%, 27.3%, 15.5%, 66,247, $85,000 and $55,000.
  - The formula box, FAQ = FAQPage, and `isBasedOn` the research page.
- **Accuracy & compliance, 90 (A):**
  - Every claim is confirmed or cut, and the CFPB misattribution is fixed.
  - The F12 label and `[COMPLIANCE REVIEW]` are on the example. No rates.
  - Open: counsel's view of the line-amount example.

### Remaining `[VERIFY]`
None. All 5 inline flags are closed: 3 confirmed or sourced, 2 rewritten to remove the unsourced claim. The writer's 7 "re-open before publishing" source notes were also checked; one (the CFPB 75%) was wrong and is fixed.

**Link-check on publish day:**
- `tcss.legis.texas.gov` Article XVI (never opened; the post states no Texas figure);
- the three `www.ecfr.gov/current/...` URLs (1026.40, 1026.43, 1002.9);
- the MSHDA MI 10K page (also confirm F1/F2 status on the day).

### Counsel items
- **CLTV example** (value $300,000, illustrative 85% cap, $75,000 line):
  - Question: is a stated line amount any §1026.24(d) trigger term? It is not a down payment, a payment or a finance charge.
  - Current handling: the exact F12 label and `[COMPLIANCE REVIEW]` are present, and the page has no apply CTA.
- **"Most HELOCs have a variable rate" (FAQ 5):** a product feature with no rate stated. Listed for completeness under §1026.24(i)(1).
- **C9:** confirm "No credit pull to talk" for a booked call.

### Samantha quote needed
- The first thing she checks when a homeowner wants a HELOC, and what she tells someone who was just denied. Do not reuse "Why. That's my first question."

---

## 2. Adding or removing a name on a mortgage or deed in Michigan

### Changes made
- **Garn-St Germain verified through its rule.**
  - uscode.house.gov and Cornell were refused twice. 12 CFR 191.5(b)(1) on eCFR gives the exemptions:
    - spouse or children becoming owners;
    - a divorce decree;
    - a living trust;
    - on a home occupied by the borrower, with the transferee also occupying.
  - "Home" means one to four units (§191.2(e) → §141.14).
  - The body now links 12 CFR 191.5 instead of the unread OLRC page, and adds the occupancy condition.
- **Form 3023 claim replaced.** singlefamily.fanniemae.com returned a Cloudflare 403, so the due-on-sale sentence now rests on 12 CFR 191.5(a), which governs due-on-sale enforcement.
- **Factual correction, USDA assumptions.**
  - The draft told the departing borrower to get a release of liability on FHA, VA or USDA loans.
  - 7 CFR 3555.256(b)(2)(i) says on a USDA assumption "the transferor must remain personally liable". The table, the H3 list and FAQ 5 now say so.
- **Assumption rules sourced** (the draft cited none):
  - FHA, 24 CFR 203.510: release after a creditworthiness review;
  - VA, 38 CFR 36.4309(c): assumable with approval; spouse or children as joint owners and divorce transfers excepted; after a divorce the veteran may apply to VA for a release;
  - VA entitlement, va.gov: restored only if "a qualified Veteran-transferee agrees to assume your loan and substitute their entitlement";
  - conventional loans, Fannie Mae B2-1.4-02 (12/10/2025): "Fannie Mae ARMs are usually assumable", and a converted ARM "is no longer assumable".
- **FAQ 3 corrected.**
  - "The debt can count against your next loan application" was too broad: Fannie Mae B3-6-05 (08/05/2026) treats a decree-assigned debt as a contingent liability that lenders need not count.
  - The FAQ and the removal H2 now say that. The same section supports "the lender is not bound by the judgment", which closes that `[VERIFY]`.
- **FAQ 1:** the "can be assumed instead" sentence is removed, because an assumption replaces a borrower rather than adding one.
- **Buyout rule:** Fannie Mae B2-1.3-02 (10/08/2025) confirmed: limited cash-out if the property was jointly owned 12 months before disbursement, under a written agreement. The unread HUD 4000.1 reference is dropped; the post makes no FHA buyout claim.
- **Michigan tax and filing facts confirmed:**
  - MCL 211.27a(3), (6)(i), (7)(a), (b), (i), (j), (u) and (10). The brief's "(7)(s)" is wrong; it is (7)(u), as the draft had it.
  - The State Tax Commission guidelines (revised February 25, 2025) support all three divorce statements. The buyout's repeat of the "price" point moved into the removal section.
  - **PTA penalty:** attributed to MCL 211.27b(1)(d), not 211.27a(10). Form 2766 (Rev. 03-25) confirms "file even when exempt": "must be filed whenever real estate… [is] transferred", with exemption boxes.
  - Transfer-tax exemptions in MCL 207.505 and 207.526 are confirmed; the child and grandchild exemptions exist only in the state act.
  - **Recording fee:** "$30 per deed, whatever the page count" (MCL 600.2567(1)(a), effective October 1, 2016) replaces a `[VERIFY]`.
  - **Assumption fees:** "some limited by HUD or the VA" became "VA caps the processing fee" (38 CFR 36.4313(d)(8)). No HUD cap was found in the CFR.
- **F16:** the tax H2's answer now carries the full Editorial Policy sentence form, and the duplicate paragraph is cut.
- **CTA:**
  - **"Start my application" removed from the end block.** The brief lists talk only, and the post's advice is to settle the deed and judgment with an attorney first.
  - "Review my break-even" became **Calculate my break-even** → `#break-even`, with its tool reducer (final table). It is framed for the optional case: "Refinancing only to add a spouse?"
  - The F7 line moved from mid-body to sit with the disclosure.
- **Length:** the sourced detail took the draft to 2,523 words. Duplication is trimmed (table source line, Garn-St Germain paragraph, double F16 statement, checklist wording) to 2,295.
- **Schema:** `publisher` reduced to the `@id`; the research page moved to `isBasedOn`; `citation` equals the 19 Sources in order; FAQ synced.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 87 | 92 | 88 | 90 | 87 | 89 | 90 | 90 | 93 | 90 | **90** | A | — |

E3-comparable score (9 aspects): 90.

- **Intent & H1, 87 (B):** the H1 names the topic, both directions (add and remove) and Michigan. The primary query's wording ("can you add someone to a mortgage") carries in the first H2, not the H1.
- **Headings, 92 (A):** 8 question H2s plus FAQ and Sources (10 in all); H3s for tax and assumption; no label headings.
- **ATF answer, 88 (B):** the 60-word answer gives who (adding a relative or keeping the home after divorce), the two steps and the Michigan uncapping point, followed by 4 rule-based takeaways and a not-legal-advice line.
- **CTA, 90 (A):** a talk module after the table, per the brief, with a refinance text link; a final-vocabulary tool button; a talk end block. No CTA near the buyout example.
- **Title & meta, 87 (B):** the title (51) leads with the topic and Michigan. The meta (160) lists refinance, assumption, quitclaim and the tax reset, with no brand.
- **Internal linking, 89 (B):**
  - 13 descriptive links: `/refinance/` in the first 30%, plus the cash-out product page, the break-even tool, 8 guides and the research study.
  - The hub is linked only through the breadcrumb; 7 inbound links are publish-day work.
- **External linking, 90 (A):** 19 Tier 1–2 deep links (MCL, CFR, Treasury forms, Fannie Mae, VA). The eCFR URLs need a publish-day check.
- **E-E-A-T, 90 (A):** the full identity, disclosure and F7 lines; an attorney-first H2; every legal rule tied to its statute or regulation; the Uncapping Study cited. The quote is still a placeholder.
- **AI-ready, 93 (A):**
  - Every question H2 opens with a 51–56-word answer, and the loan-vs-deed table is quotable.
  - Concrete rules: 45 days, $5 a day up to $200, $30 fee, 12 months, June 1 / November 1. FAQ = FAQPage.
- **Accuracy & compliance, 90 (A):**
  - All 12 flags are closed, the USDA error is fixed, and F16, F12 and F7 are in place.
  - Neutral on marital status; describes documents, not applicants.
  - Open: counsel's read of the legal summaries.

### Remaining `[VERIFY]`
None. All 12 inline flags are closed against primary sources, 2 of them with corrections (USDA liability; Form 3023 → 12 CFR 191.5).

**Link-check on publish day:** the six `www.ecfr.gov/current/...` URLs: 191.5, 203.510, 36.4309, 3555.256 and 36.4313 (the text was read through the API, but the pages redirected to eCFR's bot page here).

### Counsel items
- **Buyout example** (value $300,000, payoff $160,000, new loan $230,000): loan-amount arithmetic only, with the F12 label and `[COMPLIANCE REVIEW]`, and no apply CTA on the page. Counsel to confirm no trigger term.
- **Legal summaries:** Garn-St Germain, tenancy forms, divorce-deed tax treatment and assumption rights. They are written as education with a not-legal-advice line and an attorney-first H2. Counsel may want to read them.
- **"VA also charges a funding fee on an assumption":** a government fee named with no percentage (cf. C3).
- **ECOA:** the copy never implies different treatment by marital status. It is listed for completeness.

### Samantha quote needed
- What she asks first when a client wants to keep the house after a divorce.

---

## 3. How DSCR loans work

### Changes made
- **Fannie Mae renumbering.**
  - The draft linked `b3-3.1-08/rental-income`, which now resolves to B3-3.8-01 (09/02/2026).
  - The rule the post describes is **B3-3.8-02, Rental Income from the Subject Property (09/02/2026)**. It names Form 1007 (Single-Family Comparable Rent Schedule) and Form 1025 (Small Residential Income Property Appraisal Report).
  - The link, the Sources, `citation` and the form descriptions are corrected.
- **Regulation Z citation corrected.**
  - The business-purpose rule for non-owner-occupied rentals is **comment 3(a)-4**, not 3(a)-5. It reads "deemed to be for business purposes", with a 14-day occupancy test.
  - The link now goes to the CFPB's official interpretation, where the comment is, instead of the bare eCFR section.
- **Unsourced cutoffs removed:** "better pricing at about 1.20 to 1.25" is cut from the body, FAQ 1 and the schema, per the brief ("avoid specific cutoffs unless sourced"). The text now says "better terms at higher ratios".
- **FAQ 3 sourced:** Fannie Mae B3-3.8-04 (09/02/2026) subtracts the rental's PITIA from its net rent, and a shortfall counts as debt.
- **Michigan tax facts:**
  - Treasury's PRE wording ("up to 18 mills") is confirmed on the canonical `/taxes/property/principal` URL.
  - The 18-mill gap was re-counted from Treasury's 2025 total rates PDF: 2,565 of 3,578 rows (71.7%), the same as the writer's count. "In most places" stands, and the 36.0 + 18 illustration is fair and labeled.
  - MCL 125.526 (the Housing Law: local rental inspection by ordinance) is added as a verified state-level anchor for the city-rules H2.
- **Lender-practice statements** (minimums, lease vs. market rent, reserves, landlord experience, LLC, occupancy statement, prepayment penalties, first-time investors):
  - No regulator source exists, as brief §7 row 7 expects. The 7 inline `[VERIFY]` tags are replaced by plain lender-practice wording ("many lenders", "guidelines differ by lender").
  - One `[NEEDS ALIGN INPUT]` (an HTML comment plus front matter) asks Align to confirm them against its current wholesale DSCR guidelines.
- **CTA:**
  - "See what the property produces" is not in the brand review's final table. It became **Review an investment property** → `/purchase/investment-property-financing/#rental-flow` (anchor confirmed in the crawl), with "No application required".
  - "Run the DSCR calculator" is in the retired "Run the … calculator" family. It became the final DSCR tool label as a text link, "check whether the rent covers the payment".
- **Arithmetic re-run:**
  - 2,000 ÷ 1,703 = 1.17 and 2,000 ÷ 1,515 = 1.32;
  - the gap is 0.15, or $188 (about $190) a month;
  - 1,800 ÷ 1,703 = 1.06, and 2,000 − 1,703 = $297.
- **Hygiene:**
  - The byline is on one line; the ISO `updated` date is fixed; the visible editor note moved into an HTML build note.
  - The opening is trimmed to 60 words; Treasury's canonical PRE URL is used.
  - `publisher` is reduced to the `@id`, the research page moved to `isBasedOn`, and `citation` equals the 7 Sources.
- **Cannibalization guard holds:** no "Michigan DSCR loans" in the title, H1 or H2s, and requirements are deferred to the product page in one sentence and a link.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 88 | 92 | 90 | 90 | 87 | 89 | 85 | 88 | 93 | 87 | **89** | B | — |

E3-comparable score (9 aspects): 89.

- **Intent & H1, 88 (B):** the H1 matches the informational "how DSCR loans work" query and keeps "Michigan" to the tax angle, as the auditor required. At 66 characters it is near the ~70 limit.
- **Headings, 92 (A):** 9 question H2s cover the definition, formula, minimum, rent, Michigan tax, checks, comparison, downsides and city rules. Plus FAQ and Sources (11).
- **ATF answer, 90 (A):** the 60-word answer gives who (investors buying a one- to four-unit rental), the formula, 1.0 and the Michigan tax point, followed by 4 rule takeaways.
- **CTA, 90 (A):** the plan and talk module comes after the worked example (no apply), each button with its correct reducer; a final-vocabulary tool text link; a talk end block with the brief's lead line.
- **Title & meta, 87 (B):** the title (59) leads with the query and adds Michigan taxes. The meta (160) is specific, with no brand.
- **Internal linking, 89 (B):**
  - The product page is in the first 30%, plus its calculator anchor, the investment-property page, 7 guides, the tax calculator and the research study.
  - The hub is linked only through the breadcrumb; 8 inbound links are publish-day work.
- **External linking, 85 (B):** 7 sources, 5 of them read (CFPB, Fannie Mae, Treasury ×2, MCL). The two city pages are unopened.
- **E-E-A-T, 88 (B):** Align's Uncapping Study and an Align count of Treasury's list, plus identity and disclosure lines. Lender-practice statements wait on Align's confirmation, and the quote is a placeholder.
- **AI-ready, 93 (A):** every question H2 opens with a 47–59-word answer; a formula box and two worked tables; FAQ = FAQPage.
- **Accuracy & compliance, 87 (B):**
  - Sourced items are confirmed, the renumbering is fixed and the cutoffs are removed.
  - Open: two `[COMPLIANCE REVIEW]` examples, one `[VERIFY]` (city pages) and the Align confirmation of lender practice.

### Remaining `[VERIFY]`
1. **Detroit and Grand Rapids rental programs.**
   - Where: the city-rules H2, the Sources and `citation`.
   - What to check: open the Detroit BSEED "Rental Certificate of Compliance" page and the Grand Rapids "Rental Certification Program" page.
     - Confirm both program names.
     - Confirm that a registered rental must pass an inspection.
     - Confirm both URLs resolve.
   - Why still open: detroitmi.gov answered 403 to this session, and grandrapidsmi.gov was refused by the proxy (2026-11-17).
   - If either cannot be confirmed: delete that sentence and its source. The MCL 125.526 sentence carries the H2 on its own.

**Also open:** `[NEEDS ALIGN INPUT]` on the lender-practice statements (the list is in the front matter). Align confirms or edits them against current wholesale DSCR guidelines.

### Counsel items
- **$1,000 principal-and-interest input** in the ratio table.
  - It is labeled "assumed input, not a payment Align offers", under the exact F12 label and `[COMPLIANCE REVIEW]`, with no apply CTA on the page.
  - Question: is an assumed P&I figure in a ratio illustration "the amount of any payment" under §1026.24(d)(1)(iii)?
- **Monthly amounts that are not loan payments:** rent $2,000, cash flow $297 and tax about $190 / $375 / $563. They are treated as arithmetic, not payments (compare E3's C-2a).
- **Business-purpose characterization** ("outside Regulation Z", comment 3(a)-4). It is accurate to the official interpretation. Counsel may want consistent wording with the DSCR product page.
- **"Prepayment penalty: Common / Uncommon"** table row: framed as general lender practice.

### Samantha quote needed
- How she stress-tests a rental's numbers before recommending a DSCR loan. Do not reuse "I don't love a deal that only works when nothing goes wrong."

---

## 4. Michigan homestead property tax credit

### Changes made
- **Factual correction, summer tax deferment.**
  - The draft's seniors answer said "Claimants 65 or older may … delay paying".
  - MCL 211.51(2)–(7), read on legislature.mi.gov, gives the actual rule:
    - eligibility starts at **62**, and also covers certain disability and veteran status;
    - prior-year household income of **$40,000 or less**;
    - deferral **until the following February 15** without penalty or interest;
    - the intent to defer is filed **by September 15**, or later if the local penalty date is later.
  - The body, the H2 answer, FAQ 4 and the schema are corrected, and MCL 211.51 is added to Sources. That closes the draft's `[VERIFY]`.
- **Tax year 2026 status checked (2026-11-17).**
  - Treasury has not posted tax year 2026 figures. The 2026 credit-information page and the TY2026 MI-1040CR instructions and form all return 404, and Treasury's index lists 2022–2025 only.
  - The post keeps the tax year 2025 figures, labeled, with one precise `[VERIFY]` (below).
  - The visible note now reads "the latest published when this guide was updated". The check date sits only in the editor tag (F17).
- **Tax year 2025 confirmed from Treasury's 2025 page, instructions and form:**
  - $71,500, $62,500, $165,400 and $1,900;
  - 3.2% (Table 2), Section C's 60%, Section B's 100%, and Table A (100% at $21,000 or less, 60% from $30,001);
  - Table B (10% per $1,000), 23% of rent, 10% in service-fee housing, the subsidized-housing rule and the senior renter alternate credit;
  - "taxes levied… no matter when you pay them", filing alone, and April 15, 2030;
  - refundability (MI-1040 book "Refundable Credits") and the federal-taxability note.
- **Precision edits:**
  - The disability bullet lists Section B's exact categories instead of "among others".
  - The MI-1040CR-2 bullet names its four eligible groups (blind owners, active military, eligible veterans, veterans' surviving spouses).
  - The filing step says "due April 15" without a year, which closes the separate due-date `[VERIFY]`.
- **Unsourced claim removed:** "the seller's [PRE] does not carry over" became the verified rule, "File your own PRE (Form 2368) by June 1 or November 1".
- **Sprint links on the calendar:**
  - The disabled-veterans post (W3) and the seniors post (W5) publish before this post (W7), so they are now live links with descriptive anchors.
  - The SSI post (W8) is a dated HTML comment.
- **CTA module:** each button now carries its own reducer. The draft put one "No credit pull to talk" under both, which put a talk reducer on the tool button.
- **Reading level:** the opening was one 42-word sentence (approximate grade 11.9). It is now four sentences (about 8.3), still 60 words, with the brief's must-say elements.
- **Schema and Sources:**
  - Treasury's canonical PRE URL is used; `publisher` is reduced to the `@id`; the research page moved to `isBasedOn`.
  - `about` keeps the `GovernmentOrganization` (Treasury), and `citation` equals the 12 Sources.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 88 | 93 | 88 | 92 | 88 | 89 | 93 | 91 | 94 | 86 | **90** | A | — |

E3-comparable score (9 aspects): 90.

- **Intent & H1, 88 (B):** the H1 carries the exact primary keyword and the three sub-intents. At 79 characters it runs past the ~70 the top anchor allows.
- **Headings, 93 (A):** 8 question H2s cover the PAA set: what, who, how much, credit vs. exemption, filing, renters, seniors and the year after buying. No label headings.
- **ATF answer, 88 (B):**
  - The 60-word answer gives who (owners and renters), what, the form and the limits.
  - A dated-figures and not-tax-advice note follows, then 4 takeaways with the tax year 2025 figures.
- **CTA, 92 (A):** the tool and talk module comes after the eligibility H2, each button with its correct reducer; a talk end block for buyers. No apply.
- **Title & meta, 88 (B):** the title (53) is the keyword plus "Who Qualifies". The meta (160) names MI-1040CR, the limits and the filing.
- **Internal linking, 89 (B):**
  - The tax calculator is in the first 30%, plus the PRE guide, escrow, tax law, the assessment appeal guide, the taxable value guide, the research study and two sprint posts (live by W7).
  - The hub is linked only through the breadcrumb; 7 inbound links are publish-day work.
- **External linking, 93 (A):** 12 Tier 1 deep links (Treasury and the Legislature), all opened this session.
- **E-E-A-T, 91 (A):** every figure is dated to its tax year and tied to Treasury's instructions; the Uncapping Study is cited; full identity and disclosure lines. The quote is still a placeholder.
- **AI-ready, 94 (A):** every question H2 opens with a 46–57-word answer; an eligibility table, a 5-step method, a worked example and a PRE comparison table; FAQ = FAQPage.
- **Accuracy & compliance, 86 (B):**
  - The tax year 2025 figures and formula are verified, and the 62/65 deferment error is fixed.
  - The tax year 2026 swap is pending. The post publishes in the tax year 2026 filing season, which is why this aspect is not 90+.

### Remaining `[VERIFY]`
1. **Tax year 2026 figures.**
   - Where: the opening note, key takeaways, the eligibility table, the "How much" H2 and its example, the PRE comparison table, the renters and seniors H2s, the after-you-buy H2 (including $330,800 = 2 × cap), FAQs 1–3, the JSON-LD FAQ text and two Sources entries.
   - What to check: Treasury's `/taxes/iit/tax-guidance/credits-exemptions/hptc/tax-year-credit-information/2026` page and the TY2026 MI-1040CR instructions.
     - The 5 figures.
     - 3.2%, 60%, the Table A bands, 23%, 10%.
     - The four-year deadline (April 15, 2031 if the TY2026 due date is April 15, 2027).
   - Status: all returned 404 on 2026-11-17.
   - If Treasury has still not posted on publish day: keep the tax year 2025 figures as labeled and remove the tag.

**Link-check on publish day:**
- confirm the VA post (W3) and the seniors post (W5) are live;
- re-open the 12 Treasury and Legislature URLs (all returned 200 on 2026-11-17).

### Counsel items
- **Tax-only worked example** (credit arithmetic, F12 label): it has no loan figures, so no trigger-term issue is expected. Listed for completeness.
- **Not-tax-advice placement:** the note sits under the opening, the "use Treasury or a tax professional" line is in "How Align can help", and the disclosure line closes the body. Counsel may confirm that this is enough for a tax-credit explainer.

### Samantha quote needed
- What she tells buyers about their first full Michigan tax bill. Do not reuse "Don't build your budget around somebody else's tax bill."

---

## Group summary

**Scores (final, after edits):**

| Post | Overall | Rubric bands |
|---|---|---|
| 1 Home equity disqualifiers | 90 (A) | AI-ready 94; A&C 90 pending counsel on the CLTV example |
| 2 Adding or removing a name | 90 (A) | AI-ready 93; A&C 90 after the USDA correction |
| 3 How DSCR loans work | 89 (B) | ext. links 85 and A&C 87: one city-page `[VERIFY]`, Align confirmation of lender practice, two counsel examples |
| 4 Homestead property tax credit | 90 (A) | ext. links 93; A&C 86 pending the tax year 2026 swap |

- No gates apply.
- Scores use the 10 scored Learn aspects; Media is N/A because the images are still briefs.
- Without external linking (E3's 9-aspect method), the scores are the same: 90, 90, 89, 90.

**Before and after, Accuracy & compliance (as handed over vs. now):**

| Post | Before | After | Main reason for the "before" score |
|---|---|---|---|
| 1 | about 74 | 90 | CFPB 75% misattribution; unsourced CLTV range and Texas figure; "second mortgage" claim for MI 10K; retired module label; an apply button against the brief |
| 2 | about 68 | 90 | 12 open flags; wrong USDA release-of-liability advice; PTA penalty mis-cited; an apply button against the brief |
| 3 | about 72 | 87 | moved Fannie Mae section (B3-3.1-08); wrong Reg Z comment number; unsourced 1.20–1.25 tier; two retired CTA labels |
| 4 | about 74 | 86 | deferment age wrong (65 for 62); unsourced PRE carry-over claim; one reducer under two buttons |

**`[VERIFY]` flags:** 33 inline fact flags across the four drafts (5, 12, 13 and 3). **31 closed, 2 remaining.**
- **24 closed** confirmed or corrected against primary sources.
- **7 closed** as DSCR lender-practice statements with no regulator source. Per brief §7 they are reworded as lender practice and handed to Align as one `[NEEDS ALIGN INPUT]`.
- **Remaining 2:**
  - post 3, the Detroit and Grand Rapids city pages (unreachable);
  - post 4, the tax year 2026 figures (not yet published by Treasury).
- The writers' extra "re-open before publishing" notes in post 1 (7 sources) were also checked; one was wrong.

**Placeholders that stay:**
- 4 `[NEEDS SAMANTHA QUOTE]`, one per post.
- 4 inline `[COMPLIANCE REVIEW]` tags: post 1 CLTV example, post 2 buyout example, post 3 ratio and tax examples.
- 1 `[NEEDS ALIGN INPUT]` (post 3, HTML comment).
- 2 dated "LINK ONCE LIVE" comments (post 1 → bankruptcy post W8; post 4 → SSI post W8).

**Key issues found:**
1. **Wrong facts in new copy, now fixed:**
   - the CFPB HELOC booklet's "75% example" does not exist in the current booklet;
   - USDA assumptions keep the original borrower liable;
   - the summer tax deferment starts at 62, not 65;
   - the PTA penalty is in MCL 211.27b.
2. **Fannie Mae renumbering:**
   - Rental income moved from B3-3.1-08 to **B3-3.8** (B3-3.8-01 general, -02 subject property, -03 short-term rental, -04 non-subject property, all 09/02/2026).
   - No other draft in `06-blogs/drafts/` links `b3-3.1-08`. Library refreshes and product teams should search for it.
3. **Retired CTA labels from the briefs:**
   - "Explore my equity options", "See what the property produces", "Review my break-even" and "Run the DSCR calculator" are not in the brand review's §5 final table.
   - Each is replaced with its final-vocabulary label and correct reducer.
   - **The briefs and the brand guide §5.2 should be updated so writers stop reusing them.**
4. **Apply buttons:** the writers added "Start my application" to posts 1 and 2. Both are removed:
   - the briefs list talk only;
   - both posts teach "check first";
   - guide §5.2 rule 3 makes talk the Learn primary;
   - the brand review places apply on Learn pages only as a module text link.
5. **Sources unreachable from this session:** the Garn-St Germain statute (verified through 12 CFR 191.5 instead), Fannie Mae's Eligibility Matrix and Form 3023, Freddie Mac's Guide, the Texas Constitution and the two city pages. eCFR page URLs need a human link-check.
6. **Brief error:** the add/remove-name brief cites the relative uncapping exemption as MCL 211.27a(7)(s); it is **(7)(u)**.

**Owner and cross-team items:**
- **Group E3 seniors post (`mortgage-for-seniors.md`):** it says the summer deferment runs "to February 14", in the body and in its resolved flags. MCL 211.51(2) says "until the following February 15". Its editor should correct it, or cite the local source that says February 14.
- **Products-b team (`/product-loans/dscr-loans-michigan/`):**
  - its FAQ "How is the DSCR ratio calculated?" overlaps this post's H2. Keep that answer short and add the brief's inbound link ("how DSCR loans work, step by step");
  - its calculator text states "better pricing at 1.25 and above" without a source;
  - it still shows the retired "Schedule a call with Samantha" and "Talk through this property" labels.
- **PRE guide refresh (Ref 6, W1):** add the inbound "the separate homestead property tax credit (MI-1040CR)" link, so the credit post (W7) is not an orphan, and keep the PRE guide off "homestead property tax credit" wording (Q125/Q126 split).
- **D3/F2:** post 1 mentions MSHDA only as a lien to ask about, not as an Align offer. No change is needed if D3 stays open.
- **Publish-day tasks (all four):**
  - Set the Updated date, `datePublished` and `dateModified` to the publish date.
  - Swap the tax year 2026 figures in post 4 if Treasury has posted them.
  - Resolve post 3's city-page flag.
  - Add the inbound links in each brief's §8 (8, 7, 8 and 7).
  - Convert the held links when their targets go live.
  - Link-check the eCFR and other unopened URLs listed above.
  - Run Rank Math IndexNow and the GSC inspection.
- **Sequencing:** post 4 (W7) depends on the VA post (W3) and the seniors post (W5) being live. Post 1 (W3) holds its W8 link.

**Working files (scratchpad, not deliverables):** under `/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/e2/`:
- `qa.py` (E3's screens, extended), `links.py`, `secwc.py` (section word counts) and `fk.py` (reading grade);
- `baseline.txt` and `final.txt`;
- `orig/` (pre-edit copies of the four drafts);
- `dl/` (text captures of every primary source read).
