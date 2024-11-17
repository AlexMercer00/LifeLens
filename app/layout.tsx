import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LifeLens - Explore Genes & Proteins',
  description: 'Discover and visualize genomic and protein data through an interactive, futuristic platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <footer className="w-full py-4 text-center bg-gray-900/80 backdrop-blur-sm border-t border-gray-800">
              <p className="text-sm text-gray-400">
                Created by Ashutosh Singh
              </p>
            </footer>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}