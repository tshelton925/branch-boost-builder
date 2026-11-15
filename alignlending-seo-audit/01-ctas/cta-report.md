# CTA and conversion audit: alignlending.com

Team: CTA and Conversion · Crawl date 2026-11-15 · Scope: all 835 pages in `page_summary.csv`, plus the `/start/` intake page they link to
Files in this folder: `cta-report.md` (this file), `cta-inventory.csv` (309 label → destination rows), `cta-recommendations.csv` (444 implementation rows)

How this was done: Python (stdlib) over `pages.jsonl` (`ctas`, `links`, `outline`, `above_fold_text`), `page_summary.csv` (`type`) and the `text/` files. I placed each CTA against the H2 outline by matching its label in the body text. Raw HTML came from `site/*.html` (home, purchase, refinance, FHA, USDA article, Flint, Oakland County), plus 59 live fetches made one at a time, 2.5 s apart (`/start/`, 33 anchor targets, PDFs, 6 more pages). I also read GSC query data from DataWise (90 days). Scripts and fetched HTML are in the session scratchpad under `cta/`.

---

## 1. Summary

**Headline scores** (rubric aspect "CTA effectiveness"):

- **Whole site, weighted by page count: 63 (D).** The score is pulled down by the 471 learn pages (55, F) and the 276 city pages (71, C).
- **Strongest pages:** product pages 82 (B), refinance hub 84 (B), purchase hub 86 (B).
- **Weakest:** learn articles 55 (F), the mobile menu popup 62 (D) and `/calculators/` 66 (D).

The core commercial pages already follow a sound pattern. Above the fold they show one primary button and one ghost secondary. Under the buttons sits the trust strip ("No credit pull to talk", "5.0 on Google, 123 reviews"), which appears above the fold on 276/276 city pages and 21/21 product pages. They end with a closing CTA block.

The losses come from four places:

1. **Article CTAs ignore the article topic.**
2. **Off-domain and unattributed destinations.** These are the header menu actions and Calendly.
3. **Label drift.** One Calendly URL carries 62 different labels, and some labels promise something the destination does not deliver.
4. **Long gaps with no next step** on city, learn and some product pages.

**Destination check.** Of 309 label → destination pairs:
- 222 are verified working.
- 0 are broken.
- 15 are JavaScript buttons with no URL.
- 72 are unverified, because the audit session's network proxy blocks calendly.com, alignwithalign.com, my1003app.com and the government tools.

All 37 internal `#anchor` targets used by CTAs exist in the live HTML. Every one of the 3,816 `tel:` links uses the correct E.164 `tel:+12485065727`.

**Top 5 findings** (detail in section 5):

1. **Learn modules are chosen by top-level category only.** There are 9 variants for 423 articles. Examples:
   - All 61 Loan Types articles, including FHA, VA and USDA, point to the generic `/product-loans/`.
   - HELOC articles point to the refinance break-even review.
   - 22 regulation-news posts point to a budget review.
   - Re-mapping by topic changes the destination on **254 of 423** articles.
   - Only **164 of 423** articles have an end-of-article next step.
2. **The header mega-menu and mobile menu send 5 "action" links to `www.alignwithalign.com`.** These are Plan my purchase, Try payment scenarios, Explore my equity, Save my plan and Ask Samantha a question. There are 2,505 links each, on all 835 pages. The audit could not verify the host, and the site's own GA4 helper files these clicks as `partner_site`.
3. **The application path is not what the brief assumes.** No crawled page links to `app.alignlending.com`. Every "Apply Now" and "Start my application" goes to `/start/`, a 1-minute intake page that carries `noindex`. Only that page links to the real application, `https://alignlending.my1003app.com/1647301/register`. On phones, neither the header nor the menu popup offers an application entry.
4. **Calendly is one generic URL behind 2,683 links and 62 labels.** It carries no source parameters, so a booking cannot be traced to a page or intent. Four primary buttons promise a self-serve result but open a calendar: "Build my homebuyer game plan", "Get my first-time buyer plan", "Get my refinance checkup" and "Compare my options".
5. **There are long stretches with no CTA.**
   - City pages: median longest gap 2,374 words. In Flint there are no CTAs from word 758 to word 3,510.
   - Learn articles: median 3,630 words.
   - Six product pages: 1,489 to 3,099 words.
   - The top calculators have no next step after the result.

---

## 2. Scorecard

Score 0–100, grade A 90+, B 80–89, C 70–79, D 60–69, F <60.

**How the CTA score was built.** An automated component score comes first (`scores_auto.json`, out of 100):
- Above-the-fold hierarchy: 20
- Label honesty: 20
- Friction reducer: 10
- Decision-point coverage: 25
- Competing CTAs: 10
- Destination integrity: 15

I then subtracted documented judgment points. Products lose 10 for a generic primary/secondary label pair that is identical on all 21 pages. Pages lose 3 for duplicate Calendly labels in one block, and 2 for a missing `goal` parameter. Below, "ATF" means the above-the-fold answer, judged as: who the page is for, the direct answer, why Align, and one next step plus a friction reducer within about 60 words.

### 2a. By template

