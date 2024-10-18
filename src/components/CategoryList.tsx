'use client'

import Link from 'next/link'
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
  return (
    <Navigation>
      <List>
        <Item>
          <Link href="/blog">All ({totalPostCount})</Link>
        </Item>
        {categories.map(({ category, count }) => (
          <Item key={category}>
            <Link href={`/blog/${category}`}>{`${category} (${count})`}</Link>
          </Item>
        ))}
      </List>
    </Navigation>
  )
}

export default CategoryList

const Navigation = styled.nav`
  margin-bottom: 24px;
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
