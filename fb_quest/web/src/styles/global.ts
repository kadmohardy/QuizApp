import { createGlobalStyle } from 'styled-components';
// background: linear-gradient(-90deg, #df643f, #a73728, #3d1f1d);

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f5f5;
    color: #262626;
    -webkit-font-smothing: antialised;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
