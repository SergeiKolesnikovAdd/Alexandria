import { ButtonSliderLeft } from "../button-slider-left";
import { ButtonSliderRight } from "../button-slider-right";
import { colors, breakpointsWidth, getCurrentFontSizeStyle, getCurrentPaddingStyle, getCurrentMarginStyle, } from "styles";
import styled from "@emotion/styled";
import { Caption } from "components";

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 48px;
  position: relative;
  width: 45vw;
  height: 45vw;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    ${getCurrentMarginStyle("top","xlg")}
    width: 93.75vw;
    height: 93.75vw;
  }
`;

const positions = [
  {
    opacity: 0,
    opacityOverlay: 1,
    translateX: "50%",
    translateY: "50%",
    scale: 1,
    transition: 0,
  },
  {
    opacity: 1,
    opacityOverlay: 1,
    translateX: "0%",
    translateY: "0%",
    scale: 1,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0.4,
    translateX: "-5.666666667%",
    translateY: "-5.666666667%",
    scale: 0.8888888889,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0.2,
    translateX: "-10.22222222%",
    translateY: "-10.22222222%",
    scale: 0.7777777778,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0,
    translateX: "-13.66666667%",
    translateY: "-13.66666667%",
    scale: 0.6666666667,
    transition: 1,
  },
];

export const SliderOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: ${({ index }) => 1 - positions[index].opacityOverlay};
  transition: ${({ isNextDirection, index }) =>
    isNextDirection ? (index === 0 ? 0 : 1) : index === 4 ? 0 : 1}s;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 93, 75vw;
  }
`;

const getTransitionTime = ({ isNextDirection, index }) =>
  (isNextDirection ? (index === 0 ? 0 : 1) : index === 4 ? 0 : 1) + "s";

export const Slide = styled.div`
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 48px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
  transition: opacity ${getTransitionTime}, transform ${getTransitionTime};
  opacity: ${({ index }) => positions[index].opacity};
  transform: translateX(${({ index }) => positions[index].translateX})
    scale(${({ index }) => positions[index].scale});
  z-index: ${({ index }) => 10 - index};
  transform-origin: left center;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    transform: translateY(${({ index }) => positions[index].translateY})
      scale(${({ index }) => positions[index].scale});
    transform-origin: bottom center;
    width: 93, 75vw;
  }
`;

export const SlideNext = styled(ButtonSliderRight)`
  position: relative;
  top: 25%;
  right: 90%;
`;

export const SlidePrev = styled(ButtonSliderLeft)`
  position: relative;
  top: 25%;
  right: 110%;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  z-index: 1000;
  color: ${colors.white};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin: 0px 24px 24px 24px;
  }
`;

export const StyledCaption = styled(Caption)`
  ${getCurrentFontSizeStyle("h3")};
`;