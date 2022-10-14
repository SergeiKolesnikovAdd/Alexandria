import { H2, ButtonMD } from "components";
import {
  ContentWrapper,
  H3Styled,
  TextWrapper,
  StyledDesktopLGBR,
  StyledTabletSMBR,
  StyledDesktopSMBR,
  StyledTabletLGBR,
  StyledDesktopMDBR,
  StyledPhoneBR,
  StyledImg,
} from "./platform-slide.style";

import { colors } from "styles";

import img1 from "public/left-hand.png";

export const PlatformSlide = ({ ...props }) => {

  const ImgTimers = [
    {
      id: 1,
      // styles: "transition: scale 3s 1s, position: absolute, right: 0, top: 5%,",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transform 3s 1s",
        position: "absolute",
        right: "0",
        top: "5%",
      },
      img: img1.src,
    },
    {
      id: 2,
      // styles: "transition: scale 3s 2s, position: absolute, left: 0%, top: 5%",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transform 3s 0.5s",
        position: "absolute",
        left: "0",
        top: "5%",
      },
      img: img1.src,
    },
    {
      id: 3,
      // styles: "transition: scale 3s 2s, position: absolute, left: 5%, top: -5%",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transform 3s 0.7s",
        position: "absolute",
        left: "5%",
        top: "-5%",
      },
      img: img1.src,
    },
    {
      id: 4,
      // styles:
      //   "transition: scale 3s 2s, position: absolute, left: 20%, bottom: 5%",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transform 3s 3s",
        position: "absolute",
        left: "20%",
        bottom: "5%",
      },
      img: img1.src,
    },
    {
      id: 5,
      // styles:
      //   "transition: scale 3s 2s, position: absolute, right: 10%, bottom: -5%",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transfrom 3s 2.5s",
        position: "absolute",
        right: "10%",
        bottom: "-5%",
      },
      img: img1.src,
    },
    {
      id: 6,
      // styles:
      //   "transition: scale 3s 2s, position: absolute, right: 20%, bottom: 15%",
      style: {
        transform: "scale(2.5, 2.5)",
        transition: "transform 3s 1.5s",
        position: "absolute",
        right: "20%",
        bottom: "15%",
      },
      img: img1.src,
    },
  ];
  

  return (
    <ContentWrapper id="platform" {...props}>
      <H3Styled>О платформе</H3Styled>
      <TextWrapper>
        <H2 mt="mdsm">
          Мы помогаем создавать&nbsp;
          <StyledTabletSMBR />
          <StyledPhoneBR />
          научные&nbsp;
          <StyledDesktopMDBR />
          журналы&nbsp;
          <StyledPhoneBR />
          и&nbsp;книги,&nbsp;
          <StyledDesktopLGBR />
          <StyledTabletSMBR />
          соответствующие&nbsp;
          <StyledDesktopMDBR />
          <StyledTabletSMBR />
          <StyledPhoneBR />
          международным&nbsp;
          <StyledPhoneBR />
          стандартам&nbsp;
          <StyledDesktopLGBR />
          <StyledDesktopMDBR />
          <StyledTabletSMBR />
          для издателей&nbsp;
          <StyledPhoneBR />
          любого масштаба&nbsp;
        </H2>
        <H2 style={{ color: colors.orange }}>
          и&nbsp;
          <StyledDesktopMDBR />
          амбиций&nbsp;
          <StyledDesktopLGBR />
          вне&nbsp;зависимости&nbsp;
          <StyledTabletSMBR />
          <StyledPhoneBR />
          от того&nbsp;
          <StyledDesktopMDBR />
          являетесь ли вы&nbsp;
          <StyledTabletSMBR />
          <StyledDesktopLGBR />
          <StyledPhoneBR />
          университетской&nbsp;
          <StyledDesktopMDBR />
          прессой,&nbsp;
          <StyledTabletSMBR />
          <StyledPhoneBR />
          организатором&nbsp;
          <StyledPhoneBR />
          <StyledDesktopLGBR />
          конференций&nbsp;
          <StyledTabletSMBR />
          <StyledDesktopMDBR />
          или научно-
          <StyledPhoneBR />
          исследовательским&nbsp;
          <StyledPhoneBR />
          институтом
        </H2>
      </TextWrapper>
      <ButtonMD mt="lg">О платформе</ButtonMD>
      {/* <StyledImg />
      {ImgTimers.map(({ id, img, style }) => (
        <StyledImg key={id} src={img} style={style} />
      ))} */}
      {/* TODO: АНИМАЦИИ ПРИ СКРОЛЕ, УВЕЛИЧЕНИЕ КАРТИНОК */}
    </ContentWrapper>
  );
};
