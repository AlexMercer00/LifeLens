// components/navigation.tsx
"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Microscope } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Microscope className="h-6 w-6" />
          <span className="font-bold">LifeLens</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}