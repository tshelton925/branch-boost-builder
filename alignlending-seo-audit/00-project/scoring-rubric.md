# Scoring Rubric: alignlending.com Overhaul

**Owner:** PM (00-project) · **Version:** 1.0, 2026-11-15 · **Used by:** every team that scores, and the independent auditors who re-score.
This expands brief §4. The scale, grades and aspects are unchanged. This file adds anchor descriptions, evidence rules, page-type weights and gates, so that two teams scoring the same page land within 5 points of each other.

---

## 1. Scale, grades and the rationale rule

| Grade | Score | Meaning for this project |
|---|---|---|
| **A** | 90–100 | Ship as is, or with polish only |
| **B** | 80–89 | Solid. P1/P2 improvements only. |
| **C** | 70–79 | Works, but leaves rankings, answers or conversions on the table. P1 fixes. |
| **D** | 60–69 | Material problems. P0/P1 fixes. |
| **F** | <60 | Broken, wrong, non-compliant or missing. P0. |

**Every score needs a one-sentence rationale that cites evidence**: a field value from the data, a quoted string, or a URL. Format:

> `Intent & H1 — 64 (D): H1 "You are not supposed to understand this yet" (page_summary.h1) does not name the topic or Michigan, and the title carries the intent instead.`

**How to land on a number.** Find the two anchors the page sits between, start at the lower one, and add points for each element of the higher anchor the page meets. Use the full range: 72, 85 and 91 are all normal. Scores below 40 are for pages where the aspect is absent or actively harmful.

**N/A.** If an aspect does not apply (for example Media on a page with no images), mark it `N/A`, drop its weight, and rescale the remaining weights to 100. Never score 100 for "nothing there to get wrong".

---

## 2. Evidence sources by aspect

| Aspect | Primary evidence (`$DATA/…`) |
|---|---|
| Intent & H1 | `page_summary.h1`, `h1_count`, `title`; uniqueness across `page_summary`; GSC top query for the page (DataWise) |
| Heading structure | `pages.jsonl.outline` ([level, text]), `h2_count`, `question_headings` |
| Above-the-fold answer | `pages.jsonl.above_fold_text`, `above_fold_words`, `atf_ctas`, and the `ctas` entries with `atf: true` |
| CTA effectiveness | `pages.jsonl.ctas` (text, href, region, atf); guide §5 vocabulary; destination status |
| Title & meta | `title`, `title_len`, `meta_description`, `meta_desc_len`; duplicate check across `page_summary` |
| Internal linking | `content_internal_links_out`, `content_inlinks`, `all_inlinks`, `inlinks.json`, `link_graph.json` (orphans, links to redirects, top anchors) |
| External linking | `pages.jsonl.links` where `kind = external` (href, rel, target); `external_status.jsonl`; guide §7.10 tiers |
| E-E-A-T & trust | `byline`, `visible_updated`, `modified`, the Sources section in the text file, NMLS/EHO/licensing strings, review strip |
| AI-search readiness | `outline` question H2s and the paragraph after each in the text file, `faq_q`, `faq_schema_questions`, `schema_types`, entity statement presence |
| Media | `images.json` (bytes, px, format, width/height missing, lazy above the fold), `images_missing_alt` |
| Accuracy & compliance | Text file vs guide §7 checklist; claims vs guide §10; facts vs primary sources |
| Uniqueness & local specificity | Text overlap against sibling pages (5-word shingles), count of verifiable local facts, FAQ answer overlap |

---

## 3. Aspect anchors

Each aspect has anchors at 100, 80, 60 and 40, with 0–39 described briefly. "Align examples" are illustrations taken from the 2026-11-15 crawl to show what an anchor looks like. They are **not** official scores. The owning team scores those pages.

### 3.1 Intent & H1

| Score | Anchor |
|---|---|
| **100** | Exactly one H1. It matches the dominant search intent and the primary query (from GSC where available). It is unique sitewide, names the entity or place where relevant ("in Michigan", "in Warren, MI"), and is under ~70 characters. Title and H1 agree on the topic without being identical strings. |
| **80** | One unique H1 that matches the intent and names the topic, but misses one element: the place, the primary query's wording, or it is longer than needed. |
| **60** | The H1 names the topic only loosely or is a brand line (e.g. "Your house is not an ATM" on `/refinance/home-equity-review/`), and the title has to carry the intent. Or the H1 targets a secondary intent. |
| **40** | The H1 is generic ("Home", "Services"), duplicated on several pages, or mismatched to what searchers want (informational H1 on a transactional query, or the reverse). |
| **0–39** | No H1, several H1s competing, or the H1 is wrong for the page. |

