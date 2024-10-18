// libs
import { fetchPostBySlug } from '@/src/lib/fetchPostBySlug'

/**
 * 주어진 슬러그에 따라 메타데이터를 생성하는 함수
 * @param {string} slug - 포스트 slug
 */
export async function generatePostMetadata(
  category: string,
  slug: string
): Promise<{
  title: string
  description: string
}> {
  const post = await fetchPostBySlug(category, slug)

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
      description: '이 포스트는 현재 사용할 수 없습니다.',
    }
  }

  const { title, plainContent } = post
  // 첫 150자를 설명으로 사용
  const description = plainContent.substring(0, 150).trim()

  return {
    title,
    description,
  }
}
