import type { Metadata } from "next";
import { CheckCircle2, Download, ShieldCheck } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { candidateConsentRecords, candidateDataExportItems } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Privacy Prototype",
  description:
    "Candidate privacy and AI consent center for CV analysis, job-fit previews, application summaries, and data export.",
  robots: { index: false, follow: false }
};

export default function CandidatePrivacyPage() {
  return (
    <PrototypeShell
      badge="Privacy center"
      icon={ShieldCheck}
      title="Candidate consent controls that make AI use understandable."
      description="A recruitment platform must show candidates exactly where AI is used, what data is processed, and how to export or revoke consent."
      primaryAction={{ href: "/candidate/cv", label: "Review CV feedback" }}
      secondaryAction={{ href: "/account/settings", label: "Account settings" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Consent ledger"
            title="AI and data permissions"
            description="Consent is scoped per workflow so candidates can understand coaching, matching, and recruiter summaries separately."
          />
          <div className="mt-6 space-y-4">
            {candidateConsentRecords.map((record) => (
              <article
                key={record.label}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-ink-900">{record.label}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{record.scope}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                      {record.retention}
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {record.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <Download className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Data rights" title="Export preview" />
            <div className="mt-5 space-y-3">
              {candidateDataExportItems.map((item) => (
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
            title="Enterprise privacy principle"
            description="Candidates should be able to review, export, refresh, or revoke consent without guessing where AI has touched their data."
            tone="blue"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
