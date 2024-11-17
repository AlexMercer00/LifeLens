import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { ProteinViewer } from '@/components/protein-viewer'
import { Skeleton } from '@/components/ui/skeleton'
import { getProtein, getProteinIds } from '@/lib/api'

interface PageProps {
  params: { id: string }
}

export async function generateStaticParams() {
  const proteinIds = await getProteinIds()
  return proteinIds.map((id) => ({
    id: id,
  }))
}

export default async function ProteinPage({ params }: PageProps) {
  const protein = await getProtein(params.id)

  if (!protein) {
    notFound()
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-4">{protein.name}</h1>
      <p className="text-muted-foreground mb-6">{protein.description}</p>
      <Suspense fallback={<Skeleton className="h-[500px] w-full" />}>
        <ProteinViewer proteinId={params.id} />
      </Suspense>
    </div>
  )
}