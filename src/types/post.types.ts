import type { ReactElement } from 'react'

export interface PostBaseInfo {
  title: string
  date: string // ISO 형식
}

export interface PostMetadata extends PostBaseInfo {
  [key: string]: unknown
}

export interface PostDetailContent<T = unknown> extends PostBaseInfo {
  content: ReactElement<T>
  plainContent: string
}

export interface PostSummary extends PostBaseInfo, PostCategory {
  slug: string
  plainContent: string
}

export interface PostCategory {
  category: string
}

export interface PostCountByCategory extends PostCategory {
  count: number
}

export interface CategoriesWithCounts {
  categories: PostCountByCategory[]
  totalPostCount: number
}
