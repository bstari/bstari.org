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

const HeroVideo = styled("video")({
  backgroundColor: colors.navy,
  display: "block",
  height: "100%",
  objectFit: "cover",
  width: "100%",
});

const VideoCaption = styled("figcaption")({
  background: "linear-gradient(180deg, transparent, #06284fe8 30%)",
  bottom: 0,
  color: "#e4e8e8",
  fontSize: "0.7rem",
  left: 0,
  padding: "44px 24px 54px",
  pointerEvents: "none",
  position: "absolute",
  right: 0,
  zIndex: 1,
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
      {caption && <Caption>{caption}</Caption>}
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
      <VideoCaption id={captionId}>{video.caption}</VideoCaption>
    </Figure>
  );
}
