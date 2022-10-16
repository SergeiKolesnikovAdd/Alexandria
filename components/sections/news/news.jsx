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
} from "./news.style";
import { ButtonSM, H2, AccordionSmall, FormModal,} from "components";

import { fontSizes } from "styles";
import React, { useState } from "react";

export const News = ({ ...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <>
      <ContentWrapper {...props} id="about">
        <H3Styled mx="lg">Новости</H3Styled>
        <H2 mx="lg" mt="mdsm" style={{ fontSize: fontSizes.h2 }}>
          Неделя открытого доступа
        </H2>
        <MediaContainer>
          <TextContainer mt="lg" mr="mdsm">
            <StyledDescription>
              Начало работы проекта Alexandrina совпало с ежегодной
              международной неделей открытого доступа. Мы разделяем идею
              открытого доступа для всех и равенства в получении научных знаний,
              ведь Наука не сможет повлиять на мир, если мы будем держать ее под
              замком.
            </StyledDescription>
            <StyledDescription mt="lg">
              Неделя открытого доступа - это бесценный шанс связать глобальный
              импульс к открытому обмену знаниями с продвижением политических
              изменений и важностью социальных проблем, затрагивающих людей во
              всем мире. Именно поэтому с 24 по 30 октября мы бесплатно проводим
              аудиты научных журналов на возможность вступления в DOAJ и
              предоставляем скидку 20% для разработки журнала на платформе
              Alexandrina.
            </StyledDescription>
          </TextContainer>
          <ImgContainer>
            <ImgSlide />
          </ImgContainer>
        </MediaContainer>
        <ButtonSM
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
          }}
          mt="xlg"
          style={{ alignSelf: "center" }}>
          Оставить заявку
        </ButtonSM>
      </ContentWrapper>
      <FormModal
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};
