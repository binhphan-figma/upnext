import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitBranch, ShieldCheck } from "lucide-react";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { recruiterDecisionChecklist, recruiterPipelineBoard } from "@/lib/prototype-data";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Recruiter Pipeline Board Prototype",
  description:
    "Enterprise recruiter pipeline board with AI review stages, candidate evidence, and manual decision controls.",
  robots: { index: false, follow: false }
};

const stageTone = {
  slate: "border-slate-200 bg-slate-50 text-ink-700",
  blue: "border-blue-100 bg-blue-50 text-brand-700",
  emerald: "border-emerald-100 bg-emerald-50 text-emerald-700",
  amber: "border-amber-100 bg-amber-50 text-amber-700"
} as const;

export default function RecruiterPipelinePage() {
  return (
    <PrototypeShell
      badge="Recruiter workflow"
      icon={GitBranch}
      title="Pipeline board that makes AI review visible but keeps decisions manual."
      description="A production SaaS hiring workflow needs clear stages, candidate evidence, fair-review checklist, and safe manual controls."
      primaryAction={{
        href: "/recruiter/applicants/nguyen-minh-anh",
        label: "Open applicant detail"
      }}
      secondaryAction={{ href: "/recruiter/applicants", label: "Review ranked queue" }}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <SurfaceCard className="overflow-hidden">
          <SectionHeading
            eyebrow="Board view"
            title="Hiring pipeline by review stage"
            description="Cards show score, evidence, risk, and a safe next action. AI does not move cards automatically."
          />
          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {recruiterPipelineBoard.map((stage) => (
              <section
                key={stage.stage}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-semibold",
                      stageTone[stage.tone as keyof typeof stageTone]
                    )}
                  >
                    {stage.stage}
                  </span>
                  <span className="text-sm font-semibold text-ink-500">{stage.count}</span>
                </div>
                <div className="mt-4 space-y-3">
                  {stage.candidates.map((candidate) => (
                    <article key={candidate.name} className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="font-semibold text-ink-900">{candidate.name}</h2>
                          <p className="mt-1 text-xs leading-5 text-ink-500">{candidate.role}</p>
                        </div>
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                          {candidate.score}
                        </span>
                      </div>
                      <div className="mt-4">
                        <ProgressBar
                          value={candidate.score}
                          tone={candidate.score >= 80 ? "emerald" : "blue"}
                        />
                      </div>
                      <div className="mt-4 space-y-2 text-xs leading-5">
                        <p className="rounded-xl bg-emerald-50 p-3 text-emerald-800">
                          <strong>Signal:</strong> {candidate.signal}
                        </p>
                        <p className="rounded-xl bg-amber-50 p-3 text-amber-800">
                          <strong>Check:</strong> {candidate.risk}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <ShieldCheck className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Fair review" title="Decision checklist" />
            <div className="mt-5 space-y-3">
              {recruiterDecisionChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Enterprise UX principle"
            description="A hiring dashboard should make model output auditable, reversible, and secondary to recruiter judgment."
            tone="blue"
          />
          <Link
            href="/recruiter/applicants/nguyen-minh-anh"
            className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-brand-700"
          >
            Continue to applicant review
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
