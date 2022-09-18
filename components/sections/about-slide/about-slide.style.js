import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
} from "styles";

import { Text, H1 } from "components";
import img from "public/about-bg.png";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}
`;

export const AboutBGImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${applyPaddings}
  ${applyMargins}
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
  }
`;

export const AboutSlideBGImage = styled.img`
  width: 79vw;
  height: 52vw;
  content: url(${img.src});
`;

export const Link = styled.a`
  :hover {
    transition: opacity 0.3s;
    opacity: 0.4;
  }
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

export const H1Styled = styled(H1)`
  ${getCurrentFontSizeStyle("h2")};
`;