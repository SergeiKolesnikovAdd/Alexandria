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

import { H1 } from "components";
import { ButtonXLG } from "components";
import { ButtonSM } from "components";
import { ButtonMD } from "components";
import { ButtonLG } from "components";
import { ButtonXSM } from "components";
import { AdvantageSlide } from "components";
import { FocusSlide } from "components";
import { MainFirstSlide } from "components";

const Home = () => {

  return (
    <>
      <main>
        <MainFirstSlide />
        <FocusSlide></FocusSlide>
        <AdvantageSlide></AdvantageSlide>
      </main>
    </>
  );
};

export default Home;
