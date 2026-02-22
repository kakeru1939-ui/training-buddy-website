import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-bg-elevated)] bg-[var(--color-bg)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-sm text-[var(--color-text)]/60">
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
            プライバシーポリシー
          </Link>
        </div>
        <p>© {year} Training Buddy. All rights reserved.</p>
      </div>
    </footer>
  )
}
