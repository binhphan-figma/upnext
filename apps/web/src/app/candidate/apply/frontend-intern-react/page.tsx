import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  applicationConsentItems,
  applicationFlowSteps,
  applicationPreview
} from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Apply Flow Prototype",
  description:
    "Candidate application submission flow with CV snapshot, AI consent, fit preview, and transparent recruiter review boundaries.",
  robots: { index: false, follow: false }
};

export default function CandidateApplyPage() {
  return (
    <PrototypeShell
      badge="Apply flow"
      icon={FileCheck2}
      title="A trustworthy application flow with CV snapshot and explicit AI consent."
      description="Before candidates submit, UpNext should explain what data is used, what recruiters see, and what AI is not allowed to decide."
      primaryAction={{
        href: "/candidate/applications/frontend-intern-react",
        label: "View submitted state"
      }}
      secondaryAction={{ href: "/jobs/frontend-intern-react", label: "Back to job" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow={`${applicationPreview.company} · ${applicationPreview.job}`}
            title="Application preview"
            description="The candidate reviews a locked snapshot before creating an application record."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {applicationFlowSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {step.status}
                  </span>
                </div>
                <h2 className="mt-4 font-semibold text-ink-900">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
              Locked CV snapshot
            </p>
            <p className="mt-3 text-sm leading-6 text-brand-950">{applicationPreview.cvSnapshot}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-slate-200 p-6">
            <p className="font-semibold text-ink-900">Candidate cover note</p>
            <p className="mt-3 text-sm leading-6 text-ink-600">{applicationPreview.coverNote}</p>
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <ShieldCheck className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Consent" title="What the candidate agrees to" />
            <div className="mt-5 space-y-3">
              {applicationConsentItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <SectionHeading eyebrow="Recruiter visibility" title="After submit" />
            <div className="mt-5">
              <TagList tags={applicationPreview.recruiterWillSee} tone="slate" />
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Human review boundary"
            description="The submit action starts review; it does not trigger automated rejection, ranking-only decisions, or hidden profiling."
            tone="amber"
          />
          <Link
            href="/candidate/applications/frontend-intern-react"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-700"
          >
            Submit application prototype
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
