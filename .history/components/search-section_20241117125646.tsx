"use client"

import { useState } from "react"
import { useSearch } from "@/hooks/use-search"
import { SearchResults } from "@/components/search-results"
import { SearchBar } from "@/components/search-bar"

export function SearchSection() {
  const { genes, proteins, compounds, loading, error, search } = useSearch()
  const [searchPerformed, setSearchPerformed] = useState(false)

  const handleSearch = (query: string, type: string) => {
    search(query, type)
    setSearchPerformed(true)
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Search Biological Data
          </h2>
          <SearchBar onSearch={handleSearch} loading={loading} />

          {error && (
            <div className="text-red-500 text-center mt-4">{error}</div>
          )}

          {searchPerformed && !loading && !error && (
            <div className="mt-8">
              <SearchResults
                genes={genes}
                proteins={proteins}
                compounds={compounds}
                searchType={genes.length > 0 ? "genes" : proteins.length > 0 ? "proteins" : "compounds"}
              />
            </div>
          )}

          {searchPerformed && !loading && !error && genes.length === 0 && proteins.length === 0 && compounds.length === 0 && (
            <div className="text-center mt-8 text-muted-foreground">
              No results found. Please try a different search query.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}