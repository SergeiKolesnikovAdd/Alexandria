import styled from "@emotion/styled";
import { Caption } from "components";
import { Text } from "components";
import { getCurrentMarginStyle } from "styles";
import { sizes } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { colors } from "styles";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column ;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  height: ${sizes["desktopLG"].x3};
  ${getCurrentPaddingStyle("top", "xxxlg")};
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const FooterItem = styled(Text)`
  ${getCurrentPaddingStyle("bottom", "md")};
`;

export const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 24px;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${getCurrentPaddingStyle("", "md")};
  ${getCurrentMarginStyle("right", "xsm")};
  cursor: pointer;
`;
