import {
  ContentSection,
  ContentWrapper,
  Indication,
  StyledText,
  Loader,
  Line,
  TextWrapper,
} from "./brief-first-slide.style";

import React, { useState } from "react";
import { Logo, Name, ButtonSM, Text } from "components";

export const BriefFirstSlide = ({ ...props }) => {

  return (
    <ContentSection>
      <ContentWrapper>
        <Indication pt="md">
          <Logo />
          <Name mt="mdsm" mb="md" />
          <Loader>
            <Line />
          </Loader>
        </Indication>
        <TextWrapper>
          <StyledText>Мы рады, что Вы обратились к нам.</StyledText>
          <Text mt="mdlg">
            Научно-издательская платформа Alexandrina поможет&nbsp;
            <br />
            сделать Вашу издательскую деятельность проще.&nbsp;
            <br />
            Просим заполнить всю необходимую для дальнейшей&nbsp;
            <br />
            работы информацию.
          </Text>
          <ButtonSM mt="mdlg">Начать</ButtonSM>
        </TextWrapper>
      </ContentWrapper>
    </ContentSection>
  );
};
