# Broker Marketplace — Tool Teardown & Build Blueprint

> **Status: pre-login draft.** The logged-in walkthrough has not happened yet. This
> session's network policy blocks both `brokermarketplace.com` and
> `broker-marketplace.com` (the domain search engines index for the product), and no
> authenticated browser session was available. Everything below comes from three
> sources, and each claim is tagged with the one it rests on:
>
> - **[Public]**: stated on the vendor's public homepage as indexed by search engines.
> - **[Your list]**: from the tool list you provided (31 tools).
> - **[Inferred]**: my read on how the tool is most likely built, based on how this
>   class of mortgage tooling is normally built. **These parts need to be checked
>   against the real app.** Section 8 has a checklist for doing that.

---

## 1. What the product is (public facts)

| Item | What the public page says |
|---|---|
| Positioning | "All-in-one" AI marketing platform for mortgage LOs and brokers; many tools behind one login **[Public]** |
| Tool count | Indexed homepage says **22 tools**; your list has **31**, so the product has grown since the indexed page **[Public] / [Your list]** |
| Pricing | Inconsistent across indexed pages: one FAQ says **$249/mo or $199/mo billed annually**, the pricing card shows $199 with a $249 strike-through, another snippet shows **$129/mo**, and one tier lists **Swift Sign at $35/mo**. Confirm on the in-app billing page **[Public]** |
| Included | All tools, unlimited leads, custom branding, **API + Zapier access**, priority support, cancel anytime **[Public]** |
| Value claim | Replaces ~$420/mo of standalone tools (6+ tools) **[Public]** |
| Broker Bot | "AI-powered matching across **200+** wholesale lenders plus appraisal rebuttal analysis" (your list says 240+, so the lender count has grown, or Appraisal Buddy was split out of Broker Bot) **[Public]** |
| Refi Finder | "Database mining with **daily morning reports**, rate-drop alerts, and **dual notifications**" (LO + borrower) **[Public]** |
| HomeAI | "AI property equity reports with **batch CSV** processing and **co-branding**" **[Public]** |
| Guideline Updates | "Instant alerts from Fannie, Freddie, FHA, VA with **AI chat in 53 languages**" **[Public]** |
| Market data | Groups "Live Rates, Guideline Updates, LO Rankings" together **[Public]** |
| Swift Sign | E-signatures with status tracking and audit trail **[Public]** |

---

## 2. The architecture under all 31 tools [Inferred]

Thirty-one tools sounds like thirty-one products. It almost certainly isn't. Products in
this category are a handful of shared layers with thin tool UIs on top. If you build the
layers first, each extra tool is mostly a form, a prompt, and an output template.

```
                 ┌────────────────────────────────────────────────────┐
                 │  LO BRAND KIT  (name, NMLS ID, headshot, logo,      │
                 │  colors, licensed states, compliance footer)        │
                 └──────────────┬─────────────────────────────────────┘
                                │ stamped on every output
 INPUTS                         ▼                              OUTPUTS
 ─────────           ┌─────────────────────┐            ──────────────────────
 CSV / LOS import ──▶│                     │──▶ Branded PDF (Property 360, LoanSight)
 Open-house QR    ──▶│   CONTACT GRAPH     │──▶ Share link + view tracking (Reachly)
 Website forms    ──▶│ clients · leads ·   │──▶ Email from LO's own inbox (drips, HomeAi)
 Home-search signup─▶│ realtor partners    │──▶ Social auto-post (Social Genie)
                     └─────────┬───────────┘──▶ Hosted microsites (Website, Homes, card)
                               │
         ┌─────────────────────┼──────────────────────┐
         ▼                     ▼                      ▼
 ┌───────────────┐   ┌──────────────────┐   ┌────────────────────┐
 │ DATA VENDORS  │   │    AI LAYER      │   │  SCHEDULED JOBS    │
 │ AVM/property, │   │ LLM chat + RAG   │   │ daily refi scan,   │
 │ rates/MBS,    │   │ doc extraction,  │   │ rate pulls,        │
 │ listings, rec-│   │ image/video/     │   │ guideline monitor, │
 │ orded mortgag-│   │ voice generation │   │ monthly HomeAi     │
 │ es, STR data  │   │                  │   │ sends              │
 └───────────────┘   └──────────────────┘   └────────────────────┘
        $$$$                 $$                       $
```

**Where the money and the moat are:**

1. **Data vendors** are the expensive part, and they decide which tools are cheap to copy.
   About half the tools need no paid data at all.
2. **Curated knowledge bases** (240+ lender matrices, the guideline corpus) are the moat.
   The AI on top is commodity; keeping the knowledge current is the hard part.
3. **The contact graph plus brand kit** is what makes it feel like one product. Every
   tool both reads from and feeds the same contact list.

### Core data model you'd need (Supabase/Postgres)

