import {
  Slide,
  SlideImg,
  SlideNext,
  SlidePrev,
  SlideWrapper,
} from "./slider.style";
import { useState } from "react";
import { ButtonMD } from "components";

export const Slider = () => {
  const [slideList, setSlideList] = useState([
    {
      id: 1,
      initZIndex: 1,
      background: "black",
      img: "https://drive.google.com/uc?id=1Xiw7XuQ-I2gzcaHVob8KMHSsuH6tQBTl",
    },
    {
      id: 2,
      initZIndex: 2,
      background: "red",
      img: "https://drive.google.com/uc?id=1ziar4UJuRx2u0QlYYLKv_qU7xLMUtPsb",
    },
    {
      id: 3,
      initZIndex: 3,
      background: "blue",
      img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
    },
    {
      id: 4,
      initZIndex: 4,
      background: "green",
      img: "https://drive.google.com/uc?id=1KLi1n20RK74RHXAbY6Srh6CEEkphqQou",
    },
  ]);

  const [slideIndex, setSlideIndex] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(
    slideList[slideList.length - 1]
  );

  const nextSlide = () => {
    if (currentSlide.id !== slideList.length) {
      //   setSlideIndex(slideIndex + 1);
      setCurrentSlide(slideList[currentSlide.id++]);
      console.log(currentSlide);
      console.log(currentSlide.id);
      console.log(slideList.length);
    } else if (currentSlide.id === slideList.length) {
      setCurrentSlide(slideList[0]);
      //   setSlideIndex(1);
      //   slideIndex;
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slideList.length);
    }
  };

  return (
    <SlideWrapper>
      {slideList.map(({ img, index, id }) => (
        <Slide
          key={id}
          index={index}
          slideIndex={slideIndex}
          style={{ zIndex: { index }, top: `(10*${id})px` }}
        >
          <SlideImg src={img}></SlideImg>
        </Slide>
      ))}
      <ButtonMD
        style={{ zIndex: 50, position: "absolute", left: "400px" }}
        onClick={() => {
          nextSlide();
        }}
      />
      <ButtonMD
        style={{ zIndex: 50, position: "absolute", left: "100px" }}
        onClick={() => {
          prevSlide();
        }}
      />
      {/* <SlideNext onClick={() => nextSlide}>Вперед</SlideNext> */}
      {/* <SlidePrev onClick={() => prevSlide}>Назад</SlidePrev> */}
    </SlideWrapper>
  );
};
