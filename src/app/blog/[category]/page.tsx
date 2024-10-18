import { notFound } from 'next/navigation'
// components
import CategoryList from '@/src/components/CategoryList'
import RenderPostList from '@/src/components/RenderPostList'
// libs
import { getPosts } from '@/src/lib/getPosts'

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<
  {
    category: string
  }[]
> {
  const posts = await getPosts()
  return posts.map((post) => ({
    category: post.category,
  }))
}

/**
 * 카테고리별 포스트 목록 페이지
 */
export default async function CategoryPostsPage({
  params,
}: {
  params: { category: string }
}) {
  const posts = await getPosts()
  const categories = new Set(posts.map((post) => post.category))
  if (!categories.has(params.category)) {
    return notFound()
  }

  const filteredPosts = posts.filter(
    (post) => post.category === params.category
  )

  return (
    <main>
      <CategoryList posts={posts} />
      <RenderPostList posts={filteredPosts} />
    </main>
  )
}
