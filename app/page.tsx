'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { SoundBurst } from '@/components/SoundBurst'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 500

    const particles: any[] = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: ['#FFF000', '#0066FF', '#FF0000'][Math.floor(Math.random() * 3)],
      })
    }

    let animationId: number

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#FFF000')
      gradient.addColorStop(1, '#FFF8E7')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(26, 26, 26, 0.05)'
      for (let x = 0; x < canvas.width; x += 8) {
        for (let y = 0; y < canvas.height; y += 8) {
          ctx.beginPath()
          ctx.arc(x, y, 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <HalftoneOverlay color="black" opacity={0.15} className="z-10" />

        <motion.div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-bangers text-6xl md:text-8xl text-comic-red mb-6"
            style={{ textShadow: '3px 3px 0 #0066FF, 6px 6px 0 #1a1a1a' }}>
            UMANG RAJ JAISWAL
          </h1>

          <p className="font-fira text-2xl font-black">
            NOT YOUR TYPICAL MANIFESTO
          </p>

          <div className="mt-6 text-xl font-fira">
            Hi, I’m Umang Raj Jaiswal, a Computer Science sophomore, a quizzer-debater by instinct, and someone who genuinely enjoys creating things that people remember.
            <br /><br />
            I’ve been into quizzing and debating since school—not just participating, but winning, learning, and occasionally arguing like it’s a sport.
            <br /><br />
            <span className="font-bangers">
              "If you’re not passionate about winning, you’re doing it wrong."
            </span>
          </div>
        </motion.div>

        <SoundBurst text="POW!" />
        <SoundBurst text="BOOM!" />
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-comic-blue border-t-8 border-black">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">CREATOR</h3>
            <p className="whitespace-pre-line">
I build digital experiences—clean, aesthetic, and functional.
Logic + creativity = my playground.
            </p>
          </ComicPanel>

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">SPORTS</h3>
            <p className="whitespace-pre-line">
Cricket, F1, football, tennis.
I play too—because watching isn’t enough.
            </p>
          </ComicPanel>

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">CINEPHILE?</h3>
            <p>
Watched everything from sitcoms to thrillers.
Still debatable.
            </p>
          </ComicPanel>

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">GAMER</h3>
            <p className="whitespace-pre-line">
Road Rash → GTA → Valorant → RDR → God of War  
Competition + strategy + immersion.
            </p>
          </ComicPanel>

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">MUSIC ADDICT</h3>
            <p className="whitespace-pre-line">
From Lata Mangeshkar to Tame Impala.

Spotify stats?
1000% higher than India.

It’s not an app.
It’s a personality trait.
            </p>
          </ComicPanel>

          <ComicPanel variant="yellow">
            <h3 className="font-bangers text-xl">DANCER</h3>
            <p className="whitespace-pre-line">
Freestyle → Salsa → Bollywood  
Also played Mowgli 🐒
            </p>
          </ComicPanel>

        </div>
      </section>

      <Footer />
    </main>
  )
}
