import React, { useRef, useEffect, useState } from "react";

import {
  AdvantageSlide,
  FocusSlide,
  MainFirstSlide,
  OfferSlide,
  AboutSlide,
} from "components";
import { PlatformSlide } from "components";
import { Header } from "components";

const Home = () => {

  return (
    <>
      <main>
        <Header/>
        <MainFirstSlide />
        <AboutSlide></AboutSlide>
        <FocusSlide></FocusSlide>
        <PlatformSlide></PlatformSlide>
        <OfferSlide></OfferSlide>
        <AdvantageSlide></AdvantageSlide>
      </main>
    </>
  );
};

export default Home;
