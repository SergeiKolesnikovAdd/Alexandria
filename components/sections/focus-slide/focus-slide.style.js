import {
  getCurrentBackgroundColorStyles,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
} from "styles";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${getCurrentBackgroundColorStyles("black")};
  width: 100%;
  ${getCurrentMarginStyle("horizontal", "xxxsm")};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("vertical", "lg")};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: ${getCurrentBackgroundColorStyles("black")};
  width: 100%;
`;

export const SliderWrapper = styled.div`
  height: available;
  width: 752px;
`;