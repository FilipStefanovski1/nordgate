import type { MetadataRoute } from "next";

const baseUrl = "https://nordgate.com";

const routes = [
  "",
  "/nordic-market-entry",
  "/capabilities",
  "/how-it-works",
  "/about",
  "/insights",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
