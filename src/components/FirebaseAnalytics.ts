'use client'

import { useEffect } from 'react'
// lib
import { createFirebaseApp } from '@/lib/analytics'

export default function FirebaseAnalytics() {
  useEffect(() => {
    createFirebaseApp()
  }, [])

  return null
}
