import assert from "node:assert/strict";
import { existsSync } from "node:fs";

// Run after `bun run build`: verify the published navigation and photo fallback.
const pages = ["/", "/about/", "/work/", "/partner/"];
const titles = [
  "Community Development in East Kalimantan | BESTARI",
  "About Belayan Sejahtera Lestari | BESTARI",
  "Sustainable Development in East Kalimantan | BESTARI",
  "Community Partnerships in East Kalimantan | BESTARI",
];
for (const route of pages) {
  const pageIndex = pages.indexOf(route);
  const html = await Bun.file(`dist${route}index.html`).text();
  const links: string[] = [];
  const images: string[] = [];
  let headings = 0;
  await new HTMLRewriter()
    .on("h1", {
      element() {
        headings++;
      },
    })
    .on("a[href]", {
      element(el) {
        links.push(el.getAttribute("href") ?? "");
      },
    })
    .on("img[src]", {
      element(el) {
        images.push(el.getAttribute("src") ?? "");
      },
    })
    .transform(new Response(html))
    .text();
  assert.equal(headings, 1, `${route}: exactly one page heading`);
  assert(
    html.includes(`<title>${titles[pageIndex]}</title>`),
    `${route}: keyword-focused title`,
  );
  assert(
    html.includes(`https://bstari.org${route}`),
    `${route}: canonical URL`,
  );
  for (const link of [...links, ...images].filter(
    (link) => link.startsWith("/") || link.startsWith("#"),
  )) {
    const url = new URL(link, `https://bstari.org${route}`);
    const file = `dist${url.pathname}${url.pathname.endsWith("/") ? "index.html" : ""}`;
    assert(existsSync(file), `${route}: missing target ${link}`);
    if (url.hash) {
      const target = await Bun.file(file).text();
      assert(
        target.includes(`id="${url.hash.slice(1)}"`),
        `${route}: missing anchor ${link}`,
      );
    }
  }
}
const home = await Bun.file("dist/index.html").text();
assert(existsSync("dist/robots.txt"), "robots.txt is published");
assert(existsSync("dist/sitemap.xml"), "sitemap.xml is published");
assert(existsSync("dist/social-card.png"), "social card is published");
const robots = await Bun.file("dist/robots.txt").text();
assert(robots.includes("Allow: /"), "robots.txt allows crawling");
assert(
  robots.includes("Sitemap: https://bstari.org/sitemap.xml"),
  "robots.txt points to sitemap",
);
const sitemap = await Bun.file("dist/sitemap.xml").text();
for (const route of pages)
  assert(
    sitemap.includes(`<loc>https://bstari.org${route}</loc>`),
    `sitemap includes ${route}`,
  );
assert.equal(
  home.includes('src="/photos/hero-belayan.jpg"'),
  existsSync("public/photos/hero-belayan.jpg"),
  "Hero photo replaces artwork when present",
);
const partner = await Bun.file("dist/partner/index.html").text();
assert(partner.includes("tel:+6282157245665"), "Phone CTA");
assert(partner.includes("https://wa.me/6282157245665"), "WhatsApp CTA");
assert(!partner.includes("mailto:info@bstari.org"), "Email CTA hidden");
console.log(
  "Four pages: headings, links, anchors, images, hero fallback, and contact CTAs passed.",
);
