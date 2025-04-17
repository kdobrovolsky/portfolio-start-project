import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

section{
    padding:150px 0px;

    @media ${theme.media.mobile}{
    padding: 50px 0px
    }

    @media ${theme.media.tablet}{
    padding: 80px 0px
    }
}

body {
  margin: 0;
  font-family: 'Poppins',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

a {
    text-decoration:none;
}

ul {
    list-style:none;

}

button {
    background-color:unset;
    border: none;
}
`;
