# Owner decisions

**Team:** Consistency, cross-team conflict resolver · **Date:** 2026-11-17 · For the owner (Align Lending) and the PM.
Each decision lists the options, our recommendation and the rows it blocks. "Blocked" rows have status PENDING-OWNER in `MASTER-CHANGES.csv`; "soft" rows ship now with the decision noted in `depends_on` (they change only if the answer differs from the default we shipped). D1-D8 come from `KNOWN-CORRECTIONS.md` and stay the owner's call; N1-N9 are new decisions this resolution surfaced.

| # | Decision | Blocked rows | Soft-dependent rows | Our recommendation (one line) |
|---|---|---:|---:|---|
| D1 | Does Align broker reverse mortgages? | 11 | 0 | Answer from licensing and lender relationships; if no HECM channel, keep the article informational only |
| D2 | One measure for "typical home value" on city pages | 71 | 140 | Census ACS owner median (B25077) as the headline, optional dated Redfin line |
| D3 | MSHDA participating-lender access | 0 | 1 | Keep the F2 default wording until access is confirmed in writing |
| D4 | Who owns alignwithalign.com | 0 | 1 | Ship the on-domain menu now; re-add a tool only if Align owns it, with nofollow noopener |
| D5 | Is Align always lender-paid? | 0 | 1 | Keep the Loan Estimate wording everywhere; it is true either way |
| D6 | Loan-officer headcount | 3 | 3 | Supply the 2026 count; new copy avoids headcount until then |
| D7 | Counsel: term names and trigger-term policy | see `counsel-review.md` | | Counsel item C1/C2 |
| D8 | NAMB Broker of the Year year and source | 1 | 0 | Supply the primary source or remove all 18 existing mentions |
| N1 | Where /start/ and my1003app pull credit | 3 | 0 | Confirm in one line; the apply friction line ships after |
| N2 | Byline verb | 0 | 2 | Keep the verb-free line; if a verb is wanted, use "By" |
| N3 | GSC exports before two held redirects | 2 | 0 | PM pulls GSC Pages and Query x Page for the two URLs |
| N4 | Does Align finance mixed-use 1-4 unit properties? | 0 | 1 | Keep the page as is until answered |
| N5 | Samantha quotes: sources and new quotes | 0 | 5 | Confirm or supply verbatim quotes; nothing unsourced ships |
| N6 | /start/ source whitelist and the 1099 key | 0 | 9 | Add digit-free values to alignStartCfg.sources before the from= links ship |
| N7 | Approve the AI-imagery disclosure | 1 | 0 | Approve the proposed sentence |
| N8 | Schema facts: phone hours, logo, Facebook URL, coordinates | 0 | 1 | Supply them; until then the fields stay out |
| N9 | Confirm the readiness-review merge | 0 | 23 (1 redirect, 1 spec, 21 retargets) | Confirm (decided here per the SEO editor) |

---

## D1. Does Align broker reverse mortgages?

**Context.** 514 GSC impressions on the reverse-mortgage article; the brand editor held 3 Learn modules and removed their apply link; the blog plan defers the topic (rank 85); 7 GSC rows would invest in reverse content.
**Options.** (a) Yes, through a wholesale HECM or proprietary reverse channel: keep the cluster, restore "Talk with Samantha" modules, ship the GSC rows. (b) No: keep `/learn/reverse-mortgages-how-they-work/` as an informational page with the HUD counselor link, no apply or talk module, and drop the GSC rows to P2. (c) Refer out: (b) plus one sentence naming the referral path.
**Recommendation.** Decide from the license and lender list, not from traffic. If Align has no reverse channel, choose (b): the page keeps its impressions without implying a product Align does not offer.
**Blocked rows.**

