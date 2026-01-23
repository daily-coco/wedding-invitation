import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GowunDodum';
    src: url('/fonts/GowunDodum-Regular.woff2') format('woff2'),
         url('/fonts/GowunDodum-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  :root {
    color-scheme: light;
  }

  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'GowunDodum', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    background: #fff;
    min-width: 260px;
    min-height: 100vh;
    min-height: 100dvh;
    word-break: keep-all;
  }

  button {
    cursor: pointer;
    border:0;
    background: transparent;
  }


  /* 기본 요소 안정화 */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol, li {
    list-style: none;
  }

  /* 접근성: 키보드 포커스는 보이게 */
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  /* 모션 민감 사용자 배려 (FadeInSection 있으니 추천) */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
