import type { Metadata } from "next";
import { BriefcaseBusiness, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { PublicLanding } from "@/components/public-landing";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { employerLandingFeatures } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "For Employers",
  description:
    "UpNext helps recruiters review junior IT candidates with skills-based workflows, explainable AI, and human decision control.",
  alternates: { canonical: "/for-employers" }
};

export default function ForEmployersPage() {
  return (
    <>
      <PublicLanding
        badge="For recruiters and employers"
        icon={BriefcaseBusiness}
        title="Review junior IT applicants faster without losing human control."
        description="UpNext gives recruiters structured job posting, applicant review, AI evidence summaries, risk signals, and interview planning in one workflow."
        primaryAction={{ href: "/recruiter/applicants", label: "View applicant review" }}
        secondaryAction={{ href: "/recruiter/jobs/new", label: "Open JD builder" }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
          Recruiter copilot
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Applicant fit summary</h2>
        <div className="mt-6 rounded-2xl bg-white/10 p-5">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Candidate-job fit</span>
            <span className="text-3xl font-semibold">84%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/10">
            <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-blue-400 to-emerald-300" />
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["React evidence", "REST API project", "Testing gap", "Manual review"].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/10 p-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              <span className="text-sm text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </PublicLanding>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <SurfaceCard>
              <SectionHeading
                eyebrow="Employer value"
                title="A workflow for fairer, clearer junior hiring"
                description="The recruiter product should help humans make better decisions, not replace judgment."
              />
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {employerLandingFeatures.map((feature) => (
                  <article key={feature.title} className="rounded-2xl bg-slate-50 p-5">
                    <h2 className="font-semibold text-ink-900">{feature.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-ink-500">{feature.detail}</p>
                  </article>
                ))}
              </div>
              <div className="mt-6">
                <TagList
                  tags={["Applicant pipeline", "AI evidence", "Interview plan", "Audit trail"]}
                />
              </div>
            </SurfaceCard>
            <SurfaceCard>
              <ShieldCheck className="h-7 w-7 text-emerald-700" aria-hidden="true" />
              <SectionHeading eyebrow="Safety" title="No automatic rejection" />
              <div className="mt-5">
                <EnterpriseCallout
                  title="Human-in-the-loop"
                  description="Every shortlist, rejection, interview invite, or hire decision should remain a manual recruiter action."
                  tone="amber"
                />
              </div>
              <Link
                href="/ai-transparency"
                className="mt-6 inline-flex rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Read AI transparency
              </Link>
            </SurfaceCard>
          </div>
        </div>
      </section>
    </>
  );
}
