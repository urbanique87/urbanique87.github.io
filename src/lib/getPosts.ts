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
  //   const fileNames = fs.readdirSync(postsDirectory)
  const categories = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    categories.flatMap(async (category) => {
      const categoryPath = path.join(postsDirectory, category)

      const fileNames = fs.readdirSync(categoryPath)

      return await Promise.all(
        fileNames.map(async (fileName) => {
          const slug = `${fileName.replace(/\.mdx$/, '')}`
          const fullPath = path.join(categoryPath, fileName)
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

          const formattedDate = new Date(frontmatter.date)
            .toISOString()
            .split('T')[0]

          return {
            category,
            slug,
            title: frontmatter.title,
            date: formattedDate,
            content,
            plainContent,
          }
        })
      )
    })
  )

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return posts
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
