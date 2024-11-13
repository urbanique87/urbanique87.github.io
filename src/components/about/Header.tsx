'use client'

import { styled } from 'styled-components'
// types
import { AuthorData } from '@/types/about.types'

/**
 * 어바웃 헤더 컴포넌트
 */
export default function Header({ author, description }: AuthorData): JSX.Element {
  return (
    <Container>
      <Author>{author}</Author>
      <Introduce dangerouslySetInnerHTML={{ __html: description }}></Introduce>
    </Container>
  )
}

const Container = styled.header`
  margin-bottom: 1.25rem;
`

const Author = styled.h1`
  margin-bottom: 1.75rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const Introduce = styled.p`
  line-height: 1.6;
  font-size: 1rem;
  color: var(--text-secondary);
`
