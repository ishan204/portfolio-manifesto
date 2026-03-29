'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SoundBurstProps {
  text: string
  className?: string
}

export function SoundBurst({ text, className = '' }: SoundBurstProps) {
  return (
    <motion.div
      className={`font-bangers text-2xl font-bold text-comic-red uppercase relative w-fit ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        <polygon
          points="100,10 190,70 170,190 100,150 30,190 10,70"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
      </svg>
      <div className="relative z-10 text-center px-4 py-2">
        {text}
      </div>
    </motion.div>
  )
}
