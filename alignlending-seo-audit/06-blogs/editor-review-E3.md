# Editor review, group E3

**Editor:** Consistency team, blog editor E3 · **Date:** 2026-11-16 · **Status of all four drafts:** "Edited draft — subject to Align approval"
**Standards applied:** `00-project/KNOWN-CORRECTIONS.md` (wins), `brand-voice-and-compliance-guide.md`, `scoring-rubric.md`, `06-blogs/briefs/_README.md`, `09-consistency/brand-compliance-review.md` §5 (CTA vocabulary).

| # | Draft (edited in place) | Publish week | Words (brief range) | Title / meta chars | Open `[VERIFY]` | Final score |
|---|---|---|---|---|---|---|
| 1 | `06-blogs/drafts/how-to-get-pre-approved-for-a-mortgage.md` | W2 | 2,373 (2,000–2,500) | 50 / 154 | 1 | **90 (A)** |
| 2 | `06-blogs/drafts/income-needed-to-buy-a-house-michigan.md` | W5 | 2,192 (1,700–2,200) | 51 / 160 | 0 | **91 (A)** |
| 3 | `06-blogs/drafts/what-not-to-tell-a-mortgage-lender.md` | W6 | 1,915 (1,500–2,000) | 60 / 154 | 0 | **90 (A)** |
| 4 | `06-blogs/drafts/mortgage-for-seniors.md` | W5 | 2,145 (1,800–2,200) | 57 / 159 | 0 | **90 (A)** |

**How the checks were run.**
- **Word count:** one method for all four, recorded in each file's `word_count`. It counts the visible body, including the FAQ and the disclosure lines. It leaves out the front matter, the Sources list, HTML comments, editor tags and JSON-LD.
- **Screens:** a script ran on every draft after editing. It checked banned and hype words, rate and APR patterns, Reg Z trigger patterns, fair-housing and ECOA terms, F8/D6 claims about Samantha, NAMB, time-to-close claims, exclamation points, F17 freshness claims, the required fixed strings and the CTA label and destination pairs.
- **Structure:** the same script checked answer-block lengths, JSON-LD parsing, that the visible FAQ matches the FAQPage text word for word, and that the Sources list matches the `citation` array and the order of body links.
- **Internal links:** checked against `page_summary.csv`.
- **Align figures:** checked against the crawled `/research/` pages (2026-11-15).
- **External facts:** michigan.gov (403), legislature.mi.gov (502 from its own server), fanniemae.com, consumerfinance.gov, ecfr.gov, hud.gov and govinfo.gov could not be opened from this session. Those facts were confirmed from web-search results that quote the official pages. census.gov results confirmed the ACS figures.
- **Result:** all four posts pass on every structural check. Each one has every question H2 opening with a 40–60-word answer and a FAQ that matches its JSON-LD exactly.

**Screen false positives (read in context and kept):**
- "instant" in post 1. The brief asks it to answer "instant mortgage preapproval" honestly, and the post explains that an instant result is a prequalification.
- "rate of 36.0 mills" in post 2. This is a millage rate, not an interest rate.
- "federal crime" in post 3. It refers to the statute, not to a place.
- "75-year-old" in post 4. It is an age, not a loan term.
- "$X a month" amounts in post 2. These are tax amounts and ratio budgets, not loan payments. They are flagged for counsel below.

---

## 1. How to get preapproved for a mortgage (Michigan)

### Changes made
- **Outdated Fannie Mae citation fixed.**
  - Fannie Mae's Announcement SEL-2026-02 (March 4, 2026) restructured Chapter B3-3, and employment documentation moved from B3-3.1-02 to **B3-3.2-01, Standards for Employment and Income Documentation**.
  - B3-3.1-02 is now the tax-return section.
  - The body link, the Sources list and the JSON-LD citation are updated.