| Row | Page | Element | What waits |
|---|---|---|---|
| `CTA-0249` | /learn/how-to-refinance-reverse-mortgage/ | cta label/destination | [HOLD until D1: Align confirms it brokers reverse mortgages] topic key "reverse" \| module head "Questions about a reverse mortgage" \| text " |
| `CTA-0372` | /learn/reverse-mortgages-how-they-work/ | cta label/destination | [HOLD until D1: Align confirms it brokers reverse mortgages] topic key "reverse" \| module head "Questions about a reverse mortgage" \| text " |
| `CTA-0387` | /learn/selling-home-with-reverse-mortgage/ | cta label/destination | [HOLD until D1: Align confirms it brokers reverse mortgages] topic key "reverse" \| module head "Questions about a reverse mortgage" \| text " |
| `GSC-0303` | ignore / prune review | content refresh | Ask Align: if Align does not broker HECMs, treat as drift and add a clear 'we do not offer reverse mortgages' note plus HUD counselor link;  |
| `GSC-0315` | ignore / prune review | content refresh | Ask Align: if Align does not broker HECMs, treat as drift and add a clear 'we do not offer reverse mortgages' note plus HUD counselor link;  |
| `GSC-0425` | ignore / prune review | content refresh | Ask Align: if Align does not broker HECMs, treat as drift and add a clear 'we do not offer reverse mortgages' note plus HUD counselor link;  |
| `GSC-0473` | /learn/reverse-mortgages-how-they-work/ | h2/h3 outline | H2: Are all reverse mortgages fha? |
| `GSC-0476` | ignore / prune review | content refresh | Ask Align: if Align does not broker HECMs, treat as drift and add a clear 'we do not offer reverse mortgages' note plus HUD counselor link;  |
| `GSC-0506` | ignore / prune review | content refresh | Ask Align: if Align does not broker HECMs, treat as drift and add a clear 'we do not offer reverse mortgages' note plus HUD counselor link;  |
| `GSC-0754` | /learn/how-to-refinance-reverse-mortgage/ | h2/h3 outline | H2: How much does it cost to refinance a reverse mortgage? |
| `BPL-0086` | /learn/reverse-mortgages-how-they-work/ | new post | DEFER (owner decision): "Reverse mortgages (HECM) content" (slug reverse-mortgages; primary keyword "michigan reverse mortgage broker") -> h |

## D2. One standard measure for "typical home value" on city pages

**Context.** City pages mix Census owner medians, Redfin and Zillow sale or list figures and ZIP-level cards; hubs rank towns on mixed measures. The city auditor's U2 and the brand editor's meta template both assume one headline field.
**Options.** (a) Census ACS owner median (B25077), labeled "(Census owner median, 2020 to 2024)", with an optional second line "Recent sales: about $Y (Redfin median sale price, {City}, three months ending {Month YYYY})" where the portal publishes the municipality. (b) Portal sale medians as the headline. (c) Keep the current mix.
**Recommendation.** (a). It is the only measure available for all 276 places, it is Tier 1 and verifiable, it already headlines 129 pages, and it lets the hubs rank on one basis. Tell readers it lags current sales by 10-25%, which is what the optional second line is for. Rebuild hero, stats, hub tables and metas in one pass on the ACS 2021-2025 release (expected December 2026) so nothing is done twice.
**Blocked rows (71):** typical-value label or figure (fact-check) 61, city meta (sequenced after D2) 10. 140 more rows (city metas and the city template spec) ship now and regenerate their dollar figure from the D2 field if the measure changes.

| Row | Page | Element | What waits |
|---|---|---|---|
| `CTY-0004` | /mortgage-lender-clarkston-mi/ | meta | P1, sequenced after D2 (generate from the D2 headline field) |
| `CTY-0007` | /mortgage-lender-farmington-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0009` | /mortgage-lender-grosse-pointe-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0010` | /mortgage-lender-howell-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0014` | /mortgage-lender-oxford-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0016` | /mortgage-lender-st-clair-shores-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0017` | /mortgage-lender-sterling-heights-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0018` | /mortgage-lender-sylvan-lake-mi/ | meta | Do not apply. Keep the current meta figure ($391,000 is the Census ACS 2020-2024 owner median). Fix the glance box instead: "Typical home va |
| `CTY-0020` | /mortgage-lender-westland-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `CTY-0021` | /mortgage-lender-ypsilanti-mi/ | meta | P1, sequenced after owner decision D2. Generate the meta price from the D2 headline field, labeled with its measure. If D2 = Census owner me |
| `FC1-0002` | /mortgage-lender-addison-township-mi/ | fact correction | Typical home value near $417,000 (Census owner median, 2020 to 2024) |
| `FC1-0078` | /mortgage-lender-auburn-hills-mi/ | fact correction | Typical home value near $245,000 (Census owner median, 2020 to 2024) [pending owner decision D2] |
| `FC1-0175` | /mortgage-lender-bingham-farms-mi/ | fact correction | Typical home value near $580,000 (Census owner median, 2020 to 2024) |
| `FC1-0270` | /mortgage-lender-bloomfield-township-mi/ | fact correction | Typical home value near $605,000 (Census owner median, 2020 to 2024) |
| `FC1-0299` | /mortgage-lender-brandon-township-mi/ | fact correction | Typical home value near $331,000 (Census owner median, 2020 to 2024) |
| … | 56 more | | filter `status` = PENDING-OWNER and `depends_on` in MASTER-CHANGES.csv |

## D3. MSHDA participating-lender access