| Table | Purpose | Used by |
|---|---|---|
| `profiles` | LO brand kit: NMLS ID, headshot, logo, colors, licensed states, disclaimer text, connected inbox | Everything |
| `contacts` | Clients, leads, realtors; source, tags, consent flags (email/SMS/call) | Clients, Refi Finder, HomeAi, Email, Open House, Website |
| `loans` | Past-client loans: rate, balance, term, type (Conv/FHA/VA), MI, close date, property | Refi Finder, HomeAi, Production IQ |
| `properties` | Address, parcel, AVM history, tax, owner | HomeAi, Property 360, Listings Finder |
| `partners` | Realtor accounts linked to an LO, co-brand assets | Realtor tools, Open House, Homes |
| `documents` | Uploads (DU findings, tax returns, credit, appraisals, LEs) and extraction JSON | AUS, Income, Credit, Appraisal, LoanSight |
| `reports` | Any generated output (PDF/HTML) with inputs snapshot | Property 360, LoanSight, AirSignal, Research AI |
| `share_links` / `share_link_events` | Public links + view tracking | Reachly, LoanSight, reports — **this repo already has these** |
| `campaigns` / `sends` | Email/social sequences and delivery log | Email Templates, Social Genie, newsletters |
| `jobs` | Scheduled-run state and alerts | Refi Finder, Market Pulse, Guideline Updates |
| `kb_chunks` (pgvector) | Lender matrices, guidelines, bulletins for RAG | Broker Bot, AUS Assist, Guideline Updates, Realtor Bot |

---

## 3. Tool-by-tool teardown

Rating key: **Build** = engineering effort (Low / Med / High). **Data $** = ongoing data cost
($ ≈ free or cheap public data, $$$$ = enterprise data licenses).

### FIND DEALS & KEEP CLIENTS

#### 1. Refi Finder: daily watch of past clients for rate-drop, PMI-removal, and cash-out refis
- **What it does [Your list][Public]:** Mines your past-client loans every day, flags who now benefits from a refi, and sends a morning report. "Dual notifications" means both you and the borrower get alerted.
- **Likely under the hood [Inferred]:**
  - Loan book comes from the Clients import (rate, balance, close date, term, loan type, MI).
  - Daily job pulls a market rate (index such as Optimal Blue OBMMI or MND, plus a spread by product), not live lender pricing.
  - Three rule sets run per loan:
    - **Rate drop:** current rate is X bps below note rate **and** savings recoup closing costs within N months.
    - **PMI/MIP:** estimated LTV (amortized balance ÷ AVM) crosses 80%/78%, or FHA borrower now has enough equity to move to conventional without MI.
    - **Cash-out:** equity above a threshold at ≤80% CLTV.
  - Amortization is computed locally from note terms; the AVM refresh comes from a property-data vendor on a slower cadence (monthly).
