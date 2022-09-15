import {
  getCurrentBackgroundColorStyles,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  getCurrentCulor,
} from "styles";
import styled from "@emotion/styled";
import { getCurrentMarginStyle } from "styles";

export const AdvantageSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${getCurrentBackgroundColorStyles("black")};
  ${getCurrentMarginStyle("horizontal", "xxxsm")}
  ${getCurrentPaddingStyle("horizontal", "mdlg")}
  ${getCurrentPaddingStyle("vertical", "mdlg")}
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
  border: 1px solid ${getCurrentCulor("red")};
  width: 368px;
  height: 368px;
  border-radius: 48px;
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