import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-bg-elevated)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-[var(--color-accent)]">
          <Image src="/icons/app_icon.png" alt="Tsumify" width={32} height={32} className="rounded-lg" />
          Tsumify
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">
            プライバシーポリシー
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
