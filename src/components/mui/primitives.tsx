import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ElementType } from "react";
import { colors } from "./theme";

type SemanticProps = { component?: ElementType };

export const PageContainer = styled(Box)<SemanticProps>(({ theme }) => ({
  width: "min(1240px, calc(100% - 112px))",
  marginInline: "auto",
  [theme.breakpoints.down("md")]: { width: "calc(100% - 64px)" },
  [theme.breakpoints.down("sm")]: { width: "calc(100% - 40px)" },
}));

export const Section = styled(Box)<SemanticProps>(({ theme }) => ({
  paddingBlock: 100,
  [theme.breakpoints.down("sm")]: { paddingBlock: 64 },
}));

export const SectionBottom = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    paddingBottom: 100,
    [theme.breakpoints.down("sm")]: { paddingBottom: 64 },
  }),
);

export const SectionLabel = styled(Typography)<SemanticProps>({
  color: colors.muted,
  fontSize: "0.82rem",
  fontWeight: 500,
  lineHeight: 1.5,
  margin: "0 0 25px",
});

export const SectionIcon = styled("span")({
  color: colors.focus,
  display: "inline-flex",
  marginRight: 8,
  verticalAlign: "-0.2em",
  "& svg": { fontSize: "1rem" },
});

export const Heading1 = styled(Typography)<SemanticProps>({
  color: "inherit",
  fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
  fontSize: "clamp(3rem, 5.35vw, 5.4rem)",
  fontWeight: 400,
  letterSpacing: "-0.045em",
  lineHeight: 1.08,
  margin: 0,
});

export const Heading2 = styled(Typography)<SemanticProps>({
  color: "inherit",
  fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
  fontSize: "clamp(2.3rem, 3.4vw, 3.4rem)",
  fontWeight: 400,
  letterSpacing: "-0.035em",
  lineHeight: 1.15,
  margin: 0,
});

export const Heading3 = styled(Typography)<SemanticProps>({
  color: "inherit",
  fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
  fontSize: "1.75rem",
  fontWeight: 400,
  letterSpacing: "-0.02em",
  lineHeight: 1.25,
  margin: 0,
});

export const BodyText = styled(Typography)<SemanticProps>({
  color: colors.muted,
  fontSize: "1rem",
  lineHeight: 1.8,
  margin: "0 0 24px",
});

export const Lead = styled(BodyText)<SemanticProps>({
  fontSize: "1.08rem",
  maxWidth: 650,
  margin: "30px 0 0",
});

export const PrinciplesNote = styled(BodyText)<SemanticProps>({
  fontSize: "0.9rem",
  marginTop: 28,
});

export const SmallText = styled(BodyText)<SemanticProps>({
  fontSize: "0.78rem",
  margin: "20px 0 0",
});

export const TextLink = styled("a")({
  alignItems: "center",
  borderBottom: "1px solid #aab8bc",
  display: "inline-flex",
  fontSize: "0.9rem",
  fontWeight: 500,
  gap: 12,
  paddingBlock: 8,
  transition: "border-color 0.2s",
  "&:hover": { borderColor: colors.navy },
  "& > svg": { fontSize: "1.1rem" },
});

interface CtaLinkProps {
  gold?: boolean;
}

export const CtaLink = styled("a", {
  shouldForwardProp: (prop) => prop !== "gold",
})<CtaLinkProps>(({ theme, gold = false }) => ({
  alignItems: "center",
  backgroundColor: gold ? colors.gold : colors.navy,
  border: "1px solid transparent",
  borderRadius: theme.shape.borderRadius,
  color: gold ? colors.navy : "#fff",
  display: "inline-flex",
  fontSize: "0.87rem",
  fontWeight: 500,
  gap: 32,
  justifyContent: "space-between",
  minHeight: 54,
  padding: "18px 25px",
  transition: "background 0.2s",
  "&:hover": {
    backgroundColor: gold ? "#e9dcbe" : "#153e62",
  },
  "& > svg": { fontSize: "1.1rem" },
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
}));

export const Hero = styled("section")({
  backgroundColor: colors.navy,
  color: colors.paper,
  paddingBlock: "56px 64px",
});

