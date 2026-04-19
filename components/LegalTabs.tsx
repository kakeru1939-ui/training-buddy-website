'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'

type Tab = 'terms' | 'privacy' | 'tokusho'

const TAB_LABELS: Record<Tab, string> = {
  terms: '利用規約',
  privacy: 'プライバシーポリシー',
  tokusho: '特定商取引法',
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
        <h2 className="text-xl font-semibold text-[var(--color-text)]">第2条（アカウント・登録）</h2>
        <p className="mt-3">
          本アプリの利用にアカウント登録は不要です。すべてのデータはお使いの端末内にのみ保存されます。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">第3条（禁止事項）</h2>
        <p className="mt-3">ユーザーは以下の行為を行ってはなりません。</p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>法令または公序良俗に違反する行為</li>
          <li>本アプリの運営を妨害する行為</li>
          <li>不正アクセスその他の不正な手段による行為</li>
          <li>本アプリのリバースエンジニアリングや改変</li>
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
      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">第6条（広告表示）</h2>
        <p className="mt-3">
          1. 本アプリは、無料プランのユーザーに対して Google AdMob によるバナー広告を表示します。
        </p>
        <p className="mt-2">
          2. 買い切りプラン購入後、およびトライアル期間中は広告を表示しません。
        </p>
        <p className="mt-2">
          3. 表示される広告の内容は Google およびその提携事業者により配信されるものであり、本アプリ提供者は広告の内容および配信について責任を負いません。
        </p>
        <p className="mt-2">
          4. 不適切な広告を確認された場合は、
          <a href="mailto:support@tsumify-lab.com" className="text-[var(--color-accent)] hover:underline">
            support@tsumify-lab.com
          </a>
          までご連絡ください。
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">第7条（データ送信）</h2>
        <p className="mt-3">
          1. 広告配信のため、広告識別子（IDFA / AAID）、IP アドレス、端末情報、広告の表示および操作に関する情報等が Google およびその提携事業者に送信されます。
        </p>
        <p className="mt-2">
          2. EU・EEA 圏および英国（iOS のみ）のユーザーには、GDPR に基づく同意取得のため、初回起動時に同意ダイアログを表示します。
        </p>
        <p className="mt-2">
          3. 詳細な取扱いについては、プライバシーポリシーをご確認ください。
        </p>
      </section>
    </div>
  )
}

