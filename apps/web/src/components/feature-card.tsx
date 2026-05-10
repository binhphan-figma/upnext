import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink-500">{description}</p>
    </article>
  );
}
