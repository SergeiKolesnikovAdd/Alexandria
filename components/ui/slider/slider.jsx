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

import img1 from "public/slider-1.png";
import img2 from "public/slider-2.png";
import img3 from "public/slider-3.png";
import img4 from "public/slider-4.png";
import img5 from "public/slider-5.png";

const data = [
  {
    id: 1,
    img: img5.src,
    number: "05",
    text: "Учреждения и компании",
  },
  {
    id: 2,
    img: img1.src,
    number: "01",
    text: "Научные сообщества",
  },
  {
    id: 3,
    img: img2.src,
    number: "02",
    text: "Университеты",
  },
  {
    id: 4,
    img: img3.src,
    number: "03",
    text: "Независимые издания",
  },
  {
    id: 5,
    img: img4.src,
    number: "04",
    text: "Организаторы конференций",
  },
];

export const Slider = (
  { isNextDirection, currentSlide, getCurrentIndex },
  ...props
) => {
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
