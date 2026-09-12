import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://bstari.org/");
  const body = `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", base).href}\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
