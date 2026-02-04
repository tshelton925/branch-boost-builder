import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProFormaInputs, MarketingExpense, OtherExpense } from '@/lib/types';
import { formatCurrency } from '@/lib/formatters';
import { Plus, Trash2, Megaphone, Receipt } from 'lucide-react';

interface ExpensesFormProps {
  inputs: ProFormaInputs;
  onUpdate: <K extends keyof ProFormaInputs>(key: K, value: ProFormaInputs[K]) => void;
}

export function ExpensesForm({ inputs, onUpdate }: ExpensesFormProps) {
  const [marketingDialogOpen, setMarketingDialogOpen] = useState(false);
  const [otherDialogOpen, setOtherDialogOpen] = useState(false);
  const [newMarketingExpense, setNewMarketingExpense] = useState<Partial<MarketingExpense>>({
    name: '',
    amount: 0,
    frequency: 'monthly',
  });
  const [newOtherExpense, setNewOtherExpense] = useState<Partial<OtherExpense>>({
    name: '',
    amount: 0,
    frequency: 'monthly',
  });

  const addMarketingExpense = () => {
    if (!newMarketingExpense.name || !newMarketingExpense.amount) return;
    
    const expense: MarketingExpense = {
      id: crypto.randomUUID(),
      name: newMarketingExpense.name,
      amount: newMarketingExpense.amount,
      frequency: newMarketingExpense.frequency as 'monthly' | 'annual',
    };
    
    onUpdate('marketing_expenses', [...inputs.marketing_expenses, expense]);
    setNewMarketingExpense({ name: '', amount: 0, frequency: 'monthly' });
    setMarketingDialogOpen(false);
  };

  const removeMarketingExpense = (id: string) => {
    onUpdate('marketing_expenses', inputs.marketing_expenses.filter(e => e.id !== id));
  };

  const updateMarketingExpense = (id: string, field: keyof MarketingExpense, value: string | number) => {
    onUpdate(
      'marketing_expenses',
      inputs.marketing_expenses.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      )
    );
  };

  const addOtherExpense = () => {
    if (!newOtherExpense.name || !newOtherExpense.amount) return;
    
    const expense: OtherExpense = {
      id: crypto.randomUUID(),
      name: newOtherExpense.name,
      amount: newOtherExpense.amount,
      frequency: newOtherExpense.frequency as 'monthly' | 'annual' | 'per-loan',
    };
    
    onUpdate('other_expenses', [...inputs.other_expenses, expense]);
    setNewOtherExpense({ name: '', amount: 0, frequency: 'monthly' });
    setOtherDialogOpen(false);
  };

  const removeOtherExpense = (id: string) => {
    onUpdate('other_expenses', inputs.other_expenses.filter(e => e.id !== id));
  };

  const updateOtherExpense = (id: string, field: keyof OtherExpense, value: string | number) => {
    onUpdate(
      'other_expenses',
      inputs.other_expenses.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      )
    );
  };

  const getAnnualizedAmount = (amount: number, frequency: string, units?: number) => {
    if (frequency === 'monthly') return amount * 12;
    if (frequency === 'per-loan') return amount * (units || inputs.units_year1);
    return amount;
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Marketing Expenses */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Megaphone className="h-5 w-5 text-primary" />
              Marketing Expenses
            </CardTitle>
            <Dialog open={marketingDialogOpen} onOpenChange={setMarketingDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Marketing Expense</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      placeholder="e.g., Digital Ads"
                      value={newMarketingExpense.name}
                      onChange={(e) => setNewMarketingExpense(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Amount ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={newMarketingExpense.amount || ''}
                      onChange={(e) => setNewMarketingExpense(prev => ({ ...prev, amount: Number(e.target.value) }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select
                      value={newMarketingExpense.frequency}
                      onValueChange={(v) => setNewMarketingExpense(prev => ({ ...prev, frequency: v as 'monthly' | 'annual' }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={addMarketingExpense} className="w-full">
                    Add Expense
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {inputs.marketing_expenses.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No marketing expenses added yet
            </p>
          ) : (
            <div className="space-y-3">
              {inputs.marketing_expenses.map((expense) => (
                <div key={expense.id} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Input
                    value={expense.name}
                    onChange={(e) => updateMarketingExpense(expense.id, 'name', e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={expense.amount}
                    onChange={(e) => updateMarketingExpense(expense.id, 'amount', Number(e.target.value))}
                    className="w-24 font-mono-numbers"
                  />
                  <Select
                    value={expense.frequency}
                    onValueChange={(v) => updateMarketingExpense(expense.id, 'frequency', v)}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="annual">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeMarketingExpense(expense.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  Annual Total:{' '}
                  <span className="font-semibold text-foreground font-mono-numbers">
                    {formatCurrency(
                      inputs.marketing_expenses.reduce(
                        (sum, e) => sum + getAnnualizedAmount(e.amount, e.frequency),
                        0
                      )
                    )}
                  </span>
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Other Expenses */}
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Receipt className="h-5 w-5 text-primary" />
              Other Expenses
            </CardTitle>
            <Dialog open={otherDialogOpen} onOpenChange={setOtherDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Other Expense</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      placeholder="e.g., Office Rent"
                      value={newOtherExpense.name}
                      onChange={(e) => setNewOtherExpense(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Amount ($)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={newOtherExpense.amount || ''}
                      onChange={(e) => setNewOtherExpense(prev => ({ ...prev, amount: Number(e.target.value) }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Frequency</Label>
                    <Select
                      value={newOtherExpense.frequency}
                      onValueChange={(v) => setNewOtherExpense(prev => ({ ...prev, frequency: v as 'monthly' | 'annual' | 'per-loan' }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="per-loan">Per Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={addOtherExpense} className="w-full">
                    Add Expense
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {inputs.other_expenses.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No other expenses added yet
            </p>
          ) : (
            <div className="space-y-3">
              {inputs.other_expenses.map((expense) => (
                <div key={expense.id} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <Input
                    value={expense.name}
                    onChange={(e) => updateOtherExpense(expense.id, 'name', e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    value={expense.amount}
                    onChange={(e) => updateOtherExpense(expense.id, 'amount', Number(e.target.value))}
                    className="w-24 font-mono-numbers"
                  />
                  <Select
                    value={expense.frequency}
                    onValueChange={(v) => updateOtherExpense(expense.id, 'frequency', v)}
                  >
                    <SelectTrigger className="w-28">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="annual">Annual</SelectItem>
                      <SelectItem value="per-loan">Per Loan</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeOtherExpense(expense.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <div className="pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  Annual Total (Year 1):{' '}
                  <span className="font-semibold text-foreground font-mono-numbers">
                    {formatCurrency(
                      inputs.other_expenses.reduce(
                        (sum, e) => sum + getAnnualizedAmount(e.amount, e.frequency),
                        0
                      )
                    )}
                  </span>
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
