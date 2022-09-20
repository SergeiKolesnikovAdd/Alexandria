import { applyMargins, applyPaddings, colors } from "styles";

import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  width: 64px;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  span {
    color: rgba(255, 255, 255, 0.04);
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.white};

    svg {
      path {
        fill: ${colors.black};
      }
    }
  }

  ${applyMargins}
  ${applyPaddings}
`;
