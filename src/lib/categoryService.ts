import { promises as fs } from 'fs'
import path from 'path'
// types
import {
  PostCountByCategory,
  CategoriesWithCounts,
} from '@/src/types/post.types'
// constants
import { POSTS_DIRECTORY_PATH } from '@/src/config/paths'

/**
 * 특정 카테고리에서 포스트 수를 계산한다.
 * @param category - 카테고리 이름
 */
async function getPostCountByCategory(
  category: string
): Promise<PostCountByCategory> {
  const categoryPath = path.join(POSTS_DIRECTORY_PATH, category)
  const files = await fs.readdir(categoryPath)
  const postFiles = files.filter((file) => file.endsWith('.mdx'))

  return {
    category,
    count: postFiles.length,
  }
}

/**
 * 모든 카테고리에 대한 포스트 수를 계산한다.
 * @param categories - 카테고리 이름 배열
 */
async function getAllCategoryPostCounts(
  categories: string[]
): Promise<PostCountByCategory[]> {
  // 각 카테고리에 대한 포스트 수 계산
  const categoryCountsPromises = categories.map(getPostCountByCategory)
  // 모든 카테고리의 포스트 수를 비동기적으로 가져옴
  return Promise.all(categoryCountsPromises)
}

/**
 * 카테고리별 포스트 수를 합산하여 전체 포스트 수를 계산한다.
 * @param categories - 카테고리 포스트 수 배열
 */
function getPostTotalCount(categories: PostCountByCategory[]): number {
  return categories.reduce((acc, category) => acc + category.count, 0) // 각 카테고리의 포스트 수를 합산
}

/**
 * 카테고리 리스트와 카운트를 가져온다.
 */
export async function getCategoriesWithPostCount(): Promise<CategoriesWithCounts> {
  try {
    // 카테고리 목록 가져오기
    const categories = await fs.readdir(POSTS_DIRECTORY_PATH)
    // 카테고리별 포스트 수 가져오기
    const categoryCounts = await getAllCategoryPostCounts(categories)
    // 전체 포스트 수 계산
    const totalPostCount = getPostTotalCount(categoryCounts)

    return {
      categories: categoryCounts, // 각 카테고리의 포스트 수 정보
      totalPostCount, // 전체 포스트 수
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error getting categories:', error.message) // 에러 메시지 출력
    } else {
      console.error('Error getting categories:', error) // 기타 에러
    }

    return {
      categories: [],
      totalPostCount: 0,
    }
  }
}
