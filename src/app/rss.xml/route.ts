// config
import { BASE_URL } from '@/config/constants/paths'
// libs
import { getPosts } from '@/lib/post'

export async function GET(): Promise<Response> {
  const posts = await getPosts()

  const rssItems = posts
    .map(
      (post) => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${`${BASE_URL}/posts/${post.category}/${post.slug}`}</link>
          <description><![CDATA[${post.description || ''}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid isPermaLink="true">${`${BASE_URL}/posts/${post.category}/${post.slug}`}</guid>
        </item>
      `
    )
    .join('')

  const rssFeed = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title><![CDATA[J.CHI Blog]]></title>
        <link>${BASE_URL}</link>
        <description><![CDATA[기술과 창의성이 만나는 지점을 탐구하며, 통찰력 있는 글과 개인적인 생각을 나누는 공간입니다.]]></description>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>
  `

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
