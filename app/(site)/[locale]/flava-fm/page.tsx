import PageHero from '@/components/PageHero'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import { getDict } from '@/lib/i18n'
import { resolveLocale, type LocaleParams } from '@/lib/i18n/server'
import { pageMetadata } from '@/lib/metadata'

export { generateStaticParams } from '../layout'

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), 'flava')
}

export default async function FlavaFm({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const flava = getDict(locale).flava

  return (
    <PageShell locale={locale} page="flava" theme="flava">
      <PageHero eyebrow={flava.eyebrow} title={flava.title} lead={flava.lead}>
        <div className="btn-row">
          <a className="btn btn--primary" href="https://www.instagram.com/flava_fm/" target="_blank" rel="noreferrer">
            {flava.instagram} ↗
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead label={flava.pillarsLabel} heading={flava.pillarsHeading} />
          <Reveal>
            <div className="grid grid--4">
              {flava.pillars.map((pillar) => (
                <div key={pillar.name} className="card">
                  <h3 className="h3">{pillar.name}</h3>
                  <p className="muted">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead label={flava.gardenLabel} heading={flava.gardenHeading} lead={flava.gardenBody} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label={flava.scentsLabel} heading={flava.scentsHeading} lead={flava.scentsLead} />
          <Reveal>
            <div className="grid grid--5">
              {flava.scents.map((scent, index) => (
                <div key={scent.roman} className="card scent" data-index={index}>
                  <p className="eyebrow">
                    {scent.element} · {scent.season}
                  </p>
                  <p className="scent__name">{scent.name}</p>
                  <p className="scent__roman">{scent.roman}</p>
                  <p className="muted">
                    {flava.scentNumberLabel} {scent.numbers}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container event">
          <div className="card">
            <p className="eyebrow">{flava.eventLabel}</p>
            <h2 className="h3">{flava.eventName}</h2>
            <p className="scent__roman">{flava.eventDate}</p>
            <p className="muted">{flava.eventBody}</p>
          </div>
          <div className="card">
            <p className="eyebrow">{flava.shopLabel}</p>
            <p className="muted">{flava.shopBody}</p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