Align examples: "Mortgage Broker in Warren, MI" (city template) shows the 80–90 pattern for a local page; it names the entity type and place. "You are not supposed to understand this yet" (`/purchase/first-time-homebuyer/`) shows the 50–60 pattern.

### 3.2 Heading structure

| Score | Anchor |
|---|---|
| **100** | A logical H2→H3 hierarchy with no skipped levels. The H2s cover the sub-questions searchers have (GSC/PAA). Question-led H2s where people ask questions. No statistics, prices, labels or decoration marked up as headings. Headings are sentence case and scannable, and together they read as a table of contents. |
| **80** | Sound hierarchy that covers most sub-questions. One or two weak spots: a vague H2 ("More information"), a missing question H2 for a known query, or minor decoration in an H3. |
| **60** | Covers the topic but with structural faults: skipped levels, several decorative or stat headings (e.g. "$190,000" or "+63%" as headings), or H2s that are labels rather than answers. |
| **40** | Headings mostly decorative or navigational. Key sub-questions have no heading. |
| **0–39** | No meaningful heading structure. |

Check: in `outline`, flag any heading text that is mostly digits, currency or percentage, any heading shorter than 3 words that is not a section label, and any level jump (H2→H4).

### 3.3 Above-the-fold answer

"Above the fold" = content before the first H2 (`above_fold_text`), per the brief.

| Score | Anchor |
|---|---|
| **100** | Within the first ~60 words: **who it's for**, the **direct answer or outcome**, and **why Align** (a specific, checkable differentiator). Then **one clear primary next step** plus a **friction reducer** that is true for that step (guide §5.2 rule 4). Nothing above it pushes the answer down. Grade 7–9 reading level. |
| **80** | The answer and next step are both present, but one of who / why-Align / friction reducer is missing, or the answer takes 60–100 words to arrive. |
| **60** | The answer is there but buried: more than 100 words in, after a story or a long key-takeaways list (Learn pages have a median of 327 above-the-fold words), or no next step above the first H2. |
| **40** | The top of the page is a brand line or generic intro that does not answer the visitor's question. |
| **0–39** | Nothing above the first H2, or content that misleads about what the page offers. |

Align example: the opening of `/learn/mortgage-rate-buydowns/` answers "what is a buydown" in its first sentence (85–90 pattern), but it has no next step above the first H2 (`atf_ctas` = 0 is typical for Learn).

### 3.4 CTA effectiveness

| Score | Anchor |
|---|---|
| **100** | Labels come from the standard vocabulary (guide §5.2): specific, benefit-led and first person. The action fits the page intent. There is a clear primary/secondary hierarchy (at most one primary and one secondary above the fold). CTAs appear at decision points (after the answer, after comparison tables, at the end). Every destination works and matches its label. Friction reducers are paired correctly. The click is measurable through `alignTrack`. |
| **80** | Right action and hierarchy, with one weakness: a non-standard label, one CTA missing at a natural decision point, or a reducer paired with the wrong CTA. |
| **60** | CTAs present but inconsistent: several labels for the same action, a label that promises something the destination does not deliver (a "plan" that opens Calendly), or no CTA above the fold on a money page. |
| **40** | Wrong action for the intent (apply as the only CTA on an early-research Learn page), competing primaries, or a CTA next to a payment example (Editorial Policy violation). |
| **0–39** | Broken destination, no CTA on a money page, or misleading CTA copy (urgency, approval promise). |

### 3.5 Title & meta

| Score | Anchor |
|---|---|
| **100** | Title ≤ 60 characters, primary keyword at the front, a CTR hook that is true and specific (a Michigan detail, "free calculator", "2026 limits"), brand at the end. Meta 140–160 characters, unique, giving the benefit plus proof (NMLS, review rating, a specific fact). No rate claims. Title and meta both match the page. |
| **80** | Within length and unique, keyword present but not first, or a generic hook ("| Align Lending" only). Meta present and accurate but missing proof or the benefit. |
| **60** | One length problem (title over 60 and truncated, or meta under 120 or over 160), a weak or duplicate pattern across a page type (e.g. all 276 city titles are "Mortgage Broker In {City} | Align Lending", with Title Case "In"), or meta that just restates the H1. |
| **40** | Missing keyword, duplicate title or meta across pages, or a title that mismatches the content. |
| **0–39** | Missing title or meta, or one that is misleading or non-compliant (e.g. "Lowest rates in Michigan"). |

### 3.6 Internal linking

