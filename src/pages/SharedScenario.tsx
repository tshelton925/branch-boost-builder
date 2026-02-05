import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProFormaInputs, ProFormaOutputs } from '@/lib/types';
import { SharedKPIStrip } from '@/components/shared/SharedKPIStrip';
import { SharedPLTable } from '@/components/shared/SharedPLTable';
import { SharedCharts } from '@/components/shared/SharedCharts';
import { Building2, Loader2, LinkIcon, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SharedData {
  scenario: {
    name: string;
    inputs: ProFormaInputs;
    outputs: ProFormaOutputs;
    created_at: string;
  };
  shareLink: {
    custom_title: string | null;
    custom_message: string | null;
    created_at: string;
  };
}

export default function SharedScenario() {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<SharedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      fetchSharedData(slug);
    }
  }, [slug]);

  const fetchSharedData = async (slug: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/track-share-visit?slug=${encodeURIComponent(slug)}`,
        {
          headers: {
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        if (response.status === 410) {
          setError('expired');
        } else if (response.status === 404) {
          setError('not_found');
        } else {
          setError(errData.error || 'Something went wrong');
        }
        return;
      }

      const resultData = await response.json();
      setData(resultData as SharedData);
    } catch (err) {
      console.error('Error fetching shared scenario:', err);
      setError('Failed to load scenario');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
          <p className="text-muted-foreground">Loading scenario...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <Card className="max-w-md w-full border-0 shadow-lg">
          <CardContent className="p-8 text-center space-y-4">
            {error === 'expired' ? (
              <>
                <AlertTriangle className="h-12 w-12 text-warning mx-auto" />
                <h2 className="text-xl font-bold text-foreground">Link Expired</h2>
                <p className="text-muted-foreground">
                  This share link has expired. Please contact the sender for an updated link.
                </p>
              </>
            ) : error === 'not_found' ? (
              <>
                <LinkIcon className="h-12 w-12 text-muted-foreground mx-auto" />
                <h2 className="text-xl font-bold text-foreground">Link Not Found</h2>
                <p className="text-muted-foreground">
                  This share link is no longer active or doesn't exist.
                </p>
              </>
            ) : (
              <>
                <AlertTriangle className="h-12 w-12 text-destructive mx-auto" />
                <h2 className="text-xl font-bold text-foreground">Something Went Wrong</h2>
                <p className="text-muted-foreground">{error}</p>
              </>
            )}
            <div className="pt-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                Powered by Lending Heights
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) return null;

  const { scenario, shareLink } = data;
  const displayTitle = shareLink.custom_title || scenario.name;

  return (
    <div className="min-h-screen bg-background">
      {/* Branded Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-foreground/20 rounded-xl">
              <Building2 className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold opacity-90">Lending Heights</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">{displayTitle}</h1>
          {shareLink.custom_message && (
            <p className="mt-3 text-primary-foreground/80 max-w-2xl text-sm sm:text-base">
              {shareLink.custom_message}
            </p>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* KPI Strip */}
        <SharedKPIStrip inputs={scenario.inputs} outputs={scenario.outputs} />

        {/* P&L Table */}
        <SharedPLTable inputs={scenario.inputs} outputs={scenario.outputs} />

        {/* Charts */}
        <SharedCharts outputs={scenario.outputs} />
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <span>Powered by <span className="font-semibold text-foreground">Lending Heights</span></span>
            </div>
            <span>
              Generated {new Date(shareLink.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
