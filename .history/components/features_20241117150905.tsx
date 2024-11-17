import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Dna, Microscope } from 'lucide-react'

export function Features() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Dna className="h-8 w-8 mb-4" />
              <CardTitle>Genomics Explorer</CardTitle>
              <CardDescription>
                Search and explore genomic data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Search genes by name or ID</li>
                <li>View gene details and information</li>
                <li>Access gene descriptions and organisms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Microscope className="h-8 w-8 mb-4" />
              <CardTitle>Protein Viewer</CardTitle>
              <CardDescription>
                Search and explore protein data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>Search proteins by name or ID</li>
                <li>View protein details and functions</li>
                <li>Access protein descriptions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}