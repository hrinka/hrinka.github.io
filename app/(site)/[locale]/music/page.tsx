import PageHero from '@/components/PageHero'
import PageShell from '@/components/PageShell'
import { getDict } from '@/lib/i18n'
import { resolveLocale, type LocaleParams } from '@/lib/i18n/server'
import { pageMetadata } from '@/lib/metadata'

export { generateStaticParams } from '../layout'

export async function generateMetadata({ params }: LocaleParams) {
  return pageMetadata(await resolveLocale(params), 'music')
}

export default async function Music({ params }: LocaleParams) {
  const locale = await resolveLocale(params)
  const music = getDict(locale).music

  return (
    <PageShell locale={locale} page="music" theme="music">
      <PageHero eyebrow={music.eyebrow} title={music.title} lead={music.lead} />

      <section className="section">
        <div className="container rows">
          {music.sections.map((section) => (
            <div key={section.label} className="row">
              <p className="eyebrow">{section.label}</p>
              <div className="row__body">
                <h2 className="h2">{section.heading}</h2>
                <p className="lead">{section.body}</p>
              </div>
            </div>
          ))}
          <div className="row">
            <p className="eyebrow uv">Booking</p>
            <div className="row__body">
              <h2 className="h2">{music.bookingHeading}</h2>
              <p className="lead">{music.bookingBody}</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
