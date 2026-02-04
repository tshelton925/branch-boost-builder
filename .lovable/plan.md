

# Lending Heights Pro Forma Builder - Implementation Plan

## Overview
A comprehensive Pro Forma financial modeling application for mortgage branch managers, featuring 3-year P&L projections, recruiting analytics, scenario management, and professional reporting.

---

## Phase 1: Foundation & Database

### Database Setup
- Create `scenarios` table with JSONB fields for flexible input/output storage
- Enable Row Level Security with user-specific policies
- Set up auto-updating timestamps via database trigger

### Authentication
- Create a clean, modern Auth page with Sign In / Sign Up tabs
- Email/password authentication via Supabase
- Protected routes that redirect unauthenticated users
- Friendly onboarding experience

---

## Phase 2: Core Application

### Main Dashboard Layout
- **Header**: "Lending Heights" branding with modern friendly styling, Load/Save/Sign Out buttons
- **KPI Panel**: 8 key metrics displayed as visually appealing cards with year selector tabs
- **Main Content Tabs**: Assumptions, Expenses, Analytics, P&L Statement
- **Footer**: Clean copyright footer

### KPI Dashboard (8 Metrics)
1. Net Revenue - with trend indicators
2. Net Income - color-coded green/red
3. Profit Margin - performance-based coloring
4. Revenue per LO - productivity insight
5. Cost per Loan - efficiency metric
6. Break-even Units - target guidance
7. LO Productivity Score - monthly average
8. Total Expenses - overview

Each card includes:
- Colorful icons with soft backgrounds
- Helpful tooltips explaining the metric
- Year-over-year trend arrows for Year 2/3

---

## Phase 3: Input Forms

### Assumptions Form
- **Launch Date** picker
- **Loan Volume Projections** (Year 1, 2, 3 inputs)
- **Average Loan Size** with smart formatting
- **Pricing & Compensation** (basis points inputs)
- **Team Structure** (LOs, processors, assistants)
- **Base Salaries** for all roles

### Expenses Form
- **Marketing Expenses** section with add/edit/delete
- **Other Expenses** section with frequency options (monthly, annual, per-loan)
- Clean grid layout with inline editing
- Pre-populated default expenses

---

## Phase 4: Calculation Engine

### Revenue Calculations (3-Year)
- Loan Volume = Units × Average Loan Size
- Gross Revenue from pricing BPS
- LO Compensation deductions
- Net Revenue calculation

### Expense Calculations (3-Year)
- Branch Manager base + 15% override
- Team salaries (LOs, processors, assistants)
- Processing fees ($795 first 25, $500 after)
- Marketing & other expense aggregation
- Total expenses and Net Income

---

## Phase 5: Visual Analytics

### Four Interactive Charts
1. **Revenue vs Expense Trend** - Line chart showing 3-year trajectory
2. **Expense Breakdown** - Donut pie chart by category
3. **Net Income Waterfall** - Visual flow from gross revenue to profit
4. **LO Productivity** - Bar chart with productivity metrics

All charts will have:
- Smooth animations
- Interactive tooltips
- Modern color palette
- Responsive sizing

---

## Phase 6: P&L Statement

### Professional Financial Table
- Full 3-year columnar display
- Revenue section with subtotals
- Itemized expense breakdown
- Color-coded Net Income row
- Clean, scannable formatting

---

## Phase 7: Scenario Management

### Save & Load System
- Save scenarios with custom names and tags
- Search/filter through saved scenarios
- Quick-load from scenario cards
- Delete with confirmation
- Auto-save indicator

---

## Phase 8: Extra Features

### PDF Export
- Generate professional PDF reports
- Include KPIs, P&L, and charts
- Branded header with scenario name
- Ready for recruiting presentations

### Scenario Comparison
- Side-by-side comparison of 2-3 scenarios
- Highlight key differences
- Visual comparison charts
- Easy toggle between scenarios

---

## Design Approach

### Modern & Friendly Aesthetic
- Rounded corners and soft shadows
- Welcoming color palette (blue/teal primary with warm accents)
- Clear typography with good spacing
- Subtle hover animations
- Card-based UI with gentle depth
- Mobile-responsive layouts

### User Experience
- Intuitive tab navigation
- Helpful tooltips throughout
- Loading states and success feedback
- Error handling with friendly messages
- Toast notifications for actions

---

## Technology Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Backend**: Supabase (Auth + Database)
- **PDF**: Client-side PDF generation

