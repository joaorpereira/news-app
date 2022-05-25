import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
  
  * {
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none ;
    color:inherit;
  }

  button{
    cursor: pointer;
  } 

`
