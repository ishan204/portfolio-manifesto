import React from 'react'

interface CaptionBoxProps {
  children: React.ReactNode
  number?: number
  className?: string
}

export function CaptionBox({ children, number, className = '' }: CaptionBoxProps) {
  return (
    <div className={`bg-comic-yellow border-2 border-black p-3 font-comic text-sm ${className}`}>
      {number && (
        <div className="font-bold mb-2 text-xs">
          {number}
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  )
}
