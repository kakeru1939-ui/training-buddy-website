import { render, act } from '@testing-library/react'

// navigate ユーティリティをモックして window.location.replace の jsdom 制約を回避する
const mockNavigateTo = jest.fn()
jest.mock('@/lib/navigate', () => ({
  navigateTo: (url: string) => mockNavigateTo(url),
}))

import PrivacyPage from '@/app/privacy/page'

describe('プライバシーポリシーページ（リダイレクト）', () => {
  beforeEach(() => {
    mockNavigateTo.mockClear()
  })

  it('/legal#privacy へリダイレクトする', async () => {
    await act(async () => {
      render(<PrivacyPage />)
    })

    expect(mockNavigateTo).toHaveBeenCalledWith('/legal#privacy')
  })

  it('コンテンツを直接レンダリングしない', async () => {
    const { container } = await act(async () => render(<PrivacyPage />))
    expect(container.firstChild).toBeNull()
  })
})
