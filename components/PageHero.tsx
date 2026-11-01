import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: string[]
  lead: string
  children?: ReactNode
}

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="container page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h1">
        {title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
      <p className="lead">{lead}</p>
      {children}
    </section>
  )
}
