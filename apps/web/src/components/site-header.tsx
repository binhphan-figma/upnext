import Link from "next/link";

const navigation = [
  { href: "/jobs", label: "Jobs" },
  { href: "/prototype", label: "Prototype" },
  { href: "/companies", label: "Companies" },
  { href: "/blog", label: "Guides" },
  { href: "/candidate", label: "Candidate" },
  { href: "/recruiter", label: "Recruiter" },
  { href: "/admin", label: "Admin" }
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-3 lg:flex-nowrap lg:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-brand-600">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
            UN
          </span>
          <span>
            <span className="block text-sm font-semibold leading-4 text-ink-900">UpNext</span>
            <span className="block text-xs leading-4 text-ink-500">AI recruitment platform</span>
          </span>
        </Link>
        <div className="order-3 flex w-full items-center gap-2 overflow-x-auto rounded-full border border-slate-200 bg-slate-50 p-1 md:order-none md:w-auto md:border-0 md:bg-transparent md:p-0">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-ink-500 transition hover:bg-white hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 md:px-0 md:py-0 md:hover:bg-transparent"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/prototype"
          className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          View prototype
        </Link>
      </nav>
    </header>
  );
}
