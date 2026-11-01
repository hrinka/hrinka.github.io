'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { Dict } from '@/lib/i18n'

const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false })

export default function Hero({ hero }: { hero: Dict['hero'] }) {
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 768px)').matches
    setShowCanvas(!reduced && !small)
  }, [])

  return (
    <section className="hero">
      {showCanvas && <HeroCanvas />}
      <div className="container hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="h1">
          {hero.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="lead">{hero.lead}</p>
        <div className="btn-row">
          <a className="btn btn--primary" href="#contact">
            {hero.primary}
          </a>
          <a className="btn" href="#practices">
            {hero.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
