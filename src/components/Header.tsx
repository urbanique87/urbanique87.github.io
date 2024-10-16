'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from '@emotion/styled'

/**
 * 블로그 헤더 컴포넌트
 */
const Header = () => {
  const pathname = usePathname()

  // 경로와 활성 여부를 관리하는 객체
  const links = {
    '/blog': { label: 'blog', isActive: pathname.startsWith('/blog') },
    '/about': { label: 'about', isActive: pathname.startsWith('/about') },
  }

  return (
    <HeaderContainer>
      <HeaderInner>
        {Object.entries(links).map(([path, { label, isActive }]) => (
          <StyledNavLink key={path} href={path} isActive={isActive}>
            {label}
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
  position: relative; /* 상대 위치 지정 */
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
    bottom: -4px; /* 텍스트의 2px 아래에 위치 */
    width: 100%; /* 밑줄의 기본 너비 */
    height: 4px; /* 밑줄 두께 */
  }

  ${({ isActive }) =>
    isActive &&
    `
    &:after {
      background-color: #333; /* 활성화 상태의 밑줄 색상 */
    }
  `}

  @media (hover: hover) {
    &:hover:after {
      background-color: #333; /* hover 상태의 밑줄 색상 */
    }
  }
`
