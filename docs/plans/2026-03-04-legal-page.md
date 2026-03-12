# Legal Page 実装計画

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 利用規約・プライバシーポリシー・特定商取引法に基づく表記を統合した `/legal` ページを実装する

**Architecture:** URLハッシュ（`#terms` / `#privacy` / `#tokusho`）でタブを切り替えるクライアントコンポーネント。静的エクスポート対応。既存の `/terms` と `/privacy` はクライアントサイドリダイレクトに変更する。

**Tech Stack:** Next.js 16 (Static Export), React, TypeScript, Tailwind CSS, Jest + React Testing Library

---

## Task 1: LegalTabs コンポーネントを作成する（TDD）

**Files:**
- Create: `components/LegalTabs.tsx`
- Create: `__tests__/components/LegalTabs.test.tsx`

### Step 1: テストファイルを作成して失敗させる

`__tests__/components/LegalTabs.test.tsx` を作成：

```tsx
import { render, screen, fireEvent, act } from '@testing-library/react'
import { LegalTabs } from '@/components/LegalTabs'

// window.location.hash のモック
Object.defineProperty(window, 'location', {
  writable: true,
  value: { hash: '', replace: jest.fn() },
})

describe('LegalTabs', () => {
  beforeEach(() => {
    window.location.hash = ''
  })

  it('3つのタブが表示される', () => {
    render(<LegalTabs />)
    expect(screen.getByRole('tab', { name: '利用規約' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'プライバシーポリシー' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '特定商取引法に基づく表記' })).toBeInTheDocument()
  })

  it('初期状態でハッシュなしの場合、利用規約タブがアクティブ', () => {
    render(<LegalTabs />)
    expect(screen.getByRole('tab', { name: '利用規約' })).toHaveAttribute('aria-selected', 'true')
  })

  it('ハッシュが #privacy の場合、プライバシーポリシータブがアクティブ', () => {
    window.location.hash = '#privacy'
    render(<LegalTabs />)
    expect(screen.getByRole('tab', { name: 'プライバシーポリシー' })).toHaveAttribute('aria-selected', 'true')
  })

  it('ハッシュが #tokusho の場合、特定商取引法タブがアクティブ', () => {
    window.location.hash = '#tokusho'
    render(<LegalTabs />)
    expect(screen.getByRole('tab', { name: '特定商取引法に基づく表記' })).toHaveAttribute('aria-selected', 'true')
  })

  it('タブクリックでコンテンツが切り替わる', () => {
    render(<LegalTabs />)
    // 利用規約の内容が表示されている
    expect(screen.getByText(/利用条件/)).toBeInTheDocument()
    // プライバシーポリシータブをクリック
    fireEvent.click(screen.getByRole('tab', { name: 'プライバシーポリシー' }))
    expect(screen.getByText(/収集する情報/)).toBeInTheDocument()
  })

  it('特定商取引法タブに必須項目が含まれる', () => {
    render(<LegalTabs />)
    fireEvent.click(screen.getByRole('tab', { name: '特定商取引法に基づく表記' }))
    expect(screen.getByText('販売業者')).toBeInTheDocument()
    expect(screen.getByText('Tsumify Lab（代表：吉田　翔）')).toBeInTheDocument()
    expect(screen.getByText('販売価格')).toBeInTheDocument()
    expect(screen.getByText(/480/)).toBeInTheDocument()
    expect(screen.getByText(/3,600/)).toBeInTheDocument()
    expect(screen.getByText('support@tsumify-lab.com')).toBeInTheDocument()
  })
})
```

### Step 2: テストを実行して失敗を確認する

```bash
cd /d/dev/training-buddy-website
npx jest __tests__/components/LegalTabs.test.tsx --no-coverage
```

期待値: `FAIL` — `Cannot find module '@/components/LegalTabs'`

### Step 3: LegalTabs コンポーネントを実装する

`components/LegalTabs.tsx` を作成：

```tsx
'use client'

import { useState, useEffect } from 'react'

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

function getInitialTab(): Tab {
  if (typeof window === 'undefined') return 'terms'
  const hash = window.location.hash.replace('#', '')
  if (hash === 'privacy' || hash === 'tokusho') return hash
  return 'terms'
}

export function LegalTabs() {
  const [activeTab, setActiveTab] = useState<Tab>(getInitialTab)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Tab
      if (hash === 'privacy' || hash === 'tokusho') {
        setActiveTab(hash)
      } else {
        setActiveTab('terms')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab)
    window.location.hash = tab
  }

  return (
    <div>
      {/* タブナビゲーション */}
      <div
        role="tablist"
        className="flex border-b border-[var(--color-bg-elevated)] overflow-x-auto"
      >
        {(Object.keys(TAB_LABELS) as Tab[]).map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
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

      {/* タブコンテンツ */}
      <div className="mt-8">
        {activeTab === 'terms' && <TermsContent />}
        {activeTab === 'privacy' && <PrivacyContent />}
        {activeTab === 'tokusho' && <TokushoContent />}
      </div>
    </div>
  )
}
```

