'use client'

import Link from 'next/link'
import { styled } from 'styled-components'
// libs
import { PostSummary } from '@/src/types/post.types'

interface CategoryListProps {
  posts: PostSummary[]
}

/**
 * 블로그 카테고리 리스트
 */
const CategoryList = ({ posts }: CategoryListProps) => {
  const uniqueCategories = Array.from(
    new Set(posts.map((post) => post.category))
  )

  return (
    <Navigation>
      <List>
        <Item>
          <Link href="/blog">All</Link>
        </Item>
        {uniqueCategories.map((category) => (
          <Item key={category}>
            <Link href={`/blog/${category}`}>{category}</Link>
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

  li {
    display: inline-block;
  }
`

const Item = styled.li`
  display: inline-block;
  margin-right: 12px;

  &:last-of-type {
    margin-right: 0;
  }
`
