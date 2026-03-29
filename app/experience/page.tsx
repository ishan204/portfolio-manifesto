'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { CaptionBox } from '@/components/CaptionBox'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

const experiences = [
  {
    year: '1939',
    title: 'The Dark Knight Begins',
    description: 'Emergence of the most feared vigilante Gotham has ever known.',
    type: 'milestone',
  },
  {
    year: '1962',
    title: 'The Wall-Crawler Arrives',
    description: 'A new hero swings into action with great power and responsibility.',
    type: 'milestone',
  },
  {
    year: '1980-1990',
    title: 'The Golden Era',
    description: 'Both heroes reach their peak, taking on their greatest challenges.',
    type: 'era',
  },
  {
    year: '1995-2005',
    title: 'Modern Adaptation',
    description: 'Heroes evolve to meet contemporary threats and challenges.',
    type: 'era',
  },
  {
    year: '2010-Present',
    title: 'The New Age',
    description: 'Legacy heroes inspiring a new generation of heroes.',
    type: 'present',
  },
]

export default function Experience() {
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
            TIMELINE OF HEROISM
          </motion.h1>
          <motion.p
            className="font-comic text-xl text-comic-black max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Decades of unwavering commitment to justice and heroism.
          </motion.p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-8 h-8 bg-comic-red border-4 border-black rounded-full transform -translate-x-1/2 -translate-y-4" />

              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/2 w-1 h-24 bg-black transform -translate-x-1/2 translate-y-8" />
              )}

              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className="flex-1" />
                <div className="flex-1">
                  <ComicPanel
                    variant={index === 4 ? 'yellow' : index < 2 ? 'blue' : 'red'}
                    className={index === 4 || index === 0 ? 'text-black' : 'text-white'}
                  >
                    <div className="font-bangers text-3xl text-comic-yellow mb-3">
                      {exp.year}
                    </div>
                    <h3 className="font-bangers text-2xl mb-3">
                      {exp.title}
                    </h3>
                    <p className="font-comic text-sm">
                      {exp.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block bg-black text-white px-3 py-1 font-comic text-xs font-bold">
                        {exp.type.toUpperCase()}
                      </span>
                    </div>
                  </ComicPanel>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 bg-comic-blue text-white border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2
            className="font-bangers text-5xl text-comic-yellow text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            KEY COMPETENCIES
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Leadership', 'Strategy', 'Combat', 'Technology', 'Resilience', 'Innovation', 'Compassion', 'Justice'].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ComicPanel variant="yellow" className="text-black text-center h-full flex items-center justify-center">
                  <div>
                    <div className="font-bangers text-4xl mb-3">★</div>
                    <div className="font-comic font-bold text-sm">{skill}</div>
                  </div>
                </ComicPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
