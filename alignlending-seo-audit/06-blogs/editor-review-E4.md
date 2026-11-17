# Editor review, group E4

**Editor:** Consistency team, blog editor E4 · **Date:** 2026-11-17 · **Status of both drafts:** "Edited draft — subject to Align approval"
**Standards applied:**
- `00-project/KNOWN-CORRECTIONS.md` (wins);
- `brand-voice-and-compliance-guide.md`;
- `scoring-rubric.md`;
- `06-blogs/briefs/_README.md`;
- `09-consistency/brand-compliance-review.md` §5 (CTA vocabulary);
- `09-consistency/seo-ai-review.md` §2.8 and `query-ownership-map.csv` (Q117–Q121) for the lease-to-own ownership decision.

| # | Draft (edited in place) | Publish week | Words (brief range) | Title / meta chars | Open `[VERIFY]` | Final score |
|---|---|---|---|---|---|---|
| 1 | `06-blogs/drafts/rent-to-own-vs-land-contract-michigan.md` | W4 | 2,299 (1,800–2,300) | 54 / 159 | 0 | **91 (A)** |
| 2 | `06-blogs/drafts/buying-a-house-after-bankruptcy-or-foreclosure.md` | W8 | 2,194 (1,700–2,200) | 58 / 159 | 5 (table cells) | **89 (B)**, projected 90 (A) |

**How the checks were run.**
- **Word count:** E3's method, recorded in each file's `word_count`. It counts the visible body, including the table, the FAQ and the disclosure lines. It leaves out the front matter, the Sources list, HTML comments, editor tags and JSON-LD.
- **Screens:** E3's `qa.py`, re-run after every edit. It covers:
  - banned and hype words, rate and APR patterns, Reg Z trigger patterns;
  - fair-housing and ECOA terms, F8/D6 claims about Samantha, NAMB and time-to-close claims;
  - exclamation points and F17 freshness claims;
  - the required fixed strings, CTA label and destination pairs, and the F7 line (with MSHDA where it is named).
- **Extra screens:** `qa_extra.py` was added for this group. It checks for "lease to own" in the title, the H1 or any heading, and for any heading that equals another page's H1 in `page_summary.csv`. It also reports link positions.
- **Structure:** checked for both posts:
  - answer-block lengths;
  - that the JSON-LD parses;
  - that the visible FAQ equals the FAQPage text word for word;
  - that the Sources list equals the `citation` array and the order of body links;
  - that the YAML front matter parses;
  - that the headline equals the H1, the description equals the meta, and dateModified equals the visible Updated date.
- **Reading level:** an approximate Flesch-Kincaid estimate (`fk.py`). The answer blocks average grade 8.4 (post 1) and 8.5 (post 2).
- **Internal links:** checked against `page_summary.csv`. Money-page position was measured in visible words.
- **Align figures:** checked against the crawled Uncapping Study (+50.5%, 2026, all 83 counties).
- **Primary sources read directly this session (2026-11-17):**
  - Fannie Mae Selling Guide: B3-5.3-03, -07, -08, -09, B3-4.3-12 and B2-1.3-05. The Guide was published November 4, 2026, and its table of contents confirms none of these sections moved in the March 4, 2026 renumbering.
  - HUD Handbook 4000.1 (update of August 12, 2026, 1,872-page PDF): II.A.4.b.iii and II.A.5.a.iii.
  - eCFR (API): 7 CFR 3555.151, 12 CFR 191.1, 191.2, 191.5 and 1026.43.
  - www.legislature.mi.gov: 16 MCL sections.
  - michigan.gov: the Treasury PRE ownership page, the Treasury tax-foreclosure timeline and MSHDA's "Stages of foreclosure" page.
  - consumerfinance.gov: the contract-for-deed advisory.
- **Not readable (each retried once after 30 seconds):**
  - consumer.ftc.gov: proxy refusal.
  - benefits.va.gov: now redirects to www.knowva.ebenefits.va.gov, which the proxy refuses.
  - rd.usda.gov: Akamai "Access Denied" (403).
  - answers.hud.gov: proxy refusal.
  - guide.freddiemac.com: JavaScript app with no readable text.
  - VA chapter 4 facts rest on search excerpts quoting the KnowVA page, and are labeled that way below.
