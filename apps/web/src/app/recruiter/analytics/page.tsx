import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Lightbulb } from "lucide-react";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { recruiterAnalytics, recruiterFunnel, recruiterInsights } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Recruiter Analytics Prototype",
  description:
    "Recruiter analytics dashboard for hiring funnel quality, review speed, fair review coverage, and AI escalation signals.",
  robots: { index: false, follow: false }
};

export default function RecruiterAnalyticsPage() {
  return (
    <PrototypeShell
      badge="Recruiter analytics"
      icon={BarChart3}
      title="Hiring analytics that focuses on quality, fairness, and workflow bottlenecks."
      description="Enterprise recruiters need more than applicant counts. They need insight into fit quality, funnel drop-off, review speed, and governance coverage."
      primaryAction={{ href: "/recruiter/pipeline", label: "Open pipeline" }}
      secondaryAction={{ href: "/recruiter/jobs", label: "Manage jobs" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {recruiterAnalytics.map((metric) => (
              <SurfaceCard key={metric.label}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">
                      {metric.value}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    {metric.trend}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink-500">{metric.insight}</p>
              </SurfaceCard>
            ))}
          </div>

          <SurfaceCard>
            <SectionHeading
              eyebrow="Funnel"
              title="Candidate conversion and review stages"
              description="This view helps recruiters identify whether the job post, application form, or review process is causing drop-off."
            />
            <div className="mt-6 space-y-5">
              {recruiterFunnel.map((stage) => (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-ink-900">{stage.stage}</p>
                      <p className="mt-1 text-sm text-ink-500">
                        {stage.count.toLocaleString()} candidates
                      </p>
                    </div>
                    <span className="font-semibold text-brand-700">{stage.conversion}%</span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar
                      value={stage.conversion}
                      tone={stage.conversion > 20 ? "emerald" : "blue"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div className="space-y-6">
          <SurfaceCard>
            <Lightbulb className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Insights" title="What to improve next" />
            <div className="mt-5 space-y-3">
              {recruiterInsights.map((insight) => (
                <p
                  key={insight}
                  className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  {insight}
                </p>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Analytics principle"
            description="Measure outcomes that improve candidate experience and fair human review, not just recruiter speed."
            tone="blue"
          />
          <Link
            href="/recruiter/jobs/new"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-700"
          >
            Improve job description
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
