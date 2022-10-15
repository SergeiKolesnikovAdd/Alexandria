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

export const Tab = ({
  id,
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
            setChooseItem(arrOfferInfoTab[index]);
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
          <svg src={m1img} />
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Техническая поддержка</DescText>
          <svg src={m2img} />
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Услуги рецензирования, редактирования, вёрстки и корректуры до
            финального PDF
          </DescText>
          <svg src={m3img} />
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Маркетинговая и рекламная поддержка
          </DescText>
          <svg src={m4img} />
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>Уникальный дизайн журнала</DescText>
          <svg src={m5img} />
        </DescItem>
        <DescItem isShowing={isShowing}>
          <DescText isShowing={isShowing}>
            Консультации и поддержка в индексации архивировании журналов в более
            чем 30 международных базах данных
          </DescText>
          <svg src={m6img} />
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
