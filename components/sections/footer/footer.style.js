import styled from "@emotion/styled";
import { Logo } from "components";
import { Text } from "components";
import { getVW } from "styles";
import { breakpointsWidth } from "styles";
import {
  fontFamilies,
  applyMargins,
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
  colors,
} from "styles";

export const FooterWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  ${getCurrentPaddingStyle("horizontal", "lg")};
  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const FooterColumn = styled.div`
  display: grid;
  grid-auto-flow: row;

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    display: grid;
    &:nth-child(4) {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    @media screen and (max-width: ${breakpointsWidth.phone}) {
      display: grid;
      justify-items: center;
      &:nth-child(4) {
        grid-column: 1/2;
        grid-row: 2/3;
      }
      &:nth-child(3) {
        display:grid;
        justify-self:flex-start;
        justify-items: start;
        margin-left:16px;
      }
    }
  }
`;
// export const FooterRow = styled.div`
//   display: grid;
//   grid-auto-flow:column;
//   ${applyMargins};
// `;

export const FooterRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, auto);
  align-items: flex-start;
  justify-content: space-between;
  ${applyMargins};

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    grid-template-columns: repeat(2, 50%);
    display: grid;
    grid-template-rows: repeat(2, auto);
    justify-items: start;
    row-gap: 64px;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(4, auto);
    justify-items: center;
  }
`;

export const FooterRowBottom = styled.div`
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;

  ${applyMargins};

  /* @media screen and (max-width: ${breakpointsWidth.phone}) {
    justify-content: space-between;
    display: grid;
    grid-auto-flow: column;
  } */
`;

export const FooterRowSecondBottom = styled(FooterRowBottom)`
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    /* justify-content: space-between;
    display: grid; */
    line-height: 150%;
    grid-auto-flow: row;
    grid-gap: 12px;
  }
`;

export const FooterItem = styled(Text)`
  ${getCurrentPaddingStyle("bottom", "md")};
`;

export const LogoWrapper = styled.div`
  width: ${getVW(64)};
  height: ${getVW(64)};
  min-width: 48px;
  min-height: 48px;

  border-radius: ${getVW(24)};
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${getCurrentPaddingStyle("", "mdsm")};
  ${getCurrentMarginStyle("right", "xsm")};
  cursor: pointer;
  transition: transform, fill, background-color 0.3s;
  svg {
    path {
      transition: fill 0.3s;
    }
  }
  &:hover {
    transition: transform, fill, background-color 0.3s;
    svg {
      path {
        fill: ${colors.white};
        transition: fill 0.3s;
      }
    }
    background-color: ${colors.red};
  }


  @media screen and (max-width: ${breakpointsWidth.phone}) {
    justify-self:center;

  }

`;

export const Deviant = styled.a`
  font-family: ${fontFamilies.Font};
  color: ${colors.black};
  transition: color 0.3s;
  &:hover {
    color: #e74141;
  }

    @media screen and (max-width: ${breakpointsWidth.phone}) {
      margin-bottom:12px;
    }

`;
export const FooterLogo = styled.a`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  align-self: start;

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    grid-auto-flow: row;
    justify-items: center;
    svg {
      align-self: center;
    }
  }

  &:hover {
    svg {
      &:first-child {
        transform: scale(1.1);
      }
    }
  }
`;

export const FooterLink = styled.a`
  color: ${colors.black};
  font-family: ${fontFamilies.Font};
  text-align: start ;
  transition: opacity 0.3s;
  opacity: 0.4;
  ${applyMargins};
  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${breakpointsWidth.tabletLG}) {
    text-align: start;
  }

  @media screen and (max-width: ${breakpointsWidth.phone}) {
    align-self: end;
    text-align: right;
  }


`;
export const IconAlexandrina = styled(Logo)`
${getCurrentMarginStyle("right", "mdsm")}
  @media screen and (max-width: ${breakpointsWidth.phone}) {
    ${getCurrentMarginStyle("right", "none")}
    ${getCurrentMarginStyle("bottom", "mdsm")}
    width: 64px;
    height: 64px;
  }
`;