'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HalftoneOverlay } from '@/components/HalftoneOverlay'
import Galaxy from '@/components/Galaxy'
import PixelBlast from '@/components/PixelBlast'
import CircularGallery from '@/components/CircularGallery'
import PixelTransition from '@/components/PixelTransition'
import DomeGallery from '@/components/DomeGallery'

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const galleryItems = [
    { image: 'https://picsum.photos/seed/event1/800/600', text: 'BITMUN 2024' },
    { image: 'https://picsum.photos/seed/event2/800/600', text: 'GENESIS Quiz' },
    { image: 'https://picsum.photos/seed/event3/800/600', text: 'Debate Night' },
    { image: 'https://picsum.photos/seed/event4/800/600', text: 'Tech Talk' },
    { image: 'https://picsum.photos/seed/event5/800/600', text: 'Annual Meet' },
    { image: 'https://picsum.photos/seed/event6/800/600', text: 'Workshop' },
    { image: 'https://picsum.photos/seed/event7/800/600', text: 'Cultural Fest' },
    { image: 'https://picsum.photos/seed/event8/800/600', text: 'Hackathon' },
  ]

  const domeImages = [
    { src: 'https://picsum.photos/seed/dome1/800/800', alt: 'BITMUN 2023' },
    { src: 'https://picsum.photos/seed/dome2/800/800', alt: 'Genesis Quiz' },
    { src: 'https://picsum.photos/seed/dome3/800/800', alt: 'Debate Championship' },
    { src: 'https://picsum.photos/seed/dome4/800/800', alt: 'Annual Gala' },
    { src: 'https://picsum.photos/seed/dome5/800/800', alt: 'Workshop 2024' },
    { src: 'https://picsum.photos/seed/dome6/800/800', alt: 'Inter-College Fest' },
    { src: 'https://picsum.photos/seed/dome7/800/800', alt: 'Podcast Launch' },
    { src: 'https://picsum.photos/seed/dome8/800/800', alt: 'Hackathon Win' },
    { src: 'https://picsum.photos/seed/dome9/800/800', alt: 'Cultural Night' },
    { src: 'https://picsum.photos/seed/dome10/800/800', alt: 'Award Ceremony' },
  ]

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-black py-20 overflow-hidden">
        <HalftoneOverlay />
        <div className="absolute inset-0 z-0 opacity-5">
          <Galaxy
            mouseRepulsion={false}
            density={0.8}
            glowIntensity={0.25}
            saturation={0.1}
            hueShift={200}
            twinkleIntensity={0.6}
            rotationSpeed={0.05}
            starSpeed={0.2}
            speed={0.5}
            transparent={true}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div
                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 border-2 border-black"
                style={{ boxShadow: '3px 3px 0 #000' }}
              >
                <span style={{ fontFamily: 'Bangers, cursive', fontSize: '14px', fontWeight: 'bold' }}>
                  THE ARCHIVES
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="mb-4"
              style={{
                fontFamily: 'Bangers, cursive',
                fontSize: 'clamp(56px, 8vw, 96px)',
                color: '#F4C300',
                fontWeight: 'bold',
                lineHeight: 1.1,
              }}
            >
              Gallery.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-white max-w-2xl"
              style={{
                fontFamily: 'Comic Neue, cursive',
                fontSize: '18px',
              }}
            >
              Moments captured. Memories preserved. The chronicle of URJ.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PixelBlast Divider */}
      <section style={{ width: '100%', height: '200px', position: 'relative' }}>
        <PixelBlast
          variant="circle"
          pixelSize={5}
          color="#F4C300"
          patternScale={2.5}
          patternDensity={0.9}
          pixelSizeJitter={0.3}
          enableRipples={true}
          rippleSpeed={0.35}
          rippleThickness={0.1}
          rippleIntensityScale={1.8}
          liquid={false}
          speed={0.4}
          edgeFade={0.3}
          transparent={true}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <p
            style={{
              fontFamily: 'Bangers, cursive',
              color: '#F4C300',
              fontSize: '28px',
              letterSpacing: '0.15em',
              textShadow: '3px 3px 0 #000',
            }}
          >
            [ SCROLL THE ARCHIVES — DRAG TO EXPLORE ]
          </p>
        </div>
      </section>

      {/* CircularGallery */}
      <section className="bg-black relative">
        <HalftoneOverlay />
        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <div
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 border-2 border-black"
              style={{ boxShadow: '3px 3px 0 #000' }}
            >
              <span style={{ fontFamily: 'Bangers, cursive', fontSize: '14px', fontWeight: 'bold' }}>
                SWIPE TO EXPLORE
              </span>
            </div>
          </motion.div>

          <div
            style={{
              height: '500px',
              width: '100%',
              border: '3px solid #000',
              boxShadow: '8px 8px 0 #F4C300',
            }}
          >
            <CircularGallery
              items={galleryItems}
              bend={2}
              textColor="#F4C300"
              borderRadius={0.04}
              font="bold 28px Bangers, cursive"
              scrollSpeed={2}
              scrollEase={0.06}
            />
          </div>
        </div>
      </section>

      {/* PixelTransition Grid */}
      <section className="bg-black py-20 relative">
        <HalftoneOverlay />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={itemVariants} className="mb-6">
            <h2
              style={{
                fontFamily: 'Bangers, cursive',
                color: '#F4C300',
                fontSize: '48px',
                fontWeight: 'bold',
              }}
            >
              [ PIXEL MEMORIES ]
            </h2>
            <p
              className="text-white mt-2"
              style={{
                fontFamily: 'Comic Neue, cursive',
                fontSize: '16px',
              }}
            >
              Hover over each frame to reveal the story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px1/600/600"
                  alt="BITMUN 2024"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a', border: '3px solid #F4C300' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>BITMUN 2024</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>Model United Nations — where future diplomats debate the world's toughest issues.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#F4C300"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />

            {/* Card 2 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px2/600/600"
                  alt="GENESIS Quiz"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#CC1111', border: '3px solid #000' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#FFFFFF', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>GENESIS QUIZ</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>The ultimate battle of minds — spanning science, culture, sports, and everything in between.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#CC1111"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />

            {/* Card 3 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px3/600/600"
                  alt="Debate Night"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#1A1A6E', border: '3px solid #F4C300' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>DEBATE NIGHT</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>Arguments forged in fire. Every word a weapon. Every pause a strategy.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#1A1A6E"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />

            {/* Card 4 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px4/600/600"
                  alt="Tech Talk"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a', border: '3px solid #F4C300' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>TECH TALK</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>Weekly sessions where ideas collide, innovations ignite, and engineers become storytellers.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#F4C300"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />

            {/* Card 5 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px5/600/600"
                  alt="Annual Fest"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#CC1111', border: '3px solid #000' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#FFFFFF', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>ANNUAL FEST</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>A celebration of talent, chaos, and camaraderie — the event that defines the year.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#FFFFFF"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />

            {/* Card 6 */}
            <PixelTransition
              firstContent={
                <img
                  src="https://picsum.photos/seed/px6/600/600"
                  alt="Hackathon"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }}
                />
              }
              secondContent={
                <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#1A1A6E', border: '3px solid #F4C300' }}>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>HACKATHON</p>
                    <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>48 hours. Zero sleep. One mission — build something that matters.</p>
                  </div>
                </div>
              }
              gridSize={8}
              pixelColor="#F4C300"
              once={false}
              animationStepDuration={0.35}
              style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
            />
          </div>
        </div>
      </section>

      {/* DomeGallery */}
      <section className="bg-black py-12 relative">
        <HalftoneOverlay />
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 border-2 border-black"
              style={{ boxShadow: '3px 3px 0 #000' }}
            >
              <span style={{ fontFamily: 'Bangers, cursive', fontSize: '14px', fontWeight: 'bold' }}>
                THE SPHERE
              </span>
            </div>
            <p className="text-white mt-4" style={{ fontFamily: 'Comic Neue, cursive', fontSize: '16px' }}>
              Drag to spin. Click to expand.
            </p>
          </motion.div>
        </div>

        <div
          style={{
            width: '100%',
            height: '100vh',
            border: '3px solid #F4C300',
            boxShadow: '8px 8px 0 #000',
            position: 'relative',
          }}
        >
          <DomeGallery
            images={domeImages}
            fit={0.75}
            minRadius={500}
            maxVerticalRotationDeg={8}
            segments={32}
            dragDampening={2}
            grayscale={false}
            overlayBlurColor="#0a0a0a"
            imageBorderRadius="4px"
            openedImageBorderRadius="4px"
            openedImageWidth="380px"
            openedImageHeight="380px"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
