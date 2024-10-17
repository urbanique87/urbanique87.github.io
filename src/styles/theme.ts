const theme = {
  fontSizes: {
    small: '0.875rem', // 14px
    medium: '1rem', // 16px
    large: '1.25rem', // 20px
    xlarge: '1.5rem', // 24px
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  },
  spacing: (factor: number) => `${factor * 4}px`,
} as const

export type Theme = typeof theme

export default theme
