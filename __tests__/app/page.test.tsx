import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

describe('Home ページ', () => {
  it('メインの h1 ヘッドラインが表示される', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('「主な機能」セクションが存在する', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /主な機能/ })).toBeInTheDocument()
  })

  it('「よくある質問」セクションが存在する', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /よくある質問/ })).toBeInTheDocument()
  })

  it('Navbar のアプリ名が表示される', () => {
    render(<Home />)
    expect(screen.getByText('Tsumify')).toBeInTheDocument()
  })

  it('Footer のコピーライトが表示される', () => {
    render(<Home />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
