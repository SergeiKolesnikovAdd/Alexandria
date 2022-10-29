import { Caption, H3, Text, } from "components";

import { ButtonMD } from "../../ui/button-md";

import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";
import { sizes } from "styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getCurrentPaddingStyle("top", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    flex-direction: column;
    button {
      margin-top: 24px;
    }
  }
`;

export const TableOffer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;

  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;

export const DescColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 120px repeat(7, 88px) 104px;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;

  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: 120px repeat(8, 80px);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    grid-template-columns: repeat(1, 42vw);
  }
`;

export const PackageColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 120px repeat(7, 88px) 104px;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s;
  border-radius: 32px;

  button {
    transition: opacity 0.3s;
  }

  &:hover {
    background-color: ${colors.white};

    button {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: 120px repeat(8, 80px);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    grid-template-columns: 1 100%;
  }
`;

export const DescItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};
  span {
    font-size: 14px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 100%;
    span {
      font-size: 12px;
    }
  }
`;

export const DescText = styled(Text)`
`;

export const PackageItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getCurrentPaddingStyle("horizontal", "mdsm")}
  ${getCurrentPaddingStyle("vertical", "mdsm")}
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 100%;
  }

  ${applyPaddings}
`;

export const NewButton = styled(ButtonMD)`
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  padding: 0px 0px 0px 0px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const TabletButton = styled(ButtonMD)`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    height: 100%;
    opacity: 0;
    display: block;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledCaption = styled(Caption)`
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

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;

export const StyledText = styled(Text)`
  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    font-size: 12px;
  }
`;

export const StyledTextH3 = styled(Text)`
  ${getCurrentFontSizeStyle("h3")};
  font-weight: 500;
`;

export const ControlWrapper = styled.div`
  display: flex;

  ${applyMargins}
`;

export const PackageItemTab = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${getCurrentPaddingStyle("horizontal", "mdsm")}
  ${getCurrentPaddingStyle("top", "mdsm")}
  padding-bottom: 24px;
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};
  width: 60vw;
  height: min-content;
  overflow-y: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "12%")};
  border-bottom: ${({ isOpen }) =>
    isOpen
      ? `3px solid ${colors.red}`
      : `1px solid ${hexToRGBA(colors.black, 0.08)}`};
  &:hover {
  }

  &:focus {
    opacity: 100%;
    border-bottom: 3px solid ${colors.red};
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: flex;
  }

  ${applyPaddings}
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const StyledDesktopBR = styled.br`
  display: block;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: none;
  }
`;

export const StyledPhoneBR = styled.br`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: block;
  }
`;
