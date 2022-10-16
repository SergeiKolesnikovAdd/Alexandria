import {
  AboutSlide,
  AdvantageSlide,
  FaqSlide,
  FocusSlide,
  Footer,
  Header,
  MainFirstSlide,
  OfferSlide,
  PlatformSlide,
  News,
} from "components";

import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <MainFirstSlide pt="xxxlg" />
      <AboutSlide pt="xxxlg" />
      <FocusSlide/>
      <PlatformSlide mt="xxxlg"/>
      <OfferSlide pt="xxxlg"/>
      <AdvantageSlide/>
      <News mt="xxxlg"/>
      <FaqSlide pt="xxxlg"/>
      <Footer />
    </>
  );
};

export default Home;
