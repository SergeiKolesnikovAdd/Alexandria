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

const errorConditionColor = ({ isError }) =>
  isError ? `color:${colors.brightRed};` : "";

const errorConditionBackgroundColor = ({ isError }) =>
  isError ? `background-color: ${colors.brightRed}; transform: scaleX(1);` : "";

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
  transform-origin: left;
  background-color: ${colors.red};
  transition: transform 0.5s;

  ${errorConditionBackgroundColor}
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
  color: ${colors.black};
  font-size: ${fontSizes.h3};

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }

  &::placeholder {
    font-family: ${fontFamilies.Font};
    color: ${hexToRGBA(colors.black, 0.2)};
  }

  ${errorConditionColor}
  ${getCurrentFontSizeStyle("h3")};
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.brightRed};
  /* position: absolute; */
  /* top: calc(100% + 4px); */
  font-family: ${fontFamilies.Font};
  display: flex;
  align-items: center;
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
align-items:center;
flex-direction:row;
`;