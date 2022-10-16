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
          <DescText isShowing={isShowing}>
            Сайт журнала с системой рецензирования и редакционного управления
            соответствующий стандартам МНБД (Scopus, Web of Science, DOAJ, DOAB)
          </DescText>
          {m1img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Техническая поддержка</DescText>
          {m2img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Услуги рецензирования, редактирования, вёрстки и корректуры до
            финального PDF
          </DescText>
          {m3img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Маркетинговая и рекламная поддержка
          </DescText>
          {m4img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Уникальный дизайн журнала</DescText>
          {m5img && <Mark />}
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Консультации и поддержка в индексации архивировании журналов в более
            чем 30 международных базах данных
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
