import styled from "@emotion/styled";
import { H3 } from "components";
import {
  applyMargins,
  applyPaddings,
  getCurrentFontSizeStyle,
  colors,
  fontFamilies,
  applyColor,
  fontSizes,
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

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;

export const TextWrapper = styled.div`
  h2 {
    display: inline;
  }
`;