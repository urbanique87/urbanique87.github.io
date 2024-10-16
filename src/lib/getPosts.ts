import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
// types
import type { PostMetaData, PostSummary } from '@/src/types/post.types'
// utils
import { convertMDXToPlainText } from '@/src/utils/mdxUtils'

/**
 * frontmatter가 PostMetaData 타입인지 확인하는 타입 가드 함수
 * @param {Record<string, unknown>} frontmatter - 확인할 frontmatter 객체
 */
function isValidPostMetaData(
  frontmatter: Record<string, unknown>
): frontmatter is PostMetaData {
  return (
    typeof frontmatter.title === 'string' &&
    typeof frontmatter.date === 'string'
  )
}

/**
 * 지정된 디렉토리에서 모든 포스트의 메타데이터를 가져오는 함수
 */
export async function getPosts(): Promise<PostSummary[]> {
  // 포스트가 저장된 디렉토리 경로
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      // 파일 이름에서 .mdx 확장자를 제거하여 슬러그 생성
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf-8')

      const { content, frontmatter } = await compileMDX({
        source: fileContents,
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        },
      })

      if (!isValidPostMetaData(frontmatter)) {
        throw new Error('잘못된 프론트매터 형식입니다.')
      }

      const plainContent = convertMDXToPlainText(fileContents)

      // ISO 날짜 문자열을 YYYY-MM-DD 형식으로 변환
      const formattedDate = new Date(frontmatter.date)
        .toISOString()
        .split('T')[0]

      return {
        slug,
        title: frontmatter.title,
        date: formattedDate,
        content,
        plainContent,
      }
    })
  )

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