| Score | Anchor |
|---|---|
| **100** | Contextual links in body copy with descriptive anchors. Links up to the hub/pillar, across to 2–4 siblings, and down to the relevant money page, calculator or city page. Enough contextual inlinks for the page's importance (money pages and pillars in the top quartile of their type for `content_inlinks`). Not an orphan. No links to redirecting URLs. No exact-match anchor repeated more than 3 times to the same target. |
| **80** | Good contextual links with one gap: missing the hub link, a missing link to the obvious money page, or inlinks in the middle quartiles. |
| **60** | Links mostly from nav, footer or related-post widgets rather than body copy. Few contextual inlinks (bottom quartile). Some generic anchors ("read more", "this guide"). Links to redirects. |
| **40** | Near-orphan (1–2 contextual inlinks). Links out go to off-topic pages. Over-optimized anchors. |
| **0–39** | Orphan (zero contextual inlinks), or broken internal links on the page. |

Reference points from the crawl (contextual inlinks, median): Learn 19, city 9, product 31, purchase sub-pages 64. Use the quartiles for the page's own type.

### 3.7 External linking

| Score | Anchor |
|---|---|
| **100** | Every rule and figure links to a Tier 1–2 source (guide §7.10): agency, regulator, law, GSE, county, municipality. Links go to the specific page, not a homepage. No lender, broker, rate site, marketplace or portal links (named, never linked). No broken links. Citations use `rel="noopener"` without `nofollow`. A Sources section lists every linked publisher. |
| **80** | Authoritative sources with minor issues: one or two Tier 3–4 sources where a Tier 1 source exists, a homepage link where a deep link exists, or `nofollow` on a government citation. |
| **60** | A mix of primary and weak sources (Wikipedia, World Population Review, aggregator blogs), or several facts without any source. |
| **40** | Mostly weak sources, or one link to a never-link domain (lender, rate site, portal). |
| **0–39** | Broken citations throughout, several never-link domains, or no sources on a page that states regulated figures. |

For pages that should carry no outbound links (some trust pages), score `N/A` rather than 100.

### 3.8 E-E-A-T & trust

