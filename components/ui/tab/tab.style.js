import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  getCurrentFontSizeStyle,
  breakpointsWidth,
  hexToRGBA,
} from "styles";

import { Text, H3, Caption,  } from "components";
import { ButtonMD } from "../button-md";

import styled from "@emotion/styled";

export const TabWrapper = styled.div`
  width: 100%;
  display: none;

  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
  }
`;

export const StyledText = styled(Text)`
  font-size: 12px;
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
`;

export const StyledCaption = styled(Caption)`
  display: ${({ isShowing }) => (isShowing ? "inline" : "none")};
  color: ${colors.red};
  cursor: pointer;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${colors.red};
    display: block;
    ${getCurrentMarginStyle("top", "xxxsm")};
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};

  ${applyMargins};
`;

export const DescItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};
  padding-top: 8px;
  padding-bottom: 24px;
  display: ${({ isShowing }) => (isShowing ? "flex" : "none")};

  span {
    font-size: 12px;
    width: 75vw;
    margin-bottom: 24px;
  }
`;

export const DescText = styled(Text)`
  display: ${({ isShowing }) => (isShowing ? "inline" : "none")};
  
`;

export const NewButton = styled(ButtonMD)`
  ${getCurrentMarginStyle("top", "mdlg")};
  display: ${({ isShowing }) => (isShowing ? "block" : "none")};
`;

