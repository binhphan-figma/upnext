import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { demoUsers } from "@upnext/domain";
import { LockKeyhole, ShieldCheck, UserPlus } from "lucide-react";
import { AuthDemoCard } from "@/components/auth-demo-card";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Auth and RBAC Demo",
  description:
    "Explore UpNext demo accounts, role-based permissions, onboarding tasks, and protected dashboard flows.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AuthPage() {
  return (
    <PageShell>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={LockKeyhole}>Auth/RBAC foundation</Badge>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                Role-aware access for candidates, recruiters, and admins.
              </h1>
              <p className="mt-5 text-base leading-7 text-ink-500">
                This demo slice documents how UpNext separates user roles, permissions, onboarding
                tasks, protected dashboards, and API access. It is intentionally mock-auth today so
                the team can replace it with database-backed sessions cleanly.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <AuthPrinciple
                  icon={ShieldCheck}
                  title="RBAC before features"
                  description="Each dashboard/API action maps to a role permission before real data is exposed."
                />
                <AuthPrinciple
                  icon={UserPlus}
                  title="Clean onboarding"
                  description="Every role has a next-action checklist to reduce confusion after login."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
              <p className="text-sm font-semibold text-blue-200">Demo login request</p>
              <pre className="mt-5 overflow-x-auto rounded-2xl bg-black/40 p-5 text-xs leading-6 text-slate-200">
                {`POST /auth/login
{
  "email": "candidate@upnext.dev",
  "password": "candidate123"
}`}
              </pre>
              <p className="mt-5 text-sm leading-6 text-slate-300">
                The API returns a demo bearer token, user profile, dashboard path, and permission
                list. Production should replace this with hashed passwords, refresh tokens, secure
                cookies, audit logs, and rate limiting.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {demoUsers.map((user) => (
              <AuthDemoCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function AuthPrinciple({
  icon: Icon,
  title,
  description
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
      <h2 className="mt-4 font-semibold text-ink-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-ink-500">{description}</p>
    </article>
  );
}
