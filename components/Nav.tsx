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
      background: scrolled ? 'rgba(1,1,8,0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
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

        {/* Logo */}
        <a href="#" style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          textDecoration: 'none',
        }}>
          Cosmic<span style={{ color: 'var(--accent)' }}>Θ</span>
        </a>

        {/* Links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', margin: 0, padding: 0 }}
          className="nav-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 12,
                letterSpacing: '0.08em',
                color: 'var(--text2)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text2)')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="mailto:rt3mis10@gmail.com" style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          color: 'var(--accent)',
          border: '1px solid rgba(110,231,183,0.35)',
          padding: '7px 18px',
          borderRadius: 9999,
          textDecoration: 'none',
          transition: 'background 0.2s',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(110,231,183,0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          HIRE ME
        </a>
      </div>

      <style>{`@media(max-width:640px){.nav-links{display:none}}`}</style>
    </nav>
  )
}
