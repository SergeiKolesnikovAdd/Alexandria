import { sizes, getCurrentMarginStyle, getCurrentPaddingStyle, colors, fontFamilies } from "styles";
import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  position: fixed;
  background-color: ${colors.lightOrange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes["desktopLG"].half};
  ${getCurrentPaddingStyle("horizontal", "lg")};
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height:100%;
  &:hover{
    svg{
    &:first-child{
      transform: scale(1.1);
    }}
    }
`;

export const HeaderMenuItem = styled.a`
  color: ${colors.black};
  font-family: ${fontFamilies.Font};
  display: flex;
  ${getCurrentMarginStyle("right", "lg")};
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${colors.red};
  }
`;
