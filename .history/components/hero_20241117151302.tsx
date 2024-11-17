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
    <div className="relative overflow-hidden futuristic-bg py-20">
      <div className="container relative z-10">
        {isMounted && (
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl glow bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Explore Genes & Proteins
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Dive into the future of genomic and protein data exploration with our cutting-edge platform.
              Uncover the secrets of life's building blocks through advanced search and visualization tools.
            </p>
          </motion.div>
        )}

        {isMounted && (
          <motion.div 
            className="mt-20 grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors neon-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="h-12 w-12 text-blue-400" />
                <h3 className="mt-4 text-lg font-semibold text-gray-100">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    </div>
  )
}