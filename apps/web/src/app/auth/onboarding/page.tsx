import type { Metadata } from "next";
import { ClipboardCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { onboardingSteps } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Onboarding Prototype",
  robots: { index: false, follow: false }
};

export default function OnboardingPrototypePage() {
  return (
    <PrototypeShell
      badge="Role onboarding"
      icon={ClipboardCheck}
      title="Onboarding that tells every role what to do next."
      description="Enterprise UX reduces confusion after login by giving candidates, recruiters, and admins a clear checklist tied to product value."
      primaryAction={{ href: "/prototype", label: "Open prototype map" }}
      secondaryAction={{ href: "/account/settings", label: "Account settings" }}
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {onboardingSteps.map((flow) => (
          <SurfaceCard key={flow.role}>
            <SectionHeading eyebrow={flow.role} title={flow.title} />
            <div className="mt-6 space-y-4">
              {flow.steps.map((step, index) => (
                <div key={step} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-ink-700">{step}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        ))}
      </div>
    </PrototypeShell>
  );
}