export const HeroGrid = styled(PageContainer)<SemanticProps>(({ theme }) => ({
  alignItems: "center",
  display: "grid",
  gap: 64,
  gridTemplateColumns: "1.2fr 1fr",
  [theme.breakpoints.up("xl")]: { gap: 80 },
  [theme.breakpoints.down("md")]: {
    gap: 35,
    gridTemplateColumns: "1.15fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 38,
    gridTemplateColumns: "1fr",
  },
}));

export const HeroCopy = styled(Box)<SemanticProps>(({ theme }) => ({
  paddingBlock: 24,
  [theme.breakpoints.down("sm")]: { paddingBlock: "10px 0" },
}));

export const Place = styled(Typography)<SemanticProps>(({ theme }) => ({
  alignItems: "center",
  color: "#d9e1e7",
  display: "flex",
  fontSize: "0.8rem",
  gap: 10,
  lineHeight: 1.5,
  margin: "0 0 36px",
  "& > svg": { color: colors.gold, fontSize: "1rem" },
  [theme.breakpoints.down("sm")]: { marginBottom: 25 },
}));

export const HeroHeading = styled(Heading1)<SemanticProps>(({ theme }) => ({
  fontSize: "clamp(3.2rem, 4.8vw, 4.7rem)",
  lineHeight: 1.12,
  [theme.breakpoints.up("xl")]: { fontSize: "5rem" },
  [theme.breakpoints.down("md")]: { fontSize: "3.7rem" },
  [theme.breakpoints.down("sm")]: {
    fontSize: "clamp(2.8rem, 9.2vw, 4.2rem)",
  },
  "@media (max-width: 400px)": { fontSize: "2.8rem" },
}));

export const HeroDescription = styled(BodyText)<SemanticProps>(({ theme }) => ({
  color: "#c5d2df",
  fontSize: "1rem",
  marginTop: 28,
  maxWidth: 430,
  [theme.breakpoints.down("sm")]: { fontSize: "0.95rem", maxWidth: 460 },
}));

export const Actions = styled(Box)<SemanticProps>({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: 30,
  marginTop: 36,
  "@media (max-width: 400px)": { gap: 20 },
});

export const QuietLink = styled("a")({
  borderBottom: "1px solid #ffffff50",
  fontSize: "0.85rem",
  paddingBlock: 8,
  transition: "border-color 0.2s",
  "&:hover": { borderColor: colors.gold },
});

export const HeroSignature = styled(BodyText)<SemanticProps>(({ theme }) => ({
  color: "#d7e0e8",
  fontSize: "0.72rem",
  margin: "52px 0 0",
  "& span": { color: "#9eb1c2", display: "block", marginTop: 5 },
  [theme.breakpoints.down("md")]: { marginTop: 35 },
  [theme.breakpoints.down("sm")]: { marginTop: 30 },
}));

export const Introduction = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    display: "grid",
    gap: 100,
    gridTemplateColumns: "1fr 1.65fr",
    paddingBlock: 100,
    "& > div > p": { maxWidth: 590 },
    "& h2": { marginBottom: 28 },
    [theme.breakpoints.down("md")]: { gap: 45 },
    [theme.breakpoints.down("sm")]: {
      gap: 28,
      gridTemplateColumns: "1fr",
      paddingBlock: 64,
      "& > p:first-of-type": { marginBottom: 0 },
      "& h2": { marginBottom: 22 },
    },
  }),
);

export const FocusSection = styled("section")({ backgroundColor: colors.mist });

export const FocusInner = styled(PageContainer)<SemanticProps>(({ theme }) => ({
  paddingBlock: 100,
  [theme.breakpoints.down("sm")]: { paddingBlock: 64 },
}));

export const SectionHeading = styled(Box)<SemanticProps>(({ theme }) => ({
  alignItems: "end",
  display: "flex",
  gap: 40,
  justifyContent: "space-between",
  marginBottom: 55,
  "& > div > p:first-child": { marginBottom: 20 },
  "& > p:last-child": { fontSize: "0.9rem", marginBottom: 0 },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginBottom: 35,
    "& > p": { marginTop: 22 },
  },
}));

