import React from 'react'

interface HalftoneOverlayProps {
  color?: 'black' | 'blue' | 'red'
  opacity?: number
  className?: string
}

export function HalftoneOverlay({ color = 'black', opacity = 0.3, className = '' }: HalftoneOverlayProps) {
  const colorClasses = {
    black: 'halftone',
    blue: 'halftone-blue',
    red: 'halftone-red',
  }

  return (
    <div 
      className={`${colorClasses[color]} absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
