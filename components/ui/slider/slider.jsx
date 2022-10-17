import {
  Slide,
  SlideImg,
  SlideNext,
  SlidePrev,
  SlideWrapper,
  SliderOverlay,
  TextWrapper,
  StyledCaption,
} from "./slider.style";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
    number: "05",
    text: "Учреждения и компании",
  },
  {
    id: 2,
    img: "https://drive.google.com/uc?id=1ziar4UJuRx2u0QlYYLKv_qU7xLMUtPsb",
    number: "01",
    text: "Научные сообщества",
  },
  {
    id: 3,
    img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
    number: "02",
    text: "Университеты",
  },
  {
    id: 4,
    img: "https://drive.google.com/uc?id=1Xiw7XuQ-I2gzcaHVob8KMHSsuH6tQBTl",
    number: "03",
    text: "Независимые издания",
  },
  {
    id: 5,
    img: "https://drive.google.com/uc?id=1KLi1n20RK74RHXAbY6Srh6CEEkphqQou",
    number: "04",
    text: "Организаторы конференций",
  },
];

export const Slider = (
  { isNextDirection, currentSlide, getCurrentIndex },
  ...props
) => {
  console.log(getCurrentIndex());
  console.log(currentSlide);
  return (
    <>
      <SlideWrapper>
        {data.map(({ img, id, number, text }, index) => (
          <Slide
            key={id}
            index={getCurrentIndex(index, currentSlide)}
            isNextDirection={isNextDirection}
            bg={img}
          >
            <SliderOverlay
              isNextDirection={isNextDirection}
              index={getCurrentIndex(index, currentSlide)}
            />
            <TextWrapper>
              <StyledCaption>{number}</StyledCaption>
              <StyledCaption>{text}</StyledCaption>
            </TextWrapper>
          </Slide>
        ))}
      </SlideWrapper>
    </>
  );
};
