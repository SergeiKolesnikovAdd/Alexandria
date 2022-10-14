import {
  LeftHand,
  RightHand,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
} from "./main-first-slide.style";
import { ButtonMD, H3, H1, FormModal } from "components";
import { useState } from "react";

export const MainFirstSlide = ({...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <>
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
        <ButtonMD
          mt="xxlg"
          mx="lg"
          onClick={(e) => {
            setOpenForm(true);
            setTitle(e.target.textContent);
          }}>
          Начать работу
        </ButtonMD>
        <FirstSlideBGImageWrapper>
          <LeftHand />
          <RightHand />
        </FirstSlideBGImageWrapper>
      </FirstSlideWrapper>
      <FormModal title={title} setOpen={setOpenForm} isOpen={isOpenForm} />
    </>
  );
};
