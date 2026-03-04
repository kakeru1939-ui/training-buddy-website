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
