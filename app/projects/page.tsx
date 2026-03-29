'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { SoundBurst } from '@/components/SoundBurst'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

const projects = [
  {
    title: 'Gotham Security Systems',
    description: 'Advanced surveillance and protection technology for urban environments.',
    color: 'blue',
    icon: '🏙️',
  },
  {
    title: 'Web-Powered Solutions',
    description: 'Real-time monitoring and response systems for rapid deployment.',
    color: 'red',
    icon: '🕸️',
  },
  {
    title: 'Shadow Analysis',
    description: 'Predictive analytics for threat assessment and prevention.',
    color: 'blue',
    icon: '🔍',
  },
  {
    title: 'Community First',
    description: 'Outreach programs bringing hope to underserved neighborhoods.',
    color: 'red',
    icon: '❤️',
  },
  {
    title: 'Tech Innovation Lab',
    description: 'Cutting-edge research in crime prevention technology.',
    color: 'yellow',
    icon: '⚡',
  },
  {
    title: 'Hero Training Academy',
    description: 'Mentorship and skill development for the next generation.',
    color: 'blue',
    icon: '🎖️',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-comic-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-comic-blue text-white border-b-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR PROJECTS
          </motion.h1>
          <motion.p
            className="font-comic text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A collection of epic initiatives that make a difference.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10 right-10 z-30"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <SoundBurst text="KABOOM!" />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -4 }}
                transition={{ duration: 0.3 }}
              >
                <ComicPanel
                  variant={project.color as 'default' | 'blue' | 'red' | 'yellow'}
                  className={`h-full flex flex-col ${
                    project.color === 'yellow' ? 'text-black' : 'text-white'
                  }`}
                >
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="font-bangers text-2xl mb-3 text-comic-yellow">
                    {project.title}
                  </h3>
                  <p className="font-comic text-sm mb-6 flex-grow">
                    {project.description}
                  </p>
                  <ComicButton
                    variant={project.color === 'yellow' ? 'outline' : 'primary'}
                    className="w-full text-sm"
                  >
                    Learn More
                  </ComicButton>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-comic-red border-y-8 border-black text-white">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '6', label: 'ACTIVE PROJECTS' },
              { number: '50+', label: 'TEAM MEMBERS' },
              { number: '1M+', label: 'LIVES IMPACTED' },
              { number: '99', label: 'AWARDS WON' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-bangers text-4xl text-comic-yellow mb-2">
                  {stat.number}
                </div>
                <div className="font-comic text-sm font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
