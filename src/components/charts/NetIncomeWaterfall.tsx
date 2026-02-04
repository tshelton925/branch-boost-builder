import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProFormaOutputs } from '@/lib/types';
import { formatCompactCurrency } from '@/lib/formatters';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { ArrowRightLeft } from 'lucide-react';

interface NetIncomeWaterfallProps {
  outputs: ProFormaOutputs;
  yearIndex?: number;
}

export function NetIncomeWaterfall({ outputs, yearIndex = 0 }: NetIncomeWaterfallProps) {
  // Create waterfall data with running total
  const grossRevenue = outputs.gross_revenue[yearIndex];
  const loComp = outputs.lo_compensation[yearIndex];
  const bmComp = outputs.total_bm_comp[yearIndex];
  const loBase = outputs.lo_base_comp[yearIndex];
  const processing = outputs.branch_processing_fee[yearIndex];
  const support = outputs.processor_comp[yearIndex] + outputs.assistant_comp[yearIndex];
  const marketing = outputs.marketing_total[yearIndex];
  const other = outputs.other_expenses_total[yearIndex];
  const netIncome = outputs.net_income[yearIndex];

  const data = [
    { name: 'Gross Rev', value: grossRevenue, fill: 'hsl(142, 76%, 36%)', base: 0 },
    { name: 'LO Comp', value: -loComp, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp },
    { name: 'BM Comp', value: -bmComp, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp - bmComp },
    { name: 'LO Base', value: -loBase, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp - bmComp - loBase },
    { name: 'Processing', value: -processing, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp - bmComp - loBase - processing },
    { name: 'Support', value: -support, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp - bmComp - loBase - processing - support },
    { name: 'Marketing', value: -marketing, fill: 'hsl(0, 84%, 60%)', base: grossRevenue - loComp - bmComp - loBase - processing - support - marketing },
    { name: 'Other', value: -other, fill: 'hsl(0, 84%, 60%)', base: netIncome },
    { name: 'Net Income', value: netIncome, fill: netIncome >= 0 ? 'hsl(142, 76%, 36%)' : 'hsl(0, 84%, 60%)', base: 0 },
  ];

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ArrowRightLeft className="h-5 w-5 text-primary" />
          Net Income Waterfall (Year {yearIndex + 1})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis 
                tickFormatter={(value) => formatCompactCurrency(value)}
                className="text-xs"
              />
              <Tooltip
                formatter={(value: number) => formatCompactCurrency(Math.abs(value))}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" />
              <Bar 
                dataKey="base" 
                stackId="stack" 
                fill="transparent"
              />
              <Bar 
                dataKey="value" 
                stackId="stack"
                radius={[4, 4, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
