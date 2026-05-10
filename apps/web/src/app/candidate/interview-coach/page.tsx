import type { Metadata } from "next";
import { Bot, MessageSquareText } from "lucide-react";
import { ProgressBar, SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { interviewCoachRubric } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "AI Interview Coach Prototype",
  robots: { index: false, follow: false }
};

export default function InterviewCoachPage() {
  return (
    <PrototypeShell
      badge="Interview coach"
      icon={Bot}
      title="A text-based coach that trains candidates with rubric feedback."
      description="The MVP should start with structured text practice, not complex video/voice interviews. This keeps scope realistic and defense-ready."
      primaryAction={{ href: "/candidate/applications", label: "Back to applications" }}
      secondaryAction={{ href: "/candidate/cv", label: "Use CV feedback" }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Practice setup"
            title="Frontend Intern · React · Behavioral + technical"
            description="Question bank selects a role-relevant prompt, then AI can generate follow-up questions."
          />
          <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-white">
            <MessageSquareText className="h-6 w-6 text-blue-200" aria-hidden="true" />
            <p className="mt-4 text-lg font-semibold">
              “Explain a React project you built. What problem did it solve, and how did you handle
              API loading and error states?”
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Candidate answer should be evaluated for correctness, clarity, depth, structure,
              communication, and relevance.
            </p>
          </div>
          <div className="mt-5">
            <TagList tags={["React", "REST API", "Error states", "Project evidence"]} />
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Rubric feedback"
            title="Scores by criteria, not one vague grade"
            description="Enterprise UX should explain exactly how the answer can improve."
          />
          <div className="mt-6 space-y-5">
            {interviewCoachRubric.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink-900">{item.label}</p>
                    <p className="mt-1 text-sm text-ink-500">{item.note}</p>
                  </div>
                  <span className="font-semibold text-brand-700">{item.score}%</span>
                </div>
                <div className="mt-3">
                  <ProgressBar value={item.score} tone={item.score >= 80 ? "emerald" : "blue"} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="font-semibold text-emerald-900">Improved answer direction</p>
            <p className="mt-2 text-sm leading-6 text-emerald-700">
              Use a STAR structure, mention the concrete project goal, describe API loading/error
              decisions, and close with what you learned.
            </p>
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
