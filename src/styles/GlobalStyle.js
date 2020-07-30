import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.gray0};
    color: ${({ theme }) => theme.colors.dark};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga","kern";
    font-variant-numeric: proportional-nums;
  }
  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
