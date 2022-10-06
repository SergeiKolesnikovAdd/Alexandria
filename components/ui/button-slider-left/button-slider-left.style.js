import { applyMargins, applyPaddings, colors } from "styles";

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
      path {
        fill: ${colors.white};
      }
    }
  }

  ${applyMargins}
  ${applyPaddings}
`;
