export const locales = ['ja', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ja'

export const SITE_URL = 'https://hrinka.github.io'

export const pageKeys = ['home', 'flava', 'music', 'works', 'engineering'] as const
export type PageKey = (typeof pageKeys)[number]

const slugs: Record<PageKey, string> = {
  home: '',
  flava: 'flava-fm',
  music: 'music',
  works: 'works',
  engineering: 'engineering',
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** 例: pathFor('ja', 'flava') → /ja/flava-fm/ */
export function pathFor(locale: Locale, page: PageKey = 'home'): string {
  const slug = slugs[page]
  return slug ? `/${locale}/${slug}/` : `/${locale}/`
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`
}

/** hreflang 用。ページごとに ja / en / x-default を返す */
export function languageAlternates(page: PageKey): Record<string, string> {
  return {
    ja: pathFor('ja', page),
    en: pathFor('en', page),
    'x-default': pathFor(defaultLocale, page),
  }
}
