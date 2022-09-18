import { Text } from "components";
import { sizes, getCurrentPaddingStyle, colors} from "styles";
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

export const HeaderMenuItem = styled(Text)`
  display: flex;
  ${getCurrentPaddingStyle("right", "lg")};
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${colors.red};
  }
`;
