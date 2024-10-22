'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from 'styled-components'
// types
import { PostCountByCategory } from '@/src/types/post.types'

interface CategoryListProps {
  categories: PostCountByCategory[]
  totalPostCount: number
}

/**
 * 블로그 카테고리 리스트
 */
const CategoryList = ({ categories, totalPostCount }: CategoryListProps) => {
  const currentPath = usePathname()

  return (
    <StyledNav aria-label="post categories">
      <StyledList>
        <StyledItem $isActive={currentPath === '/posts'}>
          <Link href="/posts">All ({totalPostCount})</Link>
        </StyledItem>
        {categories.map(({ category, count }) => (
          <StyledItem
            key={category}
            $isActive={currentPath === `/posts/${category}`}
          >
            <Link href={`/posts/${category}`}>{`${category} (${count})`}</Link>
          </StyledItem>
        ))}
      </StyledList>
    </StyledNav>
  )
}

export default CategoryList

const StyledNav = styled.nav`
  margin-bottom: 2rem;
`

const StyledList = styled.ul`
  overflow-x: auto;
  padding: 0 1rem;
  list-style: none;
  white-space: nowrap;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`

const StyledItem = styled.li<{ $isActive: boolean }>`
  display: inline-block;
  margin-right: 12px;
  border: 1px solid var(--surface-alt);
  background: ${({ $isActive }) =>
    $isActive ? 'var(--surface-alt)' : 'transparent'};
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: capitalize;

  &:last-of-type {
    margin-right: 0;
  }
`