| Template | Pages | CTA effectiveness | ATF answer | Rationale (evidence) |
|---|---|---|---|---|
| Home | 1 | **72 C** | **74 C** | The hero has 3 router cards (Buy a Home → `/start/?goal=buy`, Refinance → break-even review, "Compare Your Options" → Loan Estimate checker) and a "Build my plan" sentence builder. The crawler did not flag any of these as CTAs. There is no single primary and no "No credit pull to talk" in the hero. The first Calendly CTA appears at word 1,305. There are 8 distinct content labels. |
| Purchase hub `/purchase/` | 1 | **86 B** | **78 C** | ATF: "Build my homebuyer game plan" (plan page) plus "Talk through your options" plus both friction phrases. A 6-card router has specific labels. "Talk through your options" repeats 3 times. "Start your pre-approval" goes to an intake that says it is not a preapproval. The subhead "We help you compare the loan options that genuinely fit your situation" is boilerplate, not an answer. |
| Purchase sub-pages | 10 | **82 B** | **85 B** | 9 of 10 put Calendly as the ATF primary and an on-page tool as the ghost secondary, with friction phrases on 10 of 10. Label sprawl runs to up to 6 different Calendly labels per page (`/purchase/va-homebuyer-plan/`). 3 primaries promise a self-serve result (see 5.4). |
| Refinance hub `/refinance/` | 1 | **84 B** | **88 B** | The ATF answer is direct: "A refinance is worth it when the change pays for itself while you still have the loan." Buttons: "Start with a conversation" plus "Run a break-even estimate". There is no `/start/?goal=refi` link in the content. |
| Refinance sub-pages | 3 | **81 B** | **85 B** | Tool plus talk pattern. Two of three primaries are misleading: "Get my refinance checkup" and "Compare my options" both open Calendly. |
| Product hub `/product-loans/` | 1 | **78 C** | **76 C** | 4 CTAs, all at the top and bottom, with an 898-word gap across the 21-card grid. The ATF only explains how to use the cards. |
| Product pages | 21 | **82 B** | **88 B** | 21 of 21: "Start my application" plus "Talk with Samantha" plus "No credit pull to talk" plus NMLS. The ATF definitions are strong (e.g. FHA: "What decides it is whether the mortgage insurance ever goes away"). Labels are identical on every program. Six long pages have no mid-page CTA. |
| Calculators and tools | 18 | **72 C** | **82 B** | 12 of 18 open with a "Use the calculator" jump plus a friction line ("Sent to Samantha only if you choose"). Only 6 of 18 have a CTA in the last 30% of the page. The calculators offer no next step after the result other than "Talk it through with Samantha". |
| City pages | 276 | **71 C** | **84 B** | 228 of 276 share one identical content-CTA sequence. ATF is "Start my application" (`?goal=buy`) plus "Talk with Samantha" plus friction on 276 of 276. Median longest gap is 2,374 words. 0 of 276 show the phone in content. The tax section's only button is a guide, not the calculator. |
| County hubs | 13 | **70 C** | **80 B** | 4 content CTAs with a median 1,394-word gap. `/mortgage-michigan/additional-cities/` (7,230 words) has no ATF CTA and a 7,204-word gap. |
| State hubs | 3 | **85 B** | **82 B** | "Talk with Samantha" plus "Start with a few questions", and a CTA in 4 of 13 sections. The Florida page's "Send Samantha the address" opens Calendly. |
| Learn articles and hubs | 471 | **55 F** | **68 D** | No action above the first H2 on 471 of 471 pages. The single module sits at a median 14% of the text and is keyed by category, not topic. 164 of 423 articles have an end block. Median length is 5,572 words, with a median longest gap of 3,630 words. |
| Research | 4 | **80 B** | **80 B** | Download CTAs suit the audience (PDF and CSV verified, 206/200). Long reports have gaps of 2,895 to 15,739 words with no "talk" option. |
| About, contact, reviews, legal ("other") | 12 | **80 B** | **80 B** | Contact, about and reviews are well built. Legal pages put email and phone first, which is correct. |

### 2b. Global elements

| Element | Score | Rationale |
|---|---|---|
| Header (desktop) | **72 C** | "Apply Now" carries a `goal` parameter on city (276), purchase (11) and product (13 of 21) pages, but has none on 402 of 471 learn pages. The phone uses the correct `tel:`. The mega-menu's 5 action links go off-domain to an unverified host. |
| Mobile menu popup (elementor-822) | **62 D** | Navigation only. There is no Apply, Talk or Call row, and the header on phones hides the Apply Now container (03f5154 has `elementor-hidden-mobile`). 5 off-domain links. See section 7. |
| Samantha bar ("chrome": Call / Text / Meet) | **86 B** | Page-specific message, sensible show/hide rules, closable, SMS with a prefilled page context, a TCPA consent text form, and its own GA4 events. It is missing on 6 township city pages. "Meet" is ambiguous. Its clicks are counted twice in GA4. |
| Footer | **70 C** | Phone (835) and email only. There is no "Talk with Samantha" or application link at the last scroll point. |

### 2c. Individual pages

| Page | CTA | ATF | Rationale |
|---|---|---|---|
| `/` | **72 C** | **74 C** | See template row. The router label "Compare Your Options" leads to `/compare-loan-estimates/`, which is a mismatch. |
| `/purchase/` | **86 B** | **78 C** | See template row. |
| `/refinance/` | **84 B** | **88 B** | See template row. |
| `/product-loans/` | **78 C** | **76 C** | See template row. |
| `/product-loans/conventional-loans/` | 87 B | 80 B | Full pattern, with mid-page "Talk through which loan fits me". The ATF is only 52 words and has no "why Align". |
| `/product-loans/fha-loans/` | 85 B | 90 A | The mid CTA "Talk through which one fits me" sits right after "FHA or conventional: which one actually fits", which is the right decision point. |
| `/product-loans/va-loans/` | 87 B | 90 A | Mid "Request your certificate of eligibility" goes to VA.gov (unverified host). There are 3 Calendly labels. |
| `/product-loans/usda-loans/` | 87 B | 85 B | Mid "Check an address on the USDA map" links to USDA's own site. The on-domain `/usda-eligibility-check/` is not linked. |
| `/product-loans/jumbo-loans/` | 87 B | 90 A | Mid "Talk through a loan above the limit". The ATF states the $832,750 limit. |
| `/product-loans/non-qm-loans/` | 85 B | 85 B | Mid "Tell Samantha the situation". |
| `/product-loans/bank-statement-loan/` | 87 B | 88 B | Mid tool link "Estimate my income from deposits" (`#p-bs`, verified). |
| `/product-loans/dscr-loans-michigan/` | 90 A | 88 B | Tool link ("Run the numbers on a property", `#p-dscr`) plus a property-specific talk CTA, no duplicates, longest gap 453 words. |
| `/product-loans/home-equity-loan/` | 85 B | 90 A | Mid "See how much equity I can use" (`#available-equity`, verified). |
| `/product-loans/heloc/` | 73 C | 88 B | 2,044 words with no mid CTA (1,795-word gap). |
| `/product-loans/cashout-loans/` | 85 B | 90 A | Mid "Compare both against my current loan". `?goal=equity` would fit better as `?goal=refi&aim=cash`. |
| `/product-loans/home-ready/` | 87 B | 88 B | Duplicate application CTA ("Get pre-approved" plus "Start my application"). |
| `/product-loans/30-year-fixed/` | 87 B | 86 B | Calculator CTA mid-page. `/start/` has no goal, which is acceptable because the page covers buy and refinance. |
| `/product-loans/15-year-fixed/` | 87 B | 88 B | Same as the 30-year page. |
| `/product-loans/adjustable-rate-mortgage/` | 87 B | 88 B | Mid "Talk through how long you will stay". |
| `/product-loans/buydown-loans/` | 83 B | 86 B | 5 different Calendly labels on one page. |
| `/product-loans/1099-income-loans/` | 71 C | 90 A | No mid CTA (1,645-word gap). `/start/` has no goal. |
| `/product-loans/asset-based-income-loans/` | 71 C | 90 A | No mid CTA (1,489-word gap). No goal. |
| `/product-loans/manufactured-home-loans/` | 71 C | 88 B | 3,345 words with a 3,099-word gap. No goal. |
| `/product-loans/non-warrantable-condo-loans/` | 71 C | 90 A | 1,736-word gap. No goal. |
| `/product-loans/physician-loans/` | 71 C | 90 A | 2,019-word gap. No goal. |
| `/calculators/` | **66 D** | **80 B** | The primary promotes the Loan Estimate checker. There is no talk CTA in the content and nothing after the tool grid (0 of 6 later sections). |
| `/mortgage-payoff-calculator/` (top calculator: payoff query family ≈1,006 impressions) | **76 C** | **85 B** | Good tool-first ATF with a friction line. After the result there is only "Talk it through with Samantha", with no shorter-term or refinance next step and no end CTA. |
| `/va-loan-calculator/` (VA payment queries ≈682) | **82 B** | **82 B** | Six CTAs and an end block, but the end sends VA visitors to the generic "Compare loan options". Talk labels are duplicated. |
| `/va-funding-fee-calculator/` (VA funding fee queries ≈336) | **74 C** | **86 B** | 3 CTAs, no end CTA, and no link from the fee to the VA payment calculator. |
| `/contact-us/` | **88 B** | **90 A** | Schedule plus Call above the fold, friction plus trust, a message form, phone repeated. The copy says "call or text" but there is no `sms:` link, and the Samantha bar is excluded on this page. |

