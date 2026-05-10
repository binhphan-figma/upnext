import type { Metadata } from "next";
import { BellRing, Inbox } from "lucide-react";
import { EmptyStateCard } from "@/components/empty-state-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { EnterpriseCallout, SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { notifications } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Notifications Prototype",
  robots: { index: false, follow: false }
};

export default function NotificationsPage() {
  return (
    <PrototypeShell
      badge="Notification center"
      icon={BellRing}
      title="Notifications that turn platform events into clear next actions."
      description="Candidates and recruiters need timely, respectful updates without noisy alerts or unclear status changes."
      primaryAction={{
        href: "/candidate/applications/frontend-intern-react",
        label: "Open application"
      }}
      secondaryAction={{ href: "/account/settings", label: "Notification settings" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading eyebrow="Inbox" title="Actionable notifications" />
          <div className="mt-6 space-y-4">
            {notifications.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-ink-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{item.detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-600">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SurfaceCard>

        <div className="grid gap-6">
          <EnterpriseCallout
            title="Enterprise notification rule"
            description="Every notification should explain what happened, why it matters, and what action is available."
            tone="blue"
          />
          <EmptyStateCard
            icon={Inbox}
            title="Empty state preview"
            description="When there are no notifications, guide users toward a productive next step instead of showing a blank dashboard."
            action={{ href: "/jobs", label: "Browse jobs" }}
          />
        </div>
      </div>
    </PrototypeShell>
  );
}
