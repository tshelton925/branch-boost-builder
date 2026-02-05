import { supabase } from '@/integrations/supabase/client';
import { ShareLink } from './types';

function generateSlug(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 40);
  const suffix = Math.random().toString(36).substring(2, 6);
  return `${base}-${suffix}`;
}

interface CreateShareLinkParams {
  scenarioId: string;
  customTitle?: string;
  customMessage?: string;
  expiresAt?: string | null;
}

export async function createShareLink(params: CreateShareLinkParams): Promise<ShareLink | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  // First mark the scenario as public
  await supabase
    .from('scenarios')
    .update({ is_public: true })
    .eq('id', params.scenarioId)
    .eq('user_id', user.id);

  const slug = generateSlug(params.customTitle || 'scenario');

  const insertData: Record<string, unknown> = {
    scenario_id: params.scenarioId,
    user_id: user.id,
    slug,
    custom_title: params.customTitle || null,
    custom_message: params.customMessage || null,
    expires_at: params.expiresAt || null,
  };

  const { data, error } = await (supabase
    .from('share_links') as any)
    .insert(insertData)
    .select()
    .single();

  if (error) {
    console.error('Error creating share link:', error);
    throw error;
  }

  return data as unknown as ShareLink;
}

export async function getShareLinksForScenario(scenarioId: string): Promise<ShareLink[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await (supabase
    .from('share_links') as any)
    .select('*')
    .eq('scenario_id', scenarioId)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error loading share links:', error);
    return [];
  }

  return (data || []) as unknown as ShareLink[];
}

export async function toggleShareLink(id: string, isActive: boolean): Promise<boolean> {
  const { error } = await (supabase
    .from('share_links') as any)
    .update({ is_active: isActive })
    .eq('id', id);

  if (error) {
    console.error('Error toggling share link:', error);
    return false;
  }
  return true;
}

export async function deleteShareLink(id: string): Promise<boolean> {
  const { error } = await (supabase
    .from('share_links') as any)
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting share link:', error);
    return false;
  }
  return true;
}

export function getShareUrl(slug: string): string {
  return `${window.location.origin}/share/${slug}`;
}
