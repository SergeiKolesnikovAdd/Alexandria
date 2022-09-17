import { Caption, H2, Text, ButtonXLG, } from "components";
import {
  ContentWrapper,
  DescColumn,
  DescItem,
  PackageItem,
  ButtonRow,
  TableOffer,
  PackageColumn,
  StyledButton,
  StyledCaption,
} from "./offer-slide.style";

import { propTypesMargin, propTypesPadding } from "../../types";

import { Comfort, Mark, Premium, Standart, } from "../../common";

import {
  colors,
} from "styles";
import Link from "next/link";

export const OfferSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props}>
      <Text mb="lg" mx="lg">
        Удобное ценообразование
      </Text>
      <H2 mt="mdsm" mx="lg">
        Пакеты услуг
      </H2>
      <ButtonRow mt="lg" px="lg">
        <Text>
          Мы предлагаем оптимальные пакеты комплексных
          <br />
          услуг, а также возможность разработать персональное
          <br />
          предложение, исходя из индивидуальных
          <br />
          потребностей издателя
        </Text>
        <ButtonXLG>Получить индивидуальное предложение</ButtonXLG>
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
            <Text mt="sm">Пакет Стандарт</Text>
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
            <StyledButton>Начать работу</StyledButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Comfort />
            <Text mt="sm">Пакет Комфорт</Text>
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
            <StyledButton>Начать работу</StyledButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Premium />
            <Text mt="sm">Пакет Премиум</Text>
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
            <StyledButton>Начать работу</StyledButton>
          </PackageItem>
        </PackageColumn>
      </TableOffer>
    </ContentWrapper>
  );
};

OfferSlide.propTypes = {
  propTypesMargin,
  propTypesPadding,
};