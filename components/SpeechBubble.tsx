import React from 'react'

interface SpeechBubbleProps {
  children: React.ReactNode
  variant?: 'thought' | 'speech' | 'shout'
  className?: string
}

export function SpeechBubble({ children, variant = 'speech', className = '' }: SpeechBubbleProps) {
  const styles = {
    thought: 'rounded-full bg-white border-4 border-black relative',
    speech: 'bg-white border-4 border-black relative rounded-lg',
    shout: 'bg-comic-yellow border-4 border-black relative rounded-lg',
  }

  return (
    <div className={`${styles[variant]} p-4 ${className} comic-shadow`}>
      <div className="relative z-10">
        {children}
      </div>
      {/* Tail pointer */}
      <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
    </div>
  )
}