Calculator selection: DataWise exposes GSC queries only, not pages. I ranked the calculators by summing 90-day impressions of the "…calculator" queries in each family: payoff ≈1,006, VA payment ≈682, VA funding fee ≈336, Michigan mortgage calculator ≈234, transfer tax ≈197, PMI ≈158, property tax ≈123.

---

## 3. Inventory highlights (`cta-inventory.csv`)

- **Size:** 309 label → destination rows, 27,537 instances, 124 distinct destinations.
  - It includes the crawler's `ctas`: 12,590 after removing 112 reference links the crawler flagged only because they contain "contact us" or "schedule", 60 pager arrows and 1 skip link.
  - It adds links the crawler did not class as CTAs: the 5 mega-menu actions, the chrome "Text" `sms:` link (824 pages), the home hero cards, learn end blocks (`al-next`), "start online" links, and verb-led card or inline CTAs.
- **Header (every page):** "Contact Us" twice, phone link twice (desktop number, mobile icon), "Apply Now" once (to `/start/` with or without `goal`), and the 5 alignwithalign.com menu actions.
- **Footer:** phone `tel:+12485065727` (835) and email `mailto:samantha@alignlending.com`.
- **Popup elementor-822:** the slide-in mobile menu. Full navigation, "Contact Us" and the same 5 alignwithalign.com actions. Section 7 covers how it opens.
- **Chrome (Samantha bar, 824 pages):**
  - "Call" (`tel:`), "Text" (`sms:+12485065727?&body=` with page-specific text, e.g. "…I was on your USDA loan basics guide…") and "Meet" (Calendly).
  - An avatar bubble button, "Talk with Samantha", reopens the bar after it is hidden.
  - On desktop, "Text" opens a QR code and a "have her text you" form with TCPA consent.
  - Absent on: `/contact-us/`, `/licensing/`, `/press/`, `/privacy-policy/`, `/terms-and-conditions/`, and 6 township city pages (Addison, Alpine, Blair, Leighton, Rose, Tittabawassee).
- **Learn in-article modules:**
  - `aside.al-module` (eyebrow "Next step", button `al-module-btn` plus link `al-module-link` "Talk with Samantha" → Calendly) on 466 of 471 pages.
  - `aside.al-next` end block on 164 articles.
  - The "bottom line" paragraph ("Call 248-506-5727 or start online") on 431.
  - Embedded tools: the USDA checker (`uc-cta` "Talk with Samantha" → Calendly, `uc-cta2` "How USDA loans work" → `/product-loans/usda-loans/`) on `/learn/usda-loan-basics/`.
- **Label concentration:**
  - Calendly: 62 distinct labels. 26 pages carry 3 or more different labels for the same Calendly URL.
  - `/start/`: 6 labels. "Apply Now" 835, "Start my application" 624, "Start with a few questions" 10, "Get pre-approved" 3, "Start your pre-approval" 1, "Check my down payment options" 1. Plus 431 inline "start online" links.

---

## 4. Destination check

| Destination group | Instances | Result | Evidence |
|---|---|---|---|
| `/start/` (`?goal=buy|refi|equity`, `&why=improve&from=home-equity`) | ~2,100 | **Works.** It is a `noindex` intake ("Let's start with what you're working on… About a minute… Nothing here checks your credit"). | Live 200. `window.alignStartCfg` reads `goal`, `stage`, `aim`, `why` and a whitelisted `from`. All goal values in use are valid. |
| Real application | n/a | `https://alignlending.my1003app.com/1647301/register` and sign-in at `/1647301/pos` | Found only in `/start/` (`appHost`, `appPath`, header button). The host is blocked from this session, so it is unverified. **No page links `app.alignlending.com`**, so the brief's statement needs correcting. |
| Internal pages (90 URLs) | ~6,000 | Works | All are in the crawl with status 200. |
| Internal anchors (37) | 70 | **All present** | Each fragment's `id` was found in live HTML: `#break-even`, `#available-equity`, `#equity-compare`, `#affordability`, `#sell-timing`, `#cash-to-close`, `#readiness` (2 pages), `#rental-flow`, `#doc-readiness`, `#va-fee` (2), `#p-pay`, `#p-aff`, `#p-ref`, `#p-va`, `#p-bs`, `#p-dscr`, `#payoff`, `#mi-end`, `#mi-tax`, `#mi-transfer`, `#points-credit`, `#rent-buy`, `#seller-net`, `#usda-check`, `#loan-limits`, `#counties`, `#programs`, `#story`, `#subjects`, `#request`, `#writes`, `#tip-2/7/8`, `#text-messages`. |
| PDFs and CSVs (guides, research, HELOC worksheet) | 50 | Works | 206/200 with `application/pdf`. |
| `tel:` | 3,816 | **Correct everywhere** | Always `tel:+12485065727`. Display text varies: "248-506-5727" (2,142), "(248) 506-5727" (2 links plus `/start/` and the chrome panel), "Call", and "Call Align Lending at 248-506-5727" (aria label). Standardize the visible text on "248-506-5727" (P2). |
| `sms:` | 825 | Format OK | `sms:+12485065727?&body=…` (the `?&` form works on iOS and Android). |
| `mailto:` | 860 | Syntax OK | On-domain address, with subject lines on press and privacy. |
| Calendly `calendly.com/samanthashelton` | 2,683 | **Unverified (host blocked)** | Single event-less URL with no UTM. |
| alignwithalign.com (`/buy`, `/payment-lab`, `/own`, `/plan`, `/ask`) | 12,525 | **Unverified (host blocked)** | The crawl's own `external_status.jsonl` also has status 0 (ProxyError) for all 5. |
| NMLS, VA.gov COE, USDA eligibility map, Fannie Mae AMI lookup, Google review link | 5 | Unverified (host blocked) | Primary-source tools, so the link choice is appropriate. |

