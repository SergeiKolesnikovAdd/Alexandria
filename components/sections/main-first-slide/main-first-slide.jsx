import {
  FirstSlideBGImage,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
  H2Styled,
} from "./main-first-slide.style";
import { ButtonLG, H3 } from "components";

export const MainFirstSlide = (props) => {
  return (
    <FirstSlideWrapper {...props}>
      <H2Styled mx="lg">
        многофункциональная
        <br />
        научно-издательская
        <br />
        платформа
      </H2Styled>
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