function PrivacyContent() {
  return (
    <div className="space-y-8 text-[var(--color-text)]/80 leading-relaxed">
      <p className="text-sm text-[var(--color-text)]/60">最終更新日: 2026年4月19日</p>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">1. 事業者情報</h2>
        <p className="mt-3">
          本プライバシーポリシーは、Tsumify Lab（代表：吉田　翔、以下「当社」）が提供するトレーニング記録アプリ「Tsumify」（以下「本アプリ」）における個人情報およびこれに類する情報の取扱いについて定めるものです。
        </p>
        <p className="mt-3">
          お問い合わせ先：
          <a href="mailto:support@tsumify-lab.com" className="text-[var(--color-accent)] hover:underline ml-1">
            support@tsumify-lab.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">2. 取得する情報</h2>
        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【ユーザーが入力するデータ】</h3>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>ワークアウト記録（種目、重量、回数、セット数、日時）</li>
          <li>体重記録</li>
          <li>トレーニングテンプレート</li>
          <li>目標設定</li>
          <li>リマインダー設定</li>
        </ul>
        <p className="mt-3">
          これらはすべて端末内（ローカルストレージ）にのみ保存され、当社のサーバーへ送信されることはありません。
        </p>
        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【広告配信に伴い外部送信される情報】</h3>
        <p className="mt-3">
          本アプリは無料プランのユーザーに対して Google AdMob を通じてバナー広告を表示します。広告配信に際し、以下の情報が Google およびその提携事業者に送信されることがあります。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>広告識別子（iOS: IDFA / Android: AAID）</li>
          <li>IP アドレス</li>
          <li>端末情報（機種、OS、言語設定など）</li>
          <li>広告の表示および操作に関する情報</li>
          <li>IP アドレスから推定されるおおよその位置情報</li>
        </ul>
        <p className="mt-3">
          買い切りプラン購入後およびトライアル期間中は広告を表示しません。
        </p>
        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【App Store / Google Play との連携】</h3>
        <p className="mt-3">
          アプリ内課金は Apple App Store および Google Play を通じて処理されます。決済情報は当社を経由せず、Apple および Google により直接処理されます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">3. 利用目的</h2>
        <p className="mt-3">取得した情報は以下の目的で利用します。</p>
        <ul className="mt-2 list-decimal list-inside space-y-1">
          <li>本アプリの機能提供（トレーニング記録管理）</li>
          <li>無料プラン向けの広告配信および配信最適化</li>
          <li>広告の不正クリック防止およびセキュリティ確保</li>
          <li>本アプリの改善および新機能開発</li>
          <li>不具合の検出および修正</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">4. 第三者への提供</h2>
        <p className="mt-3">当社は以下の場合を除き、ユーザーの情報を第三者に提供することはありません。</p>
        <ul className="mt-2 list-decimal list-inside space-y-1">
          <li>ユーザーの同意がある場合</li>
          <li>法令に基づく開示請求がある場合</li>
          <li>広告配信のため、Google AdMob およびその提携事業者へ技術情報（広告識別子等）を送信する場合</li>
          <li>Apple App Store または Google Play を通じた課金処理を行う場合</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">5. 利用する外部サービス</h2>
        <p className="mt-3">本アプリは以下の外部サービスを利用しています。</p>
        <ul className="mt-3 list-disc list-inside space-y-2">
          <li>
            <strong>Google AdMob</strong>（Google LLC）— バナー広告配信。
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline ml-1"
            >
              プライバシーポリシー
            </a>
          </li>
          <li>
            <strong>Google User Messaging Platform (UMP)</strong>（Google LLC）— EU 圏ユーザーの同意管理。
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline ml-1"
            >
              プライバシーポリシー
            </a>
          </li>
          <li>
            <strong>App Store</strong>（Apple Inc.）— アプリ内課金処理（iOS）。
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline ml-1"
            >
              プライバシーポリシー
            </a>
          </li>
          <li>
            <strong>Google Play</strong>（Google LLC）— アプリ内課金処理（Android）。
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline ml-1"
            >
              プライバシーポリシー
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">6. Cookie および広告識別子の使用</h2>
        <p className="mt-3">
          本アプリは Cookie を使用しませんが、広告配信のために以下の識別子を使用します。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>
            <strong>iOS</strong>: IDFA（Identifier for Advertisers）。iOS 14.5 以降は ATT（App Tracking Transparency）によるユーザーの許可が必要です。
          </li>
          <li>
            <strong>Android</strong>: AAID（Google Advertising ID）。Android 13 以降では広告 ID の使用に関する制御が強化されています。
          </li>
        </ul>
        <p className="mt-3">
          これらの識別子は個人を直接特定するものではなく、ユーザーの同意があった場合にのみ利用されます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">7. 広告配信の管理とオプトアウト</h2>
        <p className="mt-3">ユーザーは以下の方法で広告配信をコントロールできます。</p>

        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【アプリ内設定】</h3>
        <p className="mt-2">
          「法的情報」画面から「プライバシー設定」を再表示し、広告同意を変更できます。
        </p>

        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【iOS】</h3>
        <p className="mt-2">
          設定 → プライバシーとセキュリティ → トラッキング → 「App からのトラッキング要求を許可」をオフ
        </p>

        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【Android】</h3>
        <p className="mt-2">
          設定 → Google → 広告 → 「広告 ID をリセット」または「広告のパーソナライズをオフ」
        </p>

        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【Google 広告設定】</h3>
        <p className="mt-2">
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Google 広告設定
          </a>
          からパーソナライズ広告をオプトアウトできます。
        </p>

        <h3 className="mt-4 text-base font-semibold text-[var(--color-text)]">【広告を完全に削除するには】</h3>
        <p className="mt-2">
          買い切りプランをご購入いただくことで、広告は完全に非表示となります。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">8. EU 圏のユーザーに対する GDPR 対応</h2>
        <p className="mt-3">
          本アプリはフランスを除く EU・EEA 圏および英国（iOS のみ）で利用可能です。これらの地域のユーザーには以下が適用されます。
        </p>
        <ul className="mt-2 list-disc list-inside space-y-1">
          <li>
            <strong>同意取得</strong>: 初回起動時に Google UMP による同意ダイアログを表示し、パーソナライズ広告配信の可否を選択いただきます。
          </li>
          <li>
            <strong>同意の撤回</strong>: いつでもアプリ内の「プライバシー設定」から撤回可能です。
          </li>
          <li>
            <strong>ユーザーの権利</strong>: アクセス権、訂正権、削除権、処理の制限、データポータビリティ、異議申立権を有します。権利行使のご請求は support@tsumify-lab.com までご連絡ください。
          </li>
        </ul>
        <p className="mt-3">
          本アプリは当社サーバーでユーザーの個人情報を保存しないため、当社における削除・アクセス請求の対象となるデータは原則として存在しません。広告配信に関連する技術情報の取扱いは Google のポリシーに準じます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">9. 子どものプライバシー</h2>
        <p className="mt-3">
          本アプリは 13 歳未満のユーザーを対象としていません。13 歳未満の方の利用は想定しておらず、意図せず情報を取得した場合は速やかに削除いたします。保護者の方は、本アプリの利用についてお子様とご相談ください。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">10. データの保持期間</h2>
        <ul className="mt-3 list-disc list-inside space-y-1">
          <li>アプリ内データ（ワークアウト記録等）: アプリをアンインストールするまで</li>
          <li>広告関連データ: Google のポリシーに準じる</li>
          <li>購入情報: Apple / Google のポリシーに準じる</li>
        </ul>
        <p className="mt-3">
          アンインストールすると、端末内のすべてのデータは削除されます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">11. お問い合わせ</h2>
        <p className="mt-3">
          本ポリシーに関するご質問、権利行使のご請求は以下までお寄せください。
        </p>
        <p className="mt-3">
          メール:
          <a href="mailto:support@tsumify-lab.com" className="text-[var(--color-accent)] hover:underline ml-1">
            support@tsumify-lab.com
          </a>
          <br />
          対応時間: 平日 10:00〜18:00（土日祝日を除く）
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[var(--color-text)]">12. 改定履歴</h2>
        <ul className="mt-3 list-disc list-inside space-y-1">
          <li>2026年4月19日: 広告配信機能（Google AdMob）の追加に伴う全面改定</li>
        </ul>
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
    { label: '販売価格', value: '買い切り：500円（税込）' },
    { label: '支払方法', value: 'クレジットカード（App Store / Google Play）' },
    { label: '支払時期', value: '購入時に一回のみ' },
    { label: 'サービス提供時期', value: '決済完了後、即時' },
    {
      label: 'キャンセル・返金',
      value: '買い切り型のため、購入後の返金は原則として行いません。',
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
  // SSR では window がないため 'terms' をデフォルトにし、マウント後に実ハッシュで上書きする
  const [activeTab, setActiveTab] = useState<Tab>('terms')
  const tabKeys = Object.keys(TAB_LABELS) as Tab[]
  // 各タブボタンへの ref を保持し、矢印キー操作時のフォーカス移動に使用する
  const tabRefs = useRef<Map<Tab, HTMLButtonElement | null>>(new Map())

  useEffect(() => {
    // マウント時に URL ハッシュを読んで初期タブを確定する
    setActiveTab(resolveTabFromHash(getHash()))

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
        className="flex border-b border-[var(--color-bg-elevated)]"
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