- **Self-employed row corrected.** Fannie Mae treats anyone who owns 25% or more of a business as self-employed. That borrower usually needs 2 years of signed personal *and* business returns, and sometimes 1 year. The old wording implied personal returns alone for smaller owners, who fall under the K-1 rules instead.
- **W-2s:** the answer block and the takeaways now say "the last 1 or 2 years", which matches the table and the Guide. The answer used to say 2 years.
- **Credit section:** the unsourced "some older FICO versions use 14 days" note is removed. The CFPB's 45-day rule (en-2005) is confirmed and stays.
- **Citation accuracy:** SEL-2025-09 was cited for the definition of an overlay, which it does not give. The announcement is now cited for the 620 change only, and the overlay is defined in plain words.
- **HUD link:** it now points to HUD's current handbook hub page (`/hud-partners/single-family-handbook-4000-1`) instead of an old PDF path. The 500 and 580 thresholds are confirmed (HUD FAQ and Mortgagee Letter 2026-11).
- **"How Align can help":** the draft said Samantha "quotes your payment with the new-owner Michigan property tax from the first conversation". That is payment-quote language and an unverified process claim. It now uses the approved claim: Samantha prices your file with multiple wholesale lenders and builds the budget with the new owner's tax, not the seller's bill.
- **Cross-links that would have 404'd:**
  - Post 1 publishes in W2, but it linked the income post (W5) and the what-not-to-tell post (W6).
  - Both links are now dated HTML comments to add when those posts go live.
  - The MSHDA post publishes the same week (W2). A note says to publish it first or hold that link.
- **CTA module:** "No application required" is now beside "Build my homebuyer game plan" (guide §5.2 rule 4). The talk button keeps "No credit pull to talk". The apply button appears only in the end block, with no reducer, away from the table.
- **Void list:**
  - The two `[VERIFY]` bullets are rewritten in confirmed, general wording.
  - Employment is reconfirmed shortly before closing (now Guide B3-3.1-04, within 10 business days of the note date).
  - On a purchase, a large deposit needed for closing must be sourced (B3-4.2-02).
- **Purchase-agreement claim:** the answer now says the agreement "usually" sets a financing deadline. The table row keeps a precise `[VERIFY]`, and an HTML comment beside FAQ 6 ties that answer to the same check.
- **Checklist PDF:** read in full (2026 edition, 6 pages). It matches the post's document table, so its link stays, with the anchor set to the PDF's real title, "Mortgage Pre-Approval Checklist (PDF)".
- **JSON-LD:**
  - `publisher` is reduced to the `@id`, per README §5 (do not redefine the Organization).
  - The citations match the Sources list in order.
  - The HowTo steps match the visible list.
- **Front matter:** `status`, `editor_review`, `publish_week` and `word_count` are set. The verify list is pruned to the open items, and an `editor_resolved_flags` list records each confirmation.

### Final scorecard (learn article; External linking and Media not scored per assignment, weights rescaled to the 9 aspects)

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 88 | 92 | 86 | 92 | 86 | 88 | 90 | 94 | 90 | **90** | A | — |

- **Intent & H1, 88 (B):** the H1 "How to get preapproved for a mortgage in Michigan: steps, documents and timeline" matches the how-to intent and names Michigan. At 80 characters it runs past the ~70 the rubric's top anchor allows.
- **Headings, 92 (A):** 11 H2s, 9 of them question-led, cover the PAA set (time, credit, instant, where, Michigan, what voids a letter). No stat or label headings.
- **ATF answer, 86 (B):** a 59-word answer gives the who (Michigan homebuyers), the steps and the Michigan tax check, followed by 4 numeric takeaways. As usual for Learn, there is no "why Align" above the first H2.
- **CTA, 92 (A):** standard labels with correct reducers. The plan and talk module sits after the first answer section; the end block has apply and talk; no apply CTA is near the documents table.
- **Title & meta, 86 (B):** the title (50) leads with the searched spelling and "Michigan". The meta (154) states the benefit but carries no proof element and no brand.
- **Internal linking, 88 (B):**
  - 12 live contextual links with descriptive anchors, plus the standard CTA buttons.
  - The game plan link is in the first 30%, and the post links siblings, tools and research.
  - The hub is linked only through the breadcrumb, and the 8 inbound links are publish-day work.
