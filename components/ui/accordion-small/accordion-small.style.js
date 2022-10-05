import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import { Text, H3 } from "components";
import { Plus, Minus } from "../../common";

import styled from "@emotion/styled";

export const AccordionWrapper = styled.div`
  ${applyMargins}
`;

export const AccordionButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  background-color: ${colors.white};
  border-radius: 24px;
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("right", "none")}
  ${getCurrentPaddingStyle("left", "md")}
  background-color: ${({ isShowing }) =>
    isShowing ? colors.red : colors.white};
  transition: background-color 0.3s;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 18px;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  width: 100%;
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
  border-radius: 24px;
  background-color: ${({ isShowing }) =>
    isShowing ? colors.white : colors.red};
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("left", "md")}
  ${getCurrentPaddingStyle("top", "mdsm")}
  ${getCurrentPaddingStyle("right", "md2")}
  ${getCurrentPaddingStyle("bottom", "md2")}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 18px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  text-align: left;
`;

export const Title = styled(H3)`
  color: ${({ isShowing }) => (isShowing ? colors.white : colors.black)};
  text-align: left;
  transition: color 0.3s;

  ${applyPaddings}
  ${applyMargins}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background-color: ${colors.grey};
  transition: background-color 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 48px;
    height: 48px;
  }
`;

export const IconMinus = styled(Minus)`
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
  transition: display 0.3s;
  
  path {
    stroke:${colors.red};
  }
`;

export const IconPlus = styled(Plus)`
  display: ${({ isShowing }) => (isShowing ? "none" : "block")};
  transition: display 0.3s;
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: 0;
  opacity: ${({ isShowing }) => (isShowing ? 0 : 1)};
  transition: color 0.2s, opacity 0.2s;
  transition-delay: 0.1s;
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

export const H3Styled = styled(Text)`
  ${getCurrentFontSizeStyle("h3")};
  color: ${({ isShowing }) => (isShowing ? colors.black : colors.white)};
`;