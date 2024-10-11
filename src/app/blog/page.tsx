// Dummy data for blog posts
const posts = [
  {
    slug: 'first-post',
    date: '2024-10-11',
    title: 'My First Post',
    summary: 'This is the summary of my first post.',
  },
  {
    slug: 'second-post',
    date: '2024-10-10',
    title: 'Another Interesting Topic',
    summary: 'Exploring new ideas and concepts.',
  },
]

export default function Blog() {
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.summary}</p>
            <a href={`/posts/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    </main>
  )
}
