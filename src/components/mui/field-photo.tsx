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

const MediaCaption = styled("figcaption")(({ theme }) => ({
  alignItems: "flex-start",
  background:
    "linear-gradient(180deg, #06284f00 0%, #06284fc2 48%, #06284ff5 100%)",
  bottom: 0,
  color: "#f4f6f3",
  display: "flex",
  fontSize: "0.78rem",
  gap: 12,
  left: 0,
  lineHeight: 1.5,
  padding: "58px 24px 20px",
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  "&::before": {
    backgroundColor: colors.gold,
    content: '""',
    flex: "0 0 18px",
    height: 1,
    marginTop: "0.7em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.74rem",
    gap: 10,
    padding: "48px 16px 16px",
  },
}));

const CaptionBody = styled("span")({
  display: "grid",
  gap: 3,
});

const VideoTitle = styled("strong")({
  color: "#fff",
  fontFamily: '"Source Serif 4", Georgia, "Times New Roman", serif',
  fontSize: "0.98rem",
  fontWeight: 400,
  letterSpacing: "-0.01em",
  lineHeight: 1.2,
});

const HeroVideo = styled("video")({
  backgroundColor: colors.navy,
  display: "block",
  height: "100%",
  objectFit: "cover",
  width: "100%",
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
  return (
    <Figure hero={hero}>
      <PhotoImage
        src={`/photos/${name}.jpg`}
        alt={alt}
        width={1600}
        height={1200}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : "auto"}
      />
      {caption && <MediaCaption>{caption}</MediaCaption>}
    </Figure>
  );
}

export interface VideoItem {
  src: string;
  title: string;
  alt: string;
  caption: string;
  trackSrc: string;
  trackLang: "en" | "id";
  trackLabel: string;
}

interface VideoProps {
  name: string;
  posterAlt: string;
  video: VideoItem;
  hero?: boolean;
}

export function FieldVideo({
  name,
  posterAlt,
  video,
  hero = false,
}: VideoProps) {
  const captionId = `${name}-video-caption`;

  return (
    <Figure hero={hero}>
      <HeroVideo
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`/photos/${name}.jpg`}
        aria-label={`${video.title}: ${video.alt}`}
        aria-describedby={captionId}
      >
        <source src={`/videos/${video.src}.mp4`} type="video/mp4" />
        <track
          kind="captions"
          label={video.trackLabel}
          src={video.trackSrc}
          srcLang={video.trackLang}
        />
        <img src={`/photos/${name}.jpg`} alt={posterAlt} />
      </HeroVideo>
      <MediaCaption id={captionId}>
        <CaptionBody>
          <VideoTitle>{video.title}</VideoTitle>
          <span>{video.caption}</span>
        </CaptionBody>
      </MediaCaption>
    </Figure>
  );
}
