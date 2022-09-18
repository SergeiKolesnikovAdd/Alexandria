import React, { useRef, useEffect, useState } from "react";

import {
  AdvantageSlide,
  FocusSlide,
  MainFirstSlide,
  OfferSlide,
  AboutSlide,
  FaqSlide,
  PlatformSlide,
  Header,
  Footer,
} from "components";

import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView();

  return (
    <>
      <Header />
      <MainFirstSlide inView={inView} pt="xxxlg"/>
      <AboutSlide mt="xxxlg"></AboutSlide>
      <FocusSlide mt="xxxlg"></FocusSlide>
      <PlatformSlide mt="xxxlg"></PlatformSlide>
      <OfferSlide mt="xxxlg"></OfferSlide>
      <AdvantageSlide mt="xlg"></AdvantageSlide>
      <FaqSlide mt="xxxlg"></FaqSlide>
      <Footer />
    </>
  );
};

export default Home;
