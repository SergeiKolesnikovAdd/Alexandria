import {
  applyMargins,
  applyPaddings,
  colors,
  breakpointsWidth,
  getCurrentPaddingStyle,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: max-content;
  background-color: ${colors.orange};
  border: 1px solid ${colors.orange};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  ${getCurrentPaddingStyle("vertical", "xsm")}
  ${getCurrentPaddingStyle("horizontal", "md")}

  span {
    color: ${colors.red};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${colors.white};
  }

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
  }
`;
