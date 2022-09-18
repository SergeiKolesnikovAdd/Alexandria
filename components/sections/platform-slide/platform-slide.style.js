import styled from "@emotion/styled";

import {
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  breakpointsWidth,
  applyPaddings,
  applyMargins,
  colors,
} from "styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;