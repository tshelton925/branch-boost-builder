import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProFormaOutputs } from '@/lib/types';
import { formatCompactCurrency } from '@/lib/formatters';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface RevenueExpenseChartProps {
  outputs: ProFormaOutputs;
}

export function RevenueExpenseChart({ outputs }: RevenueExpenseChartProps) {
  const data = [
    {
      name: 'Year 1',
      'Net Revenue': outputs.net_revenue[0],
      'Total Expenses': outputs.total_expenses[0],
      'Net Income': outputs.net_income[0],
    },
    {
      name: 'Year 2',
      'Net Revenue': outputs.net_revenue[1],
      'Total Expenses': outputs.total_expenses[1],
      'Net Income': outputs.net_income[1],
    },
    {
      name: 'Year 3',
      'Net Revenue': outputs.net_revenue[2],
      'Total Expenses': outputs.total_expenses[2],
      'Net Income': outputs.net_income[2],
    },
  ];

  return (
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
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis 
                tickFormatter={(value) => formatCompactCurrency(value)}
                className="text-xs"
              />
              <Tooltip 
                formatter={(value: number) => formatCompactCurrency(value)}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="Net Revenue" 
                stroke="hsl(199, 89%, 48%)" 
                strokeWidth={2}
                dot={{ fill: 'hsl(199, 89%, 48%)' }}
              />
              <Line 
                type="monotone" 
                dataKey="Total Expenses" 
                stroke="hsl(186, 77%, 42%)" 
                strokeWidth={2}
                dot={{ fill: 'hsl(186, 77%, 42%)' }}
              />
              <Line 
                type="monotone" 
                dataKey="Net Income" 
                stroke="hsl(142, 76%, 36%)" 
                strokeWidth={2}
                dot={{ fill: 'hsl(142, 76%, 36%)' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
