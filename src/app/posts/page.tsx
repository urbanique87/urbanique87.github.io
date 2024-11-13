// components
import RenderPostList from '@/components/posts/RenderPostList'
import CategoryList from '@/components/posts/CategoryList'
// libs
import { getPosts, getCategoriesWithPostCount } from '@/lib/post'

/**
 * 포스트 목록 페이지
 */
export default async function PostListPage(): Promise<JSX.Element> {
  try {
    const [{ categories }, posts] = await Promise.all([getCategoriesWithPostCount(), getPosts()])

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
        <RenderPostList posts={posts} />
      </main>
    )
  } catch (error) {
    console.error('Error in PostListPage:', error)

    return (
      <main>
        <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
      </main>
    )
  }
}
