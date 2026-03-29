'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ComicPanel } from '@/components/ComicPanel'
import { ComicButton } from '@/components/ComicButton'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'

const events = [
  {
    month: 'MAY',
    date: '15',
    title: 'Comic Con Takeover',
    location: 'New York City',
    description: 'Join us for an epic celebration of superhero culture and community.',
    attendees: '5000+',
  },
  {
    month: 'JUN',
    date: '22',
    title: 'Hero Training Workshop',
    location: 'Gotham & New York',
    description: 'Intensive masterclass on heroism and responsibility.',
    attendees: '500+',
  },
  {
    month: 'AUG',
    date: '10',
    title: 'Gala of Champions',
    location: 'Metropolitan Hall',
    description: 'Celebrating heroes and their contributions to society.',
    attendees: '1000+',
  },
  {
    month: 'OCT',
    date: '31',
    title: 'Night of Justice',
    location: 'Multi-City Event',
    description: 'A night dedicated to community safety and empowerment.',
    attendees: '10000+',
  },
  {
    month: 'DEC',
    date: '25',
    title: 'Holiday Heroes Festival',
    location: 'Downtown Districts',
    description: 'Spreading joy and hope throughout the holiday season.',
    attendees: '20000+',
  },
  {
    month: 'JAN',
    date: '01',
    title: 'New Year, New Heroes',
    location: 'All Zones',
    description: 'Kicking off the year with new initiatives and goals.',
    attendees: '15000+',
  },
]

export default function Events() {
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
    hidden: { opacity: 0, y: 30 },
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
      <section className="relative py-20 bg-comic-red text-white border-b-8 border-black">
        <HalftoneOverlay color="red" opacity={0.2} />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            className="font-bangers text-6xl md:text-7xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            EPIC EVENTS
          </motion.h1>
          <motion.p
            className="font-comic text-xl max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the action and join our growing community of supporters.
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ComicPanel
                  variant={index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'red' : 'yellow'}
                  className={`h-full flex flex-col ${
                    index % 3 === 2 ? 'text-black' : 'text-white'
                  }`}
                >
                  {/* Date Badge */}
                  <div className="flex gap-4 items-start mb-4">
                    <div className={`text-center px-3 py-2 border-2 border-current ${
                      index % 3 === 2 ? 'bg-comic-red text-white' : 'bg-comic-yellow text-black'
                    }`}>
                      <div className="font-bangers text-sm font-bold">{event.month}</div>
                      <div className="font-bangers text-2xl font-bold">{event.date}</div>
                    </div>
                    <div className="text-sm font-comic">
                      <strong>{event.attendees}</strong>
                      <br />
                      attendees
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bangers text-2xl mb-2 text-comic-yellow">
                    {event.title}
                  </h3>
                  
                  <p className="font-comic text-sm mb-2 flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="bg-black bg-opacity-20 px-3 py-2 rounded mb-4 font-comic text-sm font-bold">
                    📍 {event.location}
                  </div>
                  
                  <ComicButton
                    variant={index % 3 === 2 ? 'outline' : 'primary'}
                    className="w-full text-sm"
                  >
                    GET TICKETS
                  </ComicButton>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-comic-blue text-white border-t-8 border-black">
        <HalftoneOverlay color="blue" opacity={0.2} />
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="font-bangers text-4xl text-comic-yellow mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            STAY IN THE LOOP
          </motion.h2>
          
          <motion.p
            className="font-comic text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Never miss an event. Subscribe to our hero newsletter!
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 font-comic text-black border-4 border-black comic-shadow"
            />
            <ComicButton variant="secondary">
              SUBSCRIBE
            </ComicButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
