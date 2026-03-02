export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 px-4 text-center">
      {/* 背景グラデーション */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 h-[300px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          近日公開予定
        </div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          あなたの
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            トレーニング
          </span>
          を、
          <br />もっとスマートに。
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
          ワークアウト管理・体重記録・進捗分析をひとつのアプリで。<br />
          Training Buddy でトレーニングをもっと楽しく、継続的に。
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/50 hover:scale-105 cursor-default">
            🚀 App Store / Google Play で近日公開
          </span>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: '5+', label: '主要機能' },
            { value: '無料', label: '基本機能' },
            { value: 'iOS & Android', label: '対応プラットフォーム' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
