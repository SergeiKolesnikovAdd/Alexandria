import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
} from "styles";

import { Text, H3 } from "components";
import styled from "@emotion/styled";
import { Caption } from "components";
import { getCurrentPaddingStyle } from "styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}

`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
`;

export const Link = styled.a`
  :hover {
    transition: opacity 0.3s;
    opacity: 0.4;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    margin-bottom: 16px;
    margin-top: 12px;
  }
`;

export const StyledText = styled(Text)`
  color: ${colors.red};

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

export const StyledDescription = styled(Text)`
  width: 55%;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 100%;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  width: 100%;
  ${getCurrentMarginStyle("top", "xxlg")};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getCurrentMarginStyle("right","mdsm")}

  ${applyPaddings}
  ${applyMargins}
`;

export const SliderWrapper = styled.div`
  /* width: 752px; */
`;

export const ImgSlide = styled.img`
  ${({ isOpen }) => !isOpen && "display: none;"}
  object-fit: contain;
  width: 63vw;
  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    width: 100%;
    align-self: center;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding: 0px 16px 0px 16px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    margin-top: 24px;
  }
`;

export const StyledCaption = styled(Caption)`
  ${({ isOpen }) => !isOpen && "display: none;"}
  opacity: 0.4;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    align-self: right;
  }
`;
