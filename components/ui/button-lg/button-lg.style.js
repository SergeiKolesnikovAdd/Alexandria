import {
  applyMargins,
  applyPaddings,
  colors,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 368px;
  height: 78px;
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 16px;
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
`;
