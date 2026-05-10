import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UpNext",
    short_name: "UpNext",
    description: "AI-powered IT recruitment platform for junior and mid-level hiring.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#f8fafc",
    theme_color: "#2563eb",
    id: "/",
    categories: ["business", "education", "productivity"],
    shortcuts: [
      {
        name: "Candidate coach",
        short_name: "Candidate",
        description: "Open AI CV feedback and candidate coaching prototype.",
        url: "/candidate/cv",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }]
      },
      {
        name: "Recruiter review",
        short_name: "Recruiter",
        description: "Open applicant review workflow prototype.",
        url: "/recruiter/applicants",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }]
      }
    ],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
