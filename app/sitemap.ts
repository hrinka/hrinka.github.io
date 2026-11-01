import type { MetadataRoute } from 'next'
import { absoluteUrl, locales, pageKeys, pathFor } from '@/lib/i18n/config'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.flatMap((page) =>
    locales.map((locale) => ({
      url: absoluteUrl(pathFor(locale, page)),
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, absoluteUrl(pathFor(l, page))])),
      },
    }))
  )
}
