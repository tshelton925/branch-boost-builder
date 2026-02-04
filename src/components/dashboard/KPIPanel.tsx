import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KPICard } from './KPICard';
import { ProFormaInputs, ProFormaOutputs, KPIData } from '@/lib/types';
import { calculateKPIs } from '@/lib/kpiCalculations';
import { formatCurrency, formatPercent, formatNumber } from '@/lib/formatters';
import {
  DollarSign,
  PiggyBank,
  Percent,
  Users,
  Calculator,
  Target,
  BarChart3,
  TrendingUp,
} from 'lucide-react';

interface KPIPanelProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
}

export function KPIPanel({ inputs, outputs }: KPIPanelProps) {
  const [selectedYear, setSelectedYear] = useState<number>(0);

  const kpiData: KPIData = calculateKPIs(inputs, outputs, selectedYear);

  const getNetIncomeColor = (value: number) => {
    return value >= 0 ? 'text-success' : 'text-destructive';
  };

  const getProfitMarginColor = (value: number) => {
    if (value >= 20) return 'text-success';
    if (value >= 10) return 'text-warning';
    return 'text-destructive';
  };

  const getProductivityColor = (value: number) => {
    return value >= 3 ? 'text-success' : 'text-muted-foreground';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Key Performance Indicators</h2>
        <Tabs
          value={String(selectedYear)}
          onValueChange={(v) => setSelectedYear(Number(v))}
          className="w-auto"
        >
          <TabsList className="h-9">
            <TabsTrigger value="0" className="text-xs px-3">Year 1</TabsTrigger>
            <TabsTrigger value="1" className="text-xs px-3">Year 2</TabsTrigger>
            <TabsTrigger value="2" className="text-xs px-3">Year 3</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          label="Net Revenue"
          value={formatCurrency(kpiData.netRevenue)}
          icon={DollarSign}
          tooltip="Revenue after LO compensation. This is your top-line income before operating expenses."
          colorClass="text-primary"
          iconBgClass="bg-primary/10"
          currentValue={kpiData.netRevenue}
          previousValue={kpiData.prevNetRevenue}
        />

        <KPICard
          label="Net Income"
          value={formatCurrency(kpiData.netIncome)}
          icon={PiggyBank}
          tooltip="Bottom-line profit after all expenses. Positive means profitable, negative means loss."
          colorClass={getNetIncomeColor(kpiData.netIncome)}
          iconBgClass={kpiData.netIncome >= 0 ? 'bg-success/10' : 'bg-destructive/10'}
          currentValue={kpiData.netIncome}
          previousValue={kpiData.prevNetIncome}
        />

        <KPICard
          label="Profit Margin"
          value={formatPercent(kpiData.profitMargin)}
          icon={Percent}
          tooltip="Net Income as a percentage of Net Revenue. 20%+ is excellent, 10-20% is good."
          colorClass={getProfitMarginColor(kpiData.profitMargin)}
          iconBgClass="bg-accent/10"
          currentValue={kpiData.profitMargin}
          previousValue={kpiData.prevProfitMargin}
        />

        <KPICard
          label="Revenue per LO"
          value={formatCurrency(kpiData.revenuePerLO)}
          icon={Users}
          tooltip="Net revenue generated per loan officer. Higher values indicate more productive LOs."
          colorClass="text-primary"
          iconBgClass="bg-primary/10"
          currentValue={kpiData.revenuePerLO}
          previousValue={kpiData.prevRevenuePerLO}
        />

        <KPICard
          label="Cost per Loan"
          value={formatCurrency(kpiData.costPerLoan)}
          icon={Calculator}
          tooltip="Total operating cost divided by number of loans. Lower is more efficient."
          colorClass="text-accent"
          iconBgClass="bg-accent/10"
          currentValue={kpiData.costPerLoan}
          previousValue={kpiData.prevCostPerLoan}
          invertTrend
        />

        <KPICard
          label="Break-even Units"
          value={formatNumber(kpiData.breakEvenUnits)}
          icon={Target}
          tooltip="Number of loans needed to cover all fixed costs. Fewer is better."
          colorClass="text-warning"
          iconBgClass="bg-warning/10"
          currentValue={kpiData.breakEvenUnits}
          previousValue={kpiData.prevBreakEvenUnits}
          invertTrend
        />

        <KPICard
          label="LO Productivity"
          value={`${kpiData.loProductivity.toFixed(1)}/mo`}
          icon={BarChart3}
          tooltip="Average loans closed per LO per month. 3+ is considered good productivity."
          colorClass={getProductivityColor(kpiData.loProductivity)}
          iconBgClass="bg-success/10"
          currentValue={kpiData.loProductivity}
          previousValue={kpiData.prevLoProductivity}
        />

        <KPICard
          label="Total Expenses"
          value={formatCurrency(kpiData.totalExpenses)}
          icon={TrendingUp}
          tooltip="Sum of all operating expenses including compensation, processing, and overhead."
          colorClass="text-muted-foreground"
          iconBgClass="bg-muted"
          currentValue={kpiData.totalExpenses}
          previousValue={kpiData.prevTotalExpenses}
          invertTrend
        />
      </div>
    </div>
  );
}
