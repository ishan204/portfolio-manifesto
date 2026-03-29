import React from 'react'
import { motion } from 'framer-motion'
 
export function ComicButton({ children, variant = 'primary', ...props }) {
  const baseClass = 'font-bangers text-lg font-bold px-6 py-3 uppercase tracking-wider transition-transform active:scale-95'
 
  const variantClasses = {
    primary: 'bg-[#FF0000] text-white comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary: 'bg-[#0066FF] text-white comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
    outline: 'bg-white text-black border-4 border-black comic-shadow hover:translate-x-[2px] hover:translate-y-[2px]',
  }
 
  return (
    <motion.button
      className={`${baseClass} ${variantClasses[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
