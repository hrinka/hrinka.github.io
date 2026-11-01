import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { languageAlternates, SITE_URL } from '@/lib/i18n/config'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'COSMIC THETA',
  alternates: { languages: languageAlternates('home') },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ background: '#010108', color: '#f0f0ff' }}>{children}</body>
    </html>
  )
}
