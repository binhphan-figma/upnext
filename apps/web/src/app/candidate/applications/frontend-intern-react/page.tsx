import type { Metadata } from "next";
import { ClipboardList, LockKeyhole } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { StatusChip } from "@/components/status-chip";
import { applicationDetail } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Application Detail Prototype",
  robots: { index: false, follow: false }
};

export default function ApplicationDetailPage() {
  return (
    <PrototypeShell
      badge="Application detail"
      icon={ClipboardList}
      title={`${applicationDetail.title} application`}
      description="A detailed application view helps candidates understand status, CV snapshot, recruiter notes, and what to prepare next."
      primaryAction={{ href: "/candidate/interview-coach", label: "Practice interview" }}
      secondaryAction={{ href: "/candidate/applications", label: "All applications" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-semibold text-brand-700">{applicationDetail.company}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-900">
                {applicationDetail.title}
              </h2>
              <p className="mt-2 text-sm text-ink-500">Submitted {applicationDetail.submittedAt}</p>
            </div>
            <StatusChip status={applicationDetail.status} />
          </div>
          <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <LockKeyhole className="h-5 w-5 text-brand-700" aria-hidden="true" />
            <p className="mt-3 font-semibold text-brand-950">CV snapshot locked</p>
            <p className="mt-2 text-sm leading-6 text-brand-700">{applicationDetail.cvSnapshot}</p>
          </div>
          <div className="mt-6">
            <SectionHeading eyebrow="Timeline" title="Transparent status history" />
            <div className="mt-5 space-y-4">
              {applicationDetail.timeline.map((event, index) => (
                <div key={event} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-ink-600">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading eyebrow="Recruiter notes" title="What to prepare" />
          <div className="mt-5 space-y-4">
            {applicationDetail.recruiterNotes.map((note) => (
              <EnterpriseCallout key={note} title="Review signal" description={note} tone="slate" />
            ))}
          </div>
          <div className="mt-5">
            <TagList
              tags={["Human review", "AI assisted", "Candidate visible", "Snapshot stable"]}
            />
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
