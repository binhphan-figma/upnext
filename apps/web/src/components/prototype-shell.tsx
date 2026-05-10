import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/badge";
import { PageShell } from "@/components/page-shell";
import { cn } from "@/lib/cn";

type PrototypeShellProps = {
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  primaryAction?: { href: string; label: string };
  secondaryAction?: { href: string; label: string };
  children: React.ReactNode;
};

export function PrototypeShell({
  badge,
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
  children
}: PrototypeShellProps) {
  return (
    <PageShell>
      <section className="enterprise-grid px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Badge icon={icon}>{badge}</Badge>
          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-ink-500">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {secondaryAction ? (
                <PrototypeAction action={secondaryAction} variant="secondary" />
              ) : null}
              {primaryAction ? <PrototypeAction action={primaryAction} variant="primary" /> : null}
            </div>
          </div>
          <div className="mt-8 grid gap-3 rounded-3xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm backdrop-blur md:grid-cols-3">
            {["Responsive prototype", "Human-in-the-loop AI", "Enterprise UX patterns"].map(
              (item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-ink-600">
                  {item}
                </div>
              )
            )}
          </div>
          <div className="mt-10">{children}</div>
        </div>
      </section>
    </PageShell>
  );
}

function PrototypeAction({
  action,
  variant
}: {
  action: { href: string; label: string };
  variant: "primary" | "secondary";
}) {
  return (
    <Link
      href={action.href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600",
        variant === "primary"
          ? "bg-brand-600 text-white shadow-lg shadow-blue-600/20 hover:bg-brand-700"
          : "border border-slate-200 bg-white text-ink-700 shadow-sm hover:border-brand-100 hover:text-brand-700"
      )}
    >
      {action.label}
      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
