import Image from 'next/image'

export const APP_STORE_URL = 'https://apps.apple.com/jp/app/tsumify/id6761646787?l=en-US'
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.tsumifylab.tsumify&pcampaignid=web_share'

export function Hero() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold text-[var(--color-accent)]">iOS / Android 公開中</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-[var(--color-text)] sm:text-6xl">
            つみトレ
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-secondary)]">
            筋トレ記録が続かなかった人へ。メニュー作成、セット記録、体重・写真・レポートをまとめて、成長をシンプルに積み上げるトレーニング記録アプリです。
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-base font-bold text-white shadow-lg shadow-[var(--color-accent)]/20 transition-opacity hover:opacity-90"
            >
              App Storeで見る
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[var(--color-accent)]/50 px-6 py-3 text-base font-bold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/10"
            >
              Google Playで見る
            </a>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
            無料で開始できます。記録データはお使いの端末内に保存されます。
          </p>
        </div>

        <div className="mx-auto w-full max-w-[337px]">
          <Image
            src="/images/store-hero-google-play.webp"
            alt="つみトレのストア掲載スクリーンショット"
            width={337}
            height={592}
            priority
            className="h-auto w-full rounded-[2rem] shadow-2xl shadow-black/20"
          />
        </div>
      </div>
    </section>
  )
}
