export const colors = {
  white: "#FFFFFF",
  black: "#222222",
  red: "#D17456",
  brightRed: "#F95B5B",
  lightOrange: "#FCF8F3",
  orange: "#F9D3B1",
  darkOrange: "#F9D3B1",
  grey: "#FCF8F3",
};

export const fontFamilies = {
  Font: '"Gilroy", Arial, sans-serif',
};

export const namesOfBreakpoints = {
  desktopXXLG: "desktopXXLG",
  desktopXLG: "desktopXLG",
  desktopLG: "desktopLG",
  desktopMD: "desktopMD",
  desktopSM: "desktopSM",
  tabletLG: "tabletLG",
  tabletSM: "tabletSM",
  phone: "phone",
};

const {
  desktopXXLG,
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints;

export const subsequenceOfBreakpoints = [
  desktopXXLG, // больше чем 1920px
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
];

export const breakpointsWidth = {
  [desktopXLG]: "1920px",
  [desktopLG]: "1600px",
  [desktopMD]: "1440px",
  [desktopSM]: "1280px",
  [tabletLG]: "1024px",
  [tabletSM]: "768px",
  [phone]: "600px",
};

export const offsets = {
  [desktopXLG]: {
    xxxlg: "10vw",
    xxlg: "5vw",
    xlg: "4vw",
    lg: "2.5vw",
    lg2: "2.375vw",
    mdlg: "2vw",
    md: "1.5vw",
    mdsm: "1vw",
    sm: "0.75vw",
    xsm: "0.5vw",
    xxsm: "0.25vw",
    xxxsm: "0.125vw",
    none: 0,
  },

  [desktopLG]: {
    xxxlg: 160,
    xxlg: 80,
    xlg: 64,
    lg: 40,
    lg2: 38,
    mdlg: 32,
    md: 24,
    mdsm: 16,
    sm: 12,
    xsm: 8,
    xxsm: 4,
    xxxsm: 2,
    none: 0,
  },

  [tabletSM]: {
    xxxlg: 120,
    xxlg: 60,
    xlg: 64,
    lg: 24,
    lg2: 22,
    mdlg: 32,
    // TODO:MDLG поправить, если найдёшь
    md: 20,
    mdsm: 12,
    sm: 8,
    xsm: 8,
    xxsm: 4,
    xxxsm: 2,
    none: 0,
  },
};

export const typesOfoffset = Object.keys(offsets[desktopLG]);

export const sizes = {
  [desktopLG]: {
    x4: "50vw",
    x3: "37.5vw",
    x2: "25vw",
    x1: "12.5vw",
    half: "6.25vw",
    count: 8,
  },
  [tabletLG]: {
    x2: "50vw",
    x1: "25vw",
    half: "12.5vw",
    thirdX2: "17vw",
    thirdX1: "8.5vw",
    count: 4,
  },
};

export const fontSizes = {
  [desktopXLG]: {
    h1: "6.5vw",
    h2: "4vw",
    h3: "1.5vw",
    text: "1.125vw",
    caption: "0.875vw",
  },

  [desktopLG]: {
    h1: "104px",
    h2: "64px",
    h3: "24px",
    text: "18px",
    caption: "14px",
  },

  [tabletSM]: {
    h1: "72px",
    h2: "48px",
    h3: "20px",
    text: "16px",
    caption: "12px",
  },
};

export const zindex = {
  popOver: 1100,
  header: 1000,
  modal: 900,
  footer: 500,
  frontItem: 10,
  backItem: -1,
};