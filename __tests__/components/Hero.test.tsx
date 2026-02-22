import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/Hero'

describe('Hero', () => {
  it('h1 ヘッドラインが表示される', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('「近日公開予定」テキストが表示される', () => {
    render(<Hero />)
    expect(screen.getByText(/近日公開予定/)).toBeInTheDocument()
  })

  it('キャッチコピーのサブテキストが表示される', () => {
    render(<Hero />)
    expect(screen.getByText(/ワークアウト管理/)).toBeInTheDocument()
  })
})
