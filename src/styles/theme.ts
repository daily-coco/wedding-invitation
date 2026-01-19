export const theme = {
  space: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    7: '1.75rem', // 28px
    8: '2rem', // 32px
    10: '2.5rem', // ⭐ 기본 섹션 간격 (40px)
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
  },
  layout: {
    maxWidth: '45rem', // 720px (760px = 47.5rem)
    pagePaddingX: '1.25rem',
  },
  bp: {
    md: 768,
    lg: 1024,
  },
  typography: {
    body: {
      fontSize: '1rem', //16px
      lineHeight: 1.6,
      fontWeight: 400,
    },
    caption: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.25rem', // 20px
      lineHeight: 1.4,
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.563rem', // 25px
      lineHeight: 1.35,
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.953rem', // 31px
      lineHeight: 1.3,
      fontWeight: 500,
    },
    h1: {
      fontSize: '2.441rem', // 39px
      lineHeight: 1.2,
      fontWeight: 500,
    },
  },
} as const;
export type AppTheme = typeof theme;