- **Data/vendors:** AVM (ATTOM, Cotality/formerly CoreLogic, HouseCanary, RentCast as a budget option); rates (FRED's free OBMMI series such as `OBMMIC30YF`, Freddie PMMS `MORTGAGE30US`; MND is licensed).
- **Build on your stack:** Supabase `pg_cron` → Edge Function scanning `loans` → `alerts` table → email digest. Use deterministic math for the triggers, and have an LLM write the borrower-friendly message only.
- **Build:** Med · **Data $:** $$ (AVM calls per property per month)
- **Watch-outs:** Borrower-facing alerts are advertising (see §5, Reg Z/Reg N trigger terms). Use estimated, clearly labeled numbers.
- **Verify when logged in:** Which rate source and spread they use. Thresholds they let you configure. Whether "PMI" logic distinguishes FHA vs conventional. Morning report format. What the borrower notification says.

#### 2. Clients: import your client book, manage newsletters and invites
- **What it does:** Contact/loan import (CSV or LOS), segmentation, monthly newsletter, invites to client portal or HomeAi.
- **Likely under the hood [Inferred]:** CSV mapper with column auto-detect (an LLM can map messy headers). Possible LOS connectors (Arive, Encompass, LendingPad exports). Dedupe by email/phone/address. Newsletter = template + monthly content block (rates and market, likely reused from Market Pulse).
- **Build:** Low–Med · **Data $:** $
- **Watch-outs:** Store consent flags per channel. CAN-SPAM unsubscribe on every newsletter.
- **Verify:** Which LOS integrations exist. Import field list (does it capture note rate, MI, loan type? Refi Finder depends on it). Newsletter cadence and content source.

#### 3. HomeAi: recurring home-equity reports emailed to past clients
- **What it does [Public]:** AI property-equity reports, batch CSV, co-branding. Similar to Homebot's monthly digest.
- **Likely under the hood [Inferred]:** Monthly job per contact. AVM + estimated balance gives equity. Adds neighborhood sales, an "options" block (refi, HELOC, sell, rent), and an LLM-written summary. Sent as HTML email with a hosted web version (open/click tracking feeds back into the LO's lead alerts: "Jane viewed her equity report 3 times").
- **Data/vendors:** AVM + recent comps (ATTOM / Cotality / HouseCanary); rent estimate (RentCast).
- **Build:** Med · **Data $:** $$–$$$ (per property per month)
- **Watch-outs:** AVM accuracy disclaimers. Realtor co-branding raises RESPA (§5).
- **Verify:** Email layout and sections. Send cadence. What engagement signals they surface to the LO. Whether the borrower can adjust their value.

#### 4. Homes: branded home-search site for buyers
- **What it does:** LO-branded property search; buyers register, which creates leads.
- **Likely under the hood [Inferred]:** IDX/MLS listing feed + map search + saved-search alerts + lead capture into Contacts.
- **Data/vendors:** This is the hardest data problem in the list. LOs generally **cannot get IDX directly**, because MLS licenses go to participating brokers. Products like this usually run on a partnering agent's/broker's IDX license, or on an aggregator that handles per-MLS licensing (e.g., Bridge Interactive, Trestle, SimplyRETS, Spark/RESO Web API vendors).
- **Build:** High · **Data $:** $$$ (plus per-MLS paperwork)
- **Watch-outs:** MLS display rules. This is probably why "Realtor co-branding" exists, since the agent supplies the license.
- **Verify:** Whose license is shown in the listing footer. Which markets are covered. Whether it is an iframe from an IDX vendor (check the page source and network domains).

#### 5. Listings Finder: expireds, FSBOs, pre-foreclosures with owner phones
- **What it does:** Prospecting lists of motivated sellers with contact info.
- **Likely under the hood [Inferred]:** Expireds/withdrawn from MLS-derived feeds; FSBOs scraped from FSBO sites and portals; pre-foreclosures from county NOD/lis pendens records. Owner phones come from **skip tracing**. This is the model of REDX, Vulcan7, and Landvoice.
- **Data/vendors:** ATTOM or PropertyRadar (pre-foreclosure); BatchData-type skip-trace APIs; expired data needs MLS-sourced feeds.
- **Build:** Med · **Data $:** $$$ (per-record skip-trace fees)
- **Watch-outs:** **TCPA + National DNC scrubbing** before any calling or texting; litigation risk is real. Skip-trace data has permissible-use restrictions.
- **Verify:** Whether they DNC-scrub. Data source attribution. Per-lead credit costs. Refresh frequency.

#### 6. Production IQ: your production from public records, lost borrowers, agents to recruit
- **What it does:** Shows your loan production as seen in public records, borrowers who later refinanced with someone else, and agents (or LOs) worth recruiting.
- **Likely under the hood [Inferred]:** Reg Z (12 CFR 1026.36(g)) requires the LO's name and NMLS ID on the note and security instrument. Recorded mortgages therefore let you attribute loans to individual LOs. Join that with MLS sales (buyer agent) to get **agent ↔ LO relationships**. "Lost borrowers" = your past borrowers with a new recorded mortgage naming another lender/LO.
- **Data/vendors:** Modex (MMI) is the established vendor for LO-level public-record production. DIY means county recorder data plus document-image OCR at national scale, which is very expensive.
- **Build:** High · **Data $:** $$$$
- **Watch-outs:** "Agents to recruit" is ambiguous: realtors to partner with, or LOs to hire (for a broker-owner). Confirm which.
- **Verify:** Data lag (recording delay is typically 30–90 days). Whether it shows agent relationships. The exact meaning of "agents to recruit."

### LOAN HELP

#### 7. Broker Bot: matches tough scenarios to 240+ wholesale lenders
- **What it does [Public]:** Describe a scenario (e.g., "self-employed, 640 FICO, 12-mo bank statements, non-warrantable condo, 80% LTV") and get matching lenders and programs.
- **Likely under the hood [Inferred]:**
  1. Lender product matrices (PDFs) are ingested and extracted into a structured eligibility schema: program, min FICO, max LTV/CLTV by loan amount and occupancy, DTI, reserves, doc type (full doc, 12/24-mo bank statement, P&L-only, 1099, asset depletion, DSCR, ITIN, foreign national), property types, states.
  2. A deterministic filter applies hard constraints.
  3. An LLM ranks the matches, explains them, and cites matrix pages (RAG over `kb_chunks`).
- **The moat:** Keeping 240 lender matrices current. They change constantly and many sit behind broker-approval portals.
- **Build:** Med for the engine, High for ongoing curation · **Data $:** $ in data, $$$ in labor
- **Watch-outs:** Stale guidelines lead to wrong answers. Show an "as of" date per lender.
- **Verify:** Does it return lender names and specific programs? Does it cite sources and dates? What input fields does it require (structured form vs. free text)?

#### 8. AUS Assist: explains DU/LPA findings and the path to approval
- **What it does:** Upload DU Findings or LPA Feedback Certificate; get plain-English explanations and what to change (pay down debt, add reserves, document income).
- **Likely under the hood [Inferred]:** PDF text extraction, parsing of the message list (DU messages / LPA feedback codes), and an LLM with a curated explanation library + Selling Guide RAG. It probably can't *run* DU or LPA itself, because brokers submit through lender portals. "Path to approval" = LLM reasoning over findings + 1003 data.
- **Build:** Low–Med · **Data $:** $
- **Watch-outs:** Must not imply a guaranteed approval.
- **Verify:** Upload-only, or does it accept MISMO/XML? Does it simulate "what-if" changes? Output format.

#### 9. Income Calculator: self-employed, rental, and W-2 income from uploads
- **What it does:** Upload tax returns, W-2s, and paystubs; get qualifying income.
- **Likely under the hood [Inferred]:**
  - **Extraction:** vision-LLM or document-AI extracts line items from 1040, Schedules C/E, K-1, 1120S, 1065, W-2, and paystubs.
  - **Deterministic calculators** then apply agency methods: Fannie **Form 1084** / Freddie **Form 91** cash-flow analysis, Schedule E rental method, lease/1007 gross-rent method (75% factor), 2-year averaging and declining-income rules.
  - The LLM should **not** do the math; extraction feeds code.
- **Vendors (buy option):** Ocrolus, or Claude/GPT vision for build.
- **Build:** Med · **Data $:** $
- **Watch-outs:** Show the worksheet so an underwriter can audit every number. Keep PII encrypted with retention limits.
- **Verify:** Which forms it supports. Whether it outputs a 1084-style worksheet. How it handles declining income and add-backs.

#### 10. Credit Repair Analyzer: tri-merge review and plan to qualify
- **What it does:** Reads a tri-merge report and builds a plan (pay-downs, disputes, rapid rescore) to hit a target score.
- **Likely under the hood [Inferred]:** Parse the credit report (prefer the **MISMO credit XML** from the credit vendor over PDF). Tradeline analysis: utilization by card, derogatories, collections, inquiries. Score impact estimates from heuristics. True score simulation needs a bureau-licensed what-if tool such as CreditXpert.
- **Build:** Med · **Data $:** $ (heuristic) to $$$ (licensed simulator)
- **Watch-outs:** FCRA data handling. If borrower-facing, avoid looking like a credit repair organization under CROA.
- **Verify:** Real simulator or heuristics? Accepted file types? Does it output a borrower-facing action plan?

#### 11. QuickCondo: FHA/VA condo approval lookup
- **What it does:** Search whether a condo project is FHA- or VA-approved.
- **Likely under the hood [Inferred]:** Nightly ingest of **public** government lists (HUD's FHA condo lookup and VA's condo report on the LGY Hub) into a searchable table with fuzzy address/name matching.
- **Build:** Low · **Data $:** $ (free public data)
- **Verify:** Data freshness date. Whether it adds anything beyond the government lists (Fannie/Freddie project status is *not* public).

#### 12. Appraisal Buddy: AI appraisal rebuttal + ROV form
- **What it does [Public, as part of Broker Bot]:** Upload an appraisal; get weaknesses, alternate comps, and a drafted Reconsideration of Value.
- **Likely under the hood [Inferred]:** Extract the URAR (subject, comps, adjustments). Rule checks (comp distance, age, GLA bracketing, adjustment percentages). Pull alternate comps from sales data. LLM drafts an ROV aligned with the 2024 interagency ROV guidance and GSE borrower-initiated ROV requirements.
- **Data/vendors:** Comparable sales (ATTOM/Cotality or MLS via partner).
- **Build:** Med · **Data $:** $$
- **Watch-outs:** **Appraiser Independence Requirements.** The broker or LO cannot pressure or contact the appraiser directly; the ROV goes through the lender's process. Plan for the redesigned URAR (UAD 3.6) format the GSEs are rolling out.
- **Verify:** Does it fetch new comps or only critique existing ones? Whose ROV form is it (lender-specific or generic)?

#### 13. Calculators: mortgage, refi, net proceeds, buydown, DSCR, FHA streamline, VA IRRRL, etc.
- **What it does:** Standard calculators, branded and shareable.
- **Under the hood:** Pure deterministic math. Key formulas:
  - **Buydown cost** = sum of monthly payment differences over the buydown period.
  - **DSCR** = rent ÷ PITIA.
  - **VA IRRRL:** fee recoupment within 36 months, plus the rate-reduction net tangible benefit test.
  - **FHA streamline:** seasoning requirements and HUD 4000.1 net tangible benefit test.
  - **Net proceeds:** sale price minus payoff, commission, closing costs, and prorations.
- **Build:** Low · **Data $:** $
- **Verify:** Full calculator list (they publicly say 7). Whether results produce shareable branded PDFs or links.

### BORROWER PRESENTATIONS & REPORTS

#### 14. LoanSight: side-by-side loan comparisons, cost of waiting, rent vs. own, LE comparison
- **What it does:** Mortgage Coach-style presentations.
- **Likely under the hood [Inferred]:** Option builder (2–4 loan options), amortization engine, and charts (total cost over 5/7/10/30 years, break-even). Cost of waiting = payment delta + appreciation/equity lost per month of delay. Rent vs. own = rent growth vs. PITI + appreciation + tax. LE comparison = parse two **Loan Estimates** (standardized TRID layout, so extraction is reliable) and diff sections A–J. Output is a branded share link + PDF.
- **Build:** Med · **Data $:** $
- **Reuse from this repo:** `share_links` + `track-share-visit` (view tracking), `usePDFExport` pattern, Recharts components.
- **Verify:** Output format and page count. Whether the borrower sees an interactive page or a PDF. View notifications.

#### 15. Property 360: 9-page branded property report PDF
- **What it does:** Comprehensive property report for a buyer or homeowner.
- **Likely under the hood [Inferred]:** Address → property data fan-out: AVM, characteristics, tax, sales history, ownership, flood zone, schools, demographics, walkability, map. LLM summary page. HTML template rendered to PDF (headless Chrome).
- **Data/vendors:**
  - Property/AVM: ATTOM / Cotality.
  - Flood: FEMA NFHL (free).
  - Demographics: Census ACS (free).
  - Schools: GreatSchools (licensed).
  - Walkability: Walk Score (licensed).
  - Maps: Mapbox or Google Static Maps.
- **Build:** Med · **Data $:** $$ per report
- **Verify:** The 9 page titles and the data source footnotes on each page. These will reveal their vendors directly.

#### 16. AirSignal: short-term rental cash-flow report for investors
- **What it does:** Projected STR revenue, occupancy, and ADR for an address, plus cash flow and DSCR.
- **Likely under the hood [Inferred]:** STR analytics API for comparable listings, ADR, occupancy, and seasonality. Combined with the loan payment, it yields cash flow and DSCR (ties into DSCR loan programs).
- **Data/vendors:** AirDNA (enterprise), Mashvisor, PriceLabs, Rabbu.
- **Build:** Low–Med · **Data $:** $$$
- **Watch-outs:** Local STR regulations and permit bans should be flagged.
- **Verify:** Data source attribution in the report. Whether it includes regulation notes.

### REALTOR PARTNERS

#### 17. Open House Genie: co-branded flyers + QR sign-in lead capture
- **What it does:** Generate an open-house flyer with LO + agent branding; a QR code leads to a sign-in page; visitors become shared leads.
- **Likely under the hood [Inferred]:** Listing lookup (address → photos/details) → flyer template (AI copy) → QR code → mobile sign-in form → `contacts` (shared with agent) → follow-up drip.
- **Build:** Low–Med · **Data $:** $ (listing photos may need MLS access)
- **Watch-outs:** **RESPA Section 8.** Co-marketing with referral sources must have costs split in proportion to use. Free stuff for agents who refer you is the classic violation.
- **Verify:** Does the agent get their own login? Lead routing rules (who gets the lead first)? Any cost-split or MSA language?

#### 18. Realtor Bot: AI assistant for agents (comps, CMAs, showings)
- **What it does:** A chatbot the LO gives agents, for comps, CMAs, and showing prep.
- **Likely under the hood [Inferred]:** LLM with tools: comps lookup (property data API), CMA generator (template + comps), and showing scheduler/notes. Branded as the LO.
- **Build:** Med · **Data $:** $$
- **Watch-outs:** Same RESPA "thing of value" question as #17 and #19.
- **Verify:** Data quality of comps (MLS vs. public record)? Agent-side access model?

#### 19. Realtor co-branding: invite agents to share tools and leads
- **What it does:** Agents get co-branded access to tools and shared leads.
- **Likely under the hood [Inferred]:** `partners` table + invite flow + agent sub-accounts with role-based access. Co-branded rendering adds the agent's brand kit next to the LO's.
- **Build:** Med · **Data $:** $
- **Watch-outs:** **The highest-risk feature compliance-wise.** Have RESPA counsel review the model (pricing to agents, MSA structure).
- **Verify:** What agents pay, if anything. What agents can access. Lead-ownership terms.

### MARKETING & CONTENT

#### 20. Design Studio: AI flyers, social posts, staging, headshots, listing videos
- **What it does:** One creative suite for LO marketing.
- **Likely under the hood [Inferred]:**
  - Flyers and posts: brand-kit templates + LLM copy + image generation.
  - Virtual staging: image-edit models.
  - Headshots: personalized image models.
  - Listing videos: image-to-video + music + captions.
- **Vendors:** Image-gen APIs (OpenAI/Google, Flux via fal.ai/Replicate), staging APIs, HeyGen or Higgsfield for video. You already have Canva, HeyGen, Higgsfield, and ElevenLabs connected, which is enough to prototype this whole tool without writing generation code.
- **Build:** Med (it's integration work) · **Data $:** $$ (per generation; usually metered with credits)
- **Watch-outs:** Every ad needs the NMLS ID and Equal Housing language. Virtually staged photos must be disclosed.
- **Verify:** Credit/usage limits per plan. Which outputs are templates vs. truly generated.

#### 21. Social Genie: trending topics, scripts, scheduled auto-posting
- **What it does:** Topic ideas → post/video scripts → scheduled posting.
- **Likely under the hood [Inferred]:** News/trends ingestion (housing news, rate moves from Market Pulse) → LLM drafts in the LO's voice → scheduler → platform APIs (Meta Graph, LinkedIn, X, TikTok) directly or via an aggregator like Ayrshare.
- **Build:** Med (OAuth + app reviews per platform are the slow part) · **Data $:** $
- **Watch-outs:** Reg Z/Reg N (MAP rule) advertising rules: trigger terms (rate, payment) require full disclosures. NMLS ID on posts.
- **Verify:** Which networks. Whether posts auto-include disclosures. Voice training (does it learn from your past posts?).

#### 22. Email Templates: nurture campaigns sent from your inbox
- **What it does:** Drip campaigns that send from the LO's own Gmail/Outlook, for better deliverability and a personal feel.
- **Likely under the hood [Inferred]:** OAuth to Gmail API / Microsoft Graph, a template library, a sequence scheduler, and reply detection to stop sequences.
- **Build:** Med · **Data $:** $
- **Watch-outs:** Google's `gmail.send` scope requires OAuth app verification. Reading the inbox (reply detection) needs restricted scopes and an annual security assessment. CAN-SPAM unsubscribe.
- **Verify:** Gmail and Outlook both supported? Reply detection? Send-volume limits?

#### 23. Reachly Video: personal video messages with view tracking
- **What it does:** BombBomb/Loom-style personal video.
- **Likely under the hood [Inferred]:** Browser recording (MediaRecorder) → video hosting (Mux or Cloudflare Stream) → branded landing page with CTA → view/watch-percent events → "Jane watched your video" alert.
- **Build:** Low–Med · **Data $:** $ (storage/streaming)
- **Reuse from this repo:** The share-link + event-tracking pattern (`share_links`, `share_link_events`, `track-share-visit`) is exactly this mechanic. The `scenarios.loom_video_url` column shows you already embed video.
- **Verify:** Watch-percent tracking or just views? Email-embed GIF thumbnails? Notification channel?

#### 24. Research AI: topic → sourced report → podcast in your voice
- **What it does:** A NotebookLM-style flow for LO content.
- **Likely under the hood [Inferred]:** Web search API → LLM synthesizes a cited report → converts it to a 1- or 2-host script → TTS with a **cloned LO voice** (ElevenLabs voice cloning) → audio file + RSS/share page.
- **Build:** Low–Med · **Data $:** $$ (TTS minutes)
- **Fit:** You already have ElevenLabs connected plus skills for scripts and ElevenLabs formatting, so most of this pipeline already exists in your workflow.
- **Verify:** Single voice or two-host format? Source citations shown? Voice-clone onboarding flow?

#### 25. Website Builder: AI-built hosted website with lead capture
- **What it does:** Generate and host an LO website from the brand kit.
- **Likely under the hood [Inferred]:** LLM fills a site template from the profile. Hosted on a subdomain with custom domain support (Cloudflare for SaaS custom hostnames or the Vercel domains API). Forms post into `contacts`. Embeds calculators, Homes search, and an apply link.
- **Build:** Med · **Data $:** $
- **Watch-outs:** NMLS Consumer Access link, licensed states, and Equal Housing Opportunity logo in the footer.
- **Verify:** Template count, editor flexibility, custom domain flow, SEO/blog support.

#### 26. Digital business card
- **Under the hood:** Hosted profile page + vCard (`.vcf`) download + QR code (and NFC card ordering, if offered). Feeds `contacts` when someone shares their info back.
- **Build:** Low · **Data $:** $

### MARKET & COMPLIANCE

#### 27. Market Pulse: live rates/MBS with daily "why rates moved" + post
- **What it does:** Rate and MBS dashboard, daily AI commentary, and a ready-to-post social version.
- **Likely under the hood [Inferred]:**
  - **Rates:** free daily OBMMI series and weekly PMMS on FRED; the 10-yr Treasury (`DGS10`).
  - **MBS:** live UMBS coupon prices require a licensed feed (MBS Live/MND, ICE). There is no free real-time source.
  - **"Why rates moved":** LLM over the econ calendar + data releases + headlines, generated after the close.
- **Build:** Low–Med · **Data $:** $ (rates) to $$$ (live MBS)
- **Verify:** Is MBS data live or delayed? Is the commentary attributed to a source? Is the post template compliant (no specific rate without disclosures)?

#### 28. Guideline Updates: Fannie/Freddie/FHA/VA bulletins in plain English
- **What it does [Public]:** Alerts and plain-English summaries, plus AI chat in 53 languages.
- **Likely under the hood [Inferred]:** Monitors public sources (Fannie Selling Guide announcements and lender letters, Freddie bulletins, HUD Mortgagee Letters, VA circulars) via RSS/scrape → LLM summary + "what it means for your borrowers" → alert. The chat is RAG over the same corpus. "53 languages" is just the LLM's native multilingual ability.
- **Build:** Low–Med · **Data $:** $ (all public)
- **Verify:** Lag between bulletin and alert. Which sources (any lender overlays?). Do summaries link the original bulletin?

#### 29. National LO Rankings
- **Likely under the hood [Inferred]:** The same recorded-mortgage/NMLS-ID dataset as Production IQ, aggregated nationally (volume and units by LO, state, county), plus NMLS Consumer Access for licensing details. HMDA alone won't work, since it has no LO-level identifier.
- **Build:** Med (once you have the data) · **Data $:** $$$$ (same dataset as #6)
- **Verify:** Data source, time window, and whether it matches Production IQ's numbers.

### DOCS

#### 30. Swift Sign: e-signatures
- **What it does [Public]:** E-sign with status tracking and audit trail.
- **Build vs. buy [Inferred]:** Build on open-source **Documenso** or **DocuSeal**, or buy an API (Dropbox Sign, BoldSign). Needs ESIGN/UETA consent capture, a tamper-evident sealed PDF (hash + certificate), and an audit log (IP, timestamps, email verification).
- **Build:** Med (build) / Low (buy) · **Data $:** $
- **Watch-outs:** It's for broker docs (authorizations, fee agreements). Closing docs go through the lender's systems.
- **Verify:** Templates, signing order, reminder emails, audit certificate contents.

#### 31. PDF Editor: edit, merge, redact PDFs
- **Under the hood [Inferred]:** Client-side `pdf.js` + `pdf-lib` for view/merge/annotate; server-side MuPDF/PyMuPDF for **true redaction**, which removes the underlying text rather than drawing a black box. Commercial SDK option: Nutrient (PSPDFKit) or Apryse.
- **Build:** Low–Med · **Data $:** $
- **Watch-outs:** Fake redaction (overlays) is a real PII leak risk with borrower documents.

---

## 4. Data vendor map [Inferred]

| Data need | Tools that need it | Options | Cost tier |
|---|---|---|---|
| AVM + property characteristics | Refi Finder, HomeAi, Property 360, Appraisal Buddy, Realtor Bot | ATTOM, Cotality (formerly CoreLogic), HouseCanary, RentCast (budget) | $$–$$$ |
| Mortgage market rates | Refi Finder, Market Pulse, newsletters | FRED: Optimal Blue OBMMI (daily), Freddie PMMS (weekly), `DGS10` — free; MND (licensed) | $ |
| Live MBS prices | Market Pulse | MBS Live / MND, ICE | $$$ |
| MLS listings (IDX) | Homes, Open House Genie, Listings Finder (expireds) | Partner broker's IDX + aggregator (Bridge, Trestle, SimplyRETS, Spark) | $$$ + paperwork |
| Pre-foreclosure / public records | Listings Finder | ATTOM, PropertyRadar | $$ |
| Skip tracing (owner phones) | Listings Finder | BatchData-type skip-trace APIs | $$$ (per hit) |
| Recorded mortgages w/ LO NMLS ID | Production IQ, LO Rankings | Modex (MMI); DIY recorder data + OCR | $$$$ |
| STR performance | AirSignal | AirDNA, Mashvisor, PriceLabs, Rabbu | $$$ |
| Condo approvals | QuickCondo | HUD FHA condo lookup, VA condo report (public) | $ |
| Agency guidelines/bulletins | Guideline Updates, AUS Assist, Broker Bot | Fannie/Freddie/HUD/VA public sites | $ |
| Wholesale lender matrices | Broker Bot | Each lender's broker portal (requires approvals) | $ data, $$$ labor |
| Credit what-if simulation | Credit Repair Analyzer | CreditXpert via credit vendor | $$$ |
| Schools / walkability | Property 360 | GreatSchools, Walk Score | $$ |
| Flood / demographics | Property 360 | FEMA NFHL, Census ACS (free) | $ |
| LLM / vision / RAG | ~20 tools | Claude API (+ pgvector in Supabase) | $$ (usage) |
| Image / video / voice gen | Design Studio, Social Genie, Research AI, Reachly | Image-gen APIs, HeyGen, Higgsfield, ElevenLabs | $$ (usage) |

---

## 5. Compliance flags (not legal advice; have counsel review before launch)

| Area | Where it bites | What to do |
|---|---|---|
| **RESPA §8** (no things of value for referrals) | Realtor co-branding, Realtor Bot, Open House Genie, co-branded HomeAi | Proportional cost splits; consider charging agents fair market value; counsel review of any MSA |
| **TCPA + National DNC** | Listings Finder phone lists, any SMS | DNC scrubbing, consent records, quiet hours |
| **Reg Z / Reg N (MAP rule) advertising** | Social Genie, Market Pulse posts, Website, HomeAi, Refi alerts | Trigger-term disclosures, NMLS ID, no misleading "rates as low as" claims |
| **CAN-SPAM** | Email Templates, newsletters, HomeAi | Unsubscribe link, physical address, honor opt-outs |
| **FCRA / GLBA / data security** | Credit Analyzer, Income Calculator, skip tracing, all uploads | Encryption, retention limits, access logging; GLBA Safeguards Rule program |
| **Appraiser Independence** | Appraisal Buddy | ROV through the lender; never contact the appraiser directly |
| **ESIGN / UETA** | Swift Sign | Consumer consent, audit trail, sealed PDFs |
| **CROA** | Credit Repair Analyzer (if borrower-facing) | Position it as a qualification analysis, not credit repair services |
| **State licensing display** | Website, card, all ads | Licensed states, NMLS Consumer Access link |
| **Fair lending in AI output** | Broker Bot, chatbots, ad targeting | Avoid steering; log prompts and outputs; review targeting criteria |

---

## 6. Recommended build order [Inferred]

Ordered by **value ÷ (effort + data cost)**. Phase 1 needs no paid data at all.

| Phase | Tools | Why |
|---|---|---|
| **0. Foundation** | Brand kit, contacts + loans, CSV import, share links + view tracking, PDF renderer, email-from-inbox | Every later tool depends on these |
| **1. No paid data** (~10 tools) | Calculators, LoanSight, Market Pulse (FRED rates), Guideline Updates, QuickCondo, AUS Assist, Income Calculator, Digital card, Email Templates, Reachly Video | Commodity data + LLM. Fast to ship, and most of the perceived value |
| **2. AI content** | Design Studio, Social Genie, Research AI, Website Builder, PDF Editor, Swift Sign (buy/OSS) | Integration work over APIs you already have connected |
| **3. Property data** (one AVM vendor contract unlocks four tools) | Refi Finder, HomeAi, Property 360, Appraisal Buddy | Sign one property-data vendor and amortize it across all four |
| **4. Knowledge moat** | Broker Bot, Credit Repair Analyzer | Needs ongoing lender-matrix curation |
| **5. Partner + listings** | Open House Genie, Realtor Bot, co-branding, Homes, Listings Finder, AirSignal | MLS licensing, skip trace, and RESPA review gate these |
| **6. Expensive datasets** | Production IQ, National LO Rankings | $$$$ data. Buy only if it is central to your offer |

---

## 7. How this repo fits

This repo (`branch-boost-builder`) is a **branch P&L pro forma / scenario tool** (Vite +
React + shadcn/ui + Supabase via Lovable Cloud). It is not a Broker Marketplace clone. It
does already contain several reusable building blocks:

| Existing piece | File(s) | Reusable for |
|---|---|---|
| Supabase auth + RLS per user | `src/hooks/useAuth.ts`, `supabase/migrations/*` | Multi-tenant LO accounts |
| Public share links with slugs, expiry, visit counts | `src/lib/shareLinks.ts`, `share_links` table | LoanSight, Property 360, Reachly, HomeAi web versions |
| Visit event tracking edge function | `supabase/functions/track-share-visit/index.ts`, `share_link_events` | "Borrower viewed your report" alerts |
| Printable-HTML PDF export | `src/hooks/usePDFExport.ts` | Branded report PDFs |
| Scenario compare UI + Recharts | `src/components/ScenarioCompare.tsx`, `src/components/charts/*` | LoanSight side-by-side comparisons |
| Embedded video URL on a record | `scenarios.loom_video_url` | Reachly-style personal video |

**Recommendation:** Build the LO tool suite as a **separate Lovable project/repo** that
copies these patterns, rather than bolting 31 tools onto the pro forma app. The pro forma
tool is a branch-manager product; the tool suite is an LO product with a different user,
data model, and pricing.

---

## 8. Logged-in review: what's needed and what to check

### To unblock the actual walkthrough
1. **Network:** Allow `brokermarketplace.com` and `broker-marketplace.com` (plus any `app.`
   subdomain) in this cloud environment's network settings.
2. **Authenticated access, without pasting a password into chat.** Pick one:
   - **Best:** Run the review from the Claude desktop app with Claude in Chrome, using your
     already-signed-in browser, so no credentials change hands.
   - **Alternative:** Store the login as environment secrets (e.g., `BM_USERNAME`,
     `BM_PASSWORD`) for a headless browser session. MFA or CAPTCHA may block this.
   - **Low-tech:** For each tool, send screenshots of the input screen and the output,
     plus a sample generated PDF/report. Save a HAR file from DevTools → Network while
     using it.
3. **Terms of service:** Check their ToS for anti-scraping or anti-reverse-engineering
   clauses. Manually observing features in your own account for competitive analysis is
   normal practice. Automated bulk extraction, or copying their content, templates, or
   prompts, is where risk starts.

### Reverse-engineering method (per tool, in your own session)
- **DevTools → Network:** Third-party API domains reveal vendors directly (e.g., calls to
  an AVM, STR, or IDX provider). The request/response shapes reveal their data model.
- **Page source / JS bundles:** Route names, feature flags, plan gating, and
  vendor SDKs (Stripe, Mux, Ayrshare, Documenso, etc.).
- **Generated outputs:** PDF footers and "data provided by" lines name the data vendors.
  PDF metadata (`Producer`) reveals the rendering stack.
- **Emails they send:** Headers show the email provider (SendGrid, Postmark, SES, or the
  LO's own Gmail).
- **Plan/billing page:** Credit meters reveal which tools have real per-use costs
  (= paid data or generation).

### Per-tool checklist
Each tool's **"Verify when logged in"** line in §3 is the list. Across every tool, also capture:

- [ ] Input form fields (exact list): this becomes your schema
- [ ] Output sample (screenshot/PDF), with a page count and section list
- [ ] Data-source attributions on the output
- [ ] Third-party domains called (Network tab)
- [ ] Usage limits / credits / plan gating
- [ ] Sharing and tracking behavior (link? PDF? view alerts?)
- [ ] Branding: what's customizable, and what's co-branded with agents
- [ ] Compliance elements present (NMLS ID, disclosures, unsubscribe, DNC)
- [ ] Rough quality grade (1–5) and what you'd do better
