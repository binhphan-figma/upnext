import type { Metadata } from "next";
import { Tags } from "lucide-react";
import { ProgressBar, SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "Skill Taxonomy Prototype",
  robots: { index: false, follow: false }
};

const skillGroups = [
  { canonical: "JavaScript", aliases: ["JS", "ECMAScript", "Vanilla JS"], quality: 92 },
  { canonical: "React", aliases: ["React.js", "ReactJS", "Frontend React"], quality: 88 },
  { canonical: "Node.js", aliases: ["Node", "Express backend", "Server JS"], quality: 81 },
  { canonical: "PostgreSQL", aliases: ["Postgres", "SQL database"], quality: 76 }
];

export default function AdminSkillsPage() {
  return (
    <PrototypeShell
      badge="Skill taxonomy"
      icon={Tags}
      title="Normalized skills make matching more trustworthy."
      description="Skill taxonomy is a hidden enterprise feature: it improves search, filters, CV parsing, JD parsing, and matching explainability."
      primaryAction={{ href: "/admin/reports", label: "Back to reports" }}
      secondaryAction={{ href: "/jobs", label: "See job filters" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Taxonomy quality"
          title="Canonical skill mapping"
          description="Aliases should map to a canonical skill before matching candidates to jobs."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.canonical}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex justify-between gap-4">
                <h2 className="font-semibold text-ink-900">{group.canonical}</h2>
                <span className="text-sm font-semibold text-brand-700">{group.quality}% clean</span>
              </div>
              <div className="mt-3">
                <ProgressBar value={group.quality} tone={group.quality > 85 ? "emerald" : "blue"} />
              </div>
              <div className="mt-4">
                <TagList tags={group.aliases} tone="slate" />
              </div>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
