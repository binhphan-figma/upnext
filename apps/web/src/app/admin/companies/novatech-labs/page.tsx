import type { Metadata } from "next";
import { Building2, CheckCircle2, ShieldAlert } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { adminCompanyReview } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Admin Company Review Prototype",
  description:
    "Admin company verification review UI with trust checks, risk summary, and moderation actions.",
  robots: { index: false, follow: false }
};

export default function AdminCompanyReviewPage() {
  return (
    <PrototypeShell
      badge="Company review"
      icon={Building2}
      title={`${adminCompanyReview.company} verification review`}
      description={adminCompanyReview.summary}
      primaryAction={{ href: "/admin/reports", label: "Trust queues" }}
      secondaryAction={{ href: "/recruiter/company/verification", label: "Recruiter view" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow={`${adminCompanyReview.status} · ${adminCompanyReview.risk} risk`}
            title="Trust checks"
            description="Admins need a compact review screen that separates passed checks from items requiring human judgment."
          />
          <div className="mt-6 space-y-4">
            {adminCompanyReview.checks.map((check) => (
              <div
                key={check.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    <p className="font-semibold text-ink-900">{check.label}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {check.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <ShieldAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
            <p className="mt-3 font-semibold text-amber-950">Admin recommendation</p>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              Request one employer edit for compensation clarity, then approve verification if the
              updated job post matches the company hiring policy.
            </p>
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Actions" title="Review outcomes" />
            <div className="mt-5 space-y-3">
              {adminCompanyReview.actions.map((action) => (
                <div
                  key={action}
                  className="rounded-2xl border border-slate-200 p-4 text-sm font-medium text-ink-700"
                >
                  {action}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Verification audit"
            description="Admin company approval should store evidence reviewed, requested changes, final decision, and reviewer identity."
            tone="blue"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
