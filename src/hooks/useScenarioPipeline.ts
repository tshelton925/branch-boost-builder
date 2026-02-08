import { useState, useEffect, useCallback, useMemo } from 'react';
import { ProFormaScenario } from '@/lib/types';
import { loadScenarios, deleteScenario, duplicateScenario, updateScenarioName } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';

export type SortOption = 'recent' | 'alphabetical' | 'oldest';

export function useScenarioPipeline() {
  const [scenarios, setScenarios] = useState<ProFormaScenario[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('recent');
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

  const duplicate = useCallback(async (id: string) => {
    try {
      const newScenario = await duplicateScenario(id);
      if (newScenario) {
        setScenarios(prev => [newScenario, ...prev]);
        toast({ title: 'Scenario duplicated', description: `"${newScenario.name}" created.` });
        return newScenario;
      }
    } catch {
      toast({ title: 'Duplicate failed', description: 'Could not duplicate scenario.', variant: 'destructive' });
    }
    return null;
  }, [toast]);

  const rename = useCallback(async (id: string, newName: string) => {
    const success = await updateScenarioName(id, newName);
    if (success) {
      setScenarios(prev => prev.map(s => s.id === id ? { ...s, name: newName } : s));
      toast({ title: 'Renamed', description: `Scenario renamed to "${newName}".` });
      return true;
    } else {
      toast({ title: 'Rename failed', description: 'Could not rename scenario.', variant: 'destructive' });
      return false;
    }
  }, [toast]);

  const filteredAndSortedScenarios = useMemo(() => {
    let result = scenarios;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        (s.tags && s.tags.some(t => t.toLowerCase().includes(q)))
      );
    }

    const sorted = [...result];
    switch (sortBy) {
      case 'alphabetical':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'oldest':
        sorted.sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime());
        break;
      case 'recent':
      default:
        sorted.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        break;
    }

    return sorted;
  }, [scenarios, searchQuery, sortBy]);

  return {
    scenarios: filteredAndSortedScenarios,
    allScenarios: scenarios,
    loading,
    refresh,
    remove,
    duplicate,
    rename,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  };
}
