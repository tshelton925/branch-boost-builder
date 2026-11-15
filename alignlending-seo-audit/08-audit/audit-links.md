# Independent Audit: Links Team (02-links)

**Auditor:** independent auditor, 08-audit · **Date:** 2026-11-15 · **Read-only:** nothing on the live site was changed.
**Scope:** `02-links/link-health-report.md`, `broken-links.csv` (242), `external-link-policy.csv` (1,849), `internal-link-fixes.csv` (56), and `article-linking-strategy.md`, `cluster-map.csv` (528), `link-insertions.csv` (252), `cannibalization.csv` (68), `city-guide-link-insertions.csv` (384).
**Companion file:** `08-audit/corrections-links.csv` (row-level fixes: file, row_identifier, field, current_value, corrected_value, reason).

**Method.**
- I re-derived every headline number with python (stdlib) from `$DATA`: `pages.jsonl` links by `region` and `kind`, `inlinks.json`, `link_graph.json`, `page_summary.csv`, `text/`, `external_status.jsonl` and the raw `site/home.html`. My scripts are in the scratchpad at `audit_links/`.
- Live checks, each a single request with a pause:
  - REST `X-WP-Total` for `mortgage-location` and `posts`.
  - Two legacy redirect chains.
  - Two michigan.gov URLs. The proxy refused both with a 403, so the team's 404 evidence rests on its own recheck log (`links/michigan_recheck.jsonl`).
- DataWise GSC: two `queries` calls, plus the cached `overview` file, which has page-level `top_pages_90` and `opps_90`.
- Link-row checks:
  - All 252 main insertion rows and all 384 city rows were checked mechanically: the phrase exists verbatim, the target exists, the target is not already linked, and the URL is not on a 301, merge or prune list.
  - Every P0 row (107) was read for topic and compliance, plus a seeded random sample of 30 non-P0 rows. All 27 new sentences and the one link change were read word for word.
  - All 53 cannibalization 301s were compared with `05-content-keywords/blog-inventory.csv`.
  - I classified 35 external domains myself and compared the results with the team's classifications.

---

## 1. Verdicts

| Agent | Verdict | Why |
|---|---|---|
| **Link health and architecture** (`link-health-report.md` + 3 CSVs) | **PASS WITH CORRECTIONS** | 23 of the 29 claims I checked reproduce exactly: `/refinance/` 5 and `/purchase/` 16, the menu printed 3 times, 12,525 alignwithalign.com links, 318 links and 42 internal body links per city page, 69 policy links on 60 pages, 171 Wikipedia links, 349 breadcrumb gaps, 136 `http://` links, the REST totals of 293 and 96, and the GSC legacy-URL attribution. **Corrections:** (1) the sitewide External score uses no rubric §6 method; the type mean is 78, not 70; (2) Houzz is labelled VIOLATION/P0 and Nolo "replace", although the Editorial Policy names Nolo and Angi as acceptable Tier 4 sources; (3) all 62 policy rows carry one city-only fix text, which is wrong for the 9 Learn and lead-gen rows; (4) the menu and non-QM changes contradict the unified nav spec (Physician listed as non-QM, condo missing) and the CTA team ("Save my plan" → `/start/`, "drop the popup"); (5) the claim that the county hubs link all 276 cities is refuted: Blair Township is not linked from any county hub; (6) about 7 of the 58 "wrong-target" Wikipedia links point a population figure at the correct city article. |
| **Article linking strategy** (`article-linking-strategy.md` + 4 CSVs) | **PASS WITH CORRECTIONS** | The diagnosis is sound and well evidenced. 224 of 224 phrases are verbatim, as are 384 of 384 city rows. The median of 28 in-body links, money pages linking only 2 to 6 Learn pages, 0 of 33 and 0 of 36, the "3 posts × 50" Related modules, 29% prev/next, homestead 275 → 66 and all six research-report figures reproduce. **Corrections:** (1) **P0 compliance:** row 108 puts a down-payment percentage ("0% to 3.5%") on `/purchase/first-time-homebuyer/`, a money page (guide §7.2 rule 1); six more rows anchor links on "3% down" or "3.5% down"; (2) the overall score of 54 (F) is a custom formula, not the rubric; a blind rubric re-score gives **71 (C)**, and C20's 37 falls below the rubric's floor for a page that has no orphans and no broken links; (3) 20 of the 53 cannibalization 301s disagree with the blog-inventory team, and 18 insertion rows sit on pages that the inventory team merges or prunes; (4) "the connector has no page column" is refuted, because DataWise's overview has page-level rows and the team's estimates miss them by 2 to 8 times (`usda-loan-basics` 10,182 actual vs est. 4,945); (5) "1 of 36 articles links `/purchase/`" is refuted (the real count is 0); (6) 26 of the 107 P0 rows do not meet the team's own P0 rule. |

---

## 2. Headline numbers re-derived

