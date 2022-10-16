import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle,
  applyMargins,
  getCurrentFontSizeStyle,
  fontFamilies,
  hexToRGBA,
  breakpointsWidth,
} from "styles";
import styled from "@emotion/styled";
import { CloseButton } from "../../ui/close-button/close-button.jsx";

const activeErrorField = ({ isError }) => {
  isError ? `display: inline-block, color: red` : `display: none`;
};

export const FormModalInner = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${hexToRGBA(colors.black, 0.9)};
  ${getCurrentPaddingStyle("horizontal", "lg")};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "xxlg")};
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentPaddingStyle("top", "xxxlg")};
    ${getCurrentPaddingStyle("horizontal", "xxlg")};
    ${getCurrentPaddingStyle("bottom", "xxlg")};
  }
`;

export const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${getCurrentMarginStyle("top", "mdsm")};
  background-color: ${colors.white};
  border-radius: 48px;
  position: relative;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    width: 100%;
  }
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

export const FormWrapper = styled.form``;

export const FormLabel = styled.label`
  font-family: ${fontFamilies.Font};
  color: ${colors.red};
  ${getCurrentFontSizeStyle("caption")};
  ${getCurrentPaddingStyle("bottom", "xxsm")};
`;

export const FormLabelGray = styled(FormLabel)`
  opacity: 0.4;
  color: ${colors.black};
  ${getCurrentPaddingStyle("left", "xxsm")};
`;

export const ErrorField = styled.div`
  ${activeErrorField};
  height: 40px;
`;
export const ErrorMessage = styled.p`
  height: 40px;
`;
