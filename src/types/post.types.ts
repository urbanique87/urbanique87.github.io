export interface PostBase {
  title: string
  description: string
  date: string // ISO 형식
}

export interface PostMetadata extends PostBase {
  [key: string]: unknown
}

export interface Category {
  category: string
}

export interface PostSummary extends PostBase, Category {
  slug: string
}

export interface PostCountByCategory extends Category {
  count: number
}

export interface CategoriesWithCounts {
  categories: PostCountByCategory[]
}
