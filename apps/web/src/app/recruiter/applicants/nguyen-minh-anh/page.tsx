import type { Metadata } from "next";
import { Bot, MessageSquareText, UserCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { applicantDetail } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Applicant Detail Prototype",
  robots: { index: false, follow: false }
};

export default function ApplicantDetailPage() {
  return (
    <PrototypeShell
      badge="Applicant detail"
      icon={UserCheck}
      title={`${applicantDetail.name} review`}
      description={applicantDetail.summary}
      primaryAction={{
        href: "/recruiter/interviews/nguyen-minh-anh",
        label: "Schedule interview"
      }}
      secondaryAction={{
        href: "/candidate/applications/frontend-intern-react",
        label: "Candidate view"
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <SurfaceCard>
          <SectionHeading
            eyebrow={applicantDetail.role}
            title="AI match explanation"
            description={`Confidence: ${applicantDetail.confidence}. Recruiter must still review evidence manually.`}
          />
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm font-semibold text-ink-700">
              <span>Overall fit</span>
              <span>{applicantDetail.score}%</span>
            </div>
            <div className="mt-3">
              <ProgressBar value={applicantDetail.score} tone="emerald" />
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="font-semibold text-emerald-900">Evidence</p>
              <div className="mt-4">
                <TagList tags={applicantDetail.evidence} tone="emerald" />
              </div>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Risks to verify</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-amber-800">
                {applicantDetail.risks.map((risk) => (
                  <li key={risk}>• {risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <Bot className="h-7 w-7 text-brand-700" aria-hidden="true" />
          <SectionHeading eyebrow="Interview plan" title="Structured follow-up questions" />
          <div className="mt-5 space-y-4">
            {applicantDetail.interviewPlan.map((question) => (
              <div
                key={question}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                <MessageSquareText
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                  aria-hidden="true"
                />
                {question}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <EnterpriseCallout
              title="Manual decision required"
              description="AI cannot reject or hire. Recruiter should record final reason and status change."
              tone="amber"
            />
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
