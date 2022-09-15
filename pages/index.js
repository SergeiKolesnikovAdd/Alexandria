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

const Home = () => {
  const videoContant = useRef(null);

  return (
    <>
      <main>
        <H1>SUPER PUPER TEXT</H1>
        <ButtonXLG>anime</ButtonXLG>
        <ButtonLG>anime</ButtonLG>
        <ButtonMD>anime</ButtonMD>
        <ButtonSM>anime</ButtonSM>
        <ButtonXSM>anime</ButtonXSM>
      </main>
    </>
  );
};

export default Home;
