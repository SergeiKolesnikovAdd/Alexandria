import { H2, ButtonLG, Text, } from "components";
import {
  ContentWrapper,
} from "./platform-slide.style";

import { propTypesMargin, propTypesPadding } from "../../types";

import {
  colors,
} from "styles";

export const PlatformSlide = ({ ...props }) => {
  return (
    <ContentWrapper {...props}>
      <Text>О платформе</Text>
      <H2 mt="mdsm">
        Мы помогаем создавать научные журналы и книги,
        <br />
        соответствующие международным стандартам
        <br />
        для издателей любого масштаба
      </H2>
      <H2 style={{ color: colors.orange }}>
        &nbsp;и амбиций
        <br />
        вне зависимости от того являетесь ли вы
        <br />
        университетской прессой, организатором
        <br />
        конференций или научно-исследовательским институтом
      </H2>
      <ButtonLG mt="lg">О платформе</ButtonLG>
    </ContentWrapper>
  );
};

PlatformSlide.propTypes = {
  propTypesMargin,
  propTypesPadding,
};