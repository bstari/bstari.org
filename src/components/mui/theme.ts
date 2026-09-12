import { createTheme } from "@mui/material/styles";

export const colors = {
  navy: "#06284f",
  ink: "#17334c",
  muted: "#586975",
  paper: "#fafbf9",
  mist: "#eef2ef",
  gold: "#d8c8a4",
  line: "#d6dedb",
  focus: "#ab8546",
} as const;

export const siteTheme = createTheme({
  palette: {
    primary: { main: colors.navy },
    secondary: { main: colors.gold },
    background: { default: colors.paper, paper: colors.paper },
    text: { primary: colors.ink, secondary: colors.muted },
  },
  breakpoints: {
    values: { xs: 0, sm: 760, md: 1000, lg: 1280, xl: 1536 },
  },
  shape: { borderRadius: 2 },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
      fontWeight: 400,
      lineHeight: 1.08,
      letterSpacing: "-0.045em",
    },
    h2: {
      fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
      fontWeight: 400,
      lineHeight: 1.15,
      letterSpacing: "-0.035em",
    },
    h3: {
      fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
      fontWeight: 400,
      lineHeight: 1.25,
      letterSpacing: "-0.02em",
    },
  },
});