| # | Team claim | Re-derived value (evidence) | Status |
|---|---|---|---|
| H1 | `/refinance/` has 5 contextual inlinks (3 subs + 2 city) | 5: break-even, cash-out-vs-home-equity, home-equity-review, Rochester Hills, Salem Township (`pages.jsonl` content links; `inlinks.json` 5) | Confirmed |
| H2 | `/purchase/` has 16 (F1: 8 subs, 3 city, 5 others). Scorecard: "12 of them from its own subs" | 16: 8 purchase subs, 3 cities (Northfield Twp, Richland Twp, Salem Twp), `/mortgage-michigan/`, `/mortgage-process/`, `/product-loans/`, `/real-estate-agents/`, `/refinance/` | Confirmed; the scorecard's "12" is **corrected to 8** |
| H3 | 3 of 276 cities link `/purchase/`; 2 of 276 link `/refinance/` | 3 and 2 | Confirmed |
| H4 | City page: 318 links, 182 nav, 42 internal body, 69 body external (65 excluding Calendly), 40 unique | 317.6 total. Nav internal 91 + 43 + 48 = 182. 41.6 internal body. 69.1 external (65.1 excluding Calendly and sms). 40.2 unique | Confirmed |
| H5 | Learn article: 327 links, 61.7 external, 28 unique | 327.4, 61.7, 28.0 | Confirmed |
| H6 | 43-item menu printed 3 times | `home.html`: `nav-menu--main` + `nav-menu--dropdown` + `elementor-location-popup`. Header internal links 91 (43 × 2 plus duplicates); popup 43 internal plus 5 external. The popup link set is identical on 835 of 835 pages | Confirmed (the menu has 48 items including the 5 external actions) |
| H7 | 5 items go to alignwithalign.com: 12,525 links, `target=_blank`, no rel; the only no-`noopener` links on the site | 5 × 2,505 = 12,525 (header 8,350, popup 4,175). 100% `_blank` with an empty rel. 0 other `_blank` links lack `noopener` | Confirmed |
| H8 | Hamburger `<a>` has no text or `aria-label` | The `home.html` `elementor-action` popup link has no `aria-label` | Confirmed |
| H9 | 4,245 redundant card links (2,086 empty image + 2,159 "Read more") | 2,086 empty image links on Learn (2,091 sitewide). "Read more": 2,155 on Learn, 2,163 sitewide | Confirmed |
| H10 | 349 pages have BreadcrumbList but no visible trail | 349: city 276, product 21 + hub 1, calculators 16, other 12, purchase/refinance 15, research 4, state 3, learn 1 | Confirmed |
| H11 | 136 `http://` links (81 pairs, 44 pages) | 136, 81, 44 (city 123, learn 12, county 1) | Confirmed |
| H12 | 69 policy-violation links on 60 pages; WPR 39 | 69 links / 62 pairs / 60 pages; WPR 39 | Confirmed (counts). Classification partly corrected (see section 5) |
| H13 | 171 Wikipedia links on 132 city pages; 58 wrong-target | 171 / 132. Of the 59 wrong-target rows, 7 anchor a population or housing figure ("1,084 residents", "18,544 residents", "92% of homes are single-family") on the correct city article | Count confirmed; **wrong-target corrected to about 51** |
| H14 | 92% of 49,219 body external links are gov or primary | 91.7% of 49,220 | Confirmed |
| H15 | No lender, rate-site or portal domain | A regex sweep of 1,849 domains (zillow, redfin, realtor.com, bankrate, nerdwallet, lendingtree, rocket, bank, lend, realty and others) found none | Confirmed |
| H16 | REST still publishes 293 `mortgage-location` items and 96 posts | Live `x-wp-total: 293` and `96` | Confirmed |
| H17 | Legacy 301 takes 1 hop; `http://www.` takes 3 | Live: `/buy-home-auction/` 1 hop → 200; `http://www.…/flint-mi-48506/` 3 hops → `/mortgage-lender-flint-mi/` | Confirmed |
| H18 | GSC credits "flint mortgage" (126, 18.5) to `/mortgage-location/flint-mi-48552/` | DataWise overview `opps_90`: identical; also Wixom 105 and Farmington 57 | Confirmed |
| H19 | About 11,290 external URLs unverified; 2 × 404; 21 redirect | Status file: 197 × 200, 11,446 × status 0. Team recheck log: 2 × 404 (soft 404 to `/taxes/404` and `/egle/404`) and 15 redirects, plus 6 in the status file = 21. My live re-check was proxy-blocked (403) | Confirmed from logs. **Corrected:** 811 of the 11,290 are `sms:` links, so about 10,479 web URLs remain unverified |
| H20 | Stranded pages: physician 2, 1099 4, asset 5, refinance calculator 8, VA calculator 9, market report 2, `/research/` 1, about 3, reviews 7, FL/NC 2, Marquette 2 | All identical in `inlinks.json` | Confirmed |
| H21 | Physician guide does not link its product; non-QM hub lists only Bank Statement, DSCR, Jumbo; VA page links the fee calculator but not the VA calculator; `/refinance/` links no calculator | All four confirmed from content links | Confirmed |
| H22 | The trust strip is linked only on the home page | 1 link (home → `/reviews/`) | Confirmed |
| H23 | County hubs put `nofollow` on 96% of gov citations | 264 of 289 county-hub external links (91%) are `nofollow` | Confirmed (approximately) |
| H24 | Exact anchor "Michigan property tax calculator" on 514 pages (77%) | 514 pages; 783 of 1,009 anchors (78%) | Confirmed |
| H25 | Every page within 2 clicks via navigation | BFS: 129 at depth 1, 705 at depth 2, 0 unreached | Confirmed |
| H26 | "The 13 hubs together link all 276 cities (276/276 covered)" | 275 of 276. `/mortgage-lender-blair-township-mi/` is linked only from a state hub (the city team flags it too) | **Refuted** |
| H27 | 2 internal links pass through a 301 | `link_graph.internal_links_pointing_to_redirects` = 2 (Salem Twp, Springfield Twp) | Confirmed |
| H28 | Footer has 48 internal links, 3 to `/licensing/` | 48 internal (51 with tel, mailto and external); 3 to licensing | Confirmed |
| A1 | Median article: 28 in-body internal links to 20 Learn pages | 29 (mean 28.7) to 20 unique Learn targets, excluding breadcrumbs, byline, footnotes, cards, prev/next and `/start/` | Confirmed |
| A2 | Money pages link only 2 to 6 `/learn/` URLs | 37 money pages: 2 to 6 each (20 pages link 3) | Confirmed |
| A3 | `/refinance/` links 0 of 33 C09 articles; `/purchase/` 0 of 36 C13; 0 of 33 C09 articles link `/refinance/` | 0, 0, 0 | Confirmed |
| A4 | Only 11% of articles get a link from their own cluster's money pages | 36 of 420 = 8.6% (cluster-map pillar plus secondary-money rows) | **Corrected:** "about 9%" |
| A5 | C13: "1 of 36 articles links `/purchase/`" | 0. The single "y" is `drive-by-appraisal`, which links its overridden pillar `/product-loans/home-equity-loan/`. No Learn page links `/purchase/` in body copy | **Refuted** |
| A6 | Three posts fill 50 Related modules each; the septic guide shows offer articles | 50 / 50 / 50 (competitive-offer, fixer-upper, negotiating). Septic shows exactly those three | Confirmed |
| A7 | "The modules are not topical" (summary) vs "84% stay topical" (scorecard) | 84.1% of 1,264 Related slots are same-cluster. The problem is concentration, not topic | **Corrected** (wording) |
| A8 | Prev/next stays on topic 29% of the time | 244 of 835 = 29.2% | Confirmed |
| A9 | 0 of 39 refinance articles link the refinance calculator | 0 Learn pages link it at all | Confirmed |
| A10 | City: homestead 275 → 66; MSHDA 214 → 68; septic 183 → 149; waterfront 97 → 71; well 173 → 119 | 275 → 66; 215 → 69; 183 → 149; 99 → 72; 152 → 119 (my well regex is narrower) | Confirmed |
| A11 | 224 rows use phrases verified verbatim (0 mismatches) | 224 of 224 sentences and anchors match `text/` after quote normalization. City supplement: 384 of 384 | Confirmed |
| A12 | Research figures in the new sentences | 30% above 43% DTI; 40.8% of denials at 50%+; HELOC 30% vs purchase 15.5%; credit history 42% = DTI 42%; manufactured 57% vs 8%; "every record lenders reported for a property in Michigan". All appear in `text/research__michigan-mortgage-market-report.txt` | Confirmed |
| A13 | `michigan-taxable-value` has 294 inlinks, links 0 of its 5 articles, and sends PRE to the glossary | 294; no homestead, assessment, transfer-tax or uncapping links; "Principal Residence Exemption" → `/learn/mortgage-glossary/#pre` | Confirmed |
| A14 | "Michigan property tax calculator" anchor on 210 Learn pages | 208 to 209 | Confirmed |
| A15 | "The DataWise connector returns query-level rows with no page column" | The `overview` action returns `top_pages_90` and `opps_90` with URLs. Estimates diverge: `usda-loan-basics` 10,182 actual vs est. 4,945; `usda-eligibility-check` 86 vs 695; `va-loan-calculator` 849 vs 209; `definition-of-mansion` 558 vs 49. "amortization" (315, 14.5) ranks `/learn/amortization-schedules/` | **Refuted** |
| A16 | Lease to own: 15,242 impressions at 59.8 | Query-level confirmed. Page-level: 14,548 at 33.0 | Confirmed |
| A17 | "refinance home loan" 856 at 66.9; "refinancing options" 421 at 11.9 | Confirmed. The second query is served by `/learn/types-of-refinancing/` (`opps_90`), not by a weak `/refinance/` | Confirmed (nuance) |

