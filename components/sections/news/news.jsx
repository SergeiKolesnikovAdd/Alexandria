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
import { ButtonXSM, H2, AccordionSmall,} from "components";

import { fontSizes } from "styles";
import React, { useState } from "react";


export const News = ({ ...props }) => {

  return (
    <ContentWrapper {...props} id="about">
      <H3Styled mx="lg">Новости</H3Styled>
      <H2 mx="lg" mt="mdsm" style={{ fontSize: fontSizes.h2 }}>
        Неделя открытого доступа
      </H2>
      {/* <ButtonXSM ml="lg" mt="md">
        О нас
      </ButtonXSM> */}
      <ButtonRow>
        <TextContainer mt="lg" mx="lg">
          <StyledDescription>
            Начало работы проекта Alexandrina совпало с ежегодной международной
            неделей открытого доступа. Мы приверженцы идеологии открытого
            доступа и равенства в получении научных знаний, так как Наука не
            сможет повлиять на мир, если мы будем держать ее под замком.
          </StyledDescription>
          {/* <Link href="/presentation" target="_blank">
            <StyledText>Презентация,&nbsp;PDF</StyledText>
          </Link> */}
        </TextContainer>
      </ButtonRow>
      <MediaContainer>
        <StyledDescription>
          Неделя открытого доступа - это бесценный шанс связать глобальный
          импульс к открытому обмену знаниями с продвижением политических
          изменений и важностью социальных проблем, затрагивающих людей во всем
          мире. Именно поэтому, в эту неделю (24-30 октября) мы бесплатно
          проводим аудиты ваших научных журналов на возможность вступления в
          DOAJ и предоставляем скидку 20% на разработку вашего журнала на нашей
          платформе Alexandrina.
        </StyledDescription>
        {/* <AccordionContainer>
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
        </AccordionContainer> */}
        {/* <ImgContainer>
          {contentAccordion.map(({ id, img }) => (
            <ImgSlide key={id} isOpen={chooseItem.id === id} src={img} />
          ))}
          {contentAccordion.map(({ id, span }) => (
            <StyledCaption
              mt="md"
              key={id}
              isOpen={chooseItem.id === id}
              span={span}
            >
              {span}
            </StyledCaption>
          ))}
        </ImgContainer> */}
        <ImgContainer>
          {/* <ImgSlide src={img.src} /> */}
        </ImgContainer>
      </MediaContainer>
    </ContentWrapper>
  );
};
