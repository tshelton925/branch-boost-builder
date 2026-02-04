import { useState, useCallback, useMemo } from 'react';
import { ProFormaInputs, ProFormaOutputs, DEFAULT_INPUTS } from '@/lib/types';
import { calculateOutputs } from '@/lib/calculations';

export function useProForma() {
  const [inputs, setInputs] = useState<ProFormaInputs>(DEFAULT_INPUTS);
  const [currentScenarioId, setCurrentScenarioId] = useState<string | null>(null);
  const [currentScenarioName, setCurrentScenarioName] = useState<string>('');

  const outputs: ProFormaOutputs = useMemo(() => {
    return calculateOutputs(inputs);
  }, [inputs]);

  const updateInput = useCallback(<K extends keyof ProFormaInputs>(
    key: K,
    value: ProFormaInputs[K]
  ) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetInputs = useCallback(() => {
    setInputs(DEFAULT_INPUTS);
    setCurrentScenarioId(null);
    setCurrentScenarioName('');
  }, []);

  const loadScenarioData = useCallback((
    scenarioInputs: ProFormaInputs,
    id: string,
    name: string
  ) => {
    setInputs(scenarioInputs);
    setCurrentScenarioId(id);
    setCurrentScenarioName(name);
  }, []);

  return {
    inputs,
    outputs,
    updateInput,
    setInputs,
    resetInputs,
    loadScenarioData,
    currentScenarioId,
    currentScenarioName,
    setCurrentScenarioId,
    setCurrentScenarioName,
  };
}
