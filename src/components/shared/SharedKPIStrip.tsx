import { Card, CardContent } from '@/components/ui/card';
import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { calculateKPIs } from '@/lib/kpiCalculations';
import { formatCurrency, formatPercent, formatCompactCurrency } from '@/lib/formatters';
import { DollarSign, TrendingUp, Target, Users } from 'lucide-react';

interface SharedKPIStripProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
}

export function SharedKPIStrip({ inputs, outputs }: SharedKPIStripProps) {
  // Show Year 3 KPIs as the "target" projection
  const kpis = calculateKPIs(inputs, outputs, 2);

  const cards = [
    {
      label: 'Net Revenue (Yr 3)',
      value: formatCompactCurrency(kpis.netRevenue),
      icon: DollarSign,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Net Income (Yr 3)',
      value: formatCompactCurrency(kpis.netIncome),
      icon: TrendingUp,
      color: kpis.netIncome >= 0 ? 'text-success' : 'text-destructive',
      bgColor: kpis.netIncome >= 0 ? 'bg-success/10' : 'bg-destructive/10',
    },
    {
      label: 'Profit Margin',
      value: formatPercent(kpis.profitMargin),
      icon: Target,
      color: kpis.profitMargin >= 20 ? 'text-success' : kpis.profitMargin >= 0 ? 'text-warning' : 'text-destructive',
      bgColor: kpis.profitMargin >= 20 ? 'bg-success/10' : kpis.profitMargin >= 0 ? 'bg-warning/10' : 'bg-destructive/10',
    },
    {
      label: 'Revenue per LO',
      value: formatCompactCurrency(kpis.revenuePerLO),
      icon: Users,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.label} className="border-0 shadow-md">
          <CardContent className="p-4 flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${card.bgColor}`}>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground truncate">{card.label}</p>
              <p className={`text-lg font-bold ${card.color}`}>{card.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
