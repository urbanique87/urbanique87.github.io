import type { ReactNode } from 'react'
// types
import type { Metadata } from 'next'
// components
import Header from '@/src/components/layout/Header'
import ClientThemeProvider from '@/src/components/posts/ClientThemeProvider'
// libs
import StyledComponentsRegistry from '@/src/lib/registry'
// styles
import '@/public/styles/globals.css'

interface LayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'J.CHI Blog',
  description:
    '기술과 창의성이 만나는 지점을 탐구하며, 통찰력 있는 글과 개인적인 생각을 나누는 공간입니다.',
}

export default function RootLayout({ children }: Readonly<LayoutProps>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientThemeProvider>
            <Header />
            {children}
          </ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}