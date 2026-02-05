

# Shareable Scenario Links - Implementation Plan

## Overview

This feature lets you generate custom share links for any saved scenario. Recipients can view a beautifully designed, read-only landing page -- no login required. Every link visit and interaction is tracked in your database so you can see engagement analytics.

---

## How It Works

```text
You (logged in)                     Recipient (no login needed)
+---------------------+            +----------------------------+
| Dashboard           |            | Public Landing Page        |
|                     |            |                            |
| [Share Scenario] ---|--link----->| Branded header             |
|                     |            | KPI summary cards          |
| Share Link Manager  |            | 3-year P&L table           |
| - Copy link         |            | Visual charts              |
| - View analytics    |            | "Powered by Lending Heights"|
| - Deactivate link   |            +----------------------------+
+---------------------+                      |
        ^                                    |
        |        +------------------+        |
        +--------| share_links DB   |<-------+
                 | - visit count    |  (tracked)
                 | - click events   |
                 +------------------+
```

---

## What Gets Built

### 1. New Database Table: `share_links`

A dedicated table to store each share link along with its analytics and customization options.

| Column | Type | Purpose |
|---|---|---|
| id | UUID | Primary key |
| scenario_id | UUID | References the scenario being shared |
| user_id | UUID | The owner who created the link |
| slug | TEXT (unique) | The URL-friendly identifier (e.g., `q1-2025-projection-a3b2`) |
| custom_title | TEXT | Optional custom title for the landing page |
| custom_message | TEXT | Optional personalized message to the recipient |
| is_active | BOOLEAN | Toggle to enable/disable the link |
| visit_count | INTEGER | Total page views |
| last_visited_at | TIMESTAMPTZ | When the link was last opened |
| expires_at | TIMESTAMPTZ | Optional expiration date |
| created_at | TIMESTAMPTZ | When the link was created |

A separate analytics table tracks individual events:

**Table: `share_link_events`**

| Column | Type | Purpose |
|---|---|---|
| id | UUID | Primary key |
| share_link_id | UUID | References the share link |
| event_type | TEXT | Type of event (e.g., `visit`, `pdf_download`, `scroll_to_pl`) |
| visitor_ip | TEXT | Anonymous visitor identifier |
| user_agent | TEXT | Browser info |
| created_at | TIMESTAMPTZ | When the event occurred |

**Security:**
- RLS on `share_links`: Only the owner can create, read, update, and delete their own links
- RLS on `share_link_events`: Owner can read events for their links; public insert allowed (for tracking)
- A public SELECT policy on `scenarios` will be added so that when `is_public = true`, the scenario data can be read by anyone (this leverages the existing `is_public` column)

### 2. Backend Function: `track-share-visit`

A backend function that handles public link visits securely:
- Looks up the share link by slug
- Validates the link is active and not expired
- Increments the visit counter
- Logs the visit event with metadata (browser, timestamp)
- Returns the full scenario data (inputs + outputs) along with customization fields
- No authentication required (public endpoint)

### 3. New Route: `/share/:slug`

A new public route in the app router. This page does NOT require login.

**URL format:** `https://your-app.lovable.app/share/q1-2025-projection-a3b2`

### 4. Public Landing Page Component

A polished, read-only presentation page designed for recruiting conversations:

- **Branded header** with Lending Heights logo, custom title, and custom message
- **KPI summary strip** showing the 4 most important metrics (Net Revenue, Net Income, Profit Margin, Revenue per LO)
- **3-Year P&L table** (reuses the existing PLDisplay component in read-only mode)
- **Visual charts** (Revenue vs Expense trend + Expense Breakdown)
- **Footer** with "Powered by Lending Heights" branding and generation date
- **Expired/inactive state** with a friendly message if the link is no longer valid

### 5. Share Link Manager Dialog

A new dialog accessible from the Dashboard header and from the Scenario Manager:

**Creating a share link:**
- Custom title field (defaults to scenario name)
- Custom message field (optional, e.g., "Hey John, here's the branch projection we discussed")
- Optional expiration date picker
- Auto-generated slug based on scenario name + random suffix
- "Generate Link" button

**Managing existing links:**
- List of all share links for the current scenario
- Each shows: custom title, visit count, created date, active/inactive status
- Copy link button (copies full URL to clipboard)
- Toggle active/inactive
- Delete link
- View analytics (visit count, last visited)

### 6. Share Button in Dashboard Header

