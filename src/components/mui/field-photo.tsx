import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { type SyntheticEvent, useEffect, useRef, useState } from "react";
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

const HeroPoster = styled(PhotoImage, {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ visible }) => ({
  inset: 0,
  opacity: visible ? 0 : 1,
  position: "absolute",
  transition: "opacity 900ms ease",
  zIndex: 1,
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
}));

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
  zIndex: 3,
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

const HeroVideo = styled("video", {
  shouldForwardProp: (prop) => prop !== "visible",
})<{ visible: boolean }>(({ visible }) => ({
  backgroundColor: colors.navy,
  display: "block",
  height: "100%",
  inset: 0,
  objectFit: "cover",
  opacity: visible ? 1 : 0,
  position: "absolute",
  transition: "opacity 900ms ease",
  width: "100%",
  zIndex: 2,
  "@media (prefers-reduced-motion: reduce)": { transition: "none" },
}));

const PlaybackButton = styled("button")({
  backgroundColor: colors.navy,
  border: `1px solid ${colors.gold}`,
  borderRadius: 2,
  color: "#fff",
  cursor: "pointer",
  font: "inherit",
  fontSize: "0.8rem",
  minHeight: 44,
  padding: "10px 14px",
  position: "absolute",
  right: 16,
  top: 16,
  zIndex: 4,
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
}

interface VideoProps {
  name: string;
  posterAlt: string;
  videos: readonly VideoItem[];
  pauseLabel: string;
  resumeLabel: string;
  hero?: boolean;
}

const MEDIA_LOAD_DELAY = 800;
const POSTER_HOLD = 3000;
const MEDIA_FADE = 900;
const NEXT_PRELOAD_LEAD = 5;
const CROSSFADE_LEAD = 1.1;

export function FieldVideo(props: VideoProps) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return reducedMotion ? (
    <FieldPhoto name={props.name} alt={props.posterAlt} hero={props.hero} />
  ) : (
    <VideoPlayback {...props} />
  );
}

function VideoPlayback({
  name,
  posterAlt,
  videos,
  pauseLabel,
  resumeLabel,
  hero = false,
}: VideoProps) {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const [videoPlayable, setVideoPlayable] = useState(false);
  const [posterHoldComplete, setPosterHoldComplete] = useState(false);
  const [posterReleased, setPosterReleased] = useState(false);
  const [nextRequested, setNextRequested] = useState(false);
  const [nextPlayable, setNextPlayable] = useState(false);
  const [crossfading, setCrossfading] = useState(false);
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);
  const video = videos[activeIndex] ?? videos[0];
  const nextVideo =
    videos.length > 1 ? videos[(activeIndex + 1) % videos.length] : undefined;
  const captionId = `${name}-video-caption`;

  useEffect(() => {
    const loadTimer = window.setTimeout(
      () => setVideoReady(true),
      MEDIA_LOAD_DELAY,
    );
    const posterTimer = window.setTimeout(
      () => setPosterHoldComplete(true),
      POSTER_HOLD,
    );
    return () => {
      window.clearTimeout(loadTimer);
      window.clearTimeout(posterTimer);
    };
  }, []);

  useEffect(() => {
    if (!crossfading || paused) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % videos.length);
      setCrossfading(false);
      setNextRequested(false);
      setNextPlayable(false);
    }, MEDIA_FADE);
    return () => window.clearTimeout(timer);
  }, [crossfading, paused, videos.length]);

  useEffect(() => {
    for (const media of [currentVideoRef.current, nextVideoRef.current]) {
      if (!media) continue;
      if (paused) {
        media.pause();
      } else if (
        videoReady &&
        (media === currentVideoRef.current || crossfading)
      ) {
        media.play().catch(() => setPaused(true));
      }
    }
  }, [paused, videoReady, crossfading]);

  if (!video) return null;

  const videoVisible = videoReady && videoPlayable && posterHoldComplete;
  const beginCrossfade = (allowUnready = false) => {
    if (
      paused ||
      crossfading ||
      (!nextPlayable && !allowUnready) ||
      !nextVideo
    ) {
      return;
    }

    setPosterReleased(true);
    setCrossfading(true);
  };
  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const current = event.currentTarget;
    const remaining = current.duration - current.currentTime;

    if (!nextRequested && nextVideo && remaining <= NEXT_PRELOAD_LEAD) {
      setNextRequested(true);
    }
    if (nextPlayable && remaining <= CROSSFADE_LEAD) {
      beginCrossfade();
    }
  };
  const handleEnded = () => beginCrossfade();
  const handleNextCanPlay = () => {
    setNextPlayable(true);
    const current = currentVideoRef.current;
    if (
      current &&
      (current.ended ||
        current.duration - current.currentTime <= CROSSFADE_LEAD)
    ) {
      beginCrossfade(true);
    }
  };

  return (
    <Figure hero={hero}>
      {!posterReleased && (
        <HeroPoster
          src={`/photos/${name}.jpg`}
          alt={videoVisible ? "" : posterAlt}
          width={1600}
          height={1200}
          loading={hero ? "eager" : "lazy"}
          fetchPriority={hero ? "high" : "auto"}
          visible={videoVisible}
          aria-hidden={videoVisible}
        />
      )}
      <HeroVideo
        key={`${video.src}-${videoReady ? "loaded" : "poster"}`}
        ref={currentVideoRef}
        autoPlay={videoReady && !paused}
        muted
        playsInline
        preload={videoReady ? "auto" : "none"}
        poster={posterReleased ? undefined : `/photos/${name}.jpg`}
        aria-label={`${video.title}: ${video.alt}`}
        aria-describedby={videoVisible ? captionId : undefined}
        aria-hidden={!videoVisible || crossfading}
        visible={videoVisible && !crossfading}
        onCanPlay={() => setVideoPlayable(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      >
        {videoReady && (
          <source src={`/videos/${video.src}.mp4`} type="video/mp4" />
        )}
      </HeroVideo>
      {nextRequested && nextVideo && (
        <HeroVideo
          key={`${nextVideo.src}-${videoReady ? "loaded" : "poster"}`}
          ref={nextVideoRef}
          muted
          playsInline
          preload="auto"
          aria-label={`${nextVideo.title}: ${nextVideo.alt}`}
          aria-describedby={crossfading ? captionId : undefined}
          aria-hidden={!crossfading}
          visible={crossfading && nextPlayable}
          onCanPlay={handleNextCanPlay}
        >
          <source src={`/videos/${nextVideo.src}.mp4`} type="video/mp4" />
        </HeroVideo>
      )}
      <MediaCaption id={captionId}>
        <CaptionBody>
          <VideoTitle>{video.title}</VideoTitle>
          <span>{video.caption}</span>
        </CaptionBody>
      </MediaCaption>
      {videoVisible && (
        <PlaybackButton type="button" onClick={() => setPaused(!paused)}>
          {paused ? resumeLabel : pauseLabel}
        </PlaybackButton>
      )}
    </Figure>
  );
}
