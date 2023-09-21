import React, { useState, useEffect } from 'react';
import GlobalStyle from './GlobalStyles.jsx';
import Header from './Header.jsx'
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import styled from 'styled-components';
import bgImage from './assets/001.jpg';
import { Helmet } from 'react-helmet';
import preview from './assets/socialPreview.png';


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Helmet>
      <meta property="og:title" content="Tristan Borges Solari" />
      <meta property="og:description" content="Learn a bit about me and my design and coding work!" />
      <meta property="og:image" content={preview} />
      </Helmet>
        <Header />
        <Content />
        {/* <BackgroundContainer bgImage={bgImage} /> */}
        <Footer />
    </>
  );
}

// const BackgroundContainer = styled.div`
// background-image: url(${props => props.bgImage});
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     height: 100px; 
//     position: relative;
//     margin-top: -50px;
//     z-index: -1;
    
// `;

export default App;
