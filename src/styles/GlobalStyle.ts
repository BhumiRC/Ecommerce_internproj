import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color:rgb(10, 10, 10); /* Soft gray background */
    color: #222;               /* Dark readable text */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  // a {
  //   text-decoration: none;
  //   color: inherit;
  // }
`;

export default GlobalStyle;

