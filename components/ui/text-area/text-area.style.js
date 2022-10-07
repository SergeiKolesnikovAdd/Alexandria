import styled from "@emotion/styled";
import {
    breakpointsWidth,
    colors,
    fontFamilies,
    fontSizes, getCurrentColor,
    getCurrentFontSizeStyle,
    getCurrentPaddingStyle,
    getCurrentMarginStyle,
    hexToRGBA,
    applyMargins,
} from "styles";

const lineHeight = 38
export const InputWrapper = styled.div`
  position: relative;
  ${({ isFullWidth }) => isFullWidth && "width: 100%;"}
`;

export const TextAreaInput = styled("textarea")`
  width: 100%;
  overflow: hidden;
  resize: none;
  ${getCurrentFontSizeStyle("h3")};
  font-family: ${fontFamilies.Font};
  color: ${colors.black};
  line-height: ${`${lineHeight}px`};
  background-image: ${`linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${hexToRGBA(
    colors.black,
    0.2
  )} 0px)`};
  background-size: ${`100% ${lineHeight}px`};
  ${applyMargins}

  &::placeholder {
    color: ${hexToRGBA(colors.black, 0)};
  }
`;



export const TextAreaWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;

    font-size: ${fontSizes.h3};
    font-family: ${fontFamilies.Font};
    line-height: ${lineHeight + "px"};
    background-image: ${`linear-gradient(transparent, transparent calc(${lineHeight}px - 2px), ${colors.red} 0px)`};
    background-size: ${`100% ${lineHeight}px`};
    transition: transform 0.5s;
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transform-origin: left;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.brightRed};
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.Font};

  ${getCurrentFontSizeStyle("caption")};
`;