import { H2, ButtonLG, Text, } from "components";
import {
  ContentWrapper,
} from "./faq-slide.style";

import {
  colors,
} from "styles";

export const FaqSlide = () => {
  return (
    <ContentWrapper>
      <Text>Это может быть полезным</Text>
      <H2 mt="mdsm">
        Часто задаваемые
        <br />
        вопросы
      </H2>
      <ButtonXSM mt="lg">Все вопросы</ButtonXSM>
    </ContentWrapper>
  );
};
