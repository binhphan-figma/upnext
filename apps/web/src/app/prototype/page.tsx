import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Sparkles } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { prototypePages } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Enterprise UI Prototype",
  description:
    "Explore the UpNext enterprise-grade UI prototype sitemap for candidate, recruiter, admin, and public flows.",
  robots: {
    index: false,
    follow: false
  }
};

export default function PrototypeIndexPage() {
  const groups = ["Candidate", "Recruiter", "Admin", "Public"] as const;

  return (
    <PrototypeShell
      badge="Prototype command center"
      icon={LayoutDashboard}
      title="Enterprise-grade UI map for the UpNext graduation demo."
      description="This prototype prioritizes polished UX, clear product storytelling, and complete demo coverage over deep backend implementation. Each screen is built to explain user value, AI transparency, and human decision control."
      primaryAction={{ href: "/candidate/cv", label: "Start with AI CV flow" }}
      secondaryAction={{ href: "/recruiter/applicants", label: "Review recruiter flow" }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <SurfaceCard className="bg-slate-950 text-white">
          <Sparkles className="h-8 w-8 text-blue-200" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Prototype principles for enterprise UX
          </h2>
          <div className="mt-6 grid gap-4">
            {[
              "Every screen has one primary user goal and clear next action.",
              "AI outputs are structured into score, evidence, risks, limitations, and human review.",
              "Dashboards use metrics, queues, timelines, and explainable states instead of decorative charts.",
              "Public pages support SEO/GEO with scannable content, entities, FAQs, and internal links.",
              "Reusable design-system patterns keep spacing, status states, and card hierarchy consistent."
            ].map((principle) => (
              <div
                key={principle}
                className="rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-200"
              >
                {principle}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Route coverage"
            title="Clickable prototype sitemap"
            description="Use this page as the demo index for reviewers, mentors, and graduation defense preparation."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-semibold text-ink-900">{group}</h3>
                <div className="mt-4 space-y-3">
                  {prototypePages
                    .filter((page) => page.owner === group)
                    .map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-ink-900">{page.title}</p>
                            <p className="mt-1 text-sm leading-6 text-ink-500">
                              {page.description}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                            {page.status}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>

      <SurfaceCard className="mt-6">
        <SectionHeading
          eyebrow="Defense-ready message"
          title="What this prototype should prove"
          description="The project is not only CRUD. It shows product thinking, AI safety, recruitment workflow, SEO/GEO readiness, and enterprise UX maturity."
        />
        <div className="mt-5">
          <TagList
            tags={[
              "Human-in-the-loop AI",
              "Skills-based hiring",
              "Candidate coaching",
              "Recruiter decision support",
              "Admin trust operations",
              "SEO/GEO content",
              "Responsive SaaS UI"
            ]}
            tone="emerald"
          />
        </div>
        <Link
          href="/design-system"
          className="mt-6 inline-flex rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          View design system
        </Link>
      </SurfaceCard>
    </PrototypeShell>
  );
}
