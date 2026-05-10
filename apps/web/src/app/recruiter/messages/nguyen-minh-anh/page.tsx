import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircleMore, SendHorizonal } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { recruiterMessages, recruiterNoteChecklist } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Recruiter Notes Prototype",
  description:
    "Recruiter internal messaging and note-taking prototype for candidate review collaboration.",
  robots: { index: false, follow: false }
};

export default function RecruiterMessagesPage() {
  return (
    <PrototypeShell
      badge="Recruiter collaboration"
      icon={MessageCircleMore}
      title="Internal notes that keep hiring decisions evidence-based."
      description="Recruiter collaboration needs a clear boundary between AI assistance, team notes, and candidate-facing communication."
      primaryAction={{ href: "/recruiter/applicants/nguyen-minh-anh", label: "Open applicant" }}
      secondaryAction={{
        href: "/recruiter/interviews/nguyen-minh-anh",
        label: "Schedule interview"
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Thread"
            title="Nguyen Minh Anh review notes"
            description="Team members can align on evidence, risks, interview ownership, and final decision reasons."
          />
          <div className="mt-6 space-y-4">
            {recruiterMessages.map((message) => (
              <article
                key={`${message.author}-${message.time}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="font-semibold text-ink-900">{message.author}</h2>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {message.role}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-500 shadow-sm">
                    {message.time}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink-600">{message.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-brand-200 bg-blue-50 p-5">
            <div className="flex gap-3">
              <SendHorizonal className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-brand-950">Draft note preview</p>
                <p className="mt-2 text-sm leading-6 text-brand-900">
                  “Schedule interview with React/API focus. Keep testing gap as a question, not a
                  rejection reason.”
                </p>
              </div>
            </div>
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Governance" title="Safe note checklist" />
            <div className="mt-5 space-y-3">
              {recruiterNoteChecklist.map((item) => (
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
          <EnterpriseCallout
            title="Human-in-the-loop record"
            description="Notes should help humans make accountable decisions. AI suggestions stay visibly labeled and never become hidden final reasons."
            tone="amber"
          />
          <Link
            href="/recruiter/pipeline"
            className="inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-700"
          >
            Return to pipeline
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
