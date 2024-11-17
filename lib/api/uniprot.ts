import axios from 'axios';
import { API_CONFIG } from './config';
import { Protein } from './types';

export async function searchProteins(query: string): Promise<Protein[]> {
  try {
    const response = await axios.get(`${API_CONFIG.UNIPROT_BASE_URL}/search`, {
      params: {
        query: query,
        format: 'json',
        size: 10,
      },
    });

    return response.data.results.map((protein: any) => ({
      id: protein.primaryAccession,
      name: protein.proteinDescription?.recommendedName?.fullName?.value || 
            protein.proteinDescription?.submissionNames?.[0]?.fullName?.value || 
            'Unknown',
      function: protein.comments?.find((c: any) => c.commentType === 'FUNCTION')?.texts?.[0]?.value || undefined,
    }));
  } catch (error) {
    console.error('Error fetching proteins:', error);
    return [];
  }
}