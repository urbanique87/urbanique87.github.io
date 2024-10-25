'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { styled } from 'styled-components'
// types
import { PostCountByCategory } from '@/src/types/post.types'

interface CategoryListProps {
  categories: PostCountByCategory[]
}

/**
 * 블로그 카테고리 리스트
 */
const CategoryList = ({ categories }: CategoryListProps) => {
  const currentPath = usePathname()

  const categoryItems = categories.map(({ category, count }) => {
    const href = category === 'all' ? '/posts' : `/posts/${category}`
    const isActive = currentPath === href

    return (
      <Item key={category} $isActive={isActive}>
        <Link href={href}>{`${category} (${count})`}</Link>
      </Item>
    )
  })

  return (
    <Wrapper aria-label="post categories">
      <List>{categoryItems}</List>
    </Wrapper>
  )
}

export default CategoryList

const Wrapper = styled.nav`
  margin-bottom: 2rem;
`

const List = styled.ul`
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

const Item = styled.li<{ $isActive: boolean }>`
  display: inline-block;
  margin-right: 12px;
  border: 1px solid var(--surface-alt);
  background: ${({ $isActive }) => ($isActive ? 'var(--surface-alt)' : 'transparent')};
  padding: 4px 12px;
  border-radius: 12px;
  text-transform: capitalize;

  &:last-of-type {
    margin-right: 0;
  }
`
