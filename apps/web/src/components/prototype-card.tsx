import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export function SurfaceCard({
  children,
  className
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <article
      className={cn("rounded-3xl border border-slate-200 bg-white p-6 shadow-card", className)}
    >
      {children}
    </article>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">{title}</h2>
      {description ? <p className="mt-2 text-sm leading-6 text-ink-500">{description}</p> : null}
    </div>
  );
}

export function EnterpriseMetric({
  label,
  value,
  detail,
  icon: Icon
}: {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}) {
  return (
    <SurfaceCard className="p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-ink-900">{value}</p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink-500">{detail}</p>
    </SurfaceCard>
  );
}

export function ProgressBar({
  value,
  tone = "blue"
}: {
  value: number;
  tone?: "blue" | "emerald" | "amber";
}) {
  const toneClass = {
    blue: "bg-brand-600",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500"
  }[tone];

  return (
    <div className="h-2 rounded-full bg-slate-100">
      <div className={cn("h-2 rounded-full", toneClass)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function TagList({
  tags,
  tone = "blue"
}: {
  tags: string[];
  tone?: "blue" | "slate" | "emerald";
}) {
  const toneClass = {
    blue: "bg-blue-50 text-brand-700",
    slate: "bg-slate-100 text-slate-700",
    emerald: "bg-emerald-50 text-emerald-700"
  }[tone];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className={cn("rounded-full px-3 py-1 text-xs font-semibold", toneClass)}>
          {tag}
        </span>
      ))}
    </div>
  );
}
