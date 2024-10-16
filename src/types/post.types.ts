export interface PostBase {
  title: string
  date: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PostMetaData extends PostBase {}

export interface PostSummary extends PostBase {
  slug: string
  excerpt: string
}

export interface PostDetail extends PostBase {
  content: string
}
