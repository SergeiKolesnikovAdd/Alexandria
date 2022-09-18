import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
  applyMargins,
  applyPaddings,
} from "styles";

import img from "public/first-slide-bg.png";

import styled from "@emotion/styled";
import { Text } from "components";

const isShow = ({ inView }) =>
  inView ? `opacity: 0.1; transition: 3s;` : `opacity: 1; transition: 3s;`;

export const FirstSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  ${getCurrentPaddingStyle("top", "xxlg")};

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


export const AppearanceAnimation = styled(Text)`
  ${isShow};
`;