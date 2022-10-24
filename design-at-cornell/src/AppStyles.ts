import { createGlobalStyle } from 'styled-components';
import { mobileBreakpoint } from './constants/styling';
import mobilePlaceholder from './static/images/mobile-placeholder.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    min-width: 320px;
    overflow: auto;
  }

  ${
    process.env.NODE_ENV === 'production' &&
    `
  @media (max-width: ${mobileBreakpoint}px) {
    body {
      background-image: url(${mobilePlaceholder});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }

    div {
      display: none;
    }
  }
  `
  }
`;
