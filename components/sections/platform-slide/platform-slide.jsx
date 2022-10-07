import { H2, ButtonMD, } from "components";
import { ContentWrapper, H3Styled, TextWrapper, StyledDesktopLGBR, StyledTabletSMBR, StyledDesktopSMBR, StyledTabletLGBR, StyledDesktopMDBR } from "./platform-slide.style";

import { colors } from "styles";

export const PlatformSlide = ({ ...props }) => {
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
    </ContentWrapper>
  );
};