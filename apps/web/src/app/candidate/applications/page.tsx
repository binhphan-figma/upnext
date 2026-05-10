import type { Metadata } from "next";
import { applications } from "@upnext/domain";
import { ClipboardList, Clock3 } from "lucide-react";
import { SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { StatusChip } from "@/components/status-chip";
import { applicationTimeline } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Application Tracker Prototype",
  robots: { index: false, follow: false }
};

export default function CandidateApplicationsPage() {
  return (
    <PrototypeShell
      badge="Application tracker"
      icon={ClipboardList}
      title="Transparent application progress for candidates."
      description="Candidates should never feel lost after applying. This screen explains status, next action, and recruiter review boundaries."
      primaryAction={{ href: "/candidate/interview-coach", label: "Prepare interview" }}
      secondaryAction={{ href: "/candidate/cv", label: "Improve CV" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Timeline"
            title="Application status overview"
            description="Status labels are human-readable and paired with candidate action guidance."
          />
          <div className="mt-6 space-y-4">
            {applicationTimeline.map((item) => (
              <div
                key={`${item.job}-${item.date}`}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-semibold text-ink-900">{item.job}</p>
                    <p className="mt-1 text-sm text-ink-500">{item.company}</p>
                  </div>
                  <StatusChip status={item.status} />
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-ink-500">
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                  {item.date} · {item.nextAction}
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading eyebrow="Candidate rights" title="What the platform must make clear" />
          <div className="mt-5 space-y-4">
            {[
              "AI score never changes status automatically.",
              "Recruiters must manually review evidence before shortlisting.",
              "Candidates can improve CV and apply to better-fit roles.",
              "Rejected applications should still provide respectful closure."
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-sm text-slate-300">Mock application records</p>
            <p className="mt-2 text-3xl font-semibold">{applications.length}</p>
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
