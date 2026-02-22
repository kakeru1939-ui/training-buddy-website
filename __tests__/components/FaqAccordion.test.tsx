import { render, screen, fireEvent } from '@testing-library/react'
import { FaqAccordion } from '@/components/FaqAccordion'

const mockItems = [
  { question: 'テスト質問1', answer: 'テスト回答1' },
  { question: 'テスト質問2', answer: 'テスト回答2' },
]

describe('FaqAccordion', () => {
  it('質問一覧が表示される', () => {
    render(<FaqAccordion items={mockItems} />)
    expect(screen.getByText('テスト質問1')).toBeInTheDocument()
    expect(screen.getByText('テスト質問2')).toBeInTheDocument()
  })

  it('初期状態では回答が非表示', () => {
    render(<FaqAccordion items={mockItems} />)
    // hidden 属性で非表示になっていること
    const answer = screen.getByText('テスト回答1')
    expect(answer.closest('dd')).toHaveAttribute('hidden')
  })

  it('質問クリックで回答が表示される', () => {
    render(<FaqAccordion items={mockItems} />)
    fireEvent.click(screen.getByText('テスト質問1'))
    const answer = screen.getByText('テスト回答1')
    expect(answer.closest('dd')).not.toHaveAttribute('hidden')
  })

  it('別の質問クリックで最初の質問が閉じる', () => {
    render(<FaqAccordion items={mockItems} />)
    fireEvent.click(screen.getByText('テスト質問1'))
    fireEvent.click(screen.getByText('テスト質問2'))
    expect(screen.getByText('テスト回答1').closest('dd')).toHaveAttribute('hidden')
    expect(screen.getByText('テスト回答2').closest('dd')).not.toHaveAttribute('hidden')
  })
})
