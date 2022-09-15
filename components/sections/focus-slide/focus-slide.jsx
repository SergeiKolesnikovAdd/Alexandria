import { Caption, H2, Text } from "components";
import {
  ContentWrapper,
  TextWrapper,
  SliderWrapper,
} from "./focus-slide.style";

export const FocusSlide = () => {
  return (
    <ContentWrapper>
      <TextWrapper>
        <Text style="opacity: 0.4;">Фокусность проекта</Text>
        <H2 mt="mdsm">
          Для кого наша
          <br />
          платформа?
        </H2>
        <Text style="aligin-self:flex-end;">
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
      <SliderWrapper>{/* TODO: SLIDER */}</SliderWrapper>
    </ContentWrapper>
  );
};
