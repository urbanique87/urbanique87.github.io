import { notFound } from 'next/navigation'
// components
import PostDetail from '@/components/posts/PostDetail'
// lib
import { getPosts, fetchPostBySlug } from '@/lib/post'
import { PostInfo } from '@/types/post.types'

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<
  Pick<PostInfo, 'category' | 'slug'>[]
> {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
    category: post.category,
  }))
}

/**
 * 메타데이터 생성 함수
 */
export async function generateMetadata({
  params,
}: {
  params: Pick<PostInfo, 'category' | 'slug'>
}): Promise<{ title: string; description: string }> {
  const { category, slug } = params
  const { frontmatter } = await fetchPostBySlug(category, slug)

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

/**
 * 포스트 페이지
 */
export default async function PostPage({
  params,
}: {
  params: Pick<PostInfo, 'category' | 'slug'>
}): Promise<JSX.Element> {
  const { category, slug } = params
  const post = await fetchPostBySlug(category, slug)

  // 포스트가 존재하지 않을 경우 404 페이지로 리디렉션
  if (!post) {
    return notFound()
  }

  return (
    <main>
      <PostDetail post={post} />
    </main>
  )
}
