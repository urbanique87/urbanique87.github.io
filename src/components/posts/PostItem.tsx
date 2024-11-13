'use client'

import Link from 'next/link'
import styled from 'styled-components'
// types
import type { PostSummary } from '@/types/post.types'

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
 * @param {string} props.post.description - 포스트 요약 설명
 * @param {string} props.post.date - 포스트 작성일
 */
export default function PostItem({ post }: PostItemProps): JSX.Element {
  const { category, slug, title, description, date } = post

  return (
    <Item>
      <Link href={`/posts/${category}/${slug}`} aria-label={title}>
        <Title>{title}</Title>

        <Description>{description}</Description>
        <CreatedAt>{date}</CreatedAt>
      </Link>
    </Item>
  )
}

const Item = styled.li`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const Title = styled.h2`
  margin: 0 0 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: var(--text-primary);
`

const Description = styled.p`
  margin: 0 0 0.75rem;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: var(--text-primary);
`

const CreatedAt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: var(--text-secondary);
`
