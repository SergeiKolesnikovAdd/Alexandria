import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyMargins,
  colros,
  hexToRGBA,
  fontSizes,
  sizes,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { CloseButton } from "../../ui/close-button/close-button.jsx";

export const ContentSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${hexToRGBA(colors.black, 0.9)};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
  overflow: hidden;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 48px;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
  overflow: hidden;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
  }
`;

export const Title = styled.div`
  display: flex;
  ${getCurrentMarginStyle("top", "mdsm")}
  ${getCurrentMarginStyle("bottom", "lg")}
`;

export const Subtitle = styled.div`
  opacity: 0.4;
  span {
    font-size: 24px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    span {
      font-size: 20px;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    span {
      font-size: 18px;
    }
  }
`;

export const ClsButton = styled(CloseButton)`
position: absolute;
right: 0;
top: 0;
`;
