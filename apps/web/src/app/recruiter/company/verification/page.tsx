import type { Metadata } from "next";
import { Building2, CheckCircle2, FileCheck2 } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { companyVerificationDocuments, companyVerificationSteps } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Company Verification Prototype",
  description:
    "Recruiter company verification workflow for legal identity, hiring policy, recruiter ownership, and admin review.",
  robots: { index: false, follow: false }
};

export default function CompanyVerificationPage() {
  return (
    <PrototypeShell
      badge="Company verification"
      icon={Building2}
      title="A verification flow that makes employer trust visible before candidates apply."
      description="Enterprise recruitment platforms need company proof, hiring policy clarity, and admin review before job posts feel trustworthy."
      primaryAction={{ href: "/recruiter/company", label: "Company profile" }}
      secondaryAction={{ href: "/recruiter/team", label: "Team access" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Verification checklist"
            title="NovaTech Labs verification progress"
            description="The recruiter can see which trust signals are complete and what admins still need to review."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {companyVerificationSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {step.status}
                  </span>
                </div>
                <h2 className="mt-4 font-semibold text-ink-900">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{step.detail}</p>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <FileCheck2 className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Documents" title="Required evidence" />
            <div className="mt-5 space-y-3">
              {companyVerificationDocuments.map((item) => (
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
            title="Candidate trust principle"
            description="Verification should make compensation, recruiter identity, and privacy expectations clearer before candidates share CV data."
            tone="emerald"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
