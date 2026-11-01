import type { Locale } from '@/lib/i18n/config'
import { pick, type Work } from '@/lib/works'

export default function WorkCard({ work, locale }: { work: Work; locale: Locale }) {
  const title = pick(work.title, locale)
  const href = work.link ?? work.github

  return (
    <article className={`card work${work.wide ? ' work--wide' : ''}`} data-accent={work.accent}>
      {work.youtube && (
        <div className="work__video">
          <iframe
            src={work.youtube}
            title={title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="work__body">
        <div className="work__meta">
          {work.badge && <span className="work__badge">{pick(work.badge, locale)}</span>}
          {work.period && <span>{work.period}</span>}
          {work.role && <span>{pick(work.role, locale)}</span>}
        </div>
        <h3 className="h3">{title}</h3>
        <p className="muted">{pick(work.desc, locale)}</p>
        <div className="tags">
          {work.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {href && (
          <a className="work__link" href={href} target="_blank" rel="noreferrer">
            {work.link ? 'View' : 'GitHub'} ↗
          </a>
        )}
      </div>
    </article>
  )
}
