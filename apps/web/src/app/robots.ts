import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/for-candidates",
          "/for-employers",
          "/faq",
          "/jobs",
          "/companies",
          "/blog",
          "/career-roadmap",
          "/trust",
          "/ai-transparency"
        ],
        disallow: [
          "/admin",
          "/candidate",
          "/recruiter",
          "/account",
          "/notifications",
          "/auth",
          "/demo",
          "/prototype",
          "/design-system"
        ]
      }
    ],
    sitemap: new URL("/sitemap.xml", baseUrl).toString()
  };
}
