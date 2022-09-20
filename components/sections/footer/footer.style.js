import styled from "@emotion/styled";
import { Text } from "components";
import { fontFamilies, applyMargins, getCurrentMarginStyle, getCurrentPaddingStyle, colors} from "styles";

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
  
  ${getCurrentMarginStyle("right", "xsm")};
  cursor: pointer;
  transition: transform, fill, background-color 0.3s;
  svg {
    path {
      transition: fill 0.3s;
    }
  }
  &:hover {
    transition: transform, fill, background-color 0.3s;
    svg {
      path {
        fill: ${colors.white};
        transition: fill 0.3s;
      }
    }
    background-color: ${colors.red};
    /* transform: scale(1.1); */
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
export const FooterLogo = styled.a`
  display: flex;
  align-items: center;
  height:100%;
  &:hover{
    svg{
    &:first-child{
      transform: scale(1.1);
    }}
    }`

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
