import styled from "@emotion/styled";
import { Text } from "components";
import { sizes } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { colors } from "styles";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction:column;
`;

export const FooterItem = styled(Text)`
  ${getCurrentPaddingStyle("bottom", "md")};
`;l