import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gene, Protein, Compound } from "@/lib/api/types"
import { Dna, Microscope, FlaskConical } from 'lucide-react'

interface SearchResultsProps {
  genes: Gene[]
  proteins: Protein[]
  compounds: Compound[]
  searchType: string
}

export function SearchResults({ genes, proteins, compounds, searchType }: SearchResultsProps) {
  if (genes.length === 0 && proteins.length === 0 && compounds.length === 0) {
    return null
  }

  return (
    <Tabs defaultValue={searchType} className="space-y-8">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="genes" disabled={genes.length === 0}>
          <Dna className="h-4 w-4 mr-2" />
          Genes ({genes.length})
        </TabsTrigger>
        <TabsTrigger value="proteins" disabled={proteins.length === 0}>
          <Microscope className="h-4 w-4 mr-2" />
          Proteins ({proteins.length})
        </TabsTrigger>
        <TabsTrigger value="compounds" disabled={compounds.length === 0}>
          <FlaskConical className="h-4 w-4 mr-2" />
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
                <p className="text-sm text-muted-foreground mb-2">{gene.description}</p>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="font-semibold">ID:</dt>
                  <dd>{gene.id}</dd>
                  {gene.sequence && (
                    <>
                      <dt className="font-semibold">Sequence (first 50 bp):</dt>
                      <dd className="font-mono">{gene.sequence.slice(0, 50)}...</dd>
                    </>
                  )}
                </dl>
              </CardContent>
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
                  <p className="text-sm text-muted-foreground mb-2">{protein.function}</p>
                )}
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  {protein.structure && (
                    <>
                      <dt className="font-semibold">Structure:</dt>
                      <dd>{protein.structure}</dd>
                    </>
                  )}
                  {protein.sequence && (
                    <>
                      <dt className="font-semibold">Sequence (first 50 aa):</dt>
                      <dd className="font-mono">{protein.sequence.slice(0, 50)}...</dd>
                    </>
                  )}
                </dl>
              </CardContent>
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
              </CardHeader>
              <CardContent>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <dt className="font-semibold">ID:</dt>
                  <dd>{compound.id}</dd>
                  {compound.molecularWeight && (
                    <>
                      <dt className="font-semibold">Molecular Weight:</dt>
                      <dd>{compound.molecularWeight.toFixed(2)} g/mol</dd>
                    </>
                  )}
                  {compound.structure && (
                    <>
                      <dt className="font-semibold">Structure:</dt>
                      <dd>{compound.structure}</dd>
                    </>
                  )}
                </dl>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}