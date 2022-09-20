import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle, applyMargins,
  colros,
} from "styles";
import styled from "@emotion/styled";
import {ButtonLG} from "../../ui/button-lg";
import { Text } from "components";
import { CloseButton } from "../../ui/close-button/close-button.jsx";
import { Standart } from "../../common";

const colorGradient = ({ colorgrad }) => { return colorgrad };

export const OfferModalInner = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.black};
  opacity: 0.9;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
`;

export const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${getCurrentMarginStyle("top", "mdsm")};
  background-color: ${colors.white};
  border-radius: 48px;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentPaddingStyle("vertical", "mdlg")};
  background-color: ${colors.white};
  border-radius: 48px;
`;

export const Icon = styled(Standart)`

circle {
    fill: ${colorGradient};}




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
  height: 64px;
  ${getCurrentMarginStyle("top", "lg")};
`;

export const ProductImage = styled.img`
  display: inline-block;
  width: 100%;
  object-position: center;
  object-fit: cover;
`;

export const ClsButton = styled(CloseButton)`
  position: absolute;
  right: 0;
  top: 0;
`;

export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")};
  ${getCurrentPaddingStyle("bottom", "md")};
  ${getCurrentPaddingStyle("top", "lg")};
  `;

export const FormWrapper = styled.form`
width:100%;
`;
