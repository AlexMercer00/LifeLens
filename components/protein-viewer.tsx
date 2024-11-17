"use client"

import { useEffect, useState } from 'react'
import { Stage } from 'ngl'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface ProteinViewerProps {
  proteinId: string
}

export function ProteinViewer({ proteinId }: ProteinViewerProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initViewer = async () => {
      try {
        const stage = new Stage('viewport', { backgroundColor: 'white' })
        await stage.loadFile(`rcsb://${proteinId}`, { defaultRepresentation: true })
        setLoading(false)
      } catch (err) {
        setError('Failed to load protein structure')
        setLoading(false)
      }
    }

    initViewer()
  }, [proteinId])

  if (loading) {
    return <Skeleton className="h-[500px] w-full" />
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <Card className="p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div id="viewport" className="w-full aspect-square" />
    </Card>
  )
}