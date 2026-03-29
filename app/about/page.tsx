'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import { SpeechBubble } from '@/components/SpeechBubble'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-comic-yellow border-b-8 border-black">
        <HalftoneOverlay color="black" opacity={0.15} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-red mb-6"
            style={{ textShadow: '3px 3px 0 #0066FF' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABOUT THE HEROES
          </motion.h1>
          <motion.p
            className="font-comic text-xl text-comic-black max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn about the legendary partnership of the Dark Knight and the Friendly Neighborhood hero.
          </motion.p>
        </div>
      </section>

      {/* Two Column Content */}
      <section className="py-20 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Batman */}
            <motion.div variants={itemVariants}>
              <ComicPanel variant="blue" className="text-white mb-6">
                <h2 className="font-bangers text-3xl mb-4 text-comic-yellow">
                  THE DARK KNIGHT
                </h2>
                <p className="font-comic text-sm mb-4">
                  With his sophisticated detective skills, advanced technology, and unwavering determination, Batman has protected Gotham from the shadows for decades.
                </p>
                <p className="font-comic text-sm">
                  Discipline, intelligence, and resourcefulness define his approach to justice.
                </p>
              </ComicPanel>
              
              <div className="space-y-4">
                <CaptionBox number={1}>
                  <strong>Superpower:</strong> Strategic Intellect
                </CaptionBox>
                <CaptionBox number={2}>
                  <strong>Weakness:</strong> Humanity
                </CaptionBox>
                <CaptionBox number={3}>
                  <strong>Era:</strong> 1939 - Present
                </CaptionBox>
              </div>
            </motion.div>

            {/* Spider-Man */}
            <motion.div variants={itemVariants}>
              <ComicPanel variant="red" className="text-white mb-6">
                <h2 className="font-bangers text-3xl mb-4 text-comic-yellow">
                  THE WALL-CRAWLER
                </h2>
                <p className="font-comic text-sm mb-4">
                  With great power comes great responsibility. Spider-Man balances his incredible abilities with his commitment to protecting New York and its people.
                </p>
                <p className="font-comic text-sm">
                  Agility, wit, and heart make him the hero that people believe in.
                </p>
              </ComicPanel>
              
              <div className="space-y-4">
                <CaptionBox number={4}>
                  <strong>Superpower:</strong> Web-Slinging
                </CaptionBox>
                <CaptionBox number={5}>
                  <strong>Weakness:</strong> Emotion
                </CaptionBox>
                <CaptionBox number={6}>
                  <strong>Era:</strong> 1962 - Present
                </CaptionBox>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-comic-red text-white border-b-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR MISSION
          </motion.h2>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">JUSTICE</strong>
              <p className="font-comic text-sm mt-2">
                Fighting for what&apos;s right, for everyone.
              </p>
            </SpeechBubble>
            
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">RESPONSIBILITY</strong>
              <p className="font-comic text-sm mt-2">
                With great power, comes great duty.
              </p>
            </SpeechBubble>
            
            <SpeechBubble variant="shout" className="bg-comic-yellow text-black">
              <strong className="text-lg">UNITY</strong>
              <p className="font-comic text-sm mt-2">
                Stronger together than apart.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
