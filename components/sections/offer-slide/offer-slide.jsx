import { useState } from "react";
import Link from "next/link";
import { H2, Text, ButtonXLG, OfferModal, FormModal, Tab } from "components";
import { arrOfferInfo } from "./constant";
import { Comfort, Mark, Premium, Standart, MarkGrey, } from "../../common";
import {
  ContentWrapper,
  DescColumn,
  DescItem,
  PackageItem,
  PackageItemName,
  ButtonRow,
  TableOffer,
  PackageColumn,
  NewButton,
  StyledCaption,
  H3Styled,
  StyledText,
  DescText,
  TabletButton,
  PackageItemTab,
  ControlWrapper,
  Icon,
  StyledDesktopBR,
  StyledPhoneBR,
  StyledTextH3,
} from "./offer-slide.style";

import { arrOfferInfoTab } from "./tabs";

export const OfferSlide = ({ setColored, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [chooseItem, setChooseItem] = useState({});
  const [isOpenForm, setOpenForm] = useState(false);
  const [chooseItemTab, setChooseItemTab] = useState(arrOfferInfoTab[1]);
  const [modalTitle, setModalTitle] = useState("");
  const [formName, setFormName] = useState("");

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
          Мы предлагаем оптимальные пакеты&nbsp;
          <StyledPhoneBR />
          комплексных&nbsp;
          <StyledDesktopBR />
          услуг, а также возможность&nbsp;
          <StyledPhoneBR />
          разработать персональное&nbsp;
          <StyledDesktopBR />
          предложение,&nbsp;
          <StyledPhoneBR />
          исходя из индивидуальных&nbsp;
          <StyledDesktopBR />
          потребностей&nbsp;
          <StyledPhoneBR />
          издателя
        </Text>
        <ButtonXLG
          onClick={() => {
            setFormName("Пакеты услуг");
            setModalTitle("Получить индивидуальное предложение");
            setOpenForm(true);
            setChooseItem(arrOfferInfo[0]);
            setColored(true);
          }}
        >
          Получить индивидуальное предложение
        </ButtonXLG>
      </ButtonRow>
      <TableOffer px="lg">
        <DescColumn>
          <DescItem></DescItem>
          <DescItem>
            <DescText>Разработка сайта журнала</DescText>
          </DescItem>
          <DescItem>
            <DescText>
              ПО рецензирования, редактирования и выпуска статей
            </DescText>
          </DescItem>
          <DescItem>
            <DescText>Консалтинг и обучение редакционной коллегии</DescText>
          </DescItem>
          <DescItem>
            <DescText>Переводы и редакторские услуги специалистов</DescText>
          </DescItem>
          <DescItem>
            <DescText>Маркетинговая и рекламная поддержка</DescText>
          </DescItem>
          <DescItem>
            <DescText>Индивидуальный дизайн журнала</DescText>
          </DescItem>
          <DescItem>
            <DescText>Продвижение и индексирование в базах данных</DescText>
          </DescItem>
          <DescItem style={{ border: "none" }}></DescItem>
        </DescColumn>
        <PackageColumn>
          <PackageItemName pt="mdsm" pb="mdsm">
            <Standart />
            <StyledText mt="sm">Пакет Стандарт</StyledText>
            <StyledCaption
              onClick={() => {
                setModalTitle("Пакет Стандарт");
                setOpen(true);
                setChooseItem(arrOfferInfo[0]);
                setColored(true);
                setModalTitle("Пакет Стандарт");
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
          </PackageItemName>
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
            <MarkGrey />
          </PackageItem>
          <PackageItem>
            <MarkGrey />
          </PackageItem>
          <PackageItem>
            <MarkGrey />
          </PackageItem>
          <PackageItem>
            <MarkGrey />
          </PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={(e) => {
                setModalTitle("Пакет Стандарт");
                setFormName("Пакет Стандарт");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Стандарт");
                setModalTitle("Пакет Стандарт");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать
            </TabletButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItemName>
            <Comfort />
            <StyledText mt="sm">Пакет Комфорт</StyledText>
            <StyledCaption
              onClick={() => {
                setModalTitle("Пакет Комфорт");
                setOpen(true);
                setChooseItem(arrOfferInfo[1]);
                setColored(true);
                setModalTitle("Пакет Комфорт");
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
          </PackageItemName>
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
            <MarkGrey />
          </PackageItem>
          <PackageItem>
            <MarkGrey />
          </PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={(e) => {
                setFormName("Пакет Комфорт");
                setModalTitle("Пакет Комфорт");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Комфорт");
                setModalTitle("Пакет Комфорт");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать
            </TabletButton>
          </PackageItem>
        </PackageColumn>
        <PackageColumn>
          <PackageItemName>
            <Premium />
            <StyledText mt="sm">Пакет Премиум</StyledText>
            <StyledCaption
              onClick={() => {
                setModalTitle("Пакет Премиум");
                setOpen(true);
                setChooseItem(arrOfferInfo[2]);
                setColored(true);
                setModalTitle("Пакет Премиум");
              }}
              mt="xxsm"
            >
              Подробнее
            </StyledCaption>
          </PackageItemName>
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
          <PackageItem>
            <Mark />
          </PackageItem>
          <PackageItem style={{ border: "none" }}>
            <NewButton
              onClick={(e) => {
                setFormName("Пакет Премиум");
                setModalTitle("Пакет Премиум");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Премиум");
                setModalTitle("Пакет Премиум");
                setOpenForm(true);
                setColored(true);
              }}
            >
              Начать
            </TabletButton>
          </PackageItem>
        </PackageColumn>
      </TableOffer>
      <ControlWrapper>
        {arrOfferInfoTab.map(
          ({ id, modalTitle, title, icon, ...props }, index) => (
            <PackageItemTab
              key={id}
              id={id}
              pt="md"
              pb="mdsm"
              isOpen={chooseItemTab.id === id}
              onClick={() => {
                setChooseItemTab(arrOfferInfoTab[index]);
              }}
            >
              <Icon src={icon} />
              <StyledTextH3 mt="sm">{title}</StyledTextH3>
              <StyledText mt="sm">{modalTitle}</StyledText>
            </PackageItemTab>
          )
        )}
      </ControlWrapper>
      {arrOfferInfoTab.map(({ id, ...props }, index) => (
        <Tab
          formName={formName}
          modalTitle={modalTitle}
          isOpenForm={isOpenForm}
          setFormName={setFormName}
          setModalTitle={setModalTitle}
          setOpenForm={setOpenForm}
          setColored={setColored}
          setChooseItem={setChooseItem}
          key={id}
          id={id}
          m1img={props.m1img}
          m2img={props.m2img}
          m3img={props.m3img}
          m4img={props.m4img}
          m5img={props.m5img}
          m6img={props.m6img}
          m7img={props.m7img}
          isShowing={chooseItemTab.id === id}
          onClick={() => {
            setChooseItemTab(arrOfferInfoTab[index]);
          }}
        />
      ))}
      <OfferModal
        modalTitle={modalTitle}
        formName={formName}
        isOpen={isOpen}
        setOpen={setOpen}
        setColored={setColored}
        {...chooseItem}
      ></OfferModal>
      <FormModal
        formName={formName}
        isOpen={isOpenForm}
        setOpen={setOpenForm}
        modalTitle={modalTitle}
        setColored={setColored}
        {...chooseItem}
      ></FormModal>
    </ContentWrapper>
  );
};
