import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const pages = [
  "/",
  "/about/",
  "/work/",
  "/partner/",
  "/id/",
  "/id/about/",
  "/id/work/",
  "/id/partner/",
] as const;
const titles = [
  "Community Development in East Kalimantan | BESTARI",
  "About Belayan Sejahtera Lestari | BESTARI",
  "Sustainable Development in East Kalimantan | BESTARI",
  "Community Partnerships in East Kalimantan | BESTARI",
  "Pengembangan Masyarakat di Kalimantan Timur | BESTARI",
  "Tentang Belayan Sejahtera Lestari | BESTARI",
  "Pembangunan Berkelanjutan di Kalimantan Timur | BESTARI",
  "Kemitraan untuk Masyarakat di Kalimantan Timur | BESTARI",
] as const;

const pagePath = (pathname: string) =>
  join(
    "dist",
    pathname === "/"
      ? "index.html"
      : pathname.endsWith("/")
        ? `${pathname.slice(1)}index.html`
        : pathname.slice(1),
  );

const readPage = (pathname: string) => readFile(pagePath(pathname), "utf8");

function getAttributes(html: string, tag: string, attribute: string) {
  const pattern = new RegExp(`<${tag}\\b[^>]*\\b${attribute}="([^"]*)"`, "gi");
  return Array.from(html.matchAll(pattern), (match) => match[1] ?? "");
}

function countElements(html: string, tag: string) {
  return Array.from(html.matchAll(new RegExp(`<${tag}\\b`, "gi"))).length;
}

describe("published site", () => {
  it.each(pages)("keeps %s pages navigable and SEO-ready", async (route) => {
    const html = await readPage(route);
    const pageIndex = pages.indexOf(route);

    expect(countElements(html, "h1")).toBe(1);
    expect(html).toContain(`<title>${titles[pageIndex]}</title>`);
    expect(html).toContain(`https://bstari.org${route}`);
    expect(html).toContain(`lang="${route.startsWith("/id") ? "id" : "en"}"`);

    const targets = [
      ...getAttributes(html, "a", "href"),
      ...getAttributes(html, "img", "src"),
    ].filter((target) => target.startsWith("/") || target.startsWith("#"));

    for (const target of targets) {
      const resolved = new URL(target, `https://bstari.org${route}`);
      const targetFile = pagePath(resolved.pathname);

      expect(existsSync(targetFile), `${route}: missing target ${target}`).toBe(
        true,
      );

      if (resolved.hash) {
        const targetHtml = await readFile(targetFile, "utf8");
        expect(targetHtml).toContain(`id="${resolved.hash.slice(1)}"`);
      }
    }
  });

  it("publishes crawler assets and the intended contact actions", async () => {
    const home = await readPage("/");
    const partner = await readPage("/partner/");
    const indonesianHome = await readPage("/id/");
    const indonesianPartner = await readPage("/id/partner/");
    const robots = await readFile("dist/robots.txt", "utf8");
    const sitemap = await readFile("dist/sitemap.xml", "utf8");

    expect(existsSync("dist/robots.txt")).toBe(true);
    expect(existsSync("dist/sitemap.xml")).toBe(true);
    expect(existsSync("dist/social-card.png")).toBe(true);
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("Sitemap: https://bstari.org/sitemap.xml");

    for (const route of pages) {
      expect(sitemap).toContain(`<loc>https://bstari.org${route}</loc>`);
    }

    expect(home.includes('src="/photos/hero-belayan.jpg"')).toBe(
      existsSync("public/photos/hero-belayan.jpg"),
    );
    expect(existsSync("public/videos/muai.mp4")).toBe(true);
    expect(home).toMatch(/<video\b/);
    expect(home).toContain('preload="none"');
    expect(home).toContain('poster="/photos/hero-belayan.jpg"');
    expect(home).not.toContain('src="/videos/belayan.mp4"');
    expect(home).not.toMatch(/<video[^>]*loop/);
    expect(home).not.toMatch(/<video[^>]*controls/);
    expect(home).not.toContain("data-video-src");
    expect(home).toContain(
      "Farmers and volunteers carry young tree seedlings across a cultivated field.",
    );
    expect(home).toContain(
      "Aerial view of forest, water, and cultivated land.",
    );
    expect(home).not.toContain("Illustrative");
    expect(home).not.toContain("Replace with");
    const work = await readPage("/work/");
    expect(work.match(/src="\/photos\//g)?.length).toBe(4);
    expect(work.match(/<figcaption\b/g)?.length).toBe(4);
    expect(partner).toContain("tel:+6282157245665");
    expect(partner).toContain("https://wa.me/6282157245665");
    expect(partner).not.toContain("mailto:info@bstari.org");
    expect(indonesianHome).toContain("Masyarakat berdaya.");
    expect(indonesianHome).toContain("Bermitra dengan kami");
    expect(indonesianPartner).toContain("Peluang jangka panjang.");
    expect(indonesianPartner).toContain("Mulai percakapan");
    expect(indonesianPartner).toContain("tel:+6282157245665");
    expect(indonesianPartner).toContain("https://wa.me/6282157245665");
    expect(indonesianPartner).not.toContain("mailto:info@bstari.org");
  });
});
