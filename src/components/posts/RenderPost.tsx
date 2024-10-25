'use client'

// types
import type { PostMetadata } from '@/src/types/post.types'
// components
import Giscus from '@/src/components/posts/Giscus'
// styles
import styled from 'styled-components'
import { CompileMDXResult } from 'next-mdx-remote/rsc'

interface RenderPostProps {
  post: CompileMDXResult<PostMetadata>
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
  const {
    content,
    frontmatter: { title, date },
  } = post

  return (
    <Article>
      <Header>
        <h1>{title}</h1>
        <p>{date}</p>
      </Header>
      <div className="markdown-body">{content}</div>
      <Separator />
      <Giscus />
    </Article>
  )
}

const Header = styled.div`
  margin-bottom: 2.5rem;
`

const Article = styled.article`
  padding: 0 1rem;
`
const Separator = styled.hr`
  border: none;
  border-top: 1px solid var(--surface-alt);
  margin: 3rem 0;
`
