import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
  applyPaddings,
  applyMargins,
  colors,
} from "styles";

import { Text, H3, } from "components";
import { Plus, Minus } from "../../common";

import styled from "@emotion/styled";

export const AccordionWrapper = styled.div`
  width: 100%;
  height: 120px;
`;

export const AccordionButton = styled.button`
  display: flex;
  flex-direction: row;
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
  border-radius: 32px;
  ${getCurrentMarginStyle("top", "xxxsm")};
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
  background-color: ${({ isShowing }) =>
    isShowing ? colors.black : colors.white};

  ${applyPaddings}
  ${applyMargins}
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border-radius: 32px;

  ${applyPaddings}
  ${applyMargins}
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
  background-color: ${({ isShowing }) =>
    isShowing ? colors.red : colors.grey};

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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ${applyPaddings}
  ${applyMargins}
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 100%;
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