### Step 4: テストを実行してパスを確認する

```bash
npx jest __tests__/components/LegalTabs.test.tsx --no-coverage
```

期待値: `PASS` — 6 tests passed

### Step 5: コミット

```bash
git add components/LegalTabs.tsx __tests__/components/LegalTabs.test.tsx
git commit -m "add: LegalTabs コンポーネントを追加（ハッシュベースタブ切り替え）"
```

---

## Task 2: /legal ページを作成する（TDD）

**Files:**
- Create: `app/legal/page.tsx`
- Create: `__tests__/app/legal.test.tsx`

### Step 1: テストファイルを作成して失敗させる

`__tests__/app/legal.test.tsx` を作成：

```tsx
import { render, screen } from '@testing-library/react'
import LegalPage from '@/app/legal/page'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

// LegalTabs はクライアントコンポーネントなのでモック
jest.mock('@/components/LegalTabs', () => ({
  LegalTabs: () => <div data-testid="legal-tabs">LegalTabs</div>,
}))

describe('/legal ページ', () => {
  it('ページがレンダリングされる', () => {
    render(<LegalPage />)
    expect(screen.getByTestId('legal-tabs')).toBeInTheDocument()
  })

  it('Navbar が含まれる', () => {
    render(<LegalPage />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('Footer が含まれる', () => {
    render(<LegalPage />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
```

### Step 2: テストを実行して失敗を確認する

```bash
npx jest __tests__/app/legal.test.tsx --no-coverage
```

期待値: `FAIL` — `Cannot find module '@/app/legal/page'`

### Step 3: /legal ページを実装する

`app/legal/page.tsx` を作成：

```tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalTabs } from '@/components/LegalTabs'

export const metadata: Metadata = {
  title: '法的情報 | Tsumify',
}

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">法的情報</h1>
        <div className="mt-8">
          <LegalTabs />
        </div>
      </main>
      <Footer />
    </>
  )
}
```

### Step 4: テストを実行してパスを確認する

```bash
npx jest __tests__/app/legal.test.tsx --no-coverage
```

期待値: `PASS` — 3 tests passed

### Step 5: コミット

```bash
git add app/legal/page.tsx __tests__/app/legal.test.tsx
git commit -m "add: /legal 統合ページを追加"
```

---

## Task 3: /terms と /privacy をリダイレクトに変更する（TDD）

**Files:**
- Modify: `app/terms/page.tsx`
- Modify: `app/privacy/page.tsx`
- Modify: `__tests__/app/terms.test.tsx`
- Modify: `__tests__/app/privacy.test.tsx`

### Step 1: terms テストを更新して失敗させる

`__tests__/app/terms.test.tsx` を以下に **全て置き換える**：

```tsx
import { render } from '@testing-library/react'
import TermsPage from '@/app/terms/page'

// window.location のモック
const mockReplace = jest.fn()
Object.defineProperty(window, 'location', {
  writable: true,
  value: { replace: mockReplace, hash: '' },
})

describe('利用規約ページ（リダイレクト）', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('/legal#terms へリダイレクトする', () => {
    render(<TermsPage />)
    expect(mockReplace).toHaveBeenCalledWith('/legal#terms')
  })

  it('コンテンツを直接レンダリングしない', () => {
    const { container } = render(<TermsPage />)
    expect(container.firstChild).toBeNull()
  })
})
```

### Step 2: privacy テストを更新して失敗させる

`__tests__/app/privacy.test.tsx` を以下に **全て置き換える**：

```tsx
import { render } from '@testing-library/react'
import PrivacyPage from '@/app/privacy/page'

const mockReplace = jest.fn()
Object.defineProperty(window, 'location', {
  writable: true,
  value: { replace: mockReplace, hash: '' },
})

describe('プライバシーポリシーページ（リダイレクト）', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('/legal#privacy へリダイレクトする', () => {
    render(<PrivacyPage />)
    expect(mockReplace).toHaveBeenCalledWith('/legal#privacy')
  })

  it('コンテンツを直接レンダリングしない', () => {
    const { container } = render(<PrivacyPage />)
    expect(container.firstChild).toBeNull()
  })
})
```

