import { render, screen } from '@testing-library/react'
import PrivacyPage from '@/app/privacy/page'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('プライバシーポリシーページ', () => {
  it('ページタイトル「プライバシーポリシー」が表示される', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { name: /プライバシーポリシー/ })).toBeInTheDocument()
  })

  it('Navbar（アプリ名）が含まれる', () => {
    render(<PrivacyPage />)
    expect(screen.getByText('Training Buddy')).toBeInTheDocument()
  })

  it('Footer（コピーライト）が含まれる', () => {
    render(<PrivacyPage />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('「収集する情報」の見出しが存在する', () => {
    render(<PrivacyPage />)
    expect(screen.getByRole('heading', { name: /収集する情報/ })).toBeInTheDocument()
  })

  it('少なくとも3つのセクションがある', () => {
    render(<PrivacyPage />)
    const sections = screen.getAllByRole('heading', { level: 2 })
    expect(sections.length).toBeGreaterThanOrEqual(3)
  })
})
