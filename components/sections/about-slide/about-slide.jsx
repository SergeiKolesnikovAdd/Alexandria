import {
  AboutBGImageWrapper,
  AboutSlideBGImage,
  ButtonRow,
  ContentWrapper,
  Link,
  StyledText,
  TextContainer,
} from "./about-slide.style";
import { ButtonSM, H2, Text } from "components";

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
