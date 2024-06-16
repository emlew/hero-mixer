import theme from "../theme";
import("./typography");
import { PaletteOptions } from "@mui/material";

const colors = {
  black: "#000000",
  white: "#ffffff",
  disabledGray: "#8B8B8B",
  boxShadow: "rgba(51, 74, 255, 0.25)",
  highlightedRow: "#7084f5",

  primary900: "#00263A",
  primary700: "#1437A9",
  primary500: "#334AFF",
  primary300: "#7D88FF",
  primary100: "#E7E8FF",

  secondary900: "#1F523F",
  secondary700: "#368572",
  secondary500: "#5CB8B2",
  secondary300: "#9BDCDC",
  secondary100: "#D3F3F3",

  red700: "#A91E37",
  red500: "#DA3842",
  red300: "#F26868",
  red100: "#f268681a",

  green700: "#288B53",
  green500: "#65BC7B",
  green300: "#90D39E",

  orange700: "#C24F1E",
  orange500: "#FF7C44",
  orange300: "#FF9C71",
  orange100: "#FFD5C2",

  neutral900: "#171719",
  neutral800: "#36363A",
  neutral700: "#55565B",
  neutral300: "#BFC0C8",
  neutral200: "#E0E2ED",
  neutral100: "#F3F4FA",
};

