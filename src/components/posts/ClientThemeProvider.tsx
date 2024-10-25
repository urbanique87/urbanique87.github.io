'use client'

import { ThemeProvider } from 'styled-components'
// types
import type { ReactNode } from 'react'
// styles
import theme from '@/src/styles/theme'

interface ClientThemeProviderProps {
  children: ReactNode
}

/**
 * ClientThemeProvider
 * @param {Object} props - 컴포넌트의 props.
 * @param {ReactNode} props.children - 렌더링할 자식 컴포넌트.
 */
export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}