import type { Metadata } from "next";
import Link from "next/link";
import { FileWarning, ShieldAlert } from "lucide-react";
import { SectionHeading, SurfaceCard } from "@/components/prototype-card";
import { PrototypeShell } from "@/components/prototype-shell";
import { adminQueues } from "@/lib/prototype-data";

export const metadata: Metadata = {
  title: "Admin Reports Prototype",
  robots: { index: false, follow: false }
};

export default function AdminReportsPage() {
  return (
    <PrototypeShell
      badge="Trust operations"
      icon={FileWarning}
      title="A moderation queue that protects candidates and platform quality."
      description="Admins need actionable queues for companies, reported jobs, skill taxonomy issues, content quality, and AI safety concerns."
      primaryAction={{ href: "/admin/ai-logs", label: "Audit AI logs" }}
      secondaryAction={{ href: "/admin/skills", label: "Manage skills" }}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <SurfaceCard>
          <SectionHeading eyebrow="Queues" title="Priority moderation work" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {adminQueues.map((queue) => (
              <div
                key={queue.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-ink-900">{queue.label}</h2>
                    <p className="mt-1 text-sm text-ink-500">Owner: {queue.owner}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink-700">
                    {queue.count}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-ink-500">Severity: {queue.severity}</p>
                {queue.label === "Company verification" ? (
                  <Link
                    href="/admin/companies/novatech-labs"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-950"
                  >
                    Review company →
                  </Link>
                ) : null}
                {queue.label === "Reported jobs" ? (
                  <Link
                    href="/admin/reports/compensation-clarity"
                    className="mt-4 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-950"
                  >
                    Open case detail →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </SurfaceCard>

        <SurfaceCard className="bg-slate-950 text-white">
          <ShieldAlert className="h-7 w-7 text-amber-200" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-semibold tracking-tight">Admin principles</h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>• High-risk reports appear before routine taxonomy work.</p>
            <p>• Admin decisions should be logged with reason and timestamp.</p>
            <p>• AI safety concerns must be reviewed separately from normal content reports.</p>
          </div>
        </SurfaceCard>
      </div>
    </PrototypeShell>
  );
}
