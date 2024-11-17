import Link from 'next/link'
import { Dna } from 'lucide-react'

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Dna className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold text-gray-100">LifeLens</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
            Genomics
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
            Proteins
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}