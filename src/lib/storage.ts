import { supabase } from '@/integrations/supabase/client';
import { ProFormaInputs, ProFormaOutputs, ProFormaScenario } from './types';
import { Json } from '@/integrations/supabase/types';

interface SaveScenarioParams {
  name: string;
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
  tags?: string[];
}

interface UpdateScenarioParams extends SaveScenarioParams {
  id: string;
}

export async function saveScenario(params: SaveScenarioParams): Promise<ProFormaScenario | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('scenarios')
    .insert({
      name: params.name,
      inputs: params.inputs as unknown as Json,
      outputs: params.outputs as unknown as Json,
      tags: params.tags || [],
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    console.error('Error saving scenario:', error);
    throw error;
  }

  return {
    ...data,
    inputs: data.inputs as unknown as ProFormaInputs,
    outputs: data.outputs as unknown as ProFormaOutputs,
  };
}

export async function updateScenario(params: UpdateScenarioParams): Promise<ProFormaScenario | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('scenarios')
    .update({
      name: params.name,
      inputs: params.inputs as unknown as Json,
      outputs: params.outputs as unknown as Json,
      tags: params.tags || [],
    })
    .eq('id', params.id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    console.error('Error updating scenario:', error);
    throw error;
  }

  return {
    ...data,
    inputs: data.inputs as unknown as ProFormaInputs,
    outputs: data.outputs as unknown as ProFormaOutputs,
  };
}

export async function loadScenarios(): Promise<ProFormaScenario[]> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from('scenarios')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error loading scenarios:', error);
    return [];
  }

  return data.map(scenario => ({
    ...scenario,
    inputs: scenario.inputs as unknown as ProFormaInputs,
    outputs: scenario.outputs as unknown as ProFormaOutputs,
  }));
}

export async function loadScenarioById(id: string): Promise<ProFormaScenario | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from('scenarios')
    .select('*')
    .eq('id', id)
    .eq('user_id', user.id)
    .single();

  if (error) {
    console.error('Error loading scenario:', error);
    return null;
  }

  return {
    ...data,
    inputs: data.inputs as unknown as ProFormaInputs,
    outputs: data.outputs as unknown as ProFormaOutputs,
  };
}

export async function deleteScenario(id: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from('scenarios')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error deleting scenario:', error);
    return false;
  }

  return true;
}

export async function duplicateScenario(id: string): Promise<ProFormaScenario | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const original = await loadScenarioById(id);
  if (!original) {
    throw new Error('Scenario not found');
  }

  const { data, error } = await supabase
    .from('scenarios')
    .insert({
      name: `${original.name} (Copy)`,
      inputs: original.inputs as unknown as Json,
      outputs: original.outputs as unknown as Json,
      tags: original.tags || [],
      user_id: user.id,
    })
    .select()
    .single();

  if (error) {
    console.error('Error duplicating scenario:', error);
    throw error;
  }

  return {
    ...data,
    inputs: data.inputs as unknown as ProFormaInputs,
    outputs: data.outputs as unknown as ProFormaOutputs,
  };
}

export async function updateScenarioName(id: string, name: string): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return false;
  }

  const { error } = await supabase
    .from('scenarios')
    .update({ name })
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error updating scenario name:', error);
    return false;
  }

  return true;
}
