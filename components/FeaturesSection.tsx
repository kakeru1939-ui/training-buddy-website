import { FeatureCard } from './FeatureCard'

const FEATURES = [
  {
    icon: '/icons/workout_icon.png',
    title: 'ワークアウト管理',
    description: 'メニューを作成して実行。インターバルタイマーで休憩もスマートに管理。',
  },
  {
    icon: '/icons/library_icon.png',
    title: '種目ライブラリ',
    description: '豊富な種目データベース。部位・器具でフィルタリングして素早く検索。',
  },
  {
    icon: '/icons/scale_icon.png',
    title: '体重管理',
    description: '体重推移をグラフで可視化。目標ラインと比較してモチベーションを維持。',
  },
  {
    icon: '/icons/chart_icon.png',
    title: 'レポート',
    description: '週次・月次のサマリーで進捗を確認。トレーニング量と体の変化を分析。',
  },
  {
    icon: '/icons/clock_icon.png',
    title: 'リマインダー',
    description: '曜日と時刻を設定してトレーニング習慣化をサポート。',
  },
] as const

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-[var(--color-text)]">主な機能</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
