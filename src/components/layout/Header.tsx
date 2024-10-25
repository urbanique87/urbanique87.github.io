'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
// constants
import { LINKS } from '@/src/constants/links'

/**
 * 블로그 헤더 컴포넌트
 */
const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <StyledWrapper>
        <nav>
          <StyledList>
            {Object.entries(LINKS).map(([label, path]) => (
              <li key={path}>
                <StyledLink href={path} $isActive={isLinkActive(pathname, path)}>
                  {label}
                </StyledLink>
              </li>
            ))}
          </StyledList>
        </nav>
      </StyledWrapper>
    </header>
  )
}

/**
 * 링크 활성 상태를 판별하는 함수
 * @param {string} currentPath - 현재 경로
 * @param {string} linkPath - 비교할 링크 경로
 */
const isLinkActive = (currentPath: string, linkPath: string): boolean => {
  // 링크가 루트 경로인 경우 정확한 매칭
  if (linkPath === '/') {
    return currentPath === linkPath
  }

  // 링크가 루트가 아닌 경우, 시작 부분으로 매칭
  return currentPath.startsWith(linkPath)
}

export default Header

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: var(--layout-max-width);
  height: 80px;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  margin: 0 auto;
`

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style-type: none;
`

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  position: relative;
  color: var(--text-primary);
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 400;
  text-transform: uppercase;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    &:after {
      background-color: var(--text-primary);
    }
  `}

  @media (hover: hover) {
    &:hover:after {
      background-color: var(--text-primary);
    }
  }
`
