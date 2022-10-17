import { H2, ButtonMD, FormModal } from "components";
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
import { useEffect, useRef, useState } from "react";

import { colors } from "styles";

import img1 from "public/platform1.png";
import img2 from "public/platform2.png";
import img3 from "public/platform3.png";
import img4 from "public/platform4.png";
import img5 from "public/platform5.png";
import img6 from "public/platform6.png";
import { debounce } from "../../../utils";

function useScroll(platformRef) {
  const handleScrollDebounce = debounce(handleScroll, 5);
  const [scrollY, setScrollY] = useState(0);

  function handleScroll(e) {
    const offsetTop = platformRef.current.offsetTop;
    const innerHeight = platformRef.current.scrollHeight;
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - (offsetTop - 2 * innerHeight);

    if (diff > 0 && diff < 2 * innerHeight) {
      setScrollY(diff / innerHeight);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDebounce);
    return () => handleScrollDebounce;
  }, []);

  return scrollY;
}

export const PlatformSlide = ({ ...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const platformRef = useRef();
  const scrollY = useScroll(platformRef);

  const ImgTimers = [
    {
      id: 1,
      style: {
        position: "absolute",
        right: "3%",
        top: "21%",
        transition: "transform 1s 0.3s linear",
      },
      img: img1.src,
    },
    {
      id: 2,

      style: {
        position: "absolute",
        left: "3%",
        top: "16%",
        transition: "transform 0.8s 0.2s linear",
      },
      img: img2.src,
    },
    {
      id: 3,

      style: {
        position: "absolute",
        left: "20%",
        top: "-15%",
        transition: "transform 0.9s 0.4s linear",
      },
      img: img3.src,
    },
    {
      id: 4,

      style: {
        position: "absolute",
        left: "20%",
        bottom: "5%",
        transition: "transform 0.7s 0.3s linear",
      },
      img: img4.src,
    },
    {
      id: 5,

      style: {
        position: "absolute",
        right: "10%",
        bottom: "-5%",
        transition: "transform 1s 0.2s linear",
      },
      img: img5.src,
    },
    {
      id: 6,

      style: {
        position: "absolute",
        right: "25%",
        bottom: "10%",
        transition: "transform 0.9s 0.1s linear",
      },
      img: img6.src,
    },
  ];

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
        <StyledImg />
        {ImgTimers.map(({ id, img, style, }) => (
          <StyledImg key={id} src={img} style={style} scrollY={scrollY} />
        ))}
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
