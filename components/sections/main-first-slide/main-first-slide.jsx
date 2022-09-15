import { Caption, H3, H1, ButtonLG, Text, } from "components";
import { FirstSlideWrapper, FirstSlideBGImage } from "./main-first-slide.js";

export const MainFirstSlide = () => {
  return (
    <FirstSlideWrapper>
      <H1>
        многофункциональная
        <br />
        научно-издательская
        <br />
        платформа
      </H1>
      <H3>
        Создайте свой научный журнал, который
        <br />
        будет соответствовать самым высоким
        <br />
        издательским стандартам
      </H3>
      <ButtonLG>Начать работу</ButtonLG>
      {/* <FirstSlideBGImage>
        <img src="../../../public/first-slide-bg.png" alt="alexandrina"></img>
      </FirstSlideBGImage> */}
    </FirstSlideWrapper>
  );
};
