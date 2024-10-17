'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

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
      <HeaderWrapper>
        {links.map((link) => (
          <StyledNavLink
            key={link.path}
            href={link.path}
            $isActive={link.isActive}
          >
            {link.label}
          </StyledNavLink>
        ))}
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--secondary);
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: var(--layout-max-width);
  height: 60px;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;
`

const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  margin: 0 24px 0 0;
  color: var(--primary);
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: bold;
  text-transform: uppercase;

  &:last-child {
    margin: 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    width: 100%;
    height: 4px;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    &:after {
      background-color: var(--primary);
    }
  `}

  @media (hover: hover) {
    &:hover:after {
      background-color: var(--primary);
    }
  }
`
