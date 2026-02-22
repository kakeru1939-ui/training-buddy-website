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

export const metadata: Metadata = {
  title: 'Training Buddy — あなたのトレーニングパートナー',
  description: 'ワークアウト管理・体重記録・進捗分析をひとつのアプリで。Training Buddy でトレーニングをもっと楽しく。',
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
