import { useEffect, useState } from "react";
import Link from "next/link";
import { H2, Text, ButtonXLG, OfferModal, FormModal, Tab } from "components";
import { arrOfferInfo } from "./constant";
import { Comfort, Mark, Premium, Standart, MarkGrey } from "../../common";
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
  StyledNBSP,
} from "./offer-slide.style";

import { arrOfferInfoTab } from "./tabs";
import { useNoScroll } from "utils";

export const OfferSlide = ({ setColored, ...props }) => {
  const [isOpen, setOpen] = useState(false);
  const [chooseItem, setChooseItem] = useState({});
  const [isOpenForm, setOpenForm] = useState(false);
  const [chooseItemTab, setChooseItemTab] = useState(arrOfferInfoTab[1]);
  const [modalTitle, setModalTitle] = useState("");
  const [formName, setFormName] = useState("");
  const [isVisible, setVisible] = useState(true);
  const [isOpenInter, setOpenInter] = useState(true);
  useEffect(() => {
    if (isOpenInter === false) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 700);

      const timerclose = setTimeout(() => {
        setVisible(true);
      }, 800);
      return () => clearTimeout(timer, timerclose);
    }
  }, [isOpenInter]);

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
          Мы предлагаем оптимальные пакеты<StyledNBSP>!</StyledNBSP>
          <StyledPhoneBR />
          комплексных<StyledNBSP>!</StyledNBSP>
          <StyledDesktopBR />
          услуг, а также возможность<StyledNBSP>!</StyledNBSP>
          <StyledPhoneBR />
          разработать персональное<StyledNBSP>!</StyledNBSP>
          <StyledDesktopBR />
          предложение,<StyledNBSP>!</StyledNBSP>
          <StyledPhoneBR />
          исходя из индивидуальных<StyledNBSP>!</StyledNBSP>
          <StyledDesktopBR />
          потребностей<StyledNBSP>!</StyledNBSP>
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
          }}>
          Получить индивидуальное предложение
        </ButtonXLG>
      </ButtonRow>
      <TableOffer px="lg">
        <DescColumn>
          <DescItem></DescItem>
          <DescItem>
            <DescText>
              Разработка сайта журнала согласно требованиям международных
              наукометрических баз данных
            </DescText>
          </DescItem>
          <DescItem>
            <DescText>
              Техническое обеспечение, консалтинг и обучение редакционной
              коллегии
            </DescText>
          </DescItem>
          <DescItem>
            <DescText>
              Аутсорсинг сопровождения научной рукописи от рецензирования до
              публикации
            </DescText>
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
            <DescText>
              Комплексная помощь в продвижении и индексировании журнала в
              международных базах данных
            </DescText>
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
                setVisible(true);
                setOpenInter(true);
              }}
              mt="xxsm">
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
              }}>
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Стандарт");
                setModalTitle("Пакет Стандарт");
                setOpenForm(true);
                setColored(true);
              }}>
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
                setVisible(true);
                setOpenInter(true);
              }}
              mt="xxsm">
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
              }}>
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Комфорт");
                setModalTitle("Пакет Комфорт");
                setOpenForm(true);
                setColored(true);
              }}>
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
                setVisible(true);
                setOpenInter(true);
              }}
              mt="xxsm">
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
              }}>
              Начать работу
            </NewButton>
            <TabletButton
              onClick={(e) => {
                setFormName("Пакет Премиум");
                setModalTitle("Пакет Премиум");
                setOpenForm(true);
                setColored(true);
              }}>
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
              }}>
              <Icon src={icon} />
              <StyledTextH3 mt="sm">{title}</StyledTextH3>
              <StyledText mt="sm">{modalTitle}</StyledText>
            </PackageItemTab>
          )
        )}
      </ControlWrapper>
      {arrOfferInfoTab.map(({ id, title, ...props }, index) => (
        <Tab
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
          setOpenForm={setOpenForm}
          setOpen={setOpen}
          setChooseItem={setChooseItem}
          arrOfferInfoTab={arrOfferInfoTab}
          arrOfferInfo={arrOfferInfo}
          setModalTitle={setModalTitle}
          index={index}
          onClick={() => {
            setChooseItemTab(arrOfferInfoTab[index]);
            setModalTitle(`Пакет ${title}`);
            setFormName(`Пакет ${title}`);
          }}
        />
      ))}

      {isVisible ? (
        <OfferModal
          modalTitle={modalTitle}
          formName={formName}
          isOpen={isOpen}
          setOpen={setOpen}
          setColored={setColored}
          setVisible={setVisible}
          setOpenInter={setOpenInter}
          {...chooseItem}></OfferModal>
      ) : (
        <></>
      )}
      <FormModal
        formName={formName}
        isOpen={isOpenForm}
        setOpen={setOpenForm}
        modalTitle={modalTitle}
        setColored={setColored}
        {...chooseItem}></FormModal>
    </ContentWrapper>
  );
};
