# alignlending.com — SEO, Conversion & AI-Search Overhaul: Shared Team Brief

Every agent on this project reads this file first. It defines the goal, the data, the scoring system, the brand rules and the output conventions. If something here conflicts with your own prompt, your prompt wins for scope and this file wins for standards.

## 1. What the owner asked for

1. Review **every CTA** and **every internal and external link**. Find better ways to link the articles together.
2. Deep review of the **product pages**, the **purchase page** (and sub-pages), and the **refinance page** (and sub-pages). Make sure the **H1s, H2s and H3s** are the best they can be.
3. Make sure each page **answers the visitor's question and solves their problem above the fold**.
4. **Score and grade every aspect** of these details.
5. Confirm **accuracy and consistency of the city pages**.
6. Review the **blog inventory** (what exists, what is left), then review **GSC and Bing keyword gaps** and plan and write as many blogs as needed to close the gaps.
7. Review **photos/images**: make sure they are optimized; fix and improve the ones that need it.
8. Everything must sound like **Align Lending**, be **impactful for SEO**, and be specific enough to win **AI search answers** (Google AI Overviews, ChatGPT, Perplexity, Copilot) for the questions people commonly ask.

**Constraint:** we have read-only access to the live WordPress site. Deliverables are exact, implementable changes: replacement text, link insertions, files and checklists. Never claim a change was made on the live site.

## 2. Site facts

- WordPress + Elementor Pro + Astra + Rank Math. Custom components use `adp-` classes. GA4 + GTM are installed.
- **Align Lending LLC**: independent mortgage broker, NMLS #2041154, founded August 2020, office on Pontiac Lake Road, Waterford, Michigan. Licensed in MI, OH, NC, FL, LA and TX. Phone 248-506-5727.
- **Samantha Shelton**: Broker Owner and Senior Loan Originator, NMLS 1647301. She is the face, byline and voice of the site. Awards: Hall of AIME, NAMB Broker of the Year, Woman with Vision.
- Trust strip used site-wide: "No credit pull to talk", "5.0 on Google, 123 reviews".
- The primary CTA vocabulary currently in use: "Start my application", "Talk with Samantha", "Build my homebuyer game plan", "Talk through your options", header "Apply Now" / "Contact Us" / phone.
- The application lives at `app.alignlending.com`.
- Page inventory (crawled 2026-11-15, 901 live HTML URLs): 1 home, 275 city pages (`/mortgage-lender-<city>-mi/`) across 29 counties, 13 county hubs (`/mortgage-michigan/<county>/`), state hubs (MI, FL, NC), `/purchase/` + 10 sub-pages, `/refinance/` + 3 sub-pages, `/product-loans/` + ~22 product pages, ~16 calculators and tools, 472 `/learn/` URLs (articles + category hubs), 96 legacy WordPress posts at root slugs (not in the sitemap), research pages, and about/contact/reviews/legal pages.
- 293 legacy `/mortgage-location/<city>-mi-<zip>/` URLs 301 to the new city pages.
- GSC, last 90 days: 416 clicks, 181K impressions, avg position 28, 5,231 queries, 511 in striking distance. Impressions are growing fast from October 2026.
- **Bing Webmaster data is not connected.** Note Bing-specific recommendations where relevant and flag that a Bing export is needed. Do not invent Bing numbers.

## 3. Data you must use (do not re-crawl the site)

Data root: `DATA=/tmp/claude-0/-home-user-branch-boost-builder/36a6d023-1820-5438-b7a7-9149dcf56310/scratchpad/data`

| File | What it holds |
|---|---|
| `$DATA/page_summary.csv` | One row per page: url, type, title, title_len, meta_description, H1, h1/h2 counts, question_headings, word_count, above_fold_words, atf_ctas, content links in/out, inlinks, schema, faq_q, canonical_ok, robots, dates, byline, image alt gaps, in_sitemap, text_file |
| `$DATA/pages.jsonl` | Full record per page: `outline` [[level, text]...], `above_fold_text` (content before the first H2), `ctas` [{text, href, class, region, atf}], `links` [{href, text, kind, region, atf, rel, target}], `images` [...], `schema_types`, `faq_schema_questions`, `byline`, `published`, `modified`, `redirects` |
| `$DATA/text/<slug>.txt` | Full visible body text of each page (the `text_file` field, relative to `$DATA`) |
| `$DATA/link_graph.json` | Orphans (no contextual inlinks), broken internal/external links, redirecting URLs, top anchor texts per target, pages not in the sitemap, external domain counts |
| `$DATA/inlinks.json` | Contextual and total inlink counts per URL |
| `$DATA/images.json` | Every unique image: bytes, pixel size, format, occurrences, pages, alt variants, lazy-loaded-above-fold count, missing dimensions; raw files in `$DATA/img_raw/` |
| `$DATA/../site/*.html` | Raw HTML for a handful of sample pages |

Region values: `header`, `content`, `footer`, `popup`, `chrome` (floating buttons and widgets). `atf: true` means the element sits before the first H2 in the content area, our proxy for "above the fold".

