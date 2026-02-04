import { ProFormaInputs, ProFormaOutputs, KPIData } from './types';

export function calculateKPIs(
  inputs: ProFormaInputs,
  outputs: ProFormaOutputs,
  yearIndex: number
): KPIData {
  const units = [inputs.units_year1, inputs.units_year2, inputs.units_year3][yearIndex];
  
  const netRevenue = outputs.net_revenue[yearIndex];
  const netIncome = outputs.net_income[yearIndex];
  const totalExpenses = outputs.total_expenses[yearIndex];
  
  // Profit margin as percentage
  const profitMargin = netRevenue > 0 ? (netIncome / netRevenue) * 100 : 0;
  
  // Revenue per LO
  const revenuePerLO = inputs.num_los > 0 ? netRevenue / inputs.num_los : 0;
  
  // Cost per loan
  const costPerLoan = units > 0 ? totalExpenses / units : 0;
  
  // Break-even units calculation
  // Fixed costs: BM base + LO base + processor + assistant + marketing + other (non per-loan)
  const fixedCosts = 
    inputs.base_mgr_salary +
    inputs.num_los * inputs.base_lo_salary +
    inputs.num_processors * inputs.base_processor_salary +
    inputs.num_assistants * inputs.base_assistant_salary +
    inputs.marketing_expenses.reduce((sum, e) => 
      sum + (e.frequency === 'monthly' ? e.amount * 12 : e.amount), 0) +
    inputs.other_expenses.reduce((sum, e) => {
      if (e.frequency === 'monthly') return sum + e.amount * 12;
      if (e.frequency === 'annual') return sum + e.amount;
      return sum; // per-loan is variable
    }, 0);
  
  // Contribution margin per loan
  const revenuePerLoan = inputs.avg_loan_size * ((inputs.price_bps - inputs.lo_comp_bps) / 10000);
  // Variable costs per loan: BM override (15% of net revenue per loan) + per-loan expenses
  const bmOverridePerLoan = revenuePerLoan * 0.15;
  const perLoanExpenses = inputs.other_expenses
    .filter(e => e.frequency === 'per-loan')
    .reduce((sum, e) => sum + e.amount, 0);
  // Processing fee is approximately $500-795, use average for simplicity
  const avgProcessingFee = 600;
  const variableCostPerLoan = bmOverridePerLoan + perLoanExpenses + avgProcessingFee;
  
  const contributionMarginPerLoan = revenuePerLoan - variableCostPerLoan;
  const breakEvenUnits = contributionMarginPerLoan > 0 
    ? Math.ceil(fixedCosts / contributionMarginPerLoan) 
    : 0;
  
  // LO productivity: loans per LO per month
  const loProductivity = inputs.num_los > 0 ? (units / inputs.num_los) / 12 : 0;
  
  // Previous year values for trends (only for Year 2 and 3)
  let prevData: Partial<KPIData> = {};
  if (yearIndex > 0) {
    const prevUnits = [inputs.units_year1, inputs.units_year2, inputs.units_year3][yearIndex - 1];
    const prevNetRevenue = outputs.net_revenue[yearIndex - 1];
    const prevNetIncome = outputs.net_income[yearIndex - 1];
    const prevTotalExpenses = outputs.total_expenses[yearIndex - 1];
    
    prevData = {
      prevNetRevenue,
      prevNetIncome,
      prevProfitMargin: prevNetRevenue > 0 ? (prevNetIncome / prevNetRevenue) * 100 : 0,
      prevRevenuePerLO: inputs.num_los > 0 ? prevNetRevenue / inputs.num_los : 0,
      prevCostPerLoan: prevUnits > 0 ? prevTotalExpenses / prevUnits : 0,
      prevBreakEvenUnits: breakEvenUnits, // Same calculation applies
      prevLoProductivity: inputs.num_los > 0 ? (prevUnits / inputs.num_los) / 12 : 0,
      prevTotalExpenses,
    };
  }
  
  return {
    netRevenue,
    netIncome,
    profitMargin,
    revenuePerLO,
    costPerLoan,
    breakEvenUnits,
    loProductivity,
    totalExpenses,
    ...prevData,
  };
}
