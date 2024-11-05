import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialiased;
  line-height: 24.38px;
}

body, input, textarea, button{
  font: 400 1rem 'Montserrat', sans-serif; 
}
`
