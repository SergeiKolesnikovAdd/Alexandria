import { H2, ButtonMD, } from "components";
import { ContentWrapper, H3Styled, TextWrapper, StyledDesktopBR, StyledTabletSMBR } from "./platform-slide.style";

import { colors } from "styles";

export const PlatformSlide = ({ ...props }) => {
  return (
    <ContentWrapper id="platform" {...props}>
      <H3Styled>О платформе</H3Styled>
      <TextWrapper>
        <H2 mt="mdsm">
          Мы помогаем создавать
          <StyledTabletSMBR />
          научные журналы и книги,
          <StyledDesktopBR />
          <StyledTabletSMBR />
          соответствующие международным стандартам
          <br />
          для издателей любого масштаба&nbsp;
        </H2>
        <H2 style={{ color: colors.orange,}}>
          и амбиций&nbsp;
          <StyledDesktopBR />
          вне зависимости
          <StyledTabletSMBR />
          от того являетесь ли вы
          <br />
          университетской прессой,
          <StyledTabletSMBR />
          организатором
          <StyledDesktopBR />
          конференций
          <StyledTabletSMBR />
          или научно-исследовательским институтом
        </H2>
      </TextWrapper>
      <ButtonMD mt="lg">О платформе</ButtonMD>
    </ContentWrapper>
  );
};