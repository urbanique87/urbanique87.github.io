// libs
import { getPosts } from '@/src/lib/postService'
// components
import RenderPostList from '@/src/components/RenderPostList'
import CategoryList from '@/src/components/CategoryList'
// libs
import { getCategoriesWithPostCount } from '@/src/lib/categoryService'

/**
 * 포스트 목록 페이지
 */
export default async function PostListPage(): Promise<JSX.Element> {
  try {
    const [{ categories, totalPostCount }, posts] = await Promise.all([
      getCategoriesWithPostCount(),
      getPosts(),
    ])

    if (posts.length === 0) {
      return (
        <main>
          <p>작성된 글이 없습니다.</p>
        </main>
      )
    }

    return (
      <main>
        <CategoryList categories={categories} totalPostCount={totalPostCount} />
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
