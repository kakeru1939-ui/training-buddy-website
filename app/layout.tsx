import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '700'],
})

const siteTitle = 'つみトレ | 筋トレ記録が続かなかった人へ'
const siteDescription =
  'つみトレは、ワークアウト管理・体重記録・進捗分析をシンプルにまとめた筋トレ記録アプリです。iOS / Androidで公開中。'

export const metadata: Metadata = {
  metadataBase: new URL('https://tsumify-lab.com'),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'つみトレ',
    images: [
      {
        url: '/icons/app_icon.png',
        width: 512,
        height: 512,
        alt: 'つみトレ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
    images: ['/icons/app_icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJP.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
