import type { PostSummary } from '@/src/types/Post'
import PostItem from '@/src/components/PostItem'
import { PostList } from '@/src/styles/Post'

interface RenderPostsProps {
  posts: PostSummary[]
}

/**
 * 포스트 목록을 렌더링하는 컴포넌트
 * @param {RenderPostsProps} props - 컴포넌트의 프로퍼티
 * @returns {JSX.Element} 포스트 목록 또는 '작성된 글이 없습니다.' 메시지를 포함하는 JSX 요소
 */
export default function RenderPosts({ posts }: RenderPostsProps) {
  if (posts.length === 0) {
    return <p>작성된 글이 없습니다.</p>
  }

  return (
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </PostList>
  )
}
