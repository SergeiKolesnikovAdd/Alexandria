import {} from "components";

import { Caption, H2, Slider, Text } from "components";
import {
  ContentWrapper,
  H3Styled,
  HigherPart,
  SectionWrapper,
  SliderWrapper,
  TextWrapper,
} from "./focus-slide.style";

import { colors } from "styles";

export const FocusSlide = ({ ...props }) => {
  return (
    <SectionWrapper id="focus">
      <ContentWrapper {...props} mt="xxxlg">
        <TextWrapper>
          <HigherPart>
            <H3Styled style={{ opacity: 0.4, color: colors.white }}>
              Фокусность проекта
            </H3Styled>
            <H2 mt="mdsm" style={{ color: colors.white }}>
              Для кого наша
              <br />
              платформа?
            </H2>
          </HigherPart>
          <Text style={{ color: colors.white }}>
            Мы помогаем создавать, развивать и продвигать
            <br />
            в различные базы данных научные журналы и книги
            <br />
            издателям абсолютно любого масштаба. Самые удобные
            <br />
            современные инструменты для ведения публикационной
            <br />
            деятельности позволяют находить оптимальные решения,
            <br />
            исходя из потребностей каждого издателя.
          </Text>
        </TextWrapper>
        <SliderWrapper>
          <Slider />
        </SliderWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