- **E-E-A-T, 90 (A):**
  - Byline, NMLS numbers, entity and broker statements, disclosure with Equal Housing Opportunity, and Sources with the Editorial Policy link.
  - Align's own Uncapping Study and Market Report are cited by name.
  - The Samantha quote is still a placeholder.
- **AI-ready, 94 (A):**
  - Every question H2 opens with a 54–60-word answer.
  - The facts are quotable and dated (45 days, 4 months, 50.5%, 36.0 mills, HMDA 42/42/22).
  - FAQ = FAQPage word for word, and the graph has Article, HowTo, Breadcrumb and FAQ.
- **Accuracy & compliance, 90 (A):**
  - Every figure is confirmed except the purchase-agreement deadline, which is flagged.
  - The F3, F16, F2 and F7 (with MSHDA) wording is in place.
  - No rates; no trigger terms beside CTAs.

### Remaining `[VERIFY]`
1. **Michigan purchase agreements set a date for loan approval.**
   - Where it appears: the Michigan table row "Financing contingency date", the answer's "usually sets a financing deadline", and FAQ 6.
   - What to check: the mortgage-contingency clause of the current Michigan Realtors Buy and Sell Agreement (a member form, not public), or ask a Michigan real estate attorney.
   - If it cannot be confirmed: soften FAQ 6 and its JSON-LD text together, for example to "Your purchase agreement may set a date…".

