import type { MetadataRoute } from 'next'
// config
import { BASE_URL } from '@/config/constants/paths'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
