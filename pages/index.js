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
} from "components";

import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <MainFirstSlide pt="xxxlg" />
      <AboutSlide mt="xxxlg"></AboutSlide>
      <FocusSlide mt="xxxlg"></FocusSlide>
      {/* <PlatformSlide mt="xxxlg"></PlatformSlide> */}
      <OfferSlide mt="xxxlg"></OfferSlide>
      <AdvantageSlide mt="xlg"></AdvantageSlide>
      <FaqSlide mt="xxxlg"></FaqSlide>
      <Footer />
    </>
  );
};

export default Home;
