import React from "react";
import MainPage from './Components/Page/MainPage';
import {createGlobalStyle} from 'styled-components';

import OnePage from './Components/Page/OnePage';
import TwoPage from './Components/Page/TwoPage';

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
      <TwoPage />
      
      
      
    </>
  );
}

export default App;