**Label/destination mismatches:**

| Label | Pages | Goes to | Problem |
|---|---|---|---|
| "Build my homebuyer game plan" | `/purchase/homebuyer-game-plan/` ×3 | Calendly | The same label goes to the plan page on 13 other pages. |
| "Get my first-time buyer plan" / "Get your first-time buyer plan" | `/purchase/first-time-homebuyer/` ×4 | Calendly | Reads as self-serve. |
| "Plan my move", "Build your move strategy" | `/purchase/buy-before-you-sell/` | Calendly | Reads as self-serve. |
| "Get my refinance checkup" | `/refinance/break-even-review/` ×3 | Calendly | "Get" implies an instant result. |
| "Compare my options" | `/refinance/cash-out-vs-home-equity/` ×3 | Calendly | On 2 learn pages the same label goes to the comparison page. |
| "Compare Your Options" | home hero | `/compare-loan-estimates/` | Not a loan-option comparison. |
| "Start your pre-approval", "Get pre-approved" | `/purchase/`, home, 3 others | `/start/` | `/start/` says it is "not … a preapproval". |
| "Send Samantha the address" | `/mortgage-florida/` | Calendly | A calendar link cannot receive an address. |
| "Check my down payment options" | `/purchase/down-payment-assistance/` | `/start/?goal=buy` | The intake does not check programs. |
| "Apply Now" (header) | all pages | `/start/` intake | Mild. On `/start/` itself the header "Apply Now" skips the intake and goes to my1003app. |

---

## 5. Findings ranked by impact

**5.1 Learn CTAs are keyed to 9 categories, not to 423 topics (critical, P0).**

The module button is the same for every article in a category:
- Home Buying → "Get my homebuyer game plan" (111)
- Loan Types → "Compare loan options" `/product-loans/` (59)
- Refinancing → "Review my break-even" (51)
- Homeownership → "Explore my equity options" (57)
- Mortgage Rates & Market → "Get a budget review" (49)
- Mortgage Basics → "Take the readiness review" (27)
- Selling → "Build a buy before you sell strategy" (49)
- Investing → "Review an investment property" (49)

Resulting mismatches:
- `/learn/home-equity-line-of-credit-heloc/` gets a refinance break-even review.
- `/learn/addressing-mold-issues-in-your-home/` gets an equity review.
- `/learn/annual-percentage-rate-apr/` gets a budget review.
- `/learn/usda-loan-basics/` gets the generic loan list, although the site has `/usda-eligibility-check/`.

GSC demand points at the clusters that matter most:
- "lease to own": 15,242 impressions. That is the site's top query and ≈8% of 181K impressions.
- USDA queries: ≈3,300.
- FHA loan limits: ≈680.
- "personal loans" (→ `/learn/personal-loan-vs-home-equity/`): 1,657.
- Portfolio loans: ≈850.
- "amortization": 315.

The topic map in section 6 changes the destination on 254 articles. Per-article rows are in the CSV. The end block is missing on 259 of 423 articles.

**5.2 Off-domain primary-navigation actions (critical, P0).**

Five verb-led menu items ("Plan my purchase", "Try payment scenarios", "Explore my equity", "Save my plan", "Ask Samantha a question") point to `www.alignwithalign.com`. They appear 3 times per page: in two header copies and in the popup. The audit could not reach the host. The site's tracker maps it to `partner_site`, and `/start/` whitelists `from=alignwithalign`, so it is probably an Align property. It still needs a live check, and each item has an on-domain equivalent.

**5.3 Bookings and applications cannot be attributed (high, P0).**

- Calendly has no UTM on 2,683 links.
- GA4 `cta_click` sends only `destination` (start/schedule/apply/partner_site).
- Clicks on internal plan and tool CTAs (the learn modules, router cards) are not tracked.
- Samantha bar Call and Meet clicks fire both `samantha_bar` and the delegated `phone_click`/`cta_click`, so they are counted twice.
- Section 9 gives a plan that fits `alignTrack`'s 5-key, no-digit rule.

**5.4 Labels that promise a different action than they deliver (medium-high, P1).**

See the mismatch table in section 4. Rule for the fix: any Calendly button names the person or the act of booking ("…with Samantha", "Book…", "Talk…", "Ask…").

**5.5 No mobile application entry (high, P1).**

On phones the header shows a phone icon and the menu button only. The menu popup has no Apply, Talk or Call row. Mobile visitors reach `/start/` only through in-content buttons, or reach Samantha through the bar after scrolling 60% of a screen.

**5.6 Long CTA gaps on long templates (high, P1).**

| Template | Median longest gap (words) |
|---|---|
| City | 2,374 (Flint: 758 → 3,510, across the ZIP, neighborhood, school and living sections) |
| Learn | 3,630 |
| County hubs | 1,394 (additional-cities 7,204) |
| Research | 2,895 |

Six product pages have no mid-page CTA. On the Michigan property tax calculator, 15,035 words of data follow the single talk CTA.

**5.7 City tax section ends in a guide, not the tool (medium, P1).**

276 pages answer "What will my property taxes be after I buy in <City>?" and then offer only "How Michigan taxable value works". The calculator, `/michigan-property-tax-calculator/#mi-tax`, is the decision-point action.

**5.8 Calculator results go nowhere specific (medium, P1).**

Payoff, VA payment and VA funding fee pages offer "Talk it through with Samantha" and nothing tied to the result:
- payoff → shorter term or refinance
- funding fee → VA payment
- VA payment → VA homebuyer plan

`/calculators/` leads with the Loan Estimate checker and has no talk or end CTA.

**5.9 Calendly label sprawl on planning pages (medium, P1).**

There are up to 6 labels for one Calendly URL per page (`/purchase/va-homebuyer-plan/`). 9 of 10 purchase sub-pages close with a generic "Talk through your own situation" block after their own talk block.

**5.10 Product labels are identical across 21 programs (medium, P1).**

