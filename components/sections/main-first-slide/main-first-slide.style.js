import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
} from "styles";

import img from "public/first-slide-bg.png";
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
  height: 480px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
    height: 30vw;
  }
`;

export const FirstSlideBGImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 480px;
  content: url(${img.src});

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 110vw;
    height: 30vw;
  }
`;