import {
  applyPaddings,
  applyMargins,
  getCurrentFontSizeStyle,
} from "styles";
import styled from "@emotion/styled";
import { H3 } from "components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;