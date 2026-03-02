import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // Cloudflare Pages 用静的エクスポート
  output: 'export',
  // Cloudflare Pagesではカスタムドメインでルート直下にデプロイするためbasePathは不要
  // basePath: isProd ? '/training-buddy-website' : '',
  // next/image の最適化は静的エクスポートで部分的に制限があるため無効化（必要に応じて有効化）
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
