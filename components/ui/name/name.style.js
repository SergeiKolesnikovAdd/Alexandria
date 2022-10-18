import styled from "@emotion/styled";
import { applyPaddings } from "styles";
import { colors } from "styles";
import { applyMargins } from "styles";
import { breakpointsWidth } from "styles";
import { getVW } from "styles";
import { getCurrentPaddingStyle } from "styles";

export const NameWrapper = styled.svg`
  width: 160px;
  height: 64px;
  display: inline-block;
  cursor: pointer;
  path {
    /* fill: ${({ isOpen }) => (isOpen ? colors.white : colors.black)}; */
    fill: ${colors.black};
  }

  ${applyPaddings}
  ${applyMargins}
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 125px;
    height: 18px;
  }
`;
