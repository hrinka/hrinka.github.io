'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Works',   href: '#works'   },
  { label: 'About',   href: '#about'   },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      transition: 'background 0.4s, border-color 0.4s',
      background: scrolled ? 'rgba(1,1,8,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <a href="#" style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}>
          Cosmic<span style={{ color: 'var(--accent)' }}>Θ</span>
        </a>

        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}
          className="nav-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Message
        </a>
      </div>

      <style>{`
        @media(max-width:640px){.nav-links{display:none}}

        .nav-link {
          font-family: var(--font-dm-mono);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--text2);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 1px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link:hover::after { transform: scaleX(1); }

        .nav-cta {
          font-family: var(--font-dm-mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--accent);
          border: 1px solid rgba(110,231,183,0.35);
          padding: 7px 18px;
          border-radius: 9999px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav-cta:hover {
          background: rgba(110,231,183,0.08);
          border-color: rgba(110,231,183,0.6);
        }
      `}</style>
    </nav>
  )
}
