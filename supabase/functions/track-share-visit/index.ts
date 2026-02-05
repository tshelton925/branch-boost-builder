import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return new Response(
        JSON.stringify({ error: 'Missing slug parameter' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Use service role to bypass RLS for reading/writing
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Look up the share link
    const { data: shareLink, error: linkError } = await supabaseAdmin
      .from('share_links')
      .select('*')
      .eq('slug', slug)
      .eq('is_active', true)
      .single();

    if (linkError || !shareLink) {
      console.log('Share link not found or inactive:', slug, linkError?.message);
      return new Response(
        JSON.stringify({ error: 'Link not found or inactive' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check expiration
    if (shareLink.expires_at && new Date(shareLink.expires_at) < new Date()) {
      console.log('Share link expired:', slug);
      return new Response(
        JSON.stringify({ error: 'This link has expired' }),
        { status: 410, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch the scenario data
    const { data: scenario, error: scenarioError } = await supabaseAdmin
      .from('scenarios')
      .select('*')
      .eq('id', shareLink.scenario_id)
      .single();

    if (scenarioError || !scenario) {
      console.error('Scenario not found:', shareLink.scenario_id, scenarioError?.message);
      return new Response(
        JSON.stringify({ error: 'Scenario not found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Increment visit count and update last_visited_at
    const { error: updateError } = await supabaseAdmin
      .from('share_links')
      .update({
        visit_count: (shareLink.visit_count || 0) + 1,
        last_visited_at: new Date().toISOString(),
      })
      .eq('id', shareLink.id);

    if (updateError) {
      console.error('Error updating visit count:', updateError.message);
    }

    // Log the visit event
    const userAgent = req.headers.get('user-agent') || null;
    const forwardedFor = req.headers.get('x-forwarded-for');
    const visitorIp = forwardedFor ? forwardedFor.split(',')[0].trim() : null;

    const { error: eventError } = await supabaseAdmin
      .from('share_link_events')
      .insert({
        share_link_id: shareLink.id,
        event_type: 'visit',
        visitor_ip: visitorIp,
        user_agent: userAgent,
      });

    if (eventError) {
      console.error('Error logging visit event:', eventError.message);
    }

    console.log(`Visit tracked for slug: ${slug}, total visits: ${(shareLink.visit_count || 0) + 1}`);

    // Return scenario data + share link customization
    return new Response(
      JSON.stringify({
        scenario: {
          name: scenario.name,
          inputs: scenario.inputs,
          outputs: scenario.outputs,
          created_at: scenario.created_at,
        },
        shareLink: {
          custom_title: shareLink.custom_title,
          custom_message: shareLink.custom_message,
          created_at: shareLink.created_at,
        },
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error in track-share-visit:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