| Score | Anchor |
|---|---|
| **100** | Byline or reviewer (Samantha Shelton, NMLS 1647301, linked to `/samantha-shelton/`). Company NMLS #2041154. Six-state licensing line. Equal Housing Opportunity. Review strip that is current (count matches Google). Sources section. A visible "Updated {Month YYYY}" that matches `dateModified`. First-hand Align signals where honest (the 2026 Uncapping Study, Samantha's sourced quotes). Link to the Editorial Policy. |
| **80** | All required identity and licensing elements present. One trust element missing or stale: no visible updated date, no Sources section, or a review count that needs a refresh. |
| **60** | Identity present (footer NMLS/EHO) but nothing on the page itself shows who wrote or reviewed it, or when, or why to trust it. |
| **40** | Anonymous content, or trust elements that contradict each other (different review counts, different state lists). |
| **0–39** | Missing NMLS or licensing identity, or a fabricated or unsubstantiated trust claim (an award not on the press page's sourced list, an invented review). |

### 3.9 AI-search readiness

| Score | Anchor |
|---|---|
| **100** | Every question H2 is followed by a 40–60-word self-contained direct answer (guide §8.1). Quotable specific facts (number + place + period + source). Entity clarity: the canonical Align entity statement and Samantha's entity line appear. A key-takeaways list. A visible FAQ that matches `FAQPage` schema word for word. Schema fits the page type (guide §8.6). Unique data or Align research cited by name. |
| **80** | Question H2s with good answers, but some answers run long (60–100 words) or open with hedging. Entity statement present. FAQ and schema present. Little unique data. |
| **60** | Some question H2s, but answers are buried in long paragraphs. FAQ present but generic or duplicated across pages. Entity mentions vague ("we", "our team"). |
| **40** | No question H2s or direct answers. Thin or boilerplate FAQ. Schema missing or mismatched to the page type. |
| **0–39** | Nothing extractable. Or schema that misleads: a fake `LocalBusiness` address in a city, rate properties in `MortgageLoan`, FAQ schema with no visible FAQ. |

### 3.10 Media

| Score | Anchor |
|---|---|
| **100** | Modern format (WebP/AVIF). Served at or near display size. Compressed (hero ≤ 150 KB, inline ≤ 80 KB as a working target). Width and height set. The LCP image is **not** lazy-loaded and is preloaded or high priority. Below-the-fold images lazy-load. Descriptive alt where the image carries meaning, empty alt where decorative. Alt text has no rate claims and does not describe people's characteristics. |
| **80** | Mostly optimized. One issue: an oversized JPEG/PNG, a missing width/height, or generic alt on a meaningful image. |
| **60** | Several unoptimized images, or the LCP image lazy-loaded, or many missing alts (`images_missing_alt` > 0 on meaningful images). |
| **40** | Heavy images (> 500 KB) above the fold, layout shift from missing dimensions, alt missing throughout. |
| **0–39** | Broken images, or images that mislead (stock "clients" presented as real, AI-generated people presented as real). |

### 3.11 Accuracy & compliance

| Score | Anchor |
|---|---|
| **100** | Every fact is verifiable, current and dated, and matches a Tier 1–2 source and the rest of the site. Guide §7 checklist passes in full: no rate, APR or payment offer; no unhandled trigger terms; worked examples carry the exact hypothetical label and sit away from apply CTAs; NMLS (company + individual), six-state line and EHO present; government non-affiliation disclaimer where FHA/VA/USDA are discussed; Michigan taxable-value wording in the required form; claims match the claims library; no banned words; fair-housing safe. |
| **80** | Accurate and compliant, with minor issues: one figure missing its period or source, one non-standard disclosure string, a stale-but-true count. |
| **60** | One material accuracy error (a wrong millage, a wrong loan limit, an outdated program rule) **or** one compliance weakness that is not P0 (a missing government disclaimer, a review with a rate claim on the page, a subjective place word). |
| **40** | Several material errors, or a trigger term used promotionally on a money page without disclosure **[COUNSEL]**, or claims that contradict other pages. |
| **0–39** | Any P0 compliance defect: a published rate, APR or payment offer; a fabricated quote, review, statistic or award; a missing NMLS/licensing identity; a link to a lender, rate site or portal used as a source; steering language (safe/unsafe, who lives there); an approval guarantee. |

### 3.12 Uniqueness & local specificity (city, county and state pages; also Learn cannibalization checks)

| Score | Anchor |
|---|---|
| **100** | 70% or more of the body text is unique to this page (5-word shingle overlap with the nearest sibling page ≤ 30%). At least 8 verifiable place-specific facts in the first two sections (millage range by school district, ZIPs, build years, unit mix, assessor or PRE forms, local ordinances), each with a public source. City-specific FAQ answers. Distinctions a local would recognize (e.g. Northville Township vs. the City of Northville). |
| **80** | 55–70% unique. 5–7 verifiable local facts. FAQ mostly specific, with one or two templated answers. |
| **60** | 40–55% unique. Local facts present but thin (population, median value) while the substance is templated. Several FAQ answers identical across cities except the name. |
| **40** | Under 40% unique. A name-swap template with one or two local numbers. |
| **0–39** | A duplicate of another page, or local facts that are wrong or belong to a different place. |

For Learn articles, use this aspect only when the blog inventory flags a cannibalization pair. Score the overlap and say which URL should win.

---

## 4. Page-type weightings

Weights are percentages of the page's overall score. Rows sum to 100. "—" means not scored for that type.

| Aspect | Home | Purchase & refinance hubs + sub-pages | Product pages (+ hub) | Calculators & tools | City pages | County & state hubs | Learn articles (+ new drafts) | Learn hubs & categories | Research | Trust pages* |
|---|---|---|---|---|---|---|---|---|---|---|
| Intent & H1 | 10 | 12 | 12 | 10 | 8 | 10 | 8 | 10 | 8 | 8 |
| Heading structure | 6 | 8 | 8 | 6 | 6 | 6 | 8 | 8 | 6 | 6 |
| **Above-the-fold answer** | **16** | **18** | **16** | **16** | 12 | 12 | 10 | 10 | 10 | 12 |
| **CTA effectiveness** | **16** | **18** | **16** | 14 | 10 | 8 | 6 | 6 | 6 | 10 |
| Title & meta | 8 | 8 | 8 | 8 | 6 | 8 | 8 | 8 | 8 | 8 |
| Internal linking | 8 | 6 | 6 | 6 | 6 | **14** | 8 | **20** | 8 | 6 |
| External linking | 2 | 2 | 3 | 4 | 6 | 4 | 8 | 2 | 10 | 6 |
| **E-E-A-T & trust** | 12 | 8 | 7 | 6 | 6 | 6 | **14** | 8 | 12 | **18** |
| **AI-search readiness** | 8 | 8 | 10 | 10 | 8 | 8 | **16** | 12 | **16** | 10 |
| Media | 6 | 4 | 4 | 6 | 4 | 4 | 3 | 4 | 4 | 4 |
| **Accuracy & compliance** | 8 | 8 | 10 | **14** | **16** | 12 | 11 | 6 | 12 | 12 |
| **Uniqueness & local specificity** | — | — | — | — | **12** | 8 | — | 6 | — | — |
| **Total** | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 | 100 |

\* Trust pages: about, contact, reviews, licensing, editorial policy, why-we-don't-publish-rates, Samantha Shelton, press, real-estate-agents, mortgage-process.

**Why these weights**
- **Money pages** (home, purchase/refinance, products) carry 32–36 points on above-the-fold answer + CTA. Visitors arrive with a decision to make, and these pages earn their keep by answering it and offering the next step.
- **Learn articles** carry 30 points on AI readiness + E-E-A-T. They win by being the answer that Google and LLMs quote, and by being trustworthy enough to quote.
- **City pages** carry 28 points on accuracy + uniqueness. 276 templated pages are where wrong figures and near-duplicate text do the most damage, and fair-housing risk is concentrated there.
- **Calculators** weight accuracy and compliance (14): a default rate or an unlabeled result is a compliance problem.
- **Hubs** weight internal linking: their job is distribution.

**Overall page score** = Σ(aspect score × weight) / Σ(weights of scored aspects). Round to a whole number, then apply the gates below.

---

## 5. Gates (applied after weighting)

| Gate | Trigger | Effect |
|---|---|---|
| **G1 Compliance (hard)** | Accuracy & compliance below 40 (any P0 defect, §3.11) | Overall page score capped at **59 (F)** |
| **G2 Compliance (soft)** | Accuracy & compliance 40–59 | Overall capped at **69 (D)** |
| **G3 Intent** | H1 missing, duplicated sitewide, or wrong intent (Intent & H1 ≤ 40) | Overall capped at **79 (C)** |
| **G4 Conversion** | Primary CTA broken or mismatched to its label on a money page (CTA ≤ 40) | Overall capped at **79 (C)** |
| **G5 Indexability** | Page meant to rank is `noindex`, wrongly canonicalized (`canonical_ok = False`), or missing from the sitemap | Overall capped at **59 (F)**, P0 |

Report gated pages with both numbers: `Overall 58 (F) — capped by G1; uncapped 81`.

---

## 6. Scoring templated page sets

| Set | Minimum sample to score in full | Plus |
|---|---|---|
| City pages (276) | Per county group: the template (1 page), the longest and shortest pages by `word_count`, and 10% of the group (at least 5) | Fact-checks on every city in the group. Score template-level aspects (headings, CTA, title pattern, schema) once per template, and page-level aspects (accuracy, uniqueness, above-the-fold) per sampled page. |
| Learn (471) | The 50 Learn URLs with the most GSC impressions, plus 30 more stratified by cluster | Template aspects (byline, Sources, schema) once. Content aspects per page. |
| Products (21 + hub), purchase (11), refinance (4), calculators (18), research (4), trust (12), hubs (16) | Every page | — |

Site-level and system scores (for example the CTA team's "CTA system" or the image team's "media system"): score each page type, then report (a) the simple mean across page types and (b) the **money-page score** (home + purchase + refinance + products) separately. Never let 471 Learn URLs hide a weak purchase page.

---

## 7. Calibration and audit tolerance

1. **Before scoring at scale,** each team scores 2–3 pages in its scope, then checks those scores against these anchors and its own rationale sentences.
2. **Independent auditors** re-score at least 10% of each team's scored pages (minimum 5), blind to the team's numbers.
3. **Tolerance:** an aspect differs by 5 points or less → the team's score stands. More than 5 points, or a grade boundary crossed → the auditor and the team reconcile in writing, citing the anchor text. Unresolved → PM decides.
4. **Gate disagreements** (did a P0 compliance defect exist?) always go to the PM and, for trigger terms, to the counsel list (charter §8).
5. **Re-scoring after fixes:** the projected "after" score in an implementation table assumes every listed change ships. Label it `projected`.

---

## 8. Scorecard template (paste into every report)

| URL | Page type | Intent & H1 | Headings | ATF answer | CTA | Title & meta | Int. links | Ext. links | E-E-A-T | AI-ready | Media | Accuracy & compliance | Uniqueness | Overall (weighted) | Grade | Gate | Projected after fixes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `/example/` | product | 78 | 70 | 62 | 66 | 74 | 80 | 85 | 72 | 58 | 70 | 64 | — | 69 | D | — | 87 |

Follow each scorecard with one rationale sentence per score, each citing evidence (§1).
