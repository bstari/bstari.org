import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { MuiTheme } from "./mui/mui-theme";
import { PageContainer } from "./mui/primitives";
import { colors } from "./mui/theme";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "Our story" },
  { href: "/work/", label: "Our work" },
  { href: "/partner/", label: "Partner with us" },
] as const;

const HeaderRoot = styled("header")({
  backgroundColor: colors.navy,
  borderBottom: "1px solid #ffffff20",
  color: "#fff",
  position: "relative",
  zIndex: 10,
});

const HeaderInner = styled(PageContainer)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  gap: 32,
  justifyContent: "space-between",
  minHeight: 104,
  [theme.breakpoints.down("md")]: { gap: 22 },
  [theme.breakpoints.down("sm")]: { minHeight: 85 },
}));

const Brand = styled("a")(({ theme }) => ({
  display: "block",
  width: 210,
  "& img": { height: "auto", width: "100%" },
  [theme.breakpoints.down("md")]: { width: 180 },
  [theme.breakpoints.down("sm")]: { width: 170 },
}));

const DesktopNav = styled("nav")(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  fontSize: "0.88rem",
  gap: 36,
  "& a": {
    borderBottom: "1px solid transparent",
    color: "#d9e1e7",
    padding: "12px 0",
  },
  "& a:hover, & a[aria-current]": {
    borderBottomColor: colors.gold,
    color: "#fff",
  },
  "& a:last-child": {
    border: "1px solid #ffffff50",
    borderRadius: 2,
    padding: "13px 20px",
  },
  [theme.breakpoints.down("md")]: { gap: 22 },
  [theme.breakpoints.down("sm")]: { display: "none" },
}));

const MobileLinks = styled("nav")({
  backgroundColor: colors.navy,
  boxShadow: "0 15px 20px #06284f20",
  display: "grid",
  gap: 0,
  left: 0,
  padding: "10px 20px 25px",
  position: "absolute",
  right: 0,
  top: "100%",
  "& a": {
    borderTop: "1px solid #ffffff20",
    fontSize: "0.95rem",
    padding: "16px 8px",
  },
  "& a[aria-current]": { color: colors.gold },
});

const MobileNav = styled("details")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: { display: "block" },
  "& summary": {
    alignItems: "center",
    display: "flex",
    fontSize: "0.85rem",
    gap: 14,
    listStyle: "none",
    minHeight: 44,
    padding: "10px 0",
  },
  "& summary::-webkit-details-marker": { display: "none" },
  "& summary > span": {
    display: "block",
    fontSize: "1.5rem",
    fontWeight: 400,
    transition: "transform 0.2s",
  },
  "&[open] summary > span": { transform: "rotate(45deg)" },
}));

interface HeaderProps {
  pathname: string;
}

function Navigation({
  pathname,
  label,
  mobile = false,
}: HeaderProps & { label: string; mobile?: boolean }) {
  const links = navigation.map(({ href, label: linkLabel }) => (
    <a
      href={href}
      key={href}
      aria-current={pathname === href ? "page" : undefined}
    >
      {linkLabel}
    </a>
  ));

  if (mobile) {
    return (
      <MobileNav>
        <summary>
          Menu <span aria-hidden="true">+</span>
        </summary>
        <MobileLinks aria-label={label}>{links}</MobileLinks>
      </MobileNav>
    );
  }

  return <DesktopNav aria-label={label}>{links}</DesktopNav>;
}

export function SiteHeader({ pathname }: HeaderProps) {
  return (
    <MuiTheme globalStyles>
      <HeaderRoot>
        <HeaderInner>
          <Brand href="/" aria-label="BESTARI home">
            <img
              src="/full-name-logo.png"
              alt="Belayan Sejahtera Lestari"
              width="2700"
              height="1080"
            />
          </Brand>
          <Navigation pathname={pathname} label="Main navigation" />
          <Navigation pathname={pathname} label="Mobile navigation" mobile />
        </HeaderInner>
      </HeaderRoot>
    </MuiTheme>
  );
}

const FooterRoot = styled("footer")({
  backgroundColor: colors.navy,
  color: "#fff",
  paddingTop: 60,
});

const FooterTop = styled(PageContainer)(({ theme }) => ({
  display: "grid",
  gap: 60,
  gridTemplateColumns: "1.3fr 1fr auto",
  paddingBottom: 45,
  "& p": { color: "#b9c8d6", fontSize: "0.8rem", margin: "16px 0 0" },
  "& > p": { margin: 0 },
  "& nav": {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.8rem",
    gap: 15,
  },
  "& a:hover": { textDecoration: "underline", textUnderlineOffset: 5 },
  [theme.breakpoints.down("md")]: { gap: 30 },
  [theme.breakpoints.down("sm")]: {
    gap: 30,
    gridTemplateColumns: "1fr 1fr",
    "& > div": { gridColumn: "1 / -1" },
    "& nav": { alignItems: "flex-end" },
  },
}));

const FooterName = styled("a")({
  fontFamily: '"Source Serif 4", Georgia, serif',
  fontSize: "1.8rem",
  letterSpacing: "0.05em",
});

const FooterBottom = styled(PageContainer)(({ theme }) => ({
  alignItems: "center",
  borderTop: "1px solid #ffffff25",
  color: "#aebfcd",
  display: "flex",
  fontSize: "0.68rem",
  gap: 20,
  justifyContent: "space-between",
  paddingBlock: 24,
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    fontSize: "0.65rem",
    "& span:last-child": { textAlign: "right" },
  },
  "@media (max-width: 400px)": {
    flexDirection: "column",
    "& span:last-child": { textAlign: "left" },
  },
}));

export function SiteFooter() {
  return (
    <MuiTheme>
      <FooterRoot>
        <FooterTop>
          <Box>
            <FooterName href="/">BESTARI</FooterName>
            <p>
              Belayan Sejahtera Lestari
              <br />
              Continue the Sustainability
            </p>
          </Box>
          <p>
            Rooted in Muai Village.
            <br />
            Kembang Janggut, Kutai Kartanegara
            <br />
            East Kalimantan, Indonesia
          </p>
          <nav aria-label="Footer navigation">
            {navigation.slice(1).map(({ href, label }) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href="mailto:info@bstari.org">info@bstari.org</a>
          </nav>
        </FooterTop>
        <FooterBottom>
          <span>© {new Date().getFullYear()} Belayan Sejahtera Lestari</span>
          <span>For the generations ahead.</span>
        </FooterBottom>
      </FooterRoot>
    </MuiTheme>
  );
}

export { CtaLink } from "./mui/primitives";
