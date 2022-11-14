import { Text } from "components";
import { useState } from "react";
import Link from "next/link";
import { colors } from "styles";

import {
  TabWrapper,
  StyledCaption,
  DescWrapper,
  DescItem,
  DescText,
  NewButton,
  StyledText,
} from "./tab.style";
import { Mark, MarkGrey } from "components";

export const Tab = ({
  id,
  m1img,
  m2img,
  m3img,
  m4img,
  m5img,
  m6img,
  m7img,
  isShowing,
  setOpenForm,
  setOpen,
  index,
  setChooseItem,
  arrOfferInfo,
  formName,
  ...props
}) => {
  return (
    <TabWrapper isShowing={isShowing} {...props}>
      <DescWrapper isShowing={isShowing}>
        <StyledCaption
          isShowing={isShowing}
          onClick={() => {
            setOpen(true);
            setChooseItem(arrOfferInfo[index]);
          }}
          mt="xxsm">
          Подробнее
        </StyledCaption>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Разработка сайта журнала согласно требованиям международных
            наукометрических баз данных
          </DescText>
          {m1img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Техническое обеспечение, консалтинг и обучение редакционной коллегии
          </DescText>
          {m2img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Аутсорсинг сопровождения научной рукописи от рецензирования до
            публикации
          </DescText>
          {m3img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Переводы и редакторские услуги специалистов
          </DescText>
          {m4img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Маркетинговая и рекламная поддержка
          </DescText>
          {m5img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Индивидуальный дизайн журнала
          </DescText>
          {m6img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Комплексная помощь в продвижении и индексировании журнала в
            международных базах данных
          </DescText>
          {m7img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <NewButton
          isShowing={isShowing}
          onClick={() => {
            setOpenForm(true);
          }}>
          Начать работу
        </NewButton>
        <DescItem isShowing={isShowing} style={{ border: "none" }}></DescItem>
      </DescWrapper>
    </TabWrapper>
  );
};
