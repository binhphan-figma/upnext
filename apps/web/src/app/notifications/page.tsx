import type { Metadata } from "next";
import Link from "next/link";
import { BellRing, CheckCircle2 } from "lucide-react";
import { PrototypeShell } from "@/components/prototype-shell";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { candidateNotifications, notificationPreferences } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Notifications Prototype",
  description:
    "Candidate notification center for interview invites, application status, AI feedback updates, and learning plan reminders.",
  robots: { index: false, follow: false }
};

export default function NotificationsPage() {
  return (
    <PrototypeShell
      badge="Notification center"
      icon={BellRing}
      title="Candidate notifications that make every next step obvious."
      description="A polished prototype needs status visibility: interview invites, application confirmations, learning plan reminders, and privacy-safe AI updates."
      primaryAction={{
        href: "/candidate/applications/frontend-intern-react",
        label: "Open application"
      }}
      secondaryAction={{ href: "/account/settings", label: "Notification settings" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading
            eyebrow="Inbox"
            title="Recent candidate updates"
            description="Each message explains what happened, why it matters, and what the candidate should do next."
          />
          <div className="mt-6 space-y-4">
            {candidateNotifications.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      {item.time}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-ink-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{item.message}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
                    {item.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SurfaceCard>

        <div className="space-y-6">
          <SurfaceCard>
            <SectionHeading eyebrow="Preferences" title="Candidate controls" />
            <div className="mt-5 space-y-3">
              {notificationPreferences.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-ink-600"
                >
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </SurfaceCard>
          <EnterpriseCallout
            title="UX principle"
            description="Notifications should reduce uncertainty without exposing sensitive recruiter-only notes or hidden AI signals."
            tone="blue"
          />
          <Link
            href="/recruiter/interviews/nguyen-minh-anh"
            className="inline-flex w-full justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-brand-700"
          >
            View recruiter invite source
          </Link>
        </div>
      </div>
    </PrototypeShell>
  );
}
