import Link from 'next/link'

import { getPosts } from '@/src/lib/getPosts'

/**
 * 포스트 데이터를 가져오는 비동기 함수
 * @returns {Promise<Array<{
 *  slug: string;
 *  title: string;
 *  date: string;
 *  excerpt: string;
 * }>>}
 */
async function getStaticPosts() {
  const posts = await getPosts()
  return posts
}

/**
 * 블로그 목록 페이지
 * @returns {Promise<JSX.Element>}
 */
export default async function Blog() {
  const posts = await getStaticPosts()

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
              <p>{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
