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
    <section className="relative py-24 px-4">
      {/* セクション背景 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0f172a] via-[#0d1117] to-[#0f172a]" />

      <div className="mx-auto max-w-5xl">
        {/* セクションヘッダー */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Features
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            主な機能
          </h2>
          <p className="mt-4 text-slate-400">
            トレーニングをもっとスマートにする、すべての機能が揃っています。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
