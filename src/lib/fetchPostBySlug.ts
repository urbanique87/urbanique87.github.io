import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
// types
import type { PostMetaData, PostDetail } from '@/src/types/post.types'
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
 * slug에 따라 포스트 내용을 가져오는 비동기 함수
 * @param {string} slug - 가져올 포스트의 슬러그
 */
export async function fetchPostBySlug(
  category: string,
  slug: string
): Promise<PostDetail | null> {
  // 포스트가 저장된 디렉토리 경로
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  // 특정 슬러그에 해당하는 파일 경로 생성
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`)

  try {
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
    const formattedDate = new Date(frontmatter.date).toISOString().split('T')[0]

    return {
      category,
      title: frontmatter.title,
      date: formattedDate,
      content,
      plainContent,
    }
  } catch (error) {
    // TODO: 예외 처리
    console.error(`Error fetching post ${category}/${slug}:`, error)
    // 파일이 없거나 읽기 오류가 발생하면 null 반환
    return null
  }
}
