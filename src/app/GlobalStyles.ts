'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit; 
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`

export default GlobalStyles
