import { getPosts } from '@/src/lib/getPosts'

import RenderPosts from '@/src/components/RenderPosts'

/**
 * 포스트 데이터를 가져오는 비동기 함수
 * @returns {Promise<Array<{
 *  slug: string;
 *  title: string;
 *  date: string;
 *  excerpt: string;
 * }>>}
 */
async function getStaticPosts() {
  try {
    const posts = await getPosts()
    return posts
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return [] // 에러 발생 시 빈 배열 반환
  }
}

/**
 * 블로그 목록 페이지
 * @returns {Promise<JSX.Element>}
 */
export default async function Blog() {
  const posts = await getStaticPosts()

  if (posts.length === 0) {
    return <p>작성된 글이 없습니다.</p>
  }

  return (
    <main>
      <RenderPosts posts={posts} />
    </main>
  )
}
