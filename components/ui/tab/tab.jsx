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
  formName,
  modalTitle,
  isOpenForm,
  setFormName,
  setModalTitle,
  setOpenForm,
  setColored,
  setChooseItem,
  ...props
}) => {

  return (
    <TabWrapper isShowing={isShowing} {...props}>
      <DescWrapper isShowing={isShowing}>
        <StyledCaption
          isShowing={isShowing}
          onClick={() => {
            setModalTitle("Пакет Комфорт");
            setOpen(true);
            setChooseItem(arrOfferInfo[index]);
            setColored(true);
            setModalTitle("Пакет Комфорт");
          }}
          mt="xxsm"
        >
          Подробнее
        </StyledCaption>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Разработка сайта журнала</DescText>
          {m1img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Техническое обеспечение системы рецензирования, редактирования и
          </DescText>
          {m2img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Консалтинг и обучение редакционной коллегии
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
            Маркетинговая и рекламная поддержка для привлечения качественного
            контента
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
            Продвижение и индексирование в базах данных
          </DescText>
          {m7img ? <Mark /> : <MarkGrey />}
        </DescItem>
        <NewButton
          isShowing={isShowing}
          onClick={(e) => {
            setFormName("Пакет Премиум");
            setModalTitle("Пакет Премиум");
            setOpenForm(true);
            setColored(true);
          }}
        >
          Начать работу
        </NewButton>
        <DescItem isShowing={isShowing} style={{ border: "none" }}></DescItem>
      </DescWrapper>
    </TabWrapper>
  );
};