A new "Share" button added to the header next to the existing Export PDF button:
- Only enabled when a scenario is saved (has an ID)
- Opens the Share Link Manager dialog
- Icon: lucide `Share2` or `Link`

### 7. Share Button in Scenario Manager (Load Mode)

Each scenario card in the load dialog will get a small share icon button, allowing quick link generation from the scenario list.

---

## Technical Details

### Database Migration

```sql
-- Share links table
CREATE TABLE public.share_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario_id UUID NOT NULL REFERENCES public.scenarios(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  custom_title TEXT,
  custom_message TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  visit_count INTEGER NOT NULL DEFAULT 0,
  last_visited_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Events tracking table
CREATE TABLE public.share_link_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  share_link_id UUID NOT NULL REFERENCES public.share_links(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL DEFAULT 'visit',
  visitor_ip TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.share_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.share_link_events ENABLE ROW LEVEL SECURITY;

-- RLS: Owners manage their own share links
CREATE POLICY "Users manage own share links" ON public.share_links
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS: Anyone can read active share links by slug (for public page)
CREATE POLICY "Public can read active share links" ON public.share_links
  FOR SELECT USING (is_active = true);

-- RLS: Events - owner can read their link events
CREATE POLICY "Owners read own link events" ON public.share_link_events
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.share_links
      WHERE share_links.id = share_link_events.share_link_id
      AND share_links.user_id = auth.uid()
    )
  );

-- RLS: Allow public insert for tracking (anon users visiting)
CREATE POLICY "Anyone can insert events" ON public.share_link_events
  FOR INSERT WITH CHECK (true);

-- Update scenarios RLS to allow public reads when is_public = true
CREATE POLICY "Public can view public scenarios" ON public.scenarios
  FOR SELECT USING (is_public = true);
```

### New Files

| File | Purpose |
|---|---|
| `src/pages/SharedScenario.tsx` | The public landing page for shared links |
| `src/components/ShareLinkManager.tsx` | Dialog for creating/managing share links |
| `src/components/shared/SharedKPIStrip.tsx` | Compact KPI display for the public page |
| `src/components/shared/SharedPLTable.tsx` | Read-only P&L table for public viewing |
| `src/components/shared/SharedCharts.tsx` | Chart display for public viewing |
| `src/lib/shareLinks.ts` | Storage functions for share link CRUD |
| `supabase/functions/track-share-visit/index.ts` | Backend function for visit tracking |

### Modified Files

| File | Change |
|---|---|
| `src/App.tsx` | Add `/share/:slug` route |
| `src/components/DashboardHeader.tsx` | Add Share button |
| `src/components/Dashboard.tsx` | Wire up Share dialog |
| `src/components/ScenarioManager.tsx` | Add share icon to scenario cards |
| `src/lib/types.ts` | Add ShareLink type interface |

### Edge Function: `track-share-visit`

Handles the public visit flow:
1. Receives the slug as a query parameter
2. Looks up the share link (validates active + not expired)
3. Fetches the associated scenario data (using service role to bypass RLS)
4. Increments visit_count on the share link
5. Inserts a new event record
6. Returns scenario data + customization fields to the frontend

This keeps the tracking secure and server-side, preventing visit count manipulation.

### URL Slug Generation

Slugs are generated from the scenario name with a random suffix for uniqueness:
- "Q1 2025 Projection" becomes `q1-2025-projection-a3b2`
- Users can optionally customize the slug before generating

### Landing Page Responsive Design

The shared landing page will follow the same modern/friendly aesthetic:
- Full-width, mobile-responsive layout
- No navigation or login prompts
- Clean, presentation-ready design suitable for screen sharing
- Print-friendly CSS for recipients who want to save as PDF

---

## Implementation Sequence

1. **Database migration** - Create `share_links` and `share_link_events` tables with RLS policies, update scenarios RLS for public reads
2. **Type definitions** - Add `ShareLink` and `ShareLinkEvent` interfaces to types
3. **Backend function** - Build `track-share-visit` edge function for secure visit tracking
4. **Storage layer** - Create `shareLinks.ts` with CRUD functions (create, list, toggle, delete)
5. **Share Link Manager** - Build the dialog UI for creating and managing links
6. **Dashboard integration** - Add Share button to header and wire up the dialog
7. **Public landing page** - Build the `SharedScenario` page with KPIs, P&L, and charts
8. **Routing** - Add the `/share/:slug` public route to App.tsx
9. **Scenario Manager enhancement** - Add share icon to each scenario card in the load view

