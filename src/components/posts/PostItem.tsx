'use client'

import Link from 'next/link'
import styled from 'styled-components'
// types
import type { PostSummary } from '@/src/types/post.types'

interface PostItemProps {
  post: PostSummary
}

/**
 * 포스트 리스트 단일 아이템 컴포넌트
 * @param {PostItemProps} props - 컴포넌트 Props
 * @param {PostSummary} props.post - 포스트 간단 정보
 * @param {string} props.post.category - 포스트 카테고리
 * @param {string} props.post.slug - 포스트 slug
 * @param {string} props.post.title - 포스트 제목
 * @param {string} props.post.date - 포스트 작성일
 * @param {string} props.post.plainContent - 포스트 원본 내용
 */
export default function PostItem({ post }: PostItemProps): JSX.Element {
  const { category, slug, title, date, plainContent } = post
  const excerpt = plainContent.substring(0, 100)

  return (
    <StyledItem>
      <Link href={`/posts/${category}/${slug}`} aria-label={title}>
        <StyledTitle>{title}</StyledTitle>

        <StyledExcerpt>{excerpt}</StyledExcerpt>
        <StyledCreatedAt>{date}</StyledCreatedAt>
      </Link>
    </StyledItem>
  )
}

const StyledItem = styled.li`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const StyledTitle = styled.h2`
  margin: 0 0 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: var(--text-primary);
`

const StyledExcerpt = styled.p`
  margin: 0 0 0.75rem;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: var(--text-primary);
`

const StyledCreatedAt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: var(--text-secondary);
`
