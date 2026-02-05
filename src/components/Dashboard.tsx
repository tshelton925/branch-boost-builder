import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useProForma } from '@/hooks/useProForma';
import { usePDFExport } from '@/hooks/usePDFExport';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DashboardFooter } from '@/components/DashboardFooter';
import { KPIPanel } from '@/components/dashboard/KPIPanel';
import { AssumptionsForm } from '@/components/forms/AssumptionsForm';
import { ExpensesForm } from '@/components/forms/ExpensesForm';
import { PLDisplay } from '@/components/PLDisplay';
import { AnalyticsDashboard } from '@/components/AnalyticsDashboard';
import { ScenarioManager } from '@/components/ScenarioManager';
import { ScenarioCompare } from '@/components/ScenarioCompare';
import { ShareLinkManager } from '@/components/ShareLinkManager';
import { ProFormaScenario } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Loader2, ClipboardList, Receipt, BarChart3, FileText } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();
  const { exportToPDF } = usePDFExport();
  
  const {
    inputs,
    outputs,
    updateInput,
    loadScenarioData,
    currentScenarioId,
    currentScenarioName,
    setCurrentScenarioId,
    setCurrentScenarioName,
  } = useProForma();

  const [scenarioManagerOpen, setScenarioManagerOpen] = useState(false);
  const [scenarioManagerMode, setScenarioManagerMode] = useState<'save' | 'load'>('save');
  const [compareOpen, setCompareOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Sign out failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      navigate('/auth');
    }
  };

  const handleSave = () => {
    setScenarioManagerMode('save');
    setScenarioManagerOpen(true);
  };

  const handleLoad = () => {
    setScenarioManagerMode('load');
    setScenarioManagerOpen(true);
  };

  const handleLoadScenario = (scenario: ProFormaScenario) => {
    loadScenarioData(scenario.inputs, scenario.id, scenario.name);
    toast({
      title: 'Scenario loaded',
      description: `"${scenario.name}" is now active.`,
    });
  };

  const handleSaveSuccess = (id: string, name: string) => {
    setCurrentScenarioId(id);
    setCurrentScenarioName(name);
  };

  const handleExportPDF = () => {
    exportToPDF({
      inputs,
      outputs,
      scenarioName: currentScenarioName,
    });
  };

  const handleCompare = () => setCompareOpen(true);
  const handleShare = () => setShareOpen(true);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardHeader
        currentScenarioName={currentScenarioName}
        onSave={handleSave}
        onLoad={handleLoad}
        onSignOut={handleSignOut}
        onExportPDF={handleExportPDF}
        onCompare={handleCompare}
        onShare={handleShare}
        hasScenarioId={!!currentScenarioId}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        {/* KPI Panel */}
        <div className="mb-8">
          <KPIPanel inputs={inputs} outputs={outputs} />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="assumptions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid lg:grid-cols-4">
            <TabsTrigger value="assumptions" className="gap-2">
              <ClipboardList className="h-4 w-4 hidden sm:block" />
              Assumptions
            </TabsTrigger>
            <TabsTrigger value="expenses" className="gap-2">
              <Receipt className="h-4 w-4 hidden sm:block" />
              Expenses
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4 hidden sm:block" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="pl" className="gap-2">
              <FileText className="h-4 w-4 hidden sm:block" />
              P&L Statement
            </TabsTrigger>
          </TabsList>

          <TabsContent value="assumptions" className="mt-6">
            <AssumptionsForm inputs={inputs} onUpdate={updateInput} />
          </TabsContent>

          <TabsContent value="expenses" className="mt-6">
            <ExpensesForm inputs={inputs} onUpdate={updateInput} />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsDashboard inputs={inputs} outputs={outputs} />
          </TabsContent>

          <TabsContent value="pl" className="mt-6">
            <PLDisplay inputs={inputs} outputs={outputs} />
          </TabsContent>
        </Tabs>
      </main>

      <DashboardFooter />

      <ScenarioManager
        open={scenarioManagerOpen}
        onOpenChange={setScenarioManagerOpen}
        mode={scenarioManagerMode}
        inputs={inputs}
        outputs={outputs}
        currentScenarioId={currentScenarioId}
        currentScenarioName={currentScenarioName}
        onLoad={handleLoadScenario}
        onSaveSuccess={handleSaveSuccess}
      />

      <ScenarioCompare
        open={compareOpen}
        onOpenChange={setCompareOpen}
        currentInputs={inputs}
        currentOutputs={outputs}
      />

      <ShareLinkManager
        open={shareOpen}
        onOpenChange={setShareOpen}
        scenarioId={currentScenarioId}
        scenarioName={currentScenarioName}
      />
    </div>
  );
}
