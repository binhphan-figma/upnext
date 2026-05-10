import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Mic2 } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";

export const metadata: Metadata = {
  title: "Graduation Defense Kit",
  description:
    "Presentation checklist, demo order, and honest scope framing for the UpNext graduation defense.",
  robots: { index: false, follow: false }
};

const demoOrder = [
  { route: "/", goal: "Position UpNext as AI-powered skills-based IT recruitment." },
  {
    route: "/for-candidates",
    goal: "Explain candidate value: CV feedback, job fit, interview coach."
  },
  {
    route: "/candidate/cv",
    goal: "Show AI coaching cards, consent, strengths, gaps, limitations."
  },
  { route: "/for-employers", goal: "Explain recruiter value: applicant review and workflow." },
  {
    route: "/recruiter/applicants/nguyen-minh-anh",
    goal: "Show explainable matching, evidence, risks, and manual decision control."
  },
  { route: "/trust", goal: "Close with privacy, fairness, security, and AI governance." }
];

const checklist = [
  "Say clearly: AI supports humans, AI does not auto-reject.",
  "Show that every role has complete screens: candidate, recruiter, admin.",
  "Mention prototype-first trade-off honestly before backend questions.",
  "Open `/demo` or `/defense` first so the presentation has a guided story.",
  "Use screenshots from key pages instead of jumping through too many routes live."
];

export default function DefensePage() {
  return (
    <PrototypeShell
      badge="Graduation defense"
      icon={GraduationCap}
      title="Defense kit for presenting UpNext as a polished graduation product."
      description="This page helps the team explain product value, demonstrate the best UI routes, answer scope questions honestly, and avoid overclaiming production readiness."
      primaryAction={{ href: "/demo", label: "Open guided demo" }}
      secondaryAction={{ href: "/prototype", label: "View sitemap" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Demo order"
            title="Recommended live presentation flow"
            description="Keep the story focused. Do not open every page live; use the sitemap only if reviewers ask."
          />
          <div className="mt-6 space-y-4">
            {demoOrder.map((item, index) => (
              <Link
                key={item.route}
                href={item.route}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-card sm:grid-cols-[48px_140px_1fr]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="self-center rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-700">
                  {item.route}
                </span>
                <span className="text-sm leading-6 text-ink-600">{item.goal}</span>
              </Link>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <Mic2 className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Opening pitch" title="30-second version" />
            <p className="mt-4 text-sm leading-6 text-ink-500">
              UpNext is an AI-powered IT recruitment platform for junior and mid-level hiring. It
              helps candidates improve CVs and prepare interviews, while recruiters get transparent
              evidence-based decision support. AI explains and recommends; humans decide.
            </p>
          </SurfaceCard>
          <EnterpriseCallout
            title="Scope honesty"
            description="Call this a high-fidelity enterprise UI prototype plus architecture foundation, not a production hiring system yet."
            tone="amber"
          />
          <SurfaceCard>
            <SectionHeading eyebrow="Defense keywords" title="What to repeat" />
            <div className="mt-5">
              <TagList
                tags={[
                  "Skills-based hiring",
                  "Human-in-the-loop AI",
                  "CV snapshot",
                  "AI transparency",
                  "SEO/GEO",
                  "PWA-ready"
                ]}
                tone="emerald"
              />
            </div>
          </SurfaceCard>
        </div>
      </div>

      <SurfaceCard className="mt-6">
        <SectionHeading eyebrow="Checklist" title="Before presenting to the council" />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {checklist.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                aria-hidden="true"
              />
              <p className="text-sm leading-6 text-ink-600">{item}</p>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
