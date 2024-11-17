import axios from 'axios';
import { API_CONFIG } from './config';
import { Gene } from './types';

export async function searchGenes(query: string): Promise<Gene[]> {
  try {
    // Search for gene IDs
    const searchResponse = await axios.get(`${API_CONFIG.NCBI_BASE_URL}/esearch.fcgi`, {
      params: {
        db: 'gene',
        term: query,
        retmode: 'json',
        retmax: 10,
      },
    });

    const ids = searchResponse.data.esearchresult.idlist;

    if (ids.length === 0) {
      return [];
    }

    // Fetch details for each gene
    const summaryResponse = await axios.get(`${API_CONFIG.NCBI_BASE_URL}/esummary.fcgi`, {
      params: {
        db: 'gene',
        id: ids.join(','),
        retmode: 'json',
      },
    });

    // Transform the response into our Gene type
    return Object.values(summaryResponse.data.result)
      .filter((gene: any) => gene.uid !== undefined)
      .map((gene: any) => ({
        id: gene.uid.toString(),
        symbol: gene.name,
        description: gene.description,
        organism: gene.organism?.scientificname || 'Unknown',
      }));
  } catch (error) {
    console.error('Error fetching genes:', error);
    return [];
  }
}