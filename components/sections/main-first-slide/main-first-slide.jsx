import {
  LeftHand,
  RightHand,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
  RightHand,
} from "./main-first-slide.style";
import { ButtonLG, H3, H1 } from "components";

export const MainFirstSlide = ( move, props) => {
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
      <ButtonLG mt="xxlg" mx="lg">
        Начать работу
      </ButtonLG>
      <FirstSlideBGImageWrapper>
        <LeftHand/>
        <RightHand/>
      </FirstSlideBGImageWrapper>
    </FirstSlideWrapper>
  );
};
