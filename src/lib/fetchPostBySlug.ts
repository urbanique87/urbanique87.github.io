import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
// types
import type { PostMetaData, PostDetail } from '@/src/types/post.types'

/**
 * slug에 따라 포스트 내용을 가져오는 비동기 함수
 * @param {string} slug - 가져올 포스트의 슬러그
 */
export async function fetchPostBySlug(
  slug: string
): Promise<PostDetail | null> {
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

    const mdxSource = await serialize(content)

    return {
      title: metadata.title,
      date: formattedDate,
      content: mdxSource,
      rawContent: content,
    }
  } catch (error) {
    // TODO: 예외 처리
    console.error(error)
    // 파일이 없거나 읽기 오류가 발생하면 null 반환
    return null
  }
}
