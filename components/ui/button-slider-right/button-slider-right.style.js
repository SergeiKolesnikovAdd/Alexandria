import { applyMargins, applyPaddings, colors, breakpointsWidth } from "styles";

import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  width: 64px;
  height: 64px;
  background-color: ${colors.black};
  border: 1px solid ${colors.red};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: rgba(255, 255, 255, 0.04);
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.red};

    svg {
      min-height: inherit;
      path {
        fill: ${colors.white};
        min-height: inherit;
      }
    }
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    position: absolute;
    bottom: 0;
    z-index: 90;
    width: 100%;
    height: 20%;
    background-color: none;
    border: none;
    opacity: 0;
    &:hover {
      background-color: none;
    }
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 4vw;
    height: 4vw;
    border-radius: 1vw;
  }
`;
