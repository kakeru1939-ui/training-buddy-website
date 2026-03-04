import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-bg-elevated)] bg-[var(--color-bg)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-sm text-[var(--color-text)]/60">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/legal#terms" className="hover:text-[var(--color-accent)] transition-colors">
            利用規約
          </Link>
          <Link href="/legal#privacy" className="hover:text-[var(--color-accent)] transition-colors">
            プライバシーポリシー
          </Link>
          <Link href="/legal#tokusho" className="hover:text-[var(--color-accent)] transition-colors">
            特定商取引法に基づく表記
          </Link>
        </div>
        <p>© {year} Tsumify. All rights reserved.</p>
      </div>
    </footer>
  )
}
