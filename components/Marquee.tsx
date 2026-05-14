'use client'

const items = [
  'Frontend Developer', 'Creative Director', 'Three.js',
  'Next.js 15', 'TypeScript', 'AI-Driven Dev',
  'Interaction Design', 'DJ · Vocalist', 'Art Direction',
  '42Tokyo', 'Claude API', 'Figma',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div style={{
      overflow: 'hidden',
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '15px 0',
    }}>
      <div style={{
        display: 'flex',
        animation: 'marquee 32s linear infinite',
        width: 'max-content',
        willChange: 'transform',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 10,
            letterSpacing: '0.22em',
            color: 'var(--text2)',
            textTransform: 'uppercase',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
          }}>
            {item}
            <span style={{
              color: 'rgba(110,231,183,0.45)',
              margin: '0 28px',
              fontSize: 6,
            }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
