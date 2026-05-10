import type { Metadata } from "next";
import { Activity, Bot } from "lucide-react";
import { SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";

export const metadata: Metadata = {
  title: "AI Logs Prototype",
  robots: { index: false, follow: false }
};

const aiLogs = [
  { feature: "CV feedback", provider: "Mock provider", confidence: "Medium", status: "Success" },
  {
    feature: "Job match",
    provider: "Rule-based demo",
    confidence: "Medium",
    status: "Human review"
  },
  { feature: "Interview coach", provider: "Question bank", confidence: "High", status: "Success" },
  {
    feature: "JD suggestions",
    provider: "Mock provider",
    confidence: "Low",
    status: "Needs review"
  }
];

export default function AdminAiLogsPage() {
  return (
    <PrototypeShell
      badge="AI governance"
      icon={Activity}
      title="AI logs that make automation transparent and auditable."
      description="Enterprise AI features need provider, prompt version, confidence, limitations, consent, and fallback status visible to admins."
      primaryAction={{ href: "/admin/reports", label: "Open trust queue" }}
      secondaryAction={{ href: "/candidate/cv", label: "See CV feedback" }}
    >
      <SurfaceCard>
        <SectionHeading
          eyebrow="Audit log"
          title="AI feature monitoring"
          description="No AI output should be invisible. Admins need enough metadata to debug, explain, and defend the feature."
        />
        <div className="mt-6 grid gap-4">
          {aiLogs.map((log) => (
            <div
              key={log.feature}
              className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-4"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Feature
                </p>
                <p className="mt-2 font-semibold text-ink-900">{log.feature}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Provider
                </p>
                <p className="mt-2 text-sm text-ink-600">{log.provider}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Confidence
                </p>
                <p className="mt-2 text-sm text-ink-600">{log.confidence}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Status
                </p>
                <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                  <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                  {log.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </PrototypeShell>
  );
}
