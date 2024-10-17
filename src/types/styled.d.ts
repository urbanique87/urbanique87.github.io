import 'styled-components'
// types
import type { Theme } from '@/src/styles/theme'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
declare module 'styled-components' {
  export type DefaultTheme = Theme
}
