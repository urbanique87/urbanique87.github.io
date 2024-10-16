import { MDXRemote } from 'next-mdx-remote/rsc'
// types
import type { PostDetail } from '@/src/types/post.types'
// components
import Giscus from '@/src/components/Giscus'
// styles
import { PostDate, PostTitle } from '@/src/styles/Post'

interface RenderPostProps {
  post: PostDetail
}

/**
 * 포스트 렌더링 컴포넌트
 * @param {RenderPostProps} props - 컴포넌트 props
 * @param {PostDetail} props.post - 렌더링할 포스트 상세 정보
 * @param {string} props.post.title - 포스트 제목
 * @param {string} props.post.date - 포스트 작성 날짜
 * @param {import('next-mdx-remote').MDXRemoteSerializeResult} props.post.rawContent - 포스트 원본 내용
 */
export default function RenderPost({ post }: RenderPostProps): JSX.Element {
  const { title, date, rawContent } = post

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostDate>{date}</PostDate>
      <Giscus />
      <MDXRemote source={rawContent} />
    </>
  )
}
