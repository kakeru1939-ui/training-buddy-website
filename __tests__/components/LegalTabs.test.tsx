import { render, screen, fireEvent } from '@testing-library/react'
import { LegalTabs } from '@/components/LegalTabs'

// getHash / setHash をプロップス経由で注入してテストする。
// jsdom 30 では window.location の再定義が不可なため、依存性注入で回避する。

describe('LegalTabs', () => {
  it('3つのタブが表示される', () => {
    render(<LegalTabs getHash={() => ''} setHash={jest.fn()} />)
    expect(screen.getByRole('tab', { name: '利用規約' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'プライバシーポリシー' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '特定商取引法に基づく表記' })).toBeInTheDocument()
  })

  it('初期状態でハッシュなしの場合、利用規約タブがアクティブ', () => {
    render(<LegalTabs getHash={() => ''} setHash={jest.fn()} />)
    expect(screen.getByRole('tab', { name: '利用規約' })).toHaveAttribute('aria-selected', 'true')
  })

  it('ハッシュが #privacy の場合、プライバシーポリシータブがアクティブ', () => {
    render(<LegalTabs getHash={() => '#privacy'} setHash={jest.fn()} />)
    expect(screen.getByRole('tab', { name: 'プライバシーポリシー' })).toHaveAttribute('aria-selected', 'true')
  })

  it('ハッシュが #tokusho の場合、特定商取引法タブがアクティブ', () => {
    render(<LegalTabs getHash={() => '#tokusho'} setHash={jest.fn()} />)
    expect(screen.getByRole('tab', { name: '特定商取引法に基づく表記' })).toHaveAttribute('aria-selected', 'true')
  })

  it('タブクリックでコンテンツが切り替わる', () => {
    render(<LegalTabs getHash={() => ''} setHash={jest.fn()} />)
    expect(screen.getByText(/利用条件/)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('tab', { name: 'プライバシーポリシー' }))
    expect(screen.getByText(/収集する情報/)).toBeInTheDocument()
  })

  it('特定商取引法タブに必須項目が含まれる', () => {
    render(<LegalTabs getHash={() => ''} setHash={jest.fn()} />)
    fireEvent.click(screen.getByRole('tab', { name: '特定商取引法に基づく表記' }))
    expect(screen.getByText('販売業者')).toBeInTheDocument()
    // 全角スペースを含む文字列は Testing Library の正規化を無効にして検索する
    expect(
      screen.getByText('Tsumify Lab（代表：吉田　翔）', { normalizer: (s) => s })
    ).toBeInTheDocument()
    expect(screen.getByText('販売価格')).toBeInTheDocument()
    expect(screen.getByText(/480/)).toBeInTheDocument()
    expect(screen.getByText(/3,600/)).toBeInTheDocument()
    expect(screen.getByText('support@tsumify-lab.com')).toBeInTheDocument()
  })
})
