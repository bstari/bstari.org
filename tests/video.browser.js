// Run on either homepage with agent-browser eval --stdin, in each motion setting.
(async () => {
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  const until = async (condition) => {
    for (let attempt = 0; attempt < 100; attempt++) {
      if (condition()) return;
      await wait(100);
    }
    throw new Error("Timed out waiting for video state");
  };
  const hero = document.querySelector("main figure");
  assert(hero, "Homepage media is missing");

  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    await wait(1200);
    const still = document.querySelector("main figure");
    assert(
      !still.querySelector("video"),
      "Reduced motion must use a still image",
    );
    assert(still.querySelector("img")?.naturalWidth > 0, "Poster must load");
    assert(
      !performance
        .getEntriesByType("resource")
        .some((entry) => entry.name.endsWith(".mp4")),
      "Reduced motion must not fetch video",
    );
    return "PASS: reduced motion keeps the poster without fetching video";
  }

  await until(() => hero.querySelector("button"));
  const button = hero.querySelector("button");
  const first = hero.querySelector("video");
  const playingLabel = button.textContent;
  assert(!first.paused, "Video should be playing before pause");
  assert(
    button.getBoundingClientRect().height >= 44,
    "Pause target is too small",
  );
  button.click();
  await wait(100);
  const pausedTime = first.currentTime;
  await wait(400);
  assert(first.paused, "Pause must stop playback");
  assert(Math.abs(first.currentTime - pausedTime) < 0.05, "Paused frame moved");
  assert(
    button.textContent !== playingLabel,
    "Pause must expose a resume label",
  );
  button.click();
  await wait(400);
  assert(
    !first.paused && first.currentTime > pausedTime,
    "Resume must advance playback",
  );

  const title = hero.querySelector("figcaption strong").textContent;
  first.currentTime = first.duration - 0.7;
  await until(() => hero.querySelectorAll("video").length === 2);
  button.click();
  await wait(100);
  assert(
    [...hero.querySelectorAll("video")].every((video) => video.paused),
    "Pause must stop both playlist layers",
  );
  await wait(1100);
  assert(
    hero.querySelector("figcaption strong").textContent === title,
    "Playlist changed while paused",
  );
  button.click();
  await until(
    () => hero.querySelector("figcaption strong").textContent !== title,
  );
  await wait(200);
  assert(
    !hero.querySelector("video").paused,
    "Next clip must play after resume",
  );
  return "PASS: pause, resume, playlist pause, and next clip playback";
})();
