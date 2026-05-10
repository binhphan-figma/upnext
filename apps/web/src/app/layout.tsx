import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "UpNext — AI-powered IT recruitment for junior and mid-level hiring",
    template: "%s | UpNext"
  },
  description:
    "UpNext helps IT candidates improve their CVs and interview skills while giving recruiters transparent AI-assisted candidate-job matching.",
  applicationName: "UpNext",
  keywords: [
    "IT recruitment platform",
    "junior developer jobs",
    "AI CV analysis",
    "candidate job matching",
    "interview coach"
  ],
  authors: [{ name: "UpNext Team" }],
  openGraph: {
    type: "website",
    siteName: "UpNext",
    title: "UpNext — AI-powered IT recruitment",
    description:
      "Skills-based hiring platform with AI CV feedback, candidate-job matching, and interview coaching.",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "UpNext — AI-powered IT recruitment",
    description:
      "Skills-based hiring platform with AI CV feedback, candidate-job matching, and interview coaching."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