**Context.** F2: MSHDA loans are originated only through participating lenders. The DPA page ships "Talk with Samantha" as primary with "Samantha explains the MSHDA programs and, if one fits, refers you to a participating lender." The new MSHDA guide (blog-plan rank 1) owns the program-name queries; 111 "MSHDA" anchors point there once it is published.
**Options.** (a) Direct access: the DPA page may make "Start my application" primary and say Align can arrange MI Home Loan and MI 10K; the DPA page could later absorb the MSHDA queries. (b) Access through a partner: say so plainly ("Samantha works with a participating lender for MSHDA loans"). (c) No access: keep the F2 default (current).
**Recommendation.** Keep (c) until Align confirms (a) or (b) in writing; the change is then two rows (CTA-0039, PUR-0357) and the guide's wording.
**Blocked rows:** none. **Soft:** `BPL-0002`.

## D4. Who owns alignwithalign.com?

**Context.** Five menu actions on every page (12,525 links) go to an unverified host.
**Options.** (a) Align owns it and the tools work: keep them as external items with `rel="nofollow noopener"`. (b) Replace on-domain (shipped now as NAV-004). (c) Remove.
**Recommendation.** Ship (b) now regardless; revisit (a) only if the tools do something the site cannot.
**Soft:** `NAV-004`.

## D5. Is Align always paid by the lender?

**Context.** Guide §10.1 marks "paid by the lender, not by a fee you pay Align" as Verify. The home FAQ and the About "How a broker is paid" answer now use: "Align Lending is paid for arranging your loan, and the amount and who pays it appear on your Loan Estimate and Closing Disclosure…" (ai-answer-blocks §1).
**Options.** (a) Always lender-paid: the absolute sentence may return, still pointing to the Loan Estimate. (b) Sometimes borrower-paid: keep the current wording.
**Recommendation.** Keep the current wording sitewide; it is accurate under both answers.
**Blocked rows:** none (the claims-library row RHT-0213 is superseded by RHT-0199). **Soft:** `RHT-0199`.

## D6. Loan-officer headcount

**Context.** "One-woman operation" and "Samantha handles each of her loans herself" appear sitewide, while `/samantha-shelton/` cites a 2024 profile reporting 20 loan originators and reviews name other originators.
**Options.** (a) Samantha still handles every file: keep the existing wording. (b) There is a team: publish the new About "Who handles your loan" answer with the real structure.
**Recommendation.** Align supplies the 2026 count and roles. Until then new copy avoids headcount; existing wording stays only where it already appears.
**Blocked rows.**

| Row | Page | Element | What waits |
|---|---|---|---|
| `RHT-0200` | /about-us/ | answer block | H3: Who handles your loan \|\| Answer: Samantha handles each of her loans herself, from the first conversation to closing, with a processor su |
| `RHT-0214` | /about-us/ | template | Sitewide copy says Align 'started as a one-woman operation' and 'Samantha handles each of her loans herself', while /samantha-shelton/ cites |
| `RHT-0289` | /samantha-shelton/ | template | 'A CanvasRebel profile published in October 2024 reported that the company had grown to 20 loan originators' vs 'one-woman operation' and 'h |
**Soft:** `RHT-0320`, `RHT-0321`, `LIN-0152`.

## D7. Counsel: term names and the trigger-term policy

See `counsel-review.md` C1 and C2. Interim: the refinance loan cards ship as "Fixed-rate mortgage, longer term" and "Fixed-rate mortgage, shorter term"; nav keeps today's labels; CTA labels use "Compare fixed-rate terms".

## D8. NAMB Broker of the Year

**Context.** Not on the press page's sourced awards; no year anywhere; 18 existing pages use it. New copy and schema exclude it.
**Options.** (a) Align supplies the year and NAMB's primary source: restore the Samantha H3 and add it to `Person.award`. (b) No source: delete the H3 and card, and remove the 18 existing mentions.
**Recommendation.** If no primary source exists by publish, choose (b), including the existing mentions; an unverifiable award is a UDAAP risk.

| Row | Page | Element | What waits |
|---|---|---|---|
| `RHT-0275` | /samantha-shelton/ | h2/h3 outline | Hold this H3 until Align supplies the year and the NAMB source (D8). If not confirmed before publish, delete the H3 and its card. |

## N1. Where does /start/ pull credit? (counsel C9)

**Context.** The apply friction line "A credit check comes later, only with your permission." needs Align to confirm the point in the /start/ to my1003app flow where credit is pulled.
**Options.** (a) No pull until the borrower consents inside my1003app: ship the line. (b) A pull happens earlier: drop the line and say when it happens.
**Recommendation.** Confirm in one line; the three preapproval Learn modules then ship.

