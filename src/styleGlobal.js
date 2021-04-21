import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    border: none;
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    font-weight: normal;

    > body {
      img {
        max-width: 100%;
      }
    }
  }
`;

export default GlobalStyle;