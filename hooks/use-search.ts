"use client";

import { useState } from 'react';
import { searchGenes } from '@/lib/api/ncbi';
import { searchProteins } from '@/lib/api/uniprot';
import { searchCompounds } from '@/lib/api/pubchem';
import { Gene, Protein, Compound } from '@/lib/api/types';

type SearchResults = {
  genes: Gene[];
  proteins: Protein[];
  compounds: Compound[];
  loading: boolean;
  error: string | null;
};

export function useSearch() {
  const [results, setResults] = useState<SearchResults>({
    genes: [],
    proteins: [],
    compounds: [],
    loading: false,
    error: null,
  });

  const search = async (query: string, type: string) => {
    if (!query.trim()) return;

    setResults(prev => ({ ...prev, loading: true, error: null }));

    try {
      let updatedResults = { ...results, loading: false, error: null };

      if (type === 'all' || type === 'genes') {
        const geneResults = await searchGenes(query);
        updatedResults.genes = geneResults;
      }

      if (type === 'all' || type === 'proteins') {
        const proteinResults = await searchProteins(query);
        updatedResults.proteins = proteinResults;
      }

      if (type === 'all' || type === 'compounds') {
        const compoundResults = await searchCompounds(query);
        updatedResults.compounds = compoundResults;
      }

      setResults(updatedResults);
    } catch (error) {
      setResults(prev => ({
        ...prev,
        loading: false,
        error: 'An error occurred while searching. Please try again.',
      }));
    }
  };

  return { ...results, search };
}