import Link from 'next/link'
// types
import type { PostInfo } from '@/types/post.types'
// lib
import { formatCustomDate } from '@/lib/dateFormatter'
// styles
import classes from '@/components/posts/PostList.module.css'

/**
 * 포스트 목록 컴포넌트
 */
export default function PostList({
  posts,
}: {
  posts: Omit<PostInfo, 'count'>[]
}): JSX.Element {
  return (
    <ul className={classes['post-list']}>
      {posts.map(({ category, slug, title, description, date }) => (
        <li className={classes['post-list__item']} key={`${category}-${slug}`}>
          <Link
            href={`/posts/${category}/${slug}`}
            aria-label={`${title} 포스트 바로 가기`}
          >
            <h2>{title}</h2>
            <p className={classes['post-list__description']}>{description}</p>
            <time className={classes['post-list__date']} dateTime={date}>
              {formatCustomDate(date)}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  )
}
