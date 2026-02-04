import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { ProFormaInputs, ProFormaOutputs, ProFormaScenario } from '@/lib/types';
import { saveScenario, updateScenario, loadScenarios, deleteScenario } from '@/lib/storage';
import { formatDateString } from '@/lib/formatters';
import { useToast } from '@/hooks/use-toast';
import { Save, FolderOpen, Trash2, Search, Loader2, Clock } from 'lucide-react';

interface ScenarioManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'save' | 'load';
  inputs: ProFormaInputs;
  outputs: ProFormaOutputs;
  currentScenarioId: string | null;
  currentScenarioName: string;
  onLoad: (scenario: ProFormaScenario) => void;
  onSaveSuccess: (id: string, name: string) => void;
}

export function ScenarioManager({
  open,
  onOpenChange,
  mode,
  inputs,
  outputs,
  currentScenarioId,
  currentScenarioName,
  onLoad,
  onSaveSuccess,
}: ScenarioManagerProps) {
  const [scenarios, setScenarios] = useState<ProFormaScenario[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scenarioName, setScenarioName] = useState('');
  const [scenarioTags, setScenarioTags] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open && mode === 'load') {
      loadAllScenarios();
    }
    if (open && mode === 'save') {
      setScenarioName(currentScenarioName || '');
    }
  }, [open, mode, currentScenarioName]);

  const loadAllScenarios = async () => {
    setLoading(true);
    const data = await loadScenarios();
    setScenarios(data);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!scenarioName.trim()) {
      toast({
        title: 'Name required',
        description: 'Please enter a name for your scenario.',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      const tags = scenarioTags.split(',').map(t => t.trim()).filter(Boolean);
      
      if (currentScenarioId) {
        await updateScenario({
          id: currentScenarioId,
          name: scenarioName,
          inputs,
          outputs,
          tags,
        });
        toast({
          title: 'Scenario updated',
          description: `"${scenarioName}" has been saved.`,
        });
      } else {
        const result = await saveScenario({
          name: scenarioName,
          inputs,
          outputs,
          tags,
        });
        if (result) {
          onSaveSuccess(result.id, result.name);
        }
        toast({
          title: 'Scenario saved',
          description: `"${scenarioName}" has been created.`,
        });
      }
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Save failed',
        description: 'Unable to save scenario. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    const success = await deleteScenario(id);
    if (success) {
      setScenarios(prev => prev.filter(s => s.id !== id));
      toast({
        title: 'Scenario deleted',
        description: 'The scenario has been removed.',
      });
    } else {
      toast({
        title: 'Delete failed',
        description: 'Unable to delete scenario.',
        variant: 'destructive',
      });
    }
    setDeleteConfirm(null);
  };

  const filteredScenarios = scenarios.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {mode === 'save' ? (
                <>
                  <Save className="h-5 w-5 text-primary" />
                  Save Scenario
                </>
              ) : (
                <>
                  <FolderOpen className="h-5 w-5 text-primary" />
                  Load Scenario
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {mode === 'save' ? (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="scenario-name">Scenario Name</Label>
                <Input
                  id="scenario-name"
                  placeholder="e.g., Q1 2024 Projection"
                  value={scenarioName}
                  onChange={(e) => setScenarioName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scenario-tags">Tags (comma-separated)</Label>
                <Input
                  id="scenario-tags"
                  placeholder="e.g., optimistic, recruiting, q1"
                  value={scenarioTags}
                  onChange={(e) => setScenarioTags(e.target.value)}
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={saving}>
                  {saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                  {currentScenarioId ? 'Update' : 'Save'} Scenario
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search scenarios..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="max-h-[400px] overflow-y-auto space-y-3">
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </div>
                ) : filteredScenarios.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    {searchQuery ? 'No matching scenarios found' : 'No saved scenarios yet'}
                  </div>
                ) : (
                  filteredScenarios.map((scenario) => (
                    <Card 
                      key={scenario.id} 
                      className="cursor-pointer hover:shadow-md transition-shadow border-0 shadow-sm"
                      onClick={() => {
                        onLoad(scenario);
                        onOpenChange(false);
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold truncate">{scenario.name}</h4>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <Clock className="h-3.5 w-3.5" />
                              {formatDateString(scenario.updated_at)}
                            </div>
                            {scenario.tags && scenario.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {scenario.tags.map((tag, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteConfirm(scenario.id);
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Scenario?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The scenario will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => deleteConfirm && handleDelete(deleteConfirm)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
