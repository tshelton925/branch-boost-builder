
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

-- RLS: Owners manage their own share links (for authenticated CRUD)
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

-- Add index on slug for fast lookups
CREATE INDEX idx_share_links_slug ON public.share_links(slug);

-- Add index on scenario_id for listing links per scenario
CREATE INDEX idx_share_links_scenario ON public.share_links(scenario_id);
