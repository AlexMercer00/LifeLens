"use client";

import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gene, Protein, Compound } from "@/lib/api/types";
import { Dna, Microscope, Flask, ExternalLink } from "lucide-react";

interface SearchResultsProps {
  genes: Gene[];
  proteins: Protein[];
  compounds: Compound[];
  searchType: string;
}

export function SearchResults({ genes, proteins, compounds, searchType }: SearchResultsProps) {
  if (genes.length === 0 && proteins.length === 0 && compounds.length === 0) {
    return null;
  }

  return (
    <Tabs defaultValue={searchType === 'all' ? 'genes' : searchType} className="space-y-8">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="genes" disabled={searchType !== 'all' && searchType !== 'genes'}>
          <Dna className="h-4 w-4 mr-2" />
          Genes ({genes.length})
        </TabsTrigger>
        <TabsTrigger value="proteins" disabled={searchType !== 'all' && searchType !== 'proteins'}>
          <Microscope className="h-4 w-4 mr-2" />
          Proteins ({proteins.length})
        </TabsTrigger>
        <TabsTrigger value="compounds" disabled={searchType !== 'all' && searchType !== 'compounds'}>
          <Flask className="h-4 w-4 mr-2" />
          Compounds ({compounds.length})
        </TabsTrigger>
      </TabsList>

      <TabsContent value="genes">
        <div className="grid gap-4 md:grid-cols-2">
          {genes.map((gene) => (
            <Card key={gene.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{gene.symbol}</CardTitle>
                  <Badge variant="secondary">{gene.organism}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{gene.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="ml-auto">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="proteins">
        <div className="grid gap-4 md:grid-cols-2">
          {proteins.map((protein) => (
            <Card key={protein.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{protein.name}</CardTitle>
                  <Badge variant="secondary">{protein.id}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {protein.function && (
                  <p className="text-sm text-muted-foreground line-clamp-3">{protein.function}</p>
                )}
              </CardContent>
              <CardFooter>
                <Link href={`/proteins/${protein.id}`} className="ml-auto">
                  <Button variant="outline" size="sm">
                    <Microscope className="h-4 w-4 mr-2" />
                    View Structure
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="compounds">
        <div className="grid gap-4 md:grid-cols-2">
          {compounds.map((compound) => (
            <Card key={compound.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{compound.name}</CardTitle>
                  {compound.formula && (
                    <Badge variant="secondary">{compound.formula}</Badge>
                  )}
                </div>
                {compound.molecularWeight && (
                  <CardDescription>
                    Molecular Weight: {compound.molecularWeight.toFixed(2)} g/mol
                  </CardDescription>
                )}
              </CardHeader>
              <CardFooter>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Flask className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}