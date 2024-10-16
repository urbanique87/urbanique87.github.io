'use client'

import styled from '@emotion/styled'

export const PostList = styled.ul`
  list-style: none;
`

export const PostListItem = styled.li`
  margin: 0 0 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const PostTitle = styled.h2`
  display: inline-block;
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
`

export const PostDate = styled.p`
  font-size: 0.875rem;
  color: #666;
`

export const PostExcerpt = styled.p`
  margin: 0 0 0.5rem;
  font-size: 0.875rem;
  color: #444;
`
