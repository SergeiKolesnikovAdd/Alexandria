import styled from "@emotion/styled"; 
import { getCurrentPaddingStyle } from "styles";

export const NameWrapper = styled.svg`
  width: 160px;
  height: 64px;
  display: inline-block;
  cursor: pointer;
  ${getCurrentPaddingStyle("left", "mdsm")};
`;