"Start my application" plus "Talk with Samantha" is consistent and clear, but not specific. A program-specific secondary, such as "Ask Samantha if FHA fits" or, for USDA, "Check an address for USDA", tells the visitor what the call or tool is for.

**5.11 Consistency gaps (low–medium, P1–P2).**

- The Samantha bar is missing on 6 city pages.
- `/contact-us/` says "call or text" with no `sms:` link.
- The pre-approval wording conflicts with the `/start/` disclaimer.
- 8 product pages and 402 learn pages send no `goal` parameter.
- The bar's first-person Samantha copy ("Send me the address and I'll check its millage") conflicts with the brief's third-person rule unless Align approves it as her own words.
- `/start/` clears saved answers whenever `?from=` is present.

---

## 6. Recommended CTA system

### 6a. Rules

1. **One primary action and one low-commitment secondary above the fold**, plus the friction line. Use "No credit pull to talk", or for tools "Sent to Samantha only if you choose".
2. **One talk label per page.** Every Calendly button on a page uses the same label.
3. **A label must describe its destination.**
   - Calendly labels contain "Samantha", "Talk", "Ask" or "Book".
   - Tool labels start with a verb plus "my" ("Run my break-even", "Estimate my…").
   - `/start/` labels are "Start my application" or "Start with a few questions". Never "pre-approval".
4. **Decision points.** Place a CTA after the first answer section, after any comparison or "is it a fit" section, after a tool result, and at the end. On pages over 2,500 words, repeat it before the FAQ.
5. **Pass context.**
   - `/start/` gets `goal` (plus `stage`, `aim` or `why` where known).
   - Calendly gets `utm_campaign=<template>&utm_content=<placement>`.
   - Every CTA gets `data-cta`, `data-cta-place` and `data-cta-mod` for GA4.

### 6b. Labels by intent (Align vocabulary first)

| Intent / template | Primary (button) | Secondary (ghost) | Tertiary (text link) |
|---|---|---|---|
| Buy, high intent (city, county, purchase products) | **Start my application** → `/start/?goal=buy` · micro-line "About a minute. Nothing here checks your credit." | **Talk with Samantha** → Calendly `utm_campaign=city` | "or call 248-506-5727" |
| Buy, early stage (`/purchase/`, learn home-buying) | **Build my homebuyer game plan** → `/purchase/homebuyer-game-plan/` | **Talk through your options** → Calendly | "Start my application" → `/start/?goal=buy` |
| Purchase planning pages (budget, first-time, buy-before-sell, readiness, VA plan, investment, self-employed) | Keep talk first, honest label: "Review my budget with Samantha", "Plan my first purchase with Samantha", "Plan my move with Samantha", "Talk to somebody who knows VA", "Review a property with Samantha", "Review my situation with Samantha" | The on-page tool: "Run the numbers", "See what it costs upfront", "Work out the timing", "Take the readiness assessment", "See your funding fee" | "Start my application" → `/start/?goal=buy` |
| Refinance (`/refinance/`, break-even) | **Talk through your refinance options** / **Book my refinance checkup** → Calendly | **Run a break-even estimate** → `/refinance/break-even-review/#break-even` | "Start my application" → `/start/?goal=refi` |
| Equity (home equity review, cash-out vs equity, HELOC, home equity loan) | **Talk through my equity options** → Calendly (review pages) / **Start my application** → `/start/?goal=equity` (product pages) | **Estimate my available equity** → `#available-equity` / **Compare cash-out and home equity** → `#equity-compare` | "or call 248-506-5727" |
| Product pages | **Start my application** → `/start/?goal=<buy|equity|refi>` | Program-specific (see CSV row "Product page template … ATF secondary label") | "or call 248-506-5727" |
| Calculators | **Use the calculator** (jump to tool) | **Talk with Samantha** | After result: "Send my results to Samantha" plus one contextual next tool or page |
| Learn articles | Topic-map module (section 8) | "Talk with Samantha" or a topic-specific talk label | End block from the topic map; "start online" with the topic `goal` |
| About, reviews, contact | **Schedule a call with Samantha** | **Call 248-506-5727** / **Text 248-506-5727** | "Start my application" |
| Header | **Apply Now** → `/start/?goal=<page goal>` (A/B test "Start my application") | phone | — |
| Mobile menu | New top row: **Start my application** · **Talk with Samantha** · **Call 248-506-5727** | — | — |
| Samantha bar | Call · Text · **Book** (rename from "Meet") | — | — |

---

## 7. Verdict on the popup and the chrome buttons

**Elementor popup 822: keep it as the mobile menu and add an action row.**

- *What it is:* a slide-in navigation panel (`data-elementor-type="popup"`, entrance `slideInLeft`). Its timing rule is limited to mobile devices (`"timing":{"devices_devices":["mobile"]}`). It has no page-load, scroll or exit-intent trigger.
- *How it opens:* it opens only when someone taps the icon-only header button (widget `ae2d4af` in header template 20). The button's link is `#elementor-action:action=popup:open&settings={"id":"822","toggle":false}`, which is decoded from base64 in the live HTML.
- *What it contains:* the full menu (Loans ×16, Purchase, Refinance, Learn ×9, Calculators, Service Areas, About, Meet Samantha, Client Reviews, Contact Us) plus the 5 alignwithalign.com actions.
- *Why keep it:* it is not an interstitial, so it carries no risk under Google's intrusive-interstitial guidance.
- *What to change:*
  - Add the pinned row "Start my application · Talk with Samantha · Call 248-506-5727". Phones currently have no application entry.
  - Replace or verify the 5 off-domain links.

**Samantha bar: keep it. It is the site's best low-commitment CTA.**

What it does now:
- Appears after scrolling 60% of the viewport height.
- Hides over the footer and while the visitor types in a form on small screens.
- Compacts on phones after 1,100 px of scroll.
- Can be dismissed per session, and the avatar bubble reopens it.
- Shows a page-specific message.
- "Text" opens SMS on touch devices, or on desktop a QR code and a consent form posting to `/wp-json/align/v1/text-request`.
- Tracks its own events (`samantha_bar` with destination call, text, meet, hide, reopen or text_panel).

Fixes:
- Rename "Meet" to "Book".
- Enable it on the 6 township city pages.
- Stop the delegated listener from counting its clicks a second time.
- Add UTM to its Calendly link (`utm_campaign=chrome`).
- Get Align's sign-off on the first-person messages.

Leave it off legal pages. Keep it off `/contact-us/` and `/start/`, but add an `sms:` button to the contact page.

---

## 8. Learn articles: evaluation and topic → CTA map

**Current state (423 articles, 48 hubs):**

