'use client';

import dynamic from 'next/dynamic';

const Galaxy = dynamic(() => import('@/components/Galaxy'), { ssr: false });

export default function HomePage() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      overflow: 'hidden',
      paddingTop: '64px',
    }}>
      {/* Galaxy background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity: 0.6,
      }}>
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
          autoCenterRepulsion={0}
          starSpeed={0.3}
          speed={0.8}
          transparent={true}
        />
      </div>

      {/* Hero content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        padding: '40px 20px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'center',
        }}>
          {/* Left column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            {/* Issue label */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              width: 'fit-content',
              backgroundColor: '#CC1111',
              color: '#FFFFFF',
              padding: '8px 16px',
              border: '2px solid #000',
              fontFamily: 'Bangers, cursive',
              fontSize: '14px',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
            }}>
              ISSUE #001
            </div>

            {/* Main heading */}
            <h1 style={{
              fontFamily: 'Bangers, cursive',
              fontSize: 'clamp(52px, 7vw, 90px)',
              color: '#F4C300',
              margin: 0,
              lineHeight: 1.1,
              WebkitTextStroke: '2px #000',
              letterSpacing: '0.02em',
            }}>
              UMANG RAJ JAISWAL
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: 'Comic Neue, cursive',
              fontSize: '18px',
              color: '#FFFFFF',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.6,
            }}>
              Engineering Student. Public Speaker. Builder of Things.
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}>
              <button style={{
                backgroundColor: '#F4C300',
                color: '#000000',
                border: '3px solid #000',
                padding: '12px 28px',
                fontFamily: 'Bangers, cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '5px 5px 0 #000',
                transition: 'transform 0.1s',
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'translate(2px, 2px)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'translate(0, 0)')}
              >
                See My Work
              </button>
              <button style={{
                backgroundColor: '#CC1111',
                color: '#FFFFFF',
                border: '3px solid #000',
                padding: '12px 28px',
                fontFamily: 'Bangers, cursive',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '5px 5px 0 #000',
                transition: 'transform 0.1s',
              }}
              onMouseDown={e => (e.currentTarget.style.transform = 'translate(2px, 2px)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'translate(0, 0)')}
              >
                Read My Manifesto
              </button>
            </div>

            {/* Speech bubble */}
            <div style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '3px solid #000',
              borderRadius: '16px',
              padding: '16px 20px',
              width: 'fit-content',
              maxWidth: '100%',
            }}>
              <p style={{
                fontFamily: 'Comic Neue, cursive',
                fontSize: '15px',
                color: '#000000',
                fontStyle: 'italic',
                margin: 0,
              }}>
                "With great code comes great responsibility."
              </p>
              {/* Tail */}
              <div style={{
                position: 'absolute',
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '0px solid transparent',
                borderTop: '12px solid #FFFFFF',
                bottom: '-12px',
                left: '24px',
              }} />
              <div style={{
                position: 'absolute',
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '0px solid transparent',
                borderTop: '12px solid #000',
                bottom: '-15px',
                left: '24px',
              }} />
            </div>
          </div>

          {/* Right column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
          }}>
            {/* Comic panel with photo placeholder */}
            <div style={{
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '3/4',
              border: '3px solid #000',
              boxShadow: '8px 8px 0 #F4C300',
              backgroundColor: '#333333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(2deg)',
              position: 'relative',
            }}>
              <div style={{
                textAlign: 'center',
                fontFamily: 'Bangers, cursive',
                color: '#F4C300',
                fontSize: '24px',
                letterSpacing: '0.05em',
              }}>
                [ YOUR PHOTO ]
              </div>

              {/* POW burst */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                backgroundColor: '#F4C300',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 50%, 75% 100%, 50% 75%, 25% 100%, 0% 50%, 0% 25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '3px solid #000',
              }}>
                <span style={{
                  fontFamily: 'Bangers, cursive',
                  color: '#000000',
                  fontSize: '40px',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                }}>
                  POW!
                </span>
              </div>

              {/* Hero origin label */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                backgroundColor: '#CC1111',
                color: '#FFFFFF',
                padding: '8px 16px',
                border: '2px solid #000',
                fontFamily: 'Bangers, cursive',
                fontSize: '14px',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
              }}>
                HERO ORIGIN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* City skyline */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#000000',
        display: 'flex',
        gap: '8px',
        padding: '0 20px',
        alignItems: 'flex-end',
      }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${40 + (i % 3) * 20}px`,
              backgroundColor: '#000000',
              border: '2px solid #333333',
            }}
          />
        ))}
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
