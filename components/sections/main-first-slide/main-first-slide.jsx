import { useEffect, useState } from "react";
import {
  LeftHand,
  RightHand,
  FirstSlideBGImageWrapper,
  FirstSlideWrapper,
} from "./main-first-slide.style";
import { ButtonMD, H3, H1, FormModal } from "components";
import { debounce } from "../../../utils";

function useScroll() {
  const handleScrollDebounce = debounce(handleScroll, 5);
  const [scrollY, setScrollY] = useState(0);

  function handleScroll(e) {
    const clientHeight = window.innerHeight;
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - clientHeight * 0.4;

    if (diff > 0 && diff < 300) {
      setScrollY(diff * 0.2);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDebounce);
    return () => handleScrollDebounce;
  }, []);

  return scrollY;
}

export const MainFirstSlide = ({ setColored, ...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const scrollY = useScroll();

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
            setModalTitle(e.target.textContent);
            setColored(true);
          }}>
          Начать работу
        </ButtonMD>
        <FirstSlideBGImageWrapper>
          <LeftHand scrollY={scrollY} />
          <RightHand scrollY={scrollY} />
        </FirstSlideBGImageWrapper>
      </FirstSlideWrapper>
      <FormModal
        setColored={setColored}
        formName="Первый слайд"
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};
