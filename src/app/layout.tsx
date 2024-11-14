import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import type { ReactNode } from 'react'
// types
import type { Metadata } from 'next'
// components
import Header from '@/components/layout/Header'
// styles
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'J.CHI Blog',
  description:
    '기술과 창의성이 만나는 지점을 탐구하며, 통찰력 있는 글과 개인적인 생각을 나누는 공간입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </head>
      <body>
        <Header />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  )
}