- **Result:** both posts pass every screen and structural check. Every question H2 opens with a 41–58-word answer, and each FAQ matches its JSON-LD exactly.

**Read in context, not trigger terms (no screen hits):**
- "80% of projected true cash value" (post 1) is the tax statute's bargain-purchase test, not a down payment.
- "12 months of on-time plan payments" and "3 payments since forbearance ended" (post 2) are bankruptcy-plan and prior-mortgage payment counts, not terms of an offered loan.
- "a larger down payment" (post 2, non-QM) states no amount.

---

## 1. Rent-to-own, land contract or mortgage: three ways to buy a Michigan home

### Ownership decision (lease to own)

**Decision:** title, H1 and meta are kept. They are consistent with the ownership decision, so nothing needed adjusting.
- **Canonical:** seo-ai-review §2.8 keeps `/learn/lease-to-own-vs-rent-to-own-whats/` canonical for "lease to own" (Q117), "lease to own vs rent to own" (Q118) and typical terms (Q119).
- **This post:** Q120 assigns it "rent to own vs buying / vs land contract".
- **Sibling guard:** §2.8 names this post "Rent-to-Own vs. Land Contract vs. Mortgage in Michigan" and bars "lease to own" from its title and H1.
- **Check:** the brief's title (54), H1 and meta match that name and contain no "lease to own". `qa_extra.py` confirms no heading uses it.

**What did conflict was two H2s**, which competed with owner pages:

| Draft H2 | Problem | Now |
|---|---|---|
| "How does a land contract work in Michigan?" | Identical to the H1 of `/learn/michigan-land-contract/`, the Q121 owner | "Who owns the home during a Michigan land contract?" (title angle, links the owner) |
| "How does rent-to-own work in Michigan?" | Definitional intent the canonical owns ("How does a … agreement work?") | "Are you a tenant or a buyer under rent-to-own in Michigan?" (Michigan status angle, links the canonical) |

**Terminology fix:**
- **The clash:** the canonical currently labels "rent-to-own (lease-purchase)" and "lease-to-own (lease-option)", while the draft's table header said "Rent-to-own (lease-option)". AI engines would see the site contradict itself on its biggest query cluster.
- **The fix:** "rent-to-own" is now the umbrella term: "a lease with a right, or sometimes a duty, to buy". The post names both contract types and says sellers use the labels loosely. The canonical link (anchor "lease to own vs. rent to own", exact from the brief) sits at 27% of the body, so this post passes relevance to the canonical instead of competing with it.

### Changes made
- **Every Michigan statute re-read on www.legislature.mi.gov.** All statements match:
  - 600.5714(1)(a): 7 days;
  - 600.5744(4), (5), (7), (8): 90 days or 6 months, 10 days, cure, redemption ends;
  - 600.5726 and 600.5728(1): 15 days;
  - 600.3101, 600.3201, 600.3240(8)–(12) and 211.7dd(a)(i);
  - 211.27a(3), (6)(b), (6)(g) and (10): 45 days;
  - 554.632(a), 554.633(1)(a), (f) and 565.35.
- **Truth in Renting Act fixed.** The draft said Treasury's tax treatment means the Act applies ("so"). Coverage actually comes from the Act's own definition of a rental agreement (MCL 554.632(a)). The draft also said the lease cannot waive the landlord's "habitability duties"; §633(1)(a) bars waiving the tenant's *remedies* for an unfit home, and the text now says that.
- **Treasury PRE page confirmed and used more fully:**
  - a land contract buyer must have a written contract signed by the seller;
  - a lease with an option is a rental agreement until exercised;
  - recording is "recommended", not required;
  - Form 2766 is due within 45 days;
  - an assessor can ask for the signed original, because a memorandum alone does not prove the sale.

  The table's "Recorded?" cell for land contracts now reads "Not required; Treasury recommends it".
