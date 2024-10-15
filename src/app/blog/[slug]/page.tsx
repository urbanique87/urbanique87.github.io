import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
// types
import type { PostMetaData } from '@/src/types/Post'
// libs
import { getPosts } from '@/src/lib/getPosts'
// styles
import { PostContent, PostDate, PostTitle } from '@/src/styles/Post'

/**
 * Static Generation을 위한 경로 파라미터 생성 함수
 * @returns {Promise<Array<{
 *  slug: string;
 * }>>}
 */
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

/**
 * slug에 따라 포스트 내용을 가져오는 비동기 함수
 * @param {string} slug
 * @returns {Promise<{
 *  title: string;
 *  date: string;
 *  content: string;
 * } | null>}
 */
async function fetchPostBySlug(slug: string) {
  // 포스트가 저장된 디렉토리 경로
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  // 특정 슬러그에 해당하는 파일 경로 생성
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    // 파일 내용을 gray-matter로 파싱하여 메타데이터와 본문 분리
    const { data, content } = matter(fileContents)
    const metadata = data as PostMetaData

    // ISO 날짜 문자열을 YYYY-MM-DD 형식으로 변환
    const formattedDate = new Date(metadata.date).toISOString().split('T')[0]

    return {
      title: metadata.title,
      date: formattedDate,
      content,
    }
  } catch (error) {
    console.error(error)
    // 파일이 없거나 읽기 오류가 발생하면 null 반환
    return null
  }
}

/**
 * 주어진 슬러그에 따라 메타데이터를 생성하는 함수
 * @param {Object} params - URL 매개변수
 * @param {string} params.slug - 포스트의 슬러그
 * @returns {Promise<{ title: string; description: string }>} - 메타데이터 객체
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await fetchPostBySlug(params.slug)

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
      description: '이 포스트는 현재 사용할 수 없습니다.',
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 150),
  }
}

/**
 * 포스트 페이지
 * @param {Object} params - URL 매개변수
 * @param {string} params.slug - 포스트의 슬러그
 * @returns {Promise<JSX.Element>}
 */
export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await fetchPostBySlug(params.slug)

  // 포스트가 존재하지 않을 경우 404 페이지로 리디렉션
  if (!post) {
    notFound()
  }

  return (
    <main>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>{post.date}</PostDate>
      <PostContent>{post.content}</PostContent>
    </main>
  )
}
