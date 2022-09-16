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
import { MainFirstSlide } from "../components/sections/main-first-slide";

const Home = () => {

  return (
    <>
      <main>
        <MainFirstSlide/>
      </main>
    </>
  );
};

export default Home;
