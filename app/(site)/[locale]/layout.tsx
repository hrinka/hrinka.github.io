import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono, Plus_Jakarta_Sans, Syne } from 'next/font/google'
import type { ReactNode } from 'react'
import SmoothScroll from '@/components/SmoothScroll'
import { locales, SITE_URL } from '@/lib/i18n/config'
import { resolveLocale, type LocaleParams } from '@/lib/i18n/server'
import '../../globals.css'

const syne = Syne({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-syne', display: 'swap' })
const body = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-body', display: 'swap' })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-dm-mono', display: 'swap' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-cormorant', display: 'swap' })

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: ReactNode }) {
  const locale = await resolveLocale(params)

  return (
    <html lang={locale} className={`${syne.variable} ${body.variable} ${dmMono.variable} ${cormorant.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
