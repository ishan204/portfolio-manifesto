'use client'

import React, { useRef, useEffect, useState } from 'react'

export default function CircularGallery({
  items = [],
  bend = 2,
  textColor = '#F4C300',
  borderRadius = 0.04,
  font = 'bold 28px Bangers, cursive',
  scrollSpeed = 2,
  scrollEase = 0.06,
}) {
  const containerRef = useRef(null)
  const scrollRef = useRef(0)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      e.preventDefault()
      scrollRef.current += e.deltaY * scrollEase
      setScrollPos(scrollRef.current)
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [scrollEase])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          transform: `translateX(${-scrollPos * scrollSpeed}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              minWidth: '400px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
              flex: '0 0 auto',
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.text}
                style={{
                  width: '100%',
                  height: '80%',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '12px',
                  border: '3px solid #000',
                  boxShadow: '5px 5px 0 #000',
                }}
              />
            )}
            {item.text && (
              <p
                style={{
                  fontFamily: 'Bangers, cursive',
                  color: textColor,
                  fontSize: '24px',
                  fontWeight: 'bold',
                  margin: 0,
                  textAlign: 'center',
                  letterSpacing: '0.05em',
                }}
              >
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
