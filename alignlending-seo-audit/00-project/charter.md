# Project Charter: alignlending.com SEO, Conversion and AI-Search Overhaul

**Project manager:** orchestration lead (00-project) · **Charter date:** 2026-11-15 · **Version:** 1.0
**Companion documents:** `BRIEF.md` (shared brief), `brand-voice-and-compliance-guide.md` (the copy and compliance standard), `scoring-rubric.md` (how every page is graded), `tracker.csv` (work items, owners, dependencies, status).

---

## 1. Objective

Turn alignlending.com into the site that answers Michigan mortgage questions best, in search results, in AI answers and on the page, and converts that attention into conversations with Samantha and applications. The site should sound like Align Lending: calm, specific, compliant.

We deliver **exact, implementable changes**: replacement copy, link insertions, image files, schema, checklists and new articles. Align's web lead puts them on the live WordPress site. We have read-only access. **No deliverable may claim a change was made on the live site.**

### Starting point (baseline as of the 2026-11-15 crawl and the GSC data synced 2026-11-13)
- 901 live HTML URLs. 931 pages crawled with text: 1 home, 276 city pages, 13 county hubs, 3 state hubs, purchase + 10 sub-pages, refinance + 3 sub-pages, product hub + 21 product pages, 18 calculators/tools, 471 Learn URLs, 4 research pages, 12 trust/utility pages. Also 96 legacy root posts that are not in the sitemap.
- GSC, last 90 days: **416 clicks, 181,048 impressions, average position 28.1, CTR 0.23%**. 5,231 queries, of which 196 are in the top 3, 840 in the top 10, 1,412 in the top 20, and 511 in striking distance.
- GSC, last 30 days: 241 clicks, 134,261 impressions, average position 32.8. Daily impressions have grown from about 250 a day in August to about 8,000 a day in November 2026, roughly 30x.
- The brand query "align lending" gets 71 clicks from 1,293 impressions at average position **5.0**. Align does not reliably hold position 1 for its own name.
- Bing Webmaster data: **not connected**.

---

## 2. The owner's 8 asks, mapped to workstreams

| # | Owner's ask | Workstream | Teams (folder) | Primary deliverables | Tracker IDs |
|---|---|---|---|---|---|
| 1 | Review every CTA and every internal and external link; find better ways to link the articles together | **WS1 Conversion paths** and **WS2 Link architecture** | CTA team (`01-ctas/`); Link health + Article-linking strategy (`02-links/`) | CTA inventory with scores and a standardized label/destination map; broken/redirecting/nofollow link fixes; orphan rescue; hub-and-spoke article link plan with exact anchor insertions | CTA-01..03, LNK-01..05 |
| 2 | Deep review of product, purchase (+ sub-pages) and refinance (+ sub-pages); best possible H1/H2/H3 | **WS3 Core money pages** | Purchase; Refinance + Home + Trust; Products A; Products B; Calculators/Research (`03-core-pages/`) | Per-page scorecards; exact H1/H2/H3 rewrites; title/meta; FAQ and schema fixes | CORE-01..10 |
| 3 | Each page answers the visitor's question and solves their problem above the fold | **WS3** (money pages), **WS4** (city), **WS6** (Learn) | Core-page teams, City sweep, Blog writers | Exact above-the-fold blocks (≤60-word answer + primary CTA + friction reducer) per page or template | CORE-*, CITY-01, BLOG-* |
| 4 | Score and grade every aspect | **WS0 Governance** (standard) + every team (scoring) + **WS8 Independent audit** | PM (`00-project/`), all teams, Auditor team (`08-audit/`) | `scoring-rubric.md`; a scorecard in every team report; an independent re-score of a sample | PM-03, AUD-01..03 |
| 5 | Confirm accuracy and consistency of the city pages | **WS4 City pages** | Consistency sweep + 3 county-group fact-checkers (`04-city-pages/`) | Template-level consistency findings; fact-check log per city with primary sources; correction CSV | CITY-01..06 |
| 6 | Review the blog inventory, then GSC and Bing keyword gaps; plan and write as many blogs as needed | **WS5 Content gap analysis** then **WS6 Content production** | Blog inventory, GSC gaps, Competitor/AI-search gaps (`05-content-keywords/`); Content strategist and Blog writers (`06-blogs/`, `06-blogs/drafts/`) | Inventory with keep/merge/redirect/refresh calls (including the 96 legacy posts); gap list; prioritized content plan; compliant drafts | CONT-01..03, STRAT-01..02, BLOG-01..03 |
| 7 | Review photos/images: optimized, fixed, improved | **WS7 Media** | Image optimization; Alt text (`07-images/`, `07-images/optimized/`) | Optimized files (modern format, correct dimensions), LCP fixes, width/height list, alt-text CSV | IMG-01..04 |
| 8 | Sound like Align, be impactful for SEO, and win AI search answers | **WS0 Governance** + **WS9 Brand/SEO consistency** (cuts across all) | PM; Brand/SEO consistency team (`09-consistency/`) | Brand voice and compliance guide; consistency pass on every team's replacement copy; AI-search patterns applied | PM-02, CON-01..03 |

