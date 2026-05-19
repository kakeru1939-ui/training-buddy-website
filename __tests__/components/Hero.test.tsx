import { render, screen } from '@testing-library/react'
import { APP_STORE_URL, GOOGLE_PLAY_URL, Hero } from '@/components/Hero'

describe('Hero', () => {
  it('アプリ名の h1 が表示される', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: 'つみトレ' })).toBeInTheDocument()
  })

  it('公開済みのストアリンクが表示される', () => {
    render(<Hero />)
    expect(screen.queryByText(/近日公開予定/)).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'App Storeで見る' })).toHaveAttribute(
      'href',
      APP_STORE_URL,
    )
    expect(screen.getByRole('link', { name: 'Google Playで見る' })).toHaveAttribute(
      'href',
      GOOGLE_PLAY_URL,
    )
  })

  it('記録が続かなかった人向けのサブテキストが表示される', () => {
    render(<Hero />)
    expect(screen.getByText(/筋トレ記録が続かなかった人/)).toBeInTheDocument()
  })

  it('ストア掲載スクリーンショットが表示される', () => {
    render(<Hero />)
    expect(screen.getByAltText('つみトレのストア掲載スクリーンショット')).toBeInTheDocument()
  })
})
