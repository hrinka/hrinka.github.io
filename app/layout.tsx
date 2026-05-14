import type { Metadata } from 'next'
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import SmoothScroll from '@/components/SmoothScroll'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CosmicΘ | Rinka Homma — Frontend Developer & Designer',
  description:
    'デジタルクリエイティブを軸に、フロントエンド開発・空間デザイン・インタラクションデザインを追求するクリエイター。React / Next.js / Three.js / Claude API。',
  keywords: ['CosmicΘ', 'Rinka Homma', 'Frontend Developer', 'Designer', 'Three.js', 'Next.js', 'Claude API'],
  authors: [{ name: 'Rinka Homma' }],
  openGraph: {
    title: 'CosmicΘ | Rinka Homma — Frontend Developer & Designer',
    description: 'デジタルクリエイティブを軸に、感性と技術が融合した作品に取り組んでいる。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CosmicΘ | Rinka Homma',
    creator: '@rt3mis10',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <SmoothScroll />
        <Cursor />
        {children}
      </body>
    </html>
  )
}
