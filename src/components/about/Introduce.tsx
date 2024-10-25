'use client'

import styled from 'styled-components'

/**
 * About 소개 컴포넌트
 */
export default function Introduce() {
  return (
    <StyledArticle>
      <Header />
      <SocialLinks ariaLabel="social links" />
      <StyledSeparator />
      <Navigation ariaLabel="additional links" />
    </StyledArticle>
  )
}

const Header = () => (
  <StyledHeader>
    <StyledAuthor>JH</StyledAuthor>
    <StyledDescription>
      복잡함을 단순함으로 바꾸고, 사용자에게 진정으로 의미있는 경험을 제공하는 것을 추구합니다.
      <br />
      오늘의 도전이 내일의 영감으로 이어지는 순간들을 기록합니다.
    </StyledDescription>
  </StyledHeader>
)

const SocialLinks = ({ ariaLabel }: { ariaLabel: string }) => (
  <StyledSocialLinks aria-label={ariaLabel}>
    <ul>
      {socialLinks.map(({ href, label, svg }) => (
        <li key={label}>
          <StyledSocialLink href={href} aria-label={label}>
            {svg}
          </StyledSocialLink>
        </li>
      ))}
    </ul>
  </StyledSocialLinks>
)

const Navigation = ({ ariaLabel }: { ariaLabel: string }) => (
  <StyledNav aria-label={ariaLabel}>
    <ul>
      <StyledNavItem>
        <StyledNavLink href="/posts" aria-label="Posts">
          🔗 기록
        </StyledNavLink>
      </StyledNavItem>
    </ul>
  </StyledNav>
)

const socialLinks = [
  {
    href: 'mailto:jungheeyov@gmail.com',
    label: '이메일 보내기',
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
        <path d="M22 6L12 13 2 6" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/urbanique87',
    label: 'GitHub Repository',
    svg: (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.37 0-.19-.01-.73-.01-1.42-2.23.48-2.7-1.07-2.7-1.07-.36-.91-.87-1.15-.87-1.15-.71-.49.05-.48.05-.48.78.05 1.25.8 1.25.8.69 1.18 1.81.84 2.25.64.07-.5.27-.84.49-1.03-1.72-.2-3.53-.86-3.53-3.83 0-.85.3-1.55.79-2.1-.08-.2-.34-1.02.07-2.12 0 0 .66-.21 2.15.79A7.55 7.55 0 018 3.2c.66.003 1.32.09 1.95.26 1.49-1 2.15-.79 2.15-.79.41 1.1.15 1.92.07 2.12.49.55.79 1.25.79 2.1 0 2.97-1.81 3.63-3.53 3.83.23.2.43.6.43 1.22 0 .88-.01 1.59-.01 1.8 0 .2.15.45.55.37C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
]

const StyledArticle = styled.article`
  max-width: var(--layout-max-width);
  margin: 0 auto;
  padding: 0 1rem;
`

const StyledHeader = styled.header`
  margin-bottom: 24px;
`

const StyledAuthor = styled.h1`
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: bold;
`

const StyledDescription = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--text-secondary);
`

const StyledSocialLinks = styled.nav`
  margin-bottom: 32px;

  ul {
    display: flex;
    gap: 12px;
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
  margin: 24px 0;
`

const StyledNav = styled.nav`
  margin-bottom: 16px;

  ul {
    display: flex;
    gap: 16px;
  }
`

const StyledNavItem = styled.li`
  list-style: none;
`

const StyledNavLink = styled.a`
  text-decoration: none;
  color: var(--text-primary);
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`
