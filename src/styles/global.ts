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
    font-family: 'GowunDodum', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen;
    font-weight: 400;
    color: #333;
    line-height: 1.5;
    background: #fff;
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   body {
    margin: 0;
    min-width: 260px;
    min-height: 100vh;
  }
`;
