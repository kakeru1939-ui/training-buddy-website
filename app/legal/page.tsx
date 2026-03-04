import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalTabs } from '@/components/LegalTabs'

export const metadata: Metadata = {
  title: '法的情報 | Tsumify',
}

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">法的情報</h1>
        <div className="mt-8">
          <LegalTabs />
        </div>
      </main>
      <Footer />
    </>
  )
}
