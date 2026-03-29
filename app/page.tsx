'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicButton } from '@/components/ComicButton'
import { SpeechBubble } from '@/components/SpeechBubble'
import { SoundBurst } from '@/components/SoundBurst'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import Galaxy from '@/components/Galaxy'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Galaxy Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Galaxy
            mouseRepulsion={true}
            mouseInteraction={true}
            density={1.2}
            glowIntensity={0.4}
            saturation={0.15}
            hueShift={15}
            twinkleIntensity={0.5}
            rotationSpeed={0.08}
            repulsionStrength={2}
            starSpeed={0.3}
            speed={0.8}
            transparent={true}
          />
        </div>

        {/* Halftone overlay */}
        <div className="absolute inset-0 z-0 opacity-5 mix-blend-multiply">
          <HalftoneOverlay />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <motion.div
              className="lg:col-span-7"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Issue Badge */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 border-2 border-black"
                  style={{ boxShadow: '3px 3px 0 #000' }}>
                  <span style={{ fontFamily: 'Bangers, cursive', fontSize: '14px', fontWeight: 'bold' }}>
                    ISSUE #001
                  </span>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="mb-6"
                style={{
                  fontFamily: 'Bangers, cursive',
                  fontSize: 'clamp(52px, 7vw, 90px)',
                  color: '#F4C300',
                  WebkitTextStroke: '2px #000',
                  fontWeight: 'bold',
                  lineHeight: 1.1,
                }}
              >
                UMANG RAJ JAISWAL
              </motion.h1>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="mb-8 text-white"
                style={{
                  fontFamily: 'Comic Neue, cursive',
                  fontSize: '18px',
                  fontStyle: 'italic',
                }}
              >
                Engineering Student. Public Speaker. Builder of Things.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex gap-4 mb-12 flex-wrap">
                <ComicButton
                  bg="#F4C300"
                  text="#000"
                  label="See My Work"
                  onClick={() => window.location.href = '/gallery'}
                />
                <ComicButton
                  bg="#CC1111"
                  text="#FFF"
                  label="Read My Manifesto"
                  onClick={() => window.location.href = '/manifesto'}
                />
              </motion.div>

              {/* Speech Bubble */}
              <motion.div variants={itemVariants}>
                <SpeechBubble
                  text="With great code comes great responsibility."
                  tailPosition="up-left"
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Photo Panel */}
            <motion.div
              className="lg:col-span-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="relative"
                style={{
                  transform: 'rotate(2deg)',
                }}
              >
                {/* Photo Panel */}
                <div
                  className="w-full aspect-[3/4] bg-gray-400 flex items-center justify-center border-4 border-black"
                  style={{
                    boxShadow: '8px 8px 0 #F4C300',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Bangers, cursive',
                      color: '#F4C300',
                      fontSize: '28px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    [ YOUR PHOTO ]
                  </div>
                </div>

                {/* POW! Starburst */}
                <div
                  className="absolute -top-8 -right-8 z-20"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: '#F4C300',
                    clip: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Bangers, cursive',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#000',
                    border: '3px solid #000',
                  }}
                >
                  POW!
                </div>

                {/* Hero Origin Badge */}
                <div
                  className="absolute -bottom-4 -left-4 bg-red-600 text-white px-4 py-2 border-2 border-black"
                  style={{
                    fontFamily: 'Bangers, cursive',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '3px 3px 0 #000',
                  }}
                >
                  HERO ORIGIN
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* City Skyline */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black border-t-4 border-yellow-400 z-5">
          <div className="flex h-full">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-black border-r-2 border-yellow-400"
                style={{
                  clipPath: `polygon(0 ${50 + Math.random() * 50}%, 100% ${50 + Math.random() * 50}%, 100% 100%, 0 100%)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-yellow-50 py-20 relative">
        <HalftoneOverlay />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-yellow-400 border-2 border-black"
                style={{ boxShadow: '3px 3px 0 #000' }}
              >
                <span style={{ fontFamily: 'Bangers, cursive', fontSize: '28px' }}>💻</span>
              </div>
              <h3 style={{ fontFamily: 'Bangers, cursive', color: '#000', fontSize: '20px', fontWeight: 'bold' }}>
                Web Developer
              </h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Comic Neue, cursive' }}>
                Built UNESQUO's website and multiple full-stack applications
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-600 text-white border-2 border-black"
                style={{ boxShadow: '3px 3px 0 #000' }}
              >
                <span style={{ fontFamily: 'Bangers, cursive', fontSize: '28px' }}>🎤</span>
              </div>
              <h3 style={{ fontFamily: 'Bangers, cursive', color: '#000', fontSize: '20px', fontWeight: 'bold' }}>
                Public Speaker
              </h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Comic Neue, cursive' }}>
                MUN delegate & debate champion at national circuits
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-600 text-white border-2 border-black"
                style={{ boxShadow: '3px 3px 0 #000' }}
              >
                <span style={{ fontFamily: 'Bangers, cursive', fontSize: '28px' }}>⚡</span>
              </div>
              <h3 style={{ fontFamily: 'Bangers, cursive', color: '#000', fontSize: '20px', fontWeight: 'bold' }}>
                Competitive Programmer
              </h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Comic Neue, cursive' }}>
                CodeChef top 15% · 500+ problems solved
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
