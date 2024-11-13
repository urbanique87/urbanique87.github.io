import 'styled-components'
// types
import type { Theme } from '@/styles/theme'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare module 'styled-components' {
  export type DefaultTheme = Theme
}
