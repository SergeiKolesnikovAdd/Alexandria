import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyMargins,
  colros,
} from "styles";
import styled from "@emotion/styled";
import { ButtonLG } from "../../ui/button-lg";
import { Text } from "components";
import { CloseButton } from "../../ui/close-button/close-button.jsx";
import { Standart } from "../../common";

const colorGradient = ({ colorgrad }) => {
  return colorgrad;
};

export const FormModalInner = styled.div`
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

export const ClsButton = styled(CloseButton)`
  position: absolute;
  right: 0;
  top: 0;
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

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${colors.red};

  ${applyMargins};
`;