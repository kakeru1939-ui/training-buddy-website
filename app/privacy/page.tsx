import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Training Buddy',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">プライバシーポリシー</h1>
        <p className="mt-2 text-sm text-[var(--color-text)]/50">最終更新日: 2026年2月22日</p>

        <div className="mt-8 space-y-8 text-[var(--color-text)]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">収集する情報</h2>
            <p className="mt-3">本アプリは以下の情報を収集することがあります。</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>アカウント情報（メールアドレス）</li>
              <li>トレーニング記録・体重データ（ユーザーが入力したデータ）</li>
              <li>アプリの利用状況（クラッシュレポート等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">情報の利用目的</h2>
            <p className="mt-3">収集した情報は以下の目的で利用します。</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>本アプリのサービス提供・改善</li>
              <li>ユーザーサポート対応</li>
              <li>不正利用の防止</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第三者への提供</h2>
            <p className="mt-3">
              法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">データの保管</h2>
            <p className="mt-3">
              ユーザーデータは Supabase（クラウドデータベース）に暗号化して保管されます。
              アカウント削除により、すべての個人データを削除することができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">お問い合わせ</h2>
            <p className="mt-3">
              プライバシーに関するご質問は、アプリ内のお問い合わせフォームよりご連絡ください。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
