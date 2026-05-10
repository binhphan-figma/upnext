import type { Metadata } from "next";
import { Palette } from "lucide-react";
import {
  EnterpriseCallout,
  ProgressBar,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { StatusChip } from "@/components/status-chip";

export const metadata: Metadata = {
  title: "Enterprise Design System Prototype",
  robots: { index: false, follow: false }
};

const colors = [
  { name: "Brand blue", value: "#2563eb", className: "bg-brand-600" },
  { name: "Ink", value: "#0f172a", className: "bg-ink-900" },
  { name: "Success", value: "#10b981", className: "bg-emerald-500" },
  { name: "Warning", value: "#f59e0b", className: "bg-amber-500" }
];

export default function DesignSystemPage() {
  return (
    <PrototypeShell
      badge="Design system"
      icon={Palette}
      title="Reusable enterprise UX patterns for UpNext."
      description="This page documents the visual language used across the prototype: status states, AI transparency, metrics, badges, and candidate/recruiter/admin cards."
      primaryAction={{ href: "/prototype", label: "Back to prototype" }}
      secondaryAction={{ href: "/candidate/cv", label: "See in product" }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SurfaceCard>
          <SectionHeading eyebrow="Foundation" title="Color and state tokens" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {colors.map((color) => (
              <div key={color.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className={`h-16 rounded-2xl ${color.className}`} />
                <p className="mt-3 font-semibold text-ink-900">{color.name}</p>
                <p className="mt-1 text-sm text-ink-500">{color.value}</p>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Components"
            title="Reusable demo states"
            description="These patterns make the prototype look cohesive and enterprise-ready."
          />
          <div className="mt-6 space-y-5">
            <EnterpriseCallout
              title="AI output requires human review"
              description="Scores are paired with evidence, missing signals, confidence, and limitations."
              tone="blue"
            />
            <EnterpriseCallout
              title="Consent and privacy first"
              description="Candidate data should be minimized before AI processing."
              tone="emerald"
            />
            <EnterpriseCallout
              title="Operational risk needs admin visibility"
              description="Reports, AI fallback logs, and verification queues should be prioritized."
              tone="amber"
            />
          </div>
        </SurfaceCard>
      </div>

      <SurfaceCard className="mt-6">
        <SectionHeading eyebrow="UI inventory" title="Chips, progress, and status" />
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-semibold text-ink-900">Tags</p>
            <TagList tags={["React", "TypeScript", "AI consent", "Human review"]} />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-ink-900">Progress</p>
            <ProgressBar value={78} tone="blue" />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-ink-900">Status</p>
            <div className="flex flex-wrap gap-2">
              <StatusChip status="submitted" />
              <StatusChip status="shortlisted" />
              <StatusChip status="interview_invited" />
            </div>
          </div>
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
