import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { formatCompactCurrency, formatCurrency } from '@/lib/formatters';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';

interface LOProductivityChartProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
}

export function LOProductivityChart({ inputs, outputs }: LOProductivityChartProps) {
  const units = [inputs.units_year1, inputs.units_year2, inputs.units_year3];
  
  const data = [
    {
      name: 'Year 1',
      'Revenue per LO': inputs.num_los > 0 ? outputs.net_revenue[0] / inputs.num_los : 0,
      'Units per LO': inputs.num_los > 0 ? units[0] / inputs.num_los : 0,
    },
    {
      name: 'Year 2',
      'Revenue per LO': inputs.num_los > 0 ? outputs.net_revenue[1] / inputs.num_los : 0,
      'Units per LO': inputs.num_los > 0 ? units[1] / inputs.num_los : 0,
    },
    {
      name: 'Year 3',
      'Revenue per LO': inputs.num_los > 0 ? outputs.net_revenue[2] / inputs.num_los : 0,
      'Units per LO': inputs.num_los > 0 ? units[2] / inputs.num_los : 0,
    },
  ];

  const avgRevenuePerLO = data.reduce((sum, d) => sum + d['Revenue per LO'], 0) / 3;
  const avgUnitsPerLO = data.reduce((sum, d) => sum + d['Units per LO'], 0) / 3;

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Users className="h-5 w-5 text-primary" />
          LO Productivity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis 
                yAxisId="left"
                tickFormatter={(value) => formatCompactCurrency(value)}
                className="text-xs"
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                className="text-xs"
              />
              <Tooltip
                formatter={(value: number, name: string) => {
                  if (name === 'Revenue per LO') return formatCurrency(value);
                  return Math.round(value);
                }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.5rem',
                }}
              />
              <Bar 
                yAxisId="left"
                dataKey="Revenue per LO" 
                fill="hsl(199, 89%, 48%)" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4 p-3 bg-muted/50 rounded-lg">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Avg Revenue/LO</p>
            <p className="font-semibold font-mono-numbers">{formatCurrency(avgRevenuePerLO)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">Avg Units/LO/Year</p>
            <p className="font-semibold font-mono-numbers">{avgUnitsPerLO.toFixed(1)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
