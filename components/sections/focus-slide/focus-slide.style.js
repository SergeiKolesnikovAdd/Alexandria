import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentFontSizeStyle,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  breakpointsWidth,
} from "styles";

import { H3 } from "components";
import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  ${applyMargins}
  ${applyPaddings}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 80px;
  width: 100%;
  padding-top: 40px;

  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    flex-direction: column;
    border-radius: 48px;
    position: relative;
  }
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${getCurrentBackgroundColorStyles("black")};

  /* @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    span {
      width: 100%;
    }
  } */
`;

export const HigherPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getCurrentBackgroundColorStyles("black")};
`;

export const SliderWrapper = styled.div`
  /* width: 752px; */
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
  color: ${colors.white};
`;

export const ControlButtons = styled.div`
  display: flex;

  ${applyMargins}
  ${applyPaddings}
`;

export const StyledDesktopBR = styled.br`
  display: block;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;