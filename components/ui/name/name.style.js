import styled from "@emotion/styled";
import { breakpointsWidth } from "styles";
import { getVW } from "styles";
import { getCurrentPaddingStyle } from "styles";

export const NameWrapper = styled.svg`
  width: 160px;
  height: 64px;
  display: inline-block;
  cursor: pointer;
  ${getCurrentPaddingStyle("left", "mdsm")};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 125px;
    height: 18px;
  }
`;
