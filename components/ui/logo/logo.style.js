import styled from "@emotion/styled";
import {breakpointsWidth, applyPaddings, applyMargins} from "styles";

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

  @media screen and (min-width: ${breakpointsWidth.dekstopLG}) {
    width: 4vw;
    height: 4vw;
  }
`;
