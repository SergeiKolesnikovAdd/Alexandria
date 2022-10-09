import {
  applyMargins,
  applyPaddings,
  colors,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: max-content;
  height: max-content;
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 24px 60px 24px 60px;

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
    padding: 18px 40px 18px 40px;
    border-radius: 18px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding: 12px 32px 12px 32px;
    border-radius: 12px;
  }
`;
