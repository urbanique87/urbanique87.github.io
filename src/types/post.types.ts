import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface PostBase {
  title: string
  date: string // ISO 형식
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PostMetaData extends PostBase {}

export interface PostSummary extends PostBase {
  slug: string
  rawContent: string // 원본 콘텐츠 (Markdown 형식)
}

export interface PostDetail extends PostBase {
  content: MDXRemoteSerializeResult
  rawContent: string // 원본 콘텐츠 (Markdown 형식)
}