---

## 3. Checked findings

C = confirmed · X = corrected (see CSV) · R = refuted

### 3.1 Every P0 row

**Link health: `broken-links.csv` P0 (66)**
- 2 × 404: C, from the team log; the live re-check was blocked.
- 2 × internal 301: C.
- 62 policy rows: counts C. All 62 carry the same city boilerplate fix ("Census ACS … employer's own site"). For the 9 Learn and lead-gen rows (Houzz ×3, security.org, FortuneBuilders, Trading Economics, Ownwell ×2, plus the domain-level Houzz label) the fix is **X**. Houzz is reclassified to Tier 4, P2.

**Link health: `internal-link-fixes.csv` P0 (7)**
- Rows 2 and 3 (301 fixes): C.
- Row 18 (city "Loan options" hub links): C. It is the single biggest inlink lever: `/purchase/` and `/refinance/` gain about 276 each.
- Row 19 (home cards): C.
- Row 20 (refinance CTA block): C, but it must be built into the CTA team's `al-module`/`al-next` template (section 7, K3).
- Row 40 (physician guide → product): C.
- Row 41 (non-QM list): **X**. Physician is not a non-QM product (its page says only that it is "not an FHA, VA, USDA, Fannie Mae or Freddie Mac program"), and the unified nav spec puts it under Buy. Non-Warrantable Condo is the missing child. Use the label "Asset Depletion Loans".

