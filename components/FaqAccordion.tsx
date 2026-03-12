'use client'

import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  readonly items: readonly FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <dl className="space-y-2">
      {items.map((item, index) => (
        <div
          key={item.question}
          className="rounded-xl bg-[var(--color-bg)] overflow-hidden"
        >
          <dt>
            <button
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-[var(--color-text)]"
            >
              {item.question}
              <span className="ml-4 shrink-0" aria-hidden="true">
                {openIndex === index ? '▲' : '▼'}
              </span>
            </button>
          </dt>
          <dd
            hidden={openIndex !== index}
            className="px-5 pb-4 text-sm text-[var(--color-text-secondary)]"
          >
            {item.answer}
          </dd>
        </div>
      ))}
    </dl>
  )
}
