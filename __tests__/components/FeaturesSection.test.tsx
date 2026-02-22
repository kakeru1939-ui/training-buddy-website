import { render, screen } from '@testing-library/react'
import { FeaturesSection } from '@/components/FeaturesSection'

describe('FeaturesSection', () => {
  it('セクションタイトル「主な機能」が表示される', () => {
    render(<FeaturesSection />)
    expect(screen.getByRole('heading', { name: /主な機能/ })).toBeInTheDocument()
  })

  it('4つ以上の機能カードが表示される', () => {
    render(<FeaturesSection />)
    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(4)
  })

  it('ワークアウト管理が含まれる', () => {
    render(<FeaturesSection />)
    expect(screen.getByText('ワークアウト管理')).toBeInTheDocument()
  })

  it('体重管理が含まれる', () => {
    render(<FeaturesSection />)
    expect(screen.getByText('体重管理')).toBeInTheDocument()
  })
})
