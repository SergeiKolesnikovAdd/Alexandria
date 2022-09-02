export const colors = {
  white: "#FFFFFF",
  black: "#333333",
  blueGradient: "radial-gradient(100% 1103.13% at 0% 100%, #93EBFF 0%, #2079FF 100%);",
  blue: "#2079FF",
  yellow: "#F2B20B",
  pink: "#F48ABD",
  green: "#5BBD77",
  blue: "#3C7DFF",
  violet: "#A263F1",
};

export const fontFamilies = {
  Font: '"HelveticaNeue", Arial, sans-serif',
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
  // [desktopXXLG]: {
  //   xlg: "10vw",
  //   sxlg: "4.75vw",
  //   lg: "3.75vw",
  //   md: "2.5vw",
  //   md1: "2vw",
  //   md2: "2.5vw",
  //   sm: "1vw",
  //   xsm: "0.75vw",
  //   xxsm: "0.5vw",
  //   none: 0,
  //   shop: "1.5vw",
  // },
  // [desktopXLG]: {
  //   xlg: "10vw",
  //   sxlg: "4.75vw",
  //   lg: "3.75vw",
  //   md: "2.5vw",
  //   md1: "2vw",
  //   md2: "2.5vw",
  //   sm: "1vw",
  //   xsm: "0.75vw",
  //   xxsm: "0.5vw",
  //   none: 0,
  //   shop: "1.5vw",
  //   Будет поправлено
  // },
  [desktopLG]: {
    xlg: 160,
    lg: 120,
    lgmd: 84,
    md: 60,
    smmd: 40,
    sm: 24,
    xsm: 20,
    xxsm: 16,
    none: 0,
  },
  // [desktopMD]: {
  //   xlg: 150,
  //   sxlg: 76,
  //   lg: 56,
  //   md: 34,
  //   md1: 30,
  //   md2: 40,
  //   sm: 16,
  //   xsm: 12,
  //   xxsm: 8,
  //   none: 0,
  //   shop: 22,
  // },
  // [desktopSM]: {
  //   xlg: 140,
  //   sxlg: 76,
  //   lg: 52,
  //   md: 28,
  //   md1: 26,
  //   md2: 40,
  //   sm: 14,
  //   xsm: 12,
  //   xxsm: 8,
  //   none: 0,
  //   shop: 22,
  // },
  // [tabletLG]: {
  //   xlg: 140,
  //   sxlg: 76,
  //   lg: 48,
  //   md: 24,
  //   md1: 24,
  //   md2: 24,
  //   sm: 12,
  //   xsm: 12,
  //   xxsm: 8,
  //   none: 0,
  //   shop: 22,
  // },
  // [tabletSM]: {
  //   xlg: 140,
  //   sxlg: 76,
  //   lg: 48,
  //   md: 24,
  //   md1: 24,
  //   md2: 24,
  //   sm: 12,
  //   xsm: 12,
  //   xxsm: 8,
  //   none: 0,
  //   shop: 22 ,
  // },
  // [phone]: {
  //   xlg: 80,
  //   sxlg: 48,
  //   lg: 32,
  //   md: 16,
  //   md1: 12,
  //   md2: 16,
  //   sm: 12,
  //   xsm: 12,
  //   xxsm: 8,
  //   none: 0,
  //   shop: 12,
  // },
  // Будет поправлено
};

export const typesOfoffset = Object.keys(offsets[desktopLG]);

// export const sizes = {
//   [desktopLG]: {
//     x4: "50vw",
//     x3: "37.5vw",
//     x2: "25vw",
//     x1: "12.5vw",
//     half: "6.25vw",
//     count: 8,
//   },
//   [tabletLG]: {
//     x2: "50vw",
//     x1: "25vw",
//     half: "12.5vw",
//     thirdX2: "17vw",
//     thirdX1: "8.5vw",
//     count: 4,
//   },
//   Пока что закомментировано
// };

export const fontSizes = {
  // [desktopXXLG]: {
  //   h1: "12.125vw",
  //   h2: "4.5vw",
  //   h3: "2vw",
  //   text: "1vw",
  //   caption: "0.875vw",
  // },
  // [desktopXLG]: {
  //   h1: "12.125vw",
  //   h2: "4.5vw",
  //   h3: "2vw",
  //   text: "1vw",
  //   caption: "0.875vw",
  // },
  [desktopLG]: {
    h1: "12.125vw",
    h2: "72px",
    h3: "32px",
    text: "16px",
    caption: "14px",
    vw: "1vw",
    vw15: "1.5vw",
    vw2: "2vw",
  },
  // [desktopMD]: {
  //   h1: "12.125vw",
  //   h2: "64px",
  //   h3: "32px",
  //   text: "16px",
  //   caption: "14px",
  //   vw: "1vw",
  //   vw2: "2vw",
  // },
  // [desktopSM]: {
  //   h1: "12.125vw",
  //   h2: "60px",
  //   h3: "32px",
  //   text: "16px",
  //   caption: "14px",
  //   vw: "1vw",
  //   vw2: "2vw",
  // },
  // [tabletLG]: {
  //   h1: "20.83vw",
  //   h2: "58px",
  //   h3: "24px",
  //   text: "14px",
  //   caption: "12px",
  //   vw: "1vw",
  //   vw2: "2vw",
  // },
  // [tabletSM]: {
  //   h1: "20.83vw",
  //   h2: "58px",
  //   h3: "24px",
  //   text: "14px",
  //   caption: "12px",
  //   vw: "1vw",
  //   vw2: "2vw",
  // },
  // [phone]: {
  //   h1: "22.22vw",
  //   h2: "28px",
  //   h3: "18px",
  //   text: "12px",
  //   caption: "12px",
  //   vw: "1vw",
  //   vw2: "2vw",
  // },
};

export const zindex = {
  popOver: 1100,
  header: 1000,
  modal: 900,
  footer: 500,
  frontItem: 10,
  backItem: -1,
};
