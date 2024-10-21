import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerNotationDiff } from '@shikijs/transformers'
// types
import type { CompileMDXResult } from 'next-mdx-remote/rsc'
import type {
  PostDetailContent,
  //   PostDetail,
  PostMetadata,
  PostSummary,
} from '@/src/types/post.types'
// utils
import { convertMDXToPlainText } from '@/src/utils/mdxUtils'
// constants
import { POSTS_DIRECTORY_PATH } from '@/src/config/paths'

/**
 * frontmatter가 PostMetadata 타입인지 확인하는 타입 가드 함수
 * @param {Record<string, unknown>} frontmatter - 확인할 frontmatter 객체
 */
function isValidPostMetadata(
  frontmatter: Record<string, unknown>
): frontmatter is PostMetadata {
  return (
    typeof frontmatter.title === 'string' &&
    typeof frontmatter.date === 'string'
  )
}

/**
 * MDX 파일을 읽고 내용과 frontmatter를 반환하는 함수
 * @param {string} fileContents - 포스트 파일의 내용
 */
async function readMDXFile(
  fileContents: string
): Promise<CompileMDXResult<Record<string, unknown>>> {
  const options = {
    theme: {
      dark: 'github-dark-dimmed',
      light: 'github-light',
    },
    defaultLang: 'plaintext',
    transformers: [transformerNotationDiff()],
    keepBackground: false,
  }
  return compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,

      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkBreaks],
        rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
        format: 'mdx',
      },
    },
  })
}

/**
 * 포스트 파일 내용을 읽어오는 함수
 * @param {string} filePath - 포스트 파일의 전체 경로
 */
async function readFileContent(filePath: string): Promise<string> {
  return fs.readFile(filePath, 'utf-8')
}

/**
 * 포스트의 메타데이터를 생성하는 함수
 * @param {string} category - 카테고리 이름
 * @param {string} fileName - 포스트 파일 이름
 * @param {string} fileContents - 포스트 파일 내용
 */
async function createPostMetadata(
  category: string,
  fileName: string,
  fileContents: string
): Promise<PostSummary> {
  const slug = fileName.replace(/\.mdx$/, '')
  const { frontmatter } = await readMDXFile(fileContents)

  if (!isValidPostMetadata(frontmatter)) {
    throw new Error('잘못된 프론트매터 형식입니다.')
  }

  const plainContent = convertMDXToPlainText(fileContents)
  const formattedDate = new Date(frontmatter.date).toISOString().split('T')[0]

  return {
    category,
    slug,
    title: frontmatter.title,
    date: formattedDate,
    plainContent,
  }
}

/**
 * 특정 카테고리에서 모든 포스트의 메타데이터를 가져오는 함수
 * @param {string} category - 카테고리 이름
 */
async function fetchPostsByCategory(category: string): Promise<PostSummary[]> {
  const categoryPath = path.join(POSTS_DIRECTORY_PATH, category)

  const fileNames = await fs.readdir(categoryPath)

  return Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(categoryPath, fileName)
      const fileContents = await readFileContent(filePath)

      return createPostMetadata(category, fileName, fileContents)
    })
  )
}

/**
 * 지정된 디렉토리에서 모든 포스트의 메타데이터를 가져오는 함수
 */
export async function getPosts(): Promise<PostSummary[]> {
  // 카테고리 목록 가져오기
  const categories = await fs.readdir(POSTS_DIRECTORY_PATH)

  // 각 카테고리의 포스트 메타데이터 가져오기
  const postsByCategoriesPromises = categories.map(fetchPostsByCategory)
  const postsByCategories = await Promise.all(postsByCategoriesPromises)

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return postsByCategories
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * slug에 따라 포스트 내용을 가져오는 비동기 함수
 * @param {string} slug - 가져올 포스트의 슬러그
 */
export async function fetchPostBySlug(
  category: string,
  slug: string
): Promise<PostDetailContent | null> {
  // 특정 슬러그에 해당하는 파일 경로 생성
  const filePath = path.join(POSTS_DIRECTORY_PATH, category, `${slug}.mdx`)

  try {
    const fileContents = await readFileContent(filePath)

    const { content, frontmatter } = await readMDXFile(fileContents)

    if (!isValidPostMetadata(frontmatter)) {
      throw new Error('잘못된 프론트매터 형식입니다.')
    }

    const plainContent = convertMDXToPlainText(fileContents)
    const formattedDate = new Date(frontmatter.date).toISOString().split('T')[0]

    return {
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
