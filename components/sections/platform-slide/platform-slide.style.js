import styled from "@emotion/styled";
import { H2 } from "components";
import { H3 } from "components";
import {
  applyMargins,
  applyPaddings,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  position: relative;

  ${applyMargins}
  ${applyPaddings}
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;

export const TextWrapper = styled.div`
  h2 {
    display: inline;
    span {
      display: inline;
      letter-spacing: -0.04em;
      @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
        font-size: 48px;
      }
    }
    @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
      display: block;
    }
  }
`;

export const StyledDesktopLGBR = styled.br`
  display: block;
  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    display: none;
  }
`;

export const StyledDesktopMDBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    display: none;
  }
`;

export const StyledDesktopSMBR = styled.br`
  display: none;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    display: block;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: none;
  }
`;

export const StyledTabletSMBR = styled.br`
  display: none;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: block;
  }

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

export const StyledImg = styled.img`
  display: block;
  width: 7vw;
  height: 7vw;
  border-radius: 2vw;
  object-fit: cover;
  z-index: -10;
  ${({ scrollY }) =>
    scrollY && `transform: scale(${scrollY}) translateY(${30 * scrollY}px);`};
  :first-of-type {
    display: none;
  }
`;

export const StyledNBSP = styled.span`
  opacity: 0;
  pointer-events: none;
  ${getCurrentFontSizeStyle("H2")};
`;