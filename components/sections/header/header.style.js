import styled from "@emotion/styled";
import { Text } from "components";
import { sizes } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { colors } from "styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${colors.lightOrange};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes["desktopLG"].half};
  ${getCurrentPaddingStyle("horizontal", "lg")};
`;

export const HeaderMenu = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMenuItem = styled(Text)`
  display: flex;
  ${getCurrentPaddingStyle("right", "lg")};
  align-items: center;
  cursor: pointer;

  &:hover {
	 color: ${colors.red}
  }
`;
