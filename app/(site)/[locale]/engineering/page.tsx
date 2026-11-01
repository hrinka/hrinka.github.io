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
  return pageMetadata(await resolveLocale(params), 'engineering')
}

export default async function Engineering({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const page = getDict(locale).engineering

  return (
    <PageShell locale={locale} page="engineering">
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead}>
        <p className="muted">{page.resumeNote}</p>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead label={page.listLabel} heading={page.listHeading} />
          <div className="grid grid--2">
            {worksFor('engineering').map((work) => (
              <WorkCard key={work.id} work={work} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead label={page.skillsLabel} heading={page.skillsHeading} />
          <Reveal>
            <div className="grid grid--3">
              {page.skills.map((skill) => (
                <div key={skill.group} className="card">
                  <h3 className="h3">{skill.group}</h3>
                  <div className="tags">
                    {skill.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--2">
          <div>
            <SectionHead label={page.aiLabel} heading={page.aiHeading} lead={page.aiBody} />
          </div>
          <div>
            <SectionHead label={page.educationLabel} heading={page.educationHeading} />
            <div className="grid">
              {page.education.map((item) => (
                <div key={item.name} className="card">
                  <h3 className="h3">{item.name}</h3>
                  <p className="muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
