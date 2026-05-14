'use client'

import { useState } from 'react'

const workflows = [
  {
    step: '01',
    label: '要件定義・設計',
    detail: 'Claude にシステム構成を壁打ちし、最適なアーキテクチャを即座に選定',
  },
  {
    step: '02',
    label: 'UIプロトタイプ',
    detail: 'v0 でFigmaデザインを即コード化。提案スピードが従来比 ×5',
  },
  {
    step: '03',
    label: '実装・レビュー',
    detail: 'Claude を副操縦士として複雑なロジックを壁打ち。バグ検出・リファクタリングも即時',
  },
  {
    step: '04',
    label: 'デプロイ・改善',
    detail: 'エラーログをそのまま投げて原因特定。issue → fix の往復が激速',
  },
]

const useCases = [
  { label: 'プロンプト設計', color: '#6ee7b7' },
  { label: 'ストリーミング処理', color: '#6ee7b7' },
  { label: 'コードレビュー', color: '#a78bfa' },
  { label: 'アーキテクチャ設計', color: '#a78bfa' },
  { label: 'テスト生成', color: '#6ee7b7' },
  { label: 'ドキュメント作成', color: '#a78bfa' },
  { label: 'リファクタリング', color: '#6ee7b7' },
  { label: 'バグ解析', color: '#a78bfa' },
]

const terminalLines = [
  { role: 'user',    text: 'ChocoPLAiのキャッシュフロー分析ロジックを実装したい' },
  { role: 'claude',  text: 'Claude APIのストリーミングで段階的に出力するアプローチが最適です。まず分析パイプラインを設計しましょう。' },
  { role: 'user',    text: 'プロンプトのトークン最適化も必要' },
  { role: 'claude',  text: 'prompt cachingを使えば繰り返し部分のコストを90%削減できます。システムプロンプトをキャッシュ可能な構造に分離します。' },
]

export default function AISection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section
      id="ai-dev"
      style={{
        background: 'var(--surface)',
        padding: '100px 24px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <p style={{
          fontFamily: 'var(--font-dm-mono)',
          fontSize: 12,
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: 16,
        }}>
          AI-First Workflow
        </p>
        <h2 style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(32px, 5vw, 52px)',
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: 16,
        }}>
          Claude AIを武器に、
          <br />
          <span style={{ color: 'var(--accent)' }}>開発速度を再定義</span>する
        </h2>
        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: 15,
          color: 'var(--text2)',
          maxWidth: 540,
          lineHeight: 1.7,
          marginBottom: 64,
        }}>
          単なる補助ツールではなく、設計・実装・レビューすべてのフェーズにClaudeを組み込んだ
          AI駆動の開発スタイルを確立しています。
        </p>

        {/* メインレイアウト：左=ターミナル / 右=ワークフロー */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          marginBottom: 48,
        }}>

          {/* Claude ターミナルUI */}
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: 12,
            overflow: 'hidden',
            background: '#0a0a12',
          }}>
            {/* タイトルバー */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 16px',
              borderBottom: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{
                fontFamily: 'var(--font-dm-mono)',
                fontSize: 11,
                color: 'var(--text2)',
                marginLeft: 8,
              }}>
                claude-sonnet — portfolio project
              </span>
            </div>

            {/* チャットログ */}
            <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {terminalLines.map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 11,
                    color: line.role === 'user' ? 'var(--accent2)' : 'var(--accent)',
                    flexShrink: 0,
                    marginTop: 1,
                  }}>
                    {line.role === 'user' ? '>' : '✦'}
                  </span>
                  <p style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 12,
                    color: line.role === 'user' ? 'var(--text)' : 'rgba(240,240,255,0.7)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {line.text}
                  </p>
                </div>
              ))}

              {/* カーソル */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 11,
                  color: 'var(--accent2)',
                }}>{'>'}</span>
                <span style={{
                  display: 'inline-block',
                  width: 7,
                  height: 14,
                  background: 'var(--accent2)',
                  animation: 'blink 1.2s ease-in-out infinite',
                }} />
              </div>
            </div>

            {/* 使用タグ */}
            <div style={{
              padding: '16px 20px',
              borderTop: '1px solid var(--border)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 6,
            }}>
              {useCases.map(({ label, color }) => (
                <span key={label} style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 10,
                  color,
                  border: `1px solid ${color}33`,
                  padding: '2px 8px',
                  borderRadius: 3,
                }}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ワークフローステップ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {workflows.map(({ step, label, detail }, i) => (
              <div
                key={step}
                onClick={() => setActiveStep(i)}
                style={{
                  padding: '20px 24px',
                  border: '1px solid',
                  borderColor: activeStep === i ? 'var(--accent)' : 'var(--border)',
                  borderRadius: 10,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeStep === i
                    ? 'rgba(110,231,183,0.04)'
                    : 'rgba(255,255,255,0.01)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: activeStep === i ? 10 : 0 }}>
                  <span style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 11,
                    color: activeStep === i ? 'var(--accent)' : 'var(--text2)',
                    transition: 'color 0.2s',
                  }}>
                    {step}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 600,
                    fontSize: 15,
                    color: activeStep === i ? 'var(--text)' : 'var(--text2)',
                    transition: 'color 0.2s',
                  }}>
                    {label}
                  </span>
                  <span style={{
                    marginLeft: 'auto',
                    color: 'var(--accent)',
                    opacity: activeStep === i ? 1 : 0,
                    transition: 'opacity 0.2s',
                    fontSize: 12,
                  }}>
                    ●
                  </span>
                </div>
                {activeStep === i && (
                  <p style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 13,
                    color: 'var(--text2)',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ボトム：ツールスタック */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          padding: '20px 24px',
          border: '1px solid var(--border)',
          borderRadius: 10,
          background: 'rgba(255,255,255,0.01)',
        }}>
          <span style={{
            fontFamily: 'var(--font-dm-mono)',
            fontSize: 11,
            color: 'var(--text2)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            AI Stack
          </span>
          <div style={{ width: 1, height: 20, background: 'var(--border)', flexShrink: 0 }} />
          {[
            { label: 'Claude Sonnet', color: '#6ee7b7', main: true },
            { label: 'v0 by Vercel',  color: '#a78bfa' },
            { label: 'Cursor',        color: '#fb923c' },
          ].map(({ label, color, main }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: color,
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 13,
                color: main ? 'var(--text)' : 'var(--text2)',
                fontWeight: main ? 500 : 400,
              }}>
                {label}
              </span>
              {main && (
                <span style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 9,
                  color: '#6ee7b7',
                  border: '1px solid rgba(110,231,183,0.3)',
                  padding: '1px 5px',
                  borderRadius: 3,
                }}>
                  MAIN
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
