export function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight text-[var(--color-text)] sm:text-5xl">
          あなたの<span className="text-[var(--color-accent)]">トレーニング</span>を、
          <br />もっとスマートに。
        </h1>
        <p className="mt-6 text-lg text-[var(--color-text)]/70">
          ワークアウト管理・体重記録・進捗分析をひとつのアプリで。
          Tsumify でトレーニングをもっと楽しく、継続的に。
        </p>
        <div className="mt-8">
          <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-6 py-3 text-sm font-medium text-[var(--color-accent)]">
            近日公開予定
          </span>
        </div>
      </div>
    </section>
  )
}