| Row | Page | Element | What waits |
|---|---|---|---|
| `CTA-0204` | /learn/how-fast-can-a-mortgage-close/ | cta label/destination | topic key "preapproval" \| module head "Ready to make it official?" \| text "The first step takes about a minute. A credit check comes later,  |
| `CTA-0267` | /learn/importance-of-mortgage-preapproval/ | cta label/destination | topic key "preapproval" \| module head "Ready to make it official?" \| text "The first step takes about a minute. A credit check comes later,  |
| `CTA-0317` | /learn/prequalified-vs-preapproved-whats-difference/ | cta label/destination | topic key "preapproval" \| module head "Ready to make it official?" \| text "The first step takes about a minute. A credit check comes later,  |

## N2. Byline verb

**Context.** The Editorial Policy says guides are "published under her name"; teams proposed "Reviewed by". The brand standard ships "Samantha Shelton, NMLS 1647301 · Updated {Month YYYY}" with no verb.
**Options.** (a) No verb (shipped). (b) "By Samantha Shelton". (c) "Reviewed by" only if she reviews each page before it publishes.
**Recommendation.** (a) now; (b) if a verb is wanted. It is one template change. **Soft:** `CAL-0067`, `SPEC-002`.

## N3. GSC exports before two held redirects

`/learn/tips-for-refinancing-vacation-home/` (the "refinance home" 135 @1.1 query is inferred to it) and `/mortgage-location/newport-mi-48166/` (Newport address split). **Action:** PM exports GSC Performance → Pages and Query x Page for both URLs, then ships or drops the 301. 
| Row | Page | Element | What waits |
|---|---|---|---|
| `RD-142` | /learn/tips-for-refinancing-vacation-home/ | redirect/merge/prune | HOLD: do not 301 /learn/tips-for-refinancing-vacation-home/ yet ; move unique sections, examples and FAQ answers into the target first; upda |
| `RD-143` | /mortgage-location/newport-mi-48166/ | redirect/merge/prune | HOLD: do not 301 /mortgage-location/newport-mi-48166/ yet |

## N4. Mixed-use 1-4 unit financing

`/learn/benefits-of-investing-in-mixed-use-developments/` is kept (2 of about 11 Learn clicks) pending the answer: if Align finances mixed-use 1-4 unit properties, re-angle the page to that; if not, prune it to `/learn/investment-property-types/`. **Soft:** `INV-0166`.

## N5. Samantha quotes

Never invent a quote (guide §7.9). Shipped now: the verbatim quote-bank quotes on city pages; the unsourced 79-page city quote and the truncated "too small to mention" card are **removed** now, and three product H2s ship without their optional quote. Align either confirms a recorded source or supplies verbatim quotes to restore them. **Soft:** `RHT-0287`, `PRB-0028`, `PRB-0199`, `PRB-0311`, `CTY-0026B`.

## N6. /start/ source whitelist

`/start/` ignores `from` values outside `alignStartCfg.sources`, and alignTrack drops digits (`1099`). **Action:** add digit-free values (for example `heloc-equity`, `ten-ninety-nine`) to the whitelist before the products-B `from=` links ship. **Soft:** `PRB-0005`, `PRB-0069`, `PRB-0125`, `PRB-0180`, `PRB-0237`, `PRB-0295`, `PRB-0343`, `PRB-0385`, `PRB-0425`.

## N7. AI-imagery disclosure (F21)

Proposed sentence for the Editorial Policy (SPEC-006): "Some illustrations on this site, including the hero images on our city and guide pages, are created with AI image tools. They show the kinds of homes found in Michigan communities, not specific properties, and we do not use them to depict real people or real addresses." Copy that describes how Align works needs Align's approval. 
| Row | Page | Element | What waits |
|---|---|---|---|
| `SPEC-006` | /editorial-policy/ | body copy | Add to the Editorial Policy (F21): "Some illustrations on this site, including the hero images on our city and guide pages, are created with |

## N8. Schema facts

Exact phone hours (for `contactPoint.hoursAvailable`; the "24/7" value is false), the live logo URL, one Facebook URL, and the GBP coordinates. Until supplied, those fields stay out of the JSON-LD. **Soft:** `SPEC-003`.

## N9. Confirm the readiness-review merge

Decided here under the SEO editor's binding ownership call (`/purchase/mortgage-readiness-review/` has no GSC queries and 84 inlinks against the game plan's 3,190): merge P1, with SPEC-005 moving the readiness questions and check-back form first. If the owner vetoes it, revert the 21 retargeted CTA and link rows (and link-insertion row 3) to the readiness URL and retitle the page "Preparing Your Credit for a Mortgage in Michigan | Align" (SEO fix #35).
