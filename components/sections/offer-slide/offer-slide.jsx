import { useState } from "react";
import Link from "next/link";
import { H2, Text, ButtonXLG, OfferModal, FormModal } from "components";
import { arrOfferInfo } from "./constant";
import { Comfort, Mark, Premium, Standart } from "../../common";
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
  DescText,
  TabletButton,
} from "./offer-slide.style";

export const OfferSlide = ({ ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [chooseItem, setChooseItem] = useState({});
  const [isOpenForm, setOpenForm] = useState(false);

  return (
    <ContentWrapper {...props} id="offer">
      <H3Styled mb="lg" mx="lg">
        Удобное ценообразование
      </H3Styled>
      <H2 mt="mdsm" mx="lg">
        Пакеты услуг
      </H2>
      <ButtonRow mb="lg" px="lg">
        <Text mt="lg">
          Мы предлагаем оптимальные пакеты комплексных
          <br />
          услуг, а также возможность разработать персональное
          <br />
          предложение, исходя из индивидуальных
          <br />
          потребностей издателя
        </Text>
        <ButtonXLG
          onClick={() => {
            setOpenForm(true);
            setChooseItem(arrOfferInfo[0]);
          }}
        >
          Получить индивидуальное предложение
        </ButtonXLG>
      </ButtonRow>
      <TableOffer px="lg">
        <DescColumn>
          <DescItem></DescItem>
          <DescItem>
            <DescText>
              Сайт журнала с системой рецензирования и редакционного управления
              соответствующий стандартам МНБД (Scopus, Web of Science, DOAJ,
              DOAB)
            </DescText>
          </DescItem>
          <DescItem>
            <DescText>Техническая поддержка</DescText>
          </DescItem>
          <DescItem>
            <DescText>
              Услуги рецензирования, редактирования, вёрстки и корректуры до
              финального PDF
            </DescText>
          </DescItem>
          <DescItem>
            <DescText>Маркетинговая и рекламная поддержка</DescText>
          </DescItem>
          <DescItem>
            <DescText>Уникальный дизайн журнала</DescText>
          </DescItem>
          <DescItem>
            <DescText>
              Консультации и поддержка в индексации архивировании журналов в
              более чем 30 международных базах данных
            </DescText>
          </DescItem>
          <DescItem style={{ border: "none" }}></DescItem>
        </DescColumn>
        <PackageColumn>
          <PackageItem pt="md" pb="mdsm">
            <Standart />
            <StyledText mt="sm">Пакет Стандарт</StyledText>
            <StyledCaption
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[0]);
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
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
            <NewButton onClick={() => {
                setOpenForm(true);
              }}>Начать работу</NewButton>
            <TabletButton>Начать</TabletButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Comfort />
            <StyledText mt="sm">Пакет Комфорт</StyledText>
            <StyledCaption
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[1]);
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
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
            <NewButton onClick={() => {
                setOpenForm(true);
              }}>Начать работу</NewButton>
            <TabletButton>Начать</TabletButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItem>
            <Premium />
            <StyledText mt="sm">Пакет Премиум</StyledText>
            <StyledCaption
              onClick={() => {
                setOpen(true);
                setChooseItem(arrOfferInfo[2]);
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
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
            <NewButton onClick={() => {
                setOpenForm(true);
              }}>Начать работу</NewButton>
            <TabletButton>Начать</TabletButton>
          </PackageItem>
        </PackageColumn>
      </TableOffer>
      <OfferModal
        title
        isOpen={isOpen}
        setOpen={setOpen}
        {...chooseItem}
      ></OfferModal>
      <FormModal
        isOpen={isOpenForm}
        setOpen={setOpenForm}
        {...chooseItem}
      ></FormModal>
    </ContentWrapper>
  );
};
