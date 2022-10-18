import { sizes, getCurrentMarginStyle, getCurrentPaddingStyle, colors, fontFamilies, breakpointsWidth} from "styles";
import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  position: fixed;
  background-color: ${({ isOpenForm }) =>
    isOpenForm ? "none" : colors.lightOrange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    height: 68px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display:none;
  }
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
  font-family: ${fontFamilies.Font};
  display: flex;
  ${getCurrentMarginStyle("right", "lg")};
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
  color: ${({ isOpenForm }) => (isOpenForm ? colors.white : colors.black)};

  &:hover {
    color: ${colors.red};
  }
`;
