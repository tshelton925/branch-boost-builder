# Unified specs

**Team:** Consistency, cross-team conflict resolver · **Date:** 2026-11-17 · Each spec replaces the overlapping team proposals named in it. The matching `MASTER-CHANGES.csv` rows are `NAV-001` to `NAV-005` and `SPEC-001` to `SPEC-006`; the team rows they replace are SUPERSEDED there.

---

## 1. Navigation, menu and footer (NAV-001 to NAV-005)

**Owner:** 02-links (audit-core-pages-B K4), with the CTA team's mobile action row. Supersedes CTA rows 2 and 8, internal-link-fixes rows 10-17, products A rows 408 and 410, products B rows 54, 285, 373, 415, 457 and 467, calculators row 4 and city row 310.

### 1.1 Header (desktop), printed once

Elementor Nav Menu: dropdown breakpoint **None** (removes about 45 duplicate links per page). Popup 822 is the only mobile menu.

| # | Top-level item → URL | Items, in order |
|---|---|---|
| 1 | Buy a Home → `/purchase/` | Homebuyer Game Plan `/purchase/homebuyer-game-plan/` · First-Time Homebuyer `/purchase/first-time-homebuyer/` · Down Payment Assistance `/purchase/down-payment-assistance/` · Budget Review `/purchase/budget-review/` · Buy Before You Sell `/purchase/buy-before-you-sell/` · VA Homebuyer Plan `/purchase/va-homebuyer-plan/` · Self-Employed Homebuyer `/purchase/self-employed-homebuyer/` · Investment Property Financing `/purchase/investment-property-financing/` · Renovation Financing `/purchase/renovation-financing/` · Mortgage Process `/mortgage-process/` (Mortgage Readiness Review is removed: merged into the game plan) |
| 2 | Refinance → `/refinance/` | Break-Even Review `/refinance/break-even-review/` · Home Equity Review `/refinance/home-equity-review/` · Cash-Out vs. Home Equity `/refinance/cash-out-vs-home-equity/` · Mortgage Refinance Calculator `/mortgage-refinance-calculator/` |
| 3 | Loans → `/product-loans/` | **Buy:** Conventional Loans · FHA Loans · VA Loans · USDA Loans · HomeReady & Home Possible · Jumbo Loans · Physician Loans · Manufactured Home Loans. **Rate and term:** 30-Year Fixed · 15-Year Fixed · Adjustable Rate Mortgage · Buydown Loans (today's 30-/15-year labels stay until counsel rules on term names, D7/C1). **Self-employed and non-QM:** Non-QM Loans · Bank Statement Loans · 1099 Income Loans · Asset Depletion Loans · DSCR Loans · Non-Warrantable Condo Loans. **Home equity:** Home Equity Loan · HELOC · Cash-Out Refinance |
| 4 | Calculators → `/calculators/` | Mortgage Calculator · Home Affordability Calculator · Michigan Property Tax Calculator · Mortgage Refinance Calculator · All calculators |
| 5 | Learn → `/learn/` | The 8 category links as today. No individual articles |
| 6 | Service Areas → `/mortgage-michigan/` | Oakland County · Wayne County · Macomb County · Genesee County · Washtenaw County · Livingston County (`/mortgage-michigan/{county}-county/`) · All Michigan areas `/mortgage-michigan/` |
| 7 | About → `/about-us/` | Meet Samantha `/samantha-shelton/` · Client Reviews `/reviews/` · Contact Us `/contact-us/` |
| 8 | Plan and tools (replaces the 5 alignwithalign.com actions) | Build my homebuyer game plan `/purchase/homebuyer-game-plan/` · Estimate my payment `/mortgage-calculator/#p-pay` · Estimate my available equity `/refinance/home-equity-review/#available-equity` · Ask Samantha a question `/contact-us/`. "Save my plan" removed |

Header buttons, right side: **Apply Now** → `/start/` (with the page's `goal` parameter; header only, grandfathered) · **Contact Us** → `/contact-us/` · **248-506-5727** → `tel:+12485065727`.

Decisions behind it: Physician under Buy and Condo under non-QM (the physician page does not present the program as non-QM; links auditor K1); "Asset Depletion Loans" matches the products-B H1; the 4 sub-items under Calculators and the 6 county hubs under Service Areas are the links team's §5.1 items 5-6 (county hubs then pass sitewide links to 276 city pages); action labels use the CTA vocabulary so GA4 `link_text` stays comparable.

### 1.2 Mobile popup 822 (NAV-002)

Same tree and order. Pinned row above "Buy a Home": **Start my application** → `/start/` (same goal as the page header) · **Talk with Samantha** → `https://calendly.com/samanthashelton?utm_source=alignlending&utm_medium=website&utm_campaign=menu&utm_content=popup` with "No credit pull to talk" under it · **Call 248-506-5727** → `tel:+12485065727`. The hamburger becomes a `<button>` or gets `aria-label="Open menu"` and `role="button"`.

### 1.3 Footer, about 35 links from 48 (NAV-003)

- **Licensing and disclosures** `/licensing/` and **Texas consumer complaint notice** `/licensing/#texas-complaint-notice` (create the anchor id) replace the three `/licensing/` links.
- **Service areas** replaces the 10 product links: Oakland, Wayne, Macomb, Genesee, Washtenaw and Livingston County hubs, Florida `/mortgage-florida/`, North Carolina `/mortgage-north-carolina/`. No product list (products B's five footer additions are superseded). If Align insists on a product list, it lists all 21 with the header labels.
- Keep Research, Calculators, Learn categories, Editorial Policy and the PDF guides (consider one `/guides/` HTML landing page so the page, not the PDF, collects the sitewide links).
- NMLS #2041154 and the Equal Housing Opportunity logo.
- Trust strip "5.0 on Google, 123 reviews" links to `/reviews/` only while the count is maintained from one shared template; otherwise link "5.0 on Google" (guide §7.7).

### 1.4 Off-domain menu actions (NAV-004, P0)

Ship now: the four on-domain actions in 1.1 item 8, "Save my plan" removed (a plan label never opens the application). D4 decides the long term: if Align owns alignwithalign.com and a tool there works, it may return as an external item with `rel="nofollow noopener"`.

### 1.5 Breadcrumbs (NAV-005, P1)

One style sitewide (`nav.al-crumbs` from `/learn/`, or `[rank_math_breadcrumb]`); the visible trail equals BreadcrumbList. Replace the county hubs' "»" style.

| Page type | Trail |
|---|---|
| City | Home › Service Areas › {County} County › {City} (majority county; multi-county cities link back to every hub; counties without a hub: Home › Service Areas › Additional Michigan Cities › {City} until the hub exists) |
| County hub | Home › Service Areas › {County} County |
| Product | Home › Loans › {Product}; non-QM children Home › Loans › Non-QM Loans › {Program}; cash-out Home › Loans › Cash-Out Refinance |
| Purchase sub-page | Home › Buy a Home › {Page}; `/mortgage-process/` Home › Buy a Home › Mortgage Process |
| Refinance sub-page | Home › Refinance › {Page} |
| Calculator | Home › Calculators › {Tool} |
| Learn | as today |

---

## 2. CTA vocabulary and the Learn module mapping (SPEC-001)

### 2.1 Vocabulary

The single table in `brand-compliance-review.md` §5 is final and binding: Apply ("Start my application" → `/start/?goal={buy|refi|equity}`), header "Apply Now", Talk ("Talk with Samantha" → Calendly with UTMs; "No credit pull to talk" under it), the hub variant "Talk through your options" on `/purchase/` secondary, `/refinance/` ATF primary and the `/product-loans/` end-of-grid block only, Call, Text, Plan, Calculate, Compare and Learn labels, and the retired list.

Resolver additions (rules R-c4 and R-c7):
- `/start/` parameters: `goal` only `buy`, `refi` or `equity`; `from` only with values in `alignStartCfg.sources` (digit-free; N6). Cash-out pages use `goal=equity`. `stage`, `why` and `aim` are dropped.
- Calendly UTMs: `utm_source=alignlending&utm_medium=website&utm_campaign={home|purchase|refinance|product|calculator|city|state|learn|trust|menu|chrome}&utm_content={hero|mid|end|module|bar|popup}`. A bare `https://calendly.com/samanthashelton` or "Calendly" in any row means this URL.
- Vocabulary extensions for destinations the brand table does not cover (same verb pattern; brand editor to confirm): **See what self-employed files need** → `/purchase/self-employed-homebuyer/#doc-readiness` · **See Michigan down payment help** → `/purchase/down-payment-assistance/` · **Add up my cash to close** → `/purchase/first-time-homebuyer/#cash-to-close` · **Check when my PMI can end** → `/pmi-removal-calculator/#mi-end` · **Compare points and lender credits** → `/points-vs-lender-credit-calculator/#points-credit` · **Compare renting and buying** → `/rent-vs-buy-calculator/#rent-buy`. "Plan" labels never open Calendly; calculator pages drop "Use the calculator" once the tool sits above the fold.
- Retired with the readiness merge: "Take the readiness review" → "Build my homebuyer game plan" → `/purchase/homebuyer-game-plan/#readiness`; "Set a check-back date" → `/purchase/homebuyer-game-plan/#check-back`.

### 2.2 Template logic (Learn single template)

```
key  = first matching slug rule (2.4) ?? CLUSTER[crumb level 2] (2.3) ?? CLUSTER[crumb level 1] ?? 'process'
al-module : eyebrow "Next step", head, text, button (data-cta-mod="learn_<key>" data-cta-place="module"), link
             compact copy before the FAQ H2 when word_count > 2,500; the module stays at its current position (median 14%)
al-next   : always rendered (281 articles lack it); keep an existing end block that already matches the topic
secondary : breakeven/equity keys add the text link "See how we compare refinance options in Michigan" -> /refinance/ ;
            process/budget/fthb keys add "How buying a home with Align works" -> /purchase/   (internal-link-fixes rows 20-21, K4)
"start online" -> /start/?goal=<key goal> ; Calendly -> utm_campaign=learn&utm_content=module|end
answer box : top 50 Learn URLs by GSC impressions get a 40-60-word answer before the first H2 + one text link (SEO-016 template + SEO-017, SEO-018, SEO-019 for the top 3)
```

### 2.3 Cluster defaults

| Cluster hub (crumb level 2) | Key |
|---|---|
| `/learn/fha-loans/` | fha |
| `/learn/va-loans/` | va |
| `/learn/usda-and-assistance-programs/` | usda |
| `/learn/conventional-loans/` | conv |
| `/learn/jumbo-and-non-qm/` | nonqm (balloon, interest-only, non-conforming slugs: nonqm_structure) |
| `/learn/fixed-vs-arm/` | fixed_long |
| `/learn/loan-types/` (absorbs `/learn/loan-comparisons/`) | compare_programs: "Compare loan options" → `/product-loans/` |
| `/learn/specialty-financing/`, `/learn/home-buying-process/`, `/learn/buying-strategies/`, `/learn/how-mortgages-work/`, `/learn/home-types-and-living/` | process |
| `/learn/first-time-home-buyers/` | fthb |
| `/learn/preparing-to-buy/` | budget |
| `/learn/moving-and-settling/` | moving: "Plan my buy-before-you-sell move" + "See what your sale leaves you" |
| `/learn/credit-and-qualifying/` | credit (readiness questions now on the game plan) |
| `/learn/payments-escrow-servicing/` | servicing |
| `/learn/mortgage-glossary/` (absorbs `/learn/mortgage-terminology/`), `/learn/taxes-and-money/` | proptax (slugs with `repair`: repair) |
| `/learn/housing-market-trends/` | market: "Review my budget" + "Build my homebuyer game plan" |
| `/learn/how-rates-work/`, `/learn/rate-strategy/` | rates |
| `/learn/industry-updates-and-rules/` | industry |
| `/learn/home-equity/` | equity |
| `/learn/refinancing-guide/`, `/learn/types-of-refinancing/`, `/learn/refinance-situations/` | breakeven (product overrides fall back to breakeven unless the slug has `streamline`; `nonqm` and `heloan` added to the guard) |
| `/learn/home-improvement/` | improve |
| `/learn/home-maintenance/` | repair |
| `/learn/insurance-and-protection/` | monthly |
| Investing clusters (`investing-basics`, `investment-property-types`, `investor-market-analysis`, `rental-management`, `real-estate-investing`) | invest |
| Selling clusters (`selling-process`, `pricing-and-preparing`, `selling-strategies`) | sell (product overrides fall back to sell) |
| `/learn/selling-situations/` | sell_situation |

### 2.4 Final topic → CTA map

Built from the 281 live per-article rows after every correction; the most common combination per key is shown (rows count articles). Slug overrides as in `cta-report.md` §8b with the CTA auditor's five rule fixes (drop `modular` from manufactured; split `nonqm_structure`; add `nonqm` and `heloan` to the refinance guard; selling-cluster guard; `repair` in taxes-and-money). Reverse-mortgage modules are held until D1.

| Key | Articles | Module head | Button | Secondary link | End block | Start online |
|---|---:|---|---|---|---|---|
| `process` | 42 | From here to the keys | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | Talk with Samantha → `Calendly` | Review my budget → `/purchase/budget-review/#affordability` | `/start/?goal=buy` |
| `invest` | 29 | Does the property work as an investment? | Review an investment property → `/purchase/investment-property-financing/#rental-flow` | Talk with Samantha → `Calendly` | Check whether the rent covers the payment → `/product-loans/dscr-loans-michigan/#p-dscr` | `/start/?goal=buy` |
| `sell` | 29 | What your sale leaves you | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | Plan my buy-before-you-sell move → `/purchase/buy-before-you-sell/` | Talk with Samantha → `Calendly` | `/start/` |
| `breakeven` | 19 | Does the change pay for itself? | Calculate my break-even → `/refinance/break-even-review/#break-even` | Talk with Samantha → `Calendly` | Estimate my refinance payment → `/mortgage-refinance-calculator/#p-ref` | `/start/?goal=refi` |
| `credit` | 10 | How ready is your file? | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/#readiness` | Talk with Samantha → `Calendly` | Review my budget → `/purchase/budget-review/#affordability` | `/start/?goal=buy` |
| `reno` | 9 | Buying a house that needs work | Review renovation financing → `/purchase/renovation-financing/` | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | `/start/?goal=buy` |
| `property` | 8 | Questions about a specific property? | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | Estimate my property tax → `/michigan-property-tax-calculator/#mi-tax` | `/start/?goal=buy` |
| `monthly` | 8 | The whole monthly cost | Estimate my payment → `/mortgage-calculator/#p-pay` | Talk with Samantha → `Calendly` | Estimate my property tax → `/michigan-property-tax-calculator/#mi-tax` | `/start/?goal=buy` |
| `proptax` | 7 | Your tax bill as the new owner | Estimate my property tax → `/michigan-property-tax-calculator/#mi-tax` | Talk with Samantha → `Calendly` | Read the 2026 Uncapping Study → `/research/michigan-property-tax-uncapping-study/` | `/start/?goal=buy` |
| `dpa` | 6 | Help with the down payment | See Michigan down payment help → `/purchase/down-payment-assistance/` | Talk with Samantha → `Calendly` | Add up my cash to close → `/purchase/first-time-homebuyer/#cash-to-close` | `/start/?goal=buy` |
| `improve` | 5 | Paying for a project | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | Talk with Samantha → `Calendly` | `/start/?goal=equity` |
| `va` | 5 | Using your VA benefit | Estimate my VA payment → `/va-loan-calculator/#p-va` | Talk with Samantha → `Calendly` | Plan my VA purchase → `/purchase/va-homebuyer-plan/` | `/start/?goal=buy` |
| `dscr` | 5 | Qualifying on the rent | Check whether the rent covers the payment → `/product-loans/dscr-loans-michigan/#p-dscr` | Talk with Samantha → `Calendly` | Review an investment property → `/purchase/investment-property-financing/#rental-flow` | `/start/?goal=buy` |
| `sell_situation` | 5 | Selling in a complicated situation | Talk with Samantha → `Calendly` | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | Plan my buy-before-you-sell move → `/purchase/buy-before-you-sell/` | `/start/` |
| `industry` | 5 | What a rule change means for you | Talk with Samantha → `Calendly` | Compare loan options → `/product-loans/` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/` |
| `heloan` | 5 | A fixed second loan | See how home equity loans work → `/product-loans/home-equity-loan/` | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | `/start/?goal=equity` |
| `broker` | 4 | Broker or lender? | Talk with Samantha → `Calendly` | Check my Loan Estimate → `/compare-loan-estimates/` | Read Samantha’s background → `/samantha-shelton/` | `/start/?goal=buy` |
| `budget` | 4 | What should you comfortably spend? | Review my budget → `/purchase/budget-review/#affordability` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/#readiness` | `/start/?goal=buy` |
| `nonqm` | 4 | Income that does not fit the usual boxes | See what self-employed files need → `/purchase/self-employed-homebuyer/#doc-readiness` | Talk with Samantha → `Calendly` | See how non-QM loans work → `/product-loans/non-qm-loans/` | `/start/?goal=buy` |
| `apr` | 3 | Comparing offers | Check my Loan Estimate → `/compare-loan-estimates/` | Talk with Samantha → `Calendly` | Check my Loan Estimate → `/compare-loan-estimates/` | `/start/` |
| `nonqm_structure` | 3 | Loans outside the standard rules | See how non-QM loans work → `/product-loans/non-qm-loans/` | Talk with Samantha → `Calendly` | See how adjustable-rate mortgages work → `/product-loans/adjustable-rate-mortgage/` | `/start/?goal=buy` |
| `va_refi` | 3 | Refinancing a VA loan | Estimate my VA funding fee → `/va-funding-fee-calculator/#va-fee` | Talk with Samantha → `Calendly` | Calculate my break-even → `/refinance/break-even-review/#break-even` | `/start/?goal=refi` |
| `cashclose` | 3 | What you need at closing | Add up my cash to close → `/purchase/first-time-homebuyer/#cash-to-close` | Talk with Samantha → `Calendly` | Check my Loan Estimate → `/compare-loan-estimates/` | `/start/?goal=buy` |
| `condo` | 3 | Financing a condo | See how non-warrantable condo loans work → `/product-loans/non-warrantable-condo-loans/` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `repair` | 3 | When a repair costs more than savings | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | Talk with Samantha → `Calendly` | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | `/start/?goal=equity` |
| `offers` | 3 | Making offers? | Start my application → `/start/?goal=buy` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `rates` | 3 | Your rate depends on your file | Talk with Samantha → `Calendly` | Check my Loan Estimate → `/compare-loan-estimates/` | Why we don’t publish rates → `/why-we-dont-publish-rates/` | `/start/` |
| `fha` | 3 | Is FHA the right fit? | See how FHA loans work → `/product-loans/fha-loans/` | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | `/start/?goal=buy` |
| `preapproval` | 3 | Ready to make it official? | Start my application → `/start/?goal=buy` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/#readiness` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `reverse` | 3 | Questions about a reverse mortgage | Talk with Samantha → `Calendly` | Find a HUD-approved housing counselor → `https://www.hud.gov/stat/sfh/housing-counseling` | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | `` | HOLD until D1
| `usda` | 3 | Does the address qualify? | Check an address for USDA → `/usda-eligibility-check/#usda-check` | Talk with Samantha → `Calendly` | See how USDA loans work → `/product-loans/usda-loans/` | `/start/?goal=buy` |
| `conv` | 3 | Conventional, side by side | See how conventional loans work → `/product-loans/conventional-loans/` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `arm` | 2 | Fixed or adjustable? | See how adjustable-rate mortgages work → `/product-loans/adjustable-rate-mortgage/` | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | `/start/?goal=buy` |
| `construction` | 2 | Building instead of buying | Talk with Samantha → `Calendly` | Review renovation financing → `/purchase/renovation-financing/` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `equity` | 2 | Using your equity | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | Review renovation financing → `/purchase/renovation-financing/` | `/start/?goal=equity` |
| `homeready` | 2 | Income-based conventional programs | See how HomeReady and Home Possible loans work → `/product-loans/home-ready/` | Talk with Samantha → `Calendly` | See Michigan down payment help → `/purchase/down-payment-assistance/` | `/start/?goal=buy` |
| `heloc` | 2 | Is a HELOC the right tool? | See how HELOCs work → `/product-loans/heloc/` | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | `/start/?goal=equity` |
| `servicing` | 2 | Questions about your current loan | Talk with Samantha → `Calendly` | Calculate my break-even → `/refinance/break-even-review/#break-even` | Call 248-506-5727 → `tel:+12485065727` | `/start/` |
| `pmi` | 2 | When mortgage insurance comes off | Check when my PMI can end → `/pmi-removal-calculator/#mi-end` | Talk with Samantha → `Calendly` | Calculate my break-even → `/refinance/break-even-review/#break-even` | `/start/?goal=refi` |
| `fthb` | 1 | Buying your first home | Get my first-time homebuyer plan → `/purchase/first-time-homebuyer/` | Talk with Samantha → `Calendly` | See Michigan down payment help → `/purchase/down-payment-assistance/` | `/start/?goal=buy` |
| `fixed_short` | 1 | Paying it off faster | Estimate my payment → `/mortgage-calculator/#p-pay` | Talk with Samantha → `Calendly` | Compare fixed-rate terms → `/product-loans/15-year-fixed/` | `/start/?goal=buy` |
| `amort` | 1 | Where each payment goes | Calculate my payoff date → `/mortgage-payoff-calculator/#payoff` | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | `/start/` |
| `bridge` | 1 | Bridging two homes | Plan my buy-before-you-sell move → `/purchase/buy-before-you-sell/` | Talk with Samantha → `Calendly` | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | `/start/?goal=buy` |
| `second_home` | 1 | A second home or vacation property | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | Review an investment property → `/purchase/investment-property-financing/#rental-flow` | `/start/?goal=buy` |
| `fixed_long` | 1 | Choosing a term | Estimate my payment → `/mortgage-calculator/#p-pay` | Talk with Samantha → `Calendly` | Compare fixed-rate terms → `/product-loans/30-year-fixed/` | `/start/?goal=buy` |
| `builder` | 1 | Comparing a builder’s lender? | Check my Loan Estimate → `/compare-loan-estimates/` | Talk with Samantha → `Calendly` | Review renovation financing → `/purchase/renovation-financing/` | `/start/?goal=buy` |
| `jumbo` | 1 | Above the conforming limit? | Find my county loan limit → `/loan-limits/#loan-limits` | Talk with Samantha → `Calendly` | See how jumbo loans work → `/product-loans/jumbo-loans/` | `/start/?goal=buy` |
| `manufactured` | 1 | Financing a manufactured home | See how manufactured home loans work → `/product-loans/manufactured-home-loans/` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `landcontract` | 1 | Buying or refinancing a land contract | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/#readiness` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `transfertax` | 1 | What the transfer tax will be | Estimate my transfer tax → `/michigan-transfer-tax-calculator/#mi-transfer` | Talk with Samantha → `Calendly` | See what your sale leaves you → `/seller-net-sheet-calculator/#seller-net` | `/start/` |
| `escrow` | 1 | What drives your escrow | Estimate my property tax → `/michigan-property-tax-calculator/#mi-tax` | Talk with Samantha → `Calendly` | Estimate my payment → `/mortgage-calculator/#p-pay` | `/start/` |
| `buydown` | 1 | Points, credits and buydowns | Compare points and lender credits → `/points-vs-lender-credit-calculator/#points-credit` | Talk with Samantha → `Calendly` | See how buydown loans work → `/product-loans/buydown-loans/` | `/start/?goal=buy` |
| `payoff` | 1 | Paying ahead or recasting | Calculate my payoff date → `/mortgage-payoff-calculator/#payoff` | Talk with Samantha → `Calendly` | Estimate my refinance payment → `/mortgage-refinance-calculator/#p-ref` | `/start/` |
| `physician` | 1 | Financing on a medical career | See how physician loans work → `/product-loans/physician-loans/` | Talk with Samantha → `Calendly` | Build my homebuyer game plan → `/purchase/homebuyer-game-plan/` | `/start/?goal=buy` |
| `shorter` | 1 | Refinancing to a shorter term | Estimate my refinance payment → `/mortgage-refinance-calculator/#p-ref` | Talk with Samantha → `Calendly` | Compare fixed-rate terms → `/product-loans/15-year-fixed/` | `/start/?goal=refi` |
| `rentbuy` | 1 | Rent or buy? | Compare renting and buying → `/rent-vs-buy-calculator/#rent-buy` | Talk with Samantha → `Calendly` | Get my first-time homebuyer plan → `/purchase/first-time-homebuyer/` | `/start/?goal=buy` |
| `cashout` | 1 | Cash-out or a second loan? | Compare cash-out and home equity → `/refinance/cash-out-vs-home-equity/#equity-compare` | Talk with Samantha → `Calendly` | See how cash-out refinancing works → `/product-loans/cashout-loans/` | `/start/?goal=equity` |
| `ltv` | 1 | What is your loan-to-value? | Estimate my available equity → `/refinance/home-equity-review/#available-equity` | Talk with Samantha → `Calendly` | Check when my PMI can end → `/pmi-removal-calculator/#mi-end` | `/start/?goal=equity` |

---

## 3. Entity paragraph and schema (SPEC-002, SPEC-003)

### 3.1 Entity strings (word for word; guide §1, SEO §4.1)

- **Canonical paragraph** (author boxes, reviewer/trust component, About, press kit): "Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas. We do not lend our own money. We arrange mortgages with wholesale lenders, which make the credit decision and fund the loan. Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301, founded the company."
- **Once per money page** (the "Why Align" section or reviewer box): the first sentence of the paragraph (SEO-013). **Short form** above the fold and in trust lines: "Align Lending, an independent Michigan mortgage broker in Waterford".
- **Samantha, first reference:** "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301".
- **City pages:** "Align Lending is an independent mortgage broker based in Waterford, Michigan, serving buyers and homeowners in {City}, {County} County, by phone, text or video, with office visits by appointment on Pontiac Lake Road."
- **Reviewer line** on every page: "Samantha Shelton, NMLS 1647301 · Updated {Month YYYY}" (brand decision 5). The verb ("By", "Written by", "Reviewed by") waits for N2 and is one template change.
- **Editorial claims (F8):** guides are "published under Samantha Shelton's name and license" and "approved by Align before publishing". Never "Samantha writes and reviews every guide".
- **Government non-affiliation line (F7):** "Align Lending is not acting on behalf of or at the direction of FHA, HUD, USDA or the VA, and is not affiliated with or endorsed by any government agency." On FHA, VA, USDA and manufactured product pages (under the first requirements answer), `/product-loans/`, `/refinance/`, the shared loan-card component, the product template, the VA, USDA, loan-limits and PMI tools, the two VA learn pages, and the shared city disclaimer.
- Replaced: the refinance team's 69-word and 27-word paragraphs and its Person text (fact order changed, "One application…" added as an entity fact, F8 and F9 breaches).

### 3.2 Organization + FinancialService (home page only; everything else references `#organization`)

```json
{
  "@context": "https://schema.org",
  "@type": ["FinancialService", "Organization"],
  "@id": "https://alignlending.com/#organization",
  "name": "Align Lending",
  "legalName": "Align Lending LLC",
  "url": "https://alignlending.com/",
  "description": "Align Lending is an independent mortgage broker in Waterford, Michigan, NMLS #2041154, founded in August 2020 and licensed in Michigan, Ohio, North Carolina, Florida, Louisiana and Texas.",
  "slogan": "Understand your options before you decide.",
  "foundingDate": "2020-08",
  "founder": { "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton" },
  "logo": { "@type": "ImageObject", "@id": "https://alignlending.com/#logo", "url": "[VERIFY: live logo URL, e.g. /wp-content/uploads/2026/10/align-lending-logo-400.webp]", "width": 400, "height": 185 },
  "image": { "@id": "https://alignlending.com/#logo" },
  "telephone": "+1-248-506-5727",
  "email": "samantha@alignlending.com",
  "address": { "@type": "PostalAddress", "streetAddress": "2625 Pontiac Lake Road", "addressLocality": "Waterford", "addressRegion": "MI", "postalCode": "48328", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "[VERIFY against GBP: 42.654091]", "longitude": "[VERIFY against GBP: -83.339245]" },
  "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0",
  "contactPoint": [{
    "@type": "ContactPoint", "telephone": "+1-248-506-5727", "email": "samantha@alignlending.com",
    "contactType": "customer service", "areaServed": ["US-MI", "US-OH", "US-NC", "US-FL", "US-LA", "US-TX"], "availableLanguage": "en"
  }],
  "identifier": { "@type": "PropertyValue", "propertyID": "NMLS", "value": "2041154", "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154" },
  "areaServed": [
    { "@type": "State", "name": "Michigan" }, { "@type": "State", "name": "Ohio" }, { "@type": "State", "name": "North Carolina" },
    { "@type": "State", "name": "Florida" }, { "@type": "State", "name": "Louisiana" }, { "@type": "State", "name": "Texas" }
  ],
  "knowsAbout": ["Mortgage brokerage", "Home purchase loans", "Mortgage refinancing", "Home equity loans", "HELOCs", "FHA loans", "VA loans", "USDA loans", "Conventional loans", "Jumbo loans", "Non-QM loans", "Michigan property taxes"],
  "sameAs": [
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2041154",
    "https://www.google.com/maps/place/?q=place_id:ChIJj2hf9jTrJIgRvZIAHI6grF0",
    "https://www.linkedin.com/company/align-lending-llc",
    "[VERIFY one Facebook URL: facebook.com/alignwithalign/ or facebook.com/105599291490093]",
    "https://www.instagram.com/align.lending/"
  ]
}
```

Rules: `description` = the canonical sentence; `areaServed` = the six states only (cities and counties live in city `Service` nodes); no `aggregateRating`, no `openingHours` (add `contactPoint.hoursAvailable` only when Align states phone hours, N8), no `priceRange`, no `award`; `sameAs` only for profiles that exist (BBB and Yelp after they are claimed; never portals). `[VERIFY]` values (logo URL, GBP coordinates, one Facebook URL) are N8.

### 3.3 Person (Samantha)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://alignlending.com/samantha-shelton/#samantha-shelton",
  "name": "Samantha Shelton",
  "jobTitle": "Broker Owner and Senior Loan Originator",
  "url": "https://alignlending.com/samantha-shelton/",
  "image": "[VERIFY: current headshot URL; reuse attachment 10423 per the images auditor]",
  "description": "Samantha Shelton, Broker Owner and Senior Loan Originator at Align Lending, NMLS 1647301, founded the company in Waterford, Michigan in August 2020. She has been a licensed loan officer since May 2020.",
  "worksFor": { "@id": "https://alignlending.com/#organization" },
  "identifier": { "@type": "PropertyValue", "propertyID": "NMLS", "value": "1647301", "url": "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301" },
  "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Mortgage loan originator license, NMLS 1647301", "recognizedBy": { "@type": "Organization", "name": "Nationwide Multistate Licensing System & Registry (NMLS)", "url": "https://www.nmlsconsumeraccess.org/" } },
  "award": ["Hall of AIME inductee (2024)", "2023 Women With Vision honoree", "Mortgage Professional America 2025 Elite Women", "HousingWire 2024 Rising Star"],
  "sameAs": ["https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/1647301"],
  "subjectOf": { "@type": "WebPage", "url": "https://alignlending.com/press/" }
}
```

No NAMB award until D8 supplies the year and source. Her LinkedIn goes in `sameAs` only if it is her personal profile. Learn articles reference this `@id` as `author`; `reviewedBy` waits for N2.

### 3.4 Page-type nodes

| Page type | Nodes | Rules |
|---|---|---|
| Home | Organization/FinancialService, Person, WebSite + SearchAction, FAQPage | Only page with the full Organization node |
| Purchase and refinance hubs and subs | WebPage, BreadcrumbList (matches the visible trail), Service (`provider` #organization, `areaServed` Michigan or the six states), FAQPage | No rate, APR or term; refinance pages get the Service node they lack |
| Products | WebPage, BreadcrumbList, MortgageLoan (`areaServed` State Michigan, not 275 cities), FAQPage | Never `interestRate`, `annualPercentageRate`, `loanTerm`; drop `amount` or date it; remove `Offer` nodes |
| Calculators | WebApplication (`FinanceApplication`, `offers.price` 0, `creator` #organization), BreadcrumbList, FAQPage, Dataset where a table is published | No default rate anywhere |
| City | WebPage, Service (`areaServed` City with `containedInPlace` counties in the eyebrow's order), BreadcrumbList, FAQPage | Never a LocalBusiness with a city address |
| County hubs | CollectionPage/WebPage, BreadcrumbList, FAQPage from the visible hub FAQ (CTY-0303) | |
| Research | Report/Article + the existing Dataset/DataDownload | Validate; add `license`, `temporalCoverage`, `distribution.contentUrl` only if missing; no second Dataset |
| Learn | Article (`author` → Person @id, `publisher` → #organization), BreadcrumbList, FAQPage matching the visible FAQ word for word | `reviewedBy` waits for N2 |

---

## 4. City page template (SPEC-004)

One pass per page: text, citations, links (K6) and template fixes together. Data standards are the city auditor's unified recommendations U1-U9; D2 is the only open decision.

| Element | Final spec | Source |
|---|---|---|
| Eyebrow | "{County} County, Michigan"; multi-county "{County1} and {County2} counties, Michigan", majority first (Census V2025 place parts). The same order in JSON-LD `containedInPlace`; breadcrumb = first county. Resolved: Northville (Oakland first), Holland, Milan, Memphis, Grosse Pointe Shores, Lansing, East Lansing, Traverse City, Otter Lake, Cement City; not Otisville | U6, CTY eyebrow rows, CTY-0012 |
| Title | "Mortgage Broker in {City}, MI \| Align Lending"; over 60 characters: "{City}, MI Mortgage Broker \| Align Lending". Only Ann Arbor tests "Ann Arbor, MI Mortgage Broker & Loan Officer \| Align Lending" | CTY-0311, SEO §2.9 |
| H1 | "Mortgage Broker in {City}, MI" (the live pattern on all 276 pages; no team proposed a change, and it matches the title's owned query). Fix the live titles' capitalization "Mortgage Broker In" to "in" with the title pattern | crawl (`page_summary.csv`), CTY-0311 |
| Meta | "Mortgage broker in {City}, MI. {one housing or tax fact with the same figure as the glance box}. Conventional, FHA and VA loans compared across multiple wholesale lenders. NMLS #2041154." 140-160 characters. Every meta lists the same loan set or none; never a judgment of which loans "do the work" at a price level; no MSHDA; the value figure comes from the D2 field | CTY-0025, brand §4.1, H-F19 |
| Hero subhead | City-specific fact (ZIP, school district, taxing unit, millage) + "We check the parcel, then compare your loan across multiple wholesale lenders." | city hero rows |
| Glance box | Four rows on every page: "Typical home value near $X ({measure}, {period})" · "Taxable value rises about Y% the year after a sale" · "Property tax current owners pay: about Z% of value" · ZIP code(s); income-tax cities add "City income tax: X% for residents" | CTY-0308, CTY-0023 |
| Stat markup | `<p class="adp-stat__value">` / `<p class="adp-stat__label">`, never H3 | CTY-0024 |
| Headings | Flexible slots A (ZIP and taxing units), B (2025 millage vs neighbors), C (what to settle before an offer); "In Samantha's words" and step titles are `<p>`, not headings; eight FAQ questions per page | CTY-0305, 0307, 0312 |
| Program H2 | "Which loan programs can you use in {City}?" with a 40-60-word answer from page data: the county FHA limit, whether any part of {City} is in a USDA-eligible area (link the address check; eligibility is by address, not city), the MSHDA price limit with the F2 line, links to the FHA, VA, conventional and USDA pages | SEO-015, audit-content §5.4 |
| Closing H2 | "Talk with a Michigan mortgage expert" on all 276 pages and 12 hubs (F15, U5) | CTY-N003 |
| CTAs | Mid-page "Talk with Samantha" (utm_campaign=city&utm_content=mid) with lead-in "Have a {City} address in mind? Samantha can check its taxes and loan options."; tax section "Estimate my property tax" → `/michigan-property-tax-calculator/#mi-tax` + text link "How Michigan taxable value works"; loan list adds "Buying a home in {City}: where to start" → `/purchase/` and "Already own in {City}? Compare refinance options" → `/refinance/` | CTA-0043/0044, ILF-0018, CTY-0027 |
| Government line | Non-affiliation line appended to the shared city disclaimer (ships now, R-g3) | CTY-N004 |
| Samantha quotes | Verbatim quote-bank quotes only; the 79-page unsourced quote is removed now (CTY-0026B, N5) | U8 |
| Hero alt | "…, illustrating homes in {City}, Michigan" (F14) from `alt-text-corrected.csv` | images team |
| Population (U3) | "about N residents (U.S. Census Bureau estimate, July 1, 2025)"; 3 significant figures; 2020 only as the PL 94-171 count; whole-place totals for multi-county places; never WPR, Data USA, City-Data or Wikipedia | U3 |
| Tax share (U1) | ACS B25103 ÷ B25077 for the page's own geography, one decimal, "(Census, 2020 to 2024)"; suppress when top-coded or CV > 30%; a gap of 0.5 point or more is P0 (30 pages), 0.25-0.5 P1 | U1 |
| Millage (U4) | One statewide year from Treasury Total Property Tax Rates (2025 now); a dated sentence beside the table where a county apportionment report certifies a current-year move of 1.0 mill or more (12 Wayne pages + the hub); never mixed-year tables | U4 |
| Typical value (U2, **D2**) | Recommended: Census ACS owner median (B25077), labeled "(Census owner median, 2020 to 2024)"; optional dated Redfin line where the portal publishes the municipality. Hubs rank on the headline field; metas are generated from it. 71 rows wait for D2 | U2 |
| PRE deadlines | June 1 and November 1 (F5) | F5 |
| External links | "Local resources" box, at most 12 official links; about 35 unique external URLs per page; Census/municipal sources replace WPR, Wikipedia and city-data; `rel="noopener"` on primary citations, `nofollow noopener` on non-primary | 02 §5.5, K6 |
| Schema | WebPage, Service (`areaServed` City → county), BreadcrumbList, FAQPage; no LocalBusiness | §3.4 |
| County hubs | H2 families per CTY-0304 (closing H2 "Talk with a Michigan mortgage expert"); FAQPage from the visible FAQ; new hubs for Grand Traverse, Kalamazoo (P1), Ingham and Muskegon (P2) | CTY-0300/0301/0900/0907 |

---

## 5. Redirect map summary (`redirect-map.csv`)

- **153 source URLs** proposed for a 301 by at least one team: **141 approved**, 2 on hold (N3: `/learn/tips-for-refinancing-vacation-home/` until GSC Pages confirms the "refinance home" URL; `/mortgage-location/newport-mi-48166/` until the address split is verified), 10 rejected (kept as canonicals or differentiated, mixed-use kept, Farmington Hills page not moved).
- Approved by type: 301 merge 84; 301 prune 38; 301 legacy repoint 15; 301 merge/redirect 3; 301 redirect 1.
- **No chains, no loops** (checked on the final map). Every merge source points at its final canonical; the 14 legacy root posts whose targets now merge or prune are repointed straight to the final URL; `/handle-seller-disclosures/` needs no repoint because its target is kept.
- **Kept permanently** (status KEEP): the 293 `/mortgage-location/` and 96 root-post redirects, loaded as explicit Rank Math/server rules before the posts go to Draft; the GSC-attributed legacy URLs for Flint, Wixom, Farmington Hills and Pontiac and `/well-water-home-value/` get URL Inspection, never removal.
- **Order of work:** host-agnostic http/www edge rule first; then for each group, move unique content into the canonical, update internal links (the retargets in this list), ship the 301, remove the source from hub listings and the sitemap, resubmit both URLs (IndexNow + GSC). Batches follow `content-plan.md` §7.5, with the readiness-review merge (SPEC-005 first) in the purchase release.
- Preconditions: every 301 of a URL with mapped GSC impressions carries "export GSC Pages and Query x Page first" in its row; `fixed-rate-mortgage-options` and `jumbo-loan-tips` are GSC-attributed and go only into their query owners (RD-4).
