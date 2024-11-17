import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import { SearchSection } from '@/components/search-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <SearchSection />
      <Features />
    </div>
  );
}