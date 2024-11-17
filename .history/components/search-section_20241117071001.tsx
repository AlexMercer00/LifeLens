"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearch } from "@/hooks/use-search";
import { SearchResults } from "@/components/search-results";

export function SearchSection() {
  const [searchType, setSearchType] = useState("all");
  const [query, setQuery] = useState("");
  const { genes, proteins, compounds, loading, error, search } = useSearch();

  const handleSearch = () => {
    search(query, searchType);
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Search Biological Data
          </h2>
          <div className="flex gap-4 mb-8">
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger className="w-[180px]">
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
                <Search className="h-4 w-4 mr-2" />
                {loading ? "Searching..." : "Search"}
              </Button>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <SearchResults
            genes={genes}
            proteins={proteins}
            compounds={compounds}
            searchType={searchType}
          />
        </div>
      </div>
    </section>
  );
}