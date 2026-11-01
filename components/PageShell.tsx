import type { ReactNode } from 'react'
import type { Locale, PageKey } from '@/lib/i18n/config'
import { getDict } from '@/lib/i18n'
import Contact from './Contact'
import Nav from './Nav'

export type Theme = 'cosmic' | 'flava' | 'music'

type Props = {
  locale: Locale
  page: PageKey
  theme?: Theme
  children: ReactNode
}

export default function PageShell({ locale, page, theme = 'cosmic', children }: Props) {
  const dict = getDict(locale)

  return (
    <div className="page" data-theme={theme}>
      <a className="skip" href="#main">
        {locale === 'ja' ? '本文へ移動' : 'Skip to content'}
      </a>
      <Nav locale={locale} page={page} nav={dict.nav} switchLabel={dict.switchLabel} switchAria={dict.switchAria} />
      <main id="main">{children}</main>
      <Contact contact={dict.contact} />
      <footer className="footer">
        <div className="container">
          © 2026 {dict.footer.rights}
        </div>
      </footer>
    </div>
  )
}
