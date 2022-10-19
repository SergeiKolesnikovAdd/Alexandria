import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyMargins,
  colros,
  hexToRGBA,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { ButtonLG } from "../../ui/button-lg";
import { Text } from "components";
import { CloseButton } from "../../ui/close-button/close-button.jsx";
import { Standart } from "../../common";

const activeForm = ({ isOpenForm }) => {
  isOpenForm ? `background-color: transparent` : `background-color: ${hexToRGBA(colors.black, 0.9)}`;
}

export const OfferModalInner = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${hexToRGBA(colors.black, 0.9)};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
  overflow: hidden;
`;

export const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 48px;
  position: relative;
  overflow: hidden;
  height: 764px;
  opacity: 1;
  ${getCurrentMarginStyle("top", "mdsm")}

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    width: 100%;
    height: 100%;
    margin-top: 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
  background-color: ${colors.white};
  border-radius: 48px;
  overflow: auto;
`;

export const Icon = styled.img`

`;

export const Heading = styled(Text)`
display: flex;
opacity: 0.4;

  ${applyMargins};
`;

export const Title = styled.div`
width: 100%;
display: flex;
color: ${colors.black};

  ${applyMargins};
`;

export const Description = styled.div`
width: 100%;
display: grid;
grid-template-columns: 28% 68%;
grid-auto-flow: row;
gap: 40px 16px;

  ${applyMargins};
`;

export const StyledButtonLG = styled(ButtonLG)`
  width: 320px;
  ${getCurrentPaddingStyle("vertical", "md2")};
  ${getCurrentMarginStyle("top", "lg")};
`;

export const ProductImage = styled.img`
display: inline-block;
width: 100%;
object-position: center;
object-fit: cover;
border-radius:48px 48px 0px 0px;
`;

export const ClsButton = styled(CloseButton)`
position: absolute;
right: 0;
top: 0;
`;
