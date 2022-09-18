import {
  AboutBGImageWrapper,
  AboutSlideBGImage,
  ButtonRow,
  ContentWrapper,
  Link,
  StyledText,
  TextContainer,
  H3Styled,
} from "./about-slide.style";
import { ButtonSM, H2, Text, } from "components";

import {
  fontSizes
} from "styles";

export const AboutSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props} id="about">
      <H3Styled mx="lg">В чем наша идея</H3Styled>
      <H2 mx="lg" mt="mdsm" style={{ fontSize: fontSizes.h2 }}>
        Alexandrina—это
      </H2>
      <ButtonRow>
        <TextContainer mt="lg" mx="lg">
          <Text mr="lg">
            Комплексное решение для развития научных
            <br />
            рецензируемых журналов и книг открытого доступа.
            <br />
            Наше модульное программное обеспечение позволяет
            <br />
            вам вести издательскую деятельность
            <br />
            легко и просто.
          </Text>
          <Link href="/presentation" target="_blank">
            <StyledText>Презентация, PDF</StyledText>
          </Link>
        </TextContainer>
        <ButtonSM mx="lg">О платформе</ButtonSM>
      </ButtonRow>
      <AboutBGImageWrapper mt="xxlg">
        <AboutSlideBGImage />
      </AboutBGImageWrapper>
    </ContentWrapper>
  );
};
