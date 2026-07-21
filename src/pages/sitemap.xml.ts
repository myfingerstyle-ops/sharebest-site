import { getCollection } from "astro:content";
import { site } from "../data/site";

export async function GET() {
  const staticPages = [
    "",
    "/about/",
    "/contact/",
    "/reviews/",
    "/guides/",
    "/privacy-policy/",
    "/disclaimer/"
  ];

  const reviews = await getCollection("reviews");
  const guides = await getCollection("guides");

  const categoryMap = new Map();
  [...reviews, ...guides].forEach((entry) => {
    categoryMap.set(entry.data.category, `/category/${entry.data.category}/`);
  });

  const urls = [
    ...staticPages.map((path) => new URL(path, site.url).toString()),
    ...reviews.map((entry) => new URL(`/reviews/${entry.slug}/`, site.url).toString()),
    ...guides.map((entry) => new URL(`/guides/${entry.slug}/`, site.url).toString()),
    ...[...categoryMap.values()].map((path) => new URL(path, site.url).toString())
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
