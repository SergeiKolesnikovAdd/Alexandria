import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyPaddings,
  applyMargins,
  colors,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import { Text, H3, Caption } from "components";

import styled from "@emotion/styled";
import { arrNews } from "../../sections/news-slide/constant";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 48px;
  background-color: ${colors.white};

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
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
  background-image: url(${arrNews.img});
  /* TODO: ПРОВЕРИТЬ КАК РАБОТАЕТ */
  background-repeat: no-repeat;
  background-size: cover;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    height: 180px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 160px;
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

export const Date = styled(Caption)`
  opacity: 0.4;

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: none;
  }
`;

export const TabletDate = styled(Caption)`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    display: inline-block;
    opacity: 0.4;
  }
`;

export const Dot = styled.div`
  align-self: center;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${colors.red};
  ${getCurrentMarginStyle("horizontal","xsm")};
`;

export const LinkRow = styled.div`
  display: flex;
`;
