import React from 'react'

interface ComicPanelProps {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'red' | 'yellow'
  className?: string
}

export function ComicPanel({ children, variant = 'default', className = '' }: ComicPanelProps) {
  const bgColors = {
    default: 'bg-white',
    blue: 'bg-[#0066FF]',
    red: 'bg-[#FF0000]',
    yellow: 'bg-[#FFF000]',
  }
  
  const textColors = {
    default: 'text-black',
    blue: 'text-white',
    red: 'text-white',
    yellow: 'text-black',
  }

  return (
    <div className={`comic-panel ${bgColors[variant]} ${textColors[variant]} p-6 ${className}`}>
      {children}
    </div>
  )
}
