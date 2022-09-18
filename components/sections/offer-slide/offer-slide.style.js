import { ButtonMD, Caption } from "components";
import {
  applyMargins,
  applyPaddings,
  colors,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  hexToRGBA,
} from "styles";

import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  ${getCurrentPaddingStyle("vertical", "lg")};

  ${applyMargins}
  ${applyPaddings}
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  ${applyMargins}
  ${applyPaddings}
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
`;

export const DescItem = styled(Caption)`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

export const StyledButton = styled(ButtonMD)`
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
