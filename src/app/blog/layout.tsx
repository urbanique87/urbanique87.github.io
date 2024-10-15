export const metadata = {
  title: '마이 블로그',
  description: '개발, 학습, 그리고 생활',
}

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
