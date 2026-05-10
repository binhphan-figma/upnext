import type { Metadata } from "next";
import { adminQualitySignals, demoUsers, getPermissionsForRole } from "@upnext/domain";
import { Activity, FileWarning, Newspaper, ShieldCheck, Tags, UsersRound } from "lucide-react";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { EnterpriseCallout } from "@/components/prototype-card";
import { WorkspaceLinkGrid, type WorkspaceLink } from "@/components/workspace-link-grid";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Monitor UpNext platform quality, reports, content, skills, and AI usage.",
  robots: {
    index: false,
    follow: false
  }
};

const adminQueues = [
  {
    icon: ShieldCheck,
    title: "Company verification",
    description: "Review pending employers before their jobs appear prominently."
  },
  {
    icon: Tags,
    title: "Skill taxonomy",
    description: "Normalize aliases like JS, JavaScript, and ECMAScript for cleaner matching."
  },
  {
    icon: FileWarning,
    title: "Content moderation",
    description: "Review reported jobs, blog posts, and suspicious recruiter behavior."
  },
  {
    icon: Activity,
    title: "AI usage logs",
    description: "Audit prompt versions, provider status, confidence, warnings, and failures."
  }
];

export default function AdminDashboardPage() {
  const adminUser = demoUsers.find((user) => user.role === "admin");
  const adminLinks: WorkspaceLink[] = [
    {
      href: "/admin/users",
      title: "Users",
      description: "Role-aware account and permission governance.",
      icon: UsersRound
    },
    {
      href: "/admin/reports",
      title: "Reports",
      description: "Trust, safety, moderation, and verification queues.",
      icon: FileWarning
    },
    {
      href: "/admin/content",
      title: "Content",
      description: "SEO/GEO editorial operations and quality review.",
      icon: Newspaper
    },
    {
      href: "/admin/ai-logs",
      title: "AI logs",
      description: "Provider, prompt version, confidence, and fallback status.",
      icon: Activity
    }
  ];

  return (
    <PageShell>
      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={ShieldCheck}>Admin quality control</Badge>
          <WorkspaceLinkGrid links={adminLinks} />

          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <h1 className="text-4xl font-semibold tracking-tight text-ink-900">
              Platform operations
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-ink-500">
              The admin dashboard protects data quality, content quality, and AI transparency. This
              starter view defines the operational areas the graduation demo should explain clearly.
            </p>
            {adminUser ? (
              <div className="mt-5">
                <EnterpriseCallout
                  title={`Demo signed in as ${adminUser.email}`}
                  description={`Permissions: ${getPermissionsForRole(adminUser.role).join(", ")}.`}
                  tone="blue"
                />
              </div>
            ) : null}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {adminQualitySignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-3xl font-semibold text-ink-900">{signal.value}</p>
                  <p className="mt-1 text-sm font-medium text-ink-700">{signal.label}</p>
                  <p className="mt-2 text-xs text-ink-500">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {adminQueues.map((queue) => (
              <article
                key={queue.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <queue.icon className="h-6 w-6 text-brand-600" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-semibold tracking-tight text-ink-900">
                  {queue.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink-500">{queue.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
