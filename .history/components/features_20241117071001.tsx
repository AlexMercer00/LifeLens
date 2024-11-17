import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dna, Microscope, TreePine, Flask } from "lucide-react";

export function Features() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <Dna className="h-8 w-8 mb-4" />
              <CardTitle>Genomics Explorer</CardTitle>
              <CardDescription>
                Search and visualize genomic data with interactive tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Gene sequence analysis</li>
                <li>Mutation visualization</li>
                <li>Comparative genomics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Microscope className="h-8 w-8 mb-4" />
              <CardTitle>Protein Viewer</CardTitle>
              <CardDescription>
                Explore 3D protein structures and interactions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>3D structure visualization</li>
                <li>Protein-protein interactions</li>
                <li>Domain analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TreePine className="h-8 w-8 mb-4" />
              <CardTitle>Taxonomy Finder</CardTitle>
              <CardDescription>
                Navigate the tree of life with interactive tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Species classification</li>
                <li>Phylogenetic trees</li>
                <li>Biodiversity mapping</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Flask className="h-8 w-8 mb-4" />
              <CardTitle>Chemical Compounds</CardTitle>
              <CardDescription>
                Discover biochemical structures and properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Molecular visualization</li>
                <li>Chemical properties</li>
                <li>Reaction pathways</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}