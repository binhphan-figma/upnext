import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { candidateLearningPlan, candidateSkillRoadmap } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Learning Plan Prototype",
  description:
    "Candidate learning plan that turns CV gaps and job-fit analysis into weekly skill-building actions.",
  robots: { index: false, follow: false }
};

export default function CandidateLearningPlanPage() {
  return (
    <PrototypeShell
      badge="Learning plan"
      icon={BookOpenCheck}
      title="A guided learning plan that converts AI feedback into weekly progress."
      description="The candidate experience should not stop at scoring. It should help students understand what to improve and how to show proof."
      primaryAction={{ href: "/candidate/job-fit", label: "Review job fit" }}
      secondaryAction={{ href: "/candidate/interview-coach", label: "Practice interview" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Roadmap"
            title="Three-week readiness plan"
            description="Each sprint creates visible evidence that can improve the CV and recruiter confidence."
          />
          <div className="mt-6 space-y-5">
            {candidateLearningPlan.map((item) => (
              <article
                key={item.week}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      {item.week}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{item.goal}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-700 shadow-sm">
                    {item.progress}%
                  </span>
                </div>
                <div className="mt-5">
                  <ProgressBar
                    value={item.progress}
                    tone={item.progress >= 70 ? "emerald" : "blue"}
                  />
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {item.tasks.map((task) => (
                    <div
                      key={task}
                      className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-ink-600"
                    >
                      <CheckCircle2
                        className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      {task}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Skill map" title="Evidence readiness" />
            <div className="mt-5 space-y-3">
              {candidateSkillRoadmap.map((item) => (
                <div key={item.skill} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-ink-900">{item.skill}</p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{item.evidence}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Candidate UX principle"
            description="Feedback should be specific, actionable, and respectful. The product should build confidence, not shame candidates."
            tone="emerald"
          />
          <Link
            href="/candidate/cv"
            className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-brand-700"
          >
            Go back to CV feedback
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
