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
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-700/50 transition-colors neon-border">
            <CardHeader>
              <Dna className="h-8 w-8 mb-4 text-blue-400" />
              <CardTitle className="text-2xl font-bold text-gray-100">Genomics Explorer</CardTitle>
              <CardDescription className="text-gray-300">
                Unlock the secrets of the genome
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Search genes by name or ID
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  View detailed gene information
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Explore gene descriptions and organisms
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:bg-gray-700/50 transition-colors neon-border">
            <CardHeader>
              <Microscope className="h-8 w-8 mb-4 text-purple-400" />
              <CardTitle className="text-2xl font-bold text-gray-100">Protein Viewer</CardTitle>
              <CardDescription className="text-gray-300">
                Visualize the building blocks of life
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Search proteins by name or ID
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Access comprehensive protein details
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Explore protein functions and descriptions
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}