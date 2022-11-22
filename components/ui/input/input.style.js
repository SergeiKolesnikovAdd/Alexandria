import {
  applyMargins,
  applyPaddings,
  colors,
  fontFamilies,
  fontSizes,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";
import { getCurrentMarginStyle } from "styles";
import { getCurrentSizeStyle } from "styles";

const errorConditionColor = ({ isError }) =>
  isError ? `color:${colors.brightRed};` : "";

const errorConditionBackgroundColor = ({ isError }) =>
  isError ? `background-color: ${colors.brightRed}; transform: scaleX(1);` : "";

const whiteInput = ({ isWhite }) =>
  isWhite ? `color:${colors.brightRed}; ` : "";
const whiteInputFont = ({ isWhite }) =>
  isWhite ? getCurrentFontSizeStyle("text") : getCurrentFontSizeStyle("h3");
const whiteInputPadding = ({ isWhite }) =>
  isWhite
    ? getCurrentPaddingStyle("left", "mdlg")
    : getCurrentPaddingStyle("", "none");

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
  transform-origin: left;
  background-color: ${colors.red};
  transition: transform 0.5s;

  ${({ isWhite, isError }) =>
    isWhite
      ? isError
        ? `background-color: ${colors.brightRed}; transform: scaleX(1);`
        : ""
      : ""}

  ${({ isWhite, isActive }) =>
    isActive ? (isWhite ? "transform: scaleX(0)" : "transform: scaleX(1)") : "transform: scaleX(0)"}
`;

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${hexToRGBA(colors.black, 0.2)};
`;

export const InputStyled = styled.input`
  width: 100%;
  color: ${hexToRGBA(colors.black, 0.2)};
  font-family: ${fontFamilies.Font};
  color: ${({ isWhite }) => (isWhite ? colors.white : colors.black)};
  font-size: ${({ isWhite }) => (isWhite ? fontSizes.text : fontSizes.h3)};
  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: ${({ isWhite }) => (isWhite ? "scaleX(0)" : "scale(1)")};
    }
  }

  &::placeholder {
    background: ${({ isWhite }) => (isWhite ? colors.black : "transparent")};
    font-family: ${fontFamilies.Font};
    font-size: ${({ isWhite }) =>
      isWhite ? getCurrentSizeStyle : fontSizes.h3};
    color: ${({ isWhite }) =>
      isWhite ? hexToRGBA(colors.white, 0.2) : hexToRGBA(colors.black, 0.2)};
    text-align: ${({ isWhite }) => (isWhite ? "center" : "left")};
  }
  ${whiteInputFont};
  ${({ isWhite }) => (isWhite ? "" : errorConditionColor)};
  ${whiteInputPadding};
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.brightRed};
  font-family: ${fontFamilies.Font};
  display: flex;
  align-items: center;
  justify-content: ${({ isWhite }) => (isWhite ? "center" : "flex-start")};
  ${getCurrentFontSizeStyle("caption")};
`;

export const InputWrapper = styled.div`
  position: relative;
  ${applyMargins};
  ${applyPaddings}
  ${getCurrentPaddingStyle("right", "none")};
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

export const ErrorWrapper = styled.span`
  ${getCurrentMarginStyle("top", "xxsm")}
  display:flex;
  align-items: center;
  flex-direction: row;
`;
