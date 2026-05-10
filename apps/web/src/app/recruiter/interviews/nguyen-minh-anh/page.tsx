import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, MessageSquareText } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  interviewRubricPreview,
  interviewSchedulingFlow,
  interviewSlots
} from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Interview Scheduling Prototype",
  description:
    "Recruiter interview scheduling UI with candidate-friendly slots, structured rubric, and transparent preparation notes.",
  robots: { index: false, follow: false }
};

export default function RecruiterInterviewSchedulingPage() {
  return (
    <PrototypeShell
      badge="Interview scheduling"
      icon={CalendarClock}
      title="Schedule an interview with structure, fairness, and candidate clarity."
      description="Interview scheduling should include agenda, rubric, suggested questions, and transparent candidate preparation notes."
      primaryAction={{ href: "/recruiter/applicants/nguyen-minh-anh", label: "Back to applicant" }}
      secondaryAction={{ href: "/recruiter/pipeline", label: "Pipeline board" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Nguyen Minh Anh · Frontend Intern — React"
            title="Interview setup workflow"
            description="The recruiter reviews each scheduling step before sending a candidate-friendly invite."
          />
          <div className="mt-6 space-y-4">
            {interviewSchedulingFlow.map((item, index) => (
              <div
                key={item.step}
                className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[44px_1fr_auto]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-semibold text-ink-900">{item.step}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{item.detail}</p>
                </div>
                <span className="h-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                  {item.owner}
                </span>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Slots" title="Candidate-friendly options" />
            <div className="mt-5 space-y-3">
              {interviewSlots.map((slot) => (
                <div key={slot.time} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-ink-900">{slot.time}</p>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {slot.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{slot.label}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <MessageSquareText className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Rubric preview" title="What interviewer will assess" />
            <div className="mt-5 space-y-3">
              {interviewRubricPreview.map((item) => (
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
            title="Candidate clarity"
            description="The invite should show what will be evaluated and how to prepare, so the process feels fair and predictable."
            tone="emerald"
          />
          <Link
            href="/notifications"
            className="inline-flex w-full items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-brand-700"
          >
            Preview invite notification
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