**Live data sources (via ToolSearch → DataWise SEO tools):** Google Search Console for `sc-domain:alignlending.com` is connected in DataWise. Use `datawise_search_console` with `property_id = 7faa6221b18546d9a3c4c6a4fd0ae4ed` (`action: queries`, use `search` to filter by topic, `sort` by impressions, `limit` ≤ 200 with `offset` to paginate). This call is free. DataForSEO-backed tools (keyword_gap, people_also_ask, keyword_research, ai_visibility, competitors) cost credits, so use them only where your prompt says to. The `Align_Lending` connector's `ask` tool searches the site's indexed content.

Notes on the crawl: `external_status.jsonl` (live status of all 11,643 unique external links) is filled by a background job that finishes around 03:55 UTC. Read it at the end of your work, and treat status 0/403/429 as "blocked or bot-protected" rather than broken. Only 404/410/5xx and DNS failures are broken.

**Analyze with `python3` scripts (stdlib csv/json), not by pasting files into context.** When you must check the live site, fetch at most 2–3 URLs at a time with a pause. The server resets bursts. You may use WebSearch/WebFetch for fact-checking against primary sources (Census, county equalization, HUD, FHFA, VA, USDA, CFPB, Fannie/Freddie).

## 4. Scoring system (use it everywhere)

Score 0–100, then grade: **A** 90–100 · **B** 80–89 · **C** 70–79 · **D** 60–69 · **F** <60. Every score needs a one-sentence rationale that cites evidence.

Standard aspects (use the ones relevant to your scope):

| Aspect | 100 looks like |
|---|---|
| **Intent & H1** | H1 matches the dominant search intent and the primary query, is unique sitewide, and names the entity and location where relevant |
| **Heading structure** | Logical H2/H3 hierarchy that covers the sub-questions searchers have; question-led H2s where they help; no stat values or decoration marked up as headings; no skipped levels |
| **Above-the-fold answer** | Within the first ~60 words: who it's for, the direct answer or outcome, and why Align; one clear next step plus a friction-reducer |
| **CTA effectiveness** | Specific, benefit-led, consistent labels; right action for the intent; primary/secondary hierarchy; placement at decision points; working destinations |
| **Title & meta** | Title ≤ 60 chars with the primary keyword up front and a CTR hook; meta 140–160 chars, unique, benefit plus proof |
| **Internal linking** | Contextual, descriptive anchors; links to the hub/pillar and siblings; enough contextual inlinks; no orphans; no over-optimized exact-match repetition |
| **External linking** | Authoritative primary sources, no lender/rate sites, no broken links, correct rel attributes |
| **E-E-A-T & trust** | Byline/reviewer, NMLS, licensing, reviews, sources section, visible updated date |
| **AI-search readiness** | Direct 40–60-word answers under question headings, quotable specific facts, entity clarity (Align Lending + Samantha + Michigan), FAQ + appropriate schema, unique data |
| **Media** | Modern format, correctly sized, compressed, width/height set, LCP image not lazy-loaded, descriptive alt where meaningful |
| **Accuracy & compliance** | Facts verifiable and current; mortgage advertising compliant (no rates, Reg Z trigger terms handled, Equal Housing, NMLS); consistent with the rest of the site |

## 5. Brand voice and compliance rules (non-negotiable)

Taken from the site's own Editorial Policy, About and Rate Policy pages:

- **Voice:** calm, plain-English, specific, explanatory. "Understand your options before you decide." Teaches before it sells. Numbers and Michigan specifics over adjectives. First-person plural ("we") for Align; Samantha in third person except in sourced quotes. No hype words ("amazing", "best rates", "unbeatable", "lightning-fast"), no exclamation points, no pressure tactics, no unverifiable superlatives.
- **Never publish or imply a mortgage rate, APR or payment promise.** No "low rates" claims. Any example payment must be clearly labeled illustrative and avoid Reg Z triggering terms unless the full disclosure is included. Safer: link to the calculator.
- **Never link to a lender, rate site, or real-estate portal.** External links go to government, regulator or primary sources (CFPB, HUD, FHA, VA, USDA, IRS, FHFA, Census, Fannie Mae, Freddie Mac, MSHDA, Michigan Treasury, county and municipal sites).
- **Every guide carries one byline**, Samantha Shelton, NMLS 1647301, and ends with a **Sources** list.
- **Never invent Samantha quotes, client stories, testimonials, review counts, or statistics.** If a quote would help, write `[NEEDS SAMANTHA QUOTE: topic]`. If a fact needs a source you could not verify, write `[VERIFY: claim + suggested source]`.
- Drafts that describe how Align works are **subject to Align approval** before publishing.
- Keep the established CTA vocabulary unless your recommendation explains why a change converts better.

## 6. Output conventions

- Root: `/home/user/branch-boost-builder/alignlending-seo-audit/`. Write only inside your assigned folder.
- The main report is Markdown with: summary, scorecard table, findings ranked by impact, then implementation-ready changes.
- Implementation tables are CSV (URL, element, current, recommended, reason, priority). Replacement copy must be **exact final text**, not "improve this".
- Priority: **P0** = fix now (broken, wrong, compliance, or big traffic upside), **P1** = this month, **P2** = backlog. Give each item an impact (critical/high/medium/low) and an effort (low/medium/high).
- Every claim cites evidence: a URL, a field value from the data, or a source link.
- Your final message to the orchestrator is a **compact summary** (≤ 350 words) of files written, headline scores, and top 5 findings. The detail lives in your files.
