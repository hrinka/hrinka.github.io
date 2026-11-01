import Link from 'next/link'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import WorkCard from '@/components/WorkCard'
import { getDict } from '@/lib/i18n'
import { pathFor, SITE_URL, type PageKey } from '@/lib/i18n/config'
import { resolveLocale, type LocaleParams } from '@/lib/i18n/server'
import { pageMetadata } from '@/lib/metadata'
import { works } from '@/lib/works'

const featuredIds = ['new-moon-guild', 'chocoplai', 'pong-3d']

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), 'home')
}

export default async function Home({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDict(locale)
  const featured = works.filter((work) => featuredIds.includes(work.id))
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'COSMIC THETA',
    url: SITE_URL,
    founder: { '@type': 'Person', name: 'Rinka Homma' },
    sameAs: ['https://github.com/hrinka', 'https://x.com/rt3mis10', 'https://www.instagram.com/flava_fm/'],
  }

  return (
    <PageShell locale={locale} page="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero hero={dict.hero} />

      <section id="practices" className="section">
        <div className="container">
          <SectionHead label={dict.practices.label} heading={dict.practices.heading} />
          <Reveal>
            <div className="grid grid--4">
              {dict.practices.items.map((item) => (
                <Link key={item.page} className="card card--link" href={pathFor(locale, item.page as PageKey)}>
                  <p className="eyebrow">{item.tag}</p>
                  <h3 className="h3">{item.name}</h3>
                  <p className="muted">{item.desc}</p>
                  <span className="card__more">{dict.practices.more} →</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={dict.marquee} />

      <section className="section">
        <div className="container">
          <SectionHead label={dict.featured.label} heading={dict.featured.heading} />
          <Reveal>
            <div className="grid grid--2">
              {featured.map((work) => (
                <WorkCard key={work.id} work={work} locale={locale} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container about">
          <SectionHead label={dict.about.label} heading={dict.about.heading} />
          <div className="about__body">
            {dict.about.body.map((paragraph) => (
              <p key={paragraph} className="muted">
                {paragraph}
              </p>
            ))}
            <div className="stats">
              {dict.about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat__value">{stat.value}</div>
                  <div className="stat__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
