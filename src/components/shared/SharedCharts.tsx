import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProFormaOutputs } from '@/lib/types';
import { formatCompactCurrency, formatCurrency, formatPercent } from '@/lib/formatters';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import { TrendingUp, PieChart as PieChartIcon } from 'lucide-react';

const PIE_COLORS = [
  'hsl(199, 89%, 48%)',
  'hsl(186, 77%, 42%)',
  'hsl(142, 76%, 36%)',
  'hsl(38, 92%, 50%)',
  'hsl(280, 65%, 60%)',
  'hsl(0, 84%, 60%)',
];

interface SharedChartsProps {
  outputs: ProFormaOutputs;
}

export function SharedCharts({ outputs }: SharedChartsProps) {
  const lineData = [
    { name: 'Year 1', 'Net Revenue': outputs.net_revenue[0], 'Total Expenses': outputs.total_expenses[0], 'Net Income': outputs.net_income[0] },
    { name: 'Year 2', 'Net Revenue': outputs.net_revenue[1], 'Total Expenses': outputs.total_expenses[1], 'Net Income': outputs.net_income[1] },
    { name: 'Year 3', 'Net Revenue': outputs.net_revenue[2], 'Total Expenses': outputs.total_expenses[2], 'Net Income': outputs.net_income[2] },
  ];

  const pieData = [
    { name: 'Branch Mgr Comp', value: outputs.total_bm_comp[2] },
    { name: 'LO Base Comp', value: outputs.lo_base_comp[2] },
    { name: 'Processing', value: outputs.branch_processing_fee[2] },
    { name: 'Support Staff', value: outputs.processor_comp[2] + outputs.assistant_comp[2] },
    { name: 'Marketing', value: outputs.marketing_total[2] },
    { name: 'Other', value: outputs.other_expenses_total[2] },
  ].filter(item => item.value > 0);

  const pieTotal = pieData.reduce((sum, item) => sum + item.value, 0);

  const tooltipStyle = {
    backgroundColor: 'hsl(var(--card))',
    border: '1px solid hsl(var(--border))',
    borderRadius: '0.5rem',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Revenue vs Expense Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis tickFormatter={(v) => formatCompactCurrency(v)} className="text-xs" />
                <Tooltip formatter={(v: number) => formatCompactCurrency(v)} contentStyle={tooltipStyle} />
                <Legend />
                <Line type="monotone" dataKey="Net Revenue" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ fill: 'hsl(199, 89%, 48%)' }} />
                <Line type="monotone" dataKey="Total Expenses" stroke="hsl(186, 77%, 42%)" strokeWidth={2} dot={{ fill: 'hsl(186, 77%, 42%)' }} />
                <Line type="monotone" dataKey="Net Income" stroke="hsl(142, 76%, 36%)" strokeWidth={2} dot={{ fill: 'hsl(142, 76%, 36%)' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <PieChartIcon className="h-5 w-5 text-primary" />
            Expense Breakdown (Year 3)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => [
                    `${formatCurrency(value)} (${formatPercent((value / pieTotal) * 100)})`,
                    'Amount',
                  ]}
                  contentStyle={tooltipStyle}
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
