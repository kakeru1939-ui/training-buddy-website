import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="relative rounded-2xl bg-[var(--color-bg-elevated)] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      {/* ゴールドのアクセントライン */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg)] text-[#C9A96E]">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
    </article>
  )
}
