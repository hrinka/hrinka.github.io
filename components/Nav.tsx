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
      <div className="nav-container">

        <a href="#" className="nav-logo">
          Cosmic<span style={{ color: 'var(--accent)' }}>Θ</span>
        </a>

        <ul className="nav-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Message</a>
      </div>

      <style>{`
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-syne);
          font-weight: 800;
          font-size: 20px;
          letter-spacing: -0.02em;
          color: var(--text);
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
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
          left: 0; bottom: -1px;
          width: 100%; height: 1px;
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
          flex-shrink: 0;
        }
        .nav-cta:hover {
          background: rgba(110,231,183,0.08);
          border-color: rgba(110,231,183,0.6);
        }

        /* ── モバイル ── */
        @media (max-width: 639px) {
          .nav-container { padding: 0 20px; height: 56px; }
          .nav-logo { font-size: 18px; }
          .nav-links { display: none; }
          .nav-cta { font-size: 10px; padding: 6px 14px; }
        }
      `}</style>
    </nav>
  )
}
