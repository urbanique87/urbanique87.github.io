import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// config
import { FIREBASE_CONFIG } from '@/constants/firebase'

export function createFirebaseApp() {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  if (typeof window === 'undefined') {
    return
  }

  if (getApps().length > 0) {
    return
  }

  if ('measurementId' in FIREBASE_CONFIG) {
    const app = initializeApp(FIREBASE_CONFIG)
    getAnalytics(app)
  }
}
