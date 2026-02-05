import { useState, useEffect, useCallback, useMemo } from 'react';
import { ProFormaScenario } from '@/lib/types';
import { loadScenarios, deleteScenario } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

export function useScenarioPipeline() {
  const [scenarios, setScenarios] = useState<ProFormaScenario[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const { toast } = useToast();

  const fetchScenarios = useCallback(async () => {
    setLoading(true);
    try {
      const data = await loadScenarios();
      setScenarios(data);
    } catch (err) {
      console.error('Failed to load scenarios:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchScenarios();
  }, [fetchScenarios, refreshKey]);

  const refresh = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  const remove = useCallback(async (id: string) => {
    const success = await deleteScenario(id);
    if (success) {
      setScenarios(prev => prev.filter(s => s.id !== id));
      toast({ title: 'Scenario deleted', description: 'The scenario has been removed.' });
      return true;
    } else {
      toast({ title: 'Delete failed', description: 'Could not delete scenario.', variant: 'destructive' });
      return false;
    }
  }, [toast]);

  const filteredScenarios = useMemo(() => {
    if (!searchQuery.trim()) return scenarios;
    const q = searchQuery.toLowerCase();
    return scenarios.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.tags && s.tags.some(t => t.toLowerCase().includes(q)))
    );
  }, [scenarios, searchQuery]);

  return {
    scenarios: filteredScenarios,
    allScenarios: scenarios,
    loading,
    refresh,
    remove,
    searchQuery,
    setSearchQuery,
  };
}
