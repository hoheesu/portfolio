import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    /* Color */
    --color-icon: #85b6ff;
    --color-box: #d9d9d9;

  }
  
`;

export default GlobalStyles;
