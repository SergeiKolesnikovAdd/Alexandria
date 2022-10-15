import { applyMargins, applyPaddings, colors, breakpointsWidth, getCurrentPaddingStyle, } from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: max-content;
  height: max-content;
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("vertical", "md2")};

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

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    padding: 12px 24px 12px 24px;
    border-radius: 10px;
  }

  ${applyMargins}
  ${applyPaddings}
`;
