import { Caption, H3, H2, ButtonSM, Text, } from "components";
import Link from "next/link";
import {
  AboutBGImageWrapper,
  AboutSlideBGImage,
  ContentWrapper,
  TextContainer,
  StyledText,
  ButtonRow,
} from "./about-slide.style";

import { propTypesMargin, propTypesPadding } from "../../types";

export const AboutSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props}>
      <Text mx="lg">В чем наша идея</Text>
      <H2 mx="lg" mt="mdsm">
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
          <Link href="/">
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

AboutSlide.propTypes = {
  propTypesMargin,
  propTypesPadding,
};