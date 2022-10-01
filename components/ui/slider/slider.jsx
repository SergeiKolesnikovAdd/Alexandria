import {
  Slide,
  SlideImg,
  SlideNext,
  SlidePrev,
  SlideWrapper,
  SliderOverlay,
} from "./slider.style";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
  },
  {
    id: 2,
    img: "https://drive.google.com/uc?id=1ziar4UJuRx2u0QlYYLKv_qU7xLMUtPsb",
  },
  {
    id: 3,

    img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
  },
  {
    id: 4,

    img: "https://drive.google.com/uc?id=1Xiw7XuQ-I2gzcaHVob8KMHSsuH6tQBTl",
  },
  {
    id: 5,
    img: "https://drive.google.com/uc?id=1KLi1n20RK74RHXAbY6Srh6CEEkphqQou",
  },
];

export const Slider = ({isNextDirection, currentSlide, getCurrentIndex,}, ...props) => {

  return (
    <>
      <SlideWrapper>
        {data.map(({ img, id }, index) => (
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
          </Slide>
        ))}
      </SlideWrapper>
    </>
  );
};
