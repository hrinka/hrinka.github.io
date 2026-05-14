'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%*'

function useScramble(target: string, startDelay = 0) {
  const [text, setText] = useState(() => target.replace(/[^ ]/g, '_'))

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>
    let frame = 0
    const total = 24

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame++
        setText(
          target
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < Math.floor((frame / total) * target.length)) return char
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            })
            .join('')
        )
        if (frame >= total) { clearInterval(interval); setText(target) }
      }, 45)
    }, startDelay)

    return () => { clearTimeout(timeout); clearInterval(interval) }
  }, [target, startDelay])

  return text
}

const tags = [
  'Next.js 15', 'Three.js', 'TypeScript', 'FastAPI',
  'AWS', 'Terraform', 'Claude API', 'Figma', 'Unreal Engine 5',
]

const stats = [
  { value: '5yr',   label: 'Experience' },
  { value: '13+',   label: 'Projects'   },
  { value: '×10',   label: 'Team Lead'  },
  { value: '800',   label: 'TOEIC'      },
]

export default function Hero() {
  const line1 = useScramble("Hello, World;)", 400)
  const line2 = useScramble("I'm Rinka Homma.", 900)

  return (
    <section id="hero" style={{
      position: 'relative',
      width: '100%',
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <HeroCanvas />

      <div style={{
        position: 'relative',
        zIndex: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '96px 32px 120px',
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
      }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 11,
          letterSpacing: '0.2em',
          color: 'var(--text2)',
          marginBottom: 28,
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          animation: 'fadeUp 0.6s ease both',
          animationDelay: '0.1s',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)',
            display: 'inline-block',
            animation: 'blink 1.4s ease-in-out infinite',
          }} />
          Frontend Developer &amp; Creative Director
        </p>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          marginBottom: 36,
        }}>
          <span style={{
            display: 'block',
            fontSize: 'clamp(16px, 2.4vw, 28px)',
            fontFamily: 'var(--font-dm-mono)',
            fontWeight: 400,
            color: 'var(--accent)',
            letterSpacing: '0.03em',
            marginBottom: 10,
          }}>
            {line1}
          </span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(48px, 8.5vw, 100px)',
            color: 'var(--text)',
          }}>
            I&apos;m Rinka
          </span>
          <span style={{
            display: 'block',
            fontSize: 'clamp(48px, 8.5vw, 100px)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(240,240,255,0.3)',
          }}>
            Homma.
          </span>
        </h1>

        {/* Tags — stagger in after scramble */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 44,
        }}>
          {tags.map((t, i) => (
            <span key={t} style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: 10,
              color: 'var(--text2)',
              border: '1px solid var(--border)',
              padding: '3px 9px',
              borderRadius: 3,
              background: 'rgba(255,255,255,0.02)',
              animation: 'fadeUp 0.5s ease both',
              animationDelay: `${1.3 + i * 0.05}s`,
            }}>{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'flex', gap: 12,
          animation: 'fadeUp 0.6s ease both',
          animationDelay: '1.85s',
        }}>
          <a href="#works" className="hero-cta-primary">
            View Works →
          </a>
          <a href="https://github.com/hrinka" target="_blank" rel="noopener noreferrer"
            className="hero-cta-secondary">
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        position: 'absolute', bottom: 44, left: 32, zIndex: 10,
        display: 'flex', gap: 28,
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '2s',
      }}>
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div style={{
              fontFamily: 'var(--font-syne)',
              fontWeight: 700, fontSize: 18,
              color: 'var(--text)', lineHeight: 1,
            }}>{value}</div>
            <div style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: 10,
              color: 'var(--text2)',
              marginTop: 4, letterSpacing: '0.08em',
            }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 44, right: 32, zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'fadeUp 0.6s ease both',
        animationDelay: '2.1s',
      }}>
        <span style={{
          fontFamily: 'var(--font-dm-mono)', fontSize: 9,
          letterSpacing: '0.18em', color: 'var(--text2)',
          textTransform: 'uppercase', writingMode: 'vertical-rl',
        }}>Scroll</span>
        <div style={{
          width: 1, height: 44,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollLine 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { opacity: 1; transform: scaleY(1)   translateY(0);   }
          100% { opacity: 0; transform: scaleY(0.2) translateY(20px); }
        }
        .hero-cta-primary {
          font-family: var(--font-dm-sans);
          font-weight: 500;
          font-size: 14px;
          color: #010108;
          background: var(--accent);
          padding: 11px 26px;
          border-radius: 6px;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-block;
        }
        .hero-cta-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }
        .hero-cta-secondary {
          font-family: var(--font-dm-sans);
          font-weight: 500;
          font-size: 14px;
          color: var(--text);
          border: 1px solid var(--border);
          padding: 11px 26px;
          border-radius: 6px;
          text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .hero-cta-secondary:hover {
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  )
}
