import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin, SearchCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { companies } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "IT Companies Hiring Junior Developers",
  description:
    "Explore UpNext company profiles, tech stacks, hiring culture, and open roles for junior and mid-level IT candidates.",
  alternates: {
    canonical: "/companies"
  },
  openGraph: {
    title: "IT Companies Hiring Junior Developers | UpNext",
    description:
      "Company discovery prototype with employer profiles, hiring culture, stacks, and open IT roles."
  }
};

export default function CompaniesPage() {
  return (
    <PrototypeShell
      badge="Company discovery"
      icon={Building2}
      title="Company pages that help candidates choose better-fit employers."
      description="Public company pages should build trust, support SEO, and help candidates compare culture, stack, mentorship, and active roles."
      primaryAction={{ href: "/jobs", label: "Browse jobs" }}
      secondaryAction={{ href: "/blog", label: "Read career guides" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Hiring companies"
          title="Employer cards optimized for trust and discovery"
          description="Each company should eventually have its own SEO page with jobs, benefits, tech stack, and interview process."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {companies.map((company) => (
            <Link
              key={company.slug}
              href={`/companies/${company.slug}`}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 font-bold text-white">
                  {company.name[0]}
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  {company.openRoles} roles
                </span>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-ink-900">{company.name}</h2>
              <p className="mt-1 text-sm text-ink-500">{company.type}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-ink-500">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {company.location}
              </p>
              <p className="mt-4 text-sm leading-6 text-ink-600">{company.culture}</p>
              <div className="mt-5">
                <TagList tags={company.stack.slice(0, 4)} />
              </div>
            </Link>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard className="mt-6">
        <SearchCheck className="h-7 w-7 text-brand-700" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-ink-900">SEO content requirements</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500">
          Company pages should include structured organization data, active jobs, location,
          benefits, interview process, and internal links to related career guides.
        </p>
      </SurfaceCard>
    </PrototypeShell>
  );
}
