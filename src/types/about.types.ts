export interface AuthorData {
  author: string
  description: string
}

export interface AboutData extends AuthorData {
  socialLinks: SocialLinks
}

export interface SocialLinks {
  ariaLabel: string
  links: LinkInfo[]
}

export interface LinkInfo {
  href: string
  label: string
  svg: string
}
