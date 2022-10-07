import { ButtonSliderLeft } from "../button-slider-left";
import { ButtonSliderRight } from "../button-slider-right";
import { colors, breakpointsWidth, } from "styles";
import styled from "@emotion/styled";

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 48px;
  position: relative;
  width: 45vw;
  height: 45vw;
`;

const positions = [
  {
    opacity: 0,
    opacityOverlay: 1,
    translateX: "50%",
    scale: 1,
    transition: 0,
  },
  {
    opacity: 1,
    opacityOverlay: 1,
    translateX: "0%",
    scale: 1,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0.4,
    translateX: "-5.666666667%",
    scale: 0.8888888889,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0.2,
    translateX: "-10.22222222%",
    scale: 0.7777777778,
    transition: 1,
  },
  {
    opacity: 1,
    opacityOverlay: 0,
    translateX: "-13.66666667%",
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
  position: relative;
`;