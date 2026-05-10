import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, ShieldCheck } from "lucide-react";
import { demoUsers } from "@upnext/domain";
import { PrototypeShell } from "@/components/prototype-shell";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { accountSecurityChecklist } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Login Prototype",
  robots: { index: false, follow: false }
};

export default function LoginPrototypePage() {
  return (
    <PrototypeShell
      badge="Secure access"
      icon={LockKeyhole}
      title="Enterprise login prototype for role-aware demo access."
      description="The form is visual-only today, but shows the structure needed for production: validation, secure sessions, demo credentials, and clear role redirects."
      primaryAction={{ href: "/auth/onboarding", label: "Continue onboarding" }}
      secondaryAction={{ href: "/auth/register", label: "Create account" }}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SurfaceCard>
          <SectionHeading eyebrow="Login form" title="Sign in to UpNext" />
          <form className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-ink-900">Email</span>
              <input
                type="email"
                placeholder="candidate@upnext.dev"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink-900">Password</span>
              <input
                type="password"
                placeholder="candidate123"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <button className="w-full rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Sign in demo account
            </button>
          </form>
          <div className="mt-5">
            <EnterpriseCallout
              title="Production requirement"
              description="Replace demo passwords with hashed credentials, rate limiting, secure cookies, and audit logs."
              tone="amber"
            />
          </div>
        </SurfaceCard>

        <SurfaceCard>
          <SectionHeading
            eyebrow="Demo credentials"
            title="Choose a role for prototype review"
            description="Reviewers can quickly understand how UpNext separates candidate, recruiter, and admin access."
          />
          <div className="mt-6 grid gap-4">
            {demoUsers.map((user) => (
              <Link
                key={user.id}
                href={user.dashboardPath}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink-900">{user.email}</p>
                    <p className="mt-1 text-sm capitalize text-ink-500">{user.role}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {user.passwordHint}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {accountSecurityChecklist.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
              >
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                {item}
              </div>
            ))}
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
