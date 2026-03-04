import { render, screen } from '@testing-library/react'
import LegalPage from '@/app/legal/page'

jest.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light', setTheme: jest.fn() }),
}))

jest.mock('@/components/LegalTabs', () => ({
  LegalTabs: () => <div data-testid="legal-tabs">LegalTabs</div>,
}))

describe('/legal ページ', () => {
  it('ページがレンダリングされる', () => {
    render(<LegalPage />)
    expect(screen.getByTestId('legal-tabs')).toBeInTheDocument()
  })

  it('Navbar が含まれる', () => {
    render(<LegalPage />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('Footer が含まれる', () => {
    render(<LegalPage />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
