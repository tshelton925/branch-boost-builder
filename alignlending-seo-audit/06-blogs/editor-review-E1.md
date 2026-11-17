# Editor review, group E1 (government programs)

**Editor:** Consistency team, blog editor E1 · **Date:** 2026-11-17 · **Status of all four drafts:** "Edited draft — subject to Align approval"
**Standards applied:** `00-project/KNOWN-CORRECTIONS.md` (wins), `brand-voice-and-compliance-guide.md`, `scoring-rubric.md`, `06-blogs/briefs/_README.md`, `09-consistency/brand-compliance-review.md` §5 (CTA vocabulary), `09-consistency/query-ownership-map.csv` and `seo-ai-fixes.csv` (ownership rulings).

| # | Draft (edited in place) | Publish week | Words (brief range) | Title / meta chars | Open `[VERIFY]` | Final score |
|---|---|---|---|---|---|---|
| 1 | `06-blogs/drafts/mshda-mi-home-loan.md` | W2 | 2,297 (1,800–2,300) | 56 / 156 | 0 | **91 (A)** |
| 2 | `06-blogs/drafts/buying-a-home-on-ssi-or-disability-income.md` | W8 | 2,198 (1,700–2,200) | 53 / 156 | 1 tag (2 SSA facts) | **90 (A)** |
| 3 | `06-blogs/drafts/usda-loan-requirements.md` (re-scoped: USDA credit score and DTI rules) | W4 | 2,297 (1,800–2,300) | 51 / 154 | 2 | **89 (B)** |
| 4 | `06-blogs/drafts/va-benefits-disabled-veterans-michigan.md` | W3 | 2,227 (1,800–2,300) | 59 / 160 | 1 | **91 (A)** |

**How the checks were run.**
- **Word count:** E3's method, applied the same way to all four and recorded in each file's `word_count`. It counts the visible body, including the FAQ and the disclosure lines. It leaves out the front matter, the Sources list, HTML comments, editor tags and JSON-LD. Three drafts arrived over their caps on this method (MSHDA 2,369, then 2,522 after corrections; USDA 2,422 after corrections) and were cut back without dropping a brief-required element.
- **Screens:** E3's script, run on every draft after editing. It checked banned and hype words, rate and APR patterns, Reg Z trigger patterns, fair-housing and ECOA terms, F8/D6 claims, NAMB, time-to-close, exclamation points, F17 freshness claims, the required fixed strings and CTA label/destination/reducer pairs.
- **Structure:** the same script checked answer-block lengths, JSON-LD parsing, that the visible FAQ matches the FAQPage text word for word (after rendering links to text) and that the Sources list matches the `citation` array and the order of body links. The JSON-LD for all four was regenerated from the visible text by one script (`build.py`), so the schema cannot drift from the page.
- **Internal links:** checked against `page_summary.csv`. Links to sprint posts that are not live yet are dated HTML comments, or live links with a publish-day confirm comment when the target publishes earlier.
- **Align figures:** checked against the crawled `/research/` pages (2026-11-15).
- **External facts, read directly on 2026-11-17:** michigan.gov (MSHDA, Treasury, MiABLE, MVAA, STC), www.legislature.mi.gov, consumerfinance.gov and files.consumerfinance.gov, selling-guide.fanniemae.com, hud.gov (including the 4000.1 update PDF of 8/12/2026), va.gov and www.benefits.va.gov, and eCFR through its renderer API (7 CFR 3550 and 3555, 20 CFR 416, 24 CFR 5).
- **Not reachable, each retried after 30+ seconds:** rd.usda.gov and ssa.gov (Akamai 403 from the origin), plus irs.gov, huduser.gov, news.va.gov, KnowVA, detroitmi.gov and federalregister.gov (proxy-refused). Facts that rest only on those hosts keep a precise `[VERIFY]` or were reworded so the post no longer asserts them. eCFR replaced rd.usda.gov and ssa.gov as the primary source wherever the regulation states the rule.
- **Result:** all four pass every structural check. Every question H2 opens with a 44–60-word answer, and every FAQ matches its JSON-LD exactly.

**Screen false positives (read in context and kept):**
- "HUD-approved housing counseling agency" (MSHDA FAQ 7) and "Find a housing counselor" (Sources). This is HUD's own service and the CFPB page title, not a claim about Align (the same FP as brand review R01).
- USDA: "modest, decent, safe, and sanitary" is the regulation's dwelling standard (7 CFR 3555.151(d)). It is now in quotation marks and attributed to USDA, so it cannot read as Align describing a place. "Safe" also describes electrical and water systems, not a neighborhood.
- USDA: "$6,500 a month" and "$360 a month" are income and tax arithmetic, not payments. Counsel item U-1 below.
- VA: "VA benefits counselors" is MVAA's own term for the people its county search lists.

