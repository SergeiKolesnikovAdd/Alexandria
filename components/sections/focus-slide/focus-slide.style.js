import {
  getCurrentBackgroundColorStyles,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  colors,
  applyMargins,
  applyPaddings,
} from "styles";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${colors.black};
  border: 1px solid ${colors.black};
  border-radius: 80px;
  width: 100%;
  height: 50vw;
  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("vertical", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${getCurrentBackgroundColorStyles("black")};
`;

export const HigherPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${getCurrentBackgroundColorStyles("black")};
`;

export const SliderWrapper = styled.div`
  height: available;
  width: 752px;
`;