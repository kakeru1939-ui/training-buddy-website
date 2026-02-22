import { render, screen } from '@testing-library/react'
import TermsPage from '@/app/terms/page'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('利用規約ページ', () => {
  it('ページタイトル「利用規約」が表示される', () => {
    render(<TermsPage />)
    expect(screen.getByRole('heading', { name: /利用規約/ })).toBeInTheDocument()
  })

  it('Navbar（アプリ名）が含まれる', () => {
    render(<TermsPage />)
    expect(screen.getByText('Training Buddy')).toBeInTheDocument()
  })

  it('Footer（コピーライト）が含まれる', () => {
    render(<TermsPage />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('少なくとも3つの条文セクションがある', () => {
    render(<TermsPage />)
    const sections = screen.getAllByRole('heading', { level: 2 })
    expect(sections.length).toBeGreaterThanOrEqual(3)
  })
})
