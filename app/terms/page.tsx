'use client'

import { useEffect } from 'react'
import { navigateTo } from '@/lib/navigate'

export default function TermsPage() {
  useEffect(() => {
    navigateTo('/legal#terms')
  }, [])
  return null
}
