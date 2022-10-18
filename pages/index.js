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

import { useState } from "react";
import React from "react";
import { Gratitude } from "components";

const Home = () => {
  const [isOpenForm, setOpenForm] = useState(false);

  return (
    <>
      <Header isOpenForm={isOpenForm} setOpenForm={setOpenForm} />
      <MainFirstSlide
        isOpenForm={isOpenForm}
        setOpenForm={setOpenForm}
        pt="xxxlg"
      />
      <AboutSlide pt="xxxlg" />
      <FocusSlide />
      <PlatformSlide
        isOpenForm={isOpenForm}
        setOpenForm={setOpenForm}
        mt="xxxlg"
      />
      <OfferSlide
        isOpenForm={isOpenForm}
        setOpenForm={setOpenForm}
        pt="xxxlg"
      />
      <AdvantageSlide />
      <News mt="xxxlg" />
      <FaqSlide pt="xxxlg" />
      <Footer />
    </>
  );
};

export default Home;
