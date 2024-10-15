'use client'

import Link from 'next/link'
// types
import type { PostSummary } from '@/src/types/Post'
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
 * 포스트 항목 컴포넌트
 * @param {PostItemProps} props - 포스트 정보를 포함하는 props
 * @returns {JSX.Element} 포스트 링크 및 메타데이터를 포함한 리스트 항목
 */
export default function PostItem({ post }: PostItemProps) {
  return (
    <PostListItem>
      <Link href={`/blog/${post.slug}`}>
        <PostTitle>{post.title}</PostTitle>
      </Link>
      <PostDate>{post.date}</PostDate>
      <PostExcerpt>{post.excerpt}</PostExcerpt>
    </PostListItem>
  )
}
