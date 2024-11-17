"use client";

import { useEffect, useState } from 'react';
import { Stage } from 'ngl';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { API_CONFIG } from '@/lib/api/config';

export default function ProteinViewer({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initViewer = async () => {
      try {
        const stage = new Stage('viewport', { backgroundColor: 'white' });
        await stage.loadFile(`rcsb://${params.id}`, { defaultRepresentation: true });
        setLoading(false);
      } catch (err) {
        setError('Failed to load protein structure');
        setLoading(false);
      }
    };

    initViewer();
  }, [params.id]);

  return (
    <div className="container py-8">
      <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="aspect-square w-full relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="h-full w-full" />
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center text-destructive">
              {error}
            </div>
          )}
          <div id="viewport" className="w-full h-full" />
        </div>
      </Card>
    </div>
  );
}