# Core pages review: Refinance + Home + Trust group

Scope: 11 URLs on alignlending.com: `/`, `/refinance/`, `/refinance/cash-out-vs-home-equity/`, `/refinance/home-equity-review/`, `/refinance/break-even-review/`, `/about-us/`, `/contact-us/`, `/reviews/`, `/samantha-shelton/`, `/why-we-dont-publish-rates/`, `/real-estate-agents/`.

Evidence: the 2026-11-15 crawl (`page_summary.csv`, `pages.jsonl`, `text/*.txt`, `inlinks.json`, `link_graph.json`, `images.json`), live JSON-LD fetched from 5 of the pages, DataWise Search Console for `sc-domain:alignlending.com` (90 days), DataWise People Also Ask (6 seeds) and web searches. Nothing here has been changed on the live site. Copy that describes how Align works is marked for Align approval, and claims I could not verify are tagged `[VERIFY]`.

Companion files: `refinance-home-trust-changes.csv` (343 implementation rows) and `scores-refinance-home-trust.csv` (99 aspect scores plus 11 overall scores).

## 1. Summary

**Group score: 76/100 (C).** Best: `/why-we-dont-publish-rates/` at 82 (B). Weakest: the homepage at 71 (C) and `/about-us/` at 72 (C). All 11 pages are well written, calm and compliant in tone. They lose points in five places:

1. **The homepage does not say plainly what a mortgage broker is or why that matters.** It has 460 impressions at position 11.7 for "mortgage broker" and 403 at 22.5 for "michigan mortgage broker", with zero clicks on either. It has no question headings, and six URLs compete for the phrase.
2. **Hub and trust pages get almost no contextual links.** `/refinance/` has 5 (the learn article `/learn/types-of-refinancing/` has 44). `/about-us/` has 3, `/real-estate-agents/` 5 and `/reviews/` 7. Branded and address queries land on `/product-loans/` and `/samantha-shelton/`.
3. **Two of the three refinance tools use slogans as H1s.** "Your house is not an ATM" and "Refinancing is not automatically a good idea" contain no keyword, and their titles are product names ("Home Equity Strategy Review"). The break-even topic earns no GSC impressions at all.
4. **Compliance and schema faults.** The homepage carries a self-serving `AggregateRating` and 24/7 `openingHours`. `/reviews/` republishes a review that praises "great rates". "Client review" quotes appear under "5.0 on Google" headers. The promise that reviews are "never edited or shortened" is broken on two refinance pages.
5. **AI-search gaps.** No page shows a visible reviewer or updated date. No reusable entity paragraph exists. Some FAQ answers are too thin to quote ("That is a conversation, not a formula"), and there is no comparison table or worked break-even example.

## 2. Scorecard

| Page | Intent & H1 | Heading structure | ATF answer | CTA effectiveness | Title/meta | Internal linking | E-E-A-T/trust | AI readiness | Accuracy/compliance | **Overall** |
|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 74 C | 56 F | 70 C | 68 D | 80 B | 70 C | 86 B | 60 D | 72 C | **71 C** |
| `/refinance/` | 76 C | 72 C | 80 B | 76 C | 70 C | 48 F | 78 C | 74 C | 84 B | **73 C** |
| `/refinance/cash-out-vs-home-equity/` | 78 C | 74 C | 76 C | 78 C | 66 D | 72 C | 84 B | 78 C | 84 B | **77 C** |
| `/refinance/home-equity-review/` | 62 D | 74 C | 72 C | 78 C | 62 D | 76 C | 84 B | 72 C | 86 B | **74 C** |
| `/refinance/break-even-review/` | 64 D | 76 C | 74 C | 80 B | 64 D | 82 B | 84 B | 76 C | 86 B | **76 C** |
| `/about-us/` | 66 D | 72 C | 78 C | 80 B | 78 C | 40 F | 88 B | 66 D | 78 C | **72 C** |
| `/contact-us/` | 70 C | 70 C | 82 B | 84 B | 80 B | 58 F | 86 B | 62 D | 88 B | **76 C** |
| `/reviews/` | 76 C | 66 D | 82 B | 80 B | 74 C | 52 F | 90 A | 72 C | 64 D | **73 C** |
| `/samantha-shelton/` | 78 C | 76 C | 62 D | 78 C | 76 C | 90 A | 94 A | 84 B | 76 C | **79 C** |
| `/why-we-dont-publish-rates/` | 88 B | 78 C | 86 B | 84 B | 86 B | 56 F | 86 B | 84 B | 90 A | **82 B** |
| `/real-estate-agents/` | 72 C | 76 C | 80 B | 84 B | 76 C | 52 F | 90 A | 80 B | 88 B | **78 C** |
| **Group mean** | 73 C | 72 C | 77 C | 79 C | 74 C | 63 D | 86 B | 73 C | 81 B | **76 C** |

Each score's one-sentence evidence rationale is in `scores-refinance-home-trust.csv` and is repeated in each page section below. The weakest aspect across the group is internal linking, then AI-search readiness and title/meta.

## 3. Findings ranked by impact

| # | Priority | Finding | Evidence | Fix |
|---|---|---|---|---|
| 1 | P0 | **Homepage underperforms for its money terms** | "mortgage broker": 460 impressions, position 11.7, 0 clicks. "michigan mortgage broker": 403 at 22.5. "mortgage broker michigan": 255 at 48.7. The H1 "A Michigan Mortgage Broker With More Options and Real Human Guidance" never names the wholesale-lender mechanism. The page has 0 question headings and no FAQ. Six URLs use "Michigan mortgage broker" in a title or H1. | New H1 and subhead (section 6.1), a new H2 "What does a mortgage broker do?" with lender-vs-broker and FAQ answers, title "Michigan Mortgage Broker, Multiple Lenders | Align Lending". Change the `/mortgage-michigan/` H1 and the `/about-us/` title so they stop competing. |
| 2 | P0 | **Self-serving review markup and false hours in schema** | The homepage FinancialService node carries `aggregateRating` {5.0, 123}, copied from Google, and `openingHours` "Mo-Su 00:00-23:59". The visible page says "Phone: 7 days a week, evenings included. Office: by appointment." Google ignores self-serving ratings for LocalBusiness/Organization and asks sites not to aggregate reviews from other sites. The crawl found AggregateRating on only one page: the homepage. | Replace the Organization node with the JSON-LD in section 5.2. |
| 3 | P0 | **Rate claim in the on-site review feed** | `/reviews/` shows Ben Davis (Feb 2025): "She's so sweet and has great rates." A testimonial that a business republishes becomes its own claim (FTC Endorsement Guides, 16 CFR 255), and the site's rate policy forbids rate claims. | Drop it from the curated feed; it stays on Google. Add one sentence explaining this to the "Are the reviews edited?" FAQ. |
| 4 | P0 | **/refinance/ and /about-us/ are link-starved** | Contextual inlinks: `/refinance/` 5, `/about-us/` 3, compared with `/learn/types-of-refinancing/` 44 and `/samantha-shelton/` 502. GSC sends "refinancing options" (421 impressions, position 11.9) to the learn article, "align lending waterford" (180, 13.7) to `/product-loans/`, and "align lending 2625 pontiac lake road" (195, 18.7) to `/samantha-shelton/`. | Eight new inbound links to `/refinance/` from the refinance learn cluster, plus the homepage card. Link the company name in the byline to `/about-us/` on 470+ articles. Let the learn article own "refinancing options" (section 4). |
| 5 | P1 | **Slogan H1s and product-name titles on two refinance tools** | The H1s "Your house is not an ATM" and "Refinancing is not automatically a good idea" contain no keyword. Their titles are "Home Equity Strategy Review" and "Refinance Break-Even Review" (43 characters each), and their metas are 123–125 characters. Searches for "break" and "worth" in GSC return no break-even or worth-it queries for the site. | New H1s: "Should you use your home equity? Start with what the money is for" and "Is refinancing worth it? Find your break-even in months". New titles and metas are in section 6. |
| 6 | P1 | **Testimonial source and editing inconsistencies** | "5.0 on Google across 123 reviews" headers on the three refinance tools sit over Nathan Lobo, Andrew Kuhn and Jason Sych, whom `/reviews/` labels "Client review". `/refinance/` shortens Sarah Cadieux's review with an ellipsis and a bracketed letter. `/refinance/break-even-review/` changes "breathe" to "breath". `/reviews/` promises "never edited or shortened". | Show only Google reviews under Google headers, use original wording everywhere, and label each card with its source. |
| 7 | P1 | **Thin answers where AI engines look** | Thin answers include "How much of my equity can I actually use?" → "a conversation, not a formula", "Can I change my mind later?" (14 words) and "Do I have to touch my first mortgage?" (18 words). There is no cash-out vs HELOC table, no break-even example, and no "2% rule" or "downside" answers, although People Also Ask surfaces these questions. | 28 new 40–60-word answers and one comparison table, written out exactly in section 6. |
| 8 | P1 | **Inconsistent facts across trust pages** | Three conflicts. (1) The homepage tax teaser uses 36.9 mills; `/research/michigan-property-tax-uncapping-study/` (revised Oct 27, 2026) uses a 36.0-mill statewide median. (2) Align is described as a "one-woman operation" where Samantha "handles each of her loans herself", but a CanvasRebel (2024) profile cites 20 loan originators and reviews name Kevin, Taylor, Ryan Greiner and Travis. (3) "Align is paid by the lender, not by a fee you pay Align" is unqualified. | Exact replacement text in sections 6.1 and 6.6. [VERIFY] the team size and compensation model with Align. |
| 9 | P1 | **Person entity incomplete** | `Person.award` on `/samantha-shelton/` omits NAMB Broker of the Year, which every refinance page displays. The award is spelled "Woman with Vision" in visible text and "Women With Vision" in schema. The homepage, about and contact pages output only a 5-property Person stub. One situations card on two pages is missing the opening of its quote. | Use the Person JSON-LD in section 5.3 and restore the quote, or insert `[NEEDS SAMANTHA QUOTE]`. |
| 10 | P1 | **No reviewer or updated line anywhere** | `visible_updated` is empty on all 11 pages, although the refinance pages make dated, rule-based claims (MCL 211.27a, the RESPA escrow refund, rescission). | Add "Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026" on the four refinance pages and the rate policy. |
| 11 | P1 | **Trust pages rarely linked from the trust strip** | "5.0 on Google, 123 reviews" appears 682 times sitewide but links to `/reviews/` only from the homepage. `/why-we-dont-publish-rates/` has 10 contextual inlinks and none from the homepage or `/refinance/`. | Link the trust strip in the shared hero component. The specific anchors are listed per page. |
| 12 | P2 | **Headings used as decoration** | Every page marks link-group labels ("Learn", "The company", "Other questions", "Start with your question") as H2s. The homepage marks 13 county names as H3s. | Demote them to styled non-heading labels, as listed per page. |

## 4. Query ownership and cannibalization

Final owner decisions. GSC figures are 90-day impressions and average position. The page mapping comes from the DataWise opportunities list where one exists.

| Query cluster | Evidence | Owner | Supporting pages and action |
|---|---|---|---|
| mortgage broker · michigan mortgage broker · mortgage broker michigan · mortgage broker near me · michigan mortgage broker near me | 460/11.7 (→ /) · 403/22.5 · 255/48.7 · 34/6.3 · 65/5.5 | `/` | `/mortgage-michigan/` H1 → "Where Align Lending lends in Michigan: county and city guides" (cross-team) · `/about-us/` title drops "Independent Michigan Mortgage Broker" · `/contact-us/` title drops "Mortgage Broker" |
| mortgage lender · michigan mortgage lender · mortgage lenders near me · michigan mortgage lender near me · mortgage banker near me | 185/5.6 · 106/14.7 · 87/14.4 · 69/5.8 · 68/14.9 (all → /) | `/` | New H3 "Mortgage broker or mortgage lender: what is the difference?" answers the lender intent honestly |
| mortgage broker vs bank · is it better to use a broker or a bank · how are brokers paid | michigan mortgage broker vs bank 18/1.0 | `/learn/benefits-of-working-with-mortgage-broker/` | Homepage FAQ gives a 50-word answer and links with "mortgage broker vs. bank vs. credit union" |
| is rocket mortgage a broker · rocket mortgage vs a mortgage broker | 18/5.8 · 16/3.6 · 12/6.3 | `/learn/rocket-mortgage-vs-mortgage-broker/` | Homepage link "Rocket Mortgage vs. an independent broker" (4 contextual inlinks today) |
| align lending · align lending llc · about align lending · align lending waterford | 1,293/5.0 (71 clicks) · "align lending" "waterford" 180/13.7 → /product-loans/ | `/about-us/` (entity home); `/` for the bare brand | Byline company link → `/about-us/`; new H1 and title with Waterford |
| align lending address · "2625 pontiac lake road" · "48328" · align lending phone | 195/18.7 → /samantha-shelton/ · 269/26.4 | `/contact-us/` | H1 "Contact Align Lending in Waterford, Michigan", phone in title, address ATF, inbound links from footer, Samantha page and Waterford city page |
| mortgage broker waterford | 17/1.3 | `/mortgage-lender-waterford-mi/` | Keep; link to `/contact-us/` with "visit our Waterford office" |
| samantha shelton · samantha shelton nmls · samantha shelton mortgage | page pos 3.7, 230 impressions | `/samantha-shelton/` | H1 adds role and place; address links out to `/contact-us/` |
| align lending reviews · samantha shelton reviews | no query rows yet | `/reviews/` | Title "Align Lending Reviews: Samantha Shelton, 5.0 on Google"; trust strip links sitewide |
| refinance mortgage michigan · michigan mortgage refinance · michigan refinance my mortgage · refinance home loan · mortgage refinance near me | 85/44.5 · 29/26.5 · 39/16.3 · 856/66.9 · 18/26.9 | `/refinance/` | 8 inbound links from the refinance learn cluster; homepage card |
| refinancing options · refinance options · types of refinance | 421/11.9 (→ /learn/types-of-refinancing/) · 123/54.3 | `/learn/types-of-refinancing/` | The SERP is informational ("7 types of refinance" lists from Chase, Freddie Mac, Fannie Mae, Rocket). `/refinance/` renames its H2 "Four common refinancing options" and links to the article |
| mortgage refinance calculator (michigan) | 8 contextual inlinks | `/mortgage-refinance-calculator/` | `/refinance/` and `/refinance/break-even-review/` link to it; it links back to both |
| is refinancing worth it · refinance break-even · when does refinancing make sense · when should you not refinance · 2% rule | no rows yet (gap) | `/refinance/break-even-review/` | New H1, title, example and 2% rule H2s |
| cash out refinance vs home equity loan · home equity vs cash-out refinance · heloc vs cash out refinance | 23/81.1 · 7/83.1 | `/refinance/cash-out-vs-home-equity/` | "vs" title, comparison table; `/product-loans/cashout-loans/` keeps "michigan cash out refinance" (81/42.5) |
| should I use my home equity · is it smart to take equity out · how much equity can I borrow · home equity loan to value | 7/74.6 · 6/24.3 · 7/18.9 | `/refinance/home-equity-review/` | `/learn/using-home-equity-wisely/` links in; drive-by appraisal queries (98 impressions) stay with `/learn/drive-by-appraisal/` |
| why no posted rates · what determines my rate · how to compare mortgage quotes · michigan mortgage refinancing rates (defensive) | michigan mortgage refinancing rates 16/1.0, 0 clicks | `/why-we-dont-publish-rates/` | New H2 "Where can I see today's average mortgage rates?" sends visitors to Freddie Mac PMMS and a Loan Estimate instead of publishing a rate |
| mortgage broker for real estate agents (Michigan) | no rows (B2B page) | `/real-estate-agents/` | Inbound links from the homepage, about, Samantha, VA and purchase pages |

Note: the DataWise query export has no landing-page dimension except for the opportunities list, so page mappings are given only where that list shows them. Bing Webmaster data is not connected, so Bing positions are unknown. Bing weights exact-match titles and on-page entity text more than Google does, which makes the title and H1 changes above the main Bing levers. Request a Bing export before the next review.

## 5. Entity and E-E-A-T

