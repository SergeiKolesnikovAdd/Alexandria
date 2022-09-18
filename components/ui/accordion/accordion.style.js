import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  getCurrentFontSizeStyle
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
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 32px;
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.white};

  ${applyPaddings}
  ${applyMargins}
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
    isShowing ? colors.black : colors.white};
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

  ${applyPaddings}
  ${applyMargins}
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: ${({ isShowing }) => (isShowing ? colors.red : colors.grey)};

  ${applyPaddings}
  ${applyMargins}
`;

export const IconMinus = styled(Minus)`
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
`;

export const IconPlus = styled(Plus)`
  display: ${({ isShowing }) => (isShowing ? "none" : "block")};
`;

export const TextWrapper = styled.div`
  display: flex;
  text-align: left;
  margin: 0;
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
`;