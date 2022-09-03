import {
  applyColor,
  applyMargins,
  applyPaddings,
  fontFamilies,
  getCurrentFontSizeStyle,
} from "styles";

import styled from "@emotion/styled";

export const Text = styled.span`
  font-family: ${fontFamilies.Font};
  /* TODO: НАСТРЙОКА СВОЙСТВ */
  font-style: normal;
  font-weight: 800;
  display: inline-block;
  line-height: 100%;
  text-transform: uppercase;

  ${applyMargins};
  ${applyPaddings}
  ${applyColor};
  ${getCurrentFontSizeStyle("h1")};
`;
