import { applyMargins, applyPaddings, colors, breakpointsWidth } from "styles";

import styled from "@emotion/styled";
import { getVW } from "styles";

export const ButtonWrapper = styled.button`
  width: 64px;
  height: 64px;
  background-color: ${colors.black};
  border: 1px solid ${colors.red};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${colors.red};
      min-height: inherit;
    }
  }

  span {
    color: rgba(255, 255, 255, 0.04);
    transition: color 0.3s;
  }

  &:hover {
    background-color: #b16249;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: ${colors.white};
        min-height: inherit;
      }
    }
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 4vw;
    height: 4vw;
    border-radius: ${getVW(24)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 16px;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 12px;
  }
`;
