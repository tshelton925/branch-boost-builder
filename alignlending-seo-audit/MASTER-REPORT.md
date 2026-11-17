# Align Lending: Website Review and Change Plan

**For:** Terry, Align Lending · **From:** the project manager (orchestration lead) · **Date:** November 17, 2026
**Site:** alignlending.com, crawled November 15, 2026 (835 live pages scored, plus 96 legacy posts) · **Search data:** Google Search Console through DataWise, synced November 13, 2026

We had read-only access to the site, so **nothing on the live site has been changed.** Every recommendation is written as an exact change for your web lead. All of them are in one file, `09-consistency/MASTER-CHANGES.csv`, sorted by phase and priority. Scores follow the project rubric (`00-project/scoring-rubric.md`): A 90–100, B 80–89, C 70–79, D 60–69, F under 60. Where an independent auditor re-scored something, this report uses the auditor's number.

---

## 1. Executive summary

1. **Overall grade: 76 (C) today, 87 (B) once the approved changes ship.** The money pages (home, purchase, refinance, loan products) go from 72 (C) to 88 (B). The plan holds 6,041 approved changes. 92 more wait on a decision from you and 65 wait on compliance counsel.
2. **Google is already showing the site. People are not clicking.** In the last 90 days the site earned 416 clicks from 181,048 impressions (0.23%). Non-brand queries in the top 10 earned 8 clicks from 10,665 impressions (0.08%). The fix is better titles, a direct answer at the top of each page, and one clear owner page per query. More pages would not help.
3. **Fix the compliance items first.** Six problems are live today:
   - A USDA page meta promises "subsidized rates as low as 1%", and the same phrase appears on 7 more Learn pages.
   - 8 FHA, VA and USDA pages and tools have no government non-affiliation line, and none of the 15 top money pages carries one.
   - Several pages use a 1.5% "statewide median" tax default. Align's own study gives 36.0 mills, about 1.8%, so the old default understates taxes by about $75 a month on a $300,000 home.
   - Some pages still call 620 a hard conventional minimum. Fannie Mae removed that floor in November 2025.
   - A product page shows a review that praises "great rates".
   - "NAMB Broker of the Year" appears on 18 pages with no year and no source.
4. **Make every button say what it does.** Today one Calendly link sits behind 2,683 buttons with 62 different labels and no tracking, so no booking can be traced to a page. Under the plan:
   - Every booking button reads **"Talk with Samantha"**.
   - Apply buttons read **"Start my application"**.
   - Plan and tool buttons open the tool they name.
   - Learn-article modules match the article's topic (254 of 423 change destination).
   - The five menu links to alignwithalign.com move on-domain.
5. **The purchase section is the weakest money section, at 69 (D).** 8 of its 12 H1s are slogans ("You are not supposed to understand this yet"), and 8 of 10 sub-page titles leave out "Michigan". There are zero impressions for MSHDA and Michigan first-time-buyer searches. The plan rewrites every H1 and title around the query, adds Michigan program answers, and keeps the MSHDA wording honest: Samantha explains the programs and refers to a participating lender.
6. **Links are healthy but badly distributed.** There are no orphan pages and no broken internal links. But:
   - `/refinance/` has only 5 contextual inlinks and `/purchase/` has 16.
   - The menu is printed three times on every page.
   - 349 pages have no visible breadcrumbs.
   - City pages link to Wikipedia 171 times.

   The plan adds 1,353 link insertions, prints the menu once, adds breadcrumbs and replaces weak sources with primary ones.
7. **City pages are consistent and unique, but they had real factual errors.** Trust details (phone, NMLS numbers, review count, licensing) match on all 276 pages, and a typical page is 68% unique text. The independent fact-check of about 8,300 claims still found:
   - 59 property-tax-share errors;
   - an expired "May 1" exemption deadline on 3 pages;
   - 17 meta descriptions that quote a different price than the page.

   City accuracy is 82 (B) today and 92 (A) after fixes.
8. **The blog library is too big for the traffic it earns.** It has 424 articles (median 5,604 words), which earned 50,180 impressions and 4 clicks. The plan merges 85 articles, prunes 38 and refreshes 32. It also adds **14 new Michigan-specific posts, all drafted and edited** (editor scores 89–91 across 14 reviewed posts). The library ends at about 316 indexable articles.
9. **AI answers rarely cite Align yet.** Align is cited on 4 of 12 tracked prompts (5 of 48 engine checks), and on none of the four engines for the property-tax uncapping prompts, even though Align's 2026 Uncapping Study is the best Michigan data on that subject. The plan adds:
   - 31 ready-to-paste 40–60-word answer blocks;
   - one entity sentence and one schema spec across the whole site;
   - quotable research summaries.

   AI-search readiness goes from 72 (C) to 86 (B).
10. **Images are built and ready to upload.** 1,977 optimized files are in `07-images/optimized/`. The 746 files that replace current images drop from 101.1 MB to 64.2 MB (−36.5%). A home-page LCP fix and 873 load-ready alt-text rows are included. Media goes from 77 (C) to 99 (A).

**What we need from you this week:**
- Answer the 17 owner decisions in §9; the most urgent are D2, D3, D8 and N1.
- Send the counsel questions. One ruling on C1 and C2 releases most of the rows waiting on counsel.
- Connect Bing Webmaster Tools.

---

## 2. Your request, answered line by line

| You asked | What we did | Grade now → after | Where it lives |
|---|---|---|---|
| "all CTAs" | Inventoried 310 label→destination pairs (28,372 instances) on 835 pages. Set one vocabulary. Mapped every Learn module to its topic. Specified tracking (Calendly UTM, `link_text`). | CTAs 76 (C) → 88 (B) | `01-ctas/`, `09-consistency/brand-compliance-review.md` §5, `unified-specs.md` §2 |
| "all internal and external links" | Checked every internal link and 11,643 external links. Found 0 broken internal links, 2 confirmed external 404s and 21 redirects; 69 policy violations; 171 Wikipedia links. Specified one header, mobile menu, footer and breadcrumb system. | Internal 70 (C) → 83 (B) · External 78 (C) → 88 (B) | `02-links/`, `09-consistency/unified-specs.md` §1 |
| "better ways to link our articles" | A cluster map for every Learn URL. 252 exact in-article insertions, 384 city-guide insertions, money pages linking down to their guides, and a 159-row redirect map for merges. | Article linking 71 (C) → 82 (B) | `02-links/article-linking-strategy.md`, `cluster-map.csv`, `link-insertions.csv`, `09-consistency/redirect-map.csv` |
| "review the product pages, the purchase page, the refinance page" | Scored all 67 core pages (home, purchase + 10 sub-pages, refinance + 3, product hub + 21 products, 16 calculators, research, trust pages) and wrote exact replacement copy | Core pages 74 (C) → 88 (B) | `03-core-pages/`, §3.2 below |
| "best H1s and H2s" | Wrote a topic-first H1 for every core page. Rewrote question-led H2s from GSC and People Also Ask. Demoted stat values that were marked up as headings. | Headings 71 (C) → 85 (B) | `MASTER-CHANGES.csv` (element `h1`, `h2/h3 outline`) |
| "answer questions and solve problems above the fold" | A 60-word who/answer/why-Align subhead plus one primary and one secondary CTA on every money page. 31 exact answer blocks. An answer box for the top 50 Learn articles. | Above the fold 72 (C) → 84 (B) | `09-consistency/ai-answer-blocks.md`, `MASTER-CHANGES.csv` (element `subhead`, `answer block`) |
| "score and grade every aspect" | One rubric for every team. 7 independent auditors re-scored the work. §3 is the single master scorecard and `scorecard.json` is its machine-readable copy. | Overall 76 (C) → 87 (B) | §3, `scorecard.json` |
| "confirm accuracy and consistency in the city pages" | A consistency sweep of all 276 pages, three county-group fact-checks (~8,300 claims), an independent city audit, and 2,023 approved city changes | Accuracy 82 (B) → 92 (A) · Consistency 85 (B) → 87 (B) | `04-city-pages/`, `08-audit/audit-city.md` |
| "review what we have left for blogs" | Inventoried all 473 Learn URLs and the 96 legacy posts, with a keep, refresh, merge, prune or redirect call on each | Blog library 77 (C) → 80 (B) | `05-content-keywords/blog-inventory-report.md`, `blog-inventory.csv` |
| "review GSC and Bing keyword gaps" | GSC: all 5,231 queries, 511 striking-distance queries, and 147 query themes each given one owner page. **Bing: not possible.** The account is not connected, so no Bing numbers are used anywhere. | Gap coverage 73 (C) → 88 (B) | `05-content-keywords/gsc-gap-report.md`, `09-consistency/query-ownership-map.csv` |
| "add as many blogs as needed to close them" | Evaluated 84 candidates: 15 new posts (14 drafted and edited, 1 waits for the 2027 VA limits), 32 refreshes, 22 queries handed to money pages, 7 dropped as off-topic | — | `05-content-keywords/content-plan.md`, `06-blogs/drafts/`, §7 |
| "review photos and make sure they're optimized, fix and improve" | Audited 1,244 images and built 1,977 optimized files. Wrote 5 delivery snippets, the home LCP fix and 873 corrected alt texts. | Media 77 (C) → 99 (A) | `07-images/`, `07-images/optimized/` |
| "orchestration agent as PM, sub-agent teams, an auditor, and a consistency team" | See §2.1 | — | `00-project/charter.md`, `tracker.csv` |
| "so all suggestions fit the request, sound like Align Lending, and are impactful for SEO and AI search" | A brand voice and compliance guide. A brand editor screened 5,274 rows (290 fixes). An SEO/AI editor set the owner page for each query. A conflict resolver merged 992 conflicts into one change list. | Brand & compliance 80 (B) → 93 (A) · AI readiness 72 (C) → 86 (B) | `00-project/brand-voice-and-compliance-guide.md`, `09-consistency/` |

