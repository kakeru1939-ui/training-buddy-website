import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/Navbar'

// next-themes は Client Component なので Jest でモックする
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('Navbar', () => {
  it('アプリ名が表示される', () => {
    render(<Navbar />)
    expect(screen.getByText('Tsumify')).toBeInTheDocument()
  })

  it('ロゴリンクがトップページ(/)を指す', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Tsumify/i })).toHaveAttribute('href', '/')
  })

  it('法的リンクは Navbar に表示されない（Footer に移動済み）', () => {
    render(<Navbar />)
    expect(screen.queryByRole('link', { name: '利用規約' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'プライバシーポリシー' })).not.toBeInTheDocument()
  })
})
