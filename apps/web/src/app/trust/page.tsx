import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { trustCenterSections } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Trust Center",
  description: "UpNext trust, privacy, security, fairness, and AI governance prototype.",
  robots: { index: false, follow: false }
};

export default function TrustCenterPage() {
  return (
    <PrototypeShell
      badge="Trust center"
      icon={ShieldCheck}
      title="Trust, privacy, and safety principles for an AI recruitment platform."
      description="Recruitment products handle personal data and high-impact workflows. UpNext should show reviewers that privacy, fairness, and human control are product requirements, not afterthoughts."
      primaryAction={{ href: "/ai-transparency", label: "AI transparency" }}
      secondaryAction={{ href: "/account/settings", label: "Consent settings" }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {trustCenterSections.map((section) => (
          <SurfaceCard key={section.title}>
            <SectionHeading eyebrow="Trust pillar" title={section.title} />
            <div className="mt-6 space-y-3">
              {section.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 p-4 text-sm font-medium leading-6 text-ink-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <EnterpriseCallout
          title="Candidate promise"
          description="CV feedback is for improvement, not automatic rejection."
          tone="emerald"
        />
        <EnterpriseCallout
          title="Recruiter promise"
          description="AI summaries are decision support. Recruiters must review evidence manually."
          tone="blue"
        />
        <EnterpriseCallout
          title="Admin promise"
          description="AI logs, reports, and taxonomy governance help keep platform quality auditable."
          tone="amber"
        />
      </div>
    </PrototypeShell>
  );
}
