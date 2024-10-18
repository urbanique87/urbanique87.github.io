import type { ReactElement } from 'react'

export interface PostBase<T = unknown> {
  title: string
  date: string // ISO 형식
  content: ReactElement<T>
  category: string
}

export interface PostMetaData extends PostBase {
  [key: string]: unknown
}

export interface PostSummary extends PostBase {
  slug: string
  plainContent: string
}

export interface PostDetail extends PostBase {
  plainContent: string
}
