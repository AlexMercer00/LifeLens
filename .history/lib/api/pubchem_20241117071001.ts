import axios from 'axios';
import { API_CONFIG } from './config';
import { Compound } from './types';

export async function searchCompounds(query: string): Promise<Compound[]> {
  try {
    // Search for compounds by name
    const response = await axios.get(`${API_CONFIG.PUBCHEM_BASE_URL}/compound/name/${encodeURIComponent(query)}/JSON`);

    if (!response.data.PC_Compounds) {
      return [];
    }

    return response.data.PC_Compounds.map((compound: any) => ({
      id: compound.id.id.toString(),
      name: compound.props.find((p: any) => p.urn.label === 'IUPAC Name')?.value?.sval || 'Unknown',
      formula: compound.props.find((p: any) => p.urn.label === 'Molecular Formula')?.value?.sval,
      molecularWeight: compound.props.find((p: any) => p.urn.label === 'Molecular Weight')?.value?.fval,
    }));
  } catch (error) {
    console.error('Error fetching compounds:', error);
    return [];
  }
}