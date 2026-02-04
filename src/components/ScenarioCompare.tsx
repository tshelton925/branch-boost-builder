import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProFormaScenario } from '@/lib/types';
import { loadScenarios } from '@/lib/storage';
import { formatCurrency, formatPercent, formatNumber } from '@/lib/formatters';
import { calculateKPIs } from '@/lib/kpiCalculations';
import { GitCompare, Loader2, ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface ScenarioCompareProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentInputs: any;
  currentOutputs: any;
}

export function ScenarioCompare({
  open,
  onOpenChange,
  currentInputs,
  currentOutputs,
}: ScenarioCompareProps) {
  const [scenarios, setScenarios] = useState<ProFormaScenario[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedScenario1, setSelectedScenario1] = useState<string>('current');
  const [selectedScenario2, setSelectedScenario2] = useState<string>('');
  const [yearIndex, setYearIndex] = useState(0);

  useEffect(() => {
    if (open) {
      loadAllScenarios();
    }
  }, [open]);

  const loadAllScenarios = async () => {
    setLoading(true);
    const data = await loadScenarios();
    setScenarios(data);
    if (data.length > 0) {
      setSelectedScenario2(data[0].id);
    }
    setLoading(false);
  };

  const getScenarioData = (id: string) => {
    if (id === 'current') {
      return { inputs: currentInputs, outputs: currentOutputs, name: 'Current (Unsaved)' };
    }
    const scenario = scenarios.find(s => s.id === id);
    return scenario ? { inputs: scenario.inputs, outputs: scenario.outputs, name: scenario.name } : null;
  };

  const scenario1Data = getScenarioData(selectedScenario1);
  const scenario2Data = selectedScenario2 ? getScenarioData(selectedScenario2) : null;

  const getComparisonMetrics = () => {
    if (!scenario1Data || !scenario2Data) return [];

    const kpi1 = calculateKPIs(scenario1Data.inputs, scenario1Data.outputs, yearIndex);
    const kpi2 = calculateKPIs(scenario2Data.inputs, scenario2Data.outputs, yearIndex);

    return [
      { label: 'Net Revenue', value1: kpi1.netRevenue, value2: kpi2.netRevenue, format: 'currency' },
      { label: 'Net Income', value1: kpi1.netIncome, value2: kpi2.netIncome, format: 'currency' },
      { label: 'Profit Margin', value1: kpi1.profitMargin, value2: kpi2.profitMargin, format: 'percent' },
      { label: 'Total Expenses', value1: kpi1.totalExpenses, value2: kpi2.totalExpenses, format: 'currency', invert: true },
      { label: 'Revenue per LO', value1: kpi1.revenuePerLO, value2: kpi2.revenuePerLO, format: 'currency' },
      { label: 'Cost per Loan', value1: kpi1.costPerLoan, value2: kpi2.costPerLoan, format: 'currency', invert: true },
      { label: 'Break-even Units', value1: kpi1.breakEvenUnits, value2: kpi2.breakEvenUnits, format: 'number', invert: true },
      { label: 'LO Productivity', value1: kpi1.loProductivity, value2: kpi2.loProductivity, format: 'decimal' },
    ];
  };

  const formatValue = (value: number, format: string) => {
    switch (format) {
      case 'currency': return formatCurrency(value);
      case 'percent': return formatPercent(value);
      case 'number': return formatNumber(value);
      case 'decimal': return value.toFixed(1);
      default: return value.toString();
    }
  };

  const getDiffIndicator = (value1: number, value2: number, invert = false) => {
    const diff = value1 - value2;
    const isPositive = invert ? diff < 0 : diff > 0;
    const isNeutral = Math.abs(diff) < 0.01;

    if (isNeutral) {
      return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
    if (isPositive) {
      return <ArrowUp className="h-4 w-4 text-success" />;
    }
    return <ArrowDown className="h-4 w-4 text-destructive" />;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GitCompare className="h-5 w-5 text-primary" />
            Compare Scenarios
          </DialogTitle>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : scenarios.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>No saved scenarios to compare.</p>
            <p className="text-sm mt-1">Save a scenario first to enable comparison.</p>
          </div>
        ) : (
          <div className="space-y-6 pt-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Scenario 1</label>
                <Select value={selectedScenario1} onValueChange={setSelectedScenario1}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current">Current (Unsaved)</SelectItem>
                    {scenarios.map(s => (
                      <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Scenario 2</label>
                <Select value={selectedScenario2} onValueChange={setSelectedScenario2}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select scenario" />
                  </SelectTrigger>
                  <SelectContent>
                    {scenarios.map(s => (
                      <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Year</label>
                <Select value={String(yearIndex)} onValueChange={(v) => setYearIndex(Number(v))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Year 1</SelectItem>
                    <SelectItem value="1">Year 2</SelectItem>
                    <SelectItem value="2">Year 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {scenario1Data && scenario2Data && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Metric</TableHead>
                        <TableHead className="text-right">{scenario1Data.name}</TableHead>
                        <TableHead className="text-center w-16">vs</TableHead>
                        <TableHead className="text-right">{scenario2Data.name}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getComparisonMetrics().map((metric) => (
                        <TableRow key={metric.label}>
                          <TableCell className="font-medium">{metric.label}</TableCell>
                          <TableCell className="text-right font-mono-numbers">
                            {formatValue(metric.value1, metric.format)}
                          </TableCell>
                          <TableCell className="text-center">
                            {getDiffIndicator(metric.value1, metric.value2, metric.invert)}
                          </TableCell>
                          <TableCell className="text-right font-mono-numbers">
                            {formatValue(metric.value2, metric.format)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
