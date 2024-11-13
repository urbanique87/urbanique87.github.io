// types
import type { MetadataRoute } from 'next'
// config
import { BASE_URL } from '@/config/constants/paths'
// libs
import { getCategoriesWithPostCount, getPosts } from '@/lib/post'

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ categories }, posts] = await Promise.all([getCategoriesWithPostCount(), getPosts()])

  // 카테고리 페이지 URL 생성
  const categoryUrls = categories.map(({ category }) => {
    const href = category === 'all' ? '/posts' : `/posts/${category}`

    return {
      url: `${BASE_URL}${href}`,
      lastModified: new Date(),
    }
  })

  // 포스트 페이지 URL 생성
  const postUrls = posts.map(({ category, slug }) => ({
    url: `${BASE_URL}/posts/${category}/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...categoryUrls,
    ...postUrls,
  ]
}
