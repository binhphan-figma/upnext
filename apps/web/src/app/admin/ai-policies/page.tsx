import type { Metadata } from "next";
import { Bot, CheckCircle2, SlidersHorizontal } from "lucide-react";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { adminAiPolicies, adminAiPolicyThresholds } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Admin AI Policies Prototype",
  description:
    "Admin AI governance policy settings for human final decision rules, consent requirements, escalation thresholds, and audit logging.",
  robots: { index: false, follow: false }
};

export default function AdminAiPoliciesPage() {
  return (
    <PrototypeShell
      badge="AI policy settings"
      icon={SlidersHorizontal}
      title="AI governance controls that prove humans stay accountable."
      description="Admins need policy-level controls for consent, confidence thresholds, escalation, prompt logging, and decision boundaries."
      primaryAction={{ href: "/admin/ai-logs", label: "View AI logs" }}
      secondaryAction={{ href: "/ai-transparency", label: "Public transparency" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Policies"
            title="Platform AI guardrails"
            description="These settings describe the rules that every AI-assisted recruitment workflow must follow."
          />
          <div className="mt-6 space-y-4">
            {adminAiPolicies.map((policy) => (
              <article
                key={policy.policy}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-ink-900">{policy.policy}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{policy.description}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {policy.setting}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <Bot className="h-7 w-7 text-brand-700" aria-hidden="true" />
            <SectionHeading eyebrow="Thresholds" title="Escalation controls" />
            <div className="mt-5 space-y-3">
              {adminAiPolicyThresholds.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <div className="flex gap-3 text-sm font-medium text-ink-700">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item.label}
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700 shadow-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="Defense talking point"
            description="The prototype can explain exactly why AI helps with evidence summaries but cannot make final hiring decisions."
            tone="amber"
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
