import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
  applyPaddings,
  applyMargins,
  colors,
} from "styles";

import { Text } from "components";

import img from "public/about-bg.png";

import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}
`;

export const AboutBGImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${applyPaddings}
  ${applyMargins}
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
  }
`;

export const AboutSlideBGImage = styled.img`
  width: 100%;
  height: 100%;
  content: url(${img.src});
`;

export const StyledText = styled(Text)`
  color: ${colors.red};

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${colors.red};
    display: block;
    ${getCurrentMarginStyle("top", "xxxsm")};
  }
`;
