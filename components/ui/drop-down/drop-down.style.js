import {
  applyMargins, applyPaddings,
  colors,
  fontFamilies, fontSizes, getCurrentColor,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  breakpointsWidth, getVW,
} from "styles";

import styled from "@emotion/styled";

const errorConditionBackgroundColor = ({isError}) =>
    isError ? `background-color: ${colors.red}; transform: scaleX(1);` : "";

export const UnderlineInner = styled.div`
  width: 100%;
  height: 100%;
  transform: scaleX(${({isActive}) => (isActive ? 1 : 0)});
  transform-origin: left;
  background-color: ${colors.white};
  transition: transform 0.5s;

  ${errorConditionBackgroundColor}
`;

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${hexToRGBA(colors.white, 0.2)};
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: ${getVW(2)};
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  left: 0;
  top: calc(100% - 4px);
  width: 100%;
  background-color: ${colors.black};
  visibility: hidden;
  max-height: 0;
  transform-origin: top;
  transition: max-height 0.35s, visibility 0.35s;
  overflow: hidden;
  z-index: 5;
  
  ${({isOpen}) => (isOpen && {
    visibility: "visible",
    maxHeight: "var(--height-drop-down, 40vh)",
  })};

  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    top: calc(100% - ${getVW(2)});

    ${({isOpen}) => (isOpen && {
      maxHeight: "calc(var(--height-drop-down, 40vh) / 1600 * 100vw)",
    })};
  }

  @media (max-width: ${breakpointsWidth.tabletSM}) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: auto;
    text-align: center;
    overflow: visible;

    &:after {
      content: 'select the desired item';
      font-family: ${fontFamilies.subFont};
      font-style: normal;
      font-weight: 700;
      display: inline-block;
      text-transform: uppercase;
      ${getCurrentFontSizeStyle("caption")};
      color: ${colors.white};
      position: absolute;
      bottom: calc(100% + 24px);
      left: 50%;
      transform: translateX(-50%);
      transition: opacity 0.4s;
      opacity: 0;

      ${({isOpen}) => (isOpen && {
        opacity: 1
      })};
    }
  }

  @media (max-width: ${breakpointsWidth.phone}) {
    &:after {
      bottom: calc(100% + 12px);
    }
  }
`;

export const IconPlus = styled.svg`
  display: inline-block;
  width: 26px;
  height: 26px;
  transition: stroke .3s;
  ${({isOpen, isActive,}) => {
    if (isOpen) {
      return { stroke: colors.red };
    } else if (isActive) {
      return { stroke: colors.white };
    } 
  }};
`;

export const DropDownItem = styled.li`
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;
  font-family: ${fontFamilies.mainFont};
  ${getCurrentFontSizeStyle("h3")};
  height: 50px;
  padding: 10px 6px 6px;
  transition: background-color 0.3s;
  font-weight: 800;
  letter-spacing: 0.01em;

  &:hover {
    background-color: ${({ theme }) => getCurrentColor("primary", theme)};
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    background-color: ${getCurrentColor("primary", theme)};
    `};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    padding: ${getVW(10)} ${getVW(6)} ${getVW(6)};
    height: ${getVW(50)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 40px;
    padding: 8px 6px 7px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 32px;
    padding: 7px 6px 7px;
  }
`;

export const CurrentLabel = styled.span`
`

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  color: ${({theme}) => theme.primary};
  text-transform: uppercase;
  font-family: ${fontFamilies.mainFont};
  ${getCurrentPaddingStyle("vertical", "xxsm")};
  font-family: ${fontFamilies.mainFont};
  text-align: left;
  transition: color 0.3s;

  ${({isOpen, isActive, isError, theme}) => {
    if (isOpen) {
      return {color: colors.white};
    } else if (isActive) {
      return {color: getCurrentColor("primary", theme)};
    } else if (isError) {
      return {color: colors.red};
    } else {
      return {color: hexToRGBA(colors.white, 0.2)};
    }
  }}

  &:hover {
    & + ${Underline} ${UnderlineInner} {
      transform: scaleX(1);
    }
  }

  ${getCurrentFontSizeStyle("h3")};

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    align-items: flex-end;
  }
`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.red};
  text-transform: uppercase;
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.subFont};

  ${getCurrentFontSizeStyle("caption")};
  
    @media screen and (min-width: ${breakpointsWidth.desktopLG}) {  
      top: calc(100% + ${getVW(4)});
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  ${({isFullWidth}) => isFullWidth && "width: 100%;"}
  ${applyMargins};
  ${applyPaddings}
`;
