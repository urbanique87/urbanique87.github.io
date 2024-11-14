// components
import CategoryList from '@/components/posts/CategoryList'
import PostList from '@/components/posts/PostList'
// lib
import {
  getPostMetadataByCategory,
  getCategoriesWithPostCount,
} from '@/lib/post'
// types
import { PostInfo } from '@/types/post.types'

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<
  Pick<PostInfo, 'category'>[]
> {
  const { categories } = await getCategoriesWithPostCount()

  // 'all' 카테고리를 제외한 나머지 카테고리만 반환
  const filteredCategories = categories.filter(
    ({ category }) => category !== 'all'
  )

  return filteredCategories.map(({ category }) => ({
    category,
  }))
}

/**
 * 카테고리별 포스트 목록 페이지
 */
export default async function PostListByCategoryPage({
  params: { category },
}: {
  params: Pick<PostInfo, 'category'>
}): Promise<JSX.Element> {
  // 카테고리와 해당 카테고리의 포스트를 불러옴
  const [{ categories }, posts] = await Promise.all([
    getCategoriesWithPostCount(),
    getPostMetadataByCategory(category),
  ])

  return (
    <main>
      <CategoryList categories={categories} />
      <PostList posts={posts} />
    </main>
  )
}
