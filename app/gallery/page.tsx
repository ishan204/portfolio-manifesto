'use client';

import dynamic from 'next/dynamic';

const PixelBlast = dynamic(() => import('@/components/PixelBlast'), { ssr: false });
const CircularGallery = dynamic(() => import('@/components/CircularGallery'), { ssr: false });
const PixelTransition = dynamic(() => import('@/components/PixelTransition'), { ssr: false });
const DomeGallery = dynamic(() => import('@/components/DomeGallery'), { ssr: false });

export default function GalleryPage() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      color: '#FFFFFF',
      paddingTop: '80px',
      minHeight: '100vh',
    }}>
      {/* Halftone overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '6px 6px',
        opacity: 0.05,
        zIndex: 1,
      }} />

      {/* Page header */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
      }}>
        {/* Section label */}
        <div style={{
          display: 'inline-block',
          backgroundColor: '#CC1111',
          color: '#FFFFFF',
          padding: '8px 16px',
          border: '2px solid #000',
          fontFamily: 'Bangers, cursive',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          marginBottom: '24px',
        }}>
          THE ARCHIVES
        </div>

        {/* Main heading */}
        <h1 style={{
          fontFamily: 'Bangers, cursive',
          fontSize: 'clamp(56px, 8vw, 96px)',
          color: '#F4C300',
          margin: '0 0 16px 0',
          letterSpacing: '0.02em',
        }}>
          Gallery.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'Comic Neue, cursive',
          fontSize: '18px',
          color: '#FFFFFF',
          margin: 0,
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Moments captured. Memories preserved. The chronicle of URJ.
        </p>
      </div>

      {/* Section 1: PixelBlast divider */}
      <div style={{
        width: '100%',
        height: '200px',
        position: 'relative',
        marginBottom: '60px',
      }}>
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
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}>
          <p style={{
            fontFamily: 'Bangers, cursive',
            color: '#F4C300',
            fontSize: '28px',
            letterSpacing: '0.15em',
            textShadow: '3px 3px 0 #000',
            margin: 0,
          }}>
            [ SCROLL THE ARCHIVES — DRAG TO EXPLORE ]
          </p>
        </div>
      </div>

      {/* Section 2: CircularGallery */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 60px',
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#CC1111',
          color: '#FFFFFF',
          padding: '8px 16px',
          border: '2px solid #000',
          fontFamily: 'Bangers, cursive',
          fontSize: '14px',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          marginBottom: '24px',
        }}>
          SWIPE TO EXPLORE
        </div>

        <div style={{
          height: '500px',
          width: '100%',
          border: '3px solid #000',
          boxShadow: '8px 8px 0 #F4C300',
        }}>
          <CircularGallery
            items={[
              { image: 'https://picsum.photos/seed/event1/800/600', text: 'BITMUN 2024' },
              { image: 'https://picsum.photos/seed/event2/800/600', text: 'GENESIS Quiz' },
              { image: 'https://picsum.photos/seed/event3/800/600', text: 'Debate Night' },
              { image: 'https://picsum.photos/seed/event4/800/600', text: 'Tech Talk' },
              { image: 'https://picsum.photos/seed/event5/800/600', text: 'Annual Meet' },
              { image: 'https://picsum.photos/seed/event6/800/600', text: 'Workshop' },
              { image: 'https://picsum.photos/seed/event7/800/600', text: 'Cultural Fest' },
              { image: 'https://picsum.photos/seed/event8/800/600', text: 'Hackathon' },
            ]}
            bend={2}
            textColor="#F4C300"
            borderRadius={0.04}
            font="bold 28px Bangers, cursive"
            scrollSpeed={2}
            scrollEase={0.06}
          />
        </div>
      </div>

      {/* Section 3: PixelTransition grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <h2 style={{
            fontFamily: 'Bangers, cursive',
            fontSize: '56px',
            color: '#F4C300',
            margin: '0 0 16px 0',
            letterSpacing: '0.02em',
          }}>
            PIXEL MEMORIES
          </h2>
          <p style={{
            fontFamily: 'Comic Neue, cursive',
            color: '#FFFFFF',
            fontSize: '16px',
            margin: 0,
          }}>
            Hover over each frame to reveal the story.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px1/600/600" alt="BITMUN 2024" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
            }
            secondContent={
              <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a', border: '3px solid #F4C300' }}>
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>BITMUN 2024</p>
                  <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>Model United Nations — where future diplomats debate the world&apos;s toughest issues.</p>
                </div>
              </div>
            }
            gridSize={8}
            pixelColor="#F4C300"
            once={false}
            animationStepDuration={0.35}
            style={{ width: '100%', aspectRatio: '1/1', borderRadius: '4px', border: '3px solid #000', boxShadow: '5px 5px 0 #000' }}
          />

          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px2/600/600" alt="GENESIS Quiz" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
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

          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px3/600/600" alt="Debate Night" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
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

          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px4/600/600" alt="Tech Talk" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
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

          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px5/600/600" alt="Annual Fest" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
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

          <PixelTransition
            firstContent={
              <img src="https://picsum.photos/seed/px6/600/600" alt="Hackathon" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.4) contrast(1.1)' }} />
            }
            secondContent={
              <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a', border: '3px solid #F4C300' }}>
                <div style={{ textAlign: 'center', padding: '16px' }}>
                  <p style={{ fontFamily: 'Bangers, cursive', color: '#F4C300', fontSize: '1.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>HACKATHON</p>
                  <p style={{ fontFamily: 'Comic Neue, cursive', color: '#FFFFFF', fontSize: '0.9rem', lineHeight: 1.5 }}>48 hours of pure coding madness, caffeine, and innovation working towards the next big thing.</p>
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

      {/* Section 4: DomeGallery */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <h2 style={{
            fontFamily: 'Bangers, cursive',
            fontSize: '56px',
            color: '#F4C300',
            margin: '0 0 16px 0',
            letterSpacing: '0.02em',
          }}>
            THE 3D DOME
          </h2>
          <p style={{
            fontFamily: 'Comic Neue, cursive',
            color: '#FFFFFF',
            fontSize: '16px',
            margin: 0,
          }}>
            Explore moments in three dimensions — rotate, zoom, and immerse yourself.
          </p>
        </div>

        <div style={{
          height: '600px',
          width: '100%',
          border: '3px solid #000',
          boxShadow: '8px 8px 0 #F4C300',
        }}>
          <DomeGallery
            images={[
              'https://picsum.photos/seed/dome1/400/400',
              'https://picsum.photos/seed/dome2/400/400',
              'https://picsum.photos/seed/dome3/400/400',
              'https://picsum.photos/seed/dome4/400/400',
              'https://picsum.photos/seed/dome5/400/400',
              'https://picsum.photos/seed/dome6/400/400',
            ]}
            autoRotate={true}
            rotationSpeed={0.5}
            zoomLevel={1}
            cameraDistance={2}
          />
        </div>
      </div>

      {/* Footer spacer */}
      <div style={{ height: '60px' }} />
    </div>
  );
}
