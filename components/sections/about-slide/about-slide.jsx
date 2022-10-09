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
  StyledCaption,
} from "./about-slide.style";
import { ButtonXSM, H2, AccordionSmall,} from "components";

import { fontSizes } from "styles";
import React, { useState } from "react";

import { contentAccordion } from "./constant";

export const AboutSlide = ({ ...props }) => {
  const [chooseItem, setChooseItem] = useState(contentAccordion[0]);

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
          {contentAccordion.map(({ title, id, desc }, index) => (
            <AccordionSmall
              title={title}
              key={id}
              id={id}
              desc1={desc}
              isShowing={chooseItem.id === id}
              onClick={() => {
                setChooseItem(contentAccordion[index]);
              }}
            />
          ))}
        </AccordionContainer>
        <ImgContainer>
          {contentAccordion.map(({ id, img }) => (
            <ImgSlide key={id} isOpen={chooseItem.id === id} src={img} />
          ))}
          {contentAccordion.map(({ id, span }) => (
            <StyledCaption mt="md" key={id} isOpen={chooseItem.id === id}>
              {span}
            </StyledCaption>
          ))}
        </ImgContainer>
      </MediaContainer>
    </ContentWrapper>
  );
};
