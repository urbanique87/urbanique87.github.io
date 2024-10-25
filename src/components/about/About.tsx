'use client'

import styled from 'styled-components'
// data
import about from '@/src/data/about.json'

export interface About {
  author: string
  description: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  href: string
  label: string
  svg: string
}

/**
 * 어바웃 컴포넌트
 */
export default function About() {
  const { author, description, socialLinks } = about as About

  return (
    <StyledArticle>
      <Header author={author} description={description} />
      <StyledSeparator />
      <SocialLinks socialLinks={socialLinks} ariaLabel="social links" />
    </StyledArticle>
  )
}

/**
 * 어바웃 헤더 컴포넌트
 */
const Header = ({ author, description }: { author: string; description: string }) => (
  <StyledHeader>
    <StyledAuthor>{author}</StyledAuthor>
    <StyledDescription>{description}</StyledDescription>
  </StyledHeader>
)

/**
 * 어바웃 소셜 링크 컴포넌트
 */
const SocialLinks = ({
  socialLinks,
  ariaLabel,
}: {
  socialLinks: SocialLink[]
  ariaLabel: string
}) => (
  <StyledSocialLinks aria-label={ariaLabel}>
    <ul>
      {socialLinks.map(({ href, label, svg }) => (
        <li key={label}>
          <StyledSocialLink
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span dangerouslySetInnerHTML={{ __html: svg }} />
          </StyledSocialLink>
        </li>
      ))}
    </ul>
  </StyledSocialLinks>
)

const StyledArticle = styled.article`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 3rem 1rem;
`

const StyledHeader = styled.header`
  margin-bottom: 1.25rem;
`

const StyledAuthor = styled.h1`
  margin-bottom: 1.75rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const StyledDescription = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--text-secondary);
`

const StyledSocialLinks = styled.nav`
  margin-bottom: 2rem;

  ul {
    display: flex;
    gap: 0.75rem;
    list-style: none;
  }
`

const StyledSocialLink = styled.a`
  display: inline-block;
  color: var(--text-primary);
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`

const StyledSeparator = styled.hr`
  border: none;
  border-top: 1px solid var(--surface-alt);
  margin: 1.5rem 0;
`
