import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // GitHub Pages 用静的エクスポート
  output: 'export',
  // リポジトリ名を basePath に設定（GitHub Pages のサブパス対応）
  basePath: isProd ? '/training-buddy-website' : '',
  // next/image の最適化は静的エクスポート非対応のため無効化
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
