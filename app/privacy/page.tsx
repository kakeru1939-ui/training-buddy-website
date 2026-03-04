'use client'

import { useEffect } from 'react'
import { navigateTo } from '@/lib/navigate'

export default function PrivacyPage() {
  useEffect(() => {
    navigateTo('/legal#privacy')
  }, [])
  return null
}
