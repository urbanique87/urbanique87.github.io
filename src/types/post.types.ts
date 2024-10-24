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

export interface PostSummary extends PostBaseInfo, Category {
  slug: string
  plainContent: string
}

export interface Category {
  category: string
}

export interface PostCountByCategory extends Category {
  count: number
}

export interface CategoriesWithCounts {
  categories: PostCountByCategory[]
}
