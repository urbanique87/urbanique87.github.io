// types
import type { PostSummary } from '@/src/types/post.types'
// components
import PostItem from '@/src/components/PostItem'
// styles
import { PostList } from '@/src/styles/Post'

interface RenderPostsListProps {
  posts: PostSummary[]
}

/**
 * 포스트 목록을 렌더링하는 컴포넌트
 * @param {RenderPostsListProps} props - 컴포넌트 Props
 * @param {PostSummary} props.posts - 렌더링할 포스트 간단 정보
 */
export default function RenderPostList({
  posts,
}: RenderPostsListProps): JSX.Element {
  if (posts.length === 0) {
    return <p>작성된 글이 없습니다.</p>
  }

  return (
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.title} post={post} />
      ))}
    </PostList>
  )
}