---

## 3. Team roster

Status key: **Phase 1** teams are working now (17 agents). **Phase 2–4** teams start when their dependencies clear (§4).

### Phase 0: Governance

| Team | Folder | Scope | Inputs | Outputs | Acceptance criteria |
|---|---|---|---|---|---|
| **PM / orchestration lead** | `00-project/` | Charter, standards, tracking, roll-up | BRIEF, site data, all team outputs | `charter.md`, `brand-voice-and-compliance-guide.md`, `scoring-rubric.md`, `tracker.csv`; later the master implementation backlog, owner-decision list and measurement plan | Standards are published before Phase 2 starts. Every work item has an owner, dependency and acceptance criterion. The roll-up de-duplicates conflicting recommendations under §4.3. |

### Phase 1: Specialists (in progress)

| Team | Folder | Scope | Inputs | Outputs | Acceptance criteria |
|---|---|---|---|---|---|
| **CTA team** | `01-ctas/` | Every CTA on 931 pages: header, content, chrome bar, popup. Label, destination, placement, hierarchy, above-the-fold presence, measurement. | `pages.jsonl` `ctas`; `page_summary.csv` `atf_ctas`/`content_ctas`; `alignTrack` helper in `$DATA/../site/*.html`; guide §5 | CTA inventory CSV; scored report; standardized label→destination map; per-page-type above-the-fold CTA spec; GA4 tracking recommendations | Covers 100% of the 281 distinct labels in the `ctas` field. Some are citation links the extractor captured; these are classified as `citation`, not dropped. Each label is mapped to one of the guide's intents (apply, talk, call, plan, calculate, compare, learn). Every label/destination mismatch is listed with a fix. Recommendations use the guide §5.2 vocabulary or justify a change. Tracking recommendations name the exact `alignTrack` event and parameter. |
| **Link health** | `02-links/` | Broken internal/external links, redirect chains, links to redirecting URLs, nofollow misuse, policy violations (lenders, portals, Wikipedia, World Population Review), sitemap gaps, orphans | `link_graph.json`, `inlinks.json`, `external_status.jsonl` (read at the end), guide §7.10 | Fix CSV (URL, element, current, recommended, reason, priority); policy-violation list; orphan list | Uses only 404/410/5xx/DNS as "broken" (0/403/429 = blocked). Every fix has the exact replacement URL. Every never-link domain is flagged. |
| **Article-linking strategy** | `02-links/` | Hub-and-spoke model for 471 Learn URLs and links from Learn to money pages, city pages and calculators | `inlinks.json`, `top_anchor_texts_by_target`, `outline`, blog inventory (when ready) | Topic-cluster map; exact link insertions (source URL, sentence, anchor, target); anchor-diversity rules | Every orphaned guide gets at least 3 contextual inlinks proposed. Anchors are descriptive and not exact-match repeated more than 3 times per target. Every money page gets inlinks from its cluster. |
| **Purchase** | `03-core-pages/` | `/purchase/` + 10 sub-pages | page data; guide; rubric | Scorecards; exact H1/H2/H3, above-the-fold, title/meta, FAQ, schema, CTA placement | Every rubric aspect is scored with evidence. Replacement copy is final text. Compliance checklist passes (trigger terms, no rates). The H1 states topic + place. |
| **Refinance + Home + Trust** | `03-core-pages/` | `/refinance/` + 3 sub-pages; home; about, contact, reviews, licensing, editorial policy, rate policy, Samantha, press, real-estate-agents, mortgage-process | same | same | Same as above, plus a consistency check of the trust strip and every claim against guide §10. |
| **Products A** | `03-core-pages/` | `/product-loans/` hub + the orchestrator's first product split (standard and government products) | same | same | Same as above, plus the government non-affiliation disclaimer on FHA/VA/USDA pages and a 30-year/15-year trigger-term flag for counsel. |
| **Products B** | `03-core-pages/` | Remaining product pages (specialty, non-QM, equity, investor) | same | same | Same as above, plus the review-content check (no rate claims, no unnamed originators). |
| **Calculators/Research** | `03-core-pages/` | ~18 calculators and tools; 4 research pages | same, plus the `tool_start`/`tool_complete` events | same, plus tool UX and `WebApplication`/`Dataset` schema | No default rate. Results carry the non-quote label. Each tool has a direct answer above the tool. |
| **City consistency sweep** | `04-city-pages/` | All 276 city pages + 13 county hubs + 3 state hubs: template consistency, duplication, H1/title patterns, above-the-fold, entity line, fair-housing language, sources | page data; guide §6, §7.4, §7.10 | Template-level fix list; duplication analysis; fair-housing language list with replacements | Every finding states whether it is a template fix or a per-page fix. All banned place words (guide §6) are listed with exact replacement text. |
| **County-group fact-checkers (×3)** | `04-city-pages/` | Each checks the cities in its assigned county group: population, values, millage, ZIPs, taxable-value change, loan limits, MSHDA limits, school districts, municipal facts | city text files; primary sources (Census/ACS, Michigan Treasury millage, county equalization, FHFA, HUD, MSHDA, municipal sites) | Fact-check log (city, claim, page value, verified value, source URL, verdict); correction CSV | Every corrected figure cites a Tier 1 source. Unverifiable claims are marked `[VERIFY]`, never guessed. Portal figures (Redfin/Zillow) are checked for the named-not-linked rule. |
| **Blog inventory** | `05-content-keywords/` | 471 Learn URLs + 96 legacy root posts: topic, cluster, quality, freshness, cannibalization | `page_summary.csv`, `pages.jsonl`, `$DATA/../site/extra_posts.txt` | Inventory CSV (keep / refresh / merge / redirect / retire) | Each legacy post has a disposition and a target URL where it redirects. Cannibalizing pairs are named with a winner. |
| **GSC gaps** | `05-content-keywords/` | Queries with impressions but no strong page; striking-distance queries; question queries; CTR outliers | DataWise GSC (`property_id 7faa6221…`), inventory | Gap list with the target page or "new article"; striking-distance cohort file (frozen baseline for §7) | The baseline query cohort is saved with date and positions. Each gap is mapped to an existing URL or a new-article brief stub. Bing is flagged as missing data. |
| **Competitor/AI-search gaps** | `05-content-keywords/` | Topics competitors or AI answers cover that Align does not; AI Overview/LLM citation baseline | DataWise (credit-limited, per prompt), WebSearch | Gap list; AI-citation baseline panel (≈50 prompts × 4 engines) | The baseline panel is saved with prompts, date, engine and whether Align or `alignlending.com` was cited. No competitor is linked in any recommended copy. |
| **Image optimization** | `07-images/`, `07-images/optimized/` | Every unique image in `images.json`: format, dimensions, bytes, width/height attributes, lazy-loaded LCP images | `images.json`, `img_raw/` | Optimized files; replacement map (old URL → new file, dimensions); LCP fix list per template | Each file has before/after bytes. LCP images are not lazy-loaded. Width/height are specified. No visible quality loss. |
| **Alt text** | `07-images/` | Alt text for every meaningful image; empty alt for decorative ones | `images.json` alt variants, page context, guide §7.4 | Alt-text CSV (image, pages, current alt, recommended alt, reason) | Alt text describes the image, not the people's characteristics. No keyword stuffing. No rates or claims in alt text. Decorative images get `alt=""`. |

