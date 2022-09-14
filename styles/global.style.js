import { colors } from "./constants";
import { breakpointsWidth } from "styles";
import { injectGlobal } from "@emotion/css";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles}

  body {
    background-color: ${colors.lightOrange};
    /* scroll-behavior: smooth; */
     /*Оставлено на случай ссылок внутри страницы  */
  }
`;