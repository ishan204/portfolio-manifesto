'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function DomeGallery({
  images = [],
  fit = 0.75,
  minRadius = 500,
  maxVerticalRotationDeg = 8,
  segments = 32,
  dragDampening = 2,
  grayscale = false,
  overlayBlurColor = '#0a0a0a',
  imageBorderRadius = '4px',
  openedImageBorderRadius = '4px',
  openedImageWidth = '380px',
  openedImageHeight = '380px',
}) {
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const mouseDownRef = useRef(null)

  const handleMouseDown = (e) => {
    mouseDownRef.current = { x: e.clientX, y: e.clientY, startX: rotation.x, startY: rotation.y }
  }

  const handleMouseMove = (e) => {
    if (!mouseDownRef.current) return
    const deltaX = (e.clientX - mouseDownRef.current.x) / dragDampening
    const deltaY = (e.clientY - mouseDownRef.current.y) / dragDampening
    setRotation({
      x: mouseDownRef.current.startY + deltaY,
      y: mouseDownRef.current.startX + deltaX,
    })
  }

  const handleMouseUp = () => {
    mouseDownRef.current = null
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{
        width: '100%',
        height: '100%',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        cursor: 'grab',
        overflow: 'hidden',
      }}
    >
      {/* Dome Gallery Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '16px',
          padding: '40px',
          maxWidth: '900px',
          width: '100%',
          transform: `perspective(1000px) rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg)`,
          transition: mouseDownRef.current ? 'none' : 'transform 0.3s ease-out',
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(image)}
            style={{
              cursor: 'pointer',
              borderRadius: imageBorderRadius,
              overflow: 'hidden',
              border: '3px solid #000',
              boxShadow: '5px 5px 0 #000',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                display: 'block',
                filter: grayscale ? 'grayscale(1)' : 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            style={{
              width: openedImageWidth,
              height: openedImageHeight,
              objectFit: 'cover',
              borderRadius: openedImageBorderRadius,
              border: '3px solid #F4C300',
              boxShadow: '8px 8px 0 #F4C300',
              cursor: 'pointer',
            }}
          />
        </div>
      )}
    </div>
  )
}
