"use client"

import { useState, useEffect } from "react"
import { Dna, Microscope } from 'lucide-react'
import { motion } from "framer-motion"

export function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const features = [
    { icon: Dna, title: "Genomics" },
    { icon: Microscope, title: "Proteins" }
  ]

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden futuristic-bg">
      <div className="container relative z-10 py-8">
        {isMounted && (
          <motion.div 
            className="mx-auto max-w-2xl text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight glow bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
              Explore Genes & Proteins
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
              Dive into the future of genomic and protein data exploration with our cutting-edge platform.
            </p>
          </motion.div>
        )}

        {isMounted && (
          <motion.div 
            className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors neon-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />
                <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-gray-100">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    </div>
  )
}