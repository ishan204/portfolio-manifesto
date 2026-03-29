'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/',           label: 'Home' },
  { href: '/about',      label: 'About' },
  { href: '/gallery',    label: 'Gallery' },
  { href: '/experience', label: 'Experience' },
  { href: '/events',     label: 'Events' },
  { href: '/contact',    label: 'Contact' },
  { href: '/manifesto',  label: 'Manifesto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 64);
      setLastY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: '#0a0a0a',
          borderBottom: '2px solid #F4C300',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px',
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            fontFamily: 'Bangers, cursive',
            fontSize: '32px',
            color: '#F4C300',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}>
            URJ.
          </span>
          {/* CSS Bat silhouette */}
          <span style={{
            display: 'inline-block',
            width: '20px',
            height: '14px',
            backgroundColor: '#F4C300',
            clipPath: 'polygon(50% 100%, 0% 30%, 15% 0%, 30% 20%, 50% 10%, 70% 20%, 85% 0%, 100% 30%)',
            marginLeft: '4px',
          }} />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div style={{
          display: 'flex',
          gap: '28px',
          alignItems: 'center',
        }}
          className="desktop-nav"
        >
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Comic Neue, cursive',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: isActive ? '#F4C300' : '#FFFFFF',
                  textDecoration: 'none',
                  borderBottom: isActive ? '2px solid #F4C300' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.color = '#F4C300';
                    (e.target as HTMLElement).style.borderBottomColor = '#F4C300';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.target as HTMLElement).style.color = '#FFFFFF';
                    (e.target as HTMLElement).style.borderBottomColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* HAMBURGER BUTTON — mobile only */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid #F4C300',
            padding: '6px 10px',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
            borderRadius: '4px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#F4C300',
              transition: 'transform 0.2s',
            }} />
          ))}
        </button>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: '64px',
              right: 0,
              bottom: 0,
              width: '280px',
              backgroundColor: '#0a0a0a',
              borderLeft: '3px solid #F4C300',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '32px 24px',
              gap: '24px',
            }}
          >
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'Bangers, cursive',
                    fontSize: '28px',
                    letterSpacing: '0.05em',
                    color: isActive ? '#F4C300' : '#FFFFFF',
                    textDecoration: 'none',
                    borderLeft: isActive ? '4px solid #F4C300' : '4px solid transparent',
                    paddingLeft: '12px',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SPACER so page content doesn't hide under navbar */}
      <div style={{ height: '64px' }} />

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
