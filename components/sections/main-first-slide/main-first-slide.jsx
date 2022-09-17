import {} from "components";
import { Caption, H3, H1, ButtonLG, Text } from "components";
import {
  FirstSlideWrapper,
  FirstSlideBGImageWrapper,
  FirstSlideBGImage,
} from "./main-first-slide.style";

export const MainFirstSlide = () => {
  return (
    <FirstSlideWrapper>
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
      <ButtonLG mt="xxlg" mx="lg">
        Начать работу
      </ButtonLG>
      <FirstSlideBGImageWrapper>
        <FirstSlideBGImage />
      </FirstSlideBGImageWrapper>
    </FirstSlideWrapper>
  );
};
