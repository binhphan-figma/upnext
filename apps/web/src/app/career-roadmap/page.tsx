import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";

export const metadata: Metadata = {
  title: "Junior IT Career Roadmap",
  description:
    "A practical UpNext roadmap for students preparing for junior developer roles, CV improvement, job applications, and interviews.",
  alternates: {
    canonical: "/career-roadmap"
  }
};

const roadmap = [
  {
    phase: "Foundation",
    focus: "HTML, CSS, JavaScript, Git, responsive UI",
    output: "Portfolio landing page"
  },
  {
    phase: "Role stack",
    focus: "React, TypeScript, REST API, basic testing",
    output: "Two role-relevant projects"
  },
  {
    phase: "Job readiness",
    focus: "CV evidence, GitHub cleanup, interview practice",
    output: "Apply to 5 high-fit jobs"
  },
  {
    phase: "Interview",
    focus: "Project walkthrough, debugging, communication",
    output: "Structured answers and learning plan"
  }
];

export default function CareerRoadmapPage() {
  return (
    <PrototypeShell
      badge="Career roadmap"
      icon={GraduationCap}
      title="A practical roadmap for students becoming junior developers."
      description="This public page supports SEO/GEO and gives candidates a useful path from basic web development to job readiness."
      primaryAction={{ href: "/candidate/cv", label: "Check CV readiness" }}
      secondaryAction={{ href: "/blog", label: "Read guides" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Student roadmap"
          title="From learning to applying"
          description="Designed for FPT Polytechnic-style student teams and junior candidates."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-4">
          {roadmap.map((item, index) => (
            <div key={item.phase} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Step {index + 1}
              </span>
              <h2 className="mt-4 font-semibold text-ink-900">{item.phase}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-500">{item.focus}</p>
              <div className="mt-4">
                <TagList tags={[item.output]} tone="emerald" />
              </div>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
