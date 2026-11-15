# Align Lending Brand Voice and Compliance Guide

**Owner:** Project manager (00-project). **Applies to:** every team that writes or rewrites copy: CTA, core pages, city pages, images (alt text), the consistency team, and the blog writers.
**Status:** v1.0, 2026-11-15. Built from the site's own pages (crawl of 2026-11-15). Where this guide and the brief disagree on a standard, the stricter rule wins. Where it disagrees with the live **Editorial Policy** (`/editorial-policy/`), the Editorial Policy wins and the consistency team flags the conflict to the PM.

**Sources read for this guide** (all under `$DATA/text/`): `editorial-policy.txt`, `about-us.txt`, `why-we-dont-publish-rates.txt`, `licensing.txt`, `samantha-shelton.txt`, `home.txt`, `purchase.txt`, `press.txt`, `reviews.txt`, `contact-us.txt`, three long-form Learn guides (`learn__home-buying.txt` 7,630 words, `learn__mortgage-rate-buydowns.txt` 6,267 words, `learn__buying-home-with-va-loan.txt` 6,165 words) and two city pages (`mortgage-lender-warren-mi.txt` 6,510 words, the longest city page; `mortgage-lender-northville-township-mi.txt` 3,920 words, from the bottom of the range). CTA counts come from every `ctas` record in `pages.jsonl` (931 pages). Site-wide pattern counts come from a scan of all 931 text files.

---

## Contents

