import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 130%;
}
`
