import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type WorkspaceLink = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function WorkspaceLinkGrid({ links }: { links: WorkspaceLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-card transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
              <link.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-ink-500 transition group-hover:text-brand-700" />
          </div>
          <h2 className="mt-5 font-semibold text-ink-900">{link.title}</h2>
          <p className="mt-2 text-sm leading-6 text-ink-500">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
