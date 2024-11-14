// types
import type { MetadataRoute } from 'next'
// lib
import { getCategoriesWithPostCount, getPosts } from '@/lib/post'

export default async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ categories }, posts] = await Promise.all([
    getCategoriesWithPostCount(),
    getPosts(),
  ])

  // 카테고리 페이지 URL 생성
  const categoryUrls = categories.map(({ category }) => {
    const path = category === 'all' ? '/posts' : `/posts/${category}`

    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      lastModified: new Date(),
    }
  })

  // 포스트 페이지 URL 생성
  const postUrls = posts.map(({ category, slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${category}/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: process.env.NEXT_PUBLIC_BASE_URL,
      lastModified: new Date(),
    },
    ...categoryUrls,
    ...postUrls,
  ]
}
