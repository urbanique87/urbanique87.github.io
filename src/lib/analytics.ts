import { getApps, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// config
import { FIREBASE_CONFIG } from '@/src/config/constants/firebase'

export function createFirebaseApp() {
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
