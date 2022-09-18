import { Caption, H2, Text, H3, } from "components";
import { Diagram, Flag, Message, Pen } from "../../common";
import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentBackgroundColorStyles,
  getCurrentColor,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 80px;
  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const AdvantageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${getCurrentMarginStyle("top", "xxlg")};
`;

export const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${getCurrentColor("red")};
  width: 368px;
  height: 368px;
  border-radius: 48px;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
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
`;

export const StyledPen = styled(Pen)``;

export const StyledFlag = styled(Flag)``;

export const StyledDiagram = styled(Diagram)``;

export const StyledMessage = styled(Message)``;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
  color: ${colors.white};
`;
