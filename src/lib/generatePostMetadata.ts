import { fetchPostBySlug } from '@/src/lib/fetchPostBySlug'

/**
 * 주어진 슬러그에 따라 메타데이터를 생성하는 함수
 * @param {string} slug - 포스트 slug
 */
export async function generatePostMetadata(slug: string): Promise<{
  title: string
  description: string
}> {
  const post = await fetchPostBySlug(slug)

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
      description: '이 포스트는 현재 사용할 수 없습니다.',
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
  }
}