### 2.1 How the project ran

```
                               Terry (owner)
                                    │
                    PM / orchestration lead (00-project)
       charter · brand voice & compliance guide · rubric · tracker · KNOWN-CORRECTIONS
                                    │
 ┌──────────────┬──────────────┬────┴───────────┬─────────────────┬──────────────┐
 CTA team (1)   Links (2)      Core pages (5)   City pages (4)    Content (3+1)  Images (2)
 01-ctas        02-links       03-core-pages    04-city-pages     05-content-    07-images
                health,        purchase;        consistency       keywords       optimization,
                article        refi+home+trust; sweep + 3 county  inventory,     alt text
                linking        products A, B;   fact-checkers     GSC gaps,
                               calcs/research                     competitor/AI,
                                                                  + strategist
                                    │
                 Independent auditors (7) — 08-audit
     CTAs · links · core pages A · core pages B · city · content · images
     re-derived every headline number, re-scored blind samples, wrote corrections
                                    │
                 Consistency team — 09-consistency
     brand & compliance editor · SEO & AI-search editor · conflict resolver
     4 blog editors (E1–E4) reviewing the 14 drafts written in 06-blogs
                                    │
          MASTER-CHANGES.csv (7,195 rows) → this report → Align's web lead
```

**Agent count:**
- **1 PM.**
- **17 specialists** in the first wave: CTA 1, links 2, core pages 5, city 4, content 3, images 2.
- **1 content strategist.**
- **7 independent auditors.**
- **7 on the consistency team:** brand editor, SEO/AI editor, conflict resolver and 4 blog editors.
- **The blog writers** who drafted the 14 posts.

That is at least 33 agents plus the writers.

**Order of work:** standards → specialists → auditors → consistency (brand, then SEO, then the resolver) → writers → blog editors → this synthesis.

**Precedence:** verified facts and compliance > auditor correction > brand fix > SEO fix > team row.

---

## 3. Master scorecard

### 3.1 By area (audited score today → projected after the approved changes ship)

| Area | Today | Projected | Biggest issue | Evidence |
|---|---|---|---|---|
| **CTAs** | 76 (C) | 88 (B) | 470 of 471 Learn pages have no action above the first H2, and 4 primary buttons promise a plan or checkup but open a calendar. | `01-ctas/cta-report.md`, `08-audit/audit-ctas.md`, `09-consistency/brand-compliance-review.md` |
| **Internal linking** | 70 (C) | 83 (B) | /refinance/ (5 contextual inlinks) and /purchase/ (16) are near-orphans while the menu duplicates about 45 links per page. | `02-links/link-health-report.md`, `08-audit/audit-links.md`, `02-links/internal-link-fixes.csv` |
| **External linking** | 78 (C) | 88 (B) | Wikipedia and World Population Review used as sources on city pages; live status of about 11,290 external URLs could not be verified from the sandbox. | `02-links/link-health-report.md`, `02-links/external-link-policy.csv`, `08-audit/audit-links.md` |
| **Article linking** | 71 (C) | 82 (B) | Money pages do not link down into their clusters, and refinance/buying articles rarely link /refinance/ or /purchase/ (0 of 36). | `02-links/article-linking-strategy.md`, `02-links/cluster-map.csv`, `02-links/link-insertions.csv` |
| **Core pages (67 scored)** | 74 (C) | 88 (B) | The purchase section averages 69 (D): 8 of 12 H1s are slogans, 8 of 10 sub-page titles omit Michigan, and the home page is the weakest money page at 71. | `03-core-pages/scores-*.csv`, `08-audit/audit-core-pages-A.md`, `08-audit/audit-core-pages-B.md` |
| **Headings (H1/H2/H3)** | 71 (C) | 85 (B) | Brand-line H1s on purchase sub-pages and stat values marked up as headings on all 276 city pages. | `03-core-pages/*-report.md`, `04-city-pages/consistency-sweep.md`, `05-content-keywords/blog-inventory-report.md` |
| **Above-the-fold answers** | 72 (C) | 84 (B) | Learn pages hold most impressions yet 470 of 471 have no answer box or action above the first H2; only the top 50 get the new answer box in this release. | `03-core-pages/*-report.md`, `09-consistency/seo-ai-review.md`, `09-consistency/ai-answer-blocks.md` |
| **Titles and meta descriptions** | 72 (C) | 85 (B) | Non-brand top-10 queries earn 0.08% CTR (8 clicks on 10,665 impressions): titles do not match the query or give a reason to click. | `05-content-keywords/gsc-gap-report.md`, `04-city-pages/consistency-sweep.md`, `03-core-pages/*-report.md` |
| **City page accuracy** | 82 (B) | 92 (A) | Material errors were under-penalized by the teams (they scored 90 to 95.5); the independent auditor re-scored the 276-page set at 82 (B). | `04-city-pages/factcheck-group-1.md`, `04-city-pages/factcheck-group-2.md`, `04-city-pages/factcheck-group-3.md` |
| **City page consistency** | 85 (B) | 87 (B) | Meta descriptions and hero values mix Census, Redfin and Zillow measures; the fix waits on owner decision D2. | `04-city-pages/consistency-sweep.md`, `04-city-pages/city-matrix.csv`, `08-audit/audit-city.md` |
| **Blog library (Learn)** | 77 (C) | 80 (B) | Volume is not the gap: the library reads as scaled content (all re-dated in five weeks) while the real gaps are narrow Michigan program topics. | `05-content-keywords/blog-inventory-report.md`, `05-content-keywords/content-plan.md`, `08-audit/audit-content.md` |
| **Keyword gap coverage (GSC; Bing not connected)** | 73 (C) | 88 (B) | No Bing data; GSC has no page dimension in the connector, so most query-to-page mappings are inferred (26 of 147 confirmed). | `05-content-keywords/gsc-gap-report.md`, `05-content-keywords/keyword-gaps.csv`, `09-consistency/query-ownership-map.csv` |
| **Images and media** | 77 (C) | 99 (A) | Home page Media 61 to 63 (D): the LCP image waits on JavaScript and has no preload or srcset. | `07-images/image-optimization-report.md`, `07-images/optimized-manifest.csv`, `07-images/alt-text-corrected.csv` |
| **E-E-A-T and trust** | 80 (B) | 88 (B) | NAMB Broker of the Year appears on 18 pages with no year or primary source; the guide byline claim must match the Editorial Policy (F8). | `03-core-pages/scores-*.csv`, `05-content-keywords/blog-inventory-report.md`, `08-audit/audit-content.md` |
| **AI-search readiness** | 72 (C) | 86 (B) | Align is absent on all four AI engines for both property-tax uncapping prompts, although its 2026 Uncapping Study is the best Michigan dataset on the topic. | `05-content-keywords/ai-visibility.md`, `09-consistency/seo-ai-review.md`, `09-consistency/ai-answer-blocks.md` |
| **Brand voice and compliance** | 80 (B) | 93 (A) | P0 compliance items on the live site: a "rates as low as 1%" USDA meta, no government non-affiliation line on 8 FHA/VA/USDA pages, a stale 1.5% tax default, "620 minimum", a "great rates" review and an unverified award. | `09-consistency/brand-compliance-review.md`, `09-consistency/brand-fixes.csv`, `09-consistency/counsel-review.md` |
| **Overall (mean of 16 areas)** | **76 (C)** | **87 (B)** | | |

