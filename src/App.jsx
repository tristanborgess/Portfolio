import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyles.jsx';
import Header from './Header.jsx'
import Content from './Content.jsx';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
    </>
  );
}

export default App;
