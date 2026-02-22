import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('コピーライトが現在年を含む', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('利用規約リンクが /terms を指す', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: '利用規約' })).toHaveAttribute('href', '/terms')
  })

  it('プライバシーポリシーリンクが /privacy を指す', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'プライバシーポリシー' })).toHaveAttribute('href', '/privacy')
  })
})
