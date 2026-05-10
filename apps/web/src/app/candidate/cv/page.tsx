import type { Metadata } from "next";
import { FileSearch, ShieldCheck, Sparkles, TriangleAlert } from "lucide-react";
import { ProgressBar, SectionHeading, SurfaceCard, TagList } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { ScoreRing } from "@/components/score-ring";
import { cvFeedback } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "AI CV Analysis Prototype",
  robots: { index: false, follow: false }
};

export default function CandidateCvPage() {
  return (
    <PrototypeShell
      badge="AI CV coach"
      icon={FileSearch}
      title="Consent-first CV analysis that helps candidates improve."
      description="This screen turns AI from a black box into a transparent coaching workflow: consent, structured results, evidence, limitations, and next steps."
      primaryAction={{ href: "/candidate/interview-coach", label: "Practice interview" }}
      secondaryAction={{ href: "/jobs", label: "Find matching jobs" }}
    >
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
        <SurfaceCard>
          <SectionHeading eyebrow="Upload state" title="CV readiness" />
          <div className="mt-6 flex justify-center">
            <ScoreRing score={cvFeedback.score} label="CV score" />
          </div>
          <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-emerald-900">AI consent confirmed</p>
                <p className="mt-1 text-sm leading-6 text-emerald-700">
                  Candidate understands CV text will be processed for feedback only.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <div className="flex gap-3">
              <TriangleAlert className="h-5 w-5 text-amber-700" aria-hidden="true" />
              <p className="text-sm leading-6 text-amber-800">
                Remove phone, address, ID numbers, and private links before sending to AI.
              </p>
            </div>
          </div>
        </SurfaceCard>

        <div className="grid gap-6">
          <SurfaceCard>
            <SectionHeading
              eyebrow="AI feedback"
              title="Structured improvement plan"
              description={`Confidence: ${cvFeedback.confidence}. Results are coaching guidance, not a hiring decision.`}
            />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <FeedbackColumn title="Strengths" items={cvFeedback.strengths} tone="emerald" />
              <FeedbackColumn title="Improvements" items={cvFeedback.improvements} tone="blue" />
              <FeedbackColumn title="Limitations" items={cvFeedback.limitations} tone="amber" />
            </div>
          </SurfaceCard>

          <SurfaceCard>
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
              <div>
                <SectionHeading
                  eyebrow="Missing signals"
                  title="What recruiters may still need to verify"
                  description="Make these points visible in projects before applying to high-fit roles."
                />
                <div className="mt-5">
                  <TagList tags={cvFeedback.missingSignals} tone="slate" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">Keyword coverage</p>
                <div className="mt-3 space-y-3">
                  {cvFeedback.suggestedKeywords.slice(0, 4).map((keyword, index) => (
                    <div key={keyword}>
                      <div className="flex justify-between text-xs font-medium text-ink-500">
                        <span>{keyword}</span>
                        <span>{88 - index * 9}%</span>
                      </div>
                      <div className="mt-2">
                        <ProgressBar value={88 - index * 9} tone={index > 2 ? "amber" : "blue"} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </PrototypeShell>
  );
}

function FeedbackColumn({
  title,
  items,
  tone
}: {
  title: string;
  items: string[];
  tone: "emerald" | "blue" | "amber";
}) {
  const toneClass = {
    emerald: "border-emerald-100 bg-emerald-50 text-emerald-900",
    blue: "border-blue-100 bg-blue-50 text-brand-950",
    amber: "border-amber-100 bg-amber-50 text-amber-900"
  }[tone];

  return (
    <div className={`rounded-2xl border p-5 ${toneClass}`}>
      <Sparkles className="h-5 w-5" aria-hidden="true" />
      <h3 className="mt-3 font-semibold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
