import type { LucideIcon } from "lucide-react";

type BadgeProps = {
  children: React.ReactNode;
  icon: LucideIcon;
};

export function Badge({ children, icon: Icon }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm">
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </div>
  );
}
