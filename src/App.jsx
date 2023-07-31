import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyles.jsx';
import Header from './Header.jsx'
import Content from './Content.jsx';
import Footer from './Footer.jsx';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
