import { notFound } from 'next/navigation'
// components
import CategoryList from '@/src/components/posts/CategoryList'
import RenderPostList from '@/src/components/posts/RenderPostList'
// libs
import { getPosts } from '@/src/lib/postService'
import { getCategoriesWithPostCount } from '@/src/lib/categoryService'
import { filterPostsByCategory, isValidCategory } from '@/src/lib/category'

interface CategoryPageParams {
  params: {
    category: string
  }
}

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<
  {
    category: string
  }[]
> {
  try {
    const { categories } = await getCategoriesWithPostCount()
    return categories.map(({ category }) => ({
      category,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

/**
 * 카테고리별 포스트 목록 페이지
 */
export default async function CategoryPostsPage({
  params,
}: CategoryPageParams): Promise<JSX.Element> {
  try {
    const [{ categories, totalPostCount }, posts] = await Promise.all([
      getCategoriesWithPostCount(),
      getPosts(),
    ])

    if (!isValidCategory(categories, params.category)) {
      return notFound()
    }

    // 현재 카테고리의 포스트만 필터링
    const filteredPosts = filterPostsByCategory(posts, params.category)

    return (
      <main>
        <CategoryList categories={categories} totalPostCount={totalPostCount} />
        <RenderPostList posts={filteredPosts} />
      </main>
    )
  } catch (error) {
    console.error('Error in CategoryPostsPage:', error)

    return (
      <main>
        <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
      </main>
    )
  }
}