export const FocusGrid = styled(Box)<SemanticProps>(({ theme }) => ({
  columnGap: 64,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  [theme.breakpoints.down("sm")]: { columnGap: 28 },
  "@media (max-width: 400px)": { gridTemplateColumns: "1fr" },
}));

export const FocusIcon = styled("span")({
  color: colors.focus,
  display: "inline-flex",
  marginBottom: 18,
  "& svg": { fontSize: "1.35rem" },
});

export const FocusCard = styled("a")(({ theme }) => ({
  borderTop: "1px solid #c4cecb",
  padding: "32px 32px 32px 0",
  position: "relative",
  "& h3": { fontSize: "1.65rem" },
  "& p": { fontSize: "0.85rem", margin: "14px 0 0" },
  "& .card-arrow": {
    color: colors.navy,
    display: "inline-flex",
    fontSize: "1.4rem",
    position: "absolute",
    right: 0,
    top: 36,
    "& svg": { fontSize: "1.2rem" },
  },
  "&:hover h3": {
    textDecoration: "underline",
    textDecorationThickness: 1,
    textUnderlineOffset: 5,
  },
  [theme.breakpoints.down("sm")]: {
    paddingRight: 20,
    "& h3": { fontSize: "1.4rem" },
    "& p": { fontSize: "0.8rem" },
    "& .card-arrow svg": { fontSize: "1.1rem" },
  },
}));

export const PartnershipCallout = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    alignItems: "center",
    display: "grid",
    gap: 100,
    gridTemplateColumns: "1fr 1fr",
    paddingBlock: 100,
    "& p": { maxWidth: 460 },
    [theme.breakpoints.down("md")]: { gap: 45 },
    [theme.breakpoints.down("sm")]: {
      gap: 28,
      gridTemplateColumns: "1fr",
      paddingBlock: 64,
    },
  }),
);

export const PageHeading = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    paddingBlock: "80px 70px",
    "& h1": { maxWidth: 1000 },
    "& > a": { marginTop: 30 },
    [theme.breakpoints.down("sm")]: {
      paddingBlock: 55,
      "& h1": { fontSize: "clamp(2.7rem, 8.5vw, 4rem)" },
    },
  }),
);

export const StoryGrid = styled(SectionBottom)<SemanticProps>(({ theme }) => ({
  alignItems: "center",
  display: "grid",
  gap: 80,
  gridTemplateColumns: "1fr 1.1fr",
  "& > figure": { aspectRatio: "4 / 4.5" },
  [theme.breakpoints.down("md")]: { gap: 45 },
  [theme.breakpoints.down("sm")]: {
    gap: 28,
    gridTemplateColumns: "1fr",
    "& > figure": { aspectRatio: "4 / 3" },
  },
}));

export const StoryCopy = styled(Box)<SemanticProps>({
  "& h2": { fontSize: "2.5rem", marginBottom: 30 },
  "& p": { fontSize: "0.95rem" },
  "@media (max-width: 760px)": {
    "& h2": { fontSize: "2.2rem", marginTop: 5 },
  },
});

export const VisionBand = styled("section")(({ theme }) => ({
  backgroundColor: colors.navy,
  color: "#fff",
  paddingBlock: 75,
  "& > div > p:first-child": { color: colors.gold },
  "& h2": { maxWidth: 940 },
  [theme.breakpoints.down("sm")]: {
    paddingBlock: 55,
    "& h2": { fontSize: "2.1rem" },
  },
}));

export const Principles = styled(Box)<SemanticProps>(({ theme }) => ({
  "& details": {
    borderTop: `1px solid ${colors.line}`,
    padding: "22px 0",
  },
  "& details:last-of-type": { borderBottom: `1px solid ${colors.line}` },
  "& summary": {
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.05rem",
    fontWeight: 500,
    lineHeight: 1.5,
    paddingRight: 15,
  },
  "& summary svg": {
    color: colors.navy,
    flex: "0 0 auto",
    fontSize: "1.2rem",
    transition: "transform 0.2s",
  },
  "& details[open] summary svg": { transform: "rotate(180deg)" },
  "& details p": { fontSize: "0.95rem", margin: "20px 0 0" },
  [theme.breakpoints.down("sm")]: {},
}));