- 0 of 471 pages have a next step above the first H2.
- The single `al-module` sits at a median 14% of the text (quartiles 12% to 17%). That placement is right after the first answer section and should stay.
- The module is keyed to the top-level category. Only 169 of 423 current destinations match what the topic map would choose.
- `al-next` end block: 164 of 423.
- The "bottom line" paragraph ("Call 248-506-5727 or start online") is present on 431, but "start online" carries no `goal` on 273.
- Three Michigan glossary guides have no module: taxable value, transfer tax and land contract. 276 city pages link to the taxable value guide.

**Template logic for the developer** (in the learn single template, where `al-module` and `al-next` are rendered):

```
key = first matching slug rule (table 8b) ?? CLUSTER[crumb level 2 slug] ?? CLUSTER[crumb level 1 slug] ?? 'process'
cfg = MAP[key]                      // table 8a; keys are digit-free so they can be GA4 tool_id values
render al-module: eyebrow "Next step", head cfg.head, text cfg.text,
                  button cfg.primary  (data-cta-mod="learn_<key>" data-cta-place="module")
                  link   cfg.secondary
if word_count > 2500: render compact module (cfg.secondary as button) before the FAQ H2
always render al-next: line = cfg.head, link = cfg.end  (data-cta-place="end")
"start online" href = /start/ + cfg.start ;  header Apply Now uses the same cfg.start
Calendly URLs: append ?utm_source=alignlending&utm_medium=website&utm_campaign=learn&utm_content=<module|end>
```

### 8a. Cluster defaults (crumb level 2, which is the cluster hub slug)

| Cluster hub | Articles | Key | Module button → URL | Secondary | End block | `/start/` param |
|---|---|---|---|---|---|---|
| `/learn/fha-loans/` | 4 | fha | See how FHA works in Michigan → `/product-loans/fha-loans/` | Ask Samantha if FHA fits → Calendly | Run a payment in the mortgage calculator → `/mortgage-calculator/#p-pay` | `?goal=buy` |
| `/learn/va-loans/` | 5 | va | Run the VA loan calculator → `/va-loan-calculator/#p-va` | Talk to somebody who knows VA | See the VA homebuyer plan → `/purchase/va-homebuyer-plan/` | `?goal=buy` |
| `/learn/usda-and-assistance-programs/` | 3 | usda | Check an address for USDA → `/usda-eligibility-check/#usda-check` | Talk with Samantha | See how USDA loans work → `/product-loans/usda-loans/` | `?goal=buy` |
| `/learn/conventional-loans/` | 4 | conv | See how conventional loans work → `/product-loans/conventional-loans/` | Talk through which loan fits me | Build your homebuyer game plan | `?goal=buy` |
| `/learn/jumbo-and-non-qm/` | 12 | nonqm | See what self-employed files need → `/purchase/self-employed-homebuyer/#doc-readiness` | Tell Samantha the situation | See how non-QM loans work → `/product-loans/non-qm-loans/` | `?goal=buy` |
| `/learn/fixed-vs-arm/` | 7 | fixed_long | Compare terms in the mortgage calculator → `/mortgage-calculator/#p-pay` | Talk with Samantha | See the 30-year fixed → `/product-loans/30-year-fixed/` | `?goal=buy` |
| `/learn/loan-comparisons/` | 2 | compare_programs | Compare loan options → `/product-loans/` | Check an address for USDA | Build my homebuyer game plan | `?goal=buy` |
| `/learn/specialty-financing/` | 16 | process (most are overridden, see 8b) | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | Talk with Samantha | Get a homebuying budget review → `/purchase/budget-review/#affordability` | `?goal=buy` |
| `/learn/first-time-home-buyers/` | 4 | fthb | Get my first-time buyer plan → `/purchase/first-time-homebuyer/` | Talk with Samantha | See Michigan down payment help → `/purchase/down-payment-assistance/` | `?goal=buy` |
| `/learn/preparing-to-buy/` | 9 | budget | Get a homebuying budget review → `/purchase/budget-review/#affordability` | Review my budget with Samantha | Take the readiness review | `?goal=buy` |
| `/learn/home-buying-process/`, `/learn/buying-strategies/`, `/learn/how-mortgages-work/`, `/learn/home-types-and-living/` | 39 + 51 + 7 + 11 | process | Build my homebuyer game plan | Talk with Samantha | Get a homebuying budget review | `?goal=buy` |
| `/learn/moving-and-settling/` | 3 | moving | Plan a buy before you sell → `/purchase/buy-before-you-sell/` | Talk with Samantha | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | `?goal=buy` |
| `/learn/credit-and-qualifying/` | 11 | credit | Take the readiness review → `/purchase/mortgage-readiness-review/#readiness` | Talk with Samantha | Get a homebuying budget review | `?goal=buy` |
| `/learn/payments-escrow-servicing/` | 5 | servicing | Talk with Samantha → Calendly | Run a refinance break-even review | Call 248-506-5727 | — |
| `/learn/mortgage-terminology/` | 1 | ltv | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | Talk with Samantha | Check when my PMI can end → `/pmi-removal-calculator/#mi-end` | `?goal=equity` |
| `/learn/housing-market-trends/` | 17 | market | Get a homebuying budget review → `#affordability` | Talk with Samantha | Build your homebuyer game plan | `?goal=buy` |
| `/learn/how-rates-work/`, `/learn/rate-strategy/` | 3 + 3 | rates | Get a real number from Samantha → Calendly | Check a Loan Estimate → `/compare-loan-estimates/` | Why we don't publish rates → `/why-we-dont-publish-rates/` | — |
| `/learn/industry-updates-and-rules/` | 22 | industry | Ask Samantha how this affects you → Calendly | Compare loan options → `/product-loans/` | Build your homebuyer game plan | — |
| `/learn/home-equity/` | 9 | equity | Estimate my available equity → `#available-equity` | Compare cash-out and home equity → `#equity-compare` | Talk through my equity options → Calendly | `?goal=equity` |
| `/learn/refinancing-guide/`, `/learn/types-of-refinancing/`, `/learn/refinance-situations/` | 7 + 9 + 22 | breakeven | Run a break-even estimate → `/refinance/break-even-review/#break-even` | Book my refinance checkup → Calendly | Use the refinance calculator → `/mortgage-refinance-calculator/#p-ref` | `?goal=refi` |
| `/learn/home-improvement/` | 18 | improve | Estimate my available equity → `#available-equity` | Compare cash-out and home equity | Talk through my equity options | `?goal=equity&why=improve` |
| `/learn/home-maintenance/` | 8 | repair | Estimate my available equity (head: "When a repair costs more than savings") | Talk with Samantha | Compare cash-out and home equity | `?goal=equity&why=expense` |
| `/learn/insurance-and-protection/` | 6 | monthly | Run a payment in the mortgage calculator → `/mortgage-calculator/#p-pay` | Talk with Samantha | Estimate the property tax for an address → `/michigan-property-tax-calculator/#mi-tax` | `?goal=buy` |
| `/learn/taxes-and-money/`, `/learn/mortgage-glossary/` | 12 + 3 | proptax | Estimate my Michigan property tax → `#mi-tax` | Have Samantha check the address → Calendly | Read the 2026 Uncapping Study → `/research/michigan-property-tax-uncapping-study/` | `?goal=buy` |
| Investing clusters (`investing-basics`, `investment-property-types`, `investor-market-analysis`, `rental-management`, `real-estate-investing`) | 45 | invest | See what the property produces → `/purchase/investment-property-financing/#rental-flow` | Review a property with Samantha | Run the numbers on a DSCR loan → `/product-loans/dscr-loans-michigan/#p-dscr` | `?goal=buy` |
| Selling clusters (`selling-process`, `pricing-and-preparing`, `selling-strategies`) | 38 | sell | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | Plan a buy before you sell | Talk with Samantha | — |
| `/learn/selling-situations/` | 7 | sell_situation | Talk with Samantha → Calendly | See what your sale leaves you | Plan a buy before you sell | — |

