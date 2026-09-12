import type { APIRoute } from "astro";

const routes = [
  "/",
  "/about/",
  "/work/",
  "/partner/",
  "/id/",
  "/id/about/",
  "/id/work/",
  "/id/partner/",
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://bstari.org/");
  const urls = routes
    .map((route) => `  <url><loc>${new URL(route, base).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
