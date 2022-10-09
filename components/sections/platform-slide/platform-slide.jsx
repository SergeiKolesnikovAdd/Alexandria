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
  StyledImg,
} from "./platform-slide.style";

import { colors } from "styles";

import img1 from "public/left-hand.png";

export const PlatformSlide = ({ ...props }) => {

  const ImgTimers = [
    {
      id: 1,
      styles: "transition: scale 3s 1s, position: absolute, right: 0, top: 5%,",
      img: img1.src,
    },
    {
      id: 2,
      styles: "transition: scale 3s 2s, position: absolute, left: 0%, top: 5%",
      img: img1.src,
    },
    {
      id: 3,
      styles: "transition: scale 3s 2s, position: absolute, left: 5%, top: -5%",
      img: img1.src,
    },
    {
      id: 4,
      styles:
        "transition: scale 3s 2s, position: absolute, left: 20%, bottom: 5%",
      img: img1.src,
    },
    {
      id: 5,
      styles:
        "transition: scale 3s 2s, position: absolute, right: 10%, bottom: -5%",
      img: img1.src,
    },
    {
      id: 6,
      styles:
        "transition: scale 3s 2s, position: absolute, right: 20%, bottom: 15%",
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
          научные&nbsp;
          <StyledDesktopMDBR />
          журналы&nbsp;и&nbsp;книги,&nbsp;
          <StyledDesktopLGBR />
          <StyledTabletSMBR />
          соответствующие&nbsp;
          <StyledDesktopMDBR />
          <StyledTabletSMBR />
          международным стандартам
          <br />
          для издателей любого масштаба&nbsp;
        </H2>
        <H2 style={{ color: colors.orange }}>
          и&nbsp;
          <StyledDesktopMDBR />
          амбиций&nbsp;
          <StyledDesktopLGBR />
          вне зависимости&nbsp;
          <StyledTabletSMBR />
          от того&nbsp;
          <StyledDesktopMDBR />
          являетесь ли вы&nbsp;
          <StyledTabletSMBR />
          <StyledDesktopLGBR />
          университетской&nbsp;
          <StyledDesktopMDBR />
          прессой,&nbsp;
          <StyledTabletSMBR />
          организатором&nbsp;
          <StyledDesktopLGBR />
          конференций&nbsp;
          <StyledTabletSMBR />
          <StyledDesktopMDBR />
          или научно-исследовательским институтом
        </H2>
      </TextWrapper>
      <ButtonMD mt="lg">О платформе</ButtonMD>
      <StyledImg />
      {ImgTimers.map(({ id, img, styles }) => (
        <StyledImg key={id} src={img} style={{styles}}/>
      ))}
    </ContentWrapper>
  );
};
