import { render, act } from '@testing-library/react'

// navigate ユーティリティをモックして window.location.replace の jsdom 制約を回避する
const mockNavigateTo = jest.fn()
jest.mock('@/lib/navigate', () => ({
  navigateTo: (url: string) => mockNavigateTo(url),
}))

import TermsPage from '@/app/terms/page'

describe('利用規約ページ（リダイレクト）', () => {
  beforeEach(() => {
    mockNavigateTo.mockClear()
  })

  it('/legal#terms へリダイレクトする', async () => {
    await act(async () => {
      render(<TermsPage />)
    })

    expect(mockNavigateTo).toHaveBeenCalledWith('/legal#terms')
  })

  it('コンテンツを直接レンダリングしない', async () => {
    const { container } = await act(async () => render(<TermsPage />))
    expect(container.firstChild).toBeNull()
  })
})
