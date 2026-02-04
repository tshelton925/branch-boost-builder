import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { TrendIndicator } from './TrendIndicator';

interface KPICardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  tooltip: string;
  colorClass?: string;
  iconBgClass?: string;
  previousValue?: number;
  currentValue?: number;
  invertTrend?: boolean;
}

export function KPICard({
  label,
  value,
  icon: Icon,
  tooltip,
  colorClass = 'text-foreground',
  iconBgClass = 'bg-primary/10',
  previousValue,
  currentValue,
  invertTrend = false,
}: KPICardProps) {
  return (
    <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border-0 shadow-md">
      <CardContent className="p-5">
        <div className="absolute top-3 right-3">
          <div className={`p-2.5 rounded-xl ${iconBgClass}`}>
            <Icon className={`h-5 w-5 ${colorClass}`} />
          </div>
        </div>
        
        <div className="space-y-2 pr-14">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-3.5 w-3.5 text-muted-foreground/60 cursor-help" />
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          <div className="flex items-baseline">
            <span className={`text-2xl font-bold font-mono-numbers ${colorClass}`}>
              {value}
            </span>
            {currentValue !== undefined && (
              <TrendIndicator
                currentValue={currentValue}
                previousValue={previousValue}
                invertColors={invertTrend}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
