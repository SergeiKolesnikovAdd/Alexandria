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
  StyledNBSP,
} from "./platform-slide.style";
import { useEffect, useRef, useState } from "react";

import { colors } from "styles";

import img1 from "public/platform1.png";
import img2 from "public/platform2.png";
import img3 from "public/platform6.png";
import img4 from "public/platform4.png";
import img5 from "public/platform5.png";
import img6 from "public/platform3.png";
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
const ImgTimers = [
  {
    id: 1,
    style: {
      position: "absolute",
      right: "5%",
      top: "25%",
      transition: "transform 0.3s linear",
    },
    img: img1.src,
  },
  {
    id: 2,

    style: {
      position: "absolute",
      left: "5%",
      top: "16%",
      transition: "transform 0.3s linear",
    },
    img: img2.src,
  },
  {
    id: 3,

    style: {
      position: "absolute",
      left: "20%",
      top: "-15%",
      transition: "transform 0.3s linear",
    },
    img: img3.src,
  },
  {
    id: 4,

    style: {
      position: "absolute",
      left: "20%",
      bottom: "5%",
      transition: "transform 0.3s linear",
    },
    img: img4.src,
  },
  {
    id: 5,

    style: {
      position: "absolute",
      right: "10%",
      bottom: "-5%",
      transition: "transform 0.3s linear",
    },
    img: img5.src,
  },
  {
    id: 6,

    style: {
      position: "absolute",
      right: "25%",
      bottom: "10%",
      transition: "transform 0.3s linear",
    },
    img: img6.src,
  },
];

export const PlatformSlide = ({setColored, ...props }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const platformRef = useRef();
  const scrollY = useScroll(platformRef);

  return (
    <>
      <ContentWrapper ref={platformRef} id="platform" {...props}>
        <H3Styled>О платформе</H3Styled>
        <TextWrapper>
          <H2 mt="mdsm">
            Мы помогаем создавать<StyledNBSP>!</StyledNBSP>
            <StyledTabletSMBR />
            <StyledPhoneBR />
            научные<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledDesktopSMBR />
            журналы<StyledNBSP>!</StyledNBSP>
            <StyledPhoneBR />и<StyledNBSP>!</StyledNBSP>книги,
            <StyledNBSP>!</StyledNBSP>
            <StyledDesktopLGBR />
            <StyledTabletSMBR />
            международного<StyledNBSP>!</StyledNBSP>
            <StyledDesktopSMBR />
            <StyledPhoneBR />
            уровня<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledTabletSMBR />
            издателям<StyledNBSP>!</StyledNBSP>
            <StyledPhoneBR />
            любого масштаба<StyledNBSP>!</StyledNBSP>
            <StyledDesktopSMBR />
          </H2>
          <H2 style={{ color: colors.orange }}>
            и<StyledNBSP>!</StyledNBSP>амбиций:<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            университетской<StyledNBSP>!</StyledNBSP>
            <StyledDesktopLGBR />
            <StyledTabletSMBR />
            <StyledPhoneBR />
            прессе,<StyledNBSP>!</StyledNBSP>
            <StyledDesktopSMBR />
            организаторам<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledTabletSMBR />
            <StyledPhoneBR />
            конференций,<StyledNBSP>!</StyledNBSP>
            <StyledDesktopLGBR />
            <StyledDesktopSMBR />
            научно-
            <StyledTabletSMBR />
            <StyledPhoneBR />
            исследовательским<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledTabletSMBR />
            институтам<StyledNBSP>!</StyledNBSP>
            <StyledDesktopLGBR />
            <StyledDesktopSMBR />
            <StyledPhoneBR />и<StyledNBSP>!</StyledNBSP>другим
            <StyledNBSP>!</StyledNBSP>
            <StyledTabletSMBR />
            организациям,<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledDesktopSMBR />
            <StyledPhoneBR />
            желающим<StyledNBSP>!</StyledNBSP>
            <StyledTabletSMBR />
            повысить<StyledNBSP>!</StyledNBSP>
            <StyledPhoneBR />
            <StyledDesktopLGBR />
            качество<StyledNBSP>!</StyledNBSP>
            <StyledDesktopMDBR />
            <StyledDesktopSMBR />
            своей<StyledNBSP>!</StyledNBSP>
            <StyledTabletSMBR />
            <StyledPhoneBR />
            издательской деятельности
          </H2>
        </TextWrapper>
        <ButtonMD
          onClick={(e) => {
            setOpenForm(true);
            setModalTitle(e.target.textContent);
            setColored(true);
          }}
          mt="lg"
        >
          Начать работу
        </ButtonMD>
        <StyledImg />
        {ImgTimers.map(({ id, img, style }) => (
          <StyledImg key={id} src={img} style={style} scrollY={scrollY} />
        ))}
      </ContentWrapper>
      <FormModal
        setColored={setColored}
        formName="О платформе"
        modalTitle={modalTitle}
        setOpen={setOpenForm}
        isOpen={isOpenForm}
      />
    </>
  );
};
