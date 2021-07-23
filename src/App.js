import React from "react";
import Header from './Components/Header/Header';
import Contents from './Components/Contents/Contents';

import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Header />
      <Contents />
    </>
  );
}

export default App;
