# Independent audit: CTA and Conversion team (`01-ctas/`)

Auditor: independent audit, 2026-11-15 · Scope: `cta-report.md`, `cta-inventory.csv` (310 rows), `cta-recommendations.csv` (444 rows)
Companion file: `08-audit/corrections-ctas.csv` (93 rows: file, row_identifier, field, current_value, corrected_value, reason)
Method: Python (stdlib) over `$DATA/pages.jsonl` and `page_summary.csv`. I read the inline GA4 and bar scripts in `$DATA/../site/home.html` and the team's saved `/start/` HTML (`scratchpad/cta/fetch/start_42c05c.html`). Five live fetches, 3 to 4 s apart: the homepage with an iPhone user agent, `/learn/home-equity-line-of-credit-heloc/`, `/product-loans/usda-loans/` (iPhone UA), `/usda-eligibility-check/` and `/mortgage-calculator/`. A test of `www.alignwithalign.com` was refused by the proxy (CONNECT 403). GSC came from DataWise (free). Audit scripts are in `scratchpad/audit_cta/`.

---

## 1. Verdict: **PASS WITH CORRECTIONS**

The team's core diagnosis holds up and I could reproduce it from the raw data:
- The five off-domain menu actions are real: 12,525 links in total.
- 2,683 Calendly links share one URL with no UTM parameters, under 62 labels.
- Phones get no Apply entry in the header or the menu. I confirmed this live.
- Learn modules are chosen by category, not by topic.
- Every Samantha bar Call or Meet click fires two GA4 events.
- All 3,816 `tel:` links are correct.

The work cannot go to the consistency team as it stands. Four kinds of problem need fixing first:

1. **Two headline counts are wrong.**
   - "164 of 423 articles have an end-of-article next step" is really **142 of 423**. The other 22 blocks are on hubs. The team's own CSV says 281 articles lack one.
   - "9 variants / all 61 Loan Types articles" is really 8 category defaults plus 3 one-offs, and **51 of 53** articles.
   - One finding is refuted: the USDA product page *does* link `/usda-eligibility-check/`.
2. **The recommendations break the brand guide's CTA vocabulary.** They criticise 62 Calendly labels, then propose **32 new non-standard Calendly labels (about 200 instances)**. They also reuse retired labels: "Get a homebuying budget review" ×75, "Run the numbers…" ×45, "Use the … calculator" ×28, and "Tell Samantha the situation", which the guide names on its retire list. Guide §5.2 is explicit: Calendly buttons say "Talk", and buttons keep the standard labels. The fix is mechanical and is listed in the corrections CSV.
3. **Three compliance slips.**
   - "No credit pull to talk" is recommended under three home hero cards, none of which is a talk CTA.
   - "Nothing here checks your credit" is recommended beside "Start my application".
   - "Get a real number from Samantha" reads as a promised quote.
4. **Calibration.**
   - Seven scores are more than 5 points off the rubric anchors.
   - The headline 63 (D) uses page-count weighting. Rubric §6 asks for a simple mean and a separate money-page score.
   - P0 is over-used on 77 Learn rows where nothing is broken. GSC shows 0 clicks on the queries cited as evidence.

---

## 2. Headline numbers re-derived