### Phase 2: Audit, consistency and strategy (pending)

| Team | Folder | Scope | Inputs | Outputs | Acceptance criteria |
|---|---|---|---|---|---|
| **Independent auditor team** | `08-audit/` | Re-score a stratified sample with the rubric; spot-check facts, compliance and implementability of every Phase 1 team's output | All Phase 1 outputs; rubric; guide | Audit report: score deltas per team, error log, items rejected or returned | Samples at least 10% of each team's scored pages (minimum 5). Flags any score that differs by more than 5 points or crosses a grade boundary. Every rejected item has a reason. |
| **Brand/SEO consistency team** | `09-consistency/` | Normalize every team's replacement copy against the guide: voice, banned words, CTA labels, claims library, compliance checklist, cross-team conflicts | Phase 1 outputs after audit; guide; claims library | Consistency log; corrected master copy CSVs; conflict resolutions | 100% of replacement copy is passed through the guide §11 checklist. Zero banned words. Zero unapproved claims. Every cross-team conflict is resolved and logged. |
| **Content strategist** | `06-blogs/` | Turn inventory + GSC gaps + competitor gaps into a prioritized plan | CONT-01..03 outputs; link strategy; guide | Content plan: article list with target query, intent, cluster, internal-link targets, brief per article, refresh list | Each new article maps to a measured gap (GSC impressions or AI-panel miss). No article duplicates an existing URL. Briefs specify the direct-answer questions, sources and CTA intent. |

