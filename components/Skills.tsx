'use client'

const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Three.js',
      'shadcn/ui', 'NextAuth', 'WebSocket', 'Nuxt.js', 'jQuery',
    ],
  },
  {
    title: 'Backend',
    items: [
      'FastAPI (Python 3.11)', 'Django', 'Ruby on Rails', 'SQLAlchemy',
      'Alembic', 'Node.js', 'PostgreSQL', 'MySQL',
    ],
  },
  {
    title: 'Infra',
    items: [
      'AWS (S3 · CloudFront · App Runner · RDS · EC2)',
      'Terraform', 'Docker', 'GitHub Actions',
    ],
  },
  {
    title: 'Design / AI',
    items: [
      'Figma', 'Claude API', 'v0', 'Unreal Engine 5 (C++)',
      'GAS', 'Tableau', 'C / C++',
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: 'var(--bg)', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <p
          style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 12,
            letterSpacing: '0.15em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Tech Stack
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: 56,
          }}
        >
          Skills
        </h2>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {skillGroups.map(({ title, items }) => (
            <div
              key={title}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '28px',
                transition: 'border-color 0.3s',
                background: 'rgba(255,255,255,0.01)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = 'var(--accent)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = 'var(--border)')
              }
            >
              <h3
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 20,
                }}
              >
                {title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: 14,
                      color: 'var(--text2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