1. [Who we are: entity statements](#1-who-we-are-entity-statements)
2. [Voice principles, with do/don't pairs from the site](#2-voice-principles)
3. [Mechanics: rhythm, reading level, numbers, person, Samantha](#3-mechanics)
4. [Style sheet: spelling, terms and fixed strings](#4-style-sheet)
5. [Approved CTA vocabulary](#5-approved-cta-vocabulary)
6. [Banned and avoid words, with replacements](#6-banned-and-avoid-words)
7. [Compliance checklist for mortgage marketing](#7-compliance-checklist)
8. [AI-search writing patterns](#8-ai-search-writing-patterns)
9. [Tone calibration: six rewrites](#9-tone-calibration)
10. [Approved claims library and Samantha quote bank](#10-approved-claims-library)
11. [Pre-publish checklist (one page)](#11-pre-publish-checklist)

---

## 1. Who we are: entity statements

AI answer engines and Google's entity systems need the same facts, stated the same way, on many pages. Use these word for word. Do not paraphrase the facts inside them.

**Canonical entity statement (one sentence, use in intros, About sections, author boxes, city pages):**
> Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas.

**Short form (when the sentence above already appears on the page):**
> Align Lending, an independent Michigan mortgage broker in Waterford

**What a broker does (use whenever the page explains why Align):**
> Align Lending is an independent mortgage broker. We do not lend our own money. We arrange mortgages with wholesale lenders, which make the credit decision and fund the loan. (`/licensing/`)

**Samantha (first reference on any page):**
> Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301

**Approved boilerplate (press and research pages; copied from `/press/`, "the approved descriptions"):**
> Align Lending LLC (NMLS 2041154) is an independent mortgage broker in Waterford, Michigan, founded in 2020 by owner Samantha Shelton (NMLS 1647301), a former stay-at-home mom who opened the business as a one-woman shop. Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas, the brokerage compares purchase, refinance and home equity loans from multiple wholesale lenders, and it publishes free Michigan housing research from public records, including an annual study of property tax uncapping.

**City-page entity line (pattern):**
> Align Lending is an independent mortgage broker based in Waterford, Michigan, serving buyers and homeowners in {City}, {County} County, by phone, text or video, with office visits by appointment on Pontiac Lake Road.

Never imply an office in the city. Align has one office, at 2625 Pontiac Lake Road, Waterford, MI 48328.

---

## 2. Voice principles

The site's own promise is the voice: **"Understand your options before you decide."** (`/about-us/` H2). The Editorial Policy puts it as: "Align's guides exist so you can understand a decision before you make it." Every principle below serves that sentence.

| # | Principle | Do (real site sentence) | Don't |
|---|---|---|---|
| 1 | **Teach before you sell.** Explain the decision first. The CTA follows the explanation. | "If the honest answer is to wait, or to leave a loan you already have alone, she says that too." (`/samantha-shelton/`) | "Apply today and get pre-approved in minutes!" (typical industry copy, not on the site) |
| 2 | **Specifics over adjectives.** Give a number, a Michigan rule or a named public source in place of a describing word. | "Warren parcels sit in six school districts, so two homes in the same city can carry 2025 homestead rates 11.0473 mills apart." (`/mortgage-lender-warren-mi/`) | "...a genuinely thriving Biddle Avenue small-business downtown." (`/mortgage-lender-wyandotte-mi/`) |
| 3 | **Name the tradeoff, not the winner.** Say what decides the choice. Never call a loan, lender or place "best". | "FHA Loans: Room for a thinner credit history or a recent setback, in exchange for mortgage insurance that lasts longer." (`/purchase/`) | "FHA is the best loan for first-time buyers." |
| 4 | **Be honest about limits.** Say what a rule does not do, and when the popular version is wrong. | "The widely repeated 'one point buys 0.25%' is a rule of thumb, not a rule." / "A 2-1 buydown does not stretch your approval." (`/learn/mortgage-rate-buydowns/`) | "A buydown makes any home more affordable." |
| 5 | **Calm, no pressure.** The reader decides when. | "Decide in your own time. You leave with your options and the next step. No obligation to go further." (`/about-us/`) | "Rates won't stay this low. Lock today." |
| 6 | **Plain English, with terms defined once.** | "Your DTI is your total monthly debt payments divided by your gross monthly income." (`/learn/home-buying/`) / "A rate isn't yours until it's locked." (`/why-we-dont-publish-rates/`) | "Your LTV/CLTV has to fall inside the IPC limits." (undefined jargon) |
| 7 | **A person is accountable.** Samantha, not "our team of experts". | "Samantha handles each of her loans herself, from the first conversation to closing." (`/about-us/`) | "Our team of experts is here to help you every step of the way." |
| 8 | **Checkable.** Point to the record the reader can check. | "You can check both licenses on NMLS Consumer Access." (`/editorial-policy/`) | "Michigan home values are up 10% this year." (no source, no period) |
| 9 | **Fair to every place.** Describe the housing, the taxes and the public records. Never describe the people or judge the area. | "Our city pages and guides point you to public records and help with the numbers; they never describe a place as safe or unsafe, rank neighborhoods, or describe who lives somewhere." (`/editorial-policy/`) | "Tight inventory in this sought-after, walkable enclave..." (`/mortgage-lender-hamtramck-mi/`) |

### Headlines: put the topic first, keep the brand line second

Several purchase sub-pages use a brand line as the H1, for example "You are not supposed to understand this yet" (`/purchase/first-time-homebuyer/`) and "Your house is not an ATM" (`/refinance/home-equity-review/`). The lines are on-voice, but an H1 must state the topic and match the search. Rule: **the H1 names the topic and the place; the brand line becomes the subhead directly under it.**

- H1: "First-Time Homebuyer Plan in Michigan"
- Subhead: "You are not supposed to understand this yet. That is what the first call is for."

The core-page teams write the exact H1s. This rule only sets the pattern.

---

## 3. Mechanics

### 3.1 Sentence rhythm

The site at its best runs one longer sentence that explains, then a short one that lands the point. From `/why-we-dont-publish-rates/`:

> "Every number she gives you starts from your file and that day's pricing, not from a borrower who doesn't exist, and it can still change until your rate is locked. That is the whole reason Align doesn't post rates. A number that may not apply to you isn't information. It's a guess with a decimal point."

Rules:
- Put the answer in the first sentence. Give the reason in the second. Then the Michigan specific. Then the next step.
- One idea per sentence. A sentence that needs a semicolon usually wants to be two sentences.
- Mix lengths. After any sentence over 25 words, write one under 15.
- No more than **20% of sentences over 30 words**. Measured on the sample: the long-form Learn guides run 23–43% over 30 words, the city pages 21–26%, and `/about-us/` 5%. Learn and city drafts should move toward the About page.
- Fragments are fine for UI labels and trust lines ("No application required."), not in body copy.

### 3.2 Reading level

Measured with Flesch-Kincaid on the sample texts. Treat these as approximate, because UI labels inflate the scores:

| Page | FK grade | Median sentence (words) |
|---|---|---|
| `/editorial-policy/` | 8.5 | 17 |
| `/about-us/` | 8.6 | 12 |
| `/why-we-dont-publish-rates/` | 9.9 | 15 |
| `/purchase/` | 10.0 | 15 |
| `/` (home) | 10.2 | 15 |
| `/mortgage-lender-warren-mi/` | 10.4 | 20 |
| `/learn/mortgage-rate-buydowns/` | 10.6 | 17 |
| `/learn/buying-home-with-va-loan/` | 11.1 | 20 |
| `/learn/home-buying/` | 12.5 | 26 |

**Targets:** above-the-fold copy, CTAs, direct-answer blocks and city intros at **grade 7–9**. Money and trust pages at grade 9 or below. Learn body copy at **grade 11 or below**. Quoted regulation text is exempt, but explain it in the next sentence.

### 3.3 Numbers

- Use numerals for every figure: "3 business days", "$832,750", "36.9 mills", "2% to 5%".
- Give every figure its **source and period** in the same sentence or the next: "The ACS 2024 puts Warren's median owner value at $193,400" / "the 2026 conforming limit".
- Round in the text and say so ("about", "near", "roughly"). Keep the exact figure for tables.
- Write ranges as "2% to 5%" in prose. Use an en dash only in tables.
- Use dollars with commas and no decimals unless cents matter. Write mills as "62.2516 mills". Give dates as month and year, or the full date when a rule changed on that day.
- **Never write a rate, an APR or a payment Align offers.** Worked examples follow §7.3.
- Regulated figures (loan limits, MSHDA limits, FHA limits, VA funding fees) come only from the figures file the Editorial Policy describes, with the year attached. 2026 values in use on the site: conforming one-unit limit **$832,750** (due for review by **December 15, 2026**), FHA one-unit floor **$541,287**, MSHDA down payment assistance **up to $10,000**, MI Home Loan price limit **$566,355**. These may change in late November and December 2026. See the charter's risk register.

### 3.4 First, second and third person

- **"We" and "our" mean Align Lending, the company.** "We compare your scenario across multiple wholesale lenders." (home meta)
- **"You" means the reader.** Address them directly.
- **Samantha is always third person** in body copy: "Samantha prices a loan from your facts and that day's pricing." She speaks in first person only inside a verbatim, sourced quote.
- **"I" never appears** in body copy, captions or CTAs. The only exception is a verbatim quote.
- Use "Align Lending" in entity statements and the first mention on a page. "Align" is fine after that.

### 3.5 How Samantha is referenced

| Context | Format |
|---|---|
| Byline (Learn) | `Written by Samantha Shelton NMLS 1647301` + `Updated {Month YYYY}` (the current format on 470 of 471 Learn pages) |
| First body mention | "Samantha Shelton, Align's broker owner," or "Samantha Shelton, Broker Owner and Senior Loan Originator (NMLS 1647301)" |
| Later mentions | "Samantha" |
| Never | "Sam" (except inside a client review quoted as written), "our CEO", "Mrs. Shelton", "the Mortgage Mom" (a press headline, not a title), "our team" when the claim is about her personally |
| Quote lead-in | "Samantha Shelton, Align's broker owner, puts it this way:" or a pull quote attributed "Samantha Shelton" |
| Quote source | Only the quote bank in §10.3, or a transcript Align supplies. Anything else: `[NEEDS SAMANTHA QUOTE: topic]` |
| Frequency | One or two quotes per guide, matched to the topic of the original. Do not stack quotes, and do not reuse a quote out of its original context. |

---

## 4. Style sheet

| Use | Not | Evidence |
|---|---|---|
| preapproval, preapproved | pre-approval, pre-approved (body copy) | "preapproval" 1,122 vs "pre-approval" 84 site-wide. The CTA "Start your pre-approval" is being retired anyway (§5). |
| homebuyer, homebuyers | home buyer | 1,780 vs 447. Matches "homebuyer game plan". |
| Loan Estimate, Closing Disclosure | loan estimate, LE (unless defined) | Federal form names, capitalized as the CFPB writes them |
| mortgage broker (for Align) | lender, direct lender, "our loans", "our rates" | Align "does not lend directly" (`/samantha-shelton/`) |
| wholesale lenders | partners, investors (in consumer copy) | |
| state equalized value (SEV), taxable value, principal residence exemption (PRE) | "assessed value" as a synonym for taxable value | Editorial Policy, Michigan tax wording rule |
| Michigan State Housing Development Authority (MSHDA) on first use | MSHDA alone on first use | |
| home equity line of credit (HELOC) on first use | | |
| debt-to-income ratio (DTI), loan-to-value ratio (LTV) on first use | | |
| Equal Housing Opportunity | Equal Housing Lender | Align is a broker. "Equal Housing Lender" appears 0 times today; keep it that way. |
| NMLS #2041154 (company), NMLS 1647301 (Samantha) | other mixes | Majority usage: "NMLS #2041154" on 842 files, "NMLS 1647301" on 929 files. The 12 files with "NMLS #1647301" and the 28 with "NMLS 2041154" are P2 normalization. |
| "Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas." | any other order or list | Exact string on 357 files |
| "5.0 on Google, 123 reviews" / "5.0 on Google across 123 reviews" | "5-star", "hundreds of reviews", "top-rated" | Count as of 2026-11-15. See §7.7. |
| "No credit pull to talk" | "No credit check to talk" | 333 files vs 1 (`/why-we-dont-publish-rates/`). Fix that one page. |
| "Phone: 7 days a week, evenings included" (hours blocks); "seven days a week, evenings included" (prose) | "24/7", "always available" | |
| Oxford comma: **no** | | Site style: "Michigan, Ohio, North Carolina, Florida, Louisiana and Texas" |
| Sentence case for H2/H3 | Title Case Headings | Learn H2s are sentence case. City and product H1s use title-style place names ("Mortgage Broker in Warren, MI"); keep those as they are. |

---

## 5. Approved CTA vocabulary

### 5.1 What is in use today (from `pages.jsonl` `ctas`, 931 pages)

| Label | Instances / pages | Region | Destination | Intent |
|---|---|---|---|---|
| Contact Us | 2,799 / 931 | header, popup | `/contact-us/` | talk |
| Talk with Samantha | 2,686 / 926 (319 above the fold) | content, chrome bar | Calendly | talk |
| 248-506-5727 | 2,429 / 931 | header, footer, content | `tel:` | call |
| Apply Now | 931 / 931 | header | `/start/` | apply |
| Call / Meet | 920 each | chrome bar | `tel:` / Calendly | call / talk |
| Plan my purchase · Try payment scenarios · Explore my equity · Save my plan · Ask Samantha a question | 1,862 header + 931 popup each | header, popup | `alignwithalign.com` (external sister site) | plan / calculate / talk |
| Start my application | 624 / 313 (309 ATF) | content | `/start/?…` | apply |
| Compare loan options | 350 / 350 | content | `/product-loans/` | compare |
| How Michigan taxable value works | 276 / 276 | content (city) | `/learn/michigan-taxable-value/` | learn |
| Get my homebuyer game plan | 179 / 179 | content (Learn) | `/purchase/homebuyer-game-plan/` | plan |
| Explore my equity options | 66 | content | `/refinance/home-equity-review/` | plan |
| Open the guide | 57 | content | PDF guides | learn |
| Get a budget review / Review my break-even / Review an investment property | 53 each | content | purchase and refi sub-pages | plan |
| Build a buy before you sell strategy | 50 | content | `/purchase/buy-before-you-sell/` | plan |
| Schedule a call with Samantha | 43 / 38 | content | Calendly | talk |
| Take the readiness review | 36 | content | `/purchase/mortgage-readiness-review/` | plan |
| book a time with Samantha | 26 | content (inline) | Calendly | talk |
| Open the calculator | 25 | content | calculators | calculate |
| Build my homebuyer game plan | 17 / 12 | content | game plan page (14), **Calendly (3)** | plan |
| Talk it through with Samantha / Talk it through first / Talk through your own situation | 12 / 10 / 6 | content | Calendly | talk |
| Use the calculator | 12 (all ATF) | content | calculator anchors | calculate |
| Start with a few questions | 10 | content | `/start/` | apply |
| Talk through your options | 5 | content | Calendly | talk |
| ~200 one-off labels | 1–5 each | content | mostly Calendly | mixed |

The ~200 one-off labels include "Get a straight read", "Get a straight answer", "Tell Samantha the situation", "Check what you have been told", "Let us check your situation", "Ask before you do it", "Plan my move", "Get your actual list", "Get my first-time buyer plan" (goes to Calendly), "Get my refinance checkup" (Calendly), "Check my down payment options" (goes to `/start/`, not to a DPA tool), "Start your pre-approval", "Get pre-approved", "Compare my options" (Calendly on one page, the refi comparison on another). The full list is in the CTA team's inventory (`01-ctas/`).

**Problems this creates:** (1) 62 distinct labels point to the same Calendly link (and 6 different labels point to `/start/`), so label performance cannot be measured and the site does not read as one voice; (2) some labels promise a deliverable the destination does not give (a "plan" or "checkup" that opens a calendar; "Check my down payment options" that opens the application); (3) "Explore my equity" (header, external site) and "Explore my equity options" (content, `/refinance/home-equity-review/`) are near-identical labels for different destinations.

### 5.2 The standard: one label per intent

| Intent | Standard button label | Destination | Allowed variants | Retire |
|---|---|---|---|---|
| **Apply** | **Start my application** (content) · **Apply Now** (header only) | `/start/` (CTA team to confirm `/start/` leads into the application at `app.alignlending.com`) | none for buttons | Start your pre-approval, Get pre-approved, Check my down payment options, Start with a few questions (keep that last one only if `/start/` is confirmed to be a short intake rather than the application, and then use it as the soft-apply label on hubs) |
| **Talk** | **Talk with Samantha** | Calendly | **Talk through your options** as the secondary label on hub pages where the visitor has not picked a path (`/purchase/`, `/product-loans/`, `/refinance/`) | Schedule a call with Samantha (fold into Talk with Samantha), Talk it through first, Talk it through with Samantha, Get a straight read/answer, Tell Samantha the situation, Let us check your situation, Ask before you do it, Start the conversation, Pick a time to talk, Book a call with Samantha, and the other one-offs |
| **Call** | **Call 248-506-5727** | `tel:+12485065727` | "248-506-5727" in header/footer; "Call or text 248-506-5727" in body | Call me, Call Samantha (use the number) |
| **Plan** | **Build my homebuyer game plan** | `/purchase/homebuyer-game-plan/` (never Calendly) | Purchase situations: "Review my budget", "Plan my buy-before-you-sell move", "Take the readiness review", "Review an investment property", "Get my first-time homebuyer plan" (→ `/purchase/first-time-homebuyer/`), "Plan my VA purchase". Refinance: "Review my break-even", "Explore my equity options" | Get my homebuyer game plan (179 instances, change the label only), Build a homebuyer game plan, See the homebuyer game plan, Build a game plan, Get a budget review |
| **Calculate** | **[Estimate / Calculate / Check] my [output]** | the calculator, at its anchor | "Estimate my property tax", "Calculate my break-even", "Estimate my VA funding fee", "Check an address for USDA", "Find my county loan limit", "Estimate my available equity" | Use the calculator, Open the calculator, Run the numbers (too vague above the fold) |
| **Compare** | **Compare loan options** | `/product-loans/` | "Check my Loan Estimate" (→ `/compare-loan-estimates/`), "Compare cash-out and home equity" (→ `/refinance/cash-out-vs-home-equity/`) | Compare my options (ambiguous), Check a Loan Estimate you already have, Compare two Loan Estimates side by side (keep as body text, not the button) |

**Rules for every CTA**
1. **The label matches the destination.** If it says "plan", "review" or "estimate", it opens that tool or page, not a calendar. Calendly CTAs say "Talk".
2. **Use first person ("my")** for action buttons. This matches "Start my application", the highest-volume content CTA.
3. **One primary and one secondary above the fold.** The primary follows intent: apply on application-intent money pages, plan on purchase-situation pages, calculate on calculator pages, talk on Learn guides. The secondary is usually "Talk with Samantha".
4. **Pair a friction reducer with the CTA it is true for.** "No credit pull to talk" sits under a **talk** CTA. Under an **apply** CTA, use "A credit check comes later, only with your permission." (from `/why-we-dont-publish-rates/`), once Align confirms the application flow asks permission before any pull. Approved reducers: "No credit pull to talk", "No application required" (talk and plan CTAs only), "Nothing is sent until you choose", "No obligation to go further", "Every tool is free and needs no signup".
5. **Contextual inline links are allowed in body copy** ("ask Samantha about a seller-paid buydown"). They must go to Calendly and must not be styled as buttons. Buttons keep the standard labels so GA4 can compare like with like.
6. **Never place an apply CTA next to a worked payment example** (Editorial Policy: an example "never sits beside an application link").
7. **No urgency words in CTAs** ("now", "today", "before rates rise"). The header "Apply Now" is the single grandfathered exception, as a navigation convention.
8. **Measurement:** the site's `window.alignTrack` helper already fires `cta_click` with `destination` (`apply`, `start`, `schedule`, `partner_site`) and `phone_click`, through one delegated listener. It does not send `link_text`, although `link_text` is on the allowed list. The CTA team should recommend adding it. Standard labels make that dimension useful. The helper drops any value containing digits, so the phone-number label will not appear in reports, and that is fine.

---

## 6. Banned and avoid words

**Banned** means it never appears in Align copy (client reviews quoted as written are the only exception, and §7.7 limits which reviews may appear). **Avoid** means it needs a reason and a fact beside it.

| Category | Banned / avoid | Why | Write instead |
|---|---|---|---|
| **Hype and superlatives** (banned) | amazing, incredible, best, #1, top, leading, premier, world-class, unbeatable, unmatched, ultimate, game-changer, revolutionary, exceptional | Editorial Policy: "no superlatives about Align or about any place"; unverifiable claims (UDAAP, MAP Rule) | The specific fact: "5.0 on Google across 123 reviews", "Hall of AIME inductee (2024)" |
| **Effort fluff** (banned) | seamless, hassle-free, stress-free, effortless, painless, lightning-fast, instant, quick and easy | Promises an experience nobody can guarantee | Say what happens: "Upload documents from your phone and keep the file moving." (home) |
| **Filler clichés** (avoid) | dream home, journey, unlock, empower, navigate (as filler), tailored solutions, one-stop shop, peace of mind, in today's market | Generic. Every lender's site says them. "navigating" appears 131 times on 71 Learn pages, and "journey" on 7. | Name the step: "from accepted offer to closing day" |
| **Rate and price talk** (banned) | low rates, lowest rates, best rates, great rates, competitive rates, rates as low as, today's rates, lock in a low rate, cheapest, save thousands, no closing costs, no fees | Align publishes no rates (`/why-we-dont-publish-rates/`). A rate claim also brings in Reg Z §1026.24(c) and (f). | "Samantha prices your file with multiple wholesale lenders and shows you what fits." / "Compare Section A, lender credits and the APR on each Loan Estimate." |
| **Approval and outcome promises** (banned) | guaranteed approval, pre-approved in minutes, approved in 24 hours, everyone qualifies, bad credit OK, we'll get you approved, close in X days (as a promise) | Editorial Policy: "No approval claims, no promised outcomes". Wholesale lenders approve loans, Align does not. | "Loan approval is subject to underwriting, credit, income, asset, appraisal and property eligibility review." A sourced market statistic is allowed: "The average purchase loan closed in 36.8 days in March 2026." |
| **Pressure** (banned) | act now, don't wait, hurry, limited time, last chance, before rates rise, rates are going up, only X spots, don't miss out, exclamation points | Editorial Policy: "no countdown pressure". The brief bans exclamation points. "!" appears on 326 pages, almost entirely inside quoted client reviews (allowed). Outside reviews only about 29 remain, mostly quoted HUD text. | "Decide in your own time." / "The early call is almost always easier than the emergency call." (Samantha, quote bank) |
| **Government endorsement** (banned) | government loan (alone), HUD-approved, FHA-approved broker, VA-approved lender, "government program" for a non-government product | 12 CFR 1026.24(i)(3) prohibits misrepresenting government endorsement | "FHA loans, insured by HUD and made by FHA-approved wholesale lenders", plus the non-affiliation disclaimer (§7.6) |
| **"Counselor"** (banned) | mortgage counselor, housing counselor, financial advisor (for Samantha) | 12 CFR 1026.24(i)(6): misleading use of "counselor". HUD-approved housing counseling is a regulated service. | "loan originator", "broker", "Samantha" |
| **Lender language for Align** (banned) | we lend, our rates, our loans, direct lender, we approve, we fund | Align "does not lend directly" | "the wholesale lenders we work with approve and fund the loan" |
| **Fair housing and steering** (banned) | safe, unsafe, crime-free, family-friendly, perfect for families, young professionals, retirees, exclusive, desirable, sought-after, up-and-coming, prestigious, upscale, affluent, good schools, bad schools, best neighborhoods, quiet, thriving, ideal for | Fair Housing Act advertising, and the Editorial Policy: "never describe a place as safe or unsafe, rank neighborhoods, or describe who lives somewhere" | Housing facts and public records: build years, unit mix, millage by school district (as a taxing unit), assessor and ACS figures with the period. Live examples to fix: "sought-after, walkable enclave" (Hamtramck), "a built-out, desirable suburb" (Birmingham), "genuinely thriving" (Wyandotte), "desirable Livingston County address" (Brighton) |
| **Credit-pull absolutes** (avoid) | no credit check, soft pull only, won't affect your credit | Accurate only for a conversation. The application may involve a pull. | "No credit pull to talk" / "Talking first doesn't touch your credit." |
| **Jargon undefined** (avoid) | DTI, LTV, CLTV, PMI, MIP, SEV, PRE, COE, IPC, LE/CD | Reading level, and the plain-English principle | Spell out and define on first use |
| **Samantha-banned phrases** | The Editorial Policy refers to "phrases Samantha has asked us never to use". The list is not published on the site. | | `[NEEDS ALIGN INPUT: Samantha's banned-phrase list]`. PM requests it (tracker item PM-06). |

---

## 7. Compliance checklist

This checklist is a marketing-review standard for this project, not legal advice. Items marked **[COUNSEL]** need sign-off from Align's compliance counsel before the related change goes live. CFPB and eCFR could not be reached from this session, so citations come from the regulation text as published and should be confirmed when counsel reviews.

### 7.1 No rates, no APR, no payment promises
- [ ] No current or "starting at" rate, APR, points price or payment that Align offers, anywhere: copy, alt text, schema or meta.
- [ ] Calculators start blank. "No calculator starts with one filled in." (Editorial Policy.) Rate dropdowns that list choices (for example `/product-loans/bank-statement-loan/`, `/product-loans/buydown-loans/`) must not preselect a value.
- [ ] Calculator results carry the line "Arithmetic on the figures you entered, not a quote or a recommendation." (used on `/learn/mortgage-rate-buydowns/`).
- [ ] Schema never populates `interestRate`, `annualPercentageRate` or `loanTerm` with an offer (see §8.6).

### 7.2 Reg Z / TILA advertising trigger terms (12 CFR 1026.24)

| Trigger term — §1026.24(d)(1) | Examples that trigger | If used, the same ad must clearly state — §1026.24(d)(2) |
|---|---|---|
| (i) Amount or percentage of any **down payment** | "3% down", "$10,000 down", "as little as 3.5% down". Conservative practice also treats "0% down", "no down payment" and "100% financing" as triggers. **[COUNSEL]** | (i) the down payment amount or percentage; (ii) the terms of repayment over the full term, including any balloon; (iii) the APR, and if the rate may increase after consummation, that fact |
| (ii) **Number of payments or period of repayment** | "360 payments", "30-year mortgage", "repay over 15 years" | same |
| (iii) **Amount of any payment** | "$1,996 a month", "payments under $1,500" | same |
| (iv) **Amount of any finance charge** | "$3,000 in points", "less than $500 in interest" | same |

**Usually not triggers** (still subject to accuracy rules): "low down payment options", "no monthly mortgage insurance", "down payment assistance available", "fixed or adjustable terms", "flexible terms".

**Dwelling-secured add-ons:**
- §1026.24(c): a stated rate must be stated as an APR.
- §1026.24(f): a stated payment must show the period it applies to. If it excludes taxes and insurance, it must say so and that the actual payment will be higher.
- §1026.24(i): seven prohibited practices. (1) misleading use of "fixed"; (2) misleading comparisons with actual or hypothetical payments; (3) misrepresenting government endorsement; (4) using the consumer's current lender's name; (5) misleading claims of debt elimination; (6) misleading use of "counselor"; (7) misleading foreign-language ads.

**The Align conflict to resolve [COUNSEL, P0]:** Align publishes no APR, so any promotional copy that uses a trigger term can never carry the required disclosure. Live examples to review:
- Product page names and H1s that state a repayment period: `/product-loans/30-year-fixed/`, `/product-loans/15-year-fixed/` ("30-Year Fixed Mortgages in Michigan").
- Down-payment percentages in Learn guides that sit beside CTAs. 171 Learn pages contain "N% down", and 55 contain "0% down", "zero down", "no down payment" or "100% financing". For example, `/learn/home-buying/` opens with "conventional loans start at 3% down, FHA loans at 3.5% with a 580 credit score, and VA and USDA loans allow 0% down".

**Writer rules until counsel rules:**
1. On money pages (home, purchase, refinance, product, city): **no trigger terms.** Use "low down payment programs", "no monthly mortgage insurance", "fixed-rate loans with 15- or 30-year terms" only if counsel clears term names, and link to the calculator.
2. In Learn guides, a program rule may be stated **as the agency's rule, with the agency named and linked**: "HUD sets FHA's minimum down payment at 3.5% of the price for borrowers with a credit score of 580 or higher." Never write it as an Align offer ("Get into a home with just 3% down through Align").
3. Never put a trigger-term sentence in the same block as an apply CTA.

### 7.3 Worked examples
- [ ] Every example with numbers carries the site's exact label, **"Hypothetical example, not an offer. Actual rates, costs and payments vary."** It is already on 489 pages. Keep the wording identical.
- [ ] Examples use round, plainly hypothetical figures, never "Align's rate" or "with Align".
- [ ] An example never sits beside an application link (Editorial Policy).
- [ ] A payment shown in an example states what it includes ("principal and interest only; taxes and insurance add to it") under §1026.24(f).

### 7.4 Equal Housing Opportunity and fair lending
- [ ] The global footer carries the EHO logo and statement. Verified in the raw HTML of all 7 sample templates under `$DATA/../site/`.
- [ ] Every guide also carries "Equal Housing Opportunity" in its body disclosure line. This is an Editorial Policy gate. In the extracted body text it shows on only 17 of 471 Learn pages. The consistency team confirms whether the Learn template's in-content disclosure is missing or was only excluded from extraction.
- [ ] Use "Equal Housing Opportunity". Never use "Equal Housing Lender".
- [ ] City pages: no race, ethnicity, religion, national origin, sex, disability or familial-status data or descriptions; no "safe" or "family" language; no school rankings. School districts appear only as taxing units and as public-record names (§6).
- [ ] Images of people: never chosen or described to signal who lives somewhere. Alt text describes the house, not the people (for the alt-text team).

### 7.5 NMLS and licensing display
- [ ] Company: "Align Lending LLC, NMLS #2041154" on every page (footer) and in every guide's disclosure line.
- [ ] Individual: "Samantha Shelton, NMLS 1647301" wherever she is named as a loan originator: bylines, author boxes, CTA blocks, city hero.
- [ ] Link to NMLS Consumer Access where the page asks the reader to verify (`/licensing/`, `/samantha-shelton/`, the editorial policy).
- [ ] Licensing statement, exact: **"Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas."** Never imply licensing in any other state. No city or state page for an unlicensed state.
- [ ] Texas consumer complaint notice (7 TAC §56.200(c)) stays on `/licensing/` in its required form.
- [ ] If any other loan originator is named (for example in a client review), show that person's NMLS ID or do not feature the review. **[COUNSEL]** to confirm state-specific advertising rules (Michigan Mortgage Brokers, Lenders, and Servicers Licensing Act; Florida OFR; NC; OH; LA; TX SML) for NMLS-ID placement on social and third-party content.

### 7.6 Accuracy, UDAAP and the MAP Rule
- [ ] Every factual claim is true, current and on file with its source (Dodd-Frank UDAAP, 12 U.S.C. 5531/5536; Mortgage Acts and Practices Advertising Rule, Regulation N, 12 CFR 1014).
- [ ] **Recordkeeping:** Regulation N requires keeping copies of commercial communications for 24 months. Writers save the final approved copy and its source list in `06-blogs/drafts/` with the approval date, and Align keeps published versions. **[COUNSEL]** to confirm retention practice.
- [ ] Government non-affiliation disclaimer on every FHA, VA and USDA page: "Align Lending is not acting on behalf of or at the direction of FHA, HUD, USDA or the VA, and is not affiliated with or endorsed by any government agency." It is on 303 Learn pages and `/samantha-shelton/`, but **0 of 21 product pages**, including `/product-loans/fha-loans/`, `/product-loans/va-loans/` and `/product-loans/usda-loans/`. P0 for the product teams.
- [ ] Michigan property tax wording, required by the Editorial Policy: "The year after a home sells, its taxable value resets to the state equalized value, half of the assessor's market value, not automatically half the price you paid." Never "your taxes will double" or "taxable value equals half the price".
- [ ] Broker compensation: use the site's wording exactly. `/about-us/` says "Align is paid by the lender, not by a fee you pay Align." That is an absolute statement. **[VERIFY with Align]** that no borrower-paid compensation is ever used before the claim is reused in new content. `/licensing/` has the safe version: "How Align Lending is paid on your loan, and how much, appears on your Loan Estimate and Closing Disclosure."
- [ ] Non-offer line on money pages: "Nothing on this page is a credit decision, a preapproval, a commitment to lend, or an offer of credit."
- [ ] Not-advice line on guides: "Align's guides are general education, not legal, tax or financial advice, not a rate quote and not an offer of credit."
- [ ] RESPA Section 8: no copy offering anything of value for referrals, including on `/real-estate-agents/` and co-marketing pages.
- [ ] Forms keep their TCPA consent language (`/contact-us/` has it). "Agreeing is not a condition of getting a loan."

### 7.7 Trust-strip and review claims
- [ ] **"No credit pull to talk"** is true for a call, a text or a booked meeting. It is not a claim about the application. Place it next to talk CTAs only (§5.2 rule 4). **[VERIFY with Align]** the exact point in the `/start/` flow where a credit pull happens.
- [ ] **"5.0 on Google, 123 reviews"** appears on 353 pages (682 instances) and in `AggregateRating` schema on the home page. It must match the live Google Business Profile on the day a page publishes. One source of truth: update the shared template or global widget, never page by page. Monthly check (tracker PM-09). If the count is not maintained automatically, change to "5.0 on Google" with a link and no count. **[DECISION: Align]**
- [ ] Reviews are quoted verbatim and never edited (Editorial Policy). Keep "Individual experiences. Results vary." under every review block.
- [ ] **Do not feature reviews on money pages that make rate or price claims or name a loan originator without an NMLS ID.** Live example: `/product-loans/asset-based-income-loans/` shows "Taylor is the best. She's so sweet and has great rates." and "Kevin was great!", which name originators other than Samantha and make a rate claim. These also sit uneasily with "Samantha handles each of her loans herself." Swap in process-focused reviews.
- [ ] Never invent or "representatively" paraphrase a review. Never add review stars to pages without the real source.

### 7.8 AI-drafted content disclosure
- [ ] The Editorial Policy is the disclosure: "We use software, including AI writing tools, to research, draft and check the library. Software does not decide what a guide says." Every new guide links to it from its Sources section ("How we choose and check sources" → `/editorial-policy/`), as existing guides do.
- [ ] The byline stays "Written by Samantha Shelton NMLS 1647301". Do **not** add claims that she personally wrote or hand-checked a specific guide. The policy FAQ answers "Does Samantha write every guide herself?" with "Every guide is published under her name and license." **[DECISION: Align]** whether "Written by" should become "By" or "Reviewed by", for consistency with that FAQ. Writers do not change the byline on their own.
- [ ] Any draft that describes how Align works or quotes Samantha is marked **"Subject to Align approval"** at the top of the file.
- [ ] No AI-generated photos of people presented as clients, staff or residents.

### 7.9 Never invent
Quotes, client stories, testimonials, review counts, award names or years, press mentions, statistics, closing times, loan counts, lender counts, team size. Use placeholders:
- `[NEEDS SAMANTHA QUOTE: topic]`
- `[VERIFY: claim + suggested primary source]`
- `[NEEDS ALIGN INPUT: what is needed]`

The placeholders stay in the draft until Align resolves them. The consistency team rejects any draft that has a fact without a source and without a placeholder.

### 7.10 External link policy

**Tiers** (from the Editorial Policy's "What we link to, and what we never link"):

| Tier | What | Examples (domains already used on the site) | Use for |
|---|---|---|---|
| 1 | Federal and state agencies, regulators, laws, courts, counties, municipalities | consumerfinance.gov, hud.gov, va.gov, rd.usda.gov, irs.gov, fhfa.gov, census.gov, ecfr.gov, federalregister.gov, michigan.gov, legislature.mi.gov, county and township sites | Every rule, limit, deadline, tax figure and program requirement. **Required** for these. |
| 2 | Fannie Mae and Freddie Mac | selling-guide.fanniemae.com, freddiemac.com, sf.freddiemac.com | Conventional loan rules, PMMS |
| 3 | Professional and trade associations, universities, nonprofits | nar.realtor, ASHI and appraisal bodies, university extension services, Habitat for Humanity | Practical standards that no agency publishes |
| 4 | Neutral data publishers, news outlets, consumer reference publishers | censusreporter.org, Nolo, Angi (the Editorial Policy names these) | Practical how-to detail only, when no Tier 1–3 source exists. Never the source of a figure that a Tier 1 source publishes. |
| **Never linked** | Lenders, other brokers, rate sites, loan marketplaces, listing portals, real estate offices | Zillow, Redfin, Realtor.com, Homes.com, Bankrate, NerdWallet, LendingTree, Rocket, any bank's mortgage page | **Named, never linked**: cite as plain text ("Redfin's Warren page for September 2026 shows...") |

**Rules**
- [ ] The brief's "government or primary sources only" holds for **every figure and rule** in new content. Tiers 3–4 are allowed only for non-regulatory how-to detail, matching the Editorial Policy.
- [ ] **Not acceptable as sources:** Wikipedia (171 links, all on city pages) and World Population Review (39 links, city pages). Replace them with Census/ACS, the county or the municipality.
- [ ] Prefer the publisher's own domain to a mirror. Example: the Polygon Research loan-cost study is linked on a third-party CDN (`cdn.prod.website-files.com`, 119 links). Link the original publisher or name it without a link.
- [ ] Attributes: editorial citations use `target="_blank" rel="noopener"`, the current site pattern on 53,503 content links. **No `nofollow` on Tier 1–3 citations.** About 1,400 links carry `nofollow` today; the link team reviews them. Never use `sponsored`, because nothing is paid.
- [ ] Every new guide ends with **Sources** ("Every outside source this guide links to, in the order it appears.") listing each linked publisher, matching the guide's structured-data citations.
- [ ] Treat link-check status 0/403/429 as "blocked or bot-protected", not broken. Only 404/410/5xx and DNS failures are broken (brief §3).

---

## 8. AI-search writing patterns

The goal is for Google AI Overviews, ChatGPT, Perplexity and Copilot to quote Align for the questions people ask, especially Michigan-specific ones where Align has unique data (taxable value uncapping, transfer tax, MSHDA, county loan limits, HMDA research).

### 8.1 Direct-answer block under every question H2

**Spec**
- The H2 is the question as people search it: "How does a 2-1 buydown work?"
- The first paragraph under it is **40–60 words** and answers completely by itself. It makes sense if lifted alone, with no "as mentioned above", no "it depends" opener, and no CTA inside.
- The first sentence restates the subject and gives the answer. The second gives the deciding number or rule, with its source. The third, if needed, gives the Michigan or Align specific.
- Supporting detail, tables and nuance come after the block.
- Grade 9 or below.

**Site example that already works** (`/learn/mortgage-rate-buydowns/`, under "How does a 2-1 buydown work?"):
> "A 2-1 buydown drops your effective rate 2 percentage points in year one and 1 point in year two, then steps up to the note rate in year three and stays there."
That is 33 words. Add one sentence ("Lenders still qualify you at the full note rate, under Fannie Mae and FHA rules.") to reach the 40–60 target.

**Too long for a block** (`/learn/buying-home-with-va-loan/` opening paragraph, about 90 words in one run). Split it into a 50-word answer plus a key-takeaways list.

**Model block (Michigan-specific, ready to reuse):**
> **Will my property taxes go up after I buy a house in Michigan?**
> Usually, yes. The year after a Michigan home sells, its taxable value resets to the state equalized value, which is half of the assessor's estimate of market value, not half of the price you paid. Align's 2026 Uncapping Study tracks how large that reset runs by city. Budget from the buyer's number, not the seller's tax bill. (57 words)

### 8.2 Entity statements
- Use the canonical entity statement (§1) once per page, in the intro or the "Why Align" section, and in the author box.
- Keep the same facts in the same order every time: independent mortgage broker → Waterford, Michigan → NMLS #2041154 → founded August 2020 → six states.
- Write Samantha's entity line identically on every page: "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301".
- City pages add the place: "{City} is in {County} County" and, for townships, the township/city distinction (the Northville Township page does this well: "It is separate from the City of Northville next door").

### 8.3 Quotable facts
- One fact per sentence, with number, unit, place, period and source: "Six school districts tax Warren parcels, with 2025 homestead rates from 51.2043 to 62.2516 mills." (Warren)
- Prefer Align's own data where it exists, and cite it by name: "Align Lending's 2026 Michigan Property Tax Uncapping Study", "Align's Michigan Mortgage Market Report (2025 HMDA data)". Unique data is what earns citations.
- Put the key facts in a short "Key takeaways" list near the top. Long-form guides already do this.
- Tables need units in the headers and a source line under them (the buydown guide's tables do this).

### 8.4 Source lists
- Heading "Sources", intro line "Every outside source this guide links to, in the order it appears.", then the link "How we choose and check sources" (→ `/editorial-policy/`), then each source as `link text — Publisher` (the VA guide pattern).
- Only sources actually linked in the body. "A guide cannot claim a source it does not use." (Editorial Policy.)

### 8.5 FAQ formatting
- Section H2: "Questions about {topic}" (the site pattern: "Questions about rate quotes", "Questions about how we write").
- 4–8 questions as H3s, phrased the way people search (take them from GSC question queries and People Also Ask, supplied by `05-content-keywords/`).
- Answers of 40–80 words. The first sentence is the answer ("No.", "Usually.", "It can if something changes...").
- The visible questions and answers match the `FAQPage` JSON-LD **word for word**. No schema-only questions.
- Do not repeat the same FAQ across many pages. City FAQs must use city-specific facts.
- Google shows FAQ rich results only for a narrow set of authoritative sites, so FAQ markup is for machine readability, not SERP stars. Keep it only where the FAQ is visible and useful.

### 8.6 Schema expectations by page type

| Page type | Required types (keep or add) | Rules |
|---|---|---|
| Home | `Organization` + `FinancialService` (one entity with `@id`), `WebSite` + `SearchAction`, `Person` (Samantha), `PostalAddress`, `GeoCoordinates` | `AggregateRating` only if it matches Google on the publish date (§7.7). Self-serving review markup does not earn stars. `areaServed` lists the six states. |
| Purchase / refinance hubs and sub-pages | `WebPage`, `BreadcrumbList`, `Service` (provider = the Organization `@id`), `FAQPage` if a visible FAQ exists | No rate, APR or term properties |
| Product pages | `WebPage`, `BreadcrumbList`, `Service` or `FinancialProduct` with `provider`; `FAQPage` if visible | If `MortgageLoan` is used, **never** populate `interestRate`, `annualPercentageRate` or `loanTerm`. Government products add the non-affiliation text visibly, not only in schema. |
| Calculators | `WebApplication` (`applicationCategory: FinanceApplication`, `offers.price: 0`), `BreadcrumbList`, `FAQPage` if visible | No default rate in `potentialAction` examples |
| Learn guides | `Article` (author `Person` Samantha with NMLS `identifier` as `PropertyValue` and `sameAs` NMLS Consumer Access), `BreadcrumbList`, `FAQPage` (visible), `citation` list matching Sources, `dateModified` = visible "Updated" | Existing guides already carry `Article`, `FAQPage`, `SpeakableSpecification`, `PropertyValue`. Keep that pattern. |
| Learn hubs and category pages | `CollectionPage`, `ItemList`, `BreadcrumbList` | |
| City pages | `WebPage`, `Service` with `areaServed` → `City` (`containedInPlace` → county `AdministrativeArea`), provider = the Organization `@id` with the **Waterford** address, `BreadcrumbList`, `FAQPage` | **Never** a `LocalBusiness` with an address in the city. Align has no office there. |
| County and state hubs | `CollectionPage`, `ItemList` of city pages, `BreadcrumbList`, `AdministrativeArea` | |
| Research | `Report` or `Article`, plus `Dataset` for each CSV download (`creator`, `temporalCoverage`, `distribution`, `license`) | Dataset markup helps AI engines cite the numbers |
| About, Samantha, Press | `AboutPage` / `ProfilePage`, `Person` (`jobTitle`, `identifier` NMLS, `worksFor`, `award` = **verified awards only**, §10, `sameAs`) | |
| Reviews | `WebPage` only | No self-serving `Review` markup |

### 8.7 Bing and Copilot notes
Copilot answers draw on the Bing index. Bing Webmaster Tools data is not connected (brief §2), so no Bing numbers are used anywhere. Writers and core teams should still: keep titles and H1s literal (Bing weights exact-match titles more heavily), keep FAQ answers self-contained, and note in reports where IndexNow (supported by Rank Math) should be turned on to push updates. **A Bing Webmaster export is needed** (tracker PM-05).

---

## 9. Tone calibration

Six rewrites. Each "weak" line is real site copy (with URL) or labeled as typical industry copy. Each Align version uses only facts already on the site.

**1. Place superlative → housing fact** (`/mortgage-lender-hamtramck-mi/`)
- Weak: "Tight inventory in this sought-after, walkable enclave keeps competition strong for updated homes."
- Align: "At the spring peak, Hamtramck homes have gone pending in as little as 11 days; across the year, 30 to 60 days is more typical. Have a full preapproval in hand before you tour."
- Why: drops "sought-after" and "enclave" (Editorial Policy: no superlatives about any place) and keeps the numbers the page already cites.

**2. Schools as a selling point → schools as a taxing unit** (`/mortgage-lender-birmingham-mi/`)
- Weak: "Demand is driven by Birmingham Public Schools, walkability, and limited inventory in a built-out, desirable suburb."
- Align: "Birmingham is built out, so few homes come to market at once. Check which school district taxes the parcel before you budget, because its millage is part of the buyer's tax bill."
- Why: removes the fair-housing risk ("desirable", schools as a reason to live there) and turns it into a money fact the reader can act on.

**3. Generic hype hero → Align's value in specifics** (typical industry copy, not on the site)
- Weak: "Get the best rates and fast, hassle-free approvals from Michigan's top mortgage team!"
- Align: "One application, shopped across multiple wholesale lenders. Samantha explains the tradeoffs before you decide, and talking first doesn't touch your credit."
- Why: built from home-page sentences. No rate claim, no approval promise, no superlative, no exclamation point.

**4. Rate pressure → how rates actually work** (typical industry copy)
- Weak: "Rates are rising. Lock in a low rate before it's too late!"
- Align: "Mortgage rates follow the bond market and can move daily. A rate isn't yours until it's locked, and a lock holds only if you close within its time frame and nothing in your application changes."
- Why: the rate-policy page's own wording. It teaches instead of pressuring.

**5. "Team of experts" → an accountable person** (typical industry copy)
- Weak: "Our team of experts will guide you through every step of your home buying journey."
- Align: "Samantha handles each of her loans herself, from the first conversation to closing. Phone hours run seven days a week, evenings included."
- Why: from `/about-us/`. It names the person and gives a checkable service fact in place of "journey".

**6. Product cliché → the tradeoff** (typical industry copy)
- Weak: "FHA loans are perfect for first-time buyers with bad credit."
- Align: "FHA loans leave more room on credit history, in exchange for mortgage insurance that usually lasts longer than on a conventional loan. Compare both with your actual credit and savings."
- Why: from the `/purchase/` and home loan-option cards. It names what decides the choice, and avoids "perfect", "bad credit" and any trigger term.

---

## 10. Approved claims library

Reuse these **exactly**. "Status" means: **Approved** — reuse as written; **Verify** — do not reuse in new copy until the item is resolved; **Dated** — reuse only with its date.

### 10.1 Company and licensing

| Claim | Approved wording | Where it appears | Status |
|---|---|---|---|
| Legal name and company NMLS | Align Lending LLC, NMLS #2041154 | Footer on every page; `/licensing/` | Approved |
| What Align is | "Align Lending is an independent mortgage broker. We do not lend our own money. We arrange mortgages with wholesale lenders, which make the credit decision and fund the loan." | `/licensing/` | Approved |
| Founding | "Founded August 2020" / "founded the company in August 2020" | `/about-us/`, `/reviews/`, `/samantha-shelton/` (home says "in 2020") | Approved |
| Office | 2625 Pontiac Lake Road, Waterford, MI 48328; "Office visits are by appointment" | `/licensing/`, `/contact-us/`, home, `/samantha-shelton/` | Approved |
| Phone and email | 248-506-5727 (call or text); samantha@alignlending.com | site-wide | Approved |
| Hours | "Phone: 7 days a week, evenings included. Office: by appointment." | home, `/why-we-dont-publish-rates/`, `/reviews/` | Approved |
| Licensed states | "Licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas." | 357 pages, footer | Approved |
| State regulators | MI DIFS; Ohio Division of Financial Institutions; NC Commissioner of Banks; Florida OFR; Louisiana OFI; Texas SML | `/licensing/` | Approved |
| Equal Housing | "Align Lending is an Equal Housing Opportunity company." | `/licensing/`, footer | Approved |
| Lender network | "We compare your scenario across multiple wholesale lenders" | home meta description, home "More Lender Options" | Approved. Never state a lender count. |
| How Align is paid | "How Align Lending is paid on your loan, and how much, appears on your Loan Estimate and Closing Disclosure." | `/licensing/` | Approved |
| How Align is paid (absolute version) | "Align is paid by the lender, not by a fee you pay Align. Federal rules bar a broker's pay from changing with the rate or fees." | `/about-us/` | **Verify** with Align (borrower-paid compensation) |
| Who handles the loan | "Samantha handles each of her loans herself, from the first conversation to closing." | `/about-us/`, `/reviews/` | Approved for Samantha's loans. **Verify** before generalizing. CanvasRebel (Oct 2024) reported 20 loan originators, and reviews on product pages name other originators. |
| Team size | "A CanvasRebel profile published in October 2024 reported that the company had grown to 20 loan originators." | `/samantha-shelton/` | Dated. Attribute it every time. |
| No rates | "Align never publishes its own rates, and no calculator starts with one filled in." | `/editorial-policy/` | Approved |
| Tools | "Every tool is free and needs no signup. Nothing goes to Samantha unless you choose to send it." | home | Approved |
| Trust strip | "No credit pull to talk" · "No application required" · "5.0 on Google, 123 reviews" | 333 / many / 353 pages | Approved (talk context only). Review count is **Dated**: as of 2026-11-15, re-check monthly. |

### 10.2 Samantha

| Claim | Approved wording | Where | Status |
|---|---|---|---|
| Title and NMLS | Broker Owner and Senior Loan Originator, NMLS 1647301 | site-wide | Approved |
| Licensed since | "a licensed loan officer since May 2020" | `/samantha-shelton/` | Approved |
| Origin story | Stay-at-home mom of three boys; licensed during the 2020 shutdown; drove to Ohio to sit the exam; opened Align as a one-woman operation in Waterford | `/about-us/`, `/samantha-shelton/`, home | Approved (use her own words from `/about-us/` when quoting) |
| Hall of AIME | "Hall of AIME inductee (2024, inducted at Fuse 2024)" | `/press/` (primary source linked), `/about-us/`, home, `/samantha-shelton/` | Approved |
| Women With Vision | "2023 Women With Vision honoree" | `/press/` (primary source linked). The site also says "Woman with Vision" on 18 pages. | Approved as "Women With Vision". Normalize the 18 pages (P2). |
| MPA Elite Women | "Mortgage Professional America 2025 Elite Women" | `/press/` | Approved |
| HousingWire Rising Star | "HousingWire 2024 Rising Star" | `/press/` | Approved |
| NAMB Broker of the Year | "NAMB Broker of the Year" | 18 pages, including home, `/about-us/`, `/samantha-shelton/`, all 10 purchase sub-pages, 3 refinance sub-pages, `/reviews/` | **Verify.** It is **not** on the `/press/` awards list, which links each award to the organization's primary winner list, and no year is given anywhere. Do not use in new copy until Align supplies the year and the NAMB source (tracker PM-07). |
| AIME role | "Director of Membership, Regional, for the Association of Independent Mortgage Experts", member of its Women's Mortgage Network committee | `/press/` | Approved |
| Press | "61 verified placements"; National Mortgage Professional profile "The Mortgage Mom" (June 2025); quoted in Mortgage Professional America (April, June and August 2026) | `/press/` | Dated (count as of crawl) |
| Podcasts | Guest on the AIME Podcast (2023) and the Broker Power-Up Podcast (2026) | `/samantha-shelton/` | Approved |

### 10.3 Samantha quote bank (verbatim, already published, sourced to her interviews and podcasts per the Editorial Policy)

Use only in a context that matches the original topic. Copy the punctuation exactly.

| Quote | Topic | Where it appears |
|---|---|---|
| "I'd rather say, 'Let's check,' than tell somebody something that doesn't apply to them." | accuracy, verifying | `/editorial-policy/`, `/research/michigan-mortgage-market-report/` |
| "I want somebody to get off the phone and understand what we're doing." | explaining | `/editorial-policy/` |
| "I own a mortgage brokerage in Michigan and I help people understand their options before they make one of the biggest financial decisions they're ever going to make." | who she is | `/about-us/` |
| "Why. That's my first question." (long form adds: "What are we using the money for?") | home equity, cash-out | home, `/refinance/`, `/learn/home-equity-loans-pros-and-cons/` |
| "The maximum somebody can qualify for and the amount they actually feel comfortable paying every month are not always the same number. And I don't live in your house." | budget, affordability | `/learn/mortgage-rate-buydowns/` + 3 more |
| "If you're making a change to your mortgage and there are costs involved, how long does it take before the benefit of that change has made up for those costs? That's the idea." | break-even, refinance, points | `/learn/mortgage-rate-buydowns/`, `/points-vs-lender-credit-calculator/` |
| "Don't build your budget around somebody else's tax bill." | Michigan property tax | 8 Learn pages, e.g. `/learn/benefits-of-mortgage-rate-locks/` |
| "I'd much rather somebody ask me, 'Why are your taxes higher than what I'm seeing online?' than have them build a housing budget around the wrong assumption." | property tax | `/learn/tips-for-first-time-home-sellers/` |
| "I wouldn't tell somebody, 'You're in Oakland County, so here's what your taxes are.' It doesn't work like that. We need the actual property." | property tax, local | `/learn/benefits-of-working-with-mortgage-broker/` + 2 |
| "You're not just financing the house. You're financing the plan for the house." | renovation | `/learn/buying-historic-home/` + 4, `/purchase/renovation-financing/` |
| "I don't love a deal that only works when nothing goes wrong." | investment property | `/learn/real-estate-due-diligence/` + 2 |
| "The biggest mistake is thinking this is just another purchase. It isn't. You're coordinating two houses, two transactions and one family trying to move between them." | buy before you sell | `/learn/what-is-sellers-net-sheet/`, `/samantha-shelton/` |
| "a real preapproval isn't me asking three questions and emailing you a pretty letter. There should be work behind it." | preapproval | `/learn/importance-of-mortgage-preapproval/` + 2 |
| "Don't deny yourself before anybody even understands the situation. Maybe you're ready. Maybe you're not. Maybe we need time. All of those answers are okay." | readiness, renting vs buying | `/learn/renting-vs-buying-financial-comparison/`, `/rent-vs-buy-calculator/` |
| "having equity and having that money available at the exact moment you need it are two different things." | equity, timing | `/learn/personal-loan-vs-home-equity/` + 2 |
| "I don't think somebody should refinance just because somebody called them and told them they could." | refinance | `/learn/benefits-of-rate-and-term-refinance/` + 1 |
| "I want the work done before somebody has their heart attached to a house." | preapproval, agents | `/learn/builder-preferred-lender-vs-mortgage-broker/`, `/real-estate-agents/` |
| "The early call is almost always easier than the emergency call." | timing, calling early | `/learn/how-fast-can-a-mortgage-close/`, `/samantha-shelton/` |
| "The actual work is usually not what makes something feel slow. It's the gaps between things." | closing timeline | `/learn/rocket-mortgage-vs-mortgage-broker/` |
| "I love when somebody starts the call with, 'Mine is complicated.' Because a lot of the time it really isn't. There are just more pieces." | complex files, non-QM | `/learn/non-conforming-loans/`, `/samantha-shelton/` |
| "You earned the benefit. Before somebody talks you out of using it, let's at least understand what actually applies to you." | VA | `/samantha-shelton/` |
| "They think affordability is one number somebody else gives them. It's not. There's a qualification calculation and then there's your real life. Both matter." | affordability | `/learn/affordability-challenges-in-todays-housing-market/` |
| "I'd rather know that six months ahead of time than six days before you want to write an offer." | readiness, credit | `/research/michigan-mortgage-market-report/` |

### 10.4 Research and data Align owns (cite by name; link internally)
- **Michigan Property Tax Uncapping Study (2026)** — `/research/michigan-property-tax-uncapping-study/` (source of the "+63%" Warren and "+29%" Northville Township figures)
- **Michigan Mortgage Market Report (2025 HMDA data)** — `/research/michigan-mortgage-market-report/`
- **Research methodology** — `/research/methodology/`
- **Learn library counts:** "The Learn library has 343 pages. 296 are guides", "70% of source links go to government agencies and regulators". Counted October 24, 2026 (`/editorial-policy/`). Dated.

---

## 11. Pre-publish checklist

Run this on every page or draft before it leaves a team folder.

**Voice**
- [ ] The first sentence answers the page's question. Who it's for, the outcome and why Align all sit within the first ~60 words.
- [ ] No banned words (§6). No exclamation points outside reviews.
- [ ] Samantha in third person. Every quote comes from §10.3 or a placeholder.
- [ ] Grade 7–9 above the fold. No more than 20% of sentences over 30 words.

**Compliance**
- [ ] No rate, APR or payment offer. Trigger terms are absent or handled under §7.2.
- [ ] Examples carry "Hypothetical example, not an offer. Actual rates, costs and payments vary." and sit away from apply CTAs.
- [ ] NMLS #2041154, NMLS 1647301, the six-state line and Equal Housing Opportunity are present.
- [ ] Government products carry the non-affiliation disclaimer.
- [ ] Michigan taxable value wording follows the required form.
- [ ] Review count matches Google today, or the count is removed.
- [ ] Every fact has a Tier 1–2 source or a `[VERIFY]` placeholder. No links to lenders, rate sites or portals.

**SEO / AI**
- [ ] The H1 names topic + place. Question H2s each have a 40–60-word direct answer.
- [ ] The entity statement appears once. Key takeaways are near the top.
- [ ] FAQ: visible text matches the JSON-LD exactly.
- [ ] A Sources section with the "How we choose and check sources" link.
- [ ] Standard CTA labels (§5.2), with each label matching its destination.
- [ ] Draft header shows "Subject to Align approval" if it describes how Align works or quotes Samantha.
