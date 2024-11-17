"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dna, Microscope, FlaskConical, TreePine } from 'lucide-react'
import { motion } from "framer-motion"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const features = [
    { icon: Dna, title: "Genomics" },
    { icon: Microscope, title: "Proteins" },
    { icon: TreePine, title: "Taxonomy" },
    { icon: FlaskConical, title: "Compounds" }
  ]

  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="absolute inset-0 gradient-bg" />
      <div className="container relative">
        {isMounted ? (
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Explore the Blueprint of Life Through Data
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover the intricate world of biological data through our interactive platform.
              From genomics to protein structures, species taxonomy to chemical compounds,
              LifeLens brings scientific data to life.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        ) : (
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* Static content for server-side rendering */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Explore the Blueprint of Life Through Data
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover the intricate world of biological data through our interactive platform.
              From genomics to protein structures, species taxonomy to chemical compounds,
              LifeLens brings scientific data to life.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        )}

        {isMounted ? (
          <motion.div 
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-6 rounded-2xl bg-card hover:bg-accent/50 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center p-6 rounded-2xl bg-card hover:bg-accent/50 transition-colors"
              >
                <item.icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}