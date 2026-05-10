import type { Metadata } from "next";
import { candidateSnapshot } from "@upnext/domain";
import { Github, Linkedin, MapPin, UserRound } from "lucide-react";
import {
  EnterpriseMetric,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { candidateMetrics } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Candidate Profile Prototype",
  robots: { index: false, follow: false }
};

export default function CandidateProfilePage() {
  return (
    <PrototypeShell
      badge="Candidate profile"
      icon={UserRound}
      title="A profile designed around skills, evidence, and job readiness."
      description="The profile is not just personal information. It helps candidates communicate role fit through skills, projects, preferences, and proof."
      primaryAction={{ href: "/candidate/cv", label: "Analyze CV" }}
      secondaryAction={{ href: "/candidate/applications", label: "Track applications" }}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {candidateMetrics.map((metric) => (
          <EnterpriseMetric key={metric.label} {...metric} icon={UserRound} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <SurfaceCard>
          <div className="flex items-start gap-5">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-brand-600 text-xl font-bold text-white">
              MA
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
                {candidateSnapshot.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">{candidateSnapshot.headline}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-ink-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {candidateSnapshot.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" aria-hidden="true" />
                  github.com/minhanh-dev
                </span>
                <span className="inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  linkedin.com/in/minhanh
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <SectionHeading
              title="Skill evidence"
              description="Recruiters need proof, not only keywords."
            />
            <div className="mt-4">
              <TagList tags={candidateSnapshot.skills} />
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Projects"
            title="Portfolio evidence"
            description="Project cards should connect skills to concrete outcomes."
          />
          <div className="mt-5 space-y-4">
            {candidateSnapshot.projects.map((project, index) => (
              <div key={project} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-ink-900">{project}</h3>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Evidence {index + 1}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-ink-500">
                  Shows React component thinking, API integration, responsive UI, and presentation
                  readiness for junior IT recruiters.
                </p>
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
