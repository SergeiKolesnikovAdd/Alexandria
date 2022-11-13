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

import {useState} from "react";
import React from "react";
import {NewsSlide} from "components";

const Home = () => {
    const [isColored, setColored] = useState(false);
    return (
        <>
            <Header setColored={setColored} isColored={isColored}/>
            <MainFirstSlide setColored={setColored} pt="xxxlg"/>
            <AboutSlide pt="xxxlg"/>
            <FocusSlide/>
            <PlatformSlide setColored={setColored} mt="xxxlg"/>
            <OfferSlide setColored={setColored} pt="xxxlg"/>
            <AdvantageSlide/>
            <News setColored={setColored} mt="xxxlg"/>
            <NewsSlide mt="xxxlg"/>
            <FaqSlide setColored={setColored} pt="xxxlg"/>
            <Footer/>
        </>
    );
};

export default Home;