### 8b. Slug overrides (first match wins; 51 keys in total, full copy in `learnmap.py` and in each CSV row)

| Slug contains | Key | Primary → URL | Example articles |
|---|---|---|---|
| `reverse-mortgage` | reverse | Talk with Samantha (+ "Find a HUD-approved housing counselor" → hud.gov) | reverse-mortgages-how-they-work |
| `va-` + refinance / `irrrl` / `interest-rate-reduction` | va_refi | Check my VA funding fee → `/va-funding-fee-calculator/#va-fee` | va-interest-rate-reduction-refinance-loans, benefits-of-refinancing-va-loan |
| `203-k`, `homestyle`, `renovation-loan`, `fixer-upper`, `distressed`, `foreclos`, `auction`, `short-sales` | reno | Review renovation financing → `/purchase/renovation-financing/` | benefits-of-fha-203-k-loans, advantages-of-buying-fixer-upper |
| `lease-option`, `lease-to-own`, `rent-to-own` | credit | Take the readiness review | lease-to-own-vs-rent-to-own-whats (top query: "lease to own", 15,242 impressions) |
| `piggyback`, `conventional-97` | conv | See how conventional loans work | what-is-piggyback-mortgage |
| `fha` (outside refinance clusters, or `streamline`) | fha | See how FHA works in Michigan | fha-loan-tips, fha-streamline-refinance-loans |
| `usda` | usda | Check an address for USDA | what-is-usda-streamline-refinance |
| `homeready`, `home-possible` | homeready | See HomeReady and Home Possible → `/product-loans/home-ready/` | homeready-mortgages |
| `jumbo` | jumbo | Look up my county loan limit → `/loan-limits/#loan-limits` | how-to-qualify-for-jumbo-loan |
| `bank-statement` | bankstmt | Estimate my income from deposits → `#p-bs` | — |
| `non-qm`, `no-doc`, `portfolio-loan`, `freelancer`, `self-employed`, `interest-only`, `balloon`, `non-conforming` | nonqm | See what self-employed files need | what-is-portfolio-loan (portfolio queries ≈850), balloon-mortgages |
| `buydown` | buydown | Compare points and lender credits → `/points-vs-lender-credit-calculator/#points-credit` | mortgage-rate-buydowns |
| `rate-lock`, `rate-predictions`, `federal-reserve`, `rate-volatility` | rates | Get a real number from Samantha | what-is-mortgage-rate-lock |
| `annual-percentage-rate`, `mortgage-disclosure`, `comparing-mortgage-lenders` | apr | Check a Loan Estimate → `/compare-loan-estimates/` | annual-percentage-rate-apr |
| `15-year-vs-30` / `refinancing-to-shorter` | fixed_short / shorter | Compare terms in the mortgage calculator / Use the refinance calculator | 15-year-vs-30-year-mortgage-comparison |
| `adjustable-rate` | arm | See how ARMs work → `/product-loans/adjustable-rate-mortgage/` | adjustable-rate-mortgage-resets |
| `heloc`, `home-equity-line` | heloc | See how HELOCs work → `/product-loans/heloc/` | home-equity-line-of-credit-heloc |
| `home-equity-loan`, `second-mortgage`, `personal-loan-vs-home-equity` | heloan | See how home equity loans work → `/product-loans/home-equity-loan/` | personal-loan-vs-home-equity ("personal loans" 1,657 impressions) |
| `cash-out` | cashout | Compare cash-out and home equity → `#equity-compare` | what-is-cash-out-refinance-loan |
| `mortgage-insurance` | pmi | Check when my PMI can end → `/pmi-removal-calculator/#mi-end` | refinancing-to-remove-mortgage-insurance |
| `amortization` / `recasting` | amort / payoff | Use the payoff calculator → `/mortgage-payoff-calculator/#payoff` | amortization-schedules ("amortization" 315) |
| `escrow-accounts` | escrow | Estimate my Michigan property tax | mortgage-escrow-accounts |
| `loan-to-value` | ltv | Estimate my available equity | what-is-loan-to-value-ratio ("loan to value calculator" queries ≈280) |
| `broker`, `why-work-with-align`, `rocket-mortgage` | broker | Talk with Samantha (+ Check a Loan Estimate) | rocket-mortgage-vs-mortgage-broker |
| `closing-cost` | cashclose | Add up my cash to close → `/purchase/first-time-homebuyer/#cash-to-close` | closing-costs |
| `down-payment`, `gift-funds`, `grants-and-programs`, `assistance-programs`, `low-income` | dpa | See Michigan down payment help → `/purchase/down-payment-assistance/` | how-to-save-for-down-payment, low-down-payment-mortgages |
| `preapproval`, `prequalified`, `how-fast-can-a-mortgage-close` | preapproval | Start my application → `/start/?goal=buy` | importance-of-mortgage-preapproval |
| `competitive-offer`, `bidding-war`, `escalation`, `multiple-offer`, `sellers-market` (buying clusters only) | offers | Start my application → `/start/?goal=buy&stage=offers` | how-to-handle-bidding-war |
| `renting-vs-buying` | rentbuy | Compare renting and buying → `/rent-vs-buy-calculator/#rent-buy` | renting-vs-buying-financial-comparison |
| `waterfront`, `septic`, `well-water`, `flood-zone`, `historic-home`, `solar-panels`, `with-pool`, `plat-map`, `zoning` | property | Ask about a specific property → Calendly | buying-home-in-flood-zone, what-is-plat-map ("plat of survey" 274) |
| `builder-preferred`, `newly-constructed` | builder | Check a Loan Estimate | builder-preferred-lender-vs-mortgage-broker |
| `construction` / `bridge-loan` / `physician` | construction / bridge / physician | Talk through a build / Work out the timing / See physician loans | construction-loan-guide, bridge-loans |
| `condo`, `co-op` / `manufactured`, `modular` | condo / manufactured | See non-warrantable condo loans / See manufactured home loans | pros-and-cons-of-buying-condo |
| `second-home`, `vacation-home` | second_home | Ask about a second home → Calendly | buying-second-home |
| `dscr`, `short-term-rental`, `multi-family`, `refinance-investment-property` | dscr | Run the numbers on a property → `#p-dscr` | investing-in-short-term-rentals |
| `transfer-tax` / `land-contract` / `taxable-value`, `property-tax`, `homestead`, `assessment` | transfertax / landcontract / proptax | Use the transfer tax calculator / Ask Samantha about a land contract / Estimate my Michigan property tax | michigan-transfer-tax, michigan-land-contract |
| `hoa`, `insurance` | monthly | Run a payment in the mortgage calculator | homeowners-insurance-deductibles ("home insurance deductible" 206) |
| `capital-gains`, `sellers-net-sheet`, `finances-of-selling` | sell | See what your sale leaves you | capital-gains-tax-exemptions |

