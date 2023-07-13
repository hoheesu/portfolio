import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    /* Color */
    --color-icon: #85b6ff;
    --color-font: #d9d9d9;
  }
  a{
    text-decoration: none;
  }
  
`;

export default GlobalStyles;
