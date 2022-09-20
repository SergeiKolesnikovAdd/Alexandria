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

const errorConditionColor = ({ isError }) =>
  isError ? `color:${colors.brightRed};` : "";

const errorConditionBackgroundColor = ({ isError }) =>
  isError
    ? `background-color: ${colors.brightRed}; transform: scaleX(1);`
    : "";

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
  text-transform: uppercase;
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
  color: ${colors.red};
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.Font};

  ${getCurrentFontSizeStyle("caption")};
`;

export const InputWrapper = styled.div`
  position: relative;
  ${applyMargins};
  ${applyPaddings}
  ${getCurrentPaddingStyle("right", "none")};
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;
