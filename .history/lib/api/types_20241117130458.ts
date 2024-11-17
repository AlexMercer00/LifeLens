export interface Gene {
  id: string;
  symbol: string;
  description: string;
  organism: string;
  sequence?: string;
}

export interface Protein {
  id: string;
  name: string;
  structure?: string;
  sequence?: string;
  function?: string;
}

export interface Species {
  id: string;
  scientificName: string;
  commonName?: string;
  rank: string;
  parentTaxId?: string;
}

export interface Compound {
  id: string;
  name: string;
  formula?: string;
  molecularWeight?: number;
  structure?: string;
}