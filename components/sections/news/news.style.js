import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
} from "styles";

import { Text, H3, Caption } from "components";
import styled from "@emotion/styled";
import News from "../../../public/news.png";

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
  flex-direction: column;
  width: 100%;

  ${applyPaddings}
  ${applyMargins}
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
  width: auto;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 100%;
  }

  ${applyMargins}
  ${applyPaddings}
`;

export const MediaContainer = styled.div`
  display: flex;
  width: 100%;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};

  ${applyPaddings}
  ${applyMargins}

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {

  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    flex-direction: column;
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
  object-fit: contain;
  width: 40vw;
  content: url(${News.src});

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding: 0px 16px 0px 16px;
    width: 100vw;
    align-self: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledCaption = styled(Caption)`
  ${({ isOpen }) => !isOpen && "display: none;"}
  opacity: 0.4;

  @media screen and (max-width: ${breakpointsWidth.desktopSM}) {
    align-self: right;
  }
`;
