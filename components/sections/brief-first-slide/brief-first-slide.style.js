import {
  applyMargins,
  applyPaddings,
  breakpointsWidth,
  colors,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  getCurrentFontSizeStyle,
} from "styles";

import { Text, H3 } from "components";
import styled from "@emotion/styled";

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vw;
  background-color: ${colors.white};
  ${getCurrentPaddingStyle("horizontal", "mdsm")};
  ${getCurrentPaddingStyle("vertical", "mdsm")};

  ${applyMargins}
  ${applyPaddings}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.lightOrange};
  border-radius: 32px;

  ${applyMargins}
  ${applyPaddings}
`;

export const Indication = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${applyMargins}
  ${applyPaddings}
`;

export const Loader = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex;

  ${applyPaddings}
  ${applyMargins}
`;

export const Line = styled.div`
  width: 20%;
  border: 4px solid ${colors.darkOrange};

  ${applyPaddings}
  ${applyMargins}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  ${getCurrentMarginStyle("top","xxxlg")};

  ${applyPaddings}
  ${applyMargins}
`;

export const StyledText = styled(Text)`
  color: ${colors.red};
  ${getCurrentFontSizeStyle("h3")};
`;