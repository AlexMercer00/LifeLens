// app/genes/[id]/page.tsx
import { notFound } from 'next/navigation'
import { getGene } from '@/lib/api/ncbi'

export default async function GenePage({ params }: { params: { id: string } }) {
  const gene = await getGene(params.id)

  if (!gene) {
    notFound()
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">{gene.symbol}</h1>
      <p className="text-xl mb-2">Organism: {gene.organism}</p>
      <p className="text-lg mb-4">{gene.description}</p>
      {gene.sequence && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sequence</h2>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">{gene.sequence}</pre>
        </div>
      )}
    </div>
  )
}