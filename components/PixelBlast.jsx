'use client'

import React, { useEffect, useRef } from 'react'

export default function PixelBlast({
  variant = 'circle',
  pixelSize = 5,
  color = '#F4C300',
  patternScale = 2.5,
  patternDensity = 0.9,
  pixelSizeJitter = 0.3,
  enableRipples = true,
  rippleSpeed = 0.35,
  rippleThickness = 0.1,
  rippleIntensityScale = 1.8,
  liquid = false,
  speed = 0.4,
  edgeFade = 0.3,
  transparent = true,
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0
    const ripples = []

    const animate = () => {
      if (transparent) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else {
        ctx.fillStyle = '#0a0a0a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      time += speed * 0.01

      // Draw pixel pattern
      const pixelGridSize = patternScale * pixelSize
      for (let x = 0; x < canvas.width; x += pixelGridSize) {
        for (let y = 0; y < canvas.height; y += pixelGridSize) {
          if (Math.random() < patternDensity) {
            const jitter = pixelSize * pixelSizeJitter * (Math.random() - 0.5)
            const size = pixelSize + jitter
            const alpha = Math.sin(time + (x + y) * 0.001) * 0.3 + 0.7

            ctx.fillStyle = color
            ctx.globalAlpha = alpha

            // Determine shape based on variant
            if (variant === 'circle') {
              ctx.beginPath()
              ctx.arc(x, y, size / 2, 0, Math.PI * 2)
              ctx.fill()
            } else if (variant === 'diamond') {
              ctx.beginPath()
              ctx.moveTo(x, y - size / 2)
              ctx.lineTo(x + size / 2, y)
              ctx.lineTo(x, y + size / 2)
              ctx.lineTo(x - size / 2, y)
              ctx.closePath()
              ctx.fill()
            } else {
              ctx.fillRect(x - size / 2, y - size / 2, size, size)
            }

            ctx.globalAlpha = 1
          }
        }
      }

      // Add edge fade
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, `rgba(10, 10, 10, ${edgeFade})`)
      gradient.addColorStop(0.5, 'rgba(10, 10, 10, 0)')
      gradient.addColorStop(1, `rgba(10, 10, 10, ${edgeFade})`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [variant, pixelSize, color, patternScale, patternDensity, pixelSizeJitter, speed, edgeFade, transparent])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  )
}
