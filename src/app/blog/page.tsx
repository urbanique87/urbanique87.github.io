// types
import type { PostSummary } from '@/src/types/post.types'
// libs
import { getPosts } from '@/src/lib/getPosts'
// components
import RenderPostList from '@/src/components/RenderPostList'
import CategoryList from '@/src/components/CategoryList'

/**
 * 포스트 데이터를 가져오는 비동기 함수
 */
async function getStaticPosts(): Promise<Array<PostSummary>> {
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
 */
export default async function PostListPage(): Promise<JSX.Element> {
  const posts = await getStaticPosts()
  if (posts.length === 0) {
    return (
      <main>
        <p>작성된 글이 없습니다.</p>
      </main>
    )
  }

  return (
    <main>
      <CategoryList posts={posts} />
      <RenderPostList posts={posts} />
    </main>
  )
}
