import { applyMargins, applyPaddings, colors, } from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 112px;
  height: 38px;
  background-color: ${colors.darkOrange};
  border: 1px solid ${colors.darkOrange};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  span {
    color: ${colors.red};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.lightOrange};

    span {
      ${colors.darkOrange};
    }
  }

  ${applyMargins}
  ${applyPaddings} 
`;
