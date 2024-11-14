import { promises as fs } from 'fs'
import path from 'path'

import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerNotationDiff } from '@shikijs/transformers'
// types
import type { CompileMDXResult } from 'next-mdx-remote/rsc'
import type { PostInfo, Frontmatter } from '@/types/post.types'
// constants
import { POSTS_DIR } from '@/constants/paths'

/**
 * 카테고리 리스트와 각 카테고리의 포스트 수를 가져온다.
 */
export async function getCategoriesWithPostCount(): Promise<{
  categories: Pick<PostInfo, 'category' | 'count'>[]
}> {
  try {
    const categoryPostCounts = await calculateCategoryCounts()
    const totalPostCount = categoryPostCounts.reduce(
      (acc, category) => acc + category.count,
      0
    )

    return {
      categories: [
        { category: 'all', count: totalPostCount },
        ...categoryPostCounts,
      ],
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error getting categories:', error.message) // 에러 메시지 출력
    } else {
      console.error('Error getting categories:', error) // 기타 에러
    }

    return {
      categories: [],
    }
  }
}

/**
 * 카테고리별 포스트 수를 계산하는 함수
 */
async function calculateCategoryCounts(): Promise<
  Pick<PostInfo, 'category' | 'count'>[]
> {
  // 카테고리 목록 가져오기
  const categoryNames = await fs.readdir(POSTS_DIR)

  // 각 카테고리에 대한 포스트 수 계산
  const postCountsPromises = categoryNames.map(async (category) => {
    const count = await getPostCount(category)
    return { category, count }
  })

  return Promise.all(postCountsPromises)
}

/**
 * 특정 카테고리의 포스트 수를 계산한다.
 */
async function getPostCount(category: string): Promise<number> {
  const categoryPath = path.join(POSTS_DIR, category)
  const files = await fs.readdir(categoryPath)
  return files.filter((file) => file.endsWith('.mdx')).length
}

/**
 * MDX 파일을 읽고 내용과 frontmatter를 반환하는 함수
 */
async function parseMdxFile(
  filePath: string
): Promise<CompileMDXResult<Frontmatter>> {
  const source = await fs.readFile(filePath, 'utf-8')

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
    source,
    options: {
      parseFrontmatter: true,

      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
        format: 'mdx',
      },
    },
  })
}

/**
 * 특정 카테고리에 속하는 모든 포스트의 메타데이터를 가져오는 함수
 */
export async function getPostMetadataByCategory(
  category: string
): Promise<Omit<PostInfo, 'count'>[]> {
  // 카테고리 디렉토리 경로
  const categoryPath = path.join(POSTS_DIR, category)

  // 카테고리 디렉토리 내의 파일 목록 조회
  const fileNames = await fs.readdir(categoryPath)

  // 각 포스트 파일에서 메타데이터 수집
  const postsByCategoryPromises = fileNames.map(async (fileName) => {
    const filePath = path.join(categoryPath, fileName)
    const { frontmatter } = await parseMdxFile(filePath)

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      category,
      slug: fileName.replace(/\.mdx$/, ''),
    }
  })

  // 특정 카테고리의 포스트 데이터를 평탄화하여 단일 배열로 반환
  const postsByCategories = await Promise.all(postsByCategoryPromises)

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return postsByCategories
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * 지정된 디렉토리에서 모든 포스트의 메타데이터를 가져오는 함수
 */
export async function getPosts(): Promise<Omit<PostInfo, 'count'>[]> {
  // 카테고리 목록 가져오기
  const categories = await fs.readdir(POSTS_DIR)

  // 각 카테고리의 포스트 메타데이터 가져오기
  const postsByCategoriesPromises = categories.map(getPostMetadataByCategory)
  const postsByCategories = await Promise.all(postsByCategoriesPromises)

  // 날짜를 기준으로 내림차순 정렬하여 최신 포스트가 최상위에 있도록 반환
  return postsByCategories
    .flat()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * slug에 따라 포스트 내용을 가져오는 비동기 함수
 */
export async function fetchPostBySlug(
  category: string,
  slug: string
): Promise<CompileMDXResult<Frontmatter>> {
  // 특정 슬러그에 해당하는 파일 경로 생성
  const filePath = path.join(POSTS_DIR, category, `${slug}.mdx`)
  return parseMdxFile(filePath)
}
