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
import { useInView } from "react-intersection-observer";
import { Footer } from "components";

const Home = () => {
const { ref, inView} = useInView();

  return (
    <>
      <main ref={ref}>
        <Header />
        <MainFirstSlide  inView={inView} />
        <AboutSlide></AboutSlide>
        <FocusSlide></FocusSlide>
        <PlatformSlide></PlatformSlide>
        <OfferSlide></OfferSlide>
        <AdvantageSlide></AdvantageSlide>
        <Footer/>
      </main>
    </>
  );
};

export default Home;
