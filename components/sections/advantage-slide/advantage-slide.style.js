import {
  getCurrentColor,
  getCurrentBackgroundColorStyles,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  colors,
} from "styles";
import styled from "@emotion/styled";
import { Text, Caption, H2, } from "components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${getCurrentBackgroundColorStyles("black")};
  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
  width: 100%;
`;

export const AdvantageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const AdvantageItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${getCurrentColor("red")};
  width: 368px;
  height: 368px;
  border-radius: 48px;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
`;

export const StyledH2 = styled(H2)`
  ${colors.white};
`;

export const StyledText = styled(Text)`
  ${colors.white};
`;

export const StyledCaption = styled(Caption)`
  ${colors.white};
  opacity: 0.4;
`;

// export const imgWrapper = styled.div`
//   position: relative;
//   width: 64px;
//   height: 64px;
//   border-radius: 24px;
//   ${getCurrentBackgroundColorStyles("white")};
// `;

// export const img = styled.img`
//   width: 64px;
//   height: 64px;
//   border-radius: 24px;
//   ${getCurrentBackgroundColorStyles("white")};
// `;