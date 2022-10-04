import {
  FirstSlideBGImage,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
} from "./main-first-slide.style";
import { ButtonMD, H3, H1 } from "components";

export const MainFirstSlide = (props) => {
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
      <FirstSlideBGImageWrapper>
        <FirstSlideBGImage />
      </FirstSlideBGImageWrapper>
    </FirstSlideWrapper>
  );
};
