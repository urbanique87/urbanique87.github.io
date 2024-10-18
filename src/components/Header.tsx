'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
// constants
import { LINKS } from '@/src/config/links'

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
        <nav>
          <List>
            {links.map((link) => (
              <Item key={link.path}>
                <StyledNavLink href={link.path} $isActive={link.isActive}>
                  {link.label}
                </StyledNavLink>
              </Item>
            ))}
          </List>
        </nav>
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

const List = styled.ul`
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  display: inline-block;
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0;
  }
`

const StyledNavLink = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  color: var(--primary);
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
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
