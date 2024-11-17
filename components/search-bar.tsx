"use client"

import { useState } from "react"
import { Search, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SearchBarProps {
  onSearch: (query: string, type: string) => void
  loading: boolean
}

export function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [searchType, setSearchType] = useState("all")
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    onSearch(query, searchType)
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Select value={searchType} onValueChange={setSearchType}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Search type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="genes">Genes</SelectItem>
          <SelectItem value="proteins">Proteins</SelectItem>
          <SelectItem value="compounds">Compounds</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex-1 flex gap-2">
        <Input
          type="search"
          placeholder="Search for genes, proteins, species, or compounds..."
          className="flex-1"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          <span className="ml-2 hidden sm:inline">
            {loading ? "Searching..." : "Search"}
          </span>
        </Button>
      </div>
    </div>
  )
}