### Phase 3: Production (pending)

| Team | Folder | Scope | Inputs | Outputs | Acceptance criteria |
|---|---|---|---|---|---|
| **Blog writers** | `06-blogs/drafts/` | Write the articles and refreshes in the plan | Strategist briefs, guide, claims library, link map | Draft Markdown per article: title, meta, H1, direct-answer blocks, body, FAQ (+ JSON-LD), Sources, internal links, CTA, `Subject to Align approval` header where required | Each draft passes guide §11. Every fact cites a Tier 1–2 source or carries `[VERIFY]`. Samantha quotes come from the quote bank or `[NEEDS SAMANTHA QUOTE]`. Self-scored at 85 or higher on the Learn-weighted rubric. |
| **Consistency pass on drafts** | `09-consistency/` | Final voice and compliance check of drafts | Drafts | Approved / returned list | As above |

### Phase 4: Roll-up (pending)

| Team | Folder | Outputs | Acceptance criteria |
|---|---|---|---|
| **PM** | `00-project/` | Master implementation backlog (one CSV, P0/P1/P2, owner, effort); owner-decision list; measurement plan with baseline; executive summary | Every P0 is traceable to evidence. Conflicts are resolved. Align approval items are listed separately. The baseline is frozen. |

---

## 4. Dependencies

### 4.1 Dependency chain

```
Phase 0  PM standards (charter, guide, rubric, tracker) ─────────────────────────┐
                                                                                   │
Phase 1  CTA · Link health · Link strategy* · 5 core-page teams · City sweep**     │
         3 fact-checkers · Blog inventory · GSC gaps · Competitor/AI gaps          │
         Image optimization · Alt text***                                          │
              │                         │                                          │
              ▼                         ▼                                          ▼
Phase 2  Independent auditors ──► Brand/SEO consistency      Content strategist ◄─ inventory + GSC gaps + competitor gaps
                                         │                          │
                                         │                          ▼
Phase 3                                  │                    Blog writers ──► Consistency pass on drafts
                                         ▼                          │
Phase 4  PM roll-up: master backlog, owner decisions, measurement plan ◄──────────┘
```

\* Link strategy can start from `inlinks.json` now. It folds in the blog inventory's merge/redirect calls before it finalizes.
\*\* The City sweep finalizes template fixes after the three fact-checkers report, so that a template fix does not overwrite a corrected figure.
\*\*\* Alt text runs in parallel with optimization. File names and URLs come from the optimization replacement map.

### 4.2 Hard dependencies

| Downstream | Waits on | Why |
|---|---|---|
| Content strategist | Blog inventory + GSC gaps + Competitor/AI-search gaps | Needs what exists, what search demands and what AI answers miss |
| Blog writers | Content strategist (briefs) + guide + link strategy | Briefs define the target query and the questions. The link map defines the inlinks and outlinks each draft must carry. |
| Brand/SEO consistency | Independent auditors | Only copy that survives audit gets normalized |
| City sweep (final) | 3 county-group fact-checkers | Template changes must carry the verified figures |
| Link strategy (final) | Blog inventory | No links to articles that will be merged or redirected |
| PM roll-up | Consistency sign-off (Phase 1 copy + drafts) | The backlog only holds approved copy |
| Any copy using an item marked Verify/COUNSEL | Owner or counsel decision (PM-05..PM-10) | Do not ship unverified claims |

