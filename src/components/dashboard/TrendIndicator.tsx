import { TrendingUp, TrendingDown } from 'lucide-react';

interface TrendIndicatorProps {
  currentValue: number;
  previousValue?: number;
  isPercentage?: boolean;
  invertColors?: boolean;
}

export function TrendIndicator({
  currentValue,
  previousValue,
  isPercentage = false,
  invertColors = false,
}: TrendIndicatorProps) {
  if (previousValue === undefined || previousValue === 0) {
    return null;
  }

  const percentChange = ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
  const isPositive = percentChange > 0;
  const isNeutral = Math.abs(percentChange) < 0.5;

  if (isNeutral) {
    return (
      <span className="text-xs text-muted-foreground ml-2">
        —
      </span>
    );
  }

  const colorClass = invertColors
    ? isPositive ? 'text-destructive' : 'text-success'
    : isPositive ? 'text-success' : 'text-destructive';

  return (
    <span className={`inline-flex items-center text-xs font-medium ${colorClass} ml-2`}>
      {isPositive ? (
        <TrendingUp className="h-3 w-3 mr-0.5" />
      ) : (
        <TrendingDown className="h-3 w-3 mr-0.5" />
      )}
      {isPositive ? '+' : ''}{percentChange.toFixed(1)}%
    </span>
  );
}
