import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";

export function PublicLanding({
  badge,
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  children
}: {
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  primaryAction: { href: string; label: string };
  secondaryAction: { href: string; label: string };
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <section className="enterprise-grid px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge icon={icon}>{badge}</Badge>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-500">{description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={primaryAction.href}
                  className="inline-flex justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                >
                  {primaryAction.label}
                </Link>
                <Link
                  href={secondaryAction.href}
                  className="inline-flex justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:border-brand-100 hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
                >
                  {secondaryAction.label}
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-soft backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
