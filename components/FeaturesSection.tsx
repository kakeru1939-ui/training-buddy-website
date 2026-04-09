import { FeatureCard } from './FeatureCard'

function WorkoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="10.5" width="3" height="3" rx="0.5" />
      <rect x="19" y="10.5" width="3" height="10.5+3" rx="0.5" />
      <rect x="19" y="10.5" width="3" height="3" rx="0.5" />
      <rect x="5" y="9" width="2" height="6" rx="0.5" />
      <rect x="17" y="9" width="2" height="6" rx="0.5" />
      <line x1="7" y1="12" x2="17" y2="12" strokeWidth="2" />
    </svg>
  )
}

function LibraryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="8" x2="17" y2="8" />
      <line x1="7" y1="12" x2="14" y2="12" />
      <line x1="7" y1="16" x2="11" y2="16" />
      <circle cx="17" cy="15.5" r="2.5" />
      <line x1="19" y1="17.5" x2="21" y2="19.5" />
    </svg>
  )
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="3" y="13" width="18" height="8" rx="2" />
      <line x1="12" y1="13" x2="12" y2="5" />
      <path d="M8 8 Q12 4 16 8" />
      <line x1="12" y1="5" x2="9" y2="5" />
      <line x1="12" y1="5" x2="15" y2="5" />
      <line x1="6" y1="17" x2="18" y2="17" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <line x1="3" y1="20" x2="21" y2="20" />
      <rect x="5" y="14" width="3" height="6" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="10.5" y="9" width="3" height="11" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <rect x="16" y="5" width="3" height="15" rx="0.5" fill="currentColor" fillOpacity="0.3" />
      <polyline points="6.5,14 12,9 17.5,5" strokeWidth="1.5" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M6 10a6 6 0 0 1 12 0v5l2 2H4l2-2v-5z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
      <line x1="12" y1="3" x2="12" y2="4" strokeWidth="2" />
    </svg>
  )
}

function PhotoCompareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="5" width="9" height="14" rx="1.5" />
      <rect x="13" y="5" width="9" height="14" rx="1.5" />
      <circle cx="5.5" cy="9" r="1.5" fill="currentColor" fillOpacity="0.4" strokeWidth="0" />
      <path d="M2 15 l3-3 l2 2 l2-2.5" />
      <circle cx="16.5" cy="9" r="1.5" fill="currentColor" fillOpacity="0.4" strokeWidth="0" />
      <path d="M13 16 l3-4 l2 2 l3-3" />
    </svg>
  )
}

const FEATURES = [
  {
    icon: <WorkoutIcon />,
    title: 'ワークアウト管理',
    description: 'メニューを作成して実行。インターバルタイマーで休憩もスマートに管理。',
  },
  {
    icon: <LibraryIcon />,
    title: '種目ライブラリ',
    description: '豊富な種目データベース。部位・器具でフィルタリングして素早く検索。',
  },
  {
    icon: <ScaleIcon />,
    title: '体重管理',
    description: '体重推移をグラフで可視化。目標ラインと比較してモチベーションを維持。',
  },
  {
    icon: <ChartIcon />,
    title: 'レポート',
    description: '週次・月次のサマリーで進捗を確認。トレーニング量と体の変化を分析。',
  },
  {
    icon: <BellIcon />,
    title: 'リマインダー',
    description: '曜日と時刻を設定してトレーニング習慣化をサポート。',
  },
  {
    icon: <PhotoCompareIcon />,
    title: '写真比較',
    description: '定点撮影で体の変化を記録。ビフォーアフターを並べて確認。',
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
