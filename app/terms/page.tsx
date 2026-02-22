import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: '利用規約 | Training Buddy',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">利用規約</h1>
        <p className="mt-2 text-sm text-[var(--color-text)]/50">最終更新日: 2026年2月22日</p>

        <div className="mt-8 space-y-8 text-[var(--color-text)]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第1条（適用）</h2>
            <p className="mt-3">
              本規約は、Training Buddy（以下「本アプリ」）の利用条件を定めるものです。
              ユーザーの皆さまには、本規約に従って本アプリをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第2条（利用登録）</h2>
            <p className="mt-3">
              本アプリの利用を希望する方は、本規約に同意した上で利用登録を行っていただきます。
              虚偽の情報を登録した場合、利用登録を取り消すことがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第3条（禁止事項）</h2>
            <p className="mt-3">ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>他のユーザーへの嫌がらせや迷惑を及ぼす行為</li>
              <li>本アプリの運営を妨害する行為</li>
              <li>不正アクセスその他の不正な手段による行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第4条（免責事項）</h2>
            <p className="mt-3">
              本アプリの提供者は、本アプリに起因してユーザーに生じた損害について、
              一切の責任を負いません。本アプリは現状のまま提供されます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text)]">第5条（準拠法・裁判管轄）</h2>
            <p className="mt-3">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本アプリに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
