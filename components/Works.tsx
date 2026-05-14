'use client'

import { useState } from 'react'

type Work = {
  title: string
  category: 'Product' | 'Creative' | 'Web' | 'Systems'
  badge?: string
  period?: string
  role?: string
  tags: string[]
  desc: string
  youtube?: string
  link?: string
  github?: string
  wide?: boolean
  gradient?: string
}

const works: Work[] = [
  {
    title: 'New Moon Guild',
    category: 'Creative',
    badge: '🏆 ハッカソン最優秀賞',
    period: '2024.12—2025.03',
    role: '10名チームリード',
    tags: ['React', 'Node.js', 'Unreal Engine 5', 'Pro DJ Link', 'OSC'],
    desc: 'NTTドコモ「MetaMe」上に構築したDJライブ体験空間。DJ機材連携・AI感情解析・ユーザー参加型演出を融合。NTTドコモ主催ハッカソン最優秀賞受賞。',
    youtube: 'https://www.youtube.com/embed/YxXUMXuE68M',
    wide: true,
  },
  {
    title: 'ChocoPLAi',
    category: 'Product',
    badge: 'FinTech · 進行中',
    period: '2025.10—現在',
    role: 'メンバー',
    tags: ['Next.js 15', 'FastAPI', 'Claude API', 'AWS', 'Terraform'],
    desc: 'キャッシュフローシミュレーション × Claude AI分析のFinTech Webアプリ。フロント〜インフラまで一貫担当。',
    gradient: 'linear-gradient(135deg, rgba(110,231,183,0.12) 0%, rgba(110,231,183,0.03) 100%)',
  },
  {
    title: '3D Multiplayer Pong',
    category: 'Systems',
    badge: '42Tokyo',
    period: '2025.01—2025.03',
    role: 'リーダー / 4名',
    tags: ['TypeScript', 'Three.js', 'Django', 'WebSocket', 'Docker'],
    desc: 'Three.js × WebSocketのリアルタイム対戦SPA。アーキテクチャ設計をリードし42Tokyo最終課題として完成。',
    github: 'https://github.com/hrinka',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.03) 100%)',
  },
  {
    title: '製造業コーポレートサイト',
    category: 'Web',
    badge: 'フリーランス',
    period: '2025.03—現在',
    role: '1名完結',
    tags: ['React', 'Nuxt.js', 'v0', 'Figma', 'GitHub Actions'],
    desc: '要件定義〜Figmaデザイン〜実装〜CI/CDまで1名で完結。AIツール活用で工数40%削減を実現。',
    gradient: 'linear-gradient(135deg, rgba(110,231,183,0.08) 0%, rgba(167,139,250,0.08) 100%)',
  },
  {
    title: 'Frog',
    category: 'Web',
    badge: 'Web制作',
    tags: ['HTML/CSS', 'TypeScript', 'Cloudflare CDN', 'Google Analytics'],
    desc: 'IT業界専門の海外就職エージェントの大型コーポレートサイト。SSG・CDN・SEO・GA計測設計まで担当。',
    link: 'https://frogagent.com/',
    gradient: 'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)',
  },
  {
    title: 'Going Jesse',
    category: 'Creative',
    badge: 'Web制作',
    tags: ['HTML/CSS', 'JavaScript', 'SVGアニメーション', 'YouTube API'],
    desc: '短編ドラマのプロモーションLP。SVGストロークアニメーション・スクロール連動演出・YouTube埋め込みモーダルを実装。',
    link: 'https://goingjesse.fixville.co/',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(251,191,36,0.05) 100%)',
  },
  {
    title: 'Hair Salon',
    category: 'Web',
    badge: 'Web制作',
    tags: ['WordPress', 'PHP', 'HTML/CSS', 'ローカルSEO'],
    desc: '個人経営美容室の公式サイト。WordPressオリジナルテーマ開発・ローカルSEO最適化・CMS操作説明まで完結。',
    link: 'https://ams-hair.site/',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.08) 0%, rgba(251,146,60,0.02) 100%)',
  },
  {
    title: 'BtoC 家事代行マッチング',
    category: 'Product',
    badge: '業務委託',
    period: '2024.05—2024.10',
    role: 'FEリード / 3名',
    tags: ['Next.js App Router', 'shadcn/ui', 'NextAuth', 'v0'],
    desc: 'スタッフ・クライアント向けマッチングサービスのFEを担当。v0で高速モックアップ→実装のフローを確立。',
    gradient: 'linear-gradient(135deg, rgba(110,231,183,0.08) 0%, rgba(167,139,250,0.05) 100%)',
  },
  {
    title: 'ファッション業界EC',
    category: 'Product',
    badge: '業務委託',
    period: '2024.01—2024.04',
    role: 'SE / 2名',
    tags: ['Ruby on Rails', 'jQuery', 'Tableau', 'Python', 'AWS EC2'],
    desc: 'ECサイト開発・運用。売上・広告データをTableau/Pythonで可視化し経営判断に資するレポートシステムを構築。',
    gradient: 'linear-gradient(135deg, rgba(251,191,36,0.06) 0%, rgba(251,146,60,0.06) 100%)',
  },
  {
    title: '飲食店コーポレートサイト',
    category: 'Web',
    badge: '業務委託',
    period: '2023.12—2024.01',
    role: '1名完結',
    tags: ['HTML/CSS', 'JavaScript', 'Three.js', 'MySQL'],
    desc: 'Three.jsによる3Dビジュアル演出が特徴のコーポレートサイト。1名でデザイン〜公開まで完結。',
    gradient: 'linear-gradient(135deg, rgba(251,146,60,0.08) 0%, rgba(167,139,250,0.06) 100%)',
  },
  {
    title: 'DX 日報自動集計',
    category: 'Systems',
    badge: '業務委託',
    period: '2024.11—2025.01',
    role: 'SE / 3名',
    tags: ['Google Apps Script', 'JavaScript', 'Google Workspace'],
    desc: '月次日報の自動集計〜スプレッドシート格納フローをGASで構築。担当者の手作業を完全自動化。',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(110,231,183,0.05) 100%)',
  },
  {
    title: 'IRCサーバー / minishell',
    category: 'Systems',
    badge: '42Tokyo',
    period: '2023.12—2024.02',
    role: 'SE / 2〜3名',
    tags: ['C/C++', 'IRC Protocol', 'Socket通信', 'Linux'],
    desc: 'C++でIRCプロトコル準拠のサーバー・クライアントをゼロから実装。低レイヤのソケット通信・プロセス管理を理解。',
    github: 'https://github.com/hrinka',
    gradient: 'linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(167,139,250,0.03) 100%)',
  },
  {
    title: 'CtoCチケット販売EC',
    category: 'Product',
    badge: '業務委託',
    period: '2022.03—2024.02',
    role: 'SE · 約1.5年',
    tags: ['Ruby', 'jQuery', 'HTML/CSS', 'MySQL'],
    desc: 'フリーランスとして参画。検索・決済・入金画面の新規実装と改修、設計書作成〜運用保守まで継続担当。',
    gradient: 'linear-gradient(135deg, rgba(110,231,183,0.06) 0%, rgba(251,191,36,0.04) 100%)',
  },
]

