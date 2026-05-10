import type { Metadata } from "next";
import { Building2, CheckCircle2, Globe2, MapPin } from "lucide-react";
import {
  EnterpriseMetric,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { companies, recruiterMetrics } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Recruiter Company Profile Prototype",
  robots: { index: false, follow: false }
};

export default function RecruiterCompanyPage() {
  const [company] = companies;

  if (!company) {
    return null;
  }

  return (
    <PrototypeShell
      badge="Company workspace"
      icon={Building2}
      title="A recruiter profile that builds trust before candidates apply."
      description="Enterprise hiring UX needs company identity, verification, culture, stack, benefits, and job performance in one clear place."
      primaryAction={{ href: "/recruiter/company/verification", label: "Verify company" }}
      secondaryAction={{ href: "/recruiter/applicants", label: "Review applicants" }}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {recruiterMetrics.map((metric) => (
          <EnterpriseMetric key={metric.label} {...metric} icon={Building2} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SurfaceCard>
          <div className="flex items-start gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-slate-950 text-2xl font-bold text-white">
              N
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">{company.name}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">{company.type}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {company.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe2 className="h-4 w-4" aria-hidden="true" />
                  novatech.example
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <CheckCircle2 className="h-5 w-5 text-emerald-700" aria-hidden="true" />
            <p className="mt-3 font-semibold text-emerald-900">Verification ready</p>
            <p className="mt-2 text-sm leading-6 text-emerald-700">
              Company profile includes website, tax/business proof placeholder, recruiter ownership,
              and moderation status for admin review.
            </p>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Employer brand"
            title="What candidates should understand"
            description="Candidates trust companies that explain culture and hiring expectations clearly."
          />
          <div className="mt-5 space-y-4">
            {[
              company.culture,
              "Mentors review intern pull requests weekly.",
              "Hiring rubric prioritizes project evidence, communication, and growth mindset."
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-5">
            <TagList tags={company.stack} />
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
