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
} from "components";

const Home = () => {

  return (
    <>
      <main>
        <Header />
        <MainFirstSlide mt="xxlg" />
        <AboutSlide mt="xxxlg"></AboutSlide>
        <FocusSlide mt="xxxlg"></FocusSlide>
        <PlatformSlide mt="xxxlg"></PlatformSlide>
        <OfferSlide mt="xxxlg"></OfferSlide>
        <AdvantageSlide mt="xlg"></AdvantageSlide>
        <FaqSlide mt="xxxlg"></FaqSlide>
      </main>
    </>
  );
};

export default Home;
