import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  getCurrentColor,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 460px;
  height: 64px;
  background-color: ${getCurrentColor("red")};
  border: 1px solid ${getCurrentColor("red")};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  span {
    color: ${getCurrentColor("white")};
    transition: color 0.3s;
  }

  &:hover {
    background-color: ${getCurrentColor("white")};

    span {
      color: ${getCurrentColor("red")};
    }
  }

  ${applyMargins}
  ${applyPaddings} 
  
  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    height: 4vw;
    width: 28.75vw;
    border-radius: 1vw;
  }
`;
