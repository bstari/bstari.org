import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const pages = ["/", "/about/", "/work/", "/partner/"] as const;
const titles = [
  "Community Development in East Kalimantan | BESTARI",
  "About Belayan Sejahtera Lestari | BESTARI",
  "Sustainable Development in East Kalimantan | BESTARI",
  "Community Partnerships in East Kalimantan | BESTARI",
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
    expect(partner).toContain("tel:+6282157245665");
    expect(partner).toContain("https://wa.me/6282157245665");
    expect(partner).not.toContain("mailto:info@bstari.org");
  });
});
