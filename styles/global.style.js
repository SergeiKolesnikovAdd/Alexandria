import { injectGlobal } from "@emotion/css";
import { colors } from "./constants";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles};

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: ${colors.lightOrange};
  }
`;
