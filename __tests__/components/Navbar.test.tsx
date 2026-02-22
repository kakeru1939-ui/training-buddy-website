import { render, screen } from '@testing-library/react'
import { Navbar } from '@/components/Navbar'

// next-themes は Client Component なので Jest でモックする
jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('Navbar', () => {
  it('アプリ名が表示される', () => {
    render(<Navbar />)
    expect(screen.getByText('Training Buddy')).toBeInTheDocument()
  })

  it('利用規約リンクが /terms を指す', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: '利用規約' })).toHaveAttribute('href', '/terms')
  })

  it('プライバシーポリシーリンクが /privacy を指す', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'プライバシーポリシー' })).toHaveAttribute('href', '/privacy')
  })
})
