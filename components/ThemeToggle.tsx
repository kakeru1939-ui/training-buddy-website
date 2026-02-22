'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // ハイドレーション不一致を防ぐため、マウント後のみ描画する
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="テーマを切り替える"
      className="p-2 rounded-lg hover:bg-[var(--color-bg-elevated)] transition-colors"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
