import { H2, ButtonMD, FormModal, } from "components";
import {
  ContentWrapper,
  H3Styled,
  TextWrapper,
  StyledDesktopLGBR,
  StyledTabletSMBR,
  StyledDesktopSMBR,
  StyledTabletLGBR,
  StyledDesktopMDBR,
  StyledPhoneBR,
  StyledImg,
} from "./platform-slide.style";
import {useEffect, useRef, useState} from "react";

import { colors } from "styles";

import img1 from "public/left-hand.png";
import {debounce} from "../../../utils";

function useScroll(platformRef) {
  const handleScrollDebounce = debounce(handleScroll, 5);
  const [scrollY, setScrollY] = useState(0);

  function handleScroll(e) {
    const offsetTop = platformRef.current.offsetTop;
    const innerHeight = platformRef.current.scrollHeight;
    const currentScrollY = window.scrollY;
    const diff = (currentScrollY - (offsetTop - 2 * innerHeight));

    if (diff > 0 && diff < 2 * innerHeight){
      setScrollY(diff*0.2);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDebounce);
    return () => handleScrollDebounce;
  }, []);

  return scrollY;
}

export const PlatformSlide = ({ ...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const platformRef = useRef();
  const scrollY = useScroll(platformRef);
  //TODO: Используй значение scrollY для зуминга картинок


  // const ImgTimers = [
  //   {
  //     id: 1,
  //     // styles: "transition: scale 3s 1s, position: absolute, right: 0, top: 5%,",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transform 3s 1s",
  //       position: "absolute",
  //       right: "0",
  //       top: "5%",
  //     },
  //     img: img1.src,
  //   },
  //   {
  //     id: 2,
  //     // styles: "transition: scale 3s 2s, position: absolute, left: 0%, top: 5%",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transform 3s 0.5s",
  //       position: "absolute",
  //       left: "0",
  //       top: "5%",
  //     },
  //     img: img1.src,
  //   },
  //   {
  //     id: 3,
  //     // styles: "transition: scale 3s 2s, position: absolute, left: 5%, top: -5%",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transform 3s 0.7s",
  //       position: "absolute",
  //       left: "5%",
  //       top: "-5%",
  //     },
  //     img: img1.src,
  //   },
  //   {
  //     id: 4,
  //     // styles:
  //     //   "transition: scale 3s 2s, position: absolute, left: 20%, bottom: 5%",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transform 3s 3s",
  //       position: "absolute",
  //       left: "20%",
  //       bottom: "5%",
  //     },
  //     img: img1.src,
  //   },
  //   {
  //     id: 5,
  //     // styles:
  //     //   "transition: scale 3s 2s, position: absolute, right: 10%, bottom: -5%",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transfrom 3s 2.5s",
  //       position: "absolute",
  //       right: "10%",
  //       bottom: "-5%",
  //     },
  //     img: img1.src,
  //   },
  //   {
  //     id: 6,
  //     // styles:
  //     //   "transition: scale 3s 2s, position: absolute, right: 20%, bottom: 15%",
  //     style: {
  //       transform: "scale(2.5, 2.5)",
  //       transition: "transform 3s 1.5s",
  //       position: "absolute",
  //       right: "20%",
  //       bottom: "15%",
  //     },
  //     img: img1.src,
  //   },
  // ];

  return (
    <>
      <ContentWrapper ref={platformRef} id="platform" {...props}>
        <H3Styled>О платформе</H3Styled>
        <TextWrapper>
          <H2 mt="mdsm">
            Мы помогаем создавать&nbsp;
            <StyledTabletSMBR />
            <StyledPhoneBR />
            научные&nbsp;
            <StyledDesktopMDBR />
            журналы&nbsp;
            <StyledPhoneBR />
            и&nbsp;книги,&nbsp;
            <StyledDesktopLGBR />
            <StyledTabletSMBR />
            соответствующие&nbsp;
            <StyledDesktopMDBR />
            <StyledTabletSMBR />
            <StyledPhoneBR />
            международным&nbsp;
            <StyledPhoneBR />
            стандартам&nbsp;
            <StyledDesktopLGBR />
            <StyledDesktopMDBR />
            <StyledTabletSMBR />
            для издателей&nbsp;
            <StyledPhoneBR />
            любого масштаба&nbsp;
          </H2>
          <H2 style={{ color: colors.orange }}>
            и&nbsp;
            <StyledDesktopMDBR />
            амбиций&nbsp;
            <StyledDesktopLGBR />
            вне&nbsp;зависимости&nbsp;
            <StyledTabletSMBR />
            <StyledPhoneBR />
            от того&nbsp;
            <StyledDesktopMDBR />
            являетесь ли вы&nbsp;
            <StyledTabletSMBR />
            <StyledDesktopLGBR />
            <StyledPhoneBR />
            университетской&nbsp;
            <StyledDesktopMDBR />
            прессой,&nbsp;
            <StyledTabletSMBR />
            <StyledPhoneBR />
            организатором&nbsp;
            <StyledPhoneBR />
            <StyledDesktopLGBR />
            конференций&nbsp;
            <StyledTabletSMBR />
            <StyledDesktopMDBR />
            или научно-
            <StyledPhoneBR />
            исследовательским&nbsp;
            <StyledPhoneBR />
            институтом
          </H2>
        </TextWrapper>
        <ButtonMD
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
          }}
          mt="lg">
          Начать работу
        </ButtonMD>
        {/* <StyledImg />
      {ImgTimers.map(({ id, img, style }) => (
        <StyledImg key={id} src={img} style={style} />
      ))} */}
        {/* TODO: АНИМАЦИИ ПРИ СКРОЛЕ, УВЕЛИЧЕНИЕ КАРТИНОК */}
      </ContentWrapper>
      <FormModal
        formName="О платформе"
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};
