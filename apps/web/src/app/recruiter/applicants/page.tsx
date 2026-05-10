import type { Metadata } from "next";
import { Bot, UserCheck, UsersRound } from "lucide-react";
import { ProgressBar, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { applicantReviewRows } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Applicant Review Prototype",
  robots: { index: false, follow: false }
};

export default function RecruiterApplicantsPage() {
  return (
    <PrototypeShell
      badge="Applicant review"
      icon={UsersRound}
      title="Human-in-the-loop applicant review with explainable AI support."
      description="The recruiter sees match score, evidence, gaps, and suggested questions — but status changes remain manual."
      primaryAction={{ href: "/recruiter/jobs", label: "Manage jobs" }}
      secondaryAction={{ href: "/candidate/cv", label: "See candidate CV view" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Shortlist queue"
            title="Ranked candidates with evidence"
            description="Scores are useful only when paired with visible evidence and risks."
          />
          <div className="mt-6 space-y-4">
            {applicantReviewRows.map((row) => (
              <div key={row.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="font-semibold text-ink-900">{row.name}</h2>
                    <p className="mt-1 text-sm text-ink-500">{row.role}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {row.score}% match
                  </span>
                </div>
                <div className="mt-4">
                  <ProgressBar value={row.score} tone={row.score >= 80 ? "emerald" : "blue"} />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <p className="rounded-2xl bg-white p-4 text-sm leading-6 text-ink-600">
                    <strong className="text-ink-900">Evidence:</strong> {row.evidence}
                  </p>
                  <p className="rounded-2xl bg-white p-4 text-sm leading-6 text-ink-600">
                    <strong className="text-ink-900">Risk:</strong> {row.risk}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <Bot className="h-7 w-7 text-brand-700" aria-hidden="true" />
          <SectionHeading
            eyebrow="AI copilot"
            title="Suggested interview plan"
            description="AI supports preparation. It does not reject, hire, or change status automatically."
          />
          <div className="mt-5 space-y-4">
            {[
              "Ask candidate to explain one React project architecture decision.",
              "Verify whether missing testing evidence is a true gap or missing CV detail.",
              "Use same rubric for all candidates applying to this role.",
              "Record final recruiter decision and reason in audit history."
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                {question}
              </div>
            ))}
          </div>
          <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            <UserCheck className="mr-2 h-4 w-4" aria-hidden="true" />
            Shortlist manually
          </button>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
