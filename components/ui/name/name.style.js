import styled from "@emotion/styled";
import { getCurrentPaddingStyle } from "styles";

export const NameWrapper = styled.svg`
  display: inline-block;
  cursor: pointer;
  ${getCurrentPaddingStyle("left", "mdsm")};
`;
