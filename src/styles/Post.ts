'use client'

import styled from 'styled-components'

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
  position: relative;
  display: inline-block;
  margin: 0 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: var(--primary);

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
  }

  @media (hover: hover) {
    &:hover:after {
      background-color: var(--primary);
    }
  }
`

export const PostDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: var(--primary);
`

export const PostExcerpt = styled.p`
  margin: 0 0 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: var(--primary);
`
