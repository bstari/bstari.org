import CloseRounded from "@mui/icons-material/CloseRounded";
import LanguageOutlined from "@mui/icons-material/LanguageOutlined";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { MuiTheme } from "./mui/mui-theme";
import { PageContainer } from "./mui/primitives";
import { colors } from "./mui/theme";

export const navigation = [
  { href: "/", label: "Home", idLabel: "Beranda" },
  { href: "/about/", label: "Our story", idLabel: "Cerita kami" },
  { href: "/work/", label: "Our work", idLabel: "Karya kami" },
  {
    href: "/partner/",
    label: "Partner with us",
    idLabel: "Bermitra dengan kami",
  },
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
  "& > a:last-of-type": {
    border: "1px solid #ffffff50",
    borderRadius: 2,
    padding: "13px 20px",
  },
  "& .language-switch": {
    alignItems: "center",
    borderLeft: "1px solid #ffffff40",
    display: "inline-flex",
    gap: 6,
    marginLeft: 2,
    paddingLeft: 20,
  },
  "& .language-switch svg": { color: colors.gold, fontSize: "1rem" },
  "& .language-switch a": {
    border: 0,
    color: "#d9e1e7",
    fontSize: "0.76rem",
    padding: "8px 0",
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
  "& .language-link": {
    alignItems: "center",
    borderTop: "1px solid #ffffff20",
    display: "flex",
    gap: 8,
    marginTop: 4,
    padding: "16px 8px 6px",
  },
  "& .language-link svg": { color: colors.gold, fontSize: "1rem" },
});

const MobileNav = styled("details")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: { display: "block" },
  "& summary": {
    alignItems: "center",
    display: "flex",
    fontSize: "0.85rem",
    justifyContent: "space-between",
    listStyle: "none",
    minHeight: 44,
    padding: "10px 0",
  },
  "& summary::-webkit-details-marker": { display: "none" },
  "& summary > svg": {
    color: colors.gold,
    fontSize: "1.35rem",
    transition: "opacity 0.2s, transform 0.2s",
  },
  "& summary > .close-icon": { display: "none" },
  "&[open] summary > .menu-icon": { display: "none" },
  "&[open] summary > .close-icon": { display: "block" },
}));

interface HeaderProps {
  pathname: string;
  locale?: "en" | "id";
}

function Navigation({
  pathname,
  label,
  locale = "en",
  mobile = false,
}: HeaderProps & { label: string; mobile?: boolean }) {
  const prefix = locale === "id" ? "/id" : "";
  const links = navigation.map(({ href, idLabel, label: linkLabel }) => {
    const localizedHref = `${prefix}${href}`;

    return (
      <a
        href={localizedHref}
        key={href}
        aria-current={pathname === localizedHref ? "page" : undefined}
      >
        {locale === "id" ? idLabel : linkLabel}
      </a>
    );
  });
  const languagePath =
    locale === "id"
      ? pathname.replace(/^\/id/, "") || "/"
      : `/id${pathname === "/" ? "/" : pathname}`;
  const languageLabel = locale === "id" ? "English" : "Bahasa Indonesia";
  const languageAriaLabel =
    locale === "id"
      ? "Beralih ke Bahasa Inggris"
      : "Beralih ke Bahasa Indonesia";

  if (mobile) {
    return (
      <MobileNav>
        <summary>
          <span>Menu</span>
          <MenuRounded className="menu-icon" aria-hidden="true" />
          <CloseRounded className="close-icon" aria-hidden="true" />
        </summary>
        <MobileLinks aria-label={label}>
          {links}
          <a
            className="language-link"
            href={languagePath}
            aria-label={languageAriaLabel}
          >
            <LanguageOutlined aria-hidden="true" />
            {languageLabel}
          </a>
        </MobileLinks>
      </MobileNav>
    );
  }

  return (
    <DesktopNav aria-label={label}>
      {links}
      <span className="language-switch">
        <LanguageOutlined aria-hidden="true" />
        <a href={languagePath} aria-label={languageAriaLabel}>
          {languageLabel}
        </a>
      </span>
    </DesktopNav>
  );
}

export function SiteHeader({ pathname, locale = "en" }: HeaderProps) {
  const brandHref = locale === "id" ? "/id/" : "/";
  const brandLabel = locale === "id" ? "Beranda BESTARI" : "BESTARI home";

  return (
    <MuiTheme globalStyles>
      <HeaderRoot>
        <HeaderInner>
          <Brand href={brandHref} aria-label={brandLabel}>
            <img
              src="/full-name-logo.png"
              alt="Belayan Sejahtera Lestari"
              width="2700"
              height="1080"
            />
          </Brand>
          <Navigation
            pathname={pathname}
            locale={locale}
            label={locale === "id" ? "Navigasi utama" : "Main navigation"}
          />
          <Navigation
            pathname={pathname}
            locale={locale}
            label={locale === "id" ? "Navigasi seluler" : "Mobile navigation"}
            mobile
          />
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

export function SiteFooter({ locale = "en" }: { locale?: "en" | "id" }) {
  const isIndonesian = locale === "id";
  const brandHref = isIndonesian ? "/id/" : "/";

  return (
    <MuiTheme>
      <FooterRoot>
        <FooterTop>
          <Box>
            <FooterName href={brandHref}>BESTARI</FooterName>
            <p>
              Belayan Sejahtera Lestari
              <br />
              {isIndonesian
                ? "Melanjutkan keberlanjutan"
                : "Continue the Sustainability"}
            </p>
          </Box>
          <p>
            {isIndonesian ? "Berakar di Desa Muai." : "Rooted in Muai Village."}
            <br />
            Kembang Janggut, Kutai Kartanegara
            <br />
            {isIndonesian
              ? "Kalimantan Timur, Indonesia"
              : "East Kalimantan, Indonesia"}
          </p>
          <nav
            aria-label={isIndonesian ? "Navigasi footer" : "Footer navigation"}
          >
            {navigation.slice(1).map(({ href, idLabel, label }) => (
              <a href={`${isIndonesian ? "/id" : ""}${href}`} key={href}>
                {isIndonesian ? idLabel : label}
              </a>
            ))}
          </nav>
        </FooterTop>
        <FooterBottom>
          <span>© {new Date().getFullYear()} Belayan Sejahtera Lestari</span>
          <span>
            {isIndonesian
              ? "Untuk generasi mendatang."
              : "For the generations ahead."}
          </span>
        </FooterBottom>
      </FooterRoot>
    </MuiTheme>
  );
}

export { CtaLink } from "./mui/primitives";