Guard rules:
- In the three refinance clusters, product overrides (fha, usda, jumbo, condo, manufactured, credit) fall back to `breakeven` unless the slug contains `streamline`.
- `offers` applies only in the buying clusters and in housing-market-trends.

---

## 9. Measurement plan (fits `window.alignTrack`)

**Constraints.** These come from the live helper on every page:
- Only `tool_id`, `page_path`, `destination`, `link_text` and `outcome` reach GA4.
- String values containing a digit are dropped.
- Values are cut at 80 characters.
- `page_path` is added after scrubbing, so paths with digits still record.
- Event names should also be digit-free snake_case.

**Events** (keep the existing names so history continues):

| Event | When | `destination` | `link_text` | `outcome` (placement) | `tool_id` (module) |
|---|---|---|---|---|---|
| `cta_click` (extend) | Any element with `data-cta`, plus the existing delegated matches | `start`, `apply`, `meet`, `phone`, `text`, `email`, `plan`, `tool`, `product`, `guide`, `partner_site`, `download` | `data-cta` slug: `start_my_application`, `talk_with_samantha`, `run_break_even`, `see_fha_loans`, `see_thirty_year_fixed` (write numbers as words) | `header`, `menu`, `hero`, `router`, `module`, `inline`, `comparison`, `result`, `end`, `chrome`, `footer` | template or module key: `learn_usda`, `learn_fixed_long`, `city_mid`, `product_hero`, `calc_payoff` |
| `cta_view` (new) | A module or end block is at least 50% visible for 1 s (IntersectionObserver), once per page | — | — | same placement values | same module key |
| `phone_click` (keep) | `tel:` click outside `#align-sb` | `phone` | `data-cta` or `call_samantha` | placement | module key |
| `samantha_bar` (keep) | Bar actions (`call`, `text`, `meet`, `hide`, `reopen`, `text_panel`, `text_request`) | as now | — | — | — |
| `start_open`, `start_step`, `start_lane`, `start_sent`, `start_from` (keep) | `/start/` funnel | — | — | lane values as now | — |
| `meet_booked` (new) | Calendly `calendly.event_scheduled` postMessage, if Calendly moves to its popup or inline embed | `meet` | — | placement of the opening click (sessionStorage) | module key |
| `tool_start`, `tool_complete`, `tool_results_sent` (keep) | Calculators | — | — | — | tool id |

Implementation notes:

1. In the delegated listener, `return` early when `a.closest('#align-sb')`. This removes the double count.
2. Read `data-cta`, `data-cta-place` and `data-cta-mod`. When the attributes are missing, derive the placement from the DOM:
   - `header` → `header`
   - `.elementor-location-popup` → `menu`
   - `.al-module` → `module`
   - `.al-next` → `end`
   - `footer` → `footer`
3. Add `{match:'/purchase/', name:'plan'}`, `{match:'/refinance/', name:'plan'}`, `{match:'calculator', name:'tool'}` and `{match:'/product-loans/', name:'product'}` to `DESTINATIONS`, so internal CTAs are counted. Restrict this to elements that carry `data-cta`, so body links are not counted.
4. Register `destination`, `link_text`, `outcome` and `tool_id` as event-scoped custom dimensions. Mark `start_sent`, `samantha_bar` with `text_request`, `meet_booked` and `cta_click` with `destination=apply` as key events.
5. Report: CTR per module = `cta_click` ÷ `cta_view` by `tool_id`, and meetings per template from the Calendly UTM campaign.

---

## 10. Implementation order

**P0, this week:**
- Verify or replace the 5 alignwithalign.com menu links.
- Add UTM to Calendly.
- Ship the topic map in the learn template. Start with the P0 clusters: lease-to-own, USDA, FHA, VA, HELOC and home equity, non-QM and portfolio, property and tax, PMI, LTV.
- Extend GA4 click tracking and remove the double count.

**P1, this month:**
- Mobile menu action row.
- Honest Calendly labels on 6 planning pages, and one talk label per page.
- City mid-page CTA and tax-section calculator button.
- Mid CTAs on 6 product pages and program-specific secondaries.
- Calculator post-result next steps and `/calculators/` primary.
- `al-next` on all articles.
- Samantha bar on 6 township pages.
- `sms:` link on contact.
- Remove "pre-approval" wording.

**P2, backlog:**
- `goal` parameters everywhere.
- `/start/` `from` handling.
- A/B test header "Apply Now" against "Start my application".
- Second learn module for long articles.
- Phone display format.
- Align approval of first-person bar copy.

## 11. Limits of this audit

- calendly.com, alignwithalign.com, my1003app.com, app.alignlending.com and the government tool hosts were blocked by the session's egress proxy (CONNECT 403). WebFetch failed DNS for them. They are marked "unverified" in the inventory, not "broken".
- GSC in DataWise has no page dimension. Calculator ranking and topic demand use query families.
- No Bing data is connected, so a Bing export is needed. The CTA recommendations do not depend on the search engine.
- The crawler's `atf` flag means "before the first H2". It does not account for the visual fold on phones.
- No change was made to the live site.
