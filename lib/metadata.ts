import type { Metadata } from 'next'
import { languageAlternates, pathFor, type Locale, type PageKey } from './i18n/config'
import { getDict } from './i18n'

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const dict = getDict(locale)
  const { title, description } = dict.meta[page]
  const url = pathFor(locale, page)

  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(page) },
    openGraph: {
      title,
      description,
      url,
      siteName: 'COSMIC THETA',
      type: 'website',
      locale: dict.ogLocale,
    },
    twitter: { card: 'summary', title, description, creator: '@rt3mis10' },
  }
}