const CATEGORIES = ['All', 'Product', 'Creative', 'Web', 'Systems'] as const
type Cat = (typeof CATEGORIES)[number]

function WorkCard({ work }: { work: Work }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: work.wide ? 'span 2' : 'span 1',
        borderRadius: 12,
        border: '1px solid',
        borderColor: hovered ? 'rgba(110,231,183,0.3)' : 'var(--border)',
        overflow: 'hidden',
        background: work.youtube ? '#000' : (work.gradient ?? 'rgba(255,255,255,0.02)'),
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* YouTube */}
      {work.youtube && (
        <div style={{ position: 'relative', paddingTop: '56.25%', flexShrink: 0 }}>
          <iframe
            src={work.youtube}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}

      {/* Text */}
      <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
          {work.badge && (
            <span style={{
              fontFamily: 'var(--font-dm-mono)',
              fontSize: 10,
              color: work.category === 'Creative' ? '#fbbf24'
                    : work.category === 'Systems' ? 'var(--accent2)'
                    : 'var(--accent)',
              border: `1px solid ${work.category === 'Creative' ? '#fbbf2433'
                       : work.category === 'Systems' ? 'rgba(167,139,250,0.25)'
                       : 'rgba(110,231,183,0.25)'}`,
              padding: '2px 7px', borderRadius: 3,
            }}>{work.badge}</span>
          )}
          {work.period && (
            <span style={{
              fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--text2)',
            }}>{work.period}</span>
          )}
          {work.role && (
            <span style={{
              fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--text2)',
            }}>· {work.role}</span>
          )}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: 16,
          color: 'var(--text)', margin: 0, lineHeight: 1.3,
        }}>{work.title}</h3>

        <p style={{
          fontFamily: 'var(--font-dm-sans)', fontSize: 13,
          color: 'var(--text2)', lineHeight: 1.7, margin: 0, flex: 1,
        }}>{work.desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {work.tags.map((t) => (
            <span key={t} style={{
              fontFamily: 'var(--font-dm-mono)', fontSize: 10,
              color: 'var(--text2)', border: '1px solid var(--border)',
              padding: '2px 6px', borderRadius: 3,
            }}>{t}</span>
          ))}
        </div>

        {(work.link || work.github) && (
          <div style={{ display: 'flex', gap: 12, marginTop: 2 }}>
            {work.link && (
              <a href={work.link} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 11, color: 'var(--accent)', textDecoration: 'none' }}>
                View ↗
              </a>
            )}
            {work.github && (
              <a href={work.github} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 11, color: 'var(--text2)', textDecoration: 'none' }}>
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Works() {
  const [active, setActive] = useState<Cat>('All')

  const filtered = active === 'All'
    ? works
    : works.filter((w) => w.category === active)

  return (
    <section id="works" style={{ background: 'var(--surface)', padding: '100px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <p style={{
          fontFamily: 'var(--font-dm-mono)', fontSize: 11,
          letterSpacing: '0.18em', color: 'var(--accent)',
          textTransform: 'uppercase', marginBottom: 16,
        }}>Works</p>

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-syne)', fontWeight: 800,
            fontSize: 'clamp(32px, 5vw, 52px)', color: 'var(--text)',
            letterSpacing: '-0.02em', margin: 0,
          }}>Selected Works</h2>

          {/* カテゴリフィルター */}
          <div style={{ display: 'flex', gap: 4 }}>
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                fontFamily: 'var(--font-dm-mono)', fontSize: 11,
                letterSpacing: '0.08em',
                color: active === cat ? '#010108' : 'var(--text2)',
                background: active === cat ? 'var(--accent)' : 'transparent',
                border: '1px solid',
                borderColor: active === cat ? 'var(--accent)' : 'var(--border)',
                padding: '5px 12px', borderRadius: 4, cursor: 'pointer',
                transition: 'all 0.2s',
              }}>{cat}</button>
            ))}
          </div>
        </div>

        {/* Bentoグリッド */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {filtered.map((w) => <WorkCard key={w.title} work={w} />)}
        </div>

      </div>
    </section>
  )
}
