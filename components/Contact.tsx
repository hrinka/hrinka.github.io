'use client'

import { useInView } from '@/hooks/useInView'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/hrinka',
    handle: '@hrinka',
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/rt3mis10',
    handle: '@rt3mis10',
  },
]

export default function Contact() {
  const { ref, inView } = useInView(0.1)

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '140px 32px 80px',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* 背景グラデーション */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(110,231,183,0.07) 0%, rgba(167,139,250,0.04) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 上部ライン */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: inView ? '100%' : '0%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(110,231,183,0.3), rgba(167,139,250,0.3), transparent)',
        transition: 'width 1.2s ease 0.2s',
        pointerEvents: 'none',
      }} />

      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 760,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 11,
          letterSpacing: '0.22em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: 24,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
        }}>
          Get In Touch
        </p>

        {/* Heading */}
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(38px, 6.5vw, 72px)',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: 64,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
        }}>
          <span style={{ color: 'var(--text)' }}>Hit me up for</span>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Future Project.
          </span>
        </h2>

        {/* Primary CTA — email */}
        <div style={{
          marginBottom: 48,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
        }}>
          <a
            href="mailto:rt3mis10@gmail.com"
            className="email-cta"
          >
            rt3mis10@gmail.com
            <span style={{ marginLeft: 10, opacity: 0.6, fontSize: '0.75em' }}>↗</span>
          </a>
        </div>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginBottom: 36,
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 9,
            letterSpacing: '0.2em',
            color: 'var(--text2)',
            textTransform: 'uppercase',
          }}>or find me on</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Socials */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 80,
          flexWrap: 'wrap',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s',
        }}>
          {socials.map(({ label, href, handle }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 10,
                letterSpacing: '0.1em',
                color: 'var(--text2)',
                textTransform: 'uppercase',
              }}>{label}</span>
              <span style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 12,
                color: 'var(--text)',
              }}>{handle}</span>
              <span style={{ fontSize: 10, color: 'var(--text2)', marginLeft: 2 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.6s ease 0.7s',
        }}>
          <p style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 11,
            color: 'var(--text2)',
            letterSpacing: '0.08em',
            marginBottom: 6,
          }}>
            Based in Tokyo · Open to remote worldwide
          </p>
          <p style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 11,
            color: 'rgba(240,240,255,0.2)',
            letterSpacing: '0.05em',
          }}>
            © 2026 CosmicΘ — Rinka Homma
          </p>
        </div>
      </div>

      <style>{`
        .email-cta {
          font-family: var(--font-syne);
          font-weight: 700;
          font-size: clamp(20px, 3.5vw, 36px);
          color: var(--text);
          text-decoration: none;
          position: relative;
          display: inline-block;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .email-cta::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%; height: 1.5px;
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .email-cta:hover { color: var(--accent); }
        .email-cta:hover::after { transform: scaleX(1); }

        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4;
          padding: 16px 28px;
          border: 1px solid var(--border);
          border-radius: 10px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .social-link:hover {
          border-color: rgba(110,231,183,0.3);
          background: rgba(110,231,183,0.04);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
