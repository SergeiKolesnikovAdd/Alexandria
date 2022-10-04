import { H2, ButtonMD, } from "components";
import { ContentWrapper, H3Styled, TextWrapper, StyledDesktopBR } from "./platform-slide.style";

import { colors } from "styles";

export const PlatformSlide = ({ ...props }) => {
  return (
    <ContentWrapper id="platform" {...props}>
      <H3Styled>О платформе</H3Styled>
      <TextWrapper>
        <H2 mt="mdsm">
          Мы помогаем создавать научные журналы и книги,
          <br />
          соответствующие международным стандартам
          <br />
          для издателей любого масштаба&nbsp;
        </H2>
        <H2 style={{ color: colors.orange, display: "inline" }}>
          и амбиций&nbsp;
          <StyledDesktopBR />
          вне зависимости от того являетесь ли вы
          <br />
          университетской прессой, организатором
          <br />
          конференций или научно-исследовательским институтом
        </H2>
      </TextWrapper>
      <ButtonMD mt="lg">О платформе</ButtonMD>
    </ContentWrapper>
  );
};