### Step 3: テストを実行して失敗を確認する

```bash
npx jest __tests__/app/terms.test.tsx __tests__/app/privacy.test.tsx --no-coverage
```

期待値: `FAIL` — リダイレクトが呼ばれていない

### Step 4: /terms をリダイレクトに変更する

`app/terms/page.tsx` を **全て置き換える**：

```tsx
'use client'

import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    window.location.replace('/legal#terms')
  }, [])
  return null
}
```

### Step 5: /privacy をリダイレクトに変更する

`app/privacy/page.tsx` を **全て置き換える**：

```tsx
'use client'

import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    window.location.replace('/legal#privacy')
  }, [])
  return null
}
```

### Step 6: テストを実行してパスを確認する

```bash
npx jest __tests__/app/terms.test.tsx __tests__/app/privacy.test.tsx --no-coverage
```

期待値: `PASS` — 4 tests passed

### Step 7: コミット

```bash
git add app/terms/page.tsx app/privacy/page.tsx __tests__/app/terms.test.tsx __tests__/app/privacy.test.tsx
git commit -m "change: /terms・/privacy を /legal へのリダイレクトに変更"
```

---

## Task 4: Footer を更新して特定商取引法リンクを追加する（TDD）

**Files:**
- Modify: `components/Footer.tsx`
- Modify: `__tests__/components/Footer.test.tsx`

### Step 1: Footer テストを更新して失敗させる

`__tests__/components/Footer.test.tsx` を **全て置き換える**：

```tsx
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('コピーライトが現在年を含む', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('利用規約リンクが /legal#terms を指す', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: '利用規約' })).toHaveAttribute('href', '/legal#terms')
  })

  it('プライバシーポリシーリンクが /legal#privacy を指す', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'プライバシーポリシー' })).toHaveAttribute(
      'href',
      '/legal#privacy'
    )
  })

  it('特定商取引法リンクが /legal#tokusho を指す', () => {
    render(<Footer />)
    expect(
      screen.getByRole('link', { name: '特定商取引法に基づく表記' })
    ).toHaveAttribute('href', '/legal#tokusho')
  })
})
```

### Step 2: テストを実行して失敗を確認する

```bash
npx jest __tests__/components/Footer.test.tsx --no-coverage
```

期待値: `FAIL` — href が `/terms` のまま、特定商取引法リンクが存在しない

### Step 3: Footer を更新する

`components/Footer.tsx` を **全て置き換える**：

```tsx
import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-bg-elevated)] bg-[var(--color-bg)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-sm text-[var(--color-text)]/60">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/legal#terms" className="hover:text-[var(--color-accent)] transition-colors">
            利用規約
          </Link>
          <Link href="/legal#privacy" className="hover:text-[var(--color-accent)] transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/legal#tokusho" className="hover:text-[var(--color-accent)] transition-colors">
            特定商取引法に基づく表記
          </Link>
        </div>
        <p>© {year} Tsumify. All rights reserved.</p>
      </div>
    </footer>
  )
}
```

### Step 4: テストを実行してパスを確認する

```bash
npx jest __tests__/components/Footer.test.tsx --no-coverage
```

期待値: `PASS` — 4 tests passed

### Step 5: 全テストスイートを実行する

```bash
npx jest --no-coverage
```

期待値: 全テスト PASS

### Step 6: ビルドを確認する

```bash
npm run build
```

期待値: エラーなしでビルド成功

### Step 7: コミット

```bash
git add components/Footer.tsx __tests__/components/Footer.test.tsx
git commit -m "update: Footer に特定商取引法リンクを追加し、/legal# へのリンクに統一"
```

---

## 完了チェックリスト

- [ ] `/legal#terms` で利用規約タブが表示される
- [ ] `/legal#privacy` でプライバシーポリシータブが表示される
- [ ] `/legal#tokusho` で特定商取引法タブが表示される
- [ ] 特定商取引法タブに全10項目（販売業者〜動作環境）が表示される
- [ ] `/terms` アクセスで `/legal#terms` にリダイレクトされる
- [ ] `/privacy` アクセスで `/legal#privacy` にリダイレクトされる
- [ ] Footer に3つのリンクが表示される
- [ ] 全テストが PASS
- [ ] `npm run build` が成功する
