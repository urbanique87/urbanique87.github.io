'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from '@emotion/styled'

const LINKS = {
  BLOG: '/blog',
  ABOUT: '/about',
}

type LinkItem = {
  label: string
  path: string
  isActive: boolean
}

/**
 * 블로그 헤더 컴포넌트
 */
const Header = () => {
  const pathname = usePathname()

  // 링크 항목 목록을 생성한다.
  const links: LinkItem[] = Object.entries(LINKS).map(([key, link]) => ({
    label: key,
    path: link,
    isActive: pathname.startsWith(link),
  }))

  return (
    <HeaderContainer>
      <HeaderInner>
        {links.map((link) => (
          <StyledNavLink
            key={link.path}
            href={link.path}
            isActive={link.isActive}
          >
            {link.label}
          </StyledNavLink>
        ))}
      </HeaderInner>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #f5f6f8;
`

const HeaderInner = styled.div`
  max-width: var(--layout-max-width);
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`

const StyledNavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive', // isActive prop 제외
})<{ isActive: boolean }>`
  position: relative;
  margin: 0 24px 0 0;
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    width: 100%;
    height: 4px;
  }

  ${({ isActive }) =>
    isActive &&
    `
    &:after {
      background-color: #333;
    }
  `}

  @media (hover: hover) {
    &:hover:after {
      background-color: #333;
    }
  }
`
