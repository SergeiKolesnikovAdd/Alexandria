import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
} from "styles";

import imgLeft from "public/left-hand.png";
import imgRight from "public/right-hand.png";
import styled from "@emotion/styled";

export const FirstSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const FirstSlideBGImageWrapper = styled.div`
  width: 100%;
  height: 30vw;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
    height: 30vw;
  }
`;

const moveRight = ({}) => (
  addEventListener(scrolly, rightDirection)
)

export const LeftHand = styled.img`
  position: absolute;
  left: 0;
  width: 50%;
  height: 480px;
  content: url(${imgLeft.src});

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 50vw;
    height: 30vw;
  }
`;

export const RightHand = styled.img`
  position: absolute;
  right: 0;
  width: 50%;
  height: 480px;
  content: url(${imgRight.src});

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 50vw;
    height: 30vw;
  }
`;