'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { SpeechBubble } from '@/components/SpeechBubble'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

export default function Manifesto() {
  const manifestoPoints = [
    {
      title: 'WE PROTECT THE INNOCENT',
      description: 'Every person deserves safety, dignity, and the chance to thrive. We stand guard against injustice.',
      color: 'red',
    },
    {
      title: 'WE EMBRACE RESPONSIBILITY',
      description: 'With great power comes great responsibility. We use our abilities for the greater good, always.',
      color: 'blue',
    },
    {
      title: 'WE NEVER STOP FIGHTING',
      description: 'Evil may evolve, but so do we. We adapt, we learn, we overcome every challenge.',
      color: 'yellow',
    },
    {
      title: 'WE BELIEVE IN REDEMPTION',
      description: 'Everyone deserves a second chance. We fight for reform and the possibility of change.',
      color: 'red',
    },
    {
      title: 'WE STAND TOGETHER',
      description: 'Alone we are strong, but together we are unstoppable. Unity is our greatest weapon.',
      color: 'blue',
    },
    {
      title: 'WE INSPIRE HOPE',
      description: 'In the darkest times, hope shines brightest. We are beacons of possibility for all.',
      color: 'yellow',
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-comic-red text-white border-b-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR MANIFESTO
          </motion.h1>
          <motion.p
            className="font-comic text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The principles that guide us. The promises we keep. The values we live by.
          </motion.p>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="py-16 border-b-8 border-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SpeechBubble variant="speech" className="bg-comic-yellow border-4 border-black text-black p-8">
              <p className="font-comic text-lg leading-relaxed">
                We are more than heroes. We are guardians of hope, defenders of the weak, and champions of justice.
                This manifesto represents our unwavering commitment to making the world safer, brighter, and 
                more just for everyone. These aren&apos;t just words—they are the foundation of everything we do.
              </p>
            </SpeechBubble>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {manifestoPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ComicPanel
                  variant={point.color as 'default' | 'blue' | 'red' | 'yellow'}
                  className={`h-full ${
                    point.color === 'yellow' ? 'text-black' : 'text-white'
                  }`}
                >
                  <h3 className="font-bangers text-2xl mb-4 text-comic-yellow">
                    {point.title}
                  </h3>
                  <p className="font-comic text-sm leading-relaxed">
                    {point.description}
                  </p>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Code of Honor Section */}
      <section className="relative py-20 bg-comic-blue text-white border-y-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CODE OF HONOR
          </motion.h2>

          <div className="space-y-4">
            {[
              'Always stand up for the innocent',
              'Use power with wisdom and restraint',
              'Never compromise on justice',
              'Protect secret identities',
              'Support your allies unconditionally',
              'Learn from every battle',
              'Remember: the mission comes first',
            ].map((code, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CaptionBox number={i + 1} className="bg-comic-yellow text-black">
                  <strong>{code}</strong>
                </CaptionBox>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge Section */}
      <section className="relative py-20 bg-comic-yellow border-t-8 border-black">
        <HalftoneOverlay color="black" opacity={0.1} />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-red mb-8"
            style={{ textShadow: '3px 3px 0 #0066FF' }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            OUR PLEDGE
          </motion.h2>

          <motion.div
            className="bg-comic-red text-white p-8 border-4 border-black comic-shadow text-lg font-comic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              We pledge to uphold these ideals for ourselves, our communities, and future generations.
            </p>
            <p className="font-bangers text-3xl mb-4">
              ★ FOR JUSTICE ★
            </p>
            <p className="mb-4">
              We will not rest until every person is safe, every voice is heard, and every dream is possible.
            </p>
            <p className="font-bold text-comic-yellow">
              THIS IS OUR SOLEMN OATH
            </p>
          </motion.div>

          <motion.p
            className="mt-12 font-bangers text-4xl text-comic-blue"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            POW! BOOM! BANG! 🦇 🕷️
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
