import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const FirstSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  ${getCurrentPaddingStyle("horizontal", "xlg")};
`;

export const FirstSlideBGImage = styled.div`
  width: 1760px;
  height: 480px;
  overflow: hidden;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 110vw;
    height: 30vw;
  }
`;