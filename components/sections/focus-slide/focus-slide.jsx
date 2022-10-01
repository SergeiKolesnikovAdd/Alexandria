import { useEffect, useState } from "react";
import {
  H2,
  Slider,
  Text,
  ButtonSliderLeft,
  ButtonSliderRight,
} from "components";
import {
  ContentWrapper,
  H3Styled,
  HigherPart,
  SectionWrapper,
  SliderWrapper,
  TextWrapper,
  ControlButtons,
} from "./focus-slide.style";

import { colors } from "styles";

const getCurrentIndex = (index, currentSlide) => {
  const totalCount = 5;
  const currentIndex = (index + Math.abs(currentSlide)) % totalCount;

  return currentIndex;
};

export const FocusSlide = ({ ...props }) => {
  const [currentSlide, setCurrentSlide] = useState(10000);
  const [isNextDirection, setDirection] = useState(false);

  useEffect(() => {}, [currentSlide]);

  const onNextClick = () => {
    setDirection(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const onPrevClick = () => {
    setDirection(false);
    setCurrentSlide((prev) => prev - 1);
  };
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
            <ControlButtons mt="md">
              <ButtonSliderLeft
                onClick={ onNextClick }
                mr="xsm"
              ></ButtonSliderLeft>
              <ButtonSliderRight 
              onClick={ onPrevClick }
              ></ButtonSliderRight>
            </ControlButtons>
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
          <Slider currentSlide={currentSlide}
                  isNextDirection={isNextDirection}
                  getCurrentIndex={getCurrentIndex}/>
        </SliderWrapper>
      </ContentWrapper>
    </SectionWrapper>
  );
};
