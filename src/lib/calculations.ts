import { ProFormaInputs, ProFormaOutputs } from './types';

export function calculateOutputs(inputs: ProFormaInputs): ProFormaOutputs {
  const years = [inputs.units_year1, inputs.units_year2, inputs.units_year3];
  
  // Revenue calculations
  const loan_volume = years.map(units => units * inputs.avg_loan_size);
  const gross_revenue = loan_volume.map(vol => vol * (inputs.price_bps / 10000));
  const lo_compensation = loan_volume.map(vol => vol * (inputs.lo_comp_bps / 10000));
  const net_revenue = gross_revenue.map((gr, i) => gr - lo_compensation[i]);

  // Branch Manager compensation
  const branch_mgr_base_comp = years.map(() => inputs.base_mgr_salary);
  const branch_mgr_override = net_revenue.map(nr => nr * 0.15);
  const total_bm_comp = branch_mgr_base_comp.map((base, i) => base + branch_mgr_override[i]);

  // Team compensation
  const lo_base_comp = years.map(() => inputs.num_los * inputs.base_lo_salary);
  const processor_comp = years.map(() => inputs.num_processors * inputs.base_processor_salary);
  const assistant_comp = years.map(() => inputs.num_assistants * inputs.base_assistant_salary);

  // Branch processing fee: $795 for first 25 loans, $500 for each additional
  const branch_processing_fee = years.map(units => {
    if (units <= 25) {
      return units * 795;
    }
    return 25 * 795 + (units - 25) * 500;
  });

  // Marketing expenses (annualized)
  const marketing_total = years.map(() => 
    inputs.marketing_expenses.reduce((sum, expense) => {
      if (expense.frequency === 'monthly') {
        return sum + expense.amount * 12;
      }
      return sum + expense.amount;
    }, 0)
  );

  // Other expenses (annualized, including per-loan)
  const other_expenses_total = years.map((units) => 
    inputs.other_expenses.reduce((sum, expense) => {
      if (expense.frequency === 'monthly') {
        return sum + expense.amount * 12;
      }
      if (expense.frequency === 'per-loan') {
        return sum + expense.amount * units;
      }
      return sum + expense.amount;
    }, 0)
  );

  // Total expenses
  const total_expenses = years.map((_, i) => 
    total_bm_comp[i] +
    lo_base_comp[i] +
    processor_comp[i] +
    assistant_comp[i] +
    branch_processing_fee[i] +
    marketing_total[i] +
    other_expenses_total[i]
  );

  // Net income
  const net_income = net_revenue.map((nr, i) => nr - total_expenses[i]);

  return {
    loan_volume,
    gross_revenue,
    lo_compensation,
    net_revenue,
    branch_mgr_base_comp,
    branch_mgr_override,
    total_bm_comp,
    lo_base_comp,
    processor_comp,
    assistant_comp,
    branch_processing_fee,
    marketing_total,
    other_expenses_total,
    total_expenses,
    net_income,
  };
}