export const palette: PaletteOptions = {
  common: {
    black: colors.black,
    white: colors.white,
  },
  // active: {
  //   boxShadow: colors.boxShadow,
  //   highlightedRow: colors.highlightedRow,
  // },
  // disabled: {
  //   gray: colors.disabledGray,
  // },
  // action: {
  //   active: colors.primary500,
  //   disabled: colors.neutral200,
  // },
  // neutral: {
  //   main: colors.neutral300,
  //   dark: colors.neutral700,
  //   light: colors.neutral300,
  //   contrastText: colors.black,
  //   "900": colors.neutral900,
  //   "800": colors.neutral800,
  //   "700": colors.neutral700,
  //   "300": colors.neutral300,
  //   "200": colors.neutral200,
  //   "100": colors.neutral100,
  // },
  primary: {
    main: colors.primary500,
    light: colors.primary300,
    dark: colors.primary700,
    "900": colors.primary900,
    "700": colors.primary700,
    "500": colors.primary500,
    "300": colors.primary300,
    "100": colors.primary100,
  },
  secondary: {
    main: colors.secondary500,
    light: colors.secondary300,
    dark: colors.secondary700,
    "900": colors.secondary900,
    "700": colors.secondary700,
    "500": colors.secondary500,
    "300": colors.secondary300,
    "100": colors.secondary100,
  },
  error: {
    main: colors.red500,
    light: colors.red300,
    dark: colors.red700,
    "700": colors.red700,
    "500": colors.red500,
    "300": colors.red300,
    "100": colors.red100,
  },
  success: {
    main: colors.green500,
    light: colors.green300,
    dark: colors.green700,
    "700": colors.green700,
    "500": colors.green500,
    "300": colors.green300,
  },
  warning: {
    main: colors.orange500,
    light: colors.orange300,
    dark: colors.orange700,
    "700": colors.orange700,
    "500": colors.orange500,
    "300": colors.orange300,
    "100": colors.orange100,
  },
  // partition: {
  //   yellow: {
  //     background: "#FFD28F",
  //     text: "#504028",
  //     shadow: "0px 8px 24px rgba(80, 64, 40, 0.32)",
  //   },
  //   purple: {
  //     background: "#C5BBFF",
  //     text: "#2B2745",
  //     shadow: "0px 8px 24px rgba(43, 39, 69, 0.32)",
  //   },
  //   blue: {
  //     background: "#C1FFFF",
  //     text: "#2F5555",
  //     shadow: "0px 8px 24px rgba(47, 85, 85, 0.32)",
  //   },
  //   pink: {
  //     background: "#FFCDD0",
  //     text: "#472426",
  //     shadow: "0px 8px 24px rgba(71, 36, 38, 0.32)",
  //   },
  // },
  // adjustmentChip: {
  //   purple: {
  //     background: "#F4DCFF",
  //     text: "#6E3887",
  //   },
  //   pink: {
  //     background: "#FFCED7",
  //     text: "#99283C",
  //   },
  //   blue: {
  //     background: "#E7E8FF",
  //     text: "#334AFF",
  //   },
  //   red: {
  //     background: "#FFBCBC",
  //     text: "#A91E37",
  //   },
  //   yellow: {
  //     background: "#FFF8E0",
  //     text: "#8A6300",
  //   },
  // },
  // schedule: {
  //   pastOther: {
  //     color: "#8D6446",
  //     backgroundColor: "#FFECDE",
  //     textColor: "#8D6446",
  //   },
  //   futureOther: {
  //     color: "#8D6446",
  //     backgroundColor: "#FAF4F0",
  //     textColor: "#8D6446",
  //   },
  //   pastPairing: {
  //     color: "#235A82",
  //     backgroundColor: "#D7EEFF",
  //     textColor: "#235A82",
  //   },
  //   futurePairing: {
  //     color: "#235A82",
  //     backgroundColor: "#EDF0FC",
  //     textColor: "#235A82",
  //   },
  //   standoverPairing: {
  //     color: "#235A82",
  //     backgroundColor: "#BECEE8",
  //     textColor: "#235A82",
  //   },
  //   pastAbsent: {
  //     color: "#803E49",
  //     backgroundColor: "#FFDEE4",
  //     textColor: "#803E49",
  //   },
  //   futureAbsent: {
  //     color: "#803E49",
  //     backgroundColor: "#F3E8F0",
  //     textColor: "#803E49",
  //   },
  // },
  // crewmemberStatus: {
  //   Active: {
  //     color: "#368572",
  //   },
  //   Inactive: {
  //     color: "#C24F1E",
  //   },
  //   Leave: {
  //     color: "#C24F1E",
  //   },
  //   Terminated: {
  //     color: "#A91E37",
  //   },
  // },
  // crewview: {
  //   background: "#F7F7FA",
  //   navActions: "#0072CE",
  //   crewSearchBackground: "#334AFF",
  //   pairingScheduleBackground: "#082B47",
  //   pairingScheduleBorder: " #55748A",
  //   table: {
  //     green: {
  //       background: "#F4FCF5",
  //       text: "#136235",
  //     },
  //     red: {
  //       background: "#FCF6F6",
  //       text: "#750C1F",
  //     },
  //   },
  //   duty: {
  //     red: {
  //       backgroundColor: "#FFEDEE",
  //       color: "#B81F28",
  //     },
  //     green: {
  //       backgroundColor: "#E8FFFC",
  //       color: "#1F523F",
  //     },
  //     yellow: {
  //       backgroundColor: "#FFF8E0",
  //       color: "#8A6300",
  //     },
  //     generic: {
  //       backgroundColor: "#EAEEF3",
  //       color: "#082B47",
  //     },
  //     orange: {
  //       backgroundColor: "#FFE8c6",
  //       color: "#504028",
  //     },
  //   },
  //   leg: {
  //     red: {
  //       backgroundColor: "#FFF5F6",
  //       color: "#DA3842",
  //     },
  //     yellow: {
  //       backgroundColor: "#FFFBEB",
  //       color: "#8A6300",
  //     },
  //     green: {
  //       backgroundColor: "#F2FFFD",
  //       color: "#368572",
  //     },
  //     generic: {
  //       backgroundColor: colors.white,
  //       color: colors.neutral900,
  //     },
  //     orange: {
  //       backgroundColor: "#FFE8c6",
  //       color: "#504028",
  //     },
  //   },
  //   otherTime: {
  //     backgroundColor: "#F0E9FF",
  //     color: "#082B47",
  //   },
  // },
  // pairingChip: {
  //   red: {
  //     background: "#FFEDEE",
  //     text: "#B81F28",
  //   },
  //   yellow: {
  //     background: "#FFF8E0",
  //     text: "#8A6300",
  //   },
  //   green: {
  //     background: "#E8FFFC",
  //     text: "#1F523F",
  //   },
  //   orange: {
  //     background: "#FFE8c6",
  //     text: "#504028",
  //   },
  // },
};

export default theme;
