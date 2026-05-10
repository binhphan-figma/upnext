import type { MetadataRoute } from "next";

const publicRoutes = [
  "/",
  "/for-candidates",
  "/for-employers",
  "/faq",
  "/jobs",
  "/jobs/frontend-intern-react",
  "/companies",
  "/companies/novatech-labs",
  "/blog",
  "/blog/junior-developer-cv-checklist",
  "/career-roadmap",
  "/trust",
  "/ai-transparency"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/jobs") ? 0.8 : 0.7
  }));
}
