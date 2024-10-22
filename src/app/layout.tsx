// types
import type { Metadata } from 'next'
// components
import Header from '@/src/components/layout/Header'
import ClientThemeProvider from '@/src/components/posts/ClientThemeProvider'
// libs
import StyledComponentsRegistry from '@/src/lib/registry'
// styles
import '@/public/styles/globals.css'

export const metadata: Metadata = {
  title: '마이 블로그',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
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