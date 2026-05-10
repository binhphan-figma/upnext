import type { Metadata } from "next";
import { Settings, ShieldCheck } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";

export const metadata: Metadata = {
  title: "Account Settings Prototype",
  robots: { index: false, follow: false }
};

export default function AccountSettingsPage() {
  return (
    <PrototypeShell
      badge="Account settings"
      icon={Settings}
      title="Settings UI for privacy, security, and AI consent."
      description="For a recruitment platform, account settings must make privacy controls and AI consent easy to understand."
      primaryAction={{ href: "/notifications", label: "View notifications" }}
      secondaryAction={{ href: "/auth/onboarding", label: "Onboarding" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading eyebrow="Preferences" title="Profile and notification settings" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {["Display name", "Primary email", "Preferred role", "Language"].map((field) => (
              <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-ink-900">{field}</p>
                <p className="mt-2 text-sm text-ink-500">Demo setting value</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <TagList
              tags={["Email updates", "Interview reminders", "Job alerts", "AI feedback ready"]}
            />
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <ShieldCheck className="h-7 w-7 text-emerald-700" aria-hidden="true" />
          <SectionHeading eyebrow="Privacy" title="AI consent controls" />
          <div className="mt-5 space-y-4">
            <EnterpriseCallout
              title="CV analysis consent"
              description="Candidate has consented to AI CV feedback for coaching only."
              tone="emerald"
            />
            <EnterpriseCallout
              title="Data minimization"
              description="Sensitive personal data should be removed before AI processing."
              tone="blue"
            />
            <EnterpriseCallout
              title="Account deletion request"
              description="Production should include request/export/delete data workflows."
              tone="slate"
            />
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
