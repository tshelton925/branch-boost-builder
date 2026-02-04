import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProFormaOutputs } from '@/lib/types';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';

interface ExpenseBreakdownProps {
  outputs: ProFormaOutputs;
  yearIndex?: number;
}

const COLORS = [
  'hsl(199, 89%, 48%)',  // primary
  'hsl(186, 77%, 42%)',  // accent
  'hsl(142, 76%, 36%)',  // success
  'hsl(38, 92%, 50%)',   // warning
  'hsl(280, 65%, 60%)',  // purple
  'hsl(0, 84%, 60%)',    // destructive
];

export function ExpenseBreakdown({ outputs, yearIndex = 0 }: ExpenseBreakdownProps) {
  const data = [
    { name: 'Branch Mgr Comp', value: outputs.total_bm_comp[yearIndex] },
    { name: 'LO Base Comp', value: outputs.lo_base_comp[yearIndex] },
    { name: 'Processing', value: outputs.branch_processing_fee[yearIndex] },
    { name: 'Support Staff', value: outputs.processor_comp[yearIndex] + outputs.assistant_comp[yearIndex] },
    { name: 'Marketing', value: outputs.marketing_total[yearIndex] },
    { name: 'Other', value: outputs.other_expenses_total[yearIndex] },
  ].filter(item => item.value > 0);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <PieChartIcon className="h-5 w-5 text-primary" />
          Expense Breakdown (Year {yearIndex + 1})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [
                  `${formatCurrency(value)} (${formatPercent((value / total) * 100)})`,
                  'Amount'
                ]}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend 
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