---

## 1. MSHDA MI Home Loan

### Changes made
- **Every MSHDA figure checked against MSHDA's own pages and the June 1, 2026 limits PDF** (read in full).
  - Confirmed: $566,355 after June 1, 2026, statewide; 640 minimum; the three-year first-time rule; MI 10K terms; First-Generation DPA closed ("all funds have been exhausted... the waitlist is not available").
  - Confirmed in the PDF: the Wayne and Macomb rows the writer took from secondary sites.
  - Added from the PDF: the targeted rows for Wayne (Detroit, Dearborn and 8 more cities) and Macomb (Harrison Twp., Mt. Clemens). The targeted-area H3 now names Detroit, which matters for the post's biggest market.
- **New fact that changes advice:** MSHDA's lender requirements page offers MI 10K "on FHA, RD and Conventional loans", not VA. This is added to the MI 10K section and FAQ 6. The same page confirms the four loan types and the commitment period (90 days existing, 180 new construction), which replaces the reservation `[VERIFY]` in apply step 5.
- **Price-limit history confirmed:**
  - $224,500 was the flat cap set in 2009. HB 5032 (MSHDA release, Dec 20, 2024) indexed it to 90% of the IRS maximum sales price.
  - $544,233 applied "after May 1, 2025" (First-Gen and MCC pages).
  - The indexing `[VERIFY]` is closed.
- **Accuracy fixes:**
  - The PRE affidavit was to be filed "with the Michigan Department of Treasury". Form 2368 says it "must be filed with the assessor for the city or township". Corrected.
  - The MIHAF link (michigan.gov/mihaf) and MSHDA's MIHAF page both return 404. FAQ 7 now cites MSHDA's Nov 9, 2023 release: applications closed Dec 8, 2023, once funds were reserved.
  - "Low income" in FAQ 3 now cites 24 CFR 5.603 (huduser.gov is unreachable).
  - The lender list: MSHDA links the same list from both programs as "MI Home Loan - Mortgage Companies, Banks, and Credit Unions". The draft now says one list.
- **Removed, not asserted (no public MSHDA source):** the 660 manufactured-home minimum, the $20,000 liquid-asset row, the "every adult in the home" income definition and the Detroit DPA lien-order example. Each is an HTML-comment "optional add" for Align.
- **Duplicate FAQ dropped:** "What is the difference between a grant and down payment assistance?" is mapped to `/purchase/down-payment-assistance/` in `ai-answer-blocks.md`. MSHDA's version would duplicate the money page's FAQ (guide §8.5). The grant-versus-loan point stays in FAQs 4 and 5.
- **Structure and voice:**
  - The visible breadcrumb, the "editor note, remove before publishing" paragraph and the michigan.gov `[VERIFY]` paragraph are removed.
  - The D3 and F1 notes are now dated HTML comments.
  - The generic "Can MI 10K be combined" H3 is folded into one sentence.
  - The help paragraph now uses the claims-library line ("we compare your scenario across multiple wholesale lenders") in place of "Samantha compares it".
  - Two Oxford commas are removed.
- **CTA:** "No application required" is added beside "Get my first-time homebuyer plan". There is still no apply button (D3). The F2 line appears in the apply section and the end block, as briefed.
- **Links:** preapproval post (also W2) and USDA post (W4) are dated `LINK ONCE LIVE` comments. The USDA anchor follows the re-scope ("USDA credit score and DTI rules").
- **JSON-LD:** `publisher` is reduced to the `@id`, `about` is the MSHDA `GovernmentOrganization`, citations equal Sources (18), and the FAQ equals the schema (7).

### Final scorecard (learn article; Media N/A, no images in the draft; weights rescaled to 97)

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Media | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 90 | 92 | 88 | 92 | 87 | 89 | 94 | 90 | 95 | N/A | 93 | **91** | A | — |

- **Intent & H1, 90 (A):** "MSHDA MI Home Loan: who qualifies, the limits and how to apply in Michigan" leads with the primary query and names Michigan. At 74 characters it is over the ~70 top anchor.
- **Headings, 92 (A):** 10 H2s, 8 of them question-led, plus 3 question H3s. They cover each PAA (qualify, low income, $25,000, $7,500) and use no label headings.
- **ATF answer, 88 (B):**
  - The 59-word answer gives what it is, who it is for, the three limits with the 2026 figure, and the participating-lender route.
  - Four numeric takeaways follow. As usual for Learn, there is no "why Align".
- **CTA, 92 (A):** Talk with Samantha, with the plan link and correct reducers after the first answer, and an end block with the F2 line. No apply CTA anywhere (D3).
- **Title & meta, 87 (B):** the title (56) puts the keyword first with a specific hook. The meta (156) names the 2026 limits but carries no brand or proof.
- **Internal linking, 89 (B):**
  - The DPA money page is in the first 30%.
  - Also linked: the first-time plan, both research reports, two tools and four guides.
  - Two sprint links are held, and the hub is linked through the breadcrumb only.
