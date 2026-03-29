import React from 'react'

interface HalftoneOverlayProps {
  color?: 'black' | 'blue' | 'red'
  opacity?: number
  className?: string
}

export function HalftoneOverlay({ color = 'black', opacity = 0.3, className = '' }: HalftoneOverlayProps) {
  const colorClasses = {
    black: '[background-image:radial-gradient(circle,#1a1a1a_2px,transparent_2px)] [background-size:8px_8px]',
    blue:"[background-image:radial-gradient(circle,#0066FF_2px,transparent_2px)] [background-size:8px_8px]",
    red:'[background-image:radial-gradient(circle,#FF0000_2px,transparent_2px)] [background-size:8px_8px]',
  }

  return (
    <div 
      className={`${colorClasses[color]} absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    />
  )
}
