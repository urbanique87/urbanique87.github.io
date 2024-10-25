import { notFound } from 'next/navigation'
// libs
import { getPosts, fetchPostBySlug } from '@/src/lib/post'
// components
import RenderPost from '@/src/components/posts/RenderPost'
// styles
import '@/public/styles/github-markdown.css'

interface RouteParams {
  category: string
  slug: string
}

interface PageParams {
  params: RouteParams
}

interface Metadata {
  title: string
  description: string
}

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 */
export async function generateStaticParams(): Promise<RouteParams[]> {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
    category: post.category,
  }))
}

/**
 * 메타데이터 생성 함수
 */
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { category, slug } = params
  const {
    frontmatter: { title, description },
  } = await fetchPostBySlug(category, slug)

  return {
    title,
    description,
  }
}

/**
 * 포스트 페이지
 */
export default async function PostPage({ params }: PageParams): Promise<JSX.Element> {
  const { category, slug } = params
  const post = await fetchPostBySlug(category, slug)

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
