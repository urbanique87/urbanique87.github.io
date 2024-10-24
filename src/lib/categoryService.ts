import { promises as fs } from 'fs'
import path from 'path'
// types
import type {
  PostCountByCategory,
  CategoriesWithCounts,
} from '@/src/types/post.types'
// constants
import { POSTS_DIR } from '@/src/constants/paths'

/**
 * 특정 카테고리의 포스트 수를 계산한다.
 * @param {string} category - 카테고리 이름
 */
async function getPostCount(category: string): Promise<number> {
  const categoryPath = path.join(POSTS_DIR, category)
  const files = await fs.readdir(categoryPath)
  return files.filter((file) => file.endsWith('.mdx')).length
}

/**
 * 카테고리별 포스트 수를 계산하는 함수
 */
async function calculateCategoryCounts(): Promise<PostCountByCategory[]> {
  // 카테고리 목록 가져오기
  const categoryNames = await fs.readdir(POSTS_DIR)

  // 각 카테고리에 대한 포스트 수 계산
  const postCountsPromises = categoryNames.map(async (category) => {
    const postCount = await getPostCount(category)
    return { category, count: postCount }
  })

  return Promise.all(postCountsPromises)
}

/**
 * 카테고리 리스트와 각 카테고리의 포스트 수를 가져온다.
 */
export async function getCategoriesWithPostCount(): Promise<CategoriesWithCounts> {
  try {
    // 카테고리별 포스트 수 가져오기
    const categoryPostCounts = await calculateCategoryCounts()

    // 전체 포스트 수 계산
    const totalPostCount = categoryPostCounts.reduce(
      (acc, category) => acc + category.count,
      0
    )

    return {
      categories: [
        { category: 'all', count: totalPostCount },
        ...categoryPostCounts,
      ],
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error getting categories:', error.message) // 에러 메시지 출력
    } else {
      console.error('Error getting categories:', error) // 기타 에러
    }

    return {
      categories: [],
    }
  }
}
