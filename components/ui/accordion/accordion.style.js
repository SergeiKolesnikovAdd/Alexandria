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
  width: 100%;

  ${applyMargins}
`;

export const AccordionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 32px;
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.white};
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")}

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    max-height: 96px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 18px;
    max-height: inherit;
  }
`;

export const InnerContent = styled.div`
  display: flex;
  width: 100%;
  border-radius: 32px;
  ${getCurrentMarginStyle("top", "xxsm")};
  ${getCurrentPaddingStyle("verical", "mdlg")};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.lightOrange};
  transition: background-color 0.3s;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
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
  color: ${colors.black};
  text-align: left;
  color: ${({ isShowing }) => (isShowing ? colors.white : colors.black)};
  transition: color 0.3s;
  width: 35vw;

  ${applyPaddings}
  ${applyMargins}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 56px;
  min-height: 56px;
  border-radius: 16px;
  background-color: ${({ isShowing }) =>
    isShowing ? colors.red : colors.grey};
  transition: background-color 0.3s;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 16px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 12px;
    margin-left: 8px;
  }
`;

export const IconMinus = styled(Minus)`
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
  transition: display 0.3s;
`;

export const IconPlus = styled(Plus)`
  display: ${({ isShowing }) => (isShowing ? "none" : "block")};
  transition: display 0.3s;
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: 0;
  color: ${({ isShowing }) => (isShowing ? colors.white : colors.black)};
  opacity: ${({ isShowing }) => (isShowing ? 1 : 0)};
  transition: color 0.2s, opacity 0.2s;
  transition-delay: 0.1s;
`;

export const StyledLinkText = styled(Text)`
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

export const StyledText = styled(Text)`
  width: 23vw;
  color: ${colors.white};
`;

export const H3Styled = styled(Text)`
  ${getCurrentFontSizeStyle("h3")};
  width: 21vw;
  color: ${colors.white};
`;