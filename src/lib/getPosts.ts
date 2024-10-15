import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import type { PostMetaData } from '@/src/types/Post'

// 포스트가 저장된 디렉토리 경로
const postsDirectory = path.join(process.cwd(), 'src/posts')

/**
 * 지정된 디렉토리에서 모든 포스트의 메타데이터를 가져오는 함수
 * @returns {Array<{
 *  slug: string;
 *  title: string;
 *  date: string;
 *  excerpt: string;
 * }>}
 */
export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    // 파일 이름에서 .mdx 확장자를 제거하여 슬러그 생성
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    // 파일 내용을 gray-matter로 파싱하여 메타데이터와 본문 분리
    const { data, content } = matter(fileContents)
    const metadata = data as PostMetaData

    // ISO 날짜 문자열을 YYYY-MM-DD 형식으로 변환
    const formattedDate = new Date(metadata.date).toISOString().split('T')[0]

    return {
      slug,
      title: metadata.title,
      date: formattedDate,
      excerpt: content.substring(0, 100), // 본문 내용의 처음 100자를 발췌
    }
  })

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
