import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Building2, Save, LogOut, FileDown, GitCompare, Share2, FilePlus } from 'lucide-react';

interface DashboardHeaderProps {
  currentScenarioName: string;
  onSave: () => void;
  onNew: () => void;
  onSignOut: () => void;
  onExportPDF: () => void;
  onCompare: () => void;
  onShare: () => void;
  hasScenarioId: boolean;
  isDirty: boolean;
  pipelineToggle?: ReactNode;
}

export function DashboardHeader({
  currentScenarioName,
  onSave,
  onNew,
  onSignOut,
  onExportPDF,
  onCompare,
  onShare,
  hasScenarioId,
  isDirty,
  pipelineToggle,
}: DashboardHeaderProps) {
  const subtitle = currentScenarioName
    ? currentScenarioName
    : isDirty
      ? 'New Scenario (unsaved)'
      : 'Pro Forma Builder';

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {pipelineToggle}
            <div className="p-2 bg-primary/10 rounded-xl">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lending Heights</h1>
              <p className={`text-sm ${!currentScenarioName && isDirty ? 'text-amber-500 italic' : 'text-muted-foreground'}`}>
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onShare} disabled={!hasScenarioId}>
              <Share2 className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Share</span>
            </Button>
            <Button variant="outline" size="sm" onClick={onCompare}>
              <GitCompare className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Compare</span>
            </Button>
            <Button variant="outline" size="sm" onClick={onExportPDF}>
              <FileDown className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Export PDF</span>
            </Button>
            <Button variant="outline" size="sm" onClick={onNew}>
              <FilePlus className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">New</span>
            </Button>
            <Button variant="default" size="sm" onClick={onSave}>
              <Save className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Save</span>
            </Button>
            <Button variant="ghost" size="sm" onClick={onSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
