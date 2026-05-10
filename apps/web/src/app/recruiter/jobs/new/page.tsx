import type { Metadata } from "next";
import { Bot, ClipboardCheck, FilePenLine } from "lucide-react";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "Job Editor Prototype",
  robots: { index: false, follow: false }
};

const formFields = [
  "Job title",
  "Level",
  "Work mode",
  "Salary range",
  "Required skills",
  "Responsibilities",
  "Requirements",
  "Benefits"
];

export default function JobEditorPage() {
  return (
    <PrototypeShell
      badge="JD builder"
      icon={FilePenLine}
      title="A job editor that guides recruiters toward fair, skills-based posts."
      description="The prototype emphasizes structured job requirements, clear must-have skills, AI writing assistance, and review before publishing."
      primaryAction={{ href: "/recruiter/jobs", label: "Back to jobs" }}
      secondaryAction={{ href: "/recruiter/company", label: "Company profile" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Form structure"
            title="Enterprise job posting form"
            description="Fields are grouped to reduce recruiter cognitive load and improve data quality."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {formFields.map((field) => (
              <label key={field} className="block">
                <span className="text-sm font-semibold text-ink-900">{field}</span>
                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-500">
                  {field === "Required skills"
                    ? "React, TypeScript, Git"
                    : `Enter ${field.toLowerCase()}`}
                </div>
              </label>
            ))}
          </div>
        </SurfaceCard>

        <div className="grid gap-6">
          <SurfaceCard>
            <Bot className="h-6 w-6 text-brand-700" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-ink-900">AI JD suggestions</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-ink-600">
              <p>
                • Split must-have and nice-to-have skills to avoid discouraging junior candidates.
              </p>
              <p>• Add mentorship details and realistic internship expectations.</p>
              <p>• Avoid vague phrases like “rockstar developer” or “work under pressure”.</p>
            </div>
          </SurfaceCard>
          <SurfaceCard>
            <ClipboardCheck className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-ink-900">Publish checklist</h2>
            <div className="mt-4">
              <TagList
                tags={[
                  "Salary visible",
                  "Skill taxonomy mapped",
                  "No bias language",
                  "Deadline set"
                ]}
                tone="emerald"
              />
            </div>
          </SurfaceCard>
        </div>
      </div>
    </PrototypeShell>
  );
}