### 4.3 Conflict rules (when two teams touch the same element)
1. **CTA label and destination:** the CTA team wins. Core-page teams place CTAs, but use the CTA team's labels.
2. **Link insertions inside body copy:** the link team supplies anchor and target. The page owner supplies the sentence.
3. **Page copy (H1–H3, above the fold, body, title/meta):** the page-owner team wins (core-page or city team).
4. **Facts on city pages:** the county-group fact-checker wins over the sweep.
5. **Voice, banned words, claims and compliance:** the consistency team can override anyone, citing the guide section.
6. **Unresolved:** escalate to the PM, who decides and logs it in the tracker notes.

---

## 5. Definition of done

### 5.1 For every work item
- [ ] Files are in the team's assigned folder only, named as the brief requires (Markdown report + CSV implementation tables).
- [ ] The report has a summary, a scorecard table (rubric aspects, 0–100, letter grade, one-sentence evidence-based rationale), findings ranked by impact, and implementation-ready changes.
- [ ] Every recommendation has URL, element, current, recommended (**exact final text**), reason, priority (P0/P1/P2), impact and effort.
- [ ] Every claim cites evidence: a URL, a data field value or a primary-source link.
- [ ] Replacement copy passes the guide §11 pre-publish checklist.
- [ ] Nothing claims a live-site change. Unverified facts carry `[VERIFY]`. Missing quotes carry `[NEEDS SAMANTHA QUOTE]`.
- [ ] Final message to the orchestrator is 350 words or fewer.
- [ ] Tracker row updated.

