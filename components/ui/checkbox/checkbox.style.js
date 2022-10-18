import styled from "@emotion/styled";
import { Caption } from "components";
import { applyMargins } from "styles";
import { getCurrentFontSizeStyle } from "styles";
import { fontFamilies } from "styles";

import { colors, getCurrentMarginStyle, hexToRGBA } from "styles";

export const CheckboxWrapper = styled.div`
  display: flex;
  ${applyMargins}
`;

export const CheckboxBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 12px;
  border-color: ${({ isActive }) =>
    isActive ? colors.red : hexToRGBA(colors.black, 0.2)};
  transition: border-color 0.3s;
  border-color: ${({ isError }) => (isError ? colors.brightRed : hexToRGBA(colors.black, 0.2))};



  &:hover {
    border-color: ${colors.red};
  }
`;

export const CheckboxInner = styled.div`
  background-color: ${colors.red};
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: ${({ isActive }) => (isActive ? "block" : "none")};

`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ isError }) => (isError ? colors.brightRed : colors.black)};

  ${getCurrentMarginStyle("left", "xsm")}
`;

export const StyledCaption = styled(Caption)`
  opacity: 0.4;
  cursor: pointer;
  color: ${colors.black};

`;

export const Error = styled.div`
  width: 100%;
  color: ${colors.red};
  position: absolute;
  top: calc(100% + 4px);
  font-family: ${fontFamilies.Font};

  ${getCurrentFontSizeStyle("caption")};
`;