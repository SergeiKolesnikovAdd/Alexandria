import styled from "@emotion/styled";
import { ButtonSliderRight } from "../button-slider-right";
import { ButtonSliderLeft } from "../button-slider-left";



export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 48px;
`;

export const Slide = styled.div`
  width: 720px;
  height: 720px;
  position: absolute;
  left:33.5%;
  opacity: 1;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 48px;
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
