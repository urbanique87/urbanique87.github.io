import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

import { getPosts } from '@/src/lib/getPosts'
import type { PostMetaData } from '@/src/types/PostMetaData'

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
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div>{post.content}</div>
    </div>
  )
}
