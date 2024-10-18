// types
import type { PostCategory, PostSummary } from '@/src/types/post.types'

/**
 * 특정 카테고리의 포스트를 필터링하는 함수
 */
export function filterPostsByCategory(
  posts: PostSummary[],
  category: string
): PostSummary[] {
  return posts.filter((post) => post.category === category)
}

/**
 * 카테고리 유효성을 검사하는 함수
 */
export function isValidCategory(
  categories: PostCategory[],
  targetCategory: string
): boolean {
  return categories.some(({ category }) => category === targetCategory)
}