| Claim | Team | Audit (re-derived) | Status |
|---|---|---|---|
| Inventory rows / instances / destinations | 310 / 28,372 / 124 | 310 / 28,372 / 124 (sums of `count`) | Confirmed |
| Crawler CTAs on 835 pages | 12,590 after removals | 12,763 raw. 173 removed: 112 citations, 60 pager arrows, 1 skip link | Confirmed. This breaks the charter: they should be classified, not dropped. |
| Calendly instances / labels / URL | 2,683 / 62 / one URL, no UTM | 2,683 / 62 / `https://calendly.com/samanthashelton` only | Confirmed |
| Pages with Calendly | "795 pages" (CSV row 2) | **831** (828 in the content area) | Corrected |
| Pages with ≥3 Calendly labels | 26 | 26 (content region) | Confirmed |
| `tel:` links | 3,816, all correct | 3,816, all `tel:+12485065727` | Confirmed |
| alignwithalign.com | 5 labels × 2,505 = 12,525, header ×2 + popup, 835 pages | 12,525 (header 8,350, popup 4,175). Live mobile homepage has 15 = 5 × 3 | Confirmed. The host could not be checked (CONNECT 403). |
| Learn articles / hubs | 423 / 48 | 423 articles; 47 cluster hubs + `/learn/` | Confirmed |
| Learn module variants | 9 | **8 category defaults + 3 one-offs = 11 pairs** on 420 articles; 3 glossary guides have none | Corrected |
| Loan Types articles → `/product-loans/` | "all 61" | **51 of 53** (61 includes 8 hubs) | Corrected |
| Industry-update posts → budget review | 22 | 22 | Confirmed |
| Destination changes from the topic map | 254 of 423 | 254 (reproduced from the team's own 395 rows; 141 already match; 28 articles need no change) | Confirmed. This is the team's own mapping. |
| Articles with an end block (`al-next`) | 164 of 423 | **142 of 423**. The team's `alnext.json` has 164 entries, 22 of them hubs. 386 of 423 carry the "Call … or start online" text links at a median 79% of the text. | Refuted as stated |
| Learn pages with no action above the first H2 | 471 of 471 | **470 of 471** (`/learn/` has "Talk with Samantha" above the fold) | Corrected |
| Header Apply with `goal` | none on 402 of 471 learn pages | 402 of 471 learn have no goal; all city, purchase and refinance pages have one; 13 of 21 product pages do | Confirmed |
| Sitewide CTA score | 63 (D), page-weighted | Simple mean 77 on team inputs, **76 (C)** after audit; money-page **77 (C)**; page-weighted 67 | Corrected (rubric §6) |

---

## 3. Checked findings

33 findings checked: **22 confirmed, 8 corrected, 2 refuted, 1 unverifiable.** Every P0 is included.

| # | Finding (team) | Pri | Status | Evidence / correction |
|---|---|---|---|---|
| 1 | Header (×2) and mobile menu send 5 action links to `www.alignwithalign.com` on all 835 pages | P0 | **Confirmed** | 12,525 links. Live mobile homepage: popup 822 contains all 5. `/start/` whitelists `from=alignwithalign` ("From your AlignWithAlign plan"), which supports the team's view that the site is an Align property. Keep at P0 until the host is verified. |
| 2 | One Calendly URL, 2,683 links, 62 labels, no UTM | P0 | **Confirmed** | Fix "795 pages" to 831 in the CSV reason. Calendly accepts `utm_*` on scheduling links, so the fix is safe. |
| 3 | GA4 sends only `destination`; internal CTAs untracked; bar clicks double-counted | P0 | **Corrected** | The mechanism is confirmed: the capture-phase delegated listener matches the bar's `tel:` and Calendly anchors. But a click produces **two different events** (`samantha_bar` plus `phone_click`/`cta_click`), not one event sent twice. Totals inflate only where the two are summed or both are key events. `link_text` is already sent by the home "Build my plan" form. The router card to `/start/?goal=buy` *is* tracked. Two plan fixes: keep `destination=schedule` (the plan renames it `meet`, which breaks history), and use derived key events (§5.3). |
| 4 | Learn modules keyed by category: 9 variants | P0 | **Corrected** | 8 defaults + 3 one-offs. Category counts are fixed in the CSV. |
| 5 | FHA/VA/USDA articles point to generic `/product-loans/` ("all 61") | P0 | **Corrected** | 51 of 53 Loan Types articles do. FHA, VA and USDA refinance articles go to break-even, which is right for them. |
| 6 | 254 of 423 articles change destination | P0 | **Confirmed** | Reproduced from the CSV. It is the team's own mapping, so I checked quality separately (§5). |
| 7 | Only 164/423 articles have an end-of-article next step | P1 | **Refuted** | 142/423 have the end block. 386/423 have bottom-line call or start-online links. |
| 8 | P0 for 77 Learn destination rows | P0 | **Corrected → P1** | Nothing is broken or non-compliant, and a CTA swap does not move traffic. DataWise GSC: "lease to own" has 15,242 impressions, **0 clicks**, position 59.8; the top USDA queries have 0 clicks. |
| 9 | Apply goes to `/start/`, then `alignlending.my1003app.com`; nothing links `app.alignlending.com` | — | **Confirmed** | `alignStartCfg.appHost` is `alignlending.my1003app.com` and `appPath` is `/1647301/register`. `finish()` offers "Start the full application". 0 crawl links to `app.alignlending.com`. |
| 10 | No mobile Apply button | P1 | **Confirmed (live)** | iPhone-UA fetch: the only "Apply Now" (widget e8045b7) sits in container 03f5154 `elementor-hidden-mobile`. Popup 822 has no `/start/`, `tel:` or Calendly link, only nav, Contact Us and the 5 off-domain actions. In-content apply buttons still show above the fold on city and product pages. |
| 11 | Popup 822 is a mobile-only slide-in menu with no auto trigger | — | **Confirmed** | Settings: `slideInLeft`, `timing.devices_devices:["mobile"]`. Opened by the header button. |
| 12 | 3,816 `tel:` links all correct | — | **Confirmed** | All `tel:+12485065727`. |
| 13 | All 37 CTA anchors exist | — | **Confirmed (sample)** | Spot-checked live: `#usda-check` and `#p-pay` are present. 23 of the 24 anchors used in the recommendations are on the team's verified list. `#find` must be created, as the team notes. |
| 14 | 4 buttons promise a self-serve result but open Calendly | P1 | **Corrected** | **6 ATF primaries**: add "Plan my move" (buy-before-you-sell) and "Review my situation" (self-employed). 16 such labels (31 instances) site-wide. |
| 15 | 26 pages carry ≥3 Calendly labels | P1 | **Confirmed** | Content region. Up to 6 on `/purchase/va-homebuyer-plan/`. |
| 16 | Trust strip above the fold on 276/276 city and 21/21 product pages | — | **Confirmed** | `above_fold_text`. |
| 17 | 0 of 276 city pages show the phone in content | P2 | **Confirmed** | |
| 18 | Samantha bar missing on 6 township pages | P1 | **Confirmed** | 11 pages lack the bar: the 6 townships plus contact, licensing, press, privacy and terms. |
| 19 | 8 product pages send `/start/` with no goal | P2 | **Confirmed** | 1099, 15-yr, 30-yr, ARM, asset-based, manufactured, non-warrantable, physician. |
| 20 | No action above the first H2 on 471/471 Learn pages | P2 | **Corrected** | 470/471. |
| 21 | USDA product page: `/usda-eligibility-check/` not linked | P1 | **Refuted** | Linked as "Is this address in a USDA area?" in the closing "Start with your question" block (crawl and live). The real gap: the mid-page decision point links USDA's map instead. |
| 22 | Flint: no CTA from word 758 to word 3,510 | P1 | **Confirmed** | Label positions in the text: 758 "Compare loan options", then 3,510 "How Michigan taxable value works". |
| 23 | HELOC article module goes to the break-even review | P0 | **Confirmed (live)** | The live module is "Review my break-even". The end block already says "Start a home equity review". |
| 24 | 22 regulation-news posts go to the budget review | P0 | **Confirmed** | The cluster is `industry-updates-and-rules`. |
| 25 | `/start/` is a noindex intake that disclaims preapproval; goal values valid | — | **Confirmed** | `noindex, follow`. "Nothing on this page is … a preapproval". `stage`/`aim`/`why` params match `alignStartCfg.second`. All topic-map `/start/` params are valid. |
| 26 | `/start/` header Apply skips the intake | P2 | **Confirmed** | It links to `my1003app…/register`. |
| 27 | `from` whitelist (12 values); a valid `from` clears saved answers | P2 | **Confirmed** | `if(sources.indexOf(fr)<0)fr=''` and `if(fr)clear()`. |
| 28 | Home hero cards are not crawler CTAs; no single primary | P1 | **Confirmed** | Home `atf_ctas` = 0. The three cards are links. |
| 29 | Calendly link has no `goal` or source data | P0 | **Confirmed** | Same as #2. |
| 30 | Sitewide 63 (D) | — | **Corrected** | See §4. |
| 31 | Learn 55 (F) | — | **Corrected** | 63 (D), see §4. |
| 32 | Inventory covers the CTA labels | — | **Confirmed (with gap)** | The 310 rows reconcile. 82 of the 281 crawler labels were removed rather than classified, and there is no intent column (charter acceptance). |
| 33 | Off-domain hosts live (alignwithalign, my1003app, Calendly, VA/USDA tools) | — | **Unverifiable** | CONNECT 403 from this session too. A human check is required before P0 sign-off. |

---

## 4. Score calibration

I checked 15 scores against the rubric's §3.4 anchors (and §3.3 for one ATF score). **7 differ by more than 5 points** and go to written reconciliation under rubric §7.3. Where the difference is 5 or less, the team's score stands.

| Page / template | Team | Audit | Δ | Anchor reasoning |
|---|---|---|---|---|
| Learn articles + hubs (CTA) | 55 F | **63 D** | +8 | Modules sit on 466/471 pages, with honest labels to working pages and a talk link. That is above the 40 anchor: no wrong-intent apply, no competing primaries. It falls in the 60 band because 60% of modules are off-topic, only 34% of articles have an end block, and internal clicks are untracked. |
| Home `/` (CTA) | 72 C | **66 D** | −6 | 60 anchor: two hero labels promise what the destination does not give ("Start your pre-approval", "Compare Your Options"). Three equal cards with no hierarchy. No talk CTA or reducer in the hero. The core team scored 68. |
| `/purchase/` | 86 B | 81 B | −5 | Stands. Standard plan and talk pair. One mismatched router label ("Start your pre-approval"). |
| Purchase sub-pages (10) | 82 B | **72 C** | −10 | 4 ATF primaries are self-serve labels that open Calendly, which is the rubric's own 60-anchor example. 5 pages carry 4 to 6 Calendly labels. Per page: game plan 64, first-time 68, buy-before-you-sell 70, VA 70, self-employed 72, DPA 68, budget 78, readiness 78, investment 78, renovation 76. |
| Refinance sub-pages (3) | 81 B | **73 C** | −8 | Break-even ("Get my refinance checkup" ×3) and cash-out vs equity ("Compare my options" ×3 while an on-page tool exists) each score about 70. Equity review about 80. |
| `/refinance/` | 84 B | 80 B | −4 | Stands. "Start with a conversation" is non-standard; there is no in-content apply. |
| Product pages (21) | 82 B | 84 B | +2 | Stands, but the method needs fixing. The −10 "identical labels" deduction contradicts the 100 anchor ("labels come from the standard vocabulary"). Deduct instead for two Calendly labels in the end block (12 pages). |
| 1099, asset-based, manufactured, non-warrantable, physician | 71 C | **77 C** | +6 | The 80 anchor names exactly this one weakness: "one CTA missing at a natural decision point". Small extra deductions for duplicate end-block talk labels and no goal. |
| City template | 71 C | 74 C | +3 | Stands. |
| Calculators template | 72 C | 70 C | −2 | Stands. The retired "Use the calculator" label appears on 12 of 18 pages. |
| `/va-loan-calculator/` | 82 B | **74 C** | −8 | Three talk labels for one action, and an end CTA that sends VA visitors to the generic list. Two weaknesses beyond the 80 anchor. The core team scored 68. |
| Samantha bar | 86 B | 84 B | −2 | Stands. |
| Mobile menu popup | 62 D | 62 D | 0 | Stands. |
| `/contact-us/` | 88 B | 84 B | −4 | Stands. "Schedule a call with Samantha" is a retired label. |
| `/product-loans/fha-loans/` (ATF) | 90 A | **82 B** | −8 | The ATF text (68 words) has who, answer, next step and reducer, but no "why Align". Rubric §3.3 places that at the 80 anchor. The core team scored 68. |

**Aggregates (rubric §6).** On team inputs: simple mean 77 (C), money-page 81 (B). After audit adjustments: **simple mean 76 (C), money-page 77 (C)**, page-weighted 67 (D), reference only. The report should lead with the two §6 figures.

**ATF overlap.** The CTA team scored "ATF answer" on 30 pages that the core teams also score. Its numbers are higher by 6 to 24 points on 29 of the 30. Charter §4.3 rule 3 makes the page-owner team's ATF score the score of record, so the CTA team's ATF column should be marked informational. CTA effectiveness also differs from the core teams' by more than 5 on 18 of 30 pages, mostly products, where core scores 76–80 and CTA scores 85–90. The PM must reconcile these with both teams.

---

## 5. Recommendation quality

### 5.1 Sample: 35 rows (15 Learn per-article rows stratified 6 P0 / 6 P1 / 3 P2, plus 20 non-Learn rows)

For each row I checked four things: whether the destination exists in `page_summary.csv` (all 51 internal URLs do; `/start/` is the noindex intake), whether it fits the article (I read the text), whether the label follows the guide, and compliance.

| Row | Destination fits topic? | Label per guide §5.2 | Notes |
|---|---|---|---|
| L1 lease-to-own-vs-rent-to-own (P0) | Yes (readiness review) | End label retired ("Get a homebuying budget review") | Priority should be P1: query has 0 clicks at position 59.8 |
| L2 balloon-mortgages (P0) | **No**: self-employed docs page | "Tell Samantha the situation" is retired | Fix: non-QM page + ARM end block |
| L3 selling-home-with-home-equity-loan (P0) | **No**: "get a home equity loan" | OK | Seller paying off a lien. Fix: seller net sheet |
| L4 home-equity-loans-pros-and-cons (P0) | Yes | OK | — |
| L5 navigating-short-term-rental-regulations (P0) | Yes (DSCR) | "Run the numbers…", "Review a property with Samantha" | Labels only |
| L6 how-to-buy-home-as-freelancer (P0) | Yes | "Tell Samantha the situation" | Labels only |
| L7 why-work-with-align-lending | Yes | "Check a Loan Estimate" should be "Check my Loan Estimate" | — |
| L8 mortgage-news | Yes | "Ask Samantha how this affects you", "Build your…" | Labels only |
| L9 state-specific-mortgage-assistance-programs | Yes (DPA) | OK | — |
| L10 financing-home-renovations-options-and-tips | Module yes; **end block regresses** | "Talk through my equity options" | Keep the existing "Review renovation financing" end block |
| L11 buying-home-with-low-income | Yes (DPA) | OK | — |
| L12 benefits-of-modular-homes | **No**: manufactured home loans | OK | The manufactured page says its rules do not apply to modular homes |
| L13 how-to-analyze-propertys-rental-potential | Yes | "Review a property with Samantha", "Run the numbers…" | Labels only |
| L14 what-is-home-purchase-agreement | Yes | "Get a homebuying budget review" | Labels only |
| L15 evaluating-propertys-cash-flow-potential | Yes | as L13 | Labels only |
| N0 alignwithalign menu (P0) | Yes (on-domain fallbacks) | OK | — |
| N1 Calendly UTM (P0) | Yes | n/a | Fix the page count |
| N2 GA4 helper (P0) | n/a | n/a | Section reference §7 should be §9; keep `schedule`; derived key events |
| N3 Learn template (P0) | — | — | Counts; section reference §6 should be §8; priority P1 |
| N4 mobile menu row | Yes | OK | — |
| N5 bar Meet → Book | Yes | OK (the bar is outside guide scope) | — |
| N8 home third card | Yes | "Check a Loan Estimate" should be "Check my Loan Estimate" | — |
| N9 home reducer | — | — | **Compliance**: reducer under non-talk CTAs |
| N10 "Start your pre-approval" → "Start my application" | Yes | OK | Conflicts with the purchase team |
| N12 game-plan page | Yes | "Build my plan with Samantha" is not standard | Use "Talk with Samantha" |
| N15 break-even page | Yes | "Book my refinance checkup" is not standard | Tool primary + "Talk with Samantha" |
| N18 city mid CTA | Yes | "Ask Samantha about a <City> address" | "Talk with Samantha" + lead-in line |
| N19 city tax button | Yes | City variant | "Estimate my property tax" (guide exact) |
| N21 product secondaries | Partly | 16 talk variants | Keep "Talk with Samantha"; tools as text links |
| N29 `/calculators/` | Yes | "Find the right calculator" | "Find my calculator" |
| N30 payoff calculator | Yes | "See the 15-year fixed" | **[COUNSEL]** term-name hold |
| N31 VA calculator | Yes | "Talk to somebody who knows VA" | "Talk with Samantha"; "Estimate my VA funding fee" |
| N35 DPA page | Yes | OK | Micro-line needs [VERIFY] and Align approval |
| N36 `/start/` header | Yes | OK | — |
| N38 `al-next` | Yes | — | Counts are wrong |
| N43 bar voice | Yes | — | — |

**Results:**
- Destination correct on **31 of 35**. The 4 Learn misfires all come from slug-override rules: `modular`, the `nonqm` catch-all, product overrides in selling clusters, and the taxes-and-money default.
- A rule review found 12 affected rows in all. Each has an exact replacement in the corrections CSV.
- Labels follow the guide on **15 of 35**. The rest are fixed by one mapping table (CSV, "All rows whose recommended text contains…").
- Compliance issues in the sample: 3. A full-file scan found 2 more patterns: the preapproval credit line (3 rows) and "Get a real number" (5 rows plus a report table).

### 5.2 Systemic fixes (exact text in the CSV)

- **One talk label.** All non-standard Calendly buttons (32 labels, about 200 instances) become **"Talk with Samantha"**. On `/purchase/`, `/refinance/` and `/product-loans/` the label is **"Talk through your options"**. Topic wording moves into the module head and text. A program-specific talk label may run only as a PM-approved A/B test.
- **Tool labels.** Use the guide's pattern:

  | Current label(s) | Replace with |
  |---|---|
  | Get a homebuying budget review | Review my budget |
  | Build your homebuyer game plan | Build my homebuyer game plan |
  | Run a break-even estimate / Run a refinance break-even review | Calculate my break-even |
  | Run a payment… / Compare terms… | Estimate my payment |
  | Estimate the property tax… / Estimate my Michigan… / Estimate my <City>… property tax | Estimate my property tax |
  | Check a Loan Estimate | Check my Loan Estimate |
  | Run the numbers on a DSCR loan / on a property | Check whether the rent covers the payment |
  | Use the refinance / payoff / transfer tax calculator | Estimate my refinance payment / Calculate my payoff date / Estimate my transfer tax |
  | Look up my county loan limit | Find my county loan limit |
  | Plan a buy before you sell | Plan my buy-before-you-sell move |
  | Get my first-time buyer plan | Get my first-time homebuyer plan |

- **Override rules** (report §8b):
  1. Drop `modular` from the manufactured rule.
  2. Split `nonqm`: balloon, interest-only and non-conforming become `nonqm_structure`, which goes to `/product-loans/non-qm-loans/`.
  3. Add `nonqm` and `heloan` to the refinance-cluster guard.
  4. Add a selling-cluster guard so product overrides fall back to `sell`.
  5. In taxes-and-money, a slug containing `repair` resolves to `repair`.
- **End blocks.** Add `al-next` to the 281 articles that lack it. Do not replace an existing end block that already matches the topic. 98 rows replace one, some for the worse: renovation financing gets swapped for the Uncapping Study or Calendly.

### 5.3 GA4 plan versus the `alignTrack` whitelist

**Compatible.** Every parameter key is on the whitelist (`tool_id`, `page_path`, `destination`, `link_text`, `outcome`). Every proposed value is digit-free, and every topic-map key is digit-free. Event names are snake_case with no digits. Four fixes:

1. Keep `destination=schedule`, not `meet`, so history continues.
2. GA4 key events are set per event name. Create the derived events `apply_click` (cta_click AND destination = apply) and `text_request` (samantha_bar AND destination = text_request), then mark those as key events.
3. Document that `outcome` carries placement on `cta_click` but lanes on the `start_*` events, and that `tool_id` mixes calculator ids with module keys. Filter both by event name.
4. Annotate GA4 on the day the bar exclusion ships.

---

## 6. Compliance

| Issue | Where | Fix |
|---|---|---|
| "No credit pull to talk" placed under non-talk CTAs | CSV row "/ (home hero) Friction reducer" | Adopt the home team's hero pair ("Talk through your options" + "Start my application") and put the reducer directly under the talk button (guide §5.2 rule 4, §7.7) |
| "Nothing here checks your credit" beside an apply CTA | Report §6b high-intent micro-line; 3 preapproval module rows | "About a minute to start. A credit check comes later, only with your permission." + `[VERIFY with Align: where credit is pulled in /start/ → my1003app]` |
| "Get a real number from Samantha" (implies a quote) | 5 Learn rows, report §8a/§8b; also on `/why-we-dont-publish-rates/` (refinance team) | "Talk with Samantha" |
| Repayment-period terms in labels ("See the 30-year fixed", "See the 15-year fixed", "Compare a 30-year…") | 5 Learn rows, payoff-calculator row | Hold for the counsel term-name ruling (guide §7.2 [COUNSEL, P0]). Interim label: "Compare fixed-rate terms" |
| Copy describing Align's process | DPA micro-line "Samantha checks which Michigan programs fit your answers." | `[VERIFY with Align]` + Subject to Align approval |
| First-person Samantha bar copy | Team row (P2) | Confirmed. Keep the team's Align-approval gate. |

I found no rate, APR or payment promises and no banned hype words in any recommended copy. The HUD-approved housing counselor link on reverse-mortgage modules refers to HUD's counseling service, not to Samantha, so it is acceptable.

---

## 7. Coverage gaps

1. **Pages the rubric says to score individually were scored only as template rows.** Rubric §6 says "every page" for purchase (10 sub-pages), refinance (3), calculators (14 of 18 missing), research (4), trust pages (11 of 12 missing: about, reviews, licensing, editorial policy, rate policy, Samantha, press, agents, mortgage process, privacy, terms) and hubs (13 county + 3 state).
2. **Learn.** There are no page-level CTA scores for the rubric §6 Learn sample (50 top-impression + 30 stratified). Learn hubs (47 + `/learn/`) are not scored as their own page type, although the rubric has a "Learn hubs & categories" weighting.
3. **Rubric §6 aggregates** (simple mean and money-page score) are missing.
4. **Inventory (charter acceptance).** 82 of 281 crawler labels were dropped rather than classified as citation, pager or skip link. There is no intent column.
5. **The 96 legacy root-slug posts** (canonicalized to `/learn/` URLs) are excluded without saying so. They carry 196 Calendly and 1,440 alignwithalign links, so 931-page totals are 2,879 and 13,965. Template fixes will cover them, but the report should state the exclusion, since the guide quotes 931-page counts.
6. **No row for some pages.** `/purchase/self-employed-homebuyer/` ("Review my situation" ATF, "Review your income strategy", "Get your actual list"). `/real-estate-agents/` ("Pick a time to talk", "Call Samantha about a shared client", both retired). `/reviews/` ("Ask Samantha about your own situation"). `/why-we-dont-publish-rates/` ("Get a real number").
7. **Measurement (charter R12 and M5).** No GA4 baseline query is defined for M5. Calendly's native GA4 integration, which records booking completion without an embed, is not considered.
8. **Visual fold.** The proxy `atf` means "before the first H2", not the phone fold. The team acknowledges this. No mobile screenshot check was done, so it remains a known limit.

---

## 8. Cross-team conflicts (for the consistency team and PM)

Charter §4.3 rule 1 says the CTA team wins on label and destination, and the page-owner team places the CTAs. Every row below is in `corrections-ctas.csv` with the resolved value.

| # | Core-page file / page | Core team recommends | CTA team recommends | Resolution |
|---|---|---|---|---|
| 1 | `purchase-changes.csv`: `/purchase/` primary, plus an "(all purchase pages)" rule | "Build my homebuyer game plan" **always → Calendly** | → `/purchase/homebuyer-game-plan/` | CTA team and guide win (plan never goes to Calendly). The purchase team's rule must be withdrawn. |
| 2 | `purchase-changes.csv`: `/purchase/` and `/mortgage-process/` secondary | "Get pre-approved" → `/start/` | Retire pre-approval wording | CTA team wins: `/start/` disclaims preapproval. |
| 3 | `purchase-changes.csv`: DPA primary | "Check which programs fit me" → Calendly | "Start with a few questions" → `/start/?goal=buy` | CTA team wins. Add the [VERIFY] micro-line. |
| 4 | `purchase-changes.csv`: readiness review, self-employed | "Start my readiness review", "Review my self-employed income" → Calendly | Honest talk labels | Both become "Talk with Samantha". |
| 5 | `purchase-changes.csv`: game plan secondary | "Take the 2-minute readiness check" | — | The duration claim needs verifying. Use `data-cta` for `link_text`, because the label contains a digit. |
| 6 | `refinance-home-trust-changes.csv`: `/refinance/break-even-review/` | Tool primary; keeps "Get my refinance checkup" → Calendly | "Book my refinance checkup" → Calendly primary | Merge: tool primary "Calculate my break-even", secondary "Talk with Samantha". |
| 7 | `refinance-home-trust-changes.csv`: `/refinance/cash-out-vs-home-equity/` | Tool primary "Compare my options in 3 questions" | Calendly primary "Compare my options with Samantha" | Refinance team's hierarchy, with guide labels: "Compare cash-out and home equity" → `#equity-compare` + "Talk with Samantha". |
| 8 | `refinance-home-trust-changes.csv`: `/refinance/` | "Talk through your options" | "Talk through your refinance options" | The guide's hub label wins: "Talk through your options". |
| 9 | `refinance-home-trust-changes.csv`: `/` hero | Adds "Talk through your options" + "Start my application" above the cards | Adds a reducer under the cards; renames card 3 | Compatible. Adopt the home team's pair, put the reducer under the talk button, and rename card 3 "Check my Loan Estimate". |
| 10 | `products-a-changes.csv`: ATF secondary on 13 product pages | Replace "Talk with Samantha" with tool links (e.g. "Compare 15-year and 30-year payments") | Program-specific talk labels | Keep "Talk with Samantha" (it keeps the reducer paired). Tools become tertiary text links. Products team: no repayment terms on money pages. |
| 11 | `products-a-changes.csv`: USDA | "Check an address and income" → `/usda-eligibility-check/` (incl. a P0 mid-page row) | "Check an address for USDA" → `/usda-eligibility-check/#usda-check` | Same destination. The guide-exact label wins. |
| 12 | `products-b-changes.csv`: 9 product apply links | `&from=heloc`, `…&from=1099`, etc. | Template-level `from` values after the clear-on-from fix | `/start/` ignores values outside `alignStartCfg.sources`, and alignTrack drops "1099". Agree one digit-free list and add it to the whitelist first. Cash-out: CTA team's `goal=refi&aim=cash` versus products-b's `goal=equity` needs a decision. |
| 13 | `calculators-research-changes.csv`: several result CTAs | Keeps "Talk it through with Samantha" (VA fee, payoff, rent-vs-buy); "Talk through your options" on the refinance calculator; "Find my calculator" | "Talk to somebody who knows VA"; "Find the right calculator" | Both become "Talk with Samantha" ("Talk through your options" is for hubs only). Use "Find my calculator" and "Check my Loan Estimate" (the calc team's labels are guide-exact). |
| 14 | Scores | Core-team ATF and CTA scores | CTA team ATF +6 to +24 on 29/30 pages; CTA +6 to +19 on 18/30 | ATF: the core score of record. CTA: reconcile per rubric §7.3, using the §4 re-scores. |

---

## 9. What the team should do before handoff

1. Apply the 93 corrections: counts, section references, labels, the 12 Learn destination rows, priorities and compliance text.
2. Patch `learnmap.py` with the five override-rule fixes and regenerate the per-article rows. The CSV rows I give are exact for the rows I found. A regeneration catches any others the same rules produce.
3. Add a rubric §6 summary (simple mean and money-page score) and mark the ATF column informational.
4. Add an intent column to the inventory and restore the 173 classified instances.
5. Score the missing individual pages listed in §7.1, or state why the template score covers each.

No change was made to the live site. The only edit to the team's files is the appended "Auditor corrections" section in `cta-report.md`.
