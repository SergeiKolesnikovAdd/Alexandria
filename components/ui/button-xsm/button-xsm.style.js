import {
  applyMargins,
  applyPaddings,
  getCurrentColor,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";

export const Button = styled.button`
  width: 112px;
  height: 38px;
  background-color: ${getCurrentColor("red")};
  border: 1px solid ${getCurrentColor("red")};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.35s;

  span {
    color: ${getCurrentColor("white")};
    transition: color 0.35s;
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
    height: 2.375vw;
    width: 15vw;
    border-radius: 1vw;
  }
`;
