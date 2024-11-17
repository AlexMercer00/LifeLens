// components/hero.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dna, Microscope, FlaskConical, TreePine } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const features = [
    { icon: Dna, title: "Genomics", href: "/genomics" },
    { icon: Microscope, title: "Proteins", href: "/proteins" },
    { icon: TreePine, title: "Taxonomy", href: "/taxonomy" },
    { icon: FlaskConical, title: "Compounds", href: "/compounds" }
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 pt-20 pb-32">
      <div className="container relative z-10">
        {isMounted ? (
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Explore the Blueprint of Life
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Discover the intricate world of biological data through our interactive platform.
              From genomics to protein structures, species taxonomy to chemical compounds,
              LifeLens brings scientific data to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/search">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Explore the Blueprint of Life
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Discover the intricate world of biological data through our interactive platform.
              From genomics to protein structures, species taxonomy to chemical compounds,
              LifeLens brings scientific data to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/search">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        )}

        {isMounted && (
          <motion.div 
            className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-accent/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={item.href} className="flex flex-col items-center">
                  <item.icon className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
    </div>
  )
}