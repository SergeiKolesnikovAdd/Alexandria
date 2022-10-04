import { useState } from "react";
import Link from "next/link";
import { H2, Text, ButtonXLG, OfferModal } from "components";
import { arrOfferInfo } from "./constant";
import { Comfort, Mark, Premium, Standart, } from "../../common";

import {
  ContentWrapper,
  DescColumn,
  DescItem,
  PackageItem,
  ButtonRow,
  TableOffer,
  PackageColumn,
  NewButton,
  StyledCaption,
  H3Styled,
  StyledText,
} from "./offer-slide.style";


export const OfferSlide = ({ ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [chooseItem, setChooseItem] = useState({});

  return (
    <ContentWrapper {...props} id="offer">
      <H3Styled mb="lg" mx="lg">
        Удобное ценообразование
      </H3Styled>
      <H2 mt="mdsm" mx="lg">
        Пакеты услуг
      </H2>
      <ButtonRow px="lg">
        <Text mt="lg">
          Мы предлагаем оптимальные пакеты комплексных
          <br />
          услуг, а также возможность разработать персональное
          <br />
          предложение, исходя из индивидуальных
          <br />
          потребностей издателя
        </Text>
        <ButtonXLG mt="lg">Получить индивидуальное предложение</ButtonXLG>
      </ButtonRow>
      <TableOffer px="lg">
        <DescColumn>
          <DescItem></DescItem>
          <DescItem>
            Сайт журнала с системой рецензирования и редакционного управления
            соответствующий стандартам МНБД (Scopus, Web of Science, DOAJ, DOAB)
          </DescItem>
          <DescItem>Техническая поддержка</DescItem>
          <DescItem>
            Услуги рецензирования, редактирования, вёрстки и корректуры до
            финального PDF
          </DescItem>
          <DescItem>Маркетинговая и рекламная поддержка</DescItem>
          <DescItem>Уникальный дизайн журнала</DescItem>
          <DescItem>
            Консультации и поддержка в индексации архивировании журналов в более
            чем 30 международных базах данных
          </DescItem>
          <DescItem style={{ border: "none" }}></DescItem>
        </DescColumn>
        <PackageColumn>
          <PackageItem pt="md" pb="mdsm">
            <Standart />
            <StyledText mt="sm">Пакет Стандарт</StyledText>
            <Link href="/" mt="xxsm">
              <StyledCaption>Подробнее</StyledCaption>
            </Link>
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem></PackageItem>
          <PackageItem></PackageItem>
          <PackageItem></PackageItem>
          <PackageItem></PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[0]);
              }}
            >
              Начать работу
            </NewButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Comfort />
            <StyledText mt="sm">Пакет Комфорт</StyledText>
            <Link href="/" mt="xxsm">
              <StyledCaption>Подробнее</StyledCaption>
            </Link>
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem></PackageItem>
          <PackageItem></PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[1]);
              }}
            >
              Начать работу
            </NewButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Premium />
            <StyledText mt="sm">Пакет Премиум</StyledText>
            <Link href="/" mt="xxsm">
              <StyledCaption>Подробнее</StyledCaption>
            </Link>
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[2]);
              }}
            >
              Начать работу
            </NewButton>
          </PackageItem>
        </PackageColumn>
      </TableOffer>
      <OfferModal
        isOpen={isOpen}
        setOpen={setOpen}
        {...chooseItem}
      ></OfferModal>
    </ContentWrapper>
  );
};
