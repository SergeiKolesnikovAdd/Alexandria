import {
  AboutBGImageWrapper,
  AboutSlideBGImage,
  ButtonRow,
  ContentWrapper,
  Link,
  StyledText,
  TextContainer,
  H3Styled,
  StyledDescription,
  MediaContainer,
  AccordionContainer,
  SliderWrapper,
} from "./about-slide.style";
import { ButtonXSM, H2, AccordionSmall, Slider, } from "components";

import {
  fontSizes
} from "styles";
import { Accordion } from "components";

export const AboutSlide = ({ ...props }) => {
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
            title="Встроенный редактор Wax"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
          <AccordionSmall
            title="Рецензирование"
            mt="xsm"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
          <AccordionSmall
            title="Экспорт статьи в HTML, PDF, XML"
            mt="xsm"
            desc1="Преобразование статьи в самые востребованные форматы HTML, PDF, XML. Это означает, что после написания статьи через наш редактор, Вы можете скачать ее в любом из этих форматов."
          ></AccordionSmall>
        </AccordionContainer>
        {/* <AboutBGImageWrapper>
          <AboutSlideBGImage />
        </AboutBGImageWrapper> */}
        {/* <SliderWrapper>
          <Slider />
        </SliderWrapper> */}
      </MediaContainer>
    </ContentWrapper>
  );
};
