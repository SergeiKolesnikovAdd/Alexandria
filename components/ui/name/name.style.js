import styled from "@emotion/styled"; 
import { getVW } from "styles";
import { getCurrentPaddingStyle } from "styles";

export const NameWrapper = styled.svg`
  width: ${getVW(160)};
  height: ${getVW(64)};
  display: inline-block;
  cursor: pointer;
  ${getCurrentPaddingStyle("left", "mdsm")};
`;
