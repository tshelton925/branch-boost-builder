import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { RevenueExpenseChart } from './charts/RevenueExpenseChart';
import { ExpenseBreakdown } from './charts/ExpenseBreakdown';
import { NetIncomeWaterfall } from './charts/NetIncomeWaterfall';
import { LOProductivityChart } from './charts/LOProductivityChart';

interface AnalyticsDashboardProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
}

export function AnalyticsDashboard({ inputs, outputs }: AnalyticsDashboardProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <RevenueExpenseChart outputs={outputs} />
      <ExpenseBreakdown outputs={outputs} yearIndex={0} />
      <NetIncomeWaterfall outputs={outputs} yearIndex={0} />
      <LOProductivityChart inputs={inputs} outputs={outputs} />
    </div>
  );
}