- **Fannie Mae confirmed:**
  - B3-4.3-12 (08/07/2024): the credit is at most market rent minus rent paid, with a lease of at least 12 months, payment proof and an appraisal.
  - B2-1.3-05 (12/11/2024): within 12 months the payoff is a purchase; after 12 months it is a limited cash-out refinance. Added that "cash-out is not allowed", which resolves the writer's B2-1.3-03 question.
- **Due-on-sale `[VERIFY]` resolved.** The checklist question now cites 12 CFR 191.5(b)(1)(iv): a lease with an option to purchase "will allow the exercise of a due-on-sale clause". 191.2(a) adds installment land sales contracts, and 191.1(b) applies the part to all lenders.
- **FTC attribution removed.** consumer.ftc.gov was blocked, and search found the page but not the lease-purchase wording. The point is now stated plainly and routed to the canonical. The CFPB advisory (read directly; Aug 13, 2024, modified Jun 25, 2026) carries the risk warning, now including "a seller may lack clear title or still owe a mortgage".
- **CTA module:**
  - **Lead-in:** the brief's "a readiness review shows whether a mortgage is closer than the seller's offer suggests" overstates the tool. The game plan page calls it "an educational self assessment" that "does not evaluate your eligibility for any loan program". The lead-in now asks a question and describes the 8-question assessment.
  - **Reducers:** "No application required" added beside the plan button (it was missing). "No credit pull to talk" stays beside each talk button.
- **Banned phrase:** FAQ 6 "with bad credit" became "with a low credit score", in the visible FAQ and the schema (brand review §4.2 precedent).
- **Key takeaway 4** was a rent-credit fact. It is now the brief's "each path's route to a mortgage".
- **Sprint link:** the preapproval post publishes in W2, before this post (W4), so its link is now live, with a publish-day confirm comment.
- **Consistency:**
  - MCL links use `www.legislature.mi.gov` (E3 convention);
  - the visible breadcrumb line is removed (BreadcrumbList covers it);
  - the image placeholder is an HTML comment;
  - `publisher` is reduced to the `@id`;
  - dates are set to the edit date;
  - front matter is updated: status, `editor_review`, `publish_week`, `query_ownership`, `word_count`, the resolved-flag log and counsel flags.
- **Length:** the verified detail added text, so the body was trimmed back to 2,299 words, inside the 2,300 cap.

### Final scorecard (learn article; Media N/A because only an image brief exists; weights rescaled to 10 aspects)

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 88 | 92 | 86 | 92 | 88 | 90 | 94 | 90 | 93 | 93 | **91** | A | — |

- **Intent & H1, 88 (B):** "Rent-to-own, land contract or mortgage: three ways to buy a Michigan home" matches the three-way decision intent and names Michigan. It is 73 characters and uses "or" rather than the query's "vs".
- **Headings, 92 (A):**
  - 11 H2s, 9 of them question-led: difference, tenant or buyer, ownership, default, taxes, credits, the switch, questions to ask, cost.
  - No heading duplicates an owner page's H1 or uses "lease to own".
