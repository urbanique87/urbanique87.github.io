'use client'

import { useEffect } from 'react'
// libs
import { createFirebaseApp } from '@/src/lib/analytics'

export default function FirebaseAnalytics() {
  useEffect(() => {
    createFirebaseApp()
  }, [])

  return null
}
