'use client'

const conditions = [
  '月50万円〜（税抜）',
  'フルリモート',
  '週5日稼働可',
]

const links = [
  {
    label: 'Email',
    href: 'mailto:rt3mis10@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hrinka',
    icon: '◈',
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/rt3mis10',
    icon: '◇',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '120px 24px 80px',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* 宇宙の地平線グラデーション背景 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(110,231,183,0.08) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 680,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 12,
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Get In Touch
        </p>

        {/* H2 */}
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: 'var(--text)',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 40,
          }}
        >
          Let&apos;s work
          <br />
          together.
        </h2>

        {/* 条件バッジ */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 56,
          }}
        >
          {conditions.map((c) => (
            <span
              key={c}
              style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 12,
                color: 'var(--accent)',
                border: '1px solid rgba(110,231,183,0.3)',
                padding: '6px 14px',
                borderRadius: 9999,
                background: 'rgba(110,231,183,0.05)',
              }}
            >
              {c}
            </span>
          ))}
        </div>

        {/* リンク */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
            marginBottom: 80,
            flexWrap: 'wrap',
          }}
        >
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 500,
                fontSize: 15,
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '12px 24px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'border-color 0.2s, color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--accent)'
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-dm-mono)' }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 12,
            color: 'var(--text2)',
            letterSpacing: '0.05em',
          }}
        >
          © 2026 Rinka Honma
        </p>
      </div>
    </section>
  )
}
