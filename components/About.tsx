'use client'

import { useInView } from '@/hooks/useInView'

const skills = [
  'Next.js 15', 'React', 'TypeScript', 'Three.js', 'Tailwind CSS',
  'shadcn/ui', 'WebSocket', 'Nuxt.js',
  'FastAPI', 'Django', 'Ruby on Rails', 'Node.js',
  'AWS', 'Terraform', 'Docker', 'GitHub Actions',
  'Claude Code', 'Cursor', 'v0', 'GitHub Copilot',
  'Figma', 'Unreal Engine 5', 'GAS',
]

const highlights = [
  { value: '5yr+',  label: '実務経験'          },
  { value: '13+',   label: 'Projects'           },
  { value: '×10',   label: 'Team Lead'          },
  { value: '800',   label: 'TOEIC'              },
  { value: '42T',   label: 'フルカリキュラム修了' },
]

const bioLines = [
  '1999年生まれ。青山学院大学 総合文化政策学部をコロナ禍に中退。',
  'そこから独自のストリートを歩む。',
  '',
  'デジタルクリエイティブを軸に、',
  '空間デザイン、楽曲制作、DJ、Vocalist、アートディレクション、',
  'さらにはフロントエンド開発まで幅広い分野で活躍。',
  '',
  '創造の枠を越えた活動を続ける中、',
  'リアルとヴァーチャルを有機的に結びつける',
  'インタラクションデザインを追求。',
  '感性と技術が融合した作品に取り組んでいる。',
]

function reveal(inView: boolean, delay = 0) {
  return {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  }
}

export default function About() {
  const { ref: headerRef, inView: headerInView } = useInView()
  const { ref: bioRef,    inView: bioInView    } = useInView()
  const { ref: skillsRef, inView: skillsInView } = useInView()

  return (
    <section id="about" style={{ background: 'var(--bg)', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div ref={headerRef} style={reveal(headerInView)}>
          <p style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 11,
            letterSpacing: '0.18em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: 56,
          }}>
            About
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}>

          {/* Bio */}
          <div ref={bioRef} style={reveal(bioInView, 0.1)}>
            <div style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: 'var(--text)',
              lineHeight: 2,
              letterSpacing: '0.01em',
            }}>
              {bioLines.map((line, i) =>
                line === '' ? (
                  <br key={i} />
                ) : (
                  <p key={i} style={{ margin: 0 }}>{line}</p>
                )
              )}
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
              marginTop: 48,
              paddingTop: 36,
              borderTop: '1px solid var(--border)',
            }}>
              {highlights.map(({ value, label }, i) => (
                <div key={label} style={{
                  ...reveal(bioInView, 0.2 + i * 0.07),
                }}>
                  <div style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 700,
                    fontSize: 22,
                    color: 'var(--text)',
                    lineHeight: 1,
                  }}>{value}</div>
                  <div style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 10,
                    color: 'var(--text2)',
                    marginTop: 4,
                    letterSpacing: '0.08em',
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} style={reveal(skillsInView, 0.15)}>
            <p style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: 10,
              letterSpacing: '0.15em',
              color: 'var(--text2)',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((s, i) => (
                <span
                  key={s}
                  className="skill-tag"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 11,
                    color: 'var(--text2)',
                    border: '1px solid var(--border)',
                    padding: '5px 11px',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.02)',
                    cursor: 'default',
                    opacity: skillsInView ? 1 : 0,
                    transform: skillsInView ? 'translateY(0)' : 'translateY(10px)',
                    transition: `opacity 0.4s ease ${0.1 + i * 0.025}s, transform 0.4s ease ${0.1 + i * 0.025}s, color 0.2s, border-color 0.2s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'rgba(110,231,183,0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text2)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div style={{
              marginTop: 36,
              padding: '20px 22px',
              border: '1px solid rgba(110,231,183,0.2)',
              borderRadius: 10,
              background: 'rgba(110,231,183,0.03)',
              ...reveal(skillsInView, 0.5),
            }}>
              <p style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 10,
                color: 'var(--accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>
                AI-Driven Development
              </p>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 13,
                color: 'var(--text2)',
                lineHeight: 1.8,
                margin: 0,
              }}>
                Claude Code · Cursor · v0 · GitHub Copilot を設計・実装・レビューの全フェーズに組み込んだ開発スタイルを実践。AIを副操縦士として活用し、プロダクト品質と開発速度を両立。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
