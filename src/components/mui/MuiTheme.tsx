import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import type { ReactNode } from "react";
import { colors, siteTheme } from "./theme";

const globalStyles = {
  "@font-face": {
    "font-family": '"Source Serif 4"',
    fontStyle: "normal",
    fontWeight: 400,
    fontDisplay: "swap",
    src: 'url("/fonts/source-serif-4.ttf") format("truetype")',
  },
  "*, *::before, *::after": { boxSizing: "border-box" },
  html: { scrollBehavior: "smooth", scrollPaddingTop: "110px" },
  body: {
    margin: 0,
    backgroundColor: colors.paper,
    color: colors.ink,
    fontFamily: "Roboto, Arial, sans-serif",
    fontSynthesis: "none",
  },
  a: { color: "inherit", textDecoration: "none" },
  "button, summary, a": { WebkitTapHighlightColor: "transparent" },
  "a, summary": { touchAction: "manipulation" },
  "a:focus-visible, summary:focus-visible": {
    outline: `3px solid ${colors.focus}`,
    outlineOffset: 6,
  },
  img: { display: "block", maxWidth: "100%" },
  p: { lineHeight: 1.8, margin: "0 0 24px", color: colors.muted },
  "h1, h2, h3": {
    fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
    fontWeight: 400,
    margin: 0,
    textWrap: "balance",
  },
  ".skip-link": {
    position: "fixed",
    left: 20,
    top: -100,
    zIndex: 100,
    padding: 12,
    backgroundColor: "#fff",
  },
  ".skip-link:focus": { top: 10 },
  "@media (prefers-reduced-motion: reduce)": {
    html: { scrollBehavior: "auto" },
  },
};

interface Props {
  children: ReactNode;
  globalStyles?: boolean;
}

export function MuiTheme({
  children,
  globalStyles: includeGlobalStyles = false,
}: Props) {
  return (
    <ThemeProvider theme={siteTheme}>
      {includeGlobalStyles && <GlobalStyles styles={globalStyles} />}
      {children}
    </ThemeProvider>
  );
}
