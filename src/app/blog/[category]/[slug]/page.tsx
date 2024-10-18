import { notFound } from 'next/navigation'
// libs
import { getPosts } from '@/src/lib/getPosts'
import { fetchPostBySlug } from '@/src/lib/fetchPostBySlug'
import { generatePostMetadata } from '@/src/lib/generatePostMetadata'
// components
import RenderPost from '@/src/components/RenderPost'

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<
  {
    category: string
    slug: string
  }[]
> {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
    category: post.category,
  }))
}

/**
 * 메타데이터 생성 함수
 * @param {Object} params - URL 매개변수
 * @param {string} params.slug - 포스트의 슬러그
 */
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}): Promise<{
  title: string
  description: string
}> {
  return generatePostMetadata(params.category, params.slug)
}

/**
 * 포스트 페이지
 * @param {Object} params - URL 매개변수
 * @param {string} params.slug - 포스트의 슬러그
 */
export default async function PostPage({
  params,
}: {
  params: { category: string; slug: string }
}): Promise<JSX.Element> {
  const post = await fetchPostBySlug(params.category, params.slug)

  // 포스트가 존재하지 않을 경우 404 페이지로 리디렉션
  if (!post) {
    return notFound()
  }

  return (
    <main>
      <RenderPost post={post} />
    </main>
  )
}
