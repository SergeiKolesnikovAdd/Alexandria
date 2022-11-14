import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  fontSizes,
  fontFamilies,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import { Text, H3, Caption } from "components";

import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 48px;
  background-color: ${colors.white};
  ${getCurrentPaddingStyle("bottom", "md")};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 3vw;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 3vw;
  }

  ${applyMargins}
`;

export const PromoSection = styled.div`
  height: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("bottom", "md")};
  background-image: url(${({ img }) => img});
  /* TODO: ПРОВЕРИТЬ КАК РАБОТАЕТ */
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 48px 48px 0px 0px;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 16.25vw;
    border-radius: 3vw 3vw 0px 0px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    height: 180px;
    border-radius: 32px 32px 0px 0px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 160px;
    border-radius: 24px 24px 0px 0px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 16.25vw;
    border-radius: 3vw 3vw 0px 0px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  border-radius: 48px 48px 0px 0px;
  background: linear-gradient(
    360deg,
    rgba(40, 42, 46, 0.8) 0%,
    rgba(40, 42, 46, 0) 100%
  );
  background-size: cover;

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 16.25vw;    border-radius: 3vw 3vw 0px 0px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 32px 32px 0px 0px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px 24px 0px 0px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 3vw 3vw 0px 0px;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    justify-content: flex-start;
  }
`;

export const Date = styled.div`
  color: ${colors.white};
  z-index: 50;
  opacity: 0.4;
  font-weight: 500;
  font-size: ${fontSizes.Caption};
  font-family: ${fontFamilies.Font};

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    display: none;
  }
`;

export const TabletDate = styled(Caption)`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    display: inline-block;
    opacity: 0.4;
    color: ${colors.black};
    ${getCurrentMarginStyle("left", "mdlg")};
    ${getCurrentMarginStyle("top", "mdsm")};
  }
`;

export const Dot = styled.div`
  align-self: center;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${colors.red};
  ${getCurrentMarginStyle("horizontal", "xsm")};

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 0.25vw;
    height: 0.25vw;
  }
`;

export const LinkRow = styled.div`
  display: flex;
  z-index: 20;
  span {
    color: ${colors.white};
    font-weight: 500;
  }
`;
