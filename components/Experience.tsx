'use client'

const experiences = [
  {
    period: '2025.10〜現在',
    title: 'ChocoPLAi（業務委託 · メンバー）',
    desc: 'FinTech系キャッシュフローシミュレーションWebアプリの開発。Next.js 15 / FastAPI / Claude APIによるフロントエンド・バックエンド実装、AWS(S3/CloudFront/App Runner/RDS)/Terraformによるインフラ構築まで一貫担当。2〜3名チーム。',
  },
  {
    period: '2025.03〜現在',
    title: '製造業コーポレートサイト（フリーランス · リーダー）',
    desc: '製造系企業のコーポレートサイトを1名で完結。クライアントへの要件ヒアリング・Figmaデザイン提案・v0/Cursorによる高速プロトタイピング・GitHub Actions自動デプロイまで担当。',
  },
  {
    period: '2025.01〜2025.03',
    title: '3D Multiplayer Pong（42Tokyo最終課題 · リーダー）',
    desc: 'TypeScript / Three.js / DjangoによるリアルタイムマルチプレイSPA。全体アーキテクチャ設計をリードし、WebSocketリアルタイム同期・フルDocker構成を実装。4名チーム。',
  },
  {
    period: '2024.12〜2025.03',
    title: 'New Moon Guild（フリーランス · 10名チームリード）',
    desc: 'NTTドコモ「MetaMe」上に構築したDJライブ体験空間。DJ機材連携・AI感情解析・ユーザー参加型演出を融合。10名チームのプロジェクト全体を統括しハッカソン最優秀賞を受賞。',
  },
  {
    period: '2024.11〜2025.01',
    title: '社内DX 日報自動集計（業務委託 · SE）',
    desc: 'GASによる月次日報の自動集計・スプレッドシート格納フローを構築。管理画面UIの作成・トリガー設定・エラーハンドリングまで実装。3名チーム。',
  },
  {
    period: '2024.05〜2024.10',
    title: 'BtoC 家事代行マッチング（業務委託 · フロントエンドリード）',
    desc: 'Next.js App Router / shadcn/ui / NextAuthによるマッチングWebサービスのフロントエンドを担当。v0で各画面の高速モックアップを作成し仕様確認を効率化。3名チーム。',
  },
  {
    period: '2024.01〜2024.04',
    title: 'ファッション業界ECサイト（業務委託 · SE）',
    desc: 'Ruby on RailsによるEC機能開発・改修・運用保守。Google Analytics・広告・売上データをTableau / Pythonで集計・可視化し、経営判断に資するレポートシステムを構築。2名チーム。',
  },
  {
    period: '2023.12〜2024.01',
    title: '飲食店コーポレートサイト（業務委託 · 1名完結）',
    desc: 'HTML / CSS / JavaScriptによるコーポレートサイト制作。Three.jsを活用した3Dビジュアル・アニメーション演出とMySQLによるコンテンツ管理機能を実装し1名で完結。',
  },
  {
    period: '2022〜2025',
    title: '42Tokyo フルカリキュラム修了',
    desc: '合格率10%未満の競争型エンジニアスクール（フランス・パリ発）。C/C++から始まりシステムプログラミング・ネットワーク・低レイヤ〜Webまでフルカリキュラムを修了。学費無料。',
  },
  {
    period: '2022.03〜2024.02',
    title: 'CtoCチケット販売ECサイト（業務委託 · 約1.5年）',
    desc: 'フリーランスエンジニアとして参画。検索・決済・入金画面の新規実装・改修、画面設計書・テーブル定義書・API設計書の作成を担当。Ruby / jQuery / MySQL。3名チーム。',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: 'var(--bg)', padding: '100px 24px' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 12,
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          Career
        </p>
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 52px)',
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: 64,
        }}>
          Experience
        </h2>

        <div style={{ position: 'relative' }}>
          {/* 縦ライン */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 8,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            {experiences.map(({ period, title, desc }) => (
              <div
                key={title}
                style={{ paddingLeft: 32, position: 'relative' }}
                onMouseEnter={(e) => {
                  const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement
                  if (dot) dot.style.background = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  const dot = e.currentTarget.querySelector('.timeline-dot') as HTMLElement
                  if (dot) dot.style.background = 'transparent'
                }}
              >
                <div
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: -5,
                    top: 8,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: '2px solid var(--accent)',
                    background: 'transparent',
                    transition: 'background 0.2s',
                  }}
                />

                <p style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 11,
                  color: 'var(--accent)',
                  marginBottom: 5,
                  letterSpacing: '0.05em',
                }}>
                  {period}
                </p>

                <h3 style={{
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 700,
                  fontSize: 17,
                  color: 'var(--text)',
                  marginBottom: 8,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.35,
                }}>
                  {title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 13,
                  color: 'var(--text2)',
                  lineHeight: 1.8,
                }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
