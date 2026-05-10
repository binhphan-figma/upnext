import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Target } from "lucide-react";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { candidateJobFitCards } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Job Fit Prototype",
  description:
    "Candidate-facing job-fit analysis that explains matched skills, gaps, and next actions without making hiring decisions.",
  robots: { index: false, follow: false }
};

export default function CandidateJobFitPage() {
  return (
    <PrototypeShell
      badge="Candidate workflow"
      icon={Target}
      title="Job-fit analysis that turns AI feedback into concrete candidate actions."
      description="Candidates need clear, respectful guidance: what fits, what is missing, and what to improve before applying."
      primaryAction={{ href: "/jobs/frontend-intern-react", label: "Open job detail" }}
      secondaryAction={{ href: "/candidate/cv", label: "Review CV feedback" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Fit comparison"
            title="Best-fit roles based on current CV snapshot"
            description="Each card explains evidence and gaps so the candidate can improve, not just chase a score."
          />
          <div className="mt-6 space-y-4">
            {candidateJobFitCards.map((job) => (
              <article
                key={job.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm font-semibold text-brand-700">{job.company}</p>
                    <h2 className="mt-1 text-xl font-semibold text-ink-900">{job.title}</h2>
                    <p className="mt-2 text-sm text-ink-500">{job.readiness}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-brand-700 shadow-sm">
                    {job.fit}% fit
                  </span>
                </div>
                <div className="mt-5">
                  <ProgressBar value={job.fit} tone={job.fit >= 80 ? "emerald" : "blue"} />
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Matched evidence
                    </p>
                    <div className="mt-3">
                      <TagList tags={job.matched} tone="emerald" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                      Gaps to close
                    </p>
                    <div className="mt-3">
                      <TagList tags={job.gaps} tone="slate" />
                    </div>
                  </div>
                </div>
                <EnterpriseCallout title="Next action" description={job.action} tone="slate" />
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <Sparkles className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="AI guidance" title="Candidate-safe interpretation" />
            <div className="mt-5 space-y-3">
              {[
                "Fit score is a learning guide, not a hiring promise.",
                "Missing skills can mean the CV lacks evidence, not that the candidate lacks ability.",
                "Candidate should see practical next actions before applying.",
                "Recruiter decisions remain separate from candidate coaching."
              ].map((item) => (
                <p
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  {item}
                </p>
              ))}
            </div>
          </SurfaceCard>
          <Link
            href="/candidate/applications/frontend-intern-react"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-700"
          >
            See application snapshot
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
