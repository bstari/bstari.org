import { existsSync } from "node:fs";
import { styled } from "@mui/material/styles";
import { colors } from "./theme";

const Figure = styled("figure", {
  shouldForwardProp: (prop) => prop !== "hero",
})<{ hero?: boolean }>(({ theme, hero = false }) => ({
  backgroundColor: "#153e57",
  margin: 0,
  overflow: "hidden",
  position: "relative",
  aspectRatio: hero ? "4 / 4.7" : "4 / 3",
  ...(hero && {
    borderRadius: "120px 2px 2px 2px",
    maxHeight: 560,
  }),
  [theme.breakpoints.down("md")]: hero ? { aspectRatio: "4 / 5.5" } : undefined,
  [theme.breakpoints.down("sm")]: hero
    ? {
        aspectRatio: "1.4",
        borderTopLeftRadius: 75,
        maxHeight: 420,
      }
    : undefined,
}));

const PhotoImage = styled("img")({
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

const RiverArt = styled("div")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  "& > img": {
    height: "100%",
    objectFit: "cover",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    "& > img": { objectPosition: "center 42%" },
  },
}));

const Caption = styled("figcaption")({
  backgroundColor: colors.navy,
  bottom: 0,
  color: "#e4e8e8",
  fontSize: "0.7rem",
  left: 0,
  padding: "18px 24px",
  position: "absolute",
  right: 0,
});

interface Props {
  name: string;
  alt: string;
  caption?: string;
  hero?: boolean;
}

export default function FieldPhoto({
  name,
  alt,
  caption,
  hero = false,
}: Props) {
  const available = existsSync(`public/photos/${name}.jpg`);

  return (
    <Figure hero={hero}>
      {available ? (
        <PhotoImage
          src={`/photos/${name}.jpg`}
          alt={alt}
          width={1600}
          height={1200}
          loading={hero ? "eager" : "lazy"}
          fetchPriority={hero ? "high" : "auto"}
        />
      ) : (
        <RiverArt aria-hidden="true">
          <img src="/river-study.svg" alt="" width="800" height="1000" />
        </RiverArt>
      )}
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
}
