import {
  AboutBGImageWrapper,
  AboutSlideBGImage,
  ButtonRow,
  ContentWrapper,
  Link,
  StyledText,
  TextContainer,
  H1Styled,
} from "./about-slide.style";
import { ButtonSM, H2, H1, Text, } from "components";

import {
  fontSizes
} from "styles";

export const AboutSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props}>
      <Text mx="lg">В чем наша идея</Text>
      <H1Styled mx="lg" mt="mdsm" style={{ fontSize: fontSizes.h2 }}>
        Alexandrina—это
      </H1Styled>
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
