import { FaqAccordion } from './FaqAccordion'

const FAQ_ITEMS = [
  {
    question: '無料で使えますか？',
    answer: 'はい、基本機能はすべて無料でご利用いただけます。',
  },
  {
    question: 'iOS・Android 両対応ですか？',
    answer: 'はい、App Store および Google Play でご利用いただけます（近日公開予定）。',
  },
  {
    question: 'データのバックアップはできますか？',
    answer: '現在、クラウドバックアップには対応していません。データはお使いの端末内にのみ保存されます。',
  },
  {
    question: 'オフラインでも使えますか？',
    answer: 'はい、完全オフラインで動作します。インターネット接続は不要です。',
  },
  {
    question: '種目を自分で追加できますか？',
    answer: 'はい、カスタム種目の登録に対応しています。既存ライブラリにない種目も自由に追加できます。',
  },
  {
    question: '体重グラフはどれくらいの期間を表示できますか？',
    answer: '1週間・1ヶ月・3ヶ月・1年の期間を切り替えて表示できます。',
  },
] as const

export function FaqSection() {
  return (
    <section className="py-16 px-4 bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-[var(--color-text)]">
          よくある質問
        </h2>
        <div className="mt-10">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  )
}
