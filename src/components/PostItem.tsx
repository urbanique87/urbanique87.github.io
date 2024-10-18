'use client'

import Link from 'next/link'
// types
import type { PostSummary } from '@/src/types/post.types'
// styles
import {
  PostDate,
  PostExcerpt,
  PostListItem,
  PostTitle,
} from '@/src/styles/Post'

interface PostItemProps {
  post: PostSummary
}

/**
 * 포스트 리스트 단일 아이템 컴포넌트
 * @param {PostItemProps} props - 컴포넌트 Props
 * @param {PostSummary} props.post - 포스트 간단 정보
 * @param {string} props.post.slug - 포스트 slug
 * @param {string} props.post.title - 포스트 제목
 * @param {string} props.post.plainContent - 포스트 원본 내용
 * @param {string} props.post.date - 포스트 작성일
 */
export default function PostItem({ post }: PostItemProps): JSX.Element {
  const { category, slug, title, plainContent, date } = post
  const excerpt = plainContent.substring(0, 100)

  return (
    <PostListItem>
      <Link href={`/blog/${category}/${slug}`}>
        <PostTitle>{title}</PostTitle>
      </Link>
      <PostExcerpt>{excerpt}</PostExcerpt>
      <PostDate>{date}</PostDate>
    </PostListItem>
  )
}
