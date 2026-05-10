import type { Metadata } from "next";
import { CheckCircle2, FileWarning, ShieldAlert } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { adminTrustActions, adminTrustCase, adminTrustTimeline } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Admin Trust Case Prototype",
  description:
    "Admin trust and safety case detail UI for reported job review, evidence, timeline, and moderation actions.",
  robots: { index: false, follow: false }
};

export default function AdminTrustCasePage() {
  return (
    <PrototypeShell
      badge="Trust case detail"
      icon={FileWarning}
      title={adminTrustCase.title}
      description={adminTrustCase.summary}
      primaryAction={{ href: "/admin/reports", label: "Back to reports" }}
      secondaryAction={{ href: "/admin/ai-logs", label: "Audit AI classification" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow={`${adminTrustCase.id} · ${adminTrustCase.severity}`}
            title={adminTrustCase.target}
            description={`Status: ${adminTrustCase.status}. Source: ${adminTrustCase.reporter}.`}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {adminTrustCase.evidence.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <ShieldAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
            <p className="mt-3 font-semibold text-amber-950">Recommended moderation stance</p>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              Request clarification from the employer before the job remains promoted in public
              search. The case is not an employer ban because current evidence indicates a content
              clarity issue, not fraud.
            </p>
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Timeline" title="Case history" />
            <div className="mt-5 space-y-3">
              {adminTrustTimeline.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <SectionHeading eyebrow="Actions" title="Admin decision options" />
            <div className="mt-5 space-y-3">
              {adminTrustActions.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 p-4 text-sm font-medium text-ink-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Decision logging"
            description="Every admin action should store actor, reason, timestamp, evidence reviewed, and whether AI classification was accepted or overridden."
            tone="amber"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
