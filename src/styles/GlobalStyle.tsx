import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
  display: none;
}
a {
  text-decoration: none;
  color: inherit;
}

body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
#root {
  width: 100%;
  height: 100vh;
}

`;

export default GlobalStyle;
