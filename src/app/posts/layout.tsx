import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '마이 블로그',
  description: '개발, 학습, 그리고 생활',
}

export default function PostsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return <>{children}</>
}
