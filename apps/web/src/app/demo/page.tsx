import type { Metadata } from "next";
import Link from "next/link";
import { Presentation, Route } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { demoWalkthrough } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Graduation Demo Script",
  description: "Guided UpNext demo route for graduation defense storytelling.",
  robots: { index: false, follow: false }
};

export default function DemoScriptPage() {
  return (
    <PrototypeShell
      badge="Defense walkthrough"
      icon={Presentation}
      title="Guided demo script for presenting UpNext professionally."
      description="Use this page as the presentation route for teachers and reviewers. It turns the prototype into a clear product story: problem, solution, AI workflow, ethics, and next implementation phase."
      primaryAction={{ href: "/prototype", label: "Open prototype map" }}
      secondaryAction={{ href: "/trust", label: "Trust center" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Recommended sequence"
            title="5-minute product walkthrough"
            description="Follow these screens in order to avoid jumping randomly between pages during the defense."
          />
          <div className="mt-6 space-y-4">
            {demoWalkthrough.map((item) => (
              <Link
                key={item.step}
                href={item.route}
                className="group grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-white hover:shadow-card md:grid-cols-[64px_1fr_auto]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h2 className="font-semibold text-ink-900">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{item.talkingPoint}</p>
                </div>
                <span className="self-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 group-hover:bg-blue-50">
                  {item.route}
                </span>
              </Link>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <Route className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Defense angle" title="What reviewers should remember" />
            <div className="mt-5">
              <TagList
                tags={[
                  "Modern SaaS UI",
                  "AI safety",
                  "Recruitment workflow",
                  "SEO/GEO",
                  "PWA-ready",
                  "Student-buildable"
                ]}
                tone="emerald"
              />
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Recommended speaking line"
            description="We intentionally prioritize polished prototype coverage first because a complete enterprise UX is more valuable for graduation review than unfinished backend depth."
            tone="blue"
          />
          <EnterpriseCallout
            title="Next implementation phase"
            description="After UI approval, convert auth, jobs, applications, and AI logs from mock data into PostgreSQL-backed flows."
            tone="amber"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
