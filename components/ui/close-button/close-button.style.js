import styled from "@emotion/styled";
import { colors, breakpointsWidth } from "styles";
import {applyMargins, applyPaddings,} from "styles";

export const ButtonWrapper = styled.button`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-color: ${colors.grey};
  border-radius: 24px;
  z-index: 1000;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  :hover {
    background-color: ${colors.red};
    svg {
      path {
        stroke: ${colors.white};
      }
    }
  }

  ${applyMargins};
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 48px;
    width: 48px;
    border-radius: 16px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    height: 48px;
    width: 48px;
    border-radius: 12px;
  }

  @media screen and (min-width: ${breakpointsWidth.dekstopLG}) {
    width: 4vw;
    height: 4vw;
    border-radius: 2.5vw;
  }
`;
