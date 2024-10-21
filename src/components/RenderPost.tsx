'use client'

// types
import type { PostDetailContent } from '@/src/types/post.types'
// components
import Giscus from '@/src/components/Giscus'
// styles
import styled from 'styled-components'

interface RenderPostProps {
  post: PostDetailContent
}

/**
 * 포스트 렌더링 컴포넌트
 * @param {RenderPostProps} props - 컴포넌트 props
 * @param {PostDetailContent} props.post - 렌더링할 포스트 상세 정보
 * @param {string} props.post.title - 포스트 제목
 * @param {string} props.post.date - 포스트 작성 날짜
 * @param {import('next-mdx-remote').MDXRemoteSerializeResult} props.post.content - 포스트 내용
 */
export default function RenderPost({ post }: RenderPostProps): JSX.Element {
  const { title, date, content } = post

  return (
    <article>
      <Header>
        <h1>{title}</h1>
        <p>{date}</p>
      </Header>
      <div className="markdown-body">{content}</div>
      <Giscus />
    </article>
  )
}

const Header = styled.div`
  margin-bottom: 40px;
`
