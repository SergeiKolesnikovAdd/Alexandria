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
} from "./tab.style";
import { Mark } from "components";

export const Tab = ({
  id,
  title,
  m1img,
  m2img,
  m3img,
  m4img,
  m5img,
  m6img,
  isShowing,
  ...props
}) => {
  return (
    <TabWrapper isShowing={isShowing} {...props}>
      <DescWrapper isShowing={isShowing}>
        <StyledCaption
          isShowing={isShowing}
          onClick={() => {
            setOpen(true);
            setChooseItemTab(arrOfferInfoTab[index]);
          }}
          mt="xxsm"
        >
          Подробнее
        </StyledCaption>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Разработка сайта журнала</DescText>
          {m1img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Техническое обеспечение системы рецензирования, редактирования и
          </DescText>
          {m2img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Консалтинг и обучение редакционной коллегии
          </DescText>
          {m3img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Переводы и редакторские услуги специалистов
          </DescText>
          {m4img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Маркетинговая и рекламная поддержка для привлечения качественного
            контента
          </DescText>
          {m5img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Индивидуальный дизайн журнала
          </DescText>
          {m6img && <Mark />}
        </DescItem>
        <NewButton
          isShowing={isShowing}
          onClick={() => {
            setOpenForm(true);
          }}
        >
          Начать работу
        </NewButton>
        <DescItem isShowing={isShowing} style={{ border: "none" }}></DescItem>
      </DescWrapper>
    </TabWrapper>
  );
};
