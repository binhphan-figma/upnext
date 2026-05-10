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
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
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
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-500 transition hover:text-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/prototype"
          className="rounded-full bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          View prototype
        </Link>
      </nav>
    </header>
  );
}