**Article linking: `link-insertions.csv` P0 (107)**

All 107 pass the mechanical checks: the phrase is verbatim, the target exists, the target is not on the source page, and nothing points to a cannibalization 301. Reading each row:

| Result | Rows | Note |
|---|---|---|
| C (topic, anchor and compliance OK) | 2–11, 13–31, 34–55, 57–71, 73–80, 82–83, 85–103, 107 (96 rows) | Clear topical fits. The new sentences (3, 4, 10, 20, 23, 24, 37, 42, 46, 49, 55) are factual, rate-free and on voice; the research figures are verified. Row 58 is acceptable, but its sentence also says "none at all" (down payment), so keep it out of any block that has an apply CTA. |
| **X: compliance** | 108 | "low-down-payment mortgage options from 0% to 3.5%" is a down-payment percentage on a money page. Guide §7.2 writer rule 1 says no trigger terms on money pages. Fixed anchor and sentence in the CSV. |
| **X: compliance (hold)** | 104, 105, 106 | The anchor is "3% down". Linking the percentage itself promotes a trigger term. The sentences are agency rules (allowed in Learn), but the link should not sit on the percentage. Drop the rows or hold them for [COUNSEL] (P0 → P1). The reason text also calls a page at position 1.9 "striking distance". |
| **X: source is being merged** | 32, 33 | Sources `negotiating-home-purchase-with-seller-financing` and `pros-and-cons-of-cash-out-refinancing` are MERGE in 05. Re-home each insertion on the 05 canonical after the merge. |
| **X: weak fit / wrong reason** | 81 | Home Possible guide → homeowners-insurance-deductibles. The reason says "same-cluster", but the pages are in C04 and C17. Downgrade P0 → P2. |
| **X: placement** | 72, 84 | "purchase loan" is anchored inside the ICE "closed in 36.8 days" statistic, which puts a closing-time figure next to a money-page link (guide §6 "close in X days"). Link a different sentence. |
| **X: placement** | 56 | "203(k)" occurs 3 times, and the first occurrence is inside the existing HUD link. Specify the second occurrence. |
| **X: copy** | 12 | "all seven" has no antecedent on `/refinance/`, whose section shows four options. Fixed sentence in the CSV. |
| C (change link) | 82 | PRE re-point from the glossary to the homestead guide is confirmed. |

**Article linking: `cannibalization.csv` P0 (6 groups)**

| Group | Status | Note |
|---|---|---|
| Lease to own | C | Agrees with 05. |
| Low down payment | C | Agrees with 05. |
| FHA limits | C | Agrees with 05. |
| Closing costs | **X** | 05 also 301s `how-to-budget-for-closing-costs`, which 02 re-scopes. |
| Home buying process | **X** | 02 sends `buying-process` → `/learn/home-buying/`; 05 sends it → `/learn/home-buying-process/`. |
| Amortization | **X** | GSC `opps_90` credits "amortization" (315, 14.5) to `/learn/amortization-schedules/`, the URL 05 wants to 301. Under 02's own rule ("the URL with the most page-level impressions wins"), neither plan is safe until GSC Pages is checked. |

### 3.2 Sampled non-P0 rows (30 insertion rows, seed 42; 20+ further findings)

- **Insertion sample:**
  - 27 of 30 are C.
  - Row 192: **X**, "3.5% down" anchor.
  - Row 170: **X**, the source is MERGE in 05 and the anchor overlaps the HUD link.
  - Row 114: weak fit ("annual fee" → recent-changes-to-usda), left as P1.
- **Other trigger anchors found file-wide:** rows 131 and 153 ("3.5% down"). Rows 116, 135 and 218 use term names ("15-year", "30-year"): mark them `[COMPLIANCE REVIEW]`, consistent with core-pages audit K4.
- **Rows on sources the inventory merges or prunes (18):**
  - P0: 32, 33.
  - P1: 127, 128, 170, 173, 178, 180, 184, 194, 199, 202, 207, 210, 214, 217, 230, 233.
  - Row 125 **targets** a MERGE URL.
- **Caps:** 2 small breaches.
  - `michigan-taxable-value` has 4 source rows at est. 22 impressions; the cap is 3 unless the source has 1,000 or more.
  - The anchor "Michigan Mortgage Market Report" is used ×4 on one target; the cap is 3.
- **P0 rule:** 26 of the 107 P0 rows have source est. < 100 and a non-pillar target, which the stated rule excludes.
  - Most are justified as "striking-distance target", so restate the rule rather than downgrade every row.
  - Downgrade the specific rows listed above.
