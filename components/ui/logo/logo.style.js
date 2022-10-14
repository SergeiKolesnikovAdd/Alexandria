import styled from "@emotion/styled";
import { applyPaddings } from "styles";
import { applyMargins } from "styles";
import { breakpointsWidth } from "styles";

export const LogoWrapper = styled.svg`
  display: inline-block;
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: transform 0.3s;
  ${applyMargins};
  ${applyPaddings};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 48px;
    height: 48px;
  }
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 32px;
    height: 32px;
  }
`;
