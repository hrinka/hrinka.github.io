import PageHero from '@/components/PageHero'
import PageShell from '@/components/PageShell'
import Reveal from '@/components/Reveal'
import SectionHead from '@/components/SectionHead'
import WorkCard from '@/components/WorkCard'
import { getDict } from '@/lib/i18n'
import { resolveLocale, type LocaleParams } from '@/lib/i18n/server'
import { pageMetadata } from '@/lib/metadata'
import { worksFor } from '@/lib/works'

export { generateStaticParams } from '../layout'

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), 'works')
}

export default async function Works({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const dict = getDict(locale)
  const page = dict.works

  return (
    <PageShell locale={locale} page="works">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead}>
        <div className="btn-row">
          <a className="btn btn--primary" href="#contact">
            {dict.hero.primary}
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead label={page.servicesLabel} heading={page.servicesHeading} />
          <Reveal>
            <div className="grid grid--4">
              {page.services.map((service) => (
                <div key={service.name} className="card">
                  <h3 className="h3">{service.name}</h3>
                  <p className="muted">{service.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead label={page.processLabel} heading={page.processHeading} />
          <ol className="grid grid--4">
            {page.process.map((item, index) => (
              <li key={item.name} className="card">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="h3">{item.name}</h3>
                <p className="muted">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label={page.listLabel} heading={page.listHeading} />
          <div className="grid grid--2">
            {worksFor('client').map((work) => (
              <WorkCard key={work.id} work={{ ...work, wide: false }} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