- **City supplement (384):** 0 mismatches. Rows 192, 193, 195, 197, 198 and 199 anchor "transfer tax" in a sentence where the first occurrence sits inside the existing "transfer tax calculator" link. Specify the second occurrence.
- **`internal-link-fixes.csv` other rows:**
  - Rows 4–8 and 13–17: C.
  - Row 9: C (466 vs 471 pages, cosmetic).
  - Row 10: **X**. The option to delete the popup conflicts with 01-ctas.
  - Row 12: **X**. Raise to P0 and adopt 01-ctas row 2 ("Save my plan" → remove, not `/start/`).
  - Rows 28–33 and 34–39: **X**. Each set repeats one identical anchor 6 times, which breaks the team's own R10 cap of 3.
  - Rows 42–55: C.
  - Row 50: C, with a guide §7.7 caveat on the review count.

### 3.3 External-link policy: 35 domains classified blind

| Domain | Team class | Auditor | Note |
|---|---|---|---|
| worldpopulationreview.com, city-data.com, incomebyzipcode.com, michigan-demographics.com, neilsberg.com, zipdatamaps.com, unitedstateszipcodes.org, prop-metrics.com, zippia.com | VIOLATION | Sensible | Aggregators cited for Census figures. The guide says "not acceptable as sources". See P8 for priority. |
| ownwell.com, security.org, fortunebuilders.com | VIOLATION | Sensible | Lead-gen, affiliate and course funnel. Keep at P0. |
| tradingeconomics.com | VIOLATION | Sensible | Replace with Census New Residential Sales. The fix text is wrong (city boilerplate). |
| **houzz.com** | VIOLATION P0 | **Tier 4, P2** | Houzz *Magazine* design and staging articles fit the same class as Angi, which the Editorial Policy names as acceptable Tier 4. Not a never-link category. One of the 3 pages is PRUNE in 05. |
| en.wikipedia.org | other / P1 | Sensible action | The guide names Wikipedia and WPR in the same sentence, so give them the same priority (P8). |
| **datausa.io** (44 links, 42 city pages) | other / replace | **Gap** | Cites household income figures ("median household income of $56,820"), exactly like neilsberg and incomebyzipcode, but has no fix rows. The city team already asks for Census replacements. |
| **nolo.com** (66) | other / "replace … lawyer-directory lead-gen" | **Tier 4, keep** | The Editorial Policy names Nolo as acceptable. Add a Tier 1 statute only where a legal rule rests on Nolo alone. |
| cdn.prod.website-files.com, everycrsreport.com, bobvila.com, familyhandyman.com, theminimalists.com | other / replace | Sensible | Mirror, mirror, affiliate, affiliate, blog. |
| **project-osrm.org** (291), **openstreetmap.org** (231) | primary / "followed citation" | **Attribution** | Methodology attribution for drive times, not a source. One attribution in Sources (ODbL), not inline. Label fix, P2. |
| attomdata.com, realcomp.com, myfico.com, mortgagetech.ice.com | primary | Sensible (Tier 3–4) | The original publishers of their own reports. |
| buildershardware.com | primary | Sensible | The BHMA standards body, ANSI A156 standards. |
| law.cornell.edu (1,207) | primary | Sensible, P2 note | A university mirror. The guide prefers ecfr.gov or govinfo. |
| censusreporter.org | primary | Sensible | Label it "U.S. Census Bureau ACS via Census Reporter" (guide §7.10). |
| metroparks.com, scsmi.net, gpsbulldogs.org, propertyfraudalert.com | gov / primary | Sensible | Regional authority, city, school district, county service. |
| acceleratejacksoncounty.org | gov | other | An economic-development nonprofit. Minor. |
| webharvest.gov | gov / Keep | **Replace** | An archived FEMA snapshot; the report itself (F12) calls it an unstable mirror, P1. |

**Result:** 28 of 35 sensible and 7 corrected or noted. No lender, rate-site or portal domain is misclassified as acceptable.

---

## 4. Score calibration (rubric §3.6, §3.7, §6, §7)

**Blind re-score sample**
- Six random Learn articles (seed 7): cost-of-building-house 68, refinancing-to-shorter-loan-term 76, benefits-of-working-with-sellers-agent 68, pros-and-cons-of-adding-home-addition 66, interest-only-mortgages 74, 401(k) 74. **Mean 71 (C).**
- Each starts at the 60 anchor: bottom-quartile inlinks under 8, generic card anchors, template anchors repeated more than 3 times.
- Points are added for elements of the 80 anchor that each page meets: a hub link (all six), the pillar or a money-page link, sibling links, middle-quartile inlinks.
- The two hubs and the group scores below were re-scored the same way.

