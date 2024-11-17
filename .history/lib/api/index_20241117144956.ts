// lib/api/index.ts

import axios from 'axios';
import { API_CONFIG } from './config';
import { Protein } from './types';

export async function getProtein(id: string): Promise<Protein | null> {
  try {
    const response = await axios.get(`${API_CONFIG.UNIPROT_BASE_URL}/${id}`, {
      params: {
        format: 'json',
      },
    });

    const proteinData = response.data;

    return {
      id: proteinData.primaryAccession,
      name: proteinData.proteinDescription?.recommendedName?.fullName?.value || 
            proteinData.proteinDescription?.submissionNames?.[0]?.fullName?.value || 
            'Unknown',
      function: proteinData.comments?.find((c: any) => c.commentType === 'FUNCTION')?.texts?.[0]?.value || undefined,
      structure: proteinData.structure?.pdbIds?.[0] || undefined,
    };
  } catch (error) {
    console.error('Error fetching protein:', error);
    return null;
  }
}

export async function getProteinIds(): Promise<string[]> {
  try {
    // This is a simplified example. In a real-world scenario, you might want to
    // fetch a list of protein IDs from a database or another API endpoint.
    const response = await axios.get(`${API_CONFIG.UNIPROT_BASE_URL}/search`, {
      params: {
        query: 'reviewed:true',
        format: 'json',
        fields: 'accession',
        size: 100, // Adjust this number based on your needs
      },
    });

    return response.data.results.map((protein: any) => protein.primaryAccession);
  } catch (error) {
    console.error('Error fetching protein IDs:', error);
    return [];
  }
}