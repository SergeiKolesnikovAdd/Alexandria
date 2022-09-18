import styled from "@emotion/styled";
import { Caption } from "components";
import { Text } from "components";
import Link from "next/link";
import { fontFamilies } from "styles";
import { applyPaddings } from "styles";
import { getCurrentMarginStyle } from "styles";
import { applyMargins } from "styles";
import { sizes } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { colors } from "styles";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column ;
  ${getCurrentPaddingStyle("horizontal", "lg")};
;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  ${applyMargins};
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
  transition: transform 0.3s;
  &:hover{
    transform:scale(1.1)
  }
`;

export const Deviant = styled.a`
  font-family: ${fontFamilies.Font};
  color: ${colors.black};
  transition: color 0.3s;
  &:hover {
    color: #e74141;
  }
`;

export const FooterLink = styled.a`
  color: ${colors.black};
  font-family: ${fontFamilies.Font};
  text-align: center;
  transition: opacity 0.3s;
  opacity: 0.4;
  ${applyMargins};
  &:hover {
    opacity: 1;
  }
`;
