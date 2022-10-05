import {
  ButtonRow,
  ContentWrapper,
  Link,
  StyledText,
  TextContainer,
  H3Styled,
  StyledDescription,
  MediaContainer,
  AccordionContainer,
  ImgSlide,
  ImgContainer,
} from "./about-slide.style";
import { ButtonXSM, H2, AccordionSmall, Slider } from "components";

import { fontSizes } from "styles";
import React, { useState } from "react";
import img1 from "public/first-slide.png";
import img2 from "public/second-slide.png";
import img3 from "public/third-slide.png";

export const AboutSlide = ({ ...props }) => {
  const [currentAccordion, setCurrentAccordion] = useState(-1);
  // const [currentImg, setCurrentImg] = useState(-1);
  // const isShowing = currentImg === id;
  return (
    <ContentWrapper {...props} id="about">
      <H3Styled mx="lg">В чем наша идея</H3Styled>
      <H2 mx="lg" mt="mdsm" style={{ fontSize: fontSizes.h2 }}>
        Alexandrina—это
      </H2>
      <ButtonXSM ml="lg" mt="md">
        О нас
      </ButtonXSM>
      <ButtonRow>
        <TextContainer mt="lg" mx="lg">
          <StyledDescription>
            Комплексное решение для развития научных рецензируемых журналов и
            книг открытого доступа. Наше модульное программное обеспечение
            позволяет вам вести издательскую деятельность легко и просто.
          </StyledDescription>
          <Link href="/presentation" target="_blank">
            <StyledText>Презентация,&nbsp;PDF</StyledText>
          </Link>
        </TextContainer>
      </ButtonRow>
      <MediaContainer mt="xxlg" px="mdlg">
        <AccordionContainer>
          <AccordionSmall
            id="1"
            currentAccordion={currentAccordion}
            setCurrentAccordion={setCurrentAccordion}
            title="Встроенный редактор Wax"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
          <AccordionSmall
            id="2"
            setCurrentAccordion={setCurrentAccordion}
            currentAccordion={currentAccordion}
            title="Рецензирование"
            mt="xsm"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
          <AccordionSmall
            id="3"
            setCurrentAccordion={setCurrentAccordion}
            currentAccordion={currentAccordion}
            title="Экспорт статьи в HTML, PDF, XML"
            mt="xsm"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
        </AccordionContainer>
        <ImgContainer>
          <ImgSlide
            currentAccordion={currentAccordion}
            onClick={() => {
              setCurrentImg?.(id);
            }}
            // isShowing={isShowing}
            id="1"
            src={img1.src}
          />
          <ImgSlide
            currentAccordion={currentAccordion}
            onClick={() => {
              setCurrentImg?.(id);
            }}
            // isShowing={isShowing}
            id="2"
            src={img2.src}
          />
          <ImgSlide
            currentAccordion={currentAccordion}
            onClick={() => {
              setCurrentImg?.(id);
            }}
            // isShowing={isShowing}
            id="3"
            src={img3.src}
          />
        </ImgContainer>
      </MediaContainer>
    </ContentWrapper>
  );
};
