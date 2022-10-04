import { Caption, H3, Text, } from "components";

import { ButtonMD } from "../../ui/button-md";

import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
  getCurrentFontSizeStyle,
  breakpointsWidth,
} from "styles";

import styled from "@emotion/styled";
import { sizes } from "styles";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${getCurrentPaddingStyle("vertical", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${applyMargins}
  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    flex-direction: column;
  }
`;

export const TableOffer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  gap: 16px;
  justify-items: center;
  align-items: center;

  ${applyPaddings}
`;

export const DescColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(8, 120px);
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;

  ${applyPaddings}

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    grid-template-columns: repeat(1, 324px);
  }
`;

export const PackageColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(8, 120px);
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  transition: background-color 0.3s;
  border-radius: 32px;

  button {
    transition: opacity 0.3s;
  }

  &:hover {
    background-color: ${colors.white};

    button {
      opacity: 1;
    }
  }

  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    grid-template-columns: repeat(1, 120px);
  }
`;

export const DescItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};
`;

export const PackageItem = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getCurrentPaddingStyle("horizontal", "mdsm")}
  ${getCurrentPaddingStyle("vertical", "mdsm")}
  border-bottom: 1px solid ${hexToRGBA(colors.black, 0.08)};

  ${applyPaddings}
`;

export const NewButton = styled(ButtonMD)`
  width: 100%;
  opacity: 0;
`;

export const StyledCaption = styled(Caption)`
  color: ${colors.red};
  cursor: pointer;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${colors.red};
    display: block;
    ${getCurrentMarginStyle("top", "xxxsm")};
  }
`;

export const H3Styled = styled(H3)`
  ${getCurrentFontSizeStyle("text")};
  opacity: 0.4;
`;

export const StyledText = styled(Text)`
  @media screen and (max-width: ${breakpointsWidth.tabletSM}) {
    font-size: 12px;
  }
`;