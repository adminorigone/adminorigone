import type { MetadataRoute } from "next";
import { CASE_STUDIES, SITE, CITIES } from "@/constants/site";

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/process", "/services", "/work", "/about", "/discovery", "/contact"].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const locations = CITIES.map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const stories = CASE_STUDIES.filter((c) => c.hasStory).map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...locations, ...stories];
}
