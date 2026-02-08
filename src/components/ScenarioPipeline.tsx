import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProFormaScenario } from '@/lib/types';
import { formatCompactCurrency, formatPercent } from '@/lib/formatters';
import { SortOption } from '@/hooks/useScenarioPipeline';
import {
  Search, Plus, Trash2, Loader2, FolderOpen,
  Copy, ArrowUpDown, ChevronsLeft, ChevronsRight,
  Clock, ArrowDownAZ, ArrowUpAZ,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ScenarioPipelineProps {
  scenarios: ProFormaScenario[];
  loading: boolean;
  currentScenarioId: string | null;
  isDirty: boolean;
  onSelect: (scenario: ProFormaScenario) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onRename: (id: string, name: string) => void;
  onNew: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const sortLabels: Record<SortOption, { label: string; icon: React.ReactNode }> = {
  recent: { label: 'Recent first', icon: <Clock className="h-3.5 w-3.5" /> },
  alphabetical: { label: 'A → Z', icon: <ArrowDownAZ className="h-3.5 w-3.5" /> },
  oldest: { label: 'Oldest first', icon: <ArrowUpAZ className="h-3.5 w-3.5" /> },
};

function KPIPreview({ scenario }: { scenario: ProFormaScenario }) {
  const o = scenario.outputs;
  if (!o || !o.net_revenue) return null;

  const yr = o.net_revenue.length - 1;
  const netRevenue = o.net_revenue[yr] ?? 0;
  const netIncome = o.net_income[yr] ?? 0;
  const margin = netRevenue > 0 ? (netIncome / netRevenue) * 100 : 0;
  const loCount = scenario.inputs?.num_los ?? 0;

  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      <div>
        <p className="text-muted-foreground">Net Revenue</p>
        <p className="font-semibold text-foreground">{formatCompactCurrency(netRevenue)}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Net Income</p>
        <p className="font-semibold text-foreground">{formatCompactCurrency(netIncome)}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Profit Margin</p>
        <p className="font-semibold text-foreground">{formatPercent(margin)}</p>
      </div>
      <div>
        <p className="text-muted-foreground">LO Count</p>
        <p className="font-semibold text-foreground">{loCount}</p>
      </div>
    </div>
  );
}

function InlineNameEditor({
  name,
  onSave,
  onCancel,
}: {
  name: string;
  onSave: (newName: string) => void;
  onCancel: () => void;
}) {
  const [value, setValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmed = value.trim();
      if (trimmed && trimmed !== name) {
        onSave(trimmed);
      } else {
        onCancel();
      }
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <Input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={() => {
        const trimmed = value.trim();
        if (trimmed && trimmed !== name) {
          onSave(trimmed);
        } else {
          onCancel();
        }
      }}
      className="h-6 text-sm font-medium px-1 py-0"
      onClick={e => e.stopPropagation()}
    />
  );
}

export function ScenarioPipeline({
  scenarios,
  loading,
  currentScenarioId,
  isDirty,
  onSelect,
  onDelete,
  onDuplicate,
  onRename,
  onNew,
  searchQuery,
  onSearchChange,
  totalCount,
  sortBy,
  onSortChange,
  collapsed,
  onToggleCollapse,
}: ScenarioPipelineProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    onDelete(id);
    setDeletingId(null);
  };

  // Collapsed mode: narrow strip with icon + expand button
  if (collapsed) {
    return (
      <div className="w-12 shrink-0 flex flex-col items-center border-r bg-card py-3 gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onToggleCollapse}
          title="Expand pipeline"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
        <FolderOpen className="h-4 w-4 text-primary mt-2" />
        <Badge variant="secondary" className="text-[10px] px-1">
          {totalCount}
        </Badge>
      </div>
    );
  }

  return (
    <div className="w-[280px] shrink-0 flex flex-col border-r bg-card">
      {/* Header */}
      <div className="p-4 border-b space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4 text-primary" />
            <h2 className="font-semibold text-sm text-foreground">Pipeline</h2>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs">
              {totalCount}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hidden lg:inline-flex"
              onClick={onToggleCollapse}
              title="Collapse pipeline"
            >
              <ChevronsLeft className="h-3.5 w-3.5" />
            </Button>
          </div>
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
          <div className="flex gap-1.5">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                placeholder="Search scenarios..."
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                className="pl-8 h-8 text-xs"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8 shrink-0" title="Sort">
                  <ArrowUpDown className="h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {(Object.keys(sortLabels) as SortOption[]).map(option => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => onSortChange(option)}
                    className={sortBy === option ? 'bg-accent' : ''}
                  >
                    {sortLabels[option].icon}
                    <span className="ml-2">{sortLabels[option].label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              const isEditing = editingId === scenario.id;
              return (
                <HoverCard key={scenario.id} openDelay={400} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div
                      onClick={() => !isEditing && onSelect(scenario)}
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
                          {isEditing ? (
                            <InlineNameEditor
                              name={scenario.name}
                              onSave={(newName) => {
                                onRename(scenario.id, newName);
                                setEditingId(null);
                              }}
                              onCancel={() => setEditingId(null)}
                            />
                          ) : (
                            <p
                              className="text-sm font-medium truncate text-foreground"
                              onDoubleClick={e => {
                                e.stopPropagation();
                                setEditingId(scenario.id);
                              }}
                              title="Double-click to rename"
                            >
                              {scenario.name}
                              {isActive && isDirty && (
                                <span className="ml-1.5 text-xs text-destructive/70 font-normal">(edited)</span>
                              )}
                            </p>
                          )}
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

                        {/* Action buttons */}
                        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          {/* Duplicate button */}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7"
                            onClick={e => {
                              e.stopPropagation();
                              onDuplicate(scenario.id);
                            }}
                            title="Duplicate scenario"
                          >
                            <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                          </Button>

                          {/* Delete button */}
                          <Popover
                            open={deletingId === scenario.id}
                            onOpenChange={open => setDeletingId(open ? scenario.id : null)}
                          >
                            <PopoverTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
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
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent side="right" className="w-52 p-3" align="start">
                    <p className="text-xs font-medium text-foreground mb-2 truncate">{scenario.name}</p>
                    <KPIPreview scenario={scenario} />
                  </HoverCardContent>
                </HoverCard>
              );
            })
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
