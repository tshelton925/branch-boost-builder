// Pro Forma Builder Type Definitions

export interface MarketingExpense {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'annual';
}

export interface OtherExpense {
  id: string;
  name: string;
  amount: number;
  frequency: 'monthly' | 'annual' | 'per-loan';
}

export interface ProFormaInputs {
  // Basic assumptions
  launch_date: string;
  units_year1: number;
  units_year2: number;
  units_year3: number;
  avg_loan_size: number;
  price_bps: number;
  lo_comp_bps: number;

  // Team structure
  num_los: number;
  num_processors: number;
  num_assistants: number;

  // Base salaries
  base_mgr_salary: number;
  base_lo_salary: number;
  base_processor_salary: number;
  base_assistant_salary: number;

  // Expenses
  marketing_expenses: MarketingExpense[];
  other_expenses: OtherExpense[];
}

export interface ProFormaOutputs {
  // Revenue calculations (3 years)
  loan_volume: number[];
  gross_revenue: number[];
  lo_compensation: number[];
  net_revenue: number[];

  // Expense calculations (3 years)
  branch_mgr_base_comp: number[];
  branch_mgr_override: number[];
  total_bm_comp: number[];
  lo_base_comp: number[];
  processor_comp: number[];
  assistant_comp: number[];
  branch_processing_fee: number[];
  marketing_total: number[];
  other_expenses_total: number[];
  total_expenses: number[];
  net_income: number[];
}

export interface ProFormaScenario {
  id: string;
  name: string;
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
  created_at: string;
  updated_at: string;
  tags?: string[];
  loom_video_url?: string;
  is_public?: boolean;
  user_id?: string;
}

export interface KPIData {
  netRevenue: number;
  netIncome: number;
  profitMargin: number;
  revenuePerLO: number;
  costPerLoan: number;
  breakEvenUnits: number;
  loProductivity: number;
  totalExpenses: number;
  // Previous year values for trends
  prevNetRevenue?: number;
  prevNetIncome?: number;
  prevProfitMargin?: number;
  prevRevenuePerLO?: number;
  prevCostPerLoan?: number;
  prevBreakEvenUnits?: number;
  prevLoProductivity?: number;
  prevTotalExpenses?: number;
}

export interface ShareLink {
  id: string;
  scenario_id: string;
  user_id: string;
  slug: string;
  custom_title: string | null;
  custom_message: string | null;
  is_active: boolean;
  visit_count: number;
  last_visited_at: string | null;
  expires_at: string | null;
  created_at: string;
}

export interface ShareLinkEvent {
  id: string;
  share_link_id: string;
  event_type: string;
  visitor_ip: string | null;
  user_agent: string | null;
  created_at: string;
}

export const DEFAULT_INPUTS: ProFormaInputs = {
  launch_date: new Date().toISOString().split('T')[0],
  units_year1: 150,
  units_year2: 200,
  units_year3: 250,
  avg_loan_size: 350000,
  price_bps: 250,
  lo_comp_bps: 125,
  num_los: 3,
  num_processors: 1,
  num_assistants: 1,
  base_mgr_salary: 75000,
  base_lo_salary: 50000,
  base_processor_salary: 45000,
  base_assistant_salary: 40000,
  marketing_expenses: [
    { id: '1', name: 'Digital Marketing', amount: 2000, frequency: 'monthly' },
    { id: '2', name: 'Print Materials', amount: 5000, frequency: 'annual' },
  ],
  other_expenses: [
    { id: '1', name: 'Rent', amount: 3000, frequency: 'monthly' },
    { id: '2', name: 'Utilities', amount: 500, frequency: 'monthly' },
    { id: '3', name: 'Office Supplies', amount: 300, frequency: 'monthly' },
  ],
};