**Link-check on publish day** (hosts blocked here, content confirmed through search):
- the Fannie Mae `b3-3.2-01` URL;
- the HUD hub page;
- CFPB en-2005 and en-127;
- eCFR 1026.19;
- MCL 211.27a;
- the MSHDA MI Home Loan page (also confirm MSHDA's status on the day, per F1/F2).

### Counsel items
- **C9:** the apply button carries no friction reducer until Align confirms where `/start/` → my1003app pulls credit. Counsel should confirm that "No credit pull to talk" is accurate for a booked call.
- **HUD credit-score thresholds (500 and 580):** stated as HUD's rule with HUD linked, inside a Learn guide and away from any apply CTA. No action is expected; this is listed for completeness under the trigger-term policy (D7).

### Samantha quote needed
- What a real preapproval should include and the work behind it. Do not reuse the stock "pretty letter" quote, which already appears on several pages.

---

## 2. What income do you need to buy a house in Michigan?

### Changes made
- **F16 fixed.** Both table notes said taxable value "resets to half the price". They now use the Editorial Policy form: the estimate treats each value as the assessor's market value and halves it, and the actual reset is to half of the assessor's market value, not automatically half the price you paid.
- **Every figure checked against Align's research (crawl 2026-11-15):**
  - HMDA statewide $285,000 and $91,000;
  - all 10 county value and income pairs;
  - 30.3% of loans above 43% DTI;
  - 40.8% of denials against 5.8% of loans at a DTI of 50% or more;
  - the 10 county homestead millages and the 36.0 statewide median;
  - the 50.5% typical jump.
- **Arithmetic:** all three tables and the FAQ were recomputed. Ottawa's tax estimate is corrected from about $5,920 to **about $5,930** ($197,500 × 30.0 mills = $5,925, rounded half up). Everything else matched.
- **County label:** "10 counties with the most loans" now reads "most purchase loans" in the table title, the H2 answer, the FAQ and the schema. Both readings are true, but the values come from purchase loans. The source line adds that HMDA values are reported in $10,000 bands.
- **Other confirmations:**
  - ACS 2020–2024 Michigan figures: $231,600 and $72,875 (QuickFacts); "(in 2024 dollars)" added.
  - Fannie Mae B3-6-02 (36% / 45% / 50%), HUD 4000.1 (31/43 at 580 or higher) and the CFPB's DTI explainer.
  - The Freddie Mac bullet now states both the 36% guideline and the 45% manual cap.
- **F12:** the FAQ carries ratio arithmetic, so the exact label "Hypothetical example, not an offer. Actual rates, costs and payments vary." now sits under the FAQ heading. The question-and-answer pairs are unchanged, so the schema still matches. Every table and worked example also carries the label, and the page still has no apply CTA.
- **Program links:** the MSHDA post (W2) and the USDA post (W4) publish before this post (W5), so their `[VERIFY]` placeholders are now live links, with publish-day confirm comments. The program facts are confirmed: the MI Home Loan with MI 10K, with income and price limits; USDA's household income limit.
- **CTA module rewritten:**
  - New lead-in: "The budget review starts from a payment you are comfortable with and works back." The claim matches `/purchase/budget-review/`.
  - "Review my budget" now carries "No application required", and Talk with Samantha keeps "No credit pull to talk".
  - The tool button carries "Every tool is free and needs no signup".
- **Layout:**
  - The byline is on one line.
  - The disclosure and F7 lines (with MSHDA) moved above Sources, matching the group.
  - `publisher` is reduced to the `@id`.
- **Length:** trimmed back to 2,192 words, inside the brief's 2,200 cap.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 90 | 92 | 88 | 92 | 88 | 90 | 92 | 95 | 86 | **91** | A | — |

- **Intent & H1, 90 (A):** "What income do you need to buy a house in Michigan?" matches the PAA-style query and names the state. The title repeats the H1 string (title-cased) instead of varying it.
- **Headings, 92 (A):** 9 H2s, 7 of them question-led, cover each salary PAA ($70,000 and $300,000; $200,000 to $500,000; low income; qualify vs. afford). The dollar figures sit inside questions, not as labels.
- **ATF answer, 88 (B):** the 59-word answer gives the who, "no single salary", the HMDA medians and the new-owner tax. 4 numeric takeaways follow, and the money-page link comes right after.
- **CTA, 92 (A):**
  - A plan and talk module after the county table, each button with its correct reducer.
  - A tool button inside the $300,000 section, and a talk-only end block.
  - No apply CTA anywhere, as the brief requires.
- **Title & meta, 88 (B):** the title (51) leads with the keyword. The meta (160) has a true, specific hook ("2025 by county", "No rates, just math"), but no brand and no NMLS.
- **Internal linking, 90 (A):**
  - `/purchase/budget-review/` is in the first 30%.
  - Links go to both research reports, two calculators, five sibling guides and two program posts.
  - The hub is linked only through the breadcrumb, and the 8 inbound links are publish-day work.
- **E-E-A-T, 92 (A):**
  - Align's own HMDA and uncapping data are cited by name with period and method.
  - There is an ACS comparison, Tier 1–2 sources only, and the full disclosure and entity lines.
  - The quote is still a placeholder.
- **AI-ready, 95 (A):**
  - The county table has units and a source line.
  - Every question H2 opens with a 54–56-word answer.
  - The figures are quotable ($91,000, $4,300 per $100, $19,300).
  - `isBasedOn` points to the two research pages, and the FAQ equals the schema.
- **Accuracy & compliance, 86 (B):**
  - Figures are verified and recomputed, F16 is now right, and the F12 labels are complete.
  - The remaining risk is counsel's ruling on monthly housing-budget amounts (C-2 below), which are flagged `[COMPLIANCE REVIEW]`.

### Remaining `[VERIFY]`
None.

**On publish day:**
- Re-check the two research pages for corrections. Both said "No corrections" at the crawl.
- Confirm the MSHDA and USDA posts are live.
- Link-check:
  - FFIEC HMDA browser;
  - CFPB en-1791;
  - Fannie Mae B3-6-02;
  - Freddie Mac 5401.2;
  - the HUD hub page;
  - MCL 211.27a;
  - the Treasury PRE page.

### Counsel items
- **C-2a:** monthly housing-budget amounts such as "about $1,633 a month for all housing costs".
  - Where: the three tables and FAQs 2 and 4.
  - Question: are these "amount of any payment" under 12 CFR 1026.24(d)(1)(iii)?
  - Current handling: they are ratio limits on income, not loan payments. Each carries the F12 label and `[COMPLIANCE REVIEW]`, and the page has no apply CTA.
- **C-2b:** "MI 10K" is a program name with a dollar figure. Is it treated as a down-payment trigger term?
- **Owner and cross-team items (not counsel):**
  - **D2:** confirm the labels "median home value on purchase loans" (HMDA) and "median value of owner-occupied homes" (ACS).
  - **F4 conflict:** the `/home-affordability-calculator/` helper text still says "about 1.5% of the price" (calculators team).
  - **Purchase team:** shorten the `/purchase/budget-review/` $300,000 income H2 and link here.

### Samantha quote needed
- The gap between the qualifying number and a comfortable payment. Do not reuse "I don't live in your house" or "The maximum somebody can qualify for…", both already on several pages.

---

## 3. What not to tell a mortgage lender, and what you must share

### Changes made
- **D6/F8 removed.** The new copy said "Samantha handles each of her loans herself, from the first conversation to closing." D6 (loan-officer headcount) is open, and the brand review limits that line to pages that already carry it. It is replaced with the approved claim "We compare your scenario across multiple wholesale lenders."
- **PRE accuracy:** "Michigan allows one PRE at a time" became Treasury's affidavit wording, "only one principal residence at a time". A home that is for sale and empty can keep its exemption under a conditional rescission, so "one PRE" was not strictly true.
- **Inaccurate sentence fixed:** "Michigan adds a few more" (declarations) implied Michigan adds questions to the federal form. It now reads "The table adds the Michigan items a national checklist misses."
- **Key takeaways:**
  - Age now reads "(with narrow exceptions)".
  - The meta bullet "One table lists eight moves…" is replaced with the actual don't-list: new credit, a financed car or furniture, an unannounced job change, undocumented cash deposits, co-signing.
- **ECOA nuance:** "That covers a pregnancy…" became "That includes your religion and any plans to have children". A pregnancy-related leave can affect income, which FAQ 3 explains, so the opening no longer lumps the two together.
- **Regulation B confirmed:**
  - §1002.5(d)(3) bars questions on birth control and on bearing or rearing children; questions on dependents' number, ages and costs are allowed. (The brief cited (d)(4).)
  - §1002.6(b)(3) bars assumptions about childbearing.
  - The 2026 final rule (published April 22, 2026, effective July 21, 2026) amended §§1002.4(b), 1002.6(a), 1002.8 and 1002.15, not the provisions the post relies on.
- **Statute and Guide sections confirmed:**
  - 18 U.S.C. §1014: "mortgage lending business" and the $1,000,000 / 30-year penalty.
  - URLA: the 7-year declarations and the optional demographic section.
  - Fannie Mae B3-6-05 (more than 10 months), B3-4.3-04 (gift letter), B3-4.2-02 (50% large-deposit test), B3-3.3-09 (temporary leave) and 12 CFR 1026.19(e)(3)(iv).
  - Treasury's March 1 delinquency date.
  - All 9 inline `[VERIFY]` tags and comments removed.
- **Module:**
  - Each button now carries its own reducer: "No application required" for the readiness review, "No credit pull to talk" for the talk button.
  - "eight-question" became "8-question", confirmed on `/purchase/homebuyer-game-plan/` ("Question 1 of 8").
- **Cross-links:** post 1 publishes in W2, so it is now linked in the first-call section. The bankruptcy post (W8) stays a dated comment.
- **Voice and layout:**
  - Samantha's later mention uses "Samantha" (guide §3.5).
  - The end-block reducer is on the button line.
  - The disclosure moved above Sources.
  - The editor notes are updated.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 87 | 93 | 88 | 92 | 86 | 90 | 89 | 92 | 92 | **90** | A | — |

- **Intent & H1, 87 (B):** the H1 carries the exact primary query and its honest counterpart ("and what you must share"). It has no place name; Michigan carries in the body.
- **Headings, 93 (A):** 10 H2s, 8 of them question-led, cover tell, can't ask, must share, omissions, don't do, changes, explain, and the first call. They read as a table of contents.
- **ATF answer, 88 (B):**
  - The 60-word answer leads with the law ("nothing material to hide", federal crime) and adds a Michigan specific (Friend of the Court).
  - It names what need not be discussed and the real risk (before closing).
- **CTA, 92 (A):** the readiness review is first after the first answer, with Talk with Samantha second, each with its correct reducer. The end block uses the brief's lead line. No apply CTA.
- **Title & meta, 86 (B):** the title is exactly 60 characters with the keyword first. The meta (154) is honest and specific, with no brand or Michigan detail.
- **Internal linking, 90 (A):**
  - The readiness CTA is in the first 30%.
  - 9 contextual guide links, including the underwriting letter-of-explanation guide (owns "letter of explanation"), land contract, gift funds, closing, and post 1.
  - The hub is linked through the breadcrumb only.
- **E-E-A-T, 89 (B):**
  - Primary legal and agency sources for every rule (statute, Regulation B, URLA, Fannie Mae, Treasury), with "This summary is not legal advice" and the Equal Housing Opportunity line.
  - No Align research applies here, and the quote is still a placeholder.
- **AI-ready, 92 (A):**
  - Every question H2 opens with a 43–59-word answer, and the post has two scannable tables.
  - FAQ = FAQPage. The PAA questions are answered honestly, which is the citation angle.
- **Accuracy & compliance, 92 (A):**
  - All legal and agency claims are confirmed and the D6 claim is removed.
  - No rates; the protected-class terms appear only as legal bases.
  - The only open item is counsel's view on "30 years" (a prison term).

### Remaining `[VERIFY]`
None.

**Link-check on publish day:**
- CFPB Regulation B pages (1002, 1002.5, en-355);
- the Fannie Mae URLA page;
- B3-6-05, B3-4.3-04, B3-3.3-09 and B3-4.2-02;
- MiChildSupport;
- the Treasury PRE and foreclosure-process pages;
- GovInfo §1014.

### Counsel items
- **"30 years" in FAQ 6** is the prison term under 18 U.S.C. §1014. Counsel to confirm it does not read as a repayment-period trigger term.
- **Regulation B summary** (prohibited bases, inquiry limits, optional demographic questions) is written as education with a not-legal-advice line. Counsel may want to review it, given the 2026 Regulation B amendments, although none of the cited provisions changed.

### Samantha quote needed
- Why she wants to hear about the complicated part of a file on the first call. Do not reuse the stock "Mine is complicated" quote.

---

## 4. Can you get a mortgage at 60, 70 or 80?

### Changes made
- **Stale HUD link replaced:** the HECM link now points to HUD's current page, `/hud-partners/single-family-hecmhome`. The old `/program_offices/…/hecmabou` path predates HUD's 2025 site reorganization. The minimum age of 62 and HUD-approved counseling are confirmed.
- **Poverty exemption corrected:** "Forms 5737 and 5739" became "apply each year, on Treasury Form 5737, to the local assessor or board of review…under local guidelines". Form 5737 is now the combined "Application and Affirmation" (Rev. 10-25), and a 2026 local notice says Form 5739 may no longer be used for unchanged circumstances.
- **Senior-relevant Fannie Mae fact added (B3-3.4-06, 03/04/2026):**
  - The employment-related assets rule applies only to a purchase or a limited cash-out refinance.
  - Fannie Mae allows a higher loan-to-value limit when the asset owner is 62 or older at closing. "Loan-to-value" is defined on first use.
  - The percentages were left out on purpose, to keep down-payment trigger terms out of the post.
- **Income table:**
  - The Social Security "another person's record" rule now reads "3 years from the application date" (B3-3.4-15, 10/07/2026). Annuities and retirement-account withdrawals stay "from the note date" (B3-3.4-03).
  - The Guide sections are confirmed current after SEL-2026-02 and are now linked in the table's source line, the Sources list and the JSON-LD citations.
  - The visible `[EDITOR]` note is removed.
- **Michigan relief, other wording:**
  - The tax credit's limits now read "household income and taxable value limits".
  - The summer deferment is confirmed through Waterford Township and City of Southfield treasurer pages (Treasury Form 471, MCL 211.51): age 62 or older, household income of $40,000 or less, deferral to February 14.
  - The larger credit share at 65 or older is confirmed.
- **Style:**
  - Numerals: "3 years" in the answer block and FAQ 5, with the schema updated to match.
  - The visible breadcrumb text line is removed (the BreadcrumbList schema covers it).
  - Backtick-wrapped tags are normalized.
  - The D1 note and the not-yet-live links (SSI post W8, tax credit post W7) moved into dated HTML comments, so no editor tag renders on the page.
- **Consistency:**
  - MCL links use `www.legislature.mi.gov`, the host on 362 of 388 existing site links.
  - The plan button carries "No application required".
  - The disclosure and F7 lines moved above Sources, and `publisher` is reduced to the `@id`.
  - 11 `[VERIFY]` tags removed after confirmation.
- **Fair-housing and ECOA read:**
  - The age language is neutral and rights-based ("older homebuyers", "people over 60"), as the brief asks.
  - Nothing implies a limit by age, the post shows no images of people, and it makes no "best option" claims.
  - Reverse mortgages get one neutral sentence and a HUD link (D1).

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | E-E-A-T | AI-ready | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 86 | 92 | 88 | 92 | 87 | 89 | 90 | 93 | 89 | **90** | A | — |

- **Intent & H1, 86 (B):** the H1 answers the age PAA and names retirement income. It omits "Social Security", from the primary query, and Michigan, which carries in the body.
- **Headings, 92 (A):** 10 H2s, 8 of them question-led, cover the law, the 30-year question, income, savings, options, the downsizing tax and relief, and paying off the loan. No label headings.
- **ATF answer, 88 (B):**
  - The 57-word answer opens "Yes" and gives the rule (federal law), who it is for (60, 70 or 80), the income that counts and a Michigan specific.
  - 4 takeaways follow.
- **CTA, 92 (A):** Talk with Samantha is primary after the income section, with "Plan my buy-before-you-sell move" second, each with its correct reducer. A talk end block, and no apply CTA.
- **Title & meta, 87 (B):**
  - The title (57) carries the age questions and "Senior Home Loans".
  - The meta (159) gives the ECOA hook and the content.
  - The primary keyword's "Social Security" appears only in the meta.
- **Internal linking, 89 (B):**
  - The buy-before-you-sell money page is in the first 30%.
  - Also linked: the asset-based product page, two tools, the taxable value and PRE guides, bridge loans, aging in place and the 15- vs. 30-year guide.
  - Two sprint links are held until live.
- **E-E-A-T, 90 (A):**
  - 12 Tier 1–2 sources (Regulation B, Fannie Mae, HUD, MCL, Treasury), each linked.
  - Align's Uncapping Study is cited, with the full identity and disclosure lines plus the F7 line.
  - The quote is still a placeholder.
- **AI-ready, 93 (A):** every question H2 opens with a 51–58-word answer. The income table and the taxes-only example are quotable, the FAQ equals the schema, and the speakable classes are marked.
- **Accuracy & compliance, 89 (B):**
  - Regulation B, the Fannie Mae sections, HECM and the three Michigan relief programs are confirmed, and the Form 5739 and HECM-link errors are fixed.
  - The open item is the D7 term-name ruling on "30-year" in the H2, the answer, FAQ 1 and an anchor, flagged `[COMPLIANCE REVIEW]`.

### Remaining `[VERIFY]`
None.

**Link-check on publish day:**
- the new Fannie Mae `b3-3.1-01/general-income-information` URL. Its section title is confirmed, but the URL path was not seen in search results.
- the HUD HECM and handbook hub pages;
- CFPB 1002.6;
- MCL 211.27a and 211.51;
- the Treasury tax credit page and the poverty fact sheet.

### Counsel items
- **C1 (D7):** "30-year" and "15-year" as term references.
  - Where: the H2 "Can you get a 30-year mortgage at 70 or 75?", the opening answer, FAQ 1 and the anchor "15-year vs. 30-year mortgage".
  - Why they stay: they are kept as described rules in a Learn guide with no apply CTA, and flagged `[COMPLIANCE REVIEW]`.
- **ECOA statements:** "cannot turn you down or limit your loan term because you are older". The official commentary lets a creditor weigh time to retirement when judging whether income will last, which the post states ("it may weigh how long it will last"). Counsel to confirm the phrasing.
- **"Senior Home Loans" in the title** (from the brief) could read as a special product. Owner and counsel to confirm. A fallback is "Can You Get a Mortgage at 60, 70 or 80? Michigan Guide" (55).
- **D1 (owner):** keep the reverse-mortgage guide unlinked until Align confirms it brokers HECMs.

### Samantha quote needed
- How she talks through carrying a mortgage into retirement. No stock quote fits this topic.

---

## Group summary

**Scores (final, after edits):**

| Post | Overall | Rubric bands |
|---|---|---|
| 1 Preapproval | 90 (A) | three aspects at 86–88, the rest 90+ |
| 2 Income | 91 (A) | highest AI-ready (95); A&C 86 pending counsel |
| 3 What not to tell | 90 (A) | strongest A&C (92) |
| 4 Seniors | 90 (A) | A&C 89 pending D7 |

No gates apply.

**Before and after, Accuracy & compliance (as handed over vs. now):**

| Post | Before | After | Main reason for the "before" score |
|---|---|---|---|
| 1 | about 80 | 90 | moved Fannie Mae section; inaccurate self-employed row; payment-quote claim |
| 2 | about 70 | 86 | F16 wording in two table notes |
| 3 | about 75 | 92 | D6 claim; "one PRE" |
| 4 | about 80 | 89 | stale HECM link; outdated poverty form; visible editor tags |

**`[VERIFY]` flags:** 40 fact flags across the four drafts (14, 7, 11 and 8). **39 resolved, 1 remaining:** post 1, Michigan purchase-agreement financing deadline (table row and FAQ 6).

**Placeholders that stay:**
- 4 `[NEEDS SAMANTHA QUOTE]`, one per post.
- 4 inline `[COMPLIANCE REVIEW]` tags (3 in post 2's tables, 1 in post 4's body), plus the counsel flags listed in the front matter of posts 2, 3 and 4.
- 1 D1 note in post 4, as an HTML comment.

**Key issues found:**
1. **Fannie Mae renumbering (SEL-2026-02, March 4, 2026).** Two posts cited moved sections: employment documentation (B3-3.1-02 → B3-3.2-01) and verbal VOE (B3-3.1-07 → B3-3.1-04). Other blog groups should search their drafts for `b3-3.1-0` links.
2. **One D6 claim** ("Samantha handles each of her loans herself") in new copy, now removed.
3. **One F16 breach** ("half the price") in two table notes, now fixed.
4. **Link scheduling:** posts 1, 3 and 4 linked sprint posts that publish later and would have 404'd. Each is now a dated HTML comment: "LINK ONCE LIVE (W#)".
5. **Stale government URLs** after HUD's 2025 reorganization: the HECM page and the 4000.1 PDF.

**Owner and cross-team items:**
- **Align's checklist PDF:** its QR code and link still point to `/purchase/mortgage-readiness-review/`, which the purchase team is redirecting. Update the PDF to `/purchase/homebuyer-game-plan/#readiness`.
- **Conflict for the consistency team:** the brand review's §5 table lists "Take the readiness review → `/purchase/mortgage-readiness-review/#readiness`", but README §7 says never to link that URL. Posts 1 and 3 use the game plan URL. The §5 table should be corrected.
- **Publish-day tasks:**
  - Set the Updated date, datePublished and dateModified to the publish date.
  - Add the inbound links in each brief's §8.
  - Add each held link when its target goes live.
  - Run Rank Math IndexNow and GSC inspection.
  - Link-check the Tier 1 URLs listed above.
- **Sequencing:** the MSHDA post must go live before or with post 1 in W2.
- **Cannibalization:**
  - Post 2 depends on the purchase team shortening the `/purchase/budget-review/` income H2.
  - Posts 1, 3 and 4 each answer an owned topic in two sentences with a link: preapproval importance and the mortgage process (post 1); the letter of explanation in `/learn/mortgage-underwriting/` (post 3); asset depletion and reverse mortgages (post 4).

**Working files (scratchpad, not deliverables):** `qa.py` (screens and structure checks), `links.py`, `baseline.txt`, `final.txt` and `orig/` (pre-edit copies of the four drafts), under `/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/e3/`.
- 2026-11-17 orchestrator: corrected summer deferment date to February 15 per MCL 211.51 (flagged by editor E2).
