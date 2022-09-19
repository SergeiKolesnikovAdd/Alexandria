import {
  colors,
  getCurrentPaddingStyle,
  getCurrentMarginStyle, applyMargins,
} from "styles";
import styled from "@emotion/styled";
import {ButtonLG} from "../../ui/button-lg";

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
`;

export const Title = styled.div`
  width: 100%;
  display: flex;

  ${applyMargins};
`;

export const Description = styled.div`
  width: 100%;
  display: flex;

  ${applyMargins};
`;

export const StyledButtonLG = styled(ButtonLG)`
  width: 32px;
  height: 64px;
`;

export const ProductImage = styled.img`
  display: inline-block;
  width: 100%;
  object-position: center;
  object-fit: cover;
`;
