import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProFormaScenario } from '@/lib/types';
import { Search, Plus, Trash2, Loader2, FolderOpen } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ScenarioPipelineProps {
  scenarios: ProFormaScenario[];
  loading: boolean;
  currentScenarioId: string | null;
  isDirty: boolean;
  onSelect: (scenario: ProFormaScenario) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

export function ScenarioPipeline({
  scenarios,
  loading,
  currentScenarioId,
  isDirty,
  onSelect,
  onDelete,
  onNew,
  searchQuery,
  onSearchChange,
  totalCount,
}: ScenarioPipelineProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    onDelete(id);
    setDeletingId(null);
  };

  return (
    <div className="w-[280px] shrink-0 flex flex-col border-r bg-card">
      {/* Header */}
      <div className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4 text-primary" />
            <h2 className="font-semibold text-sm text-foreground">Pipeline</h2>
          </div>
          <Badge variant="secondary" className="text-xs">
            {totalCount}
          </Badge>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2"
          onClick={onNew}
        >
          <Plus className="h-4 w-4" />
          Add New
        </Button>

        {totalCount > 0 && (
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
            <Input
              placeholder="Search scenarios..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>
        )}
      </div>

      {/* Scenario List */}
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            </div>
          ) : scenarios.length === 0 ? (
            <div className="text-center py-8 px-4">
              <p className="text-sm text-muted-foreground">
                {searchQuery
                  ? 'No scenarios match your search.'
                  : 'No scenarios yet. Save your first one!'}
              </p>
            </div>
          ) : (
            scenarios.map(scenario => {
              const isActive = scenario.id === currentScenarioId;
              return (
                <div
                  key={scenario.id}
                  onClick={() => onSelect(scenario)}
                  className={`
                    group relative rounded-lg p-3 cursor-pointer transition-all
                    border-l-4
                    ${isActive
                      ? 'border-l-primary bg-primary/5 shadow-sm'
                      : 'border-l-transparent hover:bg-muted/50 hover:border-l-muted-foreground/30'}
                  `}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate text-foreground">
                        {scenario.name}
                        {isActive && isDirty && (
                          <span className="ml-1.5 text-xs text-warning font-normal">(edited)</span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {formatDistanceToNow(new Date(scenario.updated_at), { addSuffix: true })}
                      </p>
                      {scenario.tags && scenario.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {scenario.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Delete button */}
                    <Popover
                      open={deletingId === scenario.id}
                      onOpenChange={open => setDeletingId(open ? scenario.id : null)}
                    >
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                          onClick={e => {
                            e.stopPropagation();
                            setDeletingId(scenario.id);
                          }}
                        >
                          <Trash2 className="h-3.5 w-3.5 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-56 p-3"
                        side="right"
                        onClick={e => e.stopPropagation()}
                      >
                        <p className="text-sm font-medium mb-1">Delete this scenario?</p>
                        <p className="text-xs text-muted-foreground mb-3">This action cannot be undone.</p>
                        <div className="flex gap-2 justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => setDeletingId(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="h-7 text-xs"
                            onClick={() => handleDelete(scenario.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
