// components
import CategoryList from '@/components/posts/CategoryList'
import PostList from '@/components/posts/PostList'
// lib
import { getPosts, getCategoriesWithPostCount } from '@/lib/post'

/**
 * 포스트 목록 페이지
 */
export default async function PostListPage(): Promise<JSX.Element> {
  // 카테고리와 포스트 데이터를 비동기로 가져옴
  const [{ categories }, posts] = await Promise.all([
    getCategoriesWithPostCount(),
    getPosts(),
  ])

  // 포스트가 없을 경우 메시지 출력
  if (posts.length === 0) {
    return (
      <main>
        <p>작성된 글이 없습니다.</p>
      </main>
    )
  }

  return (
    <main>
      <CategoryList categories={categories} />
      <PostList posts={posts} />
    </main>
  )
}
