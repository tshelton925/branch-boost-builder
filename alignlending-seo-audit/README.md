# alignlending.com: SEO, conversion and AI-search overhaul

This folder holds the November 2026 review of alignlending.com and the change plan that came out of it.
Nothing here has been applied to the live site; every change is written out exactly for Align's web lead.

**Overall grade: 76 (C) today → 87 (B) projected.** Money pages: 72 → 88.

## Where to start

1. **`MASTER-REPORT.md`.** The owner's report has the executive summary, the master scorecard, top findings, the top 25 changes, the 30/60/90-day roadmap, the new blogs, the decisions needed, the measurement plan and limitations.
2. **`09-consistency/MASTER-CHANGES.csv`.** This is every change in one list (7,195 rows; 6,041 approved to ship). Work through it in this order:
   - Filter `status` to `APPROVED` and `APPROVED-WITH-EDIT`.
   - Then work by `phase`: 1 template-level → 2 money pages → 3 city pages → 4 learn/links → 5 images → 6 content refresh.
   - Within each phase, go by `priority` (P0, then P1, then P2).
   - The exact copy to publish is in `final_value`. Rows marked `PENDING-OWNER` or `PENDING-COUNSEL` wait for a decision.
3. **`09-consistency/owner-decisions.md` and `09-consistency/counsel-review.md`.** These are the questions that unblock the held rows.
4. **`scorecard.json`.** The same scores in machine-readable form, for a dashboard.

## Folders

| Folder | What it holds |
|---|---|
| `00-project/` | Brief, charter, brand voice and compliance guide, scoring rubric, KNOWN-CORRECTIONS (facts that win every conflict), work tracker |
| `01-ctas/` | CTA inventory (every label and destination), recommendations, report |
| `02-links/` | Link health, external-link policy, broken links, article-linking strategy, cluster map, exact link insertions, cannibalization |
| `03-core-pages/` | Home, purchase, refinance, product, calculator, research and trust pages: reports, exact changes, scores |
| `04-city-pages/` | Consistency sweep of the 276 city pages, three county-group fact-checks, city fixes, validator scripts |
| `05-content-keywords/` | Blog inventory, GSC gap analysis, competitor and AI-visibility gaps, PAA question bank, content plan, blog plan |
| `06-blogs/` | Briefs, the 14 new post drafts (`drafts/`, Markdown), WordPress paste-ready HTML with JSON-LD for each post (`wordpress-html/`, see each file's header for the Rank Math title and meta), blog editor reviews E1–E4 |
| `07-images/` | 1,977 optimized image files (`optimized/`), upload manifest, delivery snippets, corrected alt text, reports |
| `08-audit/` | Seven independent audits and their correction files |
| `09-consistency/` | Brand and compliance review, SEO and AI-search review, query ownership map, answer blocks, conflict resolution (MASTER-CHANGES, decisions log, unified specs, redirect map, owner decisions, counsel review) |
| `data/` | Copies of the crawl summary and link graph used by the teams |

## Ground rules used throughout

- Facts and compliance first: `00-project/KNOWN-CORRECTIONS.md`, then auditor corrections, then brand fixes, then SEO fixes, then the original team row.
- No rates, APRs or payment promises. No links to lenders, rate sites or listing portals. Samantha is quoted only from sourced quotes.
- Bing Webmaster data was not connected, so no Bing numbers appear anywhere.
