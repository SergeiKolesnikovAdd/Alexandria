import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentFontSizeStyle,
  getCurrentPaddingStyle,
  fontSizes,
} from "styles";

import { Text, H3,} from "components";
import styled from "@emotion/styled";
import { Right, Subscription } from "../../common";
import sub from "../../../public/subscription.png";
import { InputField } from "../../ui/fields";
import { fontFamilies } from "styles";
import { getVW } from "styles";
import { ButtonSliderRight } from "../../ui/button-slider-right"
import { ButtonSM } from "../../ui/button-sm/";

const activeErrorField = ({ isError }) => {
  isError ? `display: inline-block, color: red` : `display: none`;
};

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getCurrentPaddingStyle("horizontal", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const NewsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 31vw);
  grid-template-rows: repeat(2, 580px);
  gap: 16px;
  width: 100%;

  @media screen and (min-width: 1601px) {
    grid-template-columns: repeat(3, 31vw);
    grid-template-rows: repeat(2, 36.25vw);
    gap: 1vw;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, min-content);
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    gap: 12px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 366px);
  }

  ${applyMargins}
  ${applyPaddings}
`;

export const SubscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 48px;
  background-image: url(${sub.src});
  background-repeat: no-repeat;
  background-size: cover;
  ${getCurrentPaddingStyle("top", "xxlg")};
  ${getCurrentPaddingStyle("bottom", "mdlg")};
  text-align: center;

  @media screen and (min-width: 1601px) {
    border-radius: 3vw;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    border-radius: 32px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    border-radius: 24px;
  }

  ${applyPaddings}
  ${applyMargins}
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${getCurrentMarginStyle("top", "mdlg")};
  ${getCurrentMarginStyle("bottom", "lg")};

  ${applyPaddings}
  ${applyMargins}
`;

export const SendButton = styled(ButtonSliderRight)`
  background-color: ${colors.red};
  border: 1px solid ${colors.red};
  svg {
    path {
      fill: ${colors.white};
    }
  }

  &:hover {
    background-color: ${colors.lightOrange};

    svg {
      path {
        fill: ${colors.red};
      }
    }
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    width: 4vw;
    height: 4vw;
    border-radius: ${getVW(24)};
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    position: relative;
    bottom: auto;
    width: 52px;
    height: 52px;
    background-color: ${colors.red};
    border: 1px solid ${colors.red};
    opacity: 1;
    &:hover {
      background-color: ${colors.red};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    position: relative;
    bottom: auto;
    width: 52px;
    height: 52px;
    background-color: ${colors.red};
    border: 1px solid ${colors.red};
    opacity: 1;
    &:hover {
      background-color: ${colors.red};
    }
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    position: relative;
    bottom: auto;
    width: 48px;
    height: 48px;
    background-color: ${colors.red};
    border: 1px solid ${colors.red};
    opacity: 1;
    &:hover {
      background-color: ${colors.red};
    }
  }
`;

export const Logo = styled(Subscription)`
  
`;

export const Link = styled.a`
  span {
    color: ${colors.red};
  }

  :hover {
    transition: opacity 0.3s;
    opacity: 0.4;
  }

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${colors.red};
    display: block;
    ${getCurrentMarginStyle("top", "xxxsm")};
  }
`;

export const StyledText = styled(Text)`
  text-align: center;
  color: ${colors.white};
  ${getCurrentFontSizeStyle("h3")};
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  ${getCurrentPaddingStyle("horizontal", "mdlg")};
  ${getCurrentMarginStyle("bottom", "lg")};
`;


export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #ffffff14;
  border-radius: 24px;
  background-color: ${colors.black};
  transition: border 0.3s;
  
  div {
    input {
      padding: 0;
    }
  }

  :hover {
    border: 1px solid ${colors.red};
  }

  @media screen and (min-width: ${breakpointsWidth.desktopLG}) {
    border-radius: 1.5vw;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    border-radius: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${getCurrentMarginStyle("left", "xxsm")};
`;

export const ErrorField = styled.div`
  ${activeErrorField};
  display:flex;
  justify-content: center;
  height: 40px;
`;

export const ErrorMessage = styled.p`
  height: 40px;
`;
export const FormLabel = styled.label`
  font-family: ${fontFamilies.Font};
  color: ${colors.red};
  ${getCurrentFontSizeStyle("caption")}
  ${getCurrentPaddingStyle("bottom", "xxsm")};
`;

export const FormLabelGray = styled(FormLabel)`
  opacity: 0.4;
  color: ${colors.black};
  ${getCurrentPaddingStyle("left", "xxsm")};
`;
