import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { formatCurrency, formatNumber, formatPercent } from '@/lib/formatters';
import { calculateKPIs } from '@/lib/kpiCalculations';
import { useToast } from '@/hooks/use-toast';

interface PDFExportProps {
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
  scenarioName: string;
}

export function usePDFExport() {
  const { toast } = useToast();

  const exportToPDF = async ({ inputs, outputs, scenarioName }: PDFExportProps) => {
    // Create a printable HTML document
    const kpiYear1 = calculateKPIs(inputs, outputs, 0);
    const kpiYear2 = calculateKPIs(inputs, outputs, 1);
    const kpiYear3 = calculateKPIs(inputs, outputs, 2);
    const units = [inputs.units_year1, inputs.units_year2, inputs.units_year3];

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${scenarioName || 'Pro Forma Report'} - Lending Heights</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; color: #1a1a1a; }
          .header { text-align: center; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #0ea5e9; }
          .header h1 { font-size: 28px; color: #0ea5e9; margin-bottom: 8px; }
          .header h2 { font-size: 18px; font-weight: normal; color: #666; }
          .section { margin-bottom: 32px; }
          .section-title { font-size: 16px; font-weight: 600; color: #0ea5e9; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e5e5; }
          .kpi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .kpi-card { background: #f8f9fa; padding: 16px; border-radius: 8px; }
          .kpi-label { font-size: 12px; color: #666; margin-bottom: 4px; }
          .kpi-value { font-size: 18px; font-weight: 600; font-family: monospace; }
          .kpi-value.positive { color: #16a34a; }
          .kpi-value.negative { color: #dc2626; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e5e5e5; }
          th { background: #f8f9fa; font-weight: 600; font-size: 12px; text-transform: uppercase; }
          td { font-family: monospace; }
          td.right { text-align: right; }
          tr.total td { font-weight: 600; background: #f0f9ff; }
          tr.income td { font-weight: 700; }
          tr.income td.positive { color: #16a34a; }
          tr.income td.negative { color: #dc2626; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center; font-size: 12px; color: #999; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Lending Heights</h1>
          <h2>${scenarioName || 'Pro Forma Financial Projection'}</h2>
          <p style="font-size: 12px; color: #999; margin-top: 8px;">Generated: ${new Date().toLocaleDateString()}</p>
        </div>

        <div class="section">
          <div class="section-title">Key Performance Indicators (Year 1)</div>
          <div class="kpi-grid">
            <div class="kpi-card">
              <div class="kpi-label">Net Revenue</div>
              <div class="kpi-value">${formatCurrency(kpiYear1.netRevenue)}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Net Income</div>
              <div class="kpi-value ${kpiYear1.netIncome >= 0 ? 'positive' : 'negative'}">${formatCurrency(kpiYear1.netIncome)}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Profit Margin</div>
              <div class="kpi-value">${formatPercent(kpiYear1.profitMargin)}</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-label">Revenue per LO</div>
              <div class="kpi-value">${formatCurrency(kpiYear1.revenuePerLO)}</div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">3-Year P&L Summary</div>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th class="right">Year 1 (${units[0]} loans)</th>
                <th class="right">Year 2 (${units[1]} loans)</th>
                <th class="right">Year 3 (${units[2]} loans)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan Volume</td>
                <td class="right">${formatCurrency(outputs.loan_volume[0])}</td>
                <td class="right">${formatCurrency(outputs.loan_volume[1])}</td>
                <td class="right">${formatCurrency(outputs.loan_volume[2])}</td>
              </tr>
              <tr>
                <td>Gross Revenue</td>
                <td class="right">${formatCurrency(outputs.gross_revenue[0])}</td>
                <td class="right">${formatCurrency(outputs.gross_revenue[1])}</td>
                <td class="right">${formatCurrency(outputs.gross_revenue[2])}</td>
              </tr>
              <tr class="total">
                <td>Net Revenue</td>
                <td class="right">${formatCurrency(outputs.net_revenue[0])}</td>
                <td class="right">${formatCurrency(outputs.net_revenue[1])}</td>
                <td class="right">${formatCurrency(outputs.net_revenue[2])}</td>
              </tr>
              <tr>
                <td>Total BM Compensation</td>
                <td class="right">${formatCurrency(outputs.total_bm_comp[0])}</td>
                <td class="right">${formatCurrency(outputs.total_bm_comp[1])}</td>
                <td class="right">${formatCurrency(outputs.total_bm_comp[2])}</td>
              </tr>
              <tr>
                <td>LO Base Compensation</td>
                <td class="right">${formatCurrency(outputs.lo_base_comp[0])}</td>
                <td class="right">${formatCurrency(outputs.lo_base_comp[1])}</td>
                <td class="right">${formatCurrency(outputs.lo_base_comp[2])}</td>
              </tr>
              <tr class="total">
                <td>Total Expenses</td>
                <td class="right">${formatCurrency(outputs.total_expenses[0])}</td>
                <td class="right">${formatCurrency(outputs.total_expenses[1])}</td>
                <td class="right">${formatCurrency(outputs.total_expenses[2])}</td>
              </tr>
              <tr class="income">
                <td>Net Income</td>
                <td class="right ${outputs.net_income[0] >= 0 ? 'positive' : 'negative'}">${formatCurrency(outputs.net_income[0])}</td>
                <td class="right ${outputs.net_income[1] >= 0 ? 'positive' : 'negative'}">${formatCurrency(outputs.net_income[1])}</td>
                <td class="right ${outputs.net_income[2] >= 0 ? 'positive' : 'negative'}">${formatCurrency(outputs.net_income[2])}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">
          <div class="section-title">Assumptions</div>
          <table>
            <tbody>
              <tr><td>Average Loan Size</td><td class="right">${formatCurrency(inputs.avg_loan_size)}</td></tr>
              <tr><td>Pricing (BPS)</td><td class="right">${inputs.price_bps} bps</td></tr>
              <tr><td>LO Compensation (BPS)</td><td class="right">${inputs.lo_comp_bps} bps</td></tr>
              <tr><td>Number of LOs</td><td class="right">${inputs.num_los}</td></tr>
              <tr><td>Branch Manager Base Salary</td><td class="right">${formatCurrency(inputs.base_mgr_salary)}</td></tr>
            </tbody>
          </table>
        </div>

        <div class="footer">
          <p>© ${new Date().getFullYear()} Lending Heights - Pro Forma Builder</p>
        </div>
      </body>
      </html>
    `;

    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      
      // Small delay to ensure content is loaded
      setTimeout(() => {
        printWindow.print();
      }, 250);
      
      toast({
        title: 'PDF Ready',
        description: 'Use your browser\'s print dialog to save as PDF.',
      });
    } else {
      toast({
        title: 'Export failed',
        description: 'Please allow popups to export PDF.',
        variant: 'destructive',
      });
    }
  };

  return { exportToPDF };
}
