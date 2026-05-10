import type { Metadata } from "next";
import { Bot, FileWarning, ShieldCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";
import { aiTransparencyPrinciples } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "AI Transparency",
  description: "How UpNext uses AI safely for CV feedback, matching, and interview coaching.",
  robots: { index: false, follow: false }
};

export default function AiTransparencyPage() {
  return (
    <PrototypeShell
      badge="AI transparency"
      icon={Bot}
      title="Explainable AI that supports people instead of replacing them."
      description="This page makes the ethical AI positioning explicit for graduation defense: UpNext uses AI for coaching and decision support, not automatic hiring decisions."
      primaryAction={{ href: "/candidate/cv", label: "Candidate AI flow" }}
      secondaryAction={{
        href: "/recruiter/applicants/nguyen-minh-anh",
        label: "Recruiter AI flow"
      }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="AI policy"
            title="Principles shown in the product UI"
            description="Each principle should be visible in screens, data model, prompts, and presentation talking points."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {aiTransparencyPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <ShieldCheck className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                <h2 className="mt-4 font-semibold text-ink-900">{principle.title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-500">{principle.detail}</p>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard className="bg-slate-950 text-white">
            <FileWarning className="h-7 w-7 text-amber-200" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">What AI must not do</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {[
                "Automatically reject candidates",
                "Infer gender, age, ethnicity, appearance, or emotion",
                "Expose private CV data to unauthorized recruiters",
                "Hide why a score or suggestion was produced"
              ].map((item) => (
                <p key={item} className="rounded-2xl bg-white/10 p-4">
                  {item}
                </p>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Defense-ready sentence"
            description="AI in UpNext is positioned as an assistant layer: it explains, recommends, and coaches, while humans remain responsible for decisions."
            tone="blue"
          />
        </div>
      </div>

      <SurfaceCard className="mt-6">
        <SectionHeading eyebrow="Implementation checklist" title="AI output contract" />
        <div className="mt-5">
          <TagList
            tags={[
              "overallMatchScore",
              "matchedSkills",
              "missingSkills",
              "evidence",
              "confidence",
              "limitations",
              "promptVersion",
              "humanReviewRequired"
            ]}
          />
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