- **External linking, 94 (A):** 18 deep Tier 1–2 links, 17 opened today. irs.gov is a publish-day click-check.
- **E-E-A-T, 90 (A):** byline, NMLS numbers, entity and broker lines, EHO disclosure, Sources with the policy link, and Align's HMDA and uncapping research cited by name. The quote is a placeholder.
- **AI-ready, 95 (A):** answers of 48–60 words, two dated tables with source lines, quotable figures ($566,355; $104,800; Dec 8, 2023), FAQ = FAQPage and an `about` entity.
- **Accuracy & compliance, 93 (A):** every figure is read from MSHDA or another primary source dated 2026, and F1/F2/F7/F12/F16 are in place. What remains is counsel's view on the comparison table and the MI 10K name (M-1, M-2).

### Remaining `[VERIFY]`
None.

**On publish day (W2):**
- Re-open MSHDA's First-Generation page (F1). If it has reopened, change the H3, the key takeaway and FAQ 4 together with the JSON-LD.
- Confirm the MI Home Loan page still shows $566,355 and the June 1, 2026 chart is still the current PDF.
- Click-check IRS Form 8396.
- Publish on or before the preapproval post (W2), which links here.

### Counsel items
- **M-1:** the "Three ways to finance a Michigan purchase" table describes down payments in words, as each agency's rule ("HUD's minimum down payment, set by credit score"). It has no percentages and no CTA beside it. It is flagged `[COMPLIANCE REVIEW]`.
- **M-2:** MSHDA describes MI 10K as interest-free. The post leaves the interest terms out under F13, noted in an HTML comment. "MI 10K" is a program name containing a dollar figure (the same question as E3's C-2b).
- **M-3:** "it can cost more over time than an open-market loan", from the brief, is a hedged comparison with no figure. Counsel may prefer "may cost more", or a pointer to compare Loan Estimates (already in the same answer).
- **D3 (owner):** the F2 line stays until Align confirms participating-lender access. MSHDA's lender page requires participating lenders to be licensed to service Michigan loans, so a broker would most likely reach MSHDA through a partner lender.

### Samantha quote needed
- When MSHDA assistance helps a buyer and when she tells them to skip it.

---

## 2. Buying a home on SSI or disability income in Michigan

### Changes made
- **Fannie Mae renumbering checked (SEL-2026-02 and SEL-2026-09).**
  - All four cited sections are current at the same URLs: B3-3.4-15 (10/07/2026), B3-3.4-09 (03/04/2026), B3-3.4-18 (10/07/2026) and B3-3.1-01 (10/07/2026).
  - The source line claimed "March 2026 versions" and now gives each section's date.
- **Income table rebuilt from the Guide text:**
  - SSI needs an award letter plus proof of receipt, and falls under the 3-year continuance rule. That rule needs no defined end date.
  - SSDI on your own record can be documented by an award letter, SSA-1099, tax return or proof of receipt.
  - Benefits from another person's record, or paid for a dependent, need 3 years.
  - LTD needs no continuance check unless there is reason to doubt it, and a scheduled review is not such a reason.
  - VA long-term disability benefits need no continuance check.
  - Workers' compensation has no Fannie Mae section, so that row now rests on B3-3.1-01's general rule.
  - Six inline `[VERIFY]` tags are closed.
- **Gross-up wording corrected:**
  - Fannie Mae allows 15% of Social Security as non-taxable without documents.
  - FHA (HUD 4000.1, revised 8/12/2026) allows "the greater of 15 percent or the appropriate tax rate" from the prior year, not "more when tax returns support it".
  - The worked example now says the $1,000 SSI benefit is "documented as non-taxable" before the 25% gross-up.
- **Dead links replaced:** the hudclips 4000.1 URL (404) is now HUD's 4000.1 hub, and `hud.gov/topics/fair_lending` (404) is now HUD's current Fair Housing rights page. That page lists "refusing to consider a mortgage applicant's disability-related income, such as SSI or SSDI" as discrimination. The line is added, a quotable fact for this query, and HUD's report page is linked.
- **SSI rules moved to eCFR (read today):** $2,000 / $3,000 unchanged since 1989 (416.1205); resources counted at the first moment of the month (416.1207); home excluded (416.1212); shelter paid by someone else counts as in-kind income (416.1130, FAQ 4).
- **MiABLE confirmed on michigan.gov:** age 46, housing as a qualified expense, the $20,000 limit for 2026 and the $100,000 SSI exclusion.
- **MSHDA:** the link now uses the canonical `/pathway-to-housing/` URL. Key to Own details are confirmed, including its work-income exception for people with disabilities.
- **Michigan tax help confirmed:**
  - MI-1040CR instructions: "disabled as defined under Social Security Guidelines 42 USC 416".
  - Treasury 2025 credit page: $165,400 and $71,500, plus the age-66 note.
  - STC Bulletin 17 of 2025: Form 5737 is now the "Application and Affirmation"; Form 4988 is for non-filers.
- **Links:** all five sprint links are live links. Each target (MSHDA W2, VA W3, USDA W4, seniors W5, homestead credit W7) publishes before this post (W8), and each has a publish-day confirm comment. "Getting a mortgage at 60, 70 or 80" is added from the brief's list. The USDA anchor follows the re-scope.
- **Voice and style:**
  - MSHDA is spelled out on first use (now in the takeaways), and SSA is defined before the table uses it.
  - The help paragraph gives the reader a step ("Bring your award letters…") and no process claim.
  - The module plan button now carries "No application required".
  - The JSON-LD `image` guess is removed (add it when the hero is uploaded).

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Media | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 86 | 92 | 89 | 92 | 85 | 90 | 92 | 90 | 93 | N/A | 88 | **90** | A | — |

- **Intent & H1, 86 (B):** "Buying a home on SSI or disability income in Michigan" matches the informational intent and names Michigan. The title repeats the H1 string, and the primary query's "requirements" wording sits only in the body.
- **Headings, 92 (A):** 10 H2s, 8 of them question-led, cover income, savings, programs, grants, rights, tax help and the home. FAQ H3s use the PAA wording.
- **ATF answer, 89 (B):** the 60-word answer opens "Yes" and covers the four benefit types, the legal protection and a Michigan specific (MiABLE). Four takeaways follow, three with numbers.
- **CTA, 92 (A):** the game plan and Talk with Samantha after the first answer, each with its correct reducer, and a talk end block. No apply CTA, and the worked example has no CTA beside it.
- **Title & meta, 85 (B):** the title (53) and meta (156) are specific (SSDI, SSI, VA, MiABLE). The title is identical to the H1, with no brand.
- **Internal linking, 90 (A):** the DPA money page is in the first 30%, with the game plan, renovation financing, 6 guides and 5 sprint posts in context.
- **External linking, 92 (A):** 24 Tier 1–2 deep links, 23 opened today. SSA's ABLE Spotlight could not be opened.
- **E-E-A-T, 90 (A):** full identity, disclosure, EHO and the extra "not affiliated with the Social Security Administration" line, with primary legal sources. No Align research applies, and the quote is a placeholder.
- **AI-ready, 93 (A):** answers of 44–60 words, a six-row income table with section dates, quotable HUD and Reg B facts, and FAQ = FAQPage.
- **Accuracy & compliance, 88 (B):** two dead government links and a mis-dated Guide citation are fixed, and the FHA gross-up is restated exactly. Two SSA facts still wait on ssa.gov.

### Remaining `[VERIFY]`
1. **One inline tag, savings section (two original flags merged).**
   - ssa.gov returned 403 to this session twice.
   - On SSA's ABLE Spotlight (`ssa.gov/ssi/spotlights/spot-able.html`, 2026 edition) and POMS SI 01130.740, confirm (a) ABLE eligibility for disability beginning before age 46 starts January 1, 2026, and (b) a housing withdrawal kept into the following month counts as a resource.
   - On SSA's "Understanding SSI – Resources" page or the Red Book, confirm (c) SSDI has no resource limit.
   - All three are consistent across search results quoting ssa.gov. MiABLE independently confirms age 46.

**On publish day (W8):**
- Confirm the five linked sprint posts are live.
- Re-open MSHDA's First-Generation page (F1) and Key to Own.
- Click-check SSA's Spotlight.

### Counsel items
- **S-1:** the gross-up example ($1,000 SSI counted as $1,250). It is income arithmetic with the F12 label and has no CTA beside it. Listed for completeness.
- **S-2:** the Regulation B / Fair Housing Act summary is written as education with the disclosure line. The cited provisions (1002.2(z), 1002.6(b)(5)) are unchanged by the 2026 Regulation B amendments (current text read today).

### Samantha quote needed
- What she wants buyers with disability income to know before they rule themselves out.

---

## 3. USDA credit score and DTI rules (`/learn/usda-loan-requirements/`)

### Changes made
- **Cannibalization fixed (re-scope).**
  - `query-ownership-map.csv` Q026 keeps "usda loan requirements / qualification" on `/learn/usda-loan-basics/`, which holds 1,410 impressions. Q029 and `seo-ai-fixes.csv` (blog-plan rank 7, P1) re-scope this post to credit score and DTI.
  - The draft still targeted the head term, and its first H2 copied basics' kept H2, "What are the requirements for a USDA loan?", word for word.
  - New title "USDA Credit Score and DTI Rules: What Lenders Check" (51), from the consistency fix.
  - New primary keyword "usda credit score and dti requirements" and a new meta (154).
  - New H1 "USDA credit score and DTI rules: what lenders check in Michigan".
  - First H2 renamed "What does a USDA lender check before approving the loan?". The breadcrumb name and the FAQ heading are updated too.
  - The merged sub-topics stay (second loan, co-signer, loan size), as the fix row says.
  - The slug is unchanged (other posts link it); see owner items.
- **Every rule re-based on 7 CFR part 3555**, read through the eCFR API today because rd.usda.gov blocked every request. 3555.151(a)–(j), .152, .101, .103, .107, .201, .202, .205 and .208, and 3550.63, are cited in the table and the text. 13 of 16 `[VERIFY]` flags closed this way, and a 14th (the `#usda-check` anchor) through the crawl.
- **Four errors corrected:**
  - **Manufactured homes:** the draft said existing units "generally cannot" qualify. 3555.208(b)(3)(iv) allows an existing unit built to HUD's code, on a permanent foundation, never moved and built after a USDA-set date.
  - **Second USDA loan:** "no other adequate home nearby" and a "job move" exception came from lender summaries. The rule is 3555.151(e): no other USDA loan at closing, the current home no longer meets the household's needs, at most one other home kept, and qualified to carry both.
  - **Household income:** the draft's deduction "for a household member 62 or older" is the elderly-family deduction (head or spouse 62+). The draft also omitted the deductions for dependents with a disability and for full-time students, and the exclusion of under-18 earnings (3555.152).
  - **FAQ 7:** "Closing costs… are due either way" was wrong. 3555.101(b)(6) lets them be financed within the 3555.103 cap.
- **Unsourced lines removed:** "sheds and workshops are fine", "USDA sends no inspector" and the CAIVRS mention. The inspection answer now follows 3555.202(b). The condo answer follows 3555.205.
- **Guarantee fee:** the post states no fee percentages; the fee page owns them. The two fee mentions are confirmed against 3555.107(g)–(h) and 3555.103:
  - the annual fee sits inside the 29% ratio;
  - the loan can reach the appraised value plus the upfront fee.
- **Fee link repointed:** "USDA's current fees" linked `/learn/recent-changes-to-usda-loan-programs/`. That page carries "payment assistance can cut the effective rate to as low as 1%" (F13), and the brief gives fees to the product page and tool. It now links `/product-loans/usda-loans/` ("how USDA's upfront and annual fees work").
- **Links trimmed:** rd.usda.gov chapter PDFs at guessed paths and the eligibility map link are removed (the tool owns address checks). The `#usda-check` anchor is confirmed in the crawl.
- **Length and duplication:** FAQ "Why would a USDA loan get denied?" duplicated the "What disqualifies you" answer almost verbatim and is dropped (6 FAQs). The post was trimmed from 2,422 to 2,297 words.
- **CTA and compliance:**
  - The tool button now carries "Every tool is free and needs no signup".
  - The worked example label is now the exact F12 string (it was italic).
  - Both `[COMPLIANCE REVIEW]` notes stay.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Media | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 85 | 92 | 88 | 93 | 88 | 91 | 88 | 89 | 93 | N/A | 86 | **89** | B | — |

- **Intent & H1, 85 (B):** the H1 now matches the owned query set (credit score, DTI) and names Michigan, and no longer competes with basics. The slug still reads `usda-loan-requirements`.
- **Headings, 92 (A):** 11 H2s, 9 of them question-led, plus 5 question H3s covering each GSC and PAA query (550 score, partner, rental, inspection, land). No basics H2 is duplicated.
- **ATF answer, 88 (B):** the 57-word answer names who it is for (Michigan buyers using a Guaranteed loan) and the five lender checks with numbers. Five takeaways follow.
- **CTA, 93 (A):** the tool button and Talk with Samantha after the first answer, each with its own reducer, a talk end block, and no CTA near the example or FAQ 7.
- **Title & meta, 88 (B):** the title (51) is the consistency team's keyword-first wording. The meta (154) is specific (29%/41%, Michigan tax) with no brand.
- **Internal linking, 91 (A):**
  - The tool is in the first 30%.
  - Also linked: the product page, basics twice (program and Direct-vs-Guaranteed handoffs), the property tax tool, research and 7 guides.
  - The F13 link is removed.
- **External linking, 88 (B):** 9 Tier 1 sources, 8 of them eCFR sections read today. The handbook index is unverified (rd.usda.gov blocked), and chapter deep links were dropped instead of guessed.
- **E-E-A-T, 89 (B):** full identity lines, Samantha's entity line, regulation citations and the Uncapping Study. The quote is a placeholder.
- **AI-ready, 93 (A):** answers of 50–60 words; a nine-row requirements table with section numbers; quotable rules (29/41, 680, no dollar cap); FAQ = FAQPage; a USDA RD `about` entity.
- **Accuracy & compliance, 86 (B):** four substantive errors are fixed and every rule is tied to the current regulation. Two handbook-only facts remain flagged, and a pending Federal Register amendment needs a read.

### Remaining `[VERIFY]`
1. **Credit section and FAQ 1: HB-1-3555 Chapter 10** (`rd.usda.gov/files/3555-1chapter10.pdf`).
   - Confirm that 640 is the score at which GUS can return an Accept.
   - Confirm whether the current chapter says manually underwritten loans with scores of 580 or below "should not be approved". That wording appears in 2024 handbook text quoted by search results.
   - If it does, add the rule to the credit answer, the 550 H3 and FAQ 1 (and the JSON-LD) together. The post now attributes "no minimum score" to the regulation only, so it stays true either way.
2. **Ratio section: HB-1-3555 Chapter 11, rev. 11-25-25** (`rd.usda.gov/files/3555-1chapter11.pdf`). Confirm the manual-waiver caps of 32% PITI and 44% total debt with a 680 score. Search results quoting the chapter show 32/44, but a November 2024 USDA policy deck mentions 34%.

**On publish day (W4):**
- Read **91 FR 68028 (Oct 29, 2026)**. eCFR flags it as amending 7 CFR 3555.10 and 3555.201 (rural-area definitions and site rules); federalregister.gov was unreachable. Adjust the Address row if the rural-area rule changed.
- Click-check the HB-1-3555 index.

### Counsel items
- **U-1:** the Michigan worked example ("29% housing limit is about $1,885", "$360 a month" of tax). These are ratio and tax amounts, not payments. The exact F12 label is in place and there is no apply CTA on the page. This is the same question as E3's C-2a.
- **U-2:** FAQ 7 states USDA's no-down-payment rule, as the agency's rule with 7 CFR 3555.103 linked and no CTA nearby. "No down payment" is a conservative trigger term (C2).

### Samantha quote needed
- The USDA requirement Michigan buyers most often miss.

---

## 4. VA home loan and property tax benefits for disabled veterans in Michigan

### Changes made
- **VA facts read on va.gov** (funding fee page, last updated October 5, 2026):
  - the five exemption groups;
  - the refund test (award effective date before closing);
  - no refund for a proposed or memorandum rating issued after closing;
  - regional loan center 877-827-3702;
  - covers purchases and refinances;
  - no monthly mortgage insurance.
  - The loan-limits page confirms "no loan limit" with full entitlement (when the appraisal supports the price) and no down payment "in most cases".
  - VA's COE quick reference (www.benefits.va.gov) confirms the COE shows a funding fee exemption status, so "Your Certificate of Eligibility shows your funding fee status."
- **Refund example:** VA News is unreachable, so the June 15 / June 1 / July 1 example is now Align's own illustration of VA's stated rule. The VA News link is removed.
- **Michigan law read in full:** MCL 211.7b, the STC FAQ (updated June 13, 2024), Form 5107 (Rev. 03-26) and Treasury's exemption page. Every Michigan claim in the draft checked out, including the 45-day Form 6054 rescission, the Dec 30 postmark and the assessor's sole authority.
- **Land contracts:** the `[VERIFY]` is resolved with the statute's "legal title" test plus Align's land-contract guide (the seller keeps the deed). The guide is now linked.
- **Name fix:** VA calls its grant the "Special Home Adaptation (SHA)" grant. The draft used the STC's "special housing adaptation"; the table and FAQ 3 now follow VA.
- **Lender escrow practice:** no source exists, so the answer now tells the reader to ask the lender how taxes are handled in escrow and DTI until the exemption is granted.
- **MVAA:** 1-800-MICH-VET (1-800-642-4838), the county search, and choice of any listed officer or VA benefits counselor are confirmed. "Accredited" is removed for MVAA officers (not stated there). The "no cost" `[VERIFY]` is closed because the post makes no cost claim.
- **Apply button removed:** the writer added "Start my application" to the end block "per the coordinator's checklist". The brief's end block is talk only, and the button sat directly above the FAQ that states VA's down payment rule (guide §7.2 rule 3).
- **F8 screen hit:** "Samantha checks your Certificate of Eligibility… before your Loan Estimate is issued [Align to confirm wording]" was a process claim. It is held in an HTML comment for Align, and the paragraph gives the reader the step instead.
- **PRE line:** the affidavit is filed with the city or township assessor (Form 2368).
- **Layout:**
  - The disclosure and F7 lines are now above Sources.
  - "No application required" is beside "Plan my VA purchase".
  - The MCL link is normalized to `www.legislature.mi.gov`.
  - The KnowVA chapter 4 link is updated to the 2026-08-25 version seen in search results (click-check).
  - Sprint links (SSI W8, homestead credit W7, entitlement backlog) are dated comments.

### Final scorecard

| Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Media | Accuracy & compliance | Overall | Grade | Gate |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 89 | 93 | 89 | 93 | 88 | 90 | 91 | 90 | 94 | N/A | 90 | **91** | A | — |

- **Intent & H1, 89 (B):** the H1 covers both halves of the intent (VA loan and Michigan property tax) and names Michigan. At 72 characters it is slightly long.
- **Headings, 93 (A):** 10 H2s, 8 of them question-led, plus 3 question H3s on refunds, coverage and trusts or land contracts. The H2s follow the reader's decision order.
- **ATF answer, 89 (B):** the 59-word answer names who it is for, both benefits with their tests, and "Both need paperwork". Four takeaways follow, including the 50.5% figure.
- **CTA, 93 (A):** Plan my VA purchase and Talk with Samantha with correct reducers, a funding-fee tool text link, and a talk end block. No apply CTA near the down-payment FAQ.
- **Title & meta, 88 (B):** the title (59) and meta (160) are specific (funding fee, Form 5107), with no brand.
- **Internal linking, 90 (A):** the VA product page is in the first 30%, with the plan page, the fee tool, research, the land contract guide and 6 VA and tax guides. Three links are held.
- **External linking, 91 (A):** 11 Tier 1 deep links, 10 opened today. KnowVA could not be opened.
- **E-E-A-T, 90 (A):** full identity lines, the "Confirm eligibility with your local assessor and the VA" line from the brief, statute and STC sources, and the Uncapping Study. The quote is a placeholder.
- **AI-ready, 94 (A):** answers of 45–56 words, three tables (benefits, Michigan rules, tax example), quotable dated rules, and FAQ = FAQPage.
- **Accuracy & compliance, 90 (A):** everything is primary-verified except VA's gross-up rule. The apply-beside-trigger-term issue and the F8-style claim are removed.

### Remaining `[VERIFY]`
1. **Credit and income section: VA Pamphlet 26-7, chapter 4.** It is on KnowVA, which this session could not reach; benefits.va.gov now redirects there.
   - Confirm that verified non-taxable income, such as disability compensation, may be grossed up for the debt-to-income ratio but not for residual income.
   - Click-check the updated chapter link.

**On publish day (W3):** click-check KnowVA, and re-check the VA funding fee page's "last updated" date (cited as October 5, 2026).

### Counsel items
- **V-1:** FAQ 7 states VA's down payment rule, as VA's rule with VA linked and no CTA in the block (C2).
- **V-2:** the tax example shows $5,040 a year without the exemption and $0 with it. These are tax amounts only, with the F12 label and no CTA.

### Samantha quote needed
- What veterans most often miss about the funding fee exemption or the Michigan exemption when they buy. Do not reuse the stock "You earned the benefit" quote from `/samantha-shelton/`, as the brief says.

---

## Group summary

**Scores (final, after edits):**

| Post | Overall | 9-aspect score, comparable with E3 (Ext. links dropped) | Rubric bands |
|---|---|---|---|
| 1 MSHDA | 91 (A) | 91 | strongest A&C (93) and AI-ready (95) |
| 2 SSI / disability income | 90 (A) | 90 | A&C 88 pending two SSA facts |
| 3 USDA credit and DTI | 89 (B) | 90 | A&C 86 pending two handbook facts; slug decision open |
| 4 VA disabled veterans | 91 (A) | 91 | A&C 90 pending one VA handbook fact |

No gates apply.

**Before and after, Accuracy & compliance (as handed over vs. now):**

| Post | Before | After | Main reason for the "before" score |
|---|---|---|---|
| 1 | about 72 | 93 | PRE filed "with Treasury"; dead MIHAF link; unsourced 660, asset and income claims; MI 10K-with-VA gap; visible editor tags |
| 2 | about 76 | 88 | two 404 government links; wrong Guide dates; inexact FHA gross-up; SSI continuance unverified |
| 3 | about 64 | 86 | cannibalized basics (same head term and same H2); wrong manufactured-home rule; second-loan rule from lender summaries; F13 page linked for fees |
| 4 | about 80 | 90 | apply CTA beside the down-payment FAQ; unconfirmed COE process claim; SHA name; unsourced escrow practice |

**`[VERIFY]` flags:** 58 fact flags across the four drafts as handed over (MSHDA 16, SSI 18, USDA 16, VA 8).
- **Resolved: 53.** 41 were confirmed or corrected against a primary source read today. 12 were closed by rewording or removing a claim with no public source (MSHDA 5, SSI 3, USDA 2, VA 2).
- **Remaining: 5**, in 4 inline tags:
  - SSI: the ABLE age-46 date, the housing-withdrawal timing and SSDI's lack of a resource limit, in one tag (ssa.gov blocked);
  - USDA: GUS 640 and the 580 question (HB ch. 10);
  - USDA: the 32/44 waiver caps (HB ch. 11);
  - VA: the chapter 4 gross-up.
  - All are reachable only on hosts that refused this session.

**Placeholders that stay:**
- 4 `[NEEDS SAMANTHA QUOTE]`, one per post.
- 5 `[COMPLIANCE REVIEW]` notes: MSHDA 2 (table inline, MI 10K in a comment), USDA 2 (in comments), VA 1 (in a comment).
- D3 and "Align to confirm" notes as HTML comments.

**Key issues found:**
1. **Cannibalization:** the USDA draft targeted the basics page's head term and copied its kept H2. It was re-scoped per the consistency team's ownership ruling.
2. **Statements contradicted by the primary rule:**
   - existing manufactured homes are not barred from USDA;
   - MSHDA's PRE affidavit goes to the assessor, not Treasury;
   - MI 10K does not pair with VA;
   - USDA closing costs can be financed;
   - FHA's gross-up is "the greater of 15% or the tax rate".
3. **Dead government URLs:**
   - michigan.gov/mihaf and MSHDA's MIHAF page;
   - HUD's hudclips 4000.1 path;
   - hud.gov/topics/fair_lending.
   - Other groups should search their drafts for these.
4. **Fannie Mae renumbering:** none of this group's citations moved (B3-3.4-15/-09/-18, B3-3.1-01, B5-6-01 are all current), but one source line carried wrong section dates.
5. **Writer-added CTA:** an apply button beside a trigger-term FAQ (VA), against the brief.

**Owner and cross-team items:**
- **USDA slug (owner/strategist):** the post now targets credit score and DTI, but its URL is `/learn/usda-loan-requirements/`.
  - Either keep it (no redirect needed; sibling drafts already link it) or change it before first publish, never after.
  - If it changes, update the links in the MSHDA comment, the SSI post and E3's income post.
- **E3's income post** (`income-needed-to-buy-a-house-michigan.md`, line 183) links this post with the anchor "USDA loan requirements". Under the re-scope it should read "USDA credit score and DTI rules", so it does not point the basics-owned head term at this post.
- **USDA brief inbound anchors** (publish-day list), changed for the re-scope:
  - basics: "USDA credit score and DTI rules" in place of "USDA loan requirements: credit, DTI and property rules";
  - hub list: "USDA credit score and DTI rules";
  - `/learn/government-backed-loans/`: "USDA credit and DTI rules".
  - The other five inbound anchors in the brief stand.
- **F13 on an existing page:** `/learn/recent-changes-to-usda-loan-programs/` says "payment assistance can cut the effective rate to as low as 1%". This goes to the content/GSC team with the basics meta fix.
- **MSHDA's own pages disagree:** the MCC page still says "$544,233 after May 1, 2025", while the June 1, 2026 chart lists $566,355 for MI Home Loan and MCC. The post cites only the chart and the MI Home Loan page.
- **MVAA's page** still tells veterans to file Form 5107 every year. The statute and Form 5107 (Rev. 03-26) say no reapplication from 2025, and the VA post follows the statute. No action on Align's side.
- **D3:** decides whether the MSHDA post can ever carry an apply button.

**Publish-day tasks:**
- Set the Updated date, datePublished and dateModified to the publish date.
- Add the inbound links from each brief's §8 (with the USDA anchor changes above).
- Activate each `LINK ONCE LIVE` comment when its target goes live.
- Run Rank Math IndexNow and the GSC inspection.
- Do the per-post link-checks and F1 re-check listed above.

**Sequencing:** MSHDA (W2) should go live before or with the preapproval post (W2), which links it. The SSI post (W8) depends on five earlier sprint posts being live.

**Cannibalization:**
- USDA is now clear of basics, the tool and the product page (fees link to the product page; income limits link to the tool).
- MSHDA hands DPA detail to `/purchase/down-payment-assistance/` and dropped the PAA FAQ that page owns.
- VA keeps the federal benefits to one H2 plus a link to `/learn/va-loan-benefits-for-veterans/`, and the VA plan page keeps its one-H2 summary (Q050).
- SSI links the VA, MSHDA and USDA posts instead of repeating them.

**Working files (scratchpad, not deliverables):** under `/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/e1/`:
- scripts: `qa.py` (E3's screens, with rendered-text FAQ comparison), `build.py` (regenerates JSON-LD and word counts from the visible draft), `links.py`, `secwc.py` and `bin/fetch.sh`;
- QA output: `baseline.txt` and `final.txt`;
- `orig/`: pre-edit copies of the four drafts;
- `dl/`: the downloaded primary sources (MSHDA limits PDF, Form 5107, STC FAQ, HUD 4000.1, eCFR sections and others).
