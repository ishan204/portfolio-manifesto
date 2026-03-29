'use client'

import React, { useEffect, useRef } from 'react'

export default function Galaxy({
  mouseRepulsion = true,
  mouseInteraction = true,
  density = 1.2,
  glowIntensity = 0.4,
  saturation = 0.15,
  hueShift = 15,
  twinkleIntensity = 0.5,
  rotationSpeed = 0.08,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  starSpeed = 0.3,
  speed = 0.8,
  transparent = true,
}) {
  const canvasRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const starsRef = useRef([])
  const animationIdRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < Math.floor(100 * density); i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          vx: (Math.random() - 0.5) * starSpeed,
          vy: (Math.random() - 0.5) * starSpeed,
          opacity: Math.random() * 0.8 + 0.2,
          twinklePhase: Math.random() * Math.PI * 2,
          hue: hueShift + Math.random() * 30,
        })
      }
    }

    initStars()

    const handleMouseMove = (e) => {
      if (mouseInteraction) {
        mousePos.current = { x: e.clientX, y: e.clientY }
      }
    }

    const animate = () => {
      // Clear canvas
      if (transparent) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else {
        ctx.fillStyle = '#0a0a0a'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Update and draw stars
      starsRef.current.forEach((star) => {
        // Mouse repulsion
        if (mouseRepulsion && mousePos.current) {
          const dx = star.x - mousePos.current.x
          const dy = star.y - mousePos.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const angle = Math.atan2(dy, dx)
            star.vx += Math.cos(angle) * (repulsionStrength / (dist + 1))
            star.vy += Math.sin(angle) * (repulsionStrength / (dist + 1))
          }
        }

        // Update position
        star.x += star.vx * speed
        star.y += star.vy * speed

        // Wrap around
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Twinkle
        star.twinklePhase += twinkleIntensity * 0.05
        const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5
        const opacity = star.opacity * twinkle

        // Draw star
        const size = 1 + (1000 - star.z) / 200
        ctx.fillStyle = `hsla(${star.hue}, ${saturation * 100}%, 50%, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Glow
        if (glowIntensity > 0) {
          ctx.strokeStyle = `hsla(${star.hue}, ${saturation * 100}%, 60%, ${opacity * glowIntensity})`
          ctx.lineWidth = size * 2
          ctx.stroke()
        }
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [density, glowIntensity, saturation, hueShift, twinkleIntensity, rotationSpeed, repulsionStrength, starSpeed, speed, transparent, mouseRepulsion, mouseInteraction])

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
