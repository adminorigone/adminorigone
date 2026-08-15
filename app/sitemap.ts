import type { MetadataRoute } from "next";
import { CASE_STUDIES, SITE, CITIES, OPEN_ROLES } from "@/constants/site";

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Core Conversion Pages (Highest Priority)
  const coreRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/discovery", priority: 0.9, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. SEO Location Landing Pages (High Priority for Local Search)
  const locations = CITIES.map((c) => ({
    url: `${BASE}/locations/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Secondary Pages (Medium Priority)
  const secondaryRoutes = [
    { path: "/work", priority: 0.8 },
    { path: "/process", priority: 0.8 },
    { path: "/about", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
    { path: "/careers", priority: 0.7 },
  ].map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  // 4. Content / Deep Pages (Standard Priority)
  const stories = CASE_STUDIES.filter((c) => c.hasStory).map((c) => ({
    url: `${BASE}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const roles = OPEN_ROLES.map((r) => ({
    url: `${BASE}/careers/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...locations, ...secondaryRoutes, ...stories, ...roles];
}
