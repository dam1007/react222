import React from 'react';
import './index.scss';

import Header from './components/Header';
import Main from './components/Main';
import Slider from './components/Slider';
import Contents from './components/Contents';
import Image from './components/Image';
import ImgText from './components/ImgText';
import Youtube from './components/Youtube';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Slider />
        <Contents />
        <Image />
        <ImgText />
        <Youtube />
        <Review />
      </Main>
      <Footer />
    </>
  );
}

export default App