| Score | Team | Auditor | Delta | Anchor reasoning | Decision |
|---|---|---|---|---|---|
| Sitewide internal linking | 71 C | 70 C (rubric §6 type mean 69.5); money pages 71 C | 1 | Mean of the team's 10 type scores | **Stands.** Add the money-page score of 71 (C), as §6 requires. |
| Sitewide external linking | 70 C | **78 C** (type mean 77.6; money pages 79 C) | 8 | §6: "report (a) simple mean across page types and (b) the money-page score". The team's 70 has no stated method. | **Adjust to 78 (C).** Grade unchanged. |
| Learn internal (health report) | 73 C | 71 C | 2 | Blind sample above | **Stands.** |
| **Article system overall** | **54 F** | **71 C** | **17** | The custom formula (25 points for the exact pillar, 20 for money-page down-links, 10 for placement in the first 30%) is not the rubric. Rubric F means "broken, wrong, non-compliant or missing", but these articles have no orphans, no broken links, hub links on 87%, a money-page link on 92% and median inlinks of 17.5 to 19. | **Adjust to 71 (C).** Keep 54 only as a labelled "cluster-architecture index". |
| C20 Market trends (cluster) | 37 F | about 60 D | 23 | §1: "Scores below 40 are for pages where the aspect is absent or actively harmful." C20 articles have a median of 9.5 inlinks and 100% link a money page. | Relabel the cluster column as an index, or re-score to the rubric (60). |
| C09 Refinancing (cluster) | 41 F | about 72 C | 31 | 80 anchor with one gap: links the break-even money page, not `/refinance/` or the calculator; median 19 inlinks; 10 same-cluster links | Same as above. |
| Refinance group (hub + 3 subs) | 60 D | Split: **`/refinance/` hub 50 F**; subs 78 C | 11 (group) | The hub's 5 inlinks sit between the 40 anchor (near-orphan) and the 60 anchor. The subs (25, 90, 115 inlinks) meet the 80 anchor apart from breadcrumbs. | Report the hubs separately. |
| Purchase group (hub + 10 subs) | 72 C | Split: **`/purchase/` hub 56 F**; subs about 76 C | 2 (group) | 16 inlinks, half of them from its own subs | Report the hubs separately. |
| City internal | 68 D | 70 C | 2 | Body links, county hub up-links and siblings. Template anchors ×276, 2 redirect links, no breadcrumb. | **Stands** (within 5, but it crosses the D/C line; the team's D is defensible). |
| City external | 60 D | 60 D | 0 | Exactly the 60 anchor ("Wikipedia, World Population Review") | **Stands.** |
| Products internal | 73 C | 73 C for the group | 0 | Products-B scores its 9 pages at a mean of 60 (D) because the stranded pages pull it down. | **Stands** for the group. Do not apply the group score to HELOC, 1099, asset-based or condo. |
| Projected article score after fixes | about 80 B | about 82 B (projected) | — | On the rubric basis | Label it "projected". |

---

## 5. Recommendation fixes (summary; exact rows in the CSV)

1. **Compliance (P0).** Row 108: anchor "low-down-payment mortgage options"; sentence "NEW: If the down payment is the hurdle, compare low-down-payment mortgage options." Rows 104–106, 131, 153 and 192: never anchor on a down-payment percentage. Drop or hold for [COUNSEL]. Rows 116, 135 and 218 (term names): `[COMPLIANCE REVIEW]`.
2. **Specific replacement sources for the non-city policy rows:**
   - Trading Economics → U.S. Census Bureau New Residential Sales (`https://www.census.gov/construction/nrs/index.html`).
   - security.org → remove (the page already cites the BHMA A156.40 standard).
   - FortuneBuilders → remove, or link hudhomestore.gov or the county treasurer's tax-foreclosure auction page [VERIFY exact page].
   - Ownwell → St. Clair County Equalization or the local assessor [VERIFY page].
   - Houzz → Tier 4 review, P2. For staging, use NAR's Profile of Home Staging on nar.realtor. Skip the accessibility article, which is PRUNE in 05.
3. **Priority consistency (P8).** The guide treats Wikipedia and WPR identically. Put all aggregator, Wikipedia and datausa replacements (about 260 links) at P1, and ship them **together with the 04-city-pages corrected figures** so the new Census link cites the corrected number. Keep the 7 commercial lead-gen and affiliate links (Ownwell, security.org, FortuneBuilders) at P0.
4. **Menu (one spec).** Use the unified nav spec (audit-core-pages-B K4; 02-links is the owner).
   - **Buy:** Conventional, FHA, VA, USDA, HomeReady & Home Possible, Jumbo, Physician, Manufactured.
   - **Rate and term** `[COMPLIANCE REVIEW]`: 30-Year Fixed, 15-Year Fixed, ARM, Buydown.
   - **Self-employed and non-QM:** Non-QM, Bank Statement, 1099 Income, Asset Depletion, DSCR, Non-Warrantable Condo.
   - **Home equity:** Home Equity Loan, HELOC, Cash-Out Refinance.
   - Remove the duplicate *dropdown* copy and keep popup 822 as the mobile menu.
   - The alignwithalign.com items follow 01-ctas row 2 at P0: `#p-pay` and `#available-equity` anchors; remove "Save my plan" unless it is a working account feature.
5. **Cannibalization and inventory.** Freeze the 20 disputed 301s and the 7 disputed canonicals (section 7, K5) until the PM rules. For amortization, check GSC Pages before any 301. Re-home the 18 insertions whose source pages are merged or pruned onto the surviving canonical.
6. **Data.** Replace estimated impressions with the DataWise `overview` page rows where they exist (30 pages), and re-run the P0 logic. State the P0 rule as "source est. ≥ 100 **or** target is a striking-distance page (position 4–30, ≥ 30 impressions) **or** an under-linked pillar".
7. **R2 cap.** The 20-link maximum against a median of 28 means pruning about 8 links per article. Either raise the cap to 30 or say plainly that R2 removes links.
8. **Wording.** "Not topical" becomes "concentrated" (84% same-cluster). "11%" becomes "about 9%". C13 changes to "0 of 36". "No page column" changes to "the overview has page rows". `/purchase/` scorecard: "8 of them from its own subs". County coverage: 275/276 (add Blair Township to its county hub).

---

## 6. What could not be verified

- The 2 confirmed 404s and the 21 redirects: the proxy now returns 403 for michigan.gov. The evidence is the team's recheck log, which is internally consistent.
- About 10,479 external web URLs. The `check_external.py` re-run from open internet stays a P1 action.
- alignwithalign.com ownership (host blocked), as both teams note.
- Bing: no data connected. Both reports flag this correctly.

---

## 7. Cross-team conflicts

**K1. Menu groups and footer** (02-links §5.1 vs Products-B §4.3 vs the core-pages-B audit unified spec)
- 02-links lists Physician under non-QM, omits Non-Warrantable Condo and Manufactured, and labels the asset page "Asset-Based".
- The unified spec (owner 02-links) lists Physician under Buy and Condo under non-QM, with the label "Asset Depletion Loans".
- **Resolution:** 02-links adopts the unified spec. `internal-link-fixes` row 41 adds Condo, not Physician. The footer follows 02-links §5.2; Products-B's footer additions are superseded, as the core-pages audit already noted.

**K2. Printing the menu once** (02-links §5.1 item 1 / row 10 vs 01-ctas §7)
- 02-links allows "drop the popup and keep the dropdown".
- 01-ctas keeps popup 822 as the only mobile menu and adds an Apply / Talk / Call row to it; the mobile header hides Apply Now.
- **Resolution:** remove only the duplicate dropdown copy (breakpoint "None"). Keep the popup.

**K3. Off-domain menu actions** (02-links row 12, P1 vs 01-ctas row 2, P0)
- 02-links maps "Save my plan" → `/start/`. That breaks guide §5.2 rule 1: a "plan" label cannot open the application, and the header already has "Apply Now".
- **Resolution:** adopt the 01-ctas row at P0 (remove "Save my plan" unless it is a working account feature, and use the CTA team's anchors). The rel fix stays as a fallback.

**K4. Learn next-step blocks** (article R3 / §7.2 and `internal-link-fixes` rows 20–21 vs 01-ctas §8)
- Two teams specify destinations for the same `al-module`/`al-next` components.
- They disagree for C01 (02: game plan; 01: FHA product, then mortgage calculator), C11 (02: compare-loan-estimates; 01: `/purchase/first-time-homebuyer/#cash-to-close`) and C15 (02: buy-before-you-sell; 01: seller net sheet).
- Neither the 01 module nor the end block contains `/refinance/` or `/purchase/`, so the F1 hub fix is lost if 01's template ships alone.
- R3's label "Run a break-even review" is not in the guide §5.2 vocabulary.
- **Resolution:** 01-ctas owns the module and end-block destinations and labels. 02's hub text links (rows 20–21) ship inside 01's template as the secondary text link on the refinance and buyer keys. 02 drops its R3 closing-box map.

**K5. Cannibalization vs blog inventory** (02 `cannibalization.csv` vs 05 `blog-inventory.csv`)
- Of the 53 URLs 02 would 301, 33 agree with 05 and **20 disagree**:

  | Topic | URLs | Disagreement |
  |---|---|---|
  | `buying-process` (P0) | 1 | 02 → `/learn/home-buying/`; 05 → `/learn/home-buying-process/`. |
  | Seller's market | 4 | 02 keeps `how-to-win-house-in-sellers-market`. 05 merges it, with three siblings, into `how-to-create-competitive-offer`, and `what-is-sellers-market-for-home-buyers` → `what-is-buyers-market-in-real-estate`. |
  | Regulation updates | 6 | Fully inverted. 02 keeps `impact-of-new-mortgage-regulations` and 301s `mortgage-regulation-updates` and `whats-new-in-mortgage-industry`. 05 keeps those two and merges `impact-of-new…` away. |
  | Trends and new products | 2 | Different 301 targets. |
  | Beginner investing | 2 | Inverted. |
  | `freddie-mac-updates` | 1 | 02 → `fannie-mae-updates`; 05 → `federal-housing-finance-agency-updates`, and 05 merges `fannie-mae-updates` too. |
  | Movers | 1 | 05 also merges 02's canonical `hiring-movers`. |
  | `selling-your-house` | 1 | 02 → `selling-a-home`; 05 → `selling-process`. |
  | `adjustable-rate-mortgage-tips` | 1 | 02's cell says "301 to …resets", but the group canonical is pros-and-cons, and so is 05's target. |
  | `mortgage-terminology` | 1 | 02 → glossary; 05 KEEP. |

- In 24 more URLs, 05 merges a page that 02 only differentiates. Among them:
  - `amortization-schedules` (P0; GSC ranks it for "amortization").
  - `how-to-budget-for-closing-costs` (P0 group).
  - `pros-and-cons-of-cash-out-refinancing` (row 125's target).
  - `how-to-compare-loan-estimates`, which 02's cluster-map uses as a C11 secondary money page.
  - `negotiating-home-purchase`, one of the three posts that fill 50 Related slots each.
- **Resolution:**
  - PM rules per group.
  - Default to the URL with GSC page-level impressions. Pull them from the DataWise overview or GSC → Pages before any 301 (both teams say this).
  - Until the ruling, nothing in these groups is redirected, and 02's insertion and Related-module rules use the 05 canonical where 05 merges.

**K6. Wikipedia and aggregator removal vs city fact-checks** (02 `broken-links.csv` / policy vs `04-city-pages`)
- The city team cites Wikipedia as its own verification source in 4 rows: East Lansing population, Barton Hills population, Lansing (Potter Park Zoo) and Flint (McLaren). The brand rule makes those unacceptable, so the city team must re-source them to Census, the municipality or the employer.
- 33 city fact-check rows already say "Replace with data.census.gov / Census QuickFacts".
- `04-city-pages/city-fixes.csv` has 132 Wikipedia and city-data rows that duplicate 02's link rows.
- Several WPR figures are projections or ranges that no Census table publishes ("26,280 by 2026", "7,500 to 8,020"). The city team gives the corrected text ("about 25,900 residents for 2025", Census Vintage 2025).
- **Resolution:**
  - 04-city-pages owns the city text and the replacement citation.
  - 02 owns the link-level spec: rel, the "Local resources" box and the caps.
  - Apply them in one pass per page, so a Census link never sits on a WPR number.
  - 02's 59 wrong-target and 39 WPR rows become a checklist against `city-fixes.csv`, not a separate edit pass.

**K7. Visible breadcrumbs** (02 P1 vs 04 consistency-sweep T10, P2)
- Pick one priority. The auditor recommends P1: the breadcrumb is the cheapest in-body up-link on 349 pages, and Google expects the markup to match visible content.
- The trail on multi-county cities (Northville) follows the city team's "majority county" rule.

**K8. Trust strip link** (02 row 50 vs guide §7.7)
- Linking "5.0 on Google, 123 reviews" to `/reviews/` is compatible with the guide only while the count is maintained from one template. If Align drops the count, keep the link on "5.0 on Google".

**K9. Research module on the home page** (02 §5.3 vs Calculators C row 166): already ruled compatible (core-pages-B audit K9).

---

## 8. Counts

| | Checked | Confirmed | Corrected | Refuted |
|---|---|---|---|---|
| Link health findings (H1–H28 + sitewide score) | 29 | 23 | 5 (H2, H12, H13, H19, external score) | 1 (H26) |
| Article strategy findings (A1–A17 + score, caps, P0 rule, cannibalization, amortization, inventory overlap, trigger anchors, row 108, copy/R2 cap, placement) | 27 | 13 | 12 | 2 (A5, A15) |
| `internal-link-fixes` / policy classification findings (rows 10, 12, 28–39 and 41; Nolo, Houzz, datausa, boilerplate fixes, OSRM label, webharvest, Wikipedia/WPR priority; classification sample) | 12 | 1 | 11 | 0 |
| **Total findings** | **68** | **37** | **28** | **3** |
| Insertion rows checked mechanically | 252 + 384 | 252 and 384 pass the phrase checks | 19 inventory conflicts, 9 nested-occurrence rows | 0 |
| P0 insertion rows read for topic and compliance | 107 | 96 | 11 | 0 |
| Sampled non-P0 insertion rows | 30 | 27 | 3 | 0 |
| Cannibalization 301 URLs vs 05 | 53 | 33 agree | 20 disagree | — |
| External domains classified | 35 | 28 | 7 | 0 |

---

## 9. Sources

- `$DATA/pages.jsonl`, `page_summary.csv`, `inlinks.json`, `link_graph.json`, `external_status.jsonl`, `text/*.txt` and `site/home.html` (crawl of 2026-11-15).
- Team logs: `scratchpad/links/michigan_recheck.jsonl` and `scratchpad/gsc/overview.json` (DataWise overview, page-level).
- Live: `https://alignlending.com/wp-json/wp/v2/mortgage-location` and `/posts` (`x-wp-total`); the redirect chains for `http://www.alignlending.com/mortgage-location/flint-mi-48506/` and `/buy-home-auction/`.
- DataWise `datawise_search_console` queries "flint mortgage" and "refinanc" (property `7faa6221…`).
- Project standards: `00-project/BRIEF.md`, `scoring-rubric.md` §1, §3.6, §3.7, §6 and §7, and `brand-voice-and-compliance-guide.md` §5.2, §6, §7.2, §7.7 and §7.10.
- Other teams: `01-ctas/cta-report.md` §5.2, §7 and §8, plus `cta-recommendations.csv` row 2; `03-core-pages/products-b-report.md` §4.3; `08-audit/audit-core-pages-B.md` §8 K4; `04-city-pages/factcheck-group-1.csv`, `factcheck-group-3.csv`, `city-fixes.csv` and `consistency-sweep.md`; `05-content-keywords/blog-inventory.csv`.