**How to read "projected".** A projection assumes every APPROVED and APPROVED-WITH-EDIT row in `MASTER-CHANGES.csv` ships, and that no owner or counsel decision changes the default. The rules:
- Where a team or auditor published a projection, we used it: article linking 82, city accuracy 92, media 99, brand copy 93.
- Otherwise, any page aspect with at least one approved change rises to 88 (the rubric's B anchor: sound, at most one weakness left).
- An aspect with a row still waiting on an owner or counsel decision is capped at 80.
- An aspect with no change keeps its score.
- Page overalls use the rubric's page-type weights. Area scores are simple means across page types, as rubric §6 specifies.

Treat projections as targets for ordering the work, not as a promise.

**Overall:** 76 (C) → 87 (B) (simple mean of the 16 areas). **Money pages:** 72 (C) → 88 (B).

### 3.2 Core pages, one row per page

Overall is rubric-weighted for the page type. "Src" means: **A** = auditor re-scored; **T** = team score that the auditor held within tolerance. Aspect columns are today's audited scores: H1 = Intent & H1, Hd = headings, ATF = above-the-fold answer, CTA, T&M = title & meta, IL = internal linking, EEAT, AI = AI-search readiness, Acc = accuracy & compliance, Med = media.

| Page | Type | Today | Projected | Src | H1 | Hd | ATF | CTA | T&M | IL | EEAT | AI | Acc | Med |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | home | 71 (C) | 89 (B) | T | 80 | 56 | 70 | 68 | 80 | 70 | 86 | 60 | 60 | 63 |
| `/purchase/` | purchase | 74 (C) | 89 (B) | T | 84 | 72 | 72 | 78 | 70 | 68 | 74 | 52 | 88 | 67 |
| `/purchase/budget-review/` | purchase | 70 (C) | 89 (B) | A | 55 | 76 | 62 | 74 | 55 | 80 | 80 | 68 | 86 | 77 |
| `/purchase/buy-before-you-sell/` | purchase | 71 (C) | 89 (B) | A | 55 | 74 | 64 | 80 | 60 | 80 | 70 | 72 | 86 | 77 |
| `/purchase/down-payment-assistance/` | purchase | 66 (D) | 89 (B) | A | 85 | 62 | 58 | 68 | 72 | 68 | 55 | 45 | 70 | 84 |
| `/purchase/first-time-homebuyer/` | purchase | 66 (D) | 89 (B) | T | 55 | 70 | 55 | 60 | 68 | 72 | 80 | 66 | 82 | 77 |
| `/purchase/homebuyer-game-plan/` | purchase | 68 (D) | 89 (B) | A | 50 | 62 | 68 | 62 | 60 | 85 | 80 | 70 | 85 | 77 |
| `/purchase/investment-property-financing/` | purchase | 70 (C) | 89 (B) | A | 50 | 68 | 60 | 80 | 62 | 72 | 80 | 70 | 88 | 77 |
| `/purchase/mortgage-readiness-review/`† | purchase | 67 (D) | 73 (C) | A | 55 | 60 | 58 | 78 | 58 | 74 | 72 | 66 | 80 | 77 |
| `/purchase/renovation-financing/` | purchase | 69 (D) | 89 (B) | A | 50 | 76 | 62 | 72 | 58 | 70 | 82 | 70 | 86 | 77 |
| `/purchase/self-employed-homebuyer/` | purchase | 72 (C) | 89 (B) | A | 62 | 74 | 68 | 72 | 60 | 62 | 82 | 74 | 88 | 77 |
| `/purchase/va-homebuyer-plan/` | purchase | 64 (D) | 89 (B) | A | 55 | 66 | 52 | 78 | 50 | 60 | 76 | 68 | 60 | 82 |
| `/refinance/` | refinance | 75 (C) | 89 (B) | A | 76 | 72 | 80 | 76 | 70 | 48 | 78 | 74 | 84 | 77 |
| `/refinance/break-even-review/` | refinance | 73 (C) | 88 (B) | A | 64 | 76 | 74 | 62 | 64 | 82 | 84 | 76 | 86 | 77 |
| `/refinance/cash-out-vs-home-equity/` | refinance | 74 (C) | 88 (B) | A | 78 | 74 | 76 | 64 | 66 | 72 | 84 | 78 | 84 | 71 |
| `/refinance/home-equity-review/` | refinance | 74 (C) | 89 (B) | T | 62 | 74 | 72 | 78 | 62 | 76 | 84 | 72 | 86 | 75 |
| `/product-loans/` | product | 76 (C) | 86 (B) | T | 85 | 78 | 66 | 80 | 84 | 82 | 68 | 60 | 84 | 78 |
| `/product-loans/1099-income-loans/` | product | 78 (C) | 88 (B) | A | 84 | 76 | 76 | 70 | 84 | 45 | 82 | 86 | 88 | 84 |
| `/product-loans/15-year-fixed/` | product | 73 (C) | 83 (B) | T | 80 | 72 | 76 | 78 | 80 | 58 | 70 | 70 | 74 | 84 |
| `/product-loans/30-year-fixed/` | product | 72 (C) | 81 (B) | T | 78 | 74 | 76 | 80 | 64 | 62 | 70 | 70 | 76 | 74 |
| `/product-loans/adjustable-rate-mortgage/` | product | 76 (C) | 87 (B) | T | 84 | 76 | 76 | 76 | 74 | 62 | 70 | 76 | 88 | 84 |
| `/product-loans/asset-based-income-loans/` | product | 73 (C) | 88 (B) | A | 74 | 76 | 76 | 70 | 76 | 45 | 82 | 84 | 64 | 84 |
| `/product-loans/bank-statement-loan/` | product | 75 (C) | 87 (B) | A | 84 | 70 | 80 | 80 | 86 | 62 | 58 | 76 | 64 | 84 |
| `/product-loans/buydown-loans/`* | product | 77 (C) | 87 (B) | T | 82 | 72 | 80 | 80 | 82 | 70 | 66 | 74 | 84 | 84 |
| `/product-loans/cashout-loans/` | product | 77 (C) | 88 (B) | A | 84 | 72 | 76 | 78 | 80 | 76 | 62 | 80 | 74 | 84 |
| `/product-loans/conventional-loans/` | product | 73 (C) | 87 (B) | A | 86 | 74 | 60 | 76 | 82 | 74 | 72 | 64 | 70 | 78 |
| `/product-loans/dscr-loans-michigan/` | product | 78 (C) | 89 (B) | A | 86 | 70 | 82 | 82 | 86 | 76 | 55 | 80 | 68 | 84 |
| `/product-loans/fha-loans/` | product | 73 (C) | 86 (B) | A | 88 | 72 | 68 | 78 | 72 | 74 | 72 | 70 | 64 | 84 |
| `/product-loans/heloc/` | product | 77 (C) | 89 (B) | A | 78 | 72 | 70 | 78 | 85 | 55 | 76 | 84 | 85 | 84 |
| `/product-loans/home-equity-loan/` | product | 75 (C) | 88 (B) | A | 82 | 70 | 74 | 76 | 78 | 74 | 62 | 78 | 76 | 74 |
| `/product-loans/home-ready/`* | product | 76 (C) | 87 (B) | T | 84 | 72 | 76 | 76 | 80 | 66 | 72 | 64 | 90 | 78 |
| `/product-loans/jumbo-loans/` | product | 75 (C) | 88 (B) | T | 86 | 72 | 76 | 76 | 72 | 70 | 66 | 70 | 86 | 78 |
| `/product-loans/manufactured-home-loans/`* | product | 79 (C) | 88 (B) | T | 86 | 56 | 80 | 76 | 82 | 76 | 78 | 84 | 90 | 84 |
| `/product-loans/non-qm-loans/` | product | 72 (C) | 88 (B) | A | 84 | 68 | 74 | 70 | 76 | 52 | 58 | 72 | 78 | 84 |
| `/product-loans/non-warrantable-condo-loans/` | product | 80 (B) | 89 (B) | A | 86 | 76 | 80 | 72 | 84 | 58 | 84 | 86 | 88 | 84 |
| `/product-loans/physician-loans/` | product | 76 (C) | 86 (B) | T | 86 | 80 | 80 | 76 | 82 | 40 | 74 | 82 | 82 | 84 |
| `/product-loans/usda-loans/` | product | 68 (D) | 87 (B) | A | 84 | 72 | 64 | 68 | 66 | 62 | 68 | 60 | 64 | 84 |
| `/product-loans/va-loans/` | product | 73 (C) | 85 (B) | A | 88 | 72 | 72 | 80 | 68 | 76 | 72 | 66 | 60 | 78 |
| `/calculators/` | calculator | 76 (C) | 90 (A) | T | 80 | 86 | 70 | 66 | 68 | 88 | 70 | 60 | 92 | 84 |
| `/compare-loan-estimates/` | calculator | 77 (C) | 87 (B) | T | 70 | 78 | 72 | 86 | 60 | 86 | 76 | 74 | 90 | 96 |
| `/home-affordability-calculator/` | calculator | 69 (D) | 87 (B) | T | 78 | 70 | 62 | 62 | 74 | 58 | 74 | 72 | 70 | 84 |
| `/loan-limits/`* | calculator | 82 (B) | 89 (B) | T | 84 | 74 | 84 | 72 | 82 | 92 | 74 | 86 | 93 | 84 |
| `/michigan-property-tax-calculator/` | calculator | 77 (C) | 88 (B) | T | 86 | 68 | 62 | 76 | 80 | 70 | 80 | 84 | 90 | 84 |
| `/michigan-transfer-tax-calculator/` | calculator | 81 (B) | 88 (B) | T | 90 | 82 | 80 | 84 | 68 | 84 | 74 | 74 | 95 | 84 |
| `/mortgage-calculator/` | calculator | 65 (D) | 87 (B) | T | 70 | 66 | 60 | 62 | 64 | 55 | 74 | 68 | 68 | 84 |
| `/mortgage-payoff-calculator/` | calculator | 71 (C) | 84 (B) | T | 86 | 72 | 74 | 70 | 60 | 46 | 72 | 68 | 92 | 84 |
| `/mortgage-refinance-calculator/` | calculator | 70 (C) | 88 (B) | A | 74 | 68 | 66 | 62 | 66 | 52 | 72 | 70 | 88 | 84 |
| `/pmi-removal-calculator/` | calculator | 76 (C) | 87 (B) | T | 88 | 72 | 76 | 82 | 60 | 60 | 76 | 78 | 94 | 78 |
| `/points-vs-lender-credit-calculator/` | calculator | 79 (C) | 89 (B) | T | 86 | 84 | 76 | 78 | 72 | 70 | 72 | 76 | 94 | 78 |
| `/rent-vs-buy-calculator/` | calculator | 75 (C) | 87 (B) | T | 82 | 74 | 72 | 76 | 62 | 70 | 72 | 72 | 92 | 78 |
| `/seller-net-sheet-calculator/` | calculator | 79 (C) | 88 (B) | T | 88 | 76 | 76 | 84 | 76 | 76 | 72 | 74 | 92 | 84 |
| `/usda-eligibility-check/` | calculator | 75 (C) | 88 (B) | A | 84 | 64 | 78 | 74 | 74 | 82 | 74 | 76 | 66 | 74 |
| `/va-funding-fee-calculator/`* | calculator | 72 (C) | 86 (B) | T | 88 | 72 | 72 | 70 | 64 | 70 | 72 | 52 | 90 | 84 |
| `/va-loan-calculator/` | calculator | 63 (D) | 87 (B) | A | 68 | 68 | 58 | 68 | 60 | 55 | 74 | 60 | 58 | 84 |
| `/research/` | research | 79 (C) | 84 (B) | A | 84 | 80 | 86 | 78 | 70 | 42 | 88 | 78 | 92 | 77 |
| `/research/methodology/` | research | 78 (C) | 84 (B) | T | 80 | 82 | 80 | 74 | 60 | 44 | 95 | 78 | 95 | 77 |
| `/research/michigan-mortgage-market-report/` | research | 79 (C) | 83 (B) | A | 84 | 82 | 88 | 78 | 68 | 42 | 88 | 84 | 84 | 77 |
| `/research/michigan-property-tax-uncapping-study/` | research | 86 (B) | 89 (B) | T | 88 | 78 | 90 | 80 | 82 | 90 | 84 | 86 | 92 | 67 |
| `/about-us/` | trust | 75 (C) | 86 (B) | A | 66 | 72 | 78 | 80 | 78 | 40 | 88 | 66 | 78 | 75 |
| `/contact-us/` | trust | 78 (C) | 88 (B) | A | 70 | 70 | 82 | 84 | 80 | 58 | 86 | 62 | 88 | 84 |
| `/mortgage-process/` | trust | 69 (D) | 88 (B) | A | 72 | 72 | 78 | 76 | 74 | 58 | 66 | 66 | 60 | 77 |
| `/real-estate-agents/` | trust | 81 (B) | 90 (A) | A | 72 | 76 | 80 | 84 | 76 | 52 | 90 | 80 | 88 | 75 |
| `/reviews/` | trust | 76 (C) | 89 (B) | A | 76 | 66 | 82 | 80 | 74 | 52 | 90 | 72 | 64 | 77 |
| `/samantha-shelton/` | trust | 80 (B) | 88 (B) | A | 78 | 76 | 62 | 78 | 76 | 90 | 94 | 84 | 76 | 79 |
| `/why-we-dont-publish-rates/` | trust | 84 (B) | 88 (B) | A | 88 | 78 | 86 | 84 | 86 | 56 | 86 | 84 | 90 | 84 |
| `/learn/fha-loan-limits/` | learn | 84 (B) | 88 (B) | T | 84 | 88 | 88 | 72 | 70 | 80 | 92 | 90 | 93 | 83 |
| `/learn/how-to-compare-loan-estimates/` | learn | 80 (B) | 82 (B) | T | 86 | 86 | 86 | 60 | 76 | 64 | 90 | 90 | 84 | 88 |

**Page-type means (today → projected):** home 71 (C) → 89 (B) · purchase 69 (D) → 88 (B) · refinance 74 (C) → 89 (B) · product 75 (C) → 87 (B) · calculator 74 (C) → 88 (B) · research 81 (B) → 85 (B) · trust 78 (C) → 88 (B). **Money pages** (home, purchase, refinance, product): 72 (C) → 88 (B).

\* The auditor flagged these pages' accuracy for re-scoring, because of a missing government disclaimer or the stale tax default. The team score is shown; expect about 60–66 until the fix ships.
† `/purchase/mortgage-readiness-review/` merges into the Game Plan page (redirect RD-106, owner decision N9). Its projection applies to the merged page.

### 3.3 Aspect averages across page types (today → projected)

| Aspect | Mean | home | purchase | refinance | product | calculator | research | trust | learn | city |
|---|---|---|---|---|---|---|---|---|---|---|
| Heading structure | **71 → 85** | 56→88 | 69→85 | 74→88 | 72→85 | 73→88 | 80→80 | 73→87 | 78→78 | 60→88 |
| Above-the-fold answer | **72 → 84** | 70→88 | 62→85 | 76→88 | 74→87 | 71→88 | 86→86 | 78→88 | 60→63 | – |
| Title & meta | **72 → 85** | 80→88 | 61→85 | 66→88 | 78→86 | 68→88 | 70→88 | 78→88 | 74→76 | 76→80 |
| E-E-A-T & trust | **80 → 88** | 86→88 | 76→88 | 82→88 | 70→88 | 74→88 | 89→90 | 86→89 | 81→88 | – |
| AI-search readiness | **72 → 86** | 60→88 | 66→88 | 75→86 | 74→88 | 72→88 | 82→88 | 73→86 | 73→77 | – |
| Accuracy & compliance | **80 → 88** | 60→88 | 82→87 | 85→86 | 77→88 | 85→89 | 91→91 | 78→86 | – | 82→92 |
| CTA effectiveness | **73 → 88** | 68→88 | 73→88 | 70→88 | 76→87 | 73→88 | 78→88 | 81→88 | 63→88 | 74→88 |
| Internal linking | **68 → 83** | 70→88 | 72→87 | 70→88 | 64→87 | 70→83 | 54→54 | 58→88 | 71→82 | 85→88 |

Learn and city values come from the content and city audits. Learn above-the-fold (60) and city headings (60) are PM scores taken from the rubric anchors (§3.3 and §3.2) that name those exact cases. Core-page values are the audited page scores averaged by type.

---

## 4. Top 10 findings, with evidence

| # | Finding | Evidence | Fix (where) |
|---|---|---|---|
| 1 | **Impressions without clicks.** Google is testing the new library deep in the results. | 416 clicks on 181,048 impressions (90 days). Non-brand top-10: 8 clicks on 10,665 impressions. 79.5% of on-topic impressions sit at position 21 or worse. Last 30 days: impressions +287% while average position fell from 24.0 to 32.8. | Title/meta rewrites, ATF answers, one owner page per query. `05-content-keywords/gsc-gap-report.md` §1; `09-consistency/seo-ai-review.md` §1 |
| 2 | **The two biggest pages earn almost nothing, and one carries a rate claim.** | `/learn/lease-to-own-vs-rent-to-own-whats/`: 14,548 impressions, 3 clicks. `/learn/usda-loan-basics/`: 10,182 impressions, 2 clicks. Its meta says "subsidized rates as low as 1%" (F13). "usda eligibility": 576 impressions at position 11.1. | Keep the article as owner. Add a 56-word eligibility answer and a tool link above the first H2. Remove the rate claim (P0). `ai-answer-blocks.md` A1 |
| 3 | **Bookings cannot be attributed, and button labels drift.** | 2,683 Calendly links under 62 labels on one URL with no UTM. 4 primary buttons promise a "plan" or "checkup" but open a calendar. 470 of 471 Learn pages have no action above the first H2. Audited CTA score 76 (C). | One vocabulary (brand review §5). Calendly UTM + `link_text` (Wave 0). Learn topic modules. `08-audit/audit-ctas.md` §2 |
| 4 | **The header sends five actions off-site on every page.** | 12,525 links to `www.alignwithalign.com` ("Plan my purchase", "Try payment scenarios"…). The host could not be verified. GA4 files these clicks as `partner_site`. The menu is printed 3 times per page. | NAV-001 to NAV-004: menu printed once, actions on-domain now (D4 can restore them later) |
| 5 | **Purchase pages do not say what they are about.** | 8 of 12 H1s are slogans and 8 of 10 titles omit "Michigan" (`page_summary.h1`). GSC has 0 impressions for "mshda", "mi 10k" and "first time home buyer michigan". The DPA page names no MSHDA program. The proposed "First-Generation $25,000" copy promoted a **closed** program (auditor A, P-06). | Topic-first H1s and titles. F1/F2 wording. New MSHDA guide. `08-audit/audit-core-pages-A.md` §2.1 |
| 6 | **Live compliance gaps on money pages.** | Government non-affiliation line on 0 of 15 top money pages (`seo-ai-review.md` §3.1). 1.5% tax default vs 36.0 mills = 1.8% (audit B, C3). "Usually 620" on conventional, FHA and cash-out. "Great rates" review on `/product-loans/asset-based-income-loans/`. NAMB on 18 pages with no source. "Under 14 days to clear to close" on `/mortgage-process/` and 4 more pages. | P0 rows in `MASTER-CHANGES.csv`; `00-project/KNOWN-CORRECTIONS.md` F3, F4, F7, F9, F10, F13, F18 |
| 7 | **Hubs are starved of links.** | `/refinance/` has 5 contextual inlinks and `/purchase/` 16 (half from its own sub-pages). The research hub has 1. Money pages link to only 2–6 Learn guides. 349 pages have no visible breadcrumb. 0 orphans and 0 broken internal links. | Cluster insertions, money-page "Guides for this loan" blocks, breadcrumbs (NAV-005). `08-audit/audit-links.md` |
| 8 | **City pages: consistent template, under-penalized errors.** | NAP and trust 276/276. Median unique text 68%. Auditor re-score: accuracy 82 (B), against the teams' 90–95.5. 27 of 30 sampled pages were off by more than 5 points. Errors include 59 tax-share errors, PRE "May 1" on Auburn Hills, Fenton and Holly, Hamtramck "sought-after enclave", and Northville's three county answers. | 2,023 approved city rows (Phase 3). D2 standard measure. `08-audit/audit-city.md` §5 |
| 9 | **The library reads as scaled content.** | 424 articles, median 5,604 words, all re-dated within five weeks. 50,180 impressions and 4 clicks. 61 cannibalization groups. 38 drift articles (mansions, crowdfunding, insurance). | 85 merges, 38 prunes, 32 refreshes, 14 new posts. `05-content-keywords/content-plan.md` §1 |
| 10 | **AI engines do not quote Align's best data.** | Cited on 4 of 12 prompts (5 of 48 checks). 0 of 12 on Google AI Mode. Riverbank has 785 Google AI mentions against Align's 19. The entity sentence is on 0 of 15 money pages. The Uncapping Study is not in quotable form. | Entity component + schema (SPEC-002/003), answer blocks, research Q&A and "Cite this study". `05-content-keywords/ai-visibility.md` §1 |

---

## 5. Top 25 changes by impact

Ranked by the SEO/AI editor's value score (traffic, CTR, conversion and AI-citation impact × confidence ÷ effort; `seo-ai-review.md` §5–6). Each row is in `MASTER-CHANGES.csv`. Phase follows the roadmap in §6.

| # | Change | Area | Impact | Effort | When |
|---|---|---|---|---|---|
| 1 | Keep `/learn/usda-loan-basics/` as the "usda eligibility" owner. Add a 56-word eligibility answer and a "Check an address for USDA" link above the first H2. Title: "USDA Loans: Eligibility and How Rural Development Loans Work". Remove "rates as low as 1%" from the meta. | Keyword gaps, compliance | high | low | Wave 0 (meta) + Days 1–30 |
| 2 | Home title "Michigan Mortgage Broker and Home Loans | Align Lending", H1 "Michigan Mortgage Broker: One Application, Multiple Wholesale Lenders", plus the "What does a mortgage broker do?" answer | Core pages, titles | high | low | Days 1–30 |
| 3 | Google Business Profile: services list, Q&A from the 40–60-word answers, monthly posts. Claim Bing Places. Same name, address and phone everywhere. | AI readiness, local | high | low | Days 1–30 (off-site) |
| 4 | 25 CTR title/meta rewrites on Learn pages already at positions 1–15 (conveyance, types of refinancing, amortization, homestead, rate lock, VA benefits, HomeReady, escrow, HELOC compare…) | Titles and meta | high | low | Days 1–30 |
| 5 | Calendly UTM on every booking link, `link_text` in the `alignTrack` click listener, derived GA4 events | CTAs, measurement | enabler | low | Wave 0 |
| 6 | Entity widget with the canonical sentence on every template, plus Organization/Person JSON-LD (SPEC-002/003) | AI readiness, E-E-A-T | high | low | Days 1–30 |
| 7 | Property tax calculator: topic title and H1, the uncapping answer with the 2026 study numbers under the tool, 36.0-mill default | Core pages, AI readiness | high | low | Days 1–30 |
| 8 | Government non-affiliation line on 8 FHA, VA and USDA pages and tools, plus the shared loan-card component | Compliance | critical | low | Wave 0 |
| 9 | `/refinance/`: title "Refinance Your Michigan Home Loan", 8 inbound links from the refinance cluster, 2 missing answers, Service schema | Core pages, internal linking | high | low | Days 1–30 |
| 10 | City template: meta generator, refinance block, "Which loan programs can you use in {City}?" H2, "Talk with a Michigan mortgage expert" H2, stat H3 demotion | City consistency | high | medium | Days 1–30 (template), Days 31–60 (pages) |
| 11 | Learn above-the-fold answer box plus a topic-keyed CTA module on the top 50 impression articles, then the module on all 423 | Above the fold, CTAs | high | medium | Days 31–60 |
| 12 | Product template: a requirement-led subhead and a requirements H2 and table (no down-payment percentages), disclaimer, "Guides for this loan" block | Core pages | high | medium | Days 1–30 |
| 13 | Lease-to-own: retitle, "What is lease to own?" as the first H2, fold in 2 siblings, Game Plan next step | Blog library | high | medium | Days 31–60 |
| 14 | VA funding fee calculator as the single chart home: title without "2026", exemption FAQ, honest check date | Core pages | medium | low | Days 31–60 |
| 15 | Transfer tax: one sourced "who pays" sentence on 3 pages plus a 50-word answer above the calculator | Accuracy, AI readiness | medium | low | Days 1–30 |
| 16 | Purchase H1s and titles with the ownership guards (First-Time "Loans", DPA "Who Qualifies", Budget "Comfortably", VA plan) | Headings, titles | high | low | Days 1–30 |
| 17 | Amortization canonical = `/learn/amortization-schedules/`; repoint 3 link insertions; 301 the twin | Keyword gaps | medium | low | Days 1–30 |
| 18 | Money pages link down to 4–6 cluster guides; refinance and buying articles link `/refinance/` and `/purchase/` early | Article linking | medium | medium | Days 61–90 |
| 19 | Merge the Readiness Review into the Game Plan after the 99 content links are repointed (N9) | Core pages | medium | medium | Days 31–60 |
| 20 | Research pages: 40–60-word Q&A answers, a "Cite this study" block, Michigan newsroom outreach | AI readiness | high | medium | Days 31–60 |
| 21 | Home hero LCP: preload, srcset, no Motion Effects on the hero (confirm with PageSpeed Insights) | Images and media | medium | low | Days 1–30 |
| 22 | Header actions on-domain now (NAV-004). Restore alignwithalign.com only after D4, with `rel="nofollow noopener"` | CTAs | medium | low | Days 1–30 |
| 23 | LTV widget inside `/learn/what-is-loan-to-value-ratio/` (no new URL) | Keyword gaps | medium | medium | Days 61–90 |
| 24 | Low-down-payment guide retitled without percentages: "Low Down Payment Mortgage Options: 4 Loans Compared" | Titles, compliance | low | low | Days 1–30 |
| 25 | MSHDA MI Home Loan post plus the Michigan-led first-time programs refresh as the program owners (F1/F2 wording) | Blog library, keyword gaps | high | high | W2 (Nov 30–Dec 6) + Days 31–60 |

**Gates come first regardless of rank.** Measurement (#5) and the compliance P0s (#8 and the items in finding 6) ship in Wave 0. Without the first, no gain can be attributed. Without the second, the rubric caps the affected pages at 59–69.

---

## 6. 30/60/90-day roadmap

Row counts are approved, shippable rows in `MASTER-CHANGES.csv` (P0 / P1 / P2). Filter the CSV by `phase` and `priority` to get each batch.

| Window | What ships | Rows |
|---|---|---|
| **Wave 0 — this week (Nov 17–23)** | **Snapshot baselines** (§10). **Measurement:** Calendly UTM, `link_text` in `alignTrack`, derived GA4 events. **Compliance P0s:** USDA rate meta and the 7 Learn pages, government non-affiliation line, "great rates" review, First-Generation DPA shown as closed, "under 14 days" removed, 620 floor, 36.0-mill default, PRE dates, false "checked on" dates, the 7 lead-gen links. **Requests:** send owner decisions and counsel questions; export GSC Pages and Query × Page; connect Bing. | 367 P0 rows in total, across all phases |
| **Days 1–30 (to Dec 17)** | **Phase 1, template-level work that multiplies:** menu printed once and actions on-domain, Learn CTA module template, entity component and Organization/Person schema, city template, product template, compact calculator hero, image delivery snippets, home LCP fix. **Phase 2, money pages P0 and P1, in value order:** USDA trio → home → Google Business Profile and Bing Places → CTR title rewrites → refinance → calculators (property tax first) → trust pages → purchase. **Posts W2–W4:** MSHDA and preapproval (Nov 30–Dec 6), home equity disqualifiers (Dec 7–13), rent-to-own vs land contract (Dec 14–20). **When FHFA publishes 2027 limits (late Nov):** update the figures file and every "2026 limit" sentence. | Phase 1: 118 (15 / 61 / 42) · Phase 2: 1,785 (140 / 1,122 / 523) |
| **Days 31–60 (Dec 17–Jan 16)** | **Phase 3, city pages, one pass per page:** fact corrections, metas, link insertions, external-link swaps. Rebuild the hero value and metas on the D2 measure with the ACS 2021–2025 release (expected December). **Phase 5, images:** load the alt text, og images and the remaining files. Remaining Phase 2 P2 rows. **Posts W5–W8** (Dec 21–Jan 17). **January 1 figures sweep:** 2027 FHA limits, MSHDA limits, VA tables. **Week-4 read:** validation only (§10.3). | Phase 3: 2,023 (68 / 592 / 1,363) · Phase 5: 896 (2 / 450 / 444) |
| **Days 61–90 (Jan 16–Feb 15)** | **Phase 4, Learn and links:** cluster insertions, Learn modules on all 423 articles, and the 141 approved redirects. Merges with a GSC history ship only after the Query × Page export. **Phase 6, content refresh:** 32 refreshes and merged-content consolidation. **Week-8 and week-12 reads.** Plan the next wave from what moved. Analyse Bing once it is connected. | Phase 4: 719 (111 / 457 / 151) · Phase 6: 500 (31 / 137 / 332) |

Seasonality: purchase demand slows from late November through January, and January 2027 limit changes touch many pages at once. Read results on query cohorts, not site totals (§10.3).

---

## 7. New blogs and the library plan

### 7.1 The 14 new posts (drafted, edited, subject to Align approval)

| # | Post (URL) | Title tag | Target query | Editor score | Status | Publish week |
|---|---|---|---|---|---|---|
| 1 | `/learn/mshda-mi-home-loan/` | MSHDA MI Home Loan: Income Limits, Price Limit and Rules | mshda mi home loan | 91 (A) · E1 | Edited draft — subject to Align approval | W2 (Nov 30–Dec 6, 2026) |
| 2 | `/learn/what-disqualifies-you-from-a-home-equity-loan/` | What Disqualifies You From a Home Equity Loan or HELOC? | what disqualifies you from getting a home equity loan | 90 (A) · E2 | Edited draft — subject to Align approval | W3 (Dec 7–13, 2026) |
| 3 | `/learn/va-benefits-disabled-veterans-michigan/` | VA Benefits for Disabled Veterans Buying a Home in Michigan | va loan benefits for disabled veterans | 91 (A) · E1 | Edited draft — subject to Align approval | W3 (Dec 7–13, 2026) |
| 4 | `/learn/rent-to-own-vs-land-contract-michigan/` | Rent-to-Own vs. Land Contract vs. Mortgage in Michigan | rent to own vs land contract | 91 (A) · E4 | Edited draft — subject to Align approval | W4 (Dec 14–20, 2026) |
| 5 | `/learn/how-to-get-pre-approved-for-a-mortgage/` | How to Get Pre-Approved for a Mortgage in Michigan | how to get pre approved for a home loan | 90 (A) · E3 | Edited draft — subject to Align approval | W2 (Nov 30–Dec 6, 2026) |
| 6 | `/learn/mortgage-for-seniors/` | Can You Get a Mortgage at 60, 70 or 80? Senior Home Loans | home loans for seniors on social security | 90 (A) · E3 | Edited draft — subject to Align approval | W5 (Dec 21–27, 2026) |
| 7 | `/learn/usda-loan-requirements/` | USDA Credit Score and DTI Rules: What Lenders Check | usda credit score and dti requirements | 89 (B) · E1 | Edited draft — subject to Align approval | W4 (Dec 14–20, 2026) |
| 8 | `/learn/income-needed-to-buy-a-house-michigan/` | What Income Do You Need to Buy a House in Michigan? | how much do you need to make to afford a house in michigan | 91 (A) · E3 | Edited draft — subject to Align approval | W5 (Dec 21–27, 2026) |
| 9 | `/learn/add-or-remove-name-on-mortgage-michigan/` | Adding or Removing a Name on a Mortgage in Michigan | can you add someone to a mortgage loan | 90 (A) · E2 | Edited draft — subject to Align approval | W6 (Dec 28, 2026–Jan 3, 2027) |
| 10 | `/learn/what-not-to-tell-a-mortgage-lender/` | What Not to Tell a Mortgage Lender (and What You Must Share) | what not to tell a mortgage lender | 90 (A) · E3 | Edited draft — subject to Align approval | W6 (Dec 28, 2026–Jan 3, 2027) |
| 11 | `/learn/how-dscr-loans-work/` | How DSCR Loans Work: The Ratio, the Rent and Michigan Taxes | how do dscr loans work | 89 (B) · E2 | Edited draft — subject to Align approval | W7 (Jan 4–10, 2027) |
| 12 | `/learn/michigan-homestead-property-tax-credit/` | Michigan Homestead Property Tax Credit: Who Qualifies | michigan homestead property tax credit | 90 (A) · E2 | Edited draft — subject to Align approval | W7 (Jan 4–10, 2027; ahead of MI-1040CR season) |
| 13 | `/learn/buying-a-house-after-bankruptcy-or-foreclosure/` | Buying a House After Bankruptcy or Foreclosure: Wait Times | buying a house after bankruptcy | 89 (B), projected 90 · E4 | Edited draft — subject to Align approval | W8 (Jan 11–17, 2027) |
| 14 | `/learn/buying-a-home-on-ssi-or-disability-income/` | Buying a Home on SSI or Disability Income in Michigan | ssi disability home loans requirements | 90 (A) · E1 | Edited draft — subject to Align approval | W8 (Jan 11–17, 2027) |

All 14 drafts:
- are 1,500–2,500 words and Michigan-specific, or built on Align's own data (the 2025 HMDA Market Report, the 2026 Uncapping Study);
- give every question H2 a 40–60-word answer and keep the visible FAQ word-for-word equal to its JSON-LD;
- end with a Sources list that matches the citations;
- are marked "subject to Align approval".

The 15th planned post (VA entitlement, `06-blogs/briefs/backlog/`) waits for the 2027 county limits.

### 7.2 Refresh, merge and prune

| Action | Count | Notes |
|---|---|---|
| Keep | 199 articles | No change beyond the template fixes |
| Refresh in place | 32 planned (88 flagged in the inventory) | Includes the Michigan first-time programs page, the homestead/PRE guide, lender comparison, rate lock, closing costs and well water. The URL keeps its equity. |
| Merge (301 into a canonical) | 85 articles in 63 merge groups | 94 merge rows in `09-consistency/redirect-map.csv`. Amortization canonical = `/learn/amortization-schedules/`. Lease-to-own siblings fold into the canonical. |
| Prune (301 to the closest topic) | 38 drift articles | Mansions, crowdfunding, insurance deductibles, energy audits, NMLS exam questions and similar |
| Redirect map total | 159 rows | 141 approved · 10 rejected · 6 keep · 2 hold (pending-owner: n3) |
| Library after the plan | about 316 indexable articles | 424 − 85 − 38 + 15 new (−25%) |

The 96 legacy root posts and 293 `/mortgage-location/` URLs already 301 in one hop to their new pages. **Keep those redirects permanently.**

---

## 8. Compliance and brand

- **Live P0s** are in finding 6 and Wave 0.
- **Draft copy:** the brand editor screened 5,274 rows (4,477 with copy) against 21 rules and corrected 290 rows (8 critical).
- **Re-screen:** the resolver re-screened every shippable value. The result: no rates, no fair-housing words, no NAMB, every title ≤60 characters, every meta 140–160 characters, and every booking button reading "Talk with Samantha".
- **The standing rules** are in `00-project/brand-voice-and-compliance-guide.md` and `00-project/KNOWN-CORRECTIONS.md`. The second wins where they differ.

---

## 9. Decisions needed

### 9.1 Owner decisions

"Blocked" rows wait in `MASTER-CHANGES.csv` with status PENDING-OWNER. "Soft" rows ship now with a safe default and change only if your answer differs. Full context is in `09-consistency/owner-decisions.md`.

| # | Decision | Blocked rows | Soft rows | Our recommendation |
|---|---|---:|---:|---|
| D1 | Does Align broker reverse mortgages? | 11 | 0 | Answer from licensing and lender relationships; if no HECM channel, keep the article informational only |
| D2 | One measure for "typical home value" on city pages | 71 | 140 | Census ACS owner median (B25077) as the headline, optional dated Redfin line |
| D3 | MSHDA participating-lender access | 0 | 1 | Keep the F2 default wording until access is confirmed in writing |
| D4 | Who owns alignwithalign.com | 0 | 1 | Ship the on-domain menu now; re-add a tool only if Align owns it, with nofollow noopener |
| D5 | Is Align always lender-paid? | 0 | 1 | Keep the Loan Estimate wording everywhere; it is true either way |
| D6 | Loan-officer headcount | 3 | 3 | Supply the 2026 count; new copy avoids headcount until then |
| D7 | Counsel: term names and trigger-term policy | see `counsel-review.md` |  | Counsel item C1/C2 |
| D8 | NAMB Broker of the Year year and source | 1 | 0 | Supply the primary source or remove all 18 existing mentions |
| N1 | Where /start/ and my1003app pull credit | 3 | 0 | Confirm in one line; the apply friction line ships after |
| N2 | Byline verb | 0 | 2 | Keep the verb-free line; if a verb is wanted, use "By" |
| N3 | GSC exports before two held redirects | 2 | 0 | PM pulls GSC Pages and Query x Page for the two URLs |
| N4 | Does Align finance mixed-use 1-4 unit properties? | 0 | 1 | Keep the page as is until answered |
| N5 | Samantha quotes: sources and new quotes | 0 | 6 | Confirm or supply verbatim quotes; nothing unsourced ships |
| N6 | /start/ source whitelist and the 1099 key | 0 | 9 | Add digit-free values to alignStartCfg.sources before the from= links ship |
| N7 | Approve the AI-imagery disclosure | 1 | 0 | Approve the proposed sentence |
| N8 | Schema facts: phone hours, logo, Facebook URL, coordinates | 0 | 1 | Supply them; until then the fields stay out |
| N9 | Confirm the readiness-review merge | 0 | 23 (1 redirect, 1 spec, 21 retargets) | Confirm (decided here per the SEO editor) |

### 9.2 Counsel list

This is marketing-compliance review, not legal advice. 65 rows wait on counsel. **One ruling on C1 and C2 (D7) releases most of them.** Detail and exact copy are in `09-consistency/counsel-review.md`.

| Group | Topic | Rows waiting | Question for counsel |
|---|---|---:|---|
| C1 (D7) | Repayment-period terms ("30-year", "15-year") as product names on money pages | 31 | Does "30-Year Fixed"/"15-Year Fixed" as a product name, page title, H2 or link anchor trigger 1026.24(d)? If yes, what neutral names do we use ("Fixed-rate mortgage, longer term")? |
| C2 (D7) | Down-payment percentages and "no down payment" on money pages and in learn titles | 15 | May FHA, conventional, HomeReady, VA and USDA pages state the agency minimums ("3.5% down with 580", "3% down", "no down payment with full entitlement") as each agency's rule, in body sections away from apply CTAs? |
| C3 | Government fee percentages (FHA MIP, USDA guarantee fees, VA funding fee chart) | 13 | May money pages and calculators show FHA MIP (1.75% upfront), USDA (1% upfront, 0.35% annual) and the VA funding fee schedule as attributed agency figures? |
| C4 | Closing-cost figures in refinance break-even illustrations | 2 | Are the break-even worked examples acceptable with the exact label "Hypothetical example, not an offer. Actual rates, costs and payments vary."? |
| C5 | Worked examples with monthly amounts on calculators | 3 | Are labeled hypothetical examples with monthly amounts acceptable on calculator pages? |
| C6 | Attributed down-payment figure in the Freddie Mac PMMS description | 1 | Is the attributed PMMS description acceptable on the rate-policy page? |
| C7 | Reviews and testimonials | 0 | Do state rules require NMLS IDs beside reviews that name an originator? Confirm the removals of rate-language reviews. |
| C8 | Recordkeeping for approved copy (Regulation N, 24 months) | 0 | Confirm the retention approach. |
| C9 | "No credit pull to talk" and the point where /start/ pulls credit | 0 | Confirm both lines once Align states the pull point. |
| C10 | Third-party savings claims (Polygon Research) on city pages | 0 | May the claim be used on Learn content, and with what qualification? |
| F7 scope | Government non-affiliation line on city pages | 0 | Confirm city pages are in F7 scope (we ship the line now as the conservative default; counsel may narrow). |

---

## 10. Measurement plan

### 10.1 Baselines (DataWise GSC, synced November 13, 2026; 90 days unless noted)

| Metric | Baseline |
|---|---|
| Site | 416 clicks · 181,048 impressions · CTR 0.23% · average position 28.1 · 5,231 queries |
| Last 30 days | 241 clicks · 134,261 impressions · average position 32.8 (impressions +287% on the prior 30 days) |
| Query positions | 196 queries in the top 3 · 840 in the top 10 · 1,412 in the top 20 · **511 in striking distance** |
| Non-brand top 10 | 8 clicks on 10,665 impressions (0.08%) |
| Brand "align lending" | 71 clicks on 1,293 impressions at average position 5.0 |
| Home `/` | 63 clicks on 6,596 impressions at 14.3, plus the GBP-tagged URL: 9 clicks on 822 at 2.8 |
| Owner queries | usda eligibility 576 @11.1 · mortgage broker 460 @11.7 · refinancing options 421 @11.9 · michigan mortgage broker 403 @22.5 · usda rural development loan 335 @13.9 · amortization 315 @14.5 · mortgage lender 185 @5.6 · lease to own vs rent to own 128 @14.2 |
| Cluster impressions | lease to own 16,051 · USDA 11,392 · local broker/lender 9,037 · FHA limits 2,877 · refinance 2,659 · VA IRRRL 2,063 |
| AI citations | 4 of 12 prompts; 5 of 48 engine checks; Google AI mentions 19 (Riverbank 785); ChatGPT mentions 40 |
| Media | Home LCP image 218 KB CSS background; money-page Media score 74 (C) |
| Bing | **None** (not connected) |

**Snapshot before Wave 1 ships:**
- GSC Pages, Queries, and Query × Page for the 40 owner pages in `query-ownership-map.csv`;
- the Page indexing report;
- PageSpeed Insights on `/`, `/purchase/`, one city page and one Learn page;
- GA4 `cta_click` by `page_path` and `destination`, plus `phone_click` (28 days);
- GBP Insights (3 months);
- the AI tracker (12 prompts plus the 11 additions).

### 10.2 KPIs and targets (directional)

| # | Metric | Source | Target |
|---|---|---|---|
| M1 | Non-brand clicks and CTR by page type | GSC page export, grouped by URL pattern | Non-brand top-10 CTR from 0.08% to ≥1%. CTR +30% on retitled pages where position held ±1. |
| M2 | Striking distance → top 10 | The frozen cohort of 511 queries | 20% of the cohort in the top 10 within 90 days. Top-10 queries from 840 to ≥1,100. |
| M3 | Owner queries | GSC Query × Page | "usda eligibility" ≤8 with CTR ≥2% by week 12. "mortgage broker" ≤8. One URL per owner query. |
| M4 | Brand SERP | GSC | "align lending" from position 5.0 to 1–2 within 60 days |
| M5 | AI citations | DataWise tracker + `ai_mentions`; monthly manual panel on Google AI Overviews/Mode, ChatGPT, Perplexity and Copilot | From 4 of 12 to 10 of 23 prompts by February 2027. Michigan uncapping and transfer-tax prompts cited. |
| M6 | CTA events | GA4 `alignTrack`: `cta_click` (destination `start`, `apply`, `schedule`), `phone_click`, `tool_start` and `tool_complete`; Calendly bookings by `utm_content` | +25% per 1,000 organic sessions on money pages and +50% on Learn, after the Wave 0 tracking ships. `tool_complete`/`tool_start` ≥50%. |
| M7 | LCP | CrUX/PSI, p75 mobile: home, purchase, product, city, Learn | ≤2.5 s on all five. 0 lazy-loaded LCP images. |
| M8 | Guardrails | Monthly re-crawl | 0 open compliance P0s. Review count matches Google. 0 orphan guides. 0 links to 301s. No 2026 limit left live after the 2027 figures publish. |

### 10.3 How to read results

- **Week 4:** validation only. Are the new titles showing in search? Look at CTR on queries whose position held, check that GA4 events fire, and check UTM on bookings. Do not judge rankings yet.
- **Week 8:** direction. Check owner-query positions. Query × Page should show one URL per query. Merged pages should move impressions onto the canonical. Run the first AI-tracker re-check.
- **Week 12:** outcomes. Look at bookings by placement, `/start/` → application hand-offs, phone clicks, GBP actions, AI citations against the 4/12 baseline, and the first positions for the new posts. Plan the next wave.
- **Every read:**
  - compare 28-day windows aligned to the same weekdays;
  - exclude brand and drift queries;
  - annotate each release date in GSC and GA4.

---

## 11. File index

| Need | File |
|---|---|
| **Start here** | `MASTER-REPORT.md` (this file), then `09-consistency/MASTER-CHANGES.csv` filtered by `phase`, then `priority` |
| Dashboard data | `scorecard.json` |
| Every approved change, with exact final copy | `09-consistency/MASTER-CHANGES.csv` (7,195 rows; `status`, `final_value`, `source_refs`) |
| How conflicts were resolved | `09-consistency/decisions-log.md` |
| Navigation, CTA vocabulary, entity and schema, city template specs | `09-consistency/unified-specs.md` |
| Redirects, merges, prunes | `09-consistency/redirect-map.csv` |
| Owner decisions | `09-consistency/owner-decisions.md` |
| Counsel questions | `09-consistency/counsel-review.md` |
| Which page owns which query | `09-consistency/query-ownership-map.csv`, `seo-ai-review.md` |
| Ready-to-paste answer blocks and FAQs | `09-consistency/ai-answer-blocks.md` |
| Brand and compliance screen | `09-consistency/brand-compliance-review.md`, `brand-fixes.csv` |
| Standards | `00-project/charter.md`, `brand-voice-and-compliance-guide.md`, `scoring-rubric.md`, `KNOWN-CORRECTIONS.md`, `tracker.csv` |
| CTA inventory and recommendations | `01-ctas/` |
| Link health, external-link policy, article linking | `02-links/` |
| Core page reports and scores | `03-core-pages/` (`*-report.md`, `*-changes.csv`, `scores-*.csv`) |
| City sweep, fact-checks, validator scripts | `04-city-pages/` |
| Blog inventory, GSC gaps, competitor/AI gaps, content plan | `05-content-keywords/` |
| Briefs, 14 drafts, editor reviews | `06-blogs/briefs/`, `06-blogs/drafts/`, `06-blogs/editor-review-E1.md` to `E4.md` |
| Optimized images, upload manifest, alt text, delivery snippets | `07-images/optimized/`, `optimized-manifest.csv`, `alt-text-corrected.csv`, `image-optimization-report.md` |
| Independent audits and corrections | `08-audit/` |

---

## 12. Limitations

- **Read-only site access.** We could not change, preview or test anything on WordPress or Elementor. Every change is a recommendation, and template inheritance (which Elementor templates feed which pages) is inferred from the crawl. Re-crawl after each phase to confirm what shipped.
- **No Bing data.** Bing Webmaster Tools is not connected, so Bing and Copilot gaps are unmeasured and no Bing numbers appear anywhere. The Bing levers we recommend (literal titles, IndexNow, Bing Places) are unmeasured until the export exists.
- **External-link status is mostly unverified.** Of 11,643 unique external links, only about 353 could be checked from the sandbox: 2 were 404s and 21 redirected. The rest returned bot-protection or blocked responses (status 0/403/429), which we treat as "unverified", not broken.
- **GSC page attribution is inferred.** The DataWise connector returns queries without a page dimension, apart from a few dozen opportunity rows. 26 of the 147 query-ownership rows are GSC-confirmed; the rest are inferred, and the two GSC analysts disagreed on 33% of shared inferences. **Export GSC Query × Page before any 301 of a URL that has impressions.**
- **Network blocks during research.** michigan.gov (403 to scripts), va.gov, hud.gov, consumerfinance.gov, ecfr.gov, fhfa.gov, calendly.com, alignwithalign.com and my1003app.com were blocked or unreachable for some agents. Facts we could not open at the source carry `[VERIFY]` or were confirmed through search results that quote the official page. False "checked on" dates were removed (F17).
- **Scores mix methods before reconciliation.** Teams used different formulas. The auditors re-anchored samples to the rubric, and this report uses audited numbers. Pages outside the audit samples keep the team score where it was within tolerance. The core pages carry no external-linking aspect score. Learn above-the-fold (60) and city headings (60) were set by the PM from rubric anchors that name those exact cases.
- **Projections are a model.** They assume every approved row ships and that the default answer holds on every pending decision (§3.1).
- **Facts age.** FHFA's 2027 conforming limits are expected in late November 2026, HUD's FHA limits in December, and new ACS figures in December. Any page that states a 2026 figure needs the January sweep.

