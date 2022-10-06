import {
  applyMargins,
  applyPaddings,
  colors,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 290px;
  height: 80px;
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  span {
    color: ${colors.white};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.lightOrange};

    span {
      color: ${colors.red};
    }
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    width: 220px;
    height: 64px;
    border-radius: 18px;
  }
`;