- **ATF answer, 86 (B):** the 60-word answer gives the who (a buyer weighing a seller's offer), the answer for each path and the three deciding differences. The Michigan detail is light above the fold (the statutes sit in the takeaways), and as usual for Learn there is no "why Align".
- **CTA, 92 (A):**
  - The plan button ("No application required") and talk button ("No credit pull to talk") sit after the table, at 22%.
  - A talk end block follows; there is no apply CTA, as the brief requires.
  - The lead-in now matches what the destination does.
- **Title & meta, 88 (B):** the title (54) leads with the query and Michigan. The meta (159) lists title, default, tax reset and the route to a loan, with no proof element or brand.
- **Internal linking, 90 (A):**
  - 10 contextual links: tool at 21%, plan at 22%, canonical at 27%, land-contract owner, seller-financing guide, Uncapping Study, taxable-value guide, credit repair, preapproval (W2) and renting vs. buying.
  - The hub is linked only through the breadcrumb, and the 6 inbound links are publish-day work.
- **External linking, 94 (A):**
  - 15 Tier 1–2 sources (Michigan Legislature, Treasury, Fannie Mae, eCFR, CFPB), each read this session.
  - No never-link domains; the FTC link was dropped because it could not be confirmed.
- **E-E-A-T, 90 (A):**
  - Byline, NMLS numbers, entity and broker statements, and a disclosure with Equal Housing Opportunity.
  - "Not legal advice" with an attorney referral, and Sources with the Editorial Policy link.
  - Align's Uncapping Study is cited by name; the quote is still a placeholder.
- **AI-ready, 93 (A):**
  - Every question H2 opens with a 41–57-word answer.
  - A 9-row comparison table with a source line and date.
  - Quotable Michigan rules (7 days, 15 days, 90 days or 6 months, 45 days, the 80% bargain-purchase test, 50.5%).
  - FAQ = FAQPage, and the speakable classes are present.
- **Accuracy & compliance, 93 (A):**
  - Every legal and agency claim was checked at the primary source; no rates and no trigger terms.
  - F16 wording is in the required form, and the not-legal-advice wording is present.
  - The only open item is a counsel read of the plain-language legal summaries.

### Remaining `[VERIFY]`
None.

**Link-check on publish day:**
- `/learn/how-to-get-pre-approved-for-a-mortgage/` is live (W2).
- The eCFR 12 CFR 191.5 page renders in a browser (eCFR's HTML pages bot-redirect; the text was read through the eCFR API).
- The Treasury PRE ownership page.

### Counsel items
- **Plain-language legal summaries:** Michigan forfeiture (MCL 600.5726, 600.5728, 600.5744), eviction timing (600.5714), redemption (600.3240) and Truth in Renting Act protections (554.633). They are written as education with "this guide is not legal advice" and an attorney referral. Counsel may want to confirm the simplifications, for example "your payments are usually lost" after forfeiture.
- **Due-on-sale sentence:** "Federal due-on-sale rules do not shield a land contract or a lease with an option to buy (12 CFR 191.5)". Accurate to the regulation; counsel to confirm the phrasing.

### Samantha quote needed
- What she tells someone offered a land contract or rent-to-own deal before they sign. Do not reuse the stock "I don't love a deal that only works when nothing goes wrong" (investment-property context) or "Don't deny yourself…" (already on the rent-vs-buy pages).

### Inbound links (publish-day work, from brief §8)
Six inbound links, each placed in the source page's first 30% where possible:
- **`/learn/lease-to-own-vs-rent-to-own-whats/`:** this canonical refreshes in W1, before this post, so hold the link as a dated comment until W4.
- **`/learn/michigan-land-contract/`:** intro.
- **`/learn/pros-and-cons-of-seller-financing/`:** Michigan section.
- **`/learn/renting-vs-buying-financial-comparison/`:** alternatives section.
- **`/learn/specialty-financing/` (hub):** hub list.
- **`/rent-vs-buy-calculator/`:** below the result (calculators team).

---

## 2. Buying a house after bankruptcy or foreclosure: waiting periods by loan type

### Changes made
- **The waiting-period table was rebuilt and checked cell by cell.** It is re-dated "agency rules as of November 2026". The source line gives the Selling Guide's publication date (November 4, 2026) and the HUD 4000.1 update date (August 12, 2026). Corrections and confirmations:

| Cell | Draft | Now | Source |
|---|---|---|---|
| FHA, Ch. 13 discharged | "No added wait once the in-plan test is met `[VERIFY]`" | No added wait; manual underwriting within 2 years | HUD 4000.1 II.A.4.b.iii(F) |
| FHA, Ch. 13 dismissed | Lender review `[VERIFY]` | No separate rule; lender review (the handbook has none) | 4000.1 searched |
| FHA, short sale | "3 years if in default at the sale" (ML 2009-52) `[VERIFY]` | 3 years; none if every mortgage and installment payment was on time for the 12 months before the sale | 4000.1 II.A.5.a.iii(J) |
| FHA, modification or forbearance | No set period found `[VERIFY]` | No wait; manual underwriting with fewer than 3 payments since forbearance ended | 4000.1 II.A.4.b.iii(K) |
| Fannie Mae, modification or forbearance | No set period; payment history reviewed | No wait; no mortgage payment 60 or more days late in the past 12 months | B3-5.3-03, B3-5.3-09 |
| USDA, all rows | Sourced to a blocked PDF, with 4 `[VERIFY]` | 7 CFR 3555.151(i)(3)–(4), read on eCFR: 36 months for Ch. 7 and foreclosure; 12 months of plan payments with trustee or judge approval; one 30-day late in 12 months needs review; extenuating circumstances considered | eCFR |
| USDA, Ch. 13 discharged | "12 months after completion `[VERIFY]`" (older handbook text) | Lender review within 3 years; on-time plan payments count in your favor | 7 CFR 3555.151(i)(3)(ii) |
| VA, Ch. 7, Ch. 13 in plan, foreclosure | Partly flagged | Confirmed through search excerpts of KnowVA ch. 4. Foreclosure finalized more than 2 years before closing may be disregarded; 1–2 years with re-established credit and a cause beyond your control | KnowVA (via search) |
| VA, Ch. 13 discharged and dismissed, short sale or deed in lieu, modification | Guesses ("credit generally re-established", "reviewed like a foreclosure", "no set period found") | "Lender review `[VERIFY]`": no unverified rule is published | open, see below |

- **Dead and redirecting citations replaced:**
  - The MSHDA "Foreclosure-Timeline" PDF returns **404**. It is replaced by MSHDA's live "Stages of foreclosure" page, which says "Six (6) months is most common."
  - `benefits.va.gov/WARMS/pam26_7.asp` now **302-redirects to the generic KnowVA welcome page**. It is replaced by the KnowVA chapter 4 URL.
  - The answers.hud.gov pages are unreachable. They are replaced by the HUD 4000.1 hub page (read) plus section numbers.
  - The USDA chapter 10 PDF returns 403. It is replaced by 7 CFR 3555.151 (read).
- **Michigan clock answered from primary sources:**
  - "Most Michigan mortgages are foreclosed by advertisement" had no source. It is now what MCL 600.3201 and MSHDA support.
  - Added MCL 600.3236: the sheriff's deed becomes operative only when redemption ends.
  - Added Fannie Mae B3-5.3-09: DU "assumes that the date the foreclosure was reported in the tradeline is the date of the foreclosure sale".
  - **Effect:** in Michigan, Fannie Mae's clock can start at the sale while FHA's starts when ownership passes, 6 months or more later. The post tells the reader to ask which date applies.
  - MCL 600.3240(8)–(12) were read directly.
- **Misattributions fixed:**
  - "such as a serious illness or a wage earner's death" was attributed to Fannie Mae, but those are HUD's examples. The Fannie answer now uses the Guide's own documentation examples (layoff, illness, divorce decree).
  - The unverified VA divorce claim is replaced by HUD's verified rule: divorce alone does not count, and neither does a job transfer that left a home unsold.
  - The unverified "VA looks for about 12 months of payments after the last problem" (step 3) is replaced by USDA's verified 30-day-late rule.
- **Tax foreclosure:** Treasury's timeline is confirmed (title vests March 31 of tax year 3). The claim is narrowed to what was checked: Fannie Mae's guide and HUD's handbook do not address it.
- **Modification and forbearance:** the answer now states the verified Fannie Mae and FHA rules. The HUD and VA `[VERIFY]` is resolved for HUD; VA stays in the table.
- **Non-QM:**
  - The inline `[VERIFY]` is removed, because no range is published.
  - The section says "Waits vary by lender, and none is promised", and the optional Align input is now an HTML comment.
  - The Regulation Z sentence now follows 12 CFR 1026.43(c)(1) ("reasonable and good faith determination"), linked to eCFR.
- **Compliance strings:**
  - The F7 line now includes MSHDA, because the post cites MSHDA (E3 wording).
  - F7 and the disclosure are moved above Sources.
  - "Approval is subject to underwriting" is kept in the How Align paragraph.
  - The F3 wording stays in FAQ 6. It was removed from waiting-list step 4 to keep the post under 2,200 words.
- **CTA module:**
  - The talk reducer sat below both buttons, and "No application required" sat in the lead-in. Each button now carries its own reducer.
  - The lead-in "Not sure which date starts your clock? The readiness review shows…" promised something the tool does not do. It now describes the assessment honestly.
- **AI readiness:**
  - The `speakable` selectors pointed at nothing; the `.al-answer` and `.al-takeaways` wrappers are added.
  - Answer blocks were simplified from grade 10.1 to 8.5 (Chapter 13, extenuating circumstances, modification, non-QM).
- **Links:**
  - The anchor "buying a home with bad credit" became "buying a home with a low credit score" (banned phrase).
  - The what-not-to-tell post publishes in W6, before this post (W8), so its link is live with a confirm comment.
- **FAQ:** the unverified USDA short-sale claim is removed. The FHA short-sale answer is corrected to the current handbook, in both the visible FAQ and the schema.
- **Schema:** `publisher` is reduced to the `@id`, `worksFor` is added, the FAQPage gets an `@id`, and the Sources list equals the citation array in order.
- **Length:** 2,194 words (cap 2,200). The verified table grew the text, so duplicated body sentences were cut and the table cells condensed.

### Final scorecard (learn article; Media N/A; weights rescaled to 10 aspects)

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 86 | 92 | 88 | 92 | 88 | 89 | 88 | 90 | 94 | 85 | **89** | B | — |

Projected after the 5 cells are confirmed: Accuracy 92, overall **90 (A)**.

- **Intent & H1, 86 (B):** the H1 leads with the exact primary query and adds "waiting periods by loan type". It is 76 characters and carries no Michigan, which appears in an H2.
- **Headings, 92 (A):**
  - 11 H2s, 9 question-led: overall, Ch. 7, Ch. 13, foreclosure, Michigan clock, extenuating circumstances, preparation, non-QM, modification.
  - Plus a question H3 on tax foreclosure.
- **ATF answer, 88 (B):**
  - The 57-word answer gives the who, the range (12 months into Chapter 13 up to 7 years) and the Michigan redemption specific.
  - 4 numeric takeaways follow.
- **CTA, 92 (A):**
  - The plan and talk module sits right after the table (28% of the body), each button with its correct reducer.
  - A talk end block follows, with no apply CTA.
- **Title & meta, 88 (B):** the title (58) leads with the query plus the "Wait Times" hook. The meta (159) names every event, program and Michigan's clock. No proof element or brand.
- **Internal linking, 89 (B):**
  - 9 contextual links: game plan at 28%, refinance-after-bankruptcy, credit repair, credit score, low-credit guide, what-not-to-tell (W6), non-QM product page, modification and forbearance guides.
  - The hub is linked through the breadcrumb only, and the 7 inbound links are publish-day work.
- **External linking, 88 (B):**
  - 12 Tier 1–2 sources; Fannie Mae, HUD, eCFR, MCL, Treasury and MSHDA were read directly.
  - The VA KnowVA and Freddie Mac links could not be opened here and need a publish-day click.
- **E-E-A-T, 90 (A):**
  - The source line gives guide publication and update dates.
  - F7 line with MSHDA, entity and broker statements, and a disclosure with Equal Housing Opportunity.
  - Bankruptcy-attorney referrals. The quote is still a placeholder.
- **AI-ready, 94 (A):**
  - A 7-event × 5-program table with dates and sources.
  - Every question H2 opens with a 44–58-word answer.
  - Quotable rules (B3-5.3-09's sale-date assumption, MCL 600.3236, 7 CFR 3555.151), and FAQ = FAQPage.
- **Accuracy & compliance, 85 (B):**
  - Fannie Mae, HUD, USDA and Michigan cells are verified at source. VA's core cells are confirmed through search excerpts of KnowVA.
  - 5 cells in the core asset still carry `[VERIFY]`.
  - F3, F7 (with MSHDA) and F10 are handled; there are no promises.

### Remaining `[VERIFY]` (5 cells, 2 sources)
1. **VA cells: Chapter 13 discharged, Chapter 13 dismissed, short sale or deed in lieu, and modification or forbearance (4 cells).**
   - **Where:** VA Pamphlet 26-7, chapter 4 (Credit Underwriting), on KnowVA, at the URL now in the table's source line.
   - **What to check:** whether chapter 4 sets a rule for each. While there, also confirm the three VA cells verified through search: Chapter 7, Chapter 13 in the plan, and foreclosure (disregarded after 2 years; 1–2 years with re-established credit and a cause beyond your control).
   - **If chapter 4 is silent:** delete the tag and keep "Lender review". If it sets a rule, put it in the cell. The FAQ text is not affected.
2. **USDA cell: short sale or deed in lieu (1 cell).**
   - **Where:** HB-1-3555 chapter 10 (Credit Analysis) and Attachment 10-A on rd.usda.gov.
   - **What to check:** 7 CFR 3555.151 does not list these events. A search excerpt of a chapter 10 advance copy reads "A DIL recorded 36 months prior to the date of loan application is not adverse credit".
   - **If confirmed:** write "Deed in lieu: 3 years before application" and add the short-sale rule, or "Lender review" if chapter 10 has none.

**Publish-day tasks (W8):**
- Re-check the table against the live guides that week, and re-date it if anything moved.
- Link-check:
  - the KnowVA chapter 4 URL;
  - Freddie Mac 5202.5;
  - the eCFR pages in a browser;
  - the Treasury timeline;
  - the MSHDA stages page;
  - `/learn/what-not-to-tell-a-mortgage-lender/` (W6).
- Confirm the image URL in the JSON-LD.

### Counsel items
- **Bankruptcy-court and trustee-approval statements**, for example "HUD asks for the bankruptcy court's written permission, while VA and USDA accept the trustee's or the judge's". They are education, each with a bankruptcy-attorney referral and the not-legal-advice line.
- **Trigger-term read (D7):** "12 months of on-time plan payments", "3 payments since forbearance ended" and "a larger down payment" (no amount) are not terms of an offered loan. They sit in a Learn guide with no apply CTA and are listed for completeness only.
- **"Varies by lender" (non-QM):** no seasoning period is published until Align supplies a dated source.

### Samantha quote needed
- What she tells someone who calls a year after a bankruptcy. Do not reuse the stock "The early call is almost always easier than the emergency call" or "I'd rather know that six months ahead of time…", both already on other pages.

### Inbound links (publish-day work, from brief §8)
Seven inbound links:
- **`/learn/refinancing-after-bankruptcy/`:** intro.
- **`/learn/buying-home-with-bad-credit/`:** waiting-period mention.
- **`/learn/credit-repair-strategies-for-home-buyers/`:** rebuilding section.
- **`/learn/fha-loan-tips/`:** credit section.
- **`/learn/how-to-buy-foreclosed-home/`:** FAQ.
- **`/learn/credit-and-qualifying/` (hub):** hub list.
- **`/product-loans/non-qm-loans/`:** bankruptcy H2 (products-b team).

E3's what-not-to-tell post already holds a dated comment to link this post at W8.

---

## Group summary

**Scores (final, after edits):**

| Post | Overall | Rubric bands |
|---|---|---|
| 1 Rent-to-own vs. land contract vs. mortgage | 91 (A) | Ext. links 94 and A&C 93; ATF 86 is the low point |
| 2 Buying after bankruptcy or foreclosure | 89 (B), projected 90 (A) | AI-ready 94; A&C 85 until the 5 VA and USDA cells are confirmed |

No gates apply.

**Before and after, Accuracy & compliance (as handed over vs. now):**

| Post | Before | After | Main reason for the "before" score |
|---|---|---|---|
| 1 | about 76 | 93 | Truth in Renting inference; rent-to-own terminology contradicting the canonical; unconfirmed FTC attribution; H2 duplicating the land-contract owner's H1; "bad credit" in a FAQ |
| 2 | about 64 | 85 | 20 flags on the core table and notes; a dead MSHDA link and a VA link redirecting to a generic page; an outdated FHA short-sale rule (ML 2009-52); HUD examples attributed to Fannie Mae; unsourced "most" claim |

**`[VERIFY]` flags:**
- **Inline:** 27 fact flags across the two drafts: 7 in post 1, and 20 in post 2 (12 table cells plus 8 notes; post 2's header also mentioned the tag once, which is not counted). **22 resolved, 5 remaining**, all cells in post 2's table: 4 VA and 1 USDA.
- **Front matter:** post 1 went from 6 items to 0; post 2 from 15 to 2 (VA chapter 4, USDA chapter 10).
- **How they were resolved:**
  - 18 by reading the primary source this session.
  - 1 (the VA foreclosure cell) from search excerpts that quote the KnowVA page.
  - 1 by citing a different primary source: the Garn-St Germain question now cites 12 CFR 191.5.
  - 1 by removing an attribution that could not be confirmed (FTC).
  - 1 because the post no longer makes the claim (a non-QM range).

**Placeholders that stay:**
- 2 `[NEEDS SAMANTHA QUOTE]`, one per post.
- 1 optional NEEDS ALIGN INPUT (non-QM seasoning), as an HTML comment.
- 2 "confirm live on publish day" comments for sprint links.

**Key issues found:**
1. **Ownership conflicts were in the H2s, not the title.** Post 1's title, H1 and meta already respected the lease-to-own decision. One H2 exactly duplicated the land-contract owner's H1, and another targeted the canonical's definition. Both are reframed, and the terminology now agrees with the canonical.
2. **Government URLs have moved:**
   - VA's handbook (WARMS → KnowVA);
   - MSHDA's foreclosure PDF (404);
   - HUD's answers pages (unreachable here).
3. **The writers' blocked-host workaround produced errors.** These included an FHA short-sale rule from a 2009 Mortgagee Letter, HUD's examples credited to Fannie Mae, and VA guesses in table cells. Reading the handbooks directly fixed eight table cells, and the four VA cells that could not be read now say "Lender review" instead of a guess.
4. **Fannie Mae renumbering:** none of the cited credit and asset sections moved: B3-5.3-03, -07, -08, -09, B3-4.3-12 and B2-1.3-05 are checked against the November 4, 2026 Guide.
5. **The CTA lead-ins overstated the readiness tool.** Both posts promised the assessment would say how close a mortgage is, or which date starts the clock. The page itself says it "does not evaluate your eligibility for any loan program". Both lead-ins are fixed.

**Owner and cross-team items:**
- **Lease-to-own canonical (W1 refresh):**
  - It labels "rent-to-own (lease-purchase)", while this post uses rent-to-own as the umbrella term. Add one line saying sellers use the labels loosely, so the two pages agree.
  - Hold the inbound link to this post until W4.
  - Keep the land-contract table out (seo-ai-review §2.8).
- **Land-contract guide (W6 refresh):** its "How a land contract compares" H3s (vs. lease option, vs. mortgage) duplicate this post's table. Cut them to two sentences plus a link here. The guide keeps "how does a land contract work" and the new refinance H2.
- **Links team:** 1 city page (`/mortgage-lender-richmond-mi/`) links a `benefits.va.gov/WARMS` URL, which now redirects to KnowVA. 2 Learn pages (`/learn/second-mortgages/`, `/learn/what-is-buyers-market-in-real-estate/`) link answers.hud.gov, which could not be checked from here.
- **CTA team:** the button label "Take the readiness review" opens a section the page itself titles "Take the readiness assessment". This is minor, but the label and destination wording should match. The page also says "about two minutes"; that is not repeated here (auditor removal elsewhere).
- **Refresh wave 2 (C22):** the target page `/learn/buying-home-with-bad-credit/` carries "bad credit" in its title and slug. Consider retitling it when it is refreshed.
- **Environment:** consumer.ftc.gov, KnowVA, rd.usda.gov and answers.hud.gov stayed unreachable after the retry, and guide.freddiemac.com cannot be read without a browser. The 5 open cells need someone with a browser.
- **Publish-day tasks (both posts):**
  - Set the Updated date, datePublished and dateModified to the publish date.
  - Add the inbound links listed above, and confirm the held sprint links are live.
  - Run Rank Math IndexNow and GSC inspection.
  - Link-check the Tier 1 URLs listed in each section.

**Working files (scratchpad, not deliverables):** under `/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/e4/`:
- `qa.py`, `qa_extra.py`, `pos.py`, `fk.py` and `links.py`;
- `baseline.txt` and `final.txt`;
- `orig/` (pre-edit copies of both drafts);
- `src/` (text captures of every primary source read, including the HUD 4000.1 PDF).