export const JumpLinks = styled("nav")({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px 28px",
  marginTop: 35,
  "& a": {
    borderBottom: `1px solid ${colors.line}`,
    fontSize: "0.85rem",
    padding: "10px 0",
    transition: "border-color 0.2s",
  },
  "& a:hover": { borderColor: colors.navy },
});

export const WorkList = styled(PageContainer)<SemanticProps>({});

export const WorkItem = styled("section")(({ theme }) => ({
  alignItems: "center",
  borderTop: `1px solid ${colors.line}`,
  display: "grid",
  gap: 70,
  gridTemplateColumns: "1fr 1fr",
  paddingBlock: 48,
  "& h2": { fontSize: "2.6rem", marginBottom: 25 },
  "& p": { fontSize: "0.94rem" },
  "& > div > p:first-child": { fontSize: "0.8rem", marginBottom: 18 },
  "& details": { borderTop: `1px solid ${colors.line}`, paddingTop: 20 },
  "& summary": {
    alignItems: "center",
    display: "flex",
    fontSize: "0.85rem",
    justifyContent: "space-between",
  },
  "& summary svg": {
    color: colors.navy,
    flex: "0 0 auto",
    fontSize: "1.15rem",
    transition: "transform 0.2s",
  },
  "& details[open] summary svg": { transform: "rotate(180deg)" },
  "&:nth-of-type(even) > figure": { order: 2 },
  [theme.breakpoints.down("md")]: { gap: 40 },
  [theme.breakpoints.down("sm")]: {
    gap: 28,
    gridTemplateColumns: "1fr",
    paddingBlock: 35,
    "&:nth-of-type(even) > figure": { order: 0 },
    "& h2": { fontSize: "2.2rem" },
  },
}));

export const PortfolioNote = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    paddingBlock: "65px 90px",
    "& p:last-child": { maxWidth: 640, marginTop: 25 },
    [theme.breakpoints.down("sm")]: { paddingBlock: "45px 55px" },
  }),
);

export const CompactCta = styled(PageContainer)<SemanticProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: 30,
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    flexDirection: "column",
  },
}));

export const ContactSection = styled("section")({
  backgroundColor: "#e7ede9",
  paddingBlock: 80,
  scrollMarginTop: 25,
  "@media (max-width: 760px)": { paddingBlock: 55 },
});

export const ContactGrid = styled(PageContainer)<SemanticProps>(
  ({ theme }) => ({
    alignItems: "center",
    display: "grid",
    gap: 100,
    gridTemplateColumns: "1fr 1fr",
    "& h2": { marginBottom: 30 },
    "& > div > p": { maxWidth: 450 },
    [theme.breakpoints.down("md")]: { gap: 45 },
    [theme.breakpoints.down("sm")]: {
      gap: 28,
      gridTemplateColumns: "1fr",
      "& h2": { marginBottom: 22 },
    },
  }),
);

export const ContactCard = styled(Box)<SemanticProps>(({ theme }) => ({
  borderLeft: "1px solid #bdcbc4",
  paddingLeft: 55,
  "& h3": { fontSize: "1.65rem" },
  [theme.breakpoints.down("md")]: { paddingLeft: 30 },
  [theme.breakpoints.down("sm")]: {
    borderLeft: 0,
    borderTop: "1px solid #bdcbc4",
    padding: "30px 0 0",
  },
}));

export const ContactEmail = styled("a")({
  alignItems: "center",
  borderBottom: "1px solid #a3b5ad",
  display: "inline-flex",
  fontFamily: '"Source Serif 4", Georgia, serif',
  fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
  gap: 12,
  lineHeight: 1.4,
  marginBlock: 22,
  transition: "border-color 0.2s",
  "&:hover": { borderColor: colors.navy },
  "& svg": { color: colors.focus, fontSize: "1.35rem" },
});
