import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ProFormaInputs } from '@/lib/types';
import { Calendar, DollarSign, Users, Briefcase } from 'lucide-react';

interface AssumptionsFormProps {
  inputs: ProFormaInputs;
  onUpdate: <K extends keyof ProFormaInputs>(key: K, value: ProFormaInputs[K]) => void;
}

export function AssumptionsForm({ inputs, onUpdate }: AssumptionsFormProps) {
  const handleNumberChange = (key: keyof ProFormaInputs, value: string) => {
    const numValue = parseInt(value.replace(/,/g, ''), 10);
    if (!isNaN(numValue)) {
      onUpdate(key, numValue as never);
    } else if (value === '') {
      onUpdate(key, 0 as never);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Launch Date & Loan Size */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-primary" />
            Basic Assumptions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="launch_date">Launch Date</Label>
            <Input
              id="launch_date"
              type="date"
              value={inputs.launch_date}
              onChange={(e) => onUpdate('launch_date', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="avg_loan_size">Average Loan Size</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="avg_loan_size"
                type="text"
                className="pl-9 font-mono-numbers"
                value={inputs.avg_loan_size.toLocaleString()}
                onChange={(e) => handleNumberChange('avg_loan_size', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loan Units Projection */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Briefcase className="h-5 w-5 text-primary" />
            Loan Volume (Units)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units_year1">Year 1</Label>
              <Input
                id="units_year1"
                type="number"
                className="font-mono-numbers"
                value={inputs.units_year1}
                onChange={(e) => handleNumberChange('units_year1', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="units_year2">Year 2</Label>
              <Input
                id="units_year2"
                type="number"
                className="font-mono-numbers"
                value={inputs.units_year2}
                onChange={(e) => handleNumberChange('units_year2', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="units_year3">Year 3</Label>
              <Input
                id="units_year3"
                type="number"
                className="font-mono-numbers"
                value={inputs.units_year3}
                onChange={(e) => handleNumberChange('units_year3', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing & Compensation */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <DollarSign className="h-5 w-5 text-primary" />
            Pricing & Compensation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="price_bps">Pricing (basis points)</Label>
            <div className="relative">
              <Input
                id="price_bps"
                type="number"
                className="font-mono-numbers"
                value={inputs.price_bps}
                onChange={(e) => handleNumberChange('price_bps', e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                bps
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lo_comp_bps">LO Compensation (basis points)</Label>
            <div className="relative">
              <Input
                id="lo_comp_bps"
                type="number"
                className="font-mono-numbers"
                value={inputs.lo_comp_bps}
                onChange={(e) => handleNumberChange('lo_comp_bps', e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                bps
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Structure */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-primary" />
            Team Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="num_los">Loan Officers</Label>
              <Input
                id="num_los"
                type="number"
                className="font-mono-numbers"
                value={inputs.num_los}
                onChange={(e) => handleNumberChange('num_los', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="num_processors">Processors</Label>
              <Input
                id="num_processors"
                type="number"
                className="font-mono-numbers"
                value={inputs.num_processors}
                onChange={(e) => handleNumberChange('num_processors', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="num_assistants">Assistants</Label>
              <Input
                id="num_assistants"
                type="number"
                className="font-mono-numbers"
                value={inputs.num_assistants}
                onChange={(e) => handleNumberChange('num_assistants', e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Base Salaries */}
      <Card className="border-0 shadow-md md:col-span-2">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Briefcase className="h-5 w-5 text-primary" />
            Base Salaries (Annual)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="base_mgr_salary">Branch Manager</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="base_mgr_salary"
                  type="text"
                  className="pl-9 font-mono-numbers"
                  value={inputs.base_mgr_salary.toLocaleString()}
                  onChange={(e) => handleNumberChange('base_mgr_salary', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="base_lo_salary">Loan Officer</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="base_lo_salary"
                  type="text"
                  className="pl-9 font-mono-numbers"
                  value={inputs.base_lo_salary.toLocaleString()}
                  onChange={(e) => handleNumberChange('base_lo_salary', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="base_processor_salary">Processor</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="base_processor_salary"
                  type="text"
                  className="pl-9 font-mono-numbers"
                  value={inputs.base_processor_salary.toLocaleString()}
                  onChange={(e) => handleNumberChange('base_processor_salary', e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="base_assistant_salary">Assistant</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="base_assistant_salary"
                  type="text"
                  className="pl-9 font-mono-numbers"
                  value={inputs.base_assistant_salary.toLocaleString()}
                  onChange={(e) => handleNumberChange('base_assistant_salary', e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
