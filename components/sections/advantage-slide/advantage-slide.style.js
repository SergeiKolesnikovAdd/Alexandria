import { Caption, H2, Text, H3, } from "components";
import { Diagram, Flag, Message, Pen } from "../../common";
import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentColor,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 80px;
  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "lg2")};
  ${getCurrentPaddingStyle("vertical", "lg")};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 32px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    border-radius: 5vw;
  }

  ${applyMargins}
  ${applyPaddings}
`;

export const AdvantageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${getCurrentMarginStyle("top", "xxlg")};
  gap: 24px;

  @media screen and (max-width: 1084px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 12px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
    height: fit-content;
  }
`;

export const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${getCurrentColor("red")};
  width: 23vw;
  min-height: 23vw;
  border-radius: 48px;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};

  @media screen and (max-width: 1084px) {
    width: 100%;
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
    min-height: inherit;
    height: 100%;
    justify-content: space-between;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    border-radius: 3vw;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledH2 = styled(H2)`
  color: ${colors.white};
`;

export const StyledText = styled(Text)`
  color: ${colors.white};
`;

export const StyledCaption = styled(Caption)`
  color: ${colors.white};
  opacity: 0.4;
  ${getCurrentMarginStyle("top", "mdsm")};
  line-height: 140%;
  font-weight: 500;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 24px;
  align-self: flex-end;
  background-color: ${colors.white};
  margin-top: 0px;

  svg {
    width: 50%;
    height: 50%;
  }

  @media screen and (max-width: ${breakpointsWidth.desktopMD}) {
    margin-top: 24px;
  }

  @media screen and (max-width: 1084px) {
    margin-top: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 16px;
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 12px;
    margin-top: 24px;
  }

  @media screen and (min-width: ${breakpointsWidth.desktopXLG}) {
    border-radius: 1.5vw;
    width: 4vw;
    height: 4vw;
  }
`;

export const StyledPen = styled(Pen)`
`;

export const StyledFlag = styled(Flag)`
`;

export const StyledDiagram = styled(Diagram)`
`;

export const StyledMessage = styled(Message)`
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
  color: ${colors.white};
`;

export const StyledPhoneBR = styled.br`
  display: none;
  @media screen and (max-width: 850px) {
    display: block;
  }
`;