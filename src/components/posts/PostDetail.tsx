import { CompileMDXResult } from 'next-mdx-remote/rsc'
// types
import type { Frontmatter } from '@/types/post.types'
// components
import Giscus from '@/components/posts/Giscus'
import { Divider } from '@/components/common/Divider/Divider'
// lib
import { formatCustomDate } from '@/lib/dateFormatter'
// styles
import '@/styles/markdown.css'
import classes from '@/components/posts/PostDetail.module.css'

/**
 * 포스트 컴포넌트
 */
export default function PostDetail({
  post,
}: {
  post: CompileMDXResult<Frontmatter>
}): JSX.Element {
  const { content, frontmatter } = post

  return (
    <article>
      <header className={classes['post-detail__header']}>
        <h1>{frontmatter.title}</h1>
        <time
          className={classes['post-detail__date']}
          dateTime={frontmatter.date}
        >
          {formatCustomDate(frontmatter.date)}
        </time>
      </header>

      <div className="markdown">{content}</div>
      <Divider />
      <Giscus />
    </article>
  )
}
