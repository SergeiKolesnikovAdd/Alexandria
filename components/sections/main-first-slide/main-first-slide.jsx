import {
  LeftHand,
  RightHand,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
} from "./main-first-slide.style";
import { useEffect, useRef, useState, } from "react";
import { ButtonMD, H3, H1 } from "components";
import { setTransperentByScroll } from "./utils";

export const MainFirstSlide = (props) => {

    // const headerRef = useRef(null);
    // //Прозрачность фона
    // const [transparentBg, setTransparentBg] = useState(1);
    // //Открытие меню

    // useEffect(() => {
    //   return setTransperentByScroll(
    //     transparentBg,
    //     setTransparentBg,
    //     headerRef,
    //     window
    //   );
    // }, []);

  return (
    <FirstSlideWrapper {...props}>
      <H1 mx="lg">
        многофункциональная
        <br />
        научно-издательская
        <br />
        платформа
      </H1>
      <H3 mt="lg" mx="lg">
        Создайте свой научный журнал, который
        <br />
        будет соответствовать самым высоким
        <br />
        издательским стандартам
      </H3>
      <ButtonMD mt="xxlg" mx="lg">
        Начать работу
      </ButtonMD>
      {/* <FirstSlideBGImageWrapper ref={headerRef}>
        <LeftHand transparency={transparentBg} />
        <RightHand transparency={transparentBg} />
      </FirstSlideBGImageWrapper> */}
      {/* TODO: анимация рук */}
      <FirstSlideBGImageWrapper>
        <LeftHand  />
        <RightHand />
      </FirstSlideBGImageWrapper>
    </FirstSlideWrapper>
  );
};
