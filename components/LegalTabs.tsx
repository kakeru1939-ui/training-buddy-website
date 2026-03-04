'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'

type Tab = 'terms' | 'privacy' | 'tokusho'

const TAB_LABELS: Record<Tab, string> = {
  terms: '利用規約',
  privacy: 'プライバシーポリシー',
  tokusho: '特定商取引法に基づく表記',
}

function TermsContent() {
  return (
    <div className="space-y-8 text-[var(--color-text)]/80 leading-relaxed">
      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">第1条（適用）</h2>
        <p className="mt-3">
          本規約は、Tsumify（以下「本アプリ」）の利用条件を定めるものです。
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
  )
}

function PrivacyContent() {
  return (
    <div className="space-y-8 text-[var(--color-text)]/80 leading-relaxed">
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
  )
}

function TokushoContent() {
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: '販売業者', value: 'Tsumify Lab（代表：吉田　翔）' },
    {
      label: '所在地',
      value: '〒530-0001 大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 29階 1-1-1号室',
    },
    { label: '電話番号', value: '+81-70-8848-7324' },
    {
      label: 'メールアドレス',
      value: (
        <a
          href="mailto:support@tsumify-lab.com"
          className="text-[var(--color-accent)] hover:underline"
        >
          support@tsumify-lab.com
        </a>
      ),
    },
    {
      label: '販売価格',
      value: '月額プラン：480円（税込）／ 年額プラン：3,600円（税込）',
    },
    { label: '支払方法', value: 'クレジットカード（Stripe）' },
    {
      label: '支払時期',
      value: '月額：毎月の契約日に自動引き落とし ／ 年額：年1回の契約日に自動引き落とし',
    },
    { label: 'サービス提供時期', value: '決済完了後、即時' },
    {
      label: 'キャンセル・返金',
      value:
        '次回更新日前にキャンセルすることで以降の課金を停止できます。既にお支払い済みの期間分の返金は行いません。',
    },
    { label: '動作環境', value: 'iOS 13以上 ／ Android 5.0（API 21）以上' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm text-[var(--color-text)]/80">
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label} className="border-b border-[var(--color-bg-elevated)]">
              <th className="py-3 pr-4 text-left font-medium text-[var(--color-text)] whitespace-nowrap w-36 align-top">
                {label}
              </th>
              <td className="py-3 leading-relaxed">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ハッシュの読み書きをモック可能な関数として分離する
export function getLocationHash(): string {
  return typeof window !== 'undefined' ? window.location.hash : ''
}

export function setLocationHash(hash: string): void {
  if (typeof window !== 'undefined') {
    window.location.hash = hash
  }
}

function resolveTabFromHash(hash: string): Tab {
  const stripped = hash.replace('#', '')
  if (stripped === 'privacy' || stripped === 'tokusho') return stripped
  return 'terms'
}

export function LegalTabs({
  getHash = getLocationHash,
  setHash = setLocationHash,
}: {
  getHash?: () => string
  setHash?: (hash: string) => void
} = {}) {
  const [activeTab, setActiveTab] = useState<Tab>(() => resolveTabFromHash(getHash()))
  const tabKeys = Object.keys(TAB_LABELS) as Tab[]
  // 各タブボタンへの ref を保持し、矢印キー操作時のフォーカス移動に使用する
  const tabRefs = useRef<Map<Tab, HTMLButtonElement | null>>(new Map())

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(resolveTabFromHash(getHash()))
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [getHash])

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab)
    setHash(tab)
  }

  // WAI-ARIA Tabs パターン: Left/Right 矢印キーでタブを循環移動する
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabKeys.indexOf(activeTab)
    let nextIndex: number | null = null

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabKeys.length
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length
    }

    if (nextIndex !== null) {
      event.preventDefault()
      const nextTab = tabKeys[nextIndex]
      setActiveTab(nextTab)
      setHash(nextTab)
      tabRefs.current.get(nextTab)?.focus()
    }
  }

  return (
    <div>
      <div
        role="tablist"
        className="flex border-b border-[var(--color-bg-elevated)] overflow-x-auto"
        onKeyDown={handleKeyDown}
      >
        {tabKeys.map((tab) => (
          <button
            key={tab}
            id={`tab-${tab}`}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            tabIndex={activeTab === tab ? 0 : -1}
            ref={(el) => { tabRefs.current.set(tab, el) }}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px ${
              activeTab === tab
                ? 'border-[var(--color-accent)] text-[var(--color-accent)]'
                : 'border-transparent text-[var(--color-text)]/60 hover:text-[var(--color-text)]'
            }`}
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
        className="mt-8"
      >
        {activeTab === 'terms' && <TermsContent />}
        {activeTab === 'privacy' && <PrivacyContent />}
        {activeTab === 'tokusho' && <TokushoContent />}
      </div>
    </div>
  )
}