### 5.1 Reusable entity paragraphs (exact text)

**Long (69 words).** Use it as the first paragraph of `/about-us/` "Align Lending at a glance", in the press kit, and in the homepage FAQ intro:

> Align Lending LLC is an independent mortgage broker in Waterford, Michigan (NMLS #2041154), founded in August 2020 by Samantha Shelton, Broker Owner and Senior Loan Originator (NMLS #1647301). Align compares one application across multiple wholesale lenders for home purchases, refinances and home equity loans, and is licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas. The office is at 2625 Pontiac Lake Road, Waterford, MI 48328, phone 248-506-5727.

**Short (27 words).** Use it in the footer and under every author box:

> Align Lending (NMLS #2041154) is an independent mortgage broker in Waterford, Michigan, founded by Samantha Shelton (NMLS #1647301) in 2020. One application, compared across multiple wholesale lenders.

**Person (60 words).** Use it as the `/samantha-shelton/` summary and as the author bio on `/learn/`. [VERIFY award years]:

> Samantha Shelton is the Broker Owner and Senior Loan Originator of Align Lending, the independent mortgage brokerage she founded in Waterford, Michigan in August 2020. Licensed since May 2020 (NMLS #1647301), she is a Hall of AIME inductee, NAMB Broker of the Year and Women With Vision honoree, and she writes and reviews every guide in the Align Learn Center.

Keep these word-for-word on every page. AI engines resolve an entity more confidently when the same name, NMLS number, address and founding date appear in identical sentences across pages and match the schema.

### 5.2 Organization / FinancialService JSON-LD (replace the shared node)

Changes against the live node: remove `aggregateRating`, `openingHours`, `priceRange` and the 276 `City` items in `areaServed`. Add `geo`, `hasMap`, `contactPoint`, `slogan` and `knowsAbout`, an NMLS `identifier` with its URL, and a Google `sameAs` that uses the place ID from the site's own write-a-review link (`ChIJj2hf9jTrJIgRvZIAHI6grF0`) in place of the `maps.app.goo.gl` short link. Point `logo` at the current 400×185 WebP.

```json
{
 "@context": "https://schema.org",
 "@type": [
  "FinancialService",
  "Organization"
 ],
 "@id": "https://alignlending.com/#organization",
 "name": "Align Lending",
 "legalName": "Align Lending LLC",
 "url": "https://alignlending.com/",
 "description": "Align Lending LLC is an independent mortgage broker in Waterford, Michigan (NMLS #2041154), founded in August 2020 by Samantha Shelton, Broker Owner and Senior Loan Originator (NMLS #1647301). Align compares one application across multiple wholesale lenders for home purchases, refinances and home equity loans, and is licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas. The office is at 2625 Pontiac Lake Road, Waterford, MI 48328, phone 248-506-5727.",
 "slogan": "Understand your options before you decide.",
 "foundingDate": "2020-08",
 "founder": {
  "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton"
 },
 "logo": {
  "@type": "ImageObject",
  "@id": "https://alignlending.com/#logo",
  "url": "https://alignlending.com/wp-content/uploads/2026/10/align-lending-logo-400.webp",
  "width": 400,
  "height": 185
 },
 "image": {
  "@id": "https://alignlending.com/#logo"
 },
 "telephone": "+1-248-506-5727",
 "email": "samantha@alignlending.com",
 "address": {
  "@type": "PostalAddress",
  "streetAddress": "2625 Pontiac Lake Road",
  "addressLocality": "Waterford",
  "addressRegion": "MI",
  "postalCode": "48328",
  "addressCountry": "US"
 },
 "geo": {
  "@type": "GeoCoordinates",
  "latitude": 42.654091,
  "longitude": -83.339245
 },
 "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0",
 "contactPoint": [
  {
   "@type": "ContactPoint",
   "telephone": "+1-248-506-5727",
   "email": "samantha@alignlending.com",
   "contactType": "customer service",
   "areaServed": [
    "US-MI",
    "US-OH",
    "US-NC",
    "US-FL",
    "US-LA",
    "US-TX"
   ],
   "availableLanguage": "en"
  }
 ],
 "identifier": {
  "@type": "PropertyValue",
  "propertyID": "NMLS",
  "value": "2041154",
  "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154"
 },
 "areaServed": [
  {
   "@type": "State",
   "name": "Michigan"
  },
  {
   "@type": "State",
   "name": "Ohio"
  },
  {
   "@type": "State",
   "name": "North Carolina"
  },
  {
   "@type": "State",
   "name": "Florida"
  },
  {
   "@type": "State",
   "name": "Louisiana"
  },
  {
   "@type": "State",
   "name": "Texas"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Oakland County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Macomb County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Wayne County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Washtenaw County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Livingston County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Genesee County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "St. Clair County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Lapeer County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Monroe County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Lenawee County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Kent County, Michigan"
  },
  {
   "@type": "AdministrativeArea",
   "name": "Ottawa County, Michigan"
  }
 ],
 "knowsAbout": [
  "Mortgage brokerage",
  "Home purchase loans",
  "Mortgage refinancing",
  "Home equity loans",
  "HELOCs",
  "Cash-out refinancing",
  "FHA loans",
  "VA loans",
  "USDA loans",
  "Conventional loans",
  "Jumbo loans",
  "Michigan property taxes"
 ],
 "sameAs": [
  "https://www.facebook.com/alignwithalign/",
  "https://www.instagram.com/align.lending/",
  "https://www.linkedin.com/company/align-lending-llc",
  "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154",
  "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0"
 ]
}
```

### 5.3 Person JSON-LD (all pages that reference Samantha)

```json
{
 "@context": "https://schema.org",
 "@type": "Person",
 "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton",
 "name": "Samantha Shelton",
 "givenName": "Samantha",
 "familyName": "Shelton",
 "jobTitle": "Broker Owner and Senior Loan Originator",
 "url": "https://alignlending.com/samantha-shelton/",
 "image": "https://alignlending.com/wp-content/uploads/2025/08/Samantha4-scaled.jpg",
 "description": "Samantha Shelton is the Broker Owner and Senior Loan Originator of Align Lending, the independent mortgage brokerage she founded in Waterford, Michigan in August 2020. Licensed since May 2020 (NMLS #1647301), she is a Hall of AIME inductee, NAMB Broker of the Year and Women With Vision honoree, and she writes and reviews every guide in the Align Learn Center.",
 "worksFor": {
  "@id": "https://alignlending.com/#organization"
 },
 "identifier": {
  "@type": "PropertyValue",
  "propertyID": "NMLS",
  "value": "1647301",
  "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301"
 },
 "hasCredential": {
  "@type": "EducationalOccupationalCredential",
  "credentialCategory": "license",
  "name": "Mortgage loan originator license, NMLS #1647301",
  "recognizedBy": {
   "@type": "Organization",
   "name": "Nationwide Multistate Licensing System & Registry (NMLS)",
   "url": "https://www.nmlsconsumeraccess.org/"
  }
 },
 "award": [
  "Hall of AIME, Association of Independent Mortgage Experts, 2024",
  "NAMB Broker of the Year, National Association of Mortgage Brokers",
  "Women With Vision, 2023"
 ],
 "knowsAbout": [
  "Mortgage brokerage",
  "FHA loans",
  "VA loans",
  "USDA loans",
  "Conventional loans",
  "Jumbo loans",
  "Non-QM loans",
  "Mortgage refinancing",
  "Home equity",
  "First-time home buyers",
  "Michigan property taxes",
  "MSHDA down payment assistance"
 ],
 "sameAs": [
  "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301",
  "https://www.linkedin.com/in/align-lending-08ab48229/"
 ],
 "subjectOf": {
  "@type": "WebPage",
  "url": "https://alignlending.com/press/"
 }
}
```

[VERIFY] before publishing: the year of NAMB Broker of the Year and the exact Women With Vision award name. Also confirm `linkedin.com/in/align-lending-08ab48229/` is Samantha's personal profile; if it is not, remove it from `sameAs`. Add her personal Facebook or Instagram only if they exist and are public.

### 5.4 Review markup policy

- Do **not** mark up `aggregateRating` or `Review` on the Organization/FinancialService node anywhere. Google's 2019 change to review rich results treats ratings a business shows about itself (LocalBusiness/Organization) as self-serving and ignores them ([Google Search Central blog](https://developers.google.com/search/blog/2019/09/making-review-rich-results-more-helpful)). The review-snippet guidelines also ask sites not to aggregate reviews from other websites ([review snippet docs](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)). Every Align rating comes from Google.
- Keep the visible "5.0 on Google, 123 reviews" strip. It is honest, verifiable and links to Google. Render the number from the same Google-feed variable everywhere. The crawl found 682 instances, all reading 5.0 / 123, so the copy is consistent today.
- `FAQPage` markup can stay on `/reviews/`, the refinance pages, the rate policy and the agents page, and should be added to the new homepage and contact FAQs. Since August 2023 Google shows FAQ rich results only for a small set of authoritative sites, so this markup helps machine parsing and AI answers rather than earning SERP features.

### 5.5 NAP, licence and review-count consistency (checked across all 835 crawled text files)

| Item | Result |
|---|---|
| Street address | "2625 Pontiac Lake Road" ×36, no variant spellings. Other Pontiac Lake Road numbers appear only as township and county facilities on the Waterford city page |
| Phone | "248-506-5727" ×606, one format |
| NMLS | company 2041154 ×980, Samantha 1647301 ×1,585, no typos |
| Rating strip | "5.0 on Google, 123 reviews" or "across 123 reviews" ×682, no stale counts |
| Facebook URL | two forms: `facebook.com/105599291490093` in visible links, `facebook.com/alignwithalign/` in schema. Use the vanity URL in both |
| Google profile URL | `maps.app.goo.gl/wnRurH5E7AAwjkub6` (short link) in links and schema. Use the `place_id` URL in schema |
| Hours | Visible: "Phone: 7 days a week, evenings included · Office: by appointment". Schema: 24/7. Fix the schema |
| Award name | "Woman with Vision" (visible, 10+ pages) vs "Women With Vision" (schema and the /samantha-shelton/ Recognition block). Pick one [VERIFY] |
| City-guide count | Homepage says "See all 276 city guides"; the project inventory has 275 city pages. Confirm with 04-city-pages |

### 5.6 GBP and brand SERP

The GBP-tagged homepage URL `/?utm_source=google&utm_medium=organic&utm_campaign=gbp` shows separately in GSC (9 clicks, 822 impressions, position 2.8). Keep the UTM for GA4 attribution. The page already self-canonicalises to `https://alignlending.com/` (`canonical_ok = True`), so no action is needed beyond monitoring. The bare brand query "align lending" averages position 5.0 over 90 days, recently 1.7. Name-alike brands ("align credit union", "aligned mortgage") share the SERP, so consistent entity text and `sameAs` matter more than usual.

## 6. Page-by-page recommendations

### 6.1 Homepage — `/` — 71/100 (C)

**Target query and intent.** michigan mortgage broker / mortgage broker michigan (primary); mortgage broker, mortgage broker near me, michigan mortgage broker near me, michigan mortgage lender, mortgage lender(s) near me, mortgage banker near me (secondary). Intent: Commercial-local: find and vet a Michigan broker or lender to contact.

**GSC/PAA evidence.** Page: 63 clicks / 6,596 imprs / pos 14.3 (90 d). mortgage broker 460 imprs pos 11.7, 0 clicks; michigan mortgage broker 403 imprs pos 22.5; mortgage broker michigan 255 imprs pos 48.7; mortgage lender 185 imprs pos 5.6; michigan mortgage lender 106 imprs pos 14.7; mortgage lenders near me 87 imprs pos 14.4; michigan mortgage lender near me 69 imprs pos 5.8; michigan mortgage broker near me 65 imprs pos 5.5; mortgage banker near me 68 imprs pos 14.9. GBP-tagged URL /?utm_source=google&utm_medium=organic&utm_campaign=gbp adds 9 clicks / 822 imprs / pos 2.8.

**Cannibalization decision.** Six URLs target 'Michigan mortgage broker' in title or H1: / (title), /mortgage-michigan/ (H1 'Michigan Mortgage Broker Service Areas'), /about-us/ (title 'Independent Michigan Mortgage Broker'), /learn/why-work-with-align-lending/ (title 'Why Work With Align Lending, A Michigan Mortgage Broker'), /contact-us/ (title 'Waterford, MI Mortgage Broker') and /learn/benefits-of-working-with-mortgage-broker/ (title 'Mortgage Broker Vs. Bank Vs. Credit Union In Michigan'). DECISION: the homepage owns 'michigan mortgage broker', 'mortgage broker', 'mortgage broker near me' and the 'mortgage lender' variants. /mortgage-michigan/ moves to 'where we lend in Michigan' (service-area intent); /about-us/ moves to brand + Waterford; /contact-us/ to NAP queries; /learn/benefits-of-working-with-mortgage-broker/ keeps 'mortgage broker vs bank' (already pos 1 for 'michigan mortgage broker vs bank'); /learn/why-work-with-align-lending/ keeps 'why work with Align Lending' and links to / and /about-us/.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 74 | C | H1 'A Michigan Mortgage Broker With More Options and Real Human Guidance' carries the head term but never says what 'more options' means (multiple wholesale lenders), and /mortgage-michigan/ uses the same 'Michigan Mortgage Broker' H1 framing. |
| Heading structure | 56 | F | 13 H2s and 0 question headings; link-group labels ('Learn', 'About Align', 'Free guides') and 13 county names are marked up as H2/H3, and no heading answers 'what does a mortgage broker do' or 'how is a broker paid'. |
| Above-the-fold answer | 70 | C | 75 above-the-fold words with a strong line ('One application, shopped across multiple wholesale lenders') and three path cards, but atf_ctas=0, no 'no credit pull' friction-reducer ATF and no statement of who it serves. |
| CTA effectiveness | 68 | D | The main plan-builder CTA 'Build my plan' is a JS button with no href below the fold; 'Schedule a call with Samantha' and 'Start my application' appear only near the bottom; the ATF Refinance card skips the /refinance/ hub. |
| Title & meta | 80 | B | Title is 60 chars with the head term first; meta is 138 chars (under 140) and has no proof point (rating, Waterford, no credit pull). |
| Internal linking | 70 | C | 121 content links out dilute equity; 567 of 573 contextual inlinks use the anchor 'Home'; no link to the broker-vs-bank explainer or the rate policy. |
| E-E-A-T & trust | 86 | B | Both NMLS numbers, six licensed states, Equal Housing, office address, Samantha bio with awards and verifiable Google and NMLS links; no broker-compensation disclosure. |
| AI-search readiness | 60 | D | No question headings or FAQ, no single quotable entity sentence near the top; schema has a thin Person node and an AggregateRating Google treats as self-serving. |
| Accuracy & compliance | 72 | C | Self-serving AggregateRating (5.0/123) and 24/7 openingHours in schema; the property-tax teaser uses 36.9 mills while the Uncapping Study states 36.0; the 2026 jumbo limit ($832,750) is correct but needs a Jan 2027 update. |
| **Overall** | **71** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Independent mortgage broker · Waterford, Michigan · NMLS #2041154`
- H1: **A Michigan mortgage broker that shops your loan with multiple wholesale lenders**  (was: "A Michigan Mortgage Broker With More Options and Real Human Guidance")
- Subhead (49 words): A bank can offer only its own loans. Align Lending is an independent broker in Waterford, so one application goes to multiple wholesale lenders, and Samantha Shelton shows you the options side by side, tradeoffs included. Buying, refinancing or using equity, you leave the first conversation knowing your choices.
- Primary CTA: **Talk through your options** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Start my application** → `https://alignlending.com/start/`
- Trust line: No credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS #1647301 · Licensed in MI, OH, NC, FL, LA and TX
- Layout note: Keep the three path cards directly under the buttons, relabelled: 'Buying a home' → /start/?goal=buy · 'Refinancing' → /refinance/ (was /refinance/break-even-review/) · 'Checking a Loan Estimate' → /compare-loan-estimates/.

**Recommended H2/H3 outline (exact text)**

- H1 A Michigan mortgage broker that shops your loan with multiple wholesale lenders
  - H2 **[RENAME]** Build your mortgage plan in a few questions — _was 'Build your plan' (plan-builder module; keep the module)_
  - H2 **[NEW]** What does a mortgage broker do? — _place directly after the plan builder_
    > A mortgage broker is a licensed company that takes one application and compares it across several wholesale lenders instead of selling one lender's loans. Align Lending is an independent broker in Waterford, Michigan, NMLS #2041154. We do not fund or service loans. We find the lender whose rules and pricing fit your file and show you the difference. (58 words)
    - H3 **[NEW]** Mortgage broker or mortgage lender: what is the difference? — _captures the 'mortgage lender' queries the homepage already ranks for_
      > A lender funds the loan with its own money and offers its own programs. A broker does not fund loans; it places your application with a wholesale lender that does. With Align, the lender named on your Loan Estimate is the one whose program fits your file, chosen after comparing several. You work with Samantha from application to closing. (59 words)
  - H2 **[RENAME]** Why Michigan buyers and homeowners choose Align Lending — _was 'Why buyers choose Align Lending' (refinance and equity visitors were excluded)_
    - H3 **[RENAME]** Michigan rules a national call center misses — _was 'Local Market Experience'_
    - H3 **[RENAME]** Multiple wholesale lenders, one application — _was 'More Lender Options'_
    - H3 **[RENAME]** One person accountable for your file — _was 'Human Mortgage Guidance'_
    - H3 **[RENAME]** Secure document upload from your phone — _was 'Technology Without Losing the Human'_
  - H2 **[KEEP]** What our clients say — _label every card 'Google review' and keep 'Individual experiences. Results vary.'_
  - H2 **[RENAME]** Meet Samantha Shelton, Broker Owner and Senior Loan Originator — _was 'Meet Samantha Shelton'_
  - H2 **[RENAME]** Use your home equity without replacing your mortgage — _was 'Keep your first mortgage. Use your equity.' (same module on /refinance/; keyword-led wording here)_
    - H3 **[KEEP]** Home improvements
    - H3 **[KEEP]** Paying off other debt
    - H3 **[KEEP]** A large expense coming up
    - H3 **[RENAME]** Home equity loan, HELOC or cash-out refinance: how they differ — _was 'How it works'_
  - H2 **[RENAME]** Michigan loan programs we compare — _was 'Compare your loan options'; keep the six program H3s_
  - H2 **[RENAME]** Free Michigan mortgage calculators, no signup — _was 'Run your own numbers'; update the property-tax example (see accuracy)_
  - H2 **[RENAME]** Where we lend in Michigan — _was 'Start with your county, or go straight to your city'. DEMOTE the 13 county-name H3s to styled list labels (<p class>), they are navigation, not sections_
  - H2 **[RENAME]** Free Michigan homebuyer and refinance guides (PDF) — _was 'Free guides'. DEMOTE the H2s 'Learn' and 'About Align' to non-heading link-group labels_
  - H2 **[NEW]** Questions about working with a Michigan mortgage broker — _FAQ block before the office section; mark up as FAQPage_
    - H3 **[NEW]** How is Align Lending paid? — _[Align approval required: confirm Align never uses borrower-paid compensation]_
      > Align is paid by the wholesale lender that funds your loan, not by a separate fee you pay Align, and that compensation appears on your Closing Disclosure. Federal rules, 12 CFR 1026.36(d), do not let a loan originator's pay change with your interest rate or other loan terms. Talking with Samantha first costs nothing. (54 words)
    - H3 **[NEW]** Is it better to use a mortgage broker or a bank? — _link 'mortgage broker vs. bank vs. credit union' → /learn/benefits-of-working-with-mortgage-broker/_
      > It depends on your file. A bank can approve only what fits its own rulebook and price only its own loans. A broker can take the same application to another wholesale lender whose rules fit. If your file is simple, either can work; if it has a wrinkle, more lenders means more places to look before the answer is no. (60 words)
    - H3 **[NEW]** Does it cost anything to talk to a mortgage broker?
      > No. A first conversation with Samantha is free and needs no application and no credit pull. She asks what you are trying to do, looks at your situation and explains your options. A credit check happens only when you decide to apply, and only with your permission. You can stop after the first call. (54 words)
    - H3 **[NEW]** Can a mortgage broker get me a lower rate? — _link 'why we don't publish rates' → /why-we-dont-publish-rates/_
      > No broker can promise a lower rate. A broker can compare pricing from several wholesale lenders for the same file on the same day, which a single lender cannot. Your rate depends on your credit, equity, loan type, points and the market, and it is not yours until it is locked. That is why we don't publish rates. (58 words)
    - H3 **[NEW]** When should I talk to a mortgage broker? — _PAA question_
      > Earlier than most people think: before you shop for homes, before you list a home you are selling, or as soon as a refinance or equity question comes up. An early call gives time to fix a document or credit issue. If nothing needs to happen yet, Samantha will tell you that, and you can stop wondering. (57 words)
    - H3 **[NEW]** Where is Align Lending licensed? — _link 'Licensing and Disclosures' → /licensing/_
      > Align Lending LLC is licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas under NMLS #2041154, and Samantha Shelton is licensed under NMLS #1647301. Both records are public on NMLS Consumer Access. The office is at 2625 Pontiac Lake Road in Waterford, and most clients meet by phone, text or video. (52 words)
  - H2 **[RENAME]** Visit our Waterford office on Pontiac Lake Road, or call — _was 'Visit the Waterford office, or call'; link the address to /contact-us/_
  - H2 **[KEEP]** The first conversation does not have to turn into anything — _keep the three H3 steps_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Michigan Mortgage Broker | Buy And Refinance | Align Lending (60) | Michigan Mortgage Broker, Multiple Lenders | Align Lending (58) |
| Meta | Independent Michigan mortgage broker. We compare your scenario across multiple wholesale lenders and explain the tradeoffs. NMLS #2041154. (138) | Independent Michigan mortgage broker in Waterford. One application, compared across multiple wholesale lenders. Rated 5.0 on Google. No credit pull to talk. (156) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| Out: new FAQ answer 'Is it better to use a mortgage broker or a bank?' | mortgage broker vs. bank vs. credit union | https://alignlending.com/learn/benefits-of-working-with-mortgage-broker/ |
| Out: new FAQ answer 'Can a mortgage broker get me a lower rate?' | why we don't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |
| Out: ATF path card (replace link to /refinance/break-even-review/) | Refinancing | https://alignlending.com/refinance/ |
| Out: end of 'What does a mortgage broker do?' (GSC: 'is rocket mortgage a broker' pos 5.8, 'rocket mortgage vs a mortgage broker' pos 3.6) | Rocket Mortgage vs. an independent broker | https://alignlending.com/learn/rocket-mortgage-vs-mortgage-broker/ |
| Out: link group formerly under H2 'About Align' | For real estate agents | https://alignlending.com/real-estate-agents/ |
| Out: office section, on the street address | our Waterford office | https://alignlending.com/contact-us/ |
| In: /about-us/ entity paragraph | Align Lending, an independent Michigan mortgage broker | https://alignlending.com/ |
| In: /learn/benefits-of-working-with-mortgage-broker/ closing paragraph | Align Lending, a Michigan mortgage broker | https://alignlending.com/ |
| In: /mortgage-michigan/ intro (replace the H1 claim; see cannibalization) | Align Lending's homepage | https://alignlending.com/ |

**Accuracy, compliance and consistency**

- **P0 · Schema** (critical impact, low effort): Remove aggregateRating {ratingValue 5.0, reviewCount 123} from the FinancialService/Organization node. Google treats ratings an organization shows about itself as self-serving and ignores them for LocalBusiness/Organization, and the ratings are copied from Google, which the review-snippet guidelines say not to aggregate. It is the only page on the site with AggregateRating markup.
- **P0 · Schema** (high impact, low effort): Remove openingHours 'Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59' (24/7). The page says 'Phone: 7 days a week, evenings included. Office: by appointment.' Replace with a contactPoint (see entity section). Same node renders on /about-us/ and /contact-us/.
- **P1 · Accuracy** (medium impact, low effort): Calculator teaser 'Michigan property tax $5,535 a year · Planning number: a $300,000 home at 36.9 mills' conflicts with /research/michigan-property-tax-uncapping-study/ (revised Oct 27, 2026), which states the statewide median homestead rate is 36.0 mills. Replace with exact text: 'Michigan property tax $5,400 a year · Planning number: a $300,000 home at 36.0 mills, the statewide median homestead rate'. ($300,000 × 50% × 0.036 = $5,400.)
- **P1 · Accuracy** (medium impact, low effort): Jumbo card ('above $832,750, the 2026 conforming limit in every Michigan county') is correct per FHFA's Nov 25, 2025 release. FHFA announces the 2027 limit in late November 2026; update on Jan 1, 2027 and add the source link https://www.fhfa.gov/data/conforming-loan-limit.
- **P2 · Consistency** (low impact, low effort): 'See all 276 city guides' (homepage and /mortgage-michigan/ '276 Michigan city guides') vs the project inventory of 275 city pages. Confirm the count with the city-pages team and render it from one variable.
- **P2 · Consistency** (low impact, low effort): Samantha's bio links 'Facebook · Instagram · LinkedIn' point to company accounts (facebook.com/105599291490093, instagram.com/align.lending, linkedin.com/in/align-lending-08ab48229/). The Organization sameAs uses facebook.com/alignwithalign/. Use one Facebook URL everywhere and label them 'Align Lending on Facebook / Instagram / LinkedIn' unless they are Samantha's personal profiles [VERIFY].

### 6.2 Refinance hub — `/refinance/` — 73/100 (C)

**Target query and intent.** refinance mortgage michigan / michigan mortgage refinance (primary); michigan refinance my mortgage, refinance mortgage in michigan, refinance home loan, mortgage refinance near me, michigan mortgage refinancing guide (secondary). Intent: Commercial-investigational: a Michigan homeowner deciding whether and how to refinance, and with whom.

**GSC/PAA evidence.** refinance home loan 856 imprs pos 66.9; refinance mortgage michigan 85 / 44.5; michigan refinance my mortgage 39 / 16.3; michigan mortgage refinance 29 / 26.5; michigan mortgage refinancing guide 23 / 20.8; mortgage refinance near me 18 / 26.9; refinance mortgage in michigan 14 / 50.9. 'refinancing options' 421 imprs pos 11.9 maps to /learn/types-of-refinancing/ (GSC opportunities list). The SERP for 'refinance michigan' is dominated by rate tables (Zillow, SoFi, LendingTree, Chase, Credit Karma) plus credit unions.

**Cannibalization decision.** 'refinancing options' and 'refinance options' are informational list queries (the SERP is '7 types of refinance' articles from Chase, Freddie Mac, Fannie Mae, Rocket). DECISION: /learn/types-of-refinancing/ owns them (title 'Refinancing Options: 7 Types And Who Each One Fits', 44 contextual inlinks, 6 with the exact anchor 'refinancing options'). /refinance/ stops competing: rename its H2 'Four common refinancing options' and link to the learn article with 'all seven types of refinancing, compared'. /refinance/ owns the Michigan transactional terms above. /mortgage-refinance-calculator/ owns 'mortgage refinance calculator (michigan)'. /refinance/break-even-review/ owns 'is refinancing worth it' and 'refinance break-even'. /learn/refinancing/ (pillar, 62 inlinks) owns 'how refinancing works'.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 76 | C | H1 'Refinancing Your Michigan Mortgage' matches 'refinance mortgage michigan' (85 imprs, pos 44.5) but has no outcome or differentiator. |
| Heading structure | 72 | C | 5 question headings and a sound FAQ, but H2 'Four common refinancing options' competes with /learn/types-of-refinancing/ for 'refinancing options' and 'Loan options'/'Other questions' are link groups as H2. |
| Above-the-fold answer | 80 | B | Answers the core question in the first 25 words ('worth it when the change pays for itself while you still have the loan'), two CTAs and a no-credit-pull strip; the Michigan taxable-value point is buried in a bullet. |
| CTA effectiveness | 76 | C | Clear ATF pair ('Start with a conversation' / 'Run a break-even estimate'), but four different Calendly labels on one page and no CTA to the refinance calculator. |
| Title & meta | 70 | C | Title (48) 'Refinance Your Michigan Mortgage | Align Lending' is generic with no hook; meta (154) is good but has no proof point. |
| Internal linking | 48 | F | Only 5 contextual inlinks sitewide versus 44 for /learn/types-of-refinancing/; no /learn/ refinance article links up to the hub; no link to /mortgage-refinance-calculator/. |
| E-E-A-T & trust | 78 | C | Samantha name and NMLS in the hero, licensing footer and a cited MCL 211.27a, but no reviewer line, updated date or Sources block. |
| AI-search readiness | 74 | C | FAQPage with four specific answers (Loan Estimate sections, 30-day escrow refund, MCL 211.27a); no 40-60-word 'when does refinancing make sense' answer. |
| Accuracy & compliance | 84 | B | Facts check out (12 CFR 1024.34 escrow refund, MCL 211.27a); rescission line needs 'usually'; the Sarah Cadieux quote is shortened with an ellipsis although /reviews/ promises 'never edited or shortened'. |
| **Overall** | **73** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Refinance · Michigan`
- H1: **Refinance your Michigan mortgage when the numbers work**  (was: "Refinancing Your Michigan Mortgage")
- Subhead (55 words): A refinance is worth it when its savings repay the closing costs before you sell or refinance again. We compare refinance and home equity options from multiple wholesale lenders, show your break-even in months, and say so when keeping your current loan is the better answer. In Michigan, refinancing does not uncap your taxable value.
- Primary CTA: **Talk through your options** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Run a break-even estimate** → `https://alignlending.com/refinance/break-even-review/#break-even`
- Trust line: No application or credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301
- Layout note: Keep the 'What we work through' list; move 'Why a refinance does not reset your Michigan taxable value' into the subhead (done above) and replace that bullet with 'Whether a streamline refinance applies to your FHA, VA or USDA loan'.

**Recommended H2/H3 outline (exact text)**

- H1 Refinance your Michigan mortgage when the numbers work
  - H2 **[RENAME]** What do you want your refinance to do? — _was 'What are you trying to accomplish?'_
    - H3 **[RENAME]** Lower the payment: check your break-even — _was 'See If Refinancing Makes Sense'_
    - H3 **[RENAME]** Reach your home equity — _was 'Access Home Equity'_
    - H3 **[RENAME]** Compare cash-out, home equity loan and HELOC — _was 'Compare Ways to Access Equity'_
    - H3 **[KEEP]** Consolidate other debt
  - H2 **[NEW]** When does refinancing make sense? — _place after the goal cards; link 'break-even review' → /refinance/break-even-review/_
    > Refinancing makes sense when the monthly savings repay the closing costs before you expect to sell or refinance again, or when the new loan does something you need: replacing an adjustable rate, shortening the term or removing mortgage insurance. Divide the real cost by the monthly savings to get your break-even in months, then compare total interest. (57 words)
  - H2 **[RENAME]** What a refinance can change: rate type, term or cash — _was 'Four common refinancing options' (stops competing with /learn/types-of-refinancing/ for 'refinancing options'); add the line 'See all seven types of refinancing, compared' → /learn/types-of-refinancing/_
    - H3 **[KEEP]** Cash-out refinance
    - H3 **[RENAME]** Adjustable to fixed rate — _was 'Moving to a Fixed Rate'_
    - H3 **[RENAME]** Shorter term, such as 30 to 15 years — _was 'Shorter-Term Loan'_
    - H3 **[RENAME]** Longer term for a lower payment — _was 'Longer-Term Loan'_
    - H3 **[NEW]** Streamline refinance for FHA, VA and USDA loans — _two sentences + link 'how FHA, VA IRRRL and USDA streamlines compare' → /learn/streamline-refinancing/_
  - H2 **[RENAME]** Need cash but want to keep your current rate? — _was 'Keep your first mortgage. Use your equity.'; keep the four H3s_
  - H2 **[KEEP]** In a client's words — _replace the shortened Sarah Cadieux quote with the full review text (see accuracy)_
  - H2 **[RENAME]** Michigan refinance questions — _was 'Questions about refinancing'; keep the four existing Q&As and FAQPage schema, add the three below_
    - H3 **[KEEP]** What does a refinance cost, and where do I see it? — _add link 'what refinance closing costs include' → /learn/refinancing-closing-costs/_
    - H3 **[KEEP]** What are the steps to closing? — _edit: 'On a home you live in there is usually a three business day right of rescission after you sign...'_
    - H3 **[KEEP]** What happens to my escrow account and mortgage insurance?
    - H3 **[KEEP]** Does a refinance change my Michigan property taxes?
    - H3 **[NEW]** Will refinancing hurt my credit score? — _PAA; source CFPB 'shopping for a mortgage' guidance_
      > A refinance application includes a hard credit inquiry, which can lower a score a little for a short time. Scoring models generally count several mortgage inquiries made within a short shopping window as one, so comparing lenders does not multiply the effect. Talking with Samantha first involves no credit pull, so you can see whether a refinance is worth it. (60 words)
    - H3 **[NEW]** How soon can I refinance after buying? — _[VERIFY before publishing: Fannie Mae Selling Guide B2-1.3-03; HUD Handbook 4000.1 streamline; VA Circular 26-19-22]_
      > It depends on the loan. A rate-and-term refinance can often happen as soon as it saves money. A conventional cash-out refinance generally requires the current loan to be at least 12 months old, and FHA streamline and VA IRRRL refinances generally require 210 days and six payments. Samantha confirms the rule that applies to your loan. (56 words)
    - H3 **[NEW]** Can Align refinance a home outside Michigan?
      > Yes, in the states where Align Lending is licensed: Michigan, Ohio, North Carolina, Florida, Louisiana and Texas, under NMLS #2041154. The process is the same by phone, text, video and a secure online portal. The Michigan-specific points on this page, such as taxable value staying capped after a refinance, apply only to Michigan homes. (54 words)
  - H2 **[KEEP]** A review can end with no change — _keep the three steps_
  - H2 **[KEEP]** Related reading — _add 'All seven types of refinancing, compared' → /learn/types-of-refinancing/ and 'Michigan mortgage refinance calculator' → /mortgage-refinance-calculator/_
  - H2 **[KEEP]** Loan options — _DEMOTE to a non-heading link-group label; DEMOTE 'Other questions' the same way_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Refinance Your Michigan Mortgage | Align Lending (48) | Michigan Mortgage Refinance Review | Align Lending (50) |
| Meta | Refinance when it actually makes sense. Start with what you want to accomplish, see where your break-even sits, and compare the ways to reach your equity. (154) | Refinance your Michigan mortgage only when it pays. Compare options from multiple lenders, see your break-even in months, and talk it through. No credit pull. (158) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: /learn/types-of-refinancing/ closing paragraph | compare these refinance types for your own Michigan mortgage | https://alignlending.com/refinance/ |
| In: /learn/refinancing/ (pillar) intro | refinancing your Michigan mortgage | https://alignlending.com/refinance/ |
| In: /learn/refinancing-guide/ 'When to refinance' section | Michigan refinance review | https://alignlending.com/refinance/ |
| In: /learn/refinancing-closing-costs/ conclusion | see whether a refinance makes sense for your loan | https://alignlending.com/refinance/ |
| In: /learn/what-is-cash-out-refinance-loan/ (75 inlinks) closing CTA | Michigan refinance options | https://alignlending.com/refinance/ |
| In: /learn/benefits-of-rate-and-term-refinance/ conclusion | refinance your mortgage in Michigan | https://alignlending.com/refinance/ |
| In: /mortgage-refinance-calculator/ result panel | talk through your refinance options | https://alignlending.com/refinance/ |
| In: /product-loans/cashout-loans/ 'Other options' block | every way to refinance in Michigan | https://alignlending.com/refinance/ |
| Out: under renamed H2 'What a refinance can change' | all seven types of refinancing, compared | https://alignlending.com/learn/types-of-refinancing/ |
| Out: Related reading and the break-even answer | Michigan mortgage refinance calculator | https://alignlending.com/mortgage-refinance-calculator/ |
| Out: new H3 streamline card | how FHA, VA IRRRL and USDA streamlines compare | https://alignlending.com/learn/streamline-refinancing/ |
| Out: escrow and mortgage insurance answer | refinancing to remove mortgage insurance | https://alignlending.com/learn/refinancing-to-remove-mortgage-insurance/ |
| Out: cost answer | what refinance closing costs include | https://alignlending.com/learn/refinancing-closing-costs/ |
| Out: 'What a refinance can change' intro | why we don't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |

**Accuracy, compliance and consistency**

- **P1 · Compliance/consistency** (medium impact, low effort): The 'In a client's words' card shows 'Did my refi with Samantha. What a smooth process. … [A]ll steps explained…' (shortened and bracket-edited) while /reviews/ promises every review is 'never edited or shortened'. Show the review in full, or drop the card.
- **P2 · Accuracy** (low impact, low effort): 'On a home you live in there is a three business day right of rescission' — add 'usually'. Under 12 CFR 1026.23(f)(2) a refinance with the same creditor carries rescission only on new money.
- **P1 · E-E-A-T** (medium impact, low effort): Add a visible line under the hero: 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026', and a Sources block (CFPB Loan Estimate, 12 CFR 1024.34 escrow refund, MCL 211.27a).

### 6.3 Cash-out vs. home equity — `/refinance/cash-out-vs-home-equity/` — 77/100 (C)

**Target query and intent.** cash out refinance vs home equity loan (primary); home equity vs cash-out refinance, heloc vs cash out refinance, is it better to refinance or take out a home equity loan, difference between a refinance and a home equity loan (secondary). Intent: Informational-comparative with a near-term borrowing decision.

**GSC/PAA evidence.** home equity vs cash-out refinance 23 imprs pos 81.1; cash out vs home equity loan 7 / 83.1; cash out home equity michigan 7 / 37.1; is cash out refinance taxable 6 / 20.5. 'michigan cash out refinance' (81 / 42.5) belongs to /product-loans/cashout-loans/. PAA: 'Is it better to refinance a home or take out a home equity loan?', 'What is the downside of a cash-out refinance?', 'Is a HELOC better than a home equity loan?', 'What is the difference between a refinance and a home equity loan?', 'Is cash-out refinance rate higher?'.

**Cannibalization decision.** Competes with /product-loans/cashout-loans/ (owns 'michigan cash out refinance'), /learn/what-is-cash-out-refinance-loan/ (owns 'what is a cash-out refinance'), /learn/pros-and-cons-of-cash-out-refinancing/ (owns 'cash-out refinance pros and cons') and /learn/home-equity/ (owns 'home equity loans, HELOCs and second mortgages explained'). DECISION: this page owns every 'vs' comparison query; the others link to it with comparison anchors.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 78 | C | H1 names all three products but not the 'vs' phrasing searchers use ('home equity vs cash-out refinance', pos 81.1). |
| Heading structure | 74 | C | 10 question headings, but H3 'What actually decides it?' repeats its H2, 'What you will walk away knowing' is a CTA label as H3, and there is no side-by-side comparison section. |
| Above-the-fold answer | 76 | C | 107 ATF words describe the method ('You do not start with the product') before giving the one-line difference between the three structures. |
| CTA effectiveness | 78 | C | Tool CTA plus Calendly CTA ATF and a check-back form for not-ready visitors; the Calendly button is labelled 'Compare my options', which reads like the tool. |
| Title & meta | 66 | D | Title (59) lacks 'vs'; meta is 125 chars with no benefit or proof. |
| Internal linking | 72 | C | 25 contextual inlinks from relevant /learn/ and product pages with varied anchors; loan cards use the generic anchor 'How it works'; no link to /learn/personal-loan-vs-home-equity/. |
| E-E-A-T & trust | 84 | B | Samantha bio box with licensing and awards, Sources block (CFPB, Fannie Mae Selling Guide) and both NMLS IDs; no visible updated date. |
| AI-search readiness | 78 | C | Quotable opening answer and FAQPage (6 Qs), but two FAQ answers are under 20 words ('Can I change my mind later?') and there is no comparison table. |
| Accuracy & compliance | 84 | B | Structure and MCL 211.27a are accurate; testimonials under the '5.0 on Google' header include reviews /reviews/ labels 'Client review'. |
| **Overall** | **77** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Cash-out vs. home equity · Michigan`
- H1: **Cash-out refinance vs. home equity loan vs. HELOC: which fits your goal?**  (was: "Cash-out refinance, home equity loan or HELOC: start with the goal")
- Subhead (56 words): A cash-out refinance replaces your whole mortgage with a larger one. A home equity loan adds a second loan paid out once, and a HELOC is a line you draw on over time. If you want to keep your current rate, a second loan usually fits better. Answer three questions to see where your goal points.
- Primary CTA: **Compare my options in 3 questions** → `https://alignlending.com/refinance/cash-out-vs-home-equity/#equity-compare`
- Secondary CTA: **Talk through your options** → `https://calendly.com/samanthashelton`
- Trust line: No application or credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301
- Layout note: Swap the button order: the in-page tool matches the comparison intent, and its result panel already hands off to Samantha ('Compare your options with Samantha'). Calendly stays one tap away. A/B test for 4 weeks on booked calls.

**Recommended H2/H3 outline (exact text)**

- H1 Cash-out refinance vs. home equity loan vs. HELOC: which fits your goal?
  - H2 **[KEEP]** Is a cash-out refinance or a home equity loan better? — _replace the first paragraph with this 40–60-word answer; keep the MCL 211.27a paragraph below it_
    > Neither is better on its own. A cash-out refinance fits when you would replace your first mortgage anyway, or when your current rate is higher than today's options. A home equity loan or HELOC fits when you want to keep your first-mortgage rate and borrow only the new money. Closing costs on a cash-out apply to the whole balance. (59 words)
    - H3 **[KEEP]** Which structure do your answers point toward? — _the three-question tool_
    - H3 **[DEMOTE]** What you will walk away knowing — _CTA label, not a section; make it a styled <p>_
  - H2 **[NEW]** Side by side: cash-out refinance, home equity loan and HELOC — _comparison table (exact cells in the report); mark up as an HTML <table> with <th> row headers_

    | | Cash-out refinance | Home equity loan | HELOC |
    |---|---|---|---|
    | Your first mortgage | Replaced by a new, larger loan | Stays as it is | Stays as it is |
    | How you receive the money | Once, at closing | Once, at closing | Drawn as needed during the draw period |
    | Payments afterward | One mortgage payment | Two: your first mortgage plus the new loan | Two: your first mortgage plus the line |
    | Rate on the new money | The new rate applies to the whole balance | Usually fixed, on the new loan only | Usually variable, on what you draw |
    | Closing costs | On the whole new loan | On the second loan only, usually smaller | On the line, often smaller; some lenders add annual or early-closure fees |
    | Usually fits when | You would replace the first mortgage anyway | You can name one amount today | Costs will arrive over time |
    | Michigan taxable value | Stays capped (MCL 211.27a) | Stays capped | Stays capped |

  - H2 **[RENAME]** What decides which structure fits? — _was 'What actually decides the direction'_
    - H3 **[DEMOTE]** What actually decides it? — _repeats its H2; keep the paragraph under the H2_
    - H3 **[KEEP]** What happens to the rate you have now?
  - H2 **[NEW]** What is the downside of a cash-out refinance? — _PAA_
    > It replaces your whole mortgage, so a low existing rate is gone on the full balance, not just on the new money. Closing costs apply to the entire new loan, the term usually restarts, and more of your home's value is pledged as security. That is why the rate you hold today is the first number to check. (58 words)
  - H2 **[NEW]** Is a HELOC better than a home equity loan? — _PAA_
    > A HELOC fits money you will need off and on, because you draw and repay as you go, but its rate is usually variable. A home equity loan fits one amount you can name today, paid out once on a fixed schedule. Both leave your first mortgage and its rate in place, and both are secured by your home. (59 words)
  - H2 **[KEEP]** The loans to compare first — _change the three generic 'How it works' links to 'How a cash-out refinance works', 'How a home equity loan works', 'How a HELOC works'_
  - H2 **[KEEP]** About Samantha
  - H2 **[RENAME]** Sources — _was 'Where these rules come from'; add IRS Publication 936_
  - H2 **[RENAME]** Cash-out and home equity questions — _was 'Questions people actually ask'; keep the six Q&As, expand the two thin ones, add two_
    - H3 **[KEEP]** Do I have to touch my first mortgage? — _expand the 18-word answer to this text_
      > No. A home equity loan or HELOC sits behind your first mortgage and leaves its rate, balance and payment alone. Only a cash-out refinance replaces it. Leaving it alone usually makes sense when your current rate is lower than what a new first mortgage would carry, or when you need only a modest amount. (54 words)
    - H3 **[KEEP]** Can I change my mind later? — _expand the 14-word answer to this text_
      > Yes, but unwinding costs money. A HELOC or home equity loan can later be paid off or folded into a refinance, and a cash-out refinance can be refinanced again, each with new closing costs. Choosing the structure that fits the goal now is cheaper than paying twice, which is why the three questions come first. (55 words)
    - H3 **[NEW]** Does a cash-out refinance or home equity loan raise my Michigan property taxes? — _move the MCL 211.27a point here as well_
      > No. None of the three uncaps your taxable value. Michigan law treats a mortgage as a transfer for security, not a transfer of ownership (MCL 211.27a), so the cap stays in place. Your bill still changes with the yearly inflation cap and any millage changes, the same as if you had not borrowed. (53 words)
    - H3 **[NEW]** Is cash-out refinance money taxable? — _GSC 'is cash out refinance taxable' pos 20.5; external link IRS Publication 936_
      > Loan proceeds are borrowed money, not income, so they are generally not taxed as income. Whether the interest is deductible depends on how the money is used: IRS Publication 936 allows the deduction only on debt used to buy, build or substantially improve the home that secures it. Confirm your own situation with a tax professional. (56 words)
  - H2 **[KEEP]** What clients say — _show only reviews labelled 'Google review' under the '5.0 on Google' header, or label each card with its source_
  - H2 **[KEEP]** None of the three is better on its own
  - H2 **[KEEP]** Related reading — _add 'Personal loan or home equity? What to compare first' → /learn/personal-loan-vs-home-equity/_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Cash-Out Refinance, Home Equity Loan, HELOC | Align Lending (59) | Cash-Out Refi vs. Home Equity Loan vs. HELOC | Align Lending (60) |
| Meta | You cannot choose between these by asking which sounds better. Start with the goal and the structure that fits becomes clear. (125) | Cash-out refinance, home equity loan or HELOC? See what each does to your current mortgage and rate, what it costs, and which fits your goal. Michigan broker. (158) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: /product-loans/cashout-loans/ intro | cash-out refinance vs. home equity loan | https://alignlending.com/refinance/cash-out-vs-home-equity/ |
| In: /product-loans/heloc/ 'Is a HELOC right for you' section | compare a HELOC with a cash-out refinance | https://alignlending.com/refinance/cash-out-vs-home-equity/ |
| In: /learn/home-equity-loans-pros-and-cons/ conclusion | home equity loan or cash-out refinance? | https://alignlending.com/refinance/cash-out-vs-home-equity/ |
| Out: loan card (replace 'How it works') | How a cash-out refinance works | https://alignlending.com/product-loans/cashout-loans/ |
| Out: loan card (replace 'How it works') | How a home equity loan works | https://alignlending.com/product-loans/home-equity-loan/ |
| Out: loan card (replace 'How it works') | How a HELOC works | https://alignlending.com/product-loans/heloc/ |
| Out: Related reading | Personal loan or home equity? What to compare first | https://alignlending.com/learn/personal-loan-vs-home-equity/ |
| Out: new H2 'What is the downside of a cash-out refinance?' | cash-out refinance pros and cons | https://alignlending.com/learn/pros-and-cons-of-cash-out-refinancing/ |
| Out (external): new H3 'Is cash-out refinance money taxable?' | IRS Publication 936 | https://www.irs.gov/publications/p936 |

**Accuracy, compliance and consistency**

- **P1 · Compliance** (high impact, low effort): The 'What clients say · 5.0 on Google across 123 reviews' block shows Nathan Lobo, Andrew Kuhn and Jason Sych, whom /reviews/ labels 'Client review' (Align's own record), not Google reviews. Placing them under a Google rating implies a source they do not have. Same block on /refinance/home-equity-review/ and /refinance/break-even-review/.
- **P2 · Voice** (low impact, low effort): Testimonials contain 'absolutely amazing' and 'She is amazing'. They are client words and may stay, but prefer reviews that describe the process for the single-quote cards.
- **P1 · E-E-A-T** (medium impact, low effort): Add 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026' under the hero (Article schema already exists; add dateModified and author @id).

### 6.4 Home equity review — `/refinance/home-equity-review/` — 74/100 (C)

**Target query and intent.** should I use my home equity (primary); is it smart to take equity out of your home, how much equity can I borrow, is a home equity loan a good idea, should i get a home equity loan, home equity loan to value (secondary). Intent: Informational-decision: deciding whether to borrow against equity at all.

**GSC/PAA evidence.** is a home equity loan a good idea 7 imprs pos 74.6; should i get a home equity loan 6 / 24.3; home equity loan to value 7 / 18.9; home equity ltv 7 / 55.6; drive by appraisal for home equity loan 60 / 40.4 and 38 / 42.8 (owned by /learn/drive-by-appraisal/). PAA: 'Is it smart to take out home equity?', 'What's the smartest thing to do with home equity?', 'What is the downside of taking a home equity loan?', 'Can you borrow 100% of your home equity?', 'What will disqualify you from a home equity loan?'.

**Cannibalization decision.** /learn/using-home-equity-wisely/ (36 inlinks) targets 'using home equity wisely'. DECISION: this page owns the yes/no decision queries ('should I', 'is it smart', 'how much can I borrow'); the learn article owns the long-form planning topic and links here with 'should you use your home equity?'.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 62 | D | H1 'Your house is not an ATM' is a slogan with no keyword; the searched question 'Should I use my home equity?' sits in an H2. |
| Heading structure | 74 | C | 10 question headings, but a CTA label as H3 and no section on how much equity can be borrowed (CLTV) or the downsides. |
| Above-the-fold answer | 72 | C | Defines equity and sets the 'why first' frame, but gives no direct answer or outcome in the first 60 words. |
| CTA effectiveness | 78 | C | Calendly primary plus equity-tool secondary ATF and a check-back form; three different labels for the same Calendly action. |
| Title & meta | 62 | D | Title 'Home Equity Strategy Review' (43) matches no query; meta is 123 chars. |
| Internal linking | 76 | C | 90 contextual inlinks ('Explore my equity options' x58, 'Start a home equity review' x23); no links to /learn/drive-by-appraisal/ or /learn/personal-loan-vs-home-equity/. |
| E-E-A-T & trust | 84 | B | Samantha bio box, CFPB sources, NMLS and licensing; no visible updated date. |
| AI-search readiness | 72 | C | 'How much of my equity can I actually use?' answers 'That is a conversation, not a formula', so AI engines will quote a competitor's CLTV explanation instead. |
| Accuracy & compliance | 86 | B | Credit-card consolidation answer is balanced and accurate; MCL 211.27a correct; same Google-label issue on testimonials. |
| **Overall** | **74** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Home equity review · Michigan`
- H1: **Should you use your home equity? Start with what the money is for**  (was: "Your house is not an ATM")
- Subhead (53 words): Equity is what your home is worth minus everything you owe against it. Using it makes sense when the new payment fits and the money solves a problem instead of moving it. Estimate your available equity below, then talk it through with Samantha before choosing a home equity loan, HELOC or cash-out refinance.
- Primary CTA: **Estimate your available equity** → `https://alignlending.com/refinance/home-equity-review/#available-equity`
- Secondary CTA: **Talk through my equity options** → `https://calendly.com/samanthashelton`
- Trust line: No application or credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301
- Layout note: Keep 'Your house is not an ATM' as the pull-quote above the tool; it is a strong line but it is not what people search.

**Recommended H2/H3 outline (exact text)**

- H1 Should you use your home equity? Start with what the money is for
  - H2 **[KEEP]** Should I use my home equity? — _open with this 40–60-word answer, then the existing definition paragraph_
    > Use home equity when you can name what the money is for, the new payment fits comfortably, and the loan will not outlast what it pays for. A renovation that adds value, or a debt plan you will stick to, can qualify. Spending that comes right back usually does not. Doing nothing is a legitimate answer. (56 words)
    - H3 **[KEEP]** How much equity do you have, and what is it for? — _the equity tool_
    - H3 **[DEMOTE]** What you will walk away knowing — _CTA label; make it a styled <p>_
  - H2 **[NEW]** How much of my home equity can I borrow? — _PAA 'Can you borrow 100% of your home equity?'; GSC 'home equity loan to value'_
    > Usually not all of it. Lenders cap the combined loan-to-value, meaning everything you would owe divided by the home's value, and the cap depends on the program, the property, occupancy and your credit. Home equity programs typically stop short of 100%. Your number comes from a valuation of the home and a full review. (54 words)
  - H2 **[KEEP]** Why comes before how
    - H3 **[KEEP]** What should I think about before borrowing against my home?
    - H3 **[KEEP]** When would you tell somebody not to?
  - H2 **[NEW]** What is the downside of a home equity loan? — _PAA_
    > The debt is secured by your house, so missed payments put the home at risk. You add a second payment and closing costs, and you reduce the equity you would keep if you sold. If values fall, you could owe more than the home is worth. Those risks are why the reason for borrowing comes first. (56 words)
  - H2 **[KEEP]** The loans to compare first — _descriptive 'How a … works' anchors, as on the cash-out page_
  - H2 **[KEEP]** About Samantha
  - H2 **[RENAME]** Sources — _was 'Where these rules come from'_
  - H2 **[RENAME]** Home equity questions — _was 'Questions people actually ask'; keep the six Q&As, rewrite one, add two_
    - H3 **[KEEP]** How much of my equity can I actually use? — _replace 'That is a conversation, not a formula' with a one-line pointer to the new H2 'How much of my home equity can I borrow?'_
    - H3 **[NEW]** Do I need an appraisal to borrow against my equity? — _GSC 'drive by appraisal for home equity loan' (98 imprs combined); link 'drive-by appraisal' → /learn/drive-by-appraisal/_
      > Usually some valuation is required. Depending on the lender and program it can be a full appraisal, an exterior-only drive-by appraisal or an automated valuation. The type changes the cost and the timeline, so ask which one applies before you apply. A low value lowers the amount you can borrow, not just the rate. (54 words)
    - H3 **[NEW]** Does borrowing against my equity change my Michigan property taxes?
      > No. A home equity loan, HELOC or cash-out refinance leaves your taxable value capped, because Michigan law treats a mortgage as a transfer for security, not a transfer of ownership (MCL 211.27a). Your tax bill still changes with the yearly inflation-rate cap and any millage changes, exactly as it would without the loan. (53 words)
  - H2 **[KEEP]** What clients say — _same Google-label fix as the cash-out page_
  - H2 **[KEEP]** Having equity is not a reason to access equity
  - H2 **[KEEP]** Related reading — _add 'Personal loan or home equity? What to compare first' → /learn/personal-loan-vs-home-equity/_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Home Equity Strategy Review | Align Lending (43) | Should You Use Your Home Equity? Free Review | Align Lending (60) |
| Meta | Equity is what your home is worth minus what you owe. Before discussing how to access it, the first question is always why. (123) | Equity is your home's value minus what you owe. Estimate yours, then see if a home equity loan, HELOC or cash-out refinance fits the reason. No credit pull. (156) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: /learn/using-home-equity-wisely/ intro | should you use your home equity? | https://alignlending.com/refinance/home-equity-review/ |
| In: /product-loans/home-equity-loan/ eligibility section | estimate how much equity you can borrow | https://alignlending.com/refinance/home-equity-review/#available-equity |
| Out: new H3 on appraisals | drive-by appraisal | https://alignlending.com/learn/drive-by-appraisal/ |
| Out: Related reading | Personal loan or home equity? What to compare first | https://alignlending.com/learn/personal-loan-vs-home-equity/ |
| Out: end of 'Should I use my home equity?' answer | how home equity loans compare with a HELOC and cash-out refinance | https://alignlending.com/refinance/cash-out-vs-home-equity/ |

**Accuracy, compliance and consistency**

- **P1 · Compliance** (high impact, low effort): Same as cash-out page: reviews labelled 'Client review' on /reviews/ appear under the '5.0 on Google across 123 reviews' header.
- **P1 · E-E-A-T** (medium impact, low effort): Add 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026' under the hero.

### 6.5 Break-even review — `/refinance/break-even-review/` — 76/100 (C)

**Target query and intent.** is refinancing worth it / refinance break-even (primary); when does refinancing make sense, when should you not refinance, 2% rule for refinancing, refinance break-even calculator, does refinancing restart the loan term (secondary). Intent: Informational-decision with a calculator task.

**GSC/PAA evidence.** No break-even or 'worth it' queries surface yet in the 90-day export (searches for 'break' and 'worth' returned nothing relevant), so this is a gap to open, not a ranking to defend. PAA for 'when does refinancing make sense': 'What is the 2% rule for refinancing?', 'Is it worth refinancing from 7% to 6%?', 'How much does it cost to refinance a $300,000 loan?'. PAA for 'refinance Michigan': 'When should you not refinance?', 'Will refinancing hurt my credit score?', 'What is the best time to refinance?'.

**Cannibalization decision.** /mortgage-refinance-calculator/ (8 contextual inlinks) owns 'mortgage refinance calculator'; /learn/should-you-refinance-before-rates-rise/ owns 'is refinancing worth it when rates are rising'. DECISION: this page owns 'is refinancing worth it' and 'refinance break-even'; it links to the calculator for full payment comparisons and the calculator links back for the decision.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 64 | D | H1 'Refinancing is not automatically a good idea' is a stance, not the query ('is refinancing worth it', 'refinance break-even'). |
| Heading structure | 76 | C | 10 question headings and a logical flow; CTA label as H3; no worked example or '2% rule' section that PAA surfaces. |
| Above-the-fold answer | 74 | C | Opens with 'Nobody should refinance because somebody called'; the break-even formula appears only after the hero. |
| CTA effectiveness | 80 | B | Consistent 'Get my refinance checkup' + 'Run a break-even estimate' pair and a check-back form. |
| Title & meta | 64 | D | Title 'Refinance Break-Even Review' (43) is a product name; meta is 125 chars. |
| Internal linking | 82 | B | 115 contextual inlinks, the best in the group ('Run a refinance break-even review' x80); links to the points-vs-credit calculator; no link to /mortgage-refinance-calculator/. |
| E-E-A-T & trust | 84 | B | Samantha bio box, CFPB sources, NMLS and licensing; no visible updated date. |
| AI-search readiness | 76 | C | The formula is stated plainly, but there is no illustrative example and no answers for 'is a 1% drop worth it' or 'does refinancing restart my term'. |
| Accuracy & compliance | 86 | B | Points and lender-credit treatment is correct; the Anirudh Papineni quote reads 'breath' here but 'breathe' on three other pages, against the 'never edited' promise. |
| **Overall** | **76** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Refinance break-even review`
- H1: **Is refinancing worth it? Find your break-even in months**  (was: "Refinancing is not automatically a good idea")
- Subhead (54 words): Break-even is what a refinance costs divided by what it saves you each month. If you will keep the loan longer than that, the change can pay for itself. Enter your numbers below, then check what a restarted term does to total interest. Sometimes the honest answer is to keep the loan you have.
- Primary CTA: **Run a break-even estimate** → `https://alignlending.com/refinance/break-even-review/#break-even`
- Secondary CTA: **Get my refinance checkup** → `https://calendly.com/samanthashelton`
- Trust line: No application or credit pull to talk · 5.0 on Google, 123 reviews · Samantha Shelton, NMLS 1647301
- Layout note: Move 'Nobody should refinance because somebody called and told them they could.' into the FAQ answer 'Somebody called me about refinancing'.

**Recommended H2/H3 outline (exact text)**

- H1 Is refinancing worth it? Find your break-even in months
  - H2 **[KEEP]** How do I know whether refinancing is worth it? — _open with this 40–60-word answer_
    > Divide what the refinance costs, closing costs and points minus any lender credit, by how much it lowers your monthly payment. The result is your break-even in months. If you expect to keep the loan well past that point, and the new term does not add more total interest than you save, the refinance is worth considering. (57 words)
    - H3 **[KEEP]** How long until the change pays for itself? — _the break-even tool_
    - H3 **[DEMOTE]** What you will walk away knowing — _CTA label; make it a styled <p>_
  - H2 **[NEW]** Refinance break-even example — _illustrative only; no rate, APR or payment amount, so no Reg Z trigger terms_
    > Illustrative only: if a refinance costs $4,500 in closing costs and points and saves $150 a month, the break-even is 30 months ($4,500 ÷ $150). Keep the loan five years and the change has paid for itself with room to spare. Sell or refinance again in two years and it has not, even though the monthly number dropped. (58 words)
  - H2 **[NEW]** What is the 2% rule for refinancing? — _PAA_
    > It is an old rule of thumb that a refinance pays only if the new rate is at least two percentage points lower. It ignores what the refinance costs and how long you keep the loan. A smaller drop can pay off over a long horizon; a bigger one may not if you move soon. Break-even is the better test. (60 words)
  - H2 **[KEEP]** The question underneath the question
    - H3 **[KEEP]** What reasons have nothing to do with the payment?
    - H3 **[RENAME]** When should you not refinance? — _was 'When is refinancing genuinely not worth it?' (matches PAA wording)_
  - H2 **[KEEP]** The loans to compare first
  - H2 **[KEEP]** About Samantha
  - H2 **[RENAME]** Sources — _was 'Where these rules come from'_
  - H2 **[RENAME]** Refinance break-even questions — _was 'Questions people actually ask'; keep the six Q&As, add two_
    - H3 **[NEW]** Is a one-point rate drop worth refinancing? — _PAA 'Is it worth refinancing from 7% to 6%?' rewritten without quoting rates_
      > Sometimes. On a large balance a one-point drop can repay closing costs within a few years; on a small balance it may take longer than you will keep the loan. Run the break-even with the costs and savings from an actual Loan Estimate, and count points and lender credits, before deciding the drop is worth it. (56 words)
    - H3 **[NEW]** Does refinancing restart my loan term?
      > Usually, unless you choose a shorter term. Restarting at 30 years can lower the payment but raise the total interest you pay over the life of the loan, so compare total interest, not just the monthly number. You can also ask for a term closer to the years left on your current loan, such as 20 or 25 years. (59 words)
  - H2 **[KEEP]** What clients say — _same Google-label fix; restore 'breathe' in the Anirudh Papineni quote to match the original (see accuracy)_
  - H2 **[KEEP]** Sometimes the answer is do nothing
  - H2 **[KEEP]** Related reading — _add 'Michigan mortgage refinance calculator' → /mortgage-refinance-calculator/ and 'What a no-closing-cost refinance really costs' → /learn/what-is-no-closing-cost-refinance/_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Refinance Break-Even Review | Align Lending (43) | Is Refinancing Worth It? See Your Break-Even | Align Lending (60) |
| Meta | Break-even is how long it takes for refinancing to make up what it cost. Sometimes the honest answer is to do nothing at all. (125) | Divide what a refinance costs by what it saves each month to get your break-even. Run your numbers free and see if keeping your current loan is the better call. (160) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: /learn/should-you-refinance-before-rates-rise/ intro | is refinancing worth it for you? | https://alignlending.com/refinance/break-even-review/ |
| In: /mortgage-refinance-calculator/ result panel | find your refinance break-even | https://alignlending.com/refinance/break-even-review/#break-even |
| Out: Related reading and the example H2 | Michigan mortgage refinance calculator | https://alignlending.com/mortgage-refinance-calculator/ |
| Out: 'How do I know whether refinancing is worth it?' answer | what refinance closing costs include | https://alignlending.com/learn/refinancing-closing-costs/ |
| Out: Related reading | What a no-closing-cost refinance really costs | https://alignlending.com/learn/what-is-no-closing-cost-refinance/ |
| Out: FAQ 'Somebody called me about refinancing. Should I listen?' | why we don't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |

**Accuracy, compliance and consistency**

- **P2 · Consistency** (low impact, low effort): Anirudh Papineni's review reads 'such a breath of fresh air' here but 'breathe of fresh air' on /samantha-shelton/, /refinance/cash-out-vs-home-equity/ and /refinance/home-equity-review/. /reviews/ says reviews are shown 'exactly as the client wrote it, spelling included'. Use the original wording everywhere.
- **P1 · Compliance** (high impact, low effort): Same as cash-out page: 'Client review' testimonials under the Google rating header.
- **P1 · E-E-A-T** (medium impact, low effort): Add 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026' under the hero.

### 6.6 About Align Lending — `/about-us/` — 72/100 (C)

**Target query and intent.** align lending / about align lending / align lending waterford / align lending llc / align lending nmls (brand entity queries). Intent: Navigational-trust: confirm who Align is before calling.

**GSC/PAA evidence.** align lending 1,293 imprs / 71 clicks / pos 5.0 (recent pos 1.7); "align lending" "waterford" 180 imprs pos 13.7 and "align lending" "alignlending.com" 135 / 19.9 both map to /product-loans/; /about-us/ itself: 1 click, 238 imprs, pos 21.1.

**Cannibalization decision.** Brand-plus-place queries land on /product-loans/ and /samantha-shelton/ because /about-us/ has 3 contextual inlinks while /samantha-shelton/ has 502 and /product-loans/ 382. DECISION: /about-us/ is the Organization entity home ('about', 'Waterford', 'LLC', 'NMLS'); /samantha-shelton/ is the Person entity home; /contact-us/ owns address and phone queries.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 66 | D | H1 'About Align Lending' has no place or entity type; "align lending" "waterford" (180 imprs, pos 13.7) maps to /product-loans/ instead. |
| Heading structure | 72 | C | Clear H2s, but three link-group labels are H2s and there is no section for recognition, press or editorial standards. |
| Above-the-fold answer | 78 | C | At-a-glance list states NMLS, founding date, six states, awards and office, but 117 ATF words open with a quote rather than a one-sentence definition. |
| CTA effectiveness | 80 | B | 'Schedule a call with Samantha' primary and 'Read how Align started' secondary; repeated at the end with a game-plan option. |
| Title & meta | 78 | C | Title (58) and meta (155) are solid, but the title reuses 'Independent Michigan Mortgage Broker', competing with the homepage. |
| Internal linking | 40 | F | Only 3 contextual inlinks sitewide, all 'About Align Lending'; 470+ bylines link to /samantha-shelton/ and never to the company page. |
| E-E-A-T & trust | 88 | B | NMLS Consumer Access link, licensing, compensation note, founding story, awards and reviews. |
| AI-search readiness | 66 | D | No FAQ or question headings; facts are scattered across the page; no reusable entity paragraph despite AboutPage schema. |
| Accuracy & compliance | 78 | C | 'Align is paid by the lender, not by a fee you pay Align' is unqualified [VERIFY]; 'handles each of her loans herself' sits beside a 2024 profile citing 20 loan originators, unexplained. |
| **Overall** | **72** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `About Align Lending · Waterford, Michigan`
- H1: **About Align Lending, an independent mortgage broker in Waterford, Michigan**  (was: "About Align Lending")
- Subhead (49 words): Align Lending LLC (NMLS #2041154) is an independent mortgage broker founded by Samantha Shelton in August 2020 and based on Pontiac Lake Road in Waterford. We compare one application across multiple wholesale lenders and explain the tradeoffs, so you understand your options before you decide. Licensed in six states.
- Primary CTA: **Schedule a call with Samantha** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Read how Align started** → `https://alignlending.com/about-us/#story`
- Trust line: No application or credit pull to talk · 5.0 on Google, 123 reviews · Verify NMLS #2041154 on NMLS Consumer Access
- Layout note: Keep Samantha's one-sentence quote directly under the buttons as a pull-quote.

**Recommended H2/H3 outline (exact text)**

- H1 About Align Lending, an independent mortgage broker in Waterford, Michigan
  - H2 **[NEW]** Align Lending at a glance — _turn the existing 'At a glance' list into an H2 section that opens with the sitewide entity paragraph (see entity section), then the fact list_
  - H2 **[KEEP]** How Align started — _Samantha's first-person story is an attributed quote; keep it_
  - H2 **[KEEP]** What to know before you call
    - H3 **[KEEP]** How a broker is paid — _replace body with this text [Align approval required]_
      > Align is paid by the wholesale lender that funds your loan, not by a separate fee you pay Align, and the amount appears on your Closing Disclosure. Federal rules (12 CFR 1026.36(d)) do not let a loan originator's pay change with your interest rate or other loan terms. (48 words)
    - H3 **[KEEP]** Who handles your loan — _replace body with this text [VERIFY team size and processor role]_
      > Samantha handles each of her loans herself, from the first conversation to closing, with a processor supporting her. Align also has other licensed loan officers, which is why a few Google reviews mention them; the calendar and phone number on this site are Samantha's. (44 words)
    - H3 **[KEEP]** Where Align is licensed
    - H3 **[KEEP]** What a first call costs
  - H2 **[NEW]** Recognition and press — _awards list plus 'Press and Media' → /press/_
    > Samantha Shelton is a Hall of AIME inductee, NAMB Broker of the Year and a Women With Vision honoree [VERIFY award years and exact names]. She has been quoted in National Mortgage Professional and Mortgage Professional America, including NMP's June 2025 profile 'The Mortgage Mom'. The press page lists the coverage. (51 words)
  - H2 **[NEW]** How the Align Learn Center is written — _two sentences + 'editorial policy' → /editorial-policy/_
    > Samantha writes and reviews every guide on this site against primary sources: HUD, the CFPB, the IRS, FHFA, the Fannie Mae and Freddie Mac selling guides and Michigan statutes. Guides carry a Sources list, publish no rates and no forecasts, and are corrected in place when a rule changes. The full standard is in our editorial policy. (57 words)
  - H2 **[KEEP]** What our clients say
  - H2 **[KEEP]** Talk to Samantha directly — _keep the three H3 steps_
  - H2 **[DEMOTE]** Start with your question — _link-group label; also DEMOTE 'Learn' and 'The company'. Add 'For real estate agents' → /real-estate-agents/ to 'The company'_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | About Align Lending | Independent Michigan Mortgage Broker (58) | About Align Lending | Waterford, MI Mortgage Broker (51) |
| Meta | Align Lending started as a one-woman mortgage brokerage in 2020. Meet Samantha Shelton and see how an independent broker helps you understand your options. (155) | Align Lending LLC, NMLS #2041154, is an independent mortgage broker in Waterford, MI, founded by Samantha Shelton in 2020. How we work and how we are paid. (155) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: sitewide author box on /learn/ articles ('Samantha Shelton, Broker Owner of Align Lending'), link the company name | Align Lending | https://alignlending.com/about-us/ |
| In: /samantha-shelton/ 'Company' line in At a glance | Align Lending, NMLS #2041154 | https://alignlending.com/about-us/ |
| In: /learn/why-work-with-align-lending/ intro | about Align Lending | https://alignlending.com/about-us/ |
| In: /contact-us/ 'The company' list | About Align Lending | https://alignlending.com/about-us/ |
| Out: entity paragraph | Align Lending, an independent Michigan mortgage broker | https://alignlending.com/ |
| Out: At a glance list | Office on Pontiac Lake Road in Waterford, Michigan | https://alignlending.com/contact-us/ |
| Out: new H2 | editorial policy | https://alignlending.com/editorial-policy/ |
| Out: new H2 'Recognition and press' | Press and Media | https://alignlending.com/press/ |
| Out: 'Where Align is licensed' | Licensing and Disclosures | https://alignlending.com/licensing/ |

**Accuracy, compliance and consistency**

- **P1 · Accuracy** (medium impact, low effort): 'Align is paid by the lender, not by a fee you pay Align.' is unqualified. If Align ever uses borrower-paid compensation the sentence is inaccurate. [VERIFY with Align] and use the replacement text, which also points to the Closing Disclosure.
- **P1 · Consistency** (medium impact, low effort): Sitewide copy says Align 'started as a one-woman operation' and 'Samantha handles each of her loans herself', while /samantha-shelton/ cites a CanvasRebel profile (Oct 2024) reporting 20 loan originators and /reviews/ shows reviews naming Kevin, Taylor, Ryan Greiner and Travis. Explain the team once on /about-us/ (replacement text above) [VERIFY current LO count].

### 6.7 Contact — `/contact-us/` — 76/100 (C)

**Target query and intent.** contact align lending / align lending phone number / align lending address / "align lending" "2625 pontiac lake road" / "align lending" "48328". Intent: Navigational: reach the business.

**GSC/PAA evidence.** "align lending" "2625 pontiac lake road" 195 imprs pos 18.7 (maps to /samantha-shelton/); "align lending" "48328" 269 / 26.4; contact mortgage broker michigan 56 / 16.0; /contact-us/ itself 1 click, 248 imprs, pos 28.6.

**Cannibalization decision.** NAP queries resolve to /samantha-shelton/ (502 inlinks) because /contact-us/ has 10 contextual inlinks and no address in its H1, title or ATF. DECISION: /contact-us/ owns NAP queries; 'mortgage broker waterford' stays with /mortgage-lender-waterford-mi/ (pos 1.3).

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 70 | C | H1 'Get in touch with Align Lending' has no place; NAP query "align lending" "2625 pontiac lake road" (195 imprs) lands on /samantha-shelton/. |
| Heading structure | 70 | C | 6 H2s with 1 question; three are link-group labels; no FAQ. |
| Above-the-fold answer | 82 | B | 55 ATF words with phone, text, calendar, hours and two CTAs; the street address is not above the fold. |
| CTA effectiveness | 84 | B | Calendly and tel CTAs ATF, inline SMS link and a short form with clear consent text. |
| Title & meta | 80 | B | Title (53) and meta (149) carry NAP and NMLS; the title could carry the phone number for NAP queries. |
| Internal linking | 58 | F | 10 contextual inlinks (state hubs and legal pages); the footer address, Samantha's page and the Waterford city page do not link here. |
| E-E-A-T & trust | 86 | B | Full NAP, NMLS, TCPA-style consent, privacy and terms links. |
| AI-search readiness | 62 | D | No FAQ, no map or directions, and the ContactPage has no contactPoint. |
| Accuracy & compliance | 88 | B | NAP is consistent sitewide: '2625 Pontiac Lake Road' x36 and '248-506-5727' x606 with no variants; the shared Organization node still carries 24/7 openingHours. |
| **Overall** | **76** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Contact Align Lending`
- H1: **Contact Align Lending in Waterford, Michigan**  (was: "Get in touch with Align Lending")
- Subhead (46 words): Call or text 248-506-5727, email samantha@alignlending.com, or book a time with Samantha Shelton. The phone is answered seven days a week, evenings included. Office visits at 2625 Pontiac Lake Road, Waterford, MI 48328 are by appointment. Talking costs nothing and needs no application or credit pull.
- Primary CTA: **Schedule a call with Samantha** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Call 248-506-5727** → `tel:+12485065727`
- Trust line: No application required · No credit pull to talk · 5.0 on Google, 123 reviews · Align Lending LLC, NMLS #2041154
- Layout note: Add a third, text-style link under the buttons: 'Text Samantha' → sms:+12485065727.

**Recommended H2/H3 outline (exact text)**

- H1 Contact Align Lending in Waterford, Michigan
  - H2 **[RENAME]** Send Samantha a message — _was 'Have a question?'_
  - H2 **[RENAME]** Office address, phone and hours — _was 'Office, hours and how to reach us'; add a static map image with alt 'Map of Align Lending, 2625 Pontiac Lake Road, Waterford, MI 48328' and 'Get directions' → https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0_
  - H2 **[NEW]** What happens after you reach out? — _[Align approval required: describes process]_
    > Samantha reads your message and replies by phone, text or email, whichever you asked for. The first conversation is about what you are trying to do, not a loan application. If a next step makes sense, she explains it and what it needs from you. If the honest answer is to wait, she says that too. (56 words)
  - H2 **[NEW]** Contact questions — _FAQPage_
    - H3 **[NEW]** Do I have to apply to talk with Samantha?
      > No. Calling, texting or booking a time does not start an application and does not involve a credit check. Sending a message is not a loan application, a credit decision or a preapproval. You decide whether to apply after you have seen your options, and a credit check happens only then, with your permission. (54 words)
    - H3 **[NEW]** Can I meet in person?
      > Yes, by appointment at the Align Lending office, 2625 Pontiac Lake Road, Waterford, MI 48328. Book a time on Samantha's calendar or call 248-506-5727 to set it up. Many clients never need to visit: applications, documents and signatures go through a secure online portal, and calls can be by phone or video. (52 words)
    - H3 **[NEW]** Which states does Align Lending serve?
      > Align Lending LLC is licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas under NMLS #2041154. Most clients are in southeast Michigan, but the process works the same anywhere Align is licensed. You can confirm both Align's and Samantha's licenses on NMLS Consumer Access before you call. (48 words)
  - H2 **[KEEP]** What our clients say
  - H2 **[DEMOTE]** Start with your question — _link-group label; DEMOTE 'Learn' and 'The company'; add 'About Align Lending' → /about-us/ and 'For real estate agents' → /real-estate-agents/_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Contact Align Lending | Waterford, MI Mortgage Broker (53) | Contact Align Lending | 248-506-5727 | Waterford, MI (52) |
| Meta | Contact Align Lending in Waterford, Michigan. Call 248-506-5727, email samantha@alignlending.com, or book a call with Samantha Shelton, NMLS 1647301. (149) | Align Lending, 2625 Pontiac Lake Road, Waterford, MI 48328. Call or text 248-506-5727, 7 days a week, or book a time with Samantha Shelton. No credit pull. (155) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: /samantha-shelton/ At a glance 'Company' line | 2625 Pontiac Lake Road, Waterford, Michigan 48328 | https://alignlending.com/contact-us/ |
| In: /mortgage-lender-waterford-mi/ intro | visit our Waterford office | https://alignlending.com/contact-us/ |
| In: homepage office section | our Waterford office | https://alignlending.com/contact-us/ |
| In: sitewide footer NAP block (make the address text link here; keep the separate 'Directions' map link) | Contact Align Lending | https://alignlending.com/contact-us/ |
| Out: 'The company' list | About Align Lending | https://alignlending.com/about-us/ |
| Out (external): office section | Get directions | https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0 |

**Accuracy, compliance and consistency**

- **P1 · Schema** (medium impact, low effort): ContactPage has no contactPoint or LocalBusiness detail of its own; the Organization node carries the 24/7 openingHours error (fix once in the shared node).

### 6.8 Reviews — `/reviews/` — 73/100 (C)

**Target query and intent.** align lending reviews / samantha shelton reviews / align lending google reviews. Intent: Navigational-trust: social proof before contacting.

**GSC/PAA evidence.** No review-intent brand queries in the 90-day export yet ('review' filter returned only non-brand terms). The page earns trust-strip clicks: '5.0 on Google, 123 reviews' appears 682 times sitewide but links to /reviews/ only from the homepage.

**Cannibalization decision.** None significant. The 'Situations Samantha sees' module (9 H3s) is duplicated verbatim on /samantha-shelton/; keep it there and link from here.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 76 | C | H1 fits but omits 'reviews' and 'Samantha Shelton', the words people search. |
| Heading structure | 66 | D | Good situation groups and a review-policy FAQ, but the 9-H3 'Situations Samantha sees' module duplicates /samantha-shelton/ and three link groups are H2s. |
| Above-the-fold answer | 82 | B | Says what the page is, how reviews are sourced, with filters and a trust strip; 131 ATF words is long. |
| CTA effectiveness | 80 | B | 'Ask Samantha about your own situation' primary, Google link secondary, repeated at the end with a call option. |
| Title & meta | 74 | C | Title (50) 'Client Reviews Of Samantha Shelton' misses 'Align Lending reviews'; meta 144. |
| Internal linking | 52 | F | 7 contextual inlinks; '5.0 on Google, 123 reviews' appears 682 times sitewide but links here only from the homepage. |
| E-E-A-T & trust | 90 | A | Source labels (Google vs client review), a link to each Google review, NMLS links and results-vary disclosures. |
| AI-search readiness | 72 | C | FAQPage on review policy helps, but there is no summary of what clients mention most that AI answers could quote. |
| Accuracy & compliance | 64 | D | The feed shows 'She's so sweet and has great rates' (Ben Davis, Feb 2025), a rate claim the site's policy forbids; 'never edited' is contradicted on /refinance/ and /refinance/break-even-review/; reviews name other LOs [VERIFY]. |
| **Overall** | **73** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Align Lending reviews`
- H1: **Align Lending reviews: what clients say about working with Samantha Shelton**  (was: "What clients say about working with Align Lending")
- Subhead (53 words): Align Lending is rated 5.0 on Google across 123 reviews. Reviews marked Google review match the Align Lending Google profile word for word, and every review on this page is shown exactly as written. Start with clients in a situation like yours, or read the Google feed, newest first. Individual experiences; results vary.
- Primary CTA: **Ask Samantha about your own situation** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Read every review on Google** → `https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0`
- Trust line: Never edited or shortened · No credit pull to talk · Samantha Shelton, NMLS 1647301
- Layout note: Render the rating and count from the same Google feed variable used by the trust strip (the FAQ says it already does). Keep the five filter chips.

**Recommended H2/H3 outline (exact text)**

- H1 Align Lending reviews: what clients say about working with Samantha Shelton
  - H2 **[KEEP]** Reviews from people in a situation like yours — _keep the four H3 groups_
  - H2 **[KEEP]** Reviews from Google, newest first — _remove the Ben Davis review from the on-site feed (see compliance); it stays on Google_
  - H2 **[RENAME]** Check Samantha's license before you call — _was 'Look Samantha up before you call'_
  - H2 **[KEEP]** Questions about these reviews — _keep FAQPage; do NOT add Review or AggregateRating markup_
    - H3 **[KEEP]** Where do these reviews come from?
    - H3 **[KEEP]** Are the reviews edited? — _add: 'The on-site feed is a selection; a review that comments on rates or pricing is left on Google but not repeated here, because Align does not advertise rates.'_
    - H3 **[KEEP]** How does the rating at the top stay current?
    - H3 **[KEEP]** Why do some reviews name someone other than Samantha? — _align wording with the new /about-us/ 'Who handles your loan' text_
    - H3 **[KEEP]** How do I leave a review?
  - H2 **[DEMOTE]** What usually comes up, in her words — _remove the duplicated 9-H3 module; replace with one sentence and the link 'situations Samantha sees most' → /samantha-shelton/_
  - H2 **[KEEP]** Talk to somebody. That's it. — _keep the three H3 steps_
  - H2 **[DEMOTE]** Start with your situation — _link-group label; also DEMOTE 'About Align Lending' and 'Verify and connect'_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Client Reviews Of Samantha Shelton | Align Lending (50) | Align Lending Reviews: Samantha Shelton, 5.0 on Google (54) |
| Meta | Read what Align Lending clients say, grouped by situation: first-time buyers, refinances, communication and agents, with a link to every review. (144) | Align Lending and Samantha Shelton reviews, grouped by situation: first-time buyers, refinances and agents. Rated 5.0 on Google. Every review shown as written. (159) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: make the sitewide hero trust-strip text a link on every page that shows it (currently only the homepage links it) | 5.0 on Google, 123 reviews | https://alignlending.com/reviews/ |
| In: /about-us/ 'What our clients say' block | Read client reviews | https://alignlending.com/reviews/ |
| Out: replaces the duplicated module | situations Samantha sees most | https://alignlending.com/samantha-shelton/ |
| Out: 'From a real estate agent' group (keep) | how working with Samantha on a shared buyer goes | https://alignlending.com/real-estate-agents/ |

**Accuracy, compliance and consistency**

- **P0 · Compliance** (critical impact, low effort): Remove from the on-site feed: Ben Davis (Feb 2025) 'Taylor is the best. She's so sweet and has great rates.' Republishing a testimonial makes its claims Align's (FTC Endorsement Guides, 16 CFR 255.1) and the site's rate policy forbids rate claims. The page already says the feed 'holds a selection', so omitting it is not editing.
- **P2 · Compliance** (medium impact, low effort): Consider omitting 'hands down the best mortgage option' (Travis Krakowski, Aug 2024) and 'clear to close the same day, that's unheard of in the industry' (Abdul Haidous, Feb 2026) from the curated feed: unverifiable superlative and an atypical-speed claim.
- **P1 · Accuracy** (medium impact, low effort): Reviews name Kevin, Taylor, Ryan Greiner and Travis. [VERIFY] each is or was licensed under Align (NMLS #2041154); if any is no longer with Align, add '(former Align loan officer)' after the name.
- **P1 · Consistency** (medium impact, low effort): The 'never edited or shortened' promise is broken elsewhere: /refinance/ shortens Sarah Cadieux's review with an ellipsis and bracket, and /refinance/break-even-review/ corrects 'breathe' to 'breath'. Fix those pages.

### 6.9 Samantha Shelton — `/samantha-shelton/` — 79/100 (C)

**Target query and intent.** samantha shelton / samantha shelton mortgage / samantha shelton nmls / samantha shelton align lending. Intent: Navigational-trust: vet the person (author and loan originator).

**GSC/PAA evidence.** Page: 2 clicks, 230 imprs, pos 3.7. No 'samantha' queries in the export (name queries may be anonymised). NAP query "align lending" "2625 pontiac lake road" (195 imprs) wrongly lands here.

**Cannibalization decision.** Pulls NAP queries away from /contact-us/ because of 502 byline inlinks. Keep the address but link it to /contact-us/; link 'Align Lending' to /about-us/.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 78 | C | H1 'Samantha Shelton' is the exact name query and the page averages pos 3.7, but the H1 carries no role or place. |
| Heading structure | 76 | C | Logical bio structure, but two long H3 modules (9 situations, 8 subjects) and award H3 wording that differs from schema. |
| Above-the-fold answer | 62 | D | Only 35 ATF words: name, NMLS and two CTAs; the summary sits under the first H2. |
| CTA effectiveness | 78 | C | 'Schedule a call with Samantha' and 'Read what she writes' fit a person page; no agent or contact path. |
| Title & meta | 76 | C | Title (57) has no brand; meta 137 (under 140). |
| Internal linking | 90 | A | 502 contextual inlinks via bylines; links to press and Learn hubs. |
| E-E-A-T & trust | 94 | A | License with verify link, company NMLS, background, dated press citations, podcast quotes and editorial standards. |
| AI-search readiness | 84 | B | Rich ProfilePage and Person schema (knowsAbout, award, sameAs) and a quotable summary; Person.award omits NAMB Broker of the Year. |
| Accuracy & compliance | 76 | C | A situations card is missing the start of its quote; NAMB award missing from schema; '20 loan originators' vs 'one-woman operation'; 'Woman with Vision' vs 'Women With Vision'. |
| **Overall** | **79** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Broker Owner · Align Lending · NMLS #1647301`
- H1: **Samantha Shelton, Michigan mortgage broker and owner of Align Lending**  (was: "Samantha Shelton")
- Subhead (53 words): Samantha Shelton is the Broker Owner and Senior Loan Originator of Align Lending, the independent mortgage brokerage she founded in Waterford, Michigan in August 2020. Licensed since May 2020 (NMLS #1647301), she is recognized with Hall of AIME, NAMB Broker of the Year and Women With Vision, and writes the Align Learn Center.
- Primary CTA: **Schedule a call with Samantha** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Read what she writes** → `https://alignlending.com/samantha-shelton/#writes`
- Trust line: 5.0 on Google, 123 reviews · Verify NMLS #1647301 on NMLS Consumer Access · No credit pull to talk
- Layout note: Keep the eyebrow 'Author' as a small label after the new eyebrow, since this is also the author page for 470+ articles.

**Recommended H2/H3 outline (exact text)**

- H1 Samantha Shelton, Michigan mortgage broker and owner of Align Lending
  - H2 **[KEEP]** At a glance — _link 'Align Lending, NMLS #2041154' → /about-us/ and the street address → /contact-us/_
  - H2 **[KEEP]** How Samantha got here
  - H2 **[KEEP]** What she believes about this work
  - H2 **[RENAME]** Why a broker, and why it matters for your loan — _was 'Why a broker, and why it matters to your file'_
  - H2 **[RENAME]** In her own words: podcast interviews — _was 'Stories she tells on podcasts'; keep the four H3s_
  - H2 **[KEEP]** Recognition
    - H3 **[KEEP]** NAMB Broker of the Year — _add the year [VERIFY] and add this award to Person.award in schema (currently missing)_
    - H3 **[RENAME]** Women With Vision honoree — _was 'Woman with Vision'; schema says 'Women With Vision, 2023' [VERIFY exact award name] and use one spelling sitewide_
    - H3 **[KEEP]** Hall of AIME inductee — _add '(2024)' to match schema_
  - H2 **[NEW]** Press and media — _three bullets with dates + 'Press and Media' → /press/_
  - H2 **[KEEP]** What clients say
  - H2 **[KEEP]** What usually comes up, in her words — _canonical home of this module; fix the truncated 'The detail that seemed too small to mention' card (see accuracy)_
  - H2 **[KEEP]** What Samantha writes about — _keep the eight subject H3s_
  - H2 **[KEEP]** How this Learn Center is written and checked — _add 'Read the full editorial policy' → /editorial-policy/_
  - H2 **[KEEP]** Ask her yourself — _add 'Working with Samantha on a shared buyer' → /real-estate-agents/ beside the CTAs_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Samantha Shelton, Broker Owner And Senior Loan Originator (57) | Samantha Shelton, NMLS 1647301 | Align Lending Broker Owner (59) |
| Meta | Meet Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending in Waterford, MI. Former stay-at-home mom, NMLS #1647301. (137) | Samantha Shelton, NMLS #1647301, founded Align Lending in Waterford, MI in 2020. Hall of AIME and NAMB Broker of the Year. Her background, license and approach. (160) |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| Out: At a glance | Align Lending, NMLS #2041154 | https://alignlending.com/about-us/ |
| Out: At a glance | 2625 Pontiac Lake Road, Waterford, Michigan 48328 | https://alignlending.com/contact-us/ |
| Out: new H2 | Press and Media | https://alignlending.com/press/ |
| Out: 'Ask her yourself' | Working with Samantha on a shared buyer | https://alignlending.com/real-estate-agents/ |
| Out: Learn Center standards section | Read the full editorial policy | https://alignlending.com/editorial-policy/ |

**Accuracy, compliance and consistency**

- **P1 · Accuracy** (medium impact, low effort): Situations card 'The detail that seemed too small to mention' reads 'don't decide for us whether something matters. Ask.' — the opening of the quote is missing (same on /reviews/). Restore the full sourced quote or use [NEEDS SAMANTHA QUOTE: why small details matter on a mortgage file].
- **P1 · Schema** (medium impact, low effort): Person.award lists 'Hall of AIME, Association of Independent Mortgage Experts, 2024' and 'Women With Vision, 2023' but omits NAMB Broker of the Year, which the page and every refinance page display. Add it with its year [VERIFY].
- **P1 · Consistency** (medium impact, low effort): 'A CanvasRebel profile published in October 2024 reported that the company had grown to 20 loan originators' vs 'one-woman operation' and 'handles each of her loans herself' elsewhere. Keep the citation but reconcile via the new /about-us/ 'Who handles your loan' text [VERIFY].
- **P2 · Schema** (low impact, low effort): Person.sameAs has NMLS and linkedin.com/in/align-lending-08ab48229/; confirm that LinkedIn profile is Samantha's personal profile [VERIFY], and add the NMP 'The Mortgage Mom' article URL and the /press/ page as subjectOf.
- **P2 · Links** (low impact, low effort): 'verify on NMLS Consumer Access' carries rel=nofollow while every other NMLS link on the site is followed. Remove nofollow for consistency.

### 6.10 Rate policy — `/why-we-dont-publish-rates/` — 82/100 (B)

**Target query and intent.** why don't mortgage brokers publish rates / why are advertised mortgage rates different / what determines the mortgage rate I'm quoted / how to compare mortgage quotes; defensive for 'michigan mortgage rates' style queries. Intent: Informational-trust; catches rate-seeking visitors without publishing rates.

**GSC/PAA evidence.** michigan mortgage refinancing rates 16 imprs pos 1.0 (0 clicks); compare mortgage preapproval estimate from different lenders 10 / 1.0; compare mortgage question from different lenders 10 / 1.5. PAA for 'why are advertised mortgage rates different from quotes': 'What factors determine the mortgage interest rate a home purchaser is quoted?', 'How to compare mortgage quotes?', 'Are mortgage rates different than interest rates?'.

**Cannibalization decision.** /learn/how-to-compare-loan-estimates/ and /compare-loan-estimates/ own Loan Estimate comparison; /learn/annual-percentage-rate-apr/ owns APR. DECISION: this page owns 'why no posted rates' and 'what sets your rate', and links to those pages for the how-to.

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 88 | B | H1 matches the page purpose exactly and owns a brand-defining topic. |
| Heading structure | 78 | C | 4 question headings and descriptive H2s; some H2s ('Facts first, then numbers') are slogans rather than searched questions. |
| Above-the-fold answer | 86 | B | 64 ATF words: the answer, what to do, two CTAs and friction-reducers. |
| CTA effectiveness | 84 | B | 'Get a real number from Samantha' and 'Check a Loan Estimate you already have' fit the intent; repeated at decision points. |
| Title & meta | 86 | B | Title (51) and meta (151) are specific and compliant. |
| Internal linking | 56 | F | 10 contextual inlinks; not linked from the homepage, /refinance/ or /learn/what-is-mortgage-rate-lock/. |
| E-E-A-T & trust | 86 | B | Cites PMMS, CFPB and 12 CFR 1026.19(e)(2)(ii) inline; no reviewer line or updated date. |
| AI-search readiness | 84 | B | Quotable, sourced facts and FAQPage; no 'where can I see average rates' answer to catch rate-seeking visitors. |
| Accuracy & compliance | 90 | A | The Reg Z required-statement quote is exact and the PMMS borrower description is correct; 'No credit check to talk' differs from the sitewide 'No credit pull to talk'. |
| **Overall** | **82** | **B** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `Our rate policy`
- H1: **Why Align Lending doesn't publish mortgage rates**  (KEEP)
- Subhead (53 words): An advertised mortgage rate is priced for a borrower with top credit, 20% down and sometimes points paid up front. Yours depends on your credit, equity, loan type, lock period and that day's market. Samantha prices your file with multiple wholesale lenders, and your Loan Estimate is the official version of the numbers.
- Primary CTA: **Get a real number from Samantha** → `https://calendly.com/samanthashelton`
- Secondary CTA: **Check a Loan Estimate you already have** → `https://alignlending.com/compare-loan-estimates/`
- Trust line: No credit pull to talk · Any number before your Loan Estimate can change · 5.0 on Google, 123 reviews
- Layout note: H1 KEEP (exact match for the page purpose).

**Recommended H2/H3 outline (exact text)**

- H1 Why Align Lending doesn't publish mortgage rates
  - H2 **[RENAME]** Why doesn't Align Lending post rates online? — _was 'Facts first, then numbers'; open with this answer, keep the attorney analogy below it_
    > Because a posted rate is a price built for someone else's file. Mortgage pricing changes with credit score, down payment or equity, loan type, property, points and lock period, and it moves with the market daily. Align is a broker, so posting one rate would mean picking a lender's price before knowing which lender fits your loan. (57 words)
  - H2 **[KEEP]** Why it matters to you — _keep the three H3s_
  - H2 **[RENAME]** What does an advertised mortgage rate assume? — _was 'What a posted rate usually assumes'_
  - H2 **[RENAME]** What determines the mortgage rate you are quoted? — _was 'What actually sets your rate' (PAA wording); keep the three H3s_
  - H2 **[RENAME]** How a broker prices your loan across multiple lenders — _was 'Why a broker's number is worth waiting for'_
  - H2 **[RENAME]** How do you compare mortgage quotes from different lenders? — _was 'How to compare rates the right way' (PAA wording); add 'how to compare two Loan Estimates, line by line' → /learn/how-to-compare-loan-estimates/_
  - H2 **[NEW]** Where can I see today's average mortgage rates? — _catches rate-seeking queries without publishing a rate_
    > For a national benchmark, Freddie Mac publishes its Primary Mortgage Market Survey every Thursday. It describes a borrower with excellent credit and 20% down buying a single-family home, so treat it as a reference point, not your price. Your own rate comes from a Loan Estimate built on your file, and it is not final until it is locked. (59 words)
  - H2 **[KEEP]** What Samantha needs to price your loan
  - H2 **[KEEP]** What clients say
  - H2 **[KEEP]** Questions about rate quotes — _keep four Q&As and FAQPage; add one_
    - H3 **[NEW]** Is it more expensive to go through a mortgage broker? — _PAA; [Align approval required]_
      > Not by design. Align's compensation is paid by the wholesale lender, cannot change with your interest rate or loan terms under federal rules, and appears on your Closing Disclosure. To check, ask any lender for a Loan Estimate on the same loan, the same day and the same lock, and compare Section A and the APR. (56 words)

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | Why We Don't Publish Mortgage Rates | Align Lending (51) | Why We Don't Publish Mortgage Rates | Align Lending (51) KEEP |
| Meta | A posted mortgage rate is priced for someone else's file. Why Align Lending quotes only from your facts, what sets your rate and how to compare offers. (151) | A posted mortgage rate is priced for someone else's file. Why Align Lending quotes only from your facts, what sets your rate and how to compare offers. (151) KEEP |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: homepage FAQ 'Can a mortgage broker get me a lower rate?' | why we don't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |
| In: /refinance/ intro to 'What a refinance can change' | why we don't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |
| In: /learn/what-is-mortgage-rate-lock/ intro | why Align doesn't publish rates | https://alignlending.com/why-we-dont-publish-rates/ |
| In: /mortgage-refinance-calculator/ inputs note | why the calculator doesn't use a posted rate | https://alignlending.com/why-we-dont-publish-rates/ |
| Out: compare-quotes H2 | how to compare two Loan Estimates, line by line | https://alignlending.com/learn/how-to-compare-loan-estimates/ |
| Out: compare-quotes H2, on 'the APR' | APR vs. interest rate | https://alignlending.com/learn/annual-percentage-rate-apr/ |

**Accuracy, compliance and consistency**

- **P2 · Consistency** (low impact, low effort): Trust strip says 'No credit check to talk'; every other page says 'No credit pull to talk'. Use 'No credit pull to talk'.
- **P2 · E-E-A-T** (low impact, low effort): Add 'Reviewed by Samantha Shelton, NMLS 1647301 · Updated November 2026'. The CFPB 'Explore interest rates' link should be re-checked quarterly; if the tool is retired, link the CFPB Loan Estimate explainer instead.

### 6.11 Real estate agents — `/real-estate-agents/` — 78/100 (C)

**Target query and intent.** michigan mortgage broker for real estate agents / lender for realtors michigan / working with a mortgage broker as a listing agent. Intent: B2B referral-partner evaluation (agent vetting a lender for a shared buyer).

**GSC/PAA evidence.** No agent-intent queries in the export ('realtor' and 'agent' filters returned only off-topic terms). Low search volume; the page's job is conversion of agents who arrive from direct, email or the agent-video outreach.

**Cannibalization decision.** None. Not linked from the homepage, /about-us/ or /samantha-shelton/ (5 contextual inlinks, all from /purchase/ sub-pages and /reviews/).

**Scorecard**

| Aspect | Score | Grade | Rationale |
|---|---|---|---|
| Intent & H1 | 72 | C | H1 'Working with Samantha on a shared client' fits agents but has no 'Michigan', 'real estate agents' or 'broker'. |
| Heading structure | 76 | C | 4 question headings and clear sections; H3 'In Samantha's words' is misfiled under the tools H2. |
| Above-the-fold answer | 80 | B | 119 ATF words with the plan-first promise, two CTAs and a how-she-works list. |
| CTA effectiveness | 84 | B | 'Call Samantha about a shared client' is specific and right for agents; tel plus Calendly. |
| Title & meta | 76 | C | Title (47) is clear but has no hook; meta (154) is specific. |
| Internal linking | 52 | F | 5 contextual inlinks, all from /purchase/ sub-pages and /reviews/; not linked from the homepage, /about-us/ or /samantha-shelton/. |
| E-E-A-T & trust | 90 | A | RESPA Section 8 and GLBA explained with CFR links, NMLS and a sourced uncapping figure. |
| AI-search readiness | 80 | B | FAQPage (4 Qs) with specific, quotable answers; no 'lender or broker' answer for agents. |
| Accuracy & compliance | 88 | B | RESPA and Reg X citations correct; uncapping figures ($1,814, about 50%) match /research/michigan-property-tax-uncapping-study/. |
| **Overall** | **78** | **C** | Unweighted mean |

**Rewritten above-the-fold (exact text)**

- Eyebrow: `For Michigan real estate agents`
- H1: **For Michigan real estate agents: working with Samantha on a shared buyer**  (was: "Working with Samantha on a shared client")
- Subhead (55 words): Samantha Shelton reviews income, assets, credit and documents before she writes a preapproval letter, then keeps you, the buyer and the lender on one plan with a Plan B for timing. As a broker, she can take a file that does not fit one lender to another. Align pays no referral fees; RESPA prohibits them.
- Primary CTA: **Call Samantha about a shared client** → `tel:+12485065727`
- Secondary CTA: **Pick a time to talk** → `https://calendly.com/samanthashelton`
- Trust line: She handles each of her loans herself · Phone 7 days a week, evenings included · 5.0 on Google, 123 reviews · NMLS 1647301
- Layout note: Keep 'She handles each of her loans herself · Phone: 7 days a week, evenings included'.

**Recommended H2/H3 outline (exact text)**

- H1 For Michigan real estate agents: working with Samantha on a shared buyer
  - H2 **[KEEP]** What stands behind her preapproval letter
  - H2 **[KEEP]** One plan before anybody is under contract — _keep the two H3s_
  - H2 **[KEEP]** If something about the financing worries you
  - H2 **[KEEP]** Files where an early conversation helps — _keep the three H3s_
  - H2 **[KEEP]** Why the listing's tax bill is not the buyer's — _figures match /research/michigan-property-tax-uncapping-study/ ($1,814; about 50%)_
  - H2 **[KEEP]** Numbers your buyer or seller can run on their own — _keep four tool H3s_
    - H3 **[DEMOTE]** In Samantha's words — _misfiled under the tools H2; make it a styled blockquote between sections_
  - H2 **[KEEP]** Who your buyer will be working with
  - H2 **[KEEP]** What people who work with her say
  - H2 **[KEEP]** No referral fees, no paid seats
  - H2 **[KEEP]** Questions agents ask — _keep four Q&As and FAQPage; add one_
    - H3 **[NEW]** Is Align Lending a lender or a broker?
      > A broker. Align does not fund loans; it places the buyer's application with a wholesale lender whose rules fit the file, and the Loan Estimate names that lender. For a listing agent, that means a file that does not fit one lender's guidelines can be taken to another, while Samantha stays the single point of contact through closing. (58 words)
  - H2 **[KEEP]** Before the house makes the decision feel urgent
  - H2 **[DEMOTE]** For the buyer, on their own time — _link-group label; also DEMOTE 'Michigan numbers' and 'About Align'_

**Title and meta**

| | Current | Recommended |
|---|---|---|
| Title | For Michigan Real Estate Agents | Align Lending (47) | Michigan Agents: One Plan for a Shared Buyer | Align Lending (60) |
| Meta | How Samantha Shelton works with Michigan real estate agents on a shared buyer: the preapproval review, one plan, VA offers and buy-before-you-sell timing. (154) | How Samantha Shelton works with Michigan real estate agents on a shared buyer: the preapproval review, one plan, VA offers and buy-before-you-sell timing. (154) KEEP |

**Internal links to add (exact anchor → URL)**

| Direction and placement | Anchor | Target |
|---|---|---|
| In: homepage link group (formerly H2 'About Align') | For real estate agents | https://alignlending.com/real-estate-agents/ |
| In: /samantha-shelton/ 'Ask her yourself' | Working with Samantha on a shared buyer | https://alignlending.com/real-estate-agents/ |
| In: /about-us/ 'The company' list | For real estate agents | https://alignlending.com/real-estate-agents/ |
| In: /product-loans/va-loans/ offer-strength section | how Samantha works with listing agents on VA offers | https://alignlending.com/real-estate-agents/ |
| In: /purchase/ hub, below the sub-page grid | For real estate agents | https://alignlending.com/real-estate-agents/ |
| Out: keep (already linked) | Property Tax Uncapping Study | https://alignlending.com/research/michigan-property-tax-uncapping-study/ |

**Accuracy, compliance and consistency**

- **P2 · Links** (medium impact, low effort): Not linked from the homepage, /about-us/ or /samantha-shelton/; add the five inbound links listed.

## 7. Facts checked

| Claim on site | Verdict | Source |
|---|---|---|
| Jumbo above $832,750, the 2026 conforming limit in every Michigan county (homepage) | Correct. FHFA baseline for 2026; no Michigan county is high-cost. Update in Jan 2027 | [FHFA 2026 CLL release](https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026) |
| A mortgage or refinance does not uncap Michigan taxable value (refinance pages) | Correct. MCL 211.27a(7) excludes a transfer for security and the assignment or discharge of a security interest | [MCL 211.27a](https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-211-27a) |
| Escrow refund within 30 days of payoff (/refinance/) | Correct | 12 CFR 1024.34(b) |
| Three-business-day right of rescission on a home you live in (/refinance/) | Mostly correct. Add "usually": same-creditor refinances rescind only new money | 12 CFR 1026.23(f)(2) |
| Required statement "Your actual rate, payment, and costs could be higher…" (rate policy) | Exact quote | 12 CFR 1026.19(e)(2)(ii) |
| Freddie Mac survey borrower: excellent credit, 20% down (rate policy) | Correct | [Freddie Mac PMMS](https://www.freddiemac.com/pmms) |
| Broker pay cannot vary with rate or terms (about) | Correct in substance | 12 CFR 1026.36(d)(1) |
| "Align is paid by the lender, not by a fee you pay Align" (about, why-work-with) | Unverified as a universal statement | [VERIFY with Align] |
| RESPA Section 8 bars referral fees (agents) | Correct | 12 U.S.C. 2607; 12 CFR 1024.14 |
| Taxable value rises about 50% after a sale; $1,814 added first-year tax on $300,000 at the statewide median homestead rate (agents) | Matches Align's study | /research/michigan-property-tax-uncapping-study/ |
| $5,535 a year on a $300,000 home at 36.9 mills (homepage teaser) | Inconsistent with the study's 36.0-mill statewide median. Use $5,400 at 36.0 mills | same study |
| Cash-out proceeds are not income; interest deductible only for buy/build/improve (new copy) | Correct | [IRS Publication 936](https://www.irs.gov/publications/p936) |
| Conventional cash-out 12-month seasoning; FHA streamline and VA IRRRL 210 days / 6 payments (new copy) | Believed correct; [VERIFY] before publishing | Fannie Mae Selling Guide B2-1.3-03; HUD 4000.1; VA Circular 26-19-22 |

## 8. Evidence appendix

**GSC (DataWise, 90 days to 2026-11-13; 416 clicks, 181K impressions site-wide).** Filters run: refinanc (388 queries), broker (74), lender (179), align (27), waterford (2), samantha (0), cash out (18), heloc (40), home equity (92), near me (33), review (7), break (4, none relevant), worth (10, none relevant), realtor (7, none relevant). Top pages: `/` 63 clicks / 6,596 impressions / position 14.3; `/samantha-shelton/` 2 / 230 / 3.7; `/about-us/` 1 / 238 / 21.1; `/contact-us/` 1 / 248 / 28.6.

**People Also Ask (6 seeds).**
- *mortgage broker Michigan*: Is it best to have a mortgage broker? · Is it more expensive to go through a mortgage broker? · Who pays mortgage broker fees? · How do mortgage brokers get paid? · Does it cost anything to talk to a mortgage broker? · What is the downside of using a mortgage broker? · Is it better to use a mortgage broker or go through a bank? · When should you talk to a mortgage broker? · How trustworthy are mortgage brokers?
- *refinance Michigan*: Should I refinance my mortgage right now? · Will refinancing hurt my credit score? · What is the 2% rule for refinancing? · When should you not refinance? · How much does it cost to refinance a $300,000 loan? · What disqualifies you from refinancing? · How long should you wait until you refinance your house? · Do I need 20% equity to refinance?
- *cash out refinance vs home equity loan*: Is it better to refinance a home or take out a home equity loan? · What is the downside of a cash-out refinance? · Is a HELOC better than a home equity loan? · What is the difference between a refinance and a home equity loan? · Is cash-out refinance rate higher? · Do I need an appraisal for a HELOC?
- *when does refinancing make sense*: What is the 2% rule for refinancing? · Is it worth refinancing from 7% to 6%? · How much does it cost to refinance a $300,000 loan?
- *should I use my home equity*: Is it smart to take out home equity? · What's the smartest thing to do with home equity? · What is the downside of taking a home equity loan? · Can you borrow 100% of your home equity? · What will disqualify you from a home equity loan?
- *why are advertised mortgage rates different from quotes*: What factors determine the mortgage interest rate a home purchaser is quoted? · How to compare mortgage quotes? · Are mortgage rates different than interest rates?

PAA questions about named personalities (Dave Ramsey, Suze Orman) and generic affordability were left out on purpose: they are off-brand or belong to other teams.

**SERP notes (web search, US).** "mortgage broker michigan" is mostly directories and listings (galleon.io, BBB, Alignable, Expertise.com, brokernearme.com) plus thin `.pages.dev` sites. A clear entity homepage, plus directory citations from the off-page team, can compete. "refinance michigan" is dominated by rate tables (Zillow, SoFi, LendingTree, Chase, Credit Karma) and Michigan credit unions. Align will not publish rates, so `/refinance/` should compete on the break-even method and Michigan specifics (taxable value stays capped) and leave the rate-table intent alone. "refinancing options" is informational "types of refinance" content (Chase, Freddie Mac, Fannie Mae, Rocket), which supports giving that query to the learn article.

**External links.** Every external link on these 11 pages returned status 0 (ProxyError) in `external_status.jsonl`. Per the brief, that means blocked or unchecked, not broken. No internal broken links were found on these pages.

## 9. Cross-team notes

- **04-city-pages:** change the `/mortgage-michigan/` H1 to "Where Align Lending lends in Michigan: county and city guides". Confirm the 275 vs 276 city-guide count. Add "visit our Waterford office" → `/contact-us/` on `/mortgage-lender-waterford-mi/`.
- **01-ctas:** on the three refinance tools this report makes the in-page tool the primary CTA and Calendly the secondary (A/B test). On the homepage the primary becomes "Talk through your options", with path cards below. Calendly has four labels on `/refinance/`; the recommendation reduces it to one primary label per page.
- **02-links:** template-level changes: byline company link → `/about-us/`, trust strip → `/reviews/`, footer address → `/contact-us/`. Inbound links to `/refinance/` from 8 learn and product pages.
- **09-consistency:** one spelling for "Women With Vision"; "No credit pull to talk" everywhere; original review wording everywhere; reconcile the "one-woman operation" wording with team size; one Facebook URL.
- **08-audit:** P0 items are the schema node (aggregateRating, openingHours), the "great rates" review, the homepage H1/subhead/broker explainer, and inbound links for `/refinance/` and `/about-us/`.

