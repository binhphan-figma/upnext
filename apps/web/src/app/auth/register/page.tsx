import type { Metadata } from "next";
import { UserPlus } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import {
  EnterpriseCallout,
  SectionHeading,
  SurfaceCard,
  TagList
} from "@/components/prototype-card";

export const metadata: Metadata = {
  title: "Register Prototype",
  robots: { index: false, follow: false }
};

export default function RegisterPrototypePage() {
  return (
    <PrototypeShell
      badge="Account creation"
      icon={UserPlus}
      title="Registration flow that routes users into the right onboarding."
      description="A polished registration experience should ask for only essential information first, then move role-specific setup into onboarding."
      primaryAction={{ href: "/auth/onboarding", label: "View onboarding" }}
      secondaryAction={{ href: "/auth/login", label: "Back to login" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <SurfaceCard>
          <SectionHeading eyebrow="Form prototype" title="Create account" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {["Full name", "Email", "Password", "Confirm password"].map((field) => (
              <label key={field} className="block">
                <span className="text-sm font-semibold text-ink-900">{field}</span>
                <div className="mt-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-500">
                  Enter {field.toLowerCase()}
                </div>
              </label>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-ink-900">Select role</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {["Candidate", "Recruiter", "Admin"].map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-ink-700"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading eyebrow="UX rules" title="Enterprise registration principles" />
          <div className="mt-5 space-y-4">
            <EnterpriseCallout
              title="Reduce friction"
              description="Do not ask for CV, company documents, and detailed preferences before account creation."
              tone="blue"
            />
            <EnterpriseCallout
              title="Protect access"
              description="Admin accounts should not be self-service in production."
              tone="amber"
            />
          </div>
          <div className="mt-5">
            <TagList
              tags={["Validation", "RBAC", "Email verification", "Role redirect"]}
              tone="emerald"
            />
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
