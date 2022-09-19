import {
  Slide,
  SlideImg,
  SlideNext,
  SlidePrev,
  SlideWrapper,
} from "./slider.style";
import { useEffect, useState } from "react";

export const Slider = () => {

	const data = [
    {
      id: 1,
      initZIndex: 1,
      background: "black",
      img: "https://drive.google.com/uc?id=1OMNLcE8cllz-Gd7BaUuT3OjNoERdPpRG",
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
      img: "https://drive.google.com/uc?id=1Xiw7XuQ-I2gzcaHVob8KMHSsuH6tQBTl",
    },
    {
      id: 5,
      initZIndex: 5,
      background: "pink",
      img: "https://drive.google.com/uc?id=1KLi1n20RK74RHXAbY6Srh6CEEkphqQou",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(data[0]);

  const nextSlide = () => {
    if (currentSlide.id !== data.length) {
      setCurrentSlide(data[Number(currentSlide.id)]);
    } else if (currentSlide.id === data.length) {
		 setCurrentSlide(data[0]);
	  }

	};


	useEffect(() => {
			console.log(currentSlide);
	},[currentSlide])

  const prevSlide = () => {
    if (currentSlide.id !== 1) {
		 setCurrentSlide(data[Number(currentSlide.id)-2]);
    } else if (currentSlide.id === 1) {
		 setCurrentSlide(data[Number(data.length)-1]);
    }
  };

  return (
    <>
      <SlideWrapper>
        {data.map(({ img, index, id }) => (
          <Slide
            key={id}
            index={index}
            style={{
              zIndex: `${index}`,
            //   marginLeft: `${id * 30}px`,
					marginLeft: `${id * 60}px`,
					// transform: scale(1.5)
					transform: `scale(${id * 0.1 + 0.5})`,
					opacity:  `${-0 + id * 0.2}`,
            }}>
            <SlideImg src={img}></SlideImg>
          </Slide>
        ))}
      </SlideWrapper>
      <SlideNext
        onClick={() => {
          nextSlide();
        }}
      />
      <SlidePrev
        onClick={() => {
          prevSlide();
        }}
      />
    </>
  );
};
