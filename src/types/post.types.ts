export interface Frontmatter {
  title: string
  description: string
  date: string
}

export interface PostInfo extends Frontmatter {
  category: string
  count: number
  slug: string
}
