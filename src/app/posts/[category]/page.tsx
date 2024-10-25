// components
import CategoryList from '@/src/components/posts/CategoryList'
import RenderPostList from '@/src/components/posts/RenderPostList'
// libs
import { getPostMetadataByCategory, getCategoriesWithPostCount } from '@/src/lib/post'

interface RouteParams {
  category: string
}

interface PageParams {
  params: RouteParams
}

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<RouteParams[]> {
  const { categories } = await getCategoriesWithPostCount()
  return categories
    .filter(({ category }) => category !== 'all')
    .map(({ category }) => ({
      category,
    }))
}

/**
 * 카테고리별 포스트 목록 페이지
 */
export default async function PostListByCategoryPage({
  params: { category },
}: PageParams): Promise<JSX.Element> {
  try {
    const [{ categories }, posts] = await Promise.all([
      getCategoriesWithPostCount(),
      getPostMetadataByCategory(category),
    ])

    return (
      <main>
        <CategoryList categories={categories} />
        <RenderPostList posts={posts} />
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
