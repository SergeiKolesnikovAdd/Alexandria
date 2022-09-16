import React, { useRef, useEffect, useState } from "react";
import {
  AwardMainTextBlock,
  Footer,
  Header,
  IntroMainTextBlock,
  PartnersLine,
  Slider,
  StartScreen,
  Preloader,
  Popovers,
} from "components";


import {
  AdvantageSlide,
  FocusSlide,
  MainFirstSlide,
  OfferSlide,
} from "components";

const Home = () => {

  return (
    <>
      <main>
        <MainFirstSlide />
        <FocusSlide></FocusSlide>
        <OfferSlide></OfferSlide>
        <AdvantageSlide></AdvantageSlide>
      </main>
    </>
  );
};

export default Home;
