'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 8,
  pixelColor = '#F4C300',
  once = false,
  animationStepDuration = 0.35,
  style = {},
}) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [isTransitioned, setIsTransitioned] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleHover = (isEntering) => {
    if (isAnimating) return
    if (once && isTransitioned && isEntering) return

    setIsAnimating(true)
    setIsTransitioned(isEntering)

    const canvas = canvasRef.current
    if (!canvas) {
      setIsAnimating(false)
      return
    }

    const ctx = canvas.getContext('2d')
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) {
      setIsAnimating(false)
      return
    }

    const pixelWidth = rect.width / gridSize
    const pixelHeight = rect.height / gridSize
    const pixels = []

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        pixels.push({
          x,
          y,
          startTime: Math.random() * 200,
        })
      }
    }

    const startTime = Date.now()
    const animationDuration = gridSize * gridSize * animationStepDuration

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / animationDuration, 1)

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = pixelColor

      pixels.forEach(({ x, y, startTime }) => {
        const pixelProgress = Math.max(0, progress - startTime / animationDuration)
        if (pixelProgress > 0) {
          ctx.globalAlpha = isEntering ? pixelProgress : 1 - pixelProgress
          ctx.fillRect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight)
        }
      })

      ctx.globalAlpha = 1

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setIsAnimating(false)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    animate()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      <div
        style={{
          opacity: isTransitioned ? 0 : 1,
          transition: 'opacity 0.2s ease',
          width: '100%',
          height: '100%',
        }}
      >
        {firstContent}
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: isTransitioned ? 1 : 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: isTransitioned ? 'auto' : 'none',
        }}
      >
        {secondContent}
      </div>

      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
