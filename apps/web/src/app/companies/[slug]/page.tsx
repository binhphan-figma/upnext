import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, MapPin, UsersRound } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { companies } from "@/lib/prototype-data";

type CompanyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    return {};
  }

  return {
    title: `${company.name} Company Profile`,
    description: `${company.name} is hiring IT talent in ${company.location}. Explore culture, tech stack, and open roles on UpNext.`,
    alternates: {
      canonical: `/companies/${company.slug}`
    }
  };
}

export default async function CompanyDetailPage({ params }: CompanyPageProps) {
  const { slug } = await params;
  const company = companies.find((item) => item.slug === slug);

  if (!company) {
    notFound();
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    location: company.location,
    description: company.culture
  };

  return (
    <PrototypeShell
      badge="Employer profile"
      icon={Building2}
      title={`${company.name} hiring profile`}
      description={company.culture}
      primaryAction={{ href: "/jobs", label: "View open jobs" }}
      secondaryAction={{ href: "/companies", label: "All companies" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow={company.type}
            title="Why candidates may choose this company"
            description="A polished company profile helps students evaluate fit before applying."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <MapPin className="h-5 w-5 text-brand-700" aria-hidden="true" />
              <p className="mt-3 font-semibold text-ink-900">{company.location}</p>
              <p className="mt-1 text-sm text-ink-500">Hiring location</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <UsersRound className="h-5 w-5 text-brand-700" aria-hidden="true" />
              <p className="mt-3 font-semibold text-ink-900">{company.openRoles} roles</p>
              <p className="mt-1 text-sm text-ink-500">Open opportunities</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <Building2 className="h-5 w-5 text-brand-700" aria-hidden="true" />
              <p className="mt-3 font-semibold text-ink-900">Verified</p>
              <p className="mt-1 text-sm text-ink-500">Profile status</p>
            </div>
          </div>
          <div className="mt-6">
            <TagList tags={company.stack} />
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading eyebrow="Interview process" title="What to expect" />
          <div className="mt-5 space-y-4">
            {[
              "CV screen",
              "Technical interview",
              "Project discussion",
              "Final culture conversation"
            ].map((step, index) => (
              <div key={step} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  Step {index + 1}
                </p>
                <p className="mt-2 font-semibold text-ink-900">{step}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
