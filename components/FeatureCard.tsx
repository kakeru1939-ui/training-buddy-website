import Image from 'next/image'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl bg-[var(--color-bg-elevated)] p-6 shadow-sm">
      <div className="h-16 w-16">
        <Image src={icon} alt={title} width={64} height={64} className="object-contain" />
      </div>
      <h3 className="mt-3 font-semibold text-[var(--color-text)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-text)]/70">{description}</p>
    </article>
  )
}
