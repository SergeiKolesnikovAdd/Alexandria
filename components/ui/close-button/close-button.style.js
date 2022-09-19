import styled from "@emotion/styled";
import { colors } from "styles";
import {applyMargins, applyPaddings,} from "styles";

export const ButtonWrapper = styled.button`
  width: 64px;
  height: 64px;
  cursor: pointer;
  background-color: ${colors.grey};
  border-radius: 24px;
  z-index: 1000;

  ${applyMargins};
  ${applyPaddings}
`;
