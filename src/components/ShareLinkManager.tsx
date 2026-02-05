import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { ShareLink } from '@/lib/types';
import { createShareLink, getShareLinksForScenario, toggleShareLink, deleteShareLink, getShareUrl } from '@/lib/shareLinks';
import { formatDateString } from '@/lib/formatters';
import { useToast } from '@/hooks/use-toast';
import { Link2, Copy, Trash2, Loader2, Eye, Plus, ExternalLink } from 'lucide-react';

interface ShareLinkManagerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  scenarioId: string | null;
  scenarioName: string;
}

export function ShareLinkManager({ open, onOpenChange, scenarioId, scenarioName }: ShareLinkManagerProps) {
  const [links, setLinks] = useState<ShareLink[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [expiresAt, setExpiresAt] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (open && scenarioId) {
      loadLinks();
      setCustomTitle(scenarioName);
      setCustomMessage('');
      setExpiresAt('');
      setShowCreateForm(false);
    }
  }, [open, scenarioId, scenarioName]);

  const loadLinks = async () => {
    if (!scenarioId) return;
    setLoading(true);
    const data = await getShareLinksForScenario(scenarioId);
    setLinks(data);
    setLoading(false);
  };

  const handleCreate = async () => {
    if (!scenarioId) return;
    setCreating(true);
    try {
      const link = await createShareLink({
        scenarioId,
        customTitle: customTitle || scenarioName,
        customMessage: customMessage || undefined,
        expiresAt: expiresAt || null,
      });
      if (link) {
        setLinks(prev => [link, ...prev]);
        setShowCreateForm(false);
        const url = getShareUrl(link.slug);
        await navigator.clipboard.writeText(url);
        toast({
          title: 'Share link created!',
          description: 'The link has been copied to your clipboard.',
        });
      }
    } catch {
      toast({
        title: 'Failed to create link',
        description: 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setCreating(false);
    }
  };

  const handleCopy = async (slug: string) => {
    const url = getShareUrl(slug);
    await navigator.clipboard.writeText(url);
    toast({ title: 'Link copied!', description: url });
  };

  const handleToggle = async (id: string, currentActive: boolean) => {
    const success = await toggleShareLink(id, !currentActive);
    if (success) {
      setLinks(prev => prev.map(l => l.id === id ? { ...l, is_active: !currentActive } : l));
    }
  };

  const handleDelete = async (id: string) => {
    const success = await deleteShareLink(id);
    if (success) {
      setLinks(prev => prev.filter(l => l.id !== id));
      toast({ title: 'Link deleted' });
    }
  };

  if (!scenarioId) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Link2 className="h-5 w-5 text-primary" />
              Share Scenario
            </DialogTitle>
            <DialogDescription>
              Save your scenario first before creating a share link.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground py-4">
            You need to save your scenario before you can generate share links.
          </p>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-primary" />
            Share "{scenarioName}"
          </DialogTitle>
          <DialogDescription>
            Create and manage public share links for this scenario.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {/* Create new link section */}
          {!showCreateForm ? (
            <Button onClick={() => setShowCreateForm(true)} className="w-full gap-2">
              <Plus className="h-4 w-4" />
              Generate New Share Link
            </Button>
          ) : (
            <Card className="border shadow-sm">
              <CardContent className="p-4 space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="share-title">Title</Label>
                  <Input
                    id="share-title"
                    placeholder="Custom title for the landing page"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="share-message">Personal Message (optional)</Label>
                  <Textarea
                    id="share-message"
                    placeholder="Hey John, here's the branch projection we discussed..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    rows={2}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="share-expires">Expiration Date (optional)</Label>
                  <Input
                    id="share-expires"
                    type="date"
                    value={expiresAt}
                    onChange={(e) => setExpiresAt(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="flex gap-2 pt-1">
                  <Button onClick={handleCreate} disabled={creating} className="flex-1">
                    {creating && <Loader2 className="h-4 w-4 mr-1 animate-spin" />}
                    Generate & Copy Link
                  </Button>
                  <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Existing links */}
          <div className="max-h-[300px] overflow-y-auto space-y-2">
            {loading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
              </div>
            ) : links.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-4">
                No share links yet. Generate one above!
              </p>
            ) : (
              links.map((link) => (
                <Card key={link.id} className="border shadow-sm">
                  <CardContent className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium truncate">
                            {link.custom_title || scenarioName}
                          </p>
                          <Badge variant={link.is_active ? 'default' : 'secondary'} className="text-xs shrink-0">
                            {link.is_active ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {link.visit_count} visits
                          </span>
                          <span>{formatDateString(link.created_at)}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Switch
                          checked={link.is_active}
                          onCheckedChange={() => handleToggle(link.id, link.is_active)}
                          className="scale-75"
                        />
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(link.slug)}>
                          <Copy className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                          <a href={getShareUrl(link.slug)} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDelete(link.id)}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