### 5.2 For the project
- [ ] All 8 asks have delivered outputs (§2 table fully covered).
- [ ] Independent audit complete. Score deltas resolved.
- [ ] Consistency sign-off on 100% of replacement copy and all drafts.
- [ ] One master implementation backlog exists, de-duplicated, with P0 items first and each item traceable to a team file.
- [ ] Owner/counsel decision list delivered (trigger terms, NAMB award, review count method, broker-comp wording, "Written by" byline, Samantha's banned phrases, Bing export).
- [ ] Measurement baseline frozen (§7): GSC cohort, AI-citation panel, GA4 event baseline, LCP per template.
- [ ] Blog drafts delivered for every P0/P1 gap in the content plan, each marked for Align approval where required.

---

## 6. Risks

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | **Read-only site access.** We cannot test changes, see Elementor template inheritance, or confirm that a fix in one template propagates (276 city pages and 471 Learn URLs are templated). | Certain | High | Every recommendation states whether it is a **template** or **page** change and names the template where known. Implementation CSVs are written for Align's web lead. A post-implementation re-crawl is part of measurement. | All teams; PM |
| R2 | **Crawl drift.** The live site changes while we work (pages were updated as recently as November 2026). | Medium | Medium | Everything is dated "as of the 2026-11-15 crawl". The roll-up re-checks P0 items against the live page (2–3 URLs at a time) before hand-off. | PM; auditors |
| R3 | **No Bing Webmaster data.** Copilot answers draw on the Bing index. | Certain | Medium | No Bing numbers are invented. Teams note Bing-specific recommendations (literal titles, IndexNow via Rank Math). The owner exports Bing Webmaster Tools data (PM-05). | GSC gaps; PM |
| R4 | **Reg Z trigger terms vs. the no-rate policy.** Align publishes no APR, so promotional copy that uses a trigger term ("3% down", "30-year mortgage", "$X a month") cannot carry the disclosure §1026.24(d)(2) requires. 171 Learn pages contain "N% down", and product pages are named "30-Year Fixed". | High | Critical | Guide §7.2 interim writer rules. Counsel review of product names and Learn patterns (PM-08). No trigger terms on money pages until cleared. | PM; counsel; consistency |
| R5 | **Unsubstantiated award.** "NAMB Broker of the Year" appears on 18 pages but is absent from the press page's sourced awards list and has no year. | Medium | High | Do not reuse it in new copy. The owner supplies the year and the NAMB source (PM-07). Fix or remove it in the roll-up. | PM; Align |
| R6 | **Stale review count.** "5.0 on Google, 123 reviews" is hard-coded on 353 pages and in home-page schema. | High | Medium | One global source of truth and a monthly check (PM-09), or drop the count. | Align; CTA team |
| R7 | **Annual figure rollover.** FHFA's 2027 conforming limits are expected in late November 2026, HUD's FHA limits in December, and MSHDA limits change too. "$832,750 (2026)" appears on home, purchase, products, city pages and Learn. The Editorial Policy's figures file is due for review by Dec 15, 2026. | Certain | High | Drafts use the figures file with the year. The roll-up lists every page that states a 2026 limit. Update the figures file before Jan 1, 2027 (PM-10). | PM; writers; Align |
| R8 | **Fabricated content.** AI-drafted copy invents a quote, statistic, client story or review. | Medium | Critical | Quote bank (guide §10.3). Placeholders. Consistency team rejects unsourced facts. Align approval on drafts that quote Samantha or describe how Align works. | Writers; consistency |
| R9 | **Fair-housing language on city pages.** Live examples: "sought-after, walkable enclave", "desirable suburb", "genuinely thriving". | Medium | High | Banned place words (guide §6). The City sweep produces a full list with replacements. | City teams |
| R10 | **Reviews with rate claims or other originators on money pages** (`/product-loans/asset-based-income-loans/`: "great rates", "Taylor", "Kevin"). | Present | Medium | Guide §7.7. The Products B team swaps the reviews. | Products B |
| R11 | **Government non-affiliation disclaimer missing** on all 21 product pages, including FHA/VA/USDA. | Present | High | P0 for the Products A team. | Products A |
| R12 | **Measurement gaps.** `cta_click` does not send `link_text`. Calendly bookings complete off-site, so completions are not tracked. `/start/` vs the `app.alignlending.com`/`my1003app.com` destinations need confirming. | Present | Medium | CTA team recommends adding `link_text` to the delegated listener, enabling Calendly's GA4 integration, and confirming the apply path. | CTA team |
| R13 | **Conflicting recommendations across 17 parallel teams.** | High | Medium | Conflict rules (§4.3). Consistency team arbitration. One master backlog. | PM |
| R14 | **Cannibalization and legacy content.** 96 legacy root posts sit outside the sitemap. Legacy `/mortgage-location/` URLs still collect impressions in GSC. | Medium | Medium | Blog inventory dispositions. Link health confirms the 301s. | Blog inventory; Link health |
| R15 | **AI-search results are volatile and have no first-party analytics.** | Certain | Medium | A fixed prompt panel run monthly with the same prompts and engines, recording citation and URL. Treat results as directional. | Competitor/AI gaps; PM |
| R16 | **External link checks are noisy.** Bot protection returns 0/403/429. | Certain | Low | Only 404/410/5xx/DNS count as broken (brief §3). | Link health |

---

## 7. Success metrics (track after implementation)

**Rule:** measure against a **frozen baseline** captured before any change ships, on fixed cohorts. Impressions are growing quickly, so raw totals alone will flatter or hide results. Compare like for like: same queries, same position bands, same page types.

**Page-type classification** (for GSC and GA4, by URL path): home `/`; purchase `/purchase/…`; refinance `/refinance/…`; product `/product-loans/…`; calculator (calculator slugs, `/compare-loan-estimates/`, `/loan-limits/`, `/usda-eligibility-check/`); city `/mortgage-lender-…`; county/state hub `/mortgage-michigan/…`, `/mortgage-florida/`, `/mortgage-north-carolina/`; Learn `/learn/…`; research `/research/…`; trust (about, contact, reviews, licensing, editorial policy, rates, Samantha, press); legacy (`/mortgage-location/…` and the 96 root posts).

| # | Metric | Definition and source | Baseline | Target (proposed, confirm with owner) | Cadence | Owner |
|---|---|---|---|---|---|---|
| M1 | **GSC clicks and CTR by page type** | GSC Performance export by page, grouped by the classification above; non-brand split out (exclude queries containing "align") | Site: 416 clicks / 181,048 impr / CTR 0.23% / pos 28.1 (90 days to ~2026-11-12). Page-type split: GSC gaps team computes it from a page-level export. | Non-brand clicks +100% at 90 days post-implementation (impressions are already rising). CTR at positions 1–10 +30% relative on pages whose title/meta changed, vs. unchanged control pages in the same type. | Weekly dashboard, monthly review | GSC gaps → PM |
| M2 | **Striking distance → top 10** | The frozen cohort of 511 striking-distance queries (DataWise definition) and their landing pages; share that reach top 10 | 0 of 511 (by definition); site has 840 top-10 and 196 top-3 queries | 20% of the cohort in the top 10 within 90 days; top-10 query count from 840 to 1,100 or more | Monthly | GSC gaps → PM |
| M3 | **Brand SERP** | Position and CTR for "align lending" and variants ("aligned lending", "align mortgage") | Position 5.0, 71 clicks / 1,293 impressions (90 days) | Position 1–2 within 60 days (entity statements, Organization schema, GBP consistency) | Monthly | Refinance+Home+Trust → PM |
| M4 | **AI Overview / LLM citations** | A fixed panel of ~50 prompts (Michigan-specific questions where Align has unique data, plus national program questions from GSC/PAA) run on Google AI Overviews, ChatGPT search, Perplexity and Copilot. Record: cited (Y/N), URL cited, Align or Samantha named. Optionally DataWise `ai_visibility`/`ai_mentions` monthly (credits). | Captured by the Competitor/AI-search team before changes ship | Michigan-specific prompts: Align cited in 40% or more of engine-prompt pairs within 6 months. National prompts: 10% or more. | Monthly | Competitor/AI gaps → PM |
| M5 | **CTA click events** (`window.alignTrack`) | GA4 events: `cta_click` by `destination` (`start`, `apply`, `schedule`, `partner_site`); `phone_click`; `tool_start` and `tool_complete` by `tool_id`; `samantha_bar`. Rate = events per 1,000 organic landing sessions, by page type (`page_path`, added by the helper). | GA4 export for the 28 days before implementation (CTA team defines the query) | Combined `cta_click` (start/apply/schedule) + `phone_click` per 1,000 organic sessions +25% on money pages and +50% on Learn guides. `tool_complete`/`tool_start` at 50% or more. After `link_text` is added: label-level comparison of the standardized labels. | Monthly | CTA team → PM |
| M6 | **LCP** | p75 mobile LCP from CrUX field data (PageSpeed Insights) for 5 templates: home, purchase, product, city, Learn guide. Lab LCP where field data is missing. | Image team captures it before the optimized files ship | 2.5 s or less at p75 mobile on all 5 templates. Zero lazy-loaded LCP images. 100% of content images with width/height. | Monthly | Image optimization → PM |
| M7 | **Compliance health** (guardrail) | Count of open P0 compliance defects; review count matches Google; no 2026 figure live after the 2027 figures publish | Open P0s are listed in the roll-up | 0 open P0. Review count correct on every monthly check. Figures file updated before Jan 1, 2027. | Monthly | Consistency → PM |
| M8 | **Index and link health** (guardrail) | Orphan guides (no contextual inlinks), broken internal links, legacy URLs collecting impressions | From `link_graph.json` | 0 orphan guides. 0 broken internal links. Legacy impressions trending to 0. | Monthly re-crawl | Link health → PM |

**Reporting:** a monthly one-page scorecard (M1–M8) compares the period with the frozen baseline. Any metric below baseline for two months triggers a review of the related changes.

---

## 8. Owner and counsel decisions needed

These are tracked as PM-05 to PM-11 in `tracker.csv`:
1. **Bing Webmaster Tools export** (queries and pages, 90 days).
2. **Counsel:** do product names such as "30-Year Fixed" and agency-rule statements such as "FHA requires 3.5% down" in guides count as triggering terms under 12 CFR 1026.24(d)? How should Align handle disclosures, given its no-APR policy?
3. **NAMB Broker of the Year:** the year and a primary source, or remove it from 18 pages.
4. **Review count:** automate it from Google, or drop the number.
5. **Broker compensation wording** ("not by a fee you pay Align"): confirm it is always true.
6. **Samantha's banned-phrase list,** which the Editorial Policy refers to.
7. **Byline:** keep "Written by", or move to "By" or "Reviewed by".
8. **Apply path:** confirm what `/start/` is (intake or application) and where the credit pull happens, to keep "No credit pull to talk" accurate.
