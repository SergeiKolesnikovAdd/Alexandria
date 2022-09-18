import {
  getCurrentBackgroundColorStyles,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  colors,
  applyMargins,
  applyPaddings,
  getCurrentFontSizeStyle,
} from "styles";
import styled from "@emotion/styled";

import { H3 } from "components";

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  background-color: ${getCurrentBackgroundColorStyles("black")};
`;

export const HigherPart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${getCurrentBackgroundColorStyles("black")};
`;

export const SliderWrapper = styled.div`
  height: available;
  width: 752px;
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
  color: ${colors.white};
`;