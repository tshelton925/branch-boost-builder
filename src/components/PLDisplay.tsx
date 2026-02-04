import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { formatCurrency, formatCompactCurrency } from '@/lib/formatters';
import { FileText } from 'lucide-react';

interface PLDisplayProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
}

export function PLDisplay({ inputs, outputs }: PLDisplayProps) {
  const years = ['Year 1', 'Year 2', 'Year 3'];
  const units = [inputs.units_year1, inputs.units_year2, inputs.units_year3];

  const rows = [
    { label: 'Loan Volume', values: outputs.loan_volume, type: 'currency', section: 'revenue' },
    { label: 'Gross Revenue', values: outputs.gross_revenue, type: 'currency', section: 'revenue' },
    { label: 'LO Compensation', values: outputs.lo_compensation.map(v => -v), type: 'currency', section: 'revenue', negative: true },
    { label: 'Net Revenue', values: outputs.net_revenue, type: 'currency', section: 'revenue', bold: true },
    { label: '', values: [], type: 'spacer', section: 'spacer' },
    { label: 'Branch Manager Base', values: outputs.branch_mgr_base_comp, type: 'currency', section: 'expense' },
    { label: 'Branch Manager Override (15%)', values: outputs.branch_mgr_override, type: 'currency', section: 'expense' },
    { label: 'Total BM Compensation', values: outputs.total_bm_comp, type: 'currency', section: 'expense', bold: true },
    { label: 'LO Base Compensation', values: outputs.lo_base_comp, type: 'currency', section: 'expense' },
    { label: 'Processor Compensation', values: outputs.processor_comp, type: 'currency', section: 'expense' },
    { label: 'Assistant Compensation', values: outputs.assistant_comp, type: 'currency', section: 'expense' },
    { label: 'Processing Fees', values: outputs.branch_processing_fee, type: 'currency', section: 'expense' },
    { label: 'Marketing', values: outputs.marketing_total, type: 'currency', section: 'expense' },
    { label: 'Other Expenses', values: outputs.other_expenses_total, type: 'currency', section: 'expense' },
    { label: 'Total Expenses', values: outputs.total_expenses, type: 'currency', section: 'expense', bold: true },
    { label: '', values: [], type: 'spacer', section: 'spacer' },
    { label: 'Net Income', values: outputs.net_income, type: 'currency', section: 'income', bold: true },
  ];

  const formatValue = (value: number, type: string) => {
    if (type === 'currency') {
      return formatCurrency(value);
    }
    return value.toLocaleString();
  };

  const getCellClass = (row: typeof rows[0], value: number) => {
    let classes = 'font-mono-numbers text-right';
    
    if (row.bold) {
      classes += ' font-semibold';
    }
    
    if (row.section === 'income') {
      classes += value >= 0 ? ' text-success' : ' text-destructive';
    } else if (row.negative) {
      classes += ' text-destructive';
    }
    
    return classes;
  };

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="h-5 w-5 text-primary" />
          Profit & Loss Statement
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-[280px]">Description</TableHead>
                {years.map((year, i) => (
                  <TableHead key={year} className="text-right">
                    <div>{year}</div>
                    <div className="text-xs font-normal text-muted-foreground">
                      {units[i]} loans
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, idx) => {
                if (row.type === 'spacer') {
                  return (
                    <TableRow key={idx} className="border-0">
                      <TableCell colSpan={4} className="h-4 p-0"></TableCell>
                    </TableRow>
                  );
                }
                
                return (
                  <TableRow 
                    key={idx}
                    className={row.bold ? 'bg-muted/30' : ''}
                  >
                    <TableCell className={row.bold ? 'font-semibold' : ''}>
                      {row.label}
                    </TableCell>
                    {row.values.map((value, i) => (
                      <TableCell key={i} className={getCellClass(row, value)}>
                        {formatValue(value, row.type)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
