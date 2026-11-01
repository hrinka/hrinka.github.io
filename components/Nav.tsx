'use client'

import { useState } from 'react'
import Link from 'next/link'
import { pathFor, type Locale, type PageKey } from '@/lib/i18n/config'
import type { Dict } from '@/lib/i18n'

const links = ['flava', 'music', 'works', 'engineering'] as const

type Props = {
  locale: Locale
  page: PageKey
  nav: Dict['nav']
  switchLabel: string
  switchAria: string
}

export default function Nav({ locale, page, nav, switchLabel, switchAria }: Props) {
  const [open, setOpen] = useState(false)
  const otherLocale: Locale = locale === 'ja' ? 'en' : 'ja'
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__brand" href={pathFor(locale)} aria-label={nav.home} onClick={close}>
          COSMICΘ
        </Link>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? nav.close : nav.menu}
          onClick={() => setOpen(!open)}
        >
          {open ? '×' : '≡'}
        </button>
        <nav id="site-nav" className="nav__links" data-open={open}>
          {links.map((key) => (
            <Link
              key={key}
              className="nav__link"
              href={pathFor(locale, key)}
              aria-current={key === page ? 'page' : undefined}
              onClick={close}
            >
              {nav[key]}
            </Link>
          ))}
          <a className="nav__link" href="#contact" onClick={close}>
            {nav.contact}
          </a>
          <Link className="nav__lang" href={pathFor(otherLocale, page)} hrefLang={otherLocale} aria-label={switchAria}>
            {switchLabel}
          </Link>
        </nav>
      </div>
    </header>
  )
